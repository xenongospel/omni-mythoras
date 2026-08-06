# MYTHORAS: SHATTERED REALMS

## Comprehensive Game Design Document

---

# Part III: Progression Systems

---

## 8. Motherboard Grid (Passive Tree)

The Motherboard Grid is Mythoras's global passive tree — a rectangular PCB-aesthetic board of interconnected nodes that defines how Technicians and their creatures develop. The Grid puts meaningful build decisions in the player's hands: every point spent is a deliberate allocation, every path taken costs points not spent elsewhere.

The Motherboard Grid is distinct from the Skill Frame (the creature-side skill configuration system — see §11) and from the Frontier (the endgame Network passive tree). The Motherboard Grid is the Technician's permanent character-wide passive investment.

### 8.1 Structure Overview


| Component             | Description                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------- |
| **Global Route**      | Primary path through the board affecting all creatures                                      |
| **Slot-Local Subroutes** | Five slot-bound paths branching from the board edge. Each subroute belongs to a squad slot — the slot owns the allocation, not the creature. Benefits whichever creature currently occupies that slot. |
| **Solder Points**     | Travel nodes with selectable attribute bonuses                                              |
| **Nodes**             | Standard functional passives with single mechanical bonuses                                 |
| **Notables**          | Named nodes with significant mechanical effects — cluster endpoints                         |
| **Masteries**         | Cluster-completion rewards offering curated cross-system modifier lists                     |
| **Directives**        | Build-defining nodes with mandatory trade-offs — the most impactful single allocations      |
| **Dockets**           | Fixed positions where Funcs can be installed — have built-in internal node clusters         |
| **Funcs**             | Droppable items that socket into Dockets, providing modifier content and regional influence |


### 8.2 Technician Disciplines (5 for MVP)

At character creation, the Technician chooses a **Discipline** that determines their starting position on the Grid. This shapes pathing options and early-game identity across the entire team.

#### The 5 MVP Disciplines


| Discipline             | Attribute | Starting Zone            | Identity                                                                                                                                                               |
| ---------------------- | --------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Commandant: Orsoth** | Authority | Authority Core           | Frontline commander pledged to the Orsoth tradition. Power through dominance. Early access: Inferno, Tectonic, Fortification                                           |
| **Interceptor**        | Invictus  | Invictus Core            | Precision operator. Speed, accuracy, surgical strikes. Early access: Physical, Evasion, Crit foundations                                                               |
| **Luminary Arbiter**   | Animus    | Animus Core              | Phenomena wielder and structured arbiter. Elemental mastery, ailment synthesis. Early access: Voltaic, Phenomena, Attunement                                           |
| **Architect**          | Order     | Order Core               | Systems builder. Barriers, duration, control, structure. Early access: Glacial, Barrier, Duration                                                                      |
| **Adverse Errant**     | Wanderer  | Grid Centre (CPU Socket) | Deliberate generalist — chose breadth over specialisation. Equidistant access to all attribute cores. More starting stat-packs, access to Wanderer-exclusive clusters. |


The four Hybrid Disciplines (Executor, Phantom, Operative, Sentinel) are deferred to expansion. Their design space is preserved — accessible through Forbidden Hybrid items, Sacred Hybrid weapons, and specific Directives at launch.

#### Grid Position

```
                [COMMANDANT: ORSOTH]
                    (Authority)
                         │
                         │
   [INTERCEPTOR]─────[ADVERSE ERRANT]─────[ARCHITECT]
     (Invictus)          (Centre)            (Order)
                         │
                         │
                  [LUMINARY ARBITER]
                      (Animus)

```

#### Discipline Starting Conditions

Each Discipline provides:

- Starting position on the Grid
- 3 free starting nodes (attribute-appropriate)
- Early pathing advantage toward associated content
- Starting Warbanner access (see §16)
- Weighted initial Command Deck toward Discipline identity

Adverse Errant additionally receives more starting stat-packs than the Pure Disciplines and access to Grid clusters only reachable from the centre position.

#### Forbidden Hybrids


| Pair                   | Character                                                            |
| ---------------------- | -------------------------------------------------------------------- |
| **Authority + Animus** | Raw force vs supernatural mastery — philosophically opposed          |
| **Invictus + Order**   | Speed/precision vs discipline/sustain — incompatible scaling vectors |


These pairs have no Hybrid Disciplines. Forbidden Hybrid effects are accessible only through Unique gear, specific Directives, or rare species mods. Armament base types combining Forbidden pairs (Armour/Oura, Evasion/Barrier) are Unique only.

---

### 8.3 Point Allocation

#### Universal Point Pool


| Property                    | Value                                                                |
| --------------------------- | -------------------------------------------------------------------- |
| **Total Points**            | 148                                                                  |
| **Sources**                 | Technician levelling, quest rewards, endgame content                 |
| **Distribution**            | Player decides allocation between Global Route and Slot-Local Subroutes |
| **Per-subroute cap**        | 32 points maximum per Slot-Local Subroute                                |
| **Total Branch pool**       | 48 points across all 5 Slot-Local Subroutes                             |


Points are fungible. Global Route investment benefits all creatures. Slot-Local Subroute investment benefits the creature currently occupying that slot — the **slot** owns the subroute, not the creature entity. Swapping a different creature into the slot changes which creature receives the subroute bonuses, but the subroute allocation itself persists. No artificial caps on Global investment — opportunity cost governs.

#### Strategic Tension

Every point on Global Route is not spent on Slot-Local Subroutes, and vice versa. Example distributions:

```
BUILD A — Global-Heavy (team synergy focus)
Global Route: 100 points (Inferno + Crit scaling for the whole squad)
Slot-Local Subroutes: 48 points spread across 3-4 creatures

BUILD B — Specialist (single-creature carry)
Global Route: 55 points (efficient pathing only)
Creature 1 Subroute: 32 points (hyper-invested primary)
Remaining Subroutes: 16 points spread across support creatures

BUILD C — Balanced
Global Route: 73 points
Slot-Local Subroutes: 75 points spread relatively evenly

```

---

### 8.4 Node Types

#### Solder Points (Travel Nodes)

The connective tissue of the board. Each solder point grants a **selectable attribute bonus** — the player chooses one of two compatible attributes on allocation. A solder point in the Authority region might offer "+8 Authority OR +4 Order." The available pair depends on the solder point's position.


| Property        | Value                                                    |
| --------------- | -------------------------------------------------------- |
| **Effect**      | Selectable attribute bonus (one of two options per node) |
| **Purpose**     | Connect clusters, provide attribute foundation           |
| **Respec cost** | 50% of standard respec cost                              |


#### Nodes (Small Passives)

Standard functional nodes carrying a single mechanical bonus. Form the body of clusters.

**Example Nodes:**

- +8% Inferno damage
- +5% Critical Multiplier against targets with an ailment
- +12 Armour
- +15 Maximum Life
- +3% Attack Speed while an ally is adjacent

#### Notables

Named nodes with significant mechanical effects. Cluster endpoints and build milestones. Each cluster has one primary Notable endpoint, larger clusters may have two (one scaling, one behaviour).


| Property        | Value                                |
| --------------- | ------------------------------------ |
| **Effect**      | Named, significant mechanical effect |
| **Purpose**     | Build milestones, cluster payoffs    |
| **Respec cost** | Moderate-to-expensive                |


**Example Notables:**


| Notable                | Zone               | Effect                                                             |
| ---------------------- | ------------------ | ------------------------------------------------------------------ |
| **Pyroclasm**          | Authority/Animus   | +25% Inferno damage, +15% AoE radius                               |
| **Surgical Precision** | Invictus Core      | +30% Critical Strike Multiplier when target is alone on their tile |
| **Eternal Barrier**    | Order Core         | Barrier pool recharges 2% per turn even in combat                  |
| **Ailment Cascade**    | Animus Core        | Ailments you inflict have +20% Severity, -10% duration             |
| **Bleed Pressure**     | Authority/Invictus | Bleeding targets take +15% Physical damage from all sources        |
| **Frost Foundation**   | Order/Invictus     | Chill→Freeze progression requires 20% fewer stacks                 |


#### Masteries

Cluster-completion rewards — the most interesting effects on the Grid. Each cluster has a Mastery icon that activates after the player allocates at least one Notable in the cluster. The player selects one effect from a curated list (4-7 options). Costs 1 point. Only one Mastery per cluster. No hard cap on total Masteries — opportunity cost governs.

**Design principle:** Every Mastery option must reference at least two Mythoras systems. Raw numerical scaling is not appropriate for Mastery lists — Masteries are where build-enabling cross-system interactions live.

**Example Mastery options (Inferno cluster):**

- When a creature in your squad applies Ignite to a target another squad member already Ignited, the new Ignite inherits the existing one's remaining duration
- Inferno Skill Cards with the [Projectile] tag generate bonus Heat per hit (Inferno Combustion interaction)
- When you activate a Tonic while any creature has an active Ignite on the field, that Tonic's effect duration extends by 1 turn
- Immolate stacks applied by Spell-tagged skills count double for Ignite Severity calculation

**Example Mastery options (Crit cluster):**

