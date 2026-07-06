import { useEffect, useMemo, useState } from 'react';
import { Pill } from '../ui/Pill';
import { SceneThumb } from '../ui/SceneThumb';
import { Icon } from '../ui/Icon';
import { EvidenceViewer } from './EvidenceViewer';
import { CameraFeedModal } from './CameraFeedModal';
import { USE_CASES, USE_CASE_BY_ID, UseCaseId } from '../core/tokens';
import { Camera, DurationKey, Incident } from '../data/model';
import { CAMERA_BY_ID } from '../data/reference';
import { generateIncidents, TODAY_SEED, TODAY_COUNT } from '../data/generator';
import { generateDailyIncidents, dayHeatmap, severityByDay, peakDay, DAILY_DAY_LABELS } from '../data/daily';
import { useCaseCameras } from '../data/usecase-data';
import {
  cameraHourHeatmap, computeKpis, filterIncidents, paginate,
  severityTrendHourly, useCaseBreakdown,
} from '../data/selectors';

const PAGE_SIZE = 30;
const PEAK = (h: number) => `${h < 10 ? '0' : ''}${h}:00`;
const HOURS = Array.from({ length: 24 }, (_, i) => i);
const DURATION_SCALE: Record<DurationKey, number> = { today: 1, yesterday: 0.78, last7: 5.4 };
const DURATIONS: { key: DurationKey; label: string }[] = [
  { key: 'today', label: 'Today' }, { key: 'yesterday', label: 'Yesterday' }, { key: 'last7', label: 'Last 7 days' },
];

