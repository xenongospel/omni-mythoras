# Prototype posture — HUD + scene (2026-08-24)

**Status:** Tracing pass executed 2026-08-24. Spec still governs.

**Job:** One playable picture: a voxel/MoP-like board over a **traced Darkest Dungeon 1 combat console**, then peel costume later. Prototype, not poor. Not a layout lab.

**Surfaces:** `apps/mythoras-client-prototype` only. ADE is out of this pass. Godot is later.

**Two references, two jobs — do not cross them.** Darkest Dungeon 1 governs the
**bottom console** (and later, parts of the menus and systems screens). Master
of Pieces governs the **game view** — the board. DD1 has nothing to say about
the board; MoP has nothing to say about the plate. See `reference/README.md`.

---

## 1. Method

1. Write this requirements set (this file). **Done.**
2. Write one prompt (`SYSTEM_PROMPT.md`) that points here and does not invent extra products. **Done.**
3. One tracing pass — only when the owner says execute.

Copy Darkest Dungeon 1 **including the theme**. Repeat the gothic plate. Peel toward Mythoras later. Do not invent a look we do not have yet.

**Neidfyre** is plating and border only — a game-looking frame, not a layout to copy.

**Locked defaults (2026-08-24)**

- **Board:** 3D isometric voxel / cube-tile grid in Three.js (MoP camera family). Not a 2D sprite hallway.
- **Names / titles:** **UnifrakturCook** (OFL, Google Fonts) as the Dwarven Axe BB stand-in until that face is licensed. Body remains **Ubuntu**.
- **Map:** a readable **zone graph** (named rooms + corridors, you-are-here). Not a photocopy of the battle tiles.

---

## 2. One screen — kill the zoo

**MUST**

- One posture. One layout. Battle view + bottom console.
- Scene occupies the upper majority. Console is a heavy framed plate under it (DD1 / Neidfyre height class — a real third of the window, not a 80px ribbon, not a 400px admin slab stuffed with extra products).

**MUST NOT**

- Keep or ship the layout zoo (`dd`, `runescape`, `poe`, `dualrail`, `deck`, `minimal`, `column`, `tiered`, `tabcol`, `split`, `hybrid`, `railmodes`, `turnprogram`, etc.). Delete it in the implementation pass; do not reskin the last one.
- Debug layout switcher as the product.
- Floating RS3 docks in this pass. Nouveau RS3 tab/section *ideas* may inform how the plate’s inner regions read; they are not a second HUD system yet.

---

## 3. Scene (board)

**MUST**

- Voxel / discrete tile language in the spirit of Master of Piece: the fight lives on a 3D isometric grid you can read. Cube or facet tiles. Units sit on tiles. Threatened / walkable / special tiles are coloured facts, not particle soup.
- Board is the picture.
- Quality bar: greybox that still *reads as a game board*, not a default Three.js void with cylinders and no tile grammar.

**MUST NOT**

- DD’s 2D hallway as the world. The plate is DD1; the world is voxel/MoP.
- CSS/HTML blobs standing in for creatures or terrain.
- Engine debate (Godot) in this pass.

---

## 4. Bottom console — trace DD1, include Neidfyre’s plate jobs

Reference: owner DD1 combat screenshot (Vernon / Highwayman plate). Secondary: Neidfyre’s framed plate (keyword glossary, in-plate explanation, compare-height).

### 4.1 Shape

**MUST**

- Heavy framed object sitting under the scene (iron/wood plate, corner bookends). Costume may be gothic for the tracing; it is not locked Mythoras tone.
- **Left:** one selected creature.
  - Portrait
  - Name + species/class-style label
  - Horizontal skill squares (icon-first; not numbered admin buttons)
  - Primary resource bar (HP) with numbers
  - Secondary resource bar (Load or another real creature-local resource — placeholder allowed, must be a bar, not a slogan)
  - Compact stat grid (creature combat numbers)
  - Two small equipment/trinket slots
- **Right:** one panel, **exactly two** states, edge tabs/icons:
  1. **Map** (important — a readable zone graph: named rooms and corridors, current room marked. Not a photocopy of the battle tiles.)
  2. **Inventory** (important — a real slot grid, even if items are stubs)
- Tab toggle is lightweight (click / later Tab key). Only one of map or inventory is visible.

**MUST NOT**

- Put planning queues, commit buttons, initiative strings, resolution logs, or “Skill Frame inspectors” in this plate.
- A third right-tab in this pass.
- Thin DD2 travel ribbon as this combat console.
- Unicode diamonds as “crests.” If bookends exist, they are drawn chrome, not `◆`.

### 4.2 Neidfyre (include, do not replace DD1)

**MUST**

- Keyword glossary behaviour: named mechanics in skill text are marked and resolve in-plate (hover/click → short definition). Does not steal Vernon’s column for a document.
- Plate **border** in the Neidfyre family: a game object frame, not an admin slab. Do not copy Neidfyre’s 1v1 layout.

