# X refs — palette + asset pipeline (2026-08-11)

**Status:** Inspiration / borrow-candidates only. **Not committed.** Supersedes the “fetch blocked” rows in `RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md` for these two threads — screenshots are now local primary sources.

**Owner lean (from narrowing note):**
- `@robj3d3` / canivibecodeit palette looks good → **borrow candidates only, no commit**
- `@NicolasZu` thread → potential **asset-nature / pipeline** investigation for ADE (principles, not stack lock)

**Local image sources (cited throughout):**
| File | What it shows |
| --- | --- |
| `.scratch/x-refs-2026-08-11/robj3d3-thread.png` | X thread: vibedesign stack (Paper MCP, Refero, ui.sh), canivibecodeit hero + “death list” density |
| `.scratch/x-refs-2026-08-11/robj3d3-figma-canivibecodeit.png` | Figma artboards + **explicit** type/palette direction board for “Can I vibecode it?” |
| `.scratch/x-refs-2026-08-11/nicolaszu-img2threejs.png` | X thread: ImageGen → img2threejs → animate; viewer modes (Reference / Voxel / BBox / Non-poly); explode |

Also mirrored under Cursor assets if needed: `image-8ea51846-…`, `image-4d5eb8b8-…`, `image-c71540e5-…`.

**Prior context:** Mythoras ADE = systems IDE (Godot craft loop preferred, anti-bloat). `CONTEXT.md` lock: **Mythoras is NOT a universally dark game** — tone is biome/situation-dependent. Do not paste canivibecodeit brand into Mythoras game UI.

---

## 1. robj3d3 / canivibecodeit — extracted visual system

### 1.1 Typography (explicit on Figma board)

From `robj3d3-figma-canivibecodeit.png` — “Reference — AI direction board” artboard:

| Role | Family | Notes visible in board |
| --- | --- | --- |
| Display / headlines | **Space Grotesk** | Large “Aa”; bold display |
| UI / data / code | **JetBrains Mono** | Regular & Medium; note: **uppercase micro-labels, wide tracking** |

Thread screenshot (`robj3d3-thread.png`) matches: geometric sans for titles, monospace for dense list/data rows.

### 1.2 Palette (estimated hex from screenshots)

Values are **vision estimates from the PNGs**, not sampled CSS tokens. Prefer treating them as **direction**, not a locked Mythoras token set.

**canivibecodeit chrome** (`robj3d3-figma-canivibecodeit.png` + hero in `robj3d3-thread.png`):

| Token (informal) | Est. hex | Use in ref |
| --- | --- | --- |
| Near-black bg | `#0C0C0C`–`#111111` | Page / artboard ground |
| Neon green accent | ~`#45F46C` (thread reads slightly more matrix/`#00FF…` in places) | Borders, headers, YES badges, CTAs |
| Alert / “destroyed” red | ~`#FF4B2B` / `#FF3B30` | MRR destroyed figure, NOT REALLY |
| Warning / kinda | ~`#FFA500` | Mid-status badges |
| Primary text | `#FFFFFF` / off-white | Titles, body |
| Secondary text | light grey | Meta, captions |
| Grid motif | dim green on black | Hero atmosphere |

**NicolasZu asset viewer** (`nicolaszu-img2threejs.png`) — separate palette, light preview stage:

| Token (informal) | Est. hex | Use in ref |
| --- | --- | --- |
| Stage / ground | ~`#CFE0E8` | Soft pastel blue-grey behind low-poly models |
| Industrial orange | ~`#F4A025` | Mining-rig frame |
| Structural charcoal | ~`#1A1A1A` | Beams |
| Gear red | ~`#8B2E2E` | Pulley/gear |
| Foliage greens | ~`#659345` / `#4A6A33` | Tree |
| Trunk brown | ~`#7A4E36` | Tree |

### 1.3 Layout / density patterns

From both robj3d3 images:

- **Dense row lists** (“Death List”): category + price + status in compact rows; monospaced data; high information per vertical inch.
- **Status badges / pills:** small rounded rects — green “YES — one-shottable”, red “NOT REALLY”, orange “Kinda”.
- **Thin high-contrast borders** (green on black) grouping sections — card-like framing for marketing impact.
- **Hero metric card:** oversized provocative number (“COLLECTIVE MRR DESTROYED $…”) — landing-page energy, not IDE.
- **Terminal-flavored input:** large “Can I vibecode ___?” with blinking-cursor energy.
- **CTA pills:** “copy for Claude Code” / “copy for Cursor” — green fill, black text.
- **Mobile vs desktop:** same density grammar, stacked; homepage prioritizes search + metric + list.

