# MYTHORAS: SHATTERED REALMS

## Comprehensive Game Design Document

> **DRAFT / STALE UI SHELL SPEC — SUPERSEDED 2026-07-15**
>
> Do not treat this document as locked. Its permanent framed shell, persistent surrounding panels, and **Field Studio** umbrella identity are retired. The authoritative direction is `SESSION_DECISIONS_2026-07-15.md`: **World View** dominates the viewport by default with a compact contextual HUD; player-invoked **Workspace View** contracts the live world and reveals configurable docks/widgets. Traversal and battle can run in either view, and combat normally uses most of the viewport. Rendering-engine and single-scene claims here are not locked; adaptive spatial/perceptual continuity is the requirement.

---

# Part VI: Technical Design

---

## 61. Design System — "The Arcane Cartographer" (Field Studio)

### 61.1 Central Aesthetic Framing — Field Studio

> **RETIRED IDENTITY:** Field Studio and Arcane Cartographer are preserved below as draft history, not current umbrella identity or locked visual language.

**Historical draft:** The proposed unifying aesthetic was **Field Studio**: Technicians moving through unmapped, varied wilderness. This umbrella identity is retired.

**Historical draft:** Arcane Cartographer was proposed as the underlying system with five registers. Neither it nor Field Studio is current locked identity.

**What stays constant across all regions:**

- UI confidence and typographic register
- Readability rules (contrast, smoothness, clear identity)
- Rendering tech (voxel chunks + selective post-processing)
- Creature treatment (lit and saturated regardless of biome darkness)

**What varies by region/sub-theme:**

- World palette, atmospheric particles, lighting temperature, terrain density, sub-theme detail

**Tonal register:** Not gothic. Wilderness and tech, closer to Marathon's restrained confidence than cyberpunk neon. Painterly treatment reserved for higher-order entities and specific environments — not the default. Draws the seinen-with-PoE-maturity register: mature without being grim, mixing Pokémon's youthful creature fantasy with a more serious presentation layer.

### 61.2 Creative Direction