- Critical strikes against targets standing on a Zone tile deal damage to all other enemies also standing on Zone tiles
- When a creature lands a critical strike, the next creature in turn order gains +1 Mana recovery for their action
- Critical strikes with Skill Cards at Breakthrough level (21-25) have +15% base critical strike chance
- Critical strikes with Attack-tagged skills apply 1 stack of the striking creature's Primary Stream ailment

**Example Mastery options (Defensive cluster):**

- When a creature's Load exceeds 40%, its Armour value increases by 30%
- Guard skills used by Construct Origin creatures also apply 1 stack of Pressure to the attacker
- When a Tonic with a defensive effect is activated, all squad creatures recover 5% of their maximum Life
- Creatures in the back row of the tactical grid gain +15% to the provisional Phenomena resistance stat (name/model TBD) for the first 2 turns of combat

#### Directives

Build-defining nodes with mandatory trade-offs. The most impactful single allocation on the Grid — each one fundamentally changes how the build operates. Every Directive has a visible downside stated in the node text. No Directive is strictly better than allocating its points elsewhere — the trade-off is real.


| Property        | Value                                                    |
| --------------- | -------------------------------------------------------- |
| **Count**       | 12-16 total at launch                                    |
| **Trade-off**   | Mandatory — every Directive has a visible downside       |
| **Respec cost** | Very expensive                                           |
| **Placement**   | Zone boundaries, outer edges, Forbidden Hybrid corridors |


**Placement categories:**


| Category                  | Count | Position                                         | Reach                                        |
| ------------------------- | ----- | ------------------------------------------------ | -------------------------------------------- |
| **Core Directives**       | 6-8   | Zone boundaries between adjacent Attribute pairs | Mid-campaign reachable                       |
| **Peripheral Directives** | 4-6   | Outer edges past major dockets                   | Deep endgame investment                      |
| **Forbidden Directives**  | 2-4   | Inside Forbidden Hybrid corridors                | High travel cost, sparse surrounding content |


**Example Directives:**


| Directive               | Benefit                                                                                              | Trade-off                                           |
| ----------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Assured Destruction** | Attacks always roll crit chance twice, take the higher result                                        | Non-crits deal 30% less damage                      |
| **Relentless**          | Your attacks cannot be Evaded. +25% damage vs targets above 50% HP                                   | Critical strikes deal normal damage (no multiplier) |
| **Elemental Harmony**   | Inferno and Glacial no longer cancel each other. Targets with both take +25% damage from all sources | Lose elemental reaction burst damage                |
| **Dry Lightning**       | Drenched is not consumed by Voltaic damage. Stacks to 3, each +15% Voltaic damage                    | Drenched targets take 20% less Physical damage      |
| **Veil Striker**        | All hits treated as Phantom Veil eligible regardless of creature's Primary damage type | Provisional Phenomena resistance -15% for the creature (name/model TBD) |


No two Directives are reachable within 10 points of each other. Each requires dedicated pathing investment.

#### Dockets

Fixed positions on the board where Funcs can be installed. Dockets are unlocked by pathing to their gateway node during normal allocation.

**Key property:** Dockets have built-in internal node clusters. When a player unlocks a docket, the docket opens an internal cluster of nodes allocatable using normal Grid points. These internal nodes provide value even without a Func installed — the docket is never dead space.


| State           | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| **Locked**      | Not yet pathed to. No content visible.                                |
| **Open-empty**  | Pathed to. Internal cluster nodes available. No Func installed.       |
| **Open-loaded** | Func installed. Internal cluster enhanced, regional influence active. |


**Two tiers:**


| Tier             | Count | Position                                  | Internal Cluster              | Func Enhancement                                 |
| ---------------- | ----- | ----------------------------------------- | ----------------------------- | ------------------------------------------------ |
| **Major Docket** | 5     | Cardinal attribute cores + centre         | 5-7 nodes including a Notable | Func adds 2-3 nodes, strong regional influence   |
| **Minor Docket** | 15-20 | Distributed for visual/functional balance | 2-4 nodes, no Notable         | Func adds 1-2 nodes, moderate regional influence |


**Visual motifs (communicating architecture through layout, not naming):**

- **Centre-adjacent minor dockets** — positioned in a row near the CPU Socket (the visual centre where Adverse Errant starts). First Func slots most builds can access. Rendered as narrow vertical slots.
- **Cardinal major dockets** — positioned at attribute cores. Wide horizontal slots. Installed Funcs visually extend from the docket like a card in a slot.
- **Edge Connector Sockets** — at the board periphery where the main board interfaces with Slot-Local Subroute regions.

#### Funcs

Droppable items that socket into Dockets. They provide modifier content (nodes, notables) and regional influence (bonuses to nearby nodes).

**Four colour-coded categories aligned to Attributes:**


| Colour     | Attribute | Mod Pool Focus                                            |
| ---------- | --------- | --------------------------------------------------------- |
| **Amber**  | Authority | Physical damage, Armour, fortification, Authority scaling |
| **Teal**   | Invictus  | Crit, Evasion, speed, precision                           |
| **Violet** | Animus    | Elemental damage, ailments, Phenomena, attunement         |
| **Cyan**   | Order     | Barriers, duration, control, sustain                      |


**Regional influence:** A Func installed in a Docket provides a bonus to nodes within a radius. The radius scales with Func quality:


| Influence Tier | Radius        | Source                |
| -------------- | ------------- | --------------------- |
| Small          | 1-node radius | Common/campaign Funcs |
| Medium         | 2-node radius | Rare/mid-game Funcs   |
| Large          | 3-node radius | Unique Funcs          |


Major Dockets have +1 to their Func's base radius.

**Func rarity ladder:** Common Funcs have basic rolls. Rare Funcs have better rolls and more mod slots. **Unique Funcs** are authored chase items with named identities — some provide unique modifiers, some Override nearby nodes (transforming how existing Grid nodes function rather than adding modifiers on top).

**Crafting Funcs:** Basic Agents apply to Funcs similarly to gear — reroll, add, upgrade operations. Full specification in DOC_v5_new.

---

### 8.5 Channel System (Grid Resonance Thresholds)

**Note:** Grid Channels are distinct from damage Channels (Physical/Elemental/Phenomena) and from Stream Signatures. Grid Channels are structural lanes running through sections of the board that reward investment commitment through threshold bonuses.


| Property                 | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| **Definition**           | Pre-defined paths through the Grid aligned to combat themes      |
| **Threshold investment** | Allocating nodes along a Channel builds toward threshold bonuses |
| **Thresholds**           | Milestones at 5/10/15/20 nodes allocated along the Channel       |
| **Scope**                | Channel bonuses apply globally to all creatures                  |


**Example: Inferno Channel**


| Nodes Allocated | Bonus                                                                           |
| --------------- | ------------------------------------------------------------------------------- |
| 5 nodes         | +5% Inferno damage (all creatures)                                              |
| 10 nodes        | Ignite duration +1 turn                                                         |
| 15 nodes        | Inferno skill effects enhanced (specific mechanical upgrade per Channel design) |
| 20 nodes        | +10% More Inferno damage                                                        |


Commitment vs spread: Reaching higher thresholds in one Channel provides multiplicative bonuses. Spreading across multiple Channels provides broader but shallower benefits.

---

### 8.6 Slot-Local Subroutes

Slot-Local Subroutes are regions of the Grid accessible through Connector Sockets at the board's edges. They provide local routing that benefits only the creature assigned to a specific squad slot.

**Slot binding:** Each of the 5 Connector Sockets is permanently associated with a Squad slot (Slot 1 through Slot 5). Points allocated through a Connector Socket affect whichever creature occupies that slot.

**Subroute content is shared per slot** — the nodes accessible through Connector Socket 1 are the same regardless of which creature occupies Slot 1. Different creatures make different use of the same subroute region based on which nodes they allocate within it.

**Points belong to the slot, not the creature.** When a creature is swapped out, subroute allocation remains with the slot. The new creature inherits the existing subroute configuration. If the configuration doesn't suit the new creature, the player respecs at normal respec cost. This makes **which creature goes in which slot** a genuine build decision — not a creature inventory decision.


| Property                               | Value                                    |
| -------------------------------------- | ---------------------------------------- |
| **Total subroute pool**                | 48 points                                |
| **Per-subroute cap**                   | 32 points maximum                        |
| **Both Global and Subroute paths**     | Can venture into Forbidden Hybrid zones  |


**Connectors (rare gear modifier):** Creatures with a Connector modifier on their gear have an enhanced interface with their assigned slot's subroute. Possible Connector effects:

- +2-4 effective subroute points for this creature while in this slot
- Nodes in this slot's subroute providing Attribute X instead provide Attribute Y for this creature
- This creature can allocate the Docket inside its slot's subroute without having pathed to it on the main board
- This slot's subroute nodes are 15-20% more effective for this creature

Connectors are rare drops from creature-focused content — tying subroute enhancement to the creature-collecting loop.

---

### 8.7 Attribute Zones

Each of the four attribute quadrants has a characteristic node density and thematic focus:

#### Authority Zone


