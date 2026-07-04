import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../ui/icon.component';
import { FactoryHeroComponent } from '../three/factory-hero.component';
import { USE_CASES, UseCaseId } from '../core/tokens';

/**
 * Faclon Labs · I/O Vision — branded landing page.
 *   Fold 1 — a gallery hero: the "I/O Vision" title pushed to the back with a
 *            slowly-rotating 3D factory showpiece in front of it (the model
 *            overlaps the title and casts a shadow onto it).
 *   Fold 2 — the 9 compliance use cases.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IconComponent, FactoryHeroComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen bg-white">
      <!-- ============================================================ -->
      <!-- FOLD 1 — gallery hero: title behind + rotating 3D factory     -->
      <!-- ============================================================ -->
      <section
        class="relative min-h-screen overflow-hidden"
        style="background:radial-gradient(125% 90% at 50% 6%, #ffffff 0%, #eef2f8 46%, #e2e8f2 100%)"
      >
        <!-- faint blueprint grid (brand blue) -->
        <div
          class="pointer-events-none absolute inset-0"
          style="background-image:linear-gradient(rgba(61,90,240,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(61,90,240,0.05) 1px,transparent 1px);background-size:54px 54px;mask-image:radial-gradient(115% 80% at 50% 0%,#000 55%,transparent 100%)"
        ></div>
        <!-- soft mint glow -->
        <div class="pointer-events-none absolute -left-40 top-24 h-[28rem] w-[28rem] rounded-full" style="background:radial-gradient(circle,#5EEAD41f 0%,transparent 70%)"></div>

        <div class="relative mx-auto max-w-[1280px] px-6 sm:px-8">
          <!-- logo only (top-left) -->
          <img src="/faclon-logo-blue.png" alt="Faclon Labs" class="absolute left-6 top-6 z-30 h-8 w-auto sm:left-8" />

          <!-- STAGE: ghost title (top, pushed back) + 3D model on top -->
          <div class="relative mx-auto mt-[42px] h-[64vh] min-h-[480px] w-full">
            <h1
              class="pointer-events-none absolute inset-x-0 top-0 z-0 flex select-none justify-center text-center"
              style="font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display','Helvetica Neue',Arial,sans-serif;font-weight:600;letter-spacing:-0.045em;line-height:0.86;color:#c0c9d8;font-size:clamp(56px,13.5vw,184px)"
            >
              I/O&nbsp;Vision
            </h1>
            <app-factory-hero class="absolute inset-0 z-10"></app-factory-hero>
          </div>

          <!-- CTAs (moved one grid block lower; generous, even spacing) -->
          <div class="relative z-20 mt-[46px] flex flex-wrap items-center justify-center gap-4 pb-16">
            <button
              type="button"
              class="group inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-slate-900/15 transition hover:bg-[#1E293B]"
              (click)="showDemo.emit()"
            >
              Launch Dashboard
              <app-icon name="arrowRight" [size]="18"></app-icon>
            </button>
            <a
              href="#use-cases"
              class="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-slate-700 ring-1 ring-inset ring-slate-300 transition hover:bg-white"
            >
              Explore use cases
            </a>
          </div>
        </div>
      </section>

      <!-- ============================================================ -->
      <!-- FOLD 2 — the 9 use cases (light brand-blue section)           -->
      <!-- ============================================================ -->
      <section
        id="use-cases"
        class="relative overflow-hidden px-8 py-16"
        style="background:linear-gradient(180deg,#EAEFFF 0%,#F1F0FF 60%,#ECEFFF 100%)"
      >
        <!-- faint blueprint grid (brand blue) to tie into hero -->
        <div
          class="pointer-events-none absolute inset-0"
          style="background-image:linear-gradient(rgba(61,90,240,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(61,90,240,0.06) 1px,transparent 1px);background-size:52px 52px;mask-image:radial-gradient(120% 90% at 50% 0%,#000 60%,transparent 100%)"
        ></div>

        <div class="relative mx-auto max-w-[1100px]">
          <div class="mx-auto max-w-2xl text-center">
            <span class="text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#16A34A]">Detection Suite</span>
            <h2 class="mt-2 text-[32px] font-extrabold tracking-tight text-[#0F172A] md:text-[38px]">
              Multiple compliance use cases, one camera network
            </h2>
            <p class="mt-3 text-[15.5px] leading-relaxed text-[#475569]">
              Every I/O Vision model runs on your existing CCTV feeds — no new hardware. Each
              flags a specific safety or compliance risk and routes it to the dashboard in real time.
            </p>
          </div>

          <div class="mt-10 grid grid-cols-3 gap-3.5">
            <button
              *ngFor="let uc of useCases; let i = index"
              type="button"
              (click)="selectUseCase.emit(uc.id)"
              [title]="'Open ' + uc.name + ' in the dashboard'"
              class="group relative w-full overflow-hidden rounded-xl border border-white bg-white/80 p-4 text-left shadow-[0_1px_3px_rgba(15,23,42,0.06)] ring-1 ring-[#3D5AF0]/5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_26px_rgba(38,50,158,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5AF0]/40"
            >
              <span class="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100" [style.background-color]="uc.color"></span>
              <div class="flex items-center gap-2.5">
                <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" [style.background-color]="uc.color + '1F'" [style.color]="uc.color">
                  <app-icon [name]="uc.icon" [size]="18"></app-icon>
                </div>
                <span class="text-[10.5px] font-semibold text-[#94A3B8]">{{ pad(i + 1) }}</span>
                <span class="ml-auto translate-x-1 text-[#3D5AF0] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  <app-icon name="arrowRight" [size]="16"></app-icon>
                </span>
              </div>
              <div class="mt-3 text-[14.5px] font-bold text-[#0F172A]">{{ uc.name }}</div>
              <div class="mt-1 text-[12.5px] leading-snug text-[#64748B]">{{ uc.description }}</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class HomeComponent {
  readonly useCases = USE_CASES;
  @Output() showDemo = new EventEmitter<void>();
  @Output() selectUseCase = new EventEmitter<UseCaseId>();

  pad(n: number): string {
    return n.toString().padStart(2, '0');
  }
}