| Principle              | Implementation                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tonal Architecture** | Depth through colour stepping, NOT drop shadows. Surfaces are "carved and extruded."                                                                                                                                                                                                                                                                                  |
| **Diamond Rule**       | All interactive nodes use 45-degree rotated squares (diamonds). Never circles. Zone nodes, passive tree nodes, navigation markers — always diamonds.                                                                                                                                                                                                                  |
| **No-Line Rule**       | 1px borders forbidden for sectioning. Use 16-24px gaps or background stepping instead. Structural borders are 2px minimum.                                                                                                                                                                                                                                            |
| **Hard Edges**         | Corner radius 2px maximum everywhere. No rounded corners.                                                                                                                                                                                                                                                                                                             |
| **Selective Ink Pass** | One global ink colour (~#0a0a0a), thickness varies by hierarchy rather than colour varying by terrain. Tiles thinnest (~1-2px, doubled from baseline for clarity), standard creatures medium (~2px), bosses/hero entities thickest (~3-4px), with subtle warm/cool tint variation for specific factions (warm-grey for Circuit Champions, cool for Abyssal/Spectral). |
| **Glassmorphism**      | 12px backdrop-blur at 60% opacity. Used for tooltips and the Atmospheric register (see §61.5) — not primary panel surfaces in Operational, Diagnostic, or Tactical registers.                                                                                                                                                                                         |


### 61.3 Colour Palette — Dark Theme (Default)

#### Surface Hierarchy (depth through stepping)


| Level                 | Hex     | Usage                                                       |
| --------------------- | ------- | ----------------------------------------------------------- |
| **Level 0 (Void)**    | #09090b | Screen background, deepest layer                            |
| **Level 1 (Dark)**    | #0f1012 | Top bar, info bar, panel frames                             |
| **Level 2 (Surface)** | #141518 | Active panel content areas                                  |
| **Level 3 (Inset)**   | #0c0d0f | Equipment slots, grid cells, inputs — "carved into" surface |


#### Text


| Token         | Hex     | Usage                                 |
| ------------- | ------- | ------------------------------------- |
| **Primary**   | #dddbd3 | Main content text, values, labels     |
| **Secondary** | #c4c1b8 | Supporting text, descriptions         |
| **Dim**       | #7d7b73 | Tertiary text, disabled states, hints |


#### Accent — Fusion Gradient (Amber/Magenta)

Player interaction accent uses a **fusion gradient** between amber and purple/magenta rather than a single flat accent colour — a professionally graded treatment, not a single hue.


| Token                     | Hex                                               | Usage                                                       |
| ------------------------- | ------------------------------------------------- | ----------------------------------------------------------- |
| **Primary (Amber end)**   | #d4a017                                           | Active states, primary interactive highlights               |
| **Primary (Magenta end)** | #8b5cf6                                           | Secondary interactive states, gradient terminus             |
| **Gradient Fill**         | linear-gradient(135deg, #d4a017 0%, #8b5cf6 100%) | Signature buttons, active Grid paths, key highlight moments |
| **Hover**                 | Lightened 15% across gradient                     | Hover states on interactive elements                        |
| **Fill**                  | #221a30 (blended dark base)                       | Background fill for accent-highlighted areas                |
| **Border**                | #4a3a68                                           | Borders on accent-highlighted elements                      |


The gradient is used selectively — signature moments, active states, and key highlights. Standard interactive elements use the Amber end as their primary flat colour; the full gradient is reserved for emphasis (active Grid connections, primary CTAs, Championship/Sovereign encounter framing).

#### Complement (Teal — Health, Positive)


| Token        | Hex     | Usage                                            |
| ------------ | ------- | ------------------------------------------------ |
| **Bright**   | #5eead4 | Health bars, positive indicators, success states |
| **Standard** | #2dd4bf | Standard positive elements                       |
| **Fill**     | #0d2e2a | Background fill for positive-highlighted areas   |


#### XP / Progress


| Token        | Hex     | Usage                                         |
| ------------ | ------- | --------------------------------------------- |
| **Gold**     | #d4a80a | Technician XP bar fill (per-level progress)   |
| **Gold Dim** | #a8860a | XP bar background, 30-tick breakpoint markers |


#### Danger and Warning


| Token               | Hex     | Usage                                                                                                         |
| ------------------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| **Danger**          | #ef5350 | Negative values, warnings, critical states                                                                    |
| **Caution (Amber)** | #d4a017 | Whole-board mood tint for building tension — shares the accent's amber end deliberately (see §61.9 Mood Tint) |


#### Borders


| Token       | Hex     | Usage                                                  |
| ----------- | ------- | ------------------------------------------------------ |
| **Default** | #28282c | 2px structural borders — panel edges, section dividers |
| **Medium**  | #38383e | Equipment slots, interactive element borders           |
| **Strong**  | #4a4a52 | Emphasized states, focus indicators                    |


#### Rarity Colours (names and borders only — never large surfaces)


| Tier         | Hex     |
| ------------ | ------- |
| **Initiate** | #a8a69c |
| **Magic**    | #42a5f5 |
| **Rare**     | #ffa726 |
| **Exotant**  | #c0c0c0 |
| **Unique**   | #ef5350 |
| **Apex**     | #d4a80a |


Relic tier deferred with Domains — colour reserved (#1a237e, midnight raven blue) for future expansion use.

#### Origin Colours


| Origin           | Hex     |
| ---------------- | ------- |
| **Scalesbourne** | #ff7043 |
| **Martial**      | #a8a69c |
| **Arcane**       | #ba68c8 |
| **Nocturne**     | #78909c |
| **Construct**    | #ffd54f |
| **Avatar**       | #4dd0e1 |
| **The Psi**      | #ab47bc |
| **Fae-Touched**  | #66bb6a |
| **Abyssal**      | #5c6bc0 |
| **Spectral**     | #4fc3f7 |


### 61.4 Colour Palette — Light Theme (Teal Glass)

A light theme option using teal as the primary accent with glass-style surface treatments. Glass accents apply across both themes but are more prominent in light mode.

Light theme colour values to be finalised during implementation. Dark theme is the primary design target. Light theme must maintain all readability and contrast requirements — rarity colours, Origin colours, and danger colours carry forward unchanged, with adjusted surface/text values for light backgrounds.

### 61.5 UI Register System — Five Registers

The Arcane Cartographer design system is the **fundamental underlying theme**, not a single flat expression. Five registers sit under it, all sharing colour tokens and spacing rules, varying in surface treatment, border style, and typography emphasis.


| Register        | Use                                                                                          | Treatment                                                                                                                                 |
| --------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Operational** | Default in-game UI (~80%): Active Squad, Backpack, Skill Cards, Game View HUD                | Clean panels, hard edges, data-dense — Arcane Cartographer as specified in §61.2-61.3                                                     |
| **Diagnostic**  | Systems-deep surfaces: Motherboard Grid, Forge Terminal, Cipher Network, Frontier, Registry  | More technical treatment, additional border detail, finer monospace usage — "inspecting a research instrument"                            |
| **Ceremonial**  | Codex entries, lore reveals, Circuit Champion/Region Sovereign reveals, Sealed Chambers      | Textured ink-border frames, optional display script (see §61.6), less data, more visual weight. Used sparingly — the rarity is the point. |
| **Tactical**    | Combat-state UI: skill bar, AoE indicators, damage numbers, status icons                     | High contrast, large-readable, optimised for split-second reading at battle zoom. Sharper than Operational, lower density.                |
| **Atmospheric** | Non-modal narrative overlays: NPC dialogue, environmental flavour, zone-transition narration | Glassmorphism-heavy, layered over the game world, biome-tinted, low-weight type — "the world is speaking to you"                          |


**Key principle:** UI may remain active while gameplay continues. Movement and skill inputs are accepted during animations and inventory-open states. Critical narrative animations are the exception.

**Note on glassmorphism scope:** The Atmospheric register is deliberately glassmorphism-heavy — this is an intentional exception to glassmorphism being tooltip-only elsewhere. Atmospheric surfaces (dialogue overlays, zone transition narration) are, by design, floating over the game world rather than being primary panel chrome, which is why they share glassmorphism's treatment with tooltips.

### 61.6 Typography


| Role                                      | Font                                            | Size    | Weight  | Usage                                                                                                                                      |
| ----------------------------------------- | ----------------------------------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Display + Title**                       | Hubot Sans (condensed stretch)                  | 18px+   | 700     | "MYTHORAS" in top bar, major display headings                                                                                              |
| **UI font**                               | Hubot Sans                                      | 10-14px | 400-600 | Section headers, navigation labels, buttons, stat labels, panel headers                                                                    |
| **Body text**                             | Inter                                           | 14px    | 400     | Long-form descriptions, narrative text                                                                                                     |
| **Mono data**                             | JetBrains Mono                                  | 13px    | 500     | ALL numbers without exception — stats, levels, currencies, coordinates, HP values                                                          |
| **Micro labels**                          | Hubot Sans                                      | 10px    | 600     | Panel header labels, badge text, uppercase with letter-spacing                                                                             |
| **Ceremonial display** (scoped exception) | TBD — Cormorant Unicase or Ogg Display (italic) | 24-32px | 500-600 | Circuit Champion/Region Sovereign reveals, Sealed Chamber entries, lore moments ONLY. Appears rarely so it lands with weight when it does. |


**Historical draft:** Cinzel was retired because it did not fit the now-retired Field Studio direction.

#### Typography Rules

- Hubot Sans (condensed) for game title and major display headings — NOT for body text
- JetBrains Mono for every number, no exceptions
- Section headers must be visually SMALLER than the content they label
- All navigation labels and panel headers are uppercase with letter-spacing 0.04-0.06em
- Panel header labels use micro label style (10px, 600 weight, uppercase)
- Ceremonial display face is a scoped exception — confirmed only for the Ceremonial register's highest-weight moments, never for standard UI

**Deferred typography consideration:** A paid font upgrade (Druk Condensed + Söhne, ~$700+) remains a post-MVP option if typography becomes a marketing pillar. Not evaluated for MVP.

### 61.7 Component Patterns

#### Panel Frame


| Property                   | Specification                                                                                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Background**             | Level 2 surface (#141518)                                                                                                                                 |
| **Border**                 | 2px default border (#28282c) on all edges                                                                                                                 |
| **Header**                 | Level 1 (#0f1012) background, 32px height, panel title in micro label style, green dot for active indicator, optional controls (fullscreen toggle, close) |
| **Content padding**        | 12px internal padding                                                                                                                                     |
| **Spacing between panels** | 4-8px gap (Level 0 void visible between panels)                                                                                                           |


#### Equipment Slots

Level 3 inset (#0c0d0f), 2px medium border (#38383e), inset box-shadow for "carved" look. Hover brightens border to teal complement. Empty slots show dim silhouette icons matching slot type.

#### Creature Cards (in Active Squad panel)

3px Origin-colour left bar, rarity-coloured name text, species name + level in JetBrains Mono, thin HP bar (teal fill on Level 3 inset background), Load indicator (green→yellow→orange→red inline marker). Selected creature highlighted with accent fill and accent border.

#### Stat Rows

Label left-aligned (secondary text colour), value right-aligned (JetBrains Mono, primary text colour). Bonuses displayed in teal complement, negatives in danger red. Row height 24-28px with subtle alternating background stepping for readability.

#### Rarity Badges

Small pill shape (2px radius max), rarity colour background, dark text inside. Used inline with item names and creature names.

#### Tooltips / Popovers (Glassmorphism)

Surface colour with 12px backdrop-blur, 60% opacity. 2px border (medium). Content follows standard typography rules. Rarity-coloured header bar for item tooltips. Quick-compare functionality for cross-creature gear evaluation.

#### Hover States

Every interactive element must visibly respond to hover — background shift and/or border brighten. No element should feel dead on hover.

#### Diamond Nodes

45-degree rotated squares. Regular zone nodes: 28-32px. Elite: 36px. Boss: 42px. Current position: accent-filled with double-outline at lower opacity. Connections: solid 2px between revealed nodes, dashed 1.5px to unrevealed. Completed nodes: dim. Encounter nodes: accent gradient. Vendor: teal. Elite: gold. Boss: danger red.

### 61.8 Creature Visual Language

The defining formula: Pokémon's colour discipline + one more colour + material richness + aggressive dynamic pose, delivered as a League-style poster.

#### The Six Rules

**Rule 1 — Silhouette first.** Every creature must be identifiable as a pure black silhouette. Shape carries identity before colour or detail.

**Rule 2 — The 3+1 colour rule.** Core identity uses 3 colours maximum, tied to the creature's Primary Stream. Plus 1 accent colour for energy/VFX/eyes/edge-light, signalling Channel or a special trait. The accent is the only "loud" colour.

**Rule 3 — Material richness, not colour chaos.** Depth through material and texture — fur sheen, scale, metal, crystal, energy translucency, edge lighting — NOT through more colours. Detail lives in rendering, surface, and light; identity stays in the 3+1 palette.

**Rule 4 — Aggressive dynamic posture.** Weight-shifted, mid-motion, confident. Flowing secondary elements. More Yu-Gi-Oh / PoE ascendancy than neutral catalogue pose. Creatures have presence and appeal.

**Rule 5 — League-style poster delivery.** Each creature ships as a hero poster: centred composition, dramatic lighting, signature VFX wrapping the figure. The poster IS the creature for most player-facing moments. Static portraits with a subtle animation layer:

- Idle breathing (subtle scale pulse)
- Floating secondary elements (drift)
- Energy/VFX loop (flame flicker, glow pulse)
- Eye glow
- Ambient particle drift

Delivers ~80% of full-animation emotional impact at ~15% of the production cost.

**Rule 6 — Ascension visual logic.** This is the **visual expression of the Principal system** (DOC_v3_new §15) — not a separate transformation mechanic. Base species has a clean, grounded version of its 3+1 identity. Principal specialisation keeps the core silhouette + palette but escalates every dimension: more elaborate VFX, richer material, more dramatic pose, intensified accent, new secondary elements. Permanent Principal commitment = full visual rebuild → new poster. Temporary/pseudo effects (buffs, transformations from specific mechanics) = VFX overlay on the base poster.

#### Creature Register — Bright/Dark Combination

Creatures have variable registers combining bright and dark elements — dark elements provide contrast, especially important for particle effects reading against both the creature and the world.

#### Reference Sources (Ingredients, Not Templates)


| Source                  | Contributes                                                                                                                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pokémon**             | Colour discipline, accessibility — NOT its depth ceiling                                                                                                                           |
| **Path of Exile 1 & 2** | Aesthetic identity, depth despite vastness, updated UI/skill iconography/VFX glow language. PoE1's smoother readability preferred for long sessions.                               |
| **Masters of Piece**    | Ink-line aesthetic (variable), floating-chunk elevation, diamond zone nodes, warm point-light accents, painterly grain, per-setting colour/lighting mastery, whole-board mood tint |
| **Into the Breach**     | Grid combat clarity, tile readability — BUT blind turn execution (NOT telegraphing, see §63.4)                                                                                     |
| **League of Legends**   | Splash-art poster model for creature delivery                                                                                                                                      |
| **Yu-Gi-Oh**            | Aggressive creature posturing, material richness over neutral catalogue poses                                                                                                      |


#### Production Order

```
silhouette sketch → 3+1 palette lock → AI generate base →
human pose/detail pass → style filter → poster composition →
subtle animation rig

```

Hero creatures (signature species, bosses, Apex) receive more human hand.

### 61.9 Whole-Board Mood Tint

A shader colour-grade over the entire scene communicates encounter stakes cheaply. Multiple states beyond simple danger:


| State        | Tint                     | Trigger                                                                               |
| ------------ | ------------------------ | ------------------------------------------------------------------------------------- |
| **Neutral**  | No tint                  | Standard exploration/combat                                                           |
| **Caution**  | Subtle amber wash        | Elevated Threat Attunement, elite encounter approaching                               |
| **Danger**   | Red wash (MoP-style)     | Boss encounters, Circuit Champion/Region Sovereign fights, Cipher L4 Volatile content |
| **Critical** | Intensified red, pulsing | Squad near-wipe state, final phase of major encounters                                |


Persona-inspired direction for further state variety is noted for future exploration — specific additional tint states (triumph, revelation moments) are a content-phase design item, not locked for MVP but the shader architecture should support additional states beyond the four above.

---

## 62. World Architecture — Persistent Scene

### 62.1 Core Decision

The world is treated as **one persistent Three.js scene** with three camera scales, rather than three separate views. The world is built once; rendered at different camera distances; LOD detail swaps by zoom level. Scenes as a concept are still available where narratively required (see §62.5) but the primary gameplay architecture is the persistent scene.


| Scale              | Zoom  | Content                                                                                              |
| ------------------ | ----- | ---------------------------------------------------------------------------------------------------- |
| **Regional Atlas** | ~0.1× | High-level diamond-node region map; terrain as flat coloured chunks; zone nodes as floating diamonds |
| **Zonal Map**      | ~1.0× | Playable zone; voxel tile chunks arranged as landscape; full play                                    |
| **Battle Arena**   | ~2.0× | Tactical grid focus on the encounter footprint                                                       |


The Regional Atlas is not a separate menu — it is the same scene with the camera pulled out. Transitions between scales are **camera tweens**, not scene reloads or fade-to-black.

### 62.2 Tile Manager (3 logical layers above the renderer)

1. **Regional Atlas** — region-level node map, low-detail terrain at extreme zoom
2. **Zonal Layer** — the playable zone, voxel chunks as landscape
3. **Tile Layer** — within each tile: Ground → Object → Entity → Effect

### 62.3 Obstacles vs Remnants (Data Model)


| Type          | Definition                                                                                                                   | Placement                           | Persistence                 |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------------------------- |
| **Obstacles** | Gameplay-affecting terrain: walls, deep water, hazards, elevation barriers                                                   | Procedural, per zone-type templates | Per-run                     |
| **Remnants**  | Persistent narrative/loot objects: ruined structures, broken statues, scorched campfires, ancestral markers, Sealed Chambers | Hand-placed for storytelling        | Persist state across visits |


Remnants are how the world feels authored and worth revisiting rather than a procedurally-shuffled treadmill.

### 62.4 Grounded vs Floating Elevation

Floating-chunk elevation is as important as the ink-line aesthetic. Chunks are designed to feel grounded in some areas and floating in others, matching the setting, with fixtures that aid the read (supports, roots, tethers for floating; embedded bases for grounded).

### 62.5 Scenes — Retained Where Required

Discrete scene rendering (separate from the persistent world scene) remains available for specific narrative or system contexts where a self-contained render target is genuinely needed — Landing page, Discipline selection, certain cinematic beats. This is not the primary architecture but a retained tool for cases where the persistent-scene model doesn't serve the content.

### 62.6 Panel Visibility by Zoom Level

Panels show/hide based on the current camera scale rather than a discrete "mode." At Regional Atlas scale, Zone/Sequence context panels are relevant. At Zonal Map scale, Active Squad and Backpack are primary. At Battle Arena scale, Tactical-register combat UI takes priority. This replaces the earlier two-mode (panel workspace / fullscreen) system with a continuous relationship between camera position and panel relevance.

**Note for implementation:** Exact panel-visibility rules per zoom threshold should remain loosely specified during design to avoid over-constraining build flexibility — the principle (panels respond to zoom) is locked; the specific thresholds and panel sets are an implementation-phase decision.

---

## 63. Rendering Approach — Voxel + Instancing

### 63.1 Instanced Rendering

One base tile geometry (extruded box). `THREE.InstancedMesh` renders thousands of instances with per-instance attributes (position, texture-atlas index, elevation, tint) in a single draw call — the core performance win.

### 63.2 Texture Atlas

All tile face textures (grass, stone, water, path, hazard, across all biomes) packed into one atlas. Each instance has a UV-offset attribute pointing to its region. One material, one draw call, thousands of distinct tiles.

### 63.3 Per-Object Instancing

Scales to objects: trees, rocks, Remnants, structures each as instanced mesh groups.

### 63.4 Selective Post-Processing

- **Cel-shading:** shared custom material across instances
- **Outline/ink pass:** post-processing across the scene, but selective (not global) per §61.2 hierarchy — thickness varies rather than uniform application
- Applies uniformly without per-object cost

### 63.5 LOD by Zoom


| Scale                 | Rendering                                 |
| --------------------- | ----------------------------------------- |
| Regional Atlas (0.1×) | Simplified merged terrain meshes per zone |
| Zonal Map (1.0×)      | Full instanced tiles, all face textures   |
| Battle Arena (2.0×)   | Same + additional effect-layer rendering  |


Scene graph does not reload between scales — only visible LOD changes, plus camera tween.

### 63.6 Performance Targets (mid-range machine, 60fps, r3f)

- 10,000+ instanced tiles
- 50+ animated poster billboards
- 500+ particles per frame

### 63.7 Painterly Grain

Variable painterly grain texture on surfaces achievable via shader rather than per-object texture work — a performant base voxel material with a grain shader pass, varied per biome.

### 63.8 Battle Arena Scaling and Tile Variety

Battles scale by tile count on the existing zone surface, not separate arenas or deeper zoom. Tile size stays constant (64×32) for the whole game.

**LOCKED correction:** Fixed 8×8 is retired. Footprints are variable and asymmetric, with adaptive continuity preserving location, fixtures, positions, and approach direction. Exact stage ranges below are draft guidance, not a fixed sizing contract.


| Stage | Footprint | Character                          |
| ----- | --------- | ---------------------------------- |
| Early | 4×4 – 5×5 | Smaller, simpler spatial decisions |
| Mid   | 6×6 – 8×8 | More terrain features matter       |
| Late  | 10×10+    | Terrain-heavy, hazard tiles        |


**Asymmetric, non-purely-rectangular arenas.** Arenas are not just wide and short in a uniform sense — extra space accommodates foliage and non-functional decorative tiles. As the player advances, battles become more varied in tile distribution and distance between features, while remaining mostly wide-and-long in overall footprint. This is more tactically varied than a purely symmetrical grid approach, while remaining approachable.

**Single height layer — no height-based movement.** Terrain height variation (visual elevation via voxel chunks) is purely visual and atmospheric. There is no elevation-based movement mechanic — no climbing, no height-advantage-to-move rules. This keeps tactical positioning legible while still allowing visually rich, varied terrain. (Note: this supersedes the earlier "Elevation affects tactical combat via positional accuracy/damage modifiers" language — elevation is visual only; the positional modifiers referenced in DOC_v2_new §17.1 — Flanking, Backstrike, Cornered — derive from grid position and facing, not tile height.)

The encounter footprint changes across repeat visits to the same biome — early-game arenas use small flat patches; later visits to the same biome use cliffs, waterfalls, and varied tile distribution as tactical surface, keeping a biome fresh across repeat encounters.

---

## 64. VFX — Priority Tiers

### 64.1 Tier 1 — Combat-feel Essentials (Build First)

- Hit flash on poster (white tint flash)
- Damage number popup (rising, fading, colour-coded by damage type)
- Camera shake — three intensities (tap / punch / quake)
- Hit stop (3–6 frame freeze on impact)
- Basic dust/spark particles

### 64.2 Tier 2 — Skill-type Identity

- Projectile travel along an arc (Bezier curve, particle trail) + impact burst
- AoE ground decal indicator
- Status effect particles (poison drip, burn ember, ice shimmer, shock arc)

### 64.3 Tier 3 — Environmental

- Water ripples + splash on Tidal moves (can flood a Path tile into Shallow Water for several turns)
- Ground cracks + debris + dust on Tectonic moves (persistent crack decal, optional visual elevation shift — not a movement mechanic, see §63.8)
- Smoke from fires
- Biome ambient particles (ash/snow/leaves/motes)

### 64.4 Skill Differentiation Principle

Battle animations are variable and distinctly detailed by Stream — sells Stream identity:


| Stream                      | VFX Signature                                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Projectile-based skills** | Arc + trailing particles, impact burst + tile flash + light shake                                    |
| **Tectonic**                | Slower wind-up, stronger camera shake, persistent ground-crack decal, dust cloud — must feel weighty |
| **Tidal**                   | Ripple shader + splash + optional tile state change                                                  |


Further Stream-specific VFX identity is expanded through content production, supporting environmental storytelling alongside skill identity.

---

## 65. Asset Pipeline — AI-Generated, Human Workflow

### 65.1 Principle

AI-generated art that feels human-made is achieved by structuring the pipeline around a human-made workflow, not raw generation.

```
AI generates raw concept → human positions/poses/dynamic-edits →
style filter enforces consistency (ink-line + grain, push toward target) →
bake into texture atlases

```

Most assets stay AI-generated-plus-filtered. Hero assets (signature creatures, signature environments, boss arenas) receive hand-painted attention.

**Recommended early approach:** Imitate the Masters of Piece production style directly as groundwork before introducing the full generative pipeline — establishing the target quality bar with a smaller, hand-guided initial pass before scaling to AI-assisted production.

### 65.2 Phased Rollout


| Phase                 | Assets                                                                |
| --------------------- | --------------------------------------------------------------------- |
| Phase 1 (Placeholder) | Geometric primitives, flat colours — focus on combat feel and systems |
| Phase 2 (Alpha)       | AI-generated-plus-style-filtered tile and creature atlases            |
| Phase 3 (Beta)        | Selectively hand-painted hero assets, full poster set                 |
| Phase 4 (Release)     | Animation rig polish, full effects                                    |


### 65.3 Asset Specifications

#### Tile Assets


| Property         | Value                    |
| ---------------- | ------------------------ |
| **Format**       | PNG                      |
| **Size**         | 64×32 pixels (base tile) |
| **Colour Depth** | 32-bit RGBA              |
| **Naming**       | `biome_type_variant.png` |


#### Creature Assets — Poster Model (Replaces Spritesheet)

Creature visual delivery uses the **poster model** (§61.8 Rule 5), not traditional spritesheet animation.


| Property            | Value                                                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Format**          | Layered PNG/PSD source → composited poster render                                                                                                                         |
| **Base delivery**   | Static hero poster, centred composition                                                                                                                                   |
| **Animation layer** | Subtle rig applied via layer tagging: idle breathing (scale pulse), floating secondary elements (drift), energy/VFX loop, eye glow, ambient particle drift                |
| **Combat states**   | Hit flash (colour overlay on poster), faint state (desaturation + collapse animation) — lightweight state changes on the poster rather than full frame-by-frame animation |


This replaces the earlier spritesheet specification (Idle/Attack/Hit/Faint frame sets) — the poster + subtle animation layer approach delivers comparable emotional impact at substantially lower production cost, appropriate for a small team.

#### UI Icons


| Property   | Value                                                                                  |
| ---------- | -------------------------------------------------------------------------------------- |
| **Format** | SVG (scalable) or PNG                                                                  |
| **Size**   | 16×16, 24×24, 32×32, 48×48                                                             |
| **Style**  | Consistent with Arcane Cartographer — hard edges, minimal detail, clear at small sizes |


### 65.4 Biome Colour Palettes

Biome palettes define atmospheric tinting for zone backgrounds. Reconciled with the design system's surface hierarchy — biome colours tint the game world, not the panel UI.


| Biome        | Primary | Secondary | Accent  | Atmosphere                 |
| ------------ | ------- | --------- | ------- | -------------------------- |
| **Verdant**  | #2d5a27 | #4a7c3f   | #8bc34a | Green, lush, organic       |
| **Ashfall**  | #4a2c2c | #6b3a3a   | #ff6b35 | Warm, volcanic, ember-lit  |
| **Glacial**  | #1a3a4a | #2c5a6a   | #64b5f6 | Blue, cold, crystalline    |
| **Tectonic** | #3a3020 | #5a4a30   | #a1887f | Brown, earthy, stone       |
| **Umbral**   | #1a1a2e | #2a2a4a   | #7c4dff | Purple, dark, void-touched |


Historical draft rationale: additional biome palettes supported the varied-environment goal associated with the now-retired Field Studio identity.

---

## 66. App Shell Architecture

### 66.1 Persistent Frame

**Historical shell behaviour (superseded):** The draft persistent frame was always visible regardless of scene state, with three horizontal bars:

```
┌──────────────────────────────────────────────────────────────┐
│  TOP BAR (44px)                                              │
├──────────────────────────────────────────────────────────────┤
│  INFO BAR (28px)                                             │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                    MAIN CONTENT AREA                          │
│              (persistent scene at current                     │
│                   camera scale, + panels)                     │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  TECHNICIAN XP BAR (8px)                                     │
└──────────────────────────────────────────────────────────────┘

```

Historical draft frame height: 44 + 28 + 8 = 80px. This permanent frame is superseded by World View / Workspace View.

### 66.2 Content Rendering

The main content area renders the persistent scene (§62) at whichever camera scale is active, with panels layered per §62.6. Discrete scenes (§62.5) retain a fullscreen takeover mode for the specific narrative/system contexts where they're used (Landing, Discipline selection, certain cinematics).


| Fullscreen Content       | When                                                     |
| ------------------------ | -------------------------------------------------------- |
| **Landing page**         | Game launch                                              |
| **Discipline selection** | Character creation                                       |
| **Motherboard Grid**     | When player opens the passive tree (Diagnostic register) |
| **Narrative screens**    | Discrete story beats, cutscenes                          |
| **The Proving**          | Trial content                                            |


Historical draft behaviour kept the persistent frame visible during fullscreen content; this is superseded and not locked.

### 66.3 Panel Configuration

> **SUPERSEDED SHELL:** Configuration now belongs to player-invoked Workspace View. World View has no permanent surrounding management-panel frame.

Players configure their panel workspace through a **Panels sidebar** — slide-in overlay (right side, ~200px width).


| Configuration Feature | Description                                               |
| --------------------- | --------------------------------------------------------- |
| **Toggle panels**     | Turn panels on/off. Active panels show a green indicator. |
| **Save Layout**       | Save current panel configuration as a named preset        |
| **Load Layout**       | Load a saved preset                                       |
| **Default Layout**    | Reset to default                                          |
| **Reset Layout**      | Clear all customisation                                   |


**STALE MVP constraint:** Fixed panel sizing belonged to the retired permanent shell and is not locked for Workspace View.

### 66.4 No Bottom Bar

No persistent bottom navigation bar. All navigation and panel management is handled through the Panels sidebar and direct interaction with panel content, plus the zoom-based panel relevance system (§62.6).

---

## 67. Panel System

> **SUPERSEDED:** The permanent panel layout below is retained as draft history. In locked direction, World View dominates by default; these surfaces appear only in player-invoked Workspace View or dedicated deep-system workspaces.

### 67.1 Available Panels


| Panel                 | Default Active                        | Position (Default Layout)          | Description                                                                                                 |
| --------------------- | ------------------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Game View (stale shell term)** | Superseded by World View / Workspace View | Historical draft position: top row, ~63.5% height | Retired permanent-shell treatment; world now dominates by default. |
| **Active Squad**      | Yes                                   | Bottom-left, ~55% width            | 5 creatures with HP bars, Load indicators, status effects. Selecting a creature drives Creature Gear panel. |
| **Backpack**          | Yes                                   | Bottom-right, ~45% width           | Limited in-field storage for loot. Crafting via direct Agent application.                                   |
| **Zone/Sequence Map** | No (toggleable)                       | Configurable                       | Current zone/section position + broader regional context                                                    |
| **Creature Gear**     | No (toggleable)                       | Configurable                       | Tabbed: Tab 1 Unit Detail, Tab 2 Gear                                                                       |
| **Skill Cards**       | No (toggleable)                       | Configurable                       | Skill Card and Support Card management                                                                      |
| **Dev Tools**         | No (toggleable)                       | Configurable                       | FPS, telemetry, collision detection                                                                         |
| **Motherboard Grid**  | N/A (fullscreen, Diagnostic register) | Takes over main content area       | Full passive tree view                                                                                      |


**Additional Hideout-only access:**


| Feature            | Access Method                         | Description                                                       |
| ------------------ | ------------------------------------- | ----------------------------------------------------------------- |
| **Stash**          | Available when in Hideout             | Full item storage, expanded from Backpack                         |
| **Forge Terminal** | Interact with static Hideout location | Modal, Diagnostic register — Agent/ReAgent/DeAgent query-building |


### 67.2 Default Layout

```
┌──────────────────────────────────────────────────────────────┐
│  TOP BAR                                         [Panels] [⚙]│
├──────────────────────────────────────────────────────────────┤
│  INFO BAR: Campaign • Greenhollow • Lv.1-5      ◆ 0   T.1  │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                      GAME VIEW                               │
│         (persistent scene — Zonal Map camera scale)          │
│                        ~63.5%                                │
│                                                              │
├───────────────────────────────┬──────────────────────────────┤
│       ACTIVE SQUAD             │         BACKPACK              │
│        (~55% width)           │         (~45% width)          │
├───────────────────────────────┴──────────────────────────────┤
│  XP BAR                                                       │
└──────────────────────────────────────────────────────────────┘

```

### 67.3 Panel Behaviour

#### Panel Headers

32px header bar: green dot, panel title (micro label style), optional fullscreen toggle, close button. Game View header cannot be closed.

#### Panel Interaction

Clicking within a panel makes it "focused." Active Squad: click selects creature. Backpack: click shows tooltip, right-click for context menu. Game View: standard game interaction per current camera scale.

#### Battle State

**SUPERSEDED:** Combat normally uses most of the viewport in World View. It may also run in Workspace View, where player-configured docks can remain visible. There is no mandatory persistent surrounding-panel frame.

### 67.4 Panels Sidebar

Slides in from right (~200px width). Content: Layout Management (Save/Load/Default/Reset), View Options (Panel Headers toggle), Available Panels list with Active/Inactive toggles.

---

## 68. Game View Panel — Persistent Scene Rendering

The Game View panel renders the persistent scene (§62) at whichever camera scale is active. This section covers rendering behaviour at each scale.

### 68.1 Regional Atlas Scale (Exploration Macro)


| Element              | Detail                                                              |
| -------------------- | ------------------------------------------------------------------- |
| **Content**          | Region-wide diamond-node map, zone nodes as floating diamonds       |
| **Node states**      | Locked, Open-empty (accessible), Cleared                            |
| **Waypoint markers** | Bright accent diamond, fast-travel enabled                          |
| **Encounter flags**  | Exhibition, Rival, Circuit Champion, Region Sovereign icon overlays |


### 68.2 Zonal Map Scale (Primary Exploration)


| Element                 | Detail                                                                                                     |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Zone header**         | Overlaid top-left — zone name (Hubot Sans 20px), biome + level range in JetBrains Mono                     |
| **Background**          | Atmospheric gradient, biome-appropriate tinting per §65.4                                                  |
| **Section states**      | Empty, Populated (skippable), Forced, Boss, Cleared — visual distinction per state                         |
| **Spillover indicator** | Visual weight accumulation shown on adjacent sections as pressure builds toward the Pressure Cap threshold |
| **Content centring**    | Content centred within panel; letterboxing with Level 0 void if aspect ratio mismatches                    |


### 68.3 Battle Arena Scale (Tactical Register)


| Element                  | Detail                                                                                    |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| **Tactical grid**        | Isometric diamond grid, size varies per §63.8 (4×4 early to 10×10+ late)                  |
| **Creature positions**   | Player creatures left side, enemy creatures right side. HP bars above poster              |
| **Skill bar**            | Overlaid bottom of Game View — Tactical register, high contrast, split-second readability |
| **Turn order**           | Hidden from players (blind turn execution, §62 and DOC_v4_new §23.4)                      |
| **AoE preview**          | Valid target tiles highlight on skill selection                                           |
| **Domain visualisation** | Coloured tile overlays with radius and duration counter                                   |
| **Warbanner radius**     | Subtle radius overlay centred on carrier creature                                         |
| **Combat log**           | Compact scrolling text at edge of Game View                                               |


#### Battle-to-Exploration Transition


| Phase               | Behaviour                                                                                                         | Duration                |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------- |
| **Resolution beat** | Final battle action completes. Grid holds briefly.                                                                | ~600ms                  |
| **Content swap (draft)** | Reversible transition back to traversal treatment while preserving spatial continuity; no mandatory surrounding frame. | ~300ms draft timing |
| **Reward feedback** | XP, NEM, resource changes animate on persistent HUD. Loot animates into Backpack panel.                           | ~800ms ticker, parallel |
| **Movement reveal** | New valid movement highlights on zone map                                                                         | Within 500ms            |


No reward modal, no forced confirmation click. This is a camera tween within the persistent scene, not a scene reload — reinforcing the architecture from §62.

**Failure case:** On squad wipe, transitions to the run-end screen (separate specification).

### 68.4 Character Engagement (Diorama Rendering)

Non-combat interactions (NPCs, Scout NPCs, vendors, Forge Terminal approach) render as small isometric dioramas within the Game View panel at Zonal Map scale — focused scenes maintaining the persistent scene's visual language rather than switching to a separate visual-novel style.


| Element              | Detail                                                                 |
| -------------------- | ---------------------------------------------------------------------- |
| **Scene scale**      | Small isometric environment within the existing scene, same projection |
| **Scene framing**    | Centred within Game View, Level 0 void surrounding                     |
| **Camera behaviour** | No rotation. Slight ambient zoom-in on entry (~5% over 400ms)          |
| **Persistent frame** | Unchanged, remains visible                                             |


#### Dialogue & Choice Overlays (Atmospheric Register)


| Element            | Position                                     | Style                                                        |
| ------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| **Speaker name**   | Above dialogue block                         | Hubot Sans 16px, accent gradient                             |
| **Dialogue text**  | Lower third, dark gradient backing           | Inter 14px, body text colour                                 |
| **Choice buttons** | Below dialogue, stacked vertically           | Diamond Rule affordances, Atmospheric register glassmorphism |
| **Background dim** | Diorama dims to ~70% opacity behind overlays | —                                                            |


**MVP constraint:** Diorama scenes are template-based — a small library of reusable templates covers MVP narrative content. Bespoke dioramas reserved for major beats.

---

## 69. Passive Elements (Persistent HUD)

### 69.1 Top Bar (44px)


| Element             | Position | Content                                                        |
| ------------------- | -------- | -------------------------------------------------------------- |
| **Logo + Title**    | Left     | Mythoras logo icon + "MYTHORAS" in Hubot Sans 18px, weight 700 |
| **Panels Button**   | Right    | Opens/closes Panels configuration sidebar                      |
| **Settings Button** | Right    | Opens settings overlay                                         |


Level 1 surface background, 2px default border on bottom edge.

### 69.2 Info Bar (28px)


| Element              | Position     | Content                            | Font                |
| -------------------- | ------------ | ---------------------------------- | ------------------- |
| **Phase Badge**      | Left         | "CAMPAIGN" or "ENDGAME" pill badge | Micro label         |
| **Current Location** | Left-centre  | Zone name + level range            | Hubot Sans 12px     |
| **NEM**              | Right-centre | Currency icon + amount             | JetBrains Mono 13px |
| **Technician Level** | Right        | "T.34"                             | JetBrains Mono 13px |


### 69.3 Technician XP Bar (8px)

Tracks progress to next Technician level only. Fills empty→full, resets on level-up.


| Property             | Value                                      |
| -------------------- | ------------------------------------------ |
| **Height**           | 8px                                        |
| **Fill colour**      | Gold gradient (#a8860a → #d4a80a)          |
| **Background**       | Level 1 surface                            |
| **Breakpoint ticks** | 30 evenly-spaced tick marks                |
| **Tooltip on hover** | Exact XP values in JetBrains Mono          |
| **Level-up reset**   | Bar empties, refills toward next threshold |


#### Technician XP Scaling

100 levels total. ~1,000,000 cumulative XP. Front-loaded curve, accelerating from ~Level 25 onward.


| Level Range | XP Per Level (Approx)       | Curve Character                  |
| ----------- | --------------------------- | -------------------------------- |
| **1-10**    | Low (~200-800)              | Fast early progression           |
| **11-25**   | Moderate (~1,000-3,000)     | Steady campaign pacing           |
| **26-50**   | Escalating (~3,500-8,000)   | Late campaign into early endgame |
| **51-75**   | High (~9,000-15,000)        | Mid endgame                      |
| **76-99**   | Very high (~16,000-25,000+) | Deep endgame grind               |
| **100**     | N/A (cap)                   | Final level                      |


XP bar uses gold, distinct from the amber/magenta accent gradient — no conflict with interactive highlighting.

---

## 70. System-Specific UI

### 70.1 Creature Gear Panel (Tabbed)

#### Tab 1: Unit Detail


| Section                     | Content                                                                                                                                                 | Display            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| **Identity**                | Species name (Hubot Sans 16px), Origin badge, rarity badge, Creature Level                                                                              | Header area        |
| **Stream Info**             | Primary + Secondary Stream with colour indicators. Stream Signature name and current state (e.g., "Voltaic Signature: 83rd percentile roll qualifying") | Below identity     |
| **Attributes**              | Authority, Invictus, Animus, Order — base + bonus breakdown in JetBrains Mono. Bonuses teal, penalties red.                                             | Stat rows          |
| **Defensive Stats**         | Armour, Evasion, Barrier, Oura, Elemental Resistance, Phenomena resistance (name/model TBD). Each with value and source breakdown on hover. | Stat rows |
| **Offensive Stats**         | Damage, crit chance, crit multiplier, accuracy, attack speed                                                                                            | Stat rows          |
| **Load Meter**              | Visual bar (green→yellow→orange→red) with percentage                                                                                                    | Footer area        |
| **Species Mods**            | Currently rolled species mods (notables highlighted, small passives dimmer). Max 2 implicit slots displayed.                                            | Expandable section |
| **Combat Archetype Status** | Displays current archetype tier progress (Tier 1/2/3), squad composition contribution if applicable                                                     | Expandable section |


#### Tab 2: Gear


| Section                  | Content                                                                                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Slot Grid**            | 10 equipment slots arranged visually. Level 3 inset, 2px medium border. Empty slots dim silhouette. Filled slots show item icon with rarity-coloured border. |
| **Selected Item Detail** | Full tooltip: name, rarity badge, mods with tier indicators, implicit, base type                                                                             |
| **Quick-Compare**        | Comparison tooltip when hovering Backpack items (green/red arrows per stat)                                                                                  |
| **Equip Action**         | Right-click item → "Equip to [Creature Name]"                                                                                                                |


### 70.2 Backpack Panel (In-Field Inventory)


| Property               | Value                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------ |
| **Grid**               | Inventory grid cells — Level 3 inset, 1.5px borders                                                    |
| **Item Display**       | Item icon with rarity-coloured border. Glassmorphism tooltip on hover.                                 |
| **Sort/Filter**        | Sort by rarity/slot/level. Filter by slot/rarity/stream affinity.                                      |
| **Crafting**           | Direct Agent application: right-click → "Apply Agent" → select → confirm. ReAgent/DeAgent in sub-menu. |
| **Capacity Indicator** | "12 / 30" counter in header                                                                            |


#### Stash (Hideout Extension)

Backpack panel gains expanded capacity, stash tab organisation, and full crafting access when in Hideout.

### 70.3 Active Squad Panel


| Element                  | Content                                                                                                                           |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| **Creature Cards**       | 5 slots vertical. 3px Origin-colour left bar, species name + level, rarity badge, HP bar (teal fill), Load indicator (colour dot) |
| **Empty Slots**          | Dim outline with "+"                                                                                                              |
| **Selection**            | Click selects (accent fill + border). Drives Creature Gear panel.                                                                 |
| **Status Effects**       | Active ailments/buffs as small icons beside HP bar during combat                                                                  |
| **Deployment Indicator** | Deployment checkboxes during encounter setup                                                                                      |


### 70.4 Forge Terminal (Hideout Modal, Diagnostic Register)

Accessed by interacting with a static Hideout location. Large modal overlay (~80% viewport, glassmorphism dimming).


| Section                     | Content                                                      |
| --------------------------- | ------------------------------------------------------------ |
| **Item Slot**               | Central workpiece slot                                       |
| **Agent Selection**         | Left panel: available Agents                                 |
| **ReAgent Selection**       | Optional modifier below Agent                                |
| **DeAgent Selection**       | Optional filter below ReAgent                                |
| **Query Preview**           | Assembled query in readable form                             |
| **Mod Pool Viewer (Codex)** | Right panel: every mod that can roll, tier access, weighting |
| **Execute**                 | Confirm button. Shows CC (Computer Cycles) fuel cost.        |
| **History**                 | Scrollable operation log                                     |


### 70.5 Decryption Display


| Encryption State                  | What Player Sees                                 |
| --------------------------------- | ------------------------------------------------ |
| **Fully Encrypted**               | Rarity border colour only                        |
| **Partially Decrypted (Endgame)** | Mod count, best mod tier, mod category icons     |
| **Fully Decrypted**               | All mods with full text, tier indicators, values |


### 70.6 Loot Accumulation UI


| Feature                  | Implementation                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| **During zone**          | Loot auto-collects into Zone Loot Cache. Never interrupts mid-zone.                        |
| **Zone completion**      | End-of-zone review window — accumulated drops with quick-compare                           |
| **Cipher completion**    | Cipher Results Panel                                                                       |
| **Instance persistence** | Cache persists briefly after exiting                                                       |
| **Volume display**       | Individual item entries. Currency auto-consolidates. Rarity highlighting on notable drops. |


### 70.7 Entity Popovers & Tooltips

Glassmorphism popovers (12px backdrop-blur, 60% opacity, 2px medium border).


| Entity Type       | Popover Content                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Gear Item**     | Name, rarity badge, base type, mods with tier indicators (T1-T7), implicit, item level                             |
| **Creature**      | Species, Origin badge, Variant badge, Primary/Secondary Stream, HP/Load, equipped Skill Cards, species mod summary |
| **Skill Card**    | Name, attribute colour, level, tags, effect description, Polarity allocation, Breakthrough status                  |
| **Mod (on item)** | Name, tier, value range for current roll, mod group, prefix/suffix                                                 |
| **Support Card**  | Name, category, effect description, frequency tag                                                                  |
| **Func**          | Colour category, size, regional influence radius, implicit, listed nodes                                           |


### 70.8 Warbanner, Inscription & Domain Visualisation

#### Warbanner Radius

Subtle radius overlay centred on carrier creature, coloured to Warbanner type at low opacity. Allies within radius show buff icon.

Lanes reservation for active Warbanners shown in the Resource section of Unit Detail tab — a portion of the Lanes bar shown as "reserved" (accent gradient fill vs teal available).

#### Inscription Placement

Similar visual language to Domain placement but distinct icon set — tile-placed or target-placed depending on Inscription variant, with a duration counter for time-limited effects.

#### Domain Placement

Placement preview: centre tile selector, radius preview colour-coded to Domain type, Concentration/Expansion indicator, duration counter, effect icon on all creatures within radius.

### 70.9 Load System Display


| Location               | Display                                                                       |
| ---------------------- | ----------------------------------------------------------------------------- |
| **Active Squad panel** | Colour-coded dot: Green (0-39%), Yellow (40-59%), Orange (60-79%), Red (80%+) |
| **Unit Detail tab**    | Full Load bar with percentage. Tooltip explains current penalties.            |
| **Creature portrait**  | Load indicator visible during battle                                          |


### 70.10 Variable Secondary Stream Display


| Location            | Display                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------- |
| **Unit Detail tab** | Primary + Secondary Stream with colour indicators. Rare Secondary highlighted/badged.         |
| **Creature poster** | Accent colour shift on visual (trim, eye glow, markings, energy effects) per Secondary Stream |
| **Registry**        | Species Database shows all possible Secondaries with rarity weighting                         |


### 70.11 Registry Panels


| Tab                        | Content                                                                                  |
| -------------------------- | ---------------------------------------------------------------------------------------- |
| **Species Database**       | All species captured — Origin, Streams, Species Tier, habitats, Frame silhouette preview |
| **Creature Level Tracker** | Level and XP progress, sortable                                                          |
| **Mod Pool Viewer**        | Species mod pool contents, weights, tier ranges, progressive reveal                      |
| **Contract Inventory**     | Current Contract stock by variant (Standard through Lucky Roll)                          |
| **Capture Log**            | All owned creatures, filterable                                                          |
| **Intel Reports**          | Scouting Reports and gathered field intel                                                |


---

## 71. Technical Stack

### 71.1 Core Technologies


| Technology                       | Role                                                             | Version       |
| -------------------------------- | ---------------------------------------------------------------- | ------------- |
| **Tauri**                        | Desktop runtime                                                  | Latest stable |
| **React 18+**                    | UI framework                                                     | 18+           |
| **Three.js** (react-three-fiber) | 3D rendering, persistent scene, tile rendering, creature posters | r3f latest    |
| **Zustand**                      | State management                                                 | Latest        |
| **Tailwind CSS**                 | Utility styling                                                  | Latest        |
| **Framer Motion**                | Animation — panel transitions, tooltips, UI feedback             | Latest        |
| **GSAP**                         | Camera tweens between scales, cinematic sequences                | Latest        |


### 71.2 Application Architecture

```
<TauriApp>
  <GameStateProvider>

    <PersistentFrame>
      <TopBar />
      <InfoBar />
    </PersistentFrame>

    <MainContentArea>
      {isFullscreen ? (
        <FullscreenContent>
          {fullscreenType === 'grid' && <MotherboardGrid />}
          {fullscreenType === 'landing' && <LandingPage />}
          {fullscreenType === 'narrative' && <NarrativeScreen />}
        </FullscreenContent>
      ) : (
        <PersistentScene cameraScale={currentScale}>
          {/* Regional Atlas / Zonal Map / Battle Arena — one scene, camera tween */}
          <PanelRenderer layout={currentLayout} zoomLevel={currentScale}>
            <GameViewPanel />
            <ActiveSquadPanel />
            <BackpackPanel />
            {panels.zoneMap && <ZoneMapPanel />}
            {panels.creatureGear && <CreatureGearPanel />}
            {panels.skillCards && <SkillCardsPanel />}
            {panels.devTools && <DevToolsPanel />}
          </PanelRenderer>
        </PersistentScene>
      )}
    </MainContentArea>

    <XPBar />

    <ModalManager />
    <TooltipManager />
    <PanelsSidebar />

  </GameStateProvider>
</TauriApp>

```

### 71.3 Panel Layout Engine

CSS Grid with defined template areas. Panel gap 4-8px (Level 0 void visible). Minimum panel size enforced per panel type. Layout presets stored as JSON configuration.

### 71.4 Resolution & Responsive Behaviour


| Property              | Value     |
| --------------------- | --------- |
| **Primary target**    | 2560×1440 |
| **Standard support**  | 1920×1080 |
| **Minimum supported** | 1280×720  |


Game View panel maintains priority at low resolutions. Tauri provides native DPI scaling. Zoom control for the game world (0.5×–2.0×) independent of UI scaling.

### 71.5 State Management


| State Domain                    | Store                  | Persistence      |
| ------------------------------- | ---------------------- | ---------------- |
| **Game State**                  | Zustand main store     | Save file        |
| **Camera Scale / Panel Layout** | Zustand UI store       | User preferences |
| **Combat State**                | Zustand combat store   | Session only     |
| **Tooltip State**               | Zustand tooltip store  | Session only     |
| **Settings**                    | Zustand settings store | User preferences |


---

## 72. Onboarding & System Introduction

Systems are introduced through gameplay during Region 1, not tutorials or text dumps. Pacing follows R1 zone progression (DOC_v4_new §25).

### 72.1 Introduction Sequence


| Zone Range                        | Systems Introduced                                                                                                                             |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Greenhollow (Zone 1)**          | Movement, basic encounters, first capture (Contract Offer, Mark mid-combat), Skill Card equipping, basic combat. Active Squad panel explained. |
| **Briarwood (Zone 2-3)**          | First intel accumulation (passive), Backpack/loot management. Creature Gear panel introduced.                                                  |
| **Dustrun Trail (Zone 4-5)**      | Grid investment (first Motherboard Grid points), creature levelling, Tonic system, Zone Modifiers                                              |
| **Stillmere Fen (Zone 6-7)**      | Species Mods revealed, Stream Alignment through gameplay, Variable Secondary Streams, spillover/skipping mechanics                             |
| **Cairn Ridge (Zone 8-9)**        | Func drops, Docket socketing on Grid, deeper crafting (Agent application in Backpack)                                                          |
| **Duskwatch (Zone 9)**            | Circuit Champion Hale encounter — full squad management test                                                                                   |
| **Bridgewatch**                   | Scout NPC, Scouting Reports, non-Standard Contracts unlock                                                                                     |
| **Post-Bridgewatch (Zone 11-13)** | Polarity system, Warbanner introduction, Domain Skill Cards, Inscriptions. Forge Terminal access at Thornwall.                                 |
| **The Proving Hall**              | Region Sovereign Seren, Principal system unlock, Command Deck introduction                                                                     |


### 72.2 Onboarding Principles

- **Show, don't tell.** Systems introduced by giving the player the relevant item/resource and letting them use it.
- **One system per zone cluster.** Never introduce two complex systems simultaneously.
- **Compound rewards at gates.** Circuit Champion and Region Sovereign encounters provide multiple system rewards simultaneously, creating memorable milestone moments.
- **The panel workspace teaches itself.** New panels appear when relevant.

---

## 73. MVP Priorities & Build Order

### 73.1 Priority Tiers

#### Tier 1 — Core Loop (Must Ship)


| System                                                              | Status              |
| ------------------------------------------------------------------- | ------------------- |
| Persistent scene architecture (3 camera scales) + panel workspace   | Architecture        |
| Section-based zone traversal                                        | Game View rendering |
| Turn-based grid combat (Turn Program — Planning + Execution phases) | Game View rendering |
| Creature capture (Contract Offer, Mark, 7 Contract variants)        | Core mechanic       |
| Skill Card equipping and levelling via Skill Frame                  | Core progression    |
| Motherboard Grid (basic allocation, Dockets/Funcs)                  | Core progression    |
| Gear equipping (10 slots per creature)                              | Core itemisation    |
| Agent-based crafting (basic: Scramble, Compile, Inscribe)           | Core crafting       |
| Region 1 campaign (Greenhollow → The Proving Hall)                  | Content             |
| Save/Load system                                                    | Infrastructure      |


#### Tier 2 — Depth Systems (Should Ship)


| System                                                          | Status               |
| --------------------------------------------------------------- | -------------------- |
| Stream Signature (all 11 streams)                               | Combat depth         |
| Combat Archetype system (framework + initial content)           | Combat depth         |
| Species Mod pools (cluster jewel architecture, max 2 implicits) | Creature depth       |
| Variable Secondary Streams                                      | Capture depth        |
| Support Card linking via Skill Frame                            | Skill depth          |
| Polarity system                                                 | Skill depth          |
| Dockets + Funcs (Grid depth)                                    | Grid depth           |
| Load system                                                     | Squad management     |
| Warbanner system                                                | Squad tactics        |
| Inscriptions                                                    | Combat tactics       |
| Domain deployment                                               | Combat tactics       |
| Forge Terminal                                                  | Crafting depth       |
| Decryption (partial)                                            | Loot evaluation      |
| Zone/Sequence Map panel                                         | Navigation           |
| Creature Gear panel (tabbed)                                    | Equipment management |
| Scouting and Intel system                                       | Progression depth    |


#### Tier 3 — Polish & Expansion (Nice to Have at Launch)


| System                                  | Status                 |
| --------------------------------------- | ---------------------- |
| Skill Cards panel                       | Management convenience |
| Skill Card Transcendence                | Endgame progression    |
| Principal system (The Proving)          | Endgame progression    |
| Command Deck                            | Late R1 / endgame      |
| Cipher Network (basic — L1-L2)          | Endgame content        |
| Frontier (Network passive tree)         | Endgame content        |
| Panel layout save/load presets          | UI convenience         |
| Light theme (Teal Glass)                | Accessibility          |
| Dev Tools panel                         | Development            |
| Loot accumulation (Zone Cache)          | Quality of life        |
| Sealed Chambers                         | Optional content       |
| Ceremonial register full implementation | Visual polish          |


### 73.2 Build Sequence


| Phase       | Focus                                                                                 | Deliverable                          |
| ----------- | ------------------------------------------------------------------------------------- | ------------------------------------ |
| **Phase 1** | Persistent scene architecture + panel workspace + Game View rendering                 | Playable shell with zone traversal   |
| **Phase 2** | Combat system (Turn Program) + creature management                                    | Turn-based battles, squad management |
| **Phase 3** | Progression systems (Grid, Skill Frame, levelling)                                    | Character building functional        |
| **Phase 4** | Itemisation + crafting (gear, Agents, Forge)                                          | Loot loop functional                 |
| **Phase 5** | Content (R1 zones, encounters, Athletic Circuit)                                      | Campaign playable                    |
| **Phase 6** | Depth systems (Signatures, Archetypes, Species Mods, Dockets/Funcs)                   | Build diversity                      |
| **Phase 7** | Endgame (Ciphers, Principals, Command Deck, Frontier)                                 | Replayability                        |
| **Phase 8** | Polish (tooltips, loot accumulation, panel presets, light theme, Ceremonial register) | Ship quality                         |


### 73.3 Suggested Visual Vertical Slice Order

1. Voxel tile system — extruded box geometry, face texture support, cel-shader + selective outline pass
2. Camera scaling architecture — one scene, smooth tweens between Regional/Zonal/Battle scales
3. Tile manager — axial coords, layered rendering
4. Single creature poster billboard + HP bar on a tile
5. Basic combat resolution — move and attack on the grid
6. VFX Tier 1 — combat-feel essentials
7. AI asset pipeline — generate → human pass → style filter → atlas
8. Section transition tween + spillover prototype

After these: one zone, one creature, one encounter, confirmed identity. Everything else is content production against a proven engine.

---

## Part VI Summary

The Technical Design of Mythoras establishes a **persistent scene architecture** with three camera scales (Regional Atlas, Zonal Map, Battle Arena) connected by camera tweens, wrapped in a configurable panel workspace — no scene reloads, no discrete view-switching for the primary gameplay loop.

**Historical Design System (retired):** Field Studio / Arcane Cartographer draft, preserved for reference only. The umbrella identity and permanent shell are superseded; individual visual ideas are not locked.

**Creature Visual Language**: Six-rule system — silhouette first, 3+1 colour rule, material richness over colour chaos, aggressive dynamic posture, League-style poster delivery with subtle animation layer, Ascension visual logic (the visual expression of the Principal system).

**World Architecture**: One persistent Three.js scene, three camera scales, no reloads. Obstacles (procedural, per-run) vs Remnants (hand-placed, persistent). Grounded and floating elevation. Discrete scenes retained for specific narrative contexts.

**Rendering**: Voxel + instancing. InstancedMesh, texture atlas, selective post-processing (cel-shading + hierarchy-based outline). Single height layer — no height-based movement. Asymmetric, tile-varied battle arenas scaling 4×4 to 10×10+.

**VFX**: Three priority tiers — combat-feel essentials, skill-type identity, environmental. Stream-differentiated animation weight.

**Asset Pipeline**: AI-generated + human workflow. Poster model replaces spritesheet animation for creatures. MoP-style groundwork recommended before full pipeline scaling.

**App Shell**: Persistent frame (80px) wrapping persistent scene + panels. Panel visibility responds to camera zoom level. No bottom bar.

**Panel System**: 7 panels + 1 fullscreen (Diagnostic register). Default layout: Game View, Active Squad, Backpack.

**System UI**: Forge Terminal (Diagnostic), Backpack crafting, glassmorphism popovers, partial decryption, loot accumulation via Zone Cache.

**Tech Stack**: Tauri + React 18 + Three.js (r3f) + Zustand + Tailwind + Framer Motion + GSAP (camera tweens). Resolution 2560×1440 primary, 1280×720 minimum.

**Onboarding**: Systems introduced through R1 gameplay, one cluster per zone group.

**MVP Build Order**: Persistent scene shell → Combat → Progression → Itemisation → Content → Depth → Endgame → Polish.

---

**End of Part VI: Technical Design**