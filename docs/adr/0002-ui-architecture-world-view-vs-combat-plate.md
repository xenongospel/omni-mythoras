# ADR-0002 — UI architecture: World View docks vs a permanent combat plate

## Status

**Proposed — unresolved.** This ADR exists to stop the contradiction being
deferred a third time. It records the conflict, not a decision. Resolving it
requires a grill session with the owner.

A **[LEAN] for the current pass** was recorded 2026-08-27 — see *Lean for this
pass* below. A LEAN names a direction and its reason so work can proceed without
drifting; it is not the decision, and the arrangement question stays open.

## Context

Two current documents describe two different games, and both are treated as
governing.

`CONTEXT.md` correction **#8** (2026-08-14) says the UI architecture is locked:
World View is the default and lets traversal or battle dominate the viewport
with **only a compact contextual HUD**. Workspace View is player-invoked and
contracts the live world while configurable docks and widgets appear. The
correction is explicit that there are **no permanent surrounding management
panels during normal gameplay**.

`POSTURE_REQUIREMENTS.md` (2026-08-24, ten days newer) specifies a **heavy
framed plate** under the scene occupying "a real third of the window" — a
traced Darkest Dungeon 1 combat console with a fixed left hero focus and a
right map/inventory tab pair, present the whole time.

A permanent third-of-the-screen console is precisely the "permanent surrounding
management panel" that #8 rules out. These cannot both be the architecture.

A second, smaller conflict rides along with it. `CONTEXT.md` defines **Turn
Program** as a non-negotiable design commitment; POSTURE §4.3 bans the word from
appearing anywhere on the HUD. POSTURE resolves this for itself by saying the
combat *model* exists under the hood but is not named on that surface, and
explicitly places "renaming Turn Program in CONTEXT.md" out of its pass.

Both conflicts were knowingly deferred. `RESEARCH_STUDIO_HARNESS_SKILLS_2026-08-26.md`
identified them again as an instance of Dom Need's "domain drained from the
docs" failure. Deferred twice with no owner is now just unresolved.

## Options

**A — POSTURE is right; amend #8.** The DD1 plate is what the owner actually
wants to look at, and #8 describes an aspiration that has never been prototyped.
Cost: gives up the "no permanent chrome" principle, which was itself a
considered reaction against management-panel-heavy design.

**B — #8 is right; POSTURE is a tracing exercise.** The plate is scaffolding to
learn DD1's information architecture, always intended to be peeled. POSTURE
already says "peel costume later" and "prototype, not poor", which supports
reading it as a method rather than a destination. Cost: the one artifact that
currently passes its own spec gets reframed as throwaway.

**C — Both, scoped by mode.** The plate is the *battle* posture; the compact HUD
plus invokable docks is the *traversal* posture. #8's World View already
distinguishes traversal from battle. Cost: two HUD systems to build and keep
coherent, which is how the layout zoo happened the first time.

**D — Persistent customisable panels (the RuneScape reading).** Added 2026-08-27
after the owner articulated the principle underneath their references, which
neither #8 nor POSTURE states.

> **Dated wrong.** This option was written up on 2026-08-27, but the owner had
> already drawn it in Stitch on **2026-04-04**. It is the oldest of the four, not
> the newest. See *Evidence: the owner's own Stitch shell* below.

The thing actually wanted is **information co-present with play**: state is
readable without leaving the game, and the game view does *not* need to dominate
— the information collated is often worth more screen than the board. RuneScape
is the reference: persistent, customisable panels arranged once, played inside.

This reframes the conflict rather than picking a side. Both existing positions
are instances of one principle, and both are constrained instances:

| | Persistent? | Customisable? | Game view dominates? |
| --- | --- | --- | --- |
| CONTEXT #8 World View | No — compact HUD only | Docks, but only in the invoked Workspace | **Yes** |
| POSTURE plate | Yes | No — fixed layout | No, one third is chrome |
| **D (RuneScape)** | **Yes** | **Yes** | **No** |

Read this way, #8's error is not the docks — it is the twin assumptions that the
viewport should dominate and that configurability must be quarantined into a
separate invoked mode. POSTURE's limitation is not that the console is permanent
— that part matches the principle — but that it is fixed.

