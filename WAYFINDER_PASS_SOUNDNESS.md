# Wayfinder Soundness Pass

## Audit frame

- **FACT:** This pass read `SESSION_DECISIONS_2026-07-15.md`, the critical corrections and open questions in `CONTEXT.md`, the locked questions and parked items in `GRILL_HANDOFF.md`, `MYTHORAS_DOSSIER_SYSTEM.md`, and `IMAGINED_PLAYER_STATEMENTS.md`.
- **FACT:** `WAYFINDER_PASS_COHERENCE.md` and `WAYFINDER_PASS_MVP_VERTICALS.md` did not exist when this pass checked, including a second check immediately before drafting. This pass therefore does not incorporate peer conclusions.
- **INFERENCE:** There is enough coherent intent to continue wayfinding and to build disposable prototypes. There is not yet enough precision to begin a broad, durable game implementation without first naming a much narrower seam.

## Candidate Destinations, ranked

1. **A build-ready specification, backed by one disposable prototype, for a single traversal-to-battle-to-reward seam that preserves Mythoras's Turn Program, Squad ownership model, adaptive continuity, and content-authoring spine.**
   - **INFERENCE:** Best balance. It creates both an experiential proof and a durable boundary without pretending to specify the whole game.
2. **A runnable greybox in which one Technician enters one authored environment fragment, crosses into one continuous-surface Battle, programs a round for three Field creatures, resolves it, and returns to traversal, with the decisions needed to rebuild it cleanly recorded.**
   - **INFERENCE:** More concrete and testable, but risks making the map about implementation rather than finding the route.
3. **A decision packet that removes the remaining contradictions around the first playable seam and leaves its combat kernel, presentation approach, authoring contract, and acceptance tests ready for implementation planning.**
   - **INFERENCE:** Safest and cheapest, but may leave high-risk feel questions falsely “resolved” without contact with a prototype.

## 1. What is already load-bearing

### Player and product promises

- **FACT:** Mythoras is a persistent campaign RPG with an endgame; roguelike-adjacent structure applies to zone runs, not to the whole game.
- **FACT:** The immediate world is inhabited arcane/mystical fantasy with concrete geography, ecology, transport, and economy. The Protocol is a latent structural layer, not permission to default to cyberpunk, Tron, or universal darkness.
- **FACT:** Tone is contextual and biome-dependent. World visuals, skybox, particles, and music should change register with place and stakes.
- **FACT:** The campaign fantasy is an ambitious rookie Technician-athlete progressing through acts/zones and competition toward defeating the Regional Champion. Competition is the spine, not the entirety of the campaign.
- **INFERENCE:** These promises are specific enough to reject off-brand implementation choices even though they do not yet specify a first Region or opening.

### Play and combat spine

- **FACT:** One Technician brings a five-creature Squad: three Field slots and two Bench slots.
- **FACT:** The entire round is programmed before execution. Execution is committed, with no live intervention in the campaign baseline.
- **FACT:** Action order is automatic, derived from Speed, skill-inherent timing, and support costs. Manual sequencing is explicitly rejected.
- **FACT:** Battle occurs on the traversed physical surface. Location, fixtures, positions, and approach direction persist; presentation may adapt, but the game must not wipe to an unrelated arena.
- **FACT:** Battle footprints are variable and asymmetric; fixed 8×8 is retired.
- **INFERENCE:** This is enough to prototype the characteristic moment of play. It is not enough to balance a combat game.

### Ownership and build commitment

- **FACT:** Foundation is immutable; a materially different build means a new Technician.
- **FACT:** The Motherboard Grid belongs to the Technician: one global route plus five slot-local routes. Slot-local investment follows the slot, not the creature entity.
- **FACT:** Skill Cards, Support Cards, Skill Frames, gear, Mana, and creature progression are creature-local.
- **FACT:** Squad composition is locked on zone entry, underfilled slots are allowed, and Field/Bench rotation is intended to manage Load.
- **FACT:** Campaign and Champion completion are per-Technician; Stash, selected unlocks, crafting library, and Cipher topology/progress are Season-shared.
- **INFERENCE:** These boundaries are unusually valuable. An implementer can define data ownership and avoid collapsing Mythoras into either five independent ARPG characters or one shared loadout.

### Interface and technical posture

