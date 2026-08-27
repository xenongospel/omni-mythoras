import {
  glossary,
  inventory,
  squad,
  zone,
  type InventorySlot,
  type SkillCard,
  type SkillMark,
  type SquadMember,
  type ZoneRoom,
} from "./data";
import type { BattleScene } from "./scene";

type RightTab = "map" | "inventory";
type GlyphKind = SkillMark | "coin" | "root" | "chip";

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  text?: string,
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function svgEl(tag: string): SVGElement {
  return document.createElementNS("http://www.w3.org/2000/svg", tag);
}

function glyph(kind: GlyphKind): SVGSVGElement {
  const svg = svgEl("svg") as SVGSVGElement;
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  const p = svgEl("path");
  p.setAttribute("fill", "none");
  p.setAttribute("stroke", "currentColor");
  p.setAttribute("stroke-width", "1.8");
  p.setAttribute("stroke-linecap", "round");
  p.setAttribute("stroke-linejoin", "round");
  const d: Record<GlyphKind, string> = {
    lash: "M4 18 L14 6 M12 6 h4 v4",
    guard: "M12 3 L20 7 v6 c0 5 -3.5 8 -8 9 c-4.5 -1 -8 -4 -8 -9 V7 z",
    mark: "M12 4 v16 M4 12 h16",
    burst: "M12 3 v4 M12 17 v4 M3 12 h4 M17 12 h4",
    step: "M5 16 h6 l3 -8 h5",
    snare: "M5 19 C5 10 19 10 19 19 M8 8 h8",
    bolt: "M13 2 L6 13 h6 l-1 9 L18 10 h-6 z",
    ward: "M12 3 L19 6 v5 c0 4.5 -3 7.5 -7 9 c-4 -1.5 -7 -4.5 -7 -9 V6 z",
    coin: "M12 3 a9 9 0 1 0 0.01 0 M8 12 h8 M12 8 v8",
    root: "M12 3 v8 M12 11 l-5 9 M12 11 l5 9 M9 7 h6",
    chip: "M7 7 h10 v10 H7 z M4 10 h3 M4 14 h3 M17 10 h3 M17 14 h3",
  };
  p.setAttribute("d", d[kind]);
  if (kind === "bolt") {
    p.setAttribute("fill", "currentColor");
    p.setAttribute("stroke", "none");
  }
  svg.appendChild(p);
  return svg;
}

function portraitFace(m: SquadMember): HTMLElement {
  const face = el("div", "portrait-face");
  face.style.background = `hsl(${m.hue} 22% 16%)`;
  face.style.color = `hsl(${m.hue} 38% 70%)`;
  face.textContent = m.name.slice(0, 1);
  return face;
}

function renderKeywords(text: string, onTerm: (term: string) => void): HTMLElement {
  const line = el("p", "skill-line");
  const parts = text.split(/(\{[^}]+\})/g);
  for (const part of parts) {
    const m = part.match(/^\{([^}]+)\}$/);
    if (!m) {
      line.append(part);
      continue;
    }
    const term = m[1];
    const kw = el("button", "kw", term);
    kw.type = "button";
    kw.addEventListener("click", (e) => {
      e.stopPropagation();
      onTerm(term);
    });
    line.appendChild(kw);
  }
  return line;
}

function bar(kind: "hp" | "load", value: number, max: number): HTMLElement {
  const wrap = el("div", `resbar resbar-${kind}`);
  wrap.appendChild(el("span", "res-ico", kind === "hp" ? "HP" : "Load"));
  const track = el("div", "res-track");
  const fill = el("div", "res-fill");
  fill.style.width = `${Math.max(0, Math.min(100, (value / max) * 100))}%`;
  track.appendChild(fill);
  wrap.appendChild(track);
  wrap.appendChild(el("span", "res-num", `${value} / ${max}`));
  wrap.setAttribute("aria-label", `${kind} ${value} of ${max}`);
  return wrap;
}