Cost: customisable layout is materially more work than a fixed plate, and it is
the direction with the clearest path back to the layout zoo if it is started
before the *content* of the panels is known. The mitigation is order — trace the
fixed DD1 plate first to learn what information the panels must carry, then make
arrangement configurable once the payload is settled. That keeps the current
tracing pass valid rather than discarding it.

## Decision

None yet. Do not let a session pick one implicitly by building it.

**Evidence (2026-08-27).** Master of Pieces reference frames were captured and,
on inspection, MoP resolves this same question a **fourth** way: a near-full-bleed
board with thin edge-anchored chrome, where per-unit stat badges pinned to the
tiles carry the information a panel would otherwise hold. It is information
co-present with play at almost no screen cost.

This matters because MoP is already the chosen reference for the game view. The
board-plus-heavy-plate split in POSTURE is inherited from Darkest Dungeon alone,
and the other reference in the same prototype disagrees with it. Weigh this
before treating the split as settled. See `reference/README.md`.

**Working note (2026-08-27).** Option D states the principle the other three
were groping at, and the owner has confirmed it is what they actually care
about. That does not make it the decision — the customisability question is
genuinely open and expensive. But it does mean any future framing of this ADR
should argue about *how* information is arranged, never about *whether* it is
co-present. The latter is settled.

A practical consequence: naming a reference is not a decision. DD1 being traced
does not decide this ADR, and a proposal that serves the principle better is not
off course. See POSTURE §0.

**Correction to the MoP evidence (2026-08-27).** The paragraph above, and
`reference/README.md`, said MoP "has no console". Re-reading the frames, that
overstates it. MoP carries chrome on all four edges: a top bar (HP, resources,
zone title, menu icons), a left icon column, a titled "Battle log" dock down the
right, and a bottom strip holding reserve units, a turn-order track, and end
turn. What MoP lacks is a *frame* — its chrome sits directly on the same black
void the board floats in.

So the real axis between the two references is **framed plate vs frameless
chrome on void**, not panel vs no panel. Both references are persistent and both
are fixed; they differ in whether the chrome is drawn as an object. That is a
narrower and more tractable question than the one this ADR opened with, and it
does not change option D, which is about customisability rather than framing.

### Lean for this pass (2026-08-27)

**[LEAN] Trace the DD1 plate — its finish and density, not its information
architecture.** Adopt the measured type scale (POSTURE §5.1), the measured
palette (§5.2), and the framed plate at 33.5%. Do not inherit DD1's
single-creature focus as the model for how Mythoras shows a squad.

Three things decided it:

1. **The payload does not fit badges.** MoP pins about three numbers and a status
   to each unit. A Mythoras Field creature carries HP, Load, four Attributes,
   Speed, species tags, four keyworded Skill Cards, two trinkets, and ailments
   with three separate scaling vectors. Badges cannot hold that, and POSTURE §0
   forbids dropping information to make an arrangement work.
2. **Only DD1 has been measured.** §5.1 and §5.2 are DD1 type metrics and DD1
   palette. MoP has been described qualitatively and never measured, so a MoP
   lean would have had no tokens to apply and would have meant inventing them.
3. **This ADR already prescribes the order.** Option D's stated mitigation is to
   trace the fixed plate first to learn what information the panels must carry,
   then make arrangement configurable once the payload is settled. The lean is
   that mitigation, not a rejection of the principle.

**Cost, stated plainly.** The plate takes a third of the window height from an
isometric board. DD1 could afford that because its fight is a flat row of four
sprites; a tactical voxel board spends height on depth. If the board turns out to
need that height, this LEAN is the thing that gives — not the principle.

**Where a plan would live.** Recorded so the arrangement is not chosen with no
room for the one piece of information neither reference has to carry. Turn
Program queues three Field creatures at once; DD1 resolves one hero at a time and
so its plate never had to show a plan. If built, planning would occupy the band
between board and plate — where the squad pips already sit, and where MoP puts
its own turn track and end turn — with queued actions ghosted onto the board
tiles, since they are spatial. **None of this is built in this pass**, and
POSTURE §4.3 still governs: the plate does not teach that noun.

