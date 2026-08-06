# PoE Skill System Research — Gems, Sockets, Links

> Wave 1 research (2026-07-19). Informs Mythoras skill redesign; does not lock Mythoras names or topologies.
> Companion: `SKILLS_REDESIGN_EXPLORATION.md`

---

## Executive verdict

PoE1’s skill system is strong because **skills are modular items**, **supports rewrite skill behaviour**, and **finite socket/link budgets force opportunity cost** — not because sockets live on gear. PoE2 kept modularity and support depth, but **moved the container off gear onto the skill gem** to fix upgrade friction and enable multi-skill kits. Owner preference for PoE1 free-flow sockets maps to Mythoras as: **keep allocation puzzles and link-like scarcity on the creature**, not on gear; **do not adopt PoE2’s gem-as-container / one-support-copy / soft colourless model as the primary inspiration**. Colour-as-bonus (not hard gate) already exists in Mythoras GDD (`DOC_v3` §11.8 / §12.3) — AllFlame’s “lesson” was rediscovery, not import.

---

## GDD cross-check (canon before analogues)

| Claim / temptation | Existing Mythoras canon | Cite | Implication for PoE analogues |
| --- | --- | --- | --- |
| Skills owned by player avatar | **Creature-local** Skill Cards / Frame / Supports / Breakthrough / Mana | `CONTEXT.md` ownership **#9**; ownership table; `DOC_v3` §10 opener | Do not copy “gems on character gear” ownership; creature is the skill host |
| Passive tree = skill container | Grid is **Technician-global** + slot-local subroutes | `CONTEXT.md` **#2** | PoE passive tree ≠ skill gem system; keep Grid separate from skill install |
| Socket colours hard-gate gems | Soft-fail: match = bonus; mismatch still works | `DOC_v3` §11.8 Soft-Fail; §12.3 Frequency Empowerment +15% | PoE1 hard RGB gate is **not-copy**; PoE2/3.29 colour-as-quality is **already ours** (vocab non-final) |
| Colour-as-reward is a PoE2/3.29 lesson | Already authored as Frequency Empowerment | `DOC_v3` §12.3; `PLAN_FEEDBACK` correction; AllFlame §5 contrast | Cite DOC_v3 first; AllFlame is confirmation, not origin |
| Resonance = socket colour bonus | **Resonance** = two-tier **Stream** system (locked) | `CONTEXT.md` Resonance row; `DOC_v3` §9.2 | DOC_v3 §11.8 calling colour-match a “Resonance bonus” is a **vocab collision** — rename colour bonus in redesign |
| STAB flat same-type bonus | **STAB removed**; Stream Alignment conditional | `CONTEXT.md` #10; type table; `DOC_v3` §9.2 | Do not smuggle PoE “elemental match” as always-on STAB |
| Links via gear sockets | Frame anchors + satellites; Link/Hue Agents | `DOC_v3` §11; `DOC_v5` §42.7 Link Agent | Prefer creature-topology links over gear-socket links |
| Multi-skill from gear socket count | Technician Level gates anchors/supports squad-wide | `DOC_v3` §11.3 table | Progression gate OK; ownership stays creature |
| Support depth = 6-link chase | Max 5 supports/slot (Legendary 6); depth-over-width | `DOC_v3` §11.3–11.4 | Keep “one deep skill vs many shallow” puzzle; drop gear dependency |
| Skills on gear sockets | **Dropped** this dump; gear sockets → modules | `PLAN_FEEDBACK` Drop list | Separate gear modules from skill install entirely |
| PoE2 skill table as north star | Owner dislikes PoE2 model; likes PoE1 free-flow | `PLAN_FEEDBACK` Wave 1; IDEA-024 | Study PoE2 for *why it exists*; do not copy as primary |
| External Skill Frame container | Reopened → **creature IS the container**; constellation may remain as shape | `PLAN_FEEDBACK` Reopened; IDEA-024 | PoE “item as socket board” → Mythoras “creature body/topology as board” |

**Internal GDD inconsistency (flag, do not silently “fix”):**
- `DOC_v3` §11.8: mismatched sockets “work at **reduced effectiveness**”
- `DOC_v3` §12.3: mismatched “**no penalty** — just no bonus”

