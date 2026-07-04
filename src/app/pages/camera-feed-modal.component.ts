import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../ui/icon.component';
import { LiveFeedComponent } from '../ui/live-feed.component';
import { Camera } from '../data/model';
import { UseCaseId } from '../core/tokens';
import { cameraViolations, Vio } from '../data/usecase-data';

/**
 * Camera-level pop-up: a live feed the officer can page across (slideshow of the
 * use case's cameras), rewind into recorded history, with the camera's last-5
 * violations pinned on the right.
 */
@Component({
  selector: 'app-camera-feed-modal',
  standalone: true,
  imports: [CommonModule, IconComponent, LiveFeedComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4" (click)="close.emit()">
      <div class="flex max-h-[92vh] w-[94vw] max-w-[1200px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" (click)="$event.stopPropagation()">
        <!-- header -->
        <div class="flex items-center justify-between border-b border-slate-200 px-5 py-3">
          <div class="min-w-0">
            <div class="flex items-center gap-2">
              <span class="text-[15px] font-semibold text-slate-900">{{ cam.name }}</span>
              <span class="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-500">{{ cam.ip }}</span>
            </div>
            <div class="text-[12px] text-slate-500">{{ cam.zone }} · Camera {{ index + 1 }} / {{ cameras.length }}</div>
          </div>
          <button type="button" class="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100" (click)="close.emit()" aria-label="Close">
            <app-icon name="x" [size]="18"></app-icon>
          </button>
        </div>

        <div class="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1fr_320px]">
          <!-- main feed + controls -->
          <div class="flex min-h-0 flex-col border-r border-slate-200">
            <div class="relative bg-black" style="aspect-ratio:16/9">
              <app-live-feed [scene]="cam.scene" [seed]="index + 3" [mode]="mode" [violation]="mode === 'live'" [timeLabel]="mode === 'rewind' ? rewindLabel : undefined"></app-live-feed>
              <!-- slideshow arrows -->
              <button type="button" class="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70" (click)="prev()" aria-label="Previous camera">
                <app-icon name="chevronLeft" [size]="20"></app-icon>
              </button>
              <button type="button" class="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70" (click)="next()" aria-label="Next camera">
                <app-icon name="chevronRight" [size]="20"></app-icon>
              </button>
            </div>

            <!-- transport / rewind -->
            <div class="px-4 py-3">
              <div class="flex items-center gap-3">
                <button type="button" class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-700" (click)="togglePlay()" [attr.aria-label]="playing ? 'Pause' : 'Play'">
                  <app-icon [name]="playing ? 'pause' : 'play'" [size]="15"></app-icon>
                </button>
                <button type="button" class="flex h-8 items-center gap-1 rounded-full border border-slate-300 px-3 text-[12px] font-medium text-slate-700 hover:bg-slate-50" (click)="jumpBack()" title="Rewind 5 min">
                  <app-icon name="rewind" [size]="14"></app-icon> 5m
                </button>
                <input type="range" min="0" max="100" step="0.5" class="h-1.5 flex-1 accent-[#3D5AF0]" [value]="pct" (input)="onScrub($any($event.target).value)" />
                <span class="w-[130px] text-right font-mono text-[12px]" [style.color]="mode === 'live' ? '#16A34A' : '#475569'">
                  {{ mode === 'live' ? '● LIVE' : rewindLabel }}
                </span>
                <button *ngIf="mode === 'rewind'" type="button" class="rounded-full bg-[#16A34A] px-3 py-1 text-[11px] font-semibold text-white" (click)="goLive()">Go live</button>
              </div>

              <!-- camera filmstrip (slideshow) -->
              <div class="mt-3 flex gap-2 overflow-x-auto pb-1">
                <button
                  *ngFor="let c of cameras; let i = index"
                  type="button"
                  (click)="setIndex(i)"
                  class="relative h-12 w-20 shrink-0 overflow-hidden rounded-md transition"
                  [ngClass]="i === index ? 'ring-2 ring-[#3D5AF0]' : 'ring-1 ring-slate-200'"
                  [title]="c.name"
                >
                  <app-live-feed [scene]="c.scene" [seed]="i + 1"></app-live-feed>
                </button>
              </div>
            </div>
          </div>

          <!-- right: camera-level last 5 violations -->
          <div class="flex min-h-0 flex-col bg-slate-50">
            <div class="border-b border-slate-200 px-4 py-3">
              <div class="flex items-center justify-between gap-2">
                <div>
                  <div class="text-[13px] font-semibold text-slate-900">Last 5 violations</div>
                  <div class="text-[11.5px] text-slate-500">on this camera</div>
                </div>
                <button
                  type="button"
                  (click)="viewViolations.emit(cam.id)"
                  class="inline-flex items-center gap-1 whitespace-nowrap text-[12.5px] font-semibold text-slate-600 transition hover:text-[#3D5AF0]"
                >
                  View all <app-icon name="arrowRight" [size]="14"></app-icon>
                </button>
              </div>
            </div>
            <div class="min-h-0 flex-1 space-y-2 overflow-y-auto p-3">
              <div *ngIf="vios.length === 0" class="rounded-lg border border-dashed border-slate-300 p-4 text-center text-[12px] text-slate-400">No recent violations</div>
              <div *ngFor="let v of vios" class="rounded-lg border border-slate-200 bg-white p-2.5">
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-semibold text-slate-500">#{{ v.id }}</span>
                  <span class="font-mono text-[11px] text-slate-500">{{ clock(v.timestamp) }}</span>
                </div>
                <div class="mt-1.5 text-[12.5px] font-medium text-slate-800">{{ v.message }}</div>
                <div class="mt-0.5 font-mono text-[10.5px] text-slate-400">{{ cam.ip }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CameraFeedModalComponent implements OnInit, OnChanges, OnDestroy {
  @Input({ required: true }) cameras!: Camera[];
  @Input({ required: true }) useCaseId!: UseCaseId;
  @Input() index = 0;
  @Output() close = new EventEmitter<void>();
  /** "View all violations" for this camera → dashboard non-compliance list, pre-filtered. */
  @Output() viewViolations = new EventEmitter<string>();

  vios: Vio[] = [];
  playing = true;
  pct = 100; // 100 = live, lower = further back in the last hour
  mode: 'live' | 'rewind' = 'live';
  rewindLabel = '';

  private timer?: ReturnType<typeof setInterval>;

  get cam(): Camera {
    return this.cameras[this.index];
  }

  ngOnInit(): void {
    this.refresh();
    this.timer = setInterval(() => {
      if (this.playing && this.pct < 100) {
        this.pct = Math.min(100, this.pct + 1.5);
        this.applyMode();
      }
    }, 250);
  }
  ngOnChanges(): void {
    this.refresh();
  }
  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  private refresh(): void {
    this.vios = cameraViolations(this.useCaseId, this.cam.id).slice(0, 5);
  }

  setIndex(i: number): void {
    this.index = i;
    this.goLive();
    this.refresh();
  }
  prev(): void {
    this.setIndex((this.index - 1 + this.cameras.length) % this.cameras.length);
  }
  next(): void {
    this.setIndex((this.index + 1) % this.cameras.length);
  }

  togglePlay(): void {
    this.playing = !this.playing;
  }
  jumpBack(): void {
    this.pct = Math.max(0, this.pct - 8.3); // ~5 min of a 60-min buffer
    this.applyMode();
  }
  onScrub(v: string): void {
    this.pct = Number(v);
    this.applyMode();
  }
  goLive(): void {
    this.pct = 100;
    this.playing = true;
    this.applyMode();
  }
  private applyMode(): void {
    this.mode = this.pct >= 99.5 ? 'live' : 'rewind';
    if (this.mode === 'rewind') {
      const minutesBack = ((100 - this.pct) / 100) * 60;
      const d = new Date(Date.now() - minutesBack * 60000);
      const p = (n: number) => n.toString().padStart(2, '0');
      this.rewindLabel = `◀ ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
    }
  }

  clock(ts: string): string {
    return ts.slice(11, 19);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (e.key === 'Escape') this.close.emit();
    else if (e.key === 'ArrowLeft') this.prev();
    else if (e.key === 'ArrowRight') this.next();
  }
}
