# Wayfinder Pass — Whole-Game Coherence

> Audit date: 2026-07-16  
> Scope: coherence of the current game idea after the July 15 reconcile.  
> Status language: **FACT** = stated in current documents; **INFERENCE** = synthesis or judgment.

## Executive finding

**INFERENCE — Verdict: SOUND WITH CAVEATS.**

Mythoras now hangs together as one game at the macro level. The campaign fantasy, programmed
tactical battle, five-creature squad, persistent build commitment, and Champion-gated Cipher
endgame form a credible through-line. The most important unresolved issue is not theme or naming:
the documents do not yet define a consistent boundary between permissible respec/substitution and
the locked promise that a materially different build requires a new Technician.

## 1. One-sentence game pitch

**INFERENCE:** Mythoras is a campaign RPG in which an ambitious rookie Technician crosses an
inhabited arcane-fantasy region, contracts and builds a five-creature Squad, programs
three-creature tactical battles on the terrain where encounters occur, and must defeat the
Regional Champion before taking on the dangerous Cipher Network as a Champion's duty.

This is a design-description pitch, not marketing copy. It deliberately includes the four things
that currently make the whole game legible: profession, traversal, Turn Program battle, and the
Champion-to-Cipher transition.

## 2. Core loop

### Campaign loop

1. **Traverse the campaign**
   - **FACT:** The campaign is primarily PoE-style acts/zones and side quests; competition is its
     spine, not the whole campaign.
   - **FACT:** World View keeps embodied traversal dominant. Battles occur on the encountered
     physical surface through adaptive continuity.
   - **FACT:** Existing zone design uses routes, optional content, stable fixtures within
     variation, Waypoints, and skippable encounters that can accumulate pressure.
   - **INFERENCE:** The player should be making two simultaneous route decisions: where to advance
     the campaign and what ecology/source is useful to the current build.

2. **Meet, avoid, pursue, or trigger an encounter**
   - **FACT:** The draft zone loop permits skipping ordinary encounters while forced and boss
     encounters block progress; skipped pressure can spill into later sections.
   - **FACT:** Creature contracting, scouting direction, and dossier source targeting make the
     encountered population relevant beyond XP and generic loot.
   - **INFERENCE:** This is potentially a strong traversal-to-build seam, but the July 15 locks do
     not reconfirm every Pressure Cap detail. Treat that mechanism as a promising authored draft,
     not immutable canon.

3. **Fight through the Turn Program**
   - **FACT:** The Technician brings a Squad of five: three Field creatures and two Bench
     creatures.
   - **FACT:** In Planning, the player queues each active creature's skill and target for the
     round. Ordering is automatic from Speed, skill timing, support costs, and build investment.
   - **FACT:** In Execution, enemy actions interleave and the player has no live intervention in
     the campaign baseline.
   - **FACT:** Variable asymmetric battle footprints preserve terrain, fixtures, positions, and
     approach direction from traversal.
   - **INFERENCE:** This is the clearest moment-to-moment loop in the design. It has a distinct
     planning identity even though several underlying ingredients come from familiar games.

4. **Resolve the encounter and manage run pressure**
   - **FACT:** Battles award gear, crafting Agents, Contracts, Skill Cards/materials, and other
     progression resources.
   - **FACT:** Eligible marked creatures can receive a post-battle Contract Offer; capture success
     is deterministic at threshold, while outcome quality carries variance.
   - **FACT:** Load accumulates per creature. Bench recovery and Field/Bench rotation are the
     primary mitigation.
   - **INFERENCE:** Loot, contracting, and Load give battle three outputs: build value, roster
     value, and run-endurance cost. That is coherent and worth protecting.

5. **Improve or recommit the build**
   - **FACT:** Creature-local Skill Cards, Support Cards, Skill Frames, gear, creature level, and
     advanced species identity shape each creature.
   - **FACT:** The Technician-global Motherboard Grid and five slot-local routes shape the Squad
     thesis and the role of whichever creature occupies each slot.
   - **FACT:** Workspace View or a dedicated deep-system surface hosts analysis-heavy work such as
     Grid routing and Forge Terminal crafting.
   - **FACT:** Dossier direction adds targetable progress toward creatures, Skill Cards, gear
     pieces, information, and operations.
   - **INFERENCE:** The improvement loop is rich but currently over-specified in inventory surfaces
     and under-specified at the build-identity boundary. Players can see many knobs, but the design
     has not yet said which combination of changed knobs constitutes “a different build.”

