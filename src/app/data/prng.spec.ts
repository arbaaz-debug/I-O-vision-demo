import { describe, it, expect } from 'vitest';
import { mulberry32, weightedIndex } from './prng';

describe('mulberry32', () => {
  it('is deterministic for the same seed', () => {
    const a = mulberry32(42);
    const b = mulberry32(42);
    expect([a(), a(), a()]).toEqual([b(), b(), b()]);
  });

  it('returns values in [0, 1)', () => {
    const r = mulberry32(7);
    for (let i = 0; i < 1000; i++) {
      const v = r();
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });
});

describe('weightedIndex', () => {
  it('only ever returns indices with non-zero weight', () => {
    const r = mulberry32(1);
    const weights = [0, 5, 0, 3];
    for (let i = 0; i < 200; i++) {
      const idx = weightedIndex(weights, r);
      expect([1, 3]).toContain(idx);
    }
  });

  it('roughly honors weight proportions', () => {
    const r = mulberry32(99);
    const weights = [1, 9];
    let ones = 0;
    for (let i = 0; i < 5000; i++) if (weightedIndex(weights, r) === 1) ones++;
    expect(ones / 5000).toBeGreaterThan(0.8); // ~0.9 expected
  });
});
