# Mythoras — Domain Vocabulary ([CONTEXT.md](http://CONTEXT.md))

> This file is the canonical domain language for Mythoras: Shattered Realms. Every agent session reads this first. Update it during `/grill-with-docs` sessions as terms are resolved. This file contains ONLY domain vocabulary — never implementation details, file paths, or code snippets. Last updated: 2026-08-14 (Principal vs Pinnacle Evolution; player pitch is not this file)

---

## CRITICAL CORRECTIONS — Read Before Anything Else

These are things agents commonly get wrong. They are flagged first because getting them wrong poisons downstream work.

**1. Mythoras is NOT a dark game.** Tone is dynamic and biome-dependent. Gentle routes between zones carry a light, almost parlour-like register (think Pokémon travel music). A dark enchanted forest encounter is heavy and tense. A volcanic elite battle is oppressive. A sunlit highland zone is expansive and warm. The skybox, soundtrack, particle effects, and world fixtures all shift together to signal emotional register. Arcane Cartographer's dark atmospheric framing was a working direction that is NOT locked. Do not apply a single dark tone universally. When in doubt: what is the current situation, the current biome, the current stakes?

**2. Motherboard Grid is GLOBAL to the Technician, NOT per-creature.** One passive tree. The Technician carves a single global route through it that benefits all creatures. There are 5 slot-local subroutes that branch off the global route — these add modifiers specific to the creature in that slot (not the creature entity — the slot). Opportunity cost is balanced at the slot level. This prevents micromanagement hell while preserving deep build decisions. Do NOT describe the Grid as per-creature. Do NOT describe creatures pathing individually through the tree.

**3. Oura is a TEMPORARY name.** The Oura resource/defensive layer needs a naming session. Do not treat it as final. When referencing it, use "Oura (temp)" to flag it as pending.

**4. Priority as a FIXED skill property does NOT exist.** Initiative ordering emerges from Speed stats, support costs, and build investment. Players optimise and figure it out. Do not add High/Normal/Slow labels to skill Priority. If a skill has inherent timing properties, those come from its Speed cost or charge mechanics, not a classification.

**5. Damage architecture Q1–Q10 are LOCKED (July 2026 grill session).** Channel → Stream → Tags is confirmed. Channel is NOT a defence schema grouping — it is (1) Attribute scaling navigation on the Grid and (2) modifier/tag shorthand. Do not describe Channel as "what defence applies." Stream Resonance is two-tier (see Combat table). Q10: Turn Program ordering is automatic — no manual sequence assignment; order from Speed + skill-inherent timing; combos emergent. Flask-analogue and trigger skills are future expansion, not campaign baseline.

**6. Multiple defensive layers are ALLOWED with investment.** The rule is not "single HP pool forever." The rule is: no parallel HP pools that exist by default without meaningful player investment and trade-off. Barrier as an absorb layer is fine. A Ward-equivalent that players can invest into as a separate layer is fine and potentially desirable. What was wrong was Oura (temp) being implemented as a mandatory parallel HP pool without build investment.

**7. The game is a campaign with an endgame, not a roguelike.** Technicians take a Squad through Regions, then the Cipher Network. Zone runs may have run-like structure; that is not the product. Do not describe the whole game as a roguelike.

**8. UI architecture direction is locked; visual language remains open.** World View is the default and lets traversal or battle dominate the viewport with only a compact contextual HUD. Workspace View is player-invoked and contracts the live world while configurable docks/widgets appear. No permanent surrounding management panels during normal gameplay. Arcane Cartographer and Field Studio are retired draft identities; do not implement their tokens as final.

**9. Skill Cards are CREATURE-LOCAL, not Technician-global.** Skill Cards, the Skill Frame, Support Card links, Breakthrough, and creature Mana belong to individual creatures. The Technician owns the Motherboard Grid (global route + slot-local subroutes), Command Deck, Lanes, and Warbanner/Inscription deployment. Technician Level may gate how many Skill Frame slots creatures can unlock squad-wide — that is a progression gate, not skill ownership. Do not describe Skill Cards as squad loadout items owned by the Technician. Do not describe the Grid as belonging to a creature.

