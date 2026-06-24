import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span
    class="inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
    [style.background-color]="color"
    [style.color]="textColor"
  >{{ label }}</span>`,
})
export class PillComponent {
  @Input({ required: true }) label = '';
  @Input({ required: true }) color = '#64748B';
  @Input() textColor = '#FFFFFF';
}
