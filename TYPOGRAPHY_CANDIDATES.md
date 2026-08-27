# Typography candidates

> **Status:** A menu, not a decision. Nothing here is locked and nothing here is
> Mythoras canon. Started 2026-08-27 because choosing type from adjectives has
> not worked; choosing from a list of named faces with known jobs might.
>
> Verified facts are marked **[FACT]** with their source. Everything else is a
> candidate or an opinion, marked as such.

---

## 1. What the reference games actually use

This is the part worth internalising before picking anything. Three games we
admire solved the same problem three incompatible ways, which is itself the
argument that there is no "correct" game font.

| Game | Body / UI | Display / names | Notes |
| --- | --- | --- | --- |
| **Darkest Dungeon** | **Ubuntu** (humanist sans) | **Dwarven Axe BB** (Blambot, blackletter) | **[FACT]** read from the Steam install's BMFont mapping, `fonts.darkest`. Also ships New Rocker and Amble; New Rocker is *not* wired to the HUD, Amble is a 5-glyph pip icon font, not a text face. |
| **Path of Exile** | **Fontin** (humanist serif, Jos Buivenga / exljbris) | Logo is bespoke lettering, not a font | **[FACT]** confirmed across several GGG forum threads. GGG bundle a *corrected* Fontin because the public release has a broken `ffi` ligature — install the public version locally and PoE renders "INSU_CIENT MANA". Fontin is **free**. |
| **Diablo I / II** | — | **Exocet** (Jonathan Barnbrook) | **[SECONDARY]** widely known, repeated in the same PoE thread; not verified against a Blizzard source. |
| **Master of Pieces** | Unknown — not yet measured | Unknown | Frames are being captured into `reference/gameview-mop/`. Measure before assuming. |

**The observation that matters.** Darkest Dungeon's body face is a **sans**;
Path of Exile's is a **serif**. Both read as convincingly of-their-world. So the
"game feel" is not coming from serif-versus-sans, and an argument about which
family is more "gothic" is an argument about nothing. What they share is that
the body face is *quiet, humanist, and set small and dense*, while exactly one
display face carries all the personality — and it is used sparingly.

**The second observation.** Path of Exile's entire interface runs on a **free**
typeface. Whatever is stopping Mythoras looking right, it is not a font budget.

---

## 2. The job list

Pick faces per job, not per project. This is the mapping Darkest Dungeon uses
internally and it is the right level of granularity.

| Job | What it needs | How much of the screen |
| --- | --- | --- |
| **Display** — creature names, banners, zone titles | Personality, works at large sizes only, may be near-illegible small | ~2% of glyphs |
| **Body** — labels, tooltips, glossary, flavour | Legible at 14–20px, generous x-height, low contrast | ~80% of glyphs |
| **Data** — stat grids, HP figures, counts | **Tabular figures**, unambiguous 0/O and 1/l/I | ~15% of glyphs |
| **Mono** — ADE only, never the game | Code density, clear punctuation | ADE surface only |

**The technical detail nobody specifies and everybody should.** A stat grid
needs **tabular (monospaced) figures**, so that `85`, `7%` and `4-9` align in a
column and do not jitter when a value changes during combat. Ubuntu has proper
tabular figures. Many display and geometric faces do not. This is a real,
checkable property — `font-variant-numeric: tabular-nums` — and it is exactly
the kind of component-level fact that prose specs never capture.

---

## 3. Display candidates

Personality faces. One of these, used sparingly, is the whole visual identity.

| Face | Flavour | Licence | Note |
| --- | --- | --- | --- |
| **UnifrakturCook** | Blackletter, condensed, heavy | OFL, free | **Currently in use** as the Dwarven Axe BB stand-in. Legitimate, but the most obvious blackletter choice. |
| **UnifrakturMaguntia** | Blackletter, wider, more formal | OFL, free | Sibling of the above; calmer, more manuscript than woodcut. |
| **Dwarven Axe BB** | Blackletter, comic-lettering origin | **Blambot, commercial** | What DD1 actually uses. Cheap. Buy it only if the trace becomes the identity. |
| **Pirata One** | Blackletter, single weight, tight | OFL, free | Sharper and more modern than Unifraktur; less "medieval manuscript". |
| **Cinzel / Cinzel Decorative** | Roman inscriptional capitals | OFL, free | Carved-in-stone register. Fits "structural and compiled" far better than blackletter does. |
| **Marcellus SC** | Inscriptional, small caps | OFL, free | Quieter Cinzel. Good if names should feel official rather than gothic. |
| **Cormorant / Cormorant Unicase** | High-contrast display serif | OFL, free | Elegant, fragile. Reads arcane rather than industrial. |
| **Eczar** | Display serif with heavy weights | OFL, free | Unusual, warm, not medieval-by-default. |
| **Exocet** | Angular, archaic, semi-runic | Commercial (Emigre) | The Diablo face. Strong identity, strongly *someone else's*. |
| **Jacquard 12 / Jacquarda Bastarda** | Pixel-blackletter hybrid | OFL, free | Worth a look if the voxel board argues for a pixel register. |

