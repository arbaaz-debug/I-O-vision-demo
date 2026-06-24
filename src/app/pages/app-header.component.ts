import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../ui/icon.component';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<header class="flex items-center justify-between border-b border-[#E5E7EB] bg-white px-6 py-3">
    <div class="flex items-center gap-3">
      <button
        *ngIf="showBack"
        type="button"
        class="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] text-[#0F172A] hover:bg-[#F1F5F9]"
        (click)="back.emit()"
        aria-label="Back"
      >
        <app-icon name="back" [size]="18"></app-icon>
      </button>
      <h1 class="text-[20px] font-semibold text-[#0F172A]">{{ title }}</h1>
    </div>
    <div class="flex items-center gap-4">
      <div class="relative text-[#475569]">
        <app-icon name="bell" [size]="20"></app-icon>
        <span class="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#EF4444] px-1 text-[10px] font-semibold text-white">0</span>
      </div>
      <div class="relative h-9 w-9 rounded-full bg-gradient-to-br from-[#475569] to-[#0F172A]">
        <span class="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#22C55E]"></span>
      </div>
    </div>
  </header>`,
})
export class AppHeaderComponent {
  @Input() title = 'Vision Dashboard';
  @Input() showBack = false;
  @Output() back = new EventEmitter<void>();
}
