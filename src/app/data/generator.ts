import { Severity } from '../components/single-camera-view/single-camera-view.types';
import { UseCaseId } from '../core/tokens';
import { Incident } from './model';
import {
  AFFINITY,
  CAMERAS,
  CAMERA_BY_ID,
  CAMERA_VOLUME,
  HOUR_WEIGHTS,
  SEVERITY_WEIGHTS,
} from './reference';
import { mulberry32, weightedIndex } from './prng';

export const TODAY_SEED = 20260603;
export const TODAY_COUNT = 1617;

/** Fixed reference day so timestamps are stable (spec uses 03 Jun 2026). */
const BASE_DATE = '2026-06-03';

const CAMERA_IDS = CAMERAS.map((c) => c.id);
const CAMERA_WEIGHTS = CAMERA_IDS.map((id) => CAMERA_VOLUME[id] ?? 1);

const MESSAGES: Partial<Record<UseCaseId, string>> = {
  lab_safety: 'Person without lab-coat detected',
  no_helmet: 'Person without helmet detected',
  no_vest: 'Person without safety vest detected',
  fire_smoke: 'Smoke signature detected',
  intrusion: 'Unauthorised entry detected',
  overcrowding: 'Zone occupancy threshold exceeded',
  no_staff: 'Designated zone unmanned',
  fall_loitering: 'Fall / loitering detected',
  safety_gear: 'Missing safety equipment detected',
};

function pad(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

/**
 * Build a single incident on `dateKey` (YYYY-MM-DD). The rng-draw order is fixed
 * (camera → use case → severity → hour → bbox → minute/second) so a given seed
 * always reproduces the same incidents. Shared by the single-day and 30-day
 * generators so both produce identically-shaped data.
 */
export function buildIncident(id: number, dateKey: string, rng: () => number): Incident {
  const cameraId = CAMERA_IDS[weightedIndex(CAMERA_WEIGHTS, rng)];
  const camera = CAMERA_BY_ID[cameraId];

  // use case constrained by camera-area affinity
  const affinity = AFFINITY[camera.area];
  const ucIds = Object.keys(affinity) as UseCaseId[];
  const ucWeights = ucIds.map((cid) => affinity[cid] ?? 0);
  const useCaseId = ucIds[weightedIndex(ucWeights, rng)];

  const sev = SEVERITY_WEIGHTS[weightedIndex(SEVERITY_WEIGHTS.map((s) => s.w), rng)].sev as Severity;

  const hour = weightedIndex(HOUR_WEIGHTS, rng);

  // bbox: 6..22% wide/tall, positioned so it stays in-frame
  const w = 6 + rng() * 16;
  const h = 8 + rng() * 18;
  const x = rng() * (100 - w);
  const y = rng() * (100 - h);

  const m = Math.floor(rng() * 60);
  const s = Math.floor(rng() * 60);

  return {
    id,
    cameraId,
    useCaseId,
    severity: sev,
    message: MESSAGES[useCaseId] ?? 'Non compliance detected',
    timestamp: `${dateKey}T${pad(hour)}:${pad(m)}:${pad(s)}`,
    bbox: {
      x: Math.round(x * 10) / 10,
      y: Math.round(y * 10) / 10,
      w: Math.round(w * 10) / 10,
      h: Math.round(h * 10) / 10,
    },
    resolved: false, // resolution efficiency is 0% per spec aggregate constants
  };
}

export function generateIncidents(seed: number, count: number): Incident[] {
  const rng = mulberry32(seed);
  const out: Incident[] = [];
  for (let i = 0; i < count; i++) out.push(buildIncident(i + 1, BASE_DATE, rng));
  return out;
}