Soft-fail *intent* (bonus-not-gate) is durable; the penalty clause needs grill resolution.

---

## 1. History & design intent (PoE1)

### 1.1 What gems were for

Skill gems turned combat verbs into **lootable, levelable, swappable items**. A character’s identity was not a fixed spell list — it was an inventory of actives + supports assembled under constraints. That decision (ExileCon / early design DNA, restated in PoE2 reboot talks) is the durable invent:

| Intent | Mechanism | Player experience |
| --- | --- | --- |
| Skills as items | Drop / quest / vendor gems | Chase, trade, level, corrupt |
| Behaviour rewriting | Support gems modify linked actives | Same skill name, different build |
| Opportunity cost | Finite sockets + links on gear | Deep one skill vs many shallow |
| Attribute theming | RGB socket colours ↔ Str/Dex/Int gems | Soft class fantasy without hard class locks |
| Gear as power *and* skill board | Best rares also need sockets/links | Dual loot fantasy; dual friction |

### 1.2 Why sockets lived on gear (original bet)

GGG’s original bet (Jonathan Rogers, ExileCon 2019 skill rant — as reported in contemporary coverage): attaching sockets/colours to items would create **more ways rares differ** and force tradeoffs between **good mods vs good sockets**. In practice they immediately softened that with Jeweller’s / Chromatic / Fusing currencies until the “mods vs sockets” purity was largely gone — leaving **bureaucracy** (currency sinks, Tabula Rasa bridging, gem-swap on gear change) as the lasting residue.

### 1.3 Links as the real scarcity

In PoE1, **links** (not colours alone) are the build-defining scarce resource for most of the campaign:

| Stage | Typical skill setup | What opens |
| --- | --- | --- |
| Early | 3L / 4L on body or weapon | One main skill + a few supports; utility often unlinked |
| Mid | 5L chase; second 4L | Clear skill + single-target fork, or clear + aura stack |
| Late | 6L body (or unique 6L) | One fully supported main skill; other skills remain underlinked |
| Parallel | Offhand / helm / gloves / boots sockets | Auras, CWDT, movement, curses — “support ecosystem” |

**Community pattern (high level):** most endgame characters run **one (sometimes two) fully linked damage skills** plus a constellation of **low-link utility** (auras, mobility, golems, triggers). The 6-link is emotional peak *and* design bottleneck — content DPS assumes high link count, which reinforces one-button clears.

### 1.4 Active vs support vs “third avenue” in PoE1

| Avenue | Role | Notes |
| --- | --- | --- |
| **Active skill gems** | What you press / what hits | Attack, spell, minion, totem, etc. |
| **Support gems** | How the active behaves | Must share a linked socket group |
| **De facto third** | Auras, curses, movement, triggers, banners | Still “active gems,” but often play as **persistent / reactive toolkit** competing for the same socket pool |

PoE1 does **not** formally need a third gem class — the third avenue emerges from **socket budget competition** between damage links and utility links. That emergent third is load-bearing for build identity.

---

## 2. PoE1 vs PoE2 — explicit differentiation

### 2.1 Side-by-side

| Axis | PoE1 | PoE2 (as shipped / evolved from reboot) | What each buys |
| --- | --- | --- | --- |
| **Skill container** | Gear sockets | Character skill slots; supports attach to the **skill gem** | PoE1: gear chase dual-use. PoE2: upgrade gear without rebuilding links |
| **Links** | Physical links between sockets | No links — supports socket into the skill | PoE1: fusing RNG drama. PoE2: remove fusing tax |
| **Colours** | RGB hard gate (until late PoE1 3.29 softens to bonus quality) | Effectively **colourless** skill sockets | PoE1: chromatic puzzle + attribute theme. PoE2: kill chromatic failure |
| **Support exclusivity** | Same support usable on multiple skills | Often **one copy of a support per character** | PoE1: parallel 6Ls if you can afford sockets. PoE2: force skill diversity / choice |
| **Support power** | Supports often raw “more damage” | Supports skewed toward **mechanical** change; damage moved elsewhere | Enables balancing multi-skill kits |
| **Multi-skill viability** | Weak — DPS assumes 6L main | Explicit goal: many skills usable | Changes combat pacing + skill design space |
| **Acquisition** | Specific gems + levels via XP | Uncut gems → choose skill/support | PoE2: reduce “wrong gem” dead ends |
| **Weapon sets / Spirit** | Mana reservation for auras | Spirit + weapon-set flex | Separates persistent buffs from main-skill sockets |

