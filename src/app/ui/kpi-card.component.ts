import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { ACTION } from '../core/tokens';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div
    class="flex items-start justify-between rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.05)]"
  >
    <div class="min-w-0">
      <div class="text-[13px] font-medium text-[#64748B]">{{ label }}</div>
      <div class="mt-1 text-[#0F172A]" [ngClass]="valueClass" [title]="value + ''">{{ value }}</div>
      <div *ngIf="sub" class="mt-2 text-[12px] text-[#64748B]">{{ sub }}</div>
      <div *ngIf="delta" class="mt-1 flex items-center gap-1 text-[12px] font-semibold" [style.color]="deltaColor">
        <span>{{ deltaUp ? '↑' : '↓' }}</span><span>{{ delta }}</span>
      </div>
    </div>
    <div
      class="flex h-11 w-11 flex-none items-center justify-center rounded-[10px] text-white"
      [style.background-color]="iconBg"
    >
      <app-icon [name]="icon" [size]="20"></app-icon>
    </div>
  </div>`,
})
export class KpiCardComponent {
  @Input({ required: true }) label = '';
  @Input({ required: true }) value: string | number | null = '';
  @Input() sub = '';
  /** Tailwind classes controlling the big value's size/weight/wrapping. */
  @Input() valueClass = 'truncate text-[28px] font-bold leading-none';
  @Input() delta = '';
  @Input() deltaUp = true;
  /** true => up is bad (incident counts). false => up is good (efficiency). */
  @Input() upIsBad = true;
  @Input() icon = 'triangleAlert';
  @Input() iconBg: string = ACTION.blue;

  get deltaColor(): string {
    const bad = this.deltaUp === this.upIsBad; // up&upIsBad OR down&!upIsBad => bad
    return bad ? '#EF4444' : '#22C55E';
  }
}
