# Idea Log — Parked / Under-Consideration Concepts

> Ideas that are NOT canon and NOT scheduled, but explicitly worth revisiting. Each entry records the idea, its source session, owner sentiment, and blockers. Do not implement anything here without a Planning Room / grill session. Last updated: 2026-07-19.

---

## Combat Layer

### IDEA-001 — Compile Chain (Planning-Phase sequencing bonus)
**Status:** Parked (owner: "cool — for now we can probably drop the sequencing stuff, but log these ideas")
**Source:** 2026-07-15 subagent analysis (Vampire Crawlers TurboTurn inspiration)
**Summary:** During Planning Phase, the order the player arranges queued actions can bank an escalating "Compile Multiplier" applied when actions resolve. Speed still governs WHEN actions execute; arrangement order governs banked output magnitude. Chain breaks if a queued action never resolves (Stagger/Crush/kill/displacement) — giving enemies a legible "punish the greedy sequence" tool.
**Best implementation candidate:** Ascending Resonance Chain — order actions by target Stream's current Resonance stack count; multiplier feeds the final action's Tier 1 Stream Resonance. Reuses an existing meaningful number instead of inventing an arbitrary ranking (avoids smuggling a disguised Priority stat back in).
**Blocker:** Directly reopens Q10/OD-010 (locked 2026-07-06 as Option A — automatic ordering, no manual sequence assignment). Owner clarification (2026-07-15): the lock was made partly because Speed implementation wasn't yet designed — so the lock is softer than the handoff doc reads, but reopening still requires a deliberate pros/cons session.
**Owner's own noted concerns for that future session (3v3 exhibition example):**
- Player must already juggle: own creatures' Speed, skill Speed costs, whether actions occur at all — manual sequencing may crowd out combo setup rather than enable it
- Combos could be too strong with manual ordering
- Opponent counters between actions complicate chain reliability
- Pokémon comparison: Speed orders everything through a single execution channel; manual skill ordering would interact with (and complicate) that single-layer execution model
**Next step if revisited:** dedicated pros/cons evaluation (manual vs automatic chaining), NOT a design pass.

