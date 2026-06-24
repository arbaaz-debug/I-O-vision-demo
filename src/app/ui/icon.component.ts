import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from '../core/icons';

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg
    [attr.width]="size"
    [attr.height]="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    [attr.stroke-width]="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    [innerHTML]="markup"
  ></svg>`,
})
export class IconComponent {
  @Input({ required: true }) set name(value: string) {
    this.markup = this.sanitizer.bypassSecurityTrustHtml(ICONS[value] ?? '');
  }
  @Input() size = 18;
  @Input() strokeWidth = 1.6;
  markup: SafeHtml = '';
  constructor(private sanitizer: DomSanitizer) {}
}