- **FACT:** World View is the default and keeps traversal or battle dominant with a compact contextual HUD.
- **FACT:** Workspace View is explicitly invoked, contracts the live world, exposes configurable information surfaces, persists layout, and reverses cleanly.
- **FACT:** No specific rendering engine or persistent scene graph is locked.
- **FACT:** Authored content should live in versioned files; no database belongs in the frame/simulation loop. Saves should identify the content pack and preserve deterministic state through snapshot/action-log/seed concepts.
- **FACT:** The stated MVP posture is one extensible environment fragment plus an authoring pipeline, not a polished Region.
- **INFERENCE:** The interface mode distinction and projection-neutral simulation posture are trustworthy. Exact UI tokens, renderer, persistence format, and database choices are not.

### Design method

- **FACT:** Imagined-player statements exist for scouting, gear improvement, species advancement, build commitment, World/Workspace views, Cipher, Ascension, and dossier progression.
- **FACT:** These statements describe desired player agency without locking mechanics.
- **INFERENCE:** They are good acceptance-test seeds. For the first seam, the World/Workspace and build-commitment statements are directly relevant; Cipher, Ascension, and dossier statements are horizon constraints.

## 2. False certainty

- **FACT:** `CONTEXT.md` calls itself canonical, but its header predates the July 15 decisions and some of its definitions conflict with those decisions.
  - **FACT:** It says a Technician “enters the Protocol” and describes the setting as a network with biological properties “not a fantasy realm with magic.”
  - **FACT:** The later session record says inhabited arcane/mystical fantasy comes first, with the Protocol latent underneath, and rejects reducing the world to technobiology.
  - **INFERENCE:** The layered-world decision should win. The older literal-Protocol wording is not safe canon.
- **FACT:** The damage system is repeatedly described as eleven Damage Types, but only ten are named: the Biotic-Elemental category still contains one TBD type.
  - **INFERENCE:** The architecture may be locked at “11 slots / 4 categories,” but the complete type roster is not locked.
- **FACT:** Lower sections of `CONTEXT.md` and historical portions of `GRILL_HANDOFF.md` still use “Stream” for the type layer after the later lock renamed it Damage Type.
  - **INFERENCE:** “Stream Resonance,” Primary Stream, and Secondary Stream are terminological residue unless explicitly retained as exceptions. Implementers need one canonical naming rule.
- **FACT:** `CONTEXT.md` defines Principal as current vocabulary, while the imagined-player statement and open-thread list say both the transformation verb and Principal name are unresolved.
  - **INFERENCE:** The mechanic direction is firmer than its name or presentation.
- **FACT:** `CONTEXT.md` defines Warbanner as a Technician-owned battle modifier and lists deployment authority under Technician ownership.
  - **FACT:** The later session record says Warbanners are at risk and, if retained, would be creature-local utility Skill Cards.
  - **INFERENCE:** Nothing called Warbanner is safe to implement until ownership and purpose are reconciled.
- **FACT:** Creatures are described as per-character yet transferable between a player's characters.
  - **INFERENCE:** Storage ownership, transfer timing, equipped-state rules, and campaign-level consequences are not defined. “Per-character” is a gameplay attachment statement, not a complete persistence model.
- **FACT:** “Season rolls into Standard,” shared progression boundaries, and Party resource scaling are written as directions without an authoritative service/economy model.
  - **INFERENCE:** They are product constraints, not permission to build online infrastructure now.
- **FACT:** The open-threads table labels all listed threads “parked, not blocking.”
  - **INFERENCE:** That is only true relative to the whole project continuing. Several entries become blockers for a specific surface: rendering pipeline for durable presentation code, fixture grammar for procedural zone tooling, and defensive rules/type relations for representative combat balance.
- **FACT:** Dossier direction is detailed and uses lock language, while representation, cadence, tradability, inventory, redemption, interface, and drop architecture remain open.
  - **INFERENCE:** The player promise is locked; the shippable system is not.
- **FACT:** The Champion-to-Cipher gate is locked, but the competition wrapper, opening, Region names, and most campaign presentation are open.
  - **INFERENCE:** The endpoint relation is reliable; the route to it is not yet a campaign specification.

## 3. Blockers vs fog vs later

### A. Blockers — resolve before durable production code

- **INFERENCE:** **The first playable seam has no explicit contract.** Name its start state, player actions, end state, failure state, and what it deliberately fakes. Without this, “vertical slice” can silently expand from one Battle into campaign, progression, UI, and content tooling.
- **INFERENCE:** **The representative combat kernel is unspecified.** A seam needs a tiny provisional rules payload: participating creatures, available actions, movement/targeting, Speed ordering, damage/outcome, one enemy behavior, and whether Field/Bench rotation appears. This need not be balanced or use the full type chart.
- **INFERENCE:** **The authoring boundary is unspecified.** Decide what is authored data versus simulation code for one environment fragment, fixtures, battle footprint, creatures, and actions. Otherwise the prototype cannot test the claimed extensible content spine.
- **INFERENCE:** **Canon precedence needs a local rule.** The July 15 session record, critical corrections, and older vocabulary sections disagree in places. A seam ticket must state which source wins and list the few unresolved names it will represent with explicit placeholders.
- **FACT:** None of these blocks research, paper prototypes, rendering spikes, or disposable gameplay prototypes.
- **INFERENCE:** There is no evidence of a project-level decision so fundamental that all code would be wasteful now. The blockers apply to pretending prototype code is the durable foundation.