6. **Advance toward Champion, then Cipher duty**
   - **FACT:** The intended campaign spine is open qualifier → authored regional circuit → major
     event → Championship, with acts/zones and side quests remaining the majority of play.
   - **FACT:** Defeating the Regional Champion is the hard gate to the Cipher Network. There is no
     partial access.
   - **FACT:** Each Technician must personally finish the campaign and become Champion, even when
     the account already has season-shared Cipher topology, Frontier progress, Stash, currency,
     crafting library, and selected unlocks.
   - **INFERENCE:** “Become Champion, then inherit the duty of confronting Cipher breaches” is the
     strongest narrative-to-endgame bridge in the project.

### Endgame loop

**FACT:** Choose and modify a consumable Cipher → run a reused/new zone ecology under greater
threat → earn Ciphers, crafting resources, gear, Frontier progress, dossier progress, and
Pinnacle access → improve the build → take on harder Cipher/Proving/Ascension/Pinnacle content.

**INFERENCE:** The endgame loop is structurally clear but still largely an architecture borrowed
from PoE. Its Mythoras identity will depend on Cipher pressure, ecological source intelligence,
Squad/Load consequences, and Champion duty being mechanically present rather than lore pasted
around map items.

### Clear versus soft

**Clear**

- **FACT:** Squad size and Field/Bench split.
- **FACT:** Turn Program planning, automatic ordering, and committed execution.
- **FACT:** Creature-local versus Technician-global ownership.
- **FACT:** Adaptive traversal-to-battle continuity.
- **FACT:** Champion as the full Cipher gate.
- **FACT:** Dossier's source → incremental progress → targeted outcome promise.

**Soft**

- **FACT:** The opening, final competition wrapper, rendering pipeline, Cipher layer regime,
  dossier representation, off-Field creature fiction, and several names are explicitly open.
- **INFERENCE:** The campaign has a strong destination but not yet a strong authored middle. “Acts
  and zones plus a competition spine” is coherent scaffolding, not yet a distinctive campaign
  cadence.
- **INFERENCE:** The economy explains what drops and how crafting works better than it explains
  the expected frequency of meaningful Squad upgrades across five creatures.
- **INFERENCE:** Load is conceptually clear, but its net accumulation/recovery cadence must prove
  that rotation delays exhaustion without either trivialising it or forcing repetitive downtime.

## 3. System dependency map

### Primary dependency chain

**INFERENCE:**

`Campaign zones / ecology`
→ `encounters on the same surface`
→ `3-Field Turn Program`
→ `Field/Bench rotation + Load`
→ `loot, Contracts, Dossiers`
→ `creature-local build + Technician Grid`
→ `regional competition tests`
→ `Champion gate`
→ `Cipher ecology / Frontier / Pinnacles`

### Locked-system dependencies

- **Squad**
  - **FACT:** Depends on five stable slots, three Field positions, two Bench positions, and no
    Roster swap during a zone.
  - **FACT:** Feeds Turn Program action count, Load rotation, resistance/type coverage, archetype
    thresholds, and slot-local Grid value.

- **Grid**
  - **FACT:** Depends on one Technician-global route plus five routes owned by Squad slots.
  - **FACT:** Feeds all creatures globally, the creature in each invested slot locally, damage-type
    depth/Resonance, and the committed Squad thesis.
  - **INFERENCE:** It is the main bridge between “one durable character” and “five configurable
    creatures.”

- **Skill Cards and Skill Frames**
  - **FACT:** Depend on creature ownership, Frame topology, Support links, creature Mana, and
    Technician-level slot gating.
  - **FACT:** Feed available Turn Program actions, Speed ordering, damage-type delivery, ailments,
    capture setup, loot pursuit, crafting, and dossier targets.

- **Load**
  - **FACT:** Depends on a multi-encounter zone run, persistent per-creature state, Bench recovery,
    and visible status.
  - **FACT:** Feeds rotation decisions, Squad endurance, archetype/Signature degradation, and the
    value of ending or continuing a run.

- **Adaptive continuity**
  - **FACT:** Depends on zone geometry that can declare variable tactical footprints while
    preserving location, fixtures, positions, and approach.
  - **FACT:** Feeds camera/HUD behavior, encounter authorship, obstacle readability, and the promise
    that traversal and battle are one embodied activity.
  - **FACT:** It does not depend on one Three.js scene or any locked rendering engine.

- **World View / Workspace View**
  - **FACT:** World View depends on a compact contextual HUD that can communicate Turn Program,
    Field/Bench state, Load, targeting, and results without a permanent management frame.
  - **FACT:** Workspace View depends on persistent configurable layout, a protected world viewport,
    safe presets/reset, and read-only execution-phase panels.
  - **INFERENCE:** This pair is the interface answer to the project's central density problem:
    immediate play remains spatial while build analysis can become information-heavy on demand.

