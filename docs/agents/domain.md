# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Layout for this repo

**Single-context (monorepo star):** one shared domain language at the root for the whole monorepo. Do not invent per-package `CONTEXT.md` files unless a future grill deliberately switches to multi-context.

```
/
├── CONTEXT.md                 ← canonical domain vocabulary (exists)
├── docs/adr/                  ← architecture decisions (create lazily)
├── docs/agents/               ← this skills config
└── … (future packages share CONTEXT.md)
```

## Before exploring, read these

- **`CONTEXT.md`** at the repo root.
- **`docs/adr/`** — read ADRs that touch the area you're about to work in.

If `docs/adr/` doesn't exist yet, **proceed silently**. Don't flag its absence; don't suggest creating it upfront. The `/domain-modeling` skill (reached via `/grill-with-docs` and `/improve-codebase-architecture`) creates ADRs lazily when decisions actually get resolved.

There is **no** `CONTEXT-MAP.md` — do not look for multi-context layouts unless one is added later.

## Use the glossary's vocabulary

When your output names a domain concept (in an issue title, a refactor proposal, a hypothesis, a test name), use the term as defined in `CONTEXT.md`. Don't drift to synonyms the glossary explicitly avoids.

If the concept you need isn't in the glossary yet, that's a signal — either you're inventing language the project doesn't use (reconsider) or there's a real gap (note it for `/domain-modeling`).

## Flag ADR conflicts

If your output contradicts an existing ADR, surface it explicitly rather than silently overriding:

> _Contradicts ADR-0007 (event-sourced orders) — but worth reopening because…_
