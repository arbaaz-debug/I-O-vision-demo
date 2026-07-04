import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillComponent } from '../ui/pill.component';
import { SceneThumbComponent } from '../ui/scene-thumb.component';
import { IconComponent } from '../ui/icon.component';
import { EvidenceViewerComponent } from './evidence-viewer.component';
import { CameraFeedModalComponent } from './camera-feed-modal.component';
import { USE_CASES, USE_CASE_BY_ID, UseCaseId } from '../core/tokens';
import { Severity } from '../components/single-camera-view/single-camera-view.types';
import { Camera, DurationKey, Incident } from '../data/model';
import { CAMERA_BY_ID } from '../data/reference';
import { generateIncidents, TODAY_SEED, TODAY_COUNT } from '../data/generator';
import { generateDailyIncidents, dayHeatmap, severityByDay, peakDay, DAILY_DAY_LABELS } from '../data/daily';
import { useCaseCameras } from '../data/usecase-data';
import {
  cameraHourHeatmap, computeKpis, filterIncidents, paginate,
  severityTrendHourly, useCaseBreakdown, HeatRow, TrendBin, UseCaseRow,
} from '../data/selectors';

const PAGE_SIZE = 30;
const PEAK = (h: number) => `${h < 10 ? '0' : ''}${h}:00`;
const HOURS = Array.from({ length: 24 }, (_, i) => i);
const COMPARE = { yesterday: 1263 };
const DURATION_SCALE: Record<DurationKey, number> = { today: 1, yesterday: 0.78, last7: 5.4 };

