# I/O Vision Demo — Design Spec

**Date:** 2026-06-03
**Status:** Brainstorming approved — ready for planning
**Authors:** Utkarsh Narain · Claude

---

## Overview

A client-facing demo of Faclon's I/O Vision product, built as a single-file React artifact with mock data. Used by Faclon salespeople to show prospective clients what I/O Vision delivers — its dashboards, the depth of its insights, and the experience of accessing camera-based AI compliance monitoring through the product surface.

**Audience:** prospective enterprise clients viewing the demo in a live sales conversation.

**Success criteria:** the demo is easy to navigate, easy to understand, and looks like a real, deployed product instance — not a mockup. The salesperson can deliver the entire demo in 5–10 minutes without referring to notes.

---

## Approach

Three-screen linear flow, built around the 9 compliance use cases visible in the reference dashboard screenshots:

```
Home  →  Dashboard  →  Widget (per-camera deep-dive)
```

- **Home** is a framing screen. It establishes what I/O Vision is, lists the 9 use cases, and routes to the dashboard via a single CTA.
- **Dashboard** is the centerpiece — one scrolling page that mirrors the reference dashboard screenshots, with KPIs and analytics at the top and the non-compliance evidence list at the bottom.
- **Widget** opens when the salesperson clicks an evidence row in the list. It's a per-camera deep-dive surface that shows the camera frame with bounding box overlay, the camera's metadata, its use case breakdown, and its recent events.

The two pages of substantive content are **Dashboard** and **Widget**; Home is the entry. This collapses the original "monitoring numbers + compliance evidences" 2-page model — when machine-monitoring use cases dropped out of scope, both pages would have been compliance-focused, so the natural seam moved to Dashboard (the whole compliance picture in one page) and Widget (the per-camera drilldown).

---

## Use Cases in Scope (locked)

All 9 are human-compliance, taken from the reference dashboard screenshots:

1. Safety Gear
2. Fall and Loitering
3. Lab Safety Detection
4. Fire and Smoke Detection
5. Overcrowding Detection
6. No Staff Detection
7. No Helmet Detected
8. No SafetyVest Detected
9. Intrusion Detection

Machine-monitoring use cases (conveyor belt, tray, particle size, speed) are explicitly out of scope.

---

## Information Architecture

### Views (state-based, not URL-based)

The artifact runtime doesn't support real routing, so "routes" are React view states:

| View | Trigger | Returns to |
|---|---|---|
| `home` | App start | (entry point) |
| `dashboard` | "Show Demo" CTA on Home | `home` via back arrow |
| `widget` | Click an evidence row in dashboard table | `dashboard` via back arrow |

State at app root:

```ts
type AppState = {
  view: 'home' | 'dashboard' | 'widget'
  filters: { useCase: UseCaseId | 'all'; duration: 'today' | 'yesterday' | 'last7' }
  selectedIncident: Incident | null
}
```

### Top-level chrome

Consistent across Dashboard and Widget:

- Circular back arrow (left)
- Page title center-left (Dashboard: "Vision Dashboard"; Widget: camera name)
- Notifications bell with red badge "0" (right, decorative)
- User avatar with green status dot (right, decorative)

Home omits the back arrow but keeps the decorative right-side elements.

### Page contents

**Home:** brand block · 9 use case tiles in a 3×3 grid · "Show Demo" CTA.

**Dashboard** (scroll order):

1. Sticky filter bar — Use Case dropdown · Duration toggle · Periodicity (fixed) · Camera Analysis CTA (placeholder)
2. KPI block — 4 KPI cards 2×2 on left + Non-Compliance Summary donut on right
3. Analytics block — Camera Insights leaderboard (left, 25%) + Non-compliance Analysis chart (right, 75%)
4. Non-compliance List — paginated evidence table

**Widget** (stand-in, until real widget is provided):

- Left (65%): camera frame with bounding box overlay + trigger incident detail + timeline scrubber
- Right (35%): camera metadata card + per-camera use case donut + recent events list

---

## Visual System

### Direction

**Light enterprise**, matching the reference screenshots faithfully. Light data-dense UI reads as "real product" to enterprise prospects; dark industrial would shift the demo's positioning toward "concept demo."

### Surface palette

