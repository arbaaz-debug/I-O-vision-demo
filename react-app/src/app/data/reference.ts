import { UseCaseId } from '../core/tokens';
import { Camera, CameraArea } from './model';

/** 12 cameras: 4 lab + 3 production + 3 equipment + 2 perimeter. */
export const CAMERAS: readonly Camera[] = [
  { id: 'cam_lab_gf_1', name: 'Maxpro Lab GF 1', area: 'lab', zone: 'Lab GF Zone', scene: 'lab', ip: '10.20.11.21' },
  { id: 'cam_lab_gf_2', name: 'Maxpro Lab GF 2', area: 'lab', zone: 'Lab GF Zone', scene: 'lab', ip: '10.20.11.22' },
  { id: 'cam_lab_ff_1', name: 'Maxpro Lab FF 1', area: 'lab', zone: 'Lab FF Zone', scene: 'lab', ip: '10.20.11.23' },
  { id: 'cam_lab_ff_2', name: 'Maxpro Lab FF 2', area: 'lab', zone: 'Lab FF Zone', scene: 'lab', ip: '10.20.11.24' },
  { id: 'cam_prod_1', name: 'Production Floor 1', area: 'production', zone: 'Assembly East', scene: 'factory', ip: '10.20.22.31' },
  { id: 'cam_prod_2', name: 'Production Floor 2', area: 'production', zone: 'Assembly West', scene: 'factory', ip: '10.20.22.32' },
  { id: 'cam_prod_3', name: 'Production Floor 3', area: 'production', zone: 'Packing Line', scene: 'factory', ip: '10.20.22.33' },
  { id: 'cam_cool_1', name: 'UPI 14 MEE Cooling Tower', area: 'equipment', zone: 'Cooling Yard', scene: 'cooling_tower', ip: '10.20.33.41' },
  { id: 'cam_cool_2', name: 'Cooling Tower 2', area: 'equipment', zone: 'Cooling Yard', scene: 'cooling_tower', ip: '10.20.33.42' },
  { id: 'cam_boiler', name: 'Boiler Room', area: 'equipment', zone: 'Utilities', scene: 'loading_bay', ip: '10.20.33.43' },
  { id: 'cam_main_road', name: 'Main Road', area: 'perimeter', zone: 'North Perimeter', scene: 'road', ip: '10.20.44.51' },
  { id: 'cam_main_gate', name: 'Main Gate', area: 'perimeter', zone: 'Main Entrance', scene: 'gate', ip: '10.20.44.52' },
];

export const CAMERA_BY_ID: Record<string, Camera> = CAMERAS.reduce(
  (acc, c) => ((acc[c.id] = c), acc),
  {} as Record<string, Camera>,
);

/**
 * Per-area use-case affinity weights (relative). Higher = more likely.
 * Makes the leaderboard and charts non-random and believable (spec §Distributions).
 */
export const AFFINITY: Record<CameraArea, Partial<Record<UseCaseId, number>>> = {
  lab: { lab_safety: 10, no_vest: 4, no_helmet: 3, safety_gear: 2, fall_loitering: 1 },
  production: { no_helmet: 6, no_vest: 6, safety_gear: 4, conveyor_belt_health: 5, overcrowding: 3, fall_loitering: 3, no_staff: 2 },
  equipment: { safety_gear: 5, no_helmet: 4, no_vest: 4, conveyor_belt_health: 6, fire_smoke: 3, fall_loitering: 2 },
  perimeter: { intrusion: 8, overcrowding: 4, no_staff: 3, fall_loitering: 2 },
};

/** Per-camera relative volume weight — drives leaderboard order (cooling tower dominates, per screenshots). */
export const CAMERA_VOLUME: Record<string, number> = {
  cam_cool_1: 10, cam_lab_gf_1: 9, cam_main_road: 6, cam_lab_gf_2: 5, cam_lab_ff_1: 4,
  cam_prod_1: 4, cam_prod_2: 3, cam_cool_2: 3, cam_prod_3: 3, cam_lab_ff_2: 2,
  cam_main_gate: 2, cam_boiler: 2,
};

/**
 * Hourly weights 0..23 — bell curve over the workday, midday peak ~13:00–14:00
 * (spec §Distributions, mirrors reference hourly chart).
 */
export const HOUR_WEIGHTS: readonly number[] = [
  1, 1, 1, 1, 1, 2, 3, 5, 9, 14, 18, 20, 22, 24, 23, 19, 16, 12, 8, 5, 3, 2, 1, 1,
];

/** Severity split ~50/30/20 (spec §Distributions). */
export const SEVERITY_WEIGHTS: readonly { sev: 'High' | 'Medium' | 'Low'; w: number }[] = [
  { sev: 'High', w: 50 },
  { sev: 'Medium', w: 30 },
  { sev: 'Low', w: 20 },
];
