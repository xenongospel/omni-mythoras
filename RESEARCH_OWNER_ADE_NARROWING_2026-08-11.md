# Owner ADE narrowing answers — 2026-08-11

**Status:** Owner direction after Unity/Godot/GGG/Tags research wave. **Partly superseded 2026-08-14:** the Godot document→tree→inspect MVE was **killed** ([#5](https://github.com/xenongospel/omni-mythoras/issues/5)) — still a dashboard; Systems must not open on creature tabs. Keep Tauri. See `SESSION_ADE_MVE_VERDICT_2026-08-14.md` and [#6](https://github.com/xenongospel/omni-mythoras/issues/6). Systems v1 craft (Mods + Gear grammar) and Scene-as-tile still stand; the *CMS loop* does not.

**Refs:** `RESEARCH_UNITY_EDITOR_UI_ADE_2026-08-10.md` (open Qs), `RESEARCH_GODOT_ENGINE_EDITOR_UI_ADE_2026-08-10.md`, `RESEARCH_GGG_INTERNAL_TOOLS_PUBLIC_2026-08-10.md`, `RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md`, stage-0 `apps/mythoras-ade-prototype/`.

---

## Answers to Unity research open questions

### Q1 — Systems primary surface for v1

**Owner:** Systems v1 **can** include real systems we already understand. Motherboard Grid and Skill Frame stay **infancy / fog** — do not force their patterns into ADE yet.

**Ship-first Systems craft surfaces:**
- **Mods** — Tags + Mod Catalogue (known enough: some mods, ties to creature / gear / etc.)
- **Gear** — gear view or gear section (must be considered; creature-local)

**Defer as craft surfaces:** Motherboard Grid topology, Skill Frame topology (until patterns exist).

### Q2 — Scene mode ownership

**Owner:** Scene is **not** “finished Zone chrome first.” Prefer building Mythoras’ **own abstract tile grid** (what the game will create anyway). Protocol environment dressing is secondary / later.

**Multiple view transforms of the same tile document are desired:**
- 2D net
- → isometric 3D / isometric 2D / 2.5D (transpose the same underlying grid)

So Scene owns **tile-grid documents + view modes**, which later compose into Region → Zone — not a Zone-only Scene lock.

### Q3 — Calc + Library

**Calc:** Dock / potential widget **later** — do not require it in the next shell.

**Library / Project pane:** **Skip.** Mythoras ADE is one-game, not a multi-project commercial engine. Do not follow Unity’s Project browser; invent only what Mythoras systems need.

### Q4 — Preview

**Defer worry.** Purpose when it exists: look at authored state (e.g. the grid) as “what the game would look like right now” without designing the full game client. Not a redesign blocker.

### Q5 — Multi-select

**Agent choice (owner delegated):** **Single-focus only** for next ADE pass. Batch multi-edit waits until Tags/Catalogue/Gear have a real single-object edit loop.

---

## Godot preference + anti-bloat

- Prefer **Godot’s loop** (document → tree → selection → inspect/craft → feedback) over Unity’s framing for early scale.
- Prefer **tree of nodes + signals** conceptually over Unity hierarchy metaphors where useful (Mythoras systems linking later; not a mandate to build a signal graph now).
- **No redundant commercial-editor features.** Steal patterns only when Mythoras needs them. One game → thin ADE.

### Godot “Scene dock = live tree of open document” → Systems

**Yes — use that for Systems (and Scene):**

| Mode | Rail should be | Not |
| --- | --- | --- |
| Scene | Tree of the **open tile-grid document** (layers/cells/markers) | Static “Tiles / Region / Zone” product sitemap |
| Systems | Tree of the **open systems document** (e.g. Creature → Attributes, Tags, Gear slots, linked Mods…) | Static “Creature / Mods / Passive Grid” module launcher |

Module names become **document types you can open**, not permanent empty destinations.

---

## External refs (investigate — not committed)

| Link | Status | Note |
| --- | --- | --- |
| https://x.com/robj3d3/status/2086883206301925800 | Fetch blocked (X 403); syndication empty | Owner: palette looks good; **borrow candidates only, no commit**. Re-fetch when accessible or owner drops screenshot/URL of the site. Likely orbit: @robj3d3 / vibedesign sites — treat as **visual-ref ticket**, not lock. |
| https://x.com/NicolasZu/status/2084617741835579734 | Fetch blocked | Owner: potential **asset-pipeline / in-tool iteration** investigation. Public orbit of @NicolasZu includes Codex/img→Three.js style asset harnesses for web games — **inspiration for ADE↔asset loop**, not a stack mandate. Follow-up research ticket if owner wants depth. |

---

## GGG internal tools

Lessons matter for ADE parts (domain-specific tools, playtest↔tool loops, tile/terrain editors as public precedent). Do **not** invent fake GGG skill/mod GUIs — use principles from `RESEARCH_GGG_INTERNAL_TOOLS_PUBLIC_2026-08-10.md`.

---

## Skills direction (idea vector — ADE may clarify)

- Original Skill Card choice = battle representation / less Pokémon-static + variation — may have gone deeper than needed.
- IDEA_LOG already: Skill Cards MVP / presentation revisit later; owner now leans **maybe not cards**.
- **Mewgenics** (owner “meugenics”) = overlapping fundamentals / variation lessons — **not** following their full pathway. Follow-up research if ADE needs skill-bank design.
- Proposed skill economy shape (idea, not lock):
  - **Global bank** — skills available across the game (PoE-like “most skills obtainable” tension, but Mythoras may differ)
  - **Pocket / exceptional bank** — boss drops, exceptional-support-like rarity, unique-like skills, packs, utility, **creature-species skills** — smaller than global pool, drives variability
- ADE designing skills may help settle representation (cards vs other).

---

## Mods / crafting direction (idea → lean)

- Mods have **tiers**.
- **Drop-only mods** = intentional innovation candidate.
- Likely **keep prefix/suffix** with possible extra variability beyond a strict two-bucket system (targeting / emergent steps) — **not** Diablo 4 temper-as-model; PoE complexity admired for verbs + discovery + failure chance.
- CONTEXT affix classification (prefix/suffix vs Attribute-quad vs hybrid) was OPEN — owner now **leans prefix/suffix + optional extension**, still needs a later grill/ticket before schema lock.
- Do not invent full Agent crafting in ADE v1; Catalogue should support tier + domain + generation hints (including drop-only).

---

## Stage-0 prototype verdict (interim)

Empty Scene|Systems|Preview shell **failed the empty-shell test** (owner: meaningless dashboard). Keep throwaway; redesign against this document + Godot loop, not more chrome.

---

## Recommended next (see chat for sequencing)
EOF