**Opinion.** Blackletter is inherited from tracing DD1, and it is worth asking
whether it is actually Mythoras. The Protocol is described as structural and
compiled, a network with biological properties — not a medieval manuscript. The
**inscriptional** family (Cinzel, Marcellus) says "carved, official, systemic"
where blackletter says "gothic horror". That is a peel-time question, not a
trace-time one, but it should be asked rather than defaulted.

---

## 4. Body candidates

Quiet, humanist, legible at small sizes. This is 80% of the glyphs and, per
Butterick, the thing that actually determines whether the screen looks good.

| Face | Class | Licence | Note |
| --- | --- | --- | --- |
| **Ubuntu** | Humanist sans | UFL, free | **Currently in use.** What DD1 uses. Distinctive without shouting; proper tabular figures. |
| **Fontin** | Humanist serif | Free (exljbris) | **What PoE uses.** Designed specifically for small sizes. The single strongest candidate if the direction ever turns serif. Also has a Smallcaps sibling. |
| **Calluna / Calluna Sans** | Humanist serif / sans | Free basic weights (exljbris) | Same designer as Fontin, warmer. A serif/sans superfamily is a genuine advantage — one voice, two textures. |
| **Alegreya / Alegreya Sans** | Humanist serif + sans superfamily | OFL, free | Designed for long-form literature; the sans is excellent for UI. Superfamily pairing solves body-plus-data in one decision. |
| **Source Serif / Source Sans** | Neutral superfamily | OFL, free | Very safe, very legible, slightly characterless. |
| **Vollkorn** | Sturdy text serif | OFL, free | More texture than Source, still quiet. |
| **Spectral** | Screen-first serif | OFL, free | Designed by Production Type for screens specifically. |
| **IBM Plex Sans** | Neutral grotesque | OFL, free | **Explicitly rejected for the plate** in POSTURE §5 — reads as engineering-tool SaaS. Listed so nobody re-proposes it. |
| **Inter** | Neutral UI sans | OFL, free | The corpus default. If it appears without being chosen, that is the slop arriving. |

---

## 5. Data / numeric candidates

Only needed if the body face's figures are inadequate. Check first — Ubuntu's
are fine.

| Face | Note |
| --- | --- |
| **Ubuntu** | Tabular figures present. Currently sufficient. |
| **Fontin** | Serif figures; check tabular support before relying on it in a grid. |
| **Roboto Mono / IBM Plex Mono** | Guaranteed tabular. Reads technical — which may suit a Protocol register, or may fight the plate. |
| **Oxanium / Chakra Petch** | Angular technical faces. Strongly "sci-fi HUD". Probably wrong for the plate, possibly right for the ADE. |

---

## 6. ADE — a different surface, a different answer

The ADE is a **tool**, not the game. It should look like an editor and is
explicitly not bound by the game's type decisions (ADR-0001).

| Face | Note |
| --- | --- |
| **JetBrains Mono** | Named in the ADE research. Good default. |
| **IBM Plex Mono / Sans** | Rejected for the *plate*; entirely appropriate here. |
| **Berkeley Mono** | Commercial. Distinctive. Only if the ADE deserves an identity. |

---

## 7. How to actually decide

1. **Body first.** Butterick's rule one, and it is 80% of the glyphs. Set the
   body face, size, leading and measure before looking at a single display face.
2. **One display face, used sparingly.** All three reference games do this.
   Two display faces is one too many.
3. **Test at real density.** A face that looks good in a specimen looks
   different in a 19px stat grid on black at 18px pitch. Set the actual plate
   content, not lorem ipsum.
4. **Check tabular figures** before committing anything to the data job.
5. **Check the licence before use, not after.** Free-for-personal is not free.

**What not to do:** pick from adjectives. "Gothic", "premium", "game-like" and
"dense" have all failed already. Pick two named faces, set the real content,
look at it.

---

## 8. Open

- Master of Pieces' faces — not yet measured. Frames are being captured.
- Whether blackletter is Mythoras or is inherited from DD1 (see §3 opinion).
  This is a peel question and belongs with the signature-element question in
  POSTURE §5.4.
- Whether the ADE and the game should share any face at all. Currently assumed
  no.
