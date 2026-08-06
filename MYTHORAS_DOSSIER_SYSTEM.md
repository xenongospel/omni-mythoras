# Mythoras Dossier-System Direction

> Durable design direction for Mythoras's Divination-Card-inspired targeted-progression
> system. **Dossier** is the preferred framing seed, not a locked final system name.
> Representation, fiction, thresholds, reward catalogue, and interface remain subject to a
> dedicated grill/prototype.

## Design status key

- **LOCKED DIRECTION** — preserve this intent through later design work.
- **OPEN** — requires a deliberate decision, experiment, or content pass.
- **PARKED** — promising adjacent idea; do not make it part of the base system yet.

## Player promise

**LOCKED DIRECTION**

A player who wants a particular build or progression outcome can learn where to pursue it,
make visible incremental progress through relevant activity, and understand the rough effort
and source rules involved. Discovery and community knowledge remain valuable, but the game
teaches enough practical source and reward context that a campaign player can act on the
system without first consulting a market spreadsheet.

## Pattern retained from Path of Exile

**LOCKED DIRECTION**

- Preserve **directed variance reduction**: specific farmable activity → incremental progress
  → targeted reward.
- Location and source targeting matter greatly. Choosing where and what to run is part of the
  player's strategy, not incidental flavour.
- Preserve set-like accumulation toward a named outcome. Individual progress pieces should be
  meaningful because the completed target is known.
- Preserve veteran meta-knowledge and discovery. Mythoras shifts the burden of learning toward
  sources, practical value, and usable first-party clues; it does not eliminate hidden
  relationships or community expertise.
- Surface or make discoverable an **expected completion-time class** and whether progress is
  **boss-only or area-wide**.
- Prefer drop weights high enough that pursuing a suitable source produces believable,
  observable completion progress rather than a theoretical farm.

**OPEN**

- A later content process may borrow the community-submission DNA behind PoE Divination Cards
  (themselves inspired by collectible-card set completion), but Mythoras should not copy that
  process wholesale before its reward and representation grammar is stable.

## Deliberate Mythoras changes

### Source-first teaching

**LOCKED DIRECTION**

- Source details are the highest-value teaching surface. The system should teach where progress
  can come from, how source quality differs, and whether the whole area or only its boss can
  award it.
- Hidden exact drop probabilities are allowed. Opacity of odds is not treated as a system
  failure. Expected-time classes can communicate practical commitment without publishing exact
  weights.
- The first encounter with a progress piece should communicate its target, current progress,
  broad source relationship, and practical use. More precise high-weight locations may be
  learned through play, NPC/in-world information, rotation briefings, observation, trade, or
  community knowledge.
- Teaching must distinguish "valuable for my current build or systems" from "valuable on the
  market." It should provide a usable baseline without flattening the veteran economy meta.

### Biome/region primary binding

**LOCKED DIRECTION**

- Bind a target primarily to one or more **biomes or regions**.
- Individual maps/zones within that ecology can carry higher weights, but a target should not
  normally be hard-locked to one map ID.
- Authored exceptions may be boss-only, encounter-specific, or narratively exclusive, provided
  the source rule is discoverable.
- This hierarchy keeps geographic identity meaningful while surviving changing Cipher layouts
  and avoiding a single-map farming prison.

### Dossier framing beyond creatures

**LOCKED DIRECTION**

- A dossier is an assembled body of evidence or recoverable pattern directed at an outcome; it
  is not limited to creature capture.
- Reward targets may include:
  - creatures or creature-related outcomes;
  - informational or Agent targets;
  - gearing-system pieces;
  - Skill Card representations;
  - other build and progression targets;
  - **operating outcomes**: consumable or persistent operators that modify another system or
    crafting process.
- Operators should couple meaningfully into existing systems rather than becoming generic
  currency. Example design space: an operator that causes the next Link Agent operation to link
  all sockets already present. This is an example, not a locked operator or final name.
- Keep vocabulary aligned with Mythoras scope: a **Squad** is one Technician's five creatures
  (3 Field + 2 Bench); **Party** refers only to multiplayer Technicians/accounts.

### Hybrid reward specificity

**LOCKED DIRECTION**

- Some completed dossiers guarantee an exact named outcome.
- Others guarantee a bounded family, tier, category, or compatible outcome.
- Specificity should match reward power, completion cadence, and economic consequences rather
  than forcing every target into one guarantee model.

### Dual tradability hypothesis

**OPEN — deliberate hypothesis, not locked**

- Tradable progress can remain scarcer and economically valuable.
- Non-tradable progress can potentially be more powerful, more common, or easier to complete
  because it cannot be pooled through the market.
- A dual track may let personal pursuit feel attainable while retaining trade-market chase
  sets. The split, thresholds, and whether completed rewards inherit binding all require
  modelling and player testing.

### No Scrying copy

**LOCKED DIRECTION**

- Do not copy PoE's Scrying process, its sage wait/grind, or its conceptual wrapper.
- Mythoras needs its own way to discern changed sources when Cipher rotations refilter
  environments. The process should emerge from Cipher planning, observed run evidence, and
  source intelligence—not from waiting for an external relocation service.