### Evidence: the owner's own Stitch shell (made 2026-04-04, found 2026-08-27)

Option D was described above as the newest reading, articulated on 2026-08-27.
That is wrong about its age. A set of screens in the owner's Google Stitch
project — "Mythoras Stitch Prompts", created **2026-04-04** — already draws it,
five months before this ADR was written.

The `App Shell` screen contains a docked panel manager with `SAVE LAYOUT`,
`LOAD LAYOUT`, `RESET LAYOUT`, a `PANEL WIZARD` toggle, and an **ADD PANELS**
list reading: Game View, Inventory, World Map, Map Designer, Chat, Passive Tree,
Creatures, Squad. A companion screen renders the game view as a draggable,
minimisable **window** with its own tabs.

Three things this settles about what option D actually meant to the owner:

1. **Game View is an entry in the panel list.** It is not the viewport the rest
   of the UI hangs off. The claim that the game view need not dominate was not a
   late rationalisation; it was drawn first and argued afterwards.
2. **Layout is saved and restored player state.** The expensive half of option D
   — configurability, not persistence — is the half that was drawn.
3. **Map Designer is one of the panels.** An authoring surface inside the game
   shell. This was read here as a question mark over whether the ADE is a
   separate application. **The owner answered it on 2026-08-28 in the opposite
   direction — see below.** It is not an open question.

**This does not change the LEAN.** The screens are about *arrangement* and carry
no usable finish: the project's theme is Inter for headline and body with a 4px
corner radius and a violet accent, and Stitch's font enumeration contains no
Ubuntu and no blackletter at all — very close to the "functional slate SaaS"
POSTURE §5 rules out. They also predate the payload argument entirely; nothing in
them shows what a panel would have to carry. Tracing DD1's density first remains
the stated mitigation.

**What it does change** is the standing of option D. It can no longer be
described as the newest and least examined option. It is the oldest, and the
thing that has never been done is not imagining it — it is costing it. See
`apps/mythoras-client-prototype/reference/shell-stitch/README.md` for the screens
and how to re-fetch them.

### The owner's reading of those screens (2026-08-28)

The owner reviewed the screens and separated what they had been reaching for from
what the screens got wrong. **No decision was taken.** This records the reasons,
because they narrow option D considerably.

**What the owner still wants from them:**

- **The informational orientation.** This was the reason for going that way at
  all — the arrangement of the game view *among* the other panels let far more
  be shown at once.
- **A sized game view with reactive decks.** The player picks a size — quarter,
  half, or full — and the surrounding components reflow to it. Aspect ratio is
  always forced. Owner's own scoping: **half and quarter only** for a first pass,
  because all three is a lot of work. The space this frees goes to a **bottom
  deck** and possibly a **right deck**.
- **Black with purple and green.**

**What the owner discarded, with reasons:**

- **Free-floating panels.** This is the owner's own conclusion from having drawn
  it: a configuration system that permits free float is *incredibly expensive*.
  Note what that kills — the SAVE / LOAD / RESET LAYOUT manager and the
  draggable, minimisable game-view window are exactly the expensive half, and
  exactly what the screens drew. **Option D as drawn is not the option D under
  consideration.**
- **Game View as its own panel.** Not required. What mattered was its orientation
  relative to the others, not its window-ness.
- **Map Designer inside the game frame.** It belongs in the ADE. The screens
  embedded it during a period when the owner was still trying to differentiate
  the game from the editor and had not yet separated the two.
- **Debug mode in frame.** A deliberate convenience choice made when there was no
  separate ADE to put it in. A separate ADE removes the reason for it.

Option D therefore reduces from *arbitrary panel layout* to **fixed decks around
a game view with two or three sizes**. That is a materially cheaper thing than
what this ADR has been costing it at, and it is much closer to what `fortryv/`
runs in production than to a window manager.

**One tension this opens.** Black with purple and green is not the palette
applied in POSTURE §5.2, which is DD1's pure greys, warm ink, and a functional
red. Both cannot be true. Not resolved here, but flagged so that the next palette
pass does not quietly assume the measured DD1 values are settled.

