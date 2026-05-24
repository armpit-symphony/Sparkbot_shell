# Static Fixture Content Plan

Updated: 2026-05-24  
Branch: `frontend-only-product-demo-polish`

## Current Static Shell Coverage

- Workstation floor, Chat shell, Round Table shell, Command Center shell, Task Guardian preview, connectors preview, Robo teaser, docs surface, and LIMA readiness panel are present.
- Model stack roles, Guardian posture basics, and release-gate copy are visible.
- Existing context preview now includes explicit Files, Memory, Tasks, and Demo Room fixture surfaces tied to the same product demo.

## Prior Missing Content (Now Covered)

- Files/knowledge workspace preview cards are now represented.
- Memory preview now has a direct user-facing fixture shelf.
- Tasks/reminders now have a lightweight shell-level fixture board.
- Demo Room now ties files, memories, tasks, agents, Round Table outcome, and safety posture together.

## Product-Demo Polish Applied

1. `Files / Knowledge Preview`:
   - static document cards and type labels (`pdf`, `md`, `csv`, `png`)
   - status labels such as `demo fixture`, `summary ready`, `indexed preview`
   - explicit `no live upload` and `no persistence` caveat

2. `Memory Preview`:
   - static cards for user preferences, project context, and pending verification items
   - labels `verified`, `pending approval`, `redacted`, `local-first future`
   - explicit `no live memory writes` caveat

3. `Tasks / Reminders Preview`:
   - static task cards with states `draft`, `planned`, `needs approval`, `blocked`, `done`
   - explicit `no scheduler`, `no background jobs`, `no connector sends` caveat

4. `Demo Room Context`:
   - one static room summary with participating agents, linked files, memory items, task items, Round Table outcome, Guardian posture, and LIMA readiness note
   - local demo-state only

## Safety Boundaries

- No file upload/read/write implementation.
- No memory persistence.
- No task scheduling/reminders runtime.
- No network/provider/connector/runtime calls.
- No localStorage/sessionStorage/cookies.
- No backend routes or runtime adapters.
- No LIMA runtime wiring.

## Public Release Risks

- Over-promising: avoided by marking each fixture surface as static/demo with explicit non-runtime caveats.
- Packaging leakage: keep docs and artifact allowlist unchanged unless required for correctness.
- UX confusion: avoid fake active controls implying real upload/schedule operations.

## Current Status

- Fixture content is implemented and connected to the Workstation storyline.
- Fixture language now better aligns with Round Table recommendation flow.
- Docs discoverability now points users through Workstation, Round Table, and Command Center demo sequence.
- Readiness and release docs have been updated for this polish pass.
