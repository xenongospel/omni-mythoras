# Architecture Decision Records

One file per decision that a later session would otherwise re-litigate.

`docs/agents/domain.md` already tells every agent to read this folder before
working in an area. Until now the folder did not exist, so agents proceeded
silently and decisions lived in chat, research dumps, and issue comments —
which is how `CONTEXT.md` and `POSTURE_REQUIREMENTS.md` ended up describing two
different games without anyone noticing.

## When to write one

Write an ADR when a grill closes, when the owner gives a keep / kill / steal
verdict, or when two existing documents are found to contradict each other.

Do **not** write one for anything still being explored. Exploration lives in
`RESEARCH_*.md`; an ADR is the residue left after a choice is actually made.

## Format

Numbered `NNNN-kebab-title.md`, with four sections:

- **Status** — Proposed, Accepted, Superseded by ADR-NNNN, or Reversed
- **Context** — what forced the decision, with links to the evidence
- **Decision** — what was chosen, in the vocabulary of `CONTEXT.md`
- **Consequences** — what this now makes true, including what it costs

Keep them short. An ADR nobody rereads is another document to get lost in.

## Relationship to the other documents

| Document | Holds |
| --- | --- |
| `CONTEXT.md` | Domain vocabulary — what words mean |
| `docs/adr/` | Decisions — what was chosen and why |
| `RESEARCH_*.md` | Evidence — what was found, never canon |
| `apps/*/POSTURE_REQUIREMENTS.md` | The governing spec for one surface |
| GitHub issues | Work — what is being done next |

When an ADR contradicts `CONTEXT.md`, the ADR is newer and `CONTEXT.md` should
be amended in the same pass. Two live truths is the failure mode this folder
exists to prevent.
