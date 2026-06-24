import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiCardComponent } from '../ui/kpi-card.component';
import { SeverityTrendComponent } from '../charts/severity-trend.component';
import { CameraHeatmapComponent } from '../charts/camera-heatmap.component';
import { PillComponent } from '../ui/pill.component';
import { SceneThumbComponent } from '../ui/scene-thumb.component';
import { IconComponent } from '../ui/icon.component';
import { USE_CASES, USE_CASE_BY_ID, UseCaseId, SEVERITY_COLOR } from '../core/tokens';
import { Severity } from '../components/single-camera-view/single-camera-view.types';
import { DurationKey, Incident } from '../data/model';
import { CAMERA_BY_ID } from '../data/reference';
import { generateIncidents, TODAY_SEED, TODAY_COUNT } from '../data/generator';
import {
  generateDailyIncidents,
  dayHeatmap,
  severityByDay,
  peakDay,
  DAILY_DAY_LABELS,
} from '../data/daily';
import {
  cameraHourHeatmap,
  cameraLeaderboard,
  computeKpis,
  filterIncidents,
  paginate,
  severityTrendHourly,
  useCaseBreakdown,
  HeatRow,
  TrendBin,
  LeaderRow,
  UseCaseRow,
} from '../data/selectors';

const PAGE_SIZE = 30;
const PEAK = (h: number) => `${h < 10 ? '0' : ''}${h}:00`;
const HOURS = Array.from({ length: 24 }, (_, i) => i);