**10. Damage Type is the TYPE analog; Category is NOT a type.** The 11 damage types (Inferno, Glacial, Voltaic, Eldergrove, Blight, Tidal, Psionic, Fae, Phantom, Physical, Tectonic) are the Pokémon-transpose type layer. Categories (Physical, Primal-Elemental, Biotic-Elemental, Phenomena) are loose modifier-shorthand and Grid-navigation groupings only — never put categories on the type effectiveness chart. Attributes are stats, not types. Origin is heritage not a type. Signature follows the damage type on the skill being used. STAB removed; damage type Alignment provides conditional bonuses when skill damage type matches creature's invested type.

**11. Tag-based interactions are a third layer above the type chart.** The type chart handles Primary damage type vs defender Primary damage type. Species/Origin-derived tags (Winged, Draconic, Grounded, Aquatic, etc.) create a separate conditional interaction layer — mechanical effects and/or damage modifications when specific damage types hit. Tags are publicly visible on a creature's profile. Immunities exist in two places: chart-based (authored, rare, type vs type) and tag-based (property-based, e.g. Winged vs grounding effects) — disclosed separately in UI. Flying type from Pokémon is removed; Winged tag replaces its interactions. Fighting type removed; Martial Origin replaces it.

**12. Origin has a tertiary role in damage architecture — not a type axis.** Origin (Scalesbourne, Martial, Arcane, etc.) influences: Bloodlines (primary mechanical role), Origin Affinity tags on Skill Cards, certain mods/affixes, specific Grid interactions, some skill effects. Origin does NOT appear on the type effectiveness chart. Tags derived from Origin (Draconic universal for Scalesbourne; Winged as default tendency) feed the tag interaction layer. Tag assignment: universal Origin tags (always present), default tags (tendency, species can deviate), exceptional species tags (authored per-species).

**13. Principal is the creature’s species specialisation — not a second tree named Pinnacle Evolution.** About 3–4 single-stage choices per species; each severely changes how that creature plays. How a Principal is configured is OPEN. Do not run Principal and Pinnacle Evolution as two layers.
---

## Core Actors


| Term           | Definition                                                                                                                                                                                  | Avoid                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| **Technician** | The player character. A human (or humanoid) who commands a Squad of creatures. Not a programmer or tradesperson. | "player", "tamer", "commander" |
| **Creature**   | A non-human being of this world that can be contracted by a Technician. Creatures fight, learn skills, wear a kit, and slot into a Squad. | "monster", "beast", "pet"      |
| **Principal**  | A single-stage specialisation choice on a species (about 3–4 per species). It severely changes how that creature plays. Configuration of a chosen Principal is OPEN. | "class", "specialisation" as a Technician class, "Pinnacle Evolution" as a second layer |
| **Examiner (reopened)** | Historical name for a heightened mid-zone encounter. The Examiner/gym-leader framing and competition wrapper are reopened; retain this only as design history until replacement terminology is locked. | Treating "Examiner" as current locked canon |


---

## World & Zones


| Term                                        | Definition                                                                                                                                                                                                                                                                                                                                                                                                               | Avoid                                          |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| **The Protocol**                            | The overarching metaphysical network that connects zones and governs creature behaviour. The setting's central mystery. Power in the Protocol is structural and compiled — not mystical or elemental.                                                                                                                                                                                                                    | "the world", "the game world", "the map"       |
| **Zone**                                    | A navigable area of the campaign world. Static fixture grammar (recognisable landmarks in consistent relationships) within procedurally generated layouts. Not a roguelike floor.                                                                                                                                          | "level", "map", "dungeon", "stage"             |
| **Cipher**                                  | An endgame consumable that acts as a deployable zone. Crafted and modified before running. Completing Ciphers fills the Cipher Network.                                                                                                                                                                                               | "map", "instance", "dungeon key"               |
| **Node**                                    | An interactive point within a zone. Types: Encounter, Vendor, POI, Exit, Traversal. Represented as a diamond (45° rotated square) in the UI — but note: the UI direction for nodes is under review.                                                                                                                                                                                                                      | "tile", "square", "point of interest"          |
| **Sequence**                                | A campaign act. Sequences are the major divisions of the campaign narrative.                                                                                                                                                                                                                                                                                                                                             | "act", "chapter", "area"                       |
| **Region**                                  | A major geographic division of the world containing multiple zones and a regional competition structure. Regions have distinct biomes, tone registers, and cultural identities.                                                                                                                                                                                                                                          | "area", "world", "biome"                       |
| **Trial of Ancestors (reference mechanic)** | PoE's Trial of Ancestors league — a faction-based competition structure where the player champions their tribe against others in escalating rounds. This mechanic's structure (faction identity, escalating competition, champion status as both achievement and obligation) is a strong reference for Mythoras's regional competition and Cipher endgame integration. Not copied directly — used as design inspiration. | Do not call any Mythoras mechanic by this name |


