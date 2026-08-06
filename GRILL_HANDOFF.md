Damage Architecture Grill — Handoff



Session: July 1–2 2026. Token window approaching limit. Resume in a fresh session.
Start the next session by reading this file in full before doing anything.
After reading, proceed to: (1) resolve Q10, (2) doc state assessment, (3) ADE vertical slice planning.



Critical Corrections Established This Session

Battle field size: Maximum 3 creatures on field at once. Squad size is 5. Players rotate creatures between bench and the 3 active field slots. NOT 5 simultaneous. This affects all Turn Program design assumptions.

Turn Program commit model: The full round is programmed upfront. Execution Phase is committed — no live intervention for now. Flask-analogue and trigger-skill mechanics (Cast on Ward Break, Cast on Crit etc.) are reserved for a future session as a deliberate expansion layer.





Grill Decisions — What Is Locked



Q1 — Where do damage decisions live?

Decision: Both layers.





Build time / squad assembly: permanent directional commitment through Grid routing and Skill Card selection



In-battle "runtime" counterplay: trigger-based and flask-analogue tools authored pre-battle, not controlled live. These are future expansion, not campaign baseline.



Q2 — What does the Technician retain during Execution Phase?

Decision: Option A for now — nothing.
The plan is the plan. Reactive counterplay comes from anticipation and positioning before commitment.
Future expansion: flask-analogue + trigger skills (PoE's CWDT / trigger wand equivalent). Conditional automation baked into programs, not live control. Needs its own dedicated session.

Q3 → Q4 — Channel tier + Resistance capping (joint resolution)

Channel tier decision: Option C — stays, renamed job.
Two jobs:





Attribute scaling navigation: Physical Channel Streams scale with Authority/Invictus, Elemental Channel Streams scale with Animus/Order, Phenomena Channel Streams have unique scaling. Tells players which side of the Motherboard Grid feeds into this Stream.



Modifier/skill tag shorthand: "increased Elemental damage" covers all Elemental Channel Streams without listing them individually. Same reason PoE keeps Physical/Elemental/Chaos.

Resistance capping decision: Hybrid A+B with C as progression curve.





Per-creature resistance investment matters for gearing (A)



Squad composition provides a second layer — different creatures absorb different Streams (B)



Option C as the progression curve: campaign doesn't demand maxed resistances, Cipher Network endgame (equivalent to PoE post-Act 10 / maps) is where the investment becomes necessary to survive



Q5 — Ailment system

Decision: Option C — Hybrid.





Each Stream has one default ailment it can apply (readable baseline — Inferno → Ignite, Glacial → Chill, etc.)



Additional ailments emerge from conditions native to the Turn Program: sustained application across turns (Resonance threshold), squad pile-on within one Planning Phase, positional states from the grid



Cross-Stream ailments allowed (like PoE Poison via Physical OR Chaos)



PoE 2 cited as reference: more ailments per Stream is valid, multiple ailments tied to each Stream



Ascendancy-style modifiers that break the type convention (Assassin's "all elemental damage can apply Poison") are the deepest build expression layer



Q6 — Type effectiveness layer

Decision: Option C — both species-level AND build-earned.





Creature species has an innate type affinity defining weaknesses/strengths as a DEFENDER (Pokémon inspiration)



Skill Card loadout defines which Streams the creature deals as an ATTACKER (PoE gem inspiration)



Build investment can amplify type interactions further — deep Inferno investment makes you stronger against the Streams weak to Inferno



Breakout session required: no formal Stream effectiveness table (type chart) exists in the docs. The concept is referenced ("type advantage") but not formalised into multipliers. This is a blocking gap for DOC_v2_new.



Q7 — Stream Resonance

Decision: Option C — Two-tier system.





Tier 1 (baseline): Every Stream has a baseline Resonance layer — repeated hits of the same Stream apply a small stacking bonus visible to all players. No investment required.



Tier 2 (named deep mechanics): The original per-Stream named mechanics — Combustion (Inferno), Crystallization (Glacial), Conductance (Voltaic), Symbiosis (Eldergrove), Dominion (Psionic), Tremor (Tectonic), Veil (Fae), Enchantment (Blight), Corrosion (Phantom), Undertow (Tidal), Impact (Physical) — activate for players who invest heavily in a specific Stream through the Grid.



The previous session dissolved this unified system into distributed Grid notables. That dissolution may have been a mistake. Restoring the two-tier structure is the direction.



Note: Resonance was originally the type effectiveness / multiplicative amplification system. The two-tier restoration reconnects it to that original intent.



Q8 — Creature type identity (from docs + grill)

Decision: Already more nuanced than Option C. Confirmed from docs.
The creature typing system in the docs is:





Primary Stream = fixed to species (core visual and mechanical identity — colours, silhouette, Signature all tied to Primary Stream)



Secondary Stream = variable (rolled at capture via Secondary Contract, rerollable post-capture via Secondary Stream Reroll Agent — endgame only, Very Rare)



Origin = separate heritage dimension (Scalesbourne, Martial, Arcane, Psi, etc.) affecting gear compatibility, skill tags, and Skill Card interactions. Distinct from Stream.



Skill Cards = offensive Stream delivery — a creature can run Skill Cards of any Stream regardless of species Primary Stream

The formal type chart (which Streams deal amplified/reduced damage against which creature Stream profiles) does NOT exist in the docs. This needs a dedicated breakout session.

Q9 — Channel tier final

Decision: Option C — Keep with renamed job. (See Q3 above — resolved as the same question.)
Channel tier stays for two reasons: Attribute scaling navigation + modifier shorthand.





Q10 — LOCKED (2026-07-06)

**Decision: Automatic ordering (Option A).** No manual sequence assignment. Turn Program order resolves from Speed + skill-inherent timing + support costs. Combos are emergent from skill selection, ailments, Resonance, and execution order — not from explicit timing slots. Future Speed-augmenting stat parked. See `CONTEXT.md` correction #5 and `SESSION_HANDOFF.md`.

*(Prior deliberation context preserved below for reference.)*

Question asked: Does the Turn Program enable an explicit combo or chain mechanic in the damage architecture?

Options presented:





A: No dedicated mechanic. Ailment interactions happen naturally from execution order. Emergent from the system, not a named feature.



B: Explicit combo window mechanic. Two or more creatures' programmed actions interact to produce a visible "combo state" — amplified outcome when chains fire (Chill → Shock, Inferno × 3 crosses Resonance threshold). Turn Program planning becomes about authoring chains deliberately.



C: Squad synchronisation scaling vector. Deep investment in squad-wide Stream alignment unlocks a synchronisation bonus — squad-scale amplification that individual Resonance doesn't reach.

User's response (captured verbatim context):





Torn — this is a very deliberate decision affecting the entire Turn Program architecture



Concern: combo chains would require players to assign moves to specific timings/positions in the damage hierarchy, not just select the move itself



That degree of timing assignment starts to feel like a TCG (Yu-Gi-Oh chaining) — unsure if that's the direction



Pokémon comparison: Pokémon limits decision vectors by having max 2 on field (doubles) and relying on Speed stat for ordering, not manual assignment. Deliberate simplification.



Mythoras currently resolves to 3 creatures on field max (from a Squad of 5) to manage decision complexity — same philosophy of controlling decision vectors



Leaning toward B but not committed



The entire question may reduce to: "Do we allow players to manually assign timing for moves within a programmed round?" — that's the real decision

What needs to happen next:





Decide whether the Turn Program allows manual timing assignment (sequence position per move) or relies on other ordering signals (Speed stat, skill-inherent timing properties)



If timing assignment is allowed → B or B+C hybrid is available



If timing is Speed-driven or skill-inherent only → combo chains are emergent (Option A) or require separate investment to unlock ordering



Consider: 3 creatures on field simplifies this significantly vs 5. Planning a 3-creature sequence is much more tractable than 5.

Historical note: this was the instruction before the 2026-07-06 lock. Q10 is now CLOSED by the automatic-ordering decision above; do not reopen it from this preserved deliberation.





Parked Items — Dedicated Sessions Required







Topic



Why parked



Session type





Stream type effectiveness table (type chart)



Not in docs. Needs formal design — which Streams deal amplified/reduced damage against which creature Stream profiles



Planning Room





Trigger skill / flask-analogue mechanics



Future expansion of Turn Program reactivity. Not campaign baseline



Planning Room





Gear slot redesign



10 slots may be too many. Discussion: 4-5 categorised slots (armour, jewellery, weapon/offhand). Mentioned LoL's 6 generic slots as a contrasting reference. Prefer specialisation and categorisation.



Planning Room





Oura (temp) naming



Temporary name for defensive resource. Needs canonical name fitting The Protocol cosmological register



Naming session





Domain naming collision



"Domain" = elemental alignment AND Psionic deployable terrain — two distinct uses



Naming/Planning





Regional competition structure identity



Needs Mythoras-specific framing (not Gym badges, not Trial of Ancestors directly)



Planning Room





Zone static fixture grammar



Map editor design session in Mythoras Builder



Planning Room





UI design language



Arcane Cartographer is NOT locked. Exploration needed



Design session





What Comes Next (In Order)

1. ~~Finish Q10~~ — **DONE** (automatic ordering locked)
2. ~~Skill Card ownership grill~~ — **DONE** (creature-local confirmed 2026-07-07)
3. ~~Type system grill (Q1–Q7)~~ — **DONE** (2026-07-11; see Type System Grill below)

4. **UI grill (OD-004)** — NEXT PRIORITY. Fable 5 available. Three tracks: design language, panel layout, combat HUD.
5. Type chart Planning Room — 11×11 multipliers
6. Defensive layer grill — resistance per category; Oura naming; Phenomena resistance vocab
7. Tag interaction rules — specific effects per tag × damage type pairing
8. DOC_v2.md §6 rewrite — type system write-in

---

## Type System Grill — LOCKED (2026-07-11)

Session: July 6–11 2026. Covers damage type architecture, Pokémon transpose, tag system, immunity model.

### Q1 — Architecture direction
**Decision:** Stay with current system; rename terminology. "Stream" → **Damage Type**. "Channel" → **Category** (loose classifier only). Fantasy names (Inferno, Glacial, etc.) preserved for Protocol voice.

### Q2 — Tier necessity
**Decision:** 11 damage types + 4 category groupings. Categories are loose classifiers — NOT on type chart, NOT strict. Attribute associations loose (like PoE Chaos floating between INT/DEX).

### Q2b — Chart scope
**Decision: C** — Primary damage type on 11×11 chart. Secondary damage type as small bias layer ±0.1–0.15× on top. No manual Secondary chart.

### Category structure
**Decision: A** — 4 categories (aligns with 4 attributes as loose navigation zones):

| Category | Damage Types |
|----------|-------------|
| **Physical** | Physical, Tectonic |
| **Primal-Elemental** | Inferno, Voltaic, Glacial, Tidal |
| **Biotic-Elemental** | Eldergrove, Blight + one TBD |
| **Phenomena** | Psionic, Fae, Phantom |

- Tectonic stays in Physical — has internal depth (material/hardness sub-properties)
- Tidal confirmed in Primal-Elemental (energy triad: fire/lightning/ice + water)
- Biotic-Elemental (growth, decay) is thin at MVP — one type to be added later
- Phantom replaces Shadow — incorporeal/spirit identity, distinct register from corruption
- "Kinetic" removed from Physical — just Physical
- "Fortitude" scrapped — Phenomena resistance vocabulary TBD (BL-030)

### Q3 — Tag interactions
**Decision: C** — Both conditional mechanic AND investment-amplifiable multiplier. Base = mechanical/conditional effect. Grid/Skill Card investment deepens into damage modifier. Tags are publicly visible. Discoverable system, not mandatory chart complexity.

### Q4 — Tag assignment model
**Decision: D+C hybrid:**
- Universal Origin tags (always present for Origin — e.g. Scalesbourne → Draconic)
- Default Origin tags (tendency; specific species can deviate — e.g. Scalesbourne → Winged usually)
- Exceptional species tags (authored per extraordinary circumstances)

### Q5 — Immunity placement
**Decision: C** — Both chart-based and tag-based immunities exist, disclosed separately in UI:
- Chart immunities: authored, rare, world-logic-driven type vs type pairs
- Tag immunities: property-based (e.g. Winged vs grounding effects)
- Accuracy reduction available as softer alternative for specific tag interactions
- No base 0× on main chart — immunities are authored exceptions

### Q6 — Non-binary chart design
**Decision:** Soft tiers (0.5/0.75/1.0/1.25/1.5). No Pokémon 4× or 0.25×. Dual-type stacking clamped (floor ~0.35×, ceiling ~2.0×). Physical = neutral baseline axis. Build-earned affinity and Resonance are the PoE-extremity layer, not the base chart.

### Q7 — Phenomena naming
**Decision:** Phenomena stays as category name. Third type = **Phantom** (not Shadow/Necrotic/Profane). Fortitude scrapped.

### Pokémon transpose summary
- Flying type removed → Winged tag (aerial creature property, not damage type)
- Fighting type removed → Martial Origin (combat fantasy, not damage type)
- STAB removed → Damage Type Alignment (conditional bonus; smaller scale; build requirement)
- Pokémon's binary 0×/2× avoided — soft tiers + investment layers provide depth
- Chart job = legibility; depth job = Grid/conversion/Resonance/tag interactions

### Origin role (locked)
- NOT on type chart
- Tertiary influence: Bloodlines (primary mechanical role), Origin Affinity Skill Card tags, certain mods, specific Grid interactions
- Tags derived from Origin feed the tag interaction layer
- "Origin diversity bonuses" retired (replaced by Warbanners as Skill Cards)

### Resistance model notes (decoupled — not locked this session)
- Armour + Physical/Tectonic: LOCKED
- Primal-Elemental, Biotic-Elemental resistances: NOT locked — dedicated grill needed
- Phenomena resistance ("Fortitude" scrapped): NOT locked — vocabulary + concept TBD
- Defensive layers are parallel mitigation (not hierarchical with Armour)
- Glass cannon is valid (negative resistances acceptable)





DOC_v2_new (Combat Systems): Priority removal, Motherboard Grid correction (3 on field, not 5), Resonance two-tier restoration, Channel tier renamed job, type chart gap flagged



DOC_v3_new (Progression): Motherboard Grid rewrite — global route + 5 slot-local subroutes (NOT per-creature)



All docs: Update any reference to "5 creatures on field" to "3 on field, 5 in Squad"

3. ADE first vertical slice planning — scope the first vertical slice precisely enough for a Build Room session:
Target seam: one task card on board → dispatched to one terminal pane running a CLI agent → status updates when agent completes





Key Vocabulary Confirmed This Session

Add to CONTEXT.md in next session:







Term



Confirmed definition





Field



The 3 active creature slots during battle. Maximum 3 creatures on field at once.





Bench



The 2 remaining creatures in the Squad not currently on field. Rotation source.





Squad



All 5 creatures the Technician brings to a zone run (3 field + 2 bench).





Channel (damage)



Top-level damage group (Physical / Elemental / Phenomena). Two jobs: (1) Attribute scaling navigation on Grid, (2) modifier/tag shorthand. NOT a defence schema grouping.





Stream Resonance (Tier 1)



Baseline stacking bonus from repeated same-Stream hits. No investment required. Visible to all players.





Stream Resonance (Tier 2)



Named deep mechanics (Combustion, Crystallization, Conductance, etc.) unlocked through heavy Stream investment on the Grid.





Primary Stream



Fixed to creature species. Determines core visual identity, Signature, and baseline type profile.





Secondary Stream



Variable. Rolled at capture, rerollable via endgame Agent. Contributes to creature's type profile and visual accent.





Origin



Creature heritage/bloodline dimension (separate from Stream). Affects gear compatibility, Skill Card interactions, and species tags.

