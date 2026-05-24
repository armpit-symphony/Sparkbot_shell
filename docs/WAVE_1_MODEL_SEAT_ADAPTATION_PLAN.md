# Wave 1 Model Seat Adaptation Plan

Updated: 2026-05-24  
Branch: `frontend-only-model-seat-static-adaptation`

## Scope

Wave 1 candidate #3 only: Model stack + Invite Wing visual refinement.  
Manual static adaptation only, using R&D model-seat surfaces as design reference.

## R&D Visual Concepts Reviewed (Read-Only)

- `Sparkbot/frontend/src/components/CommandCenter/SetupPanels.tsx`
- `Sparkbot/frontend/src/lib/sparkbotControls.ts`
- `Sparkbot/frontend/src/config/workstationStations.ts`
- `Sparkbot/frontend/src/pages/WorkstationPage.tsx`
- `Sparkbot/frontend/src/lib/workstationMeeting.ts` (seat/launch context only)

Concepts reviewed:

- Four-seat stack framing (Primary, Backup 1, Backup 2, Heavy Hitter).
- Invite Wing seat cards and setup-state signals.
- Seat visibility markers for Round Table and Specialty Wing.
- Provider/model label grouping and setup/readiness indicators.
- Workspace-to-meeting seat relationships.

## Public-Safe Concepts to Adapt

- Stronger visual hierarchy for model-seat roles.
- Clear static labels for configured vs placeholder seats.
- Explicit BYO/Invite Wing lane in the model stack.
- Static tie-in counters for Round Table visibility and Specialty Wing coverage.
- Future setup-flow cards that avoid credential/key/runtime implications.
- Explicit no-key/no-provider-call/no-runtime badges.

## Concepts Rejected or Deferred

- Provider auth mode/runtime key forms.
- API token/credential handling and Vault references.
- Any save-to-backend model-seat calls.
- Any provider/model routing runtime execution.
- Any session/auth/storage logic.
- Any Round Table launch/heartbeat/room APIs.

## Sparkbot Shell Files Planned for Change

- `src/components/ModelConfigShell.tsx` (primary)
- `src/styles.css` (layout/style support)
- docs + README updates for traceability

No backend/runtime files will be changed.

## Safety Boundaries

- Static frontend only.
- No backend runtime.
- No provider/model calls.
- No connector calls.
- No network calls.
- No persistence/storage APIs.
- No scheduler/background execution.
- No key/token/secret handling.
- No Guardian internals.
- No terminal/browser execution.
- No robotics/IoT control.
- No LIMA runtime wiring.

## Stop Gates (Active)

Stop immediately if any diff introduces:

- `fetch`, `axios`, `WebSocket`, `EventSource`
- `localStorage`, `sessionStorage`, `document.cookie`
- `process.env`, `import.meta.env`
- provider key/token/credential handling runtime
- backend/model API writes
- direct R&D source-file copy

## Outcome Target

Model stack and Invite Wing read as a coherent public shell surface with explicit static boundaries:

- `Static preview`
- `Demo fixture`
- `No API keys stored`
- `No provider calls`
- `No model routing runtime`
- `Future setup flow only`