---

## Tone & World Register

These are not vocabulary terms — they are design axioms that every agent must internalise.

**Tonal range is intentional.** Mythoras moves between registers depending on context:

- Gentle route traversal between zones → light, almost parlour-like, Pokémon travel music register
- A sunlit highland zone → expansive, warm, curious
- A dark enchanted forest → oppressive, tense, unfamiliar
- An elite battle in a volcanic biome → heavy, dangerous, particle-saturated
- A moment of narrative weight → silence, then score

**The skybox is a dynamic mood system.** Colour temperature, gradient, ambient tone, and particle effects shift together with the current situation. Cheerful tones signal safety and discovery. Oppressive tones signal danger and escalation. The world feels alive because its register changes with you.

**Soundtrack is not background.** Like Expedition 33's score, music actively shifts emotional register in real-time. Like Pokémon's ambient sound design, certain tones become intimately tied to the world's brand identity. The Technician moving through a sunlit route should feel different in every sense from the Technician entering an elite battle.

**The world has a cosmological register.** Power is structural and compiled — not magical or elemental. The Protocol feels like a network with biological properties, not a fantasy realm with magic. This should inform everything from UI language to how creatures and skills are described.

---

## Combat & Battle


| Term             | Definition                                                                                                                                                                                                                                                                            | Avoid                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Battle**       | A turn-based grid encounter on the existing zone surface. Footprints are variable and asymmetric; fixed 8×8 is retired. Location, fixtures, positions, and approach direction persist through adaptive continuity. | "fight", "encounter", "combat" (fine but less precise) |
| **Turn Program** | The planning model: players queue all creature actions for the round (Planning Phase), then watch execution with enemy initiative interleaving (Execution Phase). This is non-negotiable as a design commitment.                                                                      | "turn-based", "action points" (implies reactive, not programmed) |
| **Damage Type**  | A named damage identity. 11 types across 4 categories: **Physical** (Physical, Tectonic), **Primal-Elemental** (Inferno, Voltaic, Glacial, Tidal), **Biotic-Elemental** (Eldergrove, Blight + one TBD), **Phenomena** (Psionic, Fae, Phantom). Each type has: a Signature (always-on output shaping), an Ailment suite, and Tier 2 Resonance mechanics unlocked through Grid investment. Fantasy names (Inferno, Glacial, etc.) are the Protocol voice equivalents of PoE's Fire, Cold, etc. | "Stream", "Channel", "element", "magic type" |
| **Category**     | A loose grouping of damage types for modifier shorthand and Grid navigation only. NOT on the type effectiveness chart. "+% Primal-Elemental damage" covers all four Primal-Elemental types. Attribute associations are loose (not one-to-one), like PoE's Chaos floating between INT/DEX. | "Stream", "damage tier", "Channel" |
| **Domain**       | One of four fundamental alignments governing Stream affinity and creature identity. Also used for Psionic deployable terrain in combat — these are distinct uses of the same word, which is a naming problem to resolve.                                                              | "element", "type", "web domain"                                  |
| **Warbanner**    | A protocol-level combat modifier applied to a battle. Opt-in, high-risk, high-reward. Similar in philosophy to MoP's Elite Battle randomisation — players choose to engage with harder content for better rewards. Final naming TBD (Protocol / Standard / Edict / Sigil candidates). | "modifier", "challenge", "buff", "affix"                         |
| **Load**         | Per-creature fatigue accumulating during zone runs. Thresholds create archetype bonus loss and Signature reduction. Squad rotation (bench recovery) is the primary mitigation — this is a Mythoras-unique lever.                                                                      | "stress", "heat", "stamina"                                      |
| **Ailment**      | A persistent negative effect during battle. 19 ailments with Severity, DoT Intensity, and DoT Virility as separate scaling vectors.                                                                                                                                                   | "debuff", "status effect", "condition"                           |
| **Phantom**      | The third Phenomena damage type. Ghost/spirit/incorporeal identity — distinct from Psionic (mental) and Fae (enchanted wild). Replaces "Shadow" as the name. | "Shadow", "Necrotic", "Profane" |
| **Oura (temp)**  | A defensive resource — TEMPORARY NAME, pending naming session. Not a parallel HP pool by default. Can become a meaningful defensive layer with player investment and trade-off. Do not implement as a mandatory secondary HP bar.                                                     | Treat any reference to "Oura" as provisional                     |
| **Tectonic**     | A Physical-category damage type with internal depth — material hardness, density, crystalline structure as sub-properties. NOT a separate top-level category. Stays within Physical. NOT three separate types (Steel/Rock/Ground from Pokémon) — one rich type. | "Ground type", "Rock type", "Steel type" |
| **Field**        | The 3 active creature slots during battle. Maximum 3 creatures on field at once. "Field" refers to these active slots, not the whole grid. | "battlefield", "active slots"                                    |
| **Bench**        | The 2 remaining Squad creatures not currently on field. Bench creatures recover Load passively. Squad rotation moves creatures between Field and Bench between rounds. | "reserves", "inactive", "back row"                               |
| **Squad**        | All 5 creatures the Technician brings into a zone run: 3 Field + 2 Bench. Composition is locked on zone entry — no mid-zone swaps. This is the single-Technician roster unit (was formerly called "Party"). | "team", "party" (Party now means the multiplayer group) |
| **Party**        | A MULTIPLAYER group of Technicians (accounts) playing together. Accounts join a Party; a Party is not owned inside one account. Do NOT use "Party" for one Technician's 5 creatures — that is the Squad. | "squad", "team" (squad = the 5 creatures) |


