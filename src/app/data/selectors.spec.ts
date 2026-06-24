import { describe, it, expect } from 'vitest';
import { generateIncidents, TODAY_SEED, TODAY_COUNT } from './generator';
import {
  filterIncidents,
  computeKpis,
  useCaseBreakdown,
  severityByHour,
  cameraLeaderboard,
  cameraHourHeatmap,
  paginate,
} from './selectors';

const ALL = generateIncidents(TODAY_SEED, TODAY_COUNT);

describe('filterIncidents', () => {
  it('returns all when filter is all/all', () => {
    expect(filterIncidents(ALL, { useCase: 'all', severity: 'all' })).toHaveLength(TODAY_COUNT);
  });
  it('filters by use case', () => {
    const r = filterIncidents(ALL, { useCase: 'lab_safety', severity: 'all' });
    expect(r.length).toBeGreaterThan(0);
    expect(r.every((i) => i.useCaseId === 'lab_safety')).toBe(true);
  });
  it('filters by severity', () => {
    const r = filterIncidents(ALL, { useCase: 'all', severity: 'High' });
    expect(r.every((i) => i.severity === 'High')).toBe(true);
  });
});

describe('computeKpis', () => {
  it('total equals input length and open equals unresolved count', () => {
    const k = computeKpis(ALL);
    expect(k.total).toBe(TODAY_COUNT);
    expect(k.open).toBe(ALL.filter((i) => !i.resolved).length);
  });
  it('identifies a worst camera and a peak hour', () => {
    const k = computeKpis(ALL);
    expect(k.worstCamera).not.toBeNull();
    expect(k.peakHour!.hour).toBeGreaterThanOrEqual(0);
    expect(k.peakHour!.hour).toBeLessThan(24);
  });
});

describe('useCaseBreakdown', () => {
  it('sums to the total and is sorted desc', () => {
    const rows = useCaseBreakdown(ALL);
    expect(rows.reduce((s, r) => s + r.count, 0)).toBe(TODAY_COUNT);
    for (let i = 1; i < rows.length; i++) expect(rows[i - 1].count).toBeGreaterThanOrEqual(rows[i].count);
  });
});

describe('severityByHour', () => {
  it('has 24 buckets whose severity counts sum to the total', () => {
    const bins = severityByHour(ALL);
    expect(bins).toHaveLength(24);
    const sum = bins.reduce((s, b) => s + b.High + b.Medium + b.Low, 0);
    expect(sum).toBe(TODAY_COUNT);
  });
});

describe('cameraLeaderboard', () => {
  it('desc ranks cameras and cooling tower leads', () => {
    const top = cameraLeaderboard(ALL, 'high', 5);
    expect(top).toHaveLength(5);
    for (let i = 1; i < top.length; i++) expect(top[i - 1].count).toBeGreaterThanOrEqual(top[i].count);
    expect(top[0].name).toBe('UPI 14 MEE Cooling Tower');
  });
  it('asc returns the quietest cameras', () => {
    const low = cameraLeaderboard(ALL, 'low', 5);
    for (let i = 1; i < low.length; i++) expect(low[i - 1].count).toBeLessThanOrEqual(low[i].count);
  });
});

describe('cameraHourHeatmap', () => {
  it('returns one row per camera with 24 hourly cells', () => {
    const grid = cameraHourHeatmap(ALL);
    expect(grid.length).toBeGreaterThan(0);
    expect(grid[0].cells).toHaveLength(24);
  });
});

describe('paginate', () => {
  it('clamps page within bounds and slices correctly', () => {
    expect(paginate(ALL, 1, 50).rows).toHaveLength(50);
    expect(paginate(ALL, 999, 50).page).toBe(Math.ceil(TODAY_COUNT / 50));
    expect(paginate(ALL, 0, 50).page).toBe(1);
  });
});
