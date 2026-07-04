import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconComponent } from '../ui/icon.component';
import { LiveFeedComponent } from '../ui/live-feed.component';
import { Incident } from '../data/model';
import { CAMERA_BY_ID } from '../data/reference';
import { USE_CASE_BY_ID } from '../core/tokens';

/**
 * Evidence viewer — one pop-up (Photo / Video tabs) used from both the Evidence
 * log and the use-case "latest evidence" strip. Slideshow across the whole log,
 * a "next 5 violations" queue on the right, per-tab downloads, and a jump to the
 * live stream. Background page scroll is locked while it is open.
 */
@Component({
  selector: 'app-evidence-viewer',
  standalone: true,
  imports: [CommonModule, IconComponent, LiveFeedComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 p-4" style="font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',sans-serif" (click)="close.emit()">
      <div class="flex max-h-[92vh] w-[95vw] max-w-[1120px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" (click)="$event.stopPropagation()">
        <!-- header -->
        <div class="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-3">
          <div class="min-w-0">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-[15px] font-semibold text-slate-900">{{ cam.name }}</span>
              <span class="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-500">{{ cam.ip }}</span>
            </div>
            <div class="text-[12px] text-slate-500">{{ cam.zone }} · Violation #{{ inc.id }} · Event {{ index + 1 }} of {{ entries.length }}</div>
          </div>
          <button type="button" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100" (click)="close.emit()" aria-label="Close">
            <app-icon name="x" [size]="18"></app-icon>
          </button>
        </div>

        <!-- body -->
        <div class="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1fr_300px]">
          <!-- left: tabs + media + meta + actions -->
          <div class="flex min-h-0 flex-col overflow-y-auto lg:border-r lg:border-slate-200">
            <div class="px-5 pt-3">
              <div class="inline-flex rounded-lg bg-slate-100 p-0.5">
                <button type="button" class="flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-[13px] font-semibold transition" [ngClass]="tab === 'video' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'" (click)="tab = 'video'">
                  <app-icon name="video" [size]="15"></app-icon> Video
                </button>
                <button type="button" class="flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-[13px] font-semibold transition" [ngClass]="tab === 'photo' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'" (click)="tab = 'photo'">
                  <app-icon name="camera" [size]="15"></app-icon> Photo
                </button>
              </div>
            </div>

            <div class="relative mx-5 mt-3 overflow-hidden rounded-xl bg-[#0d1016]" style="aspect-ratio:16/10">
              <div *ngIf="tab === 'photo'" class="absolute inset-0" [innerHTML]="safeFrame"></div>
              <app-live-feed *ngIf="tab === 'video'" [scene]="cam.scene" [seed]="index + 2" mode="rewind" [timeLabel]="clock(inc.timestamp)" [violation]="true"></app-live-feed>
              <span *ngIf="tab === 'photo'" class="absolute left-3 top-3 rounded-md bg-black/70 px-2 py-0.5 font-mono text-[11px] text-white">EVIDENCE STILL</span>
              <button type="button" class="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70" (click)="prev()" aria-label="Previous"><app-icon name="chevronLeft" [size]="18"></app-icon></button>
              <button type="button" class="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70" (click)="next()" aria-label="Next"><app-icon name="chevronRight" [size]="18"></app-icon></button>
            </div>

            <div class="px-5 py-4">
              <span class="rounded-full px-2 py-0.5 text-[11px] font-semibold" [style.background-color]="uc.color + '22'" [style.color]="uc.color">{{ uc.name }}</span>
              <div class="mt-2 text-[13.5px] font-medium text-slate-800">{{ inc.message }}</div>
              <div class="font-mono text-[11.5px] text-slate-400">{{ fullTime(inc.timestamp) }}</div>

              <div class="mt-4 flex flex-wrap items-center gap-2.5">
                <button *ngIf="tab === 'photo'" type="button" (click)="downloadImage()" class="inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-4 py-2.5 text-[13.5px] font-semibold text-white hover:bg-[#1e293b]">
                  <app-icon name="download" [size]="16"></app-icon> Download image
                </button>
                <button *ngIf="tab === 'video'" type="button" (click)="downloadVideo()" class="inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-4 py-2.5 text-[13.5px] font-semibold text-white hover:bg-[#1e293b]">
                  <app-icon name="download" [size]="16"></app-icon> Download video
                </button>
                <button *ngIf="tab === 'video'" type="button" (click)="viewOnStream.emit(inc)" class="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-[13.5px] font-semibold text-slate-800 hover:bg-slate-50">
                  <app-icon name="video" [size]="16"></app-icon> View on stream video
                </button>
              </div>
            </div>
          </div>

          <!-- right: next 5 violations -->
          <div class="flex min-h-0 flex-col bg-slate-50">
            <div class="border-b border-slate-200 px-4 py-3">
              <div class="text-[13px] font-semibold text-slate-900">Next 5 violations</div>
              <div class="text-[11.5px] text-slate-500">in this log</div>
            </div>
            <div class="min-h-0 flex-1 space-y-2 overflow-y-auto p-3">
              <button *ngFor="let n of nextFive" type="button" (click)="goTo(n.idx)" class="block w-full rounded-lg border border-slate-200 bg-white p-2.5 text-left transition hover:border-[#3b82f6] hover:shadow-sm">
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-semibold text-slate-500">#{{ n.inc.id }}</span>
                  <span class="font-mono text-[11px] text-slate-500">{{ clock(n.inc.timestamp) }}</span>
                </div>
                <div class="mt-1 truncate text-[12.5px] font-medium text-slate-800">{{ camName(n.inc.cameraId) }}</div>
                <div class="truncate text-[11.5px] text-slate-500">{{ n.inc.message }}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class EvidenceViewerComponent implements OnInit, OnDestroy {
  @Input({ required: true }) entries!: Incident[];
  @Input() index = 0;
  @Input() tab: 'photo' | 'video' = 'photo';
  @Output() close = new EventEmitter<void>();
  @Output() viewOnStream = new EventEmitter<Incident>();

  private prevOverflow = '';

  constructor(private readonly san: DomSanitizer) {}

  ngOnInit(): void {
    // lock the page behind so only the pop-up scrolls
    this.prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
  ngOnDestroy(): void { document.body.style.overflow = this.prevOverflow; }

  get inc(): Incident { return this.entries[this.index]; }
  get cam() { return CAMERA_BY_ID[this.inc.cameraId]; }
  get uc() { return USE_CASE_BY_ID[this.inc.useCaseId]; }
  get safeFrame(): SafeHtml { return this.san.bypassSecurityTrustHtml(this.frameStr(this.inc)); }
  get nextFive(): { inc: Incident; idx: number }[] {
    const n = this.entries.length;
    const out: { inc: Incident; idx: number }[] = [];
    for (let i = 1; i <= Math.min(5, n - 1); i++) {
      const idx = (this.index + i) % n;
      out.push({ inc: this.entries[idx], idx });
    }
    return out;
  }

  prev(): void { this.index = (this.index - 1 + this.entries.length) % this.entries.length; }
  next(): void { this.index = (this.index + 1) % this.entries.length; }
  goTo(i: number): void { this.index = i; }

  camName(id: string): string { return CAMERA_BY_ID[id].name; }
  clock(ts: string): string { return ts.slice(11, 19); }
  fullTime(ts: string): string {
    const d = new Date(ts);
    return d.toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  private frameStr(inc: Incident): string {
    const c = this.uc.color;
    const b = inc.bbox;
    const x = (b.x / 100) * 640, y = (b.y / 100) * 400, w = (b.w / 100) * 640, h = (b.h / 100) * 400;
    const ppl = [90, 300, 500].map((px) => {
      const f = px > x && px < x + w ? '#8894a6' : '#9aa7b6';
      return `<circle cx="${px}" cy="150" r="26" fill="${f}"/><rect x="${px - 30}" y="188" width="60" height="96" rx="16" fill="${f}"/>`;
    }).join('');
    return `<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="640" height="400" fill="#d9e1ea"/>
      <rect y="296" width="640" height="104" fill="#c6d0dc"/>
      <line x1="0" y1="296" x2="640" y2="296" stroke="#b4c0ce" stroke-width="2"/>
      ${ppl}
      <rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${w.toFixed(0)}" height="${h.toFixed(0)}" fill="none" stroke="${c}" stroke-width="3" rx="3"/>
      <rect x="${x.toFixed(0)}" y="${(y - 18).toFixed(0)}" width="86" height="18" fill="${c}"/>
      <text x="${(x + 5).toFixed(0)}" y="${(y - 5).toFixed(0)}" font-family="monospace" font-size="12" fill="#fff" font-weight="bold">person</text>
      <text x="14" y="386" font-family="monospace" font-size="13" fill="#0f172a">${this.cam.name} · ${this.clock(inc.timestamp)}</text>
    </svg>`;
  }

  private fileBase(): string {
    return `${this.cam.name.replace(/\s+/g, '_')}_${this.inc.timestamp.replace(/[:T]/g, '-')}`;
  }

  private renderFrameImage(cb: (img: HTMLImageElement) => void): void {
    const url = URL.createObjectURL(new Blob([this.frameStr(this.inc)], { type: 'image/svg+xml' }));
    const img = new Image();
    img.onload = () => { cb(img); URL.revokeObjectURL(url); };
    img.src = url;
  }

  downloadImage(): void {
    this.renderFrameImage((img) => {
      const canvas = document.createElement('canvas');
      canvas.width = 640; canvas.height = 400;
      canvas.getContext('2d')!.drawImage(img, 0, 0, 640, 400);
      canvas.toBlob((blob) => { if (blob) this.saveBlob(blob, `${this.fileBase()}.png`); });
    });
  }

  downloadVideo(): void {
    this.renderFrameImage((img) => {
      const canvas = document.createElement('canvas');
      canvas.width = 640; canvas.height = 400;
      const ctx = canvas.getContext('2d')!;
      const capturable = canvas as HTMLCanvasElement & { captureStream?: (fps: number) => MediaStream };
      if (!capturable.captureStream || typeof MediaRecorder === 'undefined') {
        // fallback — no recording support: save the frame instead
        ctx.drawImage(img, 0, 0, 640, 400);
        canvas.toBlob((blob) => { if (blob) this.saveBlob(blob, `${this.fileBase()}_frame.png`); });
        return;
      }
      const rec = new MediaRecorder(capturable.captureStream(12), { mimeType: 'video/webm' });
      const chunks: BlobPart[] = [];
      rec.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data); };
      rec.onstop = () => this.saveBlob(new Blob(chunks, { type: 'video/webm' }), `${this.fileBase()}_clip.webm`);
      rec.start();
      let f = 0;
      const iv = setInterval(() => {
        ctx.drawImage(img, 0, 0, 640, 400);
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.fillRect(0, (f * 26) % 400, 640, 2);
        f++;
      }, 66);
      setTimeout(() => { clearInterval(iv); rec.stop(); }, 1600);
    });
  }

  private saveBlob(blob: Blob, name: string): void {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (e.key === 'Escape') this.close.emit();
    else if (e.key === 'ArrowLeft') this.prev();
    else if (e.key === 'ArrowRight') this.next();
  }
}