| Node Type                   | Effect Focus                                                |
| --------------------------- | ----------------------------------------------------------- |
| **Impact Nodes**            | Physical damage scaling, weapon bonuses                     |
| **Fortification Nodes**     | Armour, toughness, HP                                       |
| **Momentum Nodes**          | Attack speed, movement on kill                              |
| **Notable: Iron Will**      | Melee attacks deal +20% damage against targets with full HP |
| **Notable: Crushing Force** | Physical hits have Armour Breaking property                 |


#### Invictus Zone


| Node Type                    | Effect Focus                                              |
| ---------------------------- | --------------------------------------------------------- |
| **Precision Nodes**          | Critical strike chance, accuracy                          |
| **Agility Nodes**            | Evasion, movement speed                                   |
| **Evasion Nodes**            | Dodge chance, Buffer band widening                        |
| **Notable: Deadly Momentum** | Critical strikes grant +1 movement tile for the next turn |
| **Notable: Phantom Step**    | 15% chance Evasion triggers on Spell-tagged hits          |


#### Order Zone


| Node Type                       | Effect Focus                                               |
| ------------------------------- | ---------------------------------------------------------- |
| **Barrier Nodes**               | Barrier pool scaling                                       |
| **Duration Nodes**              | Effect and zone durations                                  |
| **Control Nodes**               | Ailment and CC effectiveness                               |
| **Notable: Living Fortress**    | Barrier pool recharges 3% per turn, even in combat         |
| **Notable: Structured Defence** | Each active Warbanner increases Barrier pool ceiling by 8% |


#### Animus Zone


| Node Type                      | Effect Focus                                                |
| ------------------------------ | ----------------------------------------------------------- |
| **Attunement Nodes**           | Elemental resistance, Stream alignment bonuses              |
| **Oura Nodes**                 | Oura pool scaling, dampening range                          |
| **Ailment Nodes**              | Ailment Severity, DoT Intensity                             |
| **Notable: Arcane Deflection** | +20% all Elemental resistances                              |
| **Notable: Resonant Oura**     | Oura pool spend also applies 10% of spent amount as healing |


---

## 9. Creature System

Creatures in Mythoras are defined by their **Origin**, **Stream Alignment**, **Species Mods**, **Skill Frame**, and **equipped Skill Cards** — all transparent, targetable, and meaningful. No hidden stats. No natural moves. No invisible IVs or EVs.

### 9.1 Core Design Philosophy


| Aspect                            | Description                                                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **No Natural Moves**              | Creatures are blank slates for Skill Card assignment via the Skill Frame                                                 |
| **Universal Skill Compatibility** | Any Skill Card can be equipped to any creature — Tags affect compatibility at the species level, not at the system level |
| **Stream Alignment**              | Creatures gain conditional bonuses when using skills that match their Primary or Secondary Stream                        |
| **Build Identity**                | Emerges from Skill Card choice + Skill Frame configuration + Stream Signature + Species Mods + Grid investment + gear    |


---

### 9.2 Scaling Identity System

Three layers define how a creature scales in combat, with Combat Archetypes as an additional cross-creature dimension:

#### Layer 1: Stream Alignment

Every creature has a **Primary Stream** (fixed per species) and a **Secondary Stream** (variable — see §9.11). Using skills that match these Streams provides conditional bonuses gated behind build-relevant requirements.


| Alignment                  | Conditional Bonus                                      | Signature Access                            |
| -------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| **Primary Stream match**   | Conditional multiplier (build requirement must be met) | Alignment bonuses apply; **Signature always follows the Skill Card's Stream** at full potency when that skill is used |
| **Secondary Stream match** | Same condition types, lower values                     | Reduced Alignment bonus values              |
| **Off-stream**             | No alignment bonus                                     | No penalty — full off-stream play is viable; Signature still follows skill Stream |


**Condition examples:** While target is Ignited (for Inferno builds), on critical strike (for precision builds), while above 50% Life (for healthy builds), while in an active Domain (for Psionic builds). Conditions create build requirements — gear, Grid, and Skill Cards must support maintaining the condition.

Each alignment also includes a modest base bonus (+8% damage with matched skills) so the system never punishes players who don't deeply commit to Resonance conditions.

#### Layer 2: Stream Signature

Each Stream has an always-on Signature — a passive characteristic behaviour that shapes output without build requirements. See DOC_v2_new §8 for the complete Signature table and mechanics.

Signatures are the surface-level type identity layer, accessible to all creatures using a given Stream regardless of build depth.

**Stream Resonance is a unified two-tier system (confirmed July 2026 grill):**

- **Tier 1 — baseline:** Every Stream has a baseline Resonance layer. Repeated hits of the same Stream apply a small stacking bonus visible to all players. No investment required.
- **Tier 2 — named deep mechanics:** Heavy Grid investment in a specific Stream activates its named mechanic as a whole system — Impact (Physical), Combustion (Inferno), Crystallization (Glacial), Conductance (Voltaic), Symbiosis (Eldergrove), Dominion (Psionic), Tremor (Tectonic), Veil (Fae), Enchantment (Blight), Corrosion (Phantom), Undertow (Tidal). These are formal named mechanics, not distributed notables.

The Grid provides the investment pathway to Tier 2 activation, and individual notables, Masteries, and gear affixes can further deepen and modify Tier 2 mechanics — but the unified system itself is a first-class game feature, not a label for scattered content.

#### Layer 3: Species Mod Implicits

Species-specific mod pools (cluster jewel architecture) provide build-defining notables unique to each species. Full specification in §9.7.

#### Combat Archetypes (Cross-creature dimension)

Combat Archetypes are emergent build identities unlocked through multi-system investment — Grid clusters, gear affixes, species affinity, and squad composition thresholds. They sit between Stream identity and build expression as an additional engagement layer. Full specification in DOC_v2_new §9.

Archetypes are species-agnostic but creature-enabled. Natural vs forced access creates meaningful species-selection decisions. Three Tiers — individual investment (Tier 1), squad threshold (Tier 2-3). Significant for hard endgame content.

---

### 9.3 Origin Tags (10 Types)

Every creature has exactly one Origin Tag defining its thematic nature and combat fantasy. Origins provide natural archetype access bias and carry combat-relevant Bloodline effects (see DOC_v2_new §23 for the Bloodline framework).


| Origin           | Combat Fantasy                          | Thematic Identity                                                                     |
| ---------------- | --------------------------------------- | ------------------------------------------------------------------------------------- |
| **Scalesbourne** | Draconic power, breath mastery          | Dragons, wyrms, scaled predators — creatures of elemental breath and primal dominance |
| **Martial**      | Weapon masters, disciplined fighters    | Trained combatants, weapon-wielding creatures, disciplined physical force             |
| **Arcane**       | Spellcasters, enchanters                | Creatures steeped in supernatural knowledge, wielders of Phenomena and enchantment    |
| **Nocturne**     | Nocturnal predators, horror entities    | Darkness-dwelling creatures, ambush hunters, fear-inducing entities                   |
| **Construct**    | Machines, golems, engineered beings     | Artificial creatures, mechanical entities, beings of deliberate design                |
| **Avatar**       | Pure elemental incarnations             | Living embodiments of a single element — pure, intense, singular                      |
| **The Psi**      | Pure psychics, mind controllers         | Creatures of mental dominance, telekinesis, psychic projection                        |
| **Fae-Touched**  | Enchanted nature spirits, tricksters    | Creatures touched by Fae influence — whimsical, unpredictable, nature-bound           |
| **Abyssal**      | Entities from beyond, entropy incarnate | Creatures from deep places, void-touched beings, entropy made flesh                   |
| **Spectral**     | Ghosts, spirits, undead, haunters       | Incorporeal or semi-corporeal entities, phase-shifters, death-touched                 |


Origins carry Bloodline effects beyond thematic identity — see DOC_v2_new §23 for the framework. Specific Bloodline content (10 Origins × multi-node trees) is a dedicated design session.

Two Scalesbourne creatures of different species may have entirely different Primary Streams. The Origin provides thematic cohesion; the species provides mechanical identity.

---

### 9.4 Creature Variants

Individual creatures encountered in the world have a Variant tier that determines implicit quality, mod access, and chase potential.


| Variant      | Visual                    | Properties                                                                                                                                | Chase Factor   |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **Initiate** | White/grey                | Standard implicit rolls. Base creature.                                                                                                   | Common         |
| **Magic**    | Blue gradient             | Slightly better implicit pool access.                                                                                                     | Uncommon       |
| **Rare**     | Blue-gold gradient        | +1 implicit slot. Better rolls.                                                                                                           | Elite          |
| **Exotant**  | Gold-silver               | Full 2 implicit slots. Better weighting toward notables. Access to T2-T1 tier mods at lower creature levels. Advanced Rare-adjacent tier. | Elite chase    |
| **Apex**     | Pinnacle visual treatment | Maximum implicit configuration. Guaranteed notable-tier rolls. Pinnacle creature tier — appears in deep endgame content.                  | Pinnacle chase |


**Note on Unique:** Unique as a rarity concept is reserved for future application — items with unique authored properties. Creature Unique is not used in this tier scheme.

Variant naming mirrors the universal rarity language (Initiate, Magic, Rare share naming with gear) while Exotant and Apex are creature-specific upper tiers with distinct mechanical character.

---

### 9.5 Species Tier (Lore and Base Potential)