---

## Progression & Build


| Term                    | Definition                                                                                                                                                                                                                                                                                          | Avoid                                                                                                                              |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Motherboard Grid**    | The Technician's global passive tree. ONE tree, ONE global route carved by the Technician, benefiting all creatures. Five slot-local subroutes branch from the global route adding per-slot modifiers. This is NOT per-creature. The slot is the unit of local investment, not the creature entity. | "per-creature tree", "passive tree" (implies per-character in PoE sense — it is, but clarify the squad implication), "talent tree" |
| **Attributes**          | Authority, Invictus, Animus, Order. The major player-facing stat interface; other substats feed from them. Stats, not types. | "STR/AGI/INT", inventing extra primary attributes |
| **Global Route**        | The Technician's primary path through the Motherboard Grid. Modifiers on the global route apply to all creatures in all slots.                                                                                                                                                                      | "main path", "trunk"                                                                                                               |
| **Slot-Local Subroute** | One of 5 branches off the global route. Adds modifiers specific to the creature occupying that slot. Opportunity cost is balanced at the slot level — swapping a creature into a slot changes which slot-local bonuses apply, but not the creature's permanent identity.                            | "creature-specific path", "per-creature branch"                                                                                    |
| **Skill Card**          | An equippable card granting a creature a skill. **Creature-local** — installed in that creature's Skill Frame, not shared Technician-wide. Found, crafted, modified.                                                                                                                                 | "ability", "skill gem", "squad skill", "Technician skill", "card" (without "Skill")                                              |
| **Skill Frame**         | The creature's intrinsic skill configuration network — anchor nodes (Skill Cards), satellite nodes (Support Cards), species-specific topology. Active skills are modularised by supports per skill; support count/rules are OPEN. | "Technician skill tree", "global skill slots"                                                           |
| **Support Card**        | Modifies a Skill Card when linked in that creature's Skill Frame. Creature-local. Augments how skills function. Support Cards can carry initiative penalties — Speed as support cost is a meaningful trade-off.                                                                                    | "support gem", "Technician augment", "squad-wide support"                                                                        |
| **Command Deck**        | Technician-owned supplementary tactical cards during combat (Assert, Suppress, Analyze, Reposition, Intercept). Uses Command Charges. Not a substitute for creature Skill Cards.                                                                                                                    | "Skill Card", "creature ability deck", "move set"                                                                                 |
| **Resonance**           | Two-tier system locked (July 2026 grill). **Tier 1 — Stream Resonance (baseline):** repeated same-Stream hits apply a small stacking bonus; no investment required; visible to all players. **Tier 2 — named deep mechanics:** Combustion (Inferno), Crystallization (Glacial), Conductance (Voltaic), Symbiosis (Eldergrove), Dominion (Psionic), Tremor (Tectonic), Veil (Fae), Enchantment (Blight), Corrosion (Phantom), Undertow (Tidal), Impact (Physical) — activate through heavy Grid investment in that Stream. Per-Stream, not per-creature; two creatures with different affinities have independent stacks. | "affinity", "synergy", "combo" |
| **Foundation**          | The Technician's starting identity (Warlord, Bladedancer, Architect, Channeler). Sets starting position on the Motherboard Grid.                                                                                                                                                                    | "class", "starter", "archetype"                                                                                                    |
| **Contracted**          | A creature permanently recruited to the Technician's roster.                                                                                                                                                                                                                                        | "captured", "tamed", "owned", "caught"                                                                                             |
| **Pinnacle Evolution**  | Historical name. **Do not use** as a second layer beside Principal. Whether a later upgrade exists *on* a Principal is OPEN. | Treating this as current canon |