| Token | Value | Use |
|---|---|---|
| `bg.page` | `#F5F6F8` | Page background |
| `bg.card` | `#FFFFFF` | Card surfaces |
| `border.card` | `#E5E7EB` | 1px card border |
| `shadow.card` | `0 1px 3px rgba(15, 23, 42, 0.05)` | Subtle card lift |
| `radius.card` | `12px` | Card corner radius |
| `text.primary` | `#0F172A` | Headings, KPI numbers, body |
| `text.secondary` | `#64748B` | Labels, captions, helper text |

### Action / brand

| Token | Value | Use |
|---|---|---|
| `action.primary` | `#1F2937` | Primary buttons (Show Demo, Camera Analysis, Export) |
| `accent.blue` | `#3B82F6` | KPI card icon backgrounds |

Notable: primary action color is dark slate, not blue. Distinctive for enterprise SaaS and preserved from the screenshots.

### Severity tokens

| Severity | Background | Text |
|---|---|---|
| High | `#EF4444` | white |
| Medium | `#F59E0B` | white |
| Low | `#22C55E` | white |

### Use case color map

Each of the 9 use cases gets a fixed color used consistently across the donut, hourly chart series, use case pills in the evidence table, Home tile accents, and widget breakdowns.

| Use Case | Color | Hex |
|---|---|---|
| Safety Gear | Coral red | `#FB7185` |
| Fall and Loitering | Violet | `#A855F7` |
| Lab Safety Detection | Green | `#22C55E` |
| Fire and Smoke Detection | Orange | `#F97316` |
| Overcrowding Detection | Sky blue | `#0EA5E9` |
| No Staff Detection | Brick red | `#DC2626` |
| No Helmet Detected | Magenta | `#D946EF` |
| No SafetyVest Detected | Yellow | `#FACC15` |
| Intrusion Detection | Amber | `#EAB308` |

### Typography

- Font family: **Inter** (Google Fonts)
- Display (KPI numbers, page titles): 28–32px / weight 700
- Section / card titles: 16–18px / weight 600
- Body / table rows: 14px / weight 400
- Caption (deltas, axis labels): 12px / weight 400

### Spacing & density

Tailwind defaults (4px base). 16px between cards within a row, 24px between major blocks, 16px internal card padding. Enterprise-comfortable density matching the screenshots.

---

## Mock Data Model

### Approach

**Single source of truth.** One generated array of ~1617 `Incident` records for "today." All aggregates (KPIs, donut breakdown, camera leaderboard, hourly chart, table rows) are derived from this array via memoized selectors. Yesterday / MTD / Last Month comparison values are hardcoded constants.

This eliminates the risk of donut / KPI / table drift — a common foot-gun when each component carries its own mock numbers. It also means the Use Case filter re-derives every aggregate automatically.

### Entities

```ts
type UseCase = {
  id: 'safety_gear' | 'fall_loitering' | 'lab_safety' |
      'fire_smoke'  | 'overcrowding'    | 'no_staff'   |
      'no_helmet'   | 'no_vest'         | 'intrusion'
  name: string          // 'Lab Safety Detection'
  color: string         // from use case color map
  description: string   // for Home tile
  icon: LucideIcon      // for Home tile
}

type Camera = {
  id: string            // 'cam_lab_gf_1'
  name: string          // 'Maxpro Lab GF 1'
  area: 'lab' | 'production' | 'equipment' | 'perimeter'
}

type Incident = {
  id: number            // 1...1617, sequential
  cameraId: string
  useCaseId: string
  severity: 'high' | 'medium' | 'low'
  message: string       // 'Person without helmet detected' | 'Non compliance detected'
  timestamp: string     // ISO
  sceneId: string       // which scene template to render
  bbox: { x: number, y: number, w: number, h: number }  // % of frame
  resolved: boolean
}
```

### Volumes

- **9 use cases** (fixed)
- **12 cameras**: 4 lab (GF/FF × 2) + 3 production (Floor 1/2/3) + 3 equipment (Cooling Tower 1/2, Boiler Room) + 2 perimeter (Main Road, Main Gate)
- **~1617 incidents** for today (matches reference KPI). Table paginates 50/page → 33 pages.

### Aggregate constants

| Metric | Value |
|---|---|
| Today incidents | ~1617 (derived) |
| Yesterday | 1263 |
| MTD | 4324 |
| Last Month | 37646 |
| Custom Date | 1617 |
| Last Custom Date | 1086 |
| Resolution Efficiency Today | 0% |
| Resolution Efficiency Yesterday | 0% |

### Distributions

