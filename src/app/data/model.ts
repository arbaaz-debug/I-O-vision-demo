import { Severity } from '../components/single-camera-view/single-camera-view.types';
import { UseCaseId } from '../core/tokens';

export type CameraArea = 'lab' | 'production' | 'equipment' | 'perimeter';
export type SceneId = 'lab' | 'cooling_tower' | 'factory' | 'road' | 'loading_bay' | 'gate';

export interface Camera {
  id: string;
  name: string;
  area: CameraArea;
  zone: string;
  scene: SceneId;
}

export interface Incident {
  id: number; // 1..N sequential
  cameraId: string;
  useCaseId: UseCaseId;
  severity: Severity; // reuse widget's type — 'High' | 'Medium' | 'Low'
  message: string;
  timestamp: string; // ISO 8601
  bbox: { x: number; y: number; w: number; h: number }; // % of frame, 0..100
  resolved: boolean;
}

export type DurationKey = 'today' | 'yesterday' | 'last7';

export interface Filters {
  useCase: UseCaseId | 'all';
  duration: DurationKey;
  severity: Severity | 'all'; // table header filter
}

export type AppView = 'home' | 'dashboard';

export interface Kpis {
  total: number;
  open: number; // unresolved
  worstCamera: { name: string; count: number } | null;
  peakHour: { hour: number; count: number } | null;
}