### B. Fog — discover while building or ticket when it sharpens

- **INFERENCE:** Whether 2D isometric or a 3D board with 2D units best preserves adaptive continuity, readable variable footprints, lighting, and target-platform performance.
- **INFERENCE:** The exact camera, scale, movement feel, and transition treatment that make traversal and Battle feel like one place.
- **INFERENCE:** How much information the compact Battle HUD needs before Workspace View becomes useful rather than mandatory.
- **INFERENCE:** Whether the three-creature Turn Program is legible and satisfying with automatic ordering, and which previews are necessary.
- **INFERENCE:** Whether Bench rotation and Load belong in the first seam or should enter in the next combat increment.
- **INFERENCE:** The minimum static-fixture grammar that supports authored identity inside variable layouts.
- **INFERENCE:** Which save/replay boundary is valuable in a first prototype: seed-only reset, action log, or a small snapshot.
- **INFERENCE:** The off-Field creature embodiment/refusal fiction, unless the first seam visibly summons or dismisses creatures.
- **INFERENCE:** The opening's fiction, competition wrapper, and Foundation-specific framing. A neutral test premise can stand in while feel is tested.
- **INFERENCE:** Detailed type multipliers, resistances, ailments, tags, Resonance tuning, Skill Frame topology, gear slots, and affix grammar. Use explicit provisional values rather than silently declaring canon.
- **INFERENCE:** Final visual language and names. Prototype information hierarchy and interaction first.

### C. Later — after a first seam exists

- **FACT:** Full Cipher Network topology, seven-Layer structure, Frontier, Threat Attunement ecosystem, rotation economy, and Pinnacle suite.
- **FACT:** Full Ascension excavation, exclusive resource economy, and cross-system augmentation.
- **FACT:** Shipping the dossier system: representation, tradability, operator catalogue, rotation remapping, inventory/redemption, market behavior, and content catalogue.
- **INFERENCE:** Full campaign acts/zones, side quests, regional circuit, Major, Championship, Champion duty narrative, and alternate openings.
- **INFERENCE:** Complete creature catalogue, all species-specific advanced identities, all Foundations, full Grid, full Skill Frame, and itemisation/crafting economy.
- **INFERENCE:** Multiplayer Party architecture, authoritative economy, Season-to-Standard migration, and party cost/difficulty scaling.
- **INFERENCE:** Full art/audio pipeline, broad biome catalogue, celebrity/social-reaction layer, live-ops content process, and community submissions.

## 4. Wayfinder ticket candidates

1. **[grilling] What exact player experience and evidence define the first playable seam?**
   - **Question:** Where does it start and end, what can the player do, what must feel distinctively Mythoras, and which systems are explicit fakes?
2. **[prototype] Can one greybox Battle make the Turn Program legible with three Field creatures and automatic Speed ordering?**
   - **Question:** Using a tiny provisional action set, what planning previews, enemy intent, execution feedback, and outcome display are actually required?
3. **[prototype] Which rendering approach best proves adaptive continuity at acceptable authoring cost?**
   - **Question:** Compare the same environment fragment in pure 2D isometric and 3D-board/2D-unit treatments against continuity, footprint flexibility, camera readability, lighting, tooling, and target-platform performance.
4. **[grilling] What is the minimum projection-neutral simulation and content contract?**
   - **Question:** Which data describes environment fixtures, Battle footprints, entities, actions, and outcomes, and which concerns must remain renderer-specific?
5. **[prototype] What is the smallest authored-fixture plus variable-layout grammar that still gives one place a memorable identity?**
   - **Question:** Can a fragment preserve landmarks, approach direction, and asymmetric Battle space across several generated layouts without hand-authoring each map?
6. **[prototype] How should World View contract into Workspace View during live traversal and Battle?**
   - **Question:** Which minimum dock, persistence, reset, read-only execution behavior, and viewport guardrails satisfy the imagined-player statement?
7. **[grilling] Which combat rules are canonical for the seam, provisional for testing, or excluded?**
   - **Question:** Resolve the boundary for movement, targeting, Speed, damage, enemy intent, Field/Bench rotation, Load, type interaction, Resonance, and failure without designing the full combat system.
