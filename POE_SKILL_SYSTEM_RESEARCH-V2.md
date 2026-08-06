# PoE Skill System Research — V2 (Gems · Sockets · Links)

> Independent redo of `POE_SKILL_SYSTEM_RESEARCH.md` (V1 judged not deep enough). Research artifact for the Mythoras creature-skill system (PoE × Pokémon merger). **Nothing here locks Mythoras vocabulary or topology** — exploratory. Companion: `SKILLS_REDESIGN_EXPLORATION.md`. Baseline it builds on/corrects: `POE_RESEARCH.md` §1.7, §2.
>
> **Confidence convention:** [H] = well-established mechanics I'm confident in; [M] = paraphrased dev intent / community consensus, wording not verbatim; [L] = repo-doc claim I'm relaying but can't independently verify against live PoE. Anything about GGG *quotes* is [M] at best — I do not reproduce specific quotations I can't stand behind.

---

## 0. Executive verdict

PoE1's skill system is great for three reasons that have **nothing to do with sockets living on gear**: (1) skills are **modular, levelable, tradeable items**; (2) **support gems rewrite behaviour**, not just numbers, so one active becomes a hundred builds; (3) a **finite, spatial link/colour/socket budget** forces real opportunity cost. The gear-container is the *delivery mechanism* for #3, and it is also where all the accidental friction lives (chromatic RNG, fusing gambling, gem-swap-on-upgrade, Tabula-Rasa culture). **Copy the three virtues; leave the container.**

PoE2 is not "PoE1 but better" — it is a **different bet on the same virtues**. It moved the container off gear onto the skill gem, deleted colours and links, made each support gem **usable once across your whole character**, pushed damage out of supports into the tree, and formalised the old emergent "third avenue" (auras/triggers) into **Spirit + meta gems**. That buys clean gear upgrades and genuinely multi-skill combat — and it *pays for it* by flattening the spatial allocation puzzle the owner likes, killing the link-chase emotion, and erasing attribute-colour build literacy. Neither is strictly superior; they optimise different fantasies. PoE1 = "assemble a machine under scarcity." PoE2 = "no busywork, many verbs, deliberate combat."

