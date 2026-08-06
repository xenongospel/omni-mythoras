# Skills Redesign Exploration — Creature-as-Container

> Wave 1 exploration (2026-07-19). Options only — **do not lock names**. Companion: `POE_SKILL_SYSTEM_RESEARCH.md`.
> Owner direction dump: `PLAN_FEEDBACK_RESEARCH_2026-07-19.md`.

---

## Executive verdict

Drop the external Skill Frame *object* as the mental model: the **creature is the skill container**. Keep constellation / species topology as a **presentation + authored graph** candidate. Split gear away from skills: gear sockets become **modules** (rollable inner systems; soldering vocabulary welcome). Preserve PoE1-style **depth-vs-width allocation** on the creature; do not adopt PoE2’s gem-socket board. Affinity/Frequency Alpha–Delta naming is **non-final**; soft-fail **bonus-not-gate** intent is durable and **already in DOC_v3** (AllFlame rediscovered it). Resonance stays the locked **two-tier Stream** system — do not overload that word onto colour-match. Instrument = Runeseeker Call Unique (Tuning Fork)–style mid-layer dial between Technician and creature, not a Pokéball.

**Top redesign options (see §8):**  
1. **Embodied Constellation** — creature body *is* the network; satellites dual-use  
2. **Constellation + Gear Modules** — skills on creature; modules solder onto gear  
3. **Tri-Avenue Kit** — Active / Support / explicit third (Persistent or Protocol) with separate budget  

---

## GDD cross-check (mandatory — cite before inventing)

| Topic | Canon today | Cite | Redesign must |
| --- | --- | --- | --- |
| Skill ownership | Creature-local; Technician Level gates capacity only | `CONTEXT` **#9**; ownership table | Not move skills onto Technician / wand / gear |
| Grid ownership | Technician-global + slot-local subroutes | `CONTEXT` **#2** | Not turn constellation into a second Grid |
| Skill Card / Frame / Support terms | Defined; Frame = intrinsic network | `CONTEXT` Progression table; `DOC_v3` §10–§12 | May retire “Frame” *name*; keep creature-local install rules |
| Stream Resonance | Tier 1 baseline stacks; Tier 2 named via **Grid** investment | `CONTEXT` Resonance; `DOC_v3` §9.2 | Not relocate Tier 2 into skill sockets |
| STAB | **Removed**; Stream Alignment conditional (+ modest base) | `CONTEXT` #10; `DOC_v3` §9.2; IDEA-024 | Discoverable indicators OK; always-on STAB not |
| Soft-fail colour | Match → +15% empowerment; mismatch allowed | `DOC_v3` §11.8 / §12.3 | Keep intent; fix §11.8 vs §12.3 penalty clash; rename Frequency |
| Frequency tags | Alpha–Delta ↔ attribute colours | `DOC_v3` §10.5 | Treat as **non-final** per owner (`PLAN_FEEDBACK`) |
| Origin Affinity tags | Scalesbourne / Martial / etc. on Skill Cards | `DOC_v3` §10.5; `CONTEXT` #12 | Separate from Frequency; do not delete Origin axis casually |
| Satellite dual-use | Support **or** compact utility skill | `DOC_v3` §11.4 | Strong keep for free-flow PoE1 feel |
| Frame craft Agents | Sync / Link / Hue / Bridge / Lock / Infuse / Seed / Imprint / G!itch | `DOC_v3` §11.7 | Reopen which verbs survive module split |
| Link / Sever Agents (economy) | DOC_v5 Skill Card Agent pool | `DOC_v5` §42.7 | Align with creature-container rewrite |
| Gear loadout | 10 slots × 5 creatures; Ancient Params can modify Frame | `DOC_v5` gear; `DOC_v3` §11.9 | Modules replace “skills on gear”; Ancient Params → module/solder fiction |
| Command Deck | Technician tactical cards | `DOC_v3` §13; `CONTEXT` | Remains Technician avenue — not a creature skill class |
| Wand / instrument | Runeseeker Call / Tuning Fork direction; dial fiction | `SESSION_DECISIONS_2026-07-15`; IDEA-023; `OD_004` | Mid-layer bond/tune — not skill inventory |
| IDEA-004 | Physical imaginability; avoid lattice; cards OK for MVP | `IDEA_LOG` IDEA-004 | Constellation OK if players can *see* it on the creature |
| IDEA-024 | Constellation rethink exploratory; PoE2 colour buffs already taken | `IDEA_LOG` IDEA-024 | Differentiate soft-fail *presentation*, not reinvent bonus-not-gate |
| Sold / drop this dump | Colour bonus-not-gate sold; PoE2 sockets drop; skills-on-gear drop | `PLAN_FEEDBACK` | Bound the option space |
| AllFlame miss | Treated colour-as-reward as PoE lesson | `CURSE_OF_THE_ALLFLAME` §5; `PLAN_FEEDBACK` | Correct: DOC_v3 owned it first |

