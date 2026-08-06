# Session Decisions — OD-004 (expanded) — 2026-07-12 to 2026-07-15

> This session began as the OD-004 UI grill and expanded into world presentation, campaign
> structure, endgame architecture, build-commitment scope, and the Technician instrument.
> This file is the durable record. Research backing lives in `OD_004_RESEARCH_SYNTHESIS.md`,
> `IMAGINED_PLAYER_STATEMENTS.md`, and two canvases (`master-of-piece-case-study`,
> `mythoras-comparative-rendering-research`). Nothing here overrides an explicit future grill.

---

## Vocabulary / scope (LOCKED)

- **Squad** = one Technician's 5 creatures (3 Field + 2 Bench). Formerly mislabelled "Party".
- **Party** = a MULTIPLAYER group of Technicians/accounts. Accounts join a Party.
- **Technician** = the durable character/build identity (like a PoE character).
- **Account** owns multiple Technician characters.
- **Creature** = per-character, but transferable between a player's characters.
- **Season** = the neutral term for a league/cycle. Seasons roll into a Standard server and do
  not affect the next Season. ("Epoch" was only floated as a possible in-world name.)
- **Velden** and all current Region names = retired placeholders. Strong, memorable naming required.
- **Oura** and **Fortitude** = rejected names (still need replacements).
- **Phantom** = locked (third Phenomena damage type; replaces "Shadow").

## UI architecture (LOCKED direction)

- **World View** is the default: world/game view dominates the viewport; only a compact
  contextual/tactical HUD is shown. Traversal AND battle both run here.
- **Workspace View** is player-invoked via a dedicated hotkey: the live world contracts toward
  the centre and configurable outer docks/widgets appear (RS3-inspired). Reversible; layout
  state persists; closing restores the world.