From NicolasZu viewer chrome:

- **Minimal floating chrome** over a large centered 3D preview (not a heavy dock stack).
- **Mode pills:** Reference · Voxel · BBox · Non-poly.
- **Serif title** (“Mining drill”) over sans control labels — editorial asset-label contrast.
- **Scrub / playback** along bottom (length shown ~1:28 in screenshot).

---

## 2. Steal matrix — ADE chrome vs marketing vs do not steal

| Pattern | Steal for **ADE chrome**? | Steal for **marketing site**? | Do not steal |
| --- | --- | --- | --- |
| JetBrains Mono (or similar) for data rows, inspector values, micro-labels | **Yes — candidate** | Optional for tech credibility | Locking Mythoras player HUD to JetBrains Mono |
| Space Grotesk display pairing | Maybe for ADE section titles only | **Yes — candidate** for site | Mandating as game World View type |
| Near-black + neon green “hacker SaaS” full skin | Thin IDE chrome only if grilled; prefer Godot-like utility, not brand clone | **Yes — candidate** for a *Mythoras marketing* experiment | Copying canivibecodeit green/black into **game** UI / biomes |
| Dense bordered list + status badges | **Yes — strong ADE candidate** (Mods catalogue, Tags, Gear rows) | Yes for feature lists | Death-list / “MRR destroyed” copy & tone |
| Uppercase wide-tracked micro-labels | **Yes — candidate** (panel headers, field labels) | Yes | Overuse as decoration |
| Green grid hero background | No (noise in craft loop) | **Yes — candidate** | ADE viewport dressing |
| Oversized provocative metric hero | No | **Yes — candidate** | ADE |
| “Copy for Cursor/Claude” CTA pattern | Maybe for agent handoff later | Yes | Product identity |
| Pill CTAs with neon fill | Prefer quieter Godot-like buttons in ADE | Yes | Purple AI-slop pills / glow stacks |
| Light pastel preview stage + mode pills (NicolasZu) | **Yes — principles for ADE preview later** | Weak | Mandating Three.js / Codex as engine |
| Serif asset title over preview | Optional for asset naming chrome | Optional | Replacing Mythoras Protocol/UI language |
| Full canivibecodeit brand (logo, “vibecode”, death-list fiction) | **No** | **No** (different product) | Entire brand paste |

**ADE takeaway:** borrow **density grammar** (mono data, micro-labels, compact status chips, thin separators) — not the marketing narrative or neon brand lock.

**Marketing takeaway:** high-contrast dark + one sharp accent + Space Grotesk / Mono is a known anti-slop pairing *for a site*; still optional and must not bleed into “Mythoras is a dark game.”

---

## 3. NicolasZu — ImageGen → img2threejs → animate (as shown)

### 3.1 Workflow (from `nicolaszu-img2threejs.png`)

Observed pipeline in the thread:

1. **ImageGen skill** — generate a **low-poly 3D concept image** (mining rig; later tree).
2. **img2threejs** — turn that image into a Three.js-buildable / viewable mesh (thread: “build it”).
3. **Animate / interact** — allow animation via a button; separate post explains **“explode”** (disassembly / exploded-view style motion).
4. **Viewer modes** on the resulting asset: **Reference · Voxel · BBox · Non-poly** — inspect structural readings of the same object, not just beauty render.
5. Models named in posts: GPT-5.6 Sol (High) / Luna (Max) inside a **Codex-shaped** workflow — treated here as *their* harness labels, not Mythoras engine candidates.

### 3.2 Mythoras implications (principles only)

**Do not:** adopt Codex, Three.js, or img2threejs as the Mythoras runtime or ADE mandate.

**Do consider as investigation principles for greybox creature/zone assets + deferred ADE preview** (aligns with owner ADE narrowing: Preview purpose = “what the game would look like right now,” not a full client):

