# Owner Answers & Direction Delta — 2026-08-06

> Owner-direction / research / idea-vector only. **Not canon** unless already locked elsewhere.  
> Answers the open questions in [RESEARCH_OWNER_DIRECTION_PRACTICAL_TURN_2026-08-05.md](RESEARCH_OWNER_DIRECTION_PRACTICAL_TURN_2026-08-05.md) and captures new commentary from the same session.  
> Sibling nuance: [Gameplay analysis and insights](4068e387-a6b5-4bed-88de-b1080f60e585).

**Date:** 2026-08-06

---

## A. Answers to prior open questions

| # | Question | Owner answer (faithful paraphrase) | Status |
| --- | --- | --- | --- |
| 1 | Greybox fidelity bar | No fixed “moderately decent texture” bar. Prefer **basic**: color-coded tiles / net of squares for battle/region/zone; default mesh if 3D. **No** stone/tree/grass texture or shader detail for now. “Good enough” = enough to understand what we need. Anti-symmetry for top-down optional, not blocking. | **Answered — keep basic** |
| 2 | Squad gear UX primary pattern | Primary lean: **Darkest Dungeon** composition (info-heavy lower band + scene/board upper). Battle Brothers tent has potential; PoE2 merc still useful as compact widget. Vertical vs horizontal vs “diagonal” slice of that layout **not decided**. | **Answered lean — DD primary** |
| 3 | Information density experiment | Glanceables: **existing HP** + maybe attributes / whatever else proves necessary. Not full sheets at once. | **Answered — minimal glanceables** |
| 4 | Spatial inventory | **Shared Technician stash** (multi-cell preferred — weight/feel). **Gear slots per creature.** Not per-creature bags for stash. | **Answered** |
| 5 | Resist model | Prefer **Grim Dawn–leaning hybrid** (soft-cap / penalty / reduction feel) over PoE hard-cap culture; want **one layer of difficulty** framing rather than multiple cap ladders. Frontline/bench defensive acumen matters; sandbox configs, not rigid roles. Research Darkest Dungeon defenses too. | **Answered lean — GD hybrid; research DD** |
| 6 | Dev Environment v1 | First generator: **creature**. Loot later. | **Answered** |
| 7 | Server-backed authoring | **Not now.** | **Answered — defer** |
| 8 | Creature trait ↔ gear gates | Measure when more info exists; don’t force hardness yet. | **Defer measure** |
| 9 | Cipher loot scaling | Important later; **not now.** | **Defer** |
| 10 | Progression philosophy | Operationalize as **all** of: loot spikes, defensive tech unlocks, narrative beats, Cipher authorship payoffs (when those systems exist). | **Answered — all of the above** |
| 11 | Fusion/synchro track | **Idea vector only** — not a fixed pattern to implement. Do not over-literalize. Park hard. | **Parked / demoted** |
| 12 | Tutorial / archetypes | **Not yet.** | **Defer** |
| 13 | Vocabulary Squad vs party | Handle with vocab pass later; don’t block. | **Defer vocab** |

---

## B. New owner commentary (structured)

### B1 — Mercenary / Battle Brothers progression vector

- Mercenaries (and similar companion-gear games) feel closer to desired **creature management progression** than single-avatar ARPG paper-dolls alone.
- Owner screenshots: Battle Brothers unit sheet + shared stash + bottom roster — gear drag to unit; ~8–12 roster portraits manageable → **5-creature gear may have been overthought**.
- **Merc chase variables** matter for transposition: incremental improvements (craft gear for creatures; skill/link upgrades that open a much larger power step). Explore progression deeper as guidelines, not whole chase identity.
- Indie pattern noted: opus often comes from wanting “another direction” for another game (PoE sphere-grid → passive tree; Ascendancy as later class-power specialization). Use as ethos for remakes, not copies.

**Reference images (owner):** Battle Brothers character/stash UIs under Cursor `assets/` (2026-08-06).

### B2 — Passive tree / attributes / defenses

- **Do not** want the exact same PoE passive tree; remake principle OK.
- Fine with defensive schemas (armour/evasion-like) and **loose attribute umbrellas** (PoE-style associations) — strength as classification + stacking stats, not everything hard-gated to one attribute.
- Explore PoE attribute↔system associations in the Mythoras env **before** any fundamental change.
- Ascendancy history interest: class specialization power — research seed only.

### B3 — Naming oddball

- Pokémon “trainer battles” / Yu-Gi-Oh “duels” → could Mythoras battles be framed as a **Protocol** (or protocol-something)? Odd question, parked for naming session.