Repo baseline: `POE_RESEARCH.md` §1.7 and vocabulary rows (Gem / Link / Support / Spirit).

### 2.2 Why PoE2 exists (design problems PoE1 created)

From GGG statements + community distillation (ExileCon 2019 + later balance notes):

1. **Gear upgrade friction** — better rare with wrong sockets feels like a downgrade; Tabula culture.
2. **One-button meta** — content balanced around 6L damage → skills must clear *and* boss → design space collapses.
3. **Currency busywork** — jewellers/chromes/fusings as tax on experimentation.
4. **Desired combat shift** — PoE2 wants reactive, multi-verb kits; PoE1 gem economics fight that.

### 2.3 What PoE2 *loses* (why owner may prefer PoE1 free-flow)

| Loss | Why it hurts for a Mythoras-like fantasy |
| --- | --- |
| **Spatial allocation puzzle** | No more “do I steal sockets from auras for a second damage link?” on one board |
| **Item as skill stage** | Gear stops being a *skill instrument*; becomes pure stats (+ Spirit/weapon fantasy elsewhere) |
| **Link chase emotion** | 6-link drops / crafts are weaker fantasy when every skill can be fully supported |
| **Attribute colour literacy** | RGB as readable build language fades |
| **Scarcity-as-identity** | When every skill can be deep, depth must be reinvented (support uniqueness, Spirit, cooldowns) |

**Owner read (this dump):** likes PoE1 free-flow sockets; dislikes PoE2 model; drops blind PoE2 socket copy (`PLAN_FEEDBACK`). Translate: keep **scarce adjacency / depth-vs-width allocation on the creature**, discard **gear-as-skill-board** and **PoE2’s friction-removal bundle as north star**.

### 2.4 Late PoE1 (3.29) colour rewrite — not “PoE2-only”

AllFlame coverage (`CURSE_OF_THE_ALLFLAME_ANALYSIS.md` §5): base sockets no longer hard-gate colour; matching colour → extra quality. That is PoE1 catching up to soft-fail philosophy **Mythoras already drafted**. Do not treat colour-as-reward as a sequel exclusive.

---

## 3. Progression: when multi-skill setups open

### 3.1 PoE1 curve (schematic)

| Phase | Socket reality | Multi-skill state |
| --- | --- | --- |
| Act 1–3 | 3–4L main; scraps elsewhere | Main + movement + maybe one utility |
| Mid campaign | 4–5L; second 3–4L | Clear + ST / clear + aura |
| Maps | 5–6L + dedicated aura/CWDT gear | Full “kit,” still one damage king |
| Mirror / craft | Perfect colours + links | Experimentation unlocked *after* power |

Multi-skill **opens early as toys**, **matures late as supported secondaries**. The system never wants five equal 6Ls on a normal character.

### 3.2 PoE2 curve (schematic)

| Phase | Reality | Multi-skill state |
| --- | --- | --- |
| Early | Multiple skill slots; small support counts | Toolkit from the start |
| Mid | Jeweller tiers deepen each skill | Several mid-depth skills |
| Late | High support counts + Spirit budget | Intentionally multi-verb combat |

### 3.3 Mythoras already mapped a hybrid (`DOC_v3` §11.3)

| Technician Level | Anchors | Supports/slot | Reads as |
| --- | --- | --- | --- |
| 1–15 | 2 | 1–2 | PoE1 early: few skills, shallow |
| 15–45 | 3–4 | 2–4 | Expanding toolkit |
| 45–55+ | 5–6 | 4–5 | Endgame depth; still depth-biased |

Plus satellite dual-use (support **or** compact utility skill) recreates PoE1 socket-allocation without gear (`DOC_v3` §11.4). That is the keep-candidate for free-flow feel.

