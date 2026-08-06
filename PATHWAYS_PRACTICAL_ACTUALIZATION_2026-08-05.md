# Pathways — Practical Actualization (Mythoras)

**Date:** 2026-08-05  
**Kind:** Meaningful pathways — choice menu, not a locked roadmap or scheduled ticket plan.  
**Stance:** Progress toward playable systems evidence. Anti-polish-trap. No new game canon.

**Constraints encoded from owner intent (not inventing mechanics):**

- Moderately decent *minimal* art is allowed (color-coded tiles, readable meshes) — mid-indie form preference, not AAA polish first.
- Flexible layout experiments welcome; prefer info-density **squad rows** before portrait-forward surfaces.
- A **Mythoras-specific Debug/Dev Environment** (not OmniSpace / ADE) for authoring & inspecting loot, creatures, tiles, events, battle, currency — possibly “compile to server representation” before a game client.
- Spatial multi-cell inventory = later systems question.
- Party-composed defenses (not necessarily PoE-style personal resist caps) = systems to explore, not ship.
- Currency/crafting and Cipher modifier scaling = systems to prototype in the env.
- Yu-Gi-Oh fusion/synchro-like unique mechanic = research seed only (parked pathway).
- Owner images (Grim Dawn dense paper-doll / spatial inventory; PoE2 mercenary per-companion gear) = **reference only**, not build targets.
- UI **architecture** locked (World View default + player-invoked Workspace View; no permanent surrounding management panels). **Visual language** remains open ([CONTEXT.md](CONTEXT.md) critical correction #8).
- Room left for a sibling “Gameplay Analysis” session to nuance combat/feel questions without blocking these pathways.

**Research defaults this menu inherits:**

- Default start framing: greybox host + thin Turn Program — not shell-first, not inventory/Builder-first ([RESEARCH_START_PATH_DECISION.md](RESEARCH_START_PATH_DECISION.md)).
- Systems sandboxes are legitimate for combinatorial risk, not a substitute for the playable seam ([RESEARCH_SYSTEMS_FIRST_PROTOTYPE.md](RESEARCH_SYSTEMS_FIRST_PROTOTYPE.md)).
- Scaffold UI / programmer-readable art; ban production polish until the loop answers its question ([RESEARCH_INDIE_START_WITHOUT_UI_POLISH.md](RESEARCH_INDIE_START_WITHOUT_UI_POLISH.md)).
- Recommended first vertical (proposal to stress-test): one-zone adaptive-continuity Turn Program ([WAYFINDER_PASS_MVP_VERTICALS.md](WAYFINDER_PASS_MVP_VERTICALS.md); grilling ticket [`.scratch/mythoras-project-spine/issues/01-define-first-playable-seam.md`](.scratch/mythoras-project-spine/issues/01-define-first-playable-seam.md)).

---

## Pathway menu

### Path A — Seam Contract Close

**Promise:** Lock (or deliberately amend) what “first playable” means before code absorbs ambiguity.

**Build in 1–3 sessions**

1. Stress-test Wayfinder’s one-zone adaptive-continuity Turn Program against ticket `01-define-first-playable-seam`.
2. Write start state, end state, failure/restart, player actions, “distinctively Mythoras” evidence, and an explicit stubs/fakes list.
3. Produce a short acceptance checklist players can observe without debug dumps.

**Evidence it worked**

- A one-page contract answers every settle-item on the grilling ticket.
- Provisional systems are marked provisional; stubs refuse “just flesh them out a little.”
- Any later session can point at the checklist as exit criteria (not “feels nicer”).

**Deliberately does NOT do**

- No greybox mesh, no Turn Program code, no Dev Env UI, no layout polish.
- Does not invent campaign / Cipher / inventory product surfaces.

**Dependencies / blockers**

- Needs Wayfinder recommendation + CONTEXT locks only (already present).
- Blocked only if owner cannot decide accept / cut / extend for the seam proposal.

**Risk if over-invested**

- Infinite grilling / GDD breadth becomes a false prerequisite for learning (Wayfinder already warns against this).

**Relation to others**

- **Usually sequential before** B and C; optional thin A can run as a half-session fork before B.
- Parallel with thin D only if A is already “good enough to play against.”

---

### Path B — Greybox Continuity Host

**Promise:** Prove traversal → battle-in-place → resume on one authored surface, with readable mid-indie placeholders — not chrome.

**Build in 1–3 sessions**

1. One projection-neutral authored fragment: entrance, landmark, encounter clearing, exit.
2. Token / color-coded-tile movement; encounter activates irregular footprint on the **same** physical place.
3. Compact contextual HUD rules only (World View architecture as layout constraints — not a shell project).
4. Optional: moderately decent minimal meshes (readable silhouettes) if they do not steal the session from continuity questions.

**Evidence it worked**

- Player approaches a visible encounter and fights where contact occurred.
- Landmark, approach direction, and positions remain recognizable before / during / after.
- No arena wipe / teleport; camera/HUD adaptation is rapid and reversible.
- Orientation loss is measurable (instrument or structured play notes).

**Deliberately does NOT do**

- Tile polish, biome art passes, Workspace customization, Backpack, Bench UI.
- Full Turn Program depth (may stub combat as “enter footprint → static win → resume” if C is deferred).
- Grim Dawn paper-doll or PoE2 mercenary windows as product UI.

**Dependencies / blockers**

- Benefits strongly from A’s contract (can start with Wayfinder draft criteria if A is thin).
- Needs a game repository + minimal runtime (current workspace is planning-heavy; engineering root is a real dependency).
- Not blocked on ADE / OmniSpace.

**Risk if over-invested**

- Greybox becomes a layout/chrome project; continuity questions never get a second playtest cycle.
- “Readable art” slides into visual-language lock before the seam survives ordinary play.

**Relation to others**

- **Natural host for** Path C (sequential or same fork: B host + thin C systems).
- **Parallel** with Path D (env authors the fragment data B consumes).
- Fork away from Path E if layout curiosity steals continuity sessions.

---

### Path C — Thin Turn Program Proof

**Promise:** Prove plan → commit → automatic Speed/timing/support order → ≥2 rounds → win → resume traversal — the other half of Mythoras’s distinctive seam.

**Build in 1–3 sessions**

1. Three Field creatures; Planning vs Execution states; commit/cancel-before-commit; visible automatic order; read-only execution.
2. One Skill Card or support swap that materially changes order or outcome.
3. Provisional damage model loaded from data (honestly marked provisional).
4. Consume the same fragment surface as B (or a minimal combat board that later plugs into B — prefer same surface).

**Evidence it worked**

- Player can explain why order emerged without debug output.
- Loadout swap → observably different order/outcome.
- At least one round has a real tradeoff (not one obvious button sequence).
- Restart from same seed reproduces positions, order, outcomes.
- Meets Wayfinder player-observable criteria that touch combat (draft until A closes).

**Deliberately does NOT do**

- Full 11×11 chart, Resonance depth, Bench management, Grid, Forge, Cipher combat juice.
- Polished combat HUD / creature portraits as a goal.
- Party-defense finalization (see Path E) beyond whatever provisional model C needs.

**Dependencies / blockers**

- Needs at least a stub host (thin B) or accepts “combat board first” knowing continuity remains unproven.
- Rules ambiguity that cannot be stubbed honestly → thin headless sim first (feeds D).

**Risk if over-invested**

- Combat-only board that never returns to traversal — proves tactics, not Mythoras.
- Damage/math rabbit hole before Planning/Execution comprehension is playable.

**Relation to others**

- **Paired with B** as the research default hybrid.
- **Consumes** data/schemas from D; can drive what D must author first.
- **Informs** E (who takes damage / how defenses compose) without requiring E first.

---

### Path D — Mythoras Debug / Dev Environment (MDE)

**Promise:** A Mythoras-owned authoring & inspection env for loot, creatures, tiles, events, battle params, and currency — tools forever, not the player product — with optional compile-to-server-representation before a rich client.

**Build in 1–3 sessions**

1. Schema + seeded generators / tables for a narrow slice (e.g. creatures + provisional skills + one fragment’s tiles/events + one currency stub).
2. Operable maker surface: spreadsheet/JSON + ImGui-or-equivalent ops console (spawn, inspect, mutate, dump) — labeled `TOOLS_ONLY`.
3. Optional: “compile” authored content into a server-shaped payload the greybox client loads (even if server is local/fake).
4. Thin hooks for currency/crafting ops and Cipher **modifier scaling** as data experiments (not endgame product).

**Evidence it worked**

- Same seed → same generated instances; CI or CLI can assert distributions.
- A human can author a creature/tile/event and see it appear in B/C without hand-editing client code.
- Compile step (if chosen) produces a loadable representation with validation errors that are actionable.
- Currency or Cipher-mod parameter changes are exercisable in the env without a polished Forge/Cipher UI.

**Deliberately does NOT do**

- Rebuild OmniSpace / ADE task orchestration.
- Player-facing inventory spatial Tetris, paper-doll, or mercenary gear windows.
- Full Cipher Network, Forge Terminal product, or 8-mod economy as a shippable loop.
- Become the “demo of the game.”

**Dependencies / blockers**

- Needs a clear schema boundary (content vs instance vs runtime).
- Parallel-safe with B/C if APIs are shared; dangerous if D invents a second inventory/combat model.
- Not a hard gate for the first seam (research Gate D: only when rules cannot be stubbed or when parallel time-boxed).

**Risk if over-invested**

- Factory-before-product: months of tooling while adaptive continuity + Turn Program stay unfelt.
- Ops console becomes tribal “real UI” and never gets kill criteria.
- Cipher/crafting breadth expands into product MVP endgame design by accident.

**Relation to others**

- **Parallel optional** to A/B/C; strongest when feeding B/C with authored fragments and provisional combat data.
- **Natural home** for Path E experiments and Cipher-mod scaling probes.
- Sequential after a tiny C headless sim if D would otherwise guess combat fields.

---

### Path E — Composition & Defenses Lab (Squad-Shaped)

**Promise:** Exercise party-composed defenses and info-dense squad rows as *systems + layout probes* — without locking PoE personal resist-cap dogma or portrait chrome.

**Build in 1–3 sessions**

1. Data model sketch: how squad-level vs creature-local defenses compose (hypotheses only; mark non-canon until grilled).
2. Ugly operable surface: **squad rows** (stats, tags, provisional defense contributions) — density over portraits.
3. Optional headless scenarios: “same hit, different squad composition → different outcomes.”
4. Time-boxed layout experiments (flexible docks) that respect locked World View architecture — scaffolding only.

**Evidence it worked**

- At least two compositions produce meaningfully different survival/outcome under the same attack scenario.
- A stranger can read the squad row and say who is contributing what defense layer (even if numbers are provisional).
- Layout experiment produces a written keep/kill note — not a polished panel set.

**Deliberately does NOT do**

- Spatial multi-cell inventory, Grim Dawn paper-doll fidelity, PoE2 mercenary window as build target.
- Final resistance architecture or Oura (temp) naming.
- Tutorial tracks teaching the defense model.

**Dependencies / blockers**

- Needs a provisional damage/hit pipeline (thin C or headless in D).
- Blocked on over-claiming canon — keep outputs labeled experiment.

**Risk if over-invested**

- Defense theory replaces the seam; UI density experiments become the polish trap in a new costume.
- Premature lock of “party resists” as product law.

**Relation to others**

- **Parallel / later fork** after thin C or inside D.
- Feeds Gameplay Analysis sessions; should not block B+C.
- Layout probes here must not fork into Path-of-shell (see research option C: polished UI layout first = no).

---

### Path F — Unique Mechanic Seed (Parked)

**Promise:** Keep a Yu-Gi-Oh fusion/synchro-*like* unique-mechanic research seed alive without letting it become the start path.

**Build in 1–3 sessions** (only if explicitly chosen; otherwise park)

1. One-page design probe: what player decision is unique, what it costs, what it must not break (Turn Program automatic order, creature-local Skill Cards, squad shape).
2. Paper or spreadsheet mock of 3–5 example fusions/synchros — no client.
3. Explicit incompatibilities list with locked combat commitments.

**Evidence it worked**

- Written go / no-go / “needs Gameplay Analysis” verdict with concrete blockers.
- No code or UI debt incurred unless go is chosen later.

**Deliberately does NOT do**

- Implementation, art, or inventory hooks.
- Replacing the first-playable seam as the distinctive proof (adaptive continuity + Turn Program remain the seam).

**Dependencies / blockers**

- Intentionally deferred; unblock only after B+C survive ordinary play *or* a dedicated analysis session demands it.

**Risk if over-invested**

- Novelty chase; second game identity before the first is felt.
- Mechanics that require presentation to make sense (fails the systems filter).

**Relation to others**

- **Parked fork** — not parallel on the critical path.
- May later plug into D as data experiments if analysis greenlights.

---

## Recommended starting forks

These are **optional combinations**, not a decree. Pick by which risk hurts most if unanswered.

### Fork 1 — Research default (continuity + program)

- **Thin A** (half–one session: acceptance checklist from Wayfinder draft)  
- **B + thin C** as the main 1–3 session push (greybox host hosting the Turn Program)  
- **D** only if a rules field cannot be stubbed honestly, or as a non-stealing parallel for fragment data

*Best when:* the fear is “we’ll polish UI again before Mythoras feels like Mythoras.”

### Fork 2 — Contract-first, then host

- **Full A** until the grilling ticket’s settle-items are answered  
- Then **B**, with **C** immediately after (or same fork once footprint activation works)  
- Leave **D/E/F** cold

*Best when:* ambiguity about start/end/stubs is already burning sessions.

### Fork 3 — Dual rail (seam + Mythoras env)

- **B + thin C** on the play rail  
- **Thin D** in parallel: schema + compile-to-loadable fragment + ops inspect for creatures/tiles/battle params  
- Cap D with a kill switch: if it has not fed B/C within the window, stop env feature creep  
- Park **E/F**; optional tiny squad-row scaffold only if C needs legibility

*Best when:* owner wants a Mythoras-owned Dev Environment early, without letting it replace the seam.

---

## Defer until later

| Defer | Until / why |
| --- | --- |
| Spatial multi-cell inventory / Tetris polish | Later systems question; not first-seam evidence |
| Grim Dawn paper-doll / PoE2 mercenary gear windows as product | Reference-only; visual language open; architecture already locks against permanent management chrome |
| Yu-Gi-Oh fusion/synchro-like unique mechanic | Path F parked; needs analysis after seam or explicit choose-in |
| Tutorial tracks / onboarding curricula | After a stranger can finish the seam without developer intervention |
| Cipher 8-mod econ / full Network / Overrides product | Product MVP endgame; modifier *scaling* may probe in D only as data |
| Full Forge Terminal / Agent crafting economy | Currency/crafting ops in D first; product Forge later |
| Workspace View customization & persistence | Stub or omit for first seam |
| Backpack / Bench UI / full Grid / sharecodes | Wayfinder keep-outs |
| Production visual language lock / biome art pass / vertical slice fidelity | After seam survives ordinary play |
| ADE / OmniSpace platform expansion as a gate | Optional parallel at most; not Mythoras MDE; not a seam prerequisite |
| Campaign competition spine / Proving / Pinnacles | Separate later verticals |
| Renderer finalist bake-off as a polish exercise | After operable seam; measure orientation/comprehension, not beauty |

---

## Cross-links

| Document / ticket | How pathways use it |
| --- | --- |
| [RESEARCH_START_PATH_DECISION.md](RESEARCH_START_PATH_DECISION.md) | Default hybrid = greybox host + thin Turn Program; Gates A–F; anti-polish checklist |
| [RESEARCH_SYSTEMS_FIRST_PROTOTYPE.md](RESEARCH_SYSTEMS_FIRST_PROTOTYPE.md) | Legitimacy of spreadsheets / headless / ImGui ops for Path D/E; failure modes if mistaken for gamefeel |
| [RESEARCH_INDIE_START_WITHOUT_UI_POLISH.md](RESEARCH_INDIE_START_WITHOUT_UI_POLISH.md) | Scaffold vs last-mile UI; readable placeholders vs production art; rename milestone away from HUD/tiles |
| [WAYFINDER_PASS_MVP_VERTICALS.md](WAYFINDER_PASS_MVP_VERTICALS.md) | First vertical proposal, keep-outs, player-observable success criteria, tooling posture |
| [`.scratch/mythoras-project-spine/issues/01-define-first-playable-seam.md`](.scratch/mythoras-project-spine/issues/01-define-first-playable-seam.md) | Open grilling ticket Path A closes or amends |
| [CONTEXT.md](CONTEXT.md) | UI architecture locked; visual language open; combat/domain vocabulary — do not invent canon here |

---

## Anti-polish trap (session ritual)

Before starting any pathway session, answer in one line each:

1. **Question:** What single player- or maker-observable risk does this session reduce?
2. **Fidelity ceiling:** What is explicitly *not* allowed to look good yet?
3. **Exit:** What evidence ends the session (not “feels nicer”)?
4. **Fake list:** What stays stubbed?
5. **Kill switch:** If tiles/chrome/env features >30 minutes without moving a pathway criterion, stop.

If (1) and (3) are blank, you are in the polish trap — switch pathway or stop.

---

*Advisory pathways only. Not a schedule. Not canon.*