**Contradiction ledger**

| ID | Clash | Resolution posture |
| --- | --- | --- |
| C1 | §11.8 “reduced effectiveness” vs §12.3 “no penalty” | Grill: pick bonus-only (preferred by plan language) or mild mismatch tax |
| C2 | Colour-match called “Resonance bonus” vs locked Stream Resonance | Rename colour bonus (e.g. Harmonic / Attune / Solder-match — **names unlocked**) |
| C3 | “Skill Frame” as external PCB object vs owner “creature IS container” | Presentation merge; update CONTEXT term after grill |
| C4 | IDEA-024 “PoE2 already took colour compensatory buffs — differentiate” vs DOC_v3 already having +15% | Differentiate **fiction/UI/craft loop**, not the bonus-not-gate rule |
| C5 | Hue Agent as chromatic analogue vs desire to escape PoE socket bureaucracy | Soft-fail may need less Agent spam if match is pure upside |

---

## 1. Designer lens

### Fantasy shift
- **Before:** Technician configures an abstract Frame hanging off a creature.  
- **After:** Looking at a creature *is* looking at its skill architecture — scars, ley-lines, constellation points on body/silhouette.  
- Technician fantasy moves to **instrument + Grid + Command**: call, tune, amplify — not “hold the gem board.”

### Brand / literacy
- Pokémon players read **moves on the creature**.  
- PoE players read **supports on the skill**.  
- Mythoras merger: **moves live on the creature; supports rewrite those moves; Grid rewrites the laws.**

### Emotional beats to protect
1. First install of a Skill Card onto a creature (physical, imaginable — IDEA-004).  
2. First time depth beats width (or vice versa) as a *choice*.  
3. Breakthrough as signature move.  
4. Instrument call/tune as relationship, not storage.

---

## 2. Systems lens — ownership seams

```
Technician                Slot                     Creature
─────────────             ────                     ────────
Grid global route         Slot-local subroute      Skill installs (anchors)
Command Deck              Who stands here          Support links / satellites
Lanes / Warbanner auth    —                        Breakthrough, Mana
Instrument (tune/call)    —                        Species topology / constellation
Gear? → MODULES only                               Gear items equipped locally
```

**Hard rule:** Instrument and Modules may *modify* creature skill expression; they must not become the Skill Card inventory.

### Progression without PoE2 sockets

| Lever | PoE1 analogue | Mythoras candidate |
| --- | --- | --- |
| More skills | More gear sockets | Technician Level unlocks anchors; species ceiling |
| Deeper skill | More links on one group | Satellite count / soldered support capacity |
| Colour puzzle | Chromatics | Soft-fail match bonus (renamed); optional species hue bias |
| Utility vs damage | Steal sockets | Satellite dual-use; optional explicit third avenue |
| Bridging “Tabula” | White 6L chest | Temporary **field solder** / Contract rite / Unique instrument effect — not a gear skill board |

### Active / Support / optional third

| Avenue | Owns | Scarcity | Notes |
| --- | --- | --- | --- |
| **Active** | Combat verbs on creature | Anchor count | Skill Cards |
| **Support** | Behaviour editors | Satellites / link budget | Support Cards; Speed cost already in DOC_v2 |
| **Third candidates** | See matrix below | Must be *different* scarcity | Only if dual-use + Command Deck insufficient |

**Third-avenue candidates (not locked)**

| Candidate | Fantasy | Scarcity hook | Collision risk |
| --- | --- | --- | --- |
| **Persistent / Field** | Auras, auras-like Stream fields | Separate “presence” budget | Lanes / Warbanner / Mana |
| **Protocol / Trigger** | Conditional auto skills | Expansion layer only | `CONTEXT` #5 future |
| **Modules (gear)** | Rollable inner systems | Gear slot + solder quality | Must not hold Actives |
| **Instrument rites** | Mid-layer tune profiles | Per-Technician instrument state | Ownership #9 if it stores skills |