- Battle can run in either view; combat normally uses most of the viewport (NOT a small panel).
- No permanent surrounding management panels during gameplay (rejects DOC_v6's framed shell).
- Deep systems (Grid, Forge Terminal) may still use dedicated full-workspace surfaces.
- Guardrails to honour (from RS3 research): protected minimum world viewport, curated presets,
  edit-locked by default, safe reset, low-resolution reflow, execution-phase panels read-only.

## World presentation / rendering (LOCKED direction + open pipeline)

- **Adaptive continuity (LOCKED):** battle occurs on the same physical surface. Location,
  fixtures, positions, and approach direction persist; the renderer MAY reversibly change pose,
  detail, foliage, and tactical treatment. No wipe to an unrelated arena.
- **Variable, asymmetric battle footprints** — fixed 8×8 is retired (stale `CONTEXT.md` line).
- **"One persistent Three.js scene" is NOT locked** — the requirement is perceptual/spatial
  continuity, not scene-graph continuity or any specific engine.
- Environment owns palette and mood; NOT universally dark. Sinnoh-like distinct regional palette
  (teal ground, green-outlined grass, more dynamic camera) is an open angle for the first region.
- **Rendering pipeline OPEN.** Strongest first comparison: pure 2D isometric vs a 3D board with
  2D units; add full 3D only if continuity/lighting/visible-equipment justify the cost.
  (Mewgenics verified 2D; Into the Breach ~200 hand-authored maps; author sim data
  projection-neutral, but author final art at its target projection.)

## World identity (LOCKED direction)

- Inhabited arcane/mystical fantasy FIRST; a latent computational/relay substrate ("Protocol")
  underneath. NOT cyberpunk/Tron/apocalypse-tech; NOT reducible to "technobiological".
- Layered read: immediate ecology → secondary resonance/recurrence/relay → deep compiled/network
  structure. Convergence and "global compiler" remain speculative, not locked.
- Ground regions in concrete geography/economy/transport/ecology (PoE/Wraeclast method); mundane
  texture alongside spectacle; environmental storytelling as subjective testimony.
- **Celebrity/spectacle layer (NEW, open):** creature competition is a dominant cultural sport;
  celebrities/dignitaries attend big matches; an in-world social-reaction/"social media" analogue
  (form TBD; mobiles may not exist as-is). Parked as a worldbuilding thread.

## Campaign structure (DIRECTION, to refine when building)

- Fantasy = ambitious **rookie Technician-athlete** aiming to dethrone an incumbent Champion
  (Faker/Worlds framing), NOT a child collecting badges. No young-child framing.
- Retain PoE-style **acts/zones + side quests** as the majority of the campaign; competition is
  the SPINE, not the whole campaign. Do not lose act/zone structure in favour of Pokémon.
- Competition wrapper being reinvented (Accreditation / gym-leader / Examiner all reopened).
  Working shape: open qualifier → authored regional circuit (few major stops, WCS-like) →
  Worlds-like regional Major → Championship. Tournament brackets over a live Elo ladder for MVP.
- **Champion → Cipher duty (LOCKED):** must defeat the Regional Champion to enter the endgame
  (Kitava-like gate). No partial Network access. Duty = being strong enough to withstand Cipher
  pressure (dimensional breaches, unknown creatures).
- Optional threads to explore (not locked): clubs/sponsors/associations as entry routes (NOT a
  management sim); early narrative choices with per-character consequences (PoE bandit-style /
  Gold-Silver crime thread); per-Foundation opening tweaks; meet the "professor" later than
  Pokémon; a Respected Elder + mysterious/grim-fantasy locales.
- **Opening: OPEN.** No rival (leaning). Establishing battle may be a creature / the recurring
  creature variant (PoE-style), not a rival — exploratory. Master-of-Piece-style opening comic
  as pre-game context is an open idea. Prototype openings before locking.
- Correction: Naruto's Fourth Hokage is NOT a "four kings" motif; One Piece Yonko is. Use a
  four-apex group only if four has an in-world reason.

## Endgame (DIRECTION)

- **Cipher Network** = PoE-Atlas-inspired endgame; consumable, re-rollable Ciphers; own UI
  distinct from the Regional Atlas; campaign zone templates reused + new ones.
- **Layers**: seven-layer (OSI-symbolic) NOT rejected; treat Layers as regimes with UNEQUAL
  tier/depth counts rather than seven equal tiers. Needs a dedicated Cipher grill.
- **Frontier** (endgame passive tree) — name liked; keep.
- **Ascension** — keep; a Delve/Minecraft-like scaling excavation pillar whose exclusive
  resources augment mapping AND gear (deliberately original vs PoE fossils).
- **Pinnacle bosses** — keep. MVP endgame = Cipher + Proving + 1-2 Pinnacles.
- **Threat Attunement** — kept (risk/reward difficulty dial).
- Meaningful-aspiration policy: rotating rare mods (Beyond/Nemesis-like), low-weight pinnacle-only
  drops, conditional drop tables, hidden knowledge left to player discovery.
- **Warbanners** — at risk; if kept they are creature-local utility Skill Cards (AoE buff). Open.
- Resistance-penalty progression event (Kitava-like) is an idea to consider (function, not numbers).

## Build commitment / progression architecture (LOCKED direction)

- **Model D inside Model B:** hard build framework (Foundation immutable; Discipline/Grid trunk/
  Squad thesis committed) with substitution inside the framework; a different build ⇒ new Technician.
- **Grid (FINALISED):** one Technician-global route + **five slot-local routes**. Local points
  branch from the global route and affect only the creature in that slot. "Per-creature slot" =
  slot-local. Routes belong to the slot, not the creature entity.
- Every new Technician repeats the campaign and Waypoints.
- **Season-shared:** Cipher Network map/topology, Frontier progress/difficulty, Stash, crafting
  library, currency/gold, selected unlocks. NOT repeated per character.
- Each Technician must personally complete the campaign + become Champion before using the
  shared Cipher Network. Some rewards are once-per-account (campaign).
- Party (multiplayer) play encouraged; scale cost/difficulty for parties (e.g. 5-10× resources).
- Substitutes are emergent (observability/level-gated creature availability); no loaner creatures;
  underfilled slots allowed; starter-style entry (PoE Twilight-Strand-like kit) acceptable.

## Technician instrument + creature medium (DIRECTION, some open)

- Instrument inspired by PoE2 **Runeseeker's Call (a Runic Fork)**; name still open
  ("Grin/Rune Seeker" provisional). Per-Technician signature variation: more/fewer fork
  spines/prongs, energised gradient colours (green/yellow/blue/red).
- **Dial**: reference video is a tellurion (Dilum Sanjaya), i.e. one input coordinating nested
  indexed relationships — NOT literally a storage dial. Recommended fiction: a **reciprocal
  identity imprint + resonance profile** read/tuned by the fork; a temporary field anchor may
  appear only when needed; 5 rings (3 live Field / 2 dim Bench). Yu-Gi-Oh-card / static-Pokeball
  feel acknowledged as the reference vibe.
- **OPEN:** where a creature's physical body is when off-Field, and whether it can refuse the
  call. User dislikes the pure Digimon "data" route. Needs a decision or a build-time experiment.

## Data/engine posture (DIRECTION)

- No database in the frame/simulation loop. Author content in versioned files; optional SQLite for
  build-time validation/catalog; immutable content packs; save = snapshot/action-log + seed + pack
  hash; DuckDB for balance/telemetry. Service DB (Postgres/SpacetimeDB) only if authoritative
  multiplayer/economy is later required.

## Method (KEEP)

- **Imagined-player statements** per system before designing mechanics (see file).
- MVP posture: build one extensible environment fragment + authoring pipeline; iterate. Do NOT
  polish a whole Region up front.

---

## Open threads (parked, not blocking)

| Thread | Status |
|--------|--------|
| Cipher Layer/tier structure (7-layer symbolism, unequal depths) | dedicated grill |
| Competition wrapper final shape (qualifier → circuit → Major → Championship) + naming | refine on build |
| Opening structure (no rival; creature/variant establishing battle; per-Foundation tweaks; comic) | prototype |
| Off-Field creature body + refusal; dial/instrument fiction | decide or experiment |
| Dossier-system targeted progression | direction captured; dedicated grill/prototype |
| Celebrity/spectacle + social-reaction layer | worldbuilding |
| Skill Frame wrapper redesign (PoE1-socket-inspired, not copied) | grill |
| Channel defensive-schema cleanup | grill (flagged) |
| Scouting/Intel redesign (imagined-player statement written) | grill |
| Principal (species-ascendancy) rename; Foundation names (keep Commandant: Orsoth etc.) | naming |
| Region/Season naming scheme | naming |
| Type effectiveness chart (11×11 multipliers) | Planning Room |
| Defensive layers + Phenomena resistance vocab (Oura/Fortitude replacements) | grill |
| Movement/hop-speed as a traversal stat | prototype |

## Dossier-system targeted progression (LOCKED DIRECTION + OPEN implementation)

Full direction: `MYTHORAS_DOSSIER_SYSTEM.md`.

**LOCKED DIRECTION:** preserve Divination Cards' directed variance reduction: a specific farmable
activity → incremental progress → a targeted reward. Location/source targeting and expected-effort
signals matter. Teach sources first: bind targets primarily to biomes/regions, allow particular
maps/zones to carry higher weight, disclose or make discoverable whether progress is boss-only or
area-wide, and expose an expected completion-time class. Prefer weights high enough that completion
feels like a real pursuit. Exact drop probabilities may remain hidden; opacity of odds is not
treated as a failure.

Use **dossier** as the preferred framing seed and extend it beyond creatures to informational/Agent
targets, gear-system pieces, Skill Card representations, and other build/progression targets.
Rewards may also be operating outcomes: consumable or persistent operators that modify other
systems (for example, changing a future linking operation). Use hybrid specificity: some dossiers
guarantee exact outcomes; others guarantee a family, tier, or category.

Cipher rotations should refilter which environments express a dossier's biome/region affinity and
which maps have elevated weight, differentiating runs without arbitrarily breaking ecological
source rules. Do **not** copy Scrying, its sage wait/grind, or its concept. Develop a Mythoras-native
discernment process from visible Cipher traits, rotation signals, and accumulated run evidence.

**OPEN:** final name and representation (cards, idol/residue, Yu-Gi-Oh-like summon media, evidence
objects, or another form); exact/broad specificity bands; operator catalogue; inventory/redemption;
rotation remapping and knowledge persistence; completion-time vocabulary; and the high-risk
interface. Tradability is a deliberate dual-track hypothesis, not a lock: non-tradable progress may
be stronger/easier to complete, while tradable progress remains scarcer and economically valuable.

**PARKED:** incomplete-progress double-or-nothing / zero-or-double gambling; a later
community-submission process inspired by PoE's community DNA but not copied wholesale.

## Stale-doc cleanups identified by audits — reconciled 2026-07-15

- **Done:** DOC_v2 §16 Q10 stubs replaced with the CLOSED automatic-ordering decision.
- **Done:** DOC_v2 Shadow→Phantom; rejected Fortitude name replaced by explicit TBD terminology.
- **Done:** POE_RESEARCH Grid and Resonance corrections applied; Six Examiners marked stale/reopened.
- **Done:** Party→Squad for the 5-creature roster in current docs and prep material.
- **Done:** DOC_v6 marked as a stale draft superseded by World View / Workspace View.

## GDD reconcile pass — 2026-07-15

Files touched: `SESSION_DECISIONS_2026-07-15.md`, `CONTEXT.md`, `GRILL_HANDOFF.md`,
`SESSION_HANDOFF.md`, `NEXT_SESSION_PROMPT.md`, `DOC_v2.md`, `DOC_v3.md`, `DOC_v4.md`,
`DOC_v6.md`, `POE_RESEARCH.md`, `BACKLOG.xml`, `AGENT_STATE.xml`,
`GRILL_PREP_SKILL_OWNERSHIP_TYPE.md`, `GDD_DRIFT_AUDIT.md`, `OD_004_RESEARCH_SYNTHESIS.md`,
and `BOOTSTRAP.md`.

Known residuals intentionally not rewritten:

- `DOC_v2.md` still needs its larger locked Damage Type/Category architecture rewrite and formal
  type chart; this pass only removed direct locked-canon contradictions.
- `DOC_v4.md` preserves the retired Region/competition draft under explicit stale/reopened
  banners; replacement names and wrapper are open and were not invented.
- `DOC_v6.md` preserves detailed shell/visual history under an explicit top-level supersession
  banner; Workspace View layout details and rendering pipeline remain open.
- `DOC_v5.md` was scanned and required no change in this reconciliation pass.
