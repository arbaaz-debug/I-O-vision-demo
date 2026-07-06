import { Severity } from '../components/single-camera-view/single-camera-view.types';
import { UseCaseId, USE_CASES } from '../core/tokens';
import { CAMERA_BY_ID, CAMERAS } from './reference';
import { Incident, Kpis } from './model';

export interface UseCaseRow { id: UseCaseId | string; name: string; color: string; count: number; pct: number; }
/** A stacked-severity time bucket (one hour or one day) with its x-axis label. */
export interface TrendBin { label: string; High: number; Medium: number; Low: number; }
export interface LeaderRow { id: string; name: string; count: number; }
export interface HeatRow { id: string; name: string; cells: number[]; }
export interface PageResult { rows: Incident[]; page: number; pageCount: number; total: number; }

export function filterIncidents(
  all: readonly Incident[],
  f: { useCase: UseCaseId | 'all'; severity: Severity | 'all' },
): Incident[] {
  return all.filter(
    (i) =>
      (f.useCase === 'all' || i.useCaseId === f.useCase) &&
      (f.severity === 'all' || i.severity === f.severity),
  );
}

export function computeKpis(list: readonly Incident[]): Kpis {
  const byCamera = new Map<string, number>();
  const byHour = new Array<number>(24).fill(0);
  let open = 0;
  for (const i of list) {
    byCamera.set(i.cameraId, (byCamera.get(i.cameraId) ?? 0) + 1);
    byHour[new Date(i.timestamp).getHours()]++;
    if (!i.resolved) open++;
  }
  let worstCamera: Kpis['worstCamera'] = null;
  for (const [id, count] of byCamera) {
    if (!worstCamera || count > worstCamera.count) worstCamera = { name: CAMERA_BY_ID[id].name, count };
  }
  let peakHour: Kpis['peakHour'] = null;
  byHour.forEach((count, hour) => {
    if (!peakHour || count > peakHour.count) peakHour = { hour, count };
  });
  return { total: list.length, open, worstCamera, peakHour };
}

export function useCaseBreakdown(list: readonly Incident[]): UseCaseRow[] {
  const counts = new Map<UseCaseId, number>();
  for (const i of list) counts.set(i.useCaseId, (counts.get(i.useCaseId) ?? 0) + 1);
  const total = list.length || 1;
  return USE_CASES.map((uc) => {
    const count = counts.get(uc.id) ?? 0;
    return { id: uc.id, name: uc.name, color: uc.color, count, pct: (count / total) * 100 };
  })
    .filter((r) => r.count > 0)
    .sort((a, b) => b.count - a.count);
}

export function severityTrendHourly(list: readonly Incident[]): TrendBin[] {
  const bins: TrendBin[] = Array.from({ length: 24 }, (_, hour) => ({
    label: `${hour < 10 ? '0' : ''}${hour}:00`,
    High: 0,
    Medium: 0,
    Low: 0,
  }));
  for (const i of list) bins[new Date(i.timestamp).getHours()][i.severity]++;
  return bins;
}

export function cameraLeaderboard(
  list: readonly Incident[],
  order: 'high' | 'low',
  limit: number,
): LeaderRow[] {
  const counts = new Map<string, number>();
  for (const c of CAMERAS) counts.set(c.id, 0);
  for (const i of list) counts.set(i.cameraId, (counts.get(i.cameraId) ?? 0) + 1);
  const rows = [...counts.entries()].map(([id, count]) => ({ id, name: CAMERA_BY_ID[id].name, count }));
  rows.sort((a, b) => (order === 'high' ? b.count - a.count : a.count - b.count));
  return rows.slice(0, limit);
}

export function cameraHourHeatmap(list: readonly Incident[]): HeatRow[] {
  const map = new Map<string, number[]>();
  for (const c of CAMERAS) map.set(c.id, new Array<number>(24).fill(0));
  for (const i of list) map.get(i.cameraId)![new Date(i.timestamp).getHours()]++;
  return CAMERAS.map((c) => ({ id: c.id, name: c.name, cells: map.get(c.id)! }))
    .sort((a, b) => sum(b.cells) - sum(a.cells));
}

function sum(a: number[]): number {
  return a.reduce((s, n) => s + n, 0);
}

export function paginate(list: readonly Incident[], page: number, pageSize: number): PageResult {
  const total = list.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const clamped = Math.min(Math.max(1, page), pageCount);
  const start = (clamped - 1) * pageSize;
  return { rows: list.slice(start, start + pageSize), page: clamped, pageCount, total };
}
