# Path of Exile Currency Economy — Design Research for Mythoras

Research for Mythoras **crafting Agent / Forge Terminal / Cipher** economy design. Goal: extract *why* PoE’s uncapped, functional-currency model paces progression — not to catalogue orbs or copy trade UI.

> **Verification.** Primary philosophy: GGG’s 2011 diary *[Rethinking Gold as a Currency](https://www.pathofexile.com/forum/view-thread/55102)* (Chris Wilson). Trade-standard shifts (Chaos → Divine) cite community forum consensus + GGG’s **[3.19 Lake of Kalandra](https://www.pathofexile.com/forum/view-thread/3293287)** notes. Map-config pacing cites **[3.24 Necropolis](https://www.pathofexile.com/forum/view-thread/3496784)** (Sextants → Scarabs) and is paced lightly against `POE_ENDGAME_RESEARCH.md` §§1, 5, 9.3, 9.6–9.8. Mythoras terms from `CONTEXT.md`; Exploit/Splice/Compile and SSF axioms from `IDEA_LOG.md` IDEA-005 / 028 / 031 — cited, not re-derived. Anything not pinned to a source is **[synthesis]** or **[unverified]**.

**Mythoras vocabulary (CONTEXT.md):** crafting **Agent** (always “crafting Agent” in dev contexts), **Forge Terminal**, **Imprint**, **Gl!tch** (Skill Card scope), **Cipher** (endgame deployable zone). **Party** = multiplayer Technicians; **Squad** = one Technician’s five creatures.

---

## 1. Uncapped currency philosophy; why Chaos / Divine become trade primaries

### 1.1 Design intent: no gold, functional barter items

GGG rejected traditional gold because gold economies force **artificial sinks** (repairs, revive taxes, potion spam) that add obligation without enjoyment, invite RMT farming of a single fungible token, and make wealth feel like a linear time treadmill ([GGG diary, 2011](https://www.pathofexile.com/forum/view-thread/55102)).

They observed players in other games inventing their own barter standards (Guild Wars ectoplasm; Diablo II SoJ / high runes) when gold was too abundant. Successful pseudo-currencies share traits GGG encoded into every orb:

| Trait | Meaning |
| --- | --- |
| **Homogeneity** | Every unit is identical; stacks cleanly; no “better Chaos.” |
| **Utility** | Each item does a real character/item action — trade value is a *bonus* on top of use-value. |
| **Scarcity** | Not trivial; spectrum from “every ~30 min” to “days / never for casuals.” |
| **Handleability** | Easy to move a large share of net worth in stacks. |

**Critical consequence:** every currency is **its own sink**. Most trades end with the recipient *consuming* the item. No separate repair tax needed. Drop acquisition is slot-machine-like (exciting finds) rather than predictable gold-per-minute.

**Uncapped (no artificial soft-cap):** PoE does not put a hard ceiling on how much currency a character may hold or how many crafts they may attempt. Soft constraints are **drop rates + consumption utility**. Wealth is open-ended; pacing comes from sinks and opportunity cost (“spend this Chaos on maps vs. gear vs. trade”), not from wallet caps.

**Anti-binding:** GGG explicitly opposed bind-on-equip as an economy “sink,” arguing it freezes trade and punishes equipping valuable items ([same diary](https://www.pathofexile.com/forum/view-thread/55102)).

### 1.2 Why Chaos became the mid-league trade primary

Chaos was not declared “gold” by GGG. The market converged on it because it sits in the **liquidity sweet spot** ([community thread](https://www.pathofexile.com/forum/view-thread/2253175); [wiki](https://www.poewiki.net/wiki/Chaos_Orb)):

1. **Bulk utility** — rerolls rares; also used heavily to craft/juice maps. Players need Chaos in *quantity*, not one-offs.
2. **Non-trivial supply** — no NPC shop selling Chaos; primary sources are drops + the Chaos vendor recipe. Not as spammy as Alterations/Jewellers from vendor churn.
3. **Continuous endgame sink** — historically Zana map mods (and later analogous map-prep costs) forced high-level players to *keep spending* Chaos every session, cementing demand.
4. **Granularity** — common enough for everyday gear / mid items; rare enough to feel like money.

Earlier eras floated other standards (e.g. Gemcutter’s Prisms before the 20% quality gem recipe diluted them — [same forum thread](https://www.pathofexile.com/forum/view-thread/2253175)). **Lesson:** trade primaries are **emergent from sink + supply + granularity**, not labels. Patch a sink or recipe and the “gold standard” can migrate.

### 1.3 Why Divine displaced Exalted at the high end (3.19)

GGG stated in [3.19 patch notes](https://www.pathofexile.com/forum/view-thread/3293287) that Divine and Exalted had similar drop rates, but Exalts traded far higher because they were the metamod bench cost and lacked an easy recipe. GGG preferred the **Divine effect** (reroll numeric values — making well-rolled uniques matter) to be rarer, and exalt-adds more frequent. Changes:

- Metamods moved from Exalted → **Divine** cost.
- 6-link vendor recipe no longer paid a Divine (→ Fusings instead).

Market response: Divine became the **high-end store of value** and pricing benchmark; Exalts fell toward mid-tier crafting utility. Chaos remained the **liquid silver** for everyday trades.

**Portable rule for Mythoras:** a high-end trade primary is whichever crafting Agent is (a) scarce, (b) required for the *aspirational* craft loop, and (c) still useful if the buyer never resells. Do not hardcode “Agent X = money”; design sinks so the right Agent *wants* to be money.

---

## 2. Crafting-currency vs map-config consumables as separate pacing clocks

PoE runs **two parallel consumable economies** that pace different clocks. Confusing them breaks design.

| Layer | Examples | What it paces | Investment model |
| --- | --- | --- | --- |
| **Crafting currency** | Transmute → Alchemy → Chaos → Exalt / Divine / Mirror | Character power, item lottery, long-horizon wealth | Spend anytime; sinks are permanent power or trade liquidity |
| **Map / content-config consumables** | Alchemy/Chaos/Vaal on maps; scarabs; historically sextants; PoE2 tablets | Session intensity, loot EV, content menu per run | Pay **exactly when** you want the juice |

### 2.1 Crafting currency as progression pacing

- Early orbs (Transmute, Augment, Alchemy) gate **access to rare items** — the first wealth ladder.
- Chaos is the **volume craft** and mid-trade fuel — continuous decision: craft vs. sell vs. juice.
- Divine / Mirror are **aspirational sinks** — perfecting rolls, mirror copies; pull wealth out of circulation at the top.
- Vendor recipes (Chaos recipe, etc.) create **deterministic floors** under stochastic drops — RNG modulates *speed*, not *possibility* (same philosophy as map sustain floors in `POE_ENDGAME_RESEARCH.md` §1).

Crafting currency paces **build readiness** across hours/days. It does not, by itself, decide how hard tonight’s map is.

### 2.2 Map-config consumables as session pacing

From `POE_ENDGAME_RESEARCH.md` §5 and [3.24 Necropolis notes](https://www.pathofexile.com/forum/view-thread/3496784):

- **Sextants** were sticky *state* (charges across maps) + upkeep ritual → removed when prep became a chore.
- **Scarabs** are **per-run choices** in the Map Device: pay for intensity only on maps you care about; juice is itself farmable loot.
- Split with the Atlas tree: tree = free persistent specialization; scarabs = paid burst.

Together with map-as-item crafting (alch/chaos/vaal the map itself), the player dials **difficulty/reward before the run**. Failure costs the stake you chose (`POE_ENDGAME_RESEARCH.md` §9.3). Economy *is* pacing: a visible stash of maps + juice is a visible runway (§9.6).

### 2.3 Design split Mythoras should preserve

| Concern | Prefer crafting Agents | Prefer Cipher-config consumables |
| --- | --- | --- |
| Squad gear / Skill Card / Forge depth | Yes | No (except Cipher-as-item mods) |
| Tonight’s Cipher intensity & content menu | Indirect (wealth) | Yes — first-class |
| League/meta specialization | Soft | Tree + per-run juice |
| Stall risk if drop rates wrong | Craft drought | Cipher sustain drought (worse for endgame feel) |

**Do not** make one Agent family do both “perfect my Unique” and “open my endgame” unless the sink schedules are carefully separated — PoE’s lesson is that **sticky global juice** (sextants) feels worse than **atomic per-run juice** (scarabs).

---

## 3. Mythoras Agent / Forge / Gl!tch + SSF-first implications

### 3.1 Role map (PoE → Mythoras)

| PoE | Mythoras (CONTEXT / IDEA-005) | Notes |
| --- | --- | --- |
| Currency orbs | **Crafting Agents** | Always disambiguate “crafting Agent” vs AI agent |
| Crafting bench / Harvest / etc. | **Forge Terminal** + **Imprint** | Imprint = pattern-lock at Forge (also harness skill — clarify context) |
| Vaal Orb / corrupt | **Gl!tch** | **Skill Card scope only** — not gear |
| Chaos-spam / Unique chase | **Exploit / Splice / Compile** Agents | Gear gamble ladder — cite IDEA-005 below |
| Maps + scarabs | **Ciphers** + (future) Cipher-config consumables | Sustain is a first-class problem (IDEA-008 / IDEA-028) |

### 3.2 IDEA-005 — cite, don’t re-derive

From `IDEA_LOG.md` IDEA-005 (liked; early tier greenlit for future spec):

1. **Exploit Agent (early)** — gamble Common/Uncommon → Unique; “Latent Weight” (cleaner bases = better odds); global drop table; cheap.
2. **Splice Agent (mid)** — graft one Unique-exclusive fragment onto a Rare (overwrite one affix; failure destroys that affix only). **Owner temper:** graft pool = ~25–50% of Unique power so Spliced never replaces true Unique chase.
3. **Compile Agent (end)** — only on “Unstable” Uniques (high Threat Attunement Examiner survival); gamble permanent Examiner-pool mod; failure corrupts (locks further mods); fueled by **endgame processed output**, not raw currency.

**Differentiation lock:** Gl!tch = Skill Cards; Exploit/Splice/Compile = gear. Keep naming/iconography sharp.

### 3.3 SSF-first implications (IDEA-028 / IDEA-031)

Mythoras direction: assume **SSF-first economy floors**; economy pacing matters even without trade (IDEA-031). Implications:

1. **Every crafting Agent must be self-justifying in solo play.** Trade primaries (Chaos/Divine) emerged *because* of sinks + scarcity; in SSF those same sinks must still feel good when you *consume* rather than sell. Design for the spender first, trader second.
2. **Deterministic ratchets under gambles.** Exploit/Splice/Compile are high-variance. Pair with vendor/recipe/quest floors so a dry Exploit streak does not softlock gear progression (mirror PoE Chaos recipe / Kirac map floor pattern).
3. **Separate Skill Card economy from gear economy.** Gl!tch scarcity paces *skill identity* risk; gear Agents pace *item* risk. Collapsing them into one stack invites “save everything for Gl!tch” paralysis or the opposite.
4. **Forge Terminal as the visible sink UI.** Players should *see* Agents leave inventory into intentional crafts — same psychological payoff as consuming Chaos on a craft vs. feeling taxed by a gold repair.
5. **Cipher sustain ≠ Forge wealth.** A rich Forge stash with zero Ciphers is a progression stall (`POE_ENDGAME_RESEARCH.md` diamond/backfill loop; IDEA-008). SSF must drop Cipher fuel from Cipher play with floors (vendor / combine / Network Agent).
6. **Compile as endgame-processed fuel** (IDEA-005) is the right *shape* for a Divine-like: scarce, aspirational, not the everyday liquid Agent. Everyday liquid should be something mid-tier (Chaos-analogue) with bulk sinks — Cipher prep and volume crafts.
7. **Uncapped Agent stacks are fine** if sinks scale with ambition (Threat Attunement, Cipher juice, Compile). Avoid soft-caps that punish hoarding without giving a meaningful spend moment.
8. **Party (multiplayer) is not the baseline.** CONTEXT: Party = multiplayer Technicians. Design Agent drop rates and Cipher floors for one Technician’s Squad first; multiplayer multipliers are additive later (see §4).

### 3.4 Affix-system open question (CONTEXT) — economy coupling

CONTEXT leaves prefix/suffix vs Attribute-quad pools unresolved. Economy note only: crafting Agent *tools* must target the chosen classification (slot-based vs Attribute-pool). Changing mod caps (4 vs 6) changes how many “Exalt-like” adds feel valuable and how hard Compile/Splice compete with full crafts. Do not invent the classification here — flag that Agent design waits on that grill.

---

## 4. Gaps if multiplayer / leagues / trade open later

SSF-first does **not** mean trade-blind. Opening Party play, trade, or seasonal leagues surfaces gaps PoE already lived through:

| Gap | Risk if ignored | Mitigation direction **[synthesis]** |
| --- | --- | --- |
| **Emergent trade primary** | Community prices everything in one Agent; designers surprise-nerf the wrong sink | Instrument sinks; expect mid-tier bulk Agent + high-end aspirational Agent (Chaos/Divine pattern); monitor which Agent gets hoarded |
| **RMT / bot farming** | Single most-liquid Agent becomes the RMT token | Functional multi-currency + inventory complexity (GGG’s original anti-farmer argument); avoid one “gold” item |
| **Craft vs trade split** | SSF players feel taxed by trade-balance patches | Patch for *use-value* first; trade rates are secondary symptoms |
| **Cipher / juice inflation** | Trade floods juiced Ciphers; SSF cannot match EV | Soft-bind or account-bound *config* consumables optional; keep Cipher *base* sustain SSF-viable; juice as optional spike |
| **League reset / Standard** | Standard becomes Mirror-tier inflation dump; new leagues feel poor | Seasonal economies (PoE model); Standard as museum — don’t balance campaign to Standard wealth |
| **Party loot asymmetry** | One Technician carries Cipher cost; others freeload | Clear Party cost rules (shared stake vs host stake); drop eligibility per Technician |
| **Squad ×5 item surface** | Trade + ~30 gear slots = market spam / UI hell | Slot-count grill (CONTEXT) interacts with trade listing friction |
| **Gl!tch / Compile corruption** | Trade of “almost Compile” Unstable items creates a secondary market that skips intended Examiner gate | Gate Unstable flag account-bound or non-tradable; or make Compile fuel non-tradable processed tokens |
| **Network Agent sustain floor** | If Kirac-analogue sells Ciphers with trade gold, trade players skip the climb | Floor should accept **farmed** Agents / Cipher fragments, not a pure money buyout of the tier ladder |
| **Profit-crafter vs community** | IDEA-032 is parked — don’t schedule against SSF baseline | Optional late social beat only |

**League pattern worth stealing (from endgame research §9.8 #8):** new mechanics as temporary experiments that **fold into the permanent pool** behind a selection layer (Atlas-tree analogue) — economy must absorb new crafting Agents without instantly crowning a new trade king via an accidental sink.

---

## 5. Economy-as-pacing checklist for Cipher sustain

Use with `POE_ENDGAME_RESEARCH.md` §9.8 and IDEA-031. Cipher-focused; treat economy as the endgame metronome, not a side market.

1. **Atomic unit** — One Cipher run = one complete stake/payout (map analogue).
2. **Tier fuel from current tier** — Higher Ciphers drop from running near-frontier Ciphers; +N tier ceiling rule explicit (PoE: +2 — [GGG Detailed Atlas Mechanics](https://www.pathofexile.com/forum/view-thread/1714099)).
3. **Backfill buffer** — Players may run tier−1/−2 to refill without feeling punished; avoid “only top tier drops anything useful.”
4. **Deterministic floors** — Vendor / combine recipe / Network Agent sales / boss guarantees so RNG never softlocks the climb.
5. **Crafting Agents ≠ Cipher keys** — Gear/Skill Card Agents must not be the sole Cipher openers; separate Cipher bases + optional juice Agents.
6. **Per-run juice, not sticky global charges** — Prefer scarab-like Cipher config consumables over sextant-like account state ([3.24](https://www.pathofexile.com/forum/view-thread/3496784)).
7. **Visible runway** — Stash of Ciphers + juice readable as “hours of play left” (`POE_ENDGAME_RESEARCH.md` §9.6).
8. **Player-dialed stake** — Threat Attunement + Cipher crafting set risk before entry; failure costs the chosen stake (§9.3).
9. **Meta points from completion** — Checklist/board completions grant Network/meta points that *improve sustain* early (PoE: first Atlas points → map drops).
10. **SSF audit** — Simulate a solo Technician with no trade for ~20 hours of Cipher play: can they hold frontier without vendor pity every session?
11. **Trade audit (if opened)** — Does buying juiced Ciphers skip the curriculum, or only buy *speed*? Prefer selling speed, not skipping gates.
12. **Sink schedule** — Mid-tier Agent continuous sink (prep + volume craft); high-tier Agent aspirational sink (Compile / perfect Imprint); Mirror-tier extremely rare or absent at MVP.
13. **Legibility dial** — Publish floors, tier rules, and juice costs; keep mystery in *outcomes* (IDEA-018 / IDEA-031; endgame §9.7).

---

## 6. Portable rules — what to steal, what not to copy

### Steal (foundations)

| Steal | Why it travels to Mythoras |
| --- | --- |
| **Functional multi-currency** | Every crafting Agent is a sink; no gold-tax treadmill ([2011 diary](https://www.pathofexile.com/forum/view-thread/55102)). |
| **Emergent dual trade primaries** | Design a mid-tier *bulk* sink + a high-end *aspirational* sink; let naming follow use. |
| **Two pacing clocks** | Forge Agents pace build power; Cipher bases + per-run juice pace session intensity. |
| **Deterministic floors under RNG** | Recipes / vendors / Network Agents so SSF never softlocks (IDEA-028). |
| **Economy-as-visible-runway** | Stash of Ciphers *is* the session plan (`POE_ENDGAME_RESEARCH.md` §9.6). |
| **Per-run juice over sticky state** | Scarab lesson, not Sextant lesson ([3.24](https://www.pathofexile.com/forum/view-thread/3496784)). |
| **Patch for use-value** | When a trade primary migrates, ask which *sink* broke — then fix sinks (3.19 Divine story). |
| **Structural clarity, outcome mystery** | Show rules/floors; hide the roll (IDEA-018). |

### Do not copy (or copy only with eyes open)

| Do not copy | Why |
| --- | --- |
| **Orb encyclopedia / 20+ parallel currencies at MVP** | PoE’s depth is decade accrual; Mythoras should start with a short Agent ladder + clear Cipher fuel. |
| **Trade as the balance target** | SSF-first: if the spend feels bad solo, the economy is wrong regardless of Chaos:Divine ratios. |
| **Sticky global juice / upkeep rituals** | Sextants taught this the hard way. |
| **Gold-like wallet soft-caps or bind-on-equip “sinks”** | Fight GGG’s own anti-patterns; they kill feel and freeze markets. |
| **One Agent that opens Ciphers *and* perfects gear** | Collapses both clocks; creates hoarding paralysis. |
| **Gl!tch as gear corrupt** | CONTEXT lock: Gl!tch = Skill Cards; gear gamble = Exploit/Splice/Compile. |
| **Kirac-style pure money buyout of the tier ladder** | Floors should accept farmed Cipher fuel, not skip the climb for trade wealth. |
| **PoE’s full trade UI / stash-tab economy as day-one scope** | Optional later; don’t schedule against SSF baseline (IDEA-032 parked). |
| **Vaal / league naming, orb icons, “Chaos” as brand** | Steal *mechanisms*; invent Mythoras voice (IDEA-004 naming directive). |
| **Assuming Party loot rules will “just work”** | Squad×5 item surface + Cipher stakes need explicit Party cost rules before trade opens. |

### One-line design axiom

> Uncapped functional Agents + separate Cipher fuel + SSF floors = pacing. Trade primaries are a *symptom* of good sinks, not a feature you name into existence.

---

## Appendix A — Primary sources

- GGG — [Dev Diary: Rethinking Gold as a Currency](https://www.pathofexile.com/forum/view-thread/55102) (2011)
- GGG — [3.19.0 Lake of Kalandra patch notes](https://www.pathofexile.com/forum/view-thread/3293287) (Exalt/Divine metamod swap)
- GGG — [3.24.0 Necropolis patch notes](https://www.pathofexile.com/forum/view-thread/3496784) (Sextants → Scarabs)
- GGG — [Detailed Atlas Mechanics](https://www.pathofexile.com/forum/view-thread/1714099) (+2 tier map drop rule)
- PoE Wiki — [Chaos Orb](https://www.poewiki.net/wiki/Chaos_Orb) · [Version 3.19.0](https://www.poewiki.net/wiki/Version_3.19.0) · [Version 3.24.0](https://www.poewiki.net/wiki/Version_3.24.0)
- Forum — [How did Chaos Orbs become *the* unit of currency?](https://www.pathofexile.com/forum/view-thread/2253175)
- Internal — `POE_ENDGAME_RESEARCH.md` §§1, 5, 9.3, 9.6–9.8
- Internal — `IDEA_LOG.md` IDEA-005, IDEA-008, IDEA-018, IDEA-028, IDEA-031, IDEA-032
- Internal — `CONTEXT.md` Economy & Crafting; Party vs Squad; affix open question

## Appendix B — Mythoras takeaways (one page)

1. **Uncapped functional Agents beat gold** — sinks = uses; scarcity spectrum creates emergent liquidity.
2. **Expect a Chaos-analogue and a Divine-analogue** — design sinks so they emerge; don’t name them “money.”
3. **Split Forge pacing from Cipher pacing** — gear/Skill Card Agents vs Cipher bases + per-run juice.
4. **IDEA-005 is the gear gamble ladder; Gl!tch stays Skill Cards** — Compile is endgame-processed, Divine-shaped.
5. **SSF-first floors first** — recipes, vendors, Network Agents; trade is optional acceleration.
6. **If leagues/trade open** — watch emergent primaries, Unstable/Compile trade skips, and Cipher juice inflation.
7. **Cipher sustain checklist §5** — treat economy as the endgame metronome, not a side market.
8. **Steal mechanisms, not the orb museum** — short Agent ladder at MVP; Mythoras voice for names.
