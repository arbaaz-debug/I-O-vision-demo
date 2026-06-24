import { describe, it, expect } from 'vitest';
import { incidentToEvidence } from './evidence-adapter';
import { generateIncidents, TODAY_SEED } from './generator';
import { CAMERA_BY_ID } from './reference';
import { USE_CASE_BY_ID } from '../core/tokens';

describe('incidentToEvidence', () => {
  const inc = generateIncidents(TODAY_SEED, 1)[0];
  const ev = incidentToEvidence(inc);

  it('maps camera, zone, use-case name and severity through unchanged', () => {
    const cam = CAMERA_BY_ID[inc.cameraId];
    expect(ev.cameraName).toBe(cam.name);
    expect(ev.zone).toBe(cam.zone);
    expect(ev.useCase).toBe(USE_CASE_BY_ID[inc.useCaseId].name);
    expect(ev.severity).toBe(inc.severity); // both 'High' | 'Medium' | 'Low'
  });

  it('produces a stable string id and a valid ISO timestamp', () => {
    expect(ev.id).toBe(`ev-${inc.id}`);
    expect(() => new Date(ev.timestamp).toISOString()).not.toThrow();
  });

  it('sets demo defaults the widget needs', () => {
    expect(ev.clipDurationSec).toBeGreaterThan(0);
    expect(ev.windowMinutes).toBe(5);
    expect(ev.plantName).toBeTruthy();
  });
});
