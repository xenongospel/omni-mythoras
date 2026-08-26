# Research — Merc Progression Vector (Battle Brothers → Mythoras)

> **CORRECTION (2026-08-06):** Owner’s “mercenaries” ask targeted **PoE 3.29 Luminary + Mercenaries of Trarthus**, not Battle Brothers. See [RESEARCH_POE_LUMINARY_MERC_VECTOR_2026-08.md](RESEARCH_POE_LUMINARY_MERC_VECTOR_2026-08.md). This file remains useful for **shared-stash / per-unit gear UX** and optional unit-economy chase ideas only — not Technician Foundation design.
>
> Owner-direction / research / idea-vector only. **Not canon.**  
> Transposes Battle Brothers–style **mercenary chase** into guidelines for Mythoras **creature management**, not a BB clone.  
> Anchors: [RESEARCH_OWNER_ANSWERS_2026-08-06.md](RESEARCH_OWNER_ANSWERS_2026-08-06.md) §§ B1–B2; owner BB screenshots (2026-08-06).

**Date:** 2026-08-06  
**Status:** Research vector — guidelines + chase principles. Does not lock GDD systems.

---

## 0. Owner ask (faithful)

From B1:

- Merc / companion-gear games feel closer to desired **creature management progression** than single-avatar ARPG paper-dolls alone.
- BB unit sheet + shared stash + roster bar made **~5-creature gear feel less scary** (owner read: may have been overthought).
- Want deeper look at **merc chase / incremental progression**: craft gear for creatures; skill/link upgrades that unlock **larger power steps**.
- Indie remake ethos noted separately (PoE sphere-grid → passive tree; Ascendancy as later specialization) — use as **remake principle**, not exact PoE tree (B2).

Locked inventory shape already answered (A4): **shared Technician stash** (multi-cell preferred) + **gear slots per creature** — not per-creature bags for stash.

---

## 1. What Battle Brothers unit progression actually is