- **Champion / Cipher gate**
  - **FACT:** Depends on a legible regional competition climax and personal completion by each
    Technician.
  - **FACT:** Feeds access to shared-season Cipher topology, Frontier progression, targeted farms,
    Ascension resources, and Pinnacles.
  - **INFERENCE:** If the Championship does not test the same Squad/build skills used in zones,
    this bridge will feel ceremonial rather than systemic.

- **Build commitment — Model D inside Model B**
  - **FACT:** Depends on immutable Foundation, committed Discipline/Grid trunk/Squad thesis, and
    bounded substitution within that framework.
  - **FACT:** Feeds replay with new Technicians, campaign repetition, item-driven build inspiration,
    and the meaning of transferable creatures.
  - **INFERENCE:** This system currently has the most consequential unresolved dependency: respec
    rules must distinguish substitution from identity replacement.

- **Dossier direction**
  - **FACT:** Depends on biome/Region source identity, discoverable source quality, expected-effort
    classes, area-wide versus boss-only rules, and visible incremental progress.
  - **FACT:** Feeds targeted creatures, Skill Cards, gear pieces, information, crafting/operating
    outcomes, and Cipher rotation planning.
  - **INFERENCE:** Dossiers can bind world ecology, loot pursuit, and build intent into one loop;
    they should not become a detached checklist UI.

## 4. Internal contradictions still live

### A. Foundation, Discipline, and respec do not yet describe one build contract

- **FACT:** July 15 locks an immutable **Foundation**, a committed **Discipline/Grid trunk/Squad
  thesis**, substitution inside that framework, and “a different build ⇒ new Technician.”
- **FACT:** `CONTEXT.md` says Foundation sets the Grid starting position and names four examples.
- **FACT:** `DOC_v3.md` says Discipline sets the Grid starting position and lists five different
  identities.
- **FACT:** `DOC_v3.md` also permits normal Grid respecs and reduced-cost respecs without stating
  which trunk allocations are irreversible.
- **INFERENCE:** This is a real architecture contradiction, not merely unfinished naming. Either
  Foundation and Discipline are two separate locked axes, or two names for the same axis. In both
  cases, unrestricted Grid respec can presently erase the promised Technician identity.
- **Required resolution:** Define the character-creation axes, identify which are immutable, and
  state exactly what Grid/Squad changes remain legal on the same Technician.

### B. Skill Card compatibility is both universal and restricted

- **FACT:** `DOC_v3.md` says any Skill Card can be equipped to any creature and calls compatibility
  universal.
- **FACT:** The same document says some Skill Cards have creature-tag requirements and gives
  examples such as bite/claw/swarm compatibility.
- **FACT:** The Scouting imagined-player statement treats Skill Card compatibility as a role the
  player may need to search for in a creature.
- **INFERENCE:** “Can equip but cannot execute,” “can execute with a penalty,” and “cannot equip”
  are materially different games. The current wording supports all three.
- **Required resolution:** Lock one compatibility rule and make tags, scouting, Frame UI, and loot
  filters use it consistently.

### C. The canonical vocabulary still contradicts the July world-identity lock

- **FACT:** July 15 locks inhabited arcane/mystical fantasy as the immediate read, with the
  computational/relay substrate latent underneath.
- **FACT:** `CONTEXT.md` still says Protocol power is “not mystical or elemental” and that the
  setting is “not a fantasy realm with magic.”
- **INFERENCE:** The layered world direction can support structural deep lore and mystical surface
  experience together, but the current canonical vocabulary instructs authors to suppress the
  newly locked first layer.
- **Required resolution:** No new design decision is needed; reconcile `CONTEXT.md` to the July 15
  lock before world or narrative content is authored.

### D. “Ascension” is assigned to two incompatible systems in surviving docs

- **FACT:** July 15 keeps **Ascension** as the scaling excavation endgame pillar.
- **FACT:** `DOC_v4.md` says Ascension is reserved for the creature Principal system and that the
  excavation pillar needs another name; `DOC_v6.md` also uses Ascension for Principal visuals.
- **FACT:** Current vocabulary instead uses Principal/Pinnacle Evolution for the creature system.
- **INFERENCE:** The design decision is already made, but the surviving collision will misroute UI,
  progression, and content work if left uncorrected.
- **Required resolution:** Documentation cleanup only: reserve Ascension for excavation and use the
  current creature-advancement term until its dedicated rename.

### Explicitly excluded as intentional OPEN threads

- **FACT:** Five-layer text in `DOC_v4.md` versus the later seven-layer/unequal-depth direction is
  stale detail inside a deliberately open Cipher grill, not a reason to choose a count here.
- **FACT:** Old Region, Accreditation, Examiner, rival, permanent-shell, fixed-scene, and rendering
  language is explicitly marked stale/reopened/superseded.
- **FACT:** Gear-slot volume, type-chart values, defensive vocabulary, opening, dossier
  representation/tradability, off-Field body fiction, and final competition names are explicitly
  open rather than contradictions.

