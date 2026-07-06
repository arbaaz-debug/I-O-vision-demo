import { Incident } from './model';
import { CAMERAS } from './reference';
import { buildIncident } from './generator';
import { mulberry32 } from './prng';
import { HeatRow, TrendBin } from './selectors';

/**
 * 30-day "daily basis" dataset for the dashboard's Daily periodicity.
 *
 * A single deterministic incident array spanning the last 30 days (ending at the
 * app's reference "today", 2026-06-03). Every daily widget — KPIs, the by-day
 * severity chart, the day-wise heatmap and the evidence table — derives from this
 * one array, so their numbers always agree. Reuses buildIncident() so each row is
 * shaped identically to the single-day data, and the same per-day volume curve
 * (weekend dip + seeded noise) that the bar chart shows over a month.
 */

export const DAILY_DAYS = 30;
const INCIDENT_SEED = 20260503; // independent of the single-day seed
const FACTOR_SEED = 770451;
const END_DATE = { y: 2026, m: 5, d: 3 }; // m is 0-based (5 = June) — matches incident BASE_DATE
const DAILY_TARGET = 1617; // avg incidents/day — same magnitude as "today"

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function pad(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

/** Day axis: 30 days ending at END_DATE. */
function buildDays(): { keys: string[]; labels: string[]; factors: number[] } {
  const rng = mulberry32(FACTOR_SEED);
  const keys: string[] = [];
  const labels: string[] = [];
  const factors: number[] = [];
  for (let d = 0; d < DAILY_DAYS; d++) {
    const date = new Date(END_DATE.y, END_DATE.m, END_DATE.d - (DAILY_DAYS - 1 - d));
    keys.push(`${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`);
    labels.push(`${pad(date.getDate())} ${MONTHS[date.getMonth()]}`);
    const dow = date.getDay(); // 0 Sun .. 6 Sat
    const weekend = dow === 0 || dow === 6 ? 0.55 : 1; // weekend dip
    const noise = 0.78 + rng() * 0.44; // 0.78 .. 1.22
    factors.push(weekend * noise);
  }
  return { keys, labels, factors };
}

const DAYS = buildDays();
export const DAILY_DAY_KEYS = DAYS.keys;
export const DAILY_DAY_LABELS = DAYS.labels;

let _incidents: Incident[] | null = null;
/** The full 30-day incident array (generated once, memoized). */
export function generateDailyIncidents(): Incident[] {
  if (_incidents) return _incidents;
  const rng = mulberry32(INCIDENT_SEED);
  const out: Incident[] = [];
  let id = 1;
  for (let d = 0; d < DAILY_DAYS; d++) {
    const count = Math.round(DAILY_TARGET * DAYS.factors[d]);
    for (let k = 0; k < count; k++) out.push(buildIncident(id++, DAILY_DAY_KEYS[d], rng));
  }
  _incidents = out;
  return out;
}

const DAY_INDEX = new Map(DAILY_DAY_KEYS.map((k, i) => [k, i]));
function dayKey(iso: string): string {
  return iso.slice(0, 10);
}

/** Camera × day heatmap rows (sorted by total desc), aligned to DAILY_DAY_KEYS. */
export function dayHeatmap(list: readonly Incident[]): HeatRow[] {
  const map = new Map<string, number[]>();
  for (const c of CAMERAS) map.set(c.id, new Array<number>(DAILY_DAYS).fill(0));
  for (const i of list) {
    const di = DAY_INDEX.get(dayKey(i.timestamp));
    if (di === undefined) continue;
    map.get(i.cameraId)![di]++;
  }
  return CAMERAS.map((c) => ({ id: c.id, name: c.name, cells: map.get(c.id)! })).sort(
    (a, b) => sum(b.cells) - sum(a.cells),
  );
}

/** Stacked severity counts per day, aligned to DAILY_DAY_KEYS. */
export function severityByDay(list: readonly Incident[]): TrendBin[] {
  const bins: TrendBin[] = DAILY_DAY_LABELS.map((label) => ({ label, High: 0, Medium: 0, Low: 0 }));
  for (const i of list) {
    const di = DAY_INDEX.get(dayKey(i.timestamp));
    if (di === undefined) continue;
    bins[di][i.severity]++;
  }
  return bins;
}

/** Busiest day in the list. */
export function peakDay(list: readonly Incident[]): { label: string; count: number } | null {
  const counts = new Array<number>(DAILY_DAYS).fill(0);
  for (const i of list) {
    const di = DAY_INDEX.get(dayKey(i.timestamp));
    if (di !== undefined) counts[di]++;
  }
  let best = -1;
  let bestCount = -1;
  counts.forEach((c, i) => {
    if (c > bestCount) {
      bestCount = c;
      best = i;
    }
  });
  return best < 0 || bestCount <= 0 ? null : { label: DAILY_DAY_LABELS[best], count: bestCount };
}

function sum(a: number[]): number {
  return a.reduce((s, n) => s + n, 0);
}
