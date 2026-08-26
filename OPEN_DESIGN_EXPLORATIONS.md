# Open Design Explorations — Captured But Unresolved

> Moved out of `CONTEXT.md` on 2026-08-26. That file declares itself vocabulary
> only; these are multi-page design essays, and they sat in the middle of the
> document where model attention degrades most. They are grill-prep, not
> glossary.
>
> Referenced from [`CONTEXT.md`](CONTEXT.md) under Open Questions.

These are design questions that have been articulated but not answered. They
affect the Builder's simulation scope and the game's itemisation system. Do not
invent answers. Surface them when relevant and defer to a dedicated grill
session.

---

## Principal configuration

A chosen Principal starts from a base configuration that may later be replaced
or crafted further. Shape of that configuration is OPEN. Do not add a second
layer called Pinnacle Evolution.

---

## Modifier / Affix Classification System

**What PoE does:** Items have prefixes and suffixes — the two-tier affix system. Each tier has a mod pool, tiers within each mod (T1 best, lower tiers weaker), and weights governing how likely each tier/mod is to appear during crafting. PoE was not the first (Diablo 2 had prefix/suffix before it) but PoE significantly deepened the system with mod pool weighting, fossil/influence/eldritch layering of mod availability, and the crafting bench as a pseudo-affix slot. Max affix count in PoE is 6 (3 prefix + 3 suffix). The modpool size, modpool expansions, specific mod tiers, and weights of those tiers are what make crafting sequences meaningful and deterministic for experienced players.

**The open question for Mythoras:**

Does Mythoras keep prefix/suffix, change the number of classifications, or replace the system entirely? Several directions have been considered:

- **Keep prefix/suffix (2 classifications):** Familiar, understood by PoE players, easy to communicate. May feel derivative rather than distinctly Mythoras.
- **Quad classification (4 affixes aligned to the 4 Attributes — Authority, Invictus, Animus, Order):** Items have up to 4 affix slots, one per Attribute family. Players build items with an Attribute identity rather than filling generic prefix/suffix slots. This has symbolic resonance (4 is thematically important in Mythoras's systems — 4 Attributes, 4 Foundations, etc.). The implications are significant: players think about items differently, crafting Agent tools operate on Attribute-specific mod pools rather than position-based slots, and the max mod count changes from 6 to 4 — which reduces complexity but may reduce depth. A quad cap of 4 mods total is a meaningful constraint. Does 4 feel like enough expression or too tight?
- **Hybrid approach — quad pools with prefix/suffix wrapper:** Four Attribute-aligned mod pools exist but items still present as prefix/suffix facing — the pools determine which mods are available in each position without exposing the quad structure directly to players. This preserves the familiar grammar while introducing Attribute-identity logic underneath. May feel like complexity without payoff if players never see the underlying structure.
- **Alternative not yet explored:** Are there games besides PoE and Diablo 2 with a thoughtfully designed affix/modpool system? This is worth a subagent research pass to understand the design space before committing.

**What this affects:** Forge Terminal simulator design in the Builder, crafting Agent tool design, item card UI density and layout, and the fundamental feel of itemisation. The mod cap (4 vs 6 vs 8) changes how players think about item investment. Modpool size, tier count, and weighting must all be designed simultaneously — changing the classification system requires redesigning all three.

**Status:** Unresolved. Requires a dedicated grill session before Builder Forge Terminal simulation can be scoped.

**Related evidence:** [`RESEARCH_AFFIX_PREFIX_SUFFIX_LEAN_2026-08-11.md`](RESEARCH_AFFIX_PREFIX_SUFFIX_LEAN_2026-08-11.md), [`RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md`](RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md), [`POE_CRAFTING_STEPS_RESEARCH.md`](POE_CRAFTING_STEPS_RESEARCH.md), [`CRAFTING_FOUNDATION_RETHINK.md`](CRAFTING_FOUNDATION_RETHINK.md).

---

## Creature Equipment Slot Volume

**The tension:** PoE gives players an equipment slot for every build flavour imaginable (weapon, offhand, helmet, chest, gloves, boots, belt, 2× ring, amulet, flask × 5 = ~15 slots). This enables maximum itemisation depth but creates enormous surface area to manage. League of Legends gives players 6 generic slots with no conditions — simple, low friction, but less expressive. Mythoras wants something between these extremes that feels appropriate for creature-based rather than single-avatar itemisation.

**Current working set (from GDD, not final):** Each creature has: Weapon, Offhand, Helmet, Boots, Imprint Interface, Symbiotic Slot — approximately 6 slots. With 5 active creatures that is 30 individual item slots to manage across the squad, before bench creatures.

**The concern:** 30 slots across a squad is a significant management burden, especially for a game that already has the Motherboard Grid, Skill Cards, Support Cards, and squad rotation to think about. Is 6 slots per creature the right number? Is per-creature itemisation even the right model, or should some slots be squad-wide?

**Possible directions:**

- **Category-based slots rather than specific slots:** Instead of "Helmet slot accepts only helmets," a broader "Head slot accepts any head-class item" gives players flexibility within a category. Reduces slot specificity anxiety without reducing the number of slots.
- **Reduced per-creature slots (3-4) with squad-level slots:** Fewer creature-specific slots, but some items are equipped to the squad rather than individual creatures — Warbanners, squad-wide Imprints, Technician equipment. Reduces per-creature burden while preserving squad-scale itemisation.
- **The Symbiotic Slot as the distinctive Mythoras slot:** The Symbiotic Slot (creature-to-creature symbiosis item) is the most novel and worth protecting. Whatever the final slot count, this one should survive.

**Status:** Unresolved. Slot count directly affects squad management UI design, inventory panel design, and Builder creature configuration scope. Requires a grill session after the damage architecture session is resolved.

---

*When one of these closes, record the decision in [`docs/adr/`](docs/adr/README.md) and reduce the entry here to a pointer.*