### IDEA-002 — Disposition mechanical category (forced movement + locks)
**Status:** Liked — direction approved in principle, needs spec session
**Source:** 2026-07-15 subagent analysis
**Summary:** "Disposition" as a category separate from Ailments: Push / Pull / Swap (forced movement, discrete spatial events — don't fit Ailment ramp/duration scaling) + Root/Lock (cannot move but can act — a partial state distinct from Stagger/Crush). Lock/skip effects route through existing Stagger/Crush rather than new ailments. Tidal owns forced movement thematically (Signature already reads "water, pressure, forced movement"). Swap likely a Command Deck tool rather than a creature skill. Push-into-hazard-Obstacle = bonus impact damage. Push into occupied tile = both take minor impact, pushed unit stops short. No push-off-arena-edge as baseline (win-more risk); Examiner-exclusive if ever.
**Ailment-system note (resolved 2026-07-15):** Ailment system is NOT DoT-only — DOC_v2 §7.3 has Damaging/Control/Impairing/Amplifying categories. CONTEXT.md's one-line summary is misleading and should be amended in the next doc pass.
**First prototype if picked up:** Push + hazard-collision damage as a Tidal skill effect.

### IDEA-003 — Examiner challenge archetypes (objective-layer encounters)
**Status:** Parked (owner: "looks fine, not planning to use for now — log")
**Source:** 2026-07-15 subagent analysis (reverse-engineered from Into the Breach power-grid + Master of Piece flag-capture; NO full-information telegraphing — owner explicitly rejects that)
**Foundational components extracted:** secondary objective with its own failure state; positional destination target distinct from unit HP; trade-off tension between protecting units vs. objective. Fairness via systemic legibility (visible counters, fixed learnable rotations, stance/category tells, Build-Up/Charge visibility per §16.5) — never exact-tile telegraphs.
**The five archetypes:**
1. **Anchor Break** — Obstacle "Anchor Nodes" feed the Examiner stacking regen/Barrier; race to destroy them. Examiner can regrow one mid-fight.
2. **Convergence Point** — destination tile / terminal at far end; hold N rounds or destroy it for an alternate win path. Examiner contests it with its Disposition kit (cross-link to IDEA-002). Cheapest first prototype.
3. **Cascade Failure** — escalating corruption spreads hazard tiles each round; destroy "Dampener" tiles to slow/reset. Visible round-counter for fairness.
4. **Twin Vector** — visible stance change telegraphs attack CATEGORY (not target tile) each round; stances also gate which Obstacle-alteration ability is available.
5. **Split Attention** — fixed non-random mode rotation across rounds; learnable pattern replaces telegraphing.

### IDEA-004 — Skill representation metaphor (replacing "card" presentation)
**Status:** Deferred — keep Skill Cards for MVP; revisit presentation later
**Source:** 2026-07-15 discussion
**Owner's position (important for any future naming/metaphor session):**
- Skill Cards stay for MVP. The card was chosen because it has an obvious PHYSICAL representation. The only objection is over-indexing with the current deckbuilder-roguelite wave. Later, the concept of skills may be made more generic than cards (shape change post-MVP).
- Synapse: not rejected, but fails the physical-representation test — "I can't think about what a Skill Synapse looks like." Any proposed metaphor MUST have an instantly imaginable physical object (gem = jewel; card = card; synapse = ???).
- "Lattice" as a fantasy term is disliked — overused LLM-default vocabulary. Avoid.
- "Graft" (from the discarded Vessel/Organ option) flagged as an interesting seed word worth reinterpreting — not adopted, but the KIND of word worth exploring.
**Naming philosophy directive (applies to ALL future naming sessions, not just this one):** Do NOT lock every name into the technological-biology theme. Loose, tangential, or even off-base associations are welcome if they can be reinterpreted INTO the world (PoE example: skill gems/jewels have no deep thematic tie to the Vaal — the association is loose, and it works). Agents defaulting hard to theme-locked naming and abandoning imagination is a recurring failure mode the owner explicitly wants avoided. Reinterpret, reimagine, or re-orient concepts that feel too technical or too ordinary; expect many attempts; that's fine.

---

## Economy / Itemization

### IDEA-005 — Exploit Agent family (gear gamble currency; Splice CANCELLED)
**Status:** Exploit liked / early greenlit; **Splice CANCELLED 2026-07-19**; Compile tempered / "probably fine"
**Source:** 2026-07-14/15 discussions + subagent analysis; cancel lock 2026-07-19 owner dump
1. **Exploit Agent (early):** gambles Common/Uncommon gear into a Unique. "Latent Weight" twist — success chance scales inversely with how many affix slots are already filled (raw/unfilled bases are better targets), creating a reason to hoard clean bases. Global drop table, cheap, early.
2. **Splice Agent (mid) — CANCELLED (2026-07-19):** Was: grafts ONE Unique-exclusive mod fragment onto a Rare. **Owner rationale:** Unique fragment on Rare is catastrophically strong; fracture/lock downstream is worse. Do not revive without a full redesign that is not "Unique mod shard on Rare."
3. **Compile Agent (end):** works only on "Unstable"-flagged Uniques (earned by surviving Examiner fights at high Threat Attunement); gambles the Unstable slot into a permanent Examiner-pool bonus mod; failure corrupts the item (locks all further modification). Fueled by endgame-system processed output, not raw currency. Owner: "probably fine, not sure if it should absolutely be the case." Temper in Wave 2.
**Differentiation from Gl!tch (locked term):** Gl!tch = Skill Card scope; gear Agents = gear scope. Keep naming/iconography sharply distinct.

### IDEA-006 — Unique item tiering
**Status:** Low priority — owner: "can honestly be the same as Path of Exile, I don't mind."
**Notes for the record:** PoE1 T0–T5 is unofficial community convention (GGG holds an internal tiering; community reverse-engineered fragments of it from shared drop rates). PoE2 has an official, more transparent tiering direction. Subagent proposed 4 Mythoras tiers mapped to acquisition philosophies (broad drop+gamble / narrow drop+partial craft / deterministic craft only / pinnacle-exclusive) — park the acquisition-mapping table as the useful artifact; tier names are bikeshed.

---

## World / Progression

### IDEA-007 — Events (world-dynamism system; evolved from "Trace/Broadcast" proposal)
**Status:** Liked with a major reframe — needs a design pass
**Source:** 2026-07-15 discussion (Master of Piece Trait/Rumor transposition)
**Owner's reframe:** The Broadcast-like concept should be **creature-AGNOSTIC**, not a creature-local modifier — better named **"Events."** External signals/links that create route dynamism: changing which routes the player explores, or which zone types become attractive, in BOTH campaign and endgame. Creatures MAY separately have their own rumor-like creature-specific events, but that's a distinct sub-idea.
**Kept from the original proposal:** acquisition tied to traversal/route Node choices (POI/Traversal/Vendor nodes — never Encounter nodes; route choices, not combat loot). Long-term-run persistence advantage (Mythoras campaign runs are persistent, unlike roguelite resets) still applies.
**Dropped from the original proposal:** creature-local Trace (2-per-creature) framing — flagged as sixth creature-local axis risk anyway.

### IDEA-008 — Endgame architecture (Cipher Network progression system)
**Status:** Active exploration — parts liked, needs revision + research before next pass
**Source:** 2026-07-15 discussion + subagent proposal ("The Substrate" — name disliked)
**What the owner LIKED:**
- A **grand central Compiler** as the base orchestration layer for the whole progression system — global orchestrator fantasy.
- OSI seven-layer network model as a potential symbolic/structural representation of the network.
- Spatial construction direction in principle; **2D representation on a limited grid shape first** (cf. PoE Idol grids with blocked squares forcing alignment — a shape-constraint concept worth remembering even if not copied).
- MVP-first approach (tiny, cheap prototype of the core loop before spatial simulation).
- "Power" as the resource concept — energy generation / powering-on the network (replaces the proposed "Current"). "Fragments" as a term is disliked; concept OK; can have multiple sub-classifiers within it.
- NPC influence layer: **Network Agents** (not "Atlas Masters") — progression-attached NPCs who aid from early campaign onward (cf. Commander Kirac's arc: Envoy → Maven → Shaper/Elder cast). Candidates: returning Examiners from their sphere of influence, regional champions not yet introduced in plot — emerging off-screen into the endgame as lore + Network detail providers. One intended function: provide the STEADY progression the Idol system lacks (the choice-based supplement).
- **World map representation stays** — the Cipher Network still needs some world-map-like visual (study PoE1 2D vs PoE2 3D Atlas representations for direction; copy neither).
**Corrections to the prior analysis (owner, 2026-07-15):**
- The Idol system reference was always understood as REPLACING the Atlas tree — the owner's idea is to SUPPLEMENT an Atlas-tree-like layer with an Idol-like layer, not replace.
- The temple reference is REAL and PoE2-native: **PoE2 0.4.0 "Fate of the Vaal" league (Dec 12, 2025) introduced a renovated Vaal temple mechanic** — verified 2026-07-15, full findings in `POE2_TEMPLE_RESEARCH.md`. "Room Cards" is the real term (6 dealt per visit); Energised Crystals gathered from Vaal Beacons in maps are spent at a persistent hub to place rooms on a **9×9 grid** with adjacency-driven tier upgrades, global temple modifiers, and post-run decay (Architect/Atziri boss payoffs). Reception: board-building core loved ("deterministic progression"); launch pain points to AVOID copying — opaque placement rules, no undo, harsh decay, weak endgame rewards. This — not PoE1 Incursion — is the owner's primary structural inspiration.
- Cipher sustain/drop-rate economics must be considered: map-drop mods on the Atlas tree (more maps, higher-tier maps) ARE part of progression pacing; too-low drop rates create progression stalls (community "diamond" progression pattern: run highest tier available, backfill with tier-minus-two to sustain). Cipher drop economy needs an equivalent deliberate design. Full verified background now in `POE_ENDGAME_RESEARCH.md` (2026-07-15) — includes PoE's "+2 tiers max from an area" rule, deterministic sustain floors, Sextants→Scarabs rework reasoning, the Maven/Envoy onboarding-by-interruption model (and Sirus as the documented failure case), PoE1 2D constellation vs PoE2 infinite 3D world map comparison, and an 8-principle "why it works" synthesis with a reverse-engineering checklist.
**Scope expectation:** endgame is intended to be EXCEPTIONALLY large — most players are expected to live there long-term (PoE-like). MVP can be small; the vision should not be.
**Open:** system name (Substrate rejected-ish; theme-locked naming frustration applies — see IDEA-004 naming directive), full loop revision after temple-mechanic research lands.

### IDEA-009 — World register (multi-tonal fantasy settings)
**Status:** Reaffirmed direction (consistent with CONTEXT.md Critical Correction #1)
**Owner statement (2026-07-15):** Not copying Master of Piece's single grimdark register, but grimdark forests ARE wanted sometimes; also magenta-tonal gem caves with a dark overside, mystical desert settings, etc. Multiple fantasy registers, no single dominant theme — while retaining world consistency. Not an actively childish/high-saturation Pokémon register either.

### IDEA-010 — Positioning statement (recorded for reference)
**Owner articulation (2026-07-15):** Mythoras = "PoE Lite"-adjacent ARPG-depth in a turn-based, loop-based-progression creature battler. Differentiators: every battle meaningful (loop progression, not roguelite resets); improves on Pokémon weaknesses; deeper damage architecture (PoE-style); TCG-flavored impact in turn-based battles without static positioning; more mature creature/character design (splash-art-driven, League-of-Legends-style character appeal) within a low AI asset budget. Biggest challenge: creature design originality vs. Pokémon's franchise power. Biggest risk to guard: option overload (VGC doubles already shows how deep 3v3 gets — don't overload on top of it).

---

## Visual / Presentation

### IDEA-011 — Dual camera: static combat vs freer hub camera
**Status:** Parked — structural callout for production budgeting
**Source:** 2026-07-17 Agent D visual research (hub video lighting/camera + DOC_v6 §62)
**Summary:** Owner likes hub lighting (local warm point lights, cool ambient, bloom, wet reflections) and isometric-preserving camera motion suitable for towns/hideouts with freer player movement. Combat stays **static isometric**. Dual-camera is viable but expensive: fuller asset backsides, occlusion/cutaway systems, separate lighting profiles, distinct input modes, and a fourth camera *behavior* on top of the three zoom scales. Scope freer camera to hubs/towns/hideouts only — do not leak into Battle Arena.
**Next step if revisited:** production cost spike estimate + hub prototype with follow-cam vs combat locked cam side-by-side.
**Notes file:** `VISUAL_AND_CIPHER_BOARD_NOTES.md` §1.

### IDEA-012 — Temple Console aesthetic as quality reference (not copy)
**Status:** Parked — aesthetic bar only
**Source:** 2026-07-17 Agent D (Temple Console reference still + IDEA-008 temple inspiration)
**Summary:** PoE2 Temple Console’s carved stone/bronze “instrument” feel, diamond isometric board, co-located icon+tier numerals, and heavy commit CTA are the quality bar. Do **not** copy Vaal framing, RUN TEMPLE verb, crystal/beacon economy, or exact grid rules. Mythoras Cipher Console should feel equally authored — arcane fantasy and/or tech-diagnostic register welcome; theme not locked (IDEA-004 naming directive).
**Notes file:** `VISUAL_AND_CIPHER_BOARD_NOTES.md` §2.

---

## World / Progression (continued)

### IDEA-013 — Pre-filled / campaign-seeded Cipher board (not Vaal Beacon gather)
**Status:** Active exploration — preferred entry fantasy vs PoE2 temple fuel loop
**Source:** 2026-07-17 Agent D + IDEA-008 / `POE2_TEMPLE_RESEARCH.md`
**Summary:** First Cipher board should arrive **pre-filled or semi-atlas**, with **campaign decisions as seeds** (routes, Examiners, Sovereigns, Remnants, Network Agents writing initial topology). Authored environment (Remnants, zone templates, landmarks) **augments** Cipher instances. Explicitly **not** a Vaal Beacon → Energised Crystal gather-to-build loop. Post-unlock placement/adjacency authorship can still exist; the entry fantasy is “your campaign fingerprinted the Network.”
**Avoid copying:** blank-board anxiety, opaque placement rules, grindy entry cost (temple launch pain points).
**Notes file:** `VISUAL_AND_CIPHER_BOARD_NOTES.md` §3.

### IDEA-014 — Ascendancy central node as cluster-jewel analogue
**Status:** DRAFT expanded into GDD 2026-07-19 — still not locked
**Source:** 2026-07-17 Agent D; sold keep 2026-07-19 dump
**Summary:** Treat the central commitment node of an Ascendancy-like creature investment (Principal / Pinnacle Evolution) as a **cluster-jewel socket**: high-leverage install that defines a local subgraph of notables/smalls, swap/respec at cost, visually/structurally the hub of that specialty tree.
**GDD draft:** `DOC_v3.md` §15.5 (DRAFT). Research link: `POE_CLASS_PASSIVE_TREE_RESEARCH.md` §4.5.
**Notes file:** `VISUAL_AND_CIPHER_BOARD_NOTES.md` §4.

### IDEA-015 — Threat Attunement rename vectors
**Status:** Reopened soft 2026-07-19 — naming only; mechanic unchanged
**Source:** 2026-07-17 Agent D; reinforced 2026-07-19 dump
**Summary:** Explore clearer names for the pre-encounter risk/reward dial without changing thresholds/behavior. Candidate vectors: **creature intensity**, **severity**, short **threat**, or keep **Threat Attunement**. Also seek a **non-pack-size fourth dial** alt for pack-size space. Any rename must preserve optionality and 0–150%+ breakpoint meaning (ailment gates, boss phases, Apex).
**Notes file:** `VISUAL_AND_CIPHER_BOARD_NOTES.md` §5. Wave: 4 naming grill / Wave 3 Cipher if dials touch Cipher juice.

### IDEA-016 — Unique name seed: Wage of War
**Status:** Parked — name only; no itemization
**Source:** 2026-07-17 Agent D
**Summary:** Unique item name candidate **Wage of War** — martial/economic double meaning (payment for conflict; cost of continued campaigning). Fits loose thematic reinterpretation rule (IDEA-004). No base, mods, or drop source locked.
**Notes file:** `VISUAL_AND_CIPHER_BOARD_NOTES.md` §6.

### IDEA-017 — Hub/edge governance + multi-region Cipher Network access
**Status:** Sold keep (multi-region + hub/frontier fiction); governance stays light-touch — Wave 3
**Source:** 2026-07-17 Agent D; reinforced 2026-07-19 dump
**Summary:** Split **Hub** (Compiler / Cipher Console / Agents — configure) from **frontier/edge** (where Ciphers run). Multi-region Cipher Network access = earned aperture. Owner 2026-07-19: governance **light-touch** — do not over-author bureaucracy.
**Notes file:** `VISUAL_AND_CIPHER_BOARD_NOTES.md` §7.

### IDEA-018 — Transparency philosophy (tiers exposed; weights discoverable)
**Status:** Liked direction (aligned with PoE2 structural transparency) — apply across Cipher + itemization
**Source:** 2026-07-17 Agent D + `POE_ENDGAME_RESEARCH.md` §8 / principle 9
**Summary:** Expose rarity/intensity **tiers** as official UI vocabulary; make **weights discoverable** (shape of odds, floors, guarantees) via in-game surfaces. Keep mystery in *outcomes*, clarity in *rules*. Anti-pattern: Fate of the Vaal launch opacity on pathing/adjacency.
**Notes file:** `VISUAL_AND_CIPHER_BOARD_NOTES.md` §8.

### IDEA-019 — PoE1 static mapping vs PoE2 dynamic routing (foundational lessons only)
**Status:** Parked — foundational; do not copy either Atlas wholesale
**Source:** 2026-07-17 Agent D + `POE_ENDGAME_RESEARCH.md` §§3–4, 8
**Summary:** PoE1 finite constellation answers “how much have I done?”; PoE2 expanding map answers “where am I going?” Dynamic boards need authored landmarks (Towers / Citadels / anomaly analogues); static boards need completion charts that pay meta-points. Pair board shape with sustain economy. Mythoras may hybridize (campaign-seeded finite sector + expanding anomaly edges) but must name and teach the hybrid.
**Notes file:** `VISUAL_AND_CIPHER_BOARD_NOTES.md` §9.

---

## Narrative / Systems Explorations (Agent E — 2026-07-17)

> Full write-up: `NARRATIVE_AND_SYSTEMS_IDEAS.md`. IDs start at IDEA-020 to leave IDEA-011–019 free for parallel Agent D logging.

### IDEA-020 — Cinematic escalatory narrative (PoE expansion cadence)
**Status:** Liked direction — exploratory; for marketing + campaign/endgame structuring, not a systems rewrite
**Source:** 2026-07-17 owner idea dump + Agent E trailer research
**Summary:** Structure reveals and trailers like PoE expansion cadence: known loop → interruption → guided remix → named pinnacle → open horizon. Distinct from “whole game is a roguelike” (CONTEXT Critical Correction #7).
**Next step if revisited:** Story/marketing beat sheet for Sequence + Cipher Network; cross-link IDEA-008 / IDEA-022.

### IDEA-021 — Onboarding by interruption + zone dialogue pockets
**Status:** Liked direction — needs design pass
**Source:** 2026-07-17 owner dump (PoE Maven/Envoy + Master of Piece pre-encounter zones)
**Summary:** Teach new systems by interrupting play inside zones already chosen, not via menu unlocks. MoP-like small pre-encounter dialogue/atmosphere pockets before battle nodes. Examiner framing remains reopened — do not lock gym-leader tutorials under that name.
**Blocker / note:** Extends IDEA-008 onboarding grammar; coordinate with OD-009 fixture grammar if pockets become a Node/fixture type.

### IDEA-022 — Network Agents arcs (Kirac → Envoy → Maven pattern, Mythoras-native)
**Status:** Active exploration; **rename reopened 2026-07-19** (collision with crafting Agents)
**Source:** 2026-07-17 owner dump; 2026-07-19 dump
**Summary:** Progressive Network Agent cast: quartermaster/guide → interrupting herald → curriculum architect. Mythoras-native naming only. **2026-07-19:** "Network Agents" collides with crafting Agent currencies — rename needed (Wave 4). Also log L1–L4 salt-frontier beat sheet (IDEA-052).
**Next step if revisited:** Cast naming grill + Cipher sustain floor vs remix curriculum ownership.

### IDEA-023 — Wand / bond / pact → Runeseeker Call Unique (Tuning Fork)
**Status:** Seed reinforced 2026-07-19 — named Unique candidate + mid-layer dial
**Source:** 2026-07-17 owner dump; 2026-07-19 dump
**Summary:** Wand analogue = **Runeseeker Call Unique (Tuning Fork)** instrument + mid-layer dial between Technician and creature. **Shapes may vary for named NPC static designs** (same instrument fantasy, different silhouettes). Must not move Skill Cards ownership onto the Technician (CONTEXT #9). Wave 1 skills research.
**Next step if revisited:** Flavour-only vs progression gate; NPC variant art rules.

### IDEA-024 — Skill Frame → creature-as-container (constellation shape candidate)
**Status:** EXPLORATORY — reopened hard 2026-07-19; do not rewrite CONTEXT.md yet
**Source:** 2026-07-17 owner dump; 2026-07-19 dump (sold drop external Skill Frame container)
**Summary:** **2026-07-19 direction:** skills live **on the creature**; drop external Skill Frame *container*; keep constellation as a **shape candidate** only. Resonance/STAB may return as discoverable type/team levers under this rethink (IDEA-041) — do not smuggle silently. Gear sockets ≠ skills (IDEA-039). Wave 1 owns follow-up.
**Canon tensions (must flag in any grill):**
- Ownership #9 / #2: skills creature-local; Grid Technician-global — constellation must not become Technician-wide
- STAB historically removed; Alignment conditional — any STAB return needs explicit grill
- Resonance Tier 2 is Grid-investment / Stream-scoped — do not quietly relocate to Frame sockets
- IDEA-004 naming: avoid “lattice”; metaphors need physical imaginability
- Affinity/Frequency Alpha–Delta vocabulary **superseded-pending-replacement** (IDEA-042) — soft-fail bonus intent may survive under new name
**Next step if revisited:** Wave 1 `SKILLS_REDESIGN_EXPLORATION.md`; dedicated grill; no silent CONTEXT edits.

### IDEA-025 — Pets / companions / vessels
**Status:** Seed — exploratory; separate from Squad combat creatures
**Source:** 2026-07-17 owner dump (Valerie ship, Geralt horse, Appa/Momo, sea otter, Fae/Greninja-like; possibly multi-companion; personal vessel narrative)
**Summary:** Non-Squad companions/pets for atmosphere, traversal, brand; personal vessel as transport/home/identity object. Do not conflate with Contracted Field creatures or with Cipher (endgame deployable zone).
**Next step if revisited:** Mechanical budget (pure flavour vs. soft utility); multi-companion rules.

### IDEA-026 — Originals vs replicas (Heist-style narrative richness)
**Status:** Parked seed
**Source:** 2026-07-17 owner dump
**Summary:** Originals vs replicas as narrative/economy richness (Heist-inspired, not a league clone). Fits Protocol “compiled” cosmology — authenticity stories for crafting / Gl!tch / Uniques / Cipher acquisition.
**Next step if revisited:** Whether this is lore flavour, a crafting Agent family hook, or a Cipher modifier line.

### IDEA-027 — HumanBenchmark-style magic engagement
**Status:** Distant — do not schedule near MVP combat
**Source:** 2026-07-17 owner dump
**Summary:** Optional reaction/timing micro-skill toys for “magic” feel. Must not become a mandatory accuracy tax on Turn Program (Planning/Execution locked; Priority-as-label does not exist).
**If ever:** Opt-in mini-game / Foundation flavour / Command Charge toy only.

### IDEA-028 — SSF-first + nested goals + player-dialed difficulty + deterministic ratchets
**Status:** Direction affirmed — design axiom candidate for endgame/economy
**Source:** 2026-07-17 owner dump + POE_ENDGAME_RESEARCH §9.1–9.3
**Summary:** Assume SSF-first economy floors; nest goals at every time horizon; keep Threat Attunement / Cipher crafting as player-dialed difficulty; prefer deterministic ratchets (checklists, counters, vendor/recipe floors) so RNG modulates speed, never stalls the climb. Cipher sustain remains a first-class design problem (IDEA-008).

### IDEA-029 — Build-your-own-game-mode factory specialization
**Status:** Active exploration (pairs with IDEA-008)
**Source:** 2026-07-17 owner dump + POE_ENDGAME_RESEARCH §9.4
**Summary:** Meta-progression should let players configure *content* (amplify/block/warp encounter types), not only creatures — specialization as endgame identity. Second Technician/league = different endgame if tree differs.

### IDEA-030 — Positioning vs Pokémon copycat failures
**Status:** Reference / guardrail (extends IDEA-010)
**Source:** 2026-07-17 owner dump
**Summary:** Explicitly differentiate from failed Pokémon-likes on three axes: player agency, dialed difficulty, creature design depth. Mythoras already points at Turn Program + Command Deck + Grid + Threat Attunement + Stream/Tag/Origin depth + mature multi-register tone. Guard option overload on 3v3 Field.

### IDEA-031 — Economy pacing + legibility dial (even in SSF)
**Status:** Design axiom candidate — pull from POE_ENDGAME §9.6–9.8
**Source:** 2026-07-17 owner dump (“economy pacing important even in SSF”; checklist 9.7)
**Summary:** Economy *is* pacing. Prefer structural transparency with outcome mystery (legibility dial). Use §9.8 reverse-engineering checklist when scoping Cipher/crafting: atomic unit, tier fuel + floors, completion chart → meta points, content-config tree, boss ratchets, per-run juice loot, interrupt curriculum, seasonal fold-in.

### IDEA-032 — Profit-crafter vs community mini-arc
**Status:** Distant / parked
**Source:** 2026-07-17 owner dump
**Summary:** Optional social/economy narrative beat contrasting private profit-crafting vs. community-feeding crafting. Do not schedule against SSF-first baseline; flavour or late side-content only.

### IDEA-033 — Trailer craft lessons for Mythoras marketing (The Line Animation reel)
**Status:** Reference — craft notes, not systems
**Source:** 2026-07-17 Agent E analysis of `thelineanimation` Instagram reel DaVl8b_D202; frames in `_research/trailer-thelineanimation-frames/`
**Summary:** Pipeline-as-spectacle reel lessons: silhouette-first animatic; isolated FX pass; composition as tone; scale-contrast creature framing; intimate bond/mask shots; multi-register grading; short-form escalation ladder (establish → pursue → rupture → power → voyage → bond). Prefer story-forward trailers that *use* these craft moves — process BTS alone assumes existing fame.
**Detail:** See `NARRATIVE_AND_SYSTEMS_IDEAS.md` §1.

---

## Owner Dump — 2026-07-19 (Wave 0 capture)

> Captured from owner feedback dump + `PLAN_FEEDBACK_RESEARCH_2026-07-19.md`. Not canon. Cross-map: `SESSION_FEEDBACK_2026-07-19.md`.

### IDEA-034 — Emissary of \<administrative being\> (Luminary-related class rename)
**Status:** Naming seed — Wave 4 grill
**Source:** 2026-07-19 dump
**Summary:** Potential rename for Luminary-related Foundation/class toward **"Emissary of \<one type of ascendant administrative being\>"**. Do not lock until naming grill; keep Luminary Arbiter as current GDD string until then.

### IDEA-035 — Sticky Cipher global mods OK
**Status:** Sold / keep
**Source:** 2026-07-19 dump
**Summary:** Sticky **global** Cipher charges/mods are allowed alongside per-run juice. Both avenues legitimate. Wave 3 designs sustain without banning sticky globals.

### IDEA-036 — Forge Agents naming; Terminal soft
**Status:** Reopened soft
**Source:** 2026-07-19 dump
**Summary:** Owner not sold on **Forge Terminal** word or full Imprint/operation list. Crafting wrapper name **Agent** is sold. Explore "**Forge Agents**" naming; Terminal dubious. Wave 2.

### IDEA-037 — Agent-only foundation rethink; ReAgent / DeAgent MVP audit
**Status:** Active exploration — Wave 2
**Source:** 2026-07-19 dump
**Summary:** Re-ground crafting on **Agent** as the foundation. Audit ReAgent / DeAgent / enAgent (DOC_v5 §§42–44) for **MVP overload** — may stay, may slim. Do not invent new currency families until foundation is clear.

### IDEA-038 — Gear sockets = modules (not skills); soldering keyword
**Status:** Direction approved in principle — Wave 1 + Wave 4 vocab
**Source:** 2026-07-19 dump
**Summary:** Gear sockets hold **modules / rollable inner systems**, not skills. Prefer keyword **soldering** for install/bond fantasy. Explicit drop: skills-on-gear-sockets.

### IDEA-039 — Active / support / optional third avenue
**Status:** Exploratory — Wave 1
**Source:** 2026-07-19 dump
**Summary:** Under creature-skill rethink, explore **active + support + optional third avenue** (utility/aura/reactive/etc.). Do not assume PoE 6-link is the only grammar.

### IDEA-040 — PoE1 vs PoE2 links preference (PoE1 free-flow)
**Status:** Owner preference logged — Wave 1
**Source:** 2026-07-19 dump
**Summary:** Prefer **PoE1 free-flow linking** feel over PoE2 socket/link redesign as primary inspiration. Blind copy of PoE2 sockets = dropped. Research must explain why PoE1 free-flow worked.

### IDEA-041 — Resonance / STAB as discoverable type/team levers
**Status:** Exploratory under skill rethink — Wave 1; do not silent-restore
**Source:** 2026-07-19 dump
**Summary:** Resonance and STAB-like bonuses may return as **discoverable type/team levers** once skills live on creatures. Explicit grill required — STAB was previously removed; Alignment is conditional.

### IDEA-042 — Affinity / Frequency Alpha–Delta vocabulary superseded-pending-replacement
**Status:** **CRITICAL gap — superseded-pending-replacement** (do not delete DOC_v3 tables yet)
**Source:** Owner 2026-07-19; Wave 0 audit
**Summary:** Owner: Affinity/colour-as-word was **not final**. **Alpha / Beta / Gamma / Delta** Frequency naming to be removed — (A) poor naming (B) a replacement idea existed inside Skill Frame. Soft-fail **match-as-bonus** intent may survive under a new name/mechanic.
**Audit (Wave 0):** Still live in `DOC_v3.md` §10.5 / §11.8 / §12.3 (+ Hue Agent). **Not found** in SESSION_DECISIONS / GRILL_HANDOFF / IDEA_LOG (pre-dump) / GDD_DRIFT_AUDIT as a removal decision. **Transcript search:** no prior session evidence of the removal decision or the Skill Frame replacement idea — only the 2026-07-19 dump itself. Log gap; Wave 1 must not treat Alpha–Delta as locked final vocabulary.
**Wave 1 follow-on (`SKILLS_REDESIGN_EXPLORATION.md`):** Keep soft-fail **bonus-not-gate** (+15% intent from §12.3). Drop Alpha–Delta names. Stop calling colour-match a “Resonance bonus” (collides with locked Stream Resonance). **Internal GDD clash:** §11.8 says mismatch = “reduced effectiveness”; §12.3 says mismatch = “no penalty” — resolve in grill (prefer §12.3 bonus-only unless owner wants a mild tax).
**Action:** Leave DOC_v3 tables in place until replacement named; mark superseded here + `SESSION_FEEDBACK_2026-07-19.md` Canon Gap.

### IDEA-043 — Gearing load 5×10 ≈ 50 crafts; empty slots OK; role-distributed defenses
**Status:** Design tension — Wave 2
**Source:** 2026-07-19 dump
**Summary:** Full squad gearing (~5 creatures × ~10 slots ≈ 50 crafts) is a real pacing problem. **Empty slots OK early.** Defenses should be **role-distributed** across squad, not every creature maxed identically.

### IDEA-044 — Party loot = player squad rules; multiplayer separate; no free self-host that kills monetization
**Status:** Direction — Wave 2 (loot); multiplayer deferred
**Source:** 2026-07-19 dump
**Summary:** "Party loot" framing maps to **player squad** rules for now. True multiplayer loot is a separate design. Do **not** ship free self-host that kills monetization.

### IDEA-045 — Cipher program naming; first Cipher loop anatomy
**Status:** Active exploration — Wave 3
**Source:** 2026-07-19 dump
**Summary:** Name the Cipher **program** fantasy. First-loop anatomy: init → layout → creatures → completion → rewards → board writeback. Cross-link IDEA-008 / IDEA-013.

### IDEA-046 — Profiles as alternate Cipher boards
**Status:** Seed — Wave 3
**Source:** 2026-07-19 dump
**Summary:** **Profiles** = alternate Cipher boards / fresh game-mode starts (pairs IDEA-029 factory specialization).

### IDEA-047 — Phrecia Idol System (high-commitment depth)
**Status:** Parked high-commitment depth — Wave 3 (NOT “Frisia”)
**Source:** 2026-07-19 dump (spelling correction)
**Summary:** **Phrecia Idol System** as inspiration for high-commitment board depth. Guardrails later — do not full-numeric recreate. Spelling: **Phrecia**, not Frisia.

### IDEA-048 — Guide occupation titles (Quartermaster / Head Engineer / etc.)
**Status:** Naming seed — Wave 4
**Source:** 2026-07-19 dump
**Summary:** Network guide titles: Quartermaster, Head Engineer, or fantasy-leadership titles. Coordinate with IDEA-022 rename + IDEA-034 Emissary naming.

### IDEA-049 — Examiner → Herald / Architect reopen (do not lock)
**Status:** Reopened — do not lock
**Source:** 2026-07-19 dump
**Summary:** Examiner framing may become Herald / Architect / Engineer. Explicitly **do not lock** this session. Wave 4 naming.

### IDEA-050 — Network Agents rename + L1–L4 salt-frontier beat sheet
**Status:** Rename required + narrative beat sheet — Wave 3/4
**Source:** 2026-07-19 dump
**Summary:** Rename Network Agents (collision with crafting Agents — see IDEA-022). Author **L1–L4 salt-frontier** onboarding/escalation beat sheet (curriculum interrupts, not menu unlocks).

### IDEA-051 — Assembly / compile / transpile originals
**Status:** Seed — Wave 2 fiction adjacency
**Source:** 2026-07-19 dump
**Summary:** Originals vs replicas language via **assembly / compile / transpile** verbs (extends IDEA-026). Crafting/Gl!tch/Cipher authenticity stories.

### IDEA-052 — BIOS / Voidstone-style Grid patches
**Status:** Exploratory — Wave 4 Grid grill
**Source:** 2026-07-19 dump + `POE_CLASS_PASSIVE_TREE_RESEARCH.md`
**Summary:** Motherboard Grid variation via **BIOS / patch / Voidstone-like** rewrite modules — temporary or permanent rule patches on local Grid geography. Ownership: Technician-global Grid only.

### IDEA-053 — Cipher Touch / ghosted modifiers
**Status:** Seed — Wave 3; ghost-roll carefully
**Source:** 2026-07-19 dump
**Summary:** **Cipher Touch** / ghosted modifiers as Cipher juice/authorship tools. Ghost-roll operations need careful design (AllFlame lesson — IDEA-060).

### IDEA-054 — 3.29 Chaos bench rerolls as operation inspiration
**Status:** Inspiration only — Wave 2
**Source:** 2026-07-19 dump + AllFlame / 3.29 research
**Summary:** PoE 3.29 Chaos bench–style reroll **operations** as crafting inspiration — not a league clone. Fit under Agent framework.

### IDEA-055 — Nebby-like legendary creature narrative (redesign not copy)
**Status:** Narrative seed — later
**Source:** 2026-07-19 dump
**Summary:** Legendary creature arc with Nebby-like companion/revelation energy — **redesign, do not copy** Pokémon Ultra Beast plot.

### IDEA-056 — Creature naming session needed
**Status:** Process flag — Wave 4
**Source:** 2026-07-19 dump
**Summary:** Dedicated creature naming session required. Do not mass-generate names in research waves.

### IDEA-057 — Pinnacle quote craft
**Status:** Craft note — marketing / pinnacle UX
**Source:** 2026-07-19 dump
**Summary:** Pinnacle encounters need authored **quote craft** (voice, threat, invitation) — not placeholder boss bark.

### IDEA-058 — AllFlame refined notes (league/vessel/hire/juice)
**Status:** Reference refinements — do not day-one core; cite `CURSE_OF_THE_ALLFLAME_ANALYSIS.md`
**Source:** 2026-07-19 dump
**Summary (owner refinements):**
- Vessel hub later; Vesper-like entity candidate
- Chart voyage = league candidate (not day-one core)
- Ghost-roll ops carefully
- Anomalies more **player-agentic**
- Hire = Technician + creatures (not merc clone)
- Colour affinity bonus already in GDD but vocabulary reopened (IDEA-042)
- Juice loved
- Learn PoE2 Ritual carefully — **not** sockets
**Wave:** 2/3 as contrast only; Wave 1 must not treat AllFlame colour lesson as novel vs DOC_v3 soft-fail.
