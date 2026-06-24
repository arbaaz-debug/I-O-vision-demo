# I/O Vision Dashboard — Implementation Plan
Date: 2026-06-03
Spec: docs/specs/2026-06-03-io-vision-demo-design.md

**Goal:** Build a bold, triage-framed sales-demo dashboard for Faclon's I/O Vision, in the existing Angular app, that opens the existing `single-camera-view` widget when an evidence row is clicked.

**Architecture:** Single Angular 21 standalone app. One seeded incident dataset (~1617 records) is the single source of truth; every aggregate (KPIs, use-case bars, severity-over-time, camera×hour heatmap, leaderboard, table) is a pure derived selector. View state (`home` | `dashboard`) lives in the root `App`; the widget is a modal launched from the table via an `Incident → Evidence` adapter. Charts are hand-built SVG (zero new dependencies). Palette is severity-led (red/amber/green); the 9 use-case colors appear only for category identity (pills, the ranked breakdown).

**Tech Stack:** Angular 21 (standalone, OnPush, signals optional/not required), Tailwind CSS 3, TypeScript 5.9, Vitest 4 (data-layer tests only), inline SVG for icons + charts + scene thumbnails. No new npm dependencies.

---

## Departures from the spec (locked decisions — 2026-06-03)

| Spec said | This plan does | Why |
|---|---|---|
| React single-file artifact | Angular, this repo | Native integration with existing `single-camera-view` widget |
| Recharts | Hand-built SVG charts | Zero new deps; matches widget's own inline-SVG style |
| 9-slice donut | Ranked horizontal bars (donut dropped) | Donut unreadable at 9 categories; bold redesign |
| Grouped 9-series hourly bars | Severity-stacked bars over time | Tells the safety story; readable |
| (none) | **Camera × hour heatmap** | The "wow" element; shows where/when problems cluster |
| 4 KPI cards (2 redundant) | 4 *distinct* triage KPIs | Total · Open · Worst camera · Peak hour |
| `widget` as routed view | Existing modal launched from row | Widget is already a modal; cleaner |
| `Incident.severity` lowercase | Reuse widget's `Severity` = `'High'\|'Medium'\|'Low'` | DRY; no adapter case-mapping bugs |

Out of scope unchanged from spec §Out of Scope (no real video, no auth, no routing, no export, desktop-only).

---

## Verification model (skill adaptation)

- **Data layer (Phase 1):** strict TDD. Write the Vitest test first, watch it fail, implement, watch it pass, commit. Run with `npx vitest run <file>`.
- **Visual components (Phases 0, 2–5):** no unit tests. Gate per task = `npm run build` compiles with no TS/template errors, plus the per-task **Visual QA** checklist. Commit after the gate passes.
- Dev server for eyeballing: `npm start` → http://localhost:4200.

---

## File Structure Map

```
Files to CREATE:
  src/app/core/tokens.ts                         — palette, severity map, 9 use-case map, type-scale constants
  src/app/core/icons.ts                          — inline SVG path registry (use-case + chrome icons)
  src/app/data/model.ts                          — UseCase, Camera, Incident, Filters, AppView, KPI types
  src/app/data/reference.ts                      — 9 use cases, 12 cameras, camera×use-case affinity, hour weights
  src/app/data/prng.ts                           — mulberry32 seeded PRNG + weighted pick helpers
  src/app/data/prng.spec.ts                      — PRNG determinism tests
  src/app/data/generator.ts                      — seeded incident generator (~1617)
  src/app/data/generator.spec.ts                 — count/determinism/distribution tests
  src/app/data/selectors.ts                      — filter + all aggregations + pagination
  src/app/data/selectors.spec.ts                 — aggregation correctness tests
  src/app/data/evidence-adapter.ts               — Incident -> Evidence (for the widget)
  src/app/data/evidence-adapter.spec.ts          — adapter mapping tests
  src/app/ui/pill.component.ts                   — use-case + severity pill
  src/app/ui/icon.component.ts                   — renders an icon from icons.ts by key
  src/app/ui/scene-thumb.component.ts            — 6 SVG scenes + bbox overlay + optional play icon
  src/app/ui/kpi-card.component.ts               — one KPI card
  src/app/charts/use-case-bars.component.ts      — ranked horizontal bars
  src/app/charts/severity-trend.component.ts     — severity-stacked bars over hours
  src/app/charts/camera-heatmap.component.ts     — camera × hour heatmap grid
  src/app/pages/home.component.ts                — hero + 9 tiles + CTA
  src/app/pages/dashboard.component.ts           — filter bar + KPI row + analytics + heatmap + table
  src/app/pages/app-header.component.ts          — shared top chrome (back, title, bell, avatar)

Files to MODIFY:
  src/index.html                                 — add Inter font <link>
  src/styles.css                                 — Inter as default font; page bg token
  src/app/app.ts                                 — becomes the view-state shell (home/dashboard + widget modal)

Files to DELETE (after dashboard works):
  src/app/mock-evidence.ts                       — replaced by data/ layer (kept until Task 9.2)
```

Note: `single-camera-view/` is **not modified** — we integrate via its existing inputs/outputs.

---

## Phase 0 — Foundation & config

### Task 0.1: Load Inter + set base styling

**Files:**
- Modify: `src/index.html`
- Modify: `src/styles.css`

- [ ] **Step 1: Add Inter to `src/index.html`** — replace the `<head>` block's existing favicon line region by inserting the font links before `</head>`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>I/O Vision</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```

- [ ] **Step 2: Set Inter + page bg in `src/styles.css`** (full file):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  height: 100%;
  background-color: #f5f6f8; /* bg.page */
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 3: Gate** — `npm run build`. Expected: compiles. Run `npm start`, confirm body bg is the light grey `#F5F6F8` and text renders in Inter.

- [ ] **Step 4: Commit**

```bash
git add src/index.html src/styles.css
git commit -m "chore: load Inter font and set page background token"
```

---

### Task 0.2: Design tokens

**Files:**
- Create: `src/app/core/tokens.ts`

- [ ] **Step 1: Write `src/app/core/tokens.ts`** (complete):

```typescript
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
```

