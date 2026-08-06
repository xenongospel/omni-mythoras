# OD-004 Research Synthesis — World, Battle, and Shell

> Updated 2026-07-12. Research context only: this file records evidence and candidate directions. It does not lock the UI, rendering pipeline, lore, opening, or Technician instrument.

## Revised problem framing

“Field Studio” and “Arcane Cartographer” are not useful umbrella decisions. OD-004 contains several related but separable design surfaces:

- **World art direction:** biomes, architecture, creatures, atmosphere, lighting, materials, and the world's latent cosmological structure.
- **Gameplay presentation:** projection, camera, traversal, battle-footprint activation, unit representation, and the transition between traversal and battle.
- **Tactical HUD:** Planning/Execution state, targeting, previews, creature status, action commitment, and feedback.
- **Narrative presentation:** ambient speech, world-anchored dialogue, portraits, choices, contextual explanations, and rare staged scenes.
- **Management shell:** Squad, inventory, Skill Frames, Motherboard Grid, Forge Terminal, Command Deck, regional routing, and other dense systems.
- **Item portrait language:** material-rich object illustrations and comparison surfaces; items do not need to appear physically on creatures during MVP.

The shared identity should be developed across these surfaces, but they do not need the same composition, density, or palette.

## Findings from Master of Piece

The supplied official development montage is a visual before/after reel, not a tooling demonstration. It shows a combat-first graybox evolving from labelled cuboids into a stable board grammar, followed by a mobile-to-PC shell redesign. It does **not** establish a tile generator, flat-map editor, 2D-to-3D conversion pipeline, or encounter-authoring tool.

The final structure is hub → route map → event scene → battle board, joined by cuts or fades. It has visual-language continuity, not physical traversal-to-battle continuity. Mythoras should not inherit that structure if seamless embodied traversal is a core promise.

Useful lessons:

- Prove the tactical decision loop with replaceable geometry before committing to production art.
- Preserve a stable spatial contract as visuals improve.
- Remove fatigue based on observed play; Master of Piece repeatedly shortened and simplified its loop.
- World-anchored speech bubbles can preserve speaker ownership without immediately taking over the screen.
- The route-node grammar communicates risk and choice well, but using it as primary travel would replace Mythoras’s embodied zones with menu navigation.

Primary sources:

