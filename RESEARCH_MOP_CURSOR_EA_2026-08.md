# Research — Master of Piece EA “New Cursor” Clip (2026-08)

> Research context only. Does **not** invent Mythoras canon. Updates MoP evidence against [OD_004_RESEARCH_SYNTHESIS.md](OD_004_RESEARCH_SYNTHESIS.md) § Findings from Master of Piece — does not contradict that section without evidence.

**Date:** 2026-08-05  
**Status:** Visual analysis of one official EA promo clip + extracted frames. WIP per publisher caption.  
**Related:** OD-004 MoP findings (combat-first graybox → stable board grammar; hub→route→event→battle with cuts; world-anchored speech). This note adds **tactical HUD / cursor / command-surface** evidence only.

---

## Source

| Field | Value |
| --- | --- |
| Tweet / video | https://x.com/imgame_official/status/2084923898496422021/video/1 |
| Caption (metadata) | “Master of Piece \| Early Access Out Now! - New cursor, new way to command the battlefield.” |
| Body | “Take a look at our new in-game cursor in action! WIP — the design is subject to change.” |
| Hashtags | masterofpiece, roguelike, wishlistwednesday, turnbased |
| Duration / resolution | ~6.07s, 2378×1332, ~60fps H.264 |
| Local video | `.scratch/mop-cursor-video/video.mp4` |
| Extracted frames | `.scratch/mop-cursor-video/frame_001.png` … `frame_012.png` (≈2fps sample) |

**Scope limit:** This is a short marketing loop, not a full tutorial or unedited play session. Confirm/cancel, drag vs click, and Execution-phase behavior are **inferred**, not proven.

---

## Visual system snapshot (all frames)

### Board layout & camera

- Fixed high-angle **isometric** view of a small, irregular **square-tile** board floating in a dark void.
- Mild **verticality** (thicker / raised tiles); debris, thorns, fences, smoke plumes as occupancy/atmosphere.
- Encounter framing: Korean title **우두머리 전투** (“Boss Battle”); boss/elite occupies a fortified upper-right tile cluster.
- Matches prior MoP finding: battle is a **dedicated board surface**, not an embodied zone continuous with traversal (OD-004 continuity contrast still holds).

### Unit representation

- Stylized **2D standees / tokens** on tile bases (puppet / piece metaphor — “Master of Piece”).
- **World-anchored glanceables:** three numbers under most units (sword / heart / boot — Attack, HP, Speed/move).
- Boss gets larger **red hex stat cluster** (e.g. 3 / 50 / 2) above the piece.
- Objects (ballista, constructs) share the same three-stat strip language (`0 8 -` etc.).

### HUD chrome

- **Top:** portrait + HP (20/20), yellow resource (10), blue diamond (1); encounter title; blue tower (4); map / log / menu; sometimes red enemy portrait + count.
- **Left strip:** small status icons with counters (e.g. scissors / swirl at “2”).
- **Right:** either empty **전투 로그** (Battle Log) parchment **or** a large **unit inspect panel** (mutually displacing in this clip).
- **Bottom:** action / card slots; phase or cancel glyph (red circle with X / crossed swords on a thin track); **squad tray** of unit portraits with under-stats and diamond pips; row of diamond meters; large **red diamond sword** control (commit / end-turn / execute — exact label not readable); skull count `0`.
- Dense mid-indie chrome; Korean UI throughout. Empty **특성 / 소문** (Traits / Rumors) hex slots on ally inspect = explicit WIP.

### Color grammar (functional)

| Color | Observed use |
| --- | --- |
| Gold / yellow | Selection, valid action/move markers, ally highlight, filled resource pips |
| Cyan / blue | Alternate selection / reach tiles (esp. construct / summon-style range in some beats) |
| Red | Enemy identity, threat / attack / blocked markers (X / inward-arrow crosses), boss chrome, commit button |
| White | Cursor glyph; boss/inspect tile glow |

---

## Frame / beat notes (~2fps)

Approximate timeline assuming `frame_N` ≈ 0.5s steps across ~6s. Beats describe **observable UI state**, not claimed input events.