**MUST NOT**

- Neidfyre’s 1v1 corridor, Strike/Guard duel list, or cursed-land identity as Mythoras canon.
- A centre “compare my move vs enemy telegraph” as a required first tracing (optional later; not this posture’s gate).

### 4.3 Words that must not appear

**MUST NOT** show on this HUD (labels, tabs, buttons, logs, debug chrome):

- Program / Programme / Turn Program / “Commit Turn Program”
- Skill Frame (as a tab name)
- Layout zoo names

The combat *model* (queue Field actions, then resolve with Speed interleaving) may still exist under the hood. It is **not named on this surface**. CONTEXT.md still says “Turn Program”; that glossary fight is **not this pass**. This pass is: the plate does not teach that noun.

Roster of 5 (3 Field + 2 Bench) may appear as small pips **above** the plate or on the board. Do not title a band “Turn Program.” Prefer no title, or “Squad.”

---

## 5. Type and finish

**MUST**

- Two-face plate, matching DD1’s actual mapping: **Dwarven Axe BB** for names / titles / inventory counts; **Ubuntu** for class labels, stats, tooltips, glossary definitions, HP figures.
- Dark plate, parchment/off-white text, functional red for HP. Tracing may look gothic. That is allowed for this pass.

### 5.1 Type scale — measured, not chosen (2026-08-26)

Sizes below are **derived from pixel measurements** of both reference
screenshots at 1920×1080, cross-checked against each other. Convert
proportionally for other window sizes; the plate is a fixed fraction of window
height, so type scales with it.

| Job | Face | Size | Weight | Line-height | Case | Ink |
| --- | --- | --- | --- | --- | --- | --- |
| Creature name | UnifrakturCook | **48px** | 700 | 1.0 | Title | `#b6b48a` |
| Class / species label | Ubuntu | **20px** | 400 | 1.1 | Title | `#acac91` |
| HP figures | Ubuntu | **22px** | 700 | 1.0 | — | `#b6b48a` |
| Stat label | Ubuntu | **19px** | 400 | **18px** (0.95) | UPPER | `#858682` |
| Stat value | Ubuntu | **19px** | 400 | **18px** (0.95) | — | `#757572` |
| Glossary term | UnifrakturCook | 19px | 700 | 1.2 | Title | `#b6b48a` |
| Glossary definition | Ubuntu | 19px | 400 | 1.35 | — | `#acac91` |

**How these were derived.** The stat grid is the anchor because it is the only
block that repeats: six all-caps rows, cap-height band **13px**, pitch exactly
**18px**, identical in both screenshots. Ubuntu's cap height is 0.693em, so
13 ÷ 0.693 ≈ 18.8px — call it 19px on an 18px leading. Everything else follows
the same method: the class label's ascender-to-descender band is 19px (≈20px
type), HP digits are a 15px cap band (≈22px), and the name's cap band is 34px on
"Vernon" and 37px on "Boissel" (≈48px blackletter).

**The single most important fact in this table:** there is only *one* large
step. The name is 48px and *everything else on the plate is 19–22px.* That is a
2.5:1 scale with nothing in between — DD1's plate is not a rich type hierarchy,
it is one display line over a wall of uniform body text. Building a five-step
scale here will read as generic no matter which faces are loaded.

The glossary rows are **not measured** — the glossary is a Neidfyre job and does
not appear in the DD1 references. They are derived from the measured body size
and Butterick's 120–145% leading guidance. Treat them as provisional.

### 5.2 Palette — pinned

Taken from `panel_hero.png` (720×224) in the Steam install, which is
**uncompressed game art**, not a screenshot. The reference jpgs could not supply
this: they are video captures with crushed blacks (56% of the first image is
pure black) and cannot be trusted for colour. Read the art in place; do not copy
it into the repo.

**Core six** — these are the plate. Nothing outside this set without a reason.

| Token | Hex | Role |
| --- | --- | --- |
| `--plate-void` | `#000000` | Plate ground. **83% of the panel art is literally this.** |
| `--plate-raise` | `#242424` | Top of the ground ramp; the lightest the field ever gets |
| `--chrome-edge` | `#919191` | Frame highlight, slot borders |
| `--ink-primary` | `#b6b48a` | Name, HP figures, glossary terms |
| `--ink-muted` | `#858682` | Stat labels, secondary text |
| `--hp-red` | `#b80000` | HP bar, functional red only |

**Supporting ramp**, if the frame needs modelling: ground steps `#0c0c0c`,
`#141414`, `#1c1c1c`; chrome body `#434343`; HP shading `#8a0000`, `#4d0000`;
body ink `#acac91`; dim ink `#757572`.

**The rule that makes this not-SaaS.** DD1's neutrals are **pure grey — R = G = B
exactly** (`#919191`, `#434343`, `#242424`), while the ink is **warm**
(`#b6b48a` is a warm olive-cream). Slate is the opposite: `#64748b` and its
family are blue-tinted greys carrying cool text. If a neutral on this plate has
unequal channels, it is wrong.