Species Tier represents the creature's lore rarity and base potential. This is a property of the **species**, not the individual — a Common species can produce an Apex variant.


| Tier          | Identity                                       | Base Stats      | Notes                                     |
| ------------- | ---------------------------------------------- | --------------- | ----------------------------------------- |
| **Common**    | Widespread, frequently encountered             | Standard        | Most species                              |
| **Mythic**    | Rare, stories told of sightings                | +10% base stats | Small hand-designed set                   |
| **Legendary** | Ancient, singular or near-singular individuals | +20% base stats | Authored identity and signature mechanics |


#### Legendary and Mythic — Rebuilt Direction

Mythic and Legendary species are a small hand-designed set with **innate authored identity and signature mechanics** — not built through the Principal or Skill Card systems in the same way Common species are. These are the creatures players remember.

**Species Legendaries:** Rare creatures with plural individuals possible. Each carries a signature mechanic that changes how it operates in combat.

**Cosmic Legendaries:** Singular world-shaping entities (narrative pillars, dragon-tier). Not catchable roster creatures.

**Legendary family prefix groupings:** Families group thematically across regions (Primal, Apex, Spirit, etc. — illustrative, naming session pending). Legendaries have a distinctly narrower progression tree with a single-choice identity commitment.

---

### 9.6 Encounter Rarity (Combat Modifiers)

When creatures are encountered in the world, Encounter Rarity modifies difficulty, drops, and implicit tier access. This is separate from Creature Variant — a Standard encounter can produce an Apex variant creature.


| Rarity       | Visual            | Stats | Modifiers  | Implicit Tier Bonus         |
| ------------ | ----------------- | ----- | ---------- | --------------------------- |
| **Standard** | Normal appearance | Base  | 0          | None                        |
| **Charged**  | Subtle glow       | +30%  | 1 random   | +1 tier access              |
| **Resonant** | Strong aura       | +60%  | 2-3 random | +1 tier access, can roll T1 |
| **Apex**     | Dramatic visual   | +100% | 4+ random  | Guaranteed T1 availability  |


Encounter rarity and creature rarity variant are independent. Finding a Resonant-encounter Exotant-variant creature is the desirable combination.

---

### 9.7 Species Mod Pools (Cluster Jewel Architecture)

Each creature species has a unique mod pool containing **Notables** (rare, build-defining, low weight) and **Small Passives** (common, generic, high weight). Every species has its own miniature passive tree of possible rolls.

#### Pool Architecture


| Component          | Description                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| **Notables**       | Rare, powerful mods. Build-defining effects. Chase rolls. Low roll weight.                                              |
| **Small Passives** | Common, generic mods. High roll weight. Dilute the pool.                                                                |
| **Pool Size**      | 12-18 mods per species. Curated per species — some shared by Stream identity.                                           |
| **Implicit Slots** | Max **2 slots** for MVP regardless of base species or variant tier. Variants dictate tier access and notable weighting. |


The 2-slot cap for MVP is intentional — the system is designed to expand, and crafting currency paths exist to influence slot content. The limitation keeps creature modding tractable at launch.

#### Rolling and Crafting


| Operation            | Agent                                       | Effect                                                                                           |
| -------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Wild Capture**     | N/A                                         | Creatures arrive with 0-2 pre-rolled species mods depending on variant tier and encounter rarity |
| **Species Inscribe** | Species Inscribe Agent                      | Add a random mod from the species pool to an empty implicit slot                                 |
| **Calibrate**        | Calibrate Agent                             | Reroll all species mods (values and selections)                                                  |
| **Refine**           | Refine Agent                                | Reroll a single species mod                                                                      |
| **Targeted Roll**    | Species Inscribe + Species Catalyst ReAgent | Guarantees roll from the notable category (random which notable)                                 |


#### Example Pool: Sceptile-Equivalent (Eldergrove Primary)


| #   | Mod                                                                 | Type          | Weight           |
| --- | ------------------------------------------------------------------- | ------------- | ---------------- |
| 1   | +X% Eldergrove damage                                               | Small Passive | High             |
| 2   | +X to Authority                                                     | Small Passive | High             |
| 3   | +X% increased maximum Life                                          | Small Passive | High             |
| 4   | +X% Claw skill damage                                               | Small Passive | Medium           |
| 5   | +X to Invictus                                                      | Small Passive | High             |
| 6   | +X% Symbiosis-compatible recovery rate                              | Notable       | Low              |
| 7   | X% of Physical damage converted to Eldergrove                       | Notable       | Low              |
| 8   | +X% damage per adjacent ally on grid                                | Notable       | Very Low         |
| 9   | Eldergrove skills have +X% chance to apply additional Poison stacks | Notable       | Low              |
| 10  | 1% increased Attack Speed per 80 Accuracy Rating                    | Notable       | Very Low (chase) |
| 11  | Claw skills deal +X% damage at full Life                            | Notable       | Low              |


Pool has 11 mods: 5 small passives (common rolls) and 6 notables (rare rolls). Species Catalyst ReAgent guarantees a notable category roll — not which notable.

#### Shared Mods

Some mods are shared across species of the same Stream or certain Origin groupings. A Poison-related notable may appear in pools across all Eldergrove and Blight-primary species. This enables cross-species build planning without requiring a specific species.

---

### 9.8 Creature Tags

Every creature species has multiple tags describing physical characteristics. Tags enable gear subtype compatibility, Skill Card interactions (some Skill Cards have Tag requirements), and future systems.


| Tag           | Description                                                                              |
| ------------- | ---------------------------------------------------------------------------------------- |
| **Wing**      | Has wings — flight-related gear, aerial traversal                                        |
| **Claw**      | Has claws — claw weapon compatibility, claw skill bonuses                                |
| **Fang**      | Has fangs/teeth — bite skill compatibility                                               |
| **Horn**      | Has horns — charge skill compatibility                                                   |
| **Tail**      | Has tail — tail skill compatibility, balance effects                                     |
| **Shell**     | Has shell/carapace — inherent defence modifier                                           |
| **Tendril**   | Has tendrils/tentacles — reach-related effects                                           |
| **Bipedal**   | Walks on two legs — humanoid gear compatibility                                          |
| **Quadruped** | Walks on four legs — movement bonuses                                                    |
| **Amorphous** | No fixed form — terrain flexibility                                                      |
| **Metallic**  | Metal-based body — construct synergy, conductivity                                       |
| **Spectral**  | Incorporeal/semi-corporeal — phase effects (Spectral tag is distinct from Phantom damage type) |
| **Swarm**     | Operates as a collective or colony — swarm skill compatibility, area coverage bonuses    |


A single creature can have multiple tags. Tags are fixed per species.

---

### 9.9 Gear Slot Reference

Each creature has 10 gear slots, for 50 total across a squad of 5:


| Slot           | Function              | Key Mod Types                                                                                          |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------------ |
| **Weapon**     | Primary offence       | Damage, crit, weapon-specific bonuses                                                                  |
| **Offhand**    | Utility/defence       | Block, spell damage, utility                                                                           |
| **Armament**   | Primary defence       | Life, Armour, Barrier, Oura, resistances                                                               |
| **Helm**       | Mixed                 | Attributes, utility, some damage                                                                       |
| **Treads**     | Movement/positioning  | Movement speed, zone immunity, Evasion. Primary home for Transition Speed (zone-traversal speed stat). |
| **Talisman 1** | Specialisation        | Build-specific, unique effects                                                                         |
| **Talisman 2** | Specialisation        | Build-specific, unique effects                                                                         |
| **Amulet**     | Mixed offence/defence | Attributes, crit, resistances                                                                          |
| **Belt**       | Sustain/utility       | Life, recovery, Tonic enhancement                                                                      |
| **Crest**      | Build-defining        | High-impact effects, archetype enablers                                                                |


Full gear system specification in DOC_v5_new §33.

---

### 9.10 Variable Secondary Streams

Each creature species has a fixed Primary Stream and a variable Secondary Stream rolled on capture.


| Property                | Value                                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Primary Stream**      | Fixed per species. Full Stream Alignment and Signature access.                                                   |
| **Secondary Stream**    | Variable from a species-specific pool of 2-4 options. Rolled on capture. Reduced Stream Alignment effectiveness. |
| **Weighting**           | Each species has one common Secondary (~60%) and 1-3 rarer options                                               |
| **Visual Indicator**    | Accent colour on creature model (trim, eye glow, markings, energy effects) shifts with Secondary Stream          |
| **Reroll at capture**   | Secondary Contract (Contract tier 5) rerolls Secondary Stream at capture, keeping the better result              |
| **Reroll post-capture** | Variable Secondary Stream Reroll Agent — expensive, endgame                                                      |


**Examples:**


| Species         | Primary (Fixed) | Common Secondary (60%) | Uncommon (30%) | Rare (10%) |
| --------------- | --------------- | ---------------------- | -------------- | ---------- |
| Sceptile-equiv  | Eldergrove      | Fae                    | Physical       | Tidal      |
| Emberclaw-equiv | Inferno         | Physical               | Tectonic       | Voltaic    |
| Scizor-equiv    | Physical        | Tectonic               | Voltaic        | Inferno    |
| Gardevoir-equiv | Psionic         | Fae                    | Phantom        | Glacial    |