| Frame | Beat | Cursor & command-surface observations |
| --- | --- | --- |
| 001 | Open / aim idle | White arrow cursor over board (smoke/debris tile). Selected ally with **cyan** tile glow. Gold action tiles + **red X** threat tiles already painted. Cursor body sometimes reads with a small **contextual pip** (clip sells “cursor carries intent”). |
| 002 | Unit focus | Cursor near selected piece. Gold destination markers + red threat markers persist; selection border electric blue. Board-as-menu already live without a separate radial menu. |
| 003–004 | Ally inspect | Selection shifts to **gold** tile border; **directional corner arrows** from occupied tile toward adjacent options. Right panel: **짐꾼 인형** (Porter Doll) — ATK 1, HP 1/1, SPD 1, Crit 10%; empty Traits/Rumors. Top-left tutorial tip on Creatures / fusion / AP-free move. |
| 005 | Hover toward hazard / FX | Cursor over smoke tile; gold spark-like feedback under tip. Blue-bordered adjacent tiles with ornate interior icons; red X tiles further out. |
| 006 | Off-board / alternate cursor glyph | Some samples show a **yellow diamond / lozenge** cursor near board edge — suggests cursor **skin or mode** can change with context (WIP; not fully decoded). Blue reach + red threat + red directional arrows from enemy influence remain. |
| 007–008 | Re-select / re-inspect | Gold selection on a mid-board unit; red X markers; Porter Doll panel again; smoke on tiles. Standard white arrow over/near selected piece. |
| 009 | Tray ↔ board sync | Cursor on **bottom squad tray** portrait (gold-bordered). Matching unit on board highlighted; **blue** tiles with fort/vehicle-like icons = ability/placement range preview while cursor is on chrome, not only on tiles. Red X threat band still visible. |
| 010–012 | Enemy deep inspect | Focus moves to boss **오크 흑마법사** (Orc Warlock / Dark Mage): white tile glow, red hex stats 3/50/2, right panel with ability text (e.g. 정신 조작 / Mind Control, 동기화 / Synchronization). Gold player-range tiles + red X tiles coexist with inspect. Cursor white arrow over boss. |

**Narrated arc of the promo:** show range/threat overlays → inspect ally construct → move cursor across board feedback → prove HUD tray selection mirrors board → inspect boss. Marketing claim = **“new way to command”** via cursor + board overlays, not a new camera or mode cut.

---

## Interaction model hypothesis

### What MoP appears to be doing

1. **Select** a unit via **board piece** or **bottom tray** (tray selection mirrors board highlight — frame 009).
2. **Board becomes the command menu:** valid destinations / ability placements / threats are projected as **tile-anchored icons** (gold/blue vs red), often with **chevron / corner arrows** suggesting facing or path options from the occupied tile.
3. **Hover / aim** updates focus: tile glow, under-cursor FX, and optionally a **deep inspect panel** (ally or enemy) without leaving the battle surface.
4. **Confirm** is not clearly shown as a separate click-commit in this 6s loop; the large red diamond sword control and bottom track strongly suggest a **commit / end-turn / execute** control exists, but the clip does not prove drag-to-move vs click-tile vs “queue then execute.”
5. The marketed **“new cursor”** is likely the **pairing** of (a) a stylized / sometimes context-loaded pointer and (b) **high-contrast world-space command glyphs** — not merely a new arrow PNG. Caption explicitly marks the design **WIP / subject to change**.

### Ambiguities (do not treat as facts)

- Drag vs click-to-confirm vs “paint then End Turn.”
- Whether red X means **enemy attack preview**, **illegal move**, **hostile target**, or mixed by context.
- Whether blue vs gold reach means different action classes (move vs summon/build vs attack).
- Whether the yellow diamond cursor (frame 006) is a distinct command mode or a transient art pass.
- Full Planning vs Execution split (if any) — Mythoras-shaped language should not be forced onto MoP from this clip alone.

**Working model (advisory):** *Select → Aim/hover for spatial preview + optional deep inspect → Confirm (mechanism TBD).* Closest public analogues: Into the Breach–style **board as preview surface**, plus a denser inspect panel.

---

## Mythoras implications (advisory only)

Separate layers deliberately.

### (a) What MoP is doing (descriptive)

- Combat-first **stable board grammar** with replaceable-looking tiles under production art (consistent with OD-004).
- **Color-coded tile overlays** as the primary command language.
- **Dual information depth:** always-on three-stat strips + on-demand tall inspect panel.
- **HUD tray ↔ board** selection sync.
- Dense chrome around a small arena; Korean copy and WIP slots still shipping in EA marketing.

### (b) Principles Mythoras might steal

Relevant especially to **Planning / Execution Turn Program** and compact World View HUD:

1. **Board-as-preview during Planning** — paint intended moves, skill footprints, and enemy threat *on the footprint* before commit; keep eyes on space, not a detached menu.
2. **Strict friend/foe/action color grammar** — few saturated accents on a dark or mid board beat “more chrome.”
3. **Glanceable unit triad** (ATK/HP/SPD or Mythoras-native equivalents) world-anchored so Planning does not require opening every creature.
4. **Deep inspect on demand** — hover/select opens dense text; dismiss returns to board. Fits **Workspace / contextual panel** habits without permanent side docks.
5. **Tray/list selection mirrors field selection** — Field + Bench chrome should light the same creature the board cares about.
6. **Directional / path chevrons** as cheap facing/path affordances if Mythoras uses facing or multi-tile moves.
7. **Commit control as a distinct glyph** — Planning queues → visible Execute/End control (aligns with commit/cancel-before-commit already in Mythoras Turn Program direction; MoP only *suggests* the pattern here).