- [ ] **Step 2: Gate** — `npm run build`. Expected: compiles (file is unused so far; that's fine — Angular build still type-checks it once imported. To force the check now, it is imported in Task 0.3).

- [ ] **Step 3: Commit**

```bash
git add src/app/core/tokens.ts
git commit -m "feat: add design tokens (palette, severity, 9 use cases)"
```

---

### Task 0.3: Icon registry

**Files:**
- Create: `src/app/core/icons.ts`

- [ ] **Step 1: Write `src/app/core/icons.ts`** (complete — 24×24 viewBox path data, stroke-based to match the widget's inline SVG style):

```typescript
/**
 * Inline SVG inner markup keyed by name. Rendered inside a
 * <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
 *      stroke-linecap="round" stroke-linejoin="round"> by IconComponent.
 */
export const ICONS: Record<string, string> = {
  hardhat: '<path d="M2 18h20"/><path d="M4 18a8 8 0 0 1 16 0"/><path d="M10 6h4v4"/><path d="M10 8a3 3 0 0 0-3 3"/>',
  person: '<circle cx="12" cy="4" r="2"/><path d="M12 6v8"/><path d="m8 20 4-6 4 6"/><path d="M8 9h8"/>',
  flask: '<path d="M9 3h6"/><path d="M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M6.5 15h11"/>',
  flame: '<path d="M12 3c3 4 5 6 5 9a5 5 0 0 1-10 0c0-1 .5-2 1.5-3C9 10 10 8 12 3Z"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 6a3 3 0 0 1 0 6"/><path d="M18 14a6 6 0 0 1 3 6"/>',
  userx: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="m16 8 5 5"/><path d="m21 8-5 5"/>',
  shirt: '<path d="M8 3 4 6l2 3 2-1v10h8V8l2 1 2-3-4-3-2 2H10Z"/>',
  shield: '<path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6Z"/><path d="M12 9v3"/><path d="M12 15h.01"/>',
  // chrome
  back: '<path d="m15 18-6-6 6-6"/>',
  bell: '<path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  camera: '<path d="M3 7h4l2-2h6l2 2h4v12H3Z"/><circle cx="12" cy="13" r="3"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  triangleAlert: '<path d="M12 3 2 20h20L12 3Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>',
  play: '<path d="m7 5 11 7-11 7Z"/>',
};
```

- [ ] **Step 2: Gate** — none yet (consumed in Task 2.2). Skip build.

- [ ] **Step 3: Commit**

```bash
git add src/app/core/icons.ts
git commit -m "feat: add inline SVG icon registry"
```

---

## Phase 1 — Data layer (TDD)

### Task 1.1: Domain model

**Files:**
- Create: `src/app/data/model.ts`

- [ ] **Step 1: Write `src/app/data/model.ts`** (complete):

```typescript
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
```

- [ ] **Step 2: Gate** — none yet (consumed next). Commit with reference data in Task 1.2.

---

### Task 1.2: Reference data (cameras, affinity, hour weights)

**Files:**
- Create: `src/app/data/reference.ts`

- [ ] **Step 1: Write `src/app/data/reference.ts`** (complete):

```typescript
import { UseCaseId } from '../core/tokens';
import { Camera, CameraArea } from './model';

/** 12 cameras: 4 lab + 3 production + 3 equipment + 2 perimeter. */
export const CAMERAS: readonly Camera[] = [
  { id: 'cam_lab_gf_1', name: 'Maxpro Lab GF 1', area: 'lab', zone: 'Lab GF Zone', scene: 'lab' },
  { id: 'cam_lab_gf_2', name: 'Maxpro Lab GF 2', area: 'lab', zone: 'Lab GF Zone', scene: 'lab' },
  { id: 'cam_lab_ff_1', name: 'Maxpro Lab FF 1', area: 'lab', zone: 'Lab FF Zone', scene: 'lab' },
  { id: 'cam_lab_ff_2', name: 'Maxpro Lab FF 2', area: 'lab', zone: 'Lab FF Zone', scene: 'lab' },
  { id: 'cam_prod_1', name: 'Production Floor 1', area: 'production', zone: 'Assembly East', scene: 'factory' },
  { id: 'cam_prod_2', name: 'Production Floor 2', area: 'production', zone: 'Assembly West', scene: 'factory' },
  { id: 'cam_prod_3', name: 'Production Floor 3', area: 'production', zone: 'Packing Line', scene: 'factory' },
  { id: 'cam_cool_1', name: 'UPI 14 MEE Cooling Tower', area: 'equipment', zone: 'Cooling Yard', scene: 'cooling_tower' },
  { id: 'cam_cool_2', name: 'Cooling Tower 2', area: 'equipment', zone: 'Cooling Yard', scene: 'cooling_tower' },
  { id: 'cam_boiler', name: 'Boiler Room', area: 'equipment', zone: 'Utilities', scene: 'loading_bay' },
  { id: 'cam_main_road', name: 'Main Road', area: 'perimeter', zone: 'North Perimeter', scene: 'road' },
  { id: 'cam_main_gate', name: 'Main Gate', area: 'perimeter', zone: 'Main Entrance', scene: 'gate' },
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
  production: { no_helmet: 6, no_vest: 6, safety_gear: 4, overcrowding: 3, fall_loitering: 3, no_staff: 2 },
  equipment: { safety_gear: 5, no_helmet: 4, no_vest: 4, fire_smoke: 3, fall_loitering: 2 },
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
```

- [ ] **Step 2: Gate** — `npm run build`. Expected: compiles (model.ts + reference.ts + tokens.ts now type-check together).

- [ ] **Step 3: Commit**

```bash
git add src/app/data/model.ts src/app/data/reference.ts
git commit -m "feat: add domain model and reference data (cameras, affinity, weights)"
```

---

### Task 1.3: Seeded PRNG (TDD)

**Files:**
- Create: `src/app/data/prng.ts`
- Test: `src/app/data/prng.spec.ts`

- [ ] **Step 1: Write the failing test `src/app/data/prng.spec.ts`**:

```typescript
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
```

- [ ] **Step 2: Run to confirm fail**

```bash
npx vitest run src/app/data/prng.spec.ts
```
Expected: FAIL — cannot find module './prng'.

- [ ] **Step 3: Write `src/app/data/prng.ts`**:

```typescript
/** Deterministic PRNG. Returns a function producing floats in [0, 1). */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Pick an index proportional to `weights`. Zero-weight indices are never returned. */
export function weightedIndex(weights: readonly number[], rng: () => number): number {
  const total = weights.reduce((s, w) => s + w, 0);
  let r = rng() * total;
  for (let i = 0; i < weights.length; i++) {
    r -= weights[i];
    if (r < 0) return i;
  }
  return weights.length - 1;
}
```

- [ ] **Step 4: Run to confirm pass**

```bash
npx vitest run src/app/data/prng.spec.ts
```
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add src/app/data/prng.ts src/app/data/prng.spec.ts
git commit -m "feat: add seeded mulberry32 PRNG with weighted pick"
```

---

### Task 1.4: Incident generator (TDD)

**Files:**
- Create: `src/app/data/generator.ts`
- Test: `src/app/data/generator.spec.ts`

- [ ] **Step 1: Write the failing test `src/app/data/generator.spec.ts`**:

```typescript
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
```

- [ ] **Step 2: Run to confirm fail**

```bash
npx vitest run src/app/data/generator.spec.ts
```
Expected: FAIL — cannot find module './generator'.

- [ ] **Step 3: Write `src/app/data/generator.ts`**:

```typescript
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

/** Build an ISO timestamp on the base day at the given hour with seeded minute/second. */
function isoAt(hour: number, rng: () => number): string {
  const m = Math.floor(rng() * 60);
  const s = Math.floor(rng() * 60);
  return `${BASE_DATE}T${pad(hour)}:${pad(m)}:${pad(s)}`;
}

export function generateIncidents(seed: number, count: number): Incident[] {
  const rng = mulberry32(seed);
  const out: Incident[] = [];

  for (let i = 0; i < count; i++) {
    const cameraId = CAMERA_IDS[weightedIndex(CAMERA_WEIGHTS, rng)];
    const camera = CAMERA_BY_ID[cameraId];

    // use case constrained by camera-area affinity
    const affinity = AFFINITY[camera.area];
    const ucIds = Object.keys(affinity) as UseCaseId[];
    const ucWeights = ucIds.map((id) => affinity[id] ?? 0);
    const useCaseId = ucIds[weightedIndex(ucWeights, rng)];

    const sev = SEVERITY_WEIGHTS[
      weightedIndex(SEVERITY_WEIGHTS.map((s) => s.w), rng)
    ].sev as Severity;

    const hour = weightedIndex(HOUR_WEIGHTS, rng);

    // bbox: 6..22% wide/tall, positioned so it stays in-frame
    const w = 6 + rng() * 16;
    const h = 8 + rng() * 18;
    const x = rng() * (100 - w);
    const y = rng() * (100 - h);

    out.push({
      id: i + 1,
      cameraId,
      useCaseId,
      severity: sev,
      message: MESSAGES[useCaseId] ?? 'Non compliance detected',
      timestamp: isoAt(hour, rng),
      bbox: {
        x: Math.round(x * 10) / 10,
        y: Math.round(y * 10) / 10,
        w: Math.round(w * 10) / 10,
        h: Math.round(h * 10) / 10,
      },
      resolved: false, // resolution efficiency is 0% per spec aggregate constants
    });
  }

  return out;
}
```

- [ ] **Step 4: Run to confirm pass**

```bash
npx vitest run src/app/data/generator.spec.ts
```
Expected: PASS (6 tests).

- [ ] **Step 5: Commit**

```bash
git add src/app/data/generator.ts src/app/data/generator.spec.ts
git commit -m "feat: add seeded incident generator (1617 records)"
```

---

### Task 1.5: Selectors / aggregations (TDD)

**Files:**
- Create: `src/app/data/selectors.ts`
- Test: `src/app/data/selectors.spec.ts`

- [ ] **Step 1: Write the failing test `src/app/data/selectors.spec.ts`**:

```typescript
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
```

- [ ] **Step 2: Run to confirm fail**

```bash
npx vitest run src/app/data/selectors.spec.ts
```
Expected: FAIL — cannot find module './selectors'.

- [ ] **Step 3: Write `src/app/data/selectors.ts`**:

```typescript
import { Severity } from '../components/single-camera-view/single-camera-view.types';
import { UseCaseId, USE_CASES } from '../core/tokens';
import { CAMERA_BY_ID, CAMERAS } from './reference';
import { Incident, Kpis } from './model';

export interface UseCaseRow { id: UseCaseId; name: string; color: string; count: number; pct: number; }
export interface HourBin { hour: number; High: number; Medium: number; Low: number; }
export interface LeaderRow { id: string; name: string; count: number; }
export interface HeatRow { id: string; name: string; cells: number[]; }
export interface PageResult { rows: Incident[]; page: number; pageCount: number; total: number; }

export function filterIncidents(
  all: readonly Incident[],
  f: { useCase: UseCaseId | 'all'; severity: Severity | 'all' },
): Incident[] {
  return all.filter(
    (i) =>
      (f.useCase === 'all' || i.useCaseId === f.useCase) &&
      (f.severity === 'all' || i.severity === f.severity),
  );
}

export function computeKpis(list: readonly Incident[]): Kpis {
  const byCamera = new Map<string, number>();
  const byHour = new Array<number>(24).fill(0);
  let open = 0;
  for (const i of list) {
    byCamera.set(i.cameraId, (byCamera.get(i.cameraId) ?? 0) + 1);
    byHour[new Date(i.timestamp).getHours()]++;
    if (!i.resolved) open++;
  }
  let worstCamera: Kpis['worstCamera'] = null;
  for (const [id, count] of byCamera) {
    if (!worstCamera || count > worstCamera.count) worstCamera = { name: CAMERA_BY_ID[id].name, count };
  }
  let peakHour: Kpis['peakHour'] = null;
  byHour.forEach((count, hour) => {
    if (!peakHour || count > peakHour.count) peakHour = { hour, count };
  });
  return { total: list.length, open, worstCamera, peakHour };
}

export function useCaseBreakdown(list: readonly Incident[]): UseCaseRow[] {
  const counts = new Map<UseCaseId, number>();
  for (const i of list) counts.set(i.useCaseId, (counts.get(i.useCaseId) ?? 0) + 1);
  const total = list.length || 1;
  return USE_CASES.map((uc) => {
    const count = counts.get(uc.id) ?? 0;
    return { id: uc.id, name: uc.name, color: uc.color, count, pct: (count / total) * 100 };
  })
    .filter((r) => r.count > 0)
    .sort((a, b) => b.count - a.count);
}

export function severityByHour(list: readonly Incident[]): HourBin[] {
  const bins: HourBin[] = Array.from({ length: 24 }, (_, hour) => ({ hour, High: 0, Medium: 0, Low: 0 }));
  for (const i of list) bins[new Date(i.timestamp).getHours()][i.severity]++;
  return bins;
}

export function cameraLeaderboard(
  list: readonly Incident[],
  order: 'high' | 'low',
  limit: number,
): LeaderRow[] {
  const counts = new Map<string, number>();
  for (const c of CAMERAS) counts.set(c.id, 0);
  for (const i of list) counts.set(i.cameraId, (counts.get(i.cameraId) ?? 0) + 1);
  const rows = [...counts.entries()].map(([id, count]) => ({ id, name: CAMERA_BY_ID[id].name, count }));
  rows.sort((a, b) => (order === 'high' ? b.count - a.count : a.count - b.count));
  return rows.slice(0, limit);
}

export function cameraHourHeatmap(list: readonly Incident[]): HeatRow[] {
  const map = new Map<string, number[]>();
  for (const c of CAMERAS) map.set(c.id, new Array<number>(24).fill(0));
  for (const i of list) map.get(i.cameraId)![new Date(i.timestamp).getHours()]++;
  return CAMERAS.map((c) => ({ id: c.id, name: c.name, cells: map.get(c.id)! }))
    .sort((a, b) => sum(b.cells) - sum(a.cells));
}

function sum(a: number[]): number {
  return a.reduce((s, n) => s + n, 0);
}

export function paginate(list: readonly Incident[], page: number, pageSize: number): PageResult {
  const total = list.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const clamped = Math.min(Math.max(1, page), pageCount);
  const start = (clamped - 1) * pageSize;
  return { rows: list.slice(start, start + pageSize), page: clamped, pageCount, total };
}
```

- [ ] **Step 4: Run to confirm pass**

```bash
npx vitest run src/app/data/selectors.spec.ts
```
Expected: PASS (10 tests).

- [ ] **Step 5: Commit**

```bash
git add src/app/data/selectors.ts src/app/data/selectors.spec.ts
git commit -m "feat: add memoizable selectors (kpis, breakdown, trend, leaderboard, heatmap, paginate)"
```

---

### Task 1.6: Incident → Evidence adapter (TDD)

**Files:**
- Create: `src/app/data/evidence-adapter.ts`
- Test: `src/app/data/evidence-adapter.spec.ts`

- [ ] **Step 1: Write the failing test `src/app/data/evidence-adapter.spec.ts`**:

```typescript
import { describe, it, expect } from 'vitest';
import { incidentToEvidence } from './evidence-adapter';
import { generateIncidents, TODAY_SEED } from './generator';

describe('incidentToEvidence', () => {
  const inc = generateIncidents(TODAY_SEED, 1)[0];
  const ev = incidentToEvidence(inc);

  it('maps camera, zone, use-case name and severity through unchanged', () => {
    expect(ev.cameraName).toBe('UPI 14 MEE Cooling Tower');
    expect(ev.severity).toBe(inc.severity); // both 'High' | 'Medium' | 'Low'
    expect(ev.useCase).toBeTruthy();
    expect(ev.zone).toBeTruthy();
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
```

- [ ] **Step 2: Run to confirm fail**

```bash
npx vitest run src/app/data/evidence-adapter.spec.ts
```
Expected: FAIL — cannot find module './evidence-adapter'.

- [ ] **Step 3: Write `src/app/data/evidence-adapter.ts`**:

```typescript
import { Evidence } from '../components/single-camera-view/single-camera-view.types';
import { USE_CASE_BY_ID } from '../core/tokens';
import { CAMERA_BY_ID } from './reference';
import { Incident } from './model';

/** Maps a dashboard Incident onto the Evidence shape the widget consumes. */
export function incidentToEvidence(inc: Incident): Evidence {
  const camera = CAMERA_BY_ID[inc.cameraId];
  return {
    id: `ev-${inc.id}`,
    cameraName: camera.name,
    zone: camera.zone,
    useCase: USE_CASE_BY_ID[inc.useCaseId].name,
    severity: inc.severity,
    message: inc.message,
    timestamp: inc.timestamp,
    clipDurationSec: 6,
    windowMinutes: 5,
    plantName: 'Pune Plant 2',
  };
}
```

- [ ] **Step 4: Run to confirm pass**

```bash
npx vitest run src/app/data/evidence-adapter.spec.ts
```
Expected: PASS (3 tests).

- [ ] **Step 5: Run the whole data-layer suite once**

```bash
npx vitest run
```
Expected: PASS (all files green).

- [ ] **Step 6: Commit**

```bash
git add src/app/data/evidence-adapter.ts src/app/data/evidence-adapter.spec.ts
git commit -m "feat: add Incident->Evidence adapter for widget integration"
```

---

## Phase 2 — UI primitives & scene thumbnails

### Task 2.1: Icon + Pill components

**Files:**
- Create: `src/app/ui/icon.component.ts`
- Create: `src/app/ui/pill.component.ts`

- [ ] **Step 1: Write `src/app/ui/icon.component.ts`** (complete):

```typescript
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from '../core/icons';

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg
    [attr.width]="size"
    [attr.height]="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    [attr.stroke-width]="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    [innerHTML]="markup"
  ></svg>`,
})
export class IconComponent {
  @Input({ required: true }) set name(value: string) {
    this.markup = this.sanitizer.bypassSecurityTrustHtml(ICONS[value] ?? '');
  }
  @Input() size = 18;
  @Input() strokeWidth = 1.6;
  markup: SafeHtml = '';
  constructor(private sanitizer: DomSanitizer) {}
}
```

- [ ] **Step 2: Write `src/app/ui/pill.component.ts`** (complete — colored pill with white text; used for use-case and severity):

```typescript
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span
    class="inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
    [style.background-color]="color"
    [style.color]="textColor"
  >{{ label }}</span>`,
})
export class PillComponent {
  @Input({ required: true }) label = '';
  @Input({ required: true }) color = '#64748B';
  @Input() textColor = '#FFFFFF';
}
```

- [ ] **Step 3: Gate** — `npm run build`. Expected: compiles. (Components are tree-shaken until used; build still type-checks them via the next consumer. To force now, temporarily not needed — they're consumed in Task 4.x. Build still validates standalone component metadata.)

- [ ] **Step 4: Commit**

```bash
git add src/app/ui/icon.component.ts src/app/ui/pill.component.ts
git commit -m "feat: add Icon and Pill UI primitives"
```

---

### Task 2.2: Scene thumbnail component (6 SVG scenes + bbox)

**Files:**
- Create: `src/app/ui/scene-thumb.component.ts`

- [ ] **Step 1: Write `src/app/ui/scene-thumb.component.ts`** (complete — schematic SVG scenes that read as "the AI's view of the frame", per spec §Image strategy; bbox overlay colored by use case; optional centered play icon for the Video cell):

```typescript
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SceneId } from '../data/model';

@Component({
  selector: 'app-scene-thumb',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg
    [attr.width]="width"
    [attr.height]="height"
    viewBox="0 0 100 75"
    class="rounded-[6px] ring-1 ring-black/5"
    preserveAspectRatio="xMidYMid slice"
  >
    <!-- scene base -->
    <ng-container [ngSwitch]="scene">
      <g *ngSwitchCase="'lab'">
        <rect width="100" height="75" fill="#E7EDF3" />
        <rect x="6" y="40" width="34" height="20" rx="2" fill="#C7D2DE" />
        <rect x="60" y="40" width="34" height="20" rx="2" fill="#C7D2DE" />
        <rect x="0" y="60" width="100" height="15" fill="#B8C4D2" />
        <circle cx="23" cy="36" r="5" fill="#94A3B8" />
        <circle cx="77" cy="36" r="5" fill="#94A3B8" />
      </g>
      <g *ngSwitchCase="'cooling_tower'">
        <rect width="100" height="75" fill="#DBE4EC" />
        <rect x="0" y="55" width="100" height="20" fill="#9AA8B5" />
        <rect x="10" y="18" width="26" height="40" fill="#B6C2CE" />
        <rect x="64" y="22" width="24" height="36" fill="#B6C2CE" />
        <rect x="30" y="50" width="40" height="6" fill="#EF4444" opacity="0.8" />
        <circle cx="50" cy="44" r="4" fill="#64748B" />
      </g>
      <g *ngSwitchCase="'factory'">
        <rect width="100" height="75" fill="#E4E9EF" />
        <rect x="0" y="58" width="100" height="17" fill="#AEB9C6" />
        <rect x="8" y="30" width="84" height="6" fill="#9AA8B5" />
        <circle cx="30" cy="50" r="5" fill="#64748B" />
        <circle cx="58" cy="50" r="5" fill="#64748B" />
        <rect x="74" y="38" width="16" height="20" fill="#C7D2DE" />
      </g>
      <g *ngSwitchCase="'road'">
        <rect width="100" height="75" fill="#DDE3EA" />
        <rect x="0" y="50" width="100" height="25" fill="#7E8B99" />
        <rect x="20" y="61" width="12" height="2" fill="#FACC15" />
        <rect x="46" y="61" width="12" height="2" fill="#FACC15" />
        <rect x="72" y="61" width="12" height="2" fill="#FACC15" />
        <rect x="40" y="40" width="22" height="12" rx="2" fill="#475569" />
      </g>
      <g *ngSwitchCase="'loading_bay'">
        <rect width="100" height="75" fill="#E2E8F0" />
        <rect x="0" y="55" width="100" height="20" fill="#A3AEBC" />
        <rect x="10" y="20" width="30" height="35" fill="#C7D2DE" />
        <rect x="55" y="26" width="35" height="29" fill="#B6C2CE" />
        <rect x="55" y="40" width="35" height="3" fill="#94A3B8" />
      </g>
      <g *ngSwitchCase="'gate'">
        <rect width="100" height="75" fill="#DCE3EB" />
        <rect x="0" y="58" width="100" height="17" fill="#9AA8B5" />
        <rect x="14" y="22" width="6" height="36" fill="#64748B" />
        <rect x="80" y="22" width="6" height="36" fill="#64748B" />
        <rect x="20" y="34" width="60" height="4" fill="#EF4444" />
        <circle cx="50" cy="48" r="4" fill="#475569" />
      </g>
      <rect *ngSwitchDefault width="100" height="75" fill="#CBD5E1" />
    </ng-container>

    <!-- bounding box overlay -->
    <rect
      [attr.x]="bbox.x"
      [attr.y]="bbox.y * 0.75"
      [attr.width]="bbox.w"
      [attr.height]="bbox.h * 0.75"
      fill="none"
      [attr.stroke]="color"
      stroke-width="1.5"
    />
    <rect
      [attr.x]="bbox.x"
      [attr.y]="bbox.y * 0.75"
      [attr.width]="bbox.w"
      [attr.height]="bbox.h * 0.75"
      [attr.fill]="color"
      opacity="0.18"
    />

    <!-- play overlay (video cell) -->
    <g *ngIf="showPlay">
      <circle cx="50" cy="37" r="11" fill="#0F172A" opacity="0.55" />
      <path d="M46 31 L58 37 L46 43 Z" fill="#FFFFFF" />
    </g>
  </svg>`,
})
export class SceneThumbComponent {
  @Input({ required: true }) scene: SceneId = 'lab';
  @Input({ required: true }) bbox = { x: 0, y: 0, w: 0, h: 0 };
  @Input({ required: true }) color = '#EF4444';
  @Input() showPlay = false;
  @Input() width = 80;
  @Input() height = 60;
}
```

- [ ] **Step 2: Gate** — `npm run build`. Expected: compiles.

- [ ] **Step 3: Commit**

```bash
git add src/app/ui/scene-thumb.component.ts
git commit -m "feat: add schematic scene-thumbnail component with bbox overlay"
```

---

### Task 2.3: KPI card component

**Files:**
- Create: `src/app/ui/kpi-card.component.ts`

- [ ] **Step 1: Write `src/app/ui/kpi-card.component.ts`** (complete — label, big value, sub-line, optional delta with metric-aware coloring, icon tile):

```typescript
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { ACTION } from '../core/tokens';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div
    class="flex items-start justify-between rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.05)]"
  >
    <div class="min-w-0">
      <div class="text-[13px] font-medium text-[#64748B]">{{ label }}</div>
      <div class="mt-1 text-[28px] font-bold leading-none text-[#0F172A]">{{ value }}</div>
      <div *ngIf="sub" class="mt-2 text-[12px] text-[#64748B]">{{ sub }}</div>
      <div *ngIf="delta" class="mt-1 flex items-center gap-1 text-[12px] font-semibold" [style.color]="deltaColor">
        <span>{{ deltaUp ? '↑' : '↓' }}</span><span>{{ delta }}</span>
      </div>
    </div>
    <div
      class="flex h-11 w-11 flex-none items-center justify-center rounded-[10px] text-white"
      [style.background-color]="iconBg"
    >
      <app-icon [name]="icon" [size]="20"></app-icon>
    </div>
  </div>`,
})
export class KpiCardComponent {
  @Input({ required: true }) label = '';
  @Input({ required: true }) value: string | number = '';
  @Input() sub = '';
  @Input() delta = '';
  @Input() deltaUp = true;
  /** true => up is bad (incident counts). false => up is good (efficiency). */
  @Input() upIsBad = true;
  @Input() icon = 'triangleAlert';
  @Input() iconBg = ACTION.blue;

  get deltaColor(): string {
    const bad = this.deltaUp === this.upIsBad; // up&upIsBad OR down&!upIsBad => bad
    return bad ? '#EF4444' : '#22C55E';
  }
}
```

- [ ] **Step 2: Gate** — `npm run build`. Expected: compiles.

- [ ] **Step 3: Commit**

```bash
git add src/app/ui/kpi-card.component.ts
git commit -m "feat: add KPI card with metric-aware delta coloring"
```

---

## Phase 3 — Charts (hand-built SVG)

### Task 3.1: Ranked use-case bars

**Files:**
- Create: `src/app/charts/use-case-bars.component.ts`

- [ ] **Step 1: Write `src/app/charts/use-case-bars.component.ts`** (complete — horizontal bars sorted desc, count + %; replaces the donut):

```typescript
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseCaseRow } from '../data/selectors';

@Component({
  selector: 'app-use-case-bars',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="flex flex-col gap-2.5">
    <div *ngIf="rows.length === 0" class="py-8 text-center text-[13px] text-[#64748B]">
      No incidents matching this filter
    </div>
    <div *ngFor="let r of rows" class="flex items-center gap-3">
      <div class="w-40 flex-none truncate text-[12px] text-[#0F172A]" [title]="r.name">{{ r.name }}</div>
      <div class="relative h-5 flex-1 overflow-hidden rounded bg-[#F1F5F9]">
        <div
          class="h-full rounded"
          [style.width.%]="max ? (r.count / max) * 100 : 0"
          [style.background-color]="r.color"
        ></div>
      </div>
      <div class="w-24 flex-none text-right text-[12px] tabular-nums text-[#0F172A]">
        {{ r.count }} <span class="text-[#64748B]">({{ r.pct | number: '1.0-0' }}%)</span>
      </div>
    </div>
  </div>`,
})
export class UseCaseBarsComponent {
  @Input({ required: true }) rows: UseCaseRow[] = [];
  get max(): number {
    return this.rows.reduce((m, r) => Math.max(m, r.count), 0);
  }
}
```

- [ ] **Step 2: Gate** — `npm run build`. Expected: compiles.

- [ ] **Step 3: Commit**

```bash
git add src/app/charts/use-case-bars.component.ts
git commit -m "feat: add ranked use-case bars chart"
```

---

### Task 3.2: Severity-over-time stacked bars

**Files:**
- Create: `src/app/charts/severity-trend.component.ts`

- [ ] **Step 1: Write `src/app/charts/severity-trend.component.ts`** (complete — SVG stacked bars per hour, severity-colored, with hour axis + legend):

```typescript
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HourBin } from '../data/selectors';
import { SEVERITY_COLOR } from '../core/tokens';

interface Seg { x: number; y: number; w: number; h: number; fill: string; }

@Component({
  selector: 'app-severity-trend',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div>
    <svg [attr.viewBox]="'0 0 ' + W + ' ' + H" class="w-full" [style.height.px]="220">
      <!-- y gridlines -->
      <g *ngFor="let g of yTicks">
        <line [attr.x1]="padL" [attr.x2]="W - padR" [attr.y1]="g.y" [attr.y2]="g.y" stroke="#EEF2F6" />
        <text [attr.x]="padL - 6" [attr.y]="g.y + 3" text-anchor="end" font-size="9" fill="#94A3B8">{{ g.v }}</text>
      </g>
      <!-- stacked bars -->
      <rect *ngFor="let s of segments" [attr.x]="s.x" [attr.y]="s.y" [attr.width]="s.w" [attr.height]="s.h" [attr.fill]="s.fill" />
      <!-- x labels every 3h -->
      <text *ngFor="let t of xLabels" [attr.x]="t.x" [attr.y]="H - 4" text-anchor="middle" font-size="9" fill="#94A3B8">{{ t.label }}</text>
    </svg>
    <div class="mt-2 flex items-center gap-4 text-[11px] text-[#64748B]">
      <span *ngFor="let s of legend" class="inline-flex items-center gap-1.5">
        <span class="inline-block h-2.5 w-2.5 rounded-sm" [style.background-color]="s.color"></span>{{ s.label }}
      </span>
    </div>
  </div>`,
})
export class SeverityTrendComponent {
  readonly W = 720;
  readonly H = 200;
  readonly padL = 28;
  readonly padR = 8;
  readonly padT = 8;
  readonly padB = 18;

  legend = [
    { label: 'High', color: SEVERITY_COLOR.High },
    { label: 'Medium', color: SEVERITY_COLOR.Medium },
    { label: 'Low', color: SEVERITY_COLOR.Low },
  ];

  private _bins: HourBin[] = [];
  segments: Seg[] = [];
  yTicks: { y: number; v: number }[] = [];
  xLabels: { x: number; label: string }[] = [];

  @Input({ required: true }) set bins(value: HourBin[]) {
    this._bins = value;
    this.build();
  }

  private build(): void {
    const plotW = this.W - this.padL - this.padR;
    const plotH = this.H - this.padT - this.padB;
    const n = 24;
    const slot = plotW / n;
    const barW = slot * 0.62;
    const max = Math.max(1, ...this._bins.map((b) => b.High + b.Medium + b.Low));

    // round max up to a "nice" tick
    const niceMax = Math.ceil(max / 10) * 10 || 10;
    this.yTicks = [0, 0.25, 0.5, 0.75, 1].map((f) => ({
      y: this.padT + plotH * (1 - f),
      v: Math.round(niceMax * f),
    }));

    const segs: Seg[] = [];
    this._bins.forEach((b, i) => {
      const x = this.padL + i * slot + (slot - barW) / 2;
      let yCursor = this.padT + plotH;
      ([['High', b.High], ['Medium', b.Medium], ['Low', b.Low]] as const).forEach(([sev, v]) => {
        const h = (v / niceMax) * plotH;
        yCursor -= h;
        if (h > 0) segs.push({ x, y: yCursor, w: barW, h, fill: SEVERITY_COLOR[sev] });
      });
    });
    this.segments = segs;

    this.xLabels = this._bins
      .filter((_, i) => i % 3 === 0)
      .map((b) => ({
        x: this.padL + b.hour * slot + slot / 2,
        label: `${b.hour < 10 ? '0' : ''}${b.hour}:00`,
      }));
  }
}
```

- [ ] **Step 2: Gate** — `npm run build`. Expected: compiles.

- [ ] **Step 3: Commit**

```bash
git add src/app/charts/severity-trend.component.ts
git commit -m "feat: add severity-over-time stacked bar chart"
```

---

### Task 3.3: Camera × hour heatmap

**Files:**
- Create: `src/app/charts/camera-heatmap.component.ts`

- [ ] **Step 1: Write `src/app/charts/camera-heatmap.component.ts`** (complete — grid of cells, intensity = count, slate ramp with red top end):

```typescript
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatRow } from '../data/selectors';

@Component({
  selector: 'app-camera-heatmap',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="overflow-x-auto">
    <table class="border-separate" style="border-spacing: 2px">
      <thead>
        <tr>
          <th class="w-44"></th>
          <th *ngFor="let h of hours" class="text-[9px] font-normal text-[#94A3B8]">{{ h % 3 === 0 ? h : '' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of rows">
          <td class="pr-2 text-right text-[11px] text-[#0F172A]"><span class="block w-44 truncate" [title]="row.name">{{ row.name }}</span></td>
          <td *ngFor="let c of row.cells; let h = index">
            <div
              class="h-4 w-4 rounded-[3px]"
              [style.background-color]="cellColor(c)"
              [title]="row.name + ' @ ' + h + ':00 — ' + c + ' incidents'"
            ></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`,
})
export class CameraHeatmapComponent {
  readonly hours = Array.from({ length: 24 }, (_, i) => i);
  private _rows: HeatRow[] = [];
  private max = 1;

  @Input({ required: true }) set rows(value: HeatRow[]) {
    this._rows = value;
    this.max = Math.max(1, ...value.flatMap((r) => r.cells));
  }
  get rows(): HeatRow[] {
    return this._rows;
  }

  cellColor(count: number): string {
    if (count === 0) return '#F1F5F9';
    const t = count / this.max; // 0..1
    // interpolate slate-200 -> red-500 through amber
    if (t < 0.5) {
      return this.lerp([226, 232, 240], [251, 191, 36], t / 0.5); // slate -> amber
    }
    return this.lerp([251, 191, 36], [239, 68, 68], (t - 0.5) / 0.5); // amber -> red
  }

  private lerp(a: number[], b: number[], t: number): string {
    const c = a.map((v, i) => Math.round(v + (b[i] - v) * t));
    return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
  }
}
```

- [ ] **Step 2: Gate** — `npm run build`. Expected: compiles.

- [ ] **Step 3: Commit**

```bash
git add src/app/charts/camera-heatmap.component.ts
git commit -m "feat: add camera x hour heatmap"
```

---

## Phase 4 — Pages & app shell

### Task 4.1: Shared header chrome

**Files:**
- Create: `src/app/pages/app-header.component.ts`

- [ ] **Step 1: Write `src/app/pages/app-header.component.ts`** (complete — optional back arrow, title, decorative bell + avatar):

```typescript
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../ui/icon.component';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<header class="flex items-center justify-between border-b border-[#E5E7EB] bg-white px-6 py-3">
    <div class="flex items-center gap-3">
      <button
        *ngIf="showBack"
        type="button"
        class="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] text-[#0F172A] hover:bg-[#F1F5F9]"
        (click)="back.emit()"
        aria-label="Back"
      >
        <app-icon name="back" [size]="18"></app-icon>
      </button>
      <h1 class="text-[20px] font-semibold text-[#0F172A]">{{ title }}</h1>
    </div>
    <div class="flex items-center gap-4">
      <div class="relative text-[#475569]">
        <app-icon name="bell" [size]="20"></app-icon>
        <span class="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#EF4444] px-1 text-[10px] font-semibold text-white">0</span>
      </div>
      <div class="relative h-9 w-9 rounded-full bg-gradient-to-br from-[#475569] to-[#0F172A]">
        <span class="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#22C55E]"></span>
      </div>
    </div>
  </header>`,
})
export class AppHeaderComponent {
  @Input() title = 'Vision Dashboard';
  @Input() showBack = false;
  @Output() back = new EventEmitter<void>();
}
```

- [ ] **Step 2: Gate** — `npm run build`. Expected: compiles.

- [ ] **Step 3: Commit**

```bash
git add src/app/pages/app-header.component.ts
git commit -m "feat: add shared header chrome"
```

---

### Task 4.2: Home page

**Files:**
- Create: `src/app/pages/home.component.ts`

- [ ] **Step 1: Write `src/app/pages/home.component.ts`** (complete — hero + 3×3 use-case tiles + CTA):

```typescript
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../ui/icon.component';
import { USE_CASES } from '../core/tokens';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="mx-auto max-w-[1100px] px-6 py-14">
    <div class="text-center">
      <h1 class="text-[44px] font-bold tracking-tight text-[#0F172A]">I/O Vision</h1>
      <p class="mx-auto mt-3 max-w-xl text-[18px] text-[#64748B]">
        Camera-based AI monitoring for safety and compliance across your facility.
      </p>
    </div>

    <div class="mt-12 grid grid-cols-3 gap-4">
      <div
        *ngFor="let uc of useCases"
        class="rounded-[12px] border border-[#E5E7EB] bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.05)] transition-transform duration-150 hover:-translate-y-0.5"
      >
        <div class="flex h-10 w-10 items-center justify-center rounded-[10px]" [style.background-color]="uc.color + '1F'" [style.color]="uc.color">
          <app-icon [name]="uc.icon" [size]="20"></app-icon>
        </div>
        <div class="mt-3 text-[16px] font-semibold text-[#0F172A]">{{ uc.name }}</div>
        <div class="mt-1 text-[14px] leading-snug text-[#64748B]">{{ uc.description }}</div>
      </div>
    </div>

    <div class="mt-12 flex justify-center">
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-[10px] bg-[#1F2937] px-8 py-3.5 text-[15px] font-semibold text-white hover:bg-[#111827]"
        (click)="showDemo.emit()"
      >
        Show Demo <app-icon name="arrowRight" [size]="18"></app-icon>
      </button>
    </div>
  </div>`,
})
export class HomeComponent {
  readonly useCases = USE_CASES;
  @Output() showDemo = new EventEmitter<void>();
}
```

- [ ] **Step 2: Gate** — `npm run build`. Expected: compiles.

- [ ] **Step 3: Commit**

```bash
git add src/app/pages/home.component.ts
git commit -m "feat: add Home page (hero + 9 use-case tiles + CTA)"
```

---

### Task 4.3: Dashboard component — shell, filter bar, KPI row

**Files:**
- Create: `src/app/pages/dashboard.component.ts`

This component is built up across Tasks 4.3 → 4.5. Start with state, filter bar, and KPI row; later tasks append the analytics, heatmap, and table sections and emit the row-click event.

- [ ] **Step 1: Write `src/app/pages/dashboard.component.ts`** (complete for this slice):

```typescript
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiCardComponent } from '../ui/kpi-card.component';
import { UseCaseBarsComponent } from '../charts/use-case-bars.component';
import { SeverityTrendComponent } from '../charts/severity-trend.component';
import { CameraHeatmapComponent } from '../charts/camera-heatmap.component';
import { PillComponent } from '../ui/pill.component';
import { SceneThumbComponent } from '../ui/scene-thumb.component';
import { IconComponent } from '../ui/icon.component';
import { USE_CASES, USE_CASE_BY_ID, UseCaseId, SEVERITY_COLOR } from '../core/tokens';
import { Severity } from '../components/single-camera-view/single-camera-view.types';
import { DurationKey, Incident } from '../data/model';
import { CAMERA_BY_ID } from '../data/reference';
import { generateIncidents, TODAY_SEED, TODAY_COUNT } from '../data/generator';
import {
  cameraHourHeatmap,
  cameraLeaderboard,
  computeKpis,
  filterIncidents,
  paginate,
  severityByHour,
  useCaseBreakdown,
} from '../data/selectors';

const PAGE_SIZE = 50;
const PEAK = (h: number) => `${h < 10 ? '0' : ''}${h}:00`;

/** Hardcoded comparison constants (spec §Aggregate constants). */
const COMPARE = { yesterday: 1263 };
/** Duration multipliers so toggling visibly shifts the numbers (yesterday/last7 are mock-scaled). */
const DURATION_SCALE: Record<DurationKey, number> = { today: 1, yesterday: 0.78, last7: 5.4 };

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, KpiCardComponent, UseCaseBarsComponent, SeverityTrendComponent,
    CameraHeatmapComponent, PillComponent, SceneThumbComponent, IconComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="px-6 py-5">
    <!-- ===== Filter bar (sticky) ===== -->
    <div class="sticky top-0 z-20 mb-4 flex flex-wrap items-center gap-3 rounded-[12px] border border-[#E5E7EB] bg-white px-4 py-3 shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
      <label class="text-[13px] font-medium text-[#64748B]">Use Case</label>
      <select
        class="rounded-md border border-[#E5E7EB] bg-white px-3 py-1.5 text-[13px] text-[#0F172A]"
        [value]="useCase"
        (change)="onUseCase($any($event.target).value)"
      >
        <option value="all">All Use Cases</option>
        <option *ngFor="let uc of useCases" [value]="uc.id">{{ uc.name }}</option>
      </select>

      <div class="ml-2 inline-flex overflow-hidden rounded-md border border-[#E5E7EB]">
        <button
          *ngFor="let d of durations"
          type="button"
          class="px-3 py-1.5 text-[13px]"
          [class.bg-\[\#1F2937\]]="duration === d.key"
          [class.text-white]="duration === d.key"
          [class.text-\[\#475569\]]="duration !== d.key"
          (click)="onDuration(d.key)"
        >{{ d.label }}</button>
      </div>

      <span class="ml-2 text-[13px] text-[#64748B]">Periodicity: <span class="font-medium text-[#0F172A]">Hourly</span></span>

      <button
        type="button"
        class="ml-auto rounded-[10px] bg-[#1F2937] px-4 py-2 text-[13px] font-semibold text-white hover:bg-[#111827]"
        title="Per-camera analytics — opens individual camera deep-dive"
      >Camera Analysis</button>
    </div>

    <!-- ===== KPI row ===== -->
    <div class="mb-4 grid grid-cols-4 gap-4">
      <app-kpi-card label="Total Incidents" [value]="kpis.total | number" sub="Yesterday (1263)"
        [delta]="totalDelta" [deltaUp]="totalUp" [upIsBad]="true" icon="triangleAlert"></app-kpi-card>
      <app-kpi-card label="Open / Unresolved" [value]="kpis.open | number" sub="Awaiting review"
        icon="triangleAlert" iconBg="#EF4444"></app-kpi-card>
      <app-kpi-card label="Highest-Risk Camera" [value]="worstName" [sub]="worstSub"
        icon="camera" iconBg="#1F2937"></app-kpi-card>
      <app-kpi-card label="Peak Hour" [value]="peakLabel" [sub]="peakSub"
        icon="clock" iconBg="#3B82F6"></app-kpi-card>
    </div>

    <!-- analytics, heatmap, table appended in Tasks 4.4–4.5 -->
    <ng-container *ngTemplateOutlet="analytics"></ng-container>
  </div>

  <!-- placeholder template, replaced in 4.4 -->
  <ng-template #analytics></ng-template>`,
})
export class DashboardComponent {
  @Output() openIncident = new EventEmitter<{ incident: Incident; scoped: Incident[] }>();

  readonly useCases = USE_CASES;
  readonly durations: { key: DurationKey; label: string }[] = [
    { key: 'today', label: 'Today' },
    { key: 'yesterday', label: 'Yesterday' },
    { key: 'last7', label: 'Last 7 Days' },
  ];

  // ----- raw source (stable for the session) -----
  private readonly all: Incident[] = generateIncidents(TODAY_SEED, TODAY_COUNT);

  // ----- filter state -----
  useCase: UseCaseId | 'all' = 'all';
  duration: DurationKey = 'today';
  severity: Severity | 'all' = 'all';

  // ----- derived (recomputed in recompute()) -----
  filtered: Incident[] = [];
  kpis = computeKpis(this.all);

  constructor() {
    this.recompute();
  }

  onUseCase(v: UseCaseId | 'all'): void { this.useCase = v; this.recompute(); }
  onDuration(d: DurationKey): void { this.duration = d; this.recompute(); }

  private scaledSource(): Incident[] {
    const scale = DURATION_SCALE[this.duration];
    if (scale === 1) return this.all;
    if (scale < 1) return this.all.slice(0, Math.round(this.all.length * scale));
    // last7: repeat to inflate volume; ids stay unique enough for display
    const reps = Math.ceil(scale);
    const out: Incident[] = [];
    for (let r = 0; r < reps; r++) for (const i of this.all) out.push({ ...i, id: i.id + r * this.all.length });
    return out.slice(0, Math.round(this.all.length * scale));
  }

  private recompute(): void {
    const src = this.scaledSource();
    this.filtered = filterIncidents(src, { useCase: this.useCase, severity: this.severity });
    this.kpis = computeKpis(this.filtered);
    // analytics/table derived values are recomputed in the getters below (cheap) or set here in 4.4–4.5
  }

  // ----- KPI display helpers -----
  get totalDelta(): string {
    const d = this.kpis.total - COMPARE.yesterday;
    const pct = (Math.abs(d) / COMPARE.yesterday) * 100;
    return `${Math.abs(d)} (${pct.toFixed(2)}%)`;
  }
  get totalUp(): boolean { return this.kpis.total >= COMPARE.yesterday; }
  get worstName(): string { return this.kpis.worstCamera?.name ?? '—'; }
  get worstSub(): string { return this.kpis.worstCamera ? `${this.kpis.worstCamera.count} incidents` : 'No data'; }
  get peakLabel(): string { return this.kpis.peakHour ? PEAK(this.kpis.peakHour.hour) : '—'; }
  get peakSub(): string { return this.kpis.peakHour ? `${this.kpis.peakHour.count} incidents` : 'No data'; }
}
```

- [ ] **Step 2: Gate** — `npm run build`. Expected: compiles. (The `#analytics` template is an empty placeholder for now.)

- [ ] **Step 3: Commit**

```bash
git add src/app/pages/dashboard.component.ts
git commit -m "feat: add dashboard shell with filter bar and KPI row"
```

---

### Task 4.4: Dashboard — analytics + heatmap + leaderboard

**Files:**
- Modify: `src/app/pages/dashboard.component.ts`

- [ ] **Step 1: Add derived fields to the class.** In `DashboardComponent`, add these properties after `kpis = computeKpis(this.all);`:

```typescript
  ucRows = useCaseBreakdown(this.all);
  hourBins = severityByHour(this.all);
  heatRows = cameraHourHeatmap(this.all);
  leaderTab: 'high' | 'low' = 'high';
  leaders = cameraLeaderboard(this.all, 'high', 5);
```

- [ ] **Step 2: Populate them in `recompute()`.** Replace the body of `recompute()` with:

```typescript
  private recompute(): void {
    const src = this.scaledSource();
    this.filtered = filterIncidents(src, { useCase: this.useCase, severity: this.severity });
    this.kpis = computeKpis(this.filtered);
    this.ucRows = useCaseBreakdown(this.filtered);
    this.hourBins = severityByHour(this.filtered);
    this.heatRows = cameraHourHeatmap(this.filtered);
    this.leaders = cameraLeaderboard(this.filtered, this.leaderTab, 5);
    this.resetTable(); // defined in Task 4.5
  }

  setLeaderTab(tab: 'high' | 'low'): void {
    this.leaderTab = tab;
    this.leaders = cameraLeaderboard(this.filtered, tab, 5);
  }
```

> Note: `resetTable()` is added in Task 4.5. Until then, temporarily stub it by adding `private resetTable(): void {}` to the class so the build passes; Task 4.5 replaces the stub.

- [ ] **Step 3: Add the stub** (so this task builds independently): add `private resetTable(): void {}` to the class body.

- [ ] **Step 4: Replace the `#analytics` placeholder template** with the real analytics + heatmap markup. In the component template, replace:

```html
  <ng-container *ngTemplateOutlet="analytics"></ng-container>
</div>

<!-- placeholder template, replaced in 4.4 -->
<ng-template #analytics></ng-template>
```

with:

```html
    <!-- ===== Analytics row ===== -->
    <div class="mb-4 grid grid-cols-12 gap-4">
      <!-- Camera leaderboard (left) -->
      <div class="col-span-3 rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
        <div class="text-[15px] font-semibold text-[#0F172A]">Camera Insights</div>
        <div class="text-[12px] text-[#64748B]">Performing Cameras.</div>
        <div class="mt-3 flex gap-4 border-b border-[#E5E7EB] text-[13px]">
          <button type="button" class="-mb-px border-b-2 pb-1.5"
            [class.border-\[\#1F2937\]]="leaderTab === 'high'" [class.text-\[\#0F172A\]]="leaderTab === 'high'"
            [class.border-transparent]="leaderTab !== 'high'" [class.text-\[\#94A3B8\]]="leaderTab !== 'high'"
            (click)="setLeaderTab('high')">High Incident Rate</button>
          <button type="button" class="-mb-px border-b-2 pb-1.5"
            [class.border-\[\#1F2937\]]="leaderTab === 'low'" [class.text-\[\#0F172A\]]="leaderTab === 'low'"
            [class.border-transparent]="leaderTab !== 'low'" [class.text-\[\#94A3B8\]]="leaderTab !== 'low'"
            (click)="setLeaderTab('low')">Low Incident Rate</button>
        </div>
        <div class="mt-3 flex flex-col gap-2">
          <div *ngFor="let c of leaders" class="flex items-center gap-2">
            <span class="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#FEF2F2] text-[#EF4444]">
              <app-icon name="camera" [size]="14"></app-icon>
            </span>
            <span class="min-w-0 flex-1 truncate text-[13px] text-[#0F172A]" [title]="c.name">{{ c.name }}</span>
            <span class="flex-none rounded-full bg-[#FEE2E2] px-2 py-0.5 text-[11px] font-semibold text-[#B91C1C]">{{ c.count }}</span>
          </div>
        </div>
      </div>

      <!-- Severity over time (right) -->
      <div class="col-span-9 rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
        <div class="flex items-center gap-2">
          <app-icon name="clock" [size]="16"></app-icon>
          <span class="text-[15px] font-semibold text-[#0F172A]">Incidents by Hour &amp; Severity</span>
        </div>
        <div class="mt-3"><app-severity-trend [bins]="hourBins"></app-severity-trend></div>
      </div>
    </div>

    <!-- ===== Use-case breakdown + heatmap row ===== -->
    <div class="mb-4 grid grid-cols-12 gap-4">
      <div class="col-span-5 rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
        <div class="text-[15px] font-semibold text-[#0F172A]">Non-Compliance Breakdown</div>
        <div class="mt-4"><app-use-case-bars [rows]="ucRows"></app-use-case-bars></div>
      </div>
      <div class="col-span-7 rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
        <div class="text-[15px] font-semibold text-[#0F172A]">Where &amp; When — Camera Activity Heatmap</div>
        <div class="text-[12px] text-[#64748B]">Incident density by camera and hour</div>
        <div class="mt-3"><app-camera-heatmap [rows]="heatRows"></app-camera-heatmap></div>
      </div>
    </div>

    <!-- evidence table appended in Task 4.5 -->
  </div>
```

(Note the closing `</div>` now ends the page wrapper; the standalone `#analytics` template is removed entirely.)

- [ ] **Step 5: Gate** — `npm run build`. Expected: compiles. `npm start`, set `view` temporarily — defer visual check to Task 4.6 wiring. For now confirm no template errors.

- [ ] **Step 6: Commit**

```bash
git add src/app/pages/dashboard.component.ts
git commit -m "feat: add dashboard analytics, breakdown bars, and heatmap"
```

---

### Task 4.5: Dashboard — evidence table, pagination, sort, severity filter, row click

**Files:**
- Modify: `src/app/pages/dashboard.component.ts`

- [ ] **Step 1: Replace the `resetTable()` stub** and add table state. Remove `private resetTable(): void {}` and add these members to the class:

```typescript
  // ----- table state -----
  page = 1;
  readonly pageSize = PAGE_SIZE;
  sortAsc = false; // time desc by default
  tableRows: Incident[] = [];
  pageCount = 1;
  tableTotal = 0;

  private tableSource(): Incident[] {
    const rows = [...this.filtered];
    rows.sort((a, b) =>
      this.sortAsc
        ? a.timestamp.localeCompare(b.timestamp)
        : b.timestamp.localeCompare(a.timestamp),
    );
    return rows;
  }

  private resetTable(): void {
    this.page = 1;
    this.applyTable();
  }

  private applyTable(): void {
    const res = paginate(this.tableSource(), this.page, this.pageSize);
    this.tableRows = res.rows;
    this.page = res.page;
    this.pageCount = res.pageCount;
    this.tableTotal = res.total;
  }

  toggleSort(): void { this.sortAsc = !this.sortAsc; this.applyTable(); }
  onSeverityFilter(v: Severity | 'all'): void { this.severity = v; this.recompute(); }
  goPage(p: number): void { this.page = p; this.applyTable(); }

  // ----- table cell helpers -----
  ucMeta(id: UseCaseId) { return USE_CASE_BY_ID[id]; }
  sevColor(s: Severity): string { return SEVERITY_COLOR[s]; }
  camName(id: string): string { return CAMERA_BY_ID[id].name; }
  scene(id: string) { return CAMERA_BY_ID[id].scene; }
  fmtTime(iso: string): string {
    const d = new Date(iso);
    const date = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    return `${date} @ ${time.toLowerCase()}`;
  }
  get rangeLabel(): string {
    const start = this.tableTotal === 0 ? 0 : (this.page - 1) * this.pageSize + 1;
    const end = Math.min(this.page * this.pageSize, this.tableTotal);
    return `${start} – ${end} of ${this.tableTotal}`;
  }

  onRowClick(inc: Incident): void {
    const scoped = this.filtered.filter((i) => i.cameraId === inc.cameraId);
    this.openIncident.emit({ incident: inc, scoped });
  }
```

- [ ] **Step 2: Add the table markup** right before the final `</div>` of the page wrapper (replacing the `<!-- evidence table appended in Task 4.5 -->` comment):

```html
    <!-- ===== Non-compliance List ===== -->
    <div class="rounded-[12px] border border-[#E5E7EB] bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
      <div class="text-[15px] font-semibold text-[#0F172A]">Non-compliance List</div>

      <div class="mt-3 flex items-center gap-3">
        <div class="relative flex-1">
          <span class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"><app-icon name="search" [size]="16"></app-icon></span>
          <input class="w-full rounded-md border border-[#E5E7EB] py-2 pl-9 pr-3 text-[13px] text-[#0F172A] placeholder:text-[#94A3B8]"
            placeholder="Search Non-compliance By Camera Name" disabled />
        </div>
        <button type="button" class="rounded-[8px] bg-[#1F2937] px-4 py-2 text-[13px] font-semibold text-white">Export</button>
      </div>

      <div *ngIf="tableTotal === 0" class="py-10 text-center text-[13px] text-[#64748B]">No incidents matching this filter</div>

      <table *ngIf="tableTotal > 0" class="mt-3 w-full text-left">
        <thead class="border-b border-[#E5E7EB] text-[12px] text-[#64748B]">
          <tr>
            <th class="py-2 pr-2 font-medium">Sr No</th>
            <th class="py-2 pr-2 font-medium">Camera Name</th>
            <th class="py-2 pr-2 font-medium">Use Case</th>
            <th class="py-2 pr-2 font-medium">
              <select class="bg-transparent text-[12px] font-medium text-[#64748B]" [value]="severity" (change)="onSeverityFilter($any($event.target).value)">
                <option value="all">Severity</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </th>
            <th class="py-2 pr-2 font-medium">Message</th>
            <th class="cursor-pointer select-none py-2 pr-2 font-medium" (click)="toggleSort()">Time {{ sortAsc ? '↑' : '↓' }}</th>
            <th class="py-2 pr-2 font-medium">Image</th>
            <th class="py-2 pr-2 font-medium">Video</th>
          </tr>
        </thead>
        <tbody class="text-[13px] text-[#0F172A]">
          <tr *ngFor="let inc of tableRows; let idx = index" class="cursor-pointer border-b border-[#F1F5F9] hover:bg-[#F8FAFC]" (click)="onRowClick(inc)">
            <td class="py-2 pr-2 tabular-nums text-[#64748B]">{{ (page - 1) * pageSize + idx + 1 }}</td>
            <td class="py-2 pr-2">{{ camName(inc.cameraId) }}</td>
            <td class="py-2 pr-2"><app-pill [label]="ucMeta(inc.useCaseId).name" [color]="ucMeta(inc.useCaseId).color"></app-pill></td>
            <td class="py-2 pr-2"><app-pill [label]="inc.severity" [color]="sevColor(inc.severity)"></app-pill></td>
            <td class="py-2 pr-2 text-[#475569]">{{ inc.message }}</td>
            <td class="py-2 pr-2 whitespace-nowrap text-[#475569]">{{ fmtTime(inc.timestamp) }}</td>
            <td class="py-2 pr-2"><app-scene-thumb [scene]="scene(inc.cameraId)" [bbox]="inc.bbox" [color]="ucMeta(inc.useCaseId).color" [width]="72" [height]="54"></app-scene-thumb></td>
            <td class="py-2 pr-2"><app-scene-thumb [scene]="scene(inc.cameraId)" [bbox]="inc.bbox" [color]="ucMeta(inc.useCaseId).color" [showPlay]="true" [width]="72" [height]="54"></app-scene-thumb></td>
          </tr>
        </tbody>
      </table>

      <div *ngIf="tableTotal > 0" class="mt-3 flex items-center justify-end gap-4 text-[12px] text-[#64748B]">
        <span>Items per page: {{ pageSize }}</span>
        <span>{{ rangeLabel }}</span>
        <div class="flex items-center gap-1">
          <button type="button" class="rounded px-2 py-1 hover:bg-[#F1F5F9] disabled:opacity-40" [disabled]="page === 1" (click)="goPage(1)">«</button>
          <button type="button" class="rounded px-2 py-1 hover:bg-[#F1F5F9] disabled:opacity-40" [disabled]="page === 1" (click)="goPage(page - 1)">‹</button>
          <span class="tabular-nums">{{ page }} / {{ pageCount }}</span>
          <button type="button" class="rounded px-2 py-1 hover:bg-[#F1F5F9] disabled:opacity-40" [disabled]="page === pageCount" (click)="goPage(page + 1)">›</button>
          <button type="button" class="rounded px-2 py-1 hover:bg-[#F1F5F9] disabled:opacity-40" [disabled]="page === pageCount" (click)="goPage(pageCount)">»</button>
        </div>
      </div>
    </div>
```

- [ ] **Step 3: Gate** — `npm run build`. Expected: compiles.

- [ ] **Step 4: Commit**

```bash
git add src/app/pages/dashboard.component.ts
git commit -m "feat: add evidence table with sort, severity filter, pagination, row click"
```

---

### Task 4.6: App shell — wire views + widget modal

**Files:**
- Modify: `src/app/app.ts`

- [ ] **Step 1: Replace `src/app/app.ts` entirely** (view state + widget modal via adapter):

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppView, Incident } from './data/model';
import { Evidence } from './components/single-camera-view/single-camera-view.types';
import { SingleCameraViewComponent } from './components/single-camera-view/single-camera-view.component';
import { AppHeaderComponent } from './pages/app-header.component';
import { HomeComponent } from './pages/home.component';
import { DashboardComponent } from './pages/dashboard.component';
import { incidentToEvidence } from './data/evidence-adapter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SingleCameraViewComponent, AppHeaderComponent, HomeComponent, DashboardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-header-bar
      *ngIf="view !== 'home'"
      [title]="'Vision Dashboard'"
      [showBack]="true"
      (back)="goHome()"
    ></app-header-bar>

    <app-home *ngIf="view === 'home'" (showDemo)="goDashboard()"></app-home>
    <app-dashboard *ngIf="view === 'dashboard'" (openIncident)="openWidget($event)"></app-dashboard>

    <app-single-camera-view
      *ngIf="modalEvidences.length && modalIndex !== null"
      [evidence]="modalEvidences[modalIndex]"
      [currentIndex]="modalIndex"
      [totalEvidences]="modalEvidences.length"
      (close)="closeWidget()"
      (next)="modalNext()"
      (previous)="modalPrev()"
      (goLive)="noop('goLive')"
      (snapshot)="noop('snapshot')"
      (exportClip)="noop('exportClip')"
    ></app-single-camera-view>
  `,
})
export class App {
  view: AppView = 'home';

  modalEvidences: Evidence[] = [];
  modalIndex: number | null = null;

  goHome(): void { this.view = 'home'; this.closeWidget(); }
  goDashboard(): void { this.view = 'dashboard'; }

  openWidget(payload: { incident: Incident; scoped: Incident[] }): void {
    // build the camera-scoped evidence list so widget prev/next walks this camera's incidents
    const sorted = [...payload.scoped].sort((a, b) => b.timestamp.localeCompare(a.timestamp));
    this.modalEvidences = sorted.map(incidentToEvidence);
    this.modalIndex = Math.max(0, sorted.findIndex((i) => i.id === payload.incident.id));
  }
  closeWidget(): void { this.modalEvidences = []; this.modalIndex = null; }
  modalNext(): void { if (this.modalIndex !== null && this.modalIndex < this.modalEvidences.length - 1) this.modalIndex++; }
  modalPrev(): void { if (this.modalIndex !== null && this.modalIndex > 0) this.modalIndex--; }

  noop(which: string): void { console.log(`[demo] ${which} — placeholder`); }
}
```

- [ ] **Step 2: Gate** — `npm run build`. Expected: compiles.

- [ ] **Step 3: Visual QA** — `npm start`, then at http://localhost:4200:
  - Home renders: hero, 9 tinted-icon tiles, "Show Demo".
  - Click **Show Demo** → dashboard with header + back arrow.
  - Filter bar sticky on scroll; 4 KPI cards show Total 1,617 / Open / "UPI 14 MEE Cooling Tower" / a peak hour ~13:00.
  - Leaderboard High tab leads with cooling tower; clicking **Low** reorders.
  - Severity-trend bars form a midday hump; heatmap shows hot cells 10:00–15:00.
  - Use-case bars sorted desc, lab_safety near top.
  - Table shows 50 rows; severity dropdown filters; **Time** header toggles ↑/↓; pager walks pages 1→33.
  - Click a row → widget modal opens on that incident; prev/next walks that camera's events; Esc/✕ closes; back arrow returns to dashboard.

- [ ] **Step 4: Commit**

```bash
git add src/app/app.ts
git commit -m "feat: wire home/dashboard views and widget modal via adapter"
```

---

## Phase 5 — Filtered-donut behavior, polish, cleanup

### Task 5.1: Severity breakdown when a single use case is filtered

Spec §Donut behavior under filter: when one use case is selected, the breakdown should show severity (High/Medium/Low), not a single 100% category. The ranked-bars panel replaces the donut, so apply the same idea there.

**Files:**
- Modify: `src/app/pages/dashboard.component.ts`

- [ ] **Step 1: Add a severity-breakdown builder** to `DashboardComponent`:

```typescript
  private breakdownRows(): import('../data/selectors').UseCaseRow[] {
    if (this.useCase === 'all') return useCaseBreakdown(this.filtered);
    // single use case selected -> show severity split using that use case's color family
    const total = this.filtered.length || 1;
    const order: Severity[] = ['High', 'Medium', 'Low'];
    return order
      .map((sev) => {
        const count = this.filtered.filter((i) => i.severity === sev).length;
        return { id: ('sev_' + sev) as any, name: sev, color: SEVERITY_COLOR[sev], count, pct: (count / total) * 100 };
      })
      .filter((r) => r.count > 0);
  }
```

- [ ] **Step 2: Use it in `recompute()`** — replace `this.ucRows = useCaseBreakdown(this.filtered);` with:

```typescript
    this.ucRows = this.breakdownRows();
```

- [ ] **Step 3: Gate** — `npm run build`. Expected: compiles.

- [ ] **Step 4: Visual QA** — filter Use Case to "Lab Safety Detection": the breakdown panel now shows three bars (High/Medium/Low in red/amber/green) instead of one full-width green bar.

- [ ] **Step 5: Commit**

```bash
git add src/app/pages/dashboard.component.ts
git commit -m "feat: show severity breakdown when a single use case is filtered"
```

---

### Task 5.2: Remove legacy demo file + dead references

**Files:**
- Delete: `src/app/mock-evidence.ts`

- [ ] **Step 1: Confirm nothing imports it** (app.ts was rewritten in 4.6):

```bash
grep -rn "mock-evidence" src/
```
Expected: no results. If any remain, remove those imports.

- [ ] **Step 2: Delete the file**

```bash
git rm src/app/mock-evidence.ts
```

- [ ] **Step 3: Gate** — `npm run build`. Expected: compiles.

- [ ] **Step 4: Commit**

```bash
git commit -m "chore: remove legacy mock-evidence demo data"
```

---

### Task 5.3: Final visual QA sweep

**Files:** none (verification only)

- [ ] **Step 1: Run the full data-suite once more**

```bash
npx vitest run
```
Expected: all green.

- [ ] **Step 2: Build for production**

```bash
npm run build
```
Expected: no errors.

- [ ] **Step 3: Walk the spec §Testing Strategy checklist** at http://localhost:4200 (1280px viewport):
  - [ ] Navigation Home → Dashboard → widget → back works end-to-end.
  - [ ] Use-Case filter re-renders KPIs, bars, trend, heatmap, leaderboard, table consistently.
  - [ ] Pagination reaches page 33; can't go past last/before first.
  - [ ] Severity filter in table header filters rows.
  - [ ] Time header toggles asc/desc.
  - [ ] Row click opens the correct incident; widget back returns to dashboard with filters intact.
  - [ ] Use-case color identical across bars, table pills, and breakdown.
  - [ ] Refresh produces identical counts/order (determinism).
  - [ ] Duration toggle (Today/Yesterday/Last 7) visibly shifts numbers.
  - [ ] Empty state: filter to a use case with zero rows (if any) → inline empty messages, no console errors.

- [ ] **Step 4: Commit (if any tweaks were needed during QA)**

```bash
git add -A
git commit -m "fix: visual QA adjustments"
```

---

## Self-Review notes (addressed)

- **Spec coverage:** Home (4.2), filter bar (4.3), KPI block reframed to 4 distinct KPIs (4.3), breakdown — ranked bars replacing donut incl. filtered-severity behavior (3.1, 5.1), analytics chart as severity-trend (3.2), camera insights leaderboard (4.4), evidence table with all 8 columns + sort + severity filter + pagination (4.5), row→widget (4.6), determinism + seeded data (1.3–1.5), scene SVG thumbnails (2.2), color consistency via single token source (0.2). Heatmap is an addition (3.3). Camera Analysis CTA + Export + search are decorative placeholders as specified.
- **Severity type:** single source — widget's `Severity` (`'High'|'Medium'|'Low'`) reused throughout; no case-mapping bugs.
- **Placeholders:** none — every step carries complete code. `resetTable()` is explicitly stubbed in 4.4 and replaced in 4.5 (sequencing noted in-line).
- **Consistency:** selector return types (`UseCaseRow`, `HourBin`, `LeaderRow`, `HeatRow`, `PageResult`) defined in 1.5 and consumed unchanged by charts (3.x) and dashboard (4.x). `incidentToEvidence` output matches the widget's required `Evidence` fields verified in 1.6.
