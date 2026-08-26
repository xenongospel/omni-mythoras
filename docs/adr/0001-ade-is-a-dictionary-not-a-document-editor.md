# ADR-0001 — The ADE is a dictionary of rules, not a document editor

## Status

Accepted — 2026-08-14. Confirmation of the resulting shell is still open on
[#6](https://github.com/xenongospel/omni-mythoras/issues/6).

## Context

The first ADE attempt ([#5](https://github.com/xenongospel/omni-mythoras/issues/5))
copied the Godot/Unity editor loop: open a fixture, walk a document tree, edit
in an inspector. Wrapped in Tauri, skinned black and white in IBM Plex.

The owner killed it (`SESSION_ADE_MVE_VERDICT_2026-08-14.md`). Three things
failed, and they failed for the same underlying reason:

- The open-document loop read as a **dashboard**, not a way to see systems in
  the abstract.
- Systems resolved into **creature tabs** with named creatures under them. But
  a creature is a *composition of rules*, not the next entity beneath Systems.
  Putting Embercoil and Veilwisp there inverted the model.
- The tool never said what it was for.

The intended sentence is: **Systems is the dictionary of rules; Scene is the
world being made.** Creatures hang off a selected rule as "who uses this",
they are not the navigation.

## Decision

The ADE is a **dictionary-first** editor hosted in **Tauri**.

Tauri survives the kill — the host was never the problem. What dies is the
document-tree-plus-inspector loop as the primary feel.

Systems opens on the vocabulary that is already locked in `CONTEXT.md` and
descends toward the vocabulary that is not: the eleven damage types, then
Attributes, then the Channel → Stream → Tags stack, then Tags and the Mod
Catalogue as **empty** surfaces, then Squad ownership.

Surfaces whose design is genuinely unresolved — Gear, Motherboard Grid, Skill
Frame, Principal — render as **fog**. They are named so the shape of the whole
is visible, and left empty so nobody mistakes a placeholder for a decision.

Scene is parked until OD-009 settles Zone fixture grammar.

Nothing in the ADE may invent a creature name or a modifier that does not
already exist in the attribute and stat vocabulary.

## Consequences

The ADE can only be as good as the dictionary behind it, which makes gaps in
`CONTEXT.md` visible as empty screens rather than plausible-looking filler.
That is the point, and it means the tool will look sparse for a while.

Fog panels are a standing invitation to fill them in. Resist it: a fog panel
becoming a real panel should require a closed grill and an ADR, not a session
that had spare capacity.

The dictionary is currently **hardcoded** in `apps/mythoras-ade-prototype/src/App.tsx`
as literal arrays. For a tool whose whole claim is dictionary-first, that data
should be loaded rather than inlined, so it cannot drift from `CONTEXT.md`.
That is the next real engineering step and it is not blocked on any visual
decision.

The ADE and the client prototype are now firmly separate surfaces with separate
specs. Work on one is not work on the other, and a session should not hold both.