**Recommendation posture:** Start with **two avenues + dual-use satellites**; add an explicit third only after a concrete hole appears in squad Turn Program kits.

---

## 3. Pitfalls

| Pitfall | Why it bites |
| --- | --- |
| **Frame rename only** | Cosmetic “constellation” with same PoE chrome/fuse loop — owner wants container rethink |
| **STAB smuggle** | Discoverable type tips → always-on 1.5× returns | Keep Alignment conditional |
| **Resonance overload** | Colour, Stream T1, Stream T2, Alignment all called Resonance | Split vocabulary |
| **Modules that are gems** | Gear sockets that install Skill Cards | Violates drop list + ownership |
| **PoE2 comfort pack** | Colourless + free full supports on every skill | Kills free-flow identity owner wants |
| **5× Frame micromanagement** | 5 creatures × deep craft = second Grid | Technician Level gates + species blueprints + good defaults |
| **Wand-as-Pokéball** | Instrument stores creatures | Rejected direction; bond/tune instead |
| **Ignoring Origin Affinity** | Frequency rewrite deletes Origin tags | Origin remains heritage axis (`CONTEXT` #12) |
| **AllFlame-only colour lesson** | Miss that DOC_v3 already soft-fails | Cite GDD first |

---

## 4. Creative options (Mythoras-original emergents)

PoE×Pokémon merger is the chassis; these are **original emergents** worth exploring:

1. **Species silhouette literacy** — scouting shows constellation silhouette; capture chooses topology, not IVs (`DOC_v3` §11.5–11.6 already).  
2. **Team chord indicators** — UI shows squad Stream “chord” (coverage / Resonance readiness) as discoverable exploration reward, not a tutorial dump.  
3. **Solder seams** — visible joints between support and skill; match-as-bonus reads as clean solder vs cold joint (motherboard theme without naming lock).  
4. **Instrument sympathetic vibration** — Tuning Fork shape varies for named NPCs; player fork prongs/colours as signature (`SESSION_DECISIONS`). Mid-layer dial indexes Field/Bench rings — tellurion nested relationships, not inventory.  
5. **Breakthrough as constellation nova** — one skill becomes the creature’s navigational star; others remain satellites thematically.  
6. **Soft-fail as pedagogy** — early game teaches “matched solder sings” via VFX before numbers; never hard-locks a support out.  
7. **Module ecosystems** — a glove module that *warps satellite capacity* (Ancient Params successor) vs a module that adds flat stats — two module families.  
8. **Off-stream pride** — keep DOC_v3 rule: off-stream viable; Alignment is invite, not police.

### Pokémon survey (light — for redesign only)

| Pokémon piece | Mythoras mapping | Caution |
| --- | --- | --- |
| Level-up / TM / egg moves | Skill Card loot + install | No natural moves (canon) |
| 4-move limit | Anchor count curve | Mythoras wants deeper support layer PoE lacks in Pokémon |
| STAB | Stream Alignment conditional | Do not restore flat STAB |
| Type chart | Stream effectiveness TBD | Grill separately |
| Abilities | Species Mods / Principals | Don’t dump into Skill Cards |
| Held items | Gear / modules | Modules ≠ moves |

### Other ARPG containers (only if distinct)

| Game | Container | Useful contrast |
| --- | --- | --- |
| Last Epoch | Skills on class tree + specialization | Tree-as-skill — would collide with Grid; avoid |
| Diablo IV | Skill points on character | Avatar-owned — anti-ownership #9 |
| Grim Dawn | Skill + constellation devotion | Dual boards — Mythoras already has Grid + creature skills; don’t add a third global board |

---

## 5. Affinity / Frequency handling recommendation

### Durable vs disposable

| Keep (intent) | Drop / reopen (vocab & packaging) |
| --- | --- |
| Match = **bonus, not gate** | Alpha / Beta / Gamma / Delta names |
| Soft-fail experimentation | Calling the bonus “Resonance” |
| Species-weighted hue bias (optional craft flavour) | Hue Agent as mandatory chrome treadmill |
| +15% ballpark as “meaningful upside” | Exact % and whether mismatch has a tax (C1) |

### Recommended handling (for grill — not locked)

1. **Audit & gap-log:** Owner says replacement idea lived inside Skill Frame and may be unlogged — treat Frequency names as deprecated pending naming session; do **not** invent the replacement here.  
2. **Mechanics stay** under a temporary label e.g. “Attribute Match Bonus (temp)” until named.  
3. **Presentation:** bind match bonus to constellation node *material* / solder quality / instrument sympathetic colour — not Greek-letter Frequency.  
4. **Separate axes clearly in UI:**  
   - Stream Alignment (type/commitment)  
   - Stream Resonance T1/T2 (combat stacking / Grid)  
   - Attribute Match Bonus (install/support harmony)  
   - Origin Affinity (heritage tags)  
5. **AllFlame correction:** portable lesson is “clarity of upside”; Mythoras already chose bonus-not-gate — credit `DOC_v3` §12.3, not 3.29.

---

## 6. Instrument — Runeseeker Call Unique (Tuning Fork)

### Prior art / novelty

| Reference | What it is | Mythoras take |
| --- | --- | --- |
| PoE2 Runeseeker’s Call | Unique **Runic Fork**; icon reads tuning-fork-like | Profession-defining silhouette (`OD_004`) |
| Pokéball | Storage + throw | **Reject** as primary metaphor |
| Digimon “data” | Digitize creatures | Owner dislike (`SESSION_DECISIONS`) |
| Tellurion dial | Nested indexed relationships | Mid-layer dial fiction — tune profiles, Field/Bench rings |
| Conductor’s baton / tuning fork | Call-and-response, pitch match | Fits soft-fail “in tune” without being a gem board |

**Novelty claim:** Not “catching device,” but **calibration instrument** linking Technician authority ↔ creature expression (bond, Breakthrough rites, temporary field anchors). Shapes may vary for **named NPC static designs** (`PLAN_FEEDBACK`) — same system, authored silhouettes.

**Ownership guard:** Instrument must not hold Skill Cards (`IDEA-023`, ownership #9).

**Open:** Off-Field body location + refusal (`SESSION_DECISIONS`).

---

## 7. Gear modules & soldering

| Property | Skills (creature) | Modules (gear) |
| --- | --- | --- |
| Install target | Creature constellation | Gear socket / bay |
| Content | Actives + Supports | Rollable inner systems (procs, converters, capacity warps, defenses) |
| Craft verbs | Link/Bridge/… (reopen) | **Solder** / desolder / reflow (vocab candidate) |
| Failure fantasy | Gl!tch on skills | Module burn / cold joint |
| PoE trap to avoid | Treating modules as support gems | — |

Ancient Params (`DOC_v3` §11.9) already say gear modifies Frame zones — rewrite that sentence as **modules alter creature topology capacity**, not “gear sockets hold skills.”

---

## 8. Options matrix (top redesign packages)

### Option A — Embodied Constellation (creature-as-container, minimal third)

| | |
| --- | --- |
| **Shape** | Creature body/silhouette hosts anchors + satellites; constellation is presentation of species topology |
| **Avenues** | Active + Support; utility via satellite dual-use + Command Deck |
| **Gear** | Stats + rare topology warps; no skill sockets |
| **Affinity** | Soft-fail match bonus, renamed |
| **Buys** | Aligns ownership, PoE1 free-flow, IDEA-024 safer lane |
| **Costs** | Must solve 5-creature UI; Frame Agent list may feel oversized |
| **Fit** | Strong default |

### Option B — Constellation + Modules (soldering split)

| | |
| --- | --- |
| **Shape** | A + explicit module bays on gear with solder fantasy |
| **Avenues** | Active + Support; modules as *gear avenue* (not skill class) |
| **Gear** | Modules roll inner systems; can deepen satellite caps / add quirks |
| **Buys** | Clears skills-on-gear; gives motherboard vocabulary a job; feeds Wave 2 crafting |
| **Costs** | Two craft surfaces (creature + modules); economy load |
| **Fit** | Best match to 2026-07-19 dump |

### Option C — Tri-Avenue Kit (Active / Support / Persistent)

| | |
| --- | --- |
| **Shape** | Explicit third class for persistents / fields |
| **Avenues** | Three formal |
| **Buys** | Readable budgets; multi-skill without starving damage |
| **Costs** | Overlap with Lanes/Warbanner/Mana; more card types |
| **Fit** | Only if dual-use proves illegible in playtests |

### Option D — PoE2-like skill items with built-in supports

| | |
| --- | --- |
| **Shape** | Skill Card carries its own support sockets |
| **Buys** | Easy swaps; low topology authoring |
| **Costs** | Owner dislike; weak free-flow; flattens species identity |
| **Fit** | **Not recommended** as primary |

### Option E — Technician instrument as skill board

| | |
| --- | --- |
| **Shape** | Wand holds links |
| **Costs** | Violates ownership #9 |
| **Fit** | **Reject** |

---

## 9. Resonance × STAB-like discovery (PoE×Pokémon emergents)

| Layer | Player learns | How shown | Must not become |
| --- | --- | --- | --- |
| Stream effectiveness chart | Matchups | Exploration / dossiers / first shocks | Hidden IV nonsense |
| Stream Alignment | “This creature sings when skills match commitment” | Conditional bonus tooltips + modest base | Flat STAB |
| Resonance T1 | Same-Stream repeats stack | Visible combat meters | Frame-socket mechanic |
| Resonance T2 | Named deep systems | Grid investment reveals | Free on Frame |
| Squad chord | Team Stream coverage / ailment setup | Optional indicator in Workspace | Mandatory meta tax |
| Attribute match bonus | Support “in tune” with node | Soft-fail VFX | Hard gate |

---

## 10. Keep / reconsider / not-copy (Mythoras-facing)

| Keep | Reconsider | Not-copy |
| --- | --- | --- |
| Creature-local skills | External “Skill Frame” container name/object | Skills in gear sockets |
| Soft-fail bonus intent | Alpha–Delta Frequency names | PoE2 skill-gem socket board as primary |
| Satellite dual-use | Hue/Link Agent economy weight | Hard colour deny |
| Breakthrough one-per-creature | Exact Technician Level table numbers | Always-on STAB |
| Species leyline blueprints | PCB-only visual language | Wand-as-Pokéball |
| Grid vs skills split | Ancient Params naming | Colour-as-reward as “new PoE2 idea” |
| Instrument bond fantasy | Third formal skill avenue | Full chrome/fuse bureaucracy |

---

## 11. Designer / Systems / Pitfalls / Creative (summary cards)

**Designer:** Creature readability first; Technician conducts.  
**Systems:** Three scarcities — install capacity, behaviour editors, gear modules — never mashed into one socket type.  
**Pitfalls:** Vocab collisions (Resonance), ownership leaks (wand/gear), PoE2 flattening, 5× micromanagement.  
**Creative:** Embodied constellation, solder seams, instrument sympathetic vibration, squad chord discovery.

---

## 12. Open questions for grill

1. Retire the term **Skill Frame** in CONTEXT, or keep as synonym for “creature constellation”?  
2. Soft-fail: **bonus-only** or mild mismatch tax (resolve C1)?  
3. What was the **unlogged Frequency replacement** idea — recover from memory/transcripts before inventing?  
4. Modules: which gear slots get bays first (weapon? chest? all 10?)?  
5. Is soldering vocabulary global (Grid + gear + skills) or gear-only?  
6. Third avenue: needed at MVP, or park behind dual-use playtest?  
7. Instrument: flavour-only at MVP, or gates Breakthrough / tune profiles?  
8. Support exclusivity: per creature / per squad / unlimited?  
9. How do Link Agent + Sever Agent change when links are creature-topology not “card to card” chrome?  
10. Off-Field body + refusal when the fork calls?

---

## Appendix — DOC_v3 Frequency / Soft-Fail anchors (accuracy)

```883:883:DOC_v3.md
| **Frequency**       | Alpha, Beta, Gamma, Delta                | Skill Frame socket colour matching                         |
```

```998:998:DOC_v3.md
Matching a support card's attribute colour to its satellite node grants a **Resonance bonus** — not a gate. Mismatched sockets still work at reduced effectiveness. ...
```

```1037:1037:DOC_v3.md
When a Support Card's Frequency tag matches its satellite node's colour, the Support is empowered (+15% effectiveness). Mismatched sockets have no penalty — just no bonus. Makes achieving the correct colour a meaningful but non-gating crafting goal.
```

Owner gap (`PLAN_FEEDBACK`): Alpha–Delta naming intended for removal; replacement may be unlogged. Soft-fail intent survives under new fiction.
