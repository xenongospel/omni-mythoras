# Visual + Cipher Board Notes (Agent D)

> Research / parking notes — **not canon**. Cross-links: `IDEA_LOG.md` (IDEA-008 + new IDEA-011+), `POE2_TEMPLE_RESEARCH.md`, `POE_ENDGAME_RESEARCH.md`.
> Sources: 31.6s hub video (TheLabaOfficial clip, 640×360 @60fps), Temple Console reference still, existing Mythoras docs.

---

## 1. Lighting + Camera (hub video)

**Clip:** night-market / town hub, Japanese-inspired architecture, continuous play (resource counter ticks ~460→336). Scene-change detection shows frequent viewpoint shifts across ~32s — this is a **moving hub camera**, not a locked combat orthographic.

### Lighting lessons (portable)

| Observation | Why it works | Mythoras takeaway |
|---|---|---|
| **Local warm point lights** (lanterns, shoji interiors) against **cool dark ambient** | Creates “safe pockets” and path legibility without flat GI | Hub/hideout identity via *authored light pools*, not global day cycle alone |
| **High contrast + soft bloom** on emitters | Cozy / invitational mood; buildings read as inhabited | Prefer sparse, bright emitters over uniform fill; bloom budget for hubs only if combat stays crisp |
| **Wet stone + water reflections** (canal/pond; rain in some beats) | Doubles light value; grounds the diorama | Cheap atmosphere win for hubs — reflective ground plane + water Remnants |
| **Light guides playable space** | Paths/plazas lit; foliage/edges fall to silhouette | In hubs, illumination = soft navigation hint; combat keeps grid-first clarity |
| **YAVG ~54–74 / YMAX 255** across keyframes | Dark overall, spikes only at emitters | Target mood: low midtones, hot highlights — not HDR wash |

### Camera lessons (portable)

- **Angle stays isometric / high-oblique** even while translating — freedom is *pan/follow/dolly within the diamond*, not free FPS look.
- **Tilt-shift / shallow DOF** sells miniature-hub presence; combat should stay sharper for tile readability.
- **Vertical layering** (roofs, balconies, canal walls) makes a static projection feel rich when the camera *moves past* it.
- Owner interest: lighting + this kind of motion for **hubs / towns / hideouts** with freer player movement — **not** for combat.

### Structural callout — dual camera (combat static vs hub freer)

Mythoras combat is locked to a **static isometric** tactical camera (tile clarity, Turn Program readability). Hubs wanting freer motion implies a **second camera contract**.

| Cost | Detail |
|---|---|
| **Asset completeness** | Freer orbit/pan needs more modeled facades, roofs, backsides; combat-facing “billboard fronts” break under motion |
| **Occlusion / cutaway** | Moving camera + dense hubs → roof fade, wall cutaways, or camera collision — extra systems combat doesn’t need |
| **Lighting dual path** | Hub wants many dynamic point lights + bloom/reflections; combat wants stable, readable lighting for units/VFX. Two lighting profiles (or aggressive LOD) |
| **Control split** | Click-to-move / follow-cam vs combat grid selection — distinct input modes, tutorial surface, bug surface |
| **Scene architecture tension** | DOC_v6 §62 assumes one persistent scene + three *zoom scales* with tweens. A freer hub camera is a **fourth behavioral mode** (same scene OK, different controller + constraints), not “just another zoom” |
| **QA / parity** | Every hub Remnant must look correct from a path of angles; combat tiles only need one orthographic truth |

**Recommendation to park:** Keep combat camera rigid. Scope freer camera **only** to hubs/towns/hideouts (and maybe Cipher Console diorama framing). Treat it as an explicit dual-mode camera budget in production planning — do not accidentally let hub freeness leak into Battle Arena.

Logged: **IDEA-011**.

---

## 2. Temple Console aesthetic (reference, not copy)

**Source still:** arcane stone / bronze console UI — diamond (rotated isometric) grid, carved tiles with path etching, tier numerals on room icons, ornate frame, “RUN TEMPLE” commit, capacity counter.

### Steal the *quality bar*, not the *framework*

| Keep (quality / UX) | Leave (PoE2 Vaal identity) |
|---|---|
| Physical “instrument” feel — carved material, weight, filigree as *crafted object* | Vaal / Atziri / temple lore, RUN TEMPLE verb, skull decay meter |
| Diamond / isometric board read that matches Mythoras world projection | Exact 9×9 (or 11×11) room-card temple rules |
| Icon + tier numeral co-located on tiles (legibility) | Roman-numeral room tiers as Mythoras vocabulary |
| Heavy commit CTA + clear resource/capacity read | Energised Crystal / beacon economy |

Mythoras Cipher Console should hit **similar craft and material richness**, but sit in Mythoras’s own register: arcane fantasy **plus** tech/diagnostic themes are welcome (per naming directive / IDEA-004) — **not locked** to either. Console can feel like a research instrument or a ritual slab; both are valid if the object reads as *authored and expensive*.

Logged: **IDEA-012**.

---

## 3. Cipher board seeding (anti–Vaal-Beacon)

PoE2 Fate of the Vaal loop = farm beacons → crystals → place rooms. Owner direction for Mythoras: **do not** copy that gather loop.

### Preferred spine

1. **First Cipher board arrives pre-filled / semi-atlas** — not a blank 81-tile anxiety surface.
2. **Campaign decisions act as seeds** — route choices, Examiner outcomes, Region Sovereign results, Remnant discoveries, Network Agent relationships write *initial topology* (paths, locked cells, tagged nodes) onto the board the player inherits at endgame unlock.
3. **Authored environment augments Ciphers** — hand-placed Remnants / zone templates / narrative landmarks decorate and modify Cipher instances (cf. DOC Remnants vs Obstacles), rather than a Minecraft-style “haul power home to build.”
4. Board growth after unlock can still be player-authored (placement, adjacency, Frontier investment) — but the *entry fantasy* is “your campaign left a fingerprint on the Network,” not “farm fuel to paint tiles.”