function crest(side: "left" | "right"): SVGSVGElement {
  const svg = svgEl("svg") as SVGSVGElement;
  svg.setAttribute("viewBox", "0 0 48 72");
  svg.setAttribute("class", `crest crest-${side}`);
  svg.setAttribute("aria-hidden", "true");
  const g = svgEl("g");
  const frame = svgEl("path");
  frame.setAttribute(
    "d",
    "M6 8 h36 v10 c0 22 -8 36 -18 48 C14 54 6 40 6 18 z",
  );
  frame.setAttribute("class", "crest-frame");
  const hood = svgEl("path");
  hood.setAttribute("d", "M24 16 c-8 0 -12 6 -12 14 v6 c0 8 5 12 12 18 7 -6 12 -10 12 -18 v-6 c0 -8 -4 -14 -12 -14 z");
  hood.setAttribute("class", "crest-hood");
  const face = svgEl("ellipse");
  face.setAttribute("cx", "24");
  face.setAttribute("cy", "30");
  face.setAttribute("rx", "5");
  face.setAttribute("ry", "6");
  face.setAttribute("class", "crest-face");
  g.appendChild(frame);
  g.appendChild(hood);
  g.appendChild(face);
  svg.appendChild(g);
  return svg;
}

export function setupUi(canvas: HTMLCanvasElement, battle: BattleScene): void {
  const shell = el("div", "shell");
  const stage = el("div", "stage");
  stage.appendChild(canvas);

  const squadStrip = el("div", "squad-strip");
  squadStrip.setAttribute("aria-label", "Squad");
  stage.appendChild(squadStrip);
  shell.appendChild(stage);

  const plate = el("div", "plate");
  plate.appendChild(crest("left"));
  plate.appendChild(crest("right"));

  const left = el("div", "plate-left");
  const right = el("div", "plate-right");
  const tip = el("div", "float-tip");
  tip.hidden = true;
  plate.appendChild(left);
  plate.appendChild(right);
  plate.appendChild(tip);
  shell.appendChild(plate);
  document.body.appendChild(shell);

  let selectedIdx = 0;
  let selectedSkill = 0;
  let rightTab: RightTab = "map";
  let glossaryTerm: string | null = null;
  let tipOpen = false;

  function setSelected(idx: number): void {
    selectedIdx = idx;
    selectedSkill = 0;
    glossaryTerm = null;
    tipOpen = false;
    battle.setSelected(idx);
    render();
  }

  battle.onTokenClick((idx) => setSelected(idx));
  battle.setSelected(0);

  window.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    if ((e.target as HTMLElement | null)?.closest("input, textarea")) return;
    e.preventDefault();
    rightTab = rightTab === "map" ? "inventory" : "map";
    render();
  });

  document.addEventListener("click", (e) => {
    if (!tipOpen) return;
    if (plate.contains(e.target as Node)) return;
    tipOpen = false;
    glossaryTerm = null;
    renderTip();
  });

  function render(): void {
    const m = squad[selectedIdx];
    renderStrip();
    renderLeft(m);
    renderRight();
    renderTip();
  }

  function renderStrip(): void {
    squadStrip.replaceChildren();
    for (let i = 0; i < squad.length; i++) {
      const c = squad[i];
      const pip = el("button", "pip");
      pip.type = "button";
      if (i === selectedIdx) pip.classList.add("is-on");
      if (c.slot === "bench") pip.classList.add("is-bench");
      pip.appendChild(portraitFace(c));
      const tiny = el("div", "pip-hp");
      const fill = el("div", "pip-hp-fill");
      fill.style.width = `${(c.hp / c.maxHp) * 100}%`;
      tiny.appendChild(fill);
      pip.appendChild(tiny);
      pip.title = c.name;
      pip.addEventListener("click", () => setSelected(i));
      squadStrip.appendChild(pip);
    }
  }

  function renderLeft(m: SquadMember): void {
    left.replaceChildren();

    const ident = el("div", "ident");
    ident.appendChild(portraitFace(m));
    const names = el("div", "ident-names");
    names.appendChild(el("div", "hero-name", m.name));
    names.appendChild(el("div", "hero-class", `${m.species}  ${m.role}`));
    ident.appendChild(names);
    left.appendChild(ident);

    const skills = el("div", "skills");
    m.skills.forEach((sk, i) => {
      const btn = el("button", "skill");
      btn.type = "button";
      btn.title = sk.name;
      if (i === selectedSkill && tipOpen) btn.classList.add("is-on");
      btn.appendChild(glyph(sk.mark));
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (selectedSkill === i && tipOpen) {
          tipOpen = false;
          glossaryTerm = null;
        } else {
          selectedSkill = i;
          glossaryTerm = null;
          tipOpen = true;
        }
        render();
      });
      skills.appendChild(btn);
    });
    const extra = el("div", "skill is-empty");
    extra.setAttribute("aria-hidden", "true");
    skills.appendChild(extra);
    left.appendChild(skills);

    left.appendChild(bar("hp", m.hp, m.maxHp));
    left.appendChild(bar("load", m.load, m.maxLoad));

    const lower = el("div", "lower");
    const stats = el("div", "stats");
    const rows: Array<[string, string]> = [
      ["AUTH", String(m.attributes.AUTH)],
      ["INV", String(m.attributes.INV)],
      ["ANIM", String(m.attributes.ANIM)],
      ["ORD", String(m.attributes.ORD)],
      ["SPD", String(m.spd)],
    ];
    for (const [k, v] of rows) {
      const row = el("div", "stat");
      row.appendChild(el("span", "stat-k", k));
      row.appendChild(el("span", "stat-v", v));
      stats.appendChild(row);
    }
    lower.appendChild(stats);

    const slots = el("div", "trinkets");
    for (const t of m.trinkets) {
      const slot = el("div", "trinket");
      if (t) {
        slot.appendChild(glyph("ward"));
        slot.title = t.name;
      } else {
        slot.classList.add("is-empty");
      }
      slots.appendChild(slot);
    }
    lower.appendChild(slots);
    left.appendChild(lower);
  }

  function renderTip(): void {
    const m = squad[selectedIdx];
    const sk: SkillCard = m.skills[selectedSkill];
    if (!tipOpen || !sk) {
      tip.hidden = true;
      tip.replaceChildren();
      return;
    }
    tip.hidden = false;
    tip.replaceChildren();
    tip.appendChild(el("div", "skill-name", sk.name));
    tip.appendChild(
      renderKeywords(sk.text, (term) => {
        glossaryTerm = glossaryTerm === term ? null : term;
        renderTip();
      }),
    );
    if (glossaryTerm) {
      const def = glossary[glossaryTerm] ?? "No entry.";
      const g = el("div", "glossary");
      g.appendChild(el("div", "glossary-term", glossaryTerm));
      g.appendChild(el("p", "glossary-def", def));
      tip.appendChild(g);
    }
  }

  function renderRight(): void {
    right.replaceChildren();
    const pane = el("div", "pane");
    if (rightTab === "map") pane.appendChild(renderMap());
    else pane.appendChild(renderInventory());
    right.appendChild(pane);

    const tabs = el("div", "tabs");
    for (const id of ["map", "inventory"] as const) {
      const tab = el("button", "tab");
      tab.type = "button";
      if (id === rightTab) tab.classList.add("is-on");
      tab.setAttribute("aria-label", id === "map" ? "Map" : "Inventory");
      tab.appendChild(id === "map" ? tabMap() : tabBag());
      tab.addEventListener("click", () => {
        rightTab = id;
        render();
      });
      tabs.appendChild(tab);
    }
    right.appendChild(tabs);
  }

  function renderMap(): HTMLElement {
    const wrap = el("div", "map");
    wrap.appendChild(el("div", "map-title", zone.name));

    const svg = svgEl("svg") as SVGSVGElement;
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("class", "zone-graph");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", `${zone.name} rooms`);

    const byId = new Map(zone.rooms.map((r) => [r.id, r]));
    for (const hall of zone.halls) {
      const a = byId.get(hall.from);
      const b = byId.get(hall.to);
      if (!a || !b) continue;
      const line = svgEl("line");
      line.setAttribute("x1", String(a.x));
      line.setAttribute("y1", String(a.y));
      line.setAttribute("x2", String(b.x));
      line.setAttribute("y2", String(b.y));
      line.setAttribute("class", "hall");
      svg.appendChild(line);
    }

    for (const room of zone.rooms) {
      const g = svgEl("g");
      g.setAttribute("class", `room is-${room.status}`);
      const rect = svgEl("rect");
      const w = room.status === "here" ? 14 : 11;
      const h = room.status === "here" ? 11 : 9;
      rect.setAttribute("x", String(room.x - w / 2));
      rect.setAttribute("y", String(room.y - h / 2));
      rect.setAttribute("width", String(w));
      rect.setAttribute("height", String(h));
      g.appendChild(rect);
      const label = svgEl("text");
      label.setAttribute("x", String(room.x));
      label.setAttribute("y", String(room.y + h / 2 + 5));
      label.setAttribute("text-anchor", "middle");
      label.textContent = room.name;
      g.appendChild(label);
      svg.appendChild(g);
    }
    wrap.appendChild(svg);

    const legend = el("div", "map-legend");
    legend.appendChild(legendChip("here", "You are here — Ash Court"));
    legend.appendChild(legendChip("cleared", "Walked"));
    legend.appendChild(legendChip("ahead", "Ahead"));
    legend.appendChild(legendChip("locked", "Sealed"));
    wrap.appendChild(legend);
    return wrap;
  }

  function legendChip(status: ZoneRoom["status"], label: string): HTMLElement {
    const n = el("span", `legend-chip is-${status}`, label);
    return n;
  }

  function renderInventory(): HTMLElement {
    const wrap = el("div", "inv");
    const grid = el("div", "inv-grid");
    for (const slot of inventory) {
      grid.appendChild(invCell(slot));
    }
    wrap.appendChild(grid);
    return wrap;
  }

  function invCell(slot: InventorySlot): HTMLElement {
    const cell = el("div", "inv-slot");
    if (!slot.name) {
      cell.classList.add("is-empty");
      return cell;
    }
    cell.title = slot.name;
    cell.appendChild(glyph(slot.mark ?? "mark"));
    if (slot.qty > 1) cell.appendChild(el("div", "inv-qty", String(slot.qty)));
    return cell;
  }

  render();
}

function tabMap(): SVGSVGElement {
  const svg = svgEl("svg") as SVGSVGElement;
  svg.setAttribute("viewBox", "0 0 24 24");
  const p = svgEl("path");
  p.setAttribute("fill", "none");
  p.setAttribute("stroke", "currentColor");
  p.setAttribute("stroke-width", "1.7");
  p.setAttribute("d", "M5 7 h5 v5 H5 z M14 7 h5 v5 h-5 z M5 16 h5 v5 H5 z M10 9.5 h4 M16.5 12 v4 M7.5 12 v4");
  svg.appendChild(p);
  return svg;
}

function tabBag(): SVGSVGElement {
  const svg = svgEl("svg") as SVGSVGElement;
  svg.setAttribute("viewBox", "0 0 24 24");
  const p = svgEl("path");
  p.setAttribute("fill", "none");
  p.setAttribute("stroke", "currentColor");
  p.setAttribute("stroke-width", "1.7");
  p.setAttribute("d", "M4 8 h16 v12 H4 z M4 8 l2 -4 h5 l1 4 M12 8 l1 -4 h5 l2 4");
  svg.appendChild(p);
  return svg;
}