### B4 — Theme ↔ mechanic coherence

- Careful with fiction justifying mechanics.
- Owner **disagrees** with treating Affliction-style downsides as pure fiction tax when PoE also has **spell vs attack** early/mid power disparity (attacks/slams feeling stronger early) — keep that tension in mind when designing dual offensive tracks.

### B5 — Squad layout / Montabi succinctness

- Video ref: https://x.com/PlayMontabi/status/2079523521240428950/video/1  
- Goal: succinct creature + empty-slot layout; not final UI (RuneScape-adjacent workspace still in mind).
- Pattern: small creature cards/portraits + key stats; **one click** for inventory/gear/moves depth. Hover-tooltip (PoE gear) vs dedicated component TBD.
- Empty party slots should be legible.

### B6 — Skill representation (idea vector)

- Skill Cards may be redone — **idea vector**, still thinking. Physical representation was the original reason for cards ([Gameplay analysis](4068e387-a6b5-4bed-88de-b1080f60e585)).
- Prefer **not** deckbuilder bottom-row draw. Consider **action bar** for pre-configured skills per creature; alternate shapes (diamonds) optional, action bar currently preferred among those options.
- **Game log** called out as important.
- Divinity character sheet: decent CRPG construction; not chosen, interesting.

### B7 — Non-active creature backlog / availability

- Need a backlog for creatures outside the active Squad.
- Prefer **not** always-available roster browser: Mewgenics-like “household / incubation” select-to-bring pattern is interesting — must actively choose who goes out.

### B8 — Crafting

- Crafting will rhyme with PoE in *some* ways but needs **Mythoras-imagined patterns**, not a clone. Design/test in env when ready (creature first).

### B9 — Darkest Dungeon (major inspiration spike)

- Owner wants **close-to-full exploration** of Darkest Dungeon (Steam: https://store.steampowered.com/app/262060/Darkest_Dungeon/).
- Likes: orchestration, scene transitions, narrative/comic-strip depth layers, battle layout construction, information band vs scene band, clarity of assets.
- Still wants **tile-based combat** (DD is more static formation) + Master of Piece combat clarity + Pokémon multi-register lighter tone (not DD grimdark as default).
- Squad UX primary lean now points here (see A2).

### B10 — Damage types / streams skepticism

- Not sold on **11 damage types** as currently framed; overall system feels convoluted (streams × types × origins).
- Still likes dual/triple-track idea: streams sitting under damage types with occasional overlaps; loose attribute associations.
- Primary reason for Mythoras env: **test these concepts** before locking.

### B11 — MDE / maps

- Most of the game is states + tiles (little real-time): prefer **2D flat / net2D maps** for zones, region layouts, and battle layouts in the env and early greybox.
- MoP research clarity praised; merge MoP/DD clarity with Pokémon multi-biome lighter register.

### B12 — Audience / polish

- No audience yet → ignore backlash concerns; focus on initial steps. Prior “conclusion” accepted.

### B13 — AI asset pipeline

- Expect AI-assisted assets; clarity (MoP/DD) still a design requirement for readable silhouettes/icons, not an excuse for noise.

---

## C. Pathway impact (advisory — does not reschedule)

Relative to [PATHWAYS_PRACTICAL_ACTUALIZATION_2026-08-05.md](PATHWAYS_PRACTICAL_ACTUALIZATION_2026-08-05.md):

| Path | Impact of answers |
| --- | --- |
| A–C Seam / greybox / Turn Program | Greybox bar clarified = **basic nets/colors**; still the play proof. |
| D Mythoras Dev Env | v1 = **creature generator**; net2D maps; **no** server-backed yet; later attribute/loot labs. |
| E Composition lab | Elevated: DD-leaning layout experiments, shared multi-cell stash, per-creature gear, GD-hybrid resists — **after or thin-parallel** to seam, not instead of it. |
| F Fusion/synchro | Explicitly demoted to soft idea vector — do not expand. |

---

## D. Follow-up research spawned by this dump

1. Darkest Dungeon close-to-full exploration (owner-requested).  
2. Montabi squad-layout video visual analysis.  
3. Optional later: Battle Brothers merc progression / chase variables; PoE attribute association map; DD defensive model; skill action-bar vs card physical metaphor session with Gameplay Analysis.

---

## E. Explicitly not done here

- No GDD locks on damage types, skill metaphor, Protocol-battle naming, or resist formula.  
- No build plan / sprint.  
- Does not reopen locked CONTEXT damage architecture without a deliberate grill — owner skepticism is flagged as **research pressure**, not a silent revert.

---

*End of owner answers capture.*
