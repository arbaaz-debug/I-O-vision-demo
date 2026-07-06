import { useEffect, useRef, useState } from 'react';
import { Icon } from '../ui/Icon';
import { LiveFeed } from '../ui/LiveFeed';
import { Camera } from '../data/model';
import { UseCaseId } from '../core/tokens';
import { cameraViolations, Vio } from '../data/usecase-data';

/**
 * Camera-level pop-up: a live feed the officer can page across (slideshow of the
 * use case's cameras), rewind into recorded history, with the camera's last-5
 * violations pinned on the right.
 */
export function CameraFeedModal({
  cameras,
  useCaseId,
  index: indexProp = 0,
  onClose,
  onViewViolations,
}: {
  cameras: Camera[];
  useCaseId: UseCaseId;
  index: number;
  onClose: () => void;
  onViewViolations: (cameraId: string) => void;
}) {
  const [index, setIndex] = useState(indexProp);
  const [playing, setPlaying] = useState(true);
  const [pct, setPct] = useState(100); // 100 = live, lower = further back in the last hour
  const [mode, setMode] = useState<'live' | 'rewind'>('live');
  const [rewindLabel, setRewindLabel] = useState('');
  const [vios, setVios] = useState<Vio[]>(() => cameraViolations(useCaseId, cameras[indexProp].id).slice(0, 5));

  // derived
  const cam = cameras[index];

  // refs so the interval / keydown handler see the latest values
  const playingRef = useRef(playing); playingRef.current = playing;
  const pctRef = useRef(pct); pctRef.current = pct;
  const indexRef = useRef(index); indexRef.current = index;

  const clock = (ts: string): string => ts.slice(11, 19);

  const applyMode = (p: number): void => {
    const m: 'live' | 'rewind' = p >= 99.5 ? 'live' : 'rewind';
    setMode(m);
    if (m === 'rewind') {
      const minutesBack = ((100 - p) / 100) * 60;
      const d = new Date(Date.now() - minutesBack * 60000);
      const pad = (n: number) => n.toString().padStart(2, '0');
      setRewindLabel(`◀ ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    }
  };

  const goLive = (): void => {
    setPct(100);
    setPlaying(true);
    applyMode(100);
  };
  const moveTo = (i: number): void => {
    setIndex(i);
    goLive();
    // vios refresh handled by effect on [index, useCaseId]
  };
  const prev = (): void => moveTo((indexRef.current - 1 + cameras.length) % cameras.length);
  const next = (): void => moveTo((indexRef.current + 1) % cameras.length);

  const togglePlay = (): void => setPlaying((p) => !p);
  const jumpBack = (): void => {
    const p = Math.max(0, pctRef.current - 8.3); // ~5 min of a 60-min buffer
    setPct(p);
    applyMode(p);
  };
  const onScrub = (v: string): void => {
    const p = Number(v);
    setPct(p);
    applyMode(p);
  };

  // refresh the last-5 violations whenever the camera or use case changes
  useEffect(() => {
    setVios(cameraViolations(useCaseId, cam.id).slice(0, 5));
  }, [index, useCaseId]);

  // playback timer — creep back toward live while playing
  useEffect(() => {
    const timer = setInterval(() => {
      if (playingRef.current && pctRef.current < 100) {
        const np = Math.min(100, pctRef.current + 1.5);
        setPct(np);
        applyMode(np);
      }
    }, 250);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [cameras.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4" onClick={() => onClose()}>
      <div className="flex max-h-[92vh] w-[94vw] max-w-[1200px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-semibold text-slate-900">{cam.name}</span>
              <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-500">{cam.ip}</span>
            </div>
            <div className="text-[12px] text-slate-500">{cam.zone} · Camera {index + 1} / {cameras.length}</div>
          </div>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100" onClick={() => onClose()} aria-label="Close">
            <Icon name="x" size={18} />
          </button>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1fr_320px]">
          {/* main feed + controls */}
          <div className="flex min-h-0 flex-col border-r border-slate-200">
            <div className="relative bg-black" style={{ aspectRatio: '16/9' }}>
              <LiveFeed scene={cam.scene} seed={index + 3} mode={mode} violation={mode === 'live'} timeLabel={mode === 'rewind' ? rewindLabel : undefined} />
              {/* slideshow arrows */}
              <button type="button" className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70" onClick={() => prev()} aria-label="Previous camera">
                <Icon name="chevronLeft" size={20} />
              </button>
              <button type="button" className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70" onClick={() => next()} aria-label="Next camera">
                <Icon name="chevronRight" size={20} />
              </button>
            </div>

            {/* transport / rewind */}
            <div className="px-4 py-3">
              <div className="flex items-center gap-3">
                <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-700" onClick={() => togglePlay()} aria-label={playing ? 'Pause' : 'Play'}>
                  <Icon name={playing ? 'pause' : 'play'} size={15} />
                </button>
                <button type="button" className="flex h-8 items-center gap-1 rounded-full border border-slate-300 px-3 text-[12px] font-medium text-slate-700 hover:bg-slate-50" onClick={() => jumpBack()} title="Rewind 5 min">
                  <Icon name="rewind" size={14} /> 5m
                </button>
                <input type="range" min="0" max="100" step="0.5" className="h-1.5 flex-1 accent-[#3D5AF0]" value={pct} onChange={(e) => onScrub(e.target.value)} />
                <span className="w-[130px] text-right font-mono text-[12px]" style={{ color: mode === 'live' ? '#16A34A' : '#475569' }}>
                  {mode === 'live' ? '● LIVE' : rewindLabel}
                </span>
                {mode === 'rewind' && (
                  <button type="button" className="rounded-full bg-[#16A34A] px-3 py-1 text-[11px] font-semibold text-white" onClick={() => goLive()}>Go live</button>
                )}
              </div>

              {/* camera filmstrip (slideshow) */}
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {cameras.map((c, i) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => moveTo(i)}
                    className={`relative h-12 w-20 shrink-0 overflow-hidden rounded-md transition ${i === index ? 'ring-2 ring-[#3D5AF0]' : 'ring-1 ring-slate-200'}`}
                    title={c.name}
                  >
                    <LiveFeed scene={c.scene} seed={i + 1} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* right: camera-level last 5 violations */}
          <div className="flex min-h-0 flex-col bg-slate-50">
            <div className="border-b border-slate-200 px-4 py-3">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="text-[13px] font-semibold text-slate-900">Last 5 violations</div>
                  <div className="text-[11.5px] text-slate-500">on this camera</div>
                </div>
                <button
                  type="button"
                  onClick={() => onViewViolations(cam.id)}
                  className="inline-flex items-center gap-1 whitespace-nowrap text-[12.5px] font-semibold text-slate-600 transition hover:text-[#3D5AF0]"
                >
                  View all <Icon name="arrowRight" size={14} />
                </button>
              </div>
            </div>
            <div className="min-h-0 flex-1 space-y-2 overflow-y-auto p-3">
              {vios.length === 0 && <div className="rounded-lg border border-dashed border-slate-300 p-4 text-center text-[12px] text-slate-400">No recent violations</div>}
              {vios.map((v) => (
                <div key={v.id} className="rounded-lg border border-slate-200 bg-white p-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">#{v.id}</span>
                    <span className="font-mono text-[11px] text-slate-500">{clock(v.timestamp)}</span>
                  </div>
                  <div className="mt-1.5 text-[12.5px] font-medium text-slate-800">{v.message}</div>
                  <div className="mt-0.5 font-mono text-[10.5px] text-slate-400">{cam.ip}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
