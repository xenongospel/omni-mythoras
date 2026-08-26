# Mewgenics skill/ability variation → Mythoras skill banks (idea vector)

**Date:** 2026-08-11  
**Status:** Optional research note. **Not Mythoras canon.** Idea vector only — overlapping variation lessons, not a pathway mandate.  
**Audience:** Wave 1 skill economy / ADE Skills dictionary (later), grill prep.  
**Primary question:** What does **Mewgenics** actually do for ability **pools, draft, rarity, and inheritance**, and what careful lessons map to Mythoras’s proposed **global bank + pocket/exceptional bank** without inventing skill lists or locking Skill Card presentation?

**Spelling:** The game is **Mewgenics** (not “meugenics”).

---

## Executive verdict

Mewgenics varies builds by **gated pools + per-level draft offers + paid/itemised rerolls + breeding inheritance**, not by a PoE-style “most skills are buyable once unlocked.” A large **Collarless** shared pool sits beside per-class (~75) collar pools; multiclass and “all-class” effects are explicit exceptions. Mythoras’s two-bank idea can borrow the *shape* (wide baseline bank + smaller exceptional bank that drives identity) without copying collar classes, draft-on-level as the only acquisition loop, or generational breeding. Skill **presentation** (cards vs other) stays open; ADE can later author skills as bank-tagged dictionary rows.

---

## 0. Scope & fidelity locks (repo)

These are **repo FACT** about Mythoras intent for this ticket — not claims about Mewgenics.

| Source | What it says | How this note treats it |
| --- | --- | --- |
| [`RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md`](../../RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md) § Skills direction | Not following full Mewgenics pathway; overlapping fundamentals / variation only. Skill Cards may have been over-deep; owner leans **maybe not cards**. Proposed economy: **global bank** + **pocket/exceptional bank** (boss drops, exceptional-support-like rarity, unique-like skills, packs, utility, **creature-species skills**). ADE designing skills may help settle representation later. | Respect as owner idea vector; do **not** lock as canon. |
| [`IDEA_LOG.md`](../../IDEA_LOG.md) IDEA-004 | Keep Skill Cards for MVP; revisit presentation later. Metaphor must stay physically imaginable. | Do not close card vs non-card. Prefer “skill” / bank language when discussing economy. |
| [`SESSION_COMPILE_2026-08-11.md`](../../SESSION_COMPILE_2026-08-11.md) §2.2 | Keep Skill Cards for MVP UI scaffolds; park constellation; creature remains skill host. Mewgenics listed as later research (boss skill selection, ancestry on Grid, etc.). | Presentation = MVP scaffold, not economy lock. This note does **not** adopt breeding→Grid ancestry as a recommendation. |
| [`CONTEXT.md`](../../CONTEXT.md) #9 + Skill vocabulary | Skill Cards / Frame / Supports are **creature-local**. Creatures learn/equip skills; no natural Pokémon move pool as the model (“Creatures have no natural moves” in Pokémon-transpose table — Skill Cards are the TM analogue). | Ownership stays creature-local regardless of bank membership. Bank = *where the skill comes from in the economy*, not who owns the installed instance. |
| Same — open inventory model | Skill Card inventory (shared items vs creature-bound) still OPEN in CONTEXT. | Two-bank idea must not silently decide tradability. |

**Explicit non-goals for this note**

- Invent Mythoras skill lists, class kits, or rarity tables.
- Mandate Skill Cards (or any replacement metaphor).
- Import Mewgenics breeding, collars, disorders, or adventure structure as Mythoras systems.
- Treat wiki datamines as equal to Steam/official marketing — wiki is high-detail but community-maintained; labelled carefully below.

---

## 1. Primary / high-trust sources on Mewgenics abilities

### 1.1 Steam store page (official marketing) — FACT

