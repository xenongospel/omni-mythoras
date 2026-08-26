# Skill-as-circuit ("PathwayXL") + attribute-leaning gems — exploratory research

**Date:** 2026-08-19
**Status:** Research note. **Not canon.** Does not close any [`CONTEXT.md`](../../CONTEXT.md) Open Design Exploration or Open Question. Both threads below are exploratory framing for a future grill session, not a proposal to adopt.
**Audience:** Owner review before any grill on Skill Frame topology or item/skill Attribute-identity systems.
**Triggers:** Owner recollection of a YouTube video re: "PathwayXL" and an "onboarding processing unit"; owner recollection of Chris Wilson calling the red PoE gem a "strength gem."

---

## Thread 1 — "Skill as circuit"

### 0. What was actually found (read this first)

The owner's video link, `https://www.youtube.com/watch?v=PwBmzi9zuqU`, does **not** resolve to a game called "PathwayXL." Its YouTube oEmbed metadata (fetched directly, not a transcript/guess) is:

- **Title:** "Path of Exile - Skill System Demonstration"
- **Author:** "Path of Exile" (channel `@playpathofexile` — Grinding Gear Games' own official channel)

**FACT (verified via YouTube oEmbed API):** This is an official Path of Exile developer video, not footage from a separate title called PathwayXL. No game, studio, or product named "PathwayXL" turned up in any search — general web search, Steam search, and company-name search all returned unrelated results (a UK company "PathwayX Limited," an Irish study-abroad consultancy, a digital pathology company "PathXL," and the unrelated tactical RPG *Pathway* by Robotality). None of these are PathwayXL, and none reference an "onboarding processing unit."

**INFERENCE:** "PathwayXL" is almost certainly the owner's misremembering of **Path of Exile** itself — the video he watched is PoE's own early skill-system demo, not a third-party alternative to PoE's gem system. This changes the framing of the whole thread: the owner is not recalling a different game's take on skills-as-modules: he is very likely recalling **an early/behind-the-scenes cut of PoE's own gem-link system**, filtered through memory into something that felt like a novel alternative.

**Could not verify:** The specific phrase "onboarding processing unit" does not appear in any indexed source tied to this video, to Path of Exile, or to any other skill-system design talk found in this pass (including Chris Wilson's GDC 2019 talk "Designing Path of Exile to Be Played Forever," found via [GDC Vault](https://www.gdcvault.com/play/1025784/Designing-Path-of-Exile-to) / [80.lv summary](https://80.lv/articles/gdc-designing-path-of-exile), which was not fetchable for full transcript in this pass). It is plausible this is a garbled memory of ordinary PoE vocabulary (e.g. "support gem," "skill gem," "linked sockets") rather than a real named component. **This could not be confirmed either way** — the video's actual audio/transcript was not accessible to this research pass (no transcript service returned content; only the title/channel metadata via oEmbed was retrievable).

**What this means for the ask:** The owner's instinct — "don't copy PoE's gem/support-link system wholesale, reimagine the Skill Card as a circuit of plug-in modules" — is still a valid design direction to explore. It just is not backed by a second game's precedent the way he remembered; the only real precedent in view is PoE's own system, which he already knows and wants to diverge from. Treat the "circuit" idea as the owner's own reframe of PoE, not an import from a third title.

### 1. Mapping "skill as circuit" onto Mythoras's current architecture

Per [`CONTEXT.md`](../../CONTEXT.md) (Progression & Build table, entries 9/12/13 in Critical Corrections):

- **Skill Card** = an equippable card granting a creature a skill. Creature-local, installed in that creature's Skill Frame.
- **Skill Frame** = the creature's intrinsic skill configuration network — **anchor nodes** (Skill Cards) and **satellite nodes** (Support Cards), species-specific topology. "Active skills are modularised by supports per skill; support count/rules are OPEN."
- **Support Card** = modifies a Skill Card when linked in that creature's Skill Frame. Can carry initiative penalties (Speed cost as trade-off).

This is already, structurally, PoE's socket-link model wearing different vocabulary: anchor node ≈ skill gem socket, satellite node ≈ support gem socket, species-specific topology ≈ item socket layout. CONTEXT.md does not lock *how* anchors and satellites connect (linear chain? tree? shared pool?) — that's exactly the seam a "circuit" reframe would land in.

**Where "circuit" would diverge from anchor/satellite topology:**

| Current (Skill Frame, as described) | "Circuit" framing (owner's idea) |
| --- | --- |
| Support Cards *modify* a Skill Card — a one-directional augmentation relationship (support → anchor) | Modules are components in a signal path — a skill's behavior is the *sum/transformation* of what's plugged into it, no single node is privileged as "the real skill" |
| Topology is nodes-and-links on the Frame (spatial/tree metaphor, matching Motherboard Grid's own visual language) | Topology is a circuit diagram — implies ordered stages (input → processing → output), not just "linked nodes" |
| Support Cards are themselves discrete card objects, found/crafted like Skill Cards | "Modules" could be a different, lighter-weight authoring unit — smaller than a full card, closer to a toggle or parameter than an item |
| Species-specific topology sets a fixed frame shape per creature | A circuit model could make the *shape itself* buildable — not just which nodes are filled, but how signal routes between them (branching, splitting, series vs parallel) |

**What a circuit model could solve that Support Cards alone don't:**

- **Order-dependence as a first-class mechanic.** PoE's support links are largely order-agnostic (multiplicative modifiers compose regardless of socket order in practice). A literal circuit metaphor invites *sequence* to matter — e.g. a "conditional gate" module early in the chain changes what a "damage shaping" module downstream receives. This would be a genuinely different feel from support gems, not just reskinned vocabulary.
- **Visual/tooling legibility for the Builder.** "Circuit" as a diagram (nodes, wires, signal flow) is a natural fit for a prototyping/tooling surface (matches this repo's own Builder ambitions) in a way "list of linked cards" is not. This is likely the actual value the owner is reaching for — not necessarily a combat-math innovation, but an **authoring/UI metaphor** that's more inspectable than a flat link list.
- **A distinct identity from Support Cards**, if the two are kept separate: Support Cards could remain the "big" creature-facing customization surface (crafted, found, itemized — matching Support Card's current Economy/itemization framing), while "circuit modules" could be a smaller, more structural/topological layer describing *how the Skill Frame's nodes route to each other* — closer to Grid-navigation than to itemization.

**Risks / open tensions (flag, don't resolve):**

- **Redundancy with Support Cards.** CONTEXT.md already defines Support Cards as the thing that "modifies a Skill Card when linked." If "circuit modules" end up being just another word for the same modify-relationship, this is scope creep dressed as a new metaphor — two systems doing one job. The distinction above (itemized augmentation vs structural routing) needs to be a real mechanical difference, not a naming difference, or it shouldn't exist as a separate system.
- **Collides with locked/near-locked ownership rules.** CRITICAL CORRECTION 9 is explicit that Skill Cards, Skill Frame, and Support Card links are **creature-local**, not Technician-global. A "circuit" reframe must stay creature-local too — it must not accidentally become a second global build layer (which would compete with the Motherboard Grid's role).
- **"Support count/rules are OPEN" is already flagged in CONTEXT.md** as unresolved — a circuit model is one candidate answer to that open question, not a foregone one. It should be presented to the owner as *one shape the open Skill Frame topology could take*, not a fait accompli.
- **Terminology risk.** "Onboarding processing unit" (owner's half-remembered term) should not be adopted into Mythoras vocabulary — it's unverified and, per the analysis above, may not even be real PoE/PathwayXL terminology. If a circuit metaphor is pursued, it needs its own Mythoras-voiced naming (matching the Protocol's "structural, compiled" register per CRITICAL CORRECTION 1/Tone axioms), not a half-remembered borrowed term.

**Status: open design direction, not a decision.** This belongs alongside the existing Skill Frame "support count/rules OPEN" note in CONTEXT.md as a candidate shape, flagged for a grill session — likely the same session (or adjacent to) any Skill Frame topology lock, since it changes what "linking a Support Card" even means mechanically.

---

## Thread 2 — Attribute-leaning Skill Cards ("Authority gem" etc.)

### 2.1 Fact-check: did Chris Wilson call the red gem a "strength gem"?

**FACT (multiple independent sources, high confidence):** PoE's socket-color-to-attribute mapping is real and well-documented: **red = Strength, green = Dexterity, blue = Intelligence**, and gems (skill gems and support gems alike) are colored to match the attribute they lean on, with hybrid gems spanning two colors (e.g. Str/Dex, Dex/Int) for hybrid-attribute skills. Sources: [Maxroll — PoE Attributes & Colors Guide](https://maxroll.gg/poe/getting-started/attributes-for-beginners), [Forbes — Working With Gems and Skills](https://www.forbes.com/sites/kevinmurnane/2018/12/08/a-guide-to-ease-your-way-into-path-of-exile-part-2-gems-and-skills/), [PoE Wiki (Fandom) — Skill gem](https://pathofexile.fandom.com/wiki/Skill_gem), [PoE 2 Wiki (Fextralife) — Gems](https://pathofexile2.wiki.fextralife.com/Gems).

**Could not verify:** No specific, citable Chris Wilson quote using the exact phrase "strength gem" (or "red gem"/"strength gem" as an informal community-facing label he coined) turned up in this search pass. This does **not** mean he never said it — community shorthand very plausibly originated from something he or another GGG dev said informally (in a stream, an old forum post, or a since-removed interview), and "strength gem" / "red gem" is extremely common **community** shorthand regardless of who coined it. Treat "Chris Wilson specifically said this" as **owner recollection, unconfirmed** — the underlying mechanic (color = attribute lean) is **confirmed fact**; the attribution of the specific phrase to Chris Wilson personally is not.

**INFERENCE:** The owner's instinct is directionally sound even if the specific attribution is fuzzy — PoE's own community and likely its devs do informally talk about gems by attribute-color nickname, hybrid gems included. Mythoras adopting a loose "Authority-leaning" / "Invictus-leaning" naming convention for Skill Cards would be following a real, well-established PoE pattern, whether or not Chris Wilson personally said the exact words.

### 2.2 Does an attribute-leaning classification for Skill Cards make sense?

This is a **different surface** from the CONTEXT.md open question, and that distinction needs to stay explicit:

| Surface | Where it lives in CONTEXT.md | What's open there |
| --- | --- | --- |
| **Item/gear affixes** | Open Design Explorations → "Modifier / Affix Classification System" | Whether items use prefix/suffix, a **quad classification aligned to the 4 Attributes** (Authority/Invictus/Animus/Order, max 4 affix slots), a hybrid, or something else. Explicitly unresolved; a prior research pass ([`RESEARCH_AFFIX_PREFIX_SUFFIX_LEAN_2026-08-11.md`](../../RESEARCH_AFFIX_PREFIX_SUFFIX_LEAN_2026-08-11.md)) found the owner **leans** prefix/suffix for gear with the quad idea still open, not decided. |
| **Skill Cards** | Not addressed by that section at all — Skill Card is defined structurally (creature-local, installed in Skill Frame) with no attribute-identity dimension mentioned anywhere in CONTEXT.md | Nothing currently proposes an Attribute-lean identity on Skill Cards. This would be a **new** open question, not an extension of an existing one. |

**These are two different systems that the owner may be conflating** (his framing — "Chris Wilson called the red *gem* a strength gem" — is about PoE's *skill* gems, not PoE's *item* affixes; PoE doesn't have an attribute-color system on rare-item affixes at all). Mapping that onto Mythoras, "Authority gem" energy is a Skill Card question; "quad affix classification" is an item-mod question. They are not automatically the same design decision and should not be silently merged into one.

**That said — if both land on an Attribute-aligned identity scheme, that is a notable thematic throughline worth surfacing, not something to bury:**

- Mythoras already has 4 Attributes (Authority, Invictus, Animus, Order) doing double duty as the "4 is thematically important" motif noted explicitly in the CONTEXT.md quad-classification writeup (4 Attributes, 4 Foundations).
- If Skill Cards get an Attribute lean (Thread 2's ask) **and** item affixes get a quad-Attribute classification (existing open question), the same four-color identity language would be legible across two different progression surfaces — skills and gear — the way PoE's Str/Dex/Int colors are legible across skill gems even though PoE never extended that specific color system to item affixes. This could be a genuine differentiator (a coherent Attribute-identity throughline PoE itself doesn't have) or it could be redundant/confusing if players can't tell why a Skill Card's Attribute-lean and an item's Attribute-affix mean different things.
- This is exactly the kind of cross-system resonance that's easy to accidentally lock into canon by writing it into two separate docs without ever deciding it together. Flagging here so it surfaces as one conversation, not two independent asks that get resolved inconsistently.

### 2.3 What this thread does NOT do

- Does not close OD status on the item-affix quad classification (still OPEN per CONTEXT.md and per the 2026-08-11 lean note).
- Does not invent Mythoras Skill Card Attribute-lean rules, colors, or hybrid-card lists.
- Does not assert Chris Wilson's exact words as fact — only the underlying gem-color-to-attribute mechanic is confirmed.

**Status: open, exploratory.** Worth raising at the same or an adjacent grill session as the affix classification question, explicitly as two related-but-distinct decisions (Skill Card identity vs item affix classification), with the shared-motif question ("do we want one Attribute-identity language across both, or keep them separate on purpose?") named out loud rather than assumed.

---

## FACT / INFERENCE / owner-recollection index

| Claim | Class |
| --- | --- |
| The linked video (`PwBmzi9zuqU`) is titled "Path of Exile - Skill System Demonstration," posted by the official PoE channel | **FACT** (YouTube oEmbed) |
| No game/studio called "PathwayXL" was found in any search | **FACT** (absence of evidence, multiple query angles) |
| "PathwayXL" is the owner's misremembering of "Path of Exile" | **INFERENCE** (plausible, not provable) |
| "Onboarding processing unit" is real PoE/other-game terminology | **UNVERIFIED** — could not confirm or deny |
| PoE gem sockets are colored red/green/blue for Str/Dex/Int, hybrids exist | **FACT** (multiple sources) |
| Chris Wilson personally used the phrase "strength gem" | **UNVERIFIED** — owner recollection, not found in this pass |
| Mythoras Skill Frame (anchor/satellite nodes, Support Cards) is structurally similar to PoE's gem/support-link model already | **FACT** (CONTEXT.md as written) |
| A "circuit" framing would need to introduce a real mechanical difference (e.g. order-dependence) to avoid being redundant with Support Cards | **INFERENCE** |
| Skill Card Attribute-leaning and item-affix quad classification are two distinct open questions the owner may be conflating | **INFERENCE**, flagged per task instructions |
| If both surfaces converge on Attribute-identity, that's a thematic throughline worth deciding deliberately | **INFERENCE** / recommendation |

---

## Sources

### Primary / near-primary
- [`CONTEXT.md`](../../CONTEXT.md) — Progression & Build (Skill Card, Skill Frame, Support Card, Motherboard Grid, Attributes); Critical Corrections #9, #12, #13; Open Design Explorations → Modifier / Affix Classification System.
- [`RESEARCH_AFFIX_PREFIX_SUFFIX_LEAN_2026-08-11.md`](../../RESEARCH_AFFIX_PREFIX_SUFFIX_LEAN_2026-08-11.md) — prior owner lean on affix classification (prefix/suffix leaned, quad-Attribute still open).
- YouTube oEmbed API response for `https://www.youtube.com/watch?v=PwBmzi9zuqU` (title/author verified directly).

### Secondary
- [Maxroll — Path of Exile Attributes & Colors Guide for Beginners](https://maxroll.gg/poe/getting-started/attributes-for-beginners)
- [Forbes — A Guide To Ease Your Way Into 'Path Of Exile' Part 2: Working With Gems And Skills](https://www.forbes.com/sites/kevinmurnane/2018/12/08/a-guide-to-ease-your-way-into-path-of-exile-part-2-gems-and-skills/)
- [Path of Exile Wiki (Fandom) — Skill gem](https://pathofexile.fandom.com/wiki/Skill_gem)
- [Path of Exile 2 Wiki (Fextralife) — Gems](https://pathofexile2.wiki.fextralife.com/Gems)
- [GDC Vault — Designing 'Path of Exile' to Be Played Forever](https://www.gdcvault.com/play/1025784/Designing-Path-of-Exile-to) (not fetchable for full transcript in this pass; listed for future follow-up if the "processing unit" phrase needs another verification attempt)
- [80.lv — GDC: Designing Path of Exile](https://80.lv/articles/gdc-designing-path-of-exile)

### Searched, found nothing relevant (noted for completeness)
- General web search for "PathwayXL" (returned unrelated companies: PathwayX Limited (UK), PathwayX.ie, PathXL digital pathology, PathwaysX)
- Steam search for "PathwayXL" (no matching title; only the unrelated 2019 tactical RPG *Pathway* by Robotality)
- Search for "onboarding processing unit" in any game-design context (no relevant results)
- Search for a direct Chris Wilson quote using "strength gem" (no citable source found)

---

*End of research note.*