Rare Secondaries create chase captures and enable unusual builds. Visual colour shift means experienced players identify Secondary at a glance.

---

### 9.11 Creature Instance Global Mods

Individual creature instances can roll mods from a global modifier pool outside their species implicit pool. These are visible at scouting and appear as combat modifiers distinct from species implicits.

**Examples (encounter-modifier style):** Heals Allies (restores HP to adjacent allies each turn), Haste (acts earlier in the initiative window), Chilled Ground (generates frozen ground on movement tiles).

The creature-hunting chase: not just "good implicits" but "a species that rolled Haste." Sighting Reports in the Registry can flag global-mod carriers.

---

## 10. Skill Card System

**Scope:** Skill Cards are **creature-local**. They are not Technician-owned, squad-shared, or global. Each creature equips Skill Cards through its own Skill Frame. The Technician's Motherboard Grid amplifies damage and mechanics across the squad; Skill Cards determine what each creature actually does in combat.

Skill Cards are the primary way creatures deal damage, apply ailments, and interact with combat. Creatures have no intrinsic abilities — all combat capability comes from equipped Skill Cards assigned through the Skill Frame.

### 10.1 Skill Card Identity

#### Visual Design


| Property              | Description                                                                       |
| --------------------- | --------------------------------------------------------------------------------- |
| **Form Factor**       | Diamond-like crystals with attribute-coded colours                                |
| **Colour Coding**     | Authority=Red/Amber, Invictus=Yellow/Green, Order=Blue/Cyan, Animus=Purple/Violet |
| **Design Variation**  | Patterns indicate skill type, rarity, and mechanics                               |
| **Quality Indicator** | Visual clarity increases with level and polish                                    |


#### Intrinsic Mechanics

Certain Skill Cards have rare intrinsic mechanics that create chase items and build identities:


| Mechanic        | Description                                                  | Rarity    |
| --------------- | ------------------------------------------------------------ | --------- |
| **Return**      | Projectile returns to caster after reaching target/max range | Very Rare |
| **Pierce**      | Projectile continues through targets                         | Uncommon  |
| **Chain**       | Skill bounces to additional targets                          | Uncommon  |
| **Splash**      | Damage splashes to adjacent tiles                            | Common    |
| **Proliferate** | Effects spread to nearby enemies on kill                     | Very Rare |
| **Snapshot**    | Skill "remembers" stats at cast time for delayed effects     | Rare      |


Return + other mechanics can enable double or triple hits on the same target — chase setups for high-damage builds.

---

### 10.2 Skill Card Leveling

#### Level 1-20 (Standard Progression)


| Property     | Description                                             |
| ------------ | ------------------------------------------------------- |
| **XP Curve** | Logarithmic — fast early, steep from Level 19+          |
| **Scaling**  | Damage, Mana cost, cast time, cooldown adjust per level |
| **Cap**      | Level 20 is the functional cap for most purposes        |


#### Level 21+ (Post-Cap)

Slight logarithmic gains. Enhanced Mana/resource cost. Available to all skills past Level 20 — non-Breakthrough skills gain modest improvements only.

#### Breakthrough (One Per Creature)

Only ONE Skill Card per creature can achieve Breakthrough — enhanced progression beyond Level 20 that provides mechanical enhancements, not just numerical scaling.


| Property       | Description                                                |
| -------------- | ---------------------------------------------------------- |
| **Limit**      | One Breakthrough skill per creature                        |
| **Effect**     | Mechanical enhancements at each Breakthrough level (21-25) |
| **Investment** | Significant — represents the creature's signature move     |


**Breakthrough Level Example (Flame Burst):**


| Level | Enhancement                            |
| ----- | -------------------------------------- |
| 21    | +5% AoE radius                         |
| 22    | Ignite threshold -10%                  |
| 23    | +1 projectile                          |
| 24    | Damage gains +10% of Authority as flat |
| 25    | Transcendence Unlock                   |


---

### 10.3 Skill Card Transcendence

When ready, the player chooses from variant options that fundamentally change the skill's identity.


| Timing           | Availability                           | Trade-off                              |
| ---------------- | -------------------------------------- | -------------------------------------- |
| **Early**        | Before Level 20                        | Locks variant choice early             |
| **Standard**     | At Level 20                            | Full base levelling first              |
| **Breakthrough** | At Level 25 (Breakthrough skills only) | Maximum investment, strongest variants |


Early Transcendence does not lose access to Breakthrough levels — the Transcended form has its own progression path.

**Example: Flame Burst**


| Variant           | Effect                                            |
| ----------------- | ------------------------------------------------- |
| **Conflagration** | Massive AoE increase, damage spread thinner       |
| **Pyroclasm**     | Single target focus, massive damage spike         |
| **Wildfire**      | Ignite spreads to adjacent enemies on application |


---

### 10.4 Polarity System

Polarity is an alternative quality system with 4 frameworks that add deterministic breakpoint effects to Skill Cards.

#### The Four Frameworks


| Framework       | Attribute | Theme                             |
| --------------- | --------- | --------------------------------- |
| **Momentum**    | Invictus  | Speed, chains, returns, precision |
| **Devastation** | Authority | AoE, raw damage, overlapping hits |
| **Control**     | Order     | Duration, range, consistency      |
| **Entropy**     | Animus    | Ailments, chaos, unpredictability |


#### Polarity Slots


| Property       | Value                                            |
| -------------- | ------------------------------------------------ |
| **Base Slots** | 5                                                |
| **Maximum**    | 6 (via Breakthrough)                             |
| **Allocation** | Currency-based (rarer early, accessible endgame) |
| **Respec**     | Available via Agent + DeAgent combination        |


Each Skill Card has deterministic breakpoints defined per framework — consistent across all copies of that skill. Focused builds reach 5-point thresholds. Hybrid builds take smaller commitments from multiple frameworks.

**Example: Rolling Magma**

```
ROLLING MAGMA
Tags: [Projectile] [Inferno] [Spell] [Alpha]

FRAMEWORK: Momentum (Invictus)
  1 point: +5% projectile speed
  3 points: Chain +1
  5 points: Projectiles return to user (double hit potential)

FRAMEWORK: Devastation (Authority)
  1 point: +10% AoE on impact
  3 points: +15% damage
  5 points: Explosions overlap (double hit potential)

FRAMEWORK: Control (Order)
  1 point: +15% projectile range
  3 points: Projectile pierces +1 target
  5 points: Projectile homes toward enemies

FRAMEWORK: Entropy (Animus)
  1 point: +10% Ignite application rate
  3 points: Ignite Severity +1 turn
  5 points: Ignites propagate on kill

```

---

### 10.5 Skill Card Tags


| Category            | Examples                                 | Purpose                                                    |
| ------------------- | ---------------------------------------- | ---------------------------------------------------------- |
| **Damage Type**     | Inferno, Voltaic, Physical, Glacial      | Channel/resistance interaction                             |
| **Delivery**        | Projectile, Melee, AoE, Channelled, Beam | Mechanical classification                                  |
| **Source**          | Attack, Spell, Command                   | Defence interaction (Evasion: Attack only)                 |
| **Origin Affinity** | Scalesbourne, Martial, Nocturne          | Creature Origin matching                                   |
| **Frequency**       | Alpha, Beta, Gamma, Delta                | Skill Frame socket colour matching                         |
| **Mechanic**        | Chain, Pierce, Return, Proliferate       | Special behaviour                                          |
| **Reactive**        | Guard, Intercept, Retaliation            | Defensive/reactive — trigger on specific combat conditions |


#### Frequency Tags


| Frequency | Colour        | Attribute |
| --------- | ------------- | --------- |
| **Alpha** | Red/Amber     | Authority |
| **Beta**  | Yellow/Green  | Invictus  |
| **Gamma** | Blue/Cyan     | Order     |
| **Delta** | Purple/Violet | Animus    |


---

### 10.6 Unique / Signature Skill Cards

Rare Skill Cards tied to specific content sources.


| Property        | Value                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Acquisition** | Zone-specific drops, content-specific rewards — specific Skill Cards drop from specific zones/encounters |
| **Rarity**      | Rare to very rare — chase items                                                                          |
| **Identity**    | Unique mechanical effects per card. Build-enabling.                                                      |
| **Thematic**    | Tied to their source content                                                                             |


Specific Skill Card roster and source mappings are content creation tasks for future design passes.

---

## 11. Skill Frame System

The Skill Frame is the **primary skill configuration system** for Mythoras — the **creature-side** network that governs how Skill Cards and Support Cards are configured, linked, and expressed. It replaces the earlier Technician-side slot/linking system. **One Skill Frame per creature** — not one per Technician or per squad.

Each creature has an intrinsic Skill Frame — a progressable network topology unique to their species. The Frame is the creature's own PCB-style interface for skill expression.

**Technician Level gate (not ownership):** Technician Level unlocks additional anchor nodes and support capacity **across all creatures in the roster** — this is a progression gate, not transfer of skill ownership to the Technician.

### 11.1 Frame Components


