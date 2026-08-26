import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  BOARD_COLS,
  BOARD_ROWS,
  enemies,
  squad,
  tileMarks,
  type TileKind,
} from "./data";

const FRUSTUM_SIZE = 10.6;
const PITCH = 1.22;
const TILE = 1.06;
const TILE_H = 0.48;

const COLOR: Record<TileKind | "checkA" | "checkB", number> = {
  checkA: 0x3a4550,
  checkB: 0x45515e,
  walk: 0x3d6a88,
  threat: 0x8a3a38,
  hazard: 0xb07a28,
  base: 0x3a4550,
};

export interface BattleScene {
  setSelected(squadIdx: number | null): void;
  onTokenClick(cb: (squadIdx: number) => void): void;
}

function tileWorld(col: number, row: number): [number, number] {
  const x = (col - (BOARD_COLS - 1) / 2) * PITCH;
  const z = (row - (BOARD_ROWS - 1) / 2) * PITCH;
  return [x, z];
}

function heightAt(col: number, row: number): number {
  const n = ((col * 13 + row * 7) % 5) * 0.05;
  return TILE_H + n;
}

function makeCamera(aspect: number): THREE.OrthographicCamera {
  const camera = new THREE.OrthographicCamera(
    (-FRUSTUM_SIZE * aspect) / 2,
    (FRUSTUM_SIZE * aspect) / 2,
    FRUSTUM_SIZE / 2,
    -FRUSTUM_SIZE / 2,
    0.1,
    1000,
  );
  const distance = 60;
  const elevation = Math.atan(1 / Math.SQRT2);
  const azimuth = Math.PI / 4;
  camera.position.set(
    distance * Math.cos(elevation) * Math.sin(azimuth),
    distance * Math.sin(elevation),
    distance * Math.cos(elevation) * Math.cos(azimuth),
  );
  camera.lookAt(0, 0, 0);
  return camera;
}

function hsl(h: number, s: number, l: number): number {
  const c = new THREE.Color();
  c.setHSL(h / 360, s, l);
  return c.getHex();
}

interface TokenRef {
  group: THREE.Group;
  idx: number;
}

