import { describe, it, expect } from 'vitest';
import { generateIncidents, TODAY_SEED, TODAY_COUNT } from './generator';
import { CAMERA_BY_ID } from './reference';
import { USE_CASE_BY_ID } from '../core/tokens';

describe('generateIncidents', () => {
  it('produces exactly the requested count', () => {
    expect(generateIncidents(TODAY_SEED, TODAY_COUNT)).toHaveLength(TODAY_COUNT);
  });

  it('is deterministic across calls (same seed -> identical ids/timestamps)', () => {
    const a = generateIncidents(TODAY_SEED, 100);
    const b = generateIncidents(TODAY_SEED, 100);
    expect(a).toEqual(b);
  });

  it('assigns sequential ids 1..N', () => {
    const list = generateIncidents(TODAY_SEED, 50);
    expect(list.map((i) => i.id)).toEqual(Array.from({ length: 50 }, (_, k) => k + 1));
  });

  it('only references known cameras and use cases', () => {
    for (const inc of generateIncidents(TODAY_SEED, 300)) {
      expect(CAMERA_BY_ID[inc.cameraId]).toBeDefined();
      expect(USE_CASE_BY_ID[inc.useCaseId]).toBeDefined();
    }
  });

  it('only assigns each camera a use case allowed by its affinity', () => {
    // lab cameras must never emit an intrusion incident
    const labIntrusions = generateIncidents(TODAY_SEED, TODAY_COUNT).filter(
      (i) => CAMERA_BY_ID[i.cameraId].area === 'lab' && i.useCaseId === 'intrusion',
    );
    expect(labIntrusions).toHaveLength(0);
  });

  it('keeps bbox within frame bounds', () => {
    for (const inc of generateIncidents(TODAY_SEED, 200)) {
      expect(inc.bbox.x).toBeGreaterThanOrEqual(0);
      expect(inc.bbox.y).toBeGreaterThanOrEqual(0);
      expect(inc.bbox.x + inc.bbox.w).toBeLessThanOrEqual(100);
      expect(inc.bbox.y + inc.bbox.h).toBeLessThanOrEqual(100);
    }
  });
});