This preserves what temple research praised (deterministic authorship, adjacency puzzle) while avoiding launch pain (grindy entry cost, opaque blank-board rules).

Logged: **IDEA-013**.

---

## 4. Ascendancy central node ≈ cluster jewel

Parked analogy: the **central / commitment node** on an Ascendancy-like creature investment (Pinnacle Evolution / Commitment Mechanic territory) behaves like a **PoE cluster jewel socket** — a high-leverage socket that:

- Defines a *local subgraph* of notables/smalls rather than one flat passive
- Is a rare, deliberate install (not free pathing filler)
- Can be swapped/respecced at cost, so identity is modular
- Sits visually/structurally at the hub of that creature’s specialty tree

Useful for creature depth (DOC already notes species mod pools as cluster-jewel architecture); extend the same *socket-at-center* pattern to Ascendancy-central if/when that system is grilled.

Logged: **IDEA-014**.

---

## 5. Threat Attunement — rename vectors

Current term works mechanically (pre-encounter risk/reward dial) but reads jargon-heavy. Rename candidates to explore (not lock):

| Vector | Flavor | Risk |
|---|---|---|
| **Monster Intensity** | Clear “how hard are packs” | May undersell reward side |
| **Severity** | Clinical / diagnostic register | Abstract; needs UI pairing with reward |
| **Threat** (short) | Already in Attunement; punchier alone | Collision with aggro/threat tables if any |
| Keep **Threat Attunement** | Accurate to existing docs | Long; techy |

Session ask when renaming: preserve the dial’s *optionality* and the 0–150%+ thresholds’ meaning (ailment gates, boss phases, Apex).

Logged: **IDEA-015**.

---

## 6. Unique name seed — *Wage of War*

Parked unique item name: **Wage of War**. Fits Mythoras’s loose thematic reinterpretation rule (martial / economic double meaning — payment for conflict, cost of continued campaigning). No itemization locked; name only.

Logged: **IDEA-016**.

---

## 7. Hub / edge governance + multi-region Cipher access

From PoE Atlas lessons + IDEA-008 Network Agents direction:

- **Hub** = orchestration surface (Compiler / Cipher Console / stash / Network Agents) — where you *configure* the Network.
- **Edge** = where Ciphers actually run — regional frontiers, pinnacle approaches, anomaly sites.
- **Governance question:** who/what controls which edges a Champion may open? Candidates: Region Sovereign allegiance, Network Agent unlocks, campaign seed flags, Frontier allocation, Hub-upgrades that gate multi-region access.
- **Multi-region Cipher Network access** should feel like a *earned aperture* (open another Region’s cipher pool / board sector), not automatic global unlock — preserves Region identity into endgame while still allowing long-term horizontal expansion.

Logged: **IDEA-017**.

---

## 8. Transparency philosophy

Align Mythoras with PoE2’s structural-transparency direction (`POE_ENDGAME_RESEARCH.md` §8 / principle 9):

- **Rarity / intensity tiers exposed in UI** (unique tiers, Cipher node tiers, Threat dial breakpoints) — official vocabulary, not datamine folklore.
- **Weights discoverable** — exact drop tables need not be a splash screen, but the *shape* of odds (tier-first then roll; floors; guaranteed boss keys) should be learnable in-game (tooltips, Codex, Network Agent explainers).
- **Mystery stays in outcomes**; **clarity stays in rules.** Temple launch opacity (pathing/adjacency unexplained) is the anti-pattern.

Logged: **IDEA-018**.

---

## 9. PoE1 static mapping vs PoE2 dynamic routing — foundational only

| | PoE1 Atlas | PoE2 Atlas |
|---|---|---|
| Board | Finite 2D constellation; pick owned maps | Expanding world map; contiguous routing |
| Question answered | “How much have I done?” | “Where am I going?” |
| Landmarks | Voidstones / corner pinnacles | Towers, Fortress, **Citadels**, mechanic pinnacles |
| Risk | Spreadsheet feel | Aimlessness / dead regions without landmarks |
| Sustain match | Item-maps + abstract web | Location-nodes + journey pacing |

**Foundational lessons for Cipher Network (no copy):**

1. Pair board *shape* with sustain economy — don’t mix “teleport any Cipher” UI with “must path contiguously” rules without intention.
2. Infinite/dynamic boards need **authored landmarks** (citadel/anomaly analogues) or they go flat.
3. Static/finite boards need a **completion chart that pays meta-points**, or they become a checklist with no forever-game.
4. Mythoras can hybridize: campaign-seeded finite sector + expanding anomaly edges — but name and teach the hybrid.

Logged: **IDEA-019**.

---

## Cross-reference checklist

| Topic | Notes § | IDEA |
|---|---|---|
| Dual camera / hub lighting | §1 | IDEA-011 |
| Temple Console aesthetic | §2 | IDEA-012 |
| Pre-filled / campaign-seeded Cipher board | §3 | IDEA-013 |
| Ascendancy center ≈ cluster jewel | §4 | IDEA-014 |
| Threat Attunement rename | §5 | IDEA-015 |
| Wage of War | §6 | IDEA-016 |
| Hub/edge + multi-region access | §7 | IDEA-017 |
| Transparency | §8 | IDEA-018 |
| PoE1 vs PoE2 Atlas foundations | §9 | IDEA-019 |

Parent exploration: **IDEA-008** (Cipher Network architecture).