---

## 4. Active / support / is a third avenue necessary?

| Model | Description | Pros | Cons |
| --- | --- | --- | --- |
| **A. Two-class (PoE classic)** | Active + Support only | Clear rules; community literacy | Utility competes awkwardly with damage for same slots |
| **B. Two-class + emergent third** | Utility actives compete for satellites/anchors | PoE1’s actual lived experience; allocation puzzle | Players must learn opportunity cost |
| **C. Explicit third class** | e.g. Persistent / Trigger / Protocol modules | Readable; can budget separately | Extra UI + crafting surface; risk of orphan economy |
| **D. PoE2 Spirit split** | Persistents on separate resource | Clean multi-skill | Separate resource tax; Mythoras already has Mana + Command Charges + Lanes |

**Verdict for research (not a lock):** Mythoras does **not** need a third *gem taxonomy* if satellite dual-use + Command Deck + Warbanner/Inscription lanes already cover utility. A third avenue is justified only if it buys a **distinct fantasy + distinct scarcity** (e.g. Modules on gear; Instrument mid-layer dial) — see redesign doc. Do not invent a third just to rhyme with “active/support/aura.”

---

## 5. Why PoE’s skill system is considered uniquely strong

| Strength | Mechanism | Portable lesson (not copy) |
| --- | --- | --- |
| **Composable verbs** | Supports rewrite delivery (chain, convert, totemize) | Skill Cards + Support Cards as behaviour editors |
| **Itemized progression** | Gem levels, quality, corruption | Skill Card levels, Breakthrough, Gl!tch, Polarity |
| **Cross-system entanglement** | Tree ↔ gems ↔ gear ↔ ascendancy | Grid ↔ creature skills ↔ gear ↔ Principal |
| **Readable scarcity** | “How linked is this skill?” | Visible depth (cluster fullness) on creature |
| **Theorycraft surface** | PoB; infinite near-miss builds | Builder must expose Frame/Alignment/Resonance |
| **Chase emotion** | 6L, perfect chromes, +1 gems | Need *some* chase — not necessarily fusing RNG |

What is **not** uniquely strong: chromatic failure, gem-swap-on-equip, Tabula bridging. Those are accidents of the gear-container choice.

---

## 6. Community-emergent setup patterns (high level)