- **Camera × use case affinity** — not every camera sees every use case. Lab cameras skew to Lab Safety / No Helmet / No SafetyVest. Production cameras skew to PPE + Fall + Overcrowding + No Staff. Equipment cameras skew to PPE + Fire/Smoke. Perimeter cameras skew to Intrusion + Overcrowding. This makes the leaderboard non-random and the chart shapes feel real.
- **Timestamps** — weighted toward 8am–6pm with a midday peak (~13:00–14:00). Matches the bell-curve shape in the reference hourly chart.
- **Severity split** — roughly 50% High / 30% Medium / 20% Low, independent of use case so the table doesn't look monochrome when filtered.

### Image strategy

The most consequential rendering choice. **~6 hand-built SVG scene templates**, one per camera area type:

- Lab interior with workstations
- Cooling tower exterior with figures and barriers
- Factory floor with workers
- Main road with vehicle
- Loading bay
- Gate / perimeter area

Each Incident references one scene + a `bbox`. Both the Image and Video cells in the evidence table render the scene SVG with a colored rectangle overlay drawn at the bbox coordinates, colored per the use case. Video cell adds a centered play-icon overlay; no actual video playback.

**Rationale:** stock photos with overlaid boxes look fake fast (box and photo are clearly different render layers, inconsistent angles and lighting between rows). Hand-built schematic scenes look intentionally diagrammatic and read as *"this is the AI's view of the camera frame"* — which is the visual language a bounding-box overlay conveys in real I/O Vision deployments.

### Determinism

Incidents generated via seeded `mulberry32` PRNG so the same numbers, donut slices, leaderboard order, and table contents render on every page load. Important for sales screenshots and rehearsal predictability.

---

## Component Anatomy — Dashboard

### Filter bar (sticky)

Single white card spanning full width below the header. Sticky via `position: sticky; top: 0; z-index: 20`.

- **Use Case dropdown** — fully functional. Selecting a use case re-filters the entire page.
- **Duration toggle** — functional with three options: Today / Yesterday / Last 7 Days. Hardcoded distributions for the alternatives so numbers shift visibly when toggled.
- **Periodicity** — display-only, fixed at Hourly.
- **Camera Analysis CTA** — visible placeholder, no-op on click. Hover tooltip ("Per-camera analytics — opens individual camera deep-dive").

### KPI block

Two-column grid: 4 KPI cards in 2×2 layout on the left (~2/3 width), Non-Compliance Summary donut on the right (~1/3 width, spanning both card rows).

**KPI card** anatomy: label (top-left) · big number (28–32px, weight 700) · comparison line ("Yesterday (1263)") · delta row (directional arrow + colored percentage) · blue rounded icon top-right (warning-triangle for incidents, check-mark for resolution).

**Delta color logic is metric-aware**, not direction-aware: for incident counts, *higher = worse* (red ↑, green ↓); for Resolution Efficiency, *higher = better* (green ↑, red ↓).

**Non-Compliance Summary donut**: 9 segments per use case color map, leader lines with numeric value labels at slice tips, center text reading "Today" + total count below, right-side legend with 9 colored dots + use case names. Segment hover → tooltip with count + % of total.

**Donut behavior under filter:** when a single use case is selected in the filter, the donut switches to show **severity breakdown** (High / Medium / Low) for that use case rather than degenerating to a single 100% segment. When "All Use Cases" is selected, the donut shows the standard 9-segment use case breakdown.

### Analytics block

Two-column row: Camera Insights leaderboard on the left (~25% width), Non-compliance Analysis chart on the right (~75% width).

**Camera Insights** — title with subtitle "Performing Cameras." Two tabs: "High Incident Rate" (default active, underlined) and "Low Incident Rate". List of 5 cameras per tab: small red circular camera icon + camera name + light pink rounded pill showing the incident count. Sorted desc on High, asc on Low. Decorative left/right chevrons next to tabs (non-functional).

**Non-compliance Analysis** — title + small clock icon + duration text (mirrors filter bar state). **Grouped** multi-series bar chart (matching screenshots — not stacked), hourly x-axis (00:00–23:00), y-axis 0 to ~150. 9 thin bars per hour, one per use case, colors from use case map. Legend below with 9 colored dots + names. Rendered via Recharts.

### Non-compliance List

Card titled "Non-compliance List". Below the title: search bar with magnifier icon (placeholder "Search Non-compliance By Camera Name") and Export dropdown button to the right (decorative).

**Columns:**

