# Research — Montabi Squad / Creature Layout (Twitter Video)

> Owner-direction / research / idea-vector only. **Not canon.**  
> Visual analysis of the Montabi reference linked for succinct creature + empty-slot layout.  
> Anchors: [RESEARCH_OWNER_ANSWERS_2026-08-06.md](RESEARCH_OWNER_ANSWERS_2026-08-06.md) § B5.

**Date:** 2026-08-06  
**Status:** Research note — layout lessons from what appears on screen. Does not lock Mythoras UI.  
**Source:** https://x.com/PlayMontabi/status/2079523521240428950/video/1  
**Local:** `.scratch/montabi-squad-ui/` — `video.mp4` (~24.5s, 1280×720) + `frame_001.png`…`frame_024.png` @ 1fps; also `clip1.mp4` (see §1.1).

---

## 0. Owner ask (faithful)

From B5:

- Thinking about how to lay out **creatures + empty party slots** succinctly; not final UI (RuneScape-adjacent workspace still in mind).
- Pattern lean: **small creature cards/portraits + key stats**; **one click** for inventory/gear/moves depth (hover tooltip vs dedicated component TBD).
- Empty party slots should be **legible**.

Tweet/metadata influences (Slay the Spire, Mega Man Battle Network, Pokémon) describe genre DNA — this note reports **what is actually visible**, not the caption.

---

## 1. Source hygiene

### 1.1 Two files, one video

| File | Notes |
| --- | --- |
| `video.mp4` | Primary download; ~24.5s; Twitter muxer tags |
| `clip1.mp4` | Slightly different byte size / MD5 |

**Verdict:** Not a second distinct clip. All 24 extracted 1fps frames match `video.mp4` frame-for-frame (identical PNG MD5s); spot-checks at t=0/5/12/20s also match. Treat as duplicate encode/remux of the same tweet video. No separate clip2.

### 1.2 What the video actually is

A **~24s trailer / montage**, not a dedicated party-management walkthrough. Rough beat map from frames:

| Frames (approx.) | Screen type | Squad/layout relevance |
| --- | --- | --- |
| 001–005, 017–023 | **Combat** — 3×6 (two 3×3) grid, cards, End Turn | High for combat glanceables + empty tiles |
| 006–008 | Combat / mid-action with **minimal HUD** (grid + sprites + sparse nameplates) | High for empty-slot geometry; low for stats |
| 009–011 | Creature **reveal / transition** (lavender speed-lines, no HUD) | None for layout |
| 012 | **Select Skill** reward — compact creature ID strip + 3 skill cards | High for “small card + key stats” |
| 013 | Convenience **shop** (item grid + hover tooltip) | Medium for progressive disclosure |
| 014 | Narrative **event** modal | Low for squad slots |
| 015–016 | **Vending machine** / equipment pick | Low for creatures; shows “one job” screens |
| 024 | **Victory** over combat grid | Empty-slot outlines still visible |

**Absent from the reel:** dedicated Squad builder, bench roster, gear paper-doll, shared stash, or a persistent 5-portrait party strip outside combat.

---

## 2. Patterns observed (on-screen)

### 2.1 Combat field = spatial party capacity

- Battlefield is consistently a **split grid**: player left / enemy right, typically **two 3×3** (or continuous **3×6**) tiles.
- Units occupy one tile each. Observed player occupancy is usually **3–4** creatures at once — capacity is the **grid**, not a separate “party of 5” chrome strip.
- **Empty slots** = thin rectangular floor outlines (grey/blue), no “+” ghost, no “Empty” label. Absence of sprite = vacant. Highly legible at a glance.

### 2.2 Unit-anchored glanceables (succinct stack)

Under each field unit (when HUD is up):

1. **HP bar** + `current/max` number  
2. **Discrete pips** (≈5 circles) — AP / energy / similar  
3. **Tiny status icons** (buffs, stacks, type markers)

Optional: crown / yellow chevron for leader or active focus.

This matches owner A3 / B5 lean: **glanceables stay small**; depth lives elsewhere.

### 2.3 Active-unit depth band (bottom-left)

When a unit is active/selected:

- Square **portrait**
- Abbreviated stats: **AP** (pips), **ATK N**, **DEF N**
- Hand of **skill cards** center; draw/discard counts; **End Turn**

Deep card text appears as a **large preview** (often right side) under prompts like “SELECT TARGET” — progressive disclosure on interact, not permanent full sheets.

### 2.4 Closest thing to a “creature card” (non-combat)

**frame_012 — Select Skill:** horizontal ID strip for **MCTYGOR**:

- Small portrait | name + **LV** | HP bar | **ATK / DEF** block  

This is the strongest match to “small cards/portraits + key stats” in the reel. Skills themselves are large choice cards; creature identity stays compact.

### 2.5 Progressive disclosure elsewhere

- Shop (**frame_013**): icon grid + **hover tooltip** for rarity/effect.  
- Events / vending: one primary action; secondary copy in tooltips or side panels.  

Useful as interaction ethos for “click/hover for gear/moves,” not as a Squad chrome layout.

---

## 3. Lessons for a Mythoras 5-creature Squad (with empty slots)

Transposed guidelines — **not** “copy Montabi combat.”

1. **Show capacity as geometry.** Fixed slot count (here: grid cells; for Mythoras: five Squad sockets) outlined even when vacant. Empty = outline/ghost slot, not missing UI.
2. **Always-on: tiny vertical stack per creature.** HP (or equivalent) + one discrete resource row + optional icon row. No full sheets on the board.
3. **Selected / focused unit gets the depth band.** Portrait + ATK/DEF-class glanceables in a peripheral panel; gear/moves on click (Montabi shows this for cards; Mythoras can mirror for inventory).
4. **Don’t put five full cards on the first surface.** Montabi’s non-combat “creature card” is a thin ID strip; skill/item depth is separate large cards. Fits B5 “one click for depth.”
5. **Combat spatial slots ≠ management roster slots.** Montabi empty tiles answer *where can someone stand*; Mythoras empty Squad slots answer *who is missing from the five*. Steal the **outline language**, not the 3×3 battle formation as the Squad menu.

---

## 4. Fit to owner question — mismatch flag

| Owner hope (B5) | This video |
| --- | --- |
| Succinct **party/Squad** layout with empty slots | Mostly **combat trailer** + roguelike meta montage |
| Small portraits + key stats; click for gear/moves | Yes in **combat glanceables** + skill-select ID strip; **no gear/Squad management screen** |
| Empty party slots legible | Excellent for **battle-grid empties**; no dedicated party-slot UI shown |
| Influences StS / MMBN / Pokémon | On-screen: **StS cards + intent**, **MMBN-like split grid**, creature collector vibe — not Pokémon six-slot menu |

**Verdict:** **Partial / opportunistic reference — poor primary match for Squad-management layout research**, but **still useful** for:

- Empty-slot clarity via persistent outlines  
- Glanceable density under units  
- Portrait + ATK/DEF active band  
- Compact creature ID card (skill select)  
- Progressive disclosure for depth  

For a true Squad chrome (5 sockets, empty seats, click → gear/moves), prefer **Darkest Dungeon / Battle Brothers roster bands** (owner A2 / B1 / B9) plus a greybox experiment; use Montabi as a **succinctness / empty-slot geometry** spice, not the management layout source.

---

## 5. Frame index (quick)

| Frame | Content |
| --- | --- |
| 001–005 | Full combat HUD: grid, HP stacks, cards, End Turn, card preview |
| 006–008 | Grid focus; sparse labels; empty outlines dominant |
| 009–011 | Creature splash / summon transition — no UI |
| 012 | Select Skill + MCTYGOR compact ID card |
| 013 | Convenience Store |
| 014 | Event: Looter’s Loot |
| 015–016 | Vending Machine / equipment choice |
| 017–023 | Combat montage (provoke, slash, substitution, etc.) |
| 024 | Victory banner over grid |

Local paths: `.scratch/montabi-squad-ui/frame_NNN.png`.

---

## 6. Explicitly not concluded

- No Mythoras Squad chrome design locked.  
- No decision between hover-tooltip vs dedicated depth pane (still TBD per B5).  
- No claim that Montabi’s 3×3 combat capacity maps to Mythoras’s five-creature Squad.

---

*End of Montabi squad-layout visual research.*
