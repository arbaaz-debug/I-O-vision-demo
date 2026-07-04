import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';

/**
 * I/O Vision — rotating 3D factory showpiece for the landing hero.
 *
 * A stylised thermal power plant (the reference image) built procedurally from
 * primitives, following the Digital-Twin CONVENTIONS skill: real PBR materials
 * per surface (concrete / painted steel / stainless / copper), concrete
 * foundations, and translucent smoke/steam plumes that `rise`. The whole model
 * turns slowly like a piece on a turntable.
 *
 * The canvas is transparent and sits ON TOP of the HTML "I/O Vision" title:
 *  - the opaque model OVERLAPS (occludes) parts of the title, and
 *  - a vertical ShadowMaterial "wall" behind the model projects its silhouette
 *    onto the title (a cast shadow), while a ground ShadowMaterial grounds it.
 */

interface Puff {
  mesh: THREE.Mesh;
  phase: number;     // 0..1 lifecycle
  speed: number;     // lifecycle / sec
  rise: number;      // metres travelled over a life
  drift: number;     // sideways sway amount
  ox: number;        // origin x (sway is bounded around this)
  seed: number;      // sway phase offset
  from: number;      // start scale
  to: number;        // end scale
  baseOpacity: number;
}

interface Plume {
  group: THREE.Group;
  puffs: Puff[];
}