| Component                           | Visual                                                                 | Function                                                                                                                                                                                                                              |
| ----------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Anchor Nodes (Skill Slots)**      | Octagonal pad (PCB via aesthetic) — labelled "S·1", "S·2" etc.         | Fixed positions where Skill Cards are placed. Species-determined positions. Each anchor = one configurable skill.                                                                                                                     |
| **Satellite Nodes (Support Slots)** | Circular pad, attribute-colour-coded                                   | Surround each anchor. Hold Support Cards for that specific anchor's skill only — supports are per-cluster by default. Can alternatively hold a compact Skill Card (utility skill, aura, movement — at a minor effectiveness penalty). |
| **Backbone Traces**                 | Gold/amber routing at 0/45/90 degrees with mitred diagonal transitions | Structural pathways of the Frame. Always visible. PCB trace language — no smooth curves.                                                                                                                                              |
| **Latent Nodes**                    | Visible but dim — inactive                                             | Craftable to enable via Link Agent or Bridge Agent                                                                                                                                                                                    |
| **Potential Territory**             | Barely-visible silhouette                                              | Nodes not yet accessible — the Frame's ceiling visible from the start                                                                                                                                                                 |


### 11.2 Frame Zones — Attribute Agnostic

Frame zones are **attribute-agnostic.** They do not gate skills based on attribute. The creature's species determines clustering tendencies and node distribution. Attribute bonuses come from matching: using a skill whose attribute aligns with the creature's attribute leanings grants a conditional power bonus — the creature operating within its natural knowledge.

Nothing is gated. Identity expresses through bonuses, not restrictions.

### 11.3 Slot Count and Technician Level Gating

Maximum skill slots per creature: **6** (endgame). Base creatures have 2 innate slots. **Technician Level gates Frame progression** (unlocking anchor/support capacity squad-wide) — see table below. Skill Cards remain creature-local regardless of gate.


| Technician Level | Max Active Skill Slots | Max Supports Per Slot |
| ---------------- | ---------------------- | --------------------- |
| 1-15             | 2                      | 1-2                   |
| 15-30            | 3                      | 2-3                   |
| 30-45            | 4                      | 3-4                   |
| 45-55            | 5                      | 4-5                   |
| 55+              | 6                      | up to 5               |


Support range: minimum 0 (bare unaugmented skill), maximum 5 (6-link equivalent). Legendaries can access 6 supports. Layout prioritises depth of support capacity over number of skills — more anchors early with fewer supports, deepening support capacity with progression.

### 11.4 Satellite Node Flexibility

A satellite node can host **either** a Support Card **or** a compact Skill Card (an isolated, unsupported secondary skill — aura, utility, movement skill).

A Skill Card in a satellite position gets zero supports and a minor effectiveness penalty. This gives builds the choice: deep cluster (anchor + 5 supports) vs wide cluster (anchor + 2 supports + 2 utility skills). Recreates the PoE1 socket-allocation puzzle without gear dependency.

### 11.5 Procedural Frame Generation

Each species has a **leyline blueprint** — a parameter set defining: anchor count range and backbone zone placement; zone character distribution (satellite position attribute-weight tendencies); backbone configuration options; satellite cluster density; connection density.

Individual creatures generate their Frame within these parameters — **species-recognisable in topology, individually unique in node positions, colour weights, and latent link layout.**

Scouting reveals a creature's Frame silhouette before capture — making leyline configuration a pre-capture decision vector.

### 11.6 Progressive Frame Revelation

The full Frame capacity is **visible as a silhouette from the start** — latent nodes and potential territory shown as faint/dim outlines. Players understand the Frame's ceiling immediately. Active nodes illuminate as Technician level increases.

### 11.7 Frame Crafting (Agent System)