| Pattern | PoE1 shape | Design signal |
| --- | --- | --- |
| **Mainlink tyranny** | One 6L does 90% of kills | Avoid balancing all content to max-link only |
| **Aura / reservation stack** | Helm/body sockets for persistents | Separate persistent budget or accept satellite competition |
| **Trigger / CWDT shells** | Low-life / ward-break automation | Mythoras: future expansion only (`CONTEXT` #5) |
| **Tabula → real chest** | Temporary perfect links | Need a bridging fantasy that isn’t a white robe meme |
| **Skill gem as identity, gear as multiplier** | Players name builds by skill | Creature named by Breakthrough skill + species |
| **PoE2 support uniqueness** | One support copy forces kit planning | Optional Mythoras lever — conflicts with squad × creature copies |

---

## 7. Keep / reconsider / not-copy for Mythoras

### Keep (PoE strengths aligned with locks)

| Keep | Mythoras home |
| --- | --- |
| Skills as modular loot | Skill Cards (`DOC_v3` §10) |
| Supports as behaviour editors | Support Cards (`DOC_v3` §12) |
| Depth vs width opportunity cost | Anchors + satellites (`§11.4`) |
| Soft colour match as upside | Frequency Empowerment intent (`§12.3`) — **rename** |
| Leveling + signature investment | Levels + Breakthrough (`§10.2`) |
| Risky transform chase | Gl!tch |

### Reconsider (present in GDD or PoE; not locked final)

| Reconsider | Why |
| --- | --- |
| External “Skill Frame” as named container | Owner: creature **is** the container; constellation may stay as presentation |
| Alpha/Beta/Gamma/Delta Frequency names | Owner: to be removed; replacement idea unlogged (`PLAN_FEEDBACK`) |
| Hue/Link Agent as chromatic/fusing analogues | May over-PoE the creature craft loop; modules/soldering may absorb some verbs |
| Hard vs soft mismatch penalty | §11.8 vs §12.3 conflict |
| Calling colour bonus “Resonance” | Collides with locked Stream Resonance |
| Gear Ancient Params as Frame modifiers | Keep gear-as-modifier idea; drop socket-link metaphor (`IDEA-024` safer lane) |

### Not-copy

| Not-copy | Reason |
| --- | --- |
| Skills living in **gear** sockets | Ownership + dropped this dump |
| PoE2 skill-gem socket board as primary model | Owner dislike; flattens free-flow allocation |
| Hard RGB deny | Contradicts soft-fail intent already in DOC_v3 |
| Full jeweller/chrome/fuse bureaucracy stack | AllFlame do-not-import; Mythoras should own its craft verbs |
| Always-on STAB | Explicitly removed |
| Balancing the game as if every creature has one max-link only | Squad + Turn Program need multi-verb creatures earlier |

---

## 8. Designer / Systems / Pitfalls / Creative

### Designer
PoE’s romance is “I authored a skill.” Mythoras’s romance should be “I authored a **creature’s** skill constellation,” with the Technician as conductor (Grid, Command Deck, instrument), not as gem-board.

### Systems
Separate three scarcities that PoE mashed together:
1. **Install capacity** (how many skills / how deep) — creature topology + Technician Level gate  
2. **Behaviour editors** (supports) — creature-local  
3. **Gear power** — mods/modules, not skill links  

PoE2 separated (1–2) from gear well, then flattened (1)’s spatial puzzle. Mythoras should keep (1) spatial on the creature.

### Pitfalls
- Importing PoE2’s comfort package while claiming PoE1 depth  
- Double-taxing players with Frame craft **and** gear socket craft for skills  
- Letting “Resonance” mean three things (Stream T1/T2, colour match, Alignment)  
- Designing Skill Cards as if one Breakthrough skill clears all content (PoE mainlink trap × 5 creatures)

### Creative options (pointers only — explored in companion doc)
- Creature-as-PCB / constellation body  
- Gear **modules** with soldering vocabulary  
- Instrument as mid-layer dial (Runeseeker Call / Tuning Fork lineage)  
- Discoverable Alignment / type-team indicators (Pokémon literacy without STAB return)

---

## 9. Options matrix (PoE lesson → Mythoras stance)

| Option | Stance | Tradeoff |
| --- | --- | --- |
| **P1** Creature-topology free-flow (PoE1 allocation, not on gear) | **Strong default** given ownership + owner taste | Must author species topologies; UI complexity |
| **P2** Skill-item containers (PoE2 gem sockets) | Weak for Mythoras primary | Easy upgrades; loses free-flow; feels sequel-derived |
| **P3** Hybrid: creature topology + optional module deepeners on gear | Explore | Clarity risk if modules look like skill sockets |
| **P4** Full PoE1 gear sockets for skills | **Rejected** (drop list + ownership) | — |

---

## 10. Open questions for grill

1. Is soft-fail **bonus-only** (§12.3) or **mismatch penalty** (§11.8)?
2. What replaces Alpha–Delta naming while preserving match-as-bonus intent?
3. How much link-RNG (Link Agent) is wanted vs deterministic Bridge-style growth?
4. Should support uniqueness be per-creature, per-squad, or unlimited (PoE1-like)?
5. When should a creature’s second/third **deep** skill open — Technician Level only, or species topology too?

---

## Sources (repo + external)

- `POE_RESEARCH.md` §1.7, §2 (Gem/Link/Support), §3.1  
- `DOC_v3.md` §9–§12; `DOC_v5.md` §42.7  
- `CONTEXT.md` #2, #9, #10, Resonance, ownership table  
- `CURSE_OF_THE_ALLFLAME_ANALYSIS.md` §5–§7 (contrast)  
- `PLAN_FEEDBACK_RESEARCH_2026-07-19.md`; `IDEA_LOG` IDEA-004 / IDEA-024  
- ExileCon 2019 skill reboot reporting (Rogers: sockets-on-items as mistake; supports-into-skills goal)  
- PoE2 wiki “Differences from PoE1” (sockets on gems; no colours/links)
