# Frontend Import Planning Baseline

Updated: 2026-05-24  
Branch: `frontend-only-import-planning`  
Baseline commit: `eb39c6eb47dd267e87fdf95d960a0ca4b9f2454a`

## Scope

Planning-only baseline for classification-gated frontend import work.  
No code was imported from `armpit-symphony/Sparkbot` in this pass.

## Current Sparkbot Shell Surfaces

- Top-level routes in `src/App.tsx`:
  - `#/workstation` (default)
  - `#/chat`
  - `#/roundtable`
  - `#/command-center`
  - `#/task-guardian`
  - `#/connectors`
  - `#/robo-preview`
  - `#/docs`
- Core static shell components:
  - Workstation: `src/components/WorkstationShell.tsx`
  - Round Table: `src/components/RoundTableFlowShell.tsx`
  - Model setup: `src/components/ModelConfigShell.tsx`
  - Guardian basics: `src/components/GuardrailProfileShell.tsx`
  - LIMA readiness: `src/components/LimaReadyLayerPanel.tsx`
  - Static fixtures: `src/components/StaticFixtureContentPreview.tsx`

## Existing Static Demo Data

- Shell state fixtures: `src/data/demoShellState.ts`
- Files/memory/tasks/demo-room fixtures: `src/data/demoFixtureContent.ts`
- Connector/task/memory context fixtures:
  - `src/data/demoConnectorState.ts`
  - `src/data/demoContextState.ts`
  - `src/data/demoTaskGuardianState.ts`

## Current Safety Boundaries

- Frontend-only static preview.
- No backend runtime in this repo.
- No provider/model runtime calls.
- No connector runtime calls or sends.
- No persistence runtime.
- No scheduler runtime.
- No Guardian internals.
- No terminal/browser execution.
- No robotics/IoT control.
- No LIMA runtime wiring.

## Known Missing Functional Areas (Intentional)

- No real auth/session.
- No real room/message APIs.
- No live provider setup or key handling.
- No live memory writes/retrieval.
- No live task execution/reminders/scheduler.
- No live connector sessions or delivery.
- No live Robo/MCP execution.

## R&D Frontend Reference Snapshot (Read-Only)

Inspected path: `C:\Users\limap\Sparkbot\frontend\src`

High-level observations:

- R&D Workstation and Meeting Room UIs contain useful visual patterns but are tightly coupled to runtime APIs, session storage, terminal, and MCP logic.
- Command Center panels contain sensitive provider/comms/security flows and should not be imported directly.
- Some components are mostly presentation-only and can be reimplemented or manually adapted as static shell UI.

## Baseline Conclusion

Sparkbot Shell already has a coherent static public demo.  
Next safe step is classification-gated planning and selective UI-only import candidates, with strict stub/rewrite rules and stop gates.

