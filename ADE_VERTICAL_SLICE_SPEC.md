# ADE Vertical Slice Spec — ADE-00

**Target seam:** One task card on board → dispatched to one terminal pane running a CLI agent → status updates when agent completes.

**Scope:** ADE-01 MVP (BACKLOG BL-001 + BL-002). This spec is the pre-build Architect Room deliverable. It defines everything needed for a Build Room session to begin coding without further planning.

---

## 1. What the Slice Proves

A single end-to-end flow works:

```
User creates task card
  → User clicks "Launch Build Room"
    → ADE spawns a terminal pane
      → Terminal runs the CLI agent with the task brief
        → Agent streams output to the terminal
          → Card status updates to "in-progress"
            → Agent exits
              → Card moves to "complete"
```

This is enough to make ADE genuinely useful for managing Mythoras development sessions. Everything else (skill panel, DAG view, DECISION_LOG UI) is deferred to ADE-02.

---

## 2. Stack Decision

**Primary:** Tauri 2 + React 18 + Zustand — same stack as Mythoras game. This means:
- Shared tooling, same dev environment
- Tauri's `Command` / `shell` sidecar APIs for PTY spawning
- ADE lives as a separate Tauri app (separate repo or workspace package — confirm before build)

**Repo location question (must confirm before ADE-01 build):** Does ADE live in:
- (A) The same monorepo as Mythoras, as a separate Tauri workspace app?
- (B) A completely separate git repo at a sibling path?

Recommendation: (A) monorepo workspace if Mythoras is already structured as a workspace; (B) separate repo if Mythoras has a flat structure. ADE must be independently launchable — it cannot depend on Mythoras running.

**CLI adapter for slice:** Cursor background agent (`cursor --background-agent` or equivalent CLI entrypoint). If Cursor CLI is not yet available, fall back to Claude Code (`claude`) as the single adapter for the slice. The slice tests ONE adapter — expand to full room-type/adapter registry in ADE-02.

---

## 3. Data Model — Task Card

```typescript
interface TaskCard {
  id: string;              // UUID v4
  title: string;           // Short label shown on kanban
  status: KanbanStatus;
  agentBrief: AgentBrief;
  createdAt: string;       // ISO 8601
  updatedAt: string;
  sessionLog?: string;     // Path to terminal output file for this run
}

type KanbanStatus = 'todo' | 'in-progress' | 'in-review' | 'complete';

interface AgentBrief {
  goal: string;            // One paragraph describing what the agent must accomplish
  context?: string;        // Optional: relevant file paths, docs, constraints
  acceptanceCriteria: string[];  // Checklist of what "done" means
  roomType: 'build';       // Only 'build' for slice; expand in ADE-02
  adapter: 'cursor' | 'claude-code';  // CLI adapter to use
}
```

**Storage:** JSON file (`ade-tasks.json`) in a configurable workspace data directory (default: `~/.ade/tasks.json`). No database for slice. Zustand store loads from file on startup; persists on every state mutation.

---

## 4. Kanban State Machine

```
           ┌──────────────────────────────────────────────────────┐
           │                                                      │
   [todo] ─→ [in-progress] ─→ [in-review] ─→ [complete]         │
      ↑            │                 │                           │
      │        (on agent exit)   (manual or                      │
      │        transition to     auto-confirm                    │
      └──────── in-review        on success)                     │
                                                                  │
   Any status ─→ todo  (manual reset, e.g. retry after failure)  │
   └────────────────────────────────────────────────────────────┘
```

**State transitions:**
| From | To | Trigger |
|------|-----|---------|
| `todo` | `in-progress` | User clicks "Launch Build Room" |
| `in-progress` | `in-review` | Agent process exits (any exit code) |
| `in-review` | `complete` | User clicks "Mark Complete" OR exit code 0 + auto-complete setting enabled |
| `in-review` | `todo` | User clicks "Retry" (resets to retry) |
| Any | `todo` | User clicks "Reset" |

**Auto-complete:** Off by default for the slice. The user always confirms completion in `in-review`. This is the safer default — the agent's exit code being 0 does not guarantee the task was actually completed correctly.

---

## 5. PTY Spawn + CLI Routing

Tauri provides `tauri-plugin-shell` for spawning child processes. The slice uses this to spawn the CLI agent.