| Column | Content |
|---|---|
| Sr No | Row number (paginated) |
| Camera Name | `camera.name` |
| Use Case | Colored pill (bg = use case color, white text) |
| Severity | Colored pill (red/amber/green, white text); header filter is functional |
| Message | `incident.message` |
| Time | "DD MMM YYYY @ HH:MM:SS am/pm"; header sort is functional |
| Image | Scene SVG thumbnail (~80×60px) with bbox overlay colored by use case |
| Video | Same scene + centered play-icon overlay |
| Action | ✓ 💬 ✉ icons (placeholders with hover tooltips) |

**Row click** (excluding action icons) → navigate to widget view with that incident as `selectedIncident`.

**Pagination footer:** "Items per page: 50" (display-only) · "1 – 50 of 1617" · first/prev/next/last chevrons (functional, pages 1–33).

---

## Component Anatomy — Home

Single-column centered layout, max-width container (~1100px).

### Header

Logo / brand mark on the left, decorative bell + avatar on the right. No back arrow (entry point).

### Hero

- **Title:** "I/O Vision" — 40–48px / weight 700
- **Subtitle:** *"Camera-based AI monitoring for safety and compliance across your facility."* — 18–20px / secondary text color

### Use case grid

3 columns × 3 rows. Each tile is a white card matching dashboard card styling. Internal layout per tile:

- Icon at top-left in a tinted square (bg = use case color at 12% opacity, icon stroke = full use case color)
- Use case name below (weight 600, 16–18px)
- One-line description below (secondary text, 14px)

### Use case descriptions (locked)

| Use Case | Description |
|---|---|
| Safety Gear | Detects missing safety equipment beyond helmets and vests |
| Fall and Loitering | Identifies fallen workers and unauthorized loitering in restricted zones |
| Lab Safety Detection | Monitors lab-coat compliance and proper lab protocol adherence |
| Fire and Smoke Detection | Visual detection of fire ignition and smoke before alarms trigger |
| Overcrowding Detection | Flags zones exceeding safe occupancy thresholds |
| No Staff Detection | Alerts when designated zones are unmanned |
| No Helmet Detected | Identifies workers entering hazard zones without hard hats |
| No SafetyVest Detected | Identifies workers without high-visibility safety vests |
| Intrusion Detection | Detects unauthorized access to restricted or perimeter zones |

### Lucide icon picks (per tile, in order)

`HardHat` · `PersonStanding` · `FlaskConical` · `Flame` · `Users` · `UserX` · `HardHat` · `Shirt` · `ShieldAlert`

