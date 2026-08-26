# Gl!tch crafting exploration + reference dump — 2026-08-19

**Status:** Research and exploratory framing only. **Not Mythoras canon. No decisions made.** Thread 1's "negative Gl!tch expansion" idea is explicitly flagged by the owner as needing a grill session, not a build.
**Date:** 2026-08-19
**Audience:** Crafting/Gl!tch grill session; design-inspiration backlog; a filed-away rendering reference.

---

## Pre-work: existing "negative Gl!tch" trail in the repo

Owner recalled a dropped "negative glitch"-style concept, scoped to "a single channel of glitch." Grepped `CONTEXT.md`, `CRAFTING_FOUNDATION_RETHINK.md`, `IDEA_LOG.md`, and `DOC_v5.md`. **FACT**, found it — it isn't dropped so much as **unresolved / superseded**:

- `CONTEXT.md` (canonical, locked) defines **Gl!tch** as: "High-risk **Skill Card** fundamental property change. The `!` is intentional." Skill-Card-scoped only.
- `DOC_v5.md` §52, *"Gl!tch System (Negative Only — MVP)"*, describes a **gear-item** mechanic: the **Surge Agent** applies "Negative Gl!tch" — a one-time irreversible gamble on a non-Gl!tched item, with a 7-outcome table (Ascendant / Transformed / Shifted / Stable / Fractured / Bricked / Voided, weighted 12/15/20/25/15/10/3%). This is structurally a Vaal Orb analogue. §52 explicitly says: **"Positive Gl!tch: Deferred to post-MVP content expansion."** So in DOC_v5's own frame, current Gl!tch *is* the negative/risky one already, and "positive Gl!tch" is what's deferred — not a second risky tier.
- `CRAFTING_FOUNDATION_RETHINK.md` (Wave 2, 2026-07-19) flags this directly as **Pitfall #3, "Gl!tch scope split-brain"**: CONTEXT's Skill-Card Gl!tch vs. DOC_v5 §52's gear-item Surge conflict, "unresolved = wrong art, wrong sinks, wrong trade" (line 200). Open Grill Question #4 (line 347) asks explicitly: *"Gl!tch: confirm Skill Card-only; what happens to DOC_v5 §52 gear Surge table?"* — still open as of that doc.
- `IDEA_LOG.md` line 60 locks the same resolution direction: "Differentiation from Gl!tch (locked term): Gl!tch = Skill Card scope; gear Agents = gear scope. Keep naming/iconography sharply distinct."
- `CONTEXT.md`'s **dated 2026-08-14**, i.e. newer than the Wave-2 rethink doc — so the Skill-Card-only definition looks like the resolution the split-brain question converged on, at least as of the last CONTEXT update. The gear-item Surge/Negative-Gl!tch table in DOC_v5 §52 reads as **superseded**, not actively cancelled in writing.

