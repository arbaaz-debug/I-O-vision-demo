import { Severity } from '../components/single-camera-view/single-camera-view.types';
import { UseCaseId } from '../core/tokens';
import { Camera, Incident } from './model';
import { CAMERA_BY_ID } from './reference';
import { generateIncidents, TODAY_SEED, TODAY_COUNT } from './generator';

/** A camera-tagged violation, ready for display. */
export interface Vio {
  id: number;
  cameraId: string;
  cameraName: string;
  ip: string;
  zone: string;
  severity: Severity;
  message: string;
  timestamp: string;
}

let _all: Incident[] | null = null;
function all(): Incident[] {
  if (!_all) _all = generateIncidents(TODAY_SEED, TODAY_COUNT);
  return _all;
}

function toVio(i: Incident): Vio {
  const c = CAMERA_BY_ID[i.cameraId];
  return {
    id: i.id, cameraId: i.cameraId, cameraName: c.name, ip: c.ip, zone: c.zone,
    severity: i.severity, message: i.message, timestamp: i.timestamp,
  };
}

/** All violations for a use case, newest first. */
export function useCaseViolations(uc: UseCaseId): Vio[] {
  return all()
    .filter((i) => i.useCaseId === uc)
    .map(toVio)
    .sort((a, b) => b.timestamp.localeCompare(a.timestamp));
}

/** Cameras that have detections for this use case, busiest first. */
export function useCaseCameras(uc: UseCaseId): { camera: Camera; count: number }[] {
  const counts = new Map<string, number>();
  for (const i of all()) if (i.useCaseId === uc) counts.set(i.cameraId, (counts.get(i.cameraId) ?? 0) + 1);
  return [...counts.entries()]
    .map(([id, count]) => ({ camera: CAMERA_BY_ID[id], count }))
    .sort((a, b) => b.count - a.count);
}

/** Newest-first violations for one camera within a use case. */
export function cameraViolations(uc: UseCaseId, cameraId: string): Vio[] {
  return useCaseViolations(uc).filter((v) => v.cameraId === cameraId);
}

/** Raw incidents for a use case (newest first) — for the evidence viewer. */
export function useCaseIncidents(uc: UseCaseId): Incident[] {
  return all()
    .filter((i) => i.useCaseId === uc)
    .sort((a, b) => b.timestamp.localeCompare(a.timestamp));
}
