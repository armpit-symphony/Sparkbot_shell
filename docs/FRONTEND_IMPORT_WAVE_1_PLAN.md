# Frontend Import Wave 1 Plan

Updated: 2026-05-24
Branch: `frontend-only-roundtable-static-adaptation`
Status: candidates #1 and #2 executed (manual static adaptation only)

## Wave 1 Objective

Define the first safe, small, high-value frontend-only import wave from R&D references, while keeping Sparkbot Shell static/mock-only.

## Wave 1 Guardrails

- No backend/runtime code.
- No `src-tauri`, `.github`, or `.agents`.
- No API clients or network calls.
- No storage APIs (`localStorage`, `sessionStorage`, cookies).
- No provider key handling.
- No connector runtime calls.
- No terminal/browser/computer control.
- No Guardian internals.

## Recommended Wave 1 Candidate Set

### Candidate 1: Workstation visual layout refinements

- Source reference: `frontend/src/pages/WorkstationPage.tsx`
- Destination: `src/components/WorkstationShell.tsx`, `src/styles.css`
- Copy scope: none direct in this stage.
- What to copy later: static card layout ideas, section hierarchy, seat grouping rhythm.
- Rewrite/stub: remove all terminal, MCP, API, storage, and env-gated paths.
- Stop gates: any pull of `apiFetch`, websocket, terminal hooks, session/local storage.
- Validation: visual regression check at desktop/mobile, forbidden API scan.
- Execution status: COMPLETED in `frontend-only-workstation-static-adaptation`.
- Execution notes:
  - manual static adaptation only
  - no direct source-file copy from R&D
  - no runtime/API/storage additions

### Candidate 2: Round Table visual flow refinements

- Source reference: `frontend/src/pages/MeetingRoomPage.tsx`
- Destination: `src/components/RoundTableFlowShell.tsx`, `src/styles.css`
- Copy scope: none direct in this stage.
- What to copy later: static phase framing, assignment card composition, artifact structure.
- Rewrite/stub: convert room/message/task calls to fixture-backed local constants only.
- Stop gates: any `apiFetch` room/task/artifact endpoints.
- Validation: stage flow still local-only; no network/storage usage.
- Execution status: COMPLETED in `frontend-only-roundtable-static-adaptation`.
- Execution notes:
  - manual static adaptation only
  - no direct source-file copy from R&D
  - no runtime/API/storage additions

### Candidate 3: Model seat and invite-seat visual refinements

- Source reference: `frontend/src/pages/WorkstationPage.tsx`, `frontend/src/config/workstationStations.ts`
- Destination: `src/components/ModelConfigShell.tsx`, `src/components/InviteWingPanel.tsx`
- Copy scope: none direct in this stage.
- What to copy later: compact seat card metadata layout and status indicators.
- Rewrite/stub: remove credential/provider setup logic, auth mode handling, and key/token prompts.
- Stop gates: any key/token input fields or provider config writes.
- Validation: static seat labels only, no persistence.

### Candidate 4: Docs/info visual refinement

- Source reference: `frontend/src/components/Common/SparkbotSurfaceInfoDialog.tsx`
- Destination: `src/pages/DocsPage.tsx` and related static UI sections
- Copy scope: none direct in this stage.
- What to copy later: optional static info panel style.
- Rewrite/stub: keep copy tied to public static boundaries and release-state labels.
- Stop gates: any runtime navigation/auth assumptions.
- Validation: docs links remain public-safe and branch-unpinned.

### Candidate 5: Responsive layout helper

- Source reference: `frontend/src/hooks/useMobile.ts`
- Destination: `src/components/*` (only if needed)
- Copy scope: optional, later.
- What to copy later: isolated viewport helper pattern.
- Rewrite/stub: keep local-only state, no storage/env.
- Stop gates: none beyond normal forbidden API scan.
- Validation: mobile layout checks and overflow checks.

## Explicitly Out of Wave 1

- `frontend/src/components/CommandCenter/SetupPanels.tsx`
- `frontend/src/components/CommandCenter/OperationalPanels.tsx`
- `frontend/src/components/Terminal/XtermTerminal.tsx`
- `frontend/src/hooks/useTerminalSession.ts`
- `frontend/src/lib/*` runtime clients
- `frontend/src/client/*` generated API SDK
- `frontend/src/routes/*` auth/session runtime wrappers

## Execution Sequence (Future, if approved)

1. Select one candidate only (smallest diff first).
2. Apply manual static adaptation in Sparkbot Shell (no direct wholesale file copy).
3. Run full import validation checklist.
4. Stop for review before next candidate.

## Current State

Wave 1 candidates #1 and #2 are complete as static-only adaptations.
Remaining Wave 1 candidates are still pending explicit approval.