### (c) What Mythoras should NOT copy

Given locked **adaptive spatial/perceptual continuity** and **World View** architecture ([OD_004_RESEARCH_SYNTHESIS.md](OD_004_RESEARCH_SYNTHESIS.md), [SESSION_DECISIONS_2026-07-15.md](SESSION_DECISIONS_2026-07-15.md) as referenced in repo):

| MoP pattern | Why not for Mythoras |
| --- | --- |
| Isolated floating arena + dark void surround | Battles must remain on encounter terrain with landmark continuity — no wipe to unrelated board. |
| Hub → route → event → battle **cuts** as the primary travel feel | Already rejected as structure to inherit if embodied traversal is core (OD-004). |
| Permanent dense left/right battle chrome as default | World View = compact contextual HUD; large inspect/log as **invoked** overlays, not always-on side rails. |
| Piece-on-void “chess theater” as the only spatial metaphor | Mythoras creatures inhabit zones; tokens may be fine *inside* a footprint, but the footprint is world-continuous. |
| Marketing-grade grimdark UI density as the greybox bar | Steal **readability grammar**, not full EA art pass, for “moderately decent greybox.” |

---

## Production / polish signals (greybox bar)

Relevant to Mythoras’s **“moderately decent greybox”** / mid-indie form bar ([RESEARCH_OWNER_DIRECTION_PRACTICAL_TURN_2026-08-05.md](RESEARCH_OWNER_DIRECTION_PRACTICAL_TURN_2026-08-05.md), OD-004 replaceable geometry first):

- **Art density:** Hand-drawn grimdark tiles, debris, smoke particles, ornate boss/unit frames — well past programmer cuboids; still admits empty Traits slots and “WIP cursor” copy.
- **Readability over realism:** Neon selection borders and saturated red/gold icons sell tactics on a near-black board.
- **Form signal for Mythoras greybox:** Prefer *clear tile occupancy + friend/foe color + selection glow + 2–3 world-anchored numbers* before portrait chrome or particle luxury. MoP shows the **upper bound** of mid-indie battle polish, not a mandatory start skin.
- **Does not change OD-004 lesson:** prove the decision loop on stable spatial grammar first; art densifies on top.

---

## Update vs prior MoP findings (OD-004)

| Prior (OD-004) | This clip |
| --- | --- |
| Combat-first graybox → stable board grammar | **Supported** — same isometric tile contract under denser art. |
| Hub→route→event→battle with cuts; not physical continuity | **Not contradicted** — clip is battle-only; no traversal seam shown. |
| World-anchored speech | **Not shown** in this clip (no speech bubbles). |
| *(gap)* tactical command / cursor | **New evidence** — board-projected command icons + tray sync + inspect panels; cursor WIP. |

**Suggested OD-004 cross-link (optional one-liner, not applied here):**  
*See also: [RESEARCH_MOP_CURSOR_EA_2026-08.md](RESEARCH_MOP_CURSOR_EA_2026-08.md) — EA “new cursor” / board-as-command-surface promo analysis.*

---

## Open questions for further MoP investigation

1. Exact **input chord**: click-move, drag, two-click aim/confirm, or queue-then-Execute?
2. Does MoP separate **Planning vs simultaneous/sequential Execution**, or is it classic I-go-you-go with per-unit activation?
3. Meaning of **red X** vs **gold/blue ornate** icons across action types (move, attack, summon, interact).
4. Cursor **mode skins** (white arrow vs yellow diamond vs icon-in-arrow) — shipping system or art WIP?
5. How **Creatures / fusion / AP-free move** (tooltip) interact with the cursor command surface.
6. Longer unedited combat: cancel, illegal target feedback, multi-unit turn order on the bottom track.
7. PC vs mobile shell differences for the same cursor grammar (prior montage covered shell redesign; this clip looks PC-pointer).

**Is deeper MoP investigation warranted beyond this clip?**  
**Yes, narrowly** — for Turn Program **Planning overlay / confirm UX** references, using longer gameplay (demo, itch build, or extended EA footage). **No** as a priority for world continuity, route structure, or art pipeline (those remain covered by OD-004; this clip adds little there).

---

## Local assets

- Video: `.scratch/mop-cursor-video/video.mp4`
- Frames: `.scratch/mop-cursor-video/frame_001.png` … `frame_012.png`
