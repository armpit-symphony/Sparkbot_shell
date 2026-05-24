# Wave 1 Round Table Adaptation Plan

Updated: 2026-05-24
Branch: `frontend-only-roundtable-static-adaptation`

## Scope

Wave 1 candidate #2 only: Round Table visual flow refinement.  
Manual static adaptation only, using R&D meeting surfaces as design reference.

## R&D Visual Concepts Reviewed (Read-Only)

- `Sparkbot/frontend/src/pages/MeetingRoomPage.tsx`
- `Sparkbot/frontend/src/lib/workstationMeeting.ts`
- `Sparkbot/frontend/src/pages/WorkstationPage.tsx` (launch/context references)

Concepts reviewed:

- Meeting mission + chair-led flow framing.
- Clear stage progression from intake to artifact.
- Seated participant visibility and per-seat identity/model context.
- Assignment and recommendation surfaces.
- Owner interrupt/redirection concept in the meeting lifecycle.
- Ongoing meeting/task side-context patterns.

## Public-Safe Concepts Adapted

- Static stage rail for:
  - task intake
  - framing
  - specialist perspectives
  - synthesis
  - assignments
  - recommendation
  - artifact/notes
- Chair/meeting-manager command deck and role emphasis.
- Owner interrupt concept as static posture panel.
- Seat + model summary cards in a non-runtime meeting shell.
- Recommendation artifact + follow-up preview cards tied to demo room fixtures.
- Explicit static/runtime boundary badges in Round Table surface.

## Concepts Rejected or Deferred

- Live room APIs, SSE/streaming, heartbeat, and meeting runtime loops.
- Runtime meeting launch/end/delete controls.
- Task API execution and scheduling.
- Provider/model runtime routing.
- Persistence of notes/artifacts.
- Guardian runtime actions.

## Sparkbot Shell Files Planned and Changed

- `src/components/RoundTableFlowShell.tsx` (changed)
- `src/styles.css` (changed)
- docs + README updates for traceability

No changes to backend/runtime files or external repos.

## Safety Boundaries

- Static frontend only.
- No backend runtime.
- No provider/model calls.
- No connector calls/sends.
- No network calls.
- No persistence/storage APIs.
- No scheduler/background execution.
- No Guardian internals.
- No terminal/browser execution.
- No robotics/IoT control.
- No LIMA runtime wiring.

## Stop Gates (Active)

Stop immediately if any diff introduces:

- `fetch`, `axios`, `WebSocket`, `EventSource`
- `localStorage`, `sessionStorage`, `document.cookie`
- `process.env`, `import.meta.env`
- backend/connector/provider/runtime logic
- direct R&D source copy with runtime hooks/clients

## Outcome Target

Round Table reads as the public hero feature while remaining fully static, fixture-backed, and explicitly non-runtime under `GREEN_CANDIDATE` + `NOT_RELEASED`.