### Counter-evidence to the payload argument (2026-08-28)

The first of the three reasons given for the LEAN was that Mythoras's payload
cannot fit MoP-style badges. A survey of four HUDs taken from owner-supplied
video links shows that claim is doing less work than it appeared to. See
[`apps/mythoras-client-prototype/reference/hud-survey/README.md`](../../apps/mythoras-client-prototype/reference/hud-survey/README.md).

*Never's End* carries, with **no framed plate at all**: an initiative queue,
per-unit HP and statuses, a running combat log, a stat block, an ability bar,
keybind hints, and five equipment slots each with its own counter. All of it on
the edges and corners of a full-bleed board. *Calame* runs a squad fight with a
two-card bottom deck and a turn queue. *Fortryv* holds an entire ARPG inventory
and paperdoll in a right deck.

The honest correction: **heavy payload does not force a framed plate.** What it
forces is *reserved edge space*. Decks provide that; badges alone do not. The
distinction the payload argument was actually reaching for is badges-only versus
reserved-space — not frameless versus framed. Those had been conflated.

The other two reasons are untouched: DD1 remains the only measured reference, and
trace-first-then-arrange remains this ADR's own prescribed order. **The LEAN
stands, but it stands on measurement and sequencing, not on payload
impossibility.** Anyone reopening this should not be told the payload settles it.

**One device worth keeping whichever option wins.** Calame numbers each unit on
the board and uses that same number as its tile in the turn queue. The badge is
an *index into* the deck rather than a summary of the unit — which is how a
squad-scale board stays readable without either surface having to carry
everything on its own.

### Guildrun: a third position on the axis, and evidence on the palette (2026-08-29)

The owner raised *Guildrun* (Steam 3669200) for its finish, colouring, and
specifically for how it composites a painted backdrop with a tile grid. Measured
in [`RESEARCH_GUILDRUN_UI_2026-08-29.md`](../research/RESEARCH_GUILDRUN_UI_2026-08-29.md).
Three things bear on this ADR.

**On the framed-plate-vs-frameless axis, it takes a third position.** Guildrun
terminates its board with painted foreground props and a near-black corner
vignette — no border object, no plate, and no bare void either. It **spends art
where the other two spend screen or spend nothing.** That is a genuinely
different answer to "what does the board sit in", and it is the question neither
current reference addresses. Recorded, not adopted.

**On the palette tension recorded above, it is uneven evidence.** Guildrun's
entire functional accent language — primary action, hover, active tab, class
identity, keyword ink — is a single green hue ramp on a near-black ground. So
**black-plus-green is a working existence proof**: it carries a complete state
language, not just decoration. But purple has **no structural or state job
anywhere in Guildrun's chrome**; where a second accent is needed the game reaches
for gold and cyan instead. That is evidence black-plus-green does not *need*
purple to be complete — which is not evidence the owner shouldn't want purple,
only that sufficiency is not the argument for it. The tension stays open and
POSTURE is untouched.

**One caution that is about method, not about Guildrun.** This is now the only
reference in the prototype with measured colour values, and `gameview-mop/` still
has none. Measured numbers argue louder than prose, so Guildrun will look better
evidenced than MoP on anything they both touch, purely as an artefact of which
one got a script pointed at it. The LEAN's surviving second reason is *"DD1 is
the only measured reference"* — that sentence is no longer strictly true, and
whoever next argues from measurement should say which surface they mean.

**What does not transfer:** Guildrun's tiles. They are a translucent decal tuned
to a quiet painted ground where MoP's are outlined geometry, they spend the colour
channel MoP reserves for state, and the game switches its grid off entirely once
combat resolves — which is precisely when a Turn Program board would need it, per
the note on ghosting queued actions onto tiles. The layering transfers; the tile
rendering does not.

## Consequences of leaving this open

OD-004 (UI design language) cannot close, and anything built on the client HUD
beyond the current trace is guessing at an architecture that has not been
chosen. This is the main argument for the systems-first path in the meantime:
the ADE sits on locked vocabulary and does not depend on this answer.

Whichever option wins, the losing document must be amended in the same pass.
Leaving both in place is what produced this ADR.