export function mount(canvas: HTMLCanvasElement): BattleScene {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x140f0c);

  function currentSize(): { width: number; height: number } {
    return { width: canvas.clientWidth || 1, height: canvas.clientHeight || 1 };
  }

  const initial = currentSize();
  let camera = makeCamera(initial.width / initial.height);
  renderer.setSize(initial.width, initial.height, false);

  const sun = new THREE.DirectionalLight(0xfff1d6, 2.05);
  sun.position.set(16, 28, 14);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -12;
  sun.shadow.camera.right = 12;
  sun.shadow.camera.top = 12;
  sun.shadow.camera.bottom = -12;
  scene.add(sun);
  scene.add(new THREE.HemisphereLight(0xe8c9a0, 0x1a1410, 0.55));

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(80, 80),
    new THREE.MeshStandardMaterial({ color: 0x120e0b, roughness: 1 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.02;
  ground.receiveShadow = true;
  scene.add(ground);

  const kindAt = new Map<string, TileKind>();
  for (const m of tileMarks) kindAt.set(`${m.col},${m.row}`, m.kind);

  const tileTop = new Map<string, number>();
  for (let row = 0; row < BOARD_ROWS; row++) {
    for (let col = 0; col < BOARD_COLS; col++) {
      const [x, z] = tileWorld(col, row);
      const h = heightAt(col, row);
      const kind = kindAt.get(`${col},${row}`) ?? "base";
      const check = (col + row) % 2 === 0 ? COLOR.checkA : COLOR.checkB;
      const color = kind === "base" ? check : COLOR[kind];
      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.82,
        metalness: 0.04,
      });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(TILE, h, TILE), mat);
      mesh.position.set(x, h / 2, z);
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      scene.add(mesh);
      tileTop.set(`${col},${row}`, h);
    }
  }

  const tokens: TokenRef[] = [];
  const pickable: THREE.Object3D[] = [];
  const pickMap = new Map<number, TokenRef>();

  function makeFigure(
    idx: number,
    tile: [number, number],
    color: number,
    scale: number,
    dim: boolean,
  ): TokenRef {
    const [col, row] = tile;
    const [x, z] = tileWorld(col, row);
    const y = tileTop.get(`${col},${row}`) ?? TILE_H;
    const group = new THREE.Group();
    group.position.set(x, y, z);

    const bodyMat = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.5,
      metalness: 0.08,
      transparent: dim,
      opacity: dim ? 0.62 : 1,
    });
    const bodyH = 0.92 * scale;
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.42 * scale, bodyH, 0.42 * scale), bodyMat);
    body.position.y = bodyH / 2;
    body.castShadow = true;
    group.add(body);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.34 * scale, 0.34 * scale, 0.34 * scale), bodyMat);
    head.position.y = bodyH + 0.2 * scale;
    head.castShadow = true;
    group.add(head);

    scene.add(group);
    const ref: TokenRef = { group, idx };
    group.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) {
        pickable.push(o);
        pickMap.set(o.id, ref);
      }
    });
    tokens.push(ref);
    return ref;
  }

  for (let i = 0; i < squad.length; i++) {
    const m = squad[i];
    const field = m.slot === "field";
    makeFigure(i, m.tile, hsl(m.hue, 0.42, field ? 0.48 : 0.38), field ? 1 : 0.78, !field);
  }
  for (const e of enemies) {
    makeFigure(-1, e.tile, 0xb04a42, 1.05, false);
  }

  const selMat = new THREE.MeshBasicMaterial({
    color: 0xe8c56a,
    transparent: true,
    opacity: 0.95,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const selRing = new THREE.Mesh(new THREE.RingGeometry(0.52, 0.68, 28), selMat);
  selRing.rotation.x = -Math.PI / 2;
  selRing.visible = false;
  scene.add(selRing);

  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  let clickCb: ((squadIdx: number) => void) | null = null;
  let downX = 0;
  let downY = 0;

  canvas.addEventListener("pointerdown", (e) => {
    downX = e.clientX;
    downY = e.clientY;
  });
  canvas.addEventListener("pointerup", (e) => {
    if (Math.abs(e.clientX - downX) > 5 || Math.abs(e.clientY - downY) > 5) return;
    if (!clickCb) return;
    const rect = canvas.getBoundingClientRect();
    ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObjects(pickable, false);
    if (hits.length === 0) return;
    const tok = pickMap.get(hits[0].object.id);
    if (tok && tok.idx >= 0) clickCb(tok.idx);
  });

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.4, 0);
  controls.enableRotate = false;
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minZoom = 0.7;
  controls.maxZoom = 2.2;
  controls.update();

  function handleResize(): void {
    const { width, height } = currentSize();
    const next = makeCamera(width / height);
    next.position.copy(camera.position);
    next.quaternion.copy(camera.quaternion);
    next.zoom = camera.zoom;
    next.updateProjectionMatrix();
    camera = next;
    controls.object = camera;
    controls.update();
    renderer.setSize(width, height, false);
  }
  window.addEventListener("resize", handleResize);
  new ResizeObserver(handleResize).observe(canvas);

  function animate(): void {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  function setSelected(squadIdx: number | null): void {
    if (squadIdx === null) {
      selRing.visible = false;
      return;
    }
    const tok = tokens.find((t) => t.idx === squadIdx);
    if (!tok) {
      selRing.visible = false;
      return;
    }
    selRing.position.set(tok.group.position.x, tok.group.position.y + 0.02, tok.group.position.z);
    selRing.visible = true;
  }

  function onTokenClick(cb: (squadIdx: number) => void): void {
    clickCb = cb;
  }

  return { setSelected, onTokenClick };
}