/** Hardcoded comparison constant (spec §Aggregate constants). */
const COMPARE = { yesterday: 1263 };
/** Duration multipliers so toggling visibly shifts the numbers (yesterday/last7 are mock-scaled). */
const DURATION_SCALE: Record<DurationKey, number> = { today: 1, yesterday: 0.78, last7: 5.4 };

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, KpiCardComponent, SeverityTrendComponent,
    CameraHeatmapComponent, PillComponent, SceneThumbComponent, IconComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="px-6 py-5">
    <!-- ===== Filter bar (sticky) ===== -->
    <div class="sticky top-0 z-20 mb-4 flex flex-wrap items-center gap-3 rounded-[12px] border border-[#E5E7EB] bg-white px-4 py-3 shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
      <label class="text-[13px] font-medium text-[#64748B]">Use Case</label>
      <select
        class="rounded-md border border-[#E5E7EB] bg-white px-3 py-1.5 text-[13px] text-[#0F172A]"
        (change)="onUseCase($any($event.target).value)"
      >
        <option value="all" [selected]="useCase === 'all'">All Use Cases</option>
        <option *ngFor="let uc of useCases" [value]="uc.id" [selected]="useCase === uc.id">{{ uc.name }}</option>
      </select>

      <div *ngIf="periodicity === 'hourly'" class="ml-2 inline-flex overflow-hidden rounded-md border border-[#E5E7EB]">
        <button
          *ngFor="let d of durations"
          type="button"
          class="px-3 py-1.5 text-[13px]"
          [class]="duration === d.key ? 'bg-[#1F2937] text-white' : 'text-[#475569]'"
          (click)="onDuration(d.key)"
        >{{ d.label }}</button>
      </div>

      <span class="ml-2 text-[13px] font-medium text-[#64748B]">Periodicity</span>
      <div class="inline-flex overflow-hidden rounded-md border border-[#E5E7EB]">
        <button type="button" class="px-3 py-1.5 text-[13px]"
          [class]="periodicity === 'hourly' ? 'bg-[#1F2937] text-white' : 'text-[#475569]'"
          (click)="onPeriodicity('hourly')">Hourly</button>
        <button type="button" class="px-3 py-1.5 text-[13px]"
          [class]="periodicity === 'daily' ? 'bg-[#1F2937] text-white' : 'text-[#475569]'"
          (click)="onPeriodicity('daily')">Daily</button>
      </div>
      <span *ngIf="periodicity === 'daily'" class="text-[12px] text-[#64748B]">· last 30 days</span>

      <button
        type="button"
        class="ml-auto rounded-[10px] bg-[#1F2937] px-4 py-2 text-[13px] font-semibold text-white hover:bg-[#111827] disabled:opacity-40"
        title="Per-camera analytics — opens individual camera deep-dive"
        [disabled]="filtered.length === 0"
        (click)="openCameraAnalysis()"
      >Camera Analysis</button>
    </div>

    <!-- ===== KPI row ===== -->
    <div class="mb-4 grid grid-cols-4 gap-4">
      <app-kpi-card label="Total Incidents" [value]="kpis.total | number" [sub]="totalSub"
        [delta]="showDelta ? totalDelta : ''" [deltaUp]="totalUp" [upIsBad]="true" icon="triangleAlert"></app-kpi-card>
      <app-kpi-card label="Open / Unresolved" [value]="kpis.open | number" sub="Awaiting review"
        icon="triangleAlert" iconBg="#EF4444"></app-kpi-card>
      <app-kpi-card label="Top Non-Compliance" [value]="topReasonName" [sub]="topReasonSub"
        valueClass="text-[20px] font-bold leading-tight" icon="triangleAlert" [iconBg]="topReasonColor"></app-kpi-card>
      <app-kpi-card [label]="peakCardLabel" [value]="peakLabel" [sub]="peakSub"
        icon="clock" iconBg="#3B82F6"></app-kpi-card>
    </div>

    <!-- ===== Analytics row ===== -->
    <div class="mb-4 grid grid-cols-12 gap-4">
      <!-- Camera leaderboard (left) -->
      <div class="col-span-3 rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
        <div class="text-[15px] font-semibold text-[#0F172A]">Camera Insights</div>
        <div class="text-[12px] text-[#64748B]">Performing Cameras.</div>
        <div class="mt-3 flex gap-4 border-b border-[#E5E7EB] text-[13px]">
          <button type="button" class="-mb-px border-b-2 pb-1.5"
            [class]="leaderTab === 'high' ? 'border-[#1F2937] text-[#0F172A]' : 'border-transparent text-[#94A3B8]'"
            (click)="setLeaderTab('high')">High Incident Rate</button>
          <button type="button" class="-mb-px border-b-2 pb-1.5"
            [class]="leaderTab === 'low' ? 'border-[#1F2937] text-[#0F172A]' : 'border-transparent text-[#94A3B8]'"
            (click)="setLeaderTab('low')">Low Incident Rate</button>
        </div>
        <div class="mt-3 flex flex-col gap-2">
          <div *ngFor="let c of leaders" class="flex items-center gap-2">
            <span class="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#FEF2F2] text-[#EF4444]">
              <app-icon name="camera" [size]="14"></app-icon>
            </span>
            <span class="min-w-0 flex-1 truncate text-[13px] text-[#0F172A]" [title]="c.name">{{ c.name }}</span>
            <span class="flex-none rounded-full bg-[#FEE2E2] px-2 py-0.5 text-[11px] font-semibold text-[#B91C1C]">{{ c.count }}</span>
          </div>
        </div>
      </div>

      <!-- Severity over time (right) -->
      <div class="col-span-9 rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
        <div class="flex items-center gap-2 text-[#475569]">
          <app-icon name="clock" [size]="16"></app-icon>
          <span class="text-[15px] font-semibold text-[#0F172A]">{{ periodicity === 'daily' ? 'Incidents by Day &amp; Severity' : 'Incidents by Hour &amp; Severity' }}</span>
        </div>
        <div class="mt-3"><app-severity-trend [bins]="trendBins" [labelEvery]="trendLabelEvery"></app-severity-trend></div>
      </div>
    </div>

    <!-- ===== Camera activity heatmap (full width) ===== -->
    <div class="mb-4 rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
      <div class="flex items-start justify-between gap-4">
        <div>
          <div class="text-[15px] font-semibold text-[#0F172A]">Where &amp; When — Camera Activity Heatmap</div>
          <div class="text-[12px] text-[#64748B]">
            {{ heatMode === 'daily' ? 'Incident density by camera and day · last 30 days' : 'Incident density by camera and hour' }}
          </div>
        </div>
        <div class="inline-flex flex-none overflow-hidden rounded-md border border-[#E5E7EB]">
          <button type="button" class="px-3 py-1.5 text-[13px]"
            [class]="heatMode === 'hourly' ? 'bg-[#1F2937] text-white' : 'text-[#475569]'"
            (click)="setHeatMode('hourly')">Hourly</button>
          <button type="button" class="px-3 py-1.5 text-[13px]"
            [class]="heatMode === 'daily' ? 'bg-[#1F2937] text-white' : 'text-[#475569]'"
            (click)="setHeatMode('daily')">Daily</button>
        </div>
      </div>
      <div class="mt-3">
        <app-camera-heatmap [rows]="heatRows" [colHeaders]="heatColHeaders" [colTitles]="heatColTitles"></app-camera-heatmap>
      </div>
    </div>

    <!-- ===== Non-compliance List ===== -->
    <div class="rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
      <div class="text-[15px] font-semibold text-[#0F172A]">Non-compliance List</div>

      <div class="mt-3 flex items-center gap-3">
        <div class="relative flex-1">
          <span class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"><app-icon name="search" [size]="16"></app-icon></span>
          <input class="w-full rounded-md border border-[#E5E7EB] py-2 pl-9 pr-3 text-[13px] text-[#0F172A] placeholder:text-[#94A3B8]"
            placeholder="Search Non-compliance By Camera Name" disabled />
        </div>
        <button type="button" class="rounded-[8px] bg-[#1F2937] px-4 py-2 text-[13px] font-semibold text-white">Export</button>
      </div>

      <div *ngIf="tableTotal === 0" class="py-10 text-center text-[13px] text-[#64748B]">No incidents matching this filter</div>

      <table *ngIf="tableTotal > 0" class="mt-3 w-full text-left">
        <thead class="border-b border-[#E5E7EB] text-[12px] text-[#64748B]">
          <tr>
            <th class="py-2 pr-2 font-medium">Sr No</th>
            <th class="py-2 pr-2 font-medium">Camera Name</th>
            <th class="py-2 pr-2 font-medium">Use Case</th>
            <th class="py-2 pr-2 font-medium">
              <select class="bg-transparent text-[12px] font-medium text-[#64748B]" [value]="severity" (change)="onSeverityFilter($any($event.target).value)">
                <option value="all">Severity</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </th>
            <th class="py-2 pr-2 font-medium">Message</th>
            <th class="cursor-pointer select-none py-2 pr-2 font-medium" (click)="toggleSort()">Time {{ sortAsc ? '↑' : '↓' }}</th>
            <th class="py-2 pr-2 font-medium">Image</th>
            <th class="py-2 pr-2 font-medium">Video</th>
          </tr>
        </thead>
        <tbody class="text-[13px] text-[#0F172A]">
          <tr *ngFor="let inc of tableRows; let idx = index" class="cursor-pointer border-b border-[#F1F5F9] hover:bg-[#F8FAFC]" (click)="onRowClick(inc)">
            <td class="py-2 pr-2 tabular-nums text-[#64748B]">{{ (page - 1) * pageSize + idx + 1 }}</td>
            <td class="py-2 pr-2">{{ camName(inc.cameraId) }}</td>
            <td class="py-2 pr-2"><app-pill [label]="ucMeta(inc.useCaseId).name" [color]="ucMeta(inc.useCaseId).color"></app-pill></td>
            <td class="py-2 pr-2"><app-pill [label]="inc.severity" [color]="sevColor(inc.severity)"></app-pill></td>
            <td class="py-2 pr-2 text-[#475569]">{{ inc.message }}</td>
            <td class="py-2 pr-2 whitespace-nowrap text-[#475569]">{{ fmtTime(inc.timestamp) }}</td>
            <td class="py-2 pr-2"><app-scene-thumb [scene]="scene(inc.cameraId)" [bbox]="inc.bbox" [color]="ucMeta(inc.useCaseId).color" [width]="72" [height]="54"></app-scene-thumb></td>
            <td class="py-2 pr-2"><app-scene-thumb [scene]="scene(inc.cameraId)" [bbox]="inc.bbox" [color]="ucMeta(inc.useCaseId).color" [showPlay]="true" [width]="72" [height]="54"></app-scene-thumb></td>
          </tr>
        </tbody>
      </table>

      <div *ngIf="tableTotal > 0" class="mt-3 flex items-center justify-end gap-4 text-[12px] text-[#64748B]">
        <span>Items per page: {{ pageSize }}</span>
        <span>{{ rangeLabel }}</span>
        <div class="flex items-center gap-1">
          <button type="button" class="rounded px-2 py-1 hover:bg-[#F1F5F9] disabled:opacity-40" [disabled]="page === 1" (click)="goPage(1)">«</button>
          <button type="button" class="rounded px-2 py-1 hover:bg-[#F1F5F9] disabled:opacity-40" [disabled]="page === 1" (click)="goPage(page - 1)">‹</button>
          <span class="tabular-nums">{{ page }} / {{ pageCount }}</span>
          <button type="button" class="rounded px-2 py-1 hover:bg-[#F1F5F9] disabled:opacity-40" [disabled]="page === pageCount" (click)="goPage(page + 1)">›</button>
          <button type="button" class="rounded px-2 py-1 hover:bg-[#F1F5F9] disabled:opacity-40" [disabled]="page === pageCount" (click)="goPage(pageCount)">»</button>
        </div>
      </div>
    </div>
  </div>`,
})
export class DashboardComponent {
  @Output() openIncident = new EventEmitter<{ incident: Incident; scoped: Incident[] }>();

  /** Pre-selects the use-case filter when arriving from a Home use-case tile. */
  @Input() set initialUseCase(v: UseCaseId | 'all' | undefined) {
    this.useCase = v ?? 'all';
    this.recompute();
  }

  readonly useCases = USE_CASES;
  readonly durations: { key: DurationKey; label: string }[] = [
    { key: 'today', label: 'Today' },
    { key: 'yesterday', label: 'Yesterday' },
    { key: 'last7', label: 'Last 7 Days' },
  ];

  // ----- raw sources (stable for the session) -----
  private readonly all: Incident[] = generateIncidents(TODAY_SEED, TODAY_COUNT);
  private readonly allDaily: Incident[] = generateDailyIncidents();

  // ----- filter state -----
  useCase: UseCaseId | 'all' = 'all';
  duration: DurationKey = 'today';
  severity: Severity | 'all' = 'all';
  periodicity: 'hourly' | 'daily' = 'hourly';

  // ----- derived -----
  filtered: Incident[] = [];
  kpis = computeKpis(this.all);
  topReason: UseCaseRow | null = null;
  trendBins: TrendBin[] = [];
  trendLabelEvery = 3;
  peak: { label: string; count: number } | null = null;
  heatRows: HeatRow[] = [];
  heatMode: 'hourly' | 'daily' = 'hourly';
  heatColHeaders: string[] = [];
  heatColTitles: string[] = [];
  leaderTab: 'high' | 'low' = 'high';
  leaders: LeaderRow[] = [];

  // ----- table state -----
  page = 1;
  readonly pageSize = PAGE_SIZE;
  sortAsc = false; // time desc by default
  tableRows: Incident[] = [];
  pageCount = 1;
  tableTotal = 0;

  constructor() {
    this.recompute();
  }

  onUseCase(v: UseCaseId | 'all'): void { this.useCase = v; this.recompute(); }
  onDuration(d: DurationKey): void { this.duration = d; this.recompute(); }
  onSeverityFilter(v: Severity | 'all'): void { this.severity = v; this.recompute(); }
  onPeriodicity(p: 'hourly' | 'daily'): void { this.periodicity = p; this.recompute(); }

  setLeaderTab(tab: 'high' | 'low'): void {
    this.leaderTab = tab;
    this.leaders = cameraLeaderboard(this.filtered, tab, 5);
  }

  setHeatMode(mode: 'hourly' | 'daily'): void {
    this.heatMode = mode;
    this.updateHeatmap();
  }

  /**
   * Builds heatmap rows + column labels for the active mode. The heatmap's
   * hourly/daily toggle is independent of the page Periodicity: daily always
   * uses the dedicated 30-day data; hourly buckets the current page source by
   * hour-of-day.
   */
  private updateHeatmap(): void {
    if (this.heatMode === 'daily') {
      const list = filterIncidents(this.allDaily, { useCase: this.useCase, severity: this.severity });
      this.heatRows = dayHeatmap(list);
      this.heatColTitles = DAILY_DAY_LABELS;
      this.heatColHeaders = DAILY_DAY_LABELS.map((l, i) => (i % 5 === 0 ? l : ''));
    } else {
      this.heatRows = cameraHourHeatmap(this.filtered);
      this.heatColHeaders = HOURS.map((h) => (h % 3 === 0 ? String(h) : ''));
      this.heatColTitles = HOURS.map((h) => `${h < 10 ? '0' : ''}${h}:00`);
    }
  }

  /** Page data source — the 30-day array when Periodicity is Daily, else the (duration-scaled) single day. */
  private baseSource(): Incident[] {
    return this.periodicity === 'daily' ? this.allDaily : this.scaledSource();
  }

  private scaledSource(): Incident[] {
    const scale = DURATION_SCALE[this.duration];
    if (scale === 1) return this.all;
    if (scale < 1) return this.all.slice(0, Math.round(this.all.length * scale));
    // last7: repeat to inflate volume; ids stay unique for display
    const reps = Math.ceil(scale);
    const out: Incident[] = [];
    for (let r = 0; r < reps; r++) for (const i of this.all) out.push({ ...i, id: i.id + r * this.all.length });
    return out.slice(0, Math.round(this.all.length * scale));
  }

  private recompute(): void {
    const src = this.baseSource();
    this.filtered = filterIncidents(src, { useCase: this.useCase, severity: this.severity });
    this.kpis = computeKpis(this.filtered);
    this.topReason = useCaseBreakdown(this.filtered)[0] ?? null;

    if (this.periodicity === 'daily') {
      this.trendBins = severityByDay(this.filtered);
      this.trendLabelEvery = 5;
      this.peak = peakDay(this.filtered);
    } else {
      this.trendBins = severityTrendHourly(this.filtered);
      this.trendLabelEvery = 3;
      this.peak = this.kpis.peakHour
        ? { label: PEAK(this.kpis.peakHour.hour), count: this.kpis.peakHour.count }
        : null;
    }

    this.updateHeatmap();
    this.leaders = cameraLeaderboard(this.filtered, this.leaderTab, 5);
    this.resetTable();
  }

  // ----- table helpers -----
  private tableSource(): Incident[] {
    const rows = [...this.filtered];
    rows.sort((a, b) =>
      this.sortAsc ? a.timestamp.localeCompare(b.timestamp) : b.timestamp.localeCompare(a.timestamp),
    );
    return rows;
  }

  private resetTable(): void {
    this.page = 1;
    this.applyTable();
  }

  private applyTable(): void {
    const res = paginate(this.tableSource(), this.page, this.pageSize);
    this.tableRows = res.rows;
    this.page = res.page;
    this.pageCount = res.pageCount;
    this.tableTotal = res.total;
  }

  toggleSort(): void { this.sortAsc = !this.sortAsc; this.applyTable(); }
  goPage(p: number): void { this.page = p; this.applyTable(); }

  // ----- display helpers -----
  ucMeta(id: UseCaseId) { return USE_CASE_BY_ID[id]; }
  sevColor(s: Severity): string { return SEVERITY_COLOR[s]; }
  camName(id: string): string { return CAMERA_BY_ID[id].name; }
  scene(id: string) { return CAMERA_BY_ID[id].scene; }
  fmtTime(iso: string): string {
    const d = new Date(iso);
    const date = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    return `${date} @ ${time.toLowerCase()}`;
  }

  get totalDelta(): string {
    const d = this.kpis.total - COMPARE.yesterday;
    const pct = (Math.abs(d) / COMPARE.yesterday) * 100;
    return `${Math.abs(d)} (${pct.toFixed(2)}%)`;
  }
  get totalUp(): boolean { return this.kpis.total >= COMPARE.yesterday; }
  get worstName(): string { return this.kpis.worstCamera?.name ?? '—'; }
  get worstSub(): string { return this.kpis.worstCamera ? `${this.kpis.worstCamera.count} incidents` : 'No data'; }
  get topReasonName(): string { return this.topReason?.name ?? '—'; }
  get topReasonSub(): string {
    return this.topReason ? `${this.topReason.count.toLocaleString()} incidents · ${this.topReason.pct.toFixed(0)}%` : 'No data';
  }
  get topReasonColor(): string { return this.topReason?.color ?? '#1F2937'; }
  get totalSub(): string { return this.periodicity === 'daily' ? 'Across last 30 days' : 'Yesterday (1,263)'; }
  get showDelta(): boolean { return this.periodicity === 'hourly'; }
  get peakCardLabel(): string { return this.periodicity === 'daily' ? 'Peak Day' : 'Peak Hour'; }
  get peakLabel(): string { return this.peak?.label ?? '—'; }
  get peakSub(): string { return this.peak ? `${this.peak.count.toLocaleString()} incidents` : 'No data'; }
  get rangeLabel(): string {
    const start = this.tableTotal === 0 ? 0 : (this.page - 1) * this.pageSize + 1;
    const end = Math.min(this.page * this.pageSize, this.tableTotal);
    return `${start} – ${end} of ${this.tableTotal}`;
  }

  onRowClick(inc: Incident): void {
    const scoped = this.filtered.filter((i) => i.cameraId === inc.cameraId);
    this.openIncident.emit({ incident: inc, scoped });
  }

  /** Camera Analysis CTA — opens the widget on the busiest camera in the current filter. */
  openCameraAnalysis(): void {
    if (this.filtered.length === 0) return;
    const counts = new Map<string, number>();
    for (const i of this.filtered) counts.set(i.cameraId, (counts.get(i.cameraId) ?? 0) + 1);
    let topCam = this.filtered[0].cameraId;
    let top = 0;
    for (const [cam, c] of counts) if (c > top) { top = c; topCam = cam; }
    const scoped = this.filtered
      .filter((i) => i.cameraId === topCam)
      .sort((a, b) => b.timestamp.localeCompare(a.timestamp));
    this.openIncident.emit({ incident: scoped[0], scoped });
  }
}
