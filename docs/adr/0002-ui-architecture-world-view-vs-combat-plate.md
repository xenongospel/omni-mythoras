# ADR-0002 — UI architecture: World View docks vs a permanent combat plate

## Status

**Proposed — unresolved.** This ADR exists to stop the contradiction being
deferred a third time. It records the conflict, not a decision. Resolving it
requires a grill session with the owner.

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

## Consequences of leaving this open

OD-004 (UI design language) cannot close, and anything built on the client HUD
beyond the current trace is guessing at an architecture that has not been
chosen. This is the main argument for the systems-first path in the meantime:
the ADE sits on locked vocabulary and does not depend on this answer.

Whichever option wins, the losing document must be amended in the same pass.
Leaving both in place is what produced this ADR.