**On "single channel of glitch":** no direct textual match found for Gl!tch being scoped to one damage **Channel** specifically (Channel per `CONTEXT.md` = Attribute-scaling navigation / modifier shorthand, not a defence schema — see CONTEXT's locked damage-architecture section). Nothing in the four files ties Gl!tch mechanically to a single Channel. Flagging as **unconfirmed** — likely the owner's own private framing, not yet written down anywhere in-repo. Worth confirming directly rather than assumed.

**Net:** the "negative glitch" the owner remembers is real and is `DOC_v5.md` §52's Surge Agent / gear-item corruption table. It wasn't cleanly dropped — it's parked behind an unresolved scope conflict with the now-canonical Skill-Card-only Gl!tch. Any "harder negative Gl!tch expansion" idea should treat §52 as prior art to reconcile with, not a blank slate.

---

## Thread 1 — PoE 3.29 corrupted-implicit glove crafting

### What's confirmed

**FACT**, cross-checked across multiple guide sites (aoeah, mmoexp, mmojugg) describing PoE patch 3.29 "Curse of the Allflame":

- The mechanic centers on **Hands of the High Templar**, a Unique pair of Crusader gloves with the property **"Can be modified while Corrupted."**
- New-in-3.29 machinery gets you there: an **Enshrouding Crystal** converts a supported Unique into an "Enshrouded" item; taken into the **Domain of Timeless Conflict** and charged by killing Legion monsters; finished via a **Crystal of Permutation**. The result is a **Vestigial** Unique of the same item class that inherits a **Vestigial implicit modifier** from the donor item — and, in the High Templar's specific case, **retains the "can be modified while Corrupted" property**.
- Because that property survives onto the Vestigial glove, players can then **apply Vaal Orbs repeatedly** to the same pair of gloves post-corruption — each application rolls for a new corrupted implicit, stacking up to **5 implicit slots total**. Sources cite roughly **50/50 odds per Vaal Orb** between landing a new implicit and "bricking" the item to a plain Rare (which permanently loses the reapplication property) — with guide estimates of **~4 Vaal Orbs on average** to land a meaningful result.
- This is the **"High Templar method"** referenced across guide sites as the flagship 3.29 glove craft, producing multi-implicit gloves that would be unreachable through normal single-corruption play.

**Partial/secondary confirmation:** general 3.29 patch-note coverage (Maxroll, pathofexile.com forum patch thread) confirms the broader "Curse of the Allflame" patch introduced the Vestigial/Enshrouding system and expanded the corrupted-implicit pool (new outcomes like spell gem levels, cast speed, spell damage, explode mods on caster weapons) — consistent with, but not itself proof of, the specific glove interaction above.

### What's unconfirmed

- I could not directly view the referenced tweet (https://x.com/MengTo/status/2089252548473688076) — X/Twitter requires login and the URL wasn't independently fetchable via search. The above reconstruction is inferred from guide-site coverage of the same patch, not from the tweet itself, so I can't confirm the tweet's exact framing/wording, only that the underlying mechanic it's almost certainly describing (High Templar gloves + Vestigial crafting + repeatable post-corruption Vaal Orbs) is real and well-documented independently.
- Guide-site numbers (odds, "~4 orbs average") are secondary/community-sourced, not from GGG's own patch notes — treat as approximate.

**Sources:**
- [PoE 3.29 Best Vestigial Uniques Tier List & Implicit Mods (aoeah)](https://www.aoeah.com/news/4718--poe-329-best-vestigial-uniques-tier-list--implicit-mods)
- [PoE 3.29 Allflame Crafting, Enshrouding Crystal, Ducats & Vestigial Uniques (aoeah)](https://www.aoeah.com/news/4693--poe-329-allflame-crafting-enshrouding-crystal-ducats--vestigial-uniques)
- [PoE 3.29 Vestigial Uniques Guide (mmojugg)](https://www.mmojugg.com/news/poe-vestigial-uniques-guide.html)
- [Path of Exile Crafting Guide: 5-Implicit Gloves with the High Templar Method (mmoexp)](https://www.mmoexp.com/News/path-of-exile-crafting-guide-how-to-create-5-implicit-gloves-with-the-high-templar-method.html)
- [3.29 Curse of the Allflame Patch Notes (Maxroll)](https://maxroll.gg/poe/news/3-29-curse-of-the-allflame-patch-notes)
- [Content Update 3.29.0 official patch notes (pathofexile.com forum)](https://www.pathofexile.com/forum/view-thread/3985332)

### Exploratory framing — a "harder negative Gl!tch" (NOT a decision; owner said expansion-scope, not core-game)

This is speculative mapping, offered only as raw material for a future grill:

- PoE's High Templar craft is interesting specifically because the "corrupted implicit" pool behaves like a **near-separate modifier system** layered on top of the normal explicit affix pool — it has its own currency input (Vaal Orbs), its own risk curve (bricking), and its own payoff ceiling (multiple implicits stacking multiplicatively). That's structurally close to what the owner is describing for a harder Gl!tch variant: a **second crafting track**, gated behind heavier Agent investment and more steps, with a materially bigger payoff than the current single-shot Surge/Gl!tch table.
- Mapped against what's already in the repo: `DOC_v5.md` §52's Surge Agent is *already* a single-application, high-variance, partly-punishing gamble (Bricked/Voided outcomes exist). A "harder negative Gl!tch" as the owner describes — more erroneous, more currency, more steps, bigger payoff — would be a **second tier above** that, not a redesign of it. It would also need to resolve the same scope conflict flagged in Pitfall #3 above: is this gear-scoped (like §52's Surge) or Skill-Card-scoped (like CONTEXT's canonical Gl!tch)? The owner's "law-type scenario" / Warbanner framing suggests neither exactly — more like an **opt-in modifier layer**, closer in shape to how `RESEARCH_INSPIRATION_LINKS_2026-08-14.md` mapped Shards of Order's "Laws" concept onto Mythoras Warbanner/Cipher-style opt-in rule-shards (see that doc's §"Laws restore / reshape the rules of the game" row) than to a straightforward gear-currency Agent.
- If it's real, it plausibly wants: (1) explicit reconciliation with the still-open Gl!tch scope question (Grill Q4 above), (2) a decision on whether it's a **crafting step** (an Agent applied at the Forge Terminal), a **Warbanner-style opt-in battle modifier**, or both simultaneously (crafted once, then equipped as a standing law), and (3) confirmation of whether "single channel of glitch" is a real existing constraint (unconfirmed above) or a new one being proposed for this harder variant specifically.
- **This section is exploratory only.** No naming, no numbers, no mechanic locked. Flagging for a dedicated grill session per the owner's own framing — do not treat any of the above as a spec.

---

## Thread 2 — Danny Limanseta

**FACT (confirmed identity):** Danny Limanseta (X: [@DannyLimanseta](https://x.com/DannyLimanseta), site: [dannylimanseta.com](https://dannylimanseta.com/)) — Product Designer, co-founder at Nurture and Reroll, formerly Founding Designer at Redmart (acquired by Alibaba). Became known through a string of AI-assisted ("vibecoded") game prototypes starting ~March 2025 (9 prototypes in one month using Grok, Cursor, Windsurf), including **Gnome Mercy: Insect Invasion** (a Vampire Survivors-style prototype).

**His most recent/current game — title confirmed:** **Cook The Dungeon** (not "Cook in the Dungeon" — owner's guess was close but the actual title drops "in"). Live on [Steam (app 4364310)](https://store.steampowered.com/app/4364310/Cook_The_Dungeon/) and [itch.io](https://dannylimanseta.itch.io/cook-the-dungeon), with a demo available. Scheduled release **Q2 2027**.

**FACT (design/systems):**
- First-person roguelike **deckbuilder**: descend through branching paths, forage herbs, hunt monsters, build a deck of **Cuts, Preps, and Seasons**.
- Core mechanic, "**Precise Cut**": you must bring a monster to *exactly* 0 HP to harvest a usable part — overkill spoils the ingredient. This is a genuinely distinctive design hook: it turns combat damage-numbers into a **precision-under-pressure resource-harvesting puzzle**, not just a DPS race. Harvested parts become **Dish Cards** with limited servings, consumed to shape upcoming fights — a tight feedback loop between combat performance and deckbuilding resources.
- Built in **Godot**, developed via heavy "vibecoding" — per [dev.ua coverage](https://dev.ua/en/news/pidzemellia-vaibu-1784611273), almost all code generated in Cursor combining multiple AI models (cited as Grok 4.5, Opus 4.8, Composer 2.5, GPT 5.5 — take model-version specifics as press-reported, not verified), current build took ~3 weeks. Visual assets generated via image-model APIs, with a **custom tool built specifically to unify art style** across AI-generated frames, with the developer manually curating/placing each element.
- Positioned by press as reminiscent of **Dungeons of Goodies**/**Desktop Dungeons**-style compact dungeon crawlers, but reframed around cooking/harvesting rather than pure combat.

**Design-inspiration relevance for Mythoras (INFERENCE, not a steal-list — flagging what's notable):**
- **Precise Cut** is a strong UI/UX reference for "make a numeric threshold *feel* tense in real time" — a single visible HP bar with a hard stop condition, rather than burying precision in post-combat menus. Relevant if Mythoras ever wants a Turn-Program-compatible precision mechanic (finishing blows, exact-lethal windows) without breaking the Planning→Execution structure.
- The **harvest → limited-serving consumable → next-fight-shaping** loop is a tight economy-of-attention example: small pools, fast reuse, visible scarcity — worth a look if Stream materials / bench crafting ever wants a non-busywork "cook a temporary boost" loop (CONTEXT/CRAFTING_FOUNDATION_RETHINK explicitly want to avoid potion-crafting busywork — this is a counter-example of the same shape done leanly).
- The **custom AI-art-unification tool** (a bespoke pipeline step just to keep generated art stylistically coherent) is a relevant production-process reference, not a design one — flagging in case Mythoras's own pipeline work wants a similar unifying pass.

**Sources:**
- [Danny Limanseta on X](https://x.com/DannyLimanseta)
- [dannylimanseta.com](https://dannylimanseta.com/)
- [Cook The Dungeon — Steam](https://store.steampowered.com/app/4364310/Cook_The_Dungeon/)
- [Cook the Dungeon — itch.io](https://dannylimanseta.itch.io/cook-the-dungeon)
- [Designer vibecodes card-based roguelike... (dev.ua, en)](https://dev.ua/en/news/pidzemellia-vaibu-1784611273)
- [Cook The Dungeon Analysis — Niklas Notes](https://niklasnotes.com/dashboard/game/285579/cook_the_dungeon)

---

## Thread 3 — filed-away reference: three.js diffraction-grating holographic foil shader

Per the user's collaborator (tweet not independently refetched — taken as given): a **diffraction-grating shader built in three.js**, rendering a holographic Pokémon-trading-card-style foil effect with physically-motivated controls — interactive sliders for groove pitch, relief amplitude, coherent length, azimuth spread, groove orientation, and foil exposure. This is a real-time optics/rendering technique reference (diffraction grating simulation, not a simple env-map fake), not a game or design system.

**Filed away only.** No research done beyond the given description — potentially relevant far downstream *only if* Mythoras ever wants a genuinely physically-responsive foil/holographic treatment for Skill Cards or item cards (rather than a cheaper fake-holo shader). Not a current priority; not connected to any open Mythoras question above.

---

## Open questions

1. Is the "single channel of glitch" framing (owner's phrase) something already decided privately, or a new constraint being proposed for a harder-Gl!tch expansion? No textual trail found in-repo — needs a direct confirm.
2. `DOC_v5.md` §52's gear-item Surge/Negative-Gl!tch table — is it formally superseded by CONTEXT's Skill-Card-only Gl!tch, or still "unresolved" as Wave 2's Pitfall #3 / Grill Q4 left it? CONTEXT is dated later but nothing explicitly says §52 was retired.
3. If a harder Gl!tch expansion is pursued later: crafting step, Warbanner-style opt-in modifier, or both? Owner flagged this needs a grill, not an answer here.
4. MengTo's tweet itself — if the owner wants the exact wording/framing (not just the underlying PoE mechanic, which is independently confirmed), it may need to be pasted in or screenshotted, since it wasn't fetchable via search.
5. Cook The Dungeon is pre-release (Q2 2027 target) — current design read is based on marketing copy/demo description, not hands-on play. Worth revisiting once the demo can be played directly if deeper UX inspiration is wanted.
