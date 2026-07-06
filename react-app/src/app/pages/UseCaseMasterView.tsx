import { useEffect, useMemo, useState } from 'react';
import { Icon } from '../ui/Icon';
import { LiveFeed } from '../ui/LiveFeed';
import { CameraFeedModal } from './CameraFeedModal';
import { EvidenceViewer } from './EvidenceViewer';
import { USE_CASE_BY_ID, UseCaseId } from '../core/tokens';
import { Camera, Incident } from '../data/model';
import { useCaseCameras, useCaseIncidents, useCaseViolations, Vio } from '../data/usecase-data';

function clock(ts: string): string {
  return ts.slice(11, 19);
}

export function UseCaseMasterView({
  useCaseId,
  onViewDashboard,
  onViewViolations,
}: {
  useCaseId: UseCaseId;
  onViewDashboard: () => void;
  onViewViolations: (cameraId?: string) => void;
}) {
  const uc = USE_CASE_BY_ID[useCaseId];

  const {
    cameras,
    cameraList,
    latest,
    incidents,
    totalViolations,
    timeSince,
    lastAt,
  } = useMemo(() => {
    const vios: Vio[] = useCaseViolations(useCaseId);
    const cams: { camera: Camera; count: number }[] = useCaseCameras(useCaseId);
    let ts = '—';
    let at = '';
    if (vios.length) {
      const top = vios[0];
      const ago = 2 + (top.id % 26); // deterministic, believable "minutes ago"
      ts = `${ago} min ago`;
      at = `at ${clock(top.timestamp)}`;
    } else {
      ts = 'No violations';
      at = '';
    }
    return {
      cameras: cams,
      cameraList: cams.map((c) => c.camera),
      latest: vios.slice(0, 5),
      incidents: useCaseIncidents(useCaseId),
      totalViolations: vios.length,
      timeSince: ts,
      lastAt: at,
    };
  }, [useCaseId]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [evViewer, setEvViewer] = useState<{
    entries: Incident[];
    index: number;
    tab: 'photo' | 'video';
  } | null>(null);

  // reset transient modal state when the use case changes
  useEffect(() => {
    setModalOpen(false);
    setEvViewer(null);
  }, [useCaseId]);

  const openCamera = (i: number): void => {
    setModalIndex(i);
    setModalOpen(true);
  };
  const openCameraById = (cameraId: string): void => {
    const i = cameraList.findIndex((c) => c.id === cameraId);
    openCamera(i < 0 ? 0 : i);
  };

  const openEvidence = (i: number): void => {
    setEvViewer({ entries: incidents, index: i, tab: 'photo' });
  };
  const onEvViewOnStream = (inc: Incident): void => {
    setEvViewer(null);
    openCameraById(inc.cameraId);
  };

  const sceneOf = (cameraId: string) => {
    return cameraList.find((c) => c.id === cameraId)?.scene ?? 'factory';
  };

  return (
    <>
      <div className="h-full overflow-y-auto bg-[#F5F6F8]">
        <div className="mx-auto max-w-[1240px] px-6 py-6">
          {/* ===== hero strip ===== */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: uc.color }}
              >
                <Icon name={uc.icon} size={24} />
              </span>
              <div>
                <h2 className="text-[22px] font-bold tracking-tight text-slate-900">{uc.name}</h2>
                <p className="text-[13px] text-slate-500">{uc.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="text-right">
                <div className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                  Time since last violation
                </div>
                <div className="text-[20px] font-bold" style={{ color: uc.color }}>
                  {timeSince}
                </div>
                <div className="font-mono text-[11px] text-slate-400">{lastAt}</div>
              </div>
              <button
                type="button"
                onClick={() => onViewDashboard()}
                className="inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-5 py-3 text-[14px] font-bold text-white shadow-sm transition hover:bg-[#1E293B]"
              >
                View Dashboard
                <Icon name="arrowRight" size={17} />
              </button>
            </div>
          </div>

          {/* ===== latest 5 violation evidences (use-case level) ===== */}
          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2">
              <Icon name="triangleAlert" size={16} />
              <h3 className="text-[15px] font-semibold text-slate-900">Latest violation evidence</h3>
              <span className="text-[12.5px] text-slate-400">· {totalViolations} total on this use case</span>
              <button
                type="button"
                onClick={() => onViewViolations(undefined)}
                className="ml-auto inline-flex items-center gap-1 text-[13px] font-semibold text-slate-600 transition hover:text-[#3D5AF0]"
              >
                View all violations <Icon name="arrowRight" size={15} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {latest.map((v, i) => (
                <button
                  key={v.id ?? i}
                  type="button"
                  onClick={() => openEvidence(i)}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="relative bg-black" style={{ aspectRatio: '16/9' }}>
                    <LiveFeed
                      scene={sceneOf(v.cameraId)}
                      seed={i + 2}
                      mode="rewind"
                      timeLabel={clock(v.timestamp)}
                      violation={true}
                    />
                  </div>
                  <div className="p-2.5">
                    <div className="truncate text-[12.5px] font-semibold text-slate-800">{v.cameraName}</div>
                    <div className="mt-0.5 flex items-center justify-between">
                      <span className="font-mono text-[10.5px] text-slate-400">{v.ip}</span>
                      <span className="font-mono text-[10.5px] text-slate-500">{clock(v.timestamp)}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ===== camera grid ===== */}
          <div className="mt-8">
            <div className="mb-3 flex items-center gap-2">
              <Icon name="video" size={16} />
              <h3 className="text-[15px] font-semibold text-slate-900">Cameras</h3>
              <span className="text-[12.5px] text-slate-400">· {cameras.length} watching this use case</span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cameras.map((c, i) => (
                <button
                  key={c.camera.id ?? i}
                  type="button"
                  onClick={() => openCamera(i)}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative bg-black" style={{ aspectRatio: '16/9' }}>
                    <LiveFeed scene={c.camera.scene} seed={i + 1} violation={i % 3 === 0} />
                    <span className="absolute right-2 top-2 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold text-white">
                      {c.count} events
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3">
                    <div className="min-w-0">
                      <div className="truncate text-[13.5px] font-semibold text-slate-900">{c.camera.name}</div>
                      <div className="truncate text-[12px] text-slate-500">{c.camera.zone}</div>
                    </div>
                    <div className="ml-2 shrink-0 text-right">
                      <div className="font-mono text-[11.5px] text-slate-600">{c.camera.ip}</div>
                      <div className="mt-0.5 inline-flex items-center gap-1 text-[10.5px] font-medium text-[#16A34A]">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#16A34A]"></span> live
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <CameraFeedModal
          cameras={cameraList}
          useCaseId={useCaseId}
          index={modalIndex}
          onClose={() => setModalOpen(false)}
          onViewViolations={(cameraId: string) => onViewViolations(cameraId)}
        />
      )}

      {evViewer && (
        <EvidenceViewer
          entries={evViewer.entries}
          index={evViewer.index}
          tab={evViewer.tab}
          onClose={() => setEvViewer(null)}
          onViewOnStream={(inc: Incident) => onEvViewOnStream(inc)}
        />
      )}
    </>
  );
}
