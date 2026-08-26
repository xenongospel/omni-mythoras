# Research — Locked Skill + Variable Configurable Slots, Per-Creature/Species (Luminary Vector, Part 3)

**Date:** 2026-08-19
**Status:** Exploratory synthesis only. **Not canon.** Answers no open question; may itself surface new ones.
**Relation to prior work:** Third pass on the same owner thread as [RESEARCH_POE_LUMINARY_MERC_VECTOR_2026-08.md](../../RESEARCH_POE_LUMINARY_MERC_VECTOR_2026-08.md) (correction file) and [RESEARCH_MERC_PROGRESSION_VECTOR_BB_2026-08.md](../../RESEARCH_MERC_PROGRESSION_VECTOR_BB_2026-08.md) (superseded BB angle, kept for UX-only lessons). Read both in full before this file — this file does not restate their content, only extends it.

---

## 0. The new owner idea (faithful restatement)

PoE's Luminary lets mercenaries have skills allotted to them with Support gems, including "exceptional" supports (a real tier — see §2) that offer unusual flexibility and encourage min-max replacement decisions over a build's life. Owner asks: could Mythoras creatures work similarly but **differentiated by creature** — as part of a "generational spawning" mechanism, *some* creatures ship with a **fixed main skill (not swappable) plus some number of empty configurable slots** for new Skill Cards, while *other* creatures are **fully open/configurable** — making skill flexibility itself a per-creature (or per-species, or per-generation) trait rather than a uniform rule.

Owner flags this might already be covered by an existing "resident system" and asks to check.

---

## 1. Repo search results — "resident system," "locked skill," "generational spawning"

**FACT (negative result):** `grep -rniw "resident"` across all `*.md` in the repo returns **zero matches**. No file, term-table entry, or design note anywhere in the repo uses "resident" or "resident system" in any sense — game mechanic, technical, or otherwise. This term does not currently resolve to anything.

**Flag for owner:** "Resident system" does not exist in the repo. Please clarify what you mean — possibilities worth asking about: (a) something from a different project/reference game not yet logged here, (b) a mental shorthand for the "creature stays put with a subset of its slots filled" idea you're describing right now (in which case this file *is* the first write-up of it), or (c) a term you're about to introduce. Do not let this file's silence be read as "confirmed doesn't exist forever" — it means **not found in this repo as of 2026-08-19**.

**FACT:** "Locked skill" and "generational spawning" as literal phrases also return no hits. However, three adjacent concepts already exist and are close enough that this idea risks re-deriving them rather than adding new ground:

### 1.1 Procedural Frame Generation (DOC_v3.md §11.5) — closest existing match

> "Each species has a **leyline blueprint** — a parameter set defining: anchor count range and backbone zone placement; zone character distribution... Individual creatures generate their Frame within these parameters — **species-recognisable in topology, individually unique in node positions, colour weights, and latent link layout.**"

This is **already** a per-species template that produces per-individual variance at spawn/capture time — the mechanical skeleton of "generational spawning" the owner is describing. It currently varies *node position/topology/colour*, not *which anchors are locked vs. open*. That is the gap this file explores (§3).

### 1.2 Progressive Frame Revelation (DOC_v3.md §11.6)

Full Frame capacity is visible as a silhouette from the start (latent nodes dim); active nodes illuminate as Technician Level rises. This is a **capacity-unlock-over-time** axis, not a **per-individual variance-at-spawn** axis — different question, easy to conflate with the owner's ask.

### 1.3 Post-Capture Stat Stability (DOC_v4.md §34.5)

> "Creature stats are fixed at capture and remain stable until very late endgame where rare boss drops enable specific stat rerolling... Finding a creature with excellent rolls is an event worth celebrating."

Precedent for "this individual creature's configuration is largely locked at spawn, and un-locking/rerolling it is a rare, celebrated, late-game event" — same shape of tension (early commitment vs. late-game flexibility) the owner's idea implies for skill slots specifically.

**Net read:** Nothing in the repo is called "resident system," but §1.1–§1.3 together mean Mythoras *already* has (a) species-level generation templates and (b) a "fixed-until-rare-late-unlock" pattern. The owner's idea is not starting from zero — it is asking whether the **lock/open axis of Skill Card slots** should ride the *same* per-species/per-individual generation machinery that topology and stats already use, rather than being a wholly new system.

---

## 2. PoE fact-check — "exceptional" supports encouraging min-max replacement

The two existing merc files cover Luminary's permanent-hire, gear-rights, and Ascendancy-as-companion-identity angles well, but **neither mentions "Exceptional" as a support-gem tier name** — that is a genuinely separate PoE system the owner is folding into the same sentence, worth fact-checking on its own.