### 5.3 Geometry

| Property | Measured | Note |
| --- | --- | --- |
| Plate height | **33.5%** of window height (362px at 1080p) | Confirms §2's "a real third" |
| Stat row pitch | 18px at 1080p | 4.97% of plate height |

### 5.4 Signature element

DD1's is the ornate iron corner bookends flanking a pure-black void, with the
blackletter name as the only large type on screen. The tracing inherits it.

**Mythoras's own signature is not yet chosen** and must not be invented during a
tracing pass. It is the first question of the peel, not of the trace.

**Font facts (read from the Steam install, 2026-08-24)**

Install: `~/Library/Application Support/Steam/steamapps/common/DarkestDungeon/_osx/Darkest.app/Contents/Resources/data/fonts/`

The game does **not** ship TTF/OTF. It ships BMFont bitmaps (`.fnt` + `.tga`). Mapping is `fonts.darkest`. English faces:

| Game id | File | BMFont `face=` | Typical HUD job |
|---|---|---|---|
| `ubuntu_small` | `ubuntu.fnt` | Ubuntu 25 regular | class, stats, tooltips, glossary body |
| `ubuntu_medium` | `ubuntu_m.fnt` | Ubuntu 28 bold | HP, barks, some headers |
| `dwarven_axe_medium` | `dwarvenaxe-m.fnt` | DwarvenAxe BB | hero name, inventory counts, glossary terms |
| `dwarven_axe_large` | `dwarvenaxe-l.fnt` | DwarvenAxe BB | banners, round number |
| `popup` | `popup.fnt` | DwarvenAxe BB (outlined) | floating pop text |
| `pips` | `skill_pips.fnt` | Amble (5 glyphs only) | skill pip icons, not a text face |

Combat-plate refs that matter for this tracing: `banner_hero_name` → dwarven medium; `banner_hero_class` → ubuntu small; `stat` / `character_panel_*` / `monster_panel_*` stats → ubuntu; `monster_panel_hp` → ubuntu medium; `inventory_amount` → dwarven medium; `glossary_term` → dwarven medium; `glossary_term_definition` → ubuntu small.

Shipped but **not** wired in `fonts.darkest`: `new_rocker-m.fnt` (New Rocker), `ubuntu_s.fnt`, `dwarvenaxe-xl.fnt`. Do not treat New Rocker as the HUD.

**Licensed substitutes for the prototype (do not copy Red Hook’s `.fnt` / `.tga` into the repo)**

- **Ubuntu** — Ubuntu Font Licence, free. Use the real family (Google Fonts / font.ubuntu.com). Regular for class/stats/tooltips; Bold for HP-scale numbers.
- **Dwarven Axe BB** — Blambot, commercial ([MyFonts](https://www.myfonts.com/fonts/blambot/dwarven-axe-bb/)). Use only if licensed. This pass uses **UnifrakturCook** (OFL) for names / titles / inventory counts only. EB Garamond is the wrong job (book serif; DD body is Ubuntu sans).

**MUST NOT**

- Neutral “functional slate” SaaS (4px radius, `#3a5a8a` tabs, Inter/IBM Plex/JetBrains as the plate).
- A prompt that says “match DD shape but do not copy gothic type.” That contradiction produced the last slop.
- Treat the whole HUD as a gothic serif. Names are gothic; **body is Ubuntu**.
- **A third typeface.** Two faces, no exceptions. No system-font fallback beyond the declared stack — a helpful agent will silently add Inter.
- **A neutral with unequal channels.** See §5.2. Blue-tinted grey is the tell.
- **A plate ground lighter than `#242424`.** The field is black; the frame does the work.
- **A type step between 22px and 48px.** The gap is the design (§5.1).
- **Uppercase anywhere except stat labels.** The reference uses caps in exactly one place.
- **Rounded corners on plate chrome.** The slots and frame are square.

Prototype ≠ poor: tiles readable, plate dense, type intentional. Not shaders, not final art.

---

## 6. Interaction (minimum loop)

Enough that the picture is a game, not a poster:

1. Board + plate load.
2. Selecting a Field creature (token or plate) fills the left focus.
3. Map tab shows the footprint; Inventory tab shows a stub grid.
4. Keyword in a skill line opens the in-plate glossary.

Queue/commit/resolve may exist later as a **non-labelled** control (e.g. a skill commit that does not say Program). It is not a requirement of this tracing’s right panel.

---

## 7. Out of this pass

- Godot
- ADE
- RS3 floating docks as the architecture
- Trigger / Mjölner-style engines (parked: IDEA-062; CONTEXT: trigger skills are future expansion, not campaign baseline)
- Renaming Turn Program in CONTEXT.md

---

## 8. Done when

Someone who knows DD1’s combat HUD recognises the plate immediately (left hero + right map/inventory). Someone who knows MoP recognises the board as tiles. The words Program / Programme do not appear. Layout switcher is gone.
