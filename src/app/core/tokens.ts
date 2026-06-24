import { Severity } from '../components/single-camera-view/single-camera-view.types';

/** Surface + text palette (spec §Visual System). */
export const SURFACE = {
  page: '#F5F6F8',
  card: '#FFFFFF',
  border: '#E5E7EB',
  shadow: '0 1px 3px rgba(15, 23, 42, 0.05)',
  radius: '12px',
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
} as const;

export const ACTION = {
  primary: '#1F2937', // dark slate — primary buttons
  blue: '#3B82F6', // KPI icon backgrounds
} as const;

/** Severity is the dashboard's primary visual language. */
export const SEVERITY_COLOR: Record<Severity, string> = {
  High: '#EF4444',
  Medium: '#F59E0B',
  Low: '#22C55E',
};

export type UseCaseId =
  | 'safety_gear'
  | 'fall_loitering'
  | 'lab_safety'
  | 'fire_smoke'
  | 'overcrowding'
  | 'no_staff'
  | 'no_helmet'
  | 'no_vest'
  | 'intrusion';

export interface UseCaseMeta {
  id: UseCaseId;
  name: string;
  color: string;
  description: string;
  icon: string; // key into icons.ts
}

/** The 9 use cases — fixed order, fixed colors (spec §Use case color map + descriptions). */
export const USE_CASES: readonly UseCaseMeta[] = [
  { id: 'safety_gear', name: 'Safety Gear', color: '#FB7185', icon: 'hardhat',
    description: 'Detects missing safety equipment beyond helmets and vests' },
  { id: 'fall_loitering', name: 'Fall and Loitering', color: '#A855F7', icon: 'person',
    description: 'Identifies fallen workers and unauthorized loitering in restricted zones' },
  { id: 'lab_safety', name: 'Lab Safety Detection', color: '#22C55E', icon: 'flask',
    description: 'Monitors lab-coat compliance and proper lab protocol adherence' },
  { id: 'fire_smoke', name: 'Fire and Smoke Detection', color: '#F97316', icon: 'flame',
    description: 'Visual detection of fire ignition and smoke before alarms trigger' },
  { id: 'overcrowding', name: 'Overcrowding Detection', color: '#0EA5E9', icon: 'users',
    description: 'Flags zones exceeding safe occupancy thresholds' },
  { id: 'no_staff', name: 'No Staff Detection', color: '#DC2626', icon: 'userx',
    description: 'Alerts when designated zones are unmanned' },
  { id: 'no_helmet', name: 'No Helmet Detected', color: '#D946EF', icon: 'hardhat',
    description: 'Identifies workers entering hazard zones without hard hats' },
  { id: 'no_vest', name: 'No SafetyVest Detected', color: '#FACC15', icon: 'shirt',
    description: 'Identifies workers without high-visibility safety vests' },
  { id: 'intrusion', name: 'Intrusion Detection', color: '#EAB308', icon: 'shield',
    description: 'Detects unauthorized access to restricted or perimeter zones' },
];

/** O(1) lookup by id. */
export const USE_CASE_BY_ID: Record<UseCaseId, UseCaseMeta> = USE_CASES.reduce(
  (acc, uc) => ((acc[uc.id] = uc), acc),
  {} as Record<UseCaseId, UseCaseMeta>,
);

export const SEVERITY_ORDER: readonly Severity[] = ['High', 'Medium', 'Low'];
