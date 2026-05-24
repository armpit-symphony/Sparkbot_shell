# Wave 1 Workstation Adaptation Plan

Updated: 2026-05-24  
Branch: `frontend-only-workstation-static-adaptation`

## Scope

Wave 1 candidate #1 only: Workstation visual layout refinement.  
Manual static adaptation only, using R&D frontend as design reference.

## R&D Visual Concepts Reviewed (Read-Only)

- `Sparkbot/frontend/src/pages/WorkstationPage.tsx`
- `Sparkbot/frontend/src/config/workstationStations.ts`
- `Sparkbot/frontend/src/components/Common/SparkbotSurfaceTabs.tsx`
- `Sparkbot/frontend/src/components/Common/SparkbotSurfaceInfoDialog.tsx`

Concepts reviewed:

- Office-floor framing with station grouping.
- Clear separation of main desk, model desks, invite desks, specialty wing, and round-table hub.
- Surface-tab clarity for Workstation/Command Center/Robo/Info.
- Station status tags and desk-level visual labels.

## Public-Safe Concepts Adapted

- Office-floor section at top of Workstation for spatial product framing.
- Desk-lane presentation for model stack seats:
  - Primary
  - Backup 1
  - Backup 2
  - Heavy Hitter
- Invite seat and specialty wing surfaced as static desk concepts.
- Round Table emphasized as central meeting hub.
- Explicit fixture tie-in to files/memory/tasks demo room context.
- Explicit static/runtime boundary labels in each relevant floor area.

## Concepts Rejected or Deferred

- Live terminal/computer control panels.
- Invite/provider credential and auth mode flows.
- Runtime room launch and API-driven meeting flows.
- MCP/Robo runtime registry panels.
- Any auth/session/storage/runtime logic.

## Sparkbot Shell Files Planned and Changed

- `src/components/WorkstationShell.tsx` (changed)
- `src/styles.css` (changed)
- docs and README updates for traceability

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

A clearer Workstation "AI office floor" demo with stronger station hierarchy and status signaling, while preserving `GREEN_CANDIDATE` static-preview-only posture and `NOT_RELEASED` status.

