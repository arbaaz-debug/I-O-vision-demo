import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Evidence, Severity, StreamStatus } from './single-camera-view.types';

type SpeedTier = 0.5 | 1 | 2 | 4;

const SEVERITY_STYLES: Record<Severity, { bg: string; text: string }> = {
  High: { bg: '#FCEBEB', text: '#501313' },
  Medium: { bg: '#FAEEDA', text: '#5C3A06' },
  Low: { bg: '#EAF3DE', text: '#173404' },
};

const STATUS_DOT: Record<StreamStatus, string> = {
  streaming: '#97C459',
  loading: '#FAC775',
  offline: '#E24B4A',
};

const STATUS_LABEL: Record<StreamStatus, string> = {
  streaming: 'Streaming',
  loading: 'Loading',
  offline: 'Offline',
};

@Component({
  selector: 'app-single-camera-view',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Backdrop -->
    <div
      class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-900/55 py-6"
      (click)="onBackdropClick($event)"
    >
      <!-- Modal shell -->
      <div
        class="relative w-[85vw] max-w-[1280px] rounded-xl bg-white shadow-2xl"
        (click)="$event.stopPropagation()"
      >
        <!-- ============================================================ -->
        <!-- ZONE 1 — Header strip                                         -->
        <!-- ============================================================ -->
        <div class="flex items-start justify-between gap-4 border-b border-stone-200 px-5 py-4">
          <div class="min-w-0">
            <div class="flex items-baseline gap-2">
              <span class="text-[16px] font-medium text-stone-900">{{ evidence.cameraName }}</span>
              <span class="text-[13px] text-stone-500">· {{ evidence.zone }}</span>
            </div>
            <div class="mt-2 flex flex-wrap items-center gap-2">
              <span
                class="rounded-full px-2 py-0.5 text-[11px] font-medium"
                [style.background-color]="'#EAF3DE'"
                [style.color]="'#173404'"
              >
                {{ evidence.useCase }}
              </span>
              <span
                class="rounded-full px-2 py-0.5 text-[11px] font-medium"
                [style.background-color]="severityStyle.bg"
                [style.color]="severityStyle.text"
              >
                {{ evidence.severity }}
              </span>
              <span class="text-[12px] text-stone-500">{{ evidence.message }}</span>
            </div>
          </div>

          <div class="flex flex-col items-end">
            <div class="flex items-center gap-1">
              <button
                type="button"
                class="flex h-8 w-8 items-center justify-center rounded-md text-stone-700 hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40"
                [disabled]="currentIndex === 0"
                (click)="onPrevious()"
                aria-label="Previous evidence"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <span class="min-w-[58px] text-center font-mono text-[12px] text-stone-700">
                {{ currentIndex + 1 }} / {{ totalEvidences }}
              </span>
              <button
                type="button"
                class="flex h-8 w-8 items-center justify-center rounded-md text-stone-700 hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40"
                [disabled]="currentIndex >= totalEvidences - 1"
                (click)="onNext()"
                aria-label="Next evidence"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
              <div class="mx-1 h-5 w-px bg-stone-300"></div>
              <button
                type="button"
                class="flex h-8 w-8 items-center justify-center rounded-md text-stone-700 hover:bg-stone-100"
                (click)="onClose()"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>
            <span class="mt-1 text-[10px] uppercase tracking-wider text-stone-400">evidence</span>
          </div>
        </div>

        <!-- ============================================================ -->
        <!-- ZONE 2 — Video viewport                                       -->
        <!-- ============================================================ -->
        <div
          #viewport
          class="relative w-full overflow-hidden bg-[#1a1a1a]"
          style="aspect-ratio: 16 / 9;"
        >
          <!-- The scaled content -->
          <div
            class="absolute inset-0 flex items-center justify-center"
            [style.transform]="'scale(' + zoomLevel + ')'"
            style="transform-origin: center center;"
          >
            <ng-container *ngIf="evidence.videoUrl; else placeholder">
              <video
                #videoEl
                class="h-full w-full object-contain"
                [src]="evidence.videoUrl"
                preload="metadata"
                playsinline
                muted
              ></video>
            </ng-container>
            <ng-template #placeholder>
              <!-- Dark canvas with baked-in AI annotations -->
              <svg viewBox="0 0 800 450" class="h-full w-full">
                <rect width="800" height="450" fill="#1a1a1a" />
                <!-- Faint horizon lines so the canvas doesn't look broken -->
                <line x1="0" y1="300" x2="800" y2="300" stroke="#2a2a2a" stroke-width="1" />
                <line x1="0" y1="200" x2="800" y2="200" stroke="#222" stroke-width="1" />
                <!-- Blue zone polygon -->
                <polygon
                  points="180,110 660,130 720,400 130,395"
                  fill="#185FA5"
                  fill-opacity="0.15"
                  stroke="#185FA5"
                  stroke-width="1.5"
                />
                <text x="195" y="130" fill="#7BB4F2" font-size="11" font-family="ui-monospace, monospace">
                  zone: lab-floor
                </text>
                <!-- Red bounding box around 'person' -->
                <rect
                  x="340"
                  y="175"
                  width="120"
                  height="220"
                  fill="none"
                  stroke="#E24B4A"
                  stroke-width="2"
                />
                <rect x="340" y="158" width="120" height="18" fill="#E24B4A" />
                <text x="346" y="171" fill="#fff" font-size="11" font-family="ui-monospace, monospace">
                  No lab-coat · 0.92
                </text>
                <!-- Simple figure silhouette -->
                <circle cx="400" cy="215" r="22" fill="#3a3a3a" />
                <rect x="370" y="240" width="60" height="120" fill="#3a3a3a" rx="6" />
              </svg>
            </ng-template>
          </div>

          <!-- Top-left: stream status badge -->
          <div
            class="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1"
          >
            <span
              class="inline-block h-2 w-2 rounded-full"
              [style.background-color]="statusDot"
            ></span>
            <span class="text-[11px] font-medium text-white">{{ statusLabel }}</span>
          </div>

          <!-- Top-right: zoom + fullscreen -->
          <div class="absolute right-3 top-3 flex items-center gap-1.5">
            <button
              type="button"
              class="flex h-8 w-8 items-center justify-center rounded-md border border-white/30 bg-black/55 text-white hover:bg-black/70 disabled:opacity-40"
              [disabled]="zoomLevel >= 4"
              (click)="zoomIn()"
              aria-label="Zoom in"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.5" y2="16.5" />
                <line x1="8" y1="11" x2="14" y2="11" />
                <line x1="11" y1="8" x2="11" y2="14" />
              </svg>
            </button>
            <button
              type="button"
              class="flex h-8 w-8 items-center justify-center rounded-md border border-white/30 bg-black/55 text-white hover:bg-black/70 disabled:opacity-40"
              [disabled]="zoomLevel <= 1"
              (click)="zoomOut()"
              aria-label="Zoom out"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.5" y2="16.5" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </button>
            <button
              type="button"
              class="flex h-8 w-8 items-center justify-center rounded-md border border-white/30 bg-black/55 text-white hover:bg-black/70"
              (click)="toggleFullscreen()"
              aria-label="Fullscreen"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                <polyline points="4 9 4 4 9 4" />
                <polyline points="20 9 20 4 15 4" />
                <polyline points="20 15 20 20 15 20" />
                <polyline points="4 15 4 20 9 20" />
              </svg>
            </button>
          </div>

          <!-- Bottom-left: timestamp readout -->
          <div class="absolute bottom-3 left-3 rounded-md bg-black/55 px-2 py-1">
            <span class="font-mono text-[12px] text-white">{{ formattedPlayheadTime }}</span>
          </div>

          <!-- Bottom-right: zoom level -->
          <div class="absolute bottom-3 right-3 rounded-md bg-black/40 px-1.5 py-0.5">
            <span class="font-mono text-[10px] text-white/70">{{ zoomLevel.toFixed(1) }}×</span>
          </div>
        </div>

        <!-- ============================================================ -->
        <!-- ZONE 3 — Control strip                                        -->
        <!-- ============================================================ -->
        <div class="border-b border-stone-200 px-5 py-4">
          <!-- Row A: scrubber -->
          <div class="relative pb-5">
            <div
              #track
              class="relative h-1.5 cursor-pointer rounded-full bg-stone-200"
              (mousedown)="onTrackMouseDown($event)"
            >
              <!-- Evidence band (amber) -->
              <div
                class="absolute top-0 h-full rounded-full"
                [style.left.%]="evidenceBandLeftPct"
                [style.width.%]="evidenceBandWidthPct"
                [style.background-color]="'#FAC775'"
              ></div>
              <!-- Played-progress fill -->
              <div
                class="absolute top-0 h-full rounded-full bg-stone-500/55"
                [style.width.%]="playedFillPct"
              ></div>
              <!-- Playhead thumb -->
              <div
                class="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-white"
                [style.left.%]="playheadPct"
                [style.border-color]="'#185FA5'"
              ></div>
            </div>
            <!-- Labels below track -->
            <div class="mt-2 flex items-center justify-between">
              <span class="font-mono text-[10px] text-stone-500">{{ windowStartLabel }}</span>
              <span
                class="font-mono text-[10px] font-medium"
                [style.color]="'#BA7517'"
              >▼ evidence window</span>
              <span class="font-mono text-[10px] text-stone-500">{{ windowEndLabel }}</span>
            </div>
          </div>

          <!-- Row B: playback controls + offset readout -->
          <div class="mt-2 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="flex h-8 w-8 items-center justify-center rounded-md text-stone-700 hover:bg-stone-100"
                (click)="frameStep(-1)"
                aria-label="Previous frame"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                  <polygon points="19 20 9 12 19 4" fill="currentColor" />
                  <line x1="6" y1="4" x2="6" y2="20" />
                </svg>
              </button>
              <button
                type="button"
                class="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-stone-900 text-white hover:bg-stone-800"
                (click)="togglePlay()"
                [attr.aria-label]="isPlaying ? 'Pause' : 'Play'"
              >
                <svg *ngIf="!isPlaying" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 4 20 12 6 20" />
                </svg>
                <svg *ngIf="isPlaying" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              </button>
              <button
                type="button"
                class="flex h-8 w-8 items-center justify-center rounded-md text-stone-700 hover:bg-stone-100"
                (click)="frameStep(1)"
                aria-label="Next frame"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                  <polygon points="5 4 15 12 5 20" fill="currentColor" />
                  <line x1="18" y1="4" x2="18" y2="20" />
                </svg>
              </button>

              <div class="mx-1 h-5 w-px bg-stone-300"></div>

              <div class="flex items-center gap-0.5 rounded-md bg-stone-100 p-0.5">
                <button
                  *ngFor="let s of speedTiers"
                  type="button"
                  class="rounded px-2 py-1 font-mono text-[11px] text-stone-600"
                  [class.bg-white]="playbackSpeed === s"
                  [class.shadow-sm]="playbackSpeed === s"
                  [class.text-stone-900]="playbackSpeed === s"
                  (click)="setSpeed(s)"
                >{{ s }}×</button>
              </div>
            </div>

            <div class="font-mono text-[11px] text-stone-600">
              {{ formattedOffset }} / ±{{ formattedHalfWindow }} · evidence clip
            </div>
          </div>
        </div>

        <!-- ============================================================ -->
        <!-- ZONE 4 — Secondary strip                                      -->
        <!-- ============================================================ -->
        <div class="flex items-center justify-between border-b border-stone-200 px-5 py-3">
          <div class="flex items-center gap-4 text-[12px]">
            <div>
              <span class="text-stone-500">Quality: </span>
              <span class="font-medium text-stone-900">HD · Annotated</span>
            </div>
            <div class="h-4 w-px bg-stone-300"></div>
            <div>
              <span class="text-stone-500">Source: </span>
              <span class="font-medium text-stone-900">IO Lens evidence</span>
            </div>
          </div>
          <button
            type="button"
            class="rounded-full border px-3 py-1.5 text-[12px] font-medium"
            [style.background-color]="'#FCEBEB'"
            [style.border-color]="'#F09595'"
            [style.color]="'#501313'"
            (click)="onGoLive()"
          >Go to live</button>
        </div>

        <!-- ============================================================ -->
        <!-- ZONE 5 — Export section                                       -->
        <!-- ============================================================ -->
        <div class="relative rounded-b-xl px-5 pb-6 pt-7" [style.background-color]="'#FAEEDA'">
          <div
            class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone-50 px-2.5 py-1 shadow-sm"
          >
            <span class="text-[10px] uppercase tracking-wider text-stone-500">scroll for export</span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-[13px] font-medium text-stone-900">Export evidence</span>
            <span class="text-[11px] text-stone-600">
              Bakes timestamp, camera name and plant name into the file
            </span>
          </div>

          <div class="mt-4 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <button
                type="button"
                class="flex items-center gap-2 rounded-md border border-stone-300 bg-white px-3 py-2 text-[12px] font-medium text-stone-800 hover:bg-stone-50"
                (click)="onSnapshot()"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                  <path d="M3 7h3l2-3h8l2 3h3v13H3z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                Snapshot (JPEG)
              </button>

              <button
                type="button"
                class="flex items-center gap-2 rounded-md border px-3 py-2 text-[12px] font-medium"
                [style.background-color]="'#E5F0FB'"
                [style.border-color]="'#B5D4F4'"
                [style.color]="'#042C53'"
                (click)="onExportClip()"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <line x1="7" y1="5" x2="7" y2="19" />
                  <line x1="17" y1="5" x2="17" y2="19" />
                  <line x1="3" y1="9" x2="7" y2="9" />
                  <line x1="3" y1="13" x2="7" y2="13" />
                  <line x1="17" y1="9" x2="21" y2="9" />
                  <line x1="17" y1="13" x2="21" y2="13" />
                </svg>
                Export clip (MP4)
              </button>
            </div>

            <span class="text-[11px] text-stone-600">
              Snapshot uses current frame · Clip uses full evidence window
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SingleCameraViewComponent implements OnChanges, OnDestroy {
  /** The evidence object to display. */
  @Input({ required: true }) evidence!: Evidence;
  /** Zero-based index in the parent list. */
  @Input({ required: true }) currentIndex!: number;
  /** Total count of evidences in the parent list. */
  @Input({ required: true }) totalEvidences!: number;

  /** Officer closed the modal. */
  @Output() close = new EventEmitter<void>();
  /** Officer requested the next evidence. */
  @Output() next = new EventEmitter<void>();
  /** Officer requested the previous evidence. */
  @Output() previous = new EventEmitter<void>();
  /** Officer pressed "Go to live". Parent decides what to do. */
  @Output() goLive = new EventEmitter<void>();
  /** Officer requested a JPEG snapshot at the current playhead position. */
  @Output() snapshot = new EventEmitter<{ timestamp: Date }>();
  /** Officer requested an MP4 clip of the AI evidence window. */
  @Output() exportClip = new EventEmitter<{ start: Date; end: Date }>();

  @ViewChild('viewport') viewportRef?: ElementRef<HTMLDivElement>;
  @ViewChild('track') trackRef?: ElementRef<HTMLDivElement>;
  @ViewChild('videoEl') videoElRef?: ElementRef<HTMLVideoElement>;

  readonly speedTiers: SpeedTier[] = [0.5, 1, 2, 4];

  /** Seconds offset from the violation anchor. Source of truth for the playhead. */
  currentOffsetSec = 0;
  isPlaying = false;
  playbackSpeed: SpeedTier = 1;
  zoomLevel = 1;
  streamStatus: StreamStatus = 'streaming';

  private tickHandle: number | null = null;
  private isDragging = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['evidence']) {
      this.resetForEvidence();
    }
  }

  ngOnDestroy(): void {
    this.stopTick();
  }

  // ---------------------------------------------------------------------------
  // Computed view values
  // ---------------------------------------------------------------------------

  get severityStyle() {
    return SEVERITY_STYLES[this.evidence.severity];
  }

  get statusDot(): string {
    return STATUS_DOT[this.streamStatus];
  }

  get statusLabel(): string {
    return STATUS_LABEL[this.streamStatus];
  }

  get windowSec(): number {
    return this.evidence.windowMinutes * 60;
  }

  get halfWindowSec(): number {
    return this.windowSec / 2;
  }

  get anchorDate(): Date {
    return new Date(this.evidence.timestamp);
  }

  get playheadDate(): Date {
    return new Date(this.anchorDate.getTime() + this.currentOffsetSec * 1000);
  }

  get playheadPct(): number {
    return ((this.currentOffsetSec + this.halfWindowSec) / this.windowSec) * 100;
  }

  get playedFillPct(): number {
    return this.playheadPct;
  }

  get evidenceBandWidthPct(): number {
    return (this.evidence.clipDurationSec / this.windowSec) * 100;
  }

  get evidenceBandLeftPct(): number {
    return 50 - this.evidenceBandWidthPct / 2;
  }

  get formattedPlayheadTime(): string {
    return this.formatTimestamp(this.playheadDate);
  }

  get windowStartLabel(): string {
    return this.formatClock(new Date(this.anchorDate.getTime() - this.halfWindowSec * 1000));
  }

  get windowEndLabel(): string {
    return this.formatClock(new Date(this.anchorDate.getTime() + this.halfWindowSec * 1000));
  }

  get formattedOffset(): string {
    const sign = this.currentOffsetSec < 0 ? '-' : '+';
    const abs = Math.abs(this.currentOffsetSec);
    const m = Math.floor(abs / 60);
    const s = Math.floor(abs % 60);
    return `${sign}${m}:${s.toString().padStart(2, '0')}`;
  }

  get formattedHalfWindow(): string {
    const m = Math.floor(this.halfWindowSec / 60);
    const s = Math.floor(this.halfWindowSec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  // ---------------------------------------------------------------------------
  // Playback
  // ---------------------------------------------------------------------------

  togglePlay(): void {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  private play(): void {
    if (this.currentOffsetSec >= this.halfWindowSec) {
      this.currentOffsetSec = -this.halfWindowSec;
    }
    this.isPlaying = true;
    this.startTick();
  }

  private pause(): void {
    this.isPlaying = false;
    this.stopTick();
  }

  private startTick(): void {
    this.stopTick();
    this.tickHandle = window.setInterval(() => {
      const next = this.currentOffsetSec + 0.1 * this.playbackSpeed;
      if (next >= this.halfWindowSec) {
        this.currentOffsetSec = this.halfWindowSec;
        this.pause();
      } else {
        this.currentOffsetSec = next;
        this.syncVideo();
      }
    }, 100);
  }

  private stopTick(): void {
    if (this.tickHandle !== null) {
      window.clearInterval(this.tickHandle);
      this.tickHandle = null;
    }
  }

  setSpeed(s: SpeedTier): void {
    this.playbackSpeed = s;
    if (this.isPlaying) {
      this.startTick();
    }
  }

  frameStep(direction: 1 | -1): void {
    if (this.isPlaying) {
      this.pause();
    }
    const delta = direction * (1 / 30);
    this.currentOffsetSec = this.clampOffset(this.currentOffsetSec + delta);
    this.syncVideo();
  }

  private clampOffset(v: number): number {
    return Math.max(-this.halfWindowSec, Math.min(this.halfWindowSec, v));
  }

  /** One-way sync: scrubber → video element. Video never pushes back. */
  private syncVideo(): void {
    const video = this.videoElRef?.nativeElement;
    if (!video) return;
    const clipStart = -this.evidence.clipDurationSec / 2;
    const inClip = this.currentOffsetSec - clipStart;
    if (inClip >= 0 && inClip <= this.evidence.clipDurationSec) {
      try {
        video.currentTime = inClip;
      } catch {
        // ignore — video may not be ready
      }
    }
  }

  // ---------------------------------------------------------------------------
  // Scrubber drag
  // ---------------------------------------------------------------------------

  onTrackMouseDown(event: MouseEvent): void {
    if (this.isPlaying) {
      this.pause();
    }
    this.isDragging = true;
    this.applyTrackPosition(event);
  }

  @HostListener('document:mousemove', ['$event'])
  onDocMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    this.applyTrackPosition(event);
  }

  @HostListener('document:mouseup')
  onDocMouseUp(): void {
    if (this.isDragging) {
      this.isDragging = false;
      this.syncVideo();
    }
  }

  private applyTrackPosition(event: MouseEvent): void {
    const track = this.trackRef?.nativeElement;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    this.currentOffsetSec = (ratio - 0.5) * this.windowSec;
  }

  // ---------------------------------------------------------------------------
  // Zoom & fullscreen
  // ---------------------------------------------------------------------------

  zoomIn(): void {
    this.zoomLevel = Math.min(4, this.zoomLevel + 0.5);
  }

  zoomOut(): void {
    this.zoomLevel = Math.max(1, this.zoomLevel - 0.5);
  }

  toggleFullscreen(): void {
    const el = this.viewportRef?.nativeElement;
    if (!el) return;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else if (el.requestFullscreen) {
      void el.requestFullscreen();
    }
  }

  // ---------------------------------------------------------------------------
  // Modal lifecycle
  // ---------------------------------------------------------------------------

  onClose(): void {
    this.stopTick();
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  onPrevious(): void {
    if (this.currentIndex > 0) {
      this.previous.emit();
    }
  }

  onNext(): void {
    if (this.currentIndex < this.totalEvidences - 1) {
      this.next.emit();
    }
  }

  onGoLive(): void {
    this.goLive.emit();
  }

  onSnapshot(): void {
    this.snapshot.emit({ timestamp: this.playheadDate });
  }

  onExportClip(): void {
    const half = this.evidence.clipDurationSec / 2;
    const anchorMs = this.anchorDate.getTime();
    this.exportClip.emit({
      start: new Date(anchorMs - half * 1000),
      end: new Date(anchorMs + half * 1000),
    });
  }

  // ---------------------------------------------------------------------------
  // Keyboard shortcuts
  // ---------------------------------------------------------------------------

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this.onClose();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        this.onPrevious();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.onNext();
        break;
      case ' ':
        event.preventDefault();
        this.togglePlay();
        break;
    }
  }

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  private resetForEvidence(): void {
    this.stopTick();
    this.isPlaying = false;
    this.playbackSpeed = 1;
    this.zoomLevel = 1;
    this.streamStatus = 'streaming';
    this.currentOffsetSec = -this.evidence.clipDurationSec / 2;
  }

  private formatTimestamp(d: Date): string {
    const day = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleString('en-GB', { month: 'short' });
    const year = d.getFullYear();
    return `${day} ${month} ${year} · ${this.formatClock(d)}`;
  }

  private formatClock(d: Date): string {
    const hh = d.getHours().toString().padStart(2, '0');
    const mm = d.getMinutes().toString().padStart(2, '0');
    const ss = d.getSeconds().toString().padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
  }
}
