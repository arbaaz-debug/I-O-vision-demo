import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SceneId } from '../data/model';

/** Per-scene tint so each camera type reads differently (no real streams available). */
const SCENES: Record<SceneId, { from: string; to: string; accent: string; tag: string }> = {
  lab:           { from: '#213542', to: '#0d1820', accent: '#5eead4', tag: 'LAB' },
  factory:       { from: '#3a3340', to: '#1b1620', accent: '#f2a6b4', tag: 'PROD' },
  cooling_tower: { from: '#26303f', to: '#0f1722', accent: '#7cc4ff', tag: 'COOL' },
  road:          { from: '#2a2d33', to: '#121316', accent: '#c9ccd6', tag: 'ROAD' },
  loading_bay:   { from: '#3a2f2a', to: '#191410', accent: '#e6a15a', tag: 'BAY' },
  gate:          { from: '#232833', to: '#0e1117', accent: '#a8a2d4', tag: 'GATE' },
};

/**
 * A simulated live CCTV tile — animated procedurally so the grid/modal look
 * "streaming" without real video sources. Shows a moving scene, a sweeping scan
 * line, a detection box, a LIVE/REPLAY badge and a ticking timestamp.
 */
@Component({
  selector: 'app-live-feed',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host { display: block; position: relative; width: 100%; height: 100%; overflow: hidden; background: #0b0e13; }
      .layer { position: absolute; inset: 0; }
      .fig { position: absolute; border-radius: 40% 40% 45% 45%; box-shadow: 0 2px 6px rgba(0,0,0,.5); will-change: transform; }
      .fig::after { content:''; position:absolute; left:50%; top:-42%; width:60%; height:44%; transform:translateX(-50%); border-radius:50%; background:inherit; }
      @keyframes walkA { 0%{transform:translate(6%,66%)} 25%{transform:translate(40%,50%)} 50%{transform:translate(78%,58%)} 75%{transform:translate(44%,72%)} 100%{transform:translate(6%,66%)} }
      @keyframes walkB { 0%{transform:translate(82%,40%)} 50%{transform:translate(24%,76%)} 100%{transform:translate(82%,40%)} }
      @keyframes walkC { 0%{transform:translate(50%,30%)} 50%{transform:translate(58%,80%)} 100%{transform:translate(50%,30%)} }
      @keyframes scan { 0%{top:-6%;opacity:0} 8%{opacity:.55} 92%{opacity:.55} 100%{top:104%;opacity:0} }
      @keyframes pulse { 0%,70%{opacity:1} 85%{opacity:.25} 100%{opacity:1} }
      @keyframes grain { 0%,100%{opacity:.05} 50%{opacity:.11} }
      .figA { animation: walkA 16s ease-in-out infinite; }
      .figB { animation: walkB 21s ease-in-out infinite; }
      .figC { animation: walkC 13s ease-in-out infinite; }
      .scan { animation: scan 5s linear infinite; }
      .rec { animation: pulse 1.5s ease-in-out infinite; }
      .grain { animation: grain .5s steps(2) infinite; }
      :host(.paused) .figA, :host(.paused) .figB, :host(.paused) .figC, :host(.paused) .scan { animation-play-state: paused; }
    `,
  ],
  template: `
    <!-- scene wash -->
    <div class="layer" [style.background]="'radial-gradient(120% 90% at 50% 12%,' + s.from + ' 0%,' + s.to + ' 100%)'"></div>

    <!-- perspective floor -->
    <svg class="layer" viewBox="0 0 320 180" preserveAspectRatio="none" style="opacity:.5">
      <line x1="0" y1="118" x2="320" y2="118" [attr.stroke]="s.accent" stroke-opacity="0.18" />
      <line x1="160" y1="118" x2="30" y2="180" [attr.stroke]="s.accent" stroke-opacity="0.13" />
      <line x1="160" y1="118" x2="290" y2="180" [attr.stroke]="s.accent" stroke-opacity="0.13" />
      <line x1="160" y1="118" x2="160" y2="180" [attr.stroke]="s.accent" stroke-opacity="0.1" />
      <line x1="0" y1="150" x2="320" y2="150" [attr.stroke]="s.accent" stroke-opacity="0.08" />
    </svg>

    <!-- moving figures -->
    <div class="fig figA" [style.width.%]="7" [style.height.%]="16" [style.background]="s.accent" [style.animation-delay]="d(0)"></div>
    <div class="fig figB" [style.width.%]="6" [style.height.%]="14" [style.background]="'#e7e2da'" [style.animation-delay]="d(1)"></div>
    <div class="fig figC" [style.width.%]="6.5" [style.height.%]="15" [style.background]="s.accent" [style.animation-delay]="d(2)" *ngIf="seed % 2 === 0"></div>

    <!-- detection box -->
    <div
      class="layer"
      style="pointer-events:none"
    >
      <div
        class="rec"
        [style.position]="'absolute'"
        [style.left.%]="violation ? 34 : 12"
        [style.top.%]="violation ? 40 : 18"
        [style.width.%]="20"
        [style.height.%]="34"
        [style.border]="'1.5px solid ' + (violation ? '#ff5b52' : s.accent)"
        [style.box-shadow]="'0 0 0 9999px rgba(0,0,0,0)'"
      >
        <span
          class="absolute -top-[15px] left-0 px-1 text-[8px] font-semibold text-white"
          [style.background]="violation ? '#ff5b52' : s.accent"
          [style.color]="violation ? '#fff' : '#04211d'"
        >{{ violation ? 'ALERT 0.9' : 'ok 0.4' }}</span>
      </div>
    </div>

    <!-- scan line -->
    <div class="scan" style="position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)"></div>
    <!-- grain + vignette -->
    <div class="layer grain" style="background:repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 3px);mix-blend-mode:overlay"></div>
    <div class="layer" style="box-shadow:inset 0 0 60px 10px rgba(0,0,0,.55)"></div>

    <!-- badges -->
    <div class="absolute left-2 top-2 flex items-center gap-1.5 rounded bg-black/55 px-1.5 py-0.5">
      <span *ngIf="mode === 'live'" class="rec inline-block h-1.5 w-1.5 rounded-full bg-[#ff4d4d]"></span>
      <span class="text-[9px] font-bold tracking-wider text-white">{{ mode === 'live' ? 'LIVE' : 'REPLAY' }}</span>
      <span class="text-[9px] font-semibold text-white/60">· {{ s.tag }}</span>
    </div>
    <div class="absolute bottom-2 right-2 rounded bg-black/55 px-1.5 py-0.5">
      <span class="font-mono text-[9px] text-white/85">{{ timeLabel || clock }}</span>
    </div>
  `,
})
export class LiveFeedComponent implements OnInit, OnDestroy {
  @Input() scene: SceneId = 'factory';
  @Input() seed = 0;
  @Input() mode: 'live' | 'rewind' = 'live';
  @Input() violation = false;
  /** When set (rewind), overrides the ticking live clock. */
  @Input() timeLabel?: string;

  clock = '';
  private timer?: ReturnType<typeof setInterval>;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  get s() {
    return SCENES[this.scene] ?? SCENES.factory;
  }

  d(i: number): string {
    return `-${((this.seed * 3 + i * 5) % 17)}s`;
  }

  ngOnInit(): void {
    this.tick();
    this.timer = setInterval(() => this.tick(), 1000);
  }
  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
  private tick(): void {
    const d = new Date();
    const p = (n: number) => n.toString().padStart(2, '0');
    this.clock = `2026-06-03 ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
    this.cdr.markForCheck();
  }
}
