import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseCaseRow } from '../data/selectors';

@Component({
  selector: 'app-use-case-bars',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="flex flex-col gap-2.5">
    <div *ngIf="rows.length === 0" class="py-8 text-center text-[13px] text-[#64748B]">
      No incidents matching this filter
    </div>
    <div *ngFor="let r of rows" class="flex items-center gap-3">
      <div class="w-40 flex-none truncate text-[12px] text-[#0F172A]" [title]="r.name">{{ r.name }}</div>
      <div class="relative h-5 flex-1 overflow-hidden rounded bg-[#F1F5F9]">
        <div
          class="h-full rounded"
          [style.width.%]="max ? (r.count / max) * 100 : 0"
          [style.background-color]="r.color"
        ></div>
      </div>
      <div class="w-24 flex-none text-right text-[12px] tabular-nums text-[#0F172A]">
        {{ r.count }} <span class="text-[#64748B]">({{ r.pct | number: '1.0-0' }}%)</span>
      </div>
    </div>
  </div>`,
})
export class UseCaseBarsComponent {
  @Input({ required: true }) rows: UseCaseRow[] = [];
  get max(): number {
    return this.rows.reduce((m, r) => Math.max(m, r.count), 0);
  }
}