**FACT:** "Exceptional Support Gems" are a real, named gem tier in current PoE (introduced 3.28 "Mirage," carried into 3.29 "Curse of the Allflame," July 2026). They are described as more transformative than standard supports, "offering an additional way to customise your build in the late game and extending character customisation even further into a build's life." Max gem level is 3 (level 4 achievable via Vaal Orb corruption). 3.29 shipped three Exceptional supports (Coursing Current, Crystalfall, Communion) alongside four Exceptional *skill* gems ("Pact Gems") that empower a spell group while imposing a drawback/Affliction.
Sources: [AOEAH — PoE 3.29 New Skills & Support Gems (Pact, Exceptional, Transfigured)](https://www.aoeah.com/news/4673--poe-329-new-skills--support-gems-pact-exceptional-transfigured); [AOEAH — PoE 3.28 Best Exceptional Support Gems & New Skill Gems](https://www.aoeah.com/news/4412--poe-328-best-exceptional-support-gems--new-skill-gems); [Maxroll — 3.29.1 Patch Notes](https://maxroll.gg/poe/news/3-29-1-patch-notes) (confirms a bug fix referencing "Exceptional Support Gem, Coursing Current" as a drop, corroborating the tier is live in 3.29).

**FACT:** Luminary (Scion Ascendancy) permanently hires and gears Mercenaries; the second Ascendancy node (Oath of Fealty) makes the merc link permanent, removes the death penalty, and reduces link skill costs — a progression gate where the *relationship* to the merc becomes more flexible/durable over time, not the merc's skills specifically becoming more swappable.
Source: [EZG — PoE 3.29 Scion Luminary Is Here](https://www.ezg.com/blog/poe-3-29-curse-of-the-allflame-scion-luminary-two-powerful-mercenary-builds-change-how-you-play).

**INFERENCE (not confirmed by primary GGG source in this pass):** Search results did not surface a first-party GGG statement that Exceptional supports are specifically gated to, or thematically tied to, Mercenaries/Luminary. They read as a general 3.28/3.29 crafting-tier addition available build-wide, not a merc-exclusive mechanic. Treat "exceptional supports on mercs specifically encourage replacement" as the owner's own synthesis/read of the system, not a directly cited GGG design statement — worth flagging so this file doesn't get cited later as if GGG said mercs specifically get exceptional-tier flexibility.

**Conclusion for this section:** the "exceptional support tiers encouraging min-max replacement" detail is real but is a **separate PoE system** (gem tier/rarity) from the Luminary/merc permanence system already covered in the two prior files. The owner's framing merges them — reasonable as inspiration, but Mythoras should treat "some slots take any support, rarely a much stronger unusual one drops" and "creature-level lock/open variance" as two different levers, not one.

---

## 3. Synthesis — locked-main-skill + variable open-slot-count, varying per creature/species

### 3.1 What genuinely overlaps with the two prior files

- **Per-entity identity-shaping via configuration constraints** is the same underlying move as Luminary's Ascendancy-shapes-companion-rules principle (RESEARCH_POE_LUMINARY_MERC_VECTOR §"Portable principle"): a structural rule above the loadout that determines *how much* the loadout can be rearranged. There it lived on the Technician (Foundation/Ascendancy); here the owner is asking whether an analogous rule could live on the **creature/species** instead.
- **"Perk hinges as power steps"** and **"talent-like bias"** from the BB file (§2.5, §3.1) are close cousins: BB already models "some units are just built different" via talent stars/traits without hard class locks. The owner's ask is a harder, more structural version of that same soft-bias idea — a *bindingly locked* main skill rather than merely biased growth.
- **Do not treat this as new ground alone** — it inherits the open question already logged in the BB file (§8.2): *"Are 'hinge' upgrades creature skills, link ranks, Grid notables, or Cipher recipes?"* The owner's idea is one candidate answer to that pre-existing open question, not a fully separate topic.

### 3.2 What is genuinely new relative to both prior files

Neither prior file discusses **variance in configurability itself as a per-creature trait**. Both treat Skill Frame/Support flexibility as uniform across creatures (only capacity — anchor count, Technician Level gates — varies, per CONTEXT.md #9 and DOC_v3 §11.5–11.6). The owner's idea introduces a **new axis**: not "how many slots," but "how many of those slots are even editable," as a designed property that differs creature-to-creature. That is new.

Two sub-shapes worth naming separately, since the owner's phrasing conflates them:

1. **Fixed main skill, non-swappable, plus N empty configurable slots.** The creature has an authored signature move (thematically close to existing **Breakthrough** — CONTEXT.md Progression table: "one skill becomes the creature's navigational star," per SKILLS_REDESIGN_EXPLORATION §4.5) that cannot be replaced, with normal open slots around it.
2. **Fully open/configurable creatures** as the other end of the same spectrum — no locked anchor at all.

If (1) is read against existing canon, **the fixed/locked anchor already has a name-shaped slot to live in**: Breakthrough is explicitly "one per creature" (Ownership & Scope table) and already reads as an authored, sticky identity skill. The owner's "locked main skill" may not need a new mechanic at all — it may be **Breakthrough with its lock made explicit and its presence/absence made a per-species trait**, rather than a universal one-per-creature guarantee.

### 3.3 What it would require if pursued

- **A new per-species (or per-individual, riding DOC_v3 §11.5's leyline blueprint) data field**: something like "lockable anchor count" or "% of anchors generated pre-filled and immutable" per species. This slots naturally into the *existing* leyline blueprint parameter set (anchor count range, zone distribution, etc. — DOC_v3 §11.5) rather than requiring a parallel system. Extending that blueprint's parameter list is a much smaller lift than inventing new machinery.
- **Interaction with Skill Frame species-specific topology (CONTEXT.md #9, Skill Frame row):** CONTEXT.md already states topology is species-specific with "support count/rules OPEN." Locking specific anchors is a natural extension of "species-specific topology," not a conflict — but it does mean **CONTEXT.md's "support count/rules are OPEN" note would need to grow to cover "lock state" as an additional open parameter**, otherwise a future agent reading CONTEXT.md literally would not know lock/unlock varies per species.
- **Interaction with Principal (OD-002, CONTEXT.md #13):** Principal is "a single-stage specialisation choice on a species... configuration OPEN." A locked main skill sounds adjacent to Principal but is **not the same axis** — Principal is a chosen branch that "severely changes how the creature plays"; a locked Skill Card anchor is a fixed *skill*, not a specialisation choice. Do not merge these without an explicit grill decision: is the locked skill *itself* sometimes a Principal-granted skill (i.e., Principal choice determines what gets locked), or is species-level locking independent of and prior to Principal selection? This is a real fork the owner has not stated a position on — flag, don't assume.
- **Interaction with Breakthrough (Ownership & Scope table):** as noted in §3.2, this is the highest-overlap-risk collision. A grill session should explicitly resolve whether "locked main skill" *is* Breakthrough (rename/reuse), *replaces* Breakthrough for some species, or is a **third**, additional concept — three different systems is a real risk of bloat the CONTEXT.md pitfall language elsewhere warns about (see SKILLS_REDESIGN_EXPLORATION §3 "5× Frame micromanagement" pitfall — adding axes per-creature multiplies UI/authoring cost across 5 squad slots × bench).
- **Economy/itemisation knock-on:** if some creatures have fewer *editable* slots, their Skill Card drop/craft demand is structurally lower than fully-open creatures of the same level — this has itemisation-balance implications (rarer creatures = more valuable precisely *because* more configurable, an econ lever not previously logged) that would need to be scoped alongside the still-open Modifier/Affix Classification question (CONTEXT.md "Open Design Explorations").

### 3.4 Risk of re-deriving existing research

**Explicit flag:** this idea sits close enough to three already-logged things (Procedural Frame Generation's per-individual variance, Breakthrough's one-locked-skill-per-creature rule, and the BB file's still-open "hinge upgrade" question) that a grill session should **first** check whether the owner's ask resolves to "make Breakthrough's presence/strength itself vary by species, and make some species ship with more than one locked anchor" rather than authoring a wholly new lock/unlock system alongside Breakthrough. Treat this file as **narrowing an existing open question**, not opening a fourth parallel one.

---

## 4. Open questions (do not invent answers)

1. What does "resident system" refer to? Not found anywhere in this repo as of 2026-08-19 — needs owner clarification (§1, Flag).
2. Is the "locked main skill" the existing **Breakthrough** mechanic reused/renamed, a species-level extension of Breakthrough (more than one lockable anchor per creature), or a genuinely separate third concept? (§3.2–3.3)
3. Does lock/unlock state ride the existing **leyline blueprint** per-species parameter set (DOC_v3 §11.5), or does it need its own authoring surface?
4. Does a species' "how many anchors are locked" relate to, or get set by, its **Principal** choice (OD-002), or is it prior to/independent of Principal? Not stated by the owner — do not assume either direction.
5. Is "fully open/configurable" ever the *default* for common species and lock-in reserved for rare/legendary-tier creatures (mirroring DOC_v4 §34.5's "rare boss drops enable stat rerolling" framing), or could commonness and lock-state be uncorrelated design axes?
6. Economic consequence: if configurability becomes a scarcity axis, does that reopen or interact with the still-unresolved Modifier/Affix Classification question (CONTEXT.md Open Design Explorations)?
7. Confirm against a first-party GGG source (not surfaced in this pass) whether Exceptional support gems are mechanically tied to Mercenaries specifically, or are a build-wide tier the owner is associating with mercs by observation — affects how much weight "exceptional supports encourage merc replacement" should carry as a design precedent.

---

*End of file. No GDD lock. No CONTEXT.md edits made — all findings above are proposals for a future grill session.*