---

## Competition & Regional Structure


| Term                     | Definition                                                                                                                                                                                                                                                                                                      | Avoid                                                      |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| **Champion**             | A Technician who has won regional competition. Not merely a title — Champions carry an ongoing duty to participate in the Cipher endgame as part of their status. Similar to Pokémon's Champion structure but with permanent post-campaign obligation.                                                          | "winner", "top player", "final boss beater"                |
| **Regional Competition** | The structured competitive framework within each Region. Inspired by Pokémon's gym-badge journey and Trial of Ancestors' faction-vs-faction escalation, but distinctly Mythoras. Identity is carved through play rather than being carbon-copied from either reference. Details TBD — under design exploration. | Do not define this as "Gym badges" or "Trial of Ancestors" |
| **Cipher Network**       | The endgame after the regional campaign. Complete Ciphers to fill the network; scale toward maximum tier, then the hardest bosses and mechanic-based battles. | "endgame maps", "end content", "post-game"                 |
| **Threat Attunement**    | An optional difficulty dial (0–150%+) scaling rewards and enemy modifiers per encounter. Players who rush Elite content without build readiness risk expedition failure — similar to MoP's Elite Battle philosophy.                                                                                             | "difficulty setting", "challenge modifier"                 |


---

## Economy & Crafting


| Term                 | Definition                                                                                                                 | Avoid                                              |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **Agent (crafting)** | A crafting currency item. CRITICAL: always specify "crafting Agent" in development contexts to distinguish from AI agents. | "orb", "currency", "reagent"                       |
| **Forge Terminal**   | The crafting interface.                                                                                                    | "crafting bench", "workbench", "forge" (ambiguous) |
| **Imprint**          | Pattern-locking at the Forge Terminal. Also the `/imprint` harness skill — always clarify which context.                   | "lock", "fix", "seal"                              |
| **Gl!tch**           | High-risk Skill Card fundamental property change. The ! is intentional.                                                    | "glitch", "corrupt", "transform"                   |


---

## Technical / Harness Terms


| Term                 | Mythoras context                                                                                                 | Common meaning that conflicts            |
| -------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **Agent (crafting)** | Crafting consumable currency                                                                                     | AI model-driven software entity          |
| **Agent (AI)**       | Model-driven software entity in the harness                                                                      | In-game crafting currency                |
| **Domain**           | Elemental alignment (game) OR Psionic deployable terrain (combat) — two distinct uses, naming problem to resolve | URL namespace, software concept          |
| **Imprint**          | Forge Terminal mechanic (game) OR `/imprint` harness skill (dev)                                                 | Generic: "to mark"                       |
| **Protocol**         | The metaphysical network setting of Mythoras                                                                     | Network protocol, communication standard |
| **Architect**        | One of the four Foundations (game) OR `/architect` harness skill (dev)                                           | Software architect                       |
| **Stream**           | Damage delivery system in the game                                                                               | Data stream, stream processing           |
| **Motherboard Grid** | The Technician's global passive tree                                                                             | Computer hardware component              |


---

## Ownership & Scope — Who Owns What

These scopes are frequently conflated. Getting them wrong collapses Mythoras into a single-avatar ARPG.