**For Mythoras:** the owner's taste (PoE1 free-flow, dislike of PoE2) and the GDD's own locks already point the same way — the **creature is the socket board** (`CONTEXT.md:21` rule #9; `DOC_v3.md:918-924` Skill Frame). The right move is: **keep the spatial depth-vs-width allocation puzzle on the creature's Frame, discard gear-as-skill-board, and steal PoE2's *clarity* (no hard colour gate, readable multi-skill) without importing its *comfort bundle* (free colours + deleted links + one-copy supports as a package).** Crucially, the GDD **already authored** colour-as-bonus-not-gate (`DOC_v3.md:1035-1037`) *before* it appeared in the Curse-of-the-Allflame notes — so that is Mythoras canon being rediscovered, not a PoE lesson to import (V1's framing was right on this; the Curse doc's framing at `CURSE_OF_THE_ALLFLAME_ANALYSIS.md:112-129` is the one that mis-attributed it).

---

## 1. GDD cross-check table — canon *before* analogues

Every PoE→Mythoras temptation is checked against existing canon with file+line. Where the GDD already solved it, do not re-import it as a "PoE lesson."

| PoE pattern / temptation | Existing Mythoras canon | Cite | Stance |
|---|---|---|---|
| Skills owned by the player avatar | Skill Cards / Frame / Supports / Breakthrough / Mana are **creature-local** | `CONTEXT.md:21` (#9); `CONTEXT.md:180-183` ownership table; `DOC_v3.md:710-714` | **Not-copy** avatar ownership; creature is host |
| Passive tree doubles as skill container | Grid is **Technician-global** (1 route + 5 slot subroutes); Frame is separate | `CONTEXT.md:13` (#2); `CONTEXT.md:115-117` | Keep Grid and skill-install fully separate |
| Socket colour hard-gates the gem | Soft-fail: match = bonus, mismatch ≠ blocked | `DOC_v3.md:996-998`; `DOC_v3.md:1035-1037` | **Not-copy** hard RGB gate; soft-fail already canon |
| "Colour-as-reward" is a PoE2 / 3.29 lesson | Already authored as Frequency Empowerment (+15%, non-gating) | `DOC_v3.md:1035-1037` (origin) vs `CURSE_OF_THE_ALLFLAME_ANALYSIS.md:112-129, 146` (mis-attribution) | **Correct V1-adjacent error:** cite DOC_v3 as origin; Curse/3.29 is confirmation only |
| "Resonance" = socket-colour match bonus | **Resonance** is locked as the two-tier **Stream** system (T1 stacking + T2 named mechanics) | `CONTEXT.md:122`; `DOC_v3.md:996-998` uses "Resonance bonus" for colour-match | **Vocab collision** — `DOC_v3.md:998` mis-uses a locked term; rename the colour bonus |
| Same-type flat "STAB" damage | STAB **removed**; type Alignment is conditional | `CONTEXT.md:23` (#10); `CONTEXT.md:198` | Do not smuggle always-on STAB back via colour match |
| Links via gear sockets | Frame anchors + satellites; Link/Bridge/Hue Agents on the creature | `DOC_v3.md:926-994`; `DOC_v5.md:372-382` | Prefer creature-topology links to gear-socket links |
| Multi-skill viability from gear socket count | Technician Level gates anchors/supports **squad-wide** (progression gate, not ownership) | `DOC_v3.md:944-958`; `CONTEXT.md:21` | Progression gate OK; ownership stays creature |
| 6-link chase = support depth | Max 5 supports/slot (Legendary 6); layout is depth-over-width | `DOC_v3.md:956-958` | Keep depth-vs-width puzzle; drop gear dependency |
| Skills in gear sockets | **Dropped** this dump; gear sockets → modules | `PLAN_FEEDBACK_RESEARCH_2026-07-19.md:63` | Separate gear modules from skill install entirely |
| PoE2 skill table as the model | Owner likes PoE1 free-flow, dislikes PoE2 | `PLAN_FEEDBACK_RESEARCH_2026-07-19.md:62,88`; `IDEA_LOG.md:197-207` | Study PoE2 for *why*; do not adopt as primary |
| External "Skill Frame" as a named container | Reopened → **creature IS the container**; constellation kept as shape candidate only | `IDEA_LOG.md:197-207`; `PLAN_FEEDBACK_RESEARCH_2026-07-19.md:52` | "Item as socket board" → "creature body/topology as board" |
| Alpha/Beta/Gamma/Delta Frequency names | **Superseded-pending-replacement**; not final | `IDEA_LOG.md:206`; `PLAN_FEEDBACK_RESEARCH_2026-07-19.md:17,91` | Match-as-bonus intent may survive under a new name |

### 1.1 Internal GDD contradictions — flag, do **not** silently resolve

1. **Mismatch penalty conflict (known):** `DOC_v3.md:998` says mismatched sockets "still work **at reduced effectiveness**"; `DOC_v3.md:1037` says mismatch has "**no penalty — just no bonus**." Same system, opposite rule. Soft-fail *intent* (bonus-not-gate) is durable; the penalty clause needs a grill ruling.
2. **A *third* penalty instinct (V1 missed this):** `DOC_v3.md:962-964` — a compact Skill Card placed in a satellite (support) slot takes "a minor effectiveness penalty." So the GDD has **three** statements about penalties (colour-mismatch reduced / colour-mismatch none / utility-in-support-slot minor). These are *different* penalties, but they show the doc hasn't settled a coherent penalty philosophy. Grill all three together.
3. **"Resonance" is triple-booked (V1 flagged two; here's the full set):** (a) locked Stream Resonance T1/T2 (`CONTEXT.md:122`), (b) the colour-match bonus mis-named "Resonance bonus" (`DOC_v3.md:998`), (c) conditional Stream Alignment (`CONTEXT.md:198`). Rename (b).
4. **Cross-doc crafting-agent collision (NEW — not in V1):** the Frame-crafting agent list in `DOC_v3.md:978-994` and the Skill-Card-agent list in `DOC_v5.md:372-382` **overlap and diverge**:
   - Colour rerolling exists **twice** under two names: **Hue Agent** ("Socket colours", `DOC_v3.md:985`) vs **Chromatic Agent** ("Skill Card colour/alignment", `DOC_v5.md:377`).
   - Linking exists **twice**: **Link Agent** in both (`DOC_v3.md:984` = links between nodes; `DOC_v5.md:380` = link Support to Skill). `DOC_v5.md:381` adds a **Sever Agent** with no DOC_v3 counterpart; `DOC_v3.md:982` has a **Sync Agent** (socket count) with no DOC_v5 counterpart.
   - **Deeper problem:** `DOC_v3.md:938-942` says Frame zones are **attribute-agnostic — anchors do not gate on colour**. Colour only matters at *satellite/support* level (`DOC_v3.md:996-998`, `1035-1037`). So a **Chromatic Agent that rerolls a *Skill Card's* colour (`DOC_v5.md:377`) has nothing to gate against** — Skill Cards sit in colour-agnostic anchors. That agent looks vestigial or contradictory. Flag for the crafting grill, don't quietly delete.

---

## 2. History & original design intent (PoE1) — deeper than V1

### 2.1 What the gem system actually *is*

PoE (2013) turned every combat verb into a **droppable, levelable, socketable, tradeable object**. Your character has *no innate skills* — identity is an inventory of active gems + support gems assembled under gear constraints. This is the load-bearing invention and it predates every socket detail. [H]

| Original intent | Mechanism | Player experience |
|---|---|---|
| Skills as loot | Gems drop, quest-reward, vendor, corrupt | Chase, trade, level via absorbed XP, swap freely |
| Behaviour rewriting | Supports edit *linked* actives (fork, chain, totemise, convert, trigger) | Same skill name, wildly different build |
| Opportunity cost | Finite sockets + finite **links** per gear piece | Deep one skill vs many shallow |
| Attribute theming | RGB socket colours ↔ Str(R)/Dex(G)/Int(B) gems; item's attribute reqs bias its socket colours | Soft class fantasy without hard class locks |
| Dual loot fantasy | Best rares must *also* have the right sockets/links/colours | One item is both stat-stick and skill-stage — and a source of friction |

### 2.2 Why sockets went on gear — the original bet, and how it eroded [M]

The 2013 rationale (design-DNA level, not a verbatim quote): sockets-on-gear give rares **another axis to differ on** and force "great mods vs great sockets" tradeoffs; colour weighting ties gear into the Str/Dex/Int attribute web. In practice GGG immediately papered over the tradeoff with deterministic-ish currency: **Jeweller's Orbs** (reroll socket *count*), **Chromatic Orbs** (reroll *colours*), **Orbs of Fusing** (reroll *links*), plus quality (GCPs) and the crafting bench's guaranteed-link and Vorici colour recipes. The "mods vs sockets" purity mostly evaporated; what remained was **bureaucracy** — currency sinks and a socket-prep chore — rather than a live tradeoff. This erosion is the strongest evidence that the gear-container was the *weakest* part of a great system.

### 2.3 The real scarcity is **links**, and the concrete numbers V1 skipped [H]

Socket *count* and *links* are capped by gear slot, which is what makes the body armour / 2H weapon special:

| Gear slot | Max sockets | Max links |
|---|---|---|
| Body armour, 2H weapon | 6 | 6 |
| Helmet, gloves, boots | 4 | 4 |
| 1H weapon, shield | 3 | 3 |
| Ring / amulet / (belt: none) | 1 | 1 |

So a character has essentially **one 6-link home** (body or 2H) for the main skill, and everything else lives in ≤4-links. The economics are punishing and are *pure friction*, not depth: a 6-link via raw Orbs of Fusing averages **~1,500 fusings** (the crafting-bench guarantee is literally priced at 1,500 fusings); off-colour sockets on the "wrong" attribute base can take *hundreds* of chromatics or Vorici recipes. **Tabula Rasa** — a unique white 6-socket 6-link *any-colour* body with zero stats — exists specifically as a **bridge** so players can build before they can afford real links, and "leaguestart in a Tabula" is a whole culture. That a beloved item's entire purpose is *routing around your own socket system* is a design tell.

### 2.4 Endgame accessories to the gem system (V1 omitted)

Gem power also scales through: **gem quality** (GCP / quality catalysts), **corruption** (Vaal Orb → level 21 / quality 23 / Vaal skill variants), **+1 to gems** gear/amulets, **Awakened supports** (stronger, higher-req rare versions), and the **Enlighten/Empower/Enhance** meta-supports that buff other gems. These are the *chase depth* layer and are portable in spirit (a signature skill should keep growing). [H]

---

## 3. PoE1 vs PoE2 — the crux, argued honestly

### 3.1 Side-by-side (corrected and expanded from `POE_RESEARCH.md:145-160`)

| Axis | PoE1 | PoE2 | What each *buys* / *costs* |
|---|---|---|---|
| **Container** | Gear sockets | Sockets **on the skill gem itself** | PoE1: gear is dual-use loot. PoE2: upgrade gear without rebuilding your skill |
| **Links** | Physical adjacency links (fusing RNG) | **No links** — supports slot straight into the skill | PoE1: link chase + fusing drama. PoE2: fusing tax deleted, but the chase emotion with it |
| **Colours** | RGB, historically a **hard gate**; chromatic puzzle + attribute theme | Effectively **colourless** skill sockets | PoE1: readable build language + a solvable puzzle. PoE2: zero colour failure, zero colour literacy |
| **Support scope** | A support gem is reusable — same support on many skills; parallel 6-links if you can afford sockets | **Each support gem usable *once* across the whole character** | PoE1: stack the same "more multiplier" everywhere. PoE2: forces genuinely different kits, enables balancing many skills |
| **Where damage lives** | Supports are often raw *more damage* multipliers | Supports skewed **mechanical**; raw damage pushed to tree/gear | PoE2 can let 4 skills all be usable without 4× the power |
| **Persistent buffs** | Auras/heralds reserve **Mana** | Reserve **Spirit** (separate resource, from gear/quest) | PoE2 cleanly separates "always-on toolkit" from "main-skill sockets" |
| **Triggers** | CWDT etc. as ordinary support gems in your socket budget | **Meta gems** (e.g. Cast-on-X) with their own energy economy | PoE2 makes the reactive layer a first-class, budgeted category |
| **Acquisition** | Specific gem drops/quest rewards; level by carried XP | **Uncut gems** you cut into any skill/support of ≤ their tier; quality via gold | PoE2 kills "I got the wrong gem" dead-ends |
| **Combat intent** | Proactive, screen-clear, one-button main skill | Reactive, dodge-roll, multi-verb, deliberate | The gem economics of each *serve* its combat pacing |

*(Corrections vs V1: V1 said PoE2 supports are "often one copy per character" — the precise rule is **each support gem can be socketed once, full stop**, which is stronger and is the real diversity lever. V1 also under-covered Spirit and did not mention meta/trigger gems as a formalised category — that omission matters for the "third avenue" question in §5.)* [H]

### 3.2 Why PoE2 exists — the problems PoE1 created [M]

GGG's stated motivations (ExileCon 2019 skill segment + later dev interviews; **paraphrased, confidence [M], not verbatim**):

1. **Upgrade friction.** A strictly-better rare with wrong sockets/links feels like a *downgrade*; Tabula and bench-fusings are evidence the container fights the loot loop. PoE2 fixes this at the root: your skill's sockets travel with the *skill*, so gear is pure stats.
2. **One-button meta.** PoE1 balances endgame around a fully-linked main skill that must both clear *and* boss → the design space collapses to "the best 6-link." Deleting the socket-scarcity that privileges one skill lets *many* skills be viable.
3. **Currency busywork.** Jewellers/chromes/fusings are a tax on experimentation, not a meaningful choice.
4. **A different combat game.** PoE2 wants a reactive, multi-verb, dodge-based feel; PoE1's "one deep skill" economics actively resist that.

### 3.3 What PoE2 *sacrifices* — the honest cost (why the owner's preference is defensible, not just nostalgia)

| Loss | Why it hurts | Portable-to-Mythoras read |
|---|---|---|
| **Spatial allocation puzzle** | No more "steal sockets from my auras to fit a second damage link?" on one board | This is exactly what the Frame's anchor/satellite dual-use preserves (`DOC_v3.md:960-964`) — **keep it** |
| **Item-as-skill-stage** | Gear stops being an instrument; becomes a stat-stick | Mythoras already routes this to gear **modules** (`PLAN_FEEDBACK_RESEARCH_2026-07-19.md:63`), so no loss |
| **Link-chase emotion** | A 6-link drop/craft is a peak moment; when *every* skill is fully supportable, that peak is gone | Mythoras needs *a* chase — the "hard socket count" gate (`DOC_v3.md:994`) or Breakthrough (`DOC_v3.md:764-773`) can carry it |
| **Colour literacy** | RGB-as-language dies; builds lose a readable at-a-glance signal | Soft-fail keeps colour *legible as upside* without gating (`DOC_v3.md:1035-1037`) |
| **Depth-as-identity** | When everything is deep, depth must be re-invented (support uniqueness, Spirit, cooldowns) | Depth stays scarce via Technician-Level gate + species topology (`DOC_v3.md:944-958`) |

**Net:** PoE2's changes are a *coherent bundle* aimed at reactive combat and QoL. Mythoras is turn-based Turn Program combat with a squad — it does **not** inherit PoE2's combat motivation, so it should not inherit PoE2's fixes wholesale. Take PoE2's *clarity primitives* à la carte (no hard colour gate; readable multi-skill; a first-class reactive/persistent category), reject its *flattening* (deleted spatial puzzle, deleted link chase).

### 3.4 The "3.29 colour rewrite" correction (mandatory)

`CURSE_OF_THE_ALLFLAME_ANALYSIS.md:112-129` reports PoE1 patch 3.29 softening base sockets so colour becomes bonus-quality rather than a gate, and `:146` lists "colour as reward, not lock" as a Mythoras lesson. **This is the mis-attribution the owner flagged** (`PLAN_FEEDBACK_RESEARCH_2026-07-19.md:21-23`): Mythoras drafted colour-as-bonus **first**, in `DOC_v3.md:1035-1037` (Frequency Empowerment, +15%, explicitly non-gating). Cite DOC_v3 as origin; 3.29 and PoE2 are *convergent confirmation*, not the source. [L on the 3.29 detail — relayed from the repo's video-frame research, not independently verified against live PoE.]

---

## 4. Progression — when multi-skill actually opens

### 4.1 PoE1 curve (concrete, tied to act structure) [H]

| Phase | Socket/link reality | Multi-skill state |
|---|---|---|
| Acts 1–3 | 3L→4L main (early quest gear, first Tabula-like reward gems); scraps elsewhere | Main skill + movement skill + *maybe* one utility; second skill is a **toy** |
| Acts 4–10 | 4L→5L main; a second 3–4L appears | Clear skill + single-target *or* clear + one aura; utility often **unlinked** |
| Early maps | 5L→6L body; dedicated aura/curse/CWDT gear slots | A full "kit," but **one damage king** does 90% of kills |
| Deep endgame / crafted | Perfect colours + 6-link + reservation gear | Experimentation unlocks *after* power is secured, not before |

**Signal:** multi-skill in PoE1 **opens early as toys, matures late as supported secondaries.** The system never wants five equal 6-links on a normal character — one deep skill + a constellation of shallow utility is the intended shape. That asymmetry is a *feature* (identity, readability) and a *trap* (mainlink tyranny, §6).

### 4.2 PoE2 curve [H/M]

| Phase | Reality | Multi-skill state |
|---|---|---|
| Early | Several skill gems, small support counts each; Spirit trickling in | Genuine toolkit from the start |
| Mid | Support-slot count grows per skill; meta/trigger gems come online | Several mid-depth skills + reactive layer |
| Late | High support counts + large Spirit budget | Intentionally multi-verb combat is the *baseline*, not a luxury |

### 4.3 Mythoras already mapped a hybrid — cited precisely (V1 mis-quoted this table)

`DOC_v3.md:944-958` is a **5-band** table (V1 compressed it to 3 bands and mis-stated the caps):

| Technician Level | Max active skill slots | Max supports / slot |
|---|---|---|
| 1–15 | 2 | 1–2 |
| 15–30 | 3 | 2–3 |
| 30–45 | 4 | 3–4 |
| 45–55 | 5 | 4–5 |
| 55+ | 6 | up to 5 |

Support range is 0 (bare skill) → 5 (6-link equivalent), Legendaries 6 (`DOC_v3.md:956-958`). Layout is deliberately **more anchors early, deepening support capacity later** — i.e. a PoE1-shaped depth curve, but the scarcity lives on the *creature's Frame + Technician Level*, not on gear. The satellite dual-use rule (`DOC_v3.md:960-964`) explicitly "recreates the PoE1 socket-allocation puzzle without gear dependency." **This is the single best keep-candidate in the GDD** for the owner's free-flow taste.

---

## 5. Active / Support / is there a real third avenue?

### 5.1 The honest answer: PoE1 *has* a de-facto third category, and PoE2 *formalised it*

V1 correctly noted the emergent third avenue but under-analysed it. Sharper: in PoE1 the "third" is not one thing, it's **persistent/reactive skills that compete on a *different* scarcity than damage links** —

| Sub-category | PoE1 scarcity it competes on | Example |
|---|---|---|
| **Reservation** (auras, heralds, banners) | **Mana** (reserved %), and low-link socket space | Determination, Hatred, Herald of Ash |
| **Curses / marks** | Socket space + curse-limit (usually 1) | Enfeeble, Assassin's Mark |
| **Triggers / automation** | Socket space + trigger conditions/cooldowns | CWDT + guard/curse; Cast-on-Crit shells |
| **Movement / travel** | One socket, near-mandatory | Leap Slam, Flame Dash |

The insight PoE2 acted on: these compete on **resources (Mana) and *conditions*, not just the same link budget as your damage.** PoE2 split them out — **Spirit** for reservation, **meta gems** for triggers — precisely because bolting them onto the same socket budget as damage was a muddled scarcity. So the "do we need a third avenue?" question has an empirical answer from PoE's own evolution: **you don't need a third *taxonomy* of gem, but you probably do need a second *scarcity* so utility/persistent effects don't just cannibalise damage slots.**

### 5.2 Options for Mythoras (not a lock)

| Model | Description | Pros | Cons |
|---|---|---|---|
| **A. Two-class only** | Active + Support (pure PoE1 gem taxonomy) | Simple, literate | Utility awkwardly steals damage slots — the muddle PoE2 fixed |
| **B. Two-class + emergent third** | Utility actives ride satellite dual-use (`DOC_v3.md:960-964`) | Matches PoE1 lived feel; is *already in the GDD* | Player must learn the opportunity cost; utility still competes with supports |
| **C. Explicit third class** | Persistent/Trigger/Protocol modules on a separate budget | Readable; budgetable independently | Extra UI + crafting surface; orphan-economy risk |
| **D. Second-scarcity split (PoE2 Spirit lesson)** | Persistents/reactives draw a *distinct* resource, not Frame slots | Clean multi-verb; damage slots stay for damage | Mythoras already juggles Mana + Command Charges + Lanes — a new resource is a real tax |

**Research stance (not a lock):** Mythoras does **not** need a third *gem taxonomy* — Command Deck (`CONTEXT.md:121`), Warbanner/Lanes, and satellite dual-use already cover the utility fantasy. But it **should decide the *scarcity* question deliberately**: if auras/persistents draw from the same satellite budget as supports, expect the PoE1 muddle (utility cannibalising depth). A light "reservation draws Mana / a Lane" split (echoing Spirit) may be worth it — *only if* it buys a distinct fantasy, not just a second bar. Note: trigger/reactive skills and flask-analogues are explicitly **future expansion, not campaign baseline** (`CONTEXT.md:19`), so a full meta-gem layer is out of MVP scope regardless.

---

## 6. Community-emergent patterns and the design signal each sends

| Pattern | PoE shape | Design signal for Mythoras |
|---|---|---|
| **Mainlink tyranny** | One 6-link does ~90% of kills; content is *balanced around it* | **The #1 trap.** With 5 creatures, this becomes 5× worse if each creature funnels into one Breakthrough skill that must clear everything (`DOC_v3.md:764-773`). Balance content assuming creatures have a *kit*, not a nuke |
| **Aura / reservation stacking** | Fill helm/gloves/spare sockets with persistents until Mana runs out | Decide the utility *scarcity* up front (§5); don't let auras silently eat support depth |
| **Trigger / CWDT shells** | Automate defence/curses/procs off damage taken or crit | Powerful but **future expansion only** (`CONTEXT.md:19`); note it for later, don't build it now |
| **Aura-stacking / "does nothing but buffs" builds** | Whole builds that reserve everything and let minions/allies kill | Anti-Mythoras "kill-bot" feel (echoes the merc concern at `CURSE_OF_THE_ALLFLAME_ANALYSIS.md:152`); guard against passive-play degenerate cases |
| **Tabula → real chest** | Temporary perfect links until you can craft real ones | Mythoras needs a *bridging* fantasy that isn't "wear a blank white robe" — Breakthrough/Bridge Agent can be the earned bridge (`DOC_v3.md:986`) |
| **Skill = identity, gear = multiplier** | Players name builds by the skill ("Boneshatter Jugg") | Creatures should be nameable by Breakthrough skill + species — a *good* pattern to lean into |
| **PoE2 support uniqueness forces kit-planning** | Can't stack the same "more" everywhere | Optional lever — but **conflicts with squad × creature copies** (5 creatures wanting the same good support). Decide per-creature vs per-squad vs unlimited (grill Q) |

---

## 7. Why PoE's system is genuinely great — portable lessons vs accidents

| PoE strength | Mechanism | **Portable** lesson (keep) |
|---|---|---|
| Composable verbs | Supports *rewrite* delivery (chain/convert/totemise/trigger) | Support Cards as behaviour editors, not just stat sticks (`DOC_v3.md:1006-1021`) |
| Itemised progression | Gem levels, quality, corruption, +1s, awakened | Skill Card levels, Breakthrough, Polarity, Gl!tch (`DOC_v3.md:748-839`) |
| Cross-system entanglement | Tree ↔ gems ↔ gear ↔ ascendancy | Grid ↔ creature skills ↔ gear modules ↔ Principal |
| Readable scarcity | "How linked is this skill?" is visible at a glance | Frame cluster-fullness is visible; keep it legible (`DOC_v3.md:974-976`) |
| Theorycraft surface | PoB; infinite near-miss builds | Builder must expose Frame/Alignment/type levers so players can plan |
| Chase emotion | 6-link, +1 gems, perfect colours, awakened | Keep *some* chase — Breakthrough / hard socket-count gate — **without fusing RNG** |

**Accidents — do NOT emulate:** chromatic-colour failure, fusing-link gambling, gem-swap-on-gear-upgrade, Tabula bridging as a load-bearing crutch, the whole jeweller/chrome/fuse currency stack. These are artefacts of the *gear-container choice* (§2.2–2.3), not of the modular-gem virtue. Importing them would inherit "two decades of gem bureaucracy" (`CURSE_OF_THE_ALLFLAME_ANALYSIS.md:158`) for no benefit.

---

## 8. Designer / Systems / Pitfalls / Creative

**Designer.** PoE's romance is "I authored a *skill*." Mythoras's romance is one layer up: "I authored a *creature's* skill constellation," with the Technician as conductor (Grid, Command Deck, instrument) over five such constellations. The Frame-as-PCB / creature-as-container framing (`DOC_v3.md:922`; `IDEA_LOG.md:197-207`) is the right home for that romance — protect its *physical imaginability* (`IDEA_LOG.md:40-48`: avoid "lattice"; a metaphor must be an object you can picture).

**Systems.** PoE1 mashed *three* scarcities into one gear board; separate them cleanly:
1. **Install capacity** (how many skills / how deep) → creature Frame topology + Technician Level gate (`DOC_v3.md:944-958`).
2. **Behaviour editors** (supports) → creature-local satellites.
3. **Gear power** → mods/modules, explicitly *not* skill links (`PLAN_FEEDBACK_RESEARCH_2026-07-19.md:63`).
PoE2 separated (1–2) from gear well, then flattened (1)'s spatial puzzle. Mythoras should keep (1) **spatial and scarce on the creature** — that is the owner's free-flow feel, mechanised.

**Pitfalls.**
- Importing PoE2's comfort bundle while *claiming* PoE1 depth (deleting links + colours + spatiality guts the puzzle you said you loved).
- Double-taxing players with **Frame** craft *and* **gear-socket** craft for skills — pick one skill-install surface.
- Letting "Resonance" mean three things (§1.1.3).
- Balancing content as if each creature has one max-link nuke — the mainlink trap × 5 (§6).
- Shipping a Chromatic/colour crafting agent for a slot that doesn't gate on colour (§1.1.4).

**Creative options (pointers, explored in `SKILLS_REDESIGN_EXPLORATION.md`).**
- Creature-as-PCB / constellation body as the socket board (`IDEA_LOG.md:197-207`).
- Gear **modules** with a "soldering" verb, kept vocabulary-distinct from Frame links.
- Instrument as a mid-layer dial (Runeseeker Call / Tuning Fork lineage, `PLAN_FEEDBACK_RESEARCH_2026-07-19.md:16`).
- Discoverable type/team levers (Resonance/STAB return **only** via explicit grill — `IDEA_LOG.md:200-206`), giving Pokémon literacy without reinstating always-on STAB.

---

## 9. Options matrix — PoE model → Mythoras stance

| Option | Stance | Tradeoff |
|---|---|---|
| **P1 — Creature-topology free-flow** (PoE1 allocation puzzle, on the creature not gear) | **Strong default** — matches ownership locks *and* owner taste | Must author per-species Frame topologies; UI complexity to keep depth legible |
| **P2 — Skill-item containers** (PoE2 gem-as-socket-board) | Weak as primary | Trivial gear upgrades, but deletes the spatial puzzle; reads as sequel-derivative |
| **P3 — Hybrid: creature topology + gear-module deepeners** | **Explore** | Clarity risk if modules visually read as skill sockets — must be sharply distinct |
| **P4 — Full PoE1 gear sockets for skills** | **Rejected** | Violates ownership #9 and the drop list; inherits all the friction |
| **Second-scarcity split for utility** (Spirit lesson, §5-D) | **Explore, MVP-cautious** | Clean multi-verb vs another resource bar on top of Mana/Charges/Lanes |
| **Support uniqueness** (PoE2 one-copy) | **Open** | Forces kit diversity vs friction with 5 creatures wanting the same support |

*(No single lock forced beyond what ownership already fixes: skills are creature-local. P1 is the natural default but the depth/scarcity dials remain open.)*

---

## 10. Open questions for the owner ("grill" list)

1. **Penalty philosophy:** soft-fail is *bonus-only* (`DOC_v3.md:1037`) or *mismatch penalty* (`DOC_v3.md:998`)? And separately, does a utility Skill Card in a support slot really take a penalty (`DOC_v3.md:962-964`), or should it be clean? (Three penalty statements need one ruling.)
2. **Colour-bonus renaming:** what replaces "Resonance bonus"/Alpha–Delta (`IDEA_LOG.md:206`) while preserving match-as-upside intent, without colliding with locked Stream Resonance?
3. **Crafting-agent reconciliation:** Hue Agent vs Chromatic Agent, Link Agent's two definitions, Sync/Sever — one coherent Frame-craft verb set (see §1.1.4). And: does a colour-agnostic anchor need a Skill-Card colour agent at all?
4. **Link RNG appetite:** how much fusing-style gamble (Link Agent, `DOC_v3.md:984`) is wanted vs deterministic Bridge-style growth (`DOC_v3.md:986`)? PoE evidence says the RNG is the *least*-loved part.
5. **Support uniqueness scope:** unlimited (PoE1), per-squad, or per-creature (PoE2-flavoured)? Directly interacts with 5-creature squads.
6. **Utility scarcity:** do auras/persistents draw from the *same* satellite budget as supports, or a second resource (Spirit lesson)? This decides whether Mythoras inherits PoE1's aura-cannibalises-depth muddle.
7. **When does a creature's *second deep* skill open** — Technician Level only, species topology only, or both (`DOC_v3.md:944-958`, `966-972`)?
8. **The bridge fantasy:** what is Mythoras's earned "you can build the deep skill now" moment that *isn't* a Tabula-Rasa crutch — Breakthrough, a Bridge Agent milestone, or a species unlock?

---

## Sources

**Repo (primary, cited inline with line numbers):** `CONTEXT.md` (#2, #9, #10, ownership table, Resonance, STAB); `DOC_v3.md` §10–§12 (710–1037); `DOC_v5.md` §42.7 (372–382); `POE_RESEARCH.md` §1.7 + vocabulary (145–189); `CURSE_OF_THE_ALLFLAME_ANALYSIS.md` §5 (112–158) — contrast/correction only; `IDEA_LOG.md` IDEA-004 (40–48), IDEA-024 (197–207); `PLAN_FEEDBACK_RESEARCH_2026-07-19.md` (sold/reopened/dropped, colour-attribution correction); `GRILL_PREP_SKILL_OWNERSHIP_TYPE.md` (ownership canon, transplant errors).

**External (confidence-tagged):** PoE1 gem/socket/link/currency mechanics, gear socket caps, ~1,500-fusing 6-link economics, Tabula Rasa, quality/corruption/awakened/Enlighten-Empower [H, established]. PoE2 model — gem-socketed supports, no links/colours, one-copy-per-support, Spirit, meta/trigger gems, uncut gems, weapon-set flex [H/M]. GGG design *intent* for both eras (ExileCon 2019 + dev interviews) [M, paraphrased — no verbatim quotes reproduced]. PoE 3.29 colour-rewrite specifics [L — relayed from repo video-frame research, not independently verified].
