import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
  OnDestroy,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { IconComponent } from '../ui/icon.component';
import { USE_CASES, UseCaseId } from '../core/tokens';

/**
 * Plant Operations Map — an isometric 3D model of the plant (the shared layout),
 * built procedurally from primitives per the Digital-Twin CONVENTIONS. The model
 * does NOT auto-rotate; the user drags horizontally to turn it about its vertical
 * axis. Nine use-case hotspots float over the buildings; clicking one opens that
 * use case's dashboard.
 */
interface Anchor {
  obj: THREE.Object3D; // world anchor that rotates with the plant
  uc: (typeof USE_CASES)[number];
}

@Component({
  selector: 'app-plant-view',
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`:host { display:block; width:100%; height:100%; }`],
  template: `
    <div class="relative h-full w-full overflow-hidden" style="background:radial-gradient(120% 100% at 50% 30%, #f2f0fb 0%, #e7e4f4 60%, #ddd9ee 100%)">
      <canvas #canvas class="block h-full w-full" style="cursor:grab" (pointerdown)="onDown($event)"></canvas>

      <!-- use-case hotspots (compact pins; name reveals on hover) -->
      <button
        *ngFor="let m of markers"
        #markerEl
        type="button"
        (click)="selectUseCase.emit(m.id)"
        [title]="'Open ' + m.name + ' dashboard'"
        class="group absolute left-0 top-0 z-10 -translate-x-1/2 -translate-y-1/2"
        style="opacity:0;will-change:transform,opacity"
      >
        <span class="flex items-center rounded-full bg-white/95 p-1 shadow-[0_6px_16px_rgba(38,30,80,0.22)] ring-1 ring-black/5 backdrop-blur transition duration-150 group-hover:scale-105">
          <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white" [style.background-color]="m.color">
            <app-icon [name]="m.icon" [size]="15"></app-icon>
          </span>
          <span class="max-w-0 overflow-hidden whitespace-nowrap text-[12px] font-semibold text-[#1F1B3A] opacity-0 transition-all duration-200 group-hover:ml-2 group-hover:mr-1.5 group-hover:max-w-[220px] group-hover:opacity-100">{{ m.name }}</span>
        </span>
      </button>

      <!-- hint -->
      <div class="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/80 px-4 py-2 text-[12.5px] font-medium text-[#4A4568] shadow-sm ring-1 ring-black/5 backdrop-blur">
        Drag to rotate &amp; tilt • Scroll to zoom • Click a tag to open its dashboard
      </div>
    </div>
  `,
})
export class PlantViewComponent implements AfterViewInit, OnDestroy {
  @Output() selectUseCase = new EventEmitter<UseCaseId>();
  @ViewChild('canvas', { static: true }) private canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChildren('markerEl') private markerEls!: QueryList<ElementRef<HTMLElement>>;

  readonly markers = USE_CASES;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.OrthographicCamera;
  private plant!: THREE.Group;
  private anchors: Anchor[] = [];

  private readonly clock = new THREE.Clock();
  private frameId = 0;
  private ro?: ResizeObserver;
  private readonly disposables: { dispose(): void }[] = [];

  // drag state: horizontal → spin the model (yaw); vertical → tilt the camera (pitch)
  private dragging = false;
  private lastX = 0;
  private lastY = 0;
  private spin = 0; // horizontal momentum (damped)

  // zoom (orthographic frustum height): smaller = closer
  private frustumSize = 38;
  private readonly minFrustum = 26; // most zoomed-in → model ~¾ of the screen
  private readonly maxFrustum = 54; // most zoomed-out

  // camera orbit: azimuth fixed (the model spins for yaw), elevation is the pitch.
  // 0° = ground/horizontal view, 90° = straight-down top view — clamped to that arc.
  private readonly azimuth = Math.PI / 4;
  private elevation = (32 * Math.PI) / 180;
  private readonly minEl = 0;
  private readonly maxEl = (89 * Math.PI) / 180;
  private readonly camRadius = 120;

  private readonly target = new THREE.Vector3(0, 3.5, 0);
  private readonly wp = new THREE.Vector3();
  private readonly ndc = new THREE.Vector3();