## 5. Identity risk

### Where Mythoras can still collapse into “Pokémon + PoE paste”

- **FACT:** Creature species/type matchups, contracting, a regional Champion, and a competition
  journey are recognizable Pokémon-family structures.
- **FACT:** Acts/zones, a giant passive tree, socket/link-like skill construction, weighted crafting
  currency, consumable endgame maps, an Atlas-like passive tree, Delve-like excavation, rare
  Pinnacles, and directed set progression are openly PoE-derived.
- **INFERENCE:** Several subsystems currently distinguish themselves mainly through renamed nouns
  or increased dimensionality. More damage types, more item mods, five creature inventories, and a
  second passive route do not by themselves create identity.
- **INFERENCE:** The old competition drafts are especially risky: if the authored campaign becomes
  “visit local authority, win credential, repeat,” the rookie-athlete framing will still read as
  gyms with esports language.
- **INFERENCE:** The endgame is at equal risk if Cipher duty is only a story justification for
  rolling map affixes and following an Atlas.
- **INFERENCE:** Management burden can expose the references rather than the fantasy: if play is
  dominated by fifty gear slots, card links, crafting currencies, and passive nodes, the player
  may experience “PoE spread across Pokémon” instead of commanding a Squad.

### Where Mythoras already has a distinctive identity

- **FACT:** Turn Program commits three allied actions before execution while enemies interleave by
  emergent initiative; there is no manual sequence assignment or baseline live reaction.
- **FACT:** Adaptive continuity makes encounter location and approach tactically persistent rather
  than wiping into a detached arena.
- **FACT:** Five-creature Squad structure, three Field slots, two Bench slots, and Load recovery
  make rotation a run-level tactical resource rather than a simple fainted-creature replacement.
- **FACT:** The Grid's global route plus slot-owned local routes makes the durable character a
  theory of Squad composition rather than one combat avatar.
- **FACT:** Champion status converts aspiration into obligation: victory grants access because the
  Champion is expected to withstand Cipher pressure.
- **FACT:** The world is intended to read as inhabited mystical ecology first and compiled relay
  structure only at depth.
- **FACT:** Dossier direction binds targeted progression to ecology, source intelligence, and
  changing Cipher environments rather than merely exchanging generic tokens.
- **FACT:** World View / Workspace View separates embodied play from deliberate analysis without
  pretending the deep systems are simple.
- **INFERENCE:** Mythoras's identity is strongest at the seams, not inside isolated systems:
  traversal becomes the battle board; bench rotation manages run fatigue; ecological knowledge
  targets build outcomes; becoming Champion changes the character's social role and endgame duty.
  Those seams should receive prototype priority.

## 6. Verdict and minimum pre-build locks

### Verdict: SOUND WITH CAVEATS

**INFERENCE:** The project is coherent enough to continue wayfinding and to build throwaway
prototypes now. It is not yet coherent enough for production implementation of character
progression or broad content authoring, because two rules that determine build legality remain
contradictory.

### Minimum decisions that must be locked

1. **Technician identity and respec boundary**
   - Decide whether Foundation and Discipline are separate axes or one renamed axis.
   - State which axis is immutable.
   - Define “Grid trunk” and “Squad thesis” mechanically.
   - Define what can be respeced or substituted without creating a new Technician.

2. **Skill Card compatibility contract**
   - Decide what universal means.
   - Decide whether tag requirements block equip, block execution, or alter effectiveness.
   - Apply that answer to scouting, Frames, loot filters, creature value, and dossier targeting.

3. **Minimum executable combat data contract before production combat content**
   - **FACT:** The type chart is acknowledged as missing, while combat depends on attacker damage
     type versus defender Primary/Secondary profile.
   - **INFERENCE:** A neutral placeholder is honest for a Turn Program prototype. Production
     creature, Skill Card, encounter, and balance data is not honest until the chart's structure
     and secondary-bias rule are executable, even if final numbers remain tunable.

### Not required before the first honest prototype

**INFERENCE:** Do not block the first traversal-to-battle prototype on final Region names, the
competition wrapper name, opening narrative, renderer choice, dossier art object, Cipher layer
count, off-Field creature ontology, exact Load rates, or final gear-slot volume. Those are best
resolved by the experiments already called for in the July decisions.

### Coherence test for the next build

**INFERENCE:** The first convincing slice should let a player traverse one authored ecology,
recognize or pursue one useful encounter, enter a battle on that exact surface, program three
creatures, rotate one creature because of Load, obtain one build-relevant outcome, and understand
how that outcome advances the same Technician/Squad thesis. If those actions feel like one
continuous intention, the game is coherent in play rather than only on paper.