8. **[task] Reconcile the first-seam canon boundary in the source documents.**
   - **Question:** Mark or correct only contradictions that could mislead implementation: Protocol/world framing, Damage Type versus Stream residue, the unnamed eleventh type, Principal status, Warbanner ownership, and creature transfer ownership.
9. **[grilling] What persistence evidence must the first seam produce to support a durable design spine?**
   - **Question:** Is deterministic replay, content-pack hashing, a minimal snapshot, or simply reloadable authored content necessary to validate the architecture at this stage?
10. **[prototype] Does the off-Field creature fiction affect the seam enough to decide now?**
    - **Question:** Test two lightweight presentations—persistent nearby bodies versus reciprocal-imprint calling—and determine whether either changes readability, continuity, or emotional attachment enough to constrain implementation.

## 5. Fog of war sketch — Not yet specified

- **First-region identity:** The eventual geography, ecology, economy, transport, culture, fixtures, tonal arc, and competition presence that can grow from the test fragment.
- **Combat depth after legibility:** How the small Turn Program kernel expands into type relationships, tags, ailments, Resonance, defenses, Load, Bench strategy, Command Deck, and creature-local Skill Frames without overwhelming planning.
- **Build expression over time:** How Foundation, global and slot-local Grid routing, creature commitment, equipment, and advanced species identity become visible across a campaign cadence.
- **Campaign traversal grammar:** How authored zones, procedural variation, side quests, competition stops, Waypoints, and recurring encounters combine into acts without becoming either Pokémon badges or disconnected ARPG maps.
- **Information architecture at scale:** How World/Workspace views absorb inventory, crafting, Grid, scouting, dossiers, Cipher planning, and accessibility while preserving the clear-world promise.
- **Content production and validation:** The eventual editor, schema evolution, asset references, deterministic tests, pack versioning, balance telemetry, and migration rules needed beyond one fragment.
- **Persistence and account boundaries:** Character, creature, account, Season, Standard, Stash, transfer, and eventual multiplayer authority semantics.
- **Presentation language:** Camera grammar, animation, lighting, regional palette, audio reactivity, equipment visibility, and the production trade-offs among 2D, hybrid, and full 3D.
- **Narrative and social layer:** Opening, Champion culture, clubs/sponsors, celebrity spectacle, subjective testimony, Cipher duty, and how the Protocol's deeper layer is revealed without flattening the fantasy world.
- **Targeted pursuit ecosystem:** How scouting and dossiers eventually connect biome knowledge, source intelligence, crafting, trade, Cipher rotations, and player/community discovery.

## 6. Out of scope for this wayfinding effort

- **INFERENCE:** Shipping the Cipher Network, Frontier, Ascension, Proving, Pinnacles, or a seven-Layer endgame.
- **INFERENCE:** Completing the full GDD, campaign script, Region catalogue, competition wrapper, opening variants, or Champion narrative.
- **INFERENCE:** Designing all 11×11 type multipliers, every tag interaction, every ailment, all defensive layers, or final balance numbers. The seam only needs enough explicit provisional rules to test its loop.
- **INFERENCE:** Shipping dossier progression, copying or replacing Scrying in full, modelling its economy, or authoring its reward/operator catalogue.
- **INFERENCE:** Building a complete art, animation, audio, VFX, map-editor, or procedural-generation production pipeline.
- **INFERENCE:** Live multiplayer Party, authoritative servers, trade economy, anti-cheat, account services, Seasons, Standard migration, or live operations.
- **INFERENCE:** Full creature/item/Skill Card content, crafting simulation, affix taxonomy, equipment-slot redesign, or broad progression balance.
- **INFERENCE:** Final naming across Regions, Foundations, Principal, instrument, defenses, competition, dossier representation, or the unnamed eleventh type, except where a placeholder policy is needed to keep the seam honest.

## 7. Final call

**CONTINUE WITH NARROWED DESTINATION.** **FACT:** Mythoras already has a distinctive and mutually reinforcing core: a committed Technician build expressed through a global-plus-slot-local Grid, a three-Field/two-Bench creature Squad, full-round programming with automatic execution order, continuous-surface traversal and Battle, and clear World/Workspace modes. **INFERENCE:** That is enough to find and test a first playable seam, but not enough to justify broad production. The honest next effort should terminate at a build-ready seam specification backed by one disposable prototype and a small authoring contract. Treat the remaining system catalogue as horizon constraints, not prerequisites; resolve contradictions only where they touch the seam; and prevent prototype choices from becoming accidental canon.