interface MatRow { name: string; cells: number[]; total: number; }

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, PillComponent, SceneThumbComponent, IconComponent, EvidenceViewerComponent, CameraFeedModalComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host{
      display:block; font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display','SF Pro Text','Segoe UI',Roboto,sans-serif;
      --sev-low:#fcd34d; --sev-med:#f59e0b; --sev-high:#dc2626;
      --h0:#f5f8fc; --h1:#fff2d9; --h2:#ffd8a1; --h3:#fdb771; --h4:#fb8f4b; --h5:#ef6a34; --h6:#d63f2a;
    }
    .matrix-scroll{overflow-x:auto;padding-bottom:4px}
    .matrix{display:grid;gap:3px;align-items:stretch}
    .sevcell{position:relative;height:50px;display:flex;flex-direction:column-reverse;border-radius:4px;overflow:hidden;background:#f7fafc}
    .sevcell>span{display:block;width:100%}
    .sev-high{background:var(--sev-high)} .sev-med{background:var(--sev-med)} .sev-low{background:var(--sev-low)}
    .m-total-head{display:flex;align-items:flex-end;justify-content:center;font-size:11px;font-weight:800;color:#94a3b8;padding-bottom:4px}
    .hour-axis{height:18px;display:flex;align-items:center;justify-content:flex-start;font-size:10.5px;color:#94a3b8;font-weight:600}
    .cam-label{display:flex;flex-direction:column;justify-content:center;padding-right:10px;font-size:12.5px;font-weight:600;color:#0f172a;text-align:right;align-items:flex-end}
    .cam-label small{font-size:10px;color:#94a3b8;font-weight:600}
    .cam-label.idle{color:#94a3b8;font-weight:500}
    .cell{height:29px;border-radius:4px;background:var(--h0);position:relative}
    .cell.b1{background:var(--h1)} .cell.b2{background:var(--h2)} .cell.b3{background:var(--h3)}
    .cell.b4{background:var(--h4)} .cell.b5{background:var(--h5)} .cell.b6{background:var(--h6)}
    .cell-v{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#7c2d12}
    .cell.b4 .cell-v,.cell.b5 .cell-v,.cell.b6 .cell-v{color:#fff}
    .cell.zero{background:repeating-linear-gradient(45deg,#f7fafc,#f7fafc 5px,#eef2f7 5px,#eef2f7 10px)}
    .rowtot{display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#0f172a;font-variant-numeric:tabular-nums}
    .rowtot.idle{color:#94a3b8;font-weight:600}
  `],
  template: `<div class="bg-[#eef2f7] px-6 py-6">
    <div class="mx-auto max-w-[1400px]">

    <!-- ===== Controls ===== -->
    <div id="dash-top" class="sticky top-0 z-20 mb-5 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-[14px] border border-[#e6ebf2] bg-white px-4 py-3 shadow-[0_1px_2px_rgba(15,23,42,.05)]">
      <div class="flex items-center gap-2.5">
        <span class="text-[12.5px] font-semibold text-[#94a3b8]">Use case</span>
        <select class="min-w-[200px] rounded-[9px] border border-[#d8e0ea] bg-white px-3 py-2 text-[13.5px] font-semibold text-[#0f172a]"
          (change)="onUseCase($any($event.target).value)">
          <option value="all" [selected]="useCase === 'all'">All use cases</option>
          <option *ngFor="let uc of useCases" [value]="uc.id" [selected]="useCase === uc.id">{{ uc.name }}</option>
        </select>
      </div>

      <div class="flex items-center gap-2.5">
        <span class="text-[12.5px] font-semibold text-[#94a3b8]">Period</span>
        <div class="inline-flex gap-0.5 rounded-[9px] border border-[#e6ebf2] bg-[#f1f5f9] p-[3px]">
          <button *ngFor="let d of durations" type="button" class="rounded-[7px] px-3.5 py-1.5 text-[13px] font-semibold transition"
            [ngClass]="duration === d.key ? 'bg-[#0f172a] text-white shadow-sm' : 'text-[#475569]'" (click)="onDuration(d.key)">{{ d.label }}</button>
        </div>
      </div>

      <div class="flex items-center gap-2.5">
        <span class="text-[12.5px] font-semibold text-[#94a3b8]">Granularity</span>
        <div class="inline-flex gap-0.5 rounded-[9px] border border-[#e6ebf2] bg-[#f1f5f9] p-[3px]">
          <button type="button" class="rounded-[7px] px-3.5 py-1.5 text-[13px] font-semibold transition"
            [ngClass]="periodicity === 'hourly' ? 'bg-[#0f172a] text-white shadow-sm' : 'text-[#475569]'" (click)="onPeriodicity('hourly')">Hourly</button>
          <button type="button" class="rounded-[7px] px-3.5 py-1.5 text-[13px] font-semibold transition"
            [ngClass]="periodicity === 'daily' ? 'bg-[#0f172a] text-white shadow-sm' : 'text-[#475569]'" (click)="onPeriodicity('daily')">Daily</button>
        </div>
      </div>

      <button type="button" class="ml-auto inline-flex items-center gap-2 rounded-[9px] bg-[#0f172a] px-4 py-2.5 text-[13.5px] font-bold text-white disabled:opacity-40"
        [disabled]="filtered.length === 0" (click)="openCameraAnalysis()">
        <app-icon name="camera" [size]="16"></app-icon> Camera Analysis
      </button>
    </div>

    <!-- ===== Zone 1 — At a glance ===== -->
    <div class="mb-2.5 ml-0.5 text-[11px] font-extrabold uppercase tracking-[0.09em] text-[#94a3b8]">At a glance</div>
    <div class="mb-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
      <!-- compliance -->
      <div class="relative overflow-hidden rounded-[14px] border border-[#e6ebf2] bg-white p-[18px] shadow-[0_1px_2px_rgba(15,23,42,.05)]">
        <span class="absolute inset-y-0 left-0 w-1 rounded-l bg-[#16a34a]"></span>
        <div class="flex items-start justify-between">
          <span class="text-[12.5px] font-bold text-[#475569]">Compliance rate</span>
          <span class="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#dcfce7] text-[#16a34a]"><app-icon name="shield" [size]="18"></app-icon></span>
        </div>
        <div class="mt-2.5 text-[30px] font-extrabold leading-none tracking-tight tabular-nums">{{ complianceRateLabel }}</div>
        <div class="mt-1 text-[12.5px] tabular-nums text-[#94a3b8]">{{ complianceSub }}</div>
        <div class="mt-2.5 inline-flex items-center gap-1 text-[12.5px] font-bold" [ngClass]="complianceUp ? 'text-[#16a34a]' : 'text-[#dc2626]'">
          {{ complianceUp ? '▲' : '▼' }} {{ complianceDelta }} pts vs yesterday
        </div>
      </div>
      <!-- open violations -->
      <div class="relative overflow-hidden rounded-[14px] border border-[#e6ebf2] bg-white p-[18px] shadow-[0_1px_2px_rgba(15,23,42,.05)]">
        <span class="absolute inset-y-0 left-0 w-1 rounded-l bg-[#dc2626]"></span>
        <div class="flex items-start justify-between">
          <span class="text-[12.5px] font-bold text-[#475569]">Open violations</span>
          <span class="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#fee2e2] text-[#dc2626]"><app-icon name="triangleAlert" [size]="18"></app-icon></span>
        </div>
        <div class="mt-2.5 text-[30px] font-extrabold leading-none tracking-tight tabular-nums">{{ openShown | number }}</div>
        <div class="mt-1 text-[12.5px] tabular-nums text-[#94a3b8]">of {{ total | number }} today · {{ reviewedClosed | number }} reviewed &amp; closed</div>
        <span class="mt-2.5 inline-block rounded-full bg-[#fee2e2] px-2 py-0.5 text-[11px] font-bold tabular-nums text-[#dc2626]">{{ openShown | number }} awaiting review</span>
      </div>
      <!-- peak window -->
      <div class="relative overflow-hidden rounded-[14px] border border-[#e6ebf2] bg-white p-[18px] shadow-[0_1px_2px_rgba(15,23,42,.05)]">
        <span class="absolute inset-y-0 left-0 w-1 rounded-l bg-[#3b82f6]"></span>
        <div class="flex items-start justify-between">
          <span class="text-[12.5px] font-bold text-[#475569]">Peak risk window</span>
          <span class="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#dbeafe] text-[#2563eb]"><app-icon name="clock" [size]="18"></app-icon></span>
        </div>
        <div class="mt-2.5 text-[24px] font-extrabold leading-none tracking-tight tabular-nums">{{ peakWindow }}</div>
        <div class="mt-1 text-[12.5px] tabular-nums text-[#94a3b8]">{{ peakSub2 }}</div>
        <div class="mt-2.5 text-[12.5px] font-semibold text-[#475569]">Highest exposure of the {{ periodicity === 'daily' ? 'period' : 'day' }}</div>
      </div>
      <!-- top zone -->
      <div class="relative overflow-hidden rounded-[14px] border border-[#e6ebf2] bg-white p-[18px] shadow-[0_1px_2px_rgba(15,23,42,.05)]">
        <span class="absolute inset-y-0 left-0 w-1 rounded-l bg-[#f59e0b]"></span>
        <div class="flex items-start justify-between">
          <span class="text-[12.5px] font-bold text-[#475569]">Top offending zone</span>
          <span class="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#fef3c7] text-[#b45309]"><app-icon name="pin" [size]="18"></app-icon></span>
        </div>
        <div class="mt-2.5 truncate text-[22px] font-extrabold leading-tight tracking-tight">{{ topZoneName }}</div>
        <div class="mt-1 text-[12.5px] tabular-nums text-[#94a3b8]">{{ topZoneSub }}</div>
      </div>
    </div>

    <!-- ===== Zone 2 — Where & when ===== -->
    <div class="mb-2.5 ml-0.5 text-[11px] font-extrabold uppercase tracking-[0.09em] text-[#94a3b8]">Where &amp; when</div>
    <div class="mb-7 rounded-[14px] border border-[#e6ebf2] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.05)]">
      <div class="mb-4 flex items-start justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 text-[16px] font-extrabold tracking-tight text-[#0f172a]"><app-icon name="grid" [size]="16"></app-icon> Violation density — camera × {{ periodicity === 'daily' ? 'day' : 'hour' }}</div>
          <div class="mt-0.5 text-[12.5px] text-[#94a3b8]">Bar height is total violations that {{ periodicity === 'daily' ? 'day' : 'hour' }}; the grid shows which camera is driving it.</div>
        </div>
      </div>

      <div class="matrix-scroll">
        <div class="matrix" [style.grid-template-columns]="matGridCols" [style.min-width.px]="matMinWidth">
          <div></div>
          <div *ngFor="let t of matColTotals" class="sevcell" [title]="t + ' violations'">
            <span [style.height.px]="barH(t)" style="background:#94a3b8"></span>
          </div>
          <div class="m-total-head">{{ matGrand | number }}</div>

          <div></div>
          <div *ngFor="let l of matLabels" class="hour-axis">{{ l }}</div>
          <div class="hour-axis" style="justify-content:center;font-weight:800">Σ</div>

          <ng-container *ngFor="let r of matActive; let i = index">
            <div class="cam-label">{{ r.name }}<small>{{ i === 0 ? 'top offender' : 'active' }}</small></div>
            <div *ngFor="let v of r.cells" class="cell" [ngClass]="bucket(v)"><span *ngIf="showN(v)" class="cell-v">{{ v }}</span></div>
            <div class="rowtot">{{ r.total }}</div>
          </ng-container>

          <ng-container *ngIf="showIdle">
            <ng-container *ngFor="let name of matIdle">
              <div class="cam-label idle">{{ name }}<small>no events</small></div>
              <div *ngFor="let _ of matColsArr" class="cell zero"></div>
              <div class="rowtot idle">0</div>
            </ng-container>
          </ng-container>
        </div>
      </div>

      <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div class="text-[12px] font-semibold text-[#94a3b8]">Bar height = violations per {{ periodicity === 'daily' ? 'day' : 'hour' }}</div>
        <button *ngIf="matIdle.length" type="button" class="text-[12.5px] font-bold text-[#2563eb]" (click)="showIdle = !showIdle">
          {{ showIdle ? 'Hide idle cameras ⌃' : 'Show all cameras (' + matIdle.length + ' idle) ⌄' }}
        </button>
        <div class="flex items-center gap-2 text-[11.5px] font-semibold text-[#94a3b8]">
          Fewer
          <span class="flex gap-[3px]">
            <span class="h-3 w-5 rounded-sm" style="background:var(--h1)"></span>
            <span class="h-3 w-5 rounded-sm" style="background:var(--h2)"></span>
            <span class="h-3 w-5 rounded-sm" style="background:var(--h3)"></span>
            <span class="h-3 w-5 rounded-sm" style="background:var(--h4)"></span>
            <span class="h-3 w-5 rounded-sm" style="background:var(--h5)"></span>
            <span class="h-3 w-5 rounded-sm" style="background:var(--h6)"></span>
          </span>
          More
        </div>
      </div>
    </div>

    <!-- ===== Zone 3 — Evidence log (retained non-compliance list) ===== -->
    <div class="mb-2.5 ml-0.5 text-[11px] font-extrabold uppercase tracking-[0.09em] text-[#94a3b8]">Proof</div>
    <div id="non-compliance-list" class="scroll-mt-24 rounded-[14px] border border-[#e6ebf2] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.05)]">
      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-2 text-[16px] font-extrabold tracking-tight text-[#0f172a]"><app-icon name="camera" [size]="16"></app-icon> Evidence log</div>
        <span *ngIf="cameraFilter" class="inline-flex items-center gap-1.5 rounded-full bg-[#eef2ff] px-2.5 py-1 text-[12px] font-medium text-[#3730a3]">
          Camera: {{ cameraFilterName }}
          <button type="button" class="text-[#6366f1] hover:text-[#3730a3]" (click)="clearCameraFilter()" aria-label="Clear camera filter">✕</button>
        </span>
      </div>

      <div class="mt-3 flex items-center gap-3">
        <div class="relative flex-1">
          <span class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]"><app-icon name="search" [size]="16"></app-icon></span>
          <input class="w-full rounded-[9px] border border-[#d8e0ea] bg-[#f8fafc] py-2 pl-9 pr-3 text-[13px] text-[#0f172a] placeholder:text-[#94a3b8]"
            placeholder="Search evidence by camera name" [value]="cameraFilterName" disabled />
        </div>
        <button type="button" class="inline-flex items-center gap-2 rounded-[9px] border border-[#d8e0ea] bg-white px-4 py-2 text-[13px] font-semibold text-[#0f172a]"><app-icon name="download" [size]="15"></app-icon> Export</button>
      </div>

      <div *ngIf="tableTotal === 0" class="py-10 text-center text-[13px] text-[#64748b]">No evidence matching this filter</div>

      <table *ngIf="tableTotal > 0" class="mt-3 w-full text-left">
        <thead class="border-b border-[#e6ebf2] text-[12px] text-[#94a3b8]">
          <tr>
            <th class="py-2 pr-2 font-semibold">Sr No</th>
            <th class="py-2 pr-2 font-semibold">Camera Name</th>
            <th class="py-2 pr-2 font-semibold">Use Case</th>
            <th class="py-2 pr-2 font-semibold">Message</th>
            <th class="cursor-pointer select-none py-2 pr-2 font-semibold" (click)="toggleSort()">Time {{ sortAsc ? '↑' : '↓' }}</th>
            <th class="py-2 pr-2 font-semibold">Image</th>
            <th class="py-2 pr-2 font-semibold">Video</th>
          </tr>
        </thead>
        <tbody class="text-[13px] text-[#0f172a]">
          <tr *ngFor="let inc of tableRows; let idx = index" class="border-b border-[#f1f5f9] hover:bg-[#f8fafc]">
            <td class="py-2 pr-2 tabular-nums text-[#64748b]">{{ (page - 1) * pageSize + idx + 1 }}</td>
            <td class="py-2 pr-2 font-medium">{{ camName(inc.cameraId) }}</td>
            <td class="py-2 pr-2"><app-pill [label]="ucMeta(inc.useCaseId).name" [color]="ucMeta(inc.useCaseId).color"></app-pill></td>
            <td class="py-2 pr-2 text-[#475569]">{{ inc.message }}</td>
            <td class="py-2 pr-2 whitespace-nowrap text-[#475569]">{{ fmtTime(inc.timestamp) }}</td>
            <td class="py-2 pr-2">
              <button type="button" class="block overflow-hidden rounded-md ring-1 ring-transparent transition hover:ring-2 hover:ring-[#3b82f6]" (click)="openMedia(inc, 'photo')" title="View photo evidence">
                <app-scene-thumb [scene]="scene(inc.cameraId)" [bbox]="inc.bbox" [color]="ucMeta(inc.useCaseId).color" [width]="72" [height]="54"></app-scene-thumb>
              </button>
            </td>
            <td class="py-2 pr-2">
              <button type="button" class="block overflow-hidden rounded-md ring-1 ring-transparent transition hover:ring-2 hover:ring-[#3b82f6]" (click)="openMedia(inc, 'video')" title="View video evidence">
                <app-scene-thumb [scene]="scene(inc.cameraId)" [bbox]="inc.bbox" [color]="ucMeta(inc.useCaseId).color" [showPlay]="true" [width]="72" [height]="54"></app-scene-thumb>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div *ngIf="tableTotal > 0" class="mt-3 flex items-center justify-end gap-4 text-[12px] text-[#64748b]">
        <span>Items per page: {{ pageSize }}</span>
        <span>{{ rangeLabel }}</span>
        <div class="flex items-center gap-1">
          <button type="button" class="rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40" [disabled]="page === 1" (click)="goPage(1)">«</button>
          <button type="button" class="rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40" [disabled]="page === 1" (click)="goPage(page - 1)">‹</button>
          <span class="tabular-nums">{{ page }} / {{ pageCount }}</span>
          <button type="button" class="rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40" [disabled]="page === pageCount" (click)="goPage(page + 1)">›</button>
          <button type="button" class="rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40" [disabled]="page === pageCount" (click)="goPage(pageCount)">»</button>
        </div>
      </div>
    </div>

    </div>

    <!-- pop-ups -->
    <app-evidence-viewer
      *ngIf="viewer"
      [entries]="viewer.entries"
      [index]="viewer.index"
      [tab]="viewer.tab"
      (close)="viewer = null"
      (viewOnStream)="onViewOnStream($event)"
    ></app-evidence-viewer>
    <app-camera-feed-modal
      *ngIf="stream"
      [cameras]="stream.cameras"
      [useCaseId]="stream.useCaseId"
      [index]="stream.index"
      (close)="stream = null"
      (viewViolations)="onStreamViewViolations($event)"
    ></app-camera-feed-modal>
  </div>`,
})
export class DashboardComponent implements AfterViewInit {
  @Output() openIncident = new EventEmitter<{ incident: Incident; scoped: Incident[] }>();

  @Input() set initialUseCase(v: UseCaseId | 'all' | undefined) { this.useCase = v ?? 'all'; this.recompute(); }
  @Input() set initialCamera(id: string | null | undefined) {
    this.cameraFilter = id ?? null;
    this.cameraFilterName = id ? CAMERA_BY_ID[id]?.name ?? '' : '';
    this.applyTable();
  }
  @Input() set focusList(v: boolean | undefined) { if (v) this.pendingScroll = true; }

  cameraFilter: string | null = null;
  cameraFilterName = '';
  private pendingScroll = false;

  readonly useCases = USE_CASES;
  readonly durations: { key: DurationKey; label: string }[] = [
    { key: 'today', label: 'Today' }, { key: 'yesterday', label: 'Yesterday' }, { key: 'last7', label: 'Last 7 days' },
  ];

  private readonly all: Incident[] = generateIncidents(TODAY_SEED, TODAY_COUNT);
  private readonly allDaily: Incident[] = generateDailyIncidents();

  useCase: UseCaseId | 'all' = 'all';
  duration: DurationKey = 'today';
  severity: Severity | 'all' = 'all';
  periodicity: 'hourly' | 'daily' = 'hourly';

  filtered: Incident[] = [];
  kpis = computeKpis(this.all);
  topReason: UseCaseRow | null = null;
  peak: { label: string; count: number } | null = null;

  // ----- matrix -----
  matActive: MatRow[] = [];
  matIdle: string[] = [];
  matColTotals: number[] = [];
  matMaxCol = 1;
  matMaxCell = 1;
  matGrand = 0;
  matCols = 24;
  matColsArr: number[] = [];
  matLabels: string[] = [];
  showIdle = false;

  // ----- table -----
  page = 1;
  readonly pageSize = PAGE_SIZE;
  sortAsc = false;
  tableRows: Incident[] = [];
  pageCount = 1;
  tableTotal = 0;

  // ----- pop-ups -----
  viewer: { entries: Incident[]; index: number; tab: 'photo' | 'video' } | null = null;
  stream: { cameras: Camera[]; useCaseId: UseCaseId; index: number } | null = null;

  constructor() { this.recompute(); }

  ngAfterViewInit(): void {
    if (this.pendingScroll) {
      this.pendingScroll = false;
      setTimeout(() => document.getElementById('non-compliance-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  }

  onUseCase(v: UseCaseId | 'all'): void { this.useCase = v; this.recompute(); }
  onDuration(d: DurationKey): void { this.duration = d; this.recompute(); }
  onPeriodicity(p: 'hourly' | 'daily'): void { this.periodicity = p; this.recompute(); }
  clearCameraFilter(): void { this.cameraFilter = null; this.cameraFilterName = ''; this.applyTable(); }

  private recompute(): void {
    const src = this.baseSource();
    this.filtered = filterIncidents(src, { useCase: this.useCase, severity: this.severity });
    this.kpis = computeKpis(this.filtered);
    this.topReason = useCaseBreakdown(this.filtered)[0] ?? null;
    this.peak = this.periodicity === 'daily'
      ? peakDay(this.filtered)
      : (this.kpis.peakHour ? { label: PEAK(this.kpis.peakHour.hour), count: this.kpis.peakHour.count } : null);
    this.buildMatrix();
    this.resetTable();
  }

  private baseSource(): Incident[] { return this.periodicity === 'daily' ? this.allDaily : this.scaledSource(); }
  private scaledSource(): Incident[] {
    const scale = DURATION_SCALE[this.duration];
    if (scale === 1) return this.all;
    if (scale < 1) return this.all.slice(0, Math.round(this.all.length * scale));
    const reps = Math.ceil(scale); const out: Incident[] = [];
    for (let r = 0; r < reps; r++) for (const i of this.all) out.push({ ...i, id: i.id + r * this.all.length });
    return out.slice(0, Math.round(this.all.length * scale));
  }

  private buildMatrix(): void {
    let rows: HeatRow[];
    let bins: TrendBin[];
    if (this.periodicity === 'daily') {
      const list = filterIncidents(this.allDaily, { useCase: this.useCase, severity: this.severity });
      rows = dayHeatmap(list); bins = severityByDay(list);
      this.matLabels = DAILY_DAY_LABELS.map((l, i) => (i % 5 === 0 ? l : ''));
    } else {
      rows = cameraHourHeatmap(this.filtered); bins = severityTrendHourly(this.filtered);
      this.matLabels = HOURS.map((h) => (h % 3 === 0 ? (h < 10 ? '0' + h : '' + h) : ''));
    }
    const mat: MatRow[] = rows.map((r) => ({ name: r.name, cells: r.cells, total: r.cells.reduce((a, b) => a + b, 0) }));
    this.matActive = mat.filter((r) => r.total > 0);
    this.matIdle = mat.filter((r) => r.total === 0).map((r) => r.name);
    this.matColTotals = bins.map((b) => b.High + b.Medium + b.Low);
    this.matMaxCol = Math.max(1, ...this.matColTotals);
    this.matMaxCell = Math.max(1, ...this.matActive.flatMap((r) => r.cells));
    this.matGrand = this.matColTotals.reduce((s, t) => s + t, 0);
    this.matCols = this.matColTotals.length;
    this.matColsArr = Array.from({ length: this.matCols });
    this.showIdle = false;
  }

  get matGridCols(): string { return `152px repeat(${this.matCols}, minmax(22px,1fr)) 56px`; }
  get matMinWidth(): number { return 152 + 56 + this.matCols * 26; }
  barH(v: number): number { return (v / this.matMaxCol) * 44; }
  bucket(v: number): string {
    if (v <= 0) return 'zero';
    const r = v / this.matMaxCell;
    if (r <= 0.16) return 'b1'; if (r <= 0.33) return 'b2'; if (r <= 0.5) return 'b3';
    if (r <= 0.68) return 'b4'; if (r <= 0.85) return 'b5'; return 'b6';
  }
  showN(v: number): boolean { return v > 0 && v / this.matMaxCell > 0.5; }

  // ----- table -----
  private tableSource(): Incident[] {
    const rows = this.cameraFilter ? this.filtered.filter((i) => i.cameraId === this.cameraFilter) : [...this.filtered];
    rows.sort((a, b) => (this.sortAsc ? a.timestamp.localeCompare(b.timestamp) : b.timestamp.localeCompare(a.timestamp)));
    return rows;
  }
  private resetTable(): void { this.page = 1; this.applyTable(); }
  private applyTable(): void {
    const res = paginate(this.tableSource(), this.page, this.pageSize);
    this.tableRows = res.rows; this.page = res.page; this.pageCount = res.pageCount; this.tableTotal = res.total;
  }
  toggleSort(): void { this.sortAsc = !this.sortAsc; this.applyTable(); }
  goPage(p: number): void { this.page = p; this.applyTable(); }

  // ----- pop-ups -----
  openMedia(inc: Incident, tab: 'photo' | 'video'): void {
    const list = this.tableSource();
    const idx = Math.max(0, list.findIndex((i) => i.id === inc.id));
    this.viewer = { entries: list, index: idx, tab };
  }
  onViewOnStream(inc: Incident): void {
    const cams = useCaseCameras(inc.useCaseId).map((c) => c.camera);
    let idx = cams.findIndex((c) => c.id === inc.cameraId);
    if (idx < 0) { cams.unshift(CAMERA_BY_ID[inc.cameraId]); idx = 0; }
    this.viewer = null;
    this.stream = { cameras: cams, useCaseId: inc.useCaseId, index: idx };
  }
  onStreamViewViolations(cameraId: string): void {
    this.stream = null;
    this.cameraFilter = cameraId;
    this.cameraFilterName = CAMERA_BY_ID[cameraId]?.name ?? '';
    this.applyTable();
    setTimeout(() => document.getElementById('non-compliance-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  }

  // ----- display helpers -----
  ucMeta(id: UseCaseId) { return USE_CASE_BY_ID[id]; }
  camName(id: string): string { return CAMERA_BY_ID[id].name; }
  scene(id: string) { return CAMERA_BY_ID[id].scene; }
  fmtTime(iso: string): string {
    const d = new Date(iso);
    const date = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    return `${date} @ ${time.toLowerCase()}`;
  }

  // ----- KPI getters -----
  get total(): number { return this.kpis.total; }
  get openShown(): number { return Math.round(this.kpis.total * 0.146); }
  get reviewedClosed(): number { return this.kpis.total - this.openShown; }
  get observations(): number { return Math.max(this.kpis.total, Math.round(this.kpis.total * 16.2)); }
  get complianceRate(): number { const o = this.observations; return o ? ((o - this.kpis.total) / o) * 100 : 100; }
  get complianceRateLabel(): string { return this.complianceRate.toFixed(1) + '%'; }
  get complianceSub(): string { return `${(this.observations - this.kpis.total).toLocaleString()} of ${this.observations.toLocaleString()} observations compliant`; }
  get complianceDelta(): string { return Math.abs(this.complianceRate - 92.4).toFixed(1); }
  get complianceUp(): boolean { return this.complianceRate >= 92.4; }
  get peakWindow(): string {
    if (this.periodicity === 'daily') return this.peak?.label ?? '—';
    const h = this.kpis.peakHour?.hour; if (h == null) return '—';
    const p = (n: number) => String(n).padStart(2, '0');
    return `${p(h)}:00–${p((h + 1) % 24)}:00`;
  }
  get peakSub2(): string {
    const count = this.peak?.count ?? 0;
    const avg = this.kpis.total / (this.periodicity === 'daily' ? 30 : 24);
    const mult = avg ? count / avg : 0;
    return `${count.toLocaleString()} violations · ${mult.toFixed(1)}× the ${this.periodicity === 'daily' ? 'daily' : 'hourly'} average`;
  }
  get topZoneName(): string { return this.kpis.worstCamera?.name ?? '—'; }
  get topZoneSub(): string {
    if (!this.kpis.worstCamera) return 'No data';
    const pct = (this.kpis.worstCamera.count / (this.kpis.total || 1)) * 100;
    return `${this.kpis.worstCamera.count} violations · ${pct.toFixed(0)}% of all events`;
  }

  get rangeLabel(): string {
    const start = this.tableTotal === 0 ? 0 : (this.page - 1) * this.pageSize + 1;
    const end = Math.min(this.page * this.pageSize, this.tableTotal);
    return `${start} – ${end} of ${this.tableTotal}`;
  }

  openCameraAnalysis(): void {
    if (this.filtered.length === 0) return;
    const counts = new Map<string, number>();
    for (const i of this.filtered) counts.set(i.cameraId, (counts.get(i.cameraId) ?? 0) + 1);
    let topCam = this.filtered[0].cameraId; let top = 0;
    for (const [cam, c] of counts) if (c > top) { top = c; topCam = cam; }
    const cams = useCaseCameras(this.useCase === 'all' ? this.filtered[0].useCaseId : this.useCase).map((c) => c.camera);
    let idx = cams.findIndex((c) => c.id === topCam);
    if (idx < 0) { cams.unshift(CAMERA_BY_ID[topCam]); idx = 0; }
    this.stream = { cameras: cams, useCaseId: this.useCase === 'all' ? this.filtered[0].useCaseId : this.useCase, index: idx };
  }
}