| Principle | Why it maps |
| --- | --- |
| **Image → structured mesh → inspect modes** | Greybox creatures/zones need a path from concept art to editable/previewable geometry without polishing first |
| **Multiple structural views** (bbox / voxel / non-poly / reference) | ADE Scene/Systems later: authoring truth vs presentation; similar to tile-grid multi-view (2D net ↔ iso) already desired |
| **Explode / animate as comprehension tools** | Helps designers see parts, sockets, silhouette — craft feedback, not trailer polish |
| **Low-poly first** | Matches anti-bloat / systems-first: readable masses for Tags/Gear/zone markers before art pass |
| **Light neutral stage for assets** | Preview stage can stay calm/neutral even when ADE chrome is dark — avoids forcing “dark game” onto every asset |

Fits Godot craft loop preference: **document → select → inspect → feedback**. The interesting part is the **inspect modes + animate**, not the specific AI vendor stack.

---

## 4. Workflow tools named in robj3d3 thread

From `robj3d3-thread.png` — stack framed as how to vibedesign **without** “every design looking like every other Claude Design output”; replies stress **external context / references**.

| Tool | What it is (public) | Relevance to anti-slop ADE |
| --- | --- | --- |
| **Paper MCP** | [Paper](https://paper.design)-era design app: HTML/CSS-native canvas; MCP lets agents **read/write** the open design (vs Figma MCP’s more limited read/handoff). Marketed as “Figma for agents” in the thread. | Useful if designing **marketing or thin web chrome** with agents. Low priority for in-engine Godot ADE; pattern that matters = **agent can see/edit a real layout**, not guessing in a vacuum. |
| **Refero** | [refero.design](https://refero.design) — curated library of real product screens/flows; **Refero MCP** grounds agents in shipped UI before generate. Explicit anti-“AI all looks the same” pitch. | **Highest transferable idea:** force references (Godot editor, GGG public tools, Algolemeth, own screenshots) before ADE UI generation. Prefer **game-tool** refs over SaaS landing refs for ADE. |
| **ui.sh** | Agent skills from Tailwind / Refactoring UI orbit ([ui.sh](https://analoghq.ai/ui-sh/skills/ui-sh)): `/design`, `/ideas`, etc.; steers typography/color/hierarchy; actively avoids common AI tells (purple defaults, etc.). Invite-gated / early. | Good for **marketing site polish**; for ADE, use as reminder to encode **craft rules + negative prompts** (no purple slop, no card spam) — do not treat as ADE design system. |

Thread philosophy in one line: **human vibe + external references beat default model taste.** That is the portable lesson for Mythoras ADE chrome work.

---

## 5. Explicit non-goals

1. **No commitment** — nothing here locks tokens, fonts, or pipelines into Mythoras canon or tickets without a later grill.
2. **No replacing Mythoras tonal rules** — `CONTEXT.md`: not a universally dark game; biome/situation register wins over canivibecodeit night-club black.
3. **No canivibecodeit brand in Mythoras game UI** — green matrix SaaS fiction stays outside World View / battle / creature presentation.
4. **No purple AI-slop defaults** — do not “fix” dark neon by swinging to generic indigo/purple gradients.
5. **No “adopt Codex / Three.js / img2threejs as engine”** — NicolasZu is **asset-loop inspiration** only.
6. **No landing-page chrome as ADE** — hero metrics, sponsor strips, death-list satire are marketing patterns; ADE stays thin systems IDE (Godot loop, anti-bloat).
7. **No Arcane Cartographer token revival** — visual language remains open (`CONTEXT` OD-004); these refs are candidates beside Godot/GGG/Algolemeth notes, not a replacement identity.

---

## 6. Suggested follow-ups (optional tickets — not opened here)

- Visual-ref grill: ADE density badges + mono inspector **without** neon brand lock.
- Asset-pipeline investigation: greybox creature/zone → multi-mode ADE preview (bbox / silhouette / animate) — stack TBD.
- Marketing-only experiment: Space Grotesk + Mono + single accent (if Mythoras ever needs a site pass).

---

## Sources

- Primary: local screenshots listed in the table above (vision read 2026-08-11).
- Context: `RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md`, `CONTEXT.md` (tone lock, UI language open).
- Tool identity (secondary, public docs): Paper MCP / paper.design; Refero / refero.design MCP; ui.sh / Analog + Tailwind-orbit skills writeups.
