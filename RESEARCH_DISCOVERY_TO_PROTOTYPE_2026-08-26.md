# Discovery → design exploration → prototype (2026-08-26)

**Status:** Research only. **Not Mythoras canon.** Does not amend [`POSTURE_REQUIREMENTS.md`](apps/mythoras-client-prototype/POSTURE_REQUIREMENTS.md), [`CONTEXT.md`](CONTEXT.md), or [`SYSTEM_PROMPT.md`](apps/mythoras-client-prototype/SYSTEM_PROMPT.md). Nothing here installs, no file outside this one was touched.
**Date:** 2026-08-26
**Audience:** How the owner gets from a 30-doc reference pile to **one screen that looks like the thing in their head** — and whether Dom Need's "generate several static screens, take elements, form a final calculus" is the right method for *this* problem.

Builds on [`RESEARCH_STUDIO_HARNESS_SKILLS_2026-08-26.md`](RESEARCH_STUDIO_HARNESS_SKILLS_2026-08-26.md) (Dom's stand-up, Pocock × Uncle Bob, lost-in-the-middle, game-skills catalogue). That pass answered *how to run agents*. This pass answers *how to get a picture*. It does not repeat the harness material.

Claims tagged **FACT** (fetched primary source) / **INFERENCE** (reasoning for Mythoras) / **SECONDARY** (second-hand, low trust).

---

## Question

1. How do named, high-trust engineers structure discovery → design exploration → working prototype?
2. Is "generate N different static screens, then cherry-pick into a final calculus" an established technique or an anti-pattern?
3. Why does LLM UI default to SaaS slop, and what mechanically fixes it?
4. Typography: how do you get intentional type instead of a system stack?
5. How do solo devs greybox a game HUD *from reference* — is tracing a legitimate skeleton?
6. Start over (a), push HUD fidelity (b), or systems-first with ugly frontend (c)?

---

## Sources

| Item | Link | Trust |
| --- | --- | --- |
| **Ousterhout, *A Philosophy of Software Design* 2e, Ch. 11 "Design it Twice"** | [aposd2e mirror, ch11](https://yingang.github.io/aposd2e-zh/en/ch11.html) | **High** — book primary, read via a full-text mirror of the 2nd edition |
| **Matt Pocock — `/prototype` skill, `UI.md`** | on disk: `~/.claude/skills/prototype/UI.md`; upstream [mattpocock/skills](https://github.com/mattpocock/skills) | **Highest for this question.** Named engineer, his own skill, already installed here |
| **Matt Pocock — `codebase-design/DESIGN-IT-TWICE.md`, `design-an-interface`** | on disk: `~/.claude/skills/codebase-design/`, `~/.claude/skills/design-an-interface/` | **High** — same repo, primary |
| **Anthropic — `frontend-design` SKILL.md** | [raw github, anthropics/skills](https://raw.githubusercontent.com/anthropics/skills/main/skills/frontend-design/SKILL.md) | **Highest vendor.** Fetched in full |
| **Anthropic — Claude Code best practices ("give Claude a way to verify its work")** | [code.claude.com/docs/en/best-practices](https://code.claude.com/docs/en/best-practices) | **Highest vendor** |
| Anthropic — *Improving frontend design through Skills* ("distributional convergence") | [claude.com/blog](https://claude.com/blog/improving-frontend-design-through-skills) | High vendor — **full page fetch timed out**; quoted from the search index snippet only |
| **Andrew Ng — Loop Engineering: three key loops** | [The Batch](https://www.deeplearning.ai/the-batch/three-key-loops-for-building-great-software) | **High** — his own letter, fetched in full |
| Andrew Ng — Evals & error analysis, pts 1–2 | [pt 1](https://www.deeplearning.ai/the-batch/improve-agentic-performance-with-evals-and-error-analysis-part-1), [pt 2](https://www.deeplearning.ai/the-batch/improve-agentic-performance-with-evals-and-error-analysis-part-2) | High |
| **Andrej Karpathy — *Software Is Changing (Again)*, YC** | [YC library transcript](https://www.ycombinator.com/library/MW-andrej-karpathy-software-is-changing-again) | **High** — verbatim transcript |
| **Simon Willison — Embracing the parallel coding agent lifestyle** | [simonwillison.net](https://simonwillison.net/2025/Oct/5/parallel-coding-agents/) | **High** — own blog, fetched in full |
| Armin Ronacher — The Tower Keeps Rising; The Coming Loop | [tower](https://lucumr.pocoo.org/2026/7/13/the-tower-keeps-rising/), [loop](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/) | High — own blog |
| Geoffrey Huntley — /specs, porting, ralph loops | [ghuntley.com/specs](https://ghuntley.com/specs/), [/porting](https://ghuntley.com/porting/) | Medium-high — primary but idiosyncratic; no design content |
| **Zach Bohn (UI Designer, Sony Santa Monica; GDC speaker) — UI Design 101: The UI Pipeline** | [zachgamedev.com](https://zachgamedev.com/2023/08/19/ui-design-101-the-ui-pipeline/) | **High practitioner primary.** Best single source for Q5 |
| **John "The Wingless" Burnett (UI Art Director) — How do you make a videogame UI/UX wireframe** | [thewingless.com](https://thewingless.com/index.php/2021/07/01/how-do-you-make-a-videogame-ui-ux-wireframe-part-1-how-to-get-started/) | **High practitioner primary** |
| Edd Coates — Game UI Database; *Empyreal* wireframes | [eddcoatesdesign.com](https://eddcoatesdesign.com/), [Empyreal](https://www.eddcoatesdesign.com/page_Empyreal.php) | High practitioner primary — 60k+ hand-tagged screens, used by Insomniac/Arkane/Ubisoft Montréal |
| Matthew Butterick — *Practical Typography*, "Typography in ten minutes" | [practicaltypography.com](https://practicaltypography.com/typography-in-ten-minutes.html) | High — canonical typographic primary |
| v0 docs (design mode, quickstart); Vercel "How to prompt v0" | [v0.app/docs](https://v0.app/docs/design-mode), [vercel blog](https://vercel.com/blog/how-to-prompt-v0) | Vendor primary for the *tool*; silent on N-variant merging |
| Jan Willem Nijman (Vlambeer) — *The Art of Screenshake* | [INDIGO 2013 talk](https://www.youtube.com/watch?v=AJdEqssNZ-U) | High primary talk — the feel-first counterweight |
| "AI slop" explainer blogs (tasteprofile.io, sailop.com, booplex.com, seedflip.co, aiskill.market, mantlr.com, dmaya.ai, youcanbuildthings.com) | various | **LOW / SECONDARY.** SEO content farms. They converge on the right mechanism but cite Anthropic; treat only as corroboration |
| Repo locks | [`POSTURE_REQUIREMENTS.md`](apps/mythoras-client-prototype/POSTURE_REQUIREMENTS.md), [`SYSTEM_PROMPT.md`](apps/mythoras-client-prototype/SYSTEM_PROMPT.md), [`RESEARCH_INDIE_START_WITHOUT_UI_POLISH.md`](RESEARCH_INDIE_START_WITHOUT_UI_POLISH.md), `apps/mythoras-client-prototype/src/*` | Repo FACT |

---

## Verdict up front

**INFERENCE.** The owner does not have a pipeline problem, a research problem, or a taste problem. They have a **verification problem**.

Everything they have locked — plate shape, two right-tabs, board language, the exact BMFont mapping read off the Steam install — lives in **prose**. Prose is the wrong medium for layout, and no amount of more prose fixes that. Meanwhile `apps/mythoras-client-prototype/reference/dd1_hero_panel.jpg` and `dd1_hero_panel_2.jpg` sit in the repo and, on the evidence of `POSTURE_REQUIREMENTS.md` and `SYSTEM_PROMPT.md`, are *named* to the agent but never **closed into a loop** — nobody renders the built plate, screenshots it, puts it next to the jpg, and enumerates the deltas.

That loop is the single named best practice in Anthropic's own Claude Code docs, and it is the thing missing from every attempt described. Dom's N-variant method is real and defensible — but it answers *"what should this look like?"*, and the owner already knows what it should look like. Running variants against a locked reference multiplies drift by N.

---

## 1. How high-trust engineers actually structure discovery → prototype

**FACT (Andrew Ng, The Batch).** Ng names **three loops** for 0-to-1 products, at three different clock speeds:

| Loop | Clock | Who acts |
| --- | --- | --- |
| **Agentic coding loop** | minutes | agent writes, tests, iterates against spec + evals, unattended (his example: ~1 hour of the agent driving a browser to check its own work) |
| **Developer feedback loop** | tens of minutes → hours | human looks at the product and steers; "higher-level product decisions… where the UI needs improvement" |
| **External feedback loop** | hours → weeks | friends, alpha testers, A/B |

**FACT (Ng, same letter).** He explicitly rejects "taste" as the word for the human's contribution: humans have a **context advantage** — "we know a lot more than the AI system about the users and the context the product has to operate in… So long as the human knows something the AI does not, human-in-the-loop is needed to inject that knowledge into the system."

**FACT (Ng, evals letters).** Do not define the error metric first. **Build a prototype, look at a handful of outputs, then write the evals** — objective in code where possible, LLM-as-judge where not. Error analysis = read traces and find which *step* fell short, starting informally with one or two traces.

**FACT (Karpathy, YC transcript, verbatim).** "It's not useful to me to get a diff of 10,000 lines of code to my repo… I have to make sure this thing is not introducing bugs… we have to somehow keep the AI on the leash because it gets way too overreactive." And: "I always go in small incremental chunks… I want to spin this loop very, very fast… I work on small chunks of single concrete things." He frames the whole thing as a **generation–verification loop** with an **autonomy slider**, and notes that if the prompt is vague, "verification will fail… you're going to start spinning," so being *more concrete* is the cheap fix.

**FACT (Simon Willison).** His parallel-agent practice is not "N attempts at one job." It is **N different jobs** in four named categories: research/proof-of-concept spikes, "how does this work again?" explanations, small maintenance chores, and **"carefully specified and directed actual work."** On that last one, verbatim: *"Code that started from your own specification is a lot less effort to review. If you already decided what to solve, picked the approach and worked out a detailed specification for the work itself, confirming it was built to your needs can take a lot less time."* He also relays Josh Bleecher Snyder's **"send out a scout"** — hand an agent a hard task with no intention of landing its code, purely to learn where the sticky bits are.

**FACT (Armin Ronacher).** Two warnings that bear on a solo dev with 30 research docs. *The Tower Keeps Rising*: agents remove the friction that used to force shared understanding, so "each change can be reasonable in isolation… the architectural language that would let the humans reason about them together disappears." *The Coming Loop*: "I don't prompt Claude anymore. I have loops running that prompt Claude… My job is to write loops" — and he flags that when the harness judges "done", the human role erodes.

**FACT (Geoffrey Huntley).** His method is spec-extraction, not design: compress an existing codebase into `/specs/*.md` with **citations back to implementation files**, then loop one-thing-at-a-time against those specs, preferring languages with hard compiler soundness. **No visual-design content whatsoever.** Do not look to Huntley for the HUD problem.

**INFERENCE — the composite pipeline, mapped to Mythoras.**

| Stage | Named practice | Mythoras artefact that already exists | What's missing |
| --- | --- | --- | --- |
| Discovery | Willison's scout; Ng's "build then look" | 30+ `RESEARCH_*.md` | Nothing. **This stage is over-supplied.** More research is now a cost, not an input |
| Spec | Willison "carefully specified and directed"; Pocock grill → to-spec | `POSTURE_REQUIREMENTS.md` — genuinely good; MUST/MUST NOT, named references, font table | It is prose-only. No **visual** acceptance criterion |
| Exploration | Ousterhout design-it-twice; Pocock `/prototype` | the deleted layout zoo | Was run *once*, on the wrong question, and never terminated (see §2) |
| Build | Karpathy small chunks; keep the leash short | one tracing pass, 2026-08-24 | Chunks were "the whole screen," not "the left column" |
| **Verify** | **Anthropic: give Claude a check it can run** | `reference/dd1_hero_panel.jpg` | **This is the hole.** No render → screenshot → numbered diff step exists |
| Evals | Ng; Uncle Bob's deterministic checkers (prior pass) | POSTURE's MUST NOT list | Not machine-checked. "Does the word Program appear?" is a `grep`, not a vibe |

The gap is not at the front of the pipeline. It is at the back.

---

## 2. "Generate N variants, then converge" — established, with one lethal footnote

### 2.1 It is established. It has a name and a named author.

**FACT (Ousterhout, Ch. 11).** "Designing software is hard, so it's unlikely that your first thoughts about how to structure a module or system will produce the best design. You'll end up with a much better result if you consider multiple options for each major design decision: design it twice." You sketch **radically different** approaches, not variations; you don't pin down every feature, just "the most important methods"; you list pros and cons; and — directly relevant to "final calculus" — **the best design may combine features from different alternatives, or be a new one suggested by the comparison.** He explicitly extends the principle beyond modules: *"It's also useful to explore multiple designs at higher levels in the system, such as when choosing features for a user interface."*

**FACT (Matt Pocock, `~/.claude/skills/prototype/UI.md` — his own skill, installed in this workspace).** The N-variant UI pattern is a first-class skill from a named engineer. Its rules, verbatim where quoted:

- "Generate **several radically different UI variations** on a single route, switchable from a floating bottom bar. The user flips between variants in the browser, picks one (or steals bits from each), then throws the rest away."
- **Default N = 3. Cap at 5** — "More than 5 stops being radically different and starts being noise."
- Variants must be **structurally** different: "different layout, different information hierarchy, different primary affordance, not just different colours. Three slightly-tweaked card grids isn't a UI prototype, it's wallpaper."
- **Sub-shape A is strongly preferred**: mount the variants *inside the real page*, with real header, real data, real density — because "a throwaway route on its own is a vacuum: every variant looks fine in isolation."
- The cherry-pick is the *expected* output: "The interesting feedback is usually **'I want the header from B with the sidebar from C'** — that's the actual design they want."
- Anti-patterns include "sharing too much code between variants… a shared `<Layout>` defeats the point," and "promoting the prototype directly to production."
- **Termination is mandatory**: capture which variant won and why, then "delete the losing variants and the switcher… Don't leave variant components or the switcher lying around. **They rot fast and confuse the next reader.**"

**FACT (Pocock, `design-an-interface` + `codebase-design/DESIGN-IT-TWICE.md`).** For *interfaces* he spawns 3+ parallel sub-agents with a **different constraint assigned to each** (minimise the interface / maximise flexibility / optimise the common case / take inspiration from a named paradigm), presents them sequentially, compares in prose, then **"Be opinionated — the user wants a strong read, not a menu."** Anti-pattern named: "Don't let sub-agents produce similar designs — enforce radical difference."

**FACT (best-of-N, adjacent).** Racing N agents on the *same* task with objective scoring is a real, separately-documented lever, but the credible framing of it is cost-aware: you pay for all N unconditionally, and it only helps when failures are *independent*. Trust here is thin (dev-blog tier), so treat best-of-N as **not the same technique** as design-it-twice: best-of-N picks a winner by tests; design-it-twice picks a winner by judgement, and legitimately merges.

**SECONDARY / vendor.** v0 does ship three variations per prompt as a product default, and its own docs describe versions, diffs and Design Mode. The commonly-repeated advice "pick one, don't merge two variations — that path leads to muddled output" comes from a **third-party SEO guide, not Vercel**. Evidence for the anti-merging claim is thin and I would not weight it against Ousterhout.

### 2.2 The lethal footnote: Anthropic's own design skill does *not* do this

**FACT (Anthropic `frontend-design` SKILL.md, fetched in full).** Anthropic's shipped method for distinctive UI is **not** N variants. It is **one plan, self-critiqued, then built**:

> "Work in two passes. First, brainstorm a short design plan… create a compact token system with color, type, layout, and signature. Color: describe the palette as 4–6 named hex values. Type: the typefaces for 2+ roles… Layout: a layout concept, using one-sentence prose descriptions **and ASCII wireframes** to ideate and compare. Signature: the single unique element this page will be remembered by."
>
> "Then review that plan against the brief before building: if any part of it reads like the generic default you would produce for any similar page… revise that part, say what you changed and why. **Only after you've confirmed the relative uniqueness of your design plan should you start to write the code, following the revised plan exactly.**"

And decisively for Mythoras:

> **"Where the brief pins down a visual direction, follow it exactly — the brief's own words always win, including when it asks for one of these looks."**

**INFERENCE.** So the honest answer to the owner's question is not "Dom is right" or "Dom is wrong." It is: **N-variants and single-plan-self-critique answer different questions, and the owner is asking the second one.**

| | Design-it-twice / `/prototype` UI.md | Anthropic frontend-design |
| --- | --- | --- |
| Question it answers | "What should this look like? I don't know yet" | "I know what this should look like / I have a brief. Don't give me the corpus mean" |
| Input | vague intent | a pinned direction |
| Output | 3 structurally different screens + a merge conversation | one token plan → one screen |
| Mythoras fit | the **board**, the **zone map**, the eventual **Mythoras peel** | **the DD1 plate.** Direction is pinned to a jpg |
| Failure if misapplied | you cherry-pick a Frankenstein with no coherent type or spacing rhythm | you never discover a better shape than your first idea |

**INFERENCE — and the owner has already run the variant pattern once, and it failed in exactly the documented way.** `POSTURE_REQUIREMENTS.md` §2 bans the layout zoo by name: `dd`, `runescape`, `poe`, `dualrail`, `deck`, `minimal`, `column`, `tiered`, `tabcol`, `split`, `hybrid`, `railmodes`, `turnprogram`. That *is* Pocock's sub-shape-B variant harness — but it violated three of his rules at once: N was ~12 not 3; there was no verdict captured; and the switcher was never deleted, so "debug layout switcher as the product" (POSTURE's own words) became the state of the repo. The zoo is now gone — `src/` contains no `layouts.ts`, no `?variant=` switcher, and the only `layout` hits are CSS grid properties. **Good. Do not rebuild it.** If variants come back, they come back as Pocock specifies: N=3, inside the real screen, with a written verdict and a deletion commit in the same session.

---

## 3. Why LLM UI defaults to slop, and the four things that actually move it

**FACT (Anthropic, via search snippet of the frontend-design launch blog; full page fetch timed out).** Anthropic's own name for the mechanism is **distributional convergence**: "Claude has strong design understanding, but distributional convergence obscures it without guidance." Their framing is that the capability is present and the *default* hides it — which is why a ~1,300-token skill loaded before any code changes the output at all.

**FACT (Anthropic frontend-design SKILL.md).** Anthropic is specific enough about the current attractor to be useful as a ban list. Verbatim: AI-generated design "clusters around three looks: (1) a warm cream background (near #F4F1EA) with a high-contrast serif display and a terracotta accent; (2) a near-black background with a single bright acid-green or vermilion accent; (3) a broadsheet-style layout with hairline rules, zero border-radius, and dense newspaper-like columns. All three are legitimate for some briefs, but they are **defaults rather than choices**, and they appear regardless of subject."

**SECONDARY (the SEO-blog tier, corroboration only).** The content-farm consensus is training-data gravity + typicality bias: shadcn-on-Tailwind in a B2B SaaS layout is the corpus mean; Inter, indigo/violet, `rounded-2xl`, three feature cards. One repeated anecdote — Adam Wathan choosing indigo as an "inoffensive placeholder" for Tailwind UI, which then saturated the training corpus — is plausible and widely told but I did **not** verify it against Wathan's own post. Treat as SECONDARY. The one genuinely useful idea in that tier, which matches Anthropic: a brand guide covers ~5% of the decisions a model makes on a screen; the **corpus mean fills the other 95% and wins by surface area.**

**FACT (Anthropic Claude Code best practices, verbatim).** The highest-leverage intervention is not a better adjective. It is a check the model can run:

> "Claude stops when the work looks done. Without a check it can run, 'looks done' is the only signal available, and **you become the verification loop**… Give Claude something that produces a pass or fail, and the loop closes on its own."

And the exact prescribed prompt for UI, from their own table of bad-vs-good:

> ❌ *"make the dashboard look better"*
> ✅ **"[paste screenshot] implement this design. take a screenshot of the result and compare it to the original. list differences and fix them"**

Plus: "Paste images directly. Copy/paste or drag and drop images into the prompt." And from the frontend-design skill: "Critique your own work as you build, taking screenshots if your environment supports it — **a picture is worth 1000 tokens**."

**INFERENCE — ranked, for Mythoras specifically.**

| Lever | Real effect | Status in this repo |
| --- | --- | --- |
| **1. Reference image *in the loop*, not merely named** | Largest. Converts an argument about taste into an enumerable list of deltas | ❌ `reference/dd1_hero_panel.jpg` exists and is cited in prose. Never diffed |
| **2. Render → screenshot → numbered diff → fix, 2 passes** | Anthropic's named #1 practice. Two passes is where the returns are | ❌ absent |
| **3. Negative constraints (a ban list)** | High and cheap. POSTURE already does this better than most design systems | ✅ POSTURE §4.3 / §5 MUST NOTs. Not machine-checked |
| **4. A token plan before code** (4–6 hex values, faces per role, ASCII wireframe, one signature element) | High. This is Anthropic's actual method | ⚠️ half-present: faces are specified, palette/scale/spacing are not |
| Adjectives ("gothic", "dense", "game-looking") | ~zero on their own | POSTURE mostly avoids this. Good |
| Naming a reference without supplying it | Weak. "Darkest Dungeon" is a *token in the corpus*, and the corpus mean for "game HUD in HTML" is a dark admin panel | This is the mechanism behind every "quite poor" attempt |

**INFERENCE — the contradiction POSTURE already caught.** POSTURE §5 bans *"a prompt that says 'match DD shape but do not copy gothic type.' That contradiction produced the last slop."* That diagnosis is correct and matches Anthropic's rule that the brief's own words win. A prompt that pins the shape and un-pins the costume hands the costume axis back to the corpus mean, and the corpus mean for an un-pinned axis is a slate-and-Inter admin slab. **Never leave an axis free in a tracing pass.**

---

## 4. Typography — the owner is closer than they think, and missing exactly one table

**FACT (Butterick, *Typography in ten minutes*).** The five rules, in his order of importance:

1. **Body text decides everything** — "there's more body text than anything else. So start every project by making the body text look good. Then worry about the rest."
2. Point size: 15–25px on the web.
3. Line spacing: **120–145%** of point size (unitless `line-height`, e.g. `1.3`).
4. Line length: **45–90 characters**.
5. Font choice comes **last**, and is the one place he says to spend money — ignore system fonts.

**FACT (Anthropic frontend-design SKILL.md).** "Typography carries the personality of the page. Pair the display and body faces deliberately, not the same families you would reach for on any other project, and **set a clear type scale with intentional weights, widths, and spacing**. Make the type treatment itself a memorable part of the design, not a neutral delivery vehicle." Its planning step demands "the typefaces for **2+ roles** (a characterful display face used with restraint, a complementary body face, and a utility face for captions or data if needed)."

**SECONDARY (SEO tier — the mechanism is right even though the sources are weak).** The repeated claim across design-token blogs: adjectives do not constrain LLMs; a **closed set** of composite tokens does, because it converts type from a *generation* problem into a *selection* problem — the agent asks "which scale step?" not "what size?". Every step must carry its own line-height, because agents apply one leading to everything. And **negative constraints are load-bearing**: "No other typefaces. No system fonts. No weight 700," since a helpful model will silently add Inter as a fallback. Sources are content farms; the reasoning is consistent with Anthropic's primary skill, so I'd act on it while marking it SECONDARY.

**FACT (repo).** POSTURE §5 already contains the single best artefact in this whole research pile: a **job → face mapping table read off the actual Steam install** (`ubuntu_small` → class/stats/tooltips/glossary body; `ubuntu_medium` → HP and headers; `dwarven_axe_medium` → hero name, inventory counts, glossary terms; `dwarven_axe_large` → banners, round number; `pips` → icons, *not a text face*), plus the licence-clean substitution (Ubuntu real family; UnifrakturCook standing in for Dwarven Axe BB; explicit rejection of EB Garamond as "the wrong job"). The build honours it: `index.html` loads `Ubuntu:400,700` + `UnifrakturCook:700` from Google Fonts, `style.css` uses Ubuntu for body and UnifrakturCook in 6 places.

**INFERENCE — so what's still wrong.** The owner specified **which face does which job** and stopped there. Nothing anywhere in the repo specifies **size, weight, line-height, tracking, or case** for any of those jobs. That is precisely the 95% Anthropic says the corpus mean fills in — and the corpus mean for "stat label in a dark panel" is 12px Inter-ish, `letter-spacing: 0.05em`, `#94a3b8`, `text-transform: uppercase`. **That is what "generic" looks like, and it will keep arriving no matter how gothic the name font is,** because names are ~2% of the glyphs on the plate and Butterick's rule 1 says the body decides.

The missing artefact is one table. Concretely, for the DD1 plate:

| Job | Face | Size | Weight | Line-height | Tracking | Case |
| --- | --- | --- | --- | --- | --- | --- |
| Hero name | UnifrakturCook | ? | 700 | ~1.0 | ? | Title |
| Class / species label | Ubuntu | ? | 400 | ? | ? | ? |
| Skill square label / count | ? | ? | ? | — | ? | ? |
| HP figures | Ubuntu | ? | 700 | 1.0 | ? | — |
| Stat grid number / label pair | Ubuntu | ? | 400 | ? | ? | ? |
| Glossary term / definition | Unifraktur / Ubuntu | ? | ? | 1.3–1.45 | ? | ? |

Fill the `?`s **by measuring the reference jpg**, not by taste: the plate is a fixed-height object, so pick the body size first (Butterick rule 1), then derive the rest as ratios of it. Then add the negative constraint POSTURE doesn't yet carry: *no third typeface; no system-font fallback other than the declared stack; no `text-transform: uppercase` on stat labels unless the reference does it.*

---

## 5. Greyboxing a game HUD *from reference* — yes, and here is the industry pipeline

**FACT (Zach Bohn, UI Designer at Sony Santa Monica, GDC speaker).** The AAA UI pipeline, in his order:

1. **Design Intent / "the Ask"** — the *problem*, e.g. "players don't know when they've picked something up." Then interrogate details before drawing anything (how many at once? what happens during a cinematic? icon, name, rarity?).
2. **Wireframe.** Verbatim: **"In the AAA world, we wireframe EVERY element."** Purpose: explore the problem space, align on direction, "agree on exactly what data that element needs/should display," and get buy-in. "A wireframe can be as simple as a napkin/whiteboard drawing" — he's used Illustrator for 10+ years.
3. **3A — Initial Prototype.** Verbatim: "Just like in Level Design, the first pass implementation for a UI element is often made of **blocks or simplified shapes**. Your goal should be to get the raw functionality in without worrying too much about the visual appearance." Three named reasons: rapid prototype mentality, **it forces the data-side workflow** ("how is the UI receiving the specific information needed?"), and **scope bet** — "changing an element after it's received a full art-support pass is far more time-consuming/risk-prone than changing a skeleton version."
4. **3B — Art mockup, in parallel** (if you have the people).
5. **Playtest, playtest, playtest.** He also names the end goal: **"Invisible UI"** — the player's confidence gets high enough that navigation becomes instinctual — and **Consistency** as the tenet that gets you there.

**FACT (John Burnett, UI Art Director).** On what a wireframe is *not*: "At early stages… a wireframe is absolutely NOT a pixel-perfect blueprint in any exacting detail. In fact, too much detail too early will pigeon-hole designs, push you into technical cul-du-sacs." On order: **"Raw, functional UX comes first, and if done properly, the artwork is then draped over the solid foundation you've just rigged. If done poorly, you'll be constantly juking, rushing and hacking in art until you ship."** On how to start: "carve out the vast screen space and create 'zones' based on the screen's needs… start placing elements based on their **hierarchy**, or their relative importance to the player. Although decals and ornaments are important, they should be **dim and distant considerations at this phase**." Two things that map straight onto a DD1 trace:

- **"test your Designs early by superimposing the wireframe in the game. In a pinch, you can also place the wireframe over a video of the game playing"** — i.e. overlay-against-reference is *explicitly* his gold-star technique.
- **Done-ness test: "if an Engineer can 'walk' themselves through your work, the wireframe is effectively done."**
- And his ⅓ / ⅔ carve heuristic for dividing a screen's "meat", favouring text in narrow portrait zones and grids in wide zones — which is, incidentally, the DD1 plate's own left-hero / right-panel split.

**FACT (Edd Coates).** The Game UI Database is 60,000+ screenshots **hand-tagged**, not AI-driven, and is "used extensively as a key part of the UI pipeline by studios all over the world such as Insomniac Games, Arkane Studios, Double Fine, Frontier Developments, Compulsion Games and Ubisoft Montreal." His own *Empyreal* portfolio page ships the pipeline in public: System Menus, Resource Menus, Gameplay & HUD — and a **Wireframes** section (5 sheets), with the note that he was "brought on early in the project to define the game's UX, control scheme and UI Art direction" and *then* "chose a blueprint aesthetic to go with the game's themes."

**INFERENCE.** So: is tracing a reference screenshot as a layout skeleton established practice? **Yes, three ways, and none of them are cheating.**

1. Reference-hoarding is *institutional* in this discipline — Ubisoft Montréal and Insomniac use a screenshot database as a pipeline stage. The owner's 30-doc reference pile is not the pathology; it's the normal input. The pathology is that it never converts.
2. Overlaying your layout on the reference is a named practitioner technique (Burnett), and superimposing against a *busy* background is his explicit warning — which matters here, because POSTURE puts a voxel board directly above the plate.
3. The industry does the skeleton in **blocks and simplified shapes first**, for a reason that is not aesthetic: it forces the data question. Bohn's "how is the UI receiving the specific information needed?" is exactly Mythoras's real open question — the left column needs a *creature* with a portrait, a name, skills-with-keywords, HP, a second resource, a stat grid and two trinket slots, and the right panel needs a zone graph and an inventory grid. **A greybox that resolves those bindings is worth more than a gothic frame that fakes them.**

**INFERENCE — "programmer art but correct IA" vs "pretty but wrong."** The practitioner verdict is unambiguous and it is Burnett's: art is *draped over* a rigged foundation, and doing it the other way means "juking, rushing and hacking in art until you ship." Bohn's scope-bet says the same thing in cost terms. **But** — and POSTURE already knows this — that is an argument about *sequence*, not about *permission to look bad*. POSTURE's own line, "Prototype ≠ poor: tiles readable, plate dense, type intentional," is the correct reading, and it is compatible with everything above: *dense and intentional* is an information-architecture property, not an art property. A greybox DD1 plate with correct packing, correct hierarchy, and a real two-face type scale will read as a game. A gothic-textured plate with SaaS spacing will not.

---

## 6. The three options, and whether `RESEARCH_INDIE_START_WITHOUT_UI_POLISH.md` already answered this

### 6.1 Does the existing doc hold up?

**FACT (repo).** `RESEARCH_INDIE_START_WITHOUT_UI_POLISH.md` (2026-08-01) argues: prove play with disposable visuals and ugly functional UI first; polish is a phase, not a prerequisite. It is sourced properly — Unreal's Geometry Brush docs ("before putting any time into populating the level with… finished art"; "does not require any time or involvement from the art team"), Unity Learn greybox, Schell's Ten Tips (Answer a Question / Forget Quality / Don't Get Attached), Fullerton, Cleveland's *Ugliness Needed*, Unity's counter-nuance that grey cubes skew *external* playtests, plus PoE-as-Asteroids, StS 2015, Balatro, Vampire Survivors' circles, Last Epoch's "janky" slice. Its trap section names the exact failure mode: "React/web habits treat UI as the product → building screens feels like progress while no loop exists."

**INFERENCE — the conclusions hold up, and the doc does *not* answer the owner's current question.**

Hold up: every claim in it survives this pass and is reinforced by Bohn's scope-bet and Burnett's drape-order. Nothing here contradicts it.

Doesn't answer it: that doc was written against the trap **"every time we try to start, UI gets in the way of systems."** The owner's *current* blocker is the mirror image — **"I cannot produce one screen that looks like the reference, and that failure is what's stopping me."** Prescribing "colored rects and text UI only" to someone whose stated pain is that their output looks like a Tailwind admin panel is prescribing more of the symptom. Two specific mismatches:

- Its Mythoras implications say "cap React work to scaffolding; ban iconography/theme passes until schema churn cools." **POSTURE (2026-08-24) overrode that on purpose** — it locks a *traced* DD1 plate *including the theme*, with a font table. POSTURE is the newer, narrower, surface-specific decision and it wins on this surface. The indie doc is not wrong; it is being applied to the wrong milestone.
- Its own cited nuance is the escape hatch: Unity's placeholder-asset post says bare programmer art is fine for **internal math/logic** tests but skews **"is it fun / does it read"** tests, where you want *readable* placeholders. The owner is currently running the second kind of test — on themselves.

### 6.2 The three options, scored

| Option | Evidence for | Evidence against | Verdict |
| --- | --- | --- | --- |
| **(a) Start over** | Schell Tip #3 "Don't Get Attached"; Pocock's "promoting the prototype directly to production" anti-pattern | The zoo is already deleted; POSTURE + the font table + `reference/*.jpg` + a working Ubuntu/Unifraktur load are the *only* accumulated assets that survived. Starting over throws away the spec, not the mess | **No.** Nothing left to burn. The mess was the switcher and it's gone |
| **(b) Keep pushing HUD/UI fidelity** | POSTURE §8's done-test is a *recognition* test, which is a legitimate acceptance criterion; Anthropic's screenshot loop makes fidelity measurable rather than endless; Nijman's Screenshake is the honest case that feel/presentation is not decoration | Bohn's scope-bet: changing an element after a full art pass is expensive; Shadow Tactics' quality inflation (cited in the indie doc); this option has already been attempted repeatedly with prose-only steering | **Yes, but bounded and instrumented.** Unbounded, this is the trap. Two verification passes on one screen is not |
| **(c) Systems-first, ugly frontend, identity later** | The industry canon, and this repo's own 2026-08-01 research; Unreal/Unity/Schell/Fullerton/Cleveland | Does not address the stated blocker; the owner has demonstrated they *stall* without a picture; Unity's own nuance says unreadable placeholders corrupt "does it read" judgements | **Yes — as the state you enter *after* (b) terminates,** not instead of it |

**FACT (Nijman, *The Art of Screenshake*, INDIGO 2013).** The counterweight to systems-first is real: he takes a deliberately dull side-scrolling shooter and applies ~30 small presentation tweaks — screenshake, muzzle flashes, impact, permanence — showing the *same* mechanics go from dull to compelling. His own framing is anti-theory: "I'm not an academic… I have made a lot of games and I found out some small little tricks."

**INFERENCE.** Read Nijman correctly and he does **not** license "polish the HUD for six weeks." His 30 tweaks are applied to a *running game* and are almost all **feedback on action** — the thing DD1's plate actually does when it flashes, shakes, and stamps damage numbers. The Mythoras-relevant lesson is that **the cheapest identity win is not chrome, it's response**: a skill square that depresses, a HP bar that jolts, a tile that flashes on threat. That is an argument for (c)-with-feedback, and it is much cheaper than gothic filigree.

---

## The recommendation (INFERENCE, opinionated)

**Do not run five variants. Run two verification passes on one screen, then leave.**

The whole method, in the owner's own existing artefacts:

1. **Do not write more research.** Discovery is over-supplied. The next markdown file that is not a spec is a cost.
2. **Fill the type table in §4.** Six rows, measured off `reference/dd1_hero_panel.jpg`. Body size first (Butterick). Add the three negative constraints. This is a 30-minute job and it is the highest-value unwritten artefact in the repo.
3. **Add the missing four Anthropic tokens to POSTURE §5**: 4–6 named hex values, the spacing step, the border/plate treatment, and **one signature element** the plate is remembered by. Right now POSTURE names faces and bans slate — it does not *pin* the palette, so the palette axis is free, and free axes get filled by the corpus mean.
4. **Then run the loop that has never been run.** Verbatim from Anthropic's docs, with the repo's own jpg: paste `reference/dd1_hero_panel.jpg` → *"implement this plate. Then run the dev server, screenshot the result, put it beside the reference, and list EVERY difference in: plate height as a fraction of the window, left-column packing order, right-panel tab position, type size hierarchy, palette. Fix each. Re-screenshot."* **Two passes.** The first closes most of the gap; the second pulls back the overcorrection. Past that you are chasing pixels that need a human eye.
5. **Convert POSTURE's MUST NOT list into a script**, not a paragraph. `grep -ri "program\|programme\|skill frame" src/` returning zero is an eval (Ng, and Uncle Bob's deterministic checkers from the prior pass). So is "exactly two right-panel states." Cheap, permanent, immune to lost-in-the-middle.
6. **Then declare the plate done and go systems-first** — the 2026-08-01 doc's answer, entered deliberately rather than as an escape from a screen that never converged. Spend the next tranche on Nijman-style *response* (tile flash, bar jolt, skill press) rather than more chrome.

**Where N-variants *is* the right tool here** — and where the owner should absolutely use Dom's method, run through Pocock's rules (N=3, structurally different, inside the real screen, verdict written, losers deleted in the same session):

- **The voxel board's tile grammar.** DD1 cannot answer this; there is no reference to trace. Three radically different tile languages is the correct spend.
- **The zone-graph map.** POSTURE says "readable zone graph, not a photocopy of the battle tiles" — that is an un-pinned brief, which is exactly the design-it-twice case.
- **The eventual Mythoras peel.** When the gothic costume comes off, there is no reference. That's variant work.

The plate is not variant work. The plate is a jpg on disk and a diff nobody has run.

---

## Steal / Ignore / Park

### Steal

1. **Anthropic's verification prompt, verbatim, with the repo's own reference jpg.** Screenshot → numbered diff → fix → re-screenshot. Two passes. This is the whole recommendation.
2. **Anthropic's two-pass design plan** — token system (4–6 hex, faces per role, ASCII wireframe, one signature element) → self-critique against the brief → *then* code. And its rule that **the brief's own words win** when a direction is pinned.
3. **Pocock's `/prototype` UI.md discipline** for the board and the map: N=3, cap 5, structurally different, **sub-shape A inside the real screen**, expect "header from B, sidebar from C," **write the verdict, delete the losers.**
4. **Ousterhout's design-it-twice**, including his explicit permission to combine features across alternatives — which is the legitimate ancestor of Dom's "final calculus."
5. **Bohn's Lesson 3A**: blocks and simplified shapes first, because it forces the data-binding question the left column actually has.
6. **Burnett's overlay technique**: superimpose the layout on the reference (and test it against a busy background — the voxel board is going to be noisy).
7. **Butterick rule 1**: fix the body text first. Ubuntu at a chosen size, leading and measure, before another minute is spent on blackletter.
8. **Ng's loop separation**: agent-minutes / owner-hours / external-days. And write evals *after* looking at output, not before.
9. **Karpathy's leash**: one concrete chunk at a time. "Rebuild the whole plate" is a 10,000-line diff in HUD form.

### Ignore

- **Running N variants on the DD1 plate.** The direction is pinned. Variants there manufacture the drift the owner is complaining about.
- **Rebuilding a layout switcher of any kind.** POSTURE bans it, Pocock's own skill says it rots, and it already happened here.
- **Adjective-driven steering** ("make it look more game-like", "gothic", "premium").
- **Naming a reference without supplying the image.** "Darkest Dungeon" as prose is a corpus token; the corpus mean for a dark HTML game panel is an admin slab.
- **Any prompt that pins the shape while un-pinning the costume.** POSTURE §5 already diagnosed this as the cause of the last slop.
- **The AI-slop SEO blog tier as authority.** Right mechanism, no primary standing. Cite Anthropic instead.
- **Huntley's /specs and ralph loops for this problem.** Excellent for spec-extraction from code; contains nothing about visual design.
- **best-of-N as a design method.** It is a *correctness* lever scored by tests, not a design lever, and you pay for all N unconditionally.

### Park

- **Godot** (already parked in the prior pass; unchanged here).
- **Design-it-twice for the Mythoras identity peel** — right tool, wrong moment. It fires when the gothic costume comes off.
- **The full DESIGN.md / design-token pipeline.** POSTURE §5 plus the six-row type table is enough constraint for one screen. A token system with lints is a later, larger job.
- **Multi-agent parallel design generation** (Pocock's `design-an-interface` sub-agent fan-out) until there is a question with no reference attached.
- **External feedback loop** (Ng's third loop). No external testers until the plate and one systems loop exist.

---

## What this pass did not change

No code, no client, no ADE, no POSTURE, no CONTEXT, no SYSTEM_PROMPT, no installs, no git. `RESEARCH_INDIE_START_WITHOUT_UI_POLISH.md` is left as-is and is assessed above as **still correct, and answering a different question than the one the owner is currently blocked on**; where it and POSTURE disagree about theming the client HUD, **POSTURE (2026-08-24) is the newer, surface-specific decision and wins.** The layout zoo is confirmed gone from `apps/mythoras-client-prototype/src/` and this pass recommends it stays gone. If any of §4's type table or §3's palette/signature tokens are adopted, they belong in POSTURE §5 as a normal edit to that file — not in this research note.

---

*End of research note.*
