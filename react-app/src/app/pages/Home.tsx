import { Icon } from '../ui/Icon';
import { FactoryHero } from '../three/FactoryHero';
import { USE_CASES, UseCaseId } from '../core/tokens';

function pad(n: number): string {
  return n.toString().padStart(2, '0');
}

export function Home({
  onShowDemo,
  onSelectUseCase,
}: {
  onShowDemo: () => void;
  onSelectUseCase: (id: UseCaseId) => void;
}) {
  const useCases = USE_CASES;

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================================ */}
      {/* FOLD 1 — gallery hero: title behind + rotating 3D factory     */}
      {/* ============================================================ */}
      <section
        className="relative min-h-screen overflow-hidden"
        style={{ background: 'radial-gradient(125% 90% at 50% 6%, #ffffff 0%, #eef2f8 46%, #e2e8f2 100%)' }}
      >
        {/* faint blueprint grid (brand blue) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(61,90,240,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(61,90,240,0.05) 1px,transparent 1px)',
            backgroundSize: '54px 54px',
            maskImage: 'radial-gradient(115% 80% at 50% 0%,#000 55%,transparent 100%)',
          }}
        ></div>
        {/* soft mint glow */}
        <div
          className="pointer-events-none absolute -left-40 top-24 h-[28rem] w-[28rem] rounded-full"
          style={{ background: 'radial-gradient(circle,#5EEAD41f 0%,transparent 70%)' }}
        ></div>

        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8">
          {/* logo only (top-left) */}
          <img src="/faclon-logo-blue.png" alt="Faclon Labs" className="absolute left-6 top-6 z-30 h-8 w-auto sm:left-8" />

          {/* STAGE: ghost title (top, pushed back) + 3D model on top */}
          <div className="relative mx-auto mt-[42px] h-[64vh] min-h-[480px] w-full">
            <h1
              className="pointer-events-none absolute inset-x-0 top-0 z-0 flex select-none justify-center text-center"
              style={{
                fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display','Helvetica Neue',Arial,sans-serif",
                fontWeight: 600,
                letterSpacing: '-0.045em',
                lineHeight: 0.86,
                color: '#c0c9d8',
                fontSize: 'clamp(56px,13.5vw,184px)',
              }}
            >
              I/O&nbsp;Vision
            </h1>
            <div className="absolute inset-0 z-10">
              <FactoryHero />
            </div>
          </div>

          {/* CTAs (moved one grid block lower; generous, even spacing) */}
          <div className="relative z-20 mt-[46px] flex flex-wrap items-center justify-center gap-4 pb-16">
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-slate-900/15 transition hover:bg-[#1E293B]"
              onClick={() => onShowDemo()}
            >
              Launch Dashboard
              <Icon name="arrowRight" size={18} />
            </button>
            <a
              href="#use-cases"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-slate-700 ring-1 ring-inset ring-slate-300 transition hover:bg-white"
            >
              Explore use cases
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOLD 2 — the 9 use cases (light brand-blue section)           */}
      {/* ============================================================ */}
      <section
        id="use-cases"
        className="relative overflow-hidden px-8 py-16"
        style={{ background: 'linear-gradient(180deg,#EAEFFF 0%,#F1F0FF 60%,#ECEFFF 100%)' }}
      >
        {/* faint blueprint grid (brand blue) to tie into hero */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(61,90,240,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(61,90,240,0.06) 1px,transparent 1px)',
            backgroundSize: '52px 52px',
            maskImage: 'radial-gradient(120% 90% at 50% 0%,#000 60%,transparent 100%)',
          }}
        ></div>

        <div className="relative mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#16A34A]">Detection Suite</span>
            <h2 className="mt-2 text-[32px] font-extrabold tracking-tight text-[#0F172A] md:text-[38px]">
              Multiple compliance use cases, one camera network
            </h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-[#475569]">
              Every I/O Vision model runs on your existing CCTV feeds — no new hardware. Each
              flags a specific safety or compliance risk and routes it to the dashboard in real time.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3.5">
            {useCases.map((uc, i) => (
              <button
                key={uc.id}
                type="button"
                onClick={() => onSelectUseCase(uc.id)}
                title={'Open ' + uc.name + ' in the dashboard'}
                className="group relative w-full overflow-hidden rounded-xl border border-white bg-white/80 p-4 text-left shadow-[0_1px_3px_rgba(15,23,42,0.06)] ring-1 ring-[#3D5AF0]/5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_26px_rgba(38,50,158,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5AF0]/40"
              >
                <span
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
                  style={{ backgroundColor: uc.color }}
                ></span>
                <div className="flex items-center gap-2.5">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: uc.color + '1F', color: uc.color }}
                  >
                    <Icon name={uc.icon} size={18} />
                  </div>
                  <span className="text-[10.5px] font-semibold text-[#94A3B8]">{pad(i + 1)}</span>
                  <span className="ml-auto translate-x-1 text-[#3D5AF0] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                    <Icon name="arrowRight" size={16} />
                  </span>
                </div>
                <div className="mt-3 text-[14.5px] font-bold text-[#0F172A]">{uc.name}</div>
                <div className="mt-1 text-[12.5px] leading-snug text-[#64748B]">{uc.description}</div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
