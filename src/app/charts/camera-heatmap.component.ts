import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatRow } from '../data/selectors';

@Component({
  selector: 'app-camera-heatmap',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="overflow-x-auto">
    <table class="w-full table-fixed border-separate" style="border-spacing: 3px">
      <thead>
        <tr>
          <th class="w-44"></th>
          <th *ngFor="let label of colHeaders" class="text-[10px] font-normal text-[#94A3B8] whitespace-nowrap">{{ label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of rows">
          <td class="pr-2 text-right text-[11px] text-[#0F172A]"><span class="block w-44 truncate" [title]="row.name">{{ row.name }}</span></td>
          <td *ngFor="let c of row.cells; let i = index">
            <div
              class="h-6 w-full rounded-[3px]"
              [style.background-color]="cellColor(c)"
              [title]="row.name + ' @ ' + (colTitles[i] || '') + ' — ' + c + ' incidents'"
            ></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`,
})
export class CameraHeatmapComponent {
  /** Sparse header labels (one per column, '' to hide). */
  @Input() colHeaders: string[] = [];
  /** Full per-column labels for cell tooltips. */
  @Input() colTitles: string[] = [];

  private _rows: HeatRow[] = [];
  private max = 1;

  @Input({ required: true }) set rows(value: HeatRow[]) {
    this._rows = value;
    this.max = Math.max(1, ...value.flatMap((r) => r.cells));
  }
  get rows(): HeatRow[] {
    return this._rows;
  }

  cellColor(count: number): string {
    if (count === 0) return '#F1F5F9';
    const t = count / this.max; // 0..1
    // interpolate slate-200 -> amber -> red-500
    if (t < 0.5) {
      return this.lerp([226, 232, 240], [251, 191, 36], t / 0.5); // slate -> amber
    }
    return this.lerp([251, 191, 36], [239, 68, 68], (t - 0.5) / 0.5); // amber -> red
  }

  private lerp(a: number[], b: number[], t: number): string {
    const c = a.map((v, i) => Math.round(v + (b[i] - v) * t));
    return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
  }
}
