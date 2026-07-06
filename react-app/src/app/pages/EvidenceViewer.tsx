import { useEffect, useState } from 'react';
import { Icon } from '../ui/Icon';
import { LiveFeed } from '../ui/LiveFeed';
import { Incident } from '../data/model';
import { CAMERA_BY_ID } from '../data/reference';
import { USE_CASE_BY_ID } from '../core/tokens';

/**
 * Evidence viewer — one pop-up (Photo / Video tabs) used from both the Evidence
 * log and the use-case "latest evidence" strip. Slideshow across the whole log,
 * a "next 5 violations" queue on the right, per-tab downloads, and a jump to the
 * live stream. Background page scroll is locked while it is open.
 */
export function EvidenceViewer({
  entries,
  index: indexProp = 0,
  tab: tabProp = 'photo',
  onClose,
  onViewOnStream,
}: {
  entries: Incident[];
  index: number;
  tab: 'photo' | 'video';
  onClose: () => void;
  onViewOnStream: (inc: Incident) => void;
}) {
  const [index, setIndex] = useState(indexProp);
  const [tab, setTab] = useState<'photo' | 'video'>(tabProp);

  // derived
  const inc = entries[index];
  const cam = CAMERA_BY_ID[inc.cameraId];
  const uc = USE_CASE_BY_ID[inc.useCaseId];

  const clock = (ts: string): string => ts.slice(11, 19);
  const camName = (id: string): string => CAMERA_BY_ID[id].name;
  const fullTime = (ts: string): string => {
    const d = new Date(ts);
    return d.toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const nextFive: { inc: Incident; idx: number }[] = (() => {
    const n = entries.length;
    const out: { inc: Incident; idx: number }[] = [];
    for (let i = 1; i <= Math.min(5, n - 1); i++) {
      const idx = (index + i) % n;
      out.push({ inc: entries[idx], idx });
    }
    return out;
  })();

  const prev = (): void => setIndex((i) => (i - 1 + entries.length) % entries.length);
  const next = (): void => setIndex((i) => (i + 1) % entries.length);
  const goTo = (i: number): void => setIndex(i);

  const frameStr = (inc: Incident): string => {
    const c = uc.color;
    const b = inc.bbox;
    const x = (b.x / 100) * 640, y = (b.y / 100) * 400, w = (b.w / 100) * 640, h = (b.h / 100) * 400;
    const ppl = [90, 300, 500].map((px) => {
      const f = px > x && px < x + w ? '#8894a6' : '#9aa7b6';
      return `<circle cx="${px}" cy="150" r="26" fill="${f}"/><rect x="${px - 30}" y="188" width="60" height="96" rx="16" fill="${f}"/>`;
    }).join('');
    return `<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="640" height="400" fill="#d9e1ea"/>
      <rect y="296" width="640" height="104" fill="#c6d0dc"/>
      <line x1="0" y1="296" x2="640" y2="296" stroke="#b4c0ce" stroke-width="2"/>
      ${ppl}
      <rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${w.toFixed(0)}" height="${h.toFixed(0)}" fill="none" stroke="${c}" stroke-width="3" rx="3"/>
      <rect x="${x.toFixed(0)}" y="${(y - 18).toFixed(0)}" width="86" height="18" fill="${c}"/>
      <text x="${(x + 5).toFixed(0)}" y="${(y - 5).toFixed(0)}" font-family="monospace" font-size="12" fill="#fff" font-weight="bold">person</text>
      <text x="14" y="386" font-family="monospace" font-size="13" fill="#0f172a">${cam.name} · ${clock(inc.timestamp)}</text>
    </svg>`;
  };

  const fileBase = (): string =>
    `${cam.name.replace(/\s+/g, '_')}_${inc.timestamp.replace(/[:T]/g, '-')}`;

  const saveBlob = (blob: Blob, name: string): void => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const renderFrameImage = (cb: (img: HTMLImageElement) => void): void => {
    const url = URL.createObjectURL(new Blob([frameStr(inc)], { type: 'image/svg+xml' }));
    const img = new Image();
    img.onload = () => { cb(img); URL.revokeObjectURL(url); };
    img.src = url;
  };

  const downloadImage = (): void => {
    renderFrameImage((img) => {
      const canvas = document.createElement('canvas');
      canvas.width = 640; canvas.height = 400;
      canvas.getContext('2d')!.drawImage(img, 0, 0, 640, 400);
      canvas.toBlob((blob) => { if (blob) saveBlob(blob, `${fileBase()}.png`); });
    });
  };

  const downloadVideo = (): void => {
    renderFrameImage((img) => {
      const canvas = document.createElement('canvas');
      canvas.width = 640; canvas.height = 400;
      const ctx = canvas.getContext('2d')!;
      const capturable = canvas as HTMLCanvasElement & { captureStream?: (fps: number) => MediaStream };
      if (!capturable.captureStream || typeof MediaRecorder === 'undefined') {
        // fallback — no recording support: save the frame instead
        ctx.drawImage(img, 0, 0, 640, 400);
        canvas.toBlob((blob) => { if (blob) saveBlob(blob, `${fileBase()}_frame.png`); });
        return;
      }
      const rec = new MediaRecorder(capturable.captureStream(12), { mimeType: 'video/webm' });
      const chunks: BlobPart[] = [];
      rec.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data); };
      rec.onstop = () => saveBlob(new Blob(chunks, { type: 'video/webm' }), `${fileBase()}_clip.webm`);
      rec.start();
      let f = 0;
      const iv = setInterval(() => {
        ctx.drawImage(img, 0, 0, 640, 400);
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.fillRect(0, (f * 26) % 400, 640, 2);
        f++;
      }, 66);
      setTimeout(() => { clearInterval(iv); rec.stop(); }, 1600);
    });
  };

  // lock the page behind so only the pop-up scrolls
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prevOverflow; };
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [entries.length]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 p-4" style={{ fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',sans-serif" }} onClick={() => onClose()}>
      <div className="flex max-h-[92vh] w-[95vw] max-w-[1120px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* header */}
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[15px] font-semibold text-slate-900">{cam.name}</span>
              <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-500">{cam.ip}</span>
            </div>
            <div className="text-[12px] text-slate-500">{cam.zone} · Violation #{inc.id} · Event {index + 1} of {entries.length}</div>
          </div>
          <button type="button" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100" onClick={() => onClose()} aria-label="Close">
            <Icon name="x" size={18} />
          </button>
        </div>

        {/* body */}
        <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1fr_300px]">
          {/* left: tabs + media + meta + actions */}
          <div className="flex min-h-0 flex-col overflow-y-auto lg:border-r lg:border-slate-200">
            <div className="px-5 pt-3">
              <div className="inline-flex rounded-lg bg-slate-100 p-0.5">
                <button type="button" className={`flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-[13px] font-semibold transition ${tab === 'video' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`} onClick={() => setTab('video')}>
                  <Icon name="video" size={15} /> Video
                </button>
                <button type="button" className={`flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-[13px] font-semibold transition ${tab === 'photo' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`} onClick={() => setTab('photo')}>
                  <Icon name="camera" size={15} /> Photo
                </button>
              </div>
            </div>

            <div className="relative mx-5 mt-3 overflow-hidden rounded-xl bg-[#0d1016]" style={{ aspectRatio: '16/10' }}>
              {tab === 'photo' && <div className="absolute inset-0" dangerouslySetInnerHTML={{ __html: frameStr(inc) }} />}
              {tab === 'video' && <LiveFeed scene={cam.scene} seed={index + 2} mode="rewind" timeLabel={clock(inc.timestamp)} violation={true} />}
              {tab === 'photo' && <span className="absolute left-3 top-3 rounded-md bg-black/70 px-2 py-0.5 font-mono text-[11px] text-white">EVIDENCE STILL</span>}
              <button type="button" className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70" onClick={() => prev()} aria-label="Previous"><Icon name="chevronLeft" size={18} /></button>
              <button type="button" className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70" onClick={() => next()} aria-label="Next"><Icon name="chevronRight" size={18} /></button>
            </div>

            <div className="px-5 py-4">
              <span className="rounded-full px-2 py-0.5 text-[11px] font-semibold" style={{ backgroundColor: uc.color + '22', color: uc.color }}>{uc.name}</span>
              <div className="mt-2 text-[13.5px] font-medium text-slate-800">{inc.message}</div>
              <div className="font-mono text-[11.5px] text-slate-400">{fullTime(inc.timestamp)}</div>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                {tab === 'photo' && (
                  <button type="button" onClick={() => downloadImage()} className="inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-4 py-2.5 text-[13.5px] font-semibold text-white hover:bg-[#1e293b]">
                    <Icon name="download" size={16} /> Download image
                  </button>
                )}
                {tab === 'video' && (
                  <button type="button" onClick={() => downloadVideo()} className="inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-4 py-2.5 text-[13.5px] font-semibold text-white hover:bg-[#1e293b]">
                    <Icon name="download" size={16} /> Download video
                  </button>
                )}
                {tab === 'video' && (
                  <button type="button" onClick={() => onViewOnStream(inc)} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-[13.5px] font-semibold text-slate-800 hover:bg-slate-50">
                    <Icon name="video" size={16} /> View on stream video
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* right: next 5 violations */}
          <div className="flex min-h-0 flex-col bg-slate-50">
            <div className="border-b border-slate-200 px-4 py-3">
              <div className="text-[13px] font-semibold text-slate-900">Next 5 violations</div>
              <div className="text-[11.5px] text-slate-500">in this log</div>
            </div>
            <div className="min-h-0 flex-1 space-y-2 overflow-y-auto p-3">
              {nextFive.map((n) => (
                <button key={n.idx} type="button" onClick={() => goTo(n.idx)} className="block w-full rounded-lg border border-slate-200 bg-white p-2.5 text-left transition hover:border-[#3b82f6] hover:shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">#{n.inc.id}</span>
                    <span className="font-mono text-[11px] text-slate-500">{clock(n.inc.timestamp)}</span>
                  </div>
                  <div className="mt-1 truncate text-[12.5px] font-medium text-slate-800">{camName(n.inc.cameraId)}</div>
                  <div className="truncate text-[11.5px] text-slate-500">{n.inc.message}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
