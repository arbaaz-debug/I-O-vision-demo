import { useEffect, useState } from 'react';
import { SceneId } from '../data/model';

const SCENES: Record<SceneId, { from: string; to: string; accent: string; tag: string }> = {
  lab: { from: '#213542', to: '#0d1820', accent: '#5eead4', tag: 'LAB' },
  factory: { from: '#3a3340', to: '#1b1620', accent: '#f2a6b4', tag: 'PROD' },
  cooling_tower: { from: '#26303f', to: '#0f1722', accent: '#7cc4ff', tag: 'COOL' },
  road: { from: '#2a2d33', to: '#121316', accent: '#c9ccd6', tag: 'ROAD' },
  loading_bay: { from: '#3a2f2a', to: '#191410', accent: '#e6a15a', tag: 'BAY' },
  gate: { from: '#232833', to: '#0e1117', accent: '#a8a2d4', tag: 'GATE' },
};

function pad(n: number): string {
  return n.toString().padStart(2, '0');
}

export function LiveFeed({
  scene = 'factory',
  seed = 0,
  mode = 'live',
  violation = false,
  timeLabel,
}: {
  scene?: SceneId;
  seed?: number;
  mode?: 'live' | 'rewind';
  violation?: boolean;
  timeLabel?: string;
}) {
  const s = SCENES[scene] ?? SCENES.factory;
  const [clock, setClock] = useState('');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(`2026-06-03 ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const delay = (i: number) => `-${(seed * 3 + i * 5) % 17}s`;

  return (
    <div className="lf-root">
      {/* scene wash */}
      <div
        className="lf-layer"
        style={{ background: `radial-gradient(120% 90% at 50% 12%,${s.from} 0%,${s.to} 100%)` }}
      />

      {/* perspective floor */}
      <svg className="lf-layer" viewBox="0 0 320 180" preserveAspectRatio="none" style={{ opacity: 0.5 }}>
        <line x1="0" y1="118" x2="320" y2="118" stroke={s.accent} strokeOpacity="0.18" />
        <line x1="160" y1="118" x2="30" y2="180" stroke={s.accent} strokeOpacity="0.13" />
        <line x1="160" y1="118" x2="290" y2="180" stroke={s.accent} strokeOpacity="0.13" />
        <line x1="160" y1="118" x2="160" y2="180" stroke={s.accent} strokeOpacity="0.1" />
        <line x1="0" y1="150" x2="320" y2="150" stroke={s.accent} strokeOpacity="0.08" />
      </svg>

      {/* moving figures */}
      <div className="lf-fig lf-figA" style={{ width: '7%', height: '16%', background: s.accent, animationDelay: delay(0) }} />
      <div className="lf-fig lf-figB" style={{ width: '6%', height: '14%', background: '#e7e2da', animationDelay: delay(1) }} />
      {seed % 2 === 0 && (
        <div className="lf-fig lf-figC" style={{ width: '6.5%', height: '15%', background: s.accent, animationDelay: delay(2) }} />
      )}

      {/* detection box */}
      <div className="lf-layer" style={{ pointerEvents: 'none' }}>
        <div
          className="lf-rec"
          style={{
            position: 'absolute',
            left: `${violation ? 34 : 12}%`,
            top: `${violation ? 40 : 18}%`,
            width: '20%',
            height: '34%',
            border: `1.5px solid ${violation ? '#ff5b52' : s.accent}`,
          }}
        >
          <span
            className="absolute -top-[15px] left-0 px-1 text-[8px] font-semibold text-white"
            style={{ background: violation ? '#ff5b52' : s.accent, color: violation ? '#fff' : '#04211d' }}
          >
            {violation ? 'ALERT 0.9' : 'ok 0.4'}
          </span>
        </div>
      </div>

      {/* scan line */}
      <div
        className="lf-scan"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)',
        }}
      />
      {/* grain + vignette */}
      <div
        className="lf-layer lf-grain"
        style={{ background: 'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 3px)', mixBlendMode: 'overlay' }}
      />
      <div className="lf-layer" style={{ boxShadow: 'inset 0 0 60px 10px rgba(0,0,0,.55)' }} />

      {/* badges */}
      <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded bg-black/55 px-1.5 py-0.5">
        {mode === 'live' && <span className="lf-rec inline-block h-1.5 w-1.5 rounded-full bg-[#ff4d4d]" />}
        <span className="text-[9px] font-bold tracking-wider text-white">{mode === 'live' ? 'LIVE' : 'REPLAY'}</span>
        <span className="text-[9px] font-semibold text-white/60">· {s.tag}</span>
      </div>
      <div className="absolute bottom-2 right-2 rounded bg-black/55 px-1.5 py-0.5">
        <span className="font-mono text-[9px] text-white/85">{timeLabel || clock}</span>
      </div>
    </div>
  );
}