Sources: Overhype [developer blog — Character Stats](https://battlebrothersgame.com/character-stats/); [Dev Blog #45 Named Items](https://battlebrothersgame.com/dev-blog-45-named-items/); [Dev Blog #117 Named Equipment](https://battlebrothersgame.com/dev-blog-117-named-equipment/); community wiki summaries (Level/Experience, Perks — Fandom, CF-gated at fetch time); Steam perk/mechanics guide (secondary). Owner screenshots corroborate UX shape.

### 1.1 Levels & attributes

| Layer | Behavior |
| --- | --- |
| Core levels | Roughly **1 → 11**: each level grants **1 perk point** + ability to raise **three attributes** (player chooses which three). |
| Growth RNG | Level-up amounts are rolled in ranges; **talent stars** (1–3 per three stats) bias min/max. Rolls are fixed at recruit creation (no re-roll on level-up). |
| Veteran levels | Beyond 11: XP continues; **no further perk points**; attribute gains shrink (community: max ~+1 per chosen stat). Cap historically moved (wiki: max 33 post–Warriors of the North). |
| UX note (owner shots) | Level-up is an explicit **“Click here to level up!”** commitment — progression is deliberate, not silent auto-spend. |

No class system: roles emerge from **stats + perks + gear**, not locked archetypes ([dev blog](https://battlebrothersgame.com/character-stats/)).

### 1.2 Perks (discrete power steps)

- Perks are a **tiered pick grid** (same UI pane as Stash — owner shots show Stash | Perks tabs).
- Many perks are small; a subset are **build hinges**: weapon masteries (fatigue/skill economy for a weapon family), **Nimble** vs **Battle Forged** (light-armor HP mitigation vs heavy-armor mitigation), Quick Hands (swap economy), Colossus, Recover, etc.
- Pattern: incremental levels feed **occasional large unlocks** that reframe how that merc fights — not a flat +1%/level treadmill alone.

### 1.3 Gear tiers & named chase

Dev framing (primary):

- Early problem: players **skip low tiers too fast** when mid/high gear is cheap and common ([#45](https://battlebrothersgame.com/dev-blog-45-named-items/)).
- Named items: rare, slightly randomized upgrades of top-tier weapons/shields/armor — “chasing after named items can be a driving motivator in the later parts of a campaign” ([#117](https://battlebrothersgame.com/dev-blog-117-named-equipment/)).
- Named ≠ full legendary fantasy initially; they are **well-crafted outliers** that extend the loot story after the tier ladder plateaus.

Visible in owner stash shots: durability % bars, stacked consumables, spare helms/weapons/shields — gear is **company property** waiting to be assigned.

### 1.4 Fatigue / armor layers (combat budget)

From Overhype’s own stats writeup:

- **Armor (head + body):** absorbs hits before HP; destroyed for the fight when depleted; **heavier armor reduces max fatigue**.
- **Fatigue:** spent on actions and some hits; recovers each round; high fatigue delays initiative and can force Recover / basic attacks only.
- **Hitpoints:** last line; permadeath exists in BB (explicit non-goal for Mythoras — §5).
- **Initiative:** tied to current fatigue + load — tactical tempo is a resource story, not only DPS%.

This creates a **load vs endurance** tradeoff: better protection often costs action economy. Perks like Brawny / Nimble / Battle Forged are large steps because they rewrite that tradeoff.

### 1.5 Shared stash + per-unit doll (UX that de-scared gear)

Owner screenshots (Eike / Guntram):

| Region | Role |
| --- | --- |
| Left | One brother’s paper-doll (head/body/main/off/accessory/bags), active skills, traits, attribute bars, XP |
| Right | **Company stash** grid (filterable) **or** Perks tab |
| Bottom / corner | Roster portraits (company size e.g. 12/12) with glanceables (morale, pending level-up) |
| Meta | Stash capacity counter (e.g. 35/108) — shared logistics, not 12 personal bags |

Structural lesson for Mythoras (already aligned with A4): **one shared pool + N personal slot masks**. Switching units is cheap; deciding **who gets the good spear** is the chase.

---

## 2. Chase variables that create incremental stories

These are the levers that make BB feel like a **company soap opera of upgrades**, not a single character’s loot treadmill. Steal as **principles**; rename/reshape for Mythoras.

1. **Unit identity before gear** — Background + talent stars + traits make “this farmhand wants to be a flail guy” a readable story before you spend crowns. Incremental: every level reinforces or pivots that identity.
2. **Shared scarce stash** — One pool of weapons/armor means upgrades are **allocation decisions** (“Eike gets the named shield; Guntram waits”). Stories are comparative across the squad.
3. **Tier ladder with a late named spike** — Common progression (scrap → mail → plate / weapon tiers) then a **rare named chase** so the midgame doesn’t go flat ([#45](https://battlebrothersgame.com/dev-blog-45-named-items/), [#117](https://battlebrothersgame.com/dev-blog-117-named-equipment/)).
4. **Fatigue/armor as a felt tradeoff** — Each gear upgrade is not pure power; it changes the combat budget. Incremental stories include “he finally can wear this without gasping.”
5. **Perk hinges as power steps** — Small levels accumulate; specific picks unlock a **much larger** capability (mastery, wheelhouse defense perk, swap economy). Matches owner ask: skill upgrades that open big steps.
6. **Deliberate level-up ritual** — Pending level-ups on roster icons + manual confirm make progression a **session beat**, not background noise.
7. **Outfit visibility** — Portrait/gear sync sells “this is *my* guy now” (owner shots: helmet + armor redraw the brother). Cosmetic feedback on incremental upgrades.
8. **Company meta-resources** (BB-specific flavor) — Tools/medicine/food/wages/renown wrap gear chase in logistics. **Do not import wholesale**; see non-goals. The principle worth keeping: **squad power has a logistics skin**, not only combat stats.

Owner-emphasized craft path for Mythoras: incremental **crafted** gear for creatures (B1, B8) can stand in for BB’s loot/shop ladder — same “next piece for *this* unit” story, Mythoras-authored economy.

---

## 3. Transposition guidelines → 5-creature Technician Squad

Preconditions already answered:

- Shared Technician stash + per-creature gear slots (A4).
- Squad UX lean = Darkest Dungeon composition; BB tent still useful as secondary pattern (A2).
- Progression philosophy = loot spikes **and** defensive tech unlocks **and** narrative beats **and** Cipher payoffs when those exist (A10).

### 3.1 What to borrow

| BB pattern | Mythoras guideline |
| --- | --- |
| Shared stash ↔ unit doll | Keep: one multi-cell Technician stash; drag/assign into creature slots. 5 dolls is *less* UI than BB’s ~12 — owner’s “less scary” read is structural, not a request for 12. |
| Incremental gear story | Craft / loot / Cipher pieces that are **addressed to a creature role**, not only global DPS. “Next piece for the frontliner” beats “+12% to main.” |
| Perk hinges | Creature skill/link upgrades should include **rare large unlocks** (new interaction, defense wheelhouse, action-economy break) gated behind smaller investments — not only flat stacking. |
| Talent-like bias | Soft creature aptitudes (growth lean / trait umbrellas) that make some upgrades feel “on-type” without hard class locks (rhymes with B2 loose attribute umbrellas). |
| Roster glanceables | Minimal: HP (+ whatever proves necessary) (A3). BB morale faces are **not** required. Pending “power step available” pip is worth testing. |
| Deliberate spend | Prefer explicit “apply upgrade / level / craft install” moments over silent auto-apply for big steps. |

### 3.2 What to reshape (not copy)

- **Active roster size:** Mythoras targets ~5 combat creatures (+ backlog/household pattern in B7). Chase density comes from **depth per creature + shared stash contention**, not company size 12.
- **Who levels:** In BB, each brother XP’s. In Mythoras, progression may sit on creature **and/or** Technician Grid / Cipher authorship — keep multi-axis (A10) without forcing BB’s exact XP table.
- **Combat budget layer:** Import the *idea* of a gear tradeoff (weight / lane cost / heat / fatigue-analogue) only if it fits Mythoras combat; do not paste BB fatigue numbers.
- **Crafting:** B8 — rhyme with PoE *some* ways, invent Mythoras patterns in the env (creature generator first).

### 3.3 UX de-scare lesson (owner screenshots)

The scariness of “5 × gear” dissolves when:

1. Stash is **one** place;  
2. Only **one** creature’s slots are deep-edited at a time;  
3. Switching creatures is a portrait strip, not five full screens;  
4. Glanceables stay thin until click-through (aligns with B5 Montabi succinctness + A3).

Composition lab can test BB’s left-doll / right-stash split **inside** a DD-leaning overall frame — layout slice still undecided (A2).

---

## 4. Contrast with single-avatar ARPG chase (PoE)

| Axis | PoE-style single avatar | BB-style merc company | Mythoras vector |
| --- | --- | --- | --- |
| Who is geared | One paper-doll (+ optional mercs as late add-on) | N dolls competing for one stash | 5 creatures + Technician stash (answered) |
| Passive power | Huge shared tree pathing | Per-unit perk grid (small, classless) | Remake ethos OK; **not** exact PoE tree (B2). Existing Motherboard Grid research remains separate. |
| Late specialization | Ascendancy subclass trees (2016) | Perk hinges + named gear + role-by-kit | Later specialization OK as **principle** |
| Chase fantasy | Perfect *my* build / bip / craft | Perfect *company* — who wears the prize | Squad allocation stories + craft for creatures |
| Failure / stakes | Softcore death / hardcore wipe | Permadeath, injuries, morale breaks | **Out of scope** unless owner asks (§5) |
| Session beat | Map → loot → craft → tree | Battle → loot to stash → outfit brothers → level/perk | Prefer merc-like **outfit & unlock** beats for creatures |

**Read for design:** PoE chase is **vertical on one body**. BB chase is **horizontal across bodies sharing a pool**, with occasional vertical spikes (named gear, hinge perks). Owner B1 says creature management wants more of the latter.

---

## 5. Explicit non-goals

Do **not** import from BB unless the owner later asks:

- Permadeath / struck-down / permanent injury loops  
- Morale states (wavering / fleeing) as a default combat layer  
- Company wages, desertion, food spoilage as core chase  
- Exact fatigue recovery numbers, 12-man company cap, BB perk IDs  
- Grimdark tone as default (B9: Pokémon-lighter register still desired)

Also (B2): do **not** ship an exact PoE passive tree. Remake principle only.

---

## 6. Brief: PoE remake ethos (sphere grid → tree; Ascendancy)

Owner asked for this as indie “another direction” ethos — seed only, not a tree design pass.

### 6.1 Sphere grid → passive tree

- Outside observers long compared PoE’s passive skill tree to **Final Fantasy X’s Sphere Grid**.
- Chris Wilson (Hardcore Gamer interview, open-beta era, 2013): acknowledges the comparison; notes he personally had not played FFX but that other designers on the team likely had; cites **FFVII materia** as a clearer influence on skill gems, plus Diablo 2 / MtG / etc.  
  Source: [Hardcore Gamer — Grinding Gears About Path of Exile with Chris Wilson](https://hardcoregamer.com/features/interviews/grinding-gears-about-path-of-exile-with-chris-wilson/35504/) (also mirrored on official forums thread quoting the interview).

**Ethos for Mythoras:** take a known progression surface (sphere grid / PoE tree / BB perks) and **rebuild the grammar** for your fantasy — do not paste nodes.

### 6.2 Ascendancy as later class specialization

- Expansion **Path of Exile: Ascendancy** announced 2015-11-20; released **2016-03-04** (v2.2.0).  
  Sources: [poewiki — Path of Exile: Ascendancy](https://www.poewiki.net/wiki/Path_of_Exile:_Ascendancy); official [Ascendancy classes page](https://www.pathofexile.com/ascendancy/classes).
- Design shape (official copy): after clearing the **Lord’s Labyrinth**, pick an Ascendancy subclass; earn **Ascendancy Points** (historically two per Labyrinth difficulty clear) spent on a **small, potent** side-tree — specialization bolted on **after** the base class + main tree exist.
- Historical pitch: base classes were broad; Ascendancy added **identity spikes** without replacing the main tree.

**Ethos for Mythoras:** allow a **later specialization layer** (creature lineage / Technician commitment / Cipher authorship — name TBD) that is smaller and louder than the baseline progression — not a copy of Labyrinth or Ascendancy node layouts. Existing Pantheon-adjacent notes in [POE_RESEARCH.md](POE_RESEARCH.md) remain research, not a lock from this doc.

---

## 7. Sources

| Source | Use |
| --- | --- |
| Owner answers B1–B2, A2–A4, A10 | Direction |
| Owner BB screenshots (Cursor `assets/`, 2026-08-06) | UX: doll + stash + roster |
| [battlebrothersgame.com — Character Stats](https://battlebrothersgame.com/character-stats/) | Fatigue, armor layers, no classes, permadeath note |
| [Dev Blog #45 Named Items](https://battlebrothersgame.com/dev-blog-45-named-items/) | Tier skip problem; named loot chase |
| [Dev Blog #117 Named Equipment](https://battlebrothersgame.com/dev-blog-117-named-equipment/) | Late named chase as motivator |
| Steam BB perk guide (secondary) | Talent stars, perk hinge examples |
| [Hardcore Gamer / Chris Wilson 2013](https://hardcoregamer.com/features/interviews/grinding-gears-about-path-of-exile-with-chris-wilson/35504/) | Sphere-grid comparison acknowledgment |
| [pathofexile.com/ascendancy/classes](https://www.pathofexile.com/ascendancy/classes) | Ascendancy pick + points via Labyrinth |
| [poewiki Ascendancy expansion](https://www.poewiki.net/wiki/Path_of_Exile:_Ascendancy) | Announce / release dates |

---

## 8. Open questions (not blocking)

1. Which Mythoras resource plays the “fatigue vs armor” tradeoff role — if any — in tile combat?  
2. Are “hinge” upgrades creature skills, link ranks, Grid notables, or Cipher recipes? (Can be plural — A10.)  
3. Composition lab: BB left/right split vs DD lower-band — which hosts stash+doll first?

---

*End of merc progression vector research.*
