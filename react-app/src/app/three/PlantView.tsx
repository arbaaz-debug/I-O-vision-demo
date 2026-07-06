import { useEffect, useRef } from 'react';
import { PlantScene } from './plantScene';
import { USE_CASES, UseCaseId } from '../core/tokens';
import { Icon } from '../ui/Icon';

export function PlantView({ onSelectUseCase }: { onSelectUseCase: (id: UseCaseId) => void }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const markerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!hostRef.current || !canvasRef.current) return;
    const scene = new PlantScene(canvasRef.current, hostRef.current);
    scene.setMarkerEls(markerRefs.current);
    scene.start();
    return () => scene.dispose();
  }, []);

  return (
    <div
      ref={hostRef}
      className="relative h-full w-full overflow-hidden"
      style={{ background: 'radial-gradient(120% 100% at 50% 30%, #f2f0fb 0%, #e7e4f4 60%, #ddd9ee 100%)' }}
    >
      <canvas ref={canvasRef} className="block h-full w-full" style={{ cursor: 'grab' }} />

      {USE_CASES.map((m, i) => (
        <button
          key={m.id}
          ref={(el) => (markerRefs.current[i] = el)}
          type="button"
          onClick={() => onSelectUseCase(m.id)}
          title={`Open ${m.name} dashboard`}
          className="group absolute left-0 top-0 z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: 0, willChange: 'transform,opacity' }}
        >
          <span className="flex items-center rounded-full bg-white/95 p-1 shadow-[0_6px_16px_rgba(38,30,80,0.22)] ring-1 ring-black/5 backdrop-blur transition duration-150 group-hover:scale-105">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white" style={{ backgroundColor: m.color }}>
              <Icon name={m.icon} size={15} />
            </span>
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-[12px] font-semibold text-[#1F1B3A] opacity-0 transition-all duration-200 group-hover:ml-2 group-hover:mr-1.5 group-hover:max-w-[220px] group-hover:opacity-100">
              {m.name}
            </span>
          </span>
        </button>
      ))}

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/80 px-4 py-2 text-[12.5px] font-medium text-[#4A4568] shadow-sm ring-1 ring-black/5 backdrop-blur">
        Drag to rotate &amp; tilt • Scroll to zoom • Click a tag to open its dashboard
      </div>
    </div>
  );
}
