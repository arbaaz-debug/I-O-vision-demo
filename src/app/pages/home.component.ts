import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../ui/icon.component';
import { USE_CASES, UseCaseId } from '../core/tokens';

/**
 * Faclon Labs · I/O Vision — branded landing page.
 * Visual language taken from the Faclon deck + faclon.com:
 *   cobalt-blue hero with blueprint grid · mint-green accents ·
 *   dark-navy CTA/footer band · heavy display type.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen bg-white">
      <!-- ============================================================ -->
      <!-- HERO — cobalt blue panel with blueprint grid                  -->
      <!-- ============================================================ -->
      <section
        class="relative overflow-hidden"
        style="background:radial-gradient(120% 120% at 80% 0%, #4F6BF5 0%, #3147C9 55%, #26329E 100%)"
      >
        <!-- blueprint grid texture -->
        <div
          class="pointer-events-none absolute inset-0"
          style="background-image:linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px);background-size:52px 52px;mask-image:radial-gradient(110% 100% at 30% 0%,#000 55%,transparent 100%)"
        ></div>
        <!-- soft glow blobs -->
        <div class="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full" style="background:radial-gradient(circle,#5EEAD433 0%,transparent 70%)"></div>

        <!-- top nav -->
        <header class="relative mx-auto flex max-w-[1180px] items-center justify-between px-8 py-6">
          <div class="flex items-center gap-4">
            <img src="/faclon-logo-white.png" alt="Faclon Labs" class="h-8 w-auto" />
            <span class="hidden h-6 w-px bg-white/25 sm:block"></span>
            <span class="hidden items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-wider text-white/90 ring-1 ring-white/15 sm:inline-flex">
              <app-icon name="camera" [size]="13"></app-icon> I/O Vision
            </span>
          </div>
          <div class="flex items-center gap-4">
            <span class="relative text-white/80">
              <app-icon name="bell" [size]="20"></app-icon>
              <span class="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#F59E0B] text-[9px] font-bold text-white">0</span>
            </span>
            <span class="relative inline-block h-9 w-9 overflow-hidden rounded-full bg-white/20 ring-2 ring-white/30">
              <span class="flex h-full w-full items-center justify-center text-[13px] font-semibold text-white">UN</span>
              <span class="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#34D399] ring-2 ring-[#3147C9]"></span>
            </span>
          </div>
        </header>

        <!-- hero content -->
        <div class="relative mx-auto max-w-[1180px] px-8 pb-20 pt-10 md:pt-16">
          <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[12.5px] font-semibold text-white/95 ring-1 ring-white/15">
            <span class="h-1.5 w-1.5 rounded-full bg-[#34D399]"></span> Faclon Labs Presents
          </span>

          <h1 class="mt-6 max-w-3xl text-[52px] font-extrabold leading-[1.05] tracking-tight text-white md:text-[68px]">
            I/O <span style="color:#9DB2FF">Vision</span>
          </h1>
          <p class="mt-3 text-[15px] font-semibold uppercase tracking-[0.14em] text-[#5EEAD4]">
            Camera-based AI for safety &amp; compliance
          </p>
          <p class="mt-4 max-w-xl text-[18px] leading-relaxed text-white/85">
            Turn the cameras you already have into a 24/7 compliance officer — detecting
            unsafe behaviour, missing safety gear and restricted-zone breaches the moment
            they happen, across your entire facility.
          </p>

          <div class="mt-9 flex flex-wrap items-center gap-3">
            <button
              type="button"
              class="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[15px] font-bold text-[#26329E] shadow-lg shadow-blue-900/20 transition hover:bg-[#F4F6FF]"
              (click)="showDemo.emit()"
            >
              Launch Dashboard
              <app-icon name="arrowRight" [size]="18"></app-icon>
            </button>
            <a
              href="#use-cases"
              class="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-white ring-1 ring-inset ring-white/30 transition hover:bg-white/10"
            >
              Explore use cases
            </a>
          </div>

          <!-- stats strip -->
          <div class="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15 sm:grid-cols-4">
            <div *ngFor="let s of stats" class="bg-[#2c3aa8]/40 px-5 py-4 backdrop-blur-sm">
              <div class="text-[26px] font-extrabold tracking-tight text-white">{{ s.value }}</div>
              <div class="mt-0.5 text-[12.5px] font-medium text-white/70">{{ s.label }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================================ -->
      <!-- USE CASES — light brand-blue section                          -->
      <!-- ============================================================ -->
      <section
        id="use-cases"
        class="relative overflow-hidden px-8 py-16"
        style="background:linear-gradient(180deg,#EAEFFF 0%,#F1F0FF 60%,#ECEFFF 100%)"
      >
        <!-- faint blueprint grid (brand blue) to tie into hero + footer -->
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

      <!-- ============================================================ -->
      <!-- CTA / FOOTER BAND — dark navy (deck footer)                   -->
      <!-- ============================================================ -->
      <section class="relative overflow-hidden bg-[#0A1222] px-8 py-16">
        <div
          class="pointer-events-none absolute inset-0"
          style="background-image:linear-gradient(rgba(255,255,255,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.045) 1px,transparent 1px);background-size:52px 52px;mask-image:radial-gradient(90% 120% at 70% 50%,#000 40%,transparent 100%)"
        ></div>
        <div class="relative mx-auto flex max-w-[1180px] flex-col items-center text-center">
          <img src="/faclon-logo-white.png" alt="Faclon Labs" class="h-9 w-auto" />
          <h2 class="mt-6 max-w-2xl text-[30px] font-extrabold tracking-tight text-white md:text-[38px]">
            Ready to see I/O Vision in action?
          </h2>
          <p class="mt-3 max-w-xl text-[16px] text-white/70">
            Step into a live compliance dashboard built from real detection data.
          </p>
          <button
            type="button"
            class="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#3D5AF0] px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-blue-900/40 transition hover:bg-[#4F6BF5]"
            (click)="showDemo.emit()"
          >
            Launch Dashboard
            <app-icon name="arrowRight" [size]="18"></app-icon>
          </button>

          <a
            href="https://www.faclon.com"
            target="_blank"
            rel="noopener"
            class="mt-9 inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/60 px-5 py-2 text-[13px] font-medium text-white/85 transition hover:border-[#F59E0B] hover:text-white"
          >
            www.faclon.com <span class="text-white/30">•</span> contact&#64;faclon.com
          </a>

          <div class="mt-8 text-[12px] text-white/40">
            © 2026 Faclon Labs · Industrial IoT &amp; AI for Smarter Operations
          </div>
        </div>
      </section>
    </div>
  `,
})
export class HomeComponent {
  readonly useCases = USE_CASES;
  readonly stats = [
    { value: '9+', label: 'Compliance use cases' },
    { value: '24/7', label: 'Live monitoring' },
    { value: '100k+', label: 'Assets digitised' },
    { value: '1M+', label: 'Insights / month' },
  ];
  @Output() showDemo = new EventEmitter<void>();
  @Output() selectUseCase = new EventEmitter<UseCaseId>();

  pad(n: number): string {
    return n.toString().padStart(2, '0');
  }
}
