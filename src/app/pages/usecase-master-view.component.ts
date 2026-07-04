import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../ui/icon.component';
import { LiveFeedComponent } from '../ui/live-feed.component';
import { CameraFeedModalComponent } from './camera-feed-modal.component';
import { EvidenceViewerComponent } from './evidence-viewer.component';
import { USE_CASE_BY_ID, UseCaseId } from '../core/tokens';
import { Camera, Incident } from '../data/model';
import { useCaseCameras, useCaseIncidents, useCaseViolations, Vio } from '../data/usecase-data';

/**
 * Use-case master view — the grid of every camera watching this use case, each a
 * live tile with its IP + location. A top strip shows the latest 5 violation
 * evidences and the time since the last one. "View Dashboard" jumps to the detail
 * dashboard; clicking any camera opens its live pop-up.
 */
@Component({
  selector: 'app-usecase-master-view',
  standalone: true,
  imports: [CommonModule, IconComponent, LiveFeedComponent, CameraFeedModalComponent, EvidenceViewerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="h-full overflow-y-auto bg-[#F5F6F8]">
      <div class="mx-auto max-w-[1240px] px-6 py-6">
        <!-- ===== hero strip ===== -->
        <div class="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div class="flex items-center gap-4">
            <span class="flex h-12 w-12 items-center justify-center rounded-xl text-white" [style.background-color]="uc.color">
              <app-icon [name]="uc.icon" [size]="24"></app-icon>
            </span>
            <div>
              <h2 class="text-[22px] font-bold tracking-tight text-slate-900">{{ uc.name }}</h2>
              <p class="text-[13px] text-slate-500">{{ uc.description }}</p>
            </div>
          </div>
          <div class="flex items-center gap-5">
            <div class="text-right">
              <div class="text-[11px] font-medium uppercase tracking-wide text-slate-400">Time since last violation</div>
              <div class="text-[20px] font-bold" [style.color]="uc.color">{{ timeSince }}</div>
              <div class="font-mono text-[11px] text-slate-400">{{ lastAt }}</div>
            </div>
            <button
              type="button"
              (click)="viewDashboard.emit()"
              class="inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-5 py-3 text-[14px] font-bold text-white shadow-sm transition hover:bg-[#1E293B]"
            >
              View Dashboard
              <app-icon name="arrowRight" [size]="17"></app-icon>
            </button>
          </div>
        </div>

        <!-- ===== latest 5 violation evidences (use-case level) ===== -->
        <div class="mt-6">
          <div class="mb-3 flex items-center gap-2">
            <app-icon name="triangleAlert" [size]="16"></app-icon>
            <h3 class="text-[15px] font-semibold text-slate-900">Latest violation evidence</h3>
            <span class="text-[12.5px] text-slate-400">· {{ totalViolations }} total on this use case</span>
            <button
              type="button"
              (click)="viewViolations.emit(undefined)"
              class="ml-auto inline-flex items-center gap-1 text-[13px] font-semibold text-slate-600 transition hover:text-[#3D5AF0]"
            >
              View all violations <app-icon name="arrowRight" [size]="15"></app-icon>
            </button>
          </div>
          <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            <button
              *ngFor="let v of latest; let i = index"
              type="button"
              (click)="openEvidence(i)"
              class="group overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div class="relative bg-black" style="aspect-ratio:16/9">
                <app-live-feed [scene]="sceneOf(v.cameraId)" [seed]="i + 2" mode="rewind" [timeLabel]="clock(v.timestamp)" [violation]="true"></app-live-feed>
              </div>
              <div class="p-2.5">
                <div class="truncate text-[12.5px] font-semibold text-slate-800">{{ v.cameraName }}</div>
                <div class="mt-0.5 flex items-center justify-between">
                  <span class="font-mono text-[10.5px] text-slate-400">{{ v.ip }}</span>
                  <span class="font-mono text-[10.5px] text-slate-500">{{ clock(v.timestamp) }}</span>
                </div>
              </div>
            </button>
          </div>
        </div>

        <!-- ===== camera grid ===== -->
        <div class="mt-8">
          <div class="mb-3 flex items-center gap-2">
            <app-icon name="video" [size]="16"></app-icon>
            <h3 class="text-[15px] font-semibold text-slate-900">Cameras</h3>
            <span class="text-[12.5px] text-slate-400">· {{ cameras.length }} watching this use case</span>
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <button
              *ngFor="let c of cameras; let i = index"
              type="button"
              (click)="openCamera(i)"
              class="group overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div class="relative bg-black" style="aspect-ratio:16/9">
                <app-live-feed [scene]="c.camera.scene" [seed]="i + 1" [violation]="i % 3 === 0"></app-live-feed>
                <span class="absolute right-2 top-2 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold text-white">{{ c.count }} events</span>
              </div>
              <div class="flex items-center justify-between p-3">
                <div class="min-w-0">
                  <div class="truncate text-[13.5px] font-semibold text-slate-900">{{ c.camera.name }}</div>
                  <div class="truncate text-[12px] text-slate-500">{{ c.camera.zone }}</div>
                </div>
                <div class="ml-2 shrink-0 text-right">
                  <div class="font-mono text-[11.5px] text-slate-600">{{ c.camera.ip }}</div>
                  <div class="mt-0.5 inline-flex items-center gap-1 text-[10.5px] font-medium text-[#16A34A]">
                    <span class="inline-block h-1.5 w-1.5 rounded-full bg-[#16A34A]"></span> live
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <app-camera-feed-modal
      *ngIf="modalOpen"
      [cameras]="cameraList"
      [useCaseId]="useCaseId"
      [index]="modalIndex"
      (close)="modalOpen = false"
      (viewViolations)="viewViolations.emit($event)"
    ></app-camera-feed-modal>

    <app-evidence-viewer
      *ngIf="evViewer"
      [entries]="evViewer.entries"
      [index]="evViewer.index"
      [tab]="evViewer.tab"
      (close)="evViewer = null"
      (viewOnStream)="onEvViewOnStream($event)"
    ></app-evidence-viewer>
  `,
})
export class UseCaseMasterViewComponent implements OnChanges {
  @Input({ required: true }) useCaseId!: UseCaseId;
  @Output() viewDashboard = new EventEmitter<void>();
  /** Deep-link to the dashboard's non-compliance list; payload = optional camera id to pre-filter. */
  @Output() viewViolations = new EventEmitter<string | undefined>();

  cameras: { camera: Camera; count: number }[] = [];
  cameraList: Camera[] = [];
  latest: Vio[] = [];
  incidents: Incident[] = [];
  totalViolations = 0;
  timeSince = '—';
  lastAt = '';

  modalOpen = false;
  modalIndex = 0;
  evViewer: { entries: Incident[]; index: number; tab: 'photo' | 'video' } | null = null;

  get uc() {
    return USE_CASE_BY_ID[this.useCaseId];
  }

  ngOnChanges(): void {
    const vios = useCaseViolations(this.useCaseId);
    this.totalViolations = vios.length;
    this.latest = vios.slice(0, 5);
    this.incidents = useCaseIncidents(this.useCaseId);
    this.cameras = useCaseCameras(this.useCaseId);
    this.cameraList = this.cameras.map((c) => c.camera);
    this.modalOpen = false;
    this.evViewer = null;

    if (vios.length) {
      const top = vios[0];
      const ago = 2 + (top.id % 26); // deterministic, believable "minutes ago"
      this.timeSince = `${ago} min ago`;
      this.lastAt = `at ${this.clock(top.timestamp)}`;
    } else {
      this.timeSince = 'No violations';
      this.lastAt = '';
    }
  }

  openCamera(i: number): void {
    this.modalIndex = i;
    this.modalOpen = true;
  }
  openCameraById(cameraId: string): void {
    const i = this.cameraList.findIndex((c) => c.id === cameraId);
    this.openCamera(i < 0 ? 0 : i);
  }

  /** open the shared evidence pop-up on the i-th latest evidence */
  openEvidence(i: number): void {
    this.evViewer = { entries: this.incidents, index: i, tab: 'photo' };
  }
  onEvViewOnStream(inc: Incident): void {
    this.evViewer = null;
    this.openCameraById(inc.cameraId);
  }

  sceneOf(cameraId: string) {
    return this.cameraList.find((c) => c.id === cameraId)?.scene ?? 'factory';
  }
  clock(ts: string): string {
    return ts.slice(11, 19);
  }
}