- [Official three-year development montage](https://youtu.be/2KVfcOaSRb0)
- [Official demo gameplay](https://youtu.be/KwzYe4FXyDY)
- [Official itch page](https://imgame-official.itch.io/master-of-piece)
- [Official January 2025 devlog](https://imgame-official.itch.io/master-of-piece/devlog/864732/master-of-piece-demo-v01329-updated)

## Findings from Mewgenics and Into the Breach

Mewgenics is technically a 2D game. Tyler Glaiel states that it uses no depth information for rendering: assets are CPU-positioned, and SWF vectors are converted to polygons and displayed through OpenGL. Its isometric appearance is not evidence of a 3D board. Its production leverage comes from modular source rigs and data-driven combinations, while animation remains a major bottleneck.

Into the Breach used roughly 200 hand-authored tactical maps rather than procedurally generating battle geometry. Procedural run composition does not require procedural tactical boards. Its developers treated interface comprehension as a mechanical constraint, cutting states and interactions that could not be represented clearly. Animated visual explanations replaced difficult prose.

Implications:

- Keep simulation and zone data independent of final projection.
- A flat planning/debug representation is useful for graph, occupancy, fixtures, spawn sockets, and validation; it should not be mistaken for automatically convertible final art.
- Pure 2D isometric, a 3D board with 2D units, and full orthographic 3D have materially different production costs. Visual preference alone cannot choose between them.
- Elaborate 2D creature variation can be as expensive as 3D if the source rig is not deliberately modular.
- Tactical footprints may be authored and validated even when campaign-zone assembly and encounter selection are procedural.

Primary sources:

- [Mewgenics technical interview](https://www.youtube.com/watch?v=b8RNovXK6ck)
- [Mewgenics development interview](https://techraptor.net/gaming/interviews/edmund-mcmillen-talks-mewgenics-development-journey-turtle-cats-and-adobe-flash)
- [Into the Breach GDC postmortem](https://www.youtube.com/watch?v=s_I07Iq_2XM)
- [Into the Breach interface interview](https://www.rockpapershotgun.com/into-the-breach-interface-design)

## Findings from Path of Exile

Path of Exile combines an authored campaign skeleton with constrained procedural assembly. Official talks describe authored graphs, entrances, exits, bosses, quest fixtures, typed edges, reusable rooms, tile-key variations, and generation validation that guarantees a walkable path.

The recalled “50 templates per zone” figure is not supported. Chris Wilson cited roughly 20 topology variants for the River Crossings example. The later “50 or 60” figure referred to Synthesis areas overall, not one campaign zone.

The Twilight Strand opening layers weapon use, an active skill, a support, ordinary combat, a boss, and town arrival through consecutive actions. GGG explicitly describes it as an early tutorial layer, with secondary teaching for systems needing more detail. PoE2 verifies interactive underlined keywords and advanced descriptions, but an unlimited global recursive hyperlink system is not established by first-party evidence.

Implications:

- Region and campaign routing can remain authored while individual zone paths vary.
- Generate a route graph constrained by fixture contracts before decorating tiles.
- Stable landmarks and directional grammar must survive permutation.
- Give control before exposition; teach one relationship through action, then expose deeper context optionally.
- Dialogue and lore can coexist with movement where safe.

Primary sources:

- [GGG procedural generation talk](https://www.youtube.com/watch?v=EXnoHTqO7TE)
- [Chris Wilson GDC 2019 talk](https://www.youtube.com/watch?v=pM_5S55jUzk)
- [GGG narrative design philosophy](https://www.pathofexile.com/forum/view-thread/3091715/page/1)
- [GGG early tutorial report](https://www.pathofexile.com/forum/view-thread/1921991)

## World identity hypothesis

The world should not be reduced to “technobiological,” overt machinery, circuitry, neon, cyberpunk, Tron, or post-apocalyptic technology.

A stronger provisional layering is:

1. **Immediate read:** an inhabited fantasy ecology with creatures, craft, settlements, ruins, weather, ritual, and regional history.
2. **Secondary read:** impossible recurrence, resonance, alignment, relay, synchronized phenomena, and structures that seem to answer one another.
3. **Deep read:** the Protocol may have a compiled, network-like, or world-scale organizing substrate.

This permits arcane mysticism without making the setting conventionally magical or visibly technological. Convergence, a global compiler, and the origin of creature/Technician coexistence remain speculative lore ideas.

The environment owns the immediate palette and mood. Darkness is a biome or stakes register, not a universal base. A light route, inhabited settlement, enchanted forest, and volcanic danger state should all feel native to the same world without applying one dark wash.

## Continuity contract

Preserve as an experiential commitment:

- Battles occur at the location where the encounter happens.
- Terrain, fixtures, approach direction, creature positions, and recognizable landmarks remain spatially continuous.
- The camera and HUD tighten rapidly into tactical play and release rapidly after resolution.
- There is no Pokémon-style wipe into an unrelated arena or backdrop.
- Skipping encounters, spillover pressure, and eventual forced battles remain legible within embodied zone traversal.

Do not yet lock:

- one persistent Three.js scene;
- a particular renderer or engine;
- literal asset identity across traversal and battle;
- fixed 8×8 dimensions;
- combat never using most of the viewport;
- permanent surrounding management panels.

Variable asymmetric battle footprints are better aligned with the current world design than a universal fixed 8×8 board. Exact dimensions remain a prototype question.

## Opening and narrative direction

The opening should be a playable arrival or inciting situation, not a title-to-map menu sequence and not a long tutorial.

A prototype should test:

- movement within approximately ten seconds;
- a meaningful world interaction within approximately thirty seconds;
- brief dialogue tied to a visible speaker or object;
- one optional contextual term or explanation;
- an early use of the Technician’s profession-defining instrument placeholder;
- a visible creature encounter that becomes the first battle on the same terrain.

These are evaluation targets, not narrative locks. Portraits should add identity or emotion when useful; ambient world-anchored speech should handle lighter exchanges; major interruptions should be rare.

## Technician instrument hypothesis

Runeseeker’s Call is officially a **Unique Runic Fork**. Its official icon supports a tuning-fork visual reading, but first-party text does not call it a tuning fork.

The transferable idea is one profession-defining object that unifies silhouette, ritual, progression, and mechanics. A Mythoras instrument might detect creature signatures, establish call-and-response, stabilize engagement, or record a reciprocal accord. That would distinguish contracting from storing creatures as inventory.

The instrument, its necessity, its one-to-four-prong progression, and its lore are open questions. Prototype it first as a silhouette and interaction prop.

Sources:

- [GGG item-filter information](https://www.pathofexile.com/forum/view-thread/3933291/filter-account-type/staff)
- [Runeseeker’s Call extracted game data and official CDN icon](https://poe2db.tw/us/Runeseeker's_Call)

## Recommended prototype sequence

1. Build a projection-neutral route graph and fixture contract for one tiny zone.
2. Generate deterministic route variants while preserving entrance, exit, landmark, narrative fixture, optional branch, and encounter clearing.
3. Render identical content in two finalists: pure 2D isometric and a 3D board with 2D units. Add full 3D only if continuity, lighting, or visible equipment requirements justify it.
4. Test the same traversal-to-battle seam in each renderer.
5. Stress the same assets across warm, enchanted-dark, and volcanic biome states.
6. Add one world-anchored dialogue exchange and one optional contextual explanation.
7. Compare persistent panels, retracting panels, and a world-dominant view with management summoned on demand.
8. Record authoring time, defects, occlusion failures, comprehension, and transition orientation—not only aesthetic preference.

## Next decision

The next grill question should define what “same physical surface” requires:

> Must traversal and battle retain literally identical rendered terrain and unit assets, or may the renderer adapt visibility, level of detail, and tactical representations while preserving exact location, fixtures, positions, approach direction, and uninterrupted camera continuity?

The recommended answer is **adaptive continuity**: preserve the place and spatial state exactly, but permit reversible presentation changes needed for tactical clarity.