@Component({
  selector: 'app-factory-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<canvas #canvas></canvas>`,
  styles: [
    `:host { display:block; width:100%; height:100%; pointer-events:none; }
     canvas { display:block; width:100%; height:100%; }`,
  ],
})
export class FactoryHeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) private canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private factory!: THREE.Group;
  private plumes: Plume[] = [];
  private readonly leds: THREE.MeshStandardMaterial[] = [];

  private readonly clock = new THREE.Clock();
  private frameId = 0;
  private ro?: ResizeObserver;
  private reducedMotion = false;
  private readonly disposables: { dispose(): void }[] = [];

  // ---- material palette (CONVENTIONS §8) ---------------------------------
  private M!: {
    concrete: THREE.MeshStandardMaterial;
    concreteDark: THREE.MeshStandardMaterial;
    painted: THREE.MeshStandardMaterial;
    paintedLight: THREE.MeshStandardMaterial;
    darkSteel: THREE.MeshStandardMaterial;
    stainless: THREE.MeshStandardMaterial;
    copper: THREE.MeshStandardMaterial;
    glass: THREE.MeshStandardMaterial;
    red: THREE.MeshStandardMaterial;
    accent: THREE.MeshStandardMaterial;
    grass: THREE.MeshStandardMaterial;
    water: THREE.MeshStandardMaterial;
    ground: THREE.MeshStandardMaterial;
    rim: THREE.MeshStandardMaterial;
  };

  constructor(
    private readonly host: ElementRef<HTMLElement>,
    private readonly zone: NgZone,
  ) {}

  ngAfterViewInit(): void {
    this.reducedMotion =
      typeof matchMedia === 'function' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.initThree();
    this.buildPalette();
    this.buildScene();
    this.onResize();

    this.zone.runOutsideAngular(() => {
      this.ro = new ResizeObserver(() => this.onResize());
      this.ro.observe(this.host.nativeElement);
      this.animate();
    });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frameId);
    this.ro?.disconnect();
    this.disposables.forEach((d) => d.dispose());
    this.renderer?.dispose();
  }

  // ======================================================================
  // setup
  // ======================================================================
  private initThree(): void {
    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(36, 1, 0.1, 200);
    this.camera.position.set(0, 6.6, 27);
    this.camera.lookAt(0, 4.2, 0);
  }

  private buildPalette(): void {
    const std = (
      color: number,
      metalness: number,
      roughness: number,
      extra: THREE.MeshStandardMaterialParameters = {},
    ) => this.track(new THREE.MeshStandardMaterial({ color, metalness, roughness, ...extra }));

    this.M = {
      concrete: std(0xc9ccd1, 0.04, 0.92),
      concreteDark: std(0x9aa0a8, 0.05, 0.9),
      painted: std(0x8a929b, 0.55, 0.42),
      paintedLight: std(0xaab2bd, 0.5, 0.45),
      darkSteel: std(0x5b626b, 0.6, 0.5),
      stainless: std(0xb0c4d0, 0.85, 0.18),
      copper: std(0xb87333, 0.9, 0.32),
      glass: std(0x7f96b2, 0.55, 0.18, { emissive: 0x24344c, emissiveIntensity: 0.3 }),
      red: std(0xbe4a3c, 0.3, 0.55),
      accent: std(0x3d5af0, 0.35, 0.4, { emissive: 0x16204f, emissiveIntensity: 0.35 }),
      grass: std(0x5e7d54, 0.0, 0.95),
      water: std(0x3f6fa8, 0.2, 0.18),
      ground: std(0x97a0a8, 0.05, 0.85),
      rim: std(0xd0d6de, 0.1, 0.7),
    };
  }

  // ======================================================================
  // scene
  // ======================================================================
  private buildScene(): void {
    // ---- lights --------------------------------------------------------
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0xc4cad3, 0.95));

    const key = new THREE.DirectionalLight(0xffffff, 2.3);
    key.position.set(-9, 17, 13);
    key.target.position.set(0, 4, 0);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 0.02;
    const cam = key.shadow.camera as THREE.OrthographicCamera;
    // wide, symmetric bounds so the pedestal/ground shadow is fully contained
    // (a tight frustum was clipping it into a hard diagonal edge)
    cam.left = -26; cam.right = 26; cam.top = 26; cam.bottom = -26;
    cam.near = 0.5; cam.far = 90;
    cam.updateProjectionMatrix(); // REQUIRED after editing bounds, or they're ignored
    this.scene.add(key);
    this.scene.add(key.target);

    const fill = new THREE.DirectionalLight(0xdfe6f2, 0.55);
    fill.position.set(13, 9, 8);
    this.scene.add(fill);

    // ---- shadow catchers ----------------------------------------------
    // vertical "wall" behind the model → projects silhouette onto the TITLE
    const wall = new THREE.Mesh(
      this.track(new THREE.PlaneGeometry(70, 38)),
      this.track(new THREE.ShadowMaterial({ opacity: 0.3 })),
    );
    wall.position.set(0, 9, -7);
    wall.receiveShadow = true;
    this.scene.add(wall);

    // horizontal ground → grounds the showpiece on the page
    const ground = new THREE.Mesh(
      this.track(new THREE.PlaneGeometry(80, 80)),
      this.track(new THREE.ShadowMaterial({ opacity: 0.22 })),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.62;
    ground.receiveShadow = true;
    this.scene.add(ground);

    // ---- the model -----------------------------------------------------
    this.factory = new THREE.Group();
    this.scene.add(this.factory);

    this.buildPedestal();
    this.buildSiteGround();
    this.buildBoilerHouse();
    this.buildPowerhouse();
    this.buildChimneys();
    this.buildCoolingTowers();
    this.buildTanks();
    this.buildSwitchyard();

    // two CCTV masts flank the model (static — they "watch" the turntable)
    this.buildCameraRig();
  }

  // ---- builders --------------------------------------------------------
  private buildPedestal(): void {
    const rim = this.cyl(11.5, 11.5, 0.34, this.M.rim, 0, -0.2, 0, this.factory, 64);
    rim.receiveShadow = true;
    const top = this.cyl(10.9, 11.1, 0.22, this.M.ground, 0, -0.02, 0, this.factory, 64);
    top.receiveShadow = true;
  }

  private buildSiteGround(): void {
    // a little greenery + a water pond on the site, echoing the reference
    this.box(6.5, 0.06, 3.2, this.M.grass, -3.2, 0.12, 3.4, this.factory);
    this.box(3.4, 0.06, 2.2, this.M.grass, 5.6, 0.12, 2.6, this.factory);
    this.box(3.0, 0.05, 1.8, this.M.water, -6.5, 0.11, 3.8, this.factory);
    // a service road
    this.box(15, 0.05, 0.9, this.M.concreteDark, 0, 0.11, 4.6, this.factory);
  }

  private buildBoilerHouse(): void {
    const g = new THREE.Group();
    g.position.set(-1.5, 0, -1.6);
    this.factory.add(g);

    // main hall
    this.box(11, 3.4, 3.4, this.M.painted, 0, 1.7, 0, g);
    // blue brand base stripe
    this.box(11.04, 0.34, 3.44, this.M.accent, 0, 0.5, 0, g);
    // window bands on the long front face
    this.box(10.2, 0.5, 0.06, this.M.glass, 0, 2.35, 1.72, g);
    this.box(10.2, 0.45, 0.06, this.M.glass, 0, 1.5, 1.72, g);
    // roof slab + raised clerestory monitor
    this.box(11.5, 0.3, 3.9, this.M.darkSteel, 0, 3.55, 0, g);
    this.box(8.2, 0.8, 1.5, this.M.paintedLight, 0, 4.05, 0, g);
    this.box(8.4, 0.18, 1.7, this.M.darkSteel, 0, 4.5, 0, g);
    // roof vents
    for (let i = -1; i <= 1; i++) {
      this.cyl(0.26, 0.26, 0.7, this.M.stainless, i * 3.2, 3.95, 1.1, g);
    }
  }

  private buildPowerhouse(): void {
    const g = new THREE.Group();
    g.position.set(-2.2, 0, 1.5);
    this.factory.add(g);

    this.box(8.6, 2.2, 2.0, this.M.paintedLight, 0, 1.1, 0, g);
    this.box(8.64, 0.28, 2.04, this.M.accent, 0, 0.42, 0, g);
    this.box(8.0, 0.24, 2.3, this.M.darkSteel, 0, 2.25, 0, g);
    // window row
    this.box(7.6, 0.45, 0.06, this.M.glass, 0, 1.45, 1.02, g);
    // elevated turbine-deck pipes running toward the chimneys (copper)
    const pipe = (z: number) => {
      const m = this.cyl(0.16, 0.16, 6.2, this.M.copper, 1.0, 2.7, z, this.factory, 16);
      m.rotation.z = Math.PI / 2;
    };
    pipe(0.4);
    pipe(0.0);
  }

  private buildChimneys(): void {
    const make = (x: number) => {
      const g = new THREE.Group();
      g.position.set(x, 0, -2.6);
      this.factory.add(g);

      // foundation pad
      this.cyl(0.95, 1.05, 0.5, this.M.concreteDark, 0, 0.25, 0, g, 24);
      // shaft
      this.cyl(0.5, 0.66, 11, this.M.concrete, 0, 5.6, 0, g, 28);
      // hazard bands near the top (red / white)
      this.cyl(0.53, 0.53, 0.45, this.M.red, 0, 10.0, 0, g, 28);
      this.cyl(0.53, 0.53, 0.45, this.M.rim, 0, 9.3, 0, g, 28);
      this.cyl(0.53, 0.53, 0.45, this.M.red, 0, 8.6, 0, g, 28);
      // rim cap
      const cap = new THREE.Mesh(
        this.track(new THREE.TorusGeometry(0.52, 0.07, 10, 28)),
        this.M.darkSteel,
      );
      cap.rotation.x = Math.PI / 2;
      cap.position.y = 11.05;
      cap.castShadow = true;
      g.add(cap);

      // smoke plume
      this.addPlume(g, 0, 11.2, 0, {
        count: 6, rate: 0.16, rise: 5.5, spread: 0.34,
        from: 0.5, to: 2.2, opacity: 0.5, drift: 0.6, warm: true,
      });
    };
    make(2.7);
    make(4.5);
  }

  private buildCoolingTowers(): void {
    const make = (x: number, z: number) => {
      const g = new THREE.Group();
      g.position.set(x, 0, z);
      this.factory.add(g);

      this.cyl(1.55, 1.75, 0.3, this.M.concreteDark, 0, 0.15, 0, g, 32); // base ring
      this.cyl(1.28, 1.7, 4.2, this.M.concrete, 0, 2.3, 0, g, 32);        // shell
      this.cyl(1.4, 1.28, 0.35, this.M.concreteDark, 0, 4.4, 0, g, 32);   // top flare
      // billowing steam
      this.addPlume(g, 0, 4.5, 0, {
        count: 7, rate: 0.13, rise: 4.6, spread: 0.9,
        from: 1.1, to: 3.0, opacity: 0.55, drift: 0.5, warm: false,
      });
    };
    make(-6.6, 2.2);
    make(-8.2, -0.6);
  }

  private buildTanks(): void {
    const make = (x: number) => {
      const g = new THREE.Group();
      g.position.set(x, 0, 2.4);
      this.factory.add(g);
      this.cyl(0.72, 0.72, 2.4, this.M.stainless, 0, 1.2, 0, g, 24);
      const dome = this.sphere(0.72, this.M.stainless, 0, 2.4, 0, g);
      dome.scale.y = 0.45;
      // hoop bands
      this.cyl(0.74, 0.74, 0.06, this.M.darkSteel, 0, 1.7, 0, g, 24);
      this.cyl(0.74, 0.74, 0.06, this.M.darkSteel, 0, 0.8, 0, g, 24);
    };
    make(1.6);
    make(3.0);
  }

  private buildSwitchyard(): void {
    const g = new THREE.Group();
    g.position.set(6.8, 0, -0.4);
    this.factory.add(g);

    for (let i = 0; i < 3; i++) {
      const x = i * 1.4;
      this.box(0.14, 3.2, 0.14, this.M.darkSteel, x, 1.6, 0, g);       // pylon
      this.box(1.4, 0.1, 0.1, this.M.darkSteel, x, 2.5, 0, g);          // crossarm
      this.box(1.1, 0.1, 0.1, this.M.darkSteel, x, 2.9, 0, g);          // crossarm
    }
    // transformers with bushings
    const xf = (x: number) => {
      this.box(0.9, 0.85, 1.2, this.M.darkSteel, x, 0.55, 1.4, g);
      this.cyl(0.08, 0.08, 0.5, this.M.stainless, x - 0.25, 1.15, 1.4, g, 12);
      this.cyl(0.08, 0.08, 0.5, this.M.stainless, x + 0.25, 1.15, 1.4, g, 12);
    };
    xf(0.4);
    xf(2.0);
  }

  // ======================================================================
  // CCTV bullet cameras — suspended from the title's "I" and "N", aimed down
  // ======================================================================
  private buildCameraRig(): void {
    this.buildSuspendedCamera(-1); // hangs under the "I" of I/O
    this.buildSuspendedCamera(1);  // hangs under the "N" of visioN
  }

  private buildSuspendedCamera(side: number): void {
    const x = 10 * side; // roughly under the I / N glyphs
    const z = 3;
    const topY = 8.8;    // mount clips to the BOTTOM of the I / N glyphs
    const camY = 7.6;    // camera hangs just beneath, on a short rod

    // added to the scene (not the rotating factory) so it keeps watching
    const rig = new THREE.Group();
    rig.position.set(x, 0, z);
    this.scene.add(rig);

    // ceiling mount plate + drop cable + knuckle
    this.box(0.5, 0.16, 0.5, this.M.darkSteel, 0, topY, 0, rig);
    this.cyl(0.05, 0.05, topY - camY, this.M.darkSteel, 0, (topY + camY) / 2, 0, rig, 8);
    this.cyl(0.13, 0.13, 0.2, this.M.darkSteel, 0, camY, 0, rig, 12);

    // head pivot: yaw to face the model, then pitch 45° down (YXZ → pitch, then yaw)
    const pivot = new THREE.Group();
    pivot.position.set(0, camY, 0);
    pivot.rotation.order = 'YXZ';
    pivot.rotation.y = Math.atan2(-x, -z); // local +Z points at the origin
    pivot.rotation.x = Math.PI / 4;        // 45° downward tilt
    rig.add(pivot);

    // bracket → bullet body → sun-shield → lens (all along local +Z)
    this.box(0.14, 0.14, 0.4, this.M.darkSteel, 0, 0, 0.22, pivot);
    const body = this.cyl(0.22, 0.22, 1.3, this.M.stainless, 0, 0, 0.95, pivot, 22);
    body.rotation.x = Math.PI / 2;
    const hood = this.cyl(0.27, 0.27, 0.55, this.M.paintedLight, 0, 0, 1.15, pivot, 22);
    hood.rotation.x = Math.PI / 2;
    const lens = this.cyl(0.17, 0.17, 0.05, this.M.glass, 0, 0, 1.62, pivot, 20);
    lens.rotation.x = Math.PI / 2;

    // pulsating red "recording" light (dark when off → glows red when on)
    const ledMat = this.track(
      new THREE.MeshStandardMaterial({
        color: 0x2a0806, emissive: 0xff2a20, emissiveIntensity: 0, roughness: 0.4,
      }),
    );
    const led = new THREE.Mesh(this.track(new THREE.SphereGeometry(0.08, 12, 10)), ledMat);
    led.position.set(0.12 * side, 0.18, 0.45);
    pivot.add(led);
    this.leds.push(ledMat);

    // keep the title's cast shadow clean — the rig doesn't cast
    rig.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).castShadow = false;
    });
  }

  // ======================================================================
  // smoke / steam plumes (CONVENTIONS §7 `rise`)
  // ======================================================================
  private addPlume(
    parent: THREE.Object3D,
    x: number,
    y: number,
    z: number,
    o: {
      count: number; rate: number; rise: number; spread: number;
      from: number; to: number; opacity: number; drift: number; warm: boolean;
    },
  ): void {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    parent.add(group);

    const geo = this.track(new THREE.IcosahedronGeometry(0.5, 1));
    const color = o.warm ? 0xe7e3dd : 0xdfe4ea;
    const puffs: Puff[] = [];

    for (let i = 0; i < o.count; i++) {
      const mat = this.track(
        new THREE.MeshStandardMaterial({
          color,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          roughness: 1,
          metalness: 0,
        }),
      );
      const ox = (Math.random() - 0.5) * o.spread;
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(ox, 0, (Math.random() - 0.5) * o.spread);
      group.add(mesh);
      puffs.push({
        mesh,
        phase: i / o.count,
        speed: o.rate * (0.8 + Math.random() * 0.4),
        rise: o.rise,
        drift: o.drift,
        ox,
        seed: Math.random() * 6.2831,
        from: o.from,
        to: o.to,
        baseOpacity: o.opacity,
      });
    }
    this.plumes.push({ group, puffs });
  }

  private tickPlumes(dt: number): void {
    for (const plume of this.plumes) {
      for (const p of plume.puffs) {
        p.phase += p.speed * dt;
        if (p.phase >= 1) p.phase -= 1;

        const k = p.phase;
        const s = THREE.MathUtils.lerp(p.from, p.to, k);
        p.mesh.scale.setScalar(s);
        p.mesh.position.y = k * p.rise;
        // bounded sideways sway around the puff's origin (grows as it rises)
        p.mesh.position.x = p.ox + Math.sin(k * 6.2831 + p.seed) * p.drift * k;
        // fade in then out across the life
        const fade = Math.sin(Math.PI * k);
        (p.mesh.material as THREE.MeshStandardMaterial).opacity = fade * p.baseOpacity;
      }
    }
  }

  // ======================================================================
  // loop / resize
  // ======================================================================
  private animate = (): void => {
    this.frameId = requestAnimationFrame(this.animate);
    const dt = Math.min(this.clock.getDelta(), 0.05);

    if (!this.reducedMotion) this.factory.rotation.y += dt * 0.18;
    this.tickPlumes(dt);

    // pulsating record light: gradual ON (0.5s) + gradual OFF (0.5s) = 1s cycle
    const glow = (1 - Math.cos(this.clock.elapsedTime * Math.PI * 2)) / 2;
    for (const m of this.leds) m.emissiveIntensity = glow * 2.6;

    this.renderer.render(this.scene, this.camera);
  };

  private onResize(): void {
    const el = this.host.nativeElement;
    const w = el.clientWidth || 1;
    const h = el.clientHeight || 1;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  // ======================================================================
  // primitive helpers
  // ======================================================================
  private track<T extends { dispose(): void }>(o: T): T {
    this.disposables.push(o);
    return o;
  }

  private box(
    w: number, h: number, d: number, mat: THREE.Material,
    x: number, y: number, z: number, parent: THREE.Object3D,
  ): THREE.Mesh {
    const mesh = new THREE.Mesh(this.track(new THREE.BoxGeometry(w, h, d)), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  private cyl(
    rt: number, rb: number, h: number, mat: THREE.Material,
    x: number, y: number, z: number, parent: THREE.Object3D, seg = 20,
  ): THREE.Mesh {
    const mesh = new THREE.Mesh(this.track(new THREE.CylinderGeometry(rt, rb, h, seg)), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  private sphere(
    r: number, mat: THREE.Material,
    x: number, y: number, z: number, parent: THREE.Object3D,
  ): THREE.Mesh {
    const mesh = new THREE.Mesh(this.track(new THREE.SphereGeometry(r, 20, 16)), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }
}
