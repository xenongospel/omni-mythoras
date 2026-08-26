# SYSTEM PROMPT — one tracing pass

**Status:** Executed 2026-08-24.

You are implementing `apps/mythoras-client-prototype` only.

**Spec:** `POSTURE_REQUIREMENTS.md` in this folder. Read it. Build that picture. Do not add products that file does not name. The previous version of this prompt (Turn Program on the HUD, Skill Frame instead of map/inventory, “match DD shape but do not copy gothic”) is void.

Domain words from root `CONTEXT.md` (Technician, Squad, Field, Bench, AUTH / INV / ANIM / ORD) stay correct. **Turn Program is a combat-model name in CONTEXT, not a HUD label.** Do not print Program / Programme anywhere on screen.

---

## Picture

Two surfaces, two references — do not cross them. See `reference/README.md`.

Upper majority: a 3D isometric voxel / cube-tile board (Master of Pieces tile language, `reference/gameview-mop/`). Units on tiles. Walkable / threatened / special tiles are coloured facts. **DD1 has nothing to say about the board.**

Lower third: one heavy framed plate copied from Darkest Dungeon 1 combat (`reference/console-dd1/`). **MoP has nothing to say about the plate.**

- **Left:** one selected creature — portrait, name (blackletter), class (Ubuntu), skill squares, HP bar, second resource bar, stat grid, two trinket slots.
- **Right:** exactly two states — **Map** (real schematic of this footprint) and **Inventory** (real stub slot grid). Edge tabs. One visible at a time.
- Thin Squad pips (5: 3 Field + 2 Bench) above the plate. Title them “Squad” or leave untitled.

Neidfyre job on the plate: skill text has marked keywords; hover/click opens an in-plate definition. Plate height is DD1 / Neidfyre class, not a ribbon and not a 400px admin slab.

Type: **Ubuntu** (regular body, bold HP numbers). Names / titles / inventory counts: **UnifrakturCook**. Do not copy Red Hook `.fnt` / `.tga` files into the repo.

---

## How to work the existing code

This is a rebuild of the current throwaway, not a reskin of `turnprogram`.

Delete the layout zoo. Remove `src/layouts.ts` (or empty it). One layout, no switcher. Rewrite `src/ui.ts` and `src/style.css` as that one plate. Rebuild `src/scene.ts` as a readable tile board (keep Three.js, Vite, vanilla TS). Extend `src/data.ts` for skills, keywords, map stub, inventory stubs; keep Squad / Field / Bench.

Stack stays: Vite + TypeScript + Three.js + HTML/CSS overlay. No Godot. No ADE. No new UI framework.

Prototype, not poor: tiles readable, plate dense, type intentional. Flat colour and primitives are fine. No shaders-as-the-job.

---

## Do not put on this HUD

Queues, commit buttons, initiative logs, Skill Frame tabs, layout names, Program / Programme. Combat may still be plan-then-resolve later; this pass does not teach that noun.

Do not ship RS3 floating docks. Do not use DD’s 2D hallway as the world. Do not use CSS blobs as creatures.

---

## Done when

`bun run dev` shows one screen. Someone who knows DD1 recognises the plate (left hero, right map | inventory). Someone who knows MoP recognises the board as tiles. Selecting a Field creature fills the left plate. Map tab and Inventory tab both work. A keyword in a skill line opens the in-plate glossary. The layout switcher is gone. The words Program / Programme do not appear.

# END
