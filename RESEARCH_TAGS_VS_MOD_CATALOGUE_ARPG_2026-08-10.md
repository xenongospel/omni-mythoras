# Tags vs Mod Catalogue — ARPG public patterns (GGG-first)

**Date:** 2026-08-10  
**Status:** Research note for Mythoras grill #2 follow-up. **Not canon.** Does not invent Mythoras mod schema or affix lists.  
**Audience:** ADE / Mods module (inner dictionary + PoB-like outer face).  
**Primary question:** How do GGG and peer ARPGs publicly structure **tags** vs **mod/affix catalogues**, and what is a **minimum useful** dictionary surface so ADE’s Tags|Catalogue pane is not empty theatre?

---

## Executive verdict

Industry practice (especially Path of Exile) treats **tags** and **mods** as related but **not the same table**. Tags are a short shared vocabulary hung on many systems; the mod catalogue is a large typed inventory of affix rows (id, domain, generation type, groups, stats, weights). Tags *index and gate* catalogue rows; they do not replace them. ADE should keep **two sibling faces under Mods**, seed Tags with locked CONTEXT vocabulary first, and put even a thin Catalogue (domains + a few fixture rows) beside it so the pane has real edit/inspect jobs.

---

## 1. Mythoras locks this research must respect

Cited from [`CONTEXT.md`](CONTEXT.md) (canonical vocabulary; do not invent answers where CONTEXT marks OPEN).

| Lock | CONTEXT locus | Implication for Tags / Catalogue |
| --- | --- | --- |
| **Channel → Stream → Tags** | Critical correction **#5** | Channel = Attribute scaling navigation + modifier/tag shorthand — **not** a defence schema. Tags sit *below* Channel/Stream in the damage architecture stack. |
| **Tag interaction layer** | Critical correction **#11** | Species/Origin-derived tags (examples: Winged, Draconic, Grounded, Aquatic) are a **third layer above the Stream type chart**. Public on creature profile. Separate from chart immunities. |
| **Origin → tags (tertiary)** | Critical correction **#12** | Origin feeds Bloodlines, Origin Affinity tags on Skill Cards, certain mods/affixes, Grid interactions. Tag assignment classes: universal / default tendency / exceptional species. |
| **Not types** | Pokémon transpose table | Channel, Attribute, Origin, Tag, Domain are **not** Streams/types. |
| **Affix classification OPEN** | Open Design Explorations → Modifier / Affix Classification System | Prefix/suffix vs **quad Attribute pools (Authority, Invictus, Animus, Order)** vs hybrid — **unresolved**. Do not pick one in ADE schema yet. |
| **Species Mod implicits** | Pokémon transpose + combat vocabulary | Ability-analogue called out as **Species Mod implicits** / Mythic authored mechanics — catalogue domains should anticipate creature implicits separately from item explicits. |

**FACT (repo):** ADE stage-0 already names the sibling faces: `apps/mythoras-ade-prototype/src/App.tsx` — Mods panel with Tags | Mod Catalogue subnav, both empty stubs (“no schema yet”).

**DOC caution:** Older design docs (e.g. `DOC_v3.md` §9.8 Creature Tags, §10.5 Skill Card Tags) sketch tag taxonomies; where they conflict with CONTEXT (e.g. “Wing” vs locked **Winged**), **CONTEXT wins**. Those DOC sections are useful as *historical design intent*, not locked vocabulary.

---

## 2. Industry split — Tags ≠ Mod lines

### 2.1 Two different jobs

| Concept | Job | Typical size | What hangs on it |
| --- | --- | --- | --- |
| **Tags / keywords** | Short shared vocabulary | Tens–low hundreds | Filtering, eligibility, crafting weight manipulation, skill classification, UI chips |
| **Mod / affix catalogue** | Typed inventory of rollable (or granted) modifiers | Thousands of rows | Stat grants, tiers, ilvl gates, spawn pools, exclusion groups, domains |

