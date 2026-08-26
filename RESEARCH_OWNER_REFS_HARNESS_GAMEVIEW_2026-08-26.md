# Owner dump — harness, Game View, inventory, VFX (2026-08-26)

**Status:** Inspiration / borrow-candidates only. **Not Mythoras canon. Not a spec. Do not implement from this file.**  
**Date:** 2026-08-26  
**Audience:** Later client Game View, inventory/stash, VFX, 2D overlay scenes, and *agent harness* design. ADE continues independently. Godot stays parked.

Owner asked for a catalogue pass (**don't edit** the client / ADE / POSTURE). This file is the catalogue.

Claims below are tagged **FACT** / **INFERENCE** / **SECONDARY**. Steal / ignore / park is the last section.

---

## Question

What did the owner share (X, Substack, GitHub, screenshots)? What is each project, factually? Which craft ideas are steal-candidates for Mythoras, mapped onto existing vocabulary (Creature, Zone, Tile, Skill Cards, Turn Program, Protocol, Attributes Authority / Invictus / Animus / Order, creature-local Gear) without inventing new terms or locking stack?

Live prototype rails used as mapping (repo FACT, not claims about the refs):

- [`POSTURE_REQUIREMENTS.md`](apps/mythoras-client-prototype/POSTURE_REQUIREMENTS.md): copy Darkest Dungeon 1 **including the theme**, then peel; Neidfyre = **plating / border only**; board = 3D isometric voxel / MoP family; HUD must not show Program / Skill Frame; right panel is **exactly Map | Inventory**.
- [`CONTEXT.md`](CONTEXT.md): Mythoras is **not** a universally dark game; Skill Cards are **creature-local**; Turn Program = Planning then Execution (Q10 automatic Speed order); Gear is creature-local; campaign with endgame, not a roguelike.
- Inventory next-pass (owner, not yet implemented): **Path of Exile / Grim Dawn multi-spatial stash**, not 1×1 icon cells. Working HUD size mentioned in prior session: **12 columns × 7 rows**. Orthogonal **Zone** map only — never diagonals. Game View parked unless leftover after the console.

---

## Sources

### Fetch method (X)

Direct `x.com` HTML is often 403. Tweets retrieved **2026-08-26** via `api.fxtwitter.com` (code 200) unless noted. Videos were **not** transcoded; findings use tweet text + thumbnails + owner captions + (where useful) GitHub / Steam / Substack primaries.

### High-trust per topic

| Topic | Primary | Secondary (labelled) |
| --- | --- | --- |
| Harness vs model | [jpschroeder 2091920006829199772](https://x.com/jpschroeder/status/2091920006829199772) | — |
| Grim Dawn inventory | Owner screenshot `assets/image-82e2fd83-…jpg` | Crate forum + GD inventory-management video (SECONDARY, space numbers) |
| Crayon | [usecrayon.ai](https://usecrayon.ai); [aniketjart 2092066012241985711](https://x.com/aniketjart/status/2092066012241985711); [@usecrayon](https://x.com/usecrayon) | — |
| Sketchpunk IK | [2091216069184627096](https://x.com/SketchpunkLabs/status/2091216069184627096) quoting Saba Danelia / Crunio | — |
| Sketchpunk GAS | [2092126075849511392](https://x.com/SketchpunkLabs/status/2092126075849511392) | Claude artifact (not fetched) |
| Neidfyre 2D UI | [clemmygames 2091299426849407193](https://x.com/clemmygames/status/2091299426849407193) | Prior POSTURE (Neidfyre = plating only) |
| xikhar voxel | [2092355609203187949](https://x.com/xikhar/status/2092355609203187949); [2091653378225127902](https://x.com/xikhar/status/2091653378225127902) | Quote-tweet Godot move — **not** a Mythoras stack change |
| MoP Game View | [imgame_official 2089539120184111304](https://x.com/imgame_official/status/2089539120184111304) | Existing [`RESEARCH_MOP_POE_DD_PROTOTYPE_PRIORITIES_2026-08-16.md`](RESEARCH_MOP_POE_DD_PROTOTYPE_PRIORITIES_2026-08-16.md) |
| Ng skills map | [AndrewYNg 2090840747738374568](https://x.com/AndrewYNg/status/2090840747738374568) (X article body) | Prior map tweet 2088302050706686198 (linked in article) |
| Fire Field | [Steam app 4527100](https://store.steampowered.com/app/4527100/Firefield); [five settings](https://robeoffire.substack.com/p/five-settings-that-let-me-work-with); [I stopped learning tools](https://robeoffire.substack.com/p/i-stopped-learning-tools-i-started); [boxes moving](https://robeoffire.substack.com/p/i-typed-make-me-something-like-diablo); owner images 4–8 | KoreaGameDesk interview (SECONDARY) |
| NicolasZu assets | [2084617741835579734](https://x.com/NicolasZu/status/2084617741835579734); [2091765370499600520](https://x.com/NicolasZu/status/2091765370499600520) | Prior [`RESEARCH_X_REFS_PALETTE_ASSET_PIPELINE_2026-08-11.md`](RESEARCH_X_REFS_PALETTE_ASSET_PIPELINE_2026-08-11.md) |
| Battle VFX | [chirovisuals 2091854746550226995](https://x.com/chirovisuals/status/2091854746550226995); [achrefelouafi/LinearAbilityExtThreeJS](https://github.com/achrefelouafi/LinearAbilityExtThreeJS) | Prior chiro note in [`RESEARCH_INSPIRATION_LINKS_2026-08-14.md`](RESEARCH_INSPIRATION_LINKS_2026-08-14.md) |
| Unity skills | [github.com/Unity-Technologies/skills](https://github.com/Unity-Technologies/skills) README + `skills/` listing 2026-08-26; `skills/ui/SKILL.md` | Sunny Valley tweet screenshot (may lag the repo) |
| Quadcode | [quadcode.ai](https://quadcode.ai/) marketing page | — |
| Frontend Lego | Owner-attached Machina post (`beautifului.dev` etc.) | — |

Owner Substack home URL `https://substack.com/home/post/p-202738746` did not resolve to a unique public slug in this pass. Content matches the **Robe of Fire** series the owner also linked; treat the two `robeoffire.substack.com` URLs + “I Stopped Learning Tools” as the primary text.

---

## Per-item findings

### 1. Justin Schroeder — harness vs model

https://x.com/jpschroeder/status/2091920006829199772  
**Fetched:** api.fxtwitter.com 200. **Created:** Mon Aug 24 2026. Two videos (~99s + ~54s).

**FACT.** Text: *“Perfect demonstration of how the harness affects results.”* Controlled comparison: **same model, same one-shot prompt, same provider/quant, same system prompt** — **only the harness differs.** Closing line: *“Everyone underestimates the harness.”* Author: Justin Schroeder (Standard Agents / dmux, FormKit, ArrowJS).

**INFERENCE for Mythoras.** This is the strongest single answer to the owner’s “Harness might make game dev better potentially?” The delta is not “get a better model”; it is **skills, tools, eval loop, and workspace shape**. That maps to Unity’s skill pack, Ng’s eval-driven development, NicolasZu’s Codex-augmented tools, and Fire Field’s custom editor — not to a new Game View costume.

**Steal:** treat Mythoras agent work as **harness-first** (domain skills that encode CONTEXT locks, ADE IA, HUD posture).  
**Do not steal:** shopping for a new commercial game-gen product as a substitute for CONTEXT.

---

### 2. Grim Dawn — character window + multi-spatial inventory (Image 2)

Local primary: owner screenshot.

**FACT (from the shot).** One large orthogonal character window in four quadrants over an isometric world, plus a separate ornate bottom HUD:

| Quadrant | Job |
| --- | --- |
| Top-left | Paper doll + equipment slots around a 3D model |
| Top-right | Stats (tabs I / II / III), core attributes, resources, OA/DA/DPS/armor, resistance row |
| Bottom-left | Class/build text + currency |
| Bottom-right | **Tetris / multi-spatial inventory** — mixed 1×1 stacks, 2×1, 2×2, 2×3; bag tabs |

Bottom HUD: red Health + teal Energy bars, central level medallion, two hotkey rows. Style is **rendered metal / stone**, not DD’s sketched gothic. UI vertices are right-angled.

**SECONDARY (inventory space, not from the screenshot).** A Grim Dawn inventory-management video claims starting bag **96 cells**, quest bags **64 each**, stash tabs **216** cells. Use only as “GD is generous vs PoE’s 12×5 personal inventory,” not as Mythoras numbers.

**Steal candidates (HUD inventory, later):**

- **Multi-spatial items** (w×h cells, no overlap) — this is what the owner meant by “inventory is not 1×1 icon cells.” Same family as Path of Exile stash.
- **Paper doll as a different surface** from the stash grid. Mythoras Gear is **creature-local** (CONTEXT): a selected-creature doll + that creature’s kit is closer than a Technician-global wardrobe.
- Orthogonal window chrome. Density. Resistance/stat *inspector* as a later tab — not this prototype’s right panel (right panel is Map \| Inventory only).

**Do not steal:**

- Grim Dawn’s **real-time ARPG HUD** (skill hotkeys 1–0, DPS as a live combat read) as the DD plate. Turn Program stays under the hood; it is not a hotbar shooter.
- GD’s rendered-metal costume replacing the DD gothic tracing.
- Four-quadrant character sheet eating the 3D Game View. Owner already said: pack the **existing plate**, do not add an extra outer window.
- Physique / Cunning / Spirit as Mythoras attributes (AUTH / INV / ANIM / ORD stay).

---

### 3. Crayon (`@usecrayon`) + Aniket J DBZ runner

https://x.com/usecrayon — bio FACT: *“Crayon is an AI game engine that helps anyone turn ideas into beautiful, playable web games.”* Site: https://usecrayon.ai  
https://x.com/aniketjart/status/2092066012241985711 — **Created:** Tue Aug 25 2026.

**FACT (site).** Prompt-to-playable web games; 2D/3D toggle; arcade publish; “without the complexity of learning a game engine.” Founder conversation cited on-site (Vibecode.game / YGG, 16 July 2026).

**FACT (Aniket tweet).** Fan **DBZ runner** updated with Goku flying. Stack named: **Crayon “new pro harness”**, **Three.js**, **Opus 5**. IP disclaimer in the tweet.

**INFERENCE.** Crayon is a **closed game-gen harness** (idea → playable link). The “pro harness” is the interesting bit for Mythoras, not the arcade. Same lesson as Schroeder: harness changes output. Crayon’s product goal (skip engines) fights Mythoras’s need for a **thin ADE + authored dictionaries**.

**Steal:** existence proof that a **game-specific harness** (not a generic chat) can drive Three.js iteration.  
**Do not steal:** Crayon as the Mythoras client; prompt-to-Steam as the campaign; DBZ (or any third-party IP) as creature art.

---

### 4. SketchpunkLabs — Unreal GAS companion in Three.js

https://x.com/SketchpunkLabs/status/2092126075849511392  
**Created:** Tue Aug 25 2026.

**FACT.** Open-source demo: Claude public artifact `b9f872c0-9e51-4c43-a99e-d02e5c312962`. Text: QuodSoler’s series on building combat with **Unreal GAS** is the reference; VoR + Opus made a **Three.js companion** so people can poke the innards. Tags: `#threejs #gamedev`. Photo of a greybox combat UI.

**Steal:** **read a heavy engine’s combat architecture, re-express it in a pokeable web demo** — same pattern as Mythoras greybox (systems first, Godot later). GAS as *reading material* for “abilities as data + tags + cues,” not as the combat model (Mythoras already has Skill Cards / Support Cards / Stream Tags).  
**Do not steal:** Unreal GAS, real-time ability graphs, or this demo’s layout as the HUD.

---

### 5. SketchpunkLabs — IK / animator / traversal goal

https://x.com/SketchpunkLabs/status/2091216069184627096  
**Created:** Sat Aug 22 2026. Quotes Crunio on **Saba Danelia**’s UE5 Traversal System.

**FACT.** VoR’s goal: reach that quality with **custom IK + animator in Three.js**. Current blockage: **state machine + controller** that switches animations cleanly. Quote FACT (JP, Crunio): the noteworthy part is not move-count but **terrain- and input-driven custom clips chained smoothly**.

**Steal (much later, creature motion):** state machine as a craft problem; IK for feet on voxel steps.  
**Park / do not steal now:** AAA traversal, vaulting mannequins, unlocked camera. Owner already: **MoP-style Game View + lock camera freedom**. Squad combat on a discrete tile board does not need UE5 parkour. Do not spend prototype budget here.

---

### 6. Clemmy / Neidfyre — 2D UI scenes (list only, do not build)

https://x.com/clemmygames/status/2091299426849407193/video/1  
**Created:** Sat Aug 22 2026. ~24s trailer. ~49k views.

**FACT (tweet copy).** Turn-based **duel dungeon crawler** in a cursed land. Parry / break stances for crits. **Relics define combat style.** Title: **Neidfyre**.

**FACT (POSTURE, already locked).** Neidfyre is **plating and border only**. Do not copy 1v1 corridor, Strike/Guard duel list, or cursed-land identity.

**INFERENCE — 2D UI scene list for later (owner: list, don’t create).** These are *candidate overlay contexts*, not a build order. Names use Mythoras vocabulary where the scene maps; Neidfyre-only scenes are marked ignore.

| Scene | Job | Mythoras mapping | Steal / ignore |
| --- | --- | --- | --- |
| Combat plate | Always-on squad/creature chrome under the board | Already tracing DD1 | Steal **frame density**, not 1v1 |
| Keyword glossary | Named mechanics resolve in-plate | POSTURE already requires this | Steal |
| Relic / kit inspect | Found items that change combat style | Creature-local **Gear** + Skill Cards | Steal *job*, not relic UI |
| Title / continue | Campaign entry | Technician campaign, not roguelike run | List later |
| Town / hub talk | NPC, shops | Zone hub; Protocol voice | List later |
| Map / expedition | Where you are | HUD **Zone** graph (orthogonal rooms + halls) | Steal job; ignore diamond nodes |
| Stash / inventory | Carry | Multi-spatial grid (PoE/GD family) | Steal job |
| Creature inspect | Portrait, skills, stats | Left plate already; deeper inspect later | List later |
| Skill install | Equip skills | Skill Frame is **not a HUD tab name** this pass | Park as 2D scene, not combat chrome |
| Warbanner / opt-in modifier | Harder fight, better loot | CONTEXT Warbanner | List later |
| Results / loot | After battle | Creature-local drops | List later |
| Settings / keybinds | — | — | List later |
| Stance / parry duel | Neidfyre combat identity | — | **Ignore** |
| Compare-my-move-vs-telegraph as required centre | Optional later | POSTURE: not this posture’s gate | Park |

---

### 7. Harness for concept art we can build from

Owner note (not a URL): harness might make game dev better; concept art for **creatures, gear**; PoE 2 static-asset inspirations; Pokémon creature-fusion inspirations.

**FACT (adjacent primaries in this dump).** NicolasZu: ImageGen → `img2threejs` → animate. xikhar: still concept art *then* in-engine voxel scenes. Fire Field: custom in-game editor instead of learning Unity/Unreal. Schroeder: harness delta.

**INFERENCE.** The pipeline that fits Mythoras is **authored identity → still → greybox mesh**, not “Opus dumps 1000 creatures.” CONTEXT already has species tags, Origin, Primary/Secondary Stream. Fusion (Pokémon) is a **species-combination metaphor** for later creature authoring — it is **not** a catch/fuse product. PoE 2 stills are a **gear icon / unique-item silhouette** bar for the stash, not a 3D renderer lock.

**Steal:** a **Creature / Gear stills lab** as a Codex-augmented tool (NicolasZu pattern) that emits meshes matching ADE dictionaries.  
**Do not steal:** Pokémon as the game; PoE 2 as the engine; uncurated image dumps as the creature bible.

---

### 8. xikhar — isometric voxel concept (Image 3)

https://x.com/xikhar/status/2092355609203187949  
**Created:** Tue Aug 25 2026. Four stills. Quotes own Godot move tweet.

**FACT.** *“Made concept art for game. I really need to rethink the scale.”* High-angle isometric **voxel architecture**: terraced stone, water, glowing portal, tiny character vs huge stairs, pink-block trees. Day and night palettes. Quote-tweet FACT: *“moved from Three.js to Godot. you can literally make games with AI now.”*

**Steal (Game View, parked):** **presence and scale** — landmarks bigger than the creature; portal / fixture as a readable goal; grid blocks that still feel like a place. This is the “ok-ish board needs more MoP/xikhar presence” note, not a costume swap.  
**Do not steal:** Godot *now* (POSTURE: Godot later). Do not treat “rethink the scale” as “tiny character in a vast empty void.” Mythoras fights read on a **discrete tile board**.

---

### 9. xikhar night clip + Master of Piece — Game View shaping

https://x.com/xikhar/status/2091653378225127902/video/1 — **FACT.** *“The night grows cold. Stay by the fire.”* ~12s. Quotes the same Godot-move tweet.  
https://x.com/imgame_official/status/2089539120184111304/video/1 — **FACT.** Master of Piece EA trailer: *“I'm gonna summon Into the Breach, Inscryption and Slay the Spire fans.”* Steam app 3009310 in bio. ~24s.

**INFERENCE.** Owner: *“Potentially we can get Game View to start shaping like this.”* Combined with POSTURE: voxel / MoP **camera family**, locked (not free), tile-anchored facts. Prior MoP research already said: steal **tiling / VFX-as-board-state / restraint**, **not MoP’s UI layout**.

**Steal:** isometric cube tiles, lighting that sells a place (fire, night), units sitting on tiles.  
**Do not steal:** MoP deckbuilder, Into the Breach 1-unit puzzles, Inscryption card table, Slay the Spire map as the HUD Zone graph. Do not unlock the camera because a tweet has a cinematic orbit.

---

### 10. Andrew Ng — AI Engineering Skills Map (does this help?)

https://x.com/AndrewYNg/status/2090840747738374568  
**FACT.** X article: *“AI Engineering Skills Map: Building and Deploying AI Applications.”* Highest-level map (from prior article): (i) building/deploying AI apps, (ii) software engineering fundamentals, (iii) using coding agents, (iv) shaping the build. This piece fleshes **(i)**.

Subskills named in the article body:

1. LLM foundations  
2. Grounding models with data  
3. Building agentic systems (workflows vs **agent harness**; tools, MCP, memory, multi-agent)  
4. **Evaluation-driven development** (called out as the trait that distinguishes people who are great at this)  
5. Operating in production  
6. Machine learning foundations  

Key sentence FACT: AI output is unpredictable, so skilled engineers **iterate by examining intermediate results and deciding what to try next**. Evals make that systematic.

**Does this help?** **Yes, for the harness — not for the Game View.** It is a vocabulary for how Mythoras should run agents: CONTEXT + POSTURE as grounding; ADE/client **evals** (does the plate still hide “Turn Program”? is the Zone map orthogonal? do items occupy w×h cells?); skills as the harness, not a bigger model. It does **not** choose gothic vs voxel vs inventory size.

---

### 11. Fire Field (Robe of Fire) — another solo ARPG, continuous improvement

**FACT (Steam app 4527100, store copy via search + Substack footers).** Early Access **2026-05-08**. Developer **Robe of Fire**. Dark fantasy ARPG homage to **Diablo / Ultima Online** (1997 Rainz / Fire Field incident). Custom engine + map editor; **no Unity / Unreal**. Claims ~120k lines, Claude Code as partner, 95-language UI. Loop: town → descending dungeon floors → loot / spells / boss.

**FACT (Substack — five settings, 2026-06-14).** Non-coder, 10–12h workdays. Settings: (1) sound when the agent finishes, (2) kill permission prompts once trusted, (3) TTS for long replies, (4) voice input (Aqua Voice), (5) many-button mouse so hands barely move. Thesis: **environment you can keep showing up to**, not willpower.

**FACT (Substack — I stopped learning tools, 2026-06-21).** Town placement via chat coordinates failed. Built an **in-game editor**: drag-drop, resize, **grid snap**, live. Editor also AI-built. Thesis: **building the missing tool is faster than learning someone else’s engine.**

**FACT (Substack — boxes moving, 2026-06-11).** First prompt: *“Make me a game like Diablo. Three floors underground. Generate the map automatically.”* Five minutes later, boxes moved. Skill that mattered: **how you ask**, not writing code.

**FACT (owner images 4–8).** In-game editor (left tools, right tile palette, isometric grid cursor, D2-like globes + INV/SKL/QUE). HUD before/after: thinner bar, more world visible, ornate statues. Split map (orthogonal platforms) vs battle view. Box prototype with HP orb + minimap.

**Steal:**

- **Custom tool for the painful loop** (zone/town placement) — rhymes with ADE + OD-009 fixture grammar, not with “delete engines.”
- **HUD compacting** (Fire Field before → after): same owner complaint as “full height / leftover Game View.” Steal the *move* (thinner chrome, more board), not the globes.
- **Orthogonal dungeon graph** as a persistent map read — supports the HUD Zone map (rooms + H/V halls, no diagonals).
- Continuous improvement toward **a game they want to play themselves**.

**Do not steal:**

- Diablo real-time hack-and-slash as Mythoras combat.
- HP/MP globes, INV/SKL/QUE chrome, or “AI wrote every line / no human spec” as a process flex (Mythoras has CONTEXT, ADRs, ADE IA).
- Unity/Unreal red-X marketing as ADE policy.
- Fire Field’s story, Rainz incident, or 90s-retro identity.

---

### 12. NicolasZu — assets, then “Codex as engine”

https://x.com/NicolasZu/status/2084617741835579734 — **FACT.** Prompt: *“Use the ImageGen skill to generate a low-poly 3D mining rig, then use img2threejs to build it. Allow me to animate it with a button.”* GPT-5.6 Sol (High). Follow-up to a cheaper Luna workflow (faceted tree). Viewer buttons: Reference / Stop / Hide / Run drill / Explode.

https://x.com/NicolasZu/status/2091765370499600520 — **FACT (note tweet).** *“Codex has become a real game engine… If you take the time to make it become one.”* Four steps: (1) custom tool for a job (e.g. buildings that match art direction), (2) open it in a **worktree**, (3) attach the browser view to the thread, (4) **pin** the thread. Then improve the tool *while using it*. `/yeet` to PR. Tool list: Linear, marketing, 9-language loc, audio, buildings, procedural zombies, env/map, analytics, late-game perf.

**Steal:** **Codex-augmented labs** (Building Lab analogue → Creature Lab / Gear Lab / Zone Lab) that match ADE dictionaries. ImageGen → mesh as a **greybox volume** path, already noted 2026-08-11.  
**Do not steal:** low-poly toy industrial look as Mythoras tone; “Codex is the engine” as a stack lock; exploding mining rigs as combat VFX.

---

### 13. chirovisuals — battle VFX (important)

https://x.com/chirovisuals/status/2091854746550226995  
Source FACT: https://github.com/achrefelouafi/LinearAbilityExtThreeJS  

**FACT (tweet).** Extended Three.js VFX playground. **10** real-time customizable abilities: **3 radial, 3 boosts, 3 portals, 1 linear cast.** Model used: **Minimax-M3**. *“Everything you see is generated: no textures, no sprite sheets, no baked meshes. hand-written GLSL, GPU-simulated instanced particles, world position resolved in the vertex shaders.”*

**FACT (README, fetched 2026-08-26).** “Elemental Sandbox.” Seven named casts + five aim languages:

| Key | Ability | Aim family |
| --- | --- | --- |
| Q | Pyre Crown | far / ring-on-floor |
| E | Kraken Crown | far |
| R | Electrical Sphere | far |
| F | Earthen Spire | **line cast** |
| V | Verdant Gate | **gate cast** (standing structure) |
| X | Tidewrought Ring | **ring cast** (forged lying down, hinges up) |
| Z | Fire Portal | **scribe cast** (hole in the air, no ground footprint) |

Boosts B / M / K (electric / magic / fire) can stack. **P** pauses sim while sliders still reshape. Character FBX is the only mesh-on-disk exception.

This **extends** the 2026-08-14 chiro/Majid note (six abilities → this roster + explicit aim families).

**Steal (later battle VFX, not this HUD pass):**

- Skill readability as **silhouette + timing**, not a sprite sheet.
- **Aim language as data:** line vs far-circle vs gate vs ring vs scribe — useful if Skill Cards have range / footprint. Tile-anchored MoP principle still wins for “this tile is now true.”
- One trick per skill (already in prior research).
- Pause-and-sculpt as an ADE preview *idea*, not v1.

**Do not steal:** real-time LoL skillshots as Turn Program; dark void sandbox as Zone look; 15 schools / this roster as Streams (Mythoras already has 11 damage types).

---

### 14. Unity official skills + Quadcode — skills that shape systems

**Unity — FACT (README + `skills/` listing 2026-08-26).** Install: `npx skills add Unity-Technologies/skills`. Compatible with Cursor / Claude Code / Copilot / etc.

Live folders (not identical to the Sunny Valley screenshot table):

`ui` (router), `ui-uitk`, `ui-ugui`, `ui-imgui`, `unity-cli`, `unity-package-management`, `new-unity-project`, `build-live-game`, `implement-in-app-purchases`, `levelplay-unity-integration`, `setup-multiplayer-services`, `setup-vivox-voice-chat`, `shader-graph-create-custom-node`, `validate-urp-render-graph-renderer-feature`, `urp-postprocessing`, `sprite-editor`, `physics-3d-collision`, `initialize-ai-navigation`, `optimize-audio`, `optimize-text-mesh-pro`, `optimize-web`, `localization`.

**FACT (`skills/ui/SKILL.md`).** Router: detect UITK vs uGUI vs IMGUI from files/keywords, then hand off. Scope discipline: “working UI” ≠ add scripts; generation creates only requested files. Follow project patterns first.

Sunny Valley screenshot listed `layout` / `element` / `canvas` / `editor` / `physics-3d` / `navmesh` / `vfx-graph-master-node`. **INFERENCE:** marketing/table snapshot; live repo uses the folder names above. Do not treat the screenshot as the API.

**Quadcode — FACT (quadcode.ai).** Commercial “agentic IDE”: specialized agents (DEVELOPER / DESIGNER / MOTION-DESIGNER), multi-model, MCP. Marketing claims games among apps. Not an open skill pack like Unity’s.

**INFERENCE (Matt Pocock–shaped skills).** The useful pattern is **narrow skills that encode how *this* system is allowed to change** — Unity’s `ui` router is the template. Mythoras equivalents would be skills that refuse to put “Turn Program” on the HUD, refuse diagonal Zone maps, refuse 1×1-only inventory, refuse Channel-as-defence, etc. Quadcode is a **product-shaped harness**; Unity skills are a **repo-shaped harness**. Schroeder says the harness is the delta. Ng says evals make iteration non-random.

**Steal:** write **Mythoras domain skills** (combat locks, HUD posture, ADE IA, creature-local gear) the way Unity wrote `ui` / `physics-3d-collision`.  
**Do not steal:** Unity as the game engine; Quadcode as the ADE; IAP/ads skills; shadcn/SaaS component kits as the combat plate (POSTURE already bans functional-slate).

---

### 15. Extra owner chat (Image 13) — map, Mario, RTS, frontend Lego

**FACT (owner messages in the attached chat screenshot).**

- Map: *“potential here for map but would want to feed it into the MoP Style and lock camera freedom”* + SeloSlav clip.  
- Mario clip (theo).  
- *“Potential RTS mechanics when managing like selecting multiple units in battle, etc.”*  
- Machina (@EXM7777): send agents `beautifului.dev`, `beui.dev`, `rareui.com`, `transitions.dev`, `ui.shadcn.com` — fetch components, integrate into an existing foundation.

**Steal:** **locked camera + MoP tile language** for the Game View (already POSTURE). Multi-select as a **maybe** for 3 Field creatures (squad, not RTS army).  
**Do not steal:** free cinematic camera; RTS drag-box as the combat identity; **SaaS/shadcn taste on the gothic plate.** Machina’s Lego workflow is for **agent-facing / ADE / marketing** UIs, not Vernon.

---

## Steal / ignore / park (synthesis)

### Steal now (when the owner says execute — still not this file)

1. **Multi-spatial inventory** in the PoE / Grim Dawn family (items occupy w×h; no 1×1 icon sheet). Paper doll = selected creature’s Gear, not a fourth HUD window.  
2. **Orthogonal Zone map** (rooms + H/V halls). Fire Field’s rectilinear platforms support this.  
3. **Pack the DD plate** (Fire Field HUD compacting as the *move*: more board, less chrome).  
4. **Harness-first** (Schroeder + Ng + Unity `ui` router + NicolasZu labs): domain skills + evals, not a new model.

### Steal later (parked)

5. **Game View presence** (xikhar scale, MoP tiles, fire/night lighting). Camera stays locked.  
6. **chiro VFX** as Skill Card readability (line / far / gate / ring / scribe + tile-anchored persistence).  
7. **2D overlay scene list** (§6) — menus/contexts, not combat chrome.  
8. **Creature / Gear stills lab** (ImageGen → mesh, PoE2 silhouette bar, fusion as species-combination *authoring*, not product).  
9. **Custom editors for painful loops** (Fire Field town editor ↔ ADE / OD-009).  
10. **GAS-as-reading** (Sketchpunk Three.js companion) for ability-as-data, not Unreal.

### Ignore

- Neidfyre 1v1 / parry / relics-as-identity.  
- Grim Dawn / Diablo / Fire Field real-time hotbar combat.  
- Crayon / Quadcode / “delete the engine” as the stack.  
- xikhar Three.js→Godot as a now-decision.  
- IK parkour / unlocked camera.  
- shadcn / Beautiful UI as the combat plate.  
- “Turn Program” / Skill Frame as HUD nouns.  
- Diagonal zone graphs; CONTEXT diamond nodes on this HUD.

---

## What this pass did not change

No client, ADE, or POSTURE edits. Next implementation order remains whatever the owner already locked for the console (pack plate → orthogonal Zone map → 12×7 multispatial stash) when they say go. Game View and VFX stay parked behind that.