export function Dashboard({
  initialUseCase = 'all',
  initialCamera = null,
  focusList = false,
}: {
  initialUseCase?: UseCaseId | 'all';
  initialCamera?: string | null;
  focusList?: boolean;
}) {
  const all = useMemo(() => generateIncidents(TODAY_SEED, TODAY_COUNT), []);
  const allDaily = useMemo(() => generateDailyIncidents(), []);

  const [useCase, setUseCase] = useState<UseCaseId | 'all'>(initialUseCase);
  const [duration, setDuration] = useState<DurationKey>('today');
  const [periodicity, setPeriodicity] = useState<'hourly' | 'daily'>('hourly');
  const [cameraFilter, setCameraFilter] = useState<string | null>(initialCamera);
  const [page, setPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(false);
  const [showIdle, setShowIdle] = useState(false);
  const [viewer, setViewer] = useState<{ entries: Incident[]; index: number; tab: 'photo' | 'video' } | null>(null);
  const [stream, setStream] = useState<{ cameras: Camera[]; useCaseId: UseCaseId; index: number } | null>(null);

  const cameraFilterName = cameraFilter ? CAMERA_BY_ID[cameraFilter]?.name ?? '' : '';

  // deep-link scroll on mount
  useEffect(() => {
    if (focusList) {
      const t = setTimeout(() => document.getElementById('non-compliance-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      return () => clearTimeout(t);
    }
  }, [focusList]);

  // reset table page when the filter set changes
  useEffect(() => { setPage(1); }, [useCase, duration, periodicity, cameraFilter]);

  const baseSource = useMemo<Incident[]>(() => {
    if (periodicity === 'daily') return allDaily;
    const scale = DURATION_SCALE[duration];
    if (scale === 1) return all;
    if (scale < 1) return all.slice(0, Math.round(all.length * scale));
    const reps = Math.ceil(scale);
    const out: Incident[] = [];
    for (let r = 0; r < reps; r++) for (const i of all) out.push({ ...i, id: i.id + r * all.length });
    return out.slice(0, Math.round(all.length * scale));
  }, [periodicity, duration, all, allDaily]);

  const filtered = useMemo(() => filterIncidents(baseSource, { useCase, severity: 'all' }), [baseSource, useCase]);
  const kpis = useMemo(() => computeKpis(filtered), [filtered]);
  useMemo(() => useCaseBreakdown(filtered)[0] ?? null, [filtered]); // parity (unused display)
  const peak = useMemo(
    () => (periodicity === 'daily' ? peakDay(filtered) : (kpis.peakHour ? { label: PEAK(kpis.peakHour.hour), count: kpis.peakHour.count } : null)),
    [filtered, periodicity, kpis],
  );

  const matrix = useMemo(() => {
    let rows, bins, labels: string[];
    if (periodicity === 'daily') {
      const list = filterIncidents(allDaily, { useCase, severity: 'all' });
      rows = dayHeatmap(list); bins = severityByDay(list);
      labels = DAILY_DAY_LABELS.map((l, i) => (i % 5 === 0 ? l : ''));
    } else {
      rows = cameraHourHeatmap(filtered); bins = severityTrendHourly(filtered);
      labels = HOURS.map((h) => (h % 3 === 0 ? (h < 10 ? '0' + h : '' + h) : ''));
    }
    const mat = rows.map((r) => ({ name: r.name, cells: r.cells, total: r.cells.reduce((a, b) => a + b, 0) }));
    const matActive = mat.filter((r) => r.total > 0);
    const matIdle = mat.filter((r) => r.total === 0).map((r) => r.name);
    const matColTotals = bins.map((b) => b.High + b.Medium + b.Low);
    const matMaxCol = Math.max(1, ...matColTotals);
    const matMaxCell = Math.max(1, ...matActive.flatMap((r) => r.cells));
    const matGrand = matColTotals.reduce((s, t) => s + t, 0);
    const matCols = matColTotals.length;
    return { matActive, matIdle, matColTotals, matMaxCol, matMaxCell, matGrand, matCols, matColsArr: Array.from({ length: matCols }), matLabels: labels };
  }, [filtered, periodicity, allDaily, useCase]);

  useEffect(() => { setShowIdle(false); }, [matrix]);

  const tableSorted = useMemo(() => {
    const rows = cameraFilter ? filtered.filter((i) => i.cameraId === cameraFilter) : [...filtered];
    rows.sort((a, b) => (sortAsc ? a.timestamp.localeCompare(b.timestamp) : b.timestamp.localeCompare(a.timestamp)));
    return rows;
  }, [filtered, cameraFilter, sortAsc]);

  const res = paginate(tableSorted, page, PAGE_SIZE);
  const tableRows = res.rows, pageCount = res.pageCount, tableTotal = res.total, curPage = res.page;

  // ---- KPI derived ----
  const total = kpis.total;
  const openShown = Math.round(total * 0.146);
  const reviewedClosed = total - openShown;
  const observations = Math.max(total, Math.round(total * 16.2));
  const complianceRate = observations ? ((observations - total) / observations) * 100 : 100;
  const complianceUp = complianceRate >= 92.4;
  const complianceDelta = Math.abs(complianceRate - 92.4).toFixed(1);
  const complianceSub = `${(observations - total).toLocaleString()} of ${observations.toLocaleString()} observations compliant`;
  const peakWindow = periodicity === 'daily'
    ? (peak?.label ?? '—')
    : (kpis.peakHour == null ? '—' : `${String(kpis.peakHour.hour).padStart(2, '0')}:00–${String((kpis.peakHour.hour + 1) % 24).padStart(2, '0')}:00`);
  const peakCount = peak?.count ?? 0;
  const peakAvg = total / (periodicity === 'daily' ? 30 : 24);
  const peakSub2 = `${peakCount.toLocaleString()} violations · ${(peakAvg ? peakCount / peakAvg : 0).toFixed(1)}× the ${periodicity === 'daily' ? 'daily' : 'hourly'} average`;
  const topZoneName = kpis.worstCamera?.name ?? '—';
  const topZoneSub = kpis.worstCamera
    ? `${kpis.worstCamera.count} violations · ${((kpis.worstCamera.count / (total || 1)) * 100).toFixed(0)}% of all events`
    : 'No data';
  const rangeLabel = `${tableTotal === 0 ? 0 : (curPage - 1) * PAGE_SIZE + 1} – ${Math.min(curPage * PAGE_SIZE, tableTotal)} of ${tableTotal}`;

  // ---- matrix helpers ----
  const barH = (v: number) => (v / matrix.matMaxCol) * 44;
  const bucket = (v: number): string => {
    if (v <= 0) return 'zero';
    const r = v / matrix.matMaxCell;
    if (r <= 0.16) return 'b1'; if (r <= 0.33) return 'b2'; if (r <= 0.5) return 'b3';
    if (r <= 0.68) return 'b4'; if (r <= 0.85) return 'b5'; return 'b6';
  };
  const showN = (v: number) => v > 0 && v / matrix.matMaxCell > 0.5;
  const matGridCols = `152px repeat(${matrix.matCols}, minmax(22px,1fr)) 56px`;
  const matMinWidth = 152 + 56 + matrix.matCols * 26;

  // ---- helpers ----
  const num = (n: number) => n.toLocaleString('en-US');
  const fmtTime = (iso: string) => {
    const d = new Date(iso);
    const date = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    return `${date} @ ${time.toLowerCase()}`;
  };

  const openMedia = (inc: Incident, tab: 'photo' | 'video') => {
    const idx = Math.max(0, tableSorted.findIndex((i) => i.id === inc.id));
    setViewer({ entries: tableSorted, index: idx, tab });
  };
  const onViewOnStream = (inc: Incident) => {
    const cams = useCaseCameras(inc.useCaseId).map((c) => c.camera);
    let idx = cams.findIndex((c) => c.id === inc.cameraId);
    if (idx < 0) { cams.unshift(CAMERA_BY_ID[inc.cameraId]); idx = 0; }
    setViewer(null);
    setStream({ cameras: cams, useCaseId: inc.useCaseId, index: idx });
  };
  const onStreamViewViolations = (cameraId: string) => {
    setStream(null);
    setCameraFilter(cameraId);
    setTimeout(() => document.getElementById('non-compliance-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  };
  const openCameraAnalysis = () => {
    if (filtered.length === 0) return;
    const counts = new Map<string, number>();
    for (const i of filtered) counts.set(i.cameraId, (counts.get(i.cameraId) ?? 0) + 1);
    let topCam = filtered[0].cameraId; let top = 0;
    for (const [cam, c] of counts) if (c > top) { top = c; topCam = cam; }
    const uc = useCase === 'all' ? filtered[0].useCaseId : useCase;
    const cams = useCaseCameras(uc).map((c) => c.camera);
    let idx = cams.findIndex((c) => c.id === topCam);
    if (idx < 0) { cams.unshift(CAMERA_BY_ID[topCam]); idx = 0; }
    setStream({ cameras: cams, useCaseId: uc, index: idx });
  };

  return (
    <div className="dash bg-[#eef2f7] px-6 py-6">
      <div className="mx-auto max-w-[1400px]">

        {/* Controls */}
        <div id="dash-top" className="sticky top-0 z-20 mb-5 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-[14px] border border-[#e6ebf2] bg-white px-4 py-3 shadow-[0_1px_2px_rgba(15,23,42,.05)]">
          <div className="flex items-center gap-2.5">
            <span className="text-[12.5px] font-semibold text-[#94a3b8]">Use case</span>
            <select className="min-w-[200px] rounded-[9px] border border-[#d8e0ea] bg-white px-3 py-2 text-[13.5px] font-semibold text-[#0f172a]" value={useCase} onChange={(e) => setUseCase(e.target.value as UseCaseId | 'all')}>
              <option value="all">All use cases</option>
              {USE_CASES.map((uc) => <option key={uc.id} value={uc.id}>{uc.name}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-[12.5px] font-semibold text-[#94a3b8]">Period</span>
            <div className="inline-flex gap-0.5 rounded-[9px] border border-[#e6ebf2] bg-[#f1f5f9] p-[3px]">
              {DURATIONS.map((d) => (
                <button key={d.key} type="button" className={`rounded-[7px] px-3.5 py-1.5 text-[13px] font-semibold transition ${duration === d.key ? 'bg-[#0f172a] text-white shadow-sm' : 'text-[#475569]'}`} onClick={() => setDuration(d.key)}>{d.label}</button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-[12.5px] font-semibold text-[#94a3b8]">Granularity</span>
            <div className="inline-flex gap-0.5 rounded-[9px] border border-[#e6ebf2] bg-[#f1f5f9] p-[3px]">
              <button type="button" className={`rounded-[7px] px-3.5 py-1.5 text-[13px] font-semibold transition ${periodicity === 'hourly' ? 'bg-[#0f172a] text-white shadow-sm' : 'text-[#475569]'}`} onClick={() => setPeriodicity('hourly')}>Hourly</button>
              <button type="button" className={`rounded-[7px] px-3.5 py-1.5 text-[13px] font-semibold transition ${periodicity === 'daily' ? 'bg-[#0f172a] text-white shadow-sm' : 'text-[#475569]'}`} onClick={() => setPeriodicity('daily')}>Daily</button>
            </div>
          </div>
          <button type="button" className="ml-auto inline-flex items-center gap-2 rounded-[9px] bg-[#0f172a] px-4 py-2.5 text-[13.5px] font-bold text-white disabled:opacity-40" disabled={filtered.length === 0} onClick={openCameraAnalysis}>
            <Icon name="camera" size={16} /> Camera Analysis
          </button>
        </div>

        {/* At a glance */}
        <div className="mb-2.5 ml-0.5 text-[11px] font-extrabold uppercase tracking-[0.09em] text-[#94a3b8]">At a glance</div>
        <div className="mb-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="relative overflow-hidden rounded-[14px] border border-[#e6ebf2] bg-white p-[18px] shadow-[0_1px_2px_rgba(15,23,42,.05)]">
            <span className="absolute inset-y-0 left-0 w-1 rounded-l bg-[#16a34a]" />
            <div className="flex items-start justify-between">
              <span className="text-[12.5px] font-bold text-[#475569]">Compliance rate</span>
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#dcfce7] text-[#16a34a]"><Icon name="shield" size={18} /></span>
            </div>
            <div className="mt-2.5 text-[30px] font-extrabold leading-none tracking-tight tabular-nums">{complianceRate.toFixed(1)}%</div>
            <div className="mt-1 text-[12.5px] tabular-nums text-[#94a3b8]">{complianceSub}</div>
            <div className={`mt-2.5 inline-flex items-center gap-1 text-[12.5px] font-bold ${complianceUp ? 'text-[#16a34a]' : 'text-[#dc2626]'}`}>{complianceUp ? '▲' : '▼'} {complianceDelta} pts vs yesterday</div>
          </div>
          <div className="relative overflow-hidden rounded-[14px] border border-[#e6ebf2] bg-white p-[18px] shadow-[0_1px_2px_rgba(15,23,42,.05)]">
            <span className="absolute inset-y-0 left-0 w-1 rounded-l bg-[#dc2626]" />
            <div className="flex items-start justify-between">
              <span className="text-[12.5px] font-bold text-[#475569]">Open violations</span>
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#fee2e2] text-[#dc2626]"><Icon name="triangleAlert" size={18} /></span>
            </div>
            <div className="mt-2.5 text-[30px] font-extrabold leading-none tracking-tight tabular-nums">{num(openShown)}</div>
            <div className="mt-1 text-[12.5px] tabular-nums text-[#94a3b8]">of {num(total)} today · {num(reviewedClosed)} reviewed &amp; closed</div>
            <span className="mt-2.5 inline-block rounded-full bg-[#fee2e2] px-2 py-0.5 text-[11px] font-bold tabular-nums text-[#dc2626]">{num(openShown)} awaiting review</span>
          </div>
          <div className="relative overflow-hidden rounded-[14px] border border-[#e6ebf2] bg-white p-[18px] shadow-[0_1px_2px_rgba(15,23,42,.05)]">
            <span className="absolute inset-y-0 left-0 w-1 rounded-l bg-[#3b82f6]" />
            <div className="flex items-start justify-between">
              <span className="text-[12.5px] font-bold text-[#475569]">Peak risk window</span>
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#dbeafe] text-[#2563eb]"><Icon name="clock" size={18} /></span>
            </div>
            <div className="mt-2.5 text-[24px] font-extrabold leading-none tracking-tight tabular-nums">{peakWindow}</div>
            <div className="mt-1 text-[12.5px] tabular-nums text-[#94a3b8]">{peakSub2}</div>
            <div className="mt-2.5 text-[12.5px] font-semibold text-[#475569]">Highest exposure of the {periodicity === 'daily' ? 'period' : 'day'}</div>
          </div>
          <div className="relative overflow-hidden rounded-[14px] border border-[#e6ebf2] bg-white p-[18px] shadow-[0_1px_2px_rgba(15,23,42,.05)]">
            <span className="absolute inset-y-0 left-0 w-1 rounded-l bg-[#f59e0b]" />
            <div className="flex items-start justify-between">
              <span className="text-[12.5px] font-bold text-[#475569]">Top offending zone</span>
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#fef3c7] text-[#b45309]"><Icon name="pin" size={18} /></span>
            </div>
            <div className="mt-2.5 truncate text-[22px] font-extrabold leading-tight tracking-tight">{topZoneName}</div>
            <div className="mt-1 text-[12.5px] tabular-nums text-[#94a3b8]">{topZoneSub}</div>
          </div>
        </div>

        {/* Where & when */}
        <div className="mb-2.5 ml-0.5 text-[11px] font-extrabold uppercase tracking-[0.09em] text-[#94a3b8]">Where &amp; when</div>
        <div className="mb-7 rounded-[14px] border border-[#e6ebf2] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.05)]">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[16px] font-extrabold tracking-tight text-[#0f172a]"><Icon name="grid" size={16} /> Violation density — camera × {periodicity === 'daily' ? 'day' : 'hour'}</div>
              <div className="mt-0.5 text-[12.5px] text-[#94a3b8]">Bar height is total violations that {periodicity === 'daily' ? 'day' : 'hour'}; the grid shows which camera is driving it.</div>
            </div>
          </div>

          <div className="matrix-scroll">
            <div className="matrix" style={{ gridTemplateColumns: matGridCols, minWidth: matMinWidth }}>
              <div />
              {matrix.matColTotals.map((t, i) => (
                <div key={`c${i}`} className="sevcell" title={`${t} violations`}><span style={{ height: barH(t), background: '#94a3b8' }} /></div>
              ))}
              <div className="m-total-head">{num(matrix.matGrand)}</div>

              <div />
              {matrix.matLabels.map((l, i) => <div key={`l${i}`} className="hour-axis">{l}</div>)}
              <div className="hour-axis" style={{ justifyContent: 'center', fontWeight: 800 }}>Σ</div>

              {matrix.matActive.map((r, i) => (
                <div key={`r${i}`} style={{ display: 'contents' }}>
                  <div className="cam-label">{r.name}<small>{i === 0 ? 'top offender' : 'active'}</small></div>
                  {r.cells.map((v, h) => <div key={h} className={`cell ${bucket(v)}`}>{showN(v) && <span className="cell-v">{v}</span>}</div>)}
                  <div className="rowtot">{r.total}</div>
                </div>
              ))}

              {showIdle && matrix.matIdle.map((name, i) => (
                <div key={`i${i}`} style={{ display: 'contents' }}>
                  <div className="cam-label idle">{name}<small>no events</small></div>
                  {matrix.matColsArr.map((_, k) => <div key={k} className="cell zero" />)}
                  <div className="rowtot idle">0</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="text-[12px] font-semibold text-[#94a3b8]">Bar height = violations per {periodicity === 'daily' ? 'day' : 'hour'}</div>
            {matrix.matIdle.length > 0 && (
              <button type="button" className="text-[12.5px] font-bold text-[#2563eb]" onClick={() => setShowIdle((s) => !s)}>
                {showIdle ? 'Hide idle cameras ⌃' : `Show all cameras (${matrix.matIdle.length} idle) ⌄`}
              </button>
            )}
            <div className="flex items-center gap-2 text-[11.5px] font-semibold text-[#94a3b8]">
              Fewer
              <span className="flex gap-[3px]">
                <span className="h-3 w-5 rounded-sm" style={{ background: 'var(--h1)' }} />
                <span className="h-3 w-5 rounded-sm" style={{ background: 'var(--h2)' }} />
                <span className="h-3 w-5 rounded-sm" style={{ background: 'var(--h3)' }} />
                <span className="h-3 w-5 rounded-sm" style={{ background: 'var(--h4)' }} />
                <span className="h-3 w-5 rounded-sm" style={{ background: 'var(--h5)' }} />
                <span className="h-3 w-5 rounded-sm" style={{ background: 'var(--h6)' }} />
              </span>
              More
            </div>
          </div>
        </div>

        {/* Evidence log */}
        <div className="mb-2.5 ml-0.5 text-[11px] font-extrabold uppercase tracking-[0.09em] text-[#94a3b8]">Proof</div>
        <div id="non-compliance-list" className="scroll-mt-24 rounded-[14px] border border-[#e6ebf2] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.05)]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[16px] font-extrabold tracking-tight text-[#0f172a]"><Icon name="camera" size={16} /> Evidence log</div>
            {cameraFilter && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef2ff] px-2.5 py-1 text-[12px] font-medium text-[#3730a3]">
                Camera: {cameraFilterName}
                <button type="button" className="text-[#6366f1] hover:text-[#3730a3]" onClick={() => setCameraFilter(null)} aria-label="Clear camera filter">✕</button>
              </span>
            )}
          </div>

          <div className="mt-3 flex items-center gap-3">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]"><Icon name="search" size={16} /></span>
              <input className="w-full rounded-[9px] border border-[#d8e0ea] bg-[#f8fafc] py-2 pl-9 pr-3 text-[13px] text-[#0f172a] placeholder:text-[#94a3b8]" placeholder="Search evidence by camera name" value={cameraFilterName} readOnly />
            </div>
            <button type="button" className="inline-flex items-center gap-2 rounded-[9px] border border-[#d8e0ea] bg-white px-4 py-2 text-[13px] font-semibold text-[#0f172a]"><Icon name="download" size={15} /> Export</button>
          </div>

          {tableTotal === 0 && <div className="py-10 text-center text-[13px] text-[#64748b]">No evidence matching this filter</div>}

          {tableTotal > 0 && (
            <table className="mt-3 w-full text-left">
              <thead className="border-b border-[#e6ebf2] text-[12px] text-[#94a3b8]">
                <tr>
                  <th className="py-2 pr-2 font-semibold">Sr No</th>
                  <th className="py-2 pr-2 font-semibold">Camera Name</th>
                  <th className="py-2 pr-2 font-semibold">Use Case</th>
                  <th className="py-2 pr-2 font-semibold">Message</th>
                  <th className="cursor-pointer select-none py-2 pr-2 font-semibold" onClick={() => setSortAsc((s) => !s)}>Time {sortAsc ? '↑' : '↓'}</th>
                  <th className="py-2 pr-2 font-semibold">Image</th>
                  <th className="py-2 pr-2 font-semibold">Video</th>
                </tr>
              </thead>
              <tbody className="text-[13px] text-[#0f172a]">
                {tableRows.map((inc, idx) => (
                  <tr key={inc.id} className="border-b border-[#f1f5f9] hover:bg-[#f8fafc]">
                    <td className="py-2 pr-2 tabular-nums text-[#64748b]">{(curPage - 1) * PAGE_SIZE + idx + 1}</td>
                    <td className="py-2 pr-2 font-medium">{CAMERA_BY_ID[inc.cameraId].name}</td>
                    <td className="py-2 pr-2"><Pill label={USE_CASE_BY_ID[inc.useCaseId].name} color={USE_CASE_BY_ID[inc.useCaseId].color} /></td>
                    <td className="py-2 pr-2 text-[#475569]">{inc.message}</td>
                    <td className="py-2 pr-2 whitespace-nowrap text-[#475569]">{fmtTime(inc.timestamp)}</td>
                    <td className="py-2 pr-2">
                      <button type="button" className="block overflow-hidden rounded-md ring-1 ring-transparent transition hover:ring-2 hover:ring-[#3b82f6]" onClick={() => openMedia(inc, 'photo')} title="View photo evidence">
                        <SceneThumb scene={CAMERA_BY_ID[inc.cameraId].scene} bbox={inc.bbox} color={USE_CASE_BY_ID[inc.useCaseId].color} width={72} height={54} />
                      </button>
                    </td>
                    <td className="py-2 pr-2">
                      <button type="button" className="block overflow-hidden rounded-md ring-1 ring-transparent transition hover:ring-2 hover:ring-[#3b82f6]" onClick={() => openMedia(inc, 'video')} title="View video evidence">
                        <SceneThumb scene={CAMERA_BY_ID[inc.cameraId].scene} bbox={inc.bbox} color={USE_CASE_BY_ID[inc.useCaseId].color} showPlay width={72} height={54} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {tableTotal > 0 && (
            <div className="mt-3 flex items-center justify-end gap-4 text-[12px] text-[#64748b]">
              <span>Items per page: {PAGE_SIZE}</span>
              <span>{rangeLabel}</span>
              <div className="flex items-center gap-1">
                <button type="button" className="rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40" disabled={curPage === 1} onClick={() => setPage(1)}>«</button>
                <button type="button" className="rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40" disabled={curPage === 1} onClick={() => setPage(curPage - 1)}>‹</button>
                <span className="tabular-nums">{curPage} / {pageCount}</span>
                <button type="button" className="rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40" disabled={curPage === pageCount} onClick={() => setPage(curPage + 1)}>›</button>
                <button type="button" className="rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40" disabled={curPage === pageCount} onClick={() => setPage(pageCount)}>»</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {viewer && (
        <EvidenceViewer entries={viewer.entries} index={viewer.index} tab={viewer.tab} onClose={() => setViewer(null)} onViewOnStream={onViewOnStream} />
      )}
      {stream && (
        <CameraFeedModal cameras={stream.cameras} useCaseId={stream.useCaseId} index={stream.index} onClose={() => setStream(null)} onViewViolations={onStreamViewViolations} />
      )}
    </div>
  );
}