**FACT:** In PoE data exports, item tags and gem tags are **separate files** from the mod catalogue (`tags.json` / `gem_tags.json` vs `mods.json`) — [RePoE README](https://github.com/brather1ng/RePoE).

### 2.2 PoE’s *multiple* tag vocabularies (easy to conflate)

PoE publicly/dat-mined practice uses **more than one tag space**:

1. **Item / base tags** — on bases (`base_items.json` → `tags`); matched by mod **spawn_weights** / **generation_weights** (first matching tag wins).  
   Source: [RePoE `mods.md`](https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/docs/mods.md), [PyPoE `get_spawn_weight`](https://omegak2.net/poe/PyPoE/_modules/PyPoE/poe/sim/mods.html).
2. **Mod implicit / crafting tags** — on mods themselves (`implicit_tags`, `mod_types` tags used by fossils/harvest). Descriptive for crafting manipulation; **not** the primary coexistence rule.  
   Source: RePoE `mods.md` + `mod_types.md`; community restatement in [POE2_MOD_GROUPS_SPEC](https://github.com/Isayi9999/sift-public/blob/main/POE2_MOD_GROUPS_SPEC.md) (Rule 5: tags do not enforce exclusion).
3. **Gem tags (keywords)** — player-visible chips on skill/support gems; used for categorization and for mods like “+1 to Socketed Fire Gems”; **do not alone define support-gem link legality**.  
   Source: [PoEDB Gem tag](https://poedb.tw/us/Gem_tag); [poewiki Support gem](https://www.poewiki.net/wiki/Support_gem) (“Gem tags do not determine the supportability”).
4. **Active skill types** — separate typed list (`active_skill_types.json` in RePoE) used for deeper skill classification beyond display tags.

**INFERENCE for Mythoras:** CONTEXT already implies at least two tag *consumers* (creature profile tags; Skill Card tags / Origin Affinity). ADE’s Tags face should allow **namespaces or categories** (Creature / Skill / Origin / …) rather than one flat bag — still one *vocabulary module*, not one undifferentiated list merged into Catalogue rows.

### 2.3 What a “mod line” is (PoE)

A catalogue row (RePoE `mods.json`) carries, among other fields:

- **id** (stable internal key)
- **name** (display / affix name; may be empty for non-magic-facing mods)
- **required_level**
- **stats[]** `{id, min, max}` → resolved via `stats.json` + `stat_translations.json`
- **domain** (where the mod lives — item, flask, monster, area, …)
- **generation_type** (prefix, suffix, unique/granted, corrupted, enchantment, …)
- **groups** (mutual exclusion — one mod per group on an entity)
- **type** → `mod_types.json` (finer grading; fossil/vendor metadata)
- **spawn_weights[]** / **generation_weights[]** (tag → weight; ordered first-match)
- **adds_tags[]** (mod can *inject* tags onto the item for later rolls)
- **implicit_tags[]** (crafting filters)

Source: [RePoE docs/mods.md](https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/docs/mods.md).

**FACT:** Spawn eligibility is **tag-driven against the host’s tags**, not a free-text “applies to bows” string alone — PyPoE `generate_spawnable_mod_list(domain, generation_type, level, tags=…)`.

---

## 3. GGG / Path of Exile — dictionary anatomy

### 3.1 Domains (catalogue partitions)

PyPoE documents `MOD_DOMAIN` as the primary partition of `Mods.dat` ([PyPoE constants](https://omegak2.net/poe/PyPoE/_modules/PyPoE/poe/constants.html)):

| Domain (enum) | Public meaning (PyPoE docstrings) |
| --- | --- |
| ITEM | Generic item domain |
| FLASK | Flasks |
| MONSTER | Monster mods |
| CHEST | Strongboxes / chests |
| AREA | Zones / areas |
| CRAFTED | Crafted (legacy MASTER) |
| MISC | Jewels, corruptions, limits, misc |
| ATLAS | Sextant / atlas |
| ABYSS_JEWEL | Abyss jewels |
| MAP_DEVICE | Map device implicits |
| DELVE / DELVE_AREA | Delve item / area mods |
| … | Additional league/device domains |

**INFERENCE for Mythoras Catalogue domains (illustrative partitions, not schema):** Creature Implicits · Creature Instance Mods · Skill/Move Mods · Gear Explicits · Area/Warbanner — mirroring “one catalogue, many domains,” not separate ADE top-level modules.

### 3.2 Generation types (how a mod enters the world)

From the same PyPoE `MOD_GENERATION_TYPE` docs: PREFIX, SUFFIX, UNIQUE (directly granted / innate), NEMESIS, CORRUPTED, BLOODLINES, TORMENT, TEMPEST, TALISMAN, ENCHANTMENT, ESSENCE, BESTIARY, DELVE_AREA, …

**FACT (CONTEXT):** Mythoras may replace prefix/suffix with Attribute-aligned quad pools — **OPEN**. Generation-type still maps to a useful *authoring* concept: rollable explicit vs granted implicit vs encounter-only vs craft-forced.

### 3.3 Groups vs tags (exclusion vs indexing)

| Mechanism | Restricts coexistence? | Role |
| --- | --- | --- |
| **Mod group / family** | **Yes** — one per group per entity | Tier ladder of the “same” affix; hybrid vs pure as separate groups |
| **Prefix/suffix (or slot) caps** | **Yes** | Structural slot budget |
| **ilvl / required_level** | **Yes** | Tier gating |
| **Spawn weight vs host tags** | **Yes** for eligibility (weight 0 = cannot appear) | Pool membership |
| **Mod tags / gem tags** | **No** (coexistence); yes for crafting/filter targeting | Indexing & manipulation |

Sources: RePoE `mods.md` (groups); [POE2_MOD_GROUPS_SPEC](https://github.com/Isayi9999/sift-public/blob/main/POE2_MOD_GROUPS_SPEC.md) (community technical restatement; verify group names against live data).

### 3.4 Schema / mining toolchain (studio → public)

| Layer | What it is | Source |
| --- | --- | --- |
| Game `.dat` | Authoritative binary tables (`Mods.dat`, `Tags.dat`, …) | GGG client data |
| **poe-tool-dev/dat-schema** | Community source-of-truth column schema for dats | [github.com/poe-tool-dev/dat-schema](https://github.com/poe-tool-dev/dat-schema) |
| **PyPoE** | Parser + sim helpers (`get_spawn_weight`, exporters) | [Project-Path-of-Exile-Wiki/PyPoE](https://github.com/Project-Path-of-Exile-Wiki/PyPoE); [docs](https://omegak2.net/poe/PyPoE/) |
| **RePoE** | JSON projection for tools (`mods`, `tags`, `gem_tags`, `base_items`, `fossils`, …) | [brather1ng/RePoE](https://github.com/brather1ng/RePoE); fork [repoe-fork/repoe](https://github.com/repoe-fork/repoe) |
| Wiki Cargo / Template:Mod | Human-readable mod rows (id, domain, generation_type, spawn_weight_tag/value, tags, …) | [Template:Mod/doc](https://www.poewiki.net/wiki/Template:Mod/doc) (wiki intermittently bot-gated) |
| PoEDB | Browse-facing dictionary (weights, gem tags ↔ item mods) | [poedb.tw Gem tag](https://poedb.tw/us/Gem_tag) |

**GGG public patch notes** announce *player-facing* affix/pool changes; they do not publish the full dat schema. The “inner dictionary” is recovered by the community toolchain above.

---

## 4. Path of Building / community DBs — the outer face

### 4.1 What players see of the studio dictionary

| Surface | What it mirrors | Gap vs studio |
| --- | --- | --- |
| **PoEDB / craftofexile / poe2db** | Mod pools by base, weights, groups, tiers | Presentation + craft simulation; still dat-derived |
| **RePoE JSON** | Near-complete structured export for tools | Not a UI; omits some domains unless whitelisted |
| **Path of Building** | Calc-oriented projection: parsed mod lists, gem data, uniques (often hand-maintained), tree JSON | Converts *stat text* → internal `mod(Name, Type, Value, …)` with ModFlags / KeywordFlags — [PoB modSyntax.md](https://github.com/PathOfBuildingCommunity/PathOfBuilding/blob/dev/docs/modSyntax.md) |
| **PoB `src/Data/Mod*.lua`** | Split files by domain/generation (Explicit, Flask, Jewel, Map, Corrupted, Eldritch, …) | Outer face organizes by *how players meet the mod*, not one giant grid |

**FACT:** PoB export scripts write `weightKey` / `weightVal` from dat spawn tags (see PoE2 PoB `Export/Scripts/mods.lua` pattern in community trees) — the outer face still carries **tag↔weight** pairs, not only display strings.

**INFERENCE (ADE “GGG-like inner + PoB-like outer”):**

- **Inner (Tags + Catalogue):** stable ids, domains, groups, stats, weight tables, tag refs — authorable, seedable, simmable.
- **Outer (later / player tools):** human strings, filters by slot/domain, craft calculators, build calc flags. Do not require outer polish for stage-0 usefulness.

---

## 5. Peer ARPGs (public docs / DBs)

### 5.1 Last Epoch

**FACT (official support):** Affixes are equipment modifiers beyond implicits; **7 tiers** (T1 lowest–T7 highest); crafting can create T1–T5 only; T6–T7 drop-only; prefix/suffix with **up to 2+2**; values re-rollable within tier ([Last Epoch Support — Affixes](https://support.lastepoch.com/hc/en-us/articles/46361996533147-Affixes)).

**Community DB face:** [lastepochtools.com](https://www.lastepochtools.com/db/prefixes) lists name, applies-to, class, level, modifiers, **weight (rarity)** — a catalogue browser without PoE-style public tag→weight maps.

**INFERENCE:** LE emphasizes **tier ladder + weight + applies-to** as the useful outer dictionary; keyword tags are less central in public docs than in PoE.

### 5.2 Grim Dawn

**Community DB:** [grimtools.com/db](https://www.grimtools.com/db/) organizes **prefixes/suffixes by item category**; tooling like [gddb](https://github.com/gregates/gddb) queries Crate `.dbr` records / localization tags.

**INFERENCE:** Strong prefix/suffix catalogue + loot-table resolution; “tags” in tooling often mean **localization/record keys**, not PoE-style multi-system keyword vocabulary.

### 5.3 Diablo IV

**FACT (Blizzard):** Season 4 Loot Reborn reduced drop affix counts, pushed complexity into **Tempering** (manuals in categories: Weapons, Offensive, Defensive, Mobility, Utility, Resource) and **Masterworking**; **Greater Affixes** as 1.5× variants ([Blizzard — Loot Reborn](https://news.blizzard.com/en-us/article/24077223/galvanize-your-legend-in-season-4-loot-reborn)).

**INFERENCE:** Affix *categories* here behave more like **craft-pool partitions** than creature/skill keywords. Closer to Catalogue domain/filter UX than to CONTEXT’s Winged/Draconic tag layer.

### 5.4 Diablo II (historical baseline)

**FACT (CONTEXT already states):** Prefix/suffix predates PoE; PoE deepened weights, influences, craft benches. Useful only as ancestry for “two-slot grammar,” not as Mythoras’s tag architecture.

---

## 6. Mapping to Mythoras ADE Mods module

### 6.1 Keep the coin — do not merge concepts

Owner framing (grill #2 / ADE prototype): Tags and Mod Catalogue are **two sides of one coin under Mods**.

| Face | Owns | Must not become |
| --- | --- | --- |
| **Tags** | Short shared vocabulary; who has it; what systems read it | A dump of every affix line |
| **Mod Catalogue** | Typed inventory of mod rows across domains | A second copy of the tag list as “mods” |

**Cross-links (relationship without merge):**

- Catalogue rows **reference** tags (eligibility, conditional effects, crafting filters).
- Some rows may **grant/add** tags (PoE `adds_tags` pattern).
- Tags UI shows **backlinks**: which catalogue rows / skills / species cite this tag.
- Selecting a Catalogue domain filter does not hide the Tags face; selecting a Tag can *filter* Catalogue.

### 6.2 Minimum useful dictionary surface (anti-theatre)

Empty Tags|Catalogue stubs feel like a meaningless dashboard because neither face has an **authoring job**. Minimum useful = enough structure to edit and inspect *something real*, without locking OPEN affix classification.

#### Tags face — author first (thin but real)

Seed from **CONTEXT-locked examples** only (do not invent a full roster as canon):

| Field (minimum) | Why |
| --- | --- |
| `id` (stable) | Cross-refs from catalogue / creatures / skills |
| Display name | Profile chips |
| Category / namespace | Creature · Origin · Skill · (future) |
| Short description | “What hangs on this” in one sentence |
| Visibility | e.g. creature profile public (CONTEXT #11) |
| Example consumers (text or links) | Type-interaction notes, Skill Affinity, gear gates — even stub links |

**Starter seed set (CONTEXT examples, not a closed list):** Winged, Draconic, Grounded, Aquatic + note that Origin Affinity / skill tags exist under Channel→Stream→Tags without listing a fake complete skill-tag enum.

**Done when:** An author can add a tag, see it on a creature fixture, and see “referenced by / references” placeholders — even if interaction rules are TBD.

#### Catalogue face — thin multi-domain skeleton

Do **not** invent Mythoras’s full affix list. Do show the **shape** GGG uses:

| Field (minimum) | Notes |
| --- | --- |
| `id` | Stable |
| Display / affix name | May be empty for granted-only |
| **Domain** | Enum stub: CreatureImplicit · CreatureMod · SkillMod · GearExplicit · Area (names provisional) |
| Generation / slot class | **OPEN** — show as nullable: `prefix\|suffix\|quad:<Attribute>\|granted\|encounter` with UI copy that classification is unresolved ([CONTEXT.md](CONTEXT.md) Open Design Explorations) |
| Group / family | Exclusion key (even if only one tier exists yet) |
| Stats (1–N) | Stat id + min/max or fixed |
| Host tags / weights | Ordered tag→weight list (can be empty for granted mods) |
| Required level / tier | Optional stub |

**Done when:** Catalogue can list **a handful of fixture rows** spanning ≥2 domains (e.g. one Species Mod implicit fixture + one skill-mod fixture + one gear explicit fixture), filterable by domain and by tag backlink — **clearly labeled fixtures / research placeholders**, not canon balance.

#### Shared chrome (makes the coin readable)

1. Mods header: “Shared family — Tags index · Catalogue inventory.”
2. Subnav Tags | Catalogue (already in ADE prototype).
3. Persistent **domain chips** on Catalogue; **namespace chips** on Tags.
4. One **inspect drawer**: selected Tag *or* Mod row with cross-links.
5. Explicit OPEN callout: Quad Attribute pools (Authority, Invictus, Animus, Order) unresolved — do not fake final slot UI.

### 6.3 What *not* to build yet

- Full weighted endgame gear modpool (blocked on affix classification grill).
- PoB-grade calc parser.
- Merged “everything is a tag” or “tags are just mod categories” model.
- Invented complete creature/skill tag rosters beyond CONTEXT examples.

---

## 7. FACT vs INFERENCE (quick index)

| Claim | Class |
| --- | --- |
| RePoE separates `tags.json`, `gem_tags.json`, `mods.json` | **FACT** |
| Mod spawn weight = ordered tag match; 0 = ineligible | **FACT** (RePoE + PyPoE) |
| Mod groups enforce one-of coexistence; mod tags do not | **FACT** (RePoE groups; community PoE2 spec aligns) |
| Gem tags ≠ support link rules | **FACT** (wiki/PoEDB statements) |
| PyPoE MOD_DOMAIN / MOD_GENERATION_TYPE enumerate catalogue partitions | **FACT** |
| LE official affix tier/prefix-suffix rules | **FACT** (support article) |
| D4 Temper categories + Greater Affixes | **FACT** (Blizzard) |
| Mythoras should mirror PoE’s *two-table* Tags vs Catalogue under Mods | **INFERENCE** (fits grill + ADE stub + CONTEXT) |
| ADE should author Tags vocabulary before deep Catalogue balance | **INFERENCE** (anti-theatre; CONTEXT tags already locked enough to seed) |
| Catalogue domains ≈ Creature / Skill / Gear / Area | **INFERENCE** (from PoE domains + Mythoras systems; not locked schema) |
| Quad Attribute affix pools | **OPEN** (CONTEXT) — show as unresolved in UI |

---

## 8. Sources

### Primary / near-primary

- [`CONTEXT.md`](CONTEXT.md) — Channel→Stream→Tags; tag layer; Origin; OPEN affix classification (Authority, Invictus, Animus, Order).
- [RePoE](https://github.com/brather1ng/RePoE) — README + [`RePoE/docs/mods.md`](https://raw.githubusercontent.com/brather1ng/RePoE/master/RePoE/docs/mods.md), `tags.md`, `gem_tags.md`, `mod_types.md`.
- [PyPoE constants / sim.mods](https://omegak2.net/poe/PyPoE/_modules/PyPoE/poe/constants.html) — `MOD_DOMAIN`, `MOD_GENERATION_TYPE`, spawn weight helpers.
- [poe-tool-dev/dat-schema](https://github.com/poe-tool-dev/dat-schema) — dat column schema source-of-truth for community tooling.
- [PoEDB Gem tag](https://poedb.tw/us/Gem_tag) — gem tags + item mods that key off them + weight tags.
- [poewiki Support gem](https://www.poewiki.net/wiki/Support_gem) — gem tags do not determine supportability.
- [poewiki Template:Mod/doc](https://www.poewiki.net/wiki/Template:Mod/doc) — Cargo fields (domain, generation_type, spawn_weights, tags).
- [Path of Building modSyntax.md](https://github.com/PathOfBuildingCommunity/PathOfBuilding/blob/dev/docs/modSyntax.md) — outer calc projection.
- [Last Epoch Support — Affixes](https://support.lastepoch.com/hc/en-us/articles/46361996533147-Affixes).
- [Blizzard — Diablo IV Season 4 Loot Reborn](https://news.blizzard.com/en-us/article/24077223/galvanize-your-legend-in-season-4-loot-reborn).

### Secondary / community technical

- [Isayi9999/sift-public POE2_MOD_GROUPS_SPEC.md](https://github.com/Isayi9999/sift-public/blob/main/POE2_MOD_GROUPS_SPEC.md) — clear restatement of groups vs tags vs spawn weights (verify names against live dats).
- [grimtools](https://www.grimtools.com/db/), [lastepochtools](https://www.lastepochtools.com/db/prefixes), [gddb](https://github.com/gregates/gddb).

### Repo evidence

- `apps/mythoras-ade-prototype/src/App.tsx` — Mods → Tags | Mod Catalogue empty stubs.
- Historical (non-locking) tag sketches: `DOC_v3.md` §§9.8, 10.5.

---

## 9. Recommended next grill questions (not answered here)

1. Single tag vocabulary with namespaces, or separate CreatureTags vs SkillTags tables under the Tags face?
2. Does Mythoras need PoE-style **spawn_weights on tags**, or only boolean eligibility + separate rarity weights?
3. Affix classification: keep prefix/suffix, commit to quad Attribute pools, or hybrid ([CONTEXT.md](CONTEXT.md) Open Design Explorations)?
4. Which Catalogue **domain** ships first for a real sim: Species Mod implicits or gear explicits?

---

*End of research note.*