| Verb                    | Agent Name    | Target                   | Type                                   |
| ----------------------- | ------------- | ------------------------ | -------------------------------------- |
| Sync                    | Sync Agent    | Socket count/layout      | Random (Jeweller's analogue)           |
| Connection              | Link Agent    | Links between nodes      | Random (softer than PoE1 Fusing)       |
| Alignment               | Hue Agent     | Socket colours           | Random (Chromatic analogue, soft-fail) |
| Bridge                  | Bridge Agent  | Single latent connection | Targeted                               |
| Anchor (lock before op) | Lock Agent    | Single element           | Protective                             |
| Infuse                  | Infuse Agent  | Zone/region satellite    | Adds new position permanently          |
| Seed                    | Seed Agent    | Inactive territory       | Reseeds potential nodes before Sync    |
| Imprint                 | Imprint Agent | Whole Frame state        | Snapshot/revert (one-use)              |
| G!itch                  | G!itch Agent  | Frame or Skill Card      | Risky transform (Vaal orb family)      |


Hard socket count (reaching max supports per slot) is the harder progression gate. Links are softer RNG. Socket colours use the soft-fail system.

### 11.8 Soft-Fail Colour System

Matching a support card's attribute colour to its satellite node grants a **Resonance bonus** — not a gate. Mismatched sockets still work at reduced effectiveness. Attribute colours use dual/tri-gradient schemes (Authority: red→amber; Invictus: yellow→green; Order: blue→cyan; Animus: magenta→deep violet). Hue Agent changes socket colours with attribute-weighted species bias.

### 11.9 Ancient Params (Alternate Path)

Gear with Ancient Param implicits can modify specific Frame zone characteristics or add satellite positions to specific regions. Gear is a modifier — the creature is the host. This provides different routes to maxed cluster capacity: specific gear paths alter the Frame without consuming Frame-native crafting resources.

---

## 12. Support Card System (Augments)

Support Cards modify Skill Card behaviour when linked in the Skill Frame.

### 12.1 Augment Taxonomy


| Category                | Effect Type                                                                |
| ----------------------- | -------------------------------------------------------------------------- |
| **Base Augments**       | Flat damage/stat addition                                                  |
| **Increased Augments**  | Additive scaling                                                           |
| **Effective Augments**  | Mechanical modification (chain behaviour, return efficiency, pierce count) |
| **More Augments**       | Multiplicative scaling (rare, high Mana multiplier)                        |
| **Elevated Augments**   | Enhanced base versions — Pinnacle boss drops                               |
| **Phantasmal Augments** | Alternative scaling paths                                                  |
| **Divergent Augments**  | Different mechanical modifications                                         |


### 12.2 Augment Availability


| Category                         | Availability         |
| -------------------------------- | -------------------- |
| Base, Increased, Effective, More | Throughout game      |
| Elevated                         | Pinnacle bosses      |
| Phantasmal                       | Protocol Board rooms |
| Divergent                        | Cipher rewards       |


### 12.3 Frequency Empowerment

When a Support Card's Frequency tag matches its satellite node's colour, the Support is empowered (+15% effectiveness). Mismatched sockets have no penalty — just no bonus. Makes achieving the correct colour a meaningful but non-gating crafting goal.

---

## 13. Technician Command Deck

The Command Deck provides supplementary tactical options during combat. Introduced late in Region 1, becomes a core endgame mechanic.


| Property                 | Value                                                 |
| ------------------------ | ----------------------------------------------------- |
| **Role**                 | Supplementary — not the primary combat tool           |
| **Draw**                 | 3 cards drawn at battle start. 1 per subsequent turn. |
| **Function**             | Deterministic power in a game with controlled RNG     |
| **Discipline weighting** | Initial deck weighted toward Discipline identity      |
| **Introduction**         | End of Region 1 campaign                              |


Command Deck card types:


| Type           | Character                                                                        |
| -------------- | -------------------------------------------------------------------------------- |
| **Assert**     | Proactive command — direct orders enhancing creature actions                     |
| **Suppress**   | Reactive suppression of enemy actions                                            |
| **Analyze**    | Information-gathering — reveals enemy properties, next actions                   |
| **Reposition** | Grid movement commands — forced or assisted creature positioning                 |
| **Intercept**  | Reactive counter to incoming enemy actions (replaces former "Override" sub-type) |


Three play windows: pre-turn (setup), during-turn (reactive), post-turn (cleanup). Full specification in DOC_v4_new §30.

---

## 14. Resource System

### 14.1 Mana (Creature Resource)


| Property         | Description                                        |
| ---------------- | -------------------------------------------------- |
| **Function**     | Gates Skill Card usage per action                  |
| **Cost scaling** | Higher level / more powerful skills cost more Mana |
| **Regeneration** | Regenerates per turn                               |
| **Pool scaling** | Scales with creature level and attributes          |


### 14.2 Lanes (Technician Resource)


| Property              | Description                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Function**          | Technician-level global resource — Warbanner reservation, auras, global effects                              |
| **Mechanic**          | Fixed allocation — a build puzzle of how many Lanes to reserve vs keep free                                  |
| **Reservation**       | Active Warbanners reserve Lanes to maintain. Higher Warbanner investment = less available for other effects. |
| **Strategic tension** | Lane reservation decisions shape the Technician's tactical options each encounter                            |


Lanes ≠ Mana. Creature Mana governs per-creature skill usage. Lanes govern Technician-level persistent effects. The two resources create independent tension at different scopes.

### 14.3 Command Charges (Technician Combat Resource)

Command Charges are used for Command Deck actions during combat. Generated at battle start and per turn. Full specification in DOC_v4_new §25.2.

---

## 15. Principal System

Principals are species-specific specialisation trees — Mythoras's Ascendancy equivalent — unlocked through The Proving. Each species has 3 unique Principal trees with mechanically distinct identities.

### 15.1 Unlock Mechanism


| Requirement          | Detail                                                                  |
| -------------------- | ----------------------------------------------------------------------- |
| **Technician Level** | Minimum Technician Level thresholds gate Principal tree access          |
| **The Proving**      | Multiple runs — one run per creature needing Principal access           |
| **Per-creature**     | Each creature individually earns Principal access through a Proving run |


Principals are species-specific, not Discipline-specific. A Commandant: Orsoth Technician's Sceptile-equivalent and a Luminary Arbiter's Sceptile-equivalent have identical Principal options. The Discipline affects starting Grid position — not creature Principal availability.

### 15.2 MVP Scope


| Property              | Value                                                                            |
| --------------------- | -------------------------------------------------------------------------------- |
| **Species count**     | 8-16 base species for MVP                                                        |
| **Trees per species** | 3 Principal trees each, fully unique                                             |
| **Design quality**    | PoE ascendancy quality — each Principal enables specific mechanical interactions |


Design philosophy: Principals change HOW the creature plays. Not "more defence" or "more damage" — each Principal makes players reconsider gear, Grid pathing, and Skill Card selection. The Principal choice should feel like choosing a different build.

### 15.3 The Proving Overview

A multi-floor challenge system that unlocks Principal Pathway points.


| Property         | Value                                                          |
| ---------------- | -------------------------------------------------------------- |
| **Total Floors** | 5                                                              |
| **Access**       | Keys from campaign progression (side quests in specific zones) |
| **Reward**       | Principal Pathway points per floor                             |



| Floor       | Key Source    | Min Tech Level | Pathway Points |
| ----------- | ------------- | -------------- | -------------- |
| **Floor 1** | R1 side quest | Level 15       | 2 points       |
| **Floor 2** | R1 side quest | Level 30       | 2 points       |
| **Floor 3** | R1 side quest | Level 45       | 2 points       |
| **Floor 4** | Endgame zone  | Level 60       | 2 points       |
| **Floor 5** | Pinnacle zone | Level 75       | 2 points       |
| **Total**   | —             | —              | 10 points      |


### 15.4 Trial Types

#### Trial Type 1: Labyrinth

Multi-room sequence with escalating boss. Boss defeated 3 times, strengthening with each defeat. Grid-based traps, obstacles, themed environments.

#### Trial Type 2: Ultimatum

Wave survival. Player selects modifiers between waves. Risk/reward escalation — walk away early with partial rewards or push for full completion.

#### Trial Type 3: Crucible

Squad vs pre-built team with specific tactical constraints. The only trial that mandates certain build or creature configurations for full reward. Tests squad-building knowledge.

### 15.5 Ascendancy Central Hub (DRAFT — not locked)

> **DRAFT 2026-07-19.** Exploratory geometry for Principal / Pinnacle Evolution trees. Not canon. Do not implement or treat as locked. Cross-links: `IDEA_LOG.md` IDEA-014; research `POE_CLASS_PASSIVE_TREE_RESEARCH.md` §4.5 (Cluster Jewel hub-and-spoke — pattern only, not Atlas language).

**Intent:** Each Principal (and, if retained as a distinct layer, Pinnacle Evolution) has a **central hub node** — a high-leverage commitment socket from which themed clusters/spokes emanate. Analogy is PoE **Cluster Jewel** hub→spoke geometry applied to an **authored Ascendancy-like graph**, not a second Technician Motherboard Grid and not Atlas specialisation.

**Working properties (all DRAFT):**

| Property | Draft reading |
| -------- | ------------- |
| **Hub** | Designated central node of the Principal / Pinnacle graph |
| **Augment** | Optional install (item/module) that defines or expands the local spoke subgraph |
| **Spokes** | Emanating small→notable mini-clusters; optional nesting depth |
| **Ownership** | Creature-local (Principal / Pinnacle Evolution). Does **not** live on the Technician Motherboard Grid global route |
| **Respec** | Augment removal should cleanly unwind spoke investment (Cluster Jewel refund lesson) |
| **Power role** | Hub defines identity; spokes flesh execution — Principals still change *how* the creature plays (§15.2) |

**Open (must grill before lock):** separate Pathway point pool vs Grid points; whether Pinnacle Evolution is distinct from Principal or a rename; augment itemisation vs pure authored hubs; interaction with species mod-pool cluster architecture (§9.7).

**Non-goals of this draft:** copying Labyrinth unlock schedule; importing Atlas tree language; making the Motherboard Grid per-creature.

---

## 16. Warbanner System

Warbanners are persistent field effects generated by carrier creatures. They replace the earlier Technician Aura concept and Origin diversity bonuses.

### 16.1 Core Mechanics


| Property              | Value                                                                                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Instantiation**     | Creature carries the Warbanner as an active status                                                                                                 |
| **Radius**            | Localised around carrier creature — moves with them                                                                                                |
| **Lanes reservation** | Active Warbanners reserve Lanes from the Technician's pool                                                                                         |
| **Stacking**          | Multiple Warbanner types can be active simultaneously (different carriers). Same type from multiple carriers — highest value applies, no stacking. |


### 16.2 Warbanner Variants


| Variant                | Focus                               |
| ---------------------- | ----------------------------------- |
| **Standard Warbanner** | Generic team-wide enhancement       |
| **Banner of Strikes**  | Attack-tagged skill enhancement     |
| **Banner of Volleys**  | Projectile-tagged skill enhancement |
| **Banner of Arcana**   | Spell-tagged skill enhancement      |
| **Banner of Ward**     | Defensive enhancement within radius |


Discipline starting access: each Discipline begins with access to a specific Warbanner type. All variants unlock through campaign progression.

### 16.3 Strategic Considerations

High Warbanner investment (multiple active banners) significantly constrains available Lanes for other Technician effects. The player manages the tension between maintaining passive squad buffs and preserving Lanes for reactive or offensive Technician actions.

Load accumulates for Warbanner carriers at a higher rate than rotation creatures — the player decides whether to maintain a banner carrier active (preserving the buff, accelerating their Load) or swap them out (dropping the buff, allowing Load recovery).

---

## 17. Domain System

Domains are deployable terrain effects placed through specific Skill Cards and Technician Command skills. Full combat rules in DOC_v2_new §21.

### 17.1 Core Properties


| Property                       | Value                                                                                                    |
| ------------------------------ | -------------------------------------------------------------------------------------------------------- |
| **Placement**                  | Targeted tile — radius extends from centre                                                               |
| **Duration**                   | Turn-count based. Scales with Duration investment and Order attribute.                                   |
| **Concentration vs Expansion** | Investment either deepens effect (Concentration) or extends radius (Expansion) — not both simultaneously |
| **Interaction**                | Affects allies AND enemies within radius                                                                 |


Domains count toward the max 2 zone types per tile. Full zone stacking rules in DOC_v2_new §17.3.

---

## 18. Inscriptions System

Inscriptions are the spell-parallel system to Warbanners — a distinct tactical layer oriented toward Spell-tagged skills with different deployment mechanics, duration profiles, and strategic vectors.

Where Warbanners are persistent aura-style effects maintained by carrier creatures with radius effects, Inscriptions are placed on specific locations or targets with defined durations and interaction patterns.

### 18.1 Inscription Variants


| Variant                     | Character                                                                                                       |
| --------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Resonant Inscription**    | Tile-placed AoE expander — amplifies spell effects for allies standing in or casting through the inscribed area |
| **Piercing Inscription**    | Enemy-placed defence bypass — inscribed targets take a portion of incoming spell damage as if undefended        |
| **Compounding Inscription** | Ally-placed effect amplifier — stacks on an ally to amplify their next spell                                    |
| **Delayed Inscription**     | Tile-placed delayed damage burst — fires after a set turn count                                                 |
| **Launcher Inscription**    | Tile-placed projectile enhancer — enhances the next projectile-tagged spell passing through the area            |


Full Inscription design, deployment rules, and Lanes interaction are dedicated content work.

---

## 19. Load System

Load is a per-creature fatigue metric that accumulates during zone runs, creating escalating pressure that encourages squad rotation and prevents infinite zone engagement.

### 19.1 Accumulation


| Activity                             | Load Gain Rate                                                   |
| ------------------------------------ | ---------------------------------------------------------------- |
| Active combat (deployed)             | Standard rate — 1 unit per encounter resolved                    |
| Warbanner carrier (active in combat) | Elevated rate — additional load per turn the Warbanner is active |
| Bench (in squad but not deployed)    | Reduced rate                                                     |
| Roster (at Hideout)                  | Active recovery — Load decreases passively                       |


### 19.2 Thresholds


| Threshold           | Effect                                                                       |
| ------------------- | ---------------------------------------------------------------------------- |
| **0-39% (Green)**   | No penalties                                                                 |
| **40-59% (Yellow)** | Minor stat penalties — small reductions to damage and defence                |
| **60-79% (Orange)** | Moderate penalties — Stream Signature effectiveness reduced                  |
| **80%+ (Red)**      | Severe penalties — significant impairment, Combat Archetype bonuses disabled |


The Archetype bonus disable at high Load is the key punisher — it removes the build's interesting emergent power rather than just reducing numbers. An overloaded creature loses its archetype expression.

### 19.3 Recovery


| Source              | Effect                                                    |
| ------------------- | --------------------------------------------------------- |
| **Roster benching** | Creatures not in active squad recover passively over time |
| **Town visits**     | Town services reduce Load significantly                   |
| **Vitality Tonic**  | Provides in-zone Load relief                              |
| **Between zones**   | Small natural recovery between zone runs                  |


Load threshold values and accumulation rates are flagged for balance testing. The concept is confirmed; exact values require playtesting.

---

## 20. Dual-Track XP System

### 20.1 Technician Level (1-100)


| Property           | Value                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **XP Source**      | All combat XP — Technician gains from every encounter                                                                                                   |
| **Provides**       | Grid points, Skill Frame progression gates, content unlocks, Warbanner capacity                                                                         |
| **Sub-stat bonus** | Small translucent stat contribution to ALL creatures — a Level 80 Technician's creatures have a higher baseline than a Level 30's even before Grid/gear |


The Technician Level sub-stat bonus represents growing expertise. A newly captured creature benefits immediately — it starts at Creature Level 1 but isn't useless.

### 20.2 Creature Level (1-20)


| Property      | Value                                                          |
| ------------- | -------------------------------------------------------------- |
| **XP Source** | Deployment XP — creature must participate in combat to gain XP |
| **Provides**  | Minor sub-stat increases per level                             |
| **Scope**     | Per individual creature (not per species)                      |


Use the creature, it gets slightly stronger. Grid, gear, and Skill Frame remain the primary power systems. Creature Level adds incremental gains on top.

**XP application bounds:** XP modifier = max(0.1, 1 - (|Level Difference| × 0.05)). Within ±3 levels of the enemy: 100% XP. Beyond ±3: 5% reduction per additional level of difference. Floor at 10%.

### 20.3 No Separate Mastery System

No third XP track. No per-species familiarity system. Two tracks only: Technician Level + Creature Level. Complexity in progression comes from the Grid, gear, Skill Frame, and Principals.

---

## 21. Roster, Squad and Storage

### 21.1 Squad


| Property               | Value                                                                       |
| ---------------------- | --------------------------------------------------------------------------- |
| **Size**               | 5 creatures                                                                 |
| **Function**           | Active team taken into zones and combat                                     |
| **3 active in combat** | 3 creatures active on the tactical grid at once; 2 in reserve during combat |
| **Party play**         | 3-player party = 9 active creatures on the grid                             |
| **Mid-zone swaps**     | NOT allowed — the 5 creatures you enter a zone with are the 5 you have      |


### 21.2 Roster


| Property          | Value                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Location**      | Hideout (player's base)                                                                                               |
| **Function**      | Storage for additional contracted creatures                                                                           |
| **Access**        | Swap between Squad and Roster at Hideout or towns only                                                                |
| **Load recovery** | Rostered creatures recover Load passively                                                                             |
| **Expansion**     | Roster Tabs — premium MTX vector for collection fantasy. Base Roster is generous; collectors purchase expansion tabs. |


### 21.3 Design Intent

Squad-of-5 with no mid-zone swaps creates run tension — the player plans their team for the content they're entering. Wrong composition against a zone's encounter types is a real cost. Wrong Load management compounds over a run. Both factors make squad-building decisions meaningful.

---

## 22. Contract Registry

The Registry is a unified tracking and build-planning tool in the creature management interface. It is a **workbench**, not a Pokédex — its purpose is informed decision-making, not collection obligation.

### 22.1 Registry Tabs


| Tab                        | Tracks                                                                                                                   | Unlocked By                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| **Species Database**       | All species captured. Origin, Primary Stream, Secondary options, Species Tier, known habitats, Frame silhouette preview. | First capture of each species             |
| **Creature Level Tracker** | Per-creature level and XP progress for all owned creatures                                                               | Automatic                                 |
| **Mod Pool Viewer**        | Species mod pool contents — available mods, weights, tier ranges. Progressive reveal as player encounters and crafts.    | Progressive                               |
| **Contract Inventory**     | Current Contract stock by tier                                                                                           | Always visible                            |
| **Capture Log**            | All owned creatures (Squad + Roster). Filterable by Origin, Stream, Variant, Level.                                      | Automatic                                 |
| **Intel Reports**          | Scouting Reports and gathered field intel — see DOC_v4_new for full scouting system                                      | Available after first scouting engagement |


### 22.2 What It Is NOT

No "seen but not caught" entries. No completion percentage. No catch-em-all reward. No collection checklist. The Registry helps the player make informed decisions — which creatures to target, which Species Mods to chase, what their current roster looks like.

---

## Part III Summary

**Motherboard Grid:** Rectangular PCB-aesthetic board. GLOBAL to the Technician — one tree, benefiting all creatures. 148 universal points allocated between Global Route (benefits all creatures) and Slot-Local Subroutes (48pt pool, 32pt per-subroute cap — slot owns the allocation, not the creature). 5 MVP Disciplines (Commandant: Orsoth, Interceptor, Luminary Arbiter, Architect, Adverse Errant) — 4 Hybrids deferred to expansion. Node hierarchy: Solder Points (selectable attribute bonus) → Nodes → Notables → Masteries (cross-system curated lists) → Directives (12-16 mandatory trade-off keystones). Dockets (fixed positions with built-in clusters) + Funcs (droppable items with regional influence, 4 colour-coded categories, Unique Override variants) replace the Component system. Grid Channels reward threshold commitment with escalating bonuses. Stream Resonance is two-tier (Tier 1 baseline, no investment; Tier 2 named mechanics via Grid investment).

**Creature System:** 10 Origins as thematic archetypes — carry Bloodline effects (see Part II §23). Three scaling layers: Stream Alignment (conditional bonuses from matched skill use), Stream Signature (always-on characteristic behaviour), Species Mod Implicits (cluster jewel architecture). Combat Archetypes as cross-creature emergent identity (see Part II §9). Creature Variants: Initiate / Magic / Rare / Exotant / Apex. Species Tier: Common / Mythic / Legendary (rebuilt — authored identity, signature mechanics). Variable Secondary Streams rolled on capture. Creature instance global mods as additional capture chase.

**Species Mods:** 12-18 mod pool per species. Max **2 implicit slots** for MVP. Notables (low weight, build-defining) and Small Passives (high weight, diluters). Some mods shared by Stream/Origin identity.

**Skill Frame:** Creature-side primary skill configuration — replaces Technician slot/linking system. Anchor Nodes (skill slots, 2 innate, max 6 endgame), Satellite Nodes (supports, max 5 per slot), Backbone Traces (PCB routing). Attribute-agnostic zones. Procedural leyline blueprint generation per species. Progressive Frame revelation from the start. Frame crafting via dedicated Agent suite (Sync, Link, Hue, Bridge, Lock, Infuse, Seed, Imprint, G!itch).

**Skill Cards:** Diamond-like crystals. Universal compatibility. Intrinsic mechanics (Return, Pierce, Chain etc.) as chase items. Logarithmic levelling 1-20, Breakthrough (1 per creature, 21-25), Transcendence (variant selection). Polarity (4 frameworks, deterministic breakpoints). Unique/Signature Skill Cards from specific content.

**Support Cards:** 7 categories. Frequency matching empowers (+15%). Elevated/Phantasmal/Divergent as endgame chase augments.

**Command Deck:** Late R1 introduction, core endgame. 5 card types: Assert, Suppress, Analyze, Reposition, Intercept. 3 play windows.

**Resources:** Creature Mana (per-skill usage) + Technician Lanes (persistent effect reservation, Warbanner maintenance) + Command Charges (Technician combat actions).

**Principal System:** 3 trees per species, fully unique. Unlocked through The Proving (5 floors, 3 trial types, 10 Pathway points total). PoE ascendancy quality — mechanical build identity, not stat boosts.

**Warbanners:** 5 variants (Standard, Strikes, Volleys, Arcana, Ward). Lanes reservation. Carrier Load accumulation. Replaces passive team bonuses and Origin diversity bonuses.

**Inscriptions:** Spell-parallel to Warbanners. 5 variants (Resonant, Piercing, Compounding, Delayed, Launcher). Distinct deployment and strategic character.

**Domains:** Deployable terrain effects. Concentration vs Expansion. Ally + enemy interaction.

**Load System:** Per-creature fatigue. 40/60/80% thresholds. Archetype bonuses disabled at 80%+. Bench and Roster recovery. Warbanner carriers accumulate Load faster.

**Dual-Track XP:** Technician Level (1-100, all combat) + Creature Level (1-20, deployment). XP bounds formula: max(0.1, 1-(|ΔLevel|×0.05)). No third track.

**Squad/Roster:** Squad of 5, 3 active in combat. No mid-zone swaps. Roster at Hideout, Load recovery, Tab expansion as premium MTX.

**Contract Registry:** Build-planning workbench. Species Database, Mod Pool Viewer, Contract Inventory, Capture Log, Intel Reports. Not a Pokédex.

---

**End of Part III: Progression Systems**