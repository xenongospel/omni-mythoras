# Affix / prefix–suffix lean — optional research after owner ADE narrowing

**Date:** 2026-08-11  
**Status:** Research note. **Not canon.** Marks owner **leans** only; does **not** close [`CONTEXT.md`](CONTEXT.md) Open Design Exploration on affix classification.  
**Audience:** Grill prep for Modifier / Affix Classification; ADE Mod Catalogue fields (tier + slot class + drop-only).  
**Trigger:** Owner ADE narrowing (`RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md` § Mods / crafting direction) + session soft lean (`SESSION_COMPILE_2026-08-11.md` §3.2).  
**Prior:** [`RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md`](RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md).

---

## Executive verdict

**LEAN (owner, not lock):** Keep **prefix/suffix** as the player-facing grammar for gear; mods have **tiers**; **drop-only mods** are an intentional innovation candidate; admire PoE’s **verbs + discovery + failure chance**; reject **Diablo 4 Tempering** as a model. Attribute-quad (Authority / Invictus / Animus / Order) remains **OPEN in CONTEXT** — treat owner preference as lean toward prefix/suffix + optional extension, and **grill to lock**.

**FACT (repo):** CONTEXT still lists prefix/suffix vs Attribute-quad vs hybrid as unresolved Open Design Exploration. Closing that exploration without a grill would falsely overwrite canon.

---

## 0. Owner leans vs CONTEXT (do not conflate)

| Topic | CONTEXT status | Owner lean (2026-08-11) | Action |
| --- | --- | --- | --- |
| Prefix / suffix vs Attribute-quad vs hybrid | **OPEN** — Open Design Explorations → Modifier / Affix Classification | Likely **keep prefix/suffix**, optional variability beyond strict two buckets | Mark **LEAN**; recommend grill |
| Mod tiers | Described as PoE pattern; Mythoras not locked | Mods **have tiers** | Lean toward tiered catalogue rows |
| Drop-only mods | Not decided | Intentional **innovation candidate** | Research patterns; do not invent Mythoras lists |
| D4 Tempering | Not referenced as model | Explicitly **not** the model (“pretty poor”) | Contrast only |
| PoE craft feel | Admired as reference depth | Verbs + discovery + failure chance | Design aspiration, not copy-paste |

Sources: [`CONTEXT.md`](CONTEXT.md) § Open Design Explorations; [`RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md`](RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md) § Mods / crafting; [`SESSION_COMPILE_2026-08-11.md`](SESSION_COMPILE_2026-08-11.md) §3.2 (“Prefix/suffix for now; extra layers later”).

**Session soft note (LEAN):** Gear may keep prefix/suffix while **creature mods** may use a separate scheme later — keep Catalogue `generation_type` / slot class flexible across domains.

---

## 1. PoE public anatomy — prefix/suffix, domains, groups, weights, tiers

### 1.1 Prefix / suffix as generation type (not the whole catalogue)

**FACT:** On items, rollable explicits are primarily **PREFIX** or **SUFFIX** generation types. Magic items: up to 1 prefix + 1 suffix. Rare items: up to **3 prefixes + 3 suffixes** (jewels: typically 2+2). Unique / innate / implicit mods commonly use generation type **UNIQUE** (granted, not randomly rolled from the prefix/suffix pool).

