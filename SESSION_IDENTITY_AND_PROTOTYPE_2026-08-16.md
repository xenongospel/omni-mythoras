# Session Handoff — Identity, Reference Weighting & Prototype Philosophy (2026-08-16)

Consolidation of a long working session so nothing gets lost if context resets. Read this before resuming identity/prototype work.

## 1. Corrected reference weighting (this was wrong earlier in the session — fix it)

Earlier framing treated Darkest Dungeon as the dominant reference. **Corrected by the owner: Master of Peace (MoP) is the primary reference, especially for battle** — this was underplayed. Full weighting:

- **Master of Peace — primary, battle + gameplay layout.** 3D zone-based world, combat staged on the explored zone (not a cutaway arena), the actual game-loop/layout backbone. This is the main structural reference, not a secondary inspiration.
- **Darkest Dungeon — secondary, principles not literal look.** The useful ideas are: a roster band that never disappears (visible in camp/travel/combat alike), position-in-line as a real mechanical fact, painterly mood carried by art rather than UI chrome volume, full-screen dedicated moments for inventory/etc. rather than permanent side panels. NOT a mandate for grimdark tone or DD's literal parchment/ink look.
- **Path of Exile — progression depth, kept off the moment-to-moment screen.** Dense itemization/crafting/atlas numbers belong on dedicated gated screens, not on the combat view itself.
- **Pokémon — narrative/brand premise, not mechanics.** A trainer-and-squad, athletic-tournament-journey feeling, in a world that reads as more "real"/grounded than Pokémon's own art style. Informs tone/stakes, not iconography.

## 2. Guiding philosophy correction — prototype rough and fast, not polished

The owner explicitly does **not** want the prototype to reach Darkest Dungeon–level polish, and isn't concerned about that gap. What matters: nailing fundamental principles and understanding what the game needs to look like, even roughly, before polishing anything.

Cited reasoning:
- **Thronefall's developer** has spoken about a previous game failing partly from not prototyping enough — he since builds many rough 2D prototypes to find what fails early, before investing in polish. Thronefall itself is also a stated visual/asset/feel reference the owner is interested in as an initial basis for Mythoras.
- **Slay the Spire's** development process (including the studio's newer, more transparent approach with Slay the Spire 2) involved rapid, rough prototype cycles to validate systems fast, before building polished versions.

**Practical implication:** subsequent prototype work should optimize for fast iteration and answering "does this fundamental system/feel work" — not for visual fidelity. Don't gate progress on making placeholder art look good.

## 3. Standing rules established this session (do not relitigate)

- **Confirm before spending any costly agent generation** (see memory `feedback_confirm_before_spending_oneshot.md`, hardened after two repeat violations) — show the exact brief, wait for explicit go-ahead in a separate turn, even if the user's phrasing sounds like authorization.
- **Never launch an agent without telling the user what it will produce first.**
- **CSS/HTML cannot fake game concept art** (memory `feedback_css_cannot_fake_game_art.md`) — don't render creatures/scenes as div blobs and gradients. Either use real reference footage/frames, or build in an actual rendering engine (Three.js), or ask what art tool to use.
- **Attributes are fixed:** Authority (AUTH), Invictus (INV), Animus (ANIM), Order (ORD) — never invent alternates. Colors are open for reconsideration (DOC_v3.md's existing Red/Amber–Yellow/Green–Purple/Violet–Blue/Cyan mapping is a documented default, not settled canon — owner said they're "not a fan" of it).
- Two earlier 5-concept identity artifacts (a general UI/identity pass, then a combat-scene-specific pass) were both rejected and are fully dead — never resurrect any part of them. The combat-scene one's *prose* (camera/mood descriptions) had real value as creative writing; its CSS rendering did not.

## 4. Prototype status

- `apps/mythoras-mde` (data/fixture authoring tool) — **deleted by the owner.**
- `apps/mythoras-ade-prototype` (Tauri systems editor) — **kept**, untouched this session.
- `apps/mythoras-client-prototype` — **new, created this session.** Bun + TypeScript + Vite + Three.js, no engine, no React. Bare scaffold: orthographic isometric camera, flat ground plane, 5 placeholder cylinder units (3 Field triangle formation, 2 duller/smaller Bench off to the side), basic directional+hemisphere lighting, OrbitControls. Verified rendering via live browser screenshot (not just build success) — confirmed working but deliberately generic/default-Three.js-looking: dead void background, flat lighting, icon-like ground silhouette. Owner's reaction: "a long way from Darkest Dungeon... What's the plan?" — prompted this consolidation and the reference-weighting correction above.
- Run: `cd apps/mythoras-client-prototype && bun install && bun run dev`, open `http://localhost:5173/`.