(Swappable at build time if any aren't available in Lucide.)

### Tiles behavior

Non-interactive. Faint hover lift (`translate-y -2px`) only. The CTA is the only path forward, keeping the salesperson's flow scripted.

### CTA

"Show Demo" primary button at the bottom, centered. Dark slate background, white text, right-arrow icon. Padding ~14px vertical × 32px horizontal. On click → set `view: 'dashboard'`.

---

## Widget Integration Plan

### Integration contract

Widget component receives at mount:

```ts
type WidgetProps = {
  triggerIncident: Incident
  camera: Camera
  cameraIncidents: Incident[]   // all incidents from this camera, scoped to current filter
}
```

### Stand-in widget (ships in v1)

Meaningful placeholder until the real widget is provided. Demo is presentable end-to-end from day one.

**Layout: two-column.**

**Left column (~65%):**

- Camera name (large) + area subtitle + "● Live" pill (green) at the top
- Large camera frame: trigger incident's scene SVG with bounding box overlay drawn at full size, colored by use case. Small "LIVE" badge top-left of frame (decorative).
- Below frame: severity pill + message + timestamp + horizontal timeline scrubber bar with marker at incident time (decorative)

**Right column (~35%):**

- **Camera metadata card** — location · area · model (e.g., "AXIS Q1645-LE") · active since (decorative)
- **Use Case Breakdown donut** — small donut showing this camera's incident split by use case. Reuses the main donut component with filtered data.
- **Recent Events list** — last 10 incidents from this camera. Each row: time + use case pill + severity pill + message. Clicking an event swaps the camera frame and detail block to that event.

### Swap plan

When the real widget arrives, adaptation happens in the widget route component. Write an adapter mapping `WidgetProps` to whatever shape the real widget expects, then render the real widget in place of the stand-in. Stand-in stays in the codebase as `<PlaceholderWidget />` — fallback if the real widget throws at runtime (handled via React error boundary).

If the real widget turns out to be HTML / standalone / a different framework: iframe embed (faster, sandboxed) or port the code into a React component (single coherent codebase). Decision deferred until the widget is in hand.

---

## Tech Stack

- **React 18** — functional components + hooks, single-file artifact (`.jsx`)
- **Tailwind CSS** — utility classes for all layout and styling
- **Recharts** — donut chart, hourly multi-series bar chart
- **Lucide React** — all icons
- **No additional libraries** — no react-router, no shadcn/ui, no animation lib, no date lib. Date formatting via `Intl.DateTimeFormat` inline.

### State management

App-level state at root component. `view`, `filters`, `selectedIncident` live in `useState` at the App. Derived data (filtered incidents, KPI aggregates, donut data, leaderboard ranking, hourly bins, paginated table rows) computed via `useMemo` selectors so re-renders don't redo aggregation work. Component tree depth is shallow (3–4 levels max); prop drilling is fine. No Context API, no Redux, no Zustand.

### Mock data generation

Seeded `mulberry32` PRNG inline. Generates the incident array once at App mount, wrapped in `useMemo([])` so it's stable across the session.

### SVG scene templates

Inline React components, one per scene. Accept `bbox` and `color` props to overlay the bounding box at the right position. No external image assets, no CDN dependencies.

### Component organization (single-file sections)

1. Imports
2. Design tokens (colors, severity, use case map, typography)
3. Mock data (use cases, cameras, PRNG, incident generator)
4. Scene SVG components
5. Primitive components (`Pill`, `Card`, `KPICard`, `IconTile`)
6. Chart components (`Donut`, `HourlyBars`)
7. Page components (`HomePage`, `DashboardPage`, `WidgetPage`)
8. App root

Target file length: ~1500–2000 lines.

---

## Error Handling

For a single-file frontend artifact with mock data, error surfaces are limited but worth specifying:

- **Empty filtered states** — e.g., user filters to a use case with zero incidents. Each component shows an inline empty state ("No incidents matching this filter"). No console errors, no broken charts.
- **Pagination edge cases** — bounded so the user can never page past last or before first.
- **Missing scene template** — defensive fallback: render a neutral grey rectangle with the bbox overlay if `sceneId` doesn't match any template. Shouldn't happen given seeded generation; cheap safety net.
- **Widget render error** — when the real widget is swapped in, wrap it in a React error boundary that falls back to the stand-in if the widget throws.

---

## Testing Strategy

Visual QA, not automated tests. Manual checks at each milestone:

- **Navigation** — Home → Dashboard → Widget → back works end-to-end. Back arrows return to expected views.
- **Filter bar** — changing Use Case re-renders donut, KPIs, leaderboard, chart, table consistently.
- **Pagination** — can page through all 33 pages of the evidence table.
- **Severity filter** — functional dropdown in table header filters rows correctly.
- **Time sort** — header click toggles asc / desc.
- **Row click** — opens widget with the right incident; widget back arrow returns to dashboard with filter state preserved.
- **Use case color consistency** — same use case is the same color in the donut, the table pills, the chart bars, and the widget breakdown donut.
- **Determinism** — page refresh produces identical incident counts, donut slices, leaderboard order, and table rows.
- **Responsive sanity** — desktop-first; at 1280px wide everything fits. Salesperson's laptop is the target viewport.

---

## Out of Scope

Explicit non-features so scope doesn't drift during implementation:

- Machine-monitoring use cases (conveyor belt, tray, particle size, speed) — removed entirely
- Real video playback — video thumbnails have play icons but no actual playback
- Real-time data streams — all mock, all static
- Authentication / user management — no login screen, decorative avatar only
- Multiple plants / multi-tenancy — single facility implied throughout
- Real export functionality — Export button is a placeholder
- Notifications functionality — bell icon is decorative
- Camera Analysis CTA functionality — placeholder only; per-camera depth is via clicking evidence rows
- Real browser routing / deep-linking — view state only; no URL persistence
- Dark mode / theme switching — light enterprise only
- Mobile responsiveness — desktop-first; mobile is not a target
- Bruce AI copilot field — not included in this demo

---

## Open Items

- **Real widget** — Utkarsh to share separately. Stand-in ships in v1; swap happens in the widget route component when received. Integration contract is defined; swap is non-breaking.
- **Hero copy final wording** — locked as *"Camera-based AI monitoring for safety and compliance across your facility."* unless changed.