  private M!: {
    pink: THREE.MeshStandardMaterial; pinkDark: THREE.MeshStandardMaterial; pinkLight: THREE.MeshStandardMaterial;
    purple: THREE.MeshStandardMaterial; purpleDark: THREE.MeshStandardMaterial; purpleLight: THREE.MeshStandardMaterial;
    grey: THREE.MeshStandardMaterial; greyDark: THREE.MeshStandardMaterial; greyLight: THREE.MeshStandardMaterial;
    white: THREE.MeshStandardMaterial; roof: THREE.MeshStandardMaterial; roofPink: THREE.MeshStandardMaterial;
    red: THREE.MeshStandardMaterial; steel: THREE.MeshStandardMaterial; window: THREE.MeshStandardMaterial;
    concrete: THREE.MeshStandardMaterial; dark: THREE.MeshStandardMaterial; truck: THREE.MeshStandardMaterial;
    barrel: THREE.MeshStandardMaterial; ground: THREE.MeshStandardMaterial; road: THREE.MeshStandardMaterial;
    glass: THREE.MeshStandardMaterial; amber: THREE.MeshStandardMaterial;
  };

  constructor(
    private readonly host: ElementRef<HTMLElement>,
    private readonly zone: NgZone,
  ) {}

  ngAfterViewInit(): void {
    this.initThree();
    this.buildPalette();
    this.buildScene();
    this.onResize();

    this.zone.runOutsideAngular(() => {
      this.ro = new ResizeObserver(() => this.onResize());
      this.ro.observe(this.host.nativeElement);
      window.addEventListener('pointermove', this.onMove);
      window.addEventListener('pointerup', this.onUp);
      this.canvasRef.nativeElement.addEventListener('wheel', this.onWheel, { passive: false });
      this.animate();
    });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frameId);
    this.ro?.disconnect();
    window.removeEventListener('pointermove', this.onMove);
    window.removeEventListener('pointerup', this.onUp);
    this.canvasRef.nativeElement.removeEventListener('wheel', this.onWheel);
    this.disposables.forEach((d) => d.dispose());
    this.renderer?.dispose();
  }

  // ======================================================================
  // setup
  // ======================================================================
  private initThree(): void {
    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    this.scene = new THREE.Scene();

    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 400);
    this.updateCamera();

    // gentle skylight + one soft key for grounded shadows
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0xd8d3e8, 1.05));
    const key = new THREE.DirectionalLight(0xffffff, 1.9);
    key.position.set(28, 40, 20);
    key.target.position.copy(this.target);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 0.03;
    const sc = key.shadow.camera as THREE.OrthographicCamera;
    sc.left = -40; sc.right = 40; sc.top = 40; sc.bottom = -40; sc.near = 1; sc.far = 140;
    this.scene.add(key, key.target);
    const fill = new THREE.DirectionalLight(0xe9e6f6, 0.5);
    fill.position.set(-30, 18, -12);
    this.scene.add(fill);

    this.plant = new THREE.Group();
    this.plant.rotation.y = -0.5; // pleasant opening angle
    this.scene.add(this.plant);
  }

  private buildPalette(): void {
    const std = (color: number, metalness = 0.05, roughness = 0.75, extra: THREE.MeshStandardMaterialParameters = {}) =>
      this.track(new THREE.MeshStandardMaterial({ color, metalness, roughness, ...extra }));
    this.M = {
      pink: std(0xe87e91), pinkDark: std(0xd75f75), pinkLight: std(0xf0a3b1),
      purple: std(0x8f88c6), purpleDark: std(0x6f68a2), purpleLight: std(0xaaa4d8),
      grey: std(0xbcc0cc), greyDark: std(0x9298a6), greyLight: std(0xd6d9e1),
      white: std(0xeef0f4), roof: std(0x8b84be), roofPink: std(0xc98da0),
      red: std(0xd6564e), steel: std(0xaeb4c0, 0.5, 0.4),
      window: std(0xbfd6ea, 0.2, 0.25, { emissive: 0x24405e, emissiveIntensity: 0.25 }),
      concrete: std(0xd0d1da), dark: std(0x565a66, 0.4, 0.5),
      truck: std(0xe0655f), barrel: std(0x8f98b0, 0.6, 0.35),
      ground: std(0xe0dcee, 0.0, 0.95), road: std(0xcfccdd),
      glass: std(0x9fb6cc, 0.3, 0.2), amber: std(0xe6a15a),
    };
  }

  // ======================================================================
  // scene — every element from the reference layout
  // ======================================================================
  private buildScene(): void {
    this.buildGround();
    this.buildTallChimney(-16, -7);        // red/white banded stack
    this.buildTaperedStack(-10.5, -3);     // grey conical stack
    this.buildSiloCluster(-6, 1.5);        // grey cylinders on a pink plinth
    this.buildMainBuildings();             // central pink+purple complex + roller door
    this.buildDomeTank(6.5, -6.5);         // domed storage tank
    this.buildTruck(13.5, -3.5);           // truck + drum flatbed
    this.buildRightCluster(14.5, 3.5);     // right buildings w/ rooftop units
    this.buildFrontBlock(1.5, 6.5);        // foreground buildings + small cooler
    this.buildPipeRack(9);                 // conveyor/pipe rack on stilts
    this.buildCurvedRoof(9.5, 9.5);        // arched-roof shed + rooftop tanks
    this.buildWorkers();

    // 9 hotspots (order matches USE_CASES)
    this.addAnchor('safety_gear', -1.5, 6.4, -3);
    this.addAnchor('fall_loitering', -10.5, 6.2, -3);
    this.addAnchor('lab_safety', 14.5, 7.4, 3.5);
    this.addAnchor('fire_smoke', -16, 13.4, -7);
    this.addAnchor('overcrowding', 1.5, 5.4, 6.5);
    this.addAnchor('no_staff', 13.5, 3.6, -3.5);
    this.addAnchor('no_helmet', -6, 6.6, 1.5);
    this.addAnchor('no_vest', -1, 4.2, 1.8);         // moved to the low pink annex
    this.addAnchor('intrusion', 9.5, 4.6, 9.5);
    this.addAnchor('conveyor_belt_health', -6.5, 3.4, 9); // on the conveyor / pipe rack
  }

  private buildGround(): void {
    const disc = this.cyl(20, 20, 0.7, this.M.ground, 0, -0.35, 0, this.plant, 72);
    disc.receiveShadow = true;
    disc.castShadow = false;
    // a couple of roads / aprons
    this.box(30, 0.06, 4.4, this.M.road, 2, 0.02, -3.5, this.plant);
    this.box(4.4, 0.06, 22, this.M.road, 10, 0.02, 2, this.plant);
  }

  private buildTallChimney(x: number, z: number): void {
    const g = this.group(x, z);
    this.box(3.2, 0.5, 3.2, this.M.purpleDark, 0, 0.25, 0, g); // base plinth
    // banded shaft (red / white)
    const h = 12;
    this.cyl(0.62, 0.85, h, this.M.white, 0, h / 2 + 0.4, 0, g, 26);
    for (let i = 0; i < 4; i++) {
      this.cyl(0.7, 0.78, 0.9, this.M.red, 0, 2.2 + i * 2.5, 0, g, 26);
    }
    this.cyl(0.66, 0.66, 0.5, this.M.greyLight, 0, h + 0.7, 0, g, 26); // rounded rim
    this.sphere(0.6, this.M.greyLight, 0, h + 0.95, 0, g).scale.y = 0.5;
  }

  private buildTaperedStack(x: number, z: number): void {
    const g = this.group(x, z);
    this.cyl(0.55, 1.5, 9, this.M.grey, 0, 4.5, 0, g, 26); // conical stack
    this.cyl(0.55, 0.55, 0.4, this.M.greyDark, 0, 9, 0, g, 26);
    // support struts
    for (const a of [0, Math.PI * 0.66, Math.PI * 1.33]) {
      const s = this.cyl(0.06, 0.06, 8, this.M.steel, Math.cos(a) * 1.5, 4, Math.sin(a) * 1.5, g, 8);
      s.rotation.z = Math.cos(a) * 0.16;
      s.rotation.x = -Math.sin(a) * 0.16;
    }
  }

  private buildSiloCluster(x: number, z: number): void {
    const g = this.group(x, z);
    this.box(6, 1.2, 4.2, this.M.pink, 0, 0.6, 0, g);        // pink plinth
    this.box(6.1, 0.4, 4.3, this.M.pinkDark, 0, 0.2, 0, g);
    const xs = [-1.6, 0, 1.6];
    for (const sx of xs) this.cyl(0.7, 0.7, 5, this.M.greyLight, sx, 3.7, 0, g, 24);
    // ladder against one silo
    this.ladder(g, 1.6 + 0.75, 1.2, 0.2, 4.6);
  }

  private buildMainBuildings(): void {
    // ---- central PINK building with roller-shutter door ----
    const a = this.group(-1.5, -3);
    this.box(6, 6, 6, this.M.pink, 0, 3, 0, a);
    this.box(6.3, 0.7, 6.3, this.M.roof, 0, 6.2, 0, a);       // roof cap
    this.box(4.2, 0.5, 4.2, this.M.purpleDark, 0, 6.7, 0, a); // rooftop box
    // roller-shutter door (front +Z)
    this.box(2.6, 3.2, 0.12, this.M.greyLight, 0, 1.6, 3.02, a);
    for (let i = 0; i < 7; i++) this.box(2.6, 0.06, 0.14, this.M.greyDark, 0, 0.5 + i * 0.42, 3.06, a);
    // window columns on the front
    this.windowGrid(a, 3.02, 1.4, 3.4, 2, 4, 0.8, 0.7);
    this.ladder(a, -2.5, 0, 3.1, 6);

    // ---- taller PURPLE building behind ----
    const b = this.group(3, -6.5);
    this.box(5.2, 8, 5.2, this.M.purple, 0, 4, 0, b);
    this.box(5.5, 0.7, 5.5, this.M.purpleDark, 0, 8.2, 0, b);
    this.box(3.4, 1.0, 3.4, this.M.greyLight, 0, 8.9, 0, b);  // rooftop plant
    this.box(1.2, 0.5, 1.2, this.M.dark, 1.0, 9.6, 0, b);     // roof vent
    this.windowGrid(b, 2.62, 5, 3.2, 3, 5, 0.7, 0.7);
    this.ladder(b, 2.6, 0, 2.55, 8);

    // ---- low PINK annex in front ----
    const c = this.group(-1, 1.5);
    this.box(6.5, 3, 4, this.M.pink, 0, 1.5, 0, c);
    this.box(6.7, 0.5, 4.2, this.M.roof, 0, 3.1, 0, c);
    this.box(2.2, 0.5, 2, this.M.purpleDark, -1.5, 3.5, 0, c);
    this.windowGrid(c, 2.02, 4.4, 1.5, 3, 1, 0.9, 0.9);
  }

  private buildDomeTank(x: number, z: number): void {
    const g = this.group(x, z);
    this.box(4, 0.5, 4, this.M.greyDark, 0, 0.25, 0, g);
    this.cyl(1.8, 1.8, 3.6, this.M.greyLight, 0, 2.3, 0, g, 32);
    this.sphere(1.8, this.M.white, 0, 4.1, 0, g).scale.y = 0.55;
    this.cyl(1.85, 1.85, 0.15, this.M.grey, 0, 2.6, 0, g, 32); // hoop
  }

  private buildTruck(x: number, z: number): void {
    const g = this.group(x, z);
    g.rotation.y = Math.PI / 2;
    // flatbed trailer
    this.box(7.5, 0.4, 2.2, this.M.dark, -1.2, 0.9, 0, g);
    this.box(7.4, 0.2, 2.0, this.M.steel, -1.2, 1.15, 0, g);
    // cab
    this.box(2.0, 2.0, 2.1, this.M.truck, 3.4, 1.2, 0, g);
    this.box(1.9, 0.9, 2.0, this.M.glass, 3.45, 2.0, 0, g); // windshield band
    // drums on the bed (a row)
    for (let i = 0; i < 4; i++) {
      const d = this.cyl(0.5, 0.5, 1.4, this.M.barrel, -3.6 + i * 1.5, 1.85, 0, g, 18);
      d.rotation.z = Math.PI / 2;
    }
    // wheels
    for (const wx of [3.0, -0.2, -1.8, -3.4]) {
      for (const wz of [-1.05, 1.05]) {
        const w = this.cyl(0.55, 0.55, 0.35, this.M.dark, wx, 0.55, wz, g, 16);
        w.rotation.x = Math.PI / 2;
      }
    }
  }

  private buildRightCluster(x: number, z: number): void {
    const g = this.group(x, z);
    this.box(5, 5.5, 5, this.M.purpleLight, 0, 2.75, 0, g);
    this.box(5.3, 0.6, 5.3, this.M.purpleDark, 0, 5.7, 0, g);
    // rooftop AC / process units
    this.box(1.4, 0.7, 1.4, this.M.greyLight, -1.2, 6.3, -1.2, g);
    this.box(1.4, 0.7, 1.4, this.M.greyLight, 1.0, 6.3, 0.6, g);
    this.cyl(0.35, 0.35, 1.6, this.M.grey, 1.8, 6.8, -1.8, g, 16); // small stack
    this.windowGrid(g, 2.52, 4.2, 3.0, 3, 4, 0.7, 0.7);
    // a smaller pink neighbour
    this.box(3.2, 3.4, 3.2, this.M.pink, -3.6, 1.7, 2.4, g);
    this.box(3.4, 0.5, 3.4, this.M.roofPink, -3.6, 3.6, 2.4, g);
  }

  private buildFrontBlock(x: number, z: number): void {
    const g = this.group(x, z);
    // stepped pink + purple foreground buildings
    this.box(5, 4.5, 4, this.M.purple, -2.5, 2.25, 0, g);
    this.box(5.2, 0.5, 4.2, this.M.purpleDark, -2.5, 4.6, 0, g);
    this.box(4.5, 3, 3.6, this.M.pink, 2, 1.5, 0.4, g);
    this.box(4.7, 0.5, 3.8, this.M.roof, 2, 3.1, 0.4, g);
    this.windowGrid(g, -2.5, 2.02, 3.2, 3, 4, 0.6, 0.6, 2.02); // side windows on purple (front +Z)
    this.windowGrid(g, 2, 1.85, 2.22, 3, 2, 0.7, 0.7);
    // small white cooling tower
    const t = this.cyl(0.8, 1.2, 3, this.M.white, -0.4, 1.5, -2.6, g, 28);
    this.sphere(0.4, this.M.greyLight, -0.4, 3.1, -2.6, g);
    // roller shutter on pink
    this.box(1.8, 1.8, 0.1, this.M.greyLight, 2, 0.9, 2.22, g);
  }

  private buildPipeRack(z: number): void {
    const g = this.group(-11, z);
    // long horizontal rack carried on A-frame legs (runs along X, off toward the edge)
    for (let i = 0; i < 6; i++) {
      const lx = -8 + i * 3;
      this.box(0.25, 3, 0.25, this.M.steel, lx, 1.5, -0.7, g);
      this.box(0.25, 3, 0.25, this.M.steel, lx, 1.5, 0.7, g);
      this.box(0.25, 0.25, 2, this.M.steel, lx, 3, 0, g);
    }
    // the pipes / conveyor deck on top
    for (const pz of [-0.4, 0, 0.4]) this.cyl(0.16, 0.16, 16, this.M.grey, -0.5, 3.2, pz, g, 12).rotation.z = Math.PI / 2;
    this.box(16, 0.2, 1.4, this.M.greyDark, -0.5, 3.05, 0, g);
  }

  private buildCurvedRoof(x: number, z: number): void {
    const g = this.group(x, z);
    // arched-roof shed (half-cylinder roof)
    this.box(5, 2.4, 4.5, this.M.greyLight, 0, 1.2, 0, g);
    const arch = this.cyl(2.25, 2.25, 5, this.M.dark, 0, 2.4, 0, g, 20, true);
    arch.rotation.z = Math.PI / 2;
    arch.scale.set(1, 1, 0.62);
    // neighbouring block with rooftop tanks
    this.box(4, 4, 4, this.M.purpleLight, 4.5, 2, -1, g);
    this.box(4.2, 0.5, 4.2, this.M.purpleDark, 4.5, 4.2, -1, g);
    this.cyl(0.6, 0.6, 1.2, this.M.greyLight, 3.6, 5, -1.6, g, 18);
    this.cyl(0.6, 0.6, 1.2, this.M.greyLight, 5.2, 5, -0.4, g, 18);
    this.windowGrid(g, 0, 1.1, 2.3, 4, 2, 0.6, 0.6);
  }

  private buildWorkers(): void {
    const worker = (x: number, z: number, c: THREE.Material) => {
      const g = this.group(x, z);
      this.cyl(0.18, 0.22, 0.7, c, 0, 0.45, 0, g, 10);       // body (hi-vis)
      this.sphere(0.16, this.M.amber, 0, 0.95, 0, g);        // head/helmet
    };
    worker(1.2, 2.6, this.M.amber);
    worker(9.5, -2.5, this.M.red);
    worker(-3.2, -1, this.M.amber);
  }

  // ======================================================================
  // hotspots
  // ======================================================================
  private addAnchor(id: UseCaseId, x: number, y: number, z: number): void {
    const obj = new THREE.Object3D();
    obj.position.set(x, y, z);
    this.plant.add(obj);
    const uc = USE_CASES.find((u) => u.id === id)!;
    // keep the anchors in USE_CASES order so they line up with the DOM markers
    this.anchors[USE_CASES.indexOf(uc)] = { obj, uc };
  }

  private updateMarkers(): void {
    const els = this.markerEls;
    if (!els || els.length === 0) return;
    const w = this.host.nativeElement.clientWidth;
    const h = this.host.nativeElement.clientHeight;
    const list = els.toArray();

    for (let i = 0; i < this.anchors.length; i++) {
      const a = this.anchors[i];
      const el = list[i]?.nativeElement;
      if (!a || !el) continue;

      a.obj.getWorldPosition(this.wp);
      this.ndc.copy(this.wp).project(this.camera);
      const onScreen =
        this.ndc.z < 1 &&
        this.ndc.x > -1.1 && this.ndc.x < 1.1 &&
        this.ndc.y > -1.1 && this.ndc.y < 1.1;
      if (!onScreen) {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        continue;
      }
      const sx = (this.ndc.x * 0.5 + 0.5) * w;
      const sy = (-this.ndc.y * 0.5 + 0.5) * h;
      el.style.transform = `translate(${sx}px, ${sy}px) translate(-50%, -50%)`;
      el.style.opacity = '1';
      el.style.pointerEvents = 'auto';
    }
  }

  // ======================================================================
  // interaction (drag → horizontal rotation; no auto-rotate)
  // ======================================================================
  onDown(e: PointerEvent): void {
    this.dragging = true;
    this.lastX = e.clientX;
    this.lastY = e.clientY;
    this.spin = 0;
    this.canvasRef.nativeElement.style.cursor = 'grabbing';
  }
  private onMove = (e: PointerEvent): void => {
    if (!this.dragging) return;
    const dx = e.clientX - this.lastX;
    const dy = e.clientY - this.lastY;
    this.lastX = e.clientX;
    this.lastY = e.clientY;
    // horizontal → spin the model (retained), with momentum
    const d = dx * 0.008;
    this.plant.rotation.y += d;
    this.spin = d;
    // vertical → tilt the camera, clamped to the 0°(ground)…90°(top) arc.
    // drag up (dy<0) lowers the elevation so the model stands up / moves up.
    this.elevation = Math.min(this.maxEl, Math.max(this.minEl, this.elevation + dy * 0.006));
    this.updateCamera();
  };
  private onUp = (): void => {
    if (!this.dragging) return;
    this.dragging = false;
    this.canvasRef.nativeElement.style.cursor = 'grab';
  };
  private onWheel = (e: WheelEvent): void => {
    e.preventDefault();
    this.frustumSize = Math.min(this.maxFrustum, Math.max(this.minFrustum, this.frustumSize + e.deltaY * 0.02));
    this.applyProjection();
  };

  /** place the ortho camera on its orbit from (azimuth, elevation) */
  private updateCamera(): void {
    const ce = Math.cos(this.elevation);
    const se = Math.sin(this.elevation);
    this.camera.position.set(
      this.target.x + this.camRadius * ce * Math.sin(this.azimuth),
      this.target.y + this.camRadius * se,
      this.target.z + this.camRadius * ce * Math.cos(this.azimuth),
    );
    this.camera.lookAt(this.target);
  }

  private applyProjection(): void {
    const w = this.host.nativeElement.clientWidth || 1;
    const h = this.host.nativeElement.clientHeight || 1;
    const aspect = w / h;
    const s = this.frustumSize / 2;
    this.camera.left = -s * aspect;
    this.camera.right = s * aspect;
    this.camera.top = s;
    this.camera.bottom = -s;
    this.camera.updateProjectionMatrix();
  }

  private animate = (): void => {
    this.frameId = requestAnimationFrame(this.animate);
    this.clock.getDelta();

    // momentum after release (no continuous auto-rotation)
    if (!this.dragging && Math.abs(this.spin) > 0.00002) {
      this.plant.rotation.y += this.spin;
      this.spin *= 0.93;
    }

    this.renderer.render(this.scene, this.camera);
    this.updateMarkers();
  };

  private onResize(): void {
    const w = this.host.nativeElement.clientWidth || 1;
    const h = this.host.nativeElement.clientHeight || 1;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(w, h, false);
    this.applyProjection();
  }

  // ======================================================================
  // primitive helpers
  // ======================================================================
  private track<T extends { dispose(): void }>(o: T): T {
    this.disposables.push(o);
    return o;
  }
  private group(x: number, z: number): THREE.Group {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    this.plant.add(g);
    return g;
  }
  private box(w: number, h: number, d: number, mat: THREE.Material, x: number, y: number, z: number, parent: THREE.Object3D): THREE.Mesh {
    const m = new THREE.Mesh(this.track(new THREE.BoxGeometry(w, h, d)), mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    parent.add(m);
    return m;
  }
  private cyl(rt: number, rb: number, h: number, mat: THREE.Material, x: number, y: number, z: number, parent: THREE.Object3D, seg = 20, half = false): THREE.Mesh {
    const geo = half
      ? new THREE.CylinderGeometry(rt, rb, h, seg, 1, false, 0, Math.PI)
      : new THREE.CylinderGeometry(rt, rb, h, seg);
    const m = new THREE.Mesh(this.track(geo), mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    parent.add(m);
    return m;
  }
  private sphere(r: number, mat: THREE.Material, x: number, y: number, z: number, parent: THREE.Object3D): THREE.Mesh {
    const m = new THREE.Mesh(this.track(new THREE.SphereGeometry(r, 18, 14)), mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    parent.add(m);
    return m;
  }
  private ladder(parent: THREE.Object3D, x: number, y0: number, z: number, h: number): void {
    this.box(0.06, h, 0.06, this.M.steel, x - 0.18, y0 + h / 2, z, parent);
    this.box(0.06, h, 0.06, this.M.steel, x + 0.18, y0 + h / 2, z, parent);
    const rungs = Math.floor(h / 0.5);
    for (let i = 1; i < rungs; i++) this.box(0.42, 0.05, 0.05, this.M.steel, x, y0 + i * 0.5, z, parent);
  }
  /** grid of window panels on a +Z (or +X if faceX given) face */
  private windowGrid(parent: THREE.Object3D, faceZ: number, cx: number, cy: number, cols: number, rows: number, gw: number, gh: number, faceX?: number): void {
    const startX = -((cols - 1) * (gw + 0.35)) / 2;
    const startY = -((rows - 1) * (gh + 0.35)) / 2;
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const ox = startX + c * (gw + 0.35);
        const oy = startY + r * (gh + 0.35);
        if (faceX !== undefined) {
          this.box(0.06, gh, gw, this.M.window, faceX, cy + oy, cx + ox, parent);
        } else {
          this.box(gw, gh, 0.06, this.M.window, cx + ox, cy + oy, faceZ, parent);
        }
      }
    }
  }
}
