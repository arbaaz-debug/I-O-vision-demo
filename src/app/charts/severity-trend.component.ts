import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendBin } from '../data/selectors';
import { SEVERITY_COLOR } from '../core/tokens';

interface Seg { x: number; y: number; w: number; h: number; fill: string; }

@Component({
  selector: 'app-severity-trend',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div>
    <svg [attr.viewBox]="'0 0 ' + W + ' ' + H" class="w-full" [style.height.px]="220">
      <!-- y gridlines -->
      <g *ngFor="let g of yTicks">
        <line [attr.x1]="padL" [attr.x2]="W - padR" [attr.y1]="g.y" [attr.y2]="g.y" stroke="#EEF2F6" />
        <text [attr.x]="padL - 6" [attr.y]="g.y + 3" text-anchor="end" font-size="9" fill="#94A3B8">{{ g.v }}</text>
      </g>
      <!-- stacked bars -->
      <rect *ngFor="let s of segments" [attr.x]="s.x" [attr.y]="s.y" [attr.width]="s.w" [attr.height]="s.h" [attr.fill]="s.fill" />
      <!-- x labels every 3h -->
      <text *ngFor="let t of xLabels" [attr.x]="t.x" [attr.y]="H - 4" text-anchor="middle" font-size="9" fill="#94A3B8">{{ t.label }}</text>
    </svg>
    <div class="mt-2 flex items-center gap-4 text-[11px] text-[#64748B]">
      <span *ngFor="let s of legend" class="inline-flex items-center gap-1.5">
        <span class="inline-block h-2.5 w-2.5 rounded-sm" [style.background-color]="s.color"></span>{{ s.label }}
      </span>
    </div>
  </div>`,
})
export class SeverityTrendComponent {
  readonly W = 720;
  readonly H = 200;
  readonly padL = 28;
  readonly padR = 8;
  readonly padT = 8;
  readonly padB = 18;

  legend = [
    { label: 'High', color: SEVERITY_COLOR.High },
    { label: 'Medium', color: SEVERITY_COLOR.Medium },
    { label: 'Low', color: SEVERITY_COLOR.Low },
  ];

  private _bins: TrendBin[] = [];
  segments: Seg[] = [];
  yTicks: { y: number; v: number }[] = [];
  xLabels: { x: number; label: string }[] = [];

  /** Show every Nth x-axis label (3 for 24 hours, 5 for 30 days). */
  @Input() labelEvery = 3;

  @Input({ required: true }) set bins(value: TrendBin[]) {
    this._bins = value;
    this.build();
  }

  private build(): void {
    const plotW = this.W - this.padL - this.padR;
    const plotH = this.H - this.padT - this.padB;
    const n = this._bins.length || 1;
    const slot = plotW / n;
    const barW = slot * 0.62;
    const max = Math.max(1, ...this._bins.map((b) => b.High + b.Medium + b.Low));

    // round max up to a "nice" tick
    const mag = Math.pow(10, Math.max(1, Math.floor(Math.log10(max))));
    const niceMax = Math.ceil(max / mag) * mag || 10;
    this.yTicks = [0, 0.25, 0.5, 0.75, 1].map((f) => ({
      y: this.padT + plotH * (1 - f),
      v: Math.round(niceMax * f),
    }));

    const segs: Seg[] = [];
    this._bins.forEach((b, i) => {
      const x = this.padL + i * slot + (slot - barW) / 2;
      let yCursor = this.padT + plotH;
      ([['High', b.High], ['Medium', b.Medium], ['Low', b.Low]] as const).forEach(([sev, v]) => {
        const h = (v / niceMax) * plotH;
        yCursor -= h;
        if (h > 0) segs.push({ x, y: yCursor, w: barW, h, fill: SEVERITY_COLOR[sev] });
      });
    });
    this.segments = segs;

    this.xLabels = this._bins
      .map((b, i) => ({ x: this.padL + i * slot + slot / 2, label: b.label, i }))
      .filter((t) => t.i % this.labelEvery === 0);
  }
}
