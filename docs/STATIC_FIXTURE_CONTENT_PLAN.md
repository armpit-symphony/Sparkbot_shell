# Static Fixture Content Plan

Updated: 2026-05-24  
Branch: `frontend-only-static-fixtures-pass`

## Current Static Shell Coverage

- Workstation floor, Chat shell, Round Table shell, Command Center shell, Task Guardian preview, connectors preview, Robo teaser, docs surface, and LIMA readiness panel are present.
- Model stack roles, Guardian posture basics, and release-gate copy are visible.
- Existing context preview focuses on meeting/context events but does not yet present explicit product-shell previews for Files, Memory, and Tasks as standalone fixture surfaces.

## Missing Static Preview Content

- Files/knowledge workspace preview cards are not explicitly represented.
- Memory preview is present indirectly via context events but lacks a simple user-facing memory shelf model.
- Tasks/reminders preview is spread across Task Guardian framing and lacks a lightweight shell-level task board.
- No single "demo room" card that ties files, memories, tasks, agents, Round Table outcome, and safety posture together.

## Proposed Fixture Additions

1. Add `Files / Knowledge Preview` section:
   - static document cards and type labels (`pdf`, `md`, `csv`, `png`)
   - status labels such as `demo fixture`, `summary ready`, `indexed preview`
   - explicit `no live upload` and `no persistence` caveat

2. Add `Memory Preview` section:
   - static cards for user preferences, project context, and pending verification items
   - labels `verified`, `pending approval`, `redacted`, `local-first future`
   - explicit `no live memory writes` caveat

3. Add `Tasks / Reminders Preview` section:
   - static task cards with states `draft`, `planned`, `needs approval`, `blocked`, `done`
   - explicit `no scheduler`, `no background jobs`, `no connector sends` caveat

4. Add `Demo Room Context` section:
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

## Planned Changes

- Add a new static fixture preview component in `src/components`.
- Add static fixture data in `src/data` for files/memory/tasks/demo-room content.
- Render fixture preview in Workstation for immediate discoverability.
- Add a docs discoverability note from `DocsPage` to `#/workstation` fixture surfaces.
- Update readiness and release docs to reflect this static fixture/content pass and current branch.