## Candidate representation

**OPEN**

The mechanic does not need to use cards, and no final object name or art form is chosen.
Candidates to prototype:

1. **Cards or set-pieces** — immediately legible collection grammar, but risks visual and
   conceptual proximity to PoE and collision with Mythoras Skill Cards.
2. **Idol/residue metaphor** — ancient residue or stored power incrementally reconstructs a
   treasured outcome; fits relic-like or Freya-adjacent power imagery without locking a final
   noun.
3. **Yu-Gi-Oh-like summon media feel** — a represented subject is made present through an
   evocative medium; useful emotional reference, not a requirement to use literal cards.
4. **Evidence, traces, seals, impressions, or assembled records** — supports the dossier frame
   and source-learning loop, but must avoid becoming cryptic paperwork or a plain quest bar.
5. **Reward-specific media** — different target classes use distinct representations under one
   shared progression grammar. This may improve fiction but raises interface and inventory
   complexity.

Representation must make target, progress, source class, and practical use legible. The
interface is a known design risk and needs dedicated prototyping before visual language is
locked.

## Cipher rotation interaction sketch

**LOCKED DIRECTION**

- A dossier target keeps its primary biome/region affinity.
- A Cipher Network rotation refilters which Cipher environments express those affinities and
  which specific maps/zones receive elevated source weight.
- As a result, rotations create different efficient routes without invalidating the broader
  ecological rule or moving a target arbitrarily between unrelated maps.
- Cipher planning should show or reveal enough environmental/source traits for a player to form
  a farming hypothesis before spending a run.
- Completed runs can produce source intelligence: confirmation that a target is area-wide or
  boss-only, evidence that a current environment is eligible, and clues that distinguish an
  ordinary source from a high-weight source.
- The combination of pre-run traits, rotation-level signals, and accumulated run evidence is the
  starting alternative to Scrying. Exact implementation remains open.

**OPEN — prototype candidates**

- Rotation briefing: announces affected biome/region families and broad target classes, not exact
  odds.
- Dossier source profile: records confirmed eligible environments and player-observed stronger
  sources across the current rotation.
- Cipher trait matching: visible Cipher environment traits let players predict eligibility and
  relative source quality.
- Run residue/trace feedback: post-run evidence narrows a target's current high-weight source
  without requiring a guaranteed drop.
- Rotation remapping rules: decide what persists as player knowledge, what resets, and how
  quickly a player can re-establish an efficient route.

## Campaign onboarding principles

**LOCKED DIRECTION**

1. Introduce one attainable dossier early, with a reward whose use is obvious to the player's
   current Technician or Squad.
2. Teach the complete loop in play: acquire progress, inspect the named target, identify an
   eligible biome/region, distinguish area-wide from boss-only, and complete/redeem.
3. Use a short expected-time class such as "one visit," "several runs," or "long pursuit";
   labels are illustrative and not final terminology.
4. Demonstrate that a named map/zone can be a better source while its broader biome/region still
   remains eligible.
5. Explain exact guarantee versus family/tier/category guarantee before the player invests.
6. Teach practical use at the point of discovery: what system accepts the reward, whether it
   helps the current build, and whether trade value may differ.
7. Introduce an operating outcome during the campaign only after the underlying target system
   (such as linking or crafting) is understood.
8. Keep advanced source optimisation and market valuation discoverable; onboarding establishes
   competence, not exhaustive mastery.

## Open design questions

**OPEN**

- **Tradability split:** Which progress and completed outcomes are tradable, account-bound, or
  character-bound? How much completion-rate or power uplift does non-tradability permit?
- **Representation:** Cards, idol/residue, summon-like media, evidence objects, a mixed model, or
  another form? How does it avoid conflict with Skill Cards and remain readable at loot speed?
- **Operator catalogue:** Which crafting, linking, scouting, Cipher, creature, and gearing
  operations are safe and exciting to modify? Which operators are consumable versus persistent?
- **Rotation remapping without Scrying:** Which Cipher traits communicate eligibility, how are
  elevated maps discovered, and how much source knowledge persists between rotations?
- **Specificity bands:** Which reward classes support exact guarantees and which require
  family/tier/category outcomes?
- **Completion-time vocabulary:** What classes are understandable and honest without revealing
  exact probability?
- **Drop architecture:** What baseline and elevated weights make completion feel real at campaign,
  early-endgame, and deep-endgame cadence?
- **Inventory and redemption:** Are progress pieces physical, automatically recorded, or mixed?
  Where does completion occur, and what prevents the system from feeling like a quest bar?
- **Interface:** How are source, progress, reward use, rotation state, and trade status explained
  without overwhelming the World View or Workspace View?
- **Community contribution:** If players later propose dossiers/rewards, what curation rules keep
  outcomes balanced, fictionally coherent, and source-readable?

## Parked adjacent ideas

**PARKED**

- Risking incomplete progress through a Harvest-like double-or-nothing / zero-or-double
  multiplier. Explore only after the base completion cadence and tradability model are stable.
- Community-submitted targets or representations. Revisit after the system's content grammar,
  review process, and economic guardrails exist.