## 4a. Corrections to the research pass (2026-08-17, after reading `RESEARCH_MOP_POE_DD_PROTOTYPE_PRIORITIES_2026-08-16.md` together)

These override anything in that file that conflicts:

- **Tile-based battle is confirmed, not open.** MoP's grid/tiling system is the close 1:1 reference for the battle system itself (the owner specifically also referenced MoP's "bridge breach" as a synonymous representation), not just a donor of VFX language. Build the tile generator as the actual foundation.
- **No enemy-intent telegraph by default.** Opposite of where the research pass's Slay the Spire section leaned. An optional toggle is fine; default is hidden intent. This is a stated design decision, not an open question to A/B blind.
- **Gear is its own system, separate from skills-as-equippable-objects.** The research pass conflated these. Mythoras already has a real gear-slot system (Weapon/Offhand/Helmet/Boots/Imprint Interface/Symbiotic Slot per `CONTEXT.md` "Creature Equipment Slot Volume") independent of the skill-loadout system. Skills borrow the "equip an object" metaphor; gear is not that same system.
- **Orbs/crafting currency is already solved.** The existing Agent/DeAgent/ReAgent system already is the dual/multi-utility, minimize-agent-count design shape the research pass was speculating toward from scratch (§3.3). Don't re-derive this.
- **Open, not yet decided:** the actual crafting *verb* pool, and which verbs touch which entity types (skills, ciphers, gear, others). Needs a dedicated session.
- **Genre framing:** Mythoras is a turn-based/state-based **action RPG**, not a "tactics game" — the ARPG throughline (Diablo/PoE-adjacent) matters, turn-based is the pacing model layered on top of it, not a genre switch away from ARPG.
- **DD's character/inventory panel** is a large popup-sized component sitting above everything, not full-screen (unlike DD's stagecoach/provisioning screens, which are full-screen). Minor sharpening of research §2.5, doesn't invalidate it.
- **Layout skeletons requested, scope confirmed:** 4-5 configurations (MoP-style, DD-style, a merge of the two, a genuinely custom configuration, possibly a RuneScape-flexible-panel one), covering the two scenes that matter most — world-map/travel (the predominant view) and battle — as wireframe skeletons with placeholder boxes/fake data, real Three.js viewport dropped into the "scene" zone rather than faked. To be built directly (HTML/CSS layout arrangement is legitimate; the earlier failure was faking painterly scene/creature *content* in CSS, not arranging zones). Not yet started as of this doc.
- Owner's own reasoning for being wary of DD's exact split ratio: adopting it wholesale early risked "utilising a great deal more and being less creative" — prototyping several configurations is explicitly meant to protect against defaulting into a DD clone.

## 5. Next planned step (not yet executed as of this doc)

A dedicated Fable 5 research pass analyzing Master of Peace, Path of Exile, Darkest Dungeon, and the newly supplied videos (a Slay the Spire dev-philosophy video, and Thronefall devlogs 0–4) to extract concrete, prioritized "what to build first" guidance for the prototype — grounded in real footage/frames pulled inside that agent's own isolated context (not this session's), specifically to avoid bloating this session further. Scope/token cap to be defined and confirmed with the owner before launch, per the standing rule above.

New reference videos supplied, not yet analyzed:
- Slay the Spire dev philosophy: https://www.youtube.com/watch?v=JFUtfgGuc38
- (Already analyzed this session, frames captured) Slay the Spire 2 code review: https://www.youtube.com/watch?v=SpB4-W9L4ec
- Thronefall Devlog 0: https://youtu.be/u4mYGYhyS-A
- Thronefall Devlog 1: https://youtu.be/ESh6bid20ZA
- Thronefall Devlog 2: https://youtu.be/OrRDekltDOQ
- Thronefall Devlog 3: https://www.youtube.com/watch?v=C7FUVtnRR38
- Thronefall Devlog 4: https://www.youtube.com/watch?v=TmD1RJeddDg
