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

## Decision

None yet. Do not let a session pick one implicitly by building it.

## Consequences of leaving this open

OD-004 (UI design language) cannot close, and anything built on the client HUD
beyond the current trace is guessing at an architecture that has not been
chosen. This is the main argument for the systems-first path in the meantime:
the ADE sits on locked vocabulary and does not depend on this answer.

Whichever option wins, the losing document must be amended in the same pass.
Leaving both in place is what produced this ADR.