Source: [Mewgenics on Steam](https://store.steampowered.com/app/686060/Mewgenics/) (appid 686060; released Feb 10, 2026; Edmund McMillen & Tyler Glaiel).

Relevant claims on the page:

- Tagline / loop: **“Draft abilities, collect items, and manipulate genetics across generations.”**
- Combat depth: **“With 1000+ unique abilities (75 per class), 900+ items…”**
- Scope bullet: **“10+ character classes with 75 unique abilities each.”**
- Breeding: cats **“Pass down strange skills and mutations…”**
- Classes: outfit cats with **“class-specific collars (Fighter, Tank, Mage, and many more).”**

**INFERENCE:** Marketing treats **class-gated pools of ~75** plus a **1000+** catalogue as the headline variation story, with **draft** and **inheritance** as the two player-facing verbs.

### 1.2 Community wiki (careful secondary / datamine) — FACT with caution

Primary wiki used here: [Abilities — The Mewgenics Wiki](https://mewgenics.wiki.gg/wiki/Abilities) (wiki.gg). Cross-checked with [Adventure — Level Ups](https://mewgenics.wiki.gg/wiki/Adventure), [Breeding](https://mewgenics.wiki.gg/wiki/Breeding), [List of effects that grant level up rerolls](https://mewgenics.wiki.gg/wiki/List_of_effects_that_grant_level_up_rerolls), [List of Soul passives](https://mewgenics.wiki.gg/wiki/List_of_Soul_passives), [Jester](https://mewgenics.wiki.gg/wiki/Jester).

Wiki pages cite internal game data / reverse-engineering in places (algorithms, counters). Treat detailed roll formulas as **high-confidence community FACT about live game behaviour**, not as McMillen/Glaiel design essays.

### 1.3 Press / guides — secondary

Useful for orientation, not for inventing numbers:

- Collar unlock coverage: [PC Gamer — classes/collars](https://www.pcgamer.com/games/roguelike/mewgenics-classes-best-collars/), [Polygon — unlock collars](https://www.polygon.com/mewgenics-classes-collars-how-to-unlock/).
- Reroll item coverage: [GameRant — reroll level-up abilities](https://gamerant.com/mewgenics-how-reroll-level-up-abilities/) (aligns with wiki item list; still secondary).
- Preview citing Steam numbers: [Rogueliker preview](https://rogueliker.com/mewgenics-gameplay-preview/).

Wikipedia overview exists ([Mewgenics — Wikipedia](https://en.wikipedia.org/wiki/Mewgenics)) but is thinner on ability-economy detail than the wiki.gg pages above.

---

## 2. How Mewgenics structures ability variation

### 2.1 Pool architecture (class / collar / Collarless)

| Claim | Kind | Source |
| --- | --- | --- |
| 1000+ unique abilities; ~75 per class | **FACT** (marketing) | Steam About section |
| Over 1000 abilities; Collarless ≈ 172 non-basic (108 active + 64 passive); each normal class adds 75 (50 active + 25 passive); Jester adds 6; wiki summary total ≈ **1095** including basic attacks | **FACT** (wiki catalogue summary) | [Abilities wiki](https://mewgenics.wiki.gg/wiki/Abilities) |
| Classes are **collars** equipped for an adventure; Collarless = no class modifiers / shared pool emphasis | **FACT** | Steam + Abilities / Adventure wiki |
| Collarless abilities are offered to **all** cats (shared / baseline pool) | **FACT** | Abilities wiki (Collarless section) |
| Class abilities are primarily offered via that class’s level-up pool (collar class), unless multiclass/all-class effects apply | **FACT** | Adventure wiki — Level Up Classes |
| Loadout caps: up to **4** active spells + **2** passives (plus separate bonus/disorder slots) | **FACT** | Abilities wiki |
| Adventure start: regular classes draw **1** starter active from a **pool of 10** class starters; Collarless can start with any Collarless spell; Jester can start with any non-Collarless spell; random **class passive** on class lock-in | **FACT** | Abilities wiki |

**INFERENCE:** Mewgenics is not “one flat 1000-skill bag.” It is **one large shared Collarless bank** + **many medium class banks (~75)** + **tiny Jester-native bank**, with explicit systems that *widen* which banks appear in a draft.

### 2.2 Draft-on-level (acquisition during a run)

| Claim | Kind | Source |
| --- | --- | --- |
| Steam markets **draft** as a core verb | **FACT** | Steam |
| After combat, one eligible party cat levels; each level offers a **choice among 4 rewards** (abilities / passives / upgrades / stats depending on level template) | **FACT** | Adventure wiki — Level Ups / Rewards |
| Early “Learn Ability!” options use **ability groups** (attack / defense / move / misc) to diversify offers before falling back to standard rolls | **FACT** | Adventure wiki — Ability Groups |
| Offers are drawn from the cat’s **level-up class pools** (normally the collar class); empty/fail paths can fall through to Collarless or Stat Up | **FACT** | Adventure wiki — pools / algorithms |
| Knowing 4 actives or 2 passives forces replace prompts / Stat fallbacks | **FACT** | Adventure wiki |

**INFERENCE:** Variation pressure during a run is **choose-1-of-4 from a gated pool**, not browse-a-vendor-catalogue. The player’s agency is *selection + build direction*, not *guaranteed access to a named skill*.

### 2.3 Rerolls (mitigating bad drafts)

| Claim | Kind | Source |
| --- | --- | --- |
| Level-up **rerolls are not free baseline**; they come from items, mutations, disorders, class/set bonuses | **FACT** | [Reroll effects list](https://mewgenics.wiki.gg/wiki/List_of_effects_that_grant_level_up_rerolls) |
| Examples: D6 / Furry Dice (+1), Chaos Controller (+3 + all-class offers), Jester Cap (+2; all-class **after** reroll), Jester class (+1 + all-class), Jester set (+3), several mutations/disorders | **FACT** | Same wiki list |
| Some effects change **which pools** appear (all classes / only upgraded Collarless via Void Soul) rather than only refreshing RNG | **FACT** | Reroll list + [Soul passives](https://mewgenics.wiki.gg/wiki/List_of_Soul_passives) |

**INFERENCE:** Rerolls are a **scarce meta-resource** that converts “pool gating” into “I can chase a line.” That is different from PoE’s “buy the gem you want.”

### 2.4 Widening pools (multiclass / all-class) — rarity of access, not rarity of skill rows

| Claim | Kind | Source |
| --- | --- | --- |
| Class **Soul** passives (unlocked via class Moon clears) grant that class’s stats and make that class’s abilities appear on level-up → multiclass | **FACT** | Soul passives wiki |
| Jester / Chaos Controller / Crown of Chaos / Jester’s Soul offer **abilities from any/all classes** | **FACT** | Jester + reroll/Soul pages |
| Jester’s *native* unique ability list is tiny (6); its fantasy is **open pool access**, not a huge exclusive kit | **FACT** | Abilities + Jester wiki |

**INFERENCE:** “Rarity” in Mewgenics often lives in **access rights to pools** (Souls, items, Jester) more than in a single skill row marked Unique. Exceptional *skills* still exist (bonus abilities unique / replace basics), but the headline exception system is **who can roll which bank**.

### 2.5 Breeding inheritance of abilities

| Claim | Kind | Source |
| --- | --- | --- |
| Steam: pass down skills/mutations across generations | **FACT** | Steam |
| Kitten ability inheritance is **Stimulation-gated** (room furniture / house system) | **FACT** | [Breeding wiki](https://mewgenics.wiki.gg/wiki/Breeding) |
| Active inheritance: up to **two** attempts — first `20% + 2.5%×Stim` (guaranteed at Stim ≥ 32); second `2% + 0.5%×Stim` (guaranteed at ≥ 196). Passive attempt can overwrite the kitten’s otherwise-random Collarless active | **FACT** | Breeding wiki |
| Passive inheritance: one attempt `5% + 1%×Stim` (guaranteed at ≥ 95) | **FACT** | Breeding wiki |
| Parent selection can bias toward the parent that has non-Collarless abilities at high Stimulation | **FACT** | Breeding wiki |
| **Skill Share+** guarantees the parent’s other passive to children (special inheritance rule) | **FACT** | Breeding wiki |
| Collars/classes are **not** inherited traits (class potential separate from parents’ collars) — press/guides + design shape | **FACT / secondary** | Press guides (e.g. GameBrief class overview); consistent with collar-as-equipment fantasy |

**INFERENCE:** Breeding is a **cross-run persistence layer** for specific ability instances, turning successful adventure drafts into bloodline capital. Mythoras does **not** need this to learn from pool/draft lessons; SESSION_COMPILE’s “family trees on Grid” remains a separate optional vector.

### 2.6 What Mewgenics is *not* doing (useful negatives)

- **Not** “most skills available from a vendor after progression” as the default tension (contrast §3).
- **Not** a single Pokémon-static species movepool as the primary variation engine (species/mutations matter, but abilities are class/Collarless drafted).
- **Not** free infinite rerolls of the entire catalogue each level.
- **Not** (as marketed) a tiny curated skill list — catalogue scale is a feature.

---

## 3. Contrast: Path of Exile skill availability tension

Owner note frames PoE tension as: **level gems + most skills available from vendors/progression**; Mythoras may differ.

| PoE pattern | Kind | Source |
| --- | --- | --- |
| Skill/support gems obtained as quest rewards and sold by vendors as quests complete | **FACT** | [Skill gem — PoE Wiki (Fandom)](https://pathofexile.fandom.com/wiki/Skill_gem); [ExileQuest vendor notes](https://exilequest.app/) |
| After Act 3 *A Fixture of Fate*, **Siosa** sells (unleveled) quest-reward gems across classes for completed quests | **FACT** | Same |
| After Act 6 *Fallen from Grace*, **Lilly Roth** sells essentially **all non-drop-exclusive** unleveled skill gems | **FACT** | Same |
| A minority of gems are **drop-only** and excluded from that “buy anything” floor | **FACT** | PoE “drop-only gems” community/wiki framing (see Fandom skill gem page notes) |
| Gem **level** and quality are separate progression axes from *obtaining the skill identity* | **FACT** | PoE gem system generally |

**INFERENCE for contrast (not Mythoras lock):**

| Dimension | PoE default | Mewgenics default |
| --- | --- | --- |
| Obtaining a named skill | High determinism after midgame vendors | Stochastic draft from gated pools |
| “Most of the catalogue” | Buyable (non-drop-only) | Present in data, but **not** freely selectable |
| Exceptional rarity | Drop-only gems + unique items/supports elsewhere | Access expanders (Souls/Jester/items) + inheritance + unique bonus abilities |
| Build identity driver | Which gems you socket + links/supports + tree | Which pools you can see + which draft picks you keep + bloodline |

Mythoras’s proposed two-bank idea can sit **between** these poles without copying either: a large **obtainable** global bank (PoE-like floor) plus a **smaller exceptional bank** that behaves more like Mewgenics’ gated/special access (or PoE drop-only), without requiring draft-on-level or breeding.

---

## 4. Map to Mythoras two-bank idea (careful; non-canon)

Owner shape ([ADE narrowing](../../RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md)):

1. **Global bank** — available across the game.  
2. **Pocket / exceptional bank** — boss drops, exceptional-support-like rarity, unique-like skills, packs, utility, creature-species skills — **smaller**, drives variability.

### 4.1 Analogy table (lessons, not 1:1 systems)

| Mewgenics mechanism | Closest Mythoras bank lesson | Keep? | Avoid copying as-is |
| --- | --- | --- | --- |
| Collarless shared pool | **Global bank** — wide, always-relevant skill identities many creatures can pursue | Variation lesson: a large shared floor prevents “empty early game” | Collarless as a *class* fantasy; coin-cost spells flavour |
| Per-class ~75 pools | **Not** Mythoras Foundations-as-skill-gates by default (Foundations are Grid starts). Better analogy: **authored subsets** that feed the exceptional bank or soft affinity weights | Lesson: medium pools create legible identity without 1000-option paralysis | Collar equipment; “Fighter learns Fighter spells” as hard rule |
| Draft 1-of-4 on level | Optional **acquisition UX** for some content (e.g. boss skill selection already flagged in SESSION_COMPILE) — not required for whole economy | Lesson: constrained choice creates memorable picks | Making draft the *only* way to get global-bank skills (would fight PoE-like determinism if desired) |
| Reroll charges | Optional **sink / chase** currency if drafts exist | Lesson: scarce mitigation > free re-roll of the universe | Mandatory dice item chase as core ARPG loop |
| Soul / Jester pool expanders | How a creature **unlocks eligibility** into pocket banks (species tags, Origin Affinity, boss unlocks, pack products) | Lesson: rarity can be *access*, not only drop weight | Multiclass Souls as literal Mythoras feature |
| Breeding inheritance | Persistence of rare skills across “generations” of roster investment | Weak lesson for Mythoras unless ancestry systems are greened separately | Bloodline inheritance as MVP skill economy |
| Bonus / unique abilities | Pocket bank **unique-like** rows | Strong lesson | Flooding pocket until it stops feeling exceptional |

### 4.2 Suggested reading of the two banks (INFERENCE only)

**Global bank (Mythoras idea)**

- Job: floor of build expression — many skills findable/craftable/vendorable across campaign→endgame.
- Mewgenics echo: Collarless + “most of the time you can get *something* useful from the shared/class floor.”
- PoE echo: Lilly/Siosa floor — but Mythoras may choose a **stricter** or **looser** floor; owner already said Mythoras may differ.
- Does **not** imply Technician-global ownership (CONTEXT #9). Global = economy availability, not Grid ownership.

**Pocket / exceptional bank (Mythoras idea)**

- Job: variability & chase — smaller set; showing up on a creature/build should feel like a story.
- Candidate membership (owner list, still ideas): boss-exclusive skills, exceptional supports, unique-like skills, pack/product skills, utility outliers, **creature-species skills**.
- Mewgenics echo: class-identity kits + all-class access as *exceptional*, unique bonus abilities, inheritance of prized actives/passives.
- Species skills specifically reconcile CONTEXT’s “no natural moves” baseline with an **authored exceptional overlay** (species grants eligibility or a pocket row — grill later; do not invent lists).

### 4.3 Representation (cards) stays open

| Statement | Kind |
| --- | --- |
| IDEA-004: cards stay for MVP; revisit presentation | **FACT** (repo) |
| Owner ADE note: may have over-indexed on cards; leans maybe-not-cards; ADE skill authoring may settle presentation | **FACT** (owner direction) / **not canon** |
| Battle-representation needs ≠ Pokémon-static movepool needs — cards were one answer to both | **INFERENCE** |
| Two-bank economy can be authored presentation-agnostically (skill identity rows first; UI metaphor later) | **INFERENCE** |

Do **not** treat “Skill Card” wording in CONTEXT as a closed presentation lock for ADE schema — CONTEXT locks **creature-local ownership** and vocabulary *for now*; IDEA-004 already anticipates metaphor change.

### 4.4 What *not* to import from Mewgenics into Mythoras

- Full collar/class pathway as the primary skill gate.
- Breeding Stimulation inheritance as the main persistence model.
- Adventure-only draft as the sole acquisition channel for the global bank.
- Assuming ~75/class catalogue sizing is the right Mythoras content budget.
- Treating “1000+ abilities” as a target number rather than a “large catalogue is OK” lesson.

---

## 5. Mythoras ADE implication — minimum useful Skills dictionary (later; do not build now)

Mirror the anti-theatre standard from [`RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md`](../../RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md) §6.2: empty Skills chrome without an authoring job fails. Motherboard Grid / Skill Frame topology stay fog per ADE narrowing — **Skills dictionary ≠ Frame topology editor**.

### 5.1 Jobs the Skills face must enable

1. **Author** a skill identity (create/edit row).  
2. **Classify** which **bank** it belongs to (global vs pocket/exceptional — even if names provisional).  
3. **Tag** it for consumers already locked/leaned in CONTEXT (Stream, Origin Affinity, creature tags — without inventing full enums).  
4. **Hint acquisition** (vendor/progression / drop / boss / species / pack / craft) without implementing drop tables.  
5. **Inspect** fixture creatures’ installed skills *abstractly* (list + supports placeholders) so representation (card art vs gem vs other) can change without rewriting the dictionary.

### 5.2 Minimum useful fields (proposed skeleton — not schema lock)

| Field | Why |
| --- | --- |
| `id` (stable) | Cross-refs from creatures, supports, drops, ADE fixtures |
| Display name | Authoring / PoB-like inspect |
| **Bank** | `global` \| `pocket` (nullable/`unassigned` OK while sorting content) |
| Avenue / slot class | Active · Support · (optional third avenue — SESSION_COMPILE; keep expandable) |
| Stream / damage-type hooks | Nullable; CONTEXT type architecture |
| Tags[] | Skill-side tags / Origin Affinity consumers |
| Eligibility hints | Text: species / Origin / tag requirements — OPEN inventory rules |
| Acquisition hints | Enum-ish stubs: `progression`, `vendor`, `drop`, `boss`, `species`, `pack`, `craft`, `unknown` |
| Rarity / chase flag | For pocket rows (unique-like / exceptional-support-like) — soft label, not economy sim |
| Presentation-agnostic blurb | What the skill *does* in one sentence; no card-frame assumptions |
| Support link stubs | Count/capacity unknown — placeholder only (do not encode 6-link) |

**Starter seed set:** a handful of **fixture** skills labelled global vs pocket — not a real content catalogue. Enough to filter “show pocket only” and attach one pocket skill to a creature fixture.

**Done when:** An author can create a skill, mark it pocket, see it on a creature fixture’s skill list, and filter the dictionary by bank — even if Frame topology, card art, and drop weights are still fog.

### 5.3 Explicitly out of scope for that first Skills surface

- Full Skill Frame constellation / free-flow socket solver.  
- Live draft simulator / breeding inheritance tooling.  
- Invented complete Mythoras skill roster.  
- Locking card vs non-card UI chrome (preview may show a neutral “skill row”).

---

## 6. FACT vs INFERENCE — quick ledger

### FACT (citeable)

- Steam: draft + 1000+ abilities + ~75/class + collars + skill inheritance marketing.
- Wiki: Collarless vs class pool sizes; 4-option level rewards; pool algorithms; reroll sources; Soul multiclass; Stimulation inheritance thresholds.
- PoE: mid/late vendors sell nearly all non-drop-only gems.
- Repo: creature-local skills; IDEA-004 presentation revisit; owner two-bank idea; ADE Skills may clarify representation.

### INFERENCE (useful, not locked)

- Two-bank Mythoras ≈ Collarless-like floor + smaller exceptional access/content bank — **shape** lesson only.
- PoE vendor floor vs Mewgenics draft gating is the real design tension to grill; Mythoras need not pick either extreme.
- ADE Skills dictionary should be **bank-tagged and presentation-agnostic** so card metaphor can die without killing content rows.
- Species skills belong in **pocket** eligibility, not as a silent return of full natural movepools.

### Unknown / needs grill (not answered here)

- How large global vs pocket should be (orders of magnitude).
- Whether global skills are vendor-determinism, drop-weighted, craftable Agents, or mixed.
- Whether pocket “creature-species skills” are innate installs, eligibility gates, or tradable objects.
- Whether any Mewgenics-like draft appears (boss skill selection only vs broader).
- Final skill presentation metaphor post-MVP.

---

## 7. Sources

### Official / primary

- [Mewgenics on Steam](https://store.steampowered.com/app/686060/Mewgenics/)

### High-detail community (use carefully)

- [Abilities — mewgenics.wiki.gg](https://mewgenics.wiki.gg/wiki/Abilities)
- [Adventure (Level Ups) — mewgenics.wiki.gg](https://mewgenics.wiki.gg/wiki/Adventure)
- [Breeding — mewgenics.wiki.gg](https://mewgenics.wiki.gg/wiki/Breeding)
- [List of effects that grant level up rerolls](https://mewgenics.wiki.gg/wiki/List_of_effects_that_grant_level_up_rerolls)
- [List of Soul passives](https://mewgenics.wiki.gg/wiki/List_of_Soul_passives)
- [Jester — mewgenics.wiki.gg](https://mewgenics.wiki.gg/wiki/Jester)

### PoE contrast

- [Skill gem — Path of Exile Wiki (Fandom)](https://pathofexile.fandom.com/wiki/Skill_gem)
- [ExileQuest — quest/vendor gem reference](https://exilequest.app/)

### Secondary orientation

- [PC Gamer — Mewgenics classes/collars](https://www.pcgamer.com/games/roguelike/mewgenics-classes-best-collars/)
- [Polygon — unlock collars](https://www.polygon.com/mewgenics-classes-collars-how-to-unlock/)
- [GameRant — reroll level-up abilities](https://gamerant.com/mewgenics-how-reroll-level-up-abilities/)
- [Rogueliker — Mewgenics preview](https://rogueliker.com/mewgenics-gameplay-preview/)
- [Wikipedia — Mewgenics](https://en.wikipedia.org/wiki/Mewgenics)

### Mythoras repo fidelity

- [`CONTEXT.md`](../../CONTEXT.md) — skill ownership #9; Skill Card / Frame vocabulary; Pokémon-transpose “no natural moves”
- [`IDEA_LOG.md`](../../IDEA_LOG.md) — IDEA-004 presentation
- [`RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md`](../../RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md) — skills direction / two-bank idea
- [`SESSION_COMPILE_2026-08-11.md`](../../SESSION_COMPILE_2026-08-11.md) — MVP skill UI; Mewgenics later research bullets
- [`RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md`](../../RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md) — ADE minimum dictionary surface pattern

---

## 8. One-line carry-forward

Steal Mewgenics’ **banked pools + constrained offer + scarce reroll/access expanders** as variation grammar; keep Mythoras free to choose a **more deterministic global bank** than Mewgenics drafts, and keep **Skill Card presentation** undecided while ADE eventually authors **bank-tagged skill identities**.