Sources: [Path of Exile Wiki (Fandom) — Modifiers](https://pathofexile.fandom.com/wiki/Modifiers) (Explicit modifiers / rarity caps; Mod Generation Type table); [PyPoE `MOD_GENERATION_TYPE`](https://omegak2.net/poe/PyPoE/_modules/PyPoE/poe/constants.html) (`PREFIX=1`, `SUFFIX=2`, `UNIQUE=3`, …); [RePoE `mods.md`](https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/docs/mods.md) (`generation_type`).

**FACT:** Prefixes name *before* the base; suffixes name *after* (“of …”) on magic items — player-facing grammar tied to generation type.

Source: [Fandom Modifiers — Terminology](https://pathofexile.fandom.com/wiki/Modifiers).

### 1.2 Domains — catalogue partitions

**FACT:** `domain` partitions which entity class a mod belongs to (item, flask, monster, chest/strongbox, area/map, crafted/bench, jewel/misc, atlas, delve, etc.). Domain can also encode different affix-count rules for that entity class.

Sources: [Fandom Modifiers — Mod Domain table](https://pathofexile.fandom.com/wiki/Modifiers); [PyPoE `MOD_DOMAIN`](https://omegak2.net/poe/PyPoE/_modules/PyPoE/poe/constants.html); prior note [`RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md`](RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md) §3.1.

**INFERENCE for Mythoras ADE:** One Catalogue with many domains (GearExplicit, CreatureImplicit, Area/Warbanner, …) mirrors PoE better than separate top-level “mod systems” per entity.

### 1.3 Groups / families — exclusion + the tier ladder

**FACT:** Mods belong to a **group** (GGG historically “mod family”). **Only one mod from a group** may appear on the same entity. Combined with `required_level` / item level gates, this is what produces the public **tier ladder** for a stat family (e.g. many tiers of “+# Maximum Life” share a group; you roll one tier, not several).

Sources: [Fandom Modifiers — Mod Group](https://pathofexile.fandom.com/wiki/Modifiers); RePoE `groups` field ([`mods.md`](https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/docs/mods.md)); community restatement [POE2_MOD_GROUPS_SPEC](https://github.com/Isayi9999/sift-public/blob/main/POE2_MOD_GROUPS_SPEC.md) (verify names against live dats).

**FACT (player convention):** “Tier 1” usually means the **best** (highest) tier of a family; lower tiers are weaker / lower ilvl. Exact tier numbering is a presentation convention on top of distinct mod rows sharing a group.

**INFERENCE:** “Mods have tiers” for Mythoras should mean **authored ladder rows under a shared group id**, not a free-floating number with no exclusion semantics.

### 1.4 Weights — spawn eligibility and relative chance

**FACT:** `spawn_weights` are ordered **tag → weight** pairs matched against the host’s tags (base tags + tags added by other mods). First matching tag wins; weight `0` = ineligible; positive weight = relative chance within the eligible pool. `generation_weights` can further multiply that weight (percentage-style modifiers from influence / craft context).

Sources: RePoE [`mods.md`](https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/docs/mods.md); [PyPoE `get_spawn_weight`](https://omegak2.net/poe/PyPoE/_modules/PyPoE/poe/sim/mods.html); [Fandom Modifiers — Spawn weight tag](https://pathofexile.fandom.com/wiki/Modifiers).

**FACT:** Separate from coexistence: **mod tags** / `implicit_tags` index crafting manipulation (fossils, harvest, etc.); they do **not** replace groups for exclusion. Prior research: [`RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md`](RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md) §3.3.

### 1.5 Beyond prefix/suffix *inside* PoE (still two buckets for explicits)

**FACT:** PoE already layers **extra generation types / slots** without abandoning prefix/suffix explicits:

| Layer | Generation / pattern | Slot relationship |
| --- | --- | --- |
| Crafted / bench | Domain CRAFTED; often still prefix or suffix *position* | Pseudo-affix via bench |
| Enchantment | `ENCHANTMENT` | Own slot; does not replace implicit |
| Corruption | `CORRUPTED` | Often replaces / alters implicits |
| Essence | Forced / essence-tagged mods (`is_essence_only` in RePoE) | Can inject otherwise gated mods |
| Influence (Shaper/Elder/Conqueror, …) | Host tags expand pools | Still prefix/suffix facing |
| Veiled / unveiled | League drop + unveil step | Prefix/suffix names with discovery |
| Eldritch / other meta | Separate implicits / currencies | Extra targeting without new “temper categories” |

Sources: [Fandom Modifiers](https://pathofexile.fandom.com/wiki/Modifiers) (Enchantment, Influence, Veiled, Delve terminology); RePoE `is_essence_only`, `generation_type`; PyPoE generation types.

**INFERENCE:** Owner “prefix/suffix + variability beyond strict two buckets” maps cleanly onto PoE’s **extra generation types / tags / craft steps**, not onto replacing the two-bucket grammar.

---

## 2. Diablo 4 Tempering — brief contrast (why owner rejection is coherent)

### 2.1 What Tempering is (public)

**FACT (Blizzard):** Season 4 *Loot Reborn* reduced drop affix counts and moved complexity into crafting. **Tempering** uses learned **Tempering Manuals** at the Blacksmith. Manuals fall into **six categories: Weapons, Offensive, Defensive, Mobility, Utility, Resource**. Tempering adds affixes from a chosen manual’s small set; Ancestral items can hold **two** tempered affixes from **different categories**. Tempering has **durability / reroll limits**. **Greater Affixes** (1.5×) are drop-discovered and cannot be enchanted into.

Source: [Blizzard — Galvanize your Legend in Season 4: Loot Reborn](https://news.blizzard.com/en-us/article/24077223/galvanize-your-legend-in-season-4-loot-reborn).

**FACT (slot×category matrix, community guides summarizing live rules):** Each temper category applies only to certain gear slots (e.g. Weapons→weapons only; Mobility→amulets/boots; Resource→amulets/rings). Useful as UX description; treat category↔slot tables as secondary to the Blizzard article for “six categories + Blacksmith temper.”

### 2.2 Why rejection coheres with Mythoras / PoE lean

| Axis | PoE-style (owner admires) | D4 Temper (owner rejects as model) |
| --- | --- | --- |
| Pool discovery | Opaque weights; player learns pools via craft failure & tools | Manuals unlock **known small menus** of affixes |
| Verbs | Many currencies / steps with **risk of brick / bad slam** | Temper is largely **category pick → roll within manual** with durability |
| Affix grammar | Prefix/suffix + groups + weights | Temper categories are **craft-pool partitions**, not a deep coexistence grammar |
| Drop vs craft | Drop can carry uncraftable / hard-to-force mods | Design intent: **simpler drops**, complexity in temper/masterwork |

**INFERENCE:** Owner rejection is coherent if Mythoras wants **emergent craft sequences + failure chance + discovery**, not **codex-of-manuals category tempering**. Temper categories resemble ADE *filters* more than a Forge Terminal philosophy.

**LEAN:** Do not shape Forge Terminal or Catalogue generation types after D4 temper categories.

---

## 3. “Drop-only” / exclusive mods — PoE public patterns (innovation framing)

Owner candidate: **drop-only mods** as Mythoras innovation. PoE already uses several *exclusive access* patterns — useful as **pattern vocabulary**, not as a mandate to copy.

### 3.1 Pattern catalogue (public)

| Pattern | What “exclusive” means | Prefix/suffix kept? | Notes |
| --- | --- | --- | --- |
| **Essence-only** | RePoE `is_essence_only`; generation tied to essences | Often still prefix/suffix position | Forced craft path, not natural slam |
| **Influence / elevated** | Host gains influence tags → exclusive pool weights | Yes | Content-gated pool expansion |
| **Fossil / Delve craft exclusives** | Historically fossil-only mods; many removed/relocated in 3.10; few remain (e.g. Faceted / Bloodstained / Hollow exceptions per patch notes) | Yes | Shows exclusivity can be **nerfed/relocated** over time |
| **Delve node drop-only** | Distinct from fossil-craft exclusives; drop from specific Delve content | Yes | Drop source ≠ craft source |
| **Veiled (Syndicate)** | Drop veiled; unveil as discovery step; some agent-exclusive names | Yes | Discovery + failure/choice at unveil |
| **Labyrinth / anoint enchantments** | Enchantment slot, not explicit prefix/suffix budget | Separate slot | “Beyond two buckets” via **extra slot family** |
| **Boss / unique / pinnacle gated bases** | Unique mods or exclusive bases | Unique = granted | Different from rollable exclusive explicits |
| **Fractured / synthesised (league → core)** | Locked mods / special implicits | Explicits still P/S | Special entities, not new temper categories |

Sources: RePoE `is_essence_only` ([`mods.md`](https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/docs/mods.md)); [Fandom Modifiers](https://pathofexile.fandom.com/wiki/Modifiers) (Influence, Veiled, Enchantment, Delve, Fractured); [Fandom Fossil](https://pathofexile.fandom.com/wiki/Fossil) (3.10 fossil-exclusive cull + remaining exceptions — secondary wiki; confirm against patch notes when locking design).

### 3.2 Peer ARPG: Last Epoch tier drop-gating (useful foil)

**FACT (Last Epoch official support):** Affixes have **7 tiers** (T1 lowest–T7 highest); crafting can create T1–T5 only; **T6–T7 are drop-only**; prefix/suffix with up to 2+2.

Source: [Last Epoch Support — Affixes](https://support.lastepoch.com/hc/en-us/articles/46361996533147-Affixes) (cited previously in tags/catalogue research; fetch may intermittently fail — treat as known official support article).

**INFERENCE for Mythoras innovation framing:** Two distinct exclusivity axes:

1. **Tier exclusivity** — same mod family, top tiers cannot be craft-forced (LE-style).  
2. **Mod exclusivity** — entire mod / family only appears from a drop/content gate (PoE influence / veiled / boss).

Owner “drop-only mods” can mean either or both; **grill should pick which axis is the innovation**, and whether exclusivity is permanent or seasonal/relocatable (PoE’s fossil history warns against brittle exclusivity).

**LEAN (research recommendation):** Prefer drop-only as **Catalogue generation flags + spawn rules**, not as a third temper-like category UI.

---

## 4. Options for “beyond two buckets” without abandoning prefix/suffix

All options below **keep** prefix/suffix as the default explicit grammar. None require Attribute-quad lock.

| Option | Shape | Pros | Cons / grill questions |
| --- | --- | --- | --- |
| **A. Extra slot family (enchant / imprint / symbiotic)** | Third (or Nth) slot that is not P/S budget — e.g. CONTEXT **Imprint** at Forge Terminal; Labyrinth-like enchant | Distinct Mythoras surface; PoE-proven | What can imprint? Does it consume a creature Symbiotic Slot concept? |
| **B. Craft-meta / bench pseudo-slot** | Crafted mod still occupies P or S, but Agents force / lock / meta-mod | Preserves 3+3 feel; PoE bench parallel | Easy to over-power if crafted ignores weights |
| **C. Content-gated pools (influence analogue)** | Same P/S slots; Cipher / Region / Origin / Warbanner tags expand weights | Drop-only + farm targeting without new UI buckets | Needs tag↔weight authoring discipline |
| **D. Discovery step (veiled analogue)** | Drop unknown mod; Forge Terminal unveil / Gl!tch-adjacent reveal with failure | Matches owner “discovery + failure chance” | UI and brick rules must be taught early |
| **E. Hybrid Attribute *pools* under P/S wrapper** | CONTEXT hybrid: Authority/Invictus/Animus/Order gate eligibility; facing stays P/S | Keeps OPEN quad idea without replacing grammar | Risk of “complexity without payoff” if players never see Attributes |
| **F. Domain-specific schemes** | Gear = P/S; creature mods = different (session lean) | Matches SESSION_COMPILE soft lean | Catalogue must not assume one generation enum globally |

**INFERENCE:** Owner “extra targeting / emergent crafting steps” aligns best with **B + C + D**, optionally **A** using existing Mythoras **Imprint** vocabulary ([`CONTEXT.md`](CONTEXT.md) Economy table).

**LEAN:** Attribute-quad as *replacement classification* stays OPEN and currently disfavored; Attribute-quad as *optional under-the-hood pool tags* remains a hybrid grill candidate (option E).

---

## 5. ADE Catalogue implications — minimum fields (no invented affix lists)

Aligns with prior minimum surface in [`RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md`](RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md) §6.2, updated for owner leans.

### 5.1 Minimum Catalogue row fields

| Field | Purpose | Lean / OPEN note |
| --- | --- | --- |
| `id` | Stable key | Required |
| Display / affix name | May be empty for granted-only | Required |
| `domain` | CreatureImplicit · CreatureMod · SkillMod · GearExplicit · Area (provisional names) | **INFERENCE** partitions |
| `generation_type` / slot class | Prefer default enum lean: `prefix` \| `suffix` \| `granted` \| `enchant`/`imprint` \| `encounter` | Show UI callout: Attribute-quad **still OPEN** — optional nullable `quad:<Attribute>` **must not** be presented as locked |
| `group` | Exclusion / tier family | Required even with one tier |
| `tier` | Integer ladder within group (convention: document whether 1=best or 1=worst — pick in grill; PoE community often 1=best) | Owner lean: tiers exist |
| `required_level` / ilvl gate | Tier gating | Stub OK |
| `stats[]` | Stat id + min/max | Fixture-only values |
| Host `spawn_weights` / tags | Eligibility | Empty OK for granted/drop-forced |
| **`drop_only` (bool)** or `access: craft\|drop\|both\|essence_analogue` | Innovation flag for generation hints | Owner lean; do not invent which mods |
| Optional `craft_forbidden_tiers` / `max_craft_tier` | LE-style tier exclusivity | Optional; grill axis §3.2 |

### 5.2 What ADE should / should not do

**Do:**

- Support tier + prefix/suffix + drop-only **as schema fields**.
- Keep Tags face separate; Catalogue references tags for weights / conditions.
- Label fixture rows as research placeholders.

**Do not:**

- Invent Mythoras affix lists or close CONTEXT Open Design Exploration.
- Build D4-style temper category manuals as the primary craft UX.
- Implement full weighted endgame modpools before classification grill.

**Done when:** Author can create a fixture row with `generation_type: prefix`, `tier: 3`, `drop_only: true`, see it filterable beside Tags — without claiming canon balance.

---

## 6. CONTEXT Open Design Exploration — readback

From [`CONTEXT.md`](CONTEXT.md) § Open Design Explorations → **Modifier / Affix Classification System** (unresolved):

- PoE baseline restated: prefixes/suffixes, tiers, weights; max 6 (3+3); fossils/influence/eldritch/bench deepen availability.
- Mythoras options listed: keep P/S; **quad Attribute pools** (Authority, Invictus, Animus, Order) with possible max 4; hybrid quad-under-P/S; research peers beyond PoE/D2.
- Affects: Forge Terminal simulator, crafting Agent tools, item card UI, mod cap feel.
- **Status:** Unresolved; dedicated grill required before Builder Forge Terminal simulation scoped.

**This research’s relationship to that section:**

| CONTEXT option | This note’s stance |
| --- | --- |
| Keep prefix/suffix | Owner **LEAN** toward this for gear |
| Quad Attribute classification | Remains **OPEN** — do not close; grill |
| Hybrid quad pools + P/S wrapper | Still valid **optional extension** (option E) |
| Peer research | Partially addressed here (LE drop-tier; D4 temper anti-pattern; PoE exclusivity patterns) |

---

## 7. FACT / INFERENCE / LEAN index

| Claim | Class |
| --- | --- |
| PoE rare gear explicits capped ~3 prefix + 3 suffix; magic 1+1 | **FACT** (wiki) |
| RePoE/PyPoE: domain, generation_type, groups, spawn_weights, required_level | **FACT** |
| Groups + ilvl create tier ladders; one mod per group | **FACT** |
| Enchantment / corruption / essence / influence / veiled exist beyond plain P/S rolls | **FACT** |
| D4 Temper: six categories; manuals; Blacksmith; Ancestral dual-temper; Greater Affixes drop-only 1.5× | **FACT** (Blizzard) |
| LE: T6–T7 drop-only; craft up to T5 | **FACT** (LE support) |
| CONTEXT affix classification still OPEN | **FACT** (repo) |
| Owner rejects D4 temper as model; admires PoE verbs/discovery/failure | **LEAN** (owner ADE narrowing) |
| Keep prefix/suffix + optional extension; tiers; drop-only innovation | **LEAN** (owner; SESSION_COMPILE soft) |
| Drop-only should be Catalogue flags, not temper categories | **INFERENCE** |
| Beyond-two-buckets ≈ extra slots / craft-meta / gated pools / unveil steps | **INFERENCE** |
| Attribute-quad not closed by this lean | **LEAN** + process rule |

---

## 8. Recommended grill questions (to lock — not answered here)

1. Gear: lock **prefix/suffix** as canon classification, or keep OPEN until Forge Terminal prototype?
2. Drop-only axis: **whole mods** exclusive, **top tiers** exclusive, or both?
3. Is **Imprint** the Mythoras “third slot family,” or a lock/meta craft verb only?
4. Do Attribute (Authority/Invictus/Animus/Order) appear as **facing slots**, **hidden pool tags**, or **neither** for v1?
5. Creature mods: confirm separate scheme (SESSION lean) vs same P/S grammar.
6. Tier numbering convention in ADE: **1 = best** (PoE community) vs **1 = weakest** (LE official)?

---

## 9. Sources

### Primary / near-primary

- [`CONTEXT.md`](CONTEXT.md) — Open Design Explorations → Modifier / Affix Classification; Economy **Imprint** / Forge Terminal.
- [`RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md`](RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md) — owner mods/crafting leans.
- [`SESSION_COMPILE_2026-08-11.md`](SESSION_COMPILE_2026-08-11.md) — soft “prefix/suffix for now.”
- [`RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md`](RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md) — Tags≠Catalogue; RePoE field map.
- [RePoE `mods.md`](https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/docs/mods.md)
- [PyPoE constants (`MOD_DOMAIN`, `MOD_GENERATION_TYPE`)](https://omegak2.net/poe/PyPoE/_modules/PyPoE/poe/constants.html)
- [PyPoE `sim.mods`](https://omegak2.net/poe/PyPoE/_modules/PyPoE/poe/sim/mods.html)
- [Path of Exile Wiki (Fandom) — Modifiers](https://pathofexile.fandom.com/wiki/Modifiers)
- [Blizzard — Season 4: Loot Reborn](https://news.blizzard.com/en-us/article/24077223/galvanize-your-legend-in-season-4-loot-reborn)
- [Last Epoch Support — Affixes](https://support.lastepoch.com/hc/en-us/articles/46361996533147-Affixes)

### Secondary

- [Fandom — Fossil](https://pathofexile.fandom.com/wiki/Fossil) (exclusivity history / 3.10 changes)
- [Isayi9999/sift-public POE2_MOD_GROUPS_SPEC.md](https://github.com/Isayi9999/sift-public/blob/main/POE2_MOD_GROUPS_SPEC.md)

### Note on poewiki.net

Official PoE wiki pages for Mod / Affixes were intermittently bot-gated (Anubis) during this pass; Fandom Modifiers + RePoE/PyPoE used as primary substitutes. Prefer poewiki Cargo/`Template:Mod` when accessible for citation hardening.

---

*End of research note.*