```typescript
// Pseudo-code for Build Room launch
async function launchBuildRoom(task: TaskCard): Promise<void> {
  const brief = formatBriefForCLI(task.agentBrief);
  
  // Write brief to temp file so CLI adapter can read it
  const briefPath = await writeTempFile(brief);
  
  // Construct command based on adapter choice
  const command = task.agentBrief.adapter === 'cursor'
    ? ['cursor', '--background-agent', '--task-file', briefPath]
    : ['claude', '--task-file', briefPath];   // Claude Code equivalent
  
  // Spawn with streaming stdout/stderr
  const child = await Command.create(command[0], command.slice(1))
    .spawn();
  
  // Update card status
  store.updateTaskStatus(task.id, 'in-progress');
  
  // Stream output to terminal pane
  child.stdout.on('data', line => terminalStore.appendLine(task.id, line));
  child.stderr.on('data', line => terminalStore.appendLine(task.id, line));
  
  child.on('close', code => {
    store.setTaskExitCode(task.id, code);
    store.updateTaskStatus(task.id, 'in-review');
  });
}
```

**One terminal pane per active session.** If the user tries to launch a second Build Room while one is `in-progress`, ADE shows a warning: "A session is already running for this card." The user must wait for it to complete or reset it.

---

## 6. Brief Formatting

The CLI agent receives the task brief as a structured prompt file (`brief.md`):

```markdown
# Task Brief — {task.title}

## Goal
{task.agentBrief.goal}

## Context
{task.agentBrief.context ?? "No additional context provided."}

## Acceptance Criteria
{task.agentBrief.acceptanceCriteria.map(c => `- [ ] ${c}`).join('\n')}

## Working Directory
{workspaceRoot}

---
*Generated by ADE. Room type: {task.agentBrief.roomType}. Adapter: {task.agentBrief.adapter}.*
```

This file is written to `~/.ade/sessions/{task.id}/brief.md` before the agent is spawned. The session directory also receives the streaming log output at `~/.ade/sessions/{task.id}/output.log`.

---

## 7. Completion Detection Contract

For the slice, completion is detected by **process exit** only:

- Agent process exits → card transitions to `in-review`
- Exit code is recorded on the card (`sessionExitCode`)
- User sees exit code in the terminal pane header and manually confirms completion

**Not used in slice:** sentinel log lines, agent-generated JSON summary, auto-promote on exit 0. These are valid expansion options for ADE-02 once the basic flow is proven.

---

## 8. UI — Minimal Kanban View

Four columns: **To Do | In Progress | In Review | Complete**

Each card shows:
- Title
- Status badge (colour-coded)
- "Launch Build Room" button (only shown on `todo` cards)
- "View Output" button (shown on `in-progress`, `in-review`, `complete` cards)
- "Mark Complete" button (shown on `in-review` cards)
- "Reset" button (shown on `in-review` cards — resets to `todo`)

**Terminal pane:** Side panel that opens when "View Output" is clicked. Displays the streaming log for the active session. Uses a monospace font. Auto-scrolls. Read-only — no input field for the slice (the agent runs non-interactively from the task brief).

**No UI design token constraints for the slice.** OD-004 (UI design language) is unresolved. Use a functional neutral style for the slice — plain dark background, monospace, status badge colours (grey/amber/blue/green for the four statuses). No attempt to implement Arcane Cartographer or any design system in the slice.

---

## 9. Acceptance Test

The slice is done when ALL of the following pass manually:

- [ ] User can create a task card with a title, goal, context, acceptance criteria, and adapter selection
- [ ] Task card appears in the "To Do" column
- [ ] User clicks "Launch Build Room" — terminal pane opens and shows live agent output
- [ ] Card status changes to "In Progress" while agent runs
- [ ] Agent completes — card moves to "In Review" automatically
- [ ] User clicks "Mark Complete" — card moves to "Complete"
- [ ] Restarting ADE preserves all card state (loaded from `ade-tasks.json`)
- [ ] Attempting to launch a second Build Room while one is running shows a warning

---

## 10. Out of Scope (Defer to ADE-02)

- Skill management panel (BL-003)
- Dependency DAG view (BL-004)
- DECISION_LOG / BACKLOG UI (BL-005)
- Multi-agent parallel terminal panes
- Full room type registry (Planning, Explore, Review, Recover, Brainstorm)
- Automatic acceptance criteria checking
- Sentinel line completion detection
- ADE settings / preferences panel
- Authentication / remote agent support

---

## 11. Open Question Before Build Starts

**Must confirm:** ADE repo location — monorepo workspace app vs separate repo? This determines the Tauri project setup command and the initial file structure. All other questions in this spec can be resolved during the Build Room session.