| Scope | Owns | Does NOT own |
| ----- | ---- | ------------ |
| **Technician (global)** | Motherboard Grid global route; Command Deck; Lanes; Command Charges; Warbanner/Inscription deployment authority; Technician Level progression | Skill Cards; Skill Frame; creature gear; creature Mana; per-creature Breakthrough |
| **Creature (local)** | Skill Frame; equipped Skill Cards; Support Card links; Breakthrough (one per creature); gear; Creature Level; Creature Mana; species identity (Primary/Secondary Stream, Origin, mods) | Motherboard Grid points; Command Deck; Lanes |
| **Slot (local)** | Slot-Local Subroute allocation on the Grid — modifiers apply to whichever creature currently occupies that squad slot | The creature entity permanently — swapping creatures changes who receives subroute bonuses |
| **Squad (composition)** | Roster of 5 creatures (3 Field + 2 Bench); slot assignment; archetype thresholds; combined resistance coverage; bench rotation | A shared skill pool; a single combined Skill Frame |

**Interaction rule:** A creature fights using **its own Skill Cards** while benefiting from **Technician Grid investment** (global + its current slot's subroute) and **its own gear**.

---

## Type System Mapping — Pokémon Transpose

Mythoras uses PoE for damage **math** and Pokémon for creature **matchup identity**. Do not merge the metaphors.


| Pokémon | Mythoras | Role |
| ------- | -------- | ---- |
| Species type (defender) | Primary + Secondary Stream on creature | What the creature **is** defensively |
| Move type (attacker) | Stream on Skill Card | What the hit **deals** |
| STAB | Stream Alignment (conditional; STAB removed) | Bonus when skill Stream matches creature Stream commitment |
| Type chart | Stream effectiveness table (**TBD — grill required**) | Attacker Stream vs defender Stream profile |
| Base stats | Attributes + creature stats + gear | Not types — separate axis |
| Ability | Species Mod implicits; Mythic/Legendary authored mechanics | Not the same as Stream |
| TM / taught move | Skill Card acquisition + Frame install | Creatures have no natural moves |

**Not types:** Channel (scaling group only), Attribute (stat), Origin (heritage), Tag (skill classification), Domain (naming collision — OD-007).

**Signature** always expresses the **Stream on the skill being used**, not the creature's species identity alone.

---

## Open Questions — Do Not Invent Answers

These are unresolved. Flag them, defer them, never silently fill them in.


| ID     | Question                                                                              | Blocks                            |
| ------ | ------------------------------------------------------------------------------------- | --------------------------------- |
| OD-001 | Domain naming — [DOMAIN_A]–[DOMAIN_D] need names                                      | Part I lore, DOC_v5_new §44       |
| OD-002 | Principal design — ~3–4 single-stage choices per species; configuration OPEN | Creature endgame |
| OD-003 | Warbanner final naming — Protocol / Standard / Edict / Sigil                          | All Warbanner references          |
| OD-004 | UI design language — open exploration needed, Arcane Cartographer is NOT locked       | All UI implementation             |
| OD-005 | Oura (temp) naming — needs a naming session                                           | All defensive layer references    |
| OD-006 | Damage architecture — **CLOSED** (Q1–Q10 locked July 2026 grill) | — |
| OD-007 | Domain naming collision — "Domain" means both elemental alignment AND Psionic terrain | Combat and lore consistency       |
| OD-008 | Regional competition structure identity — Mythoras-specific framing needed            | Campaign narrative, region design |
| OD-009 | Zone static fixture grammar — needs map editor design session in Mythoras Builder     | Zone generation system            |
| OD-010 | **CLOSED** — Q10 locked: automatic Turn Program ordering (Speed-driven; emergent combos) | — |
| — | Stream type effectiveness table — formal attacker/defender chart | Combat math, DOC_v2 |
| — | Skill Card inventory model — shared items vs creature-bound (see GRILL_PREP) | Economy, UI, crafting |


---

## Open Design Explorations

Three questions are articulated but unanswered — Principal configuration, the
Modifier / Affix classification system, and creature equipment slot volume.
They live in [`OPEN_DESIGN_EXPLORATIONS.md`](OPEN_DESIGN_EXPLORATIONS.md)
because they are grill-prep essays, not vocabulary. Do not invent answers to
them here.

---

*[CONTEXT.md](CONTEXT.md) is a living document. Update during every* `/grill-with-docs` *session. Vocabulary only — no implementation details.*
