export type Severity = 'High' | 'Medium' | 'Low';

export type StreamStatus = 'streaming' | 'loading' | 'offline';

export interface Evidence {
  id: string;
  cameraName: string;
  zone: string;
  useCase: string;
  severity: Severity;
  message: string;
  /** ISO 8601 — the anchor moment of violation. */
  timestamp: string;
  /** Length of the AI evidence clip, typically 5–10s. */
  clipDurationSec: number;
  /** Navigable range on each side of the anchor. Defaults to 5 minutes. */
  windowMinutes: number;
  /** Optional. When omitted the widget renders a dark placeholder canvas. */
  videoUrl?: string;
  plantName?: string;
}
