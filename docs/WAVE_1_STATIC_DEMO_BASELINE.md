# Wave 1 Static Demo Baseline

Updated: 2026-05-24
Branch: `static-shell-mock-contract-baseline`
Commit: `d6a528f`

## What the Shell Shows Now

This file defines the current baseline static product shell after Wave 1.

- **Home / landing**: `#/workstation` as an AI office floor map with model seats and fixture context.
- **Hero feature**: `#/roundtable` with meeting mission/phase/outputs as static demo content.
- **Model setup**: `#/command-center` shows Primary/Backup/Heavy Hitter seat cards, Invite Wing concept, and static setup-flow states.
- **Fixtures**:
  - Files / knowledge cards
  - Memory cards
  - Task / reminder cards
  - Demo room context card set
- **Safety posture**: `#/command-center` includes basic guardrail and safety status copy.
- **Robo**: dedicated teaser surface with clear hardware-control exclusion copy.
- **LIMA integration note**: static `LIMA AI OS ready layer` contract-prep panel.
- **Docs command center**: `#/docs` explains included/excluded scope and release state.
- **Navigation**: hash routes for all shell areas.
- **Mock LIMA planning**: plan and schema docs exist as repository planning references for future contract-facing preview work.

## What Is Static and Mock

- All source data is fixture-backed static content.
- Shell state updates are local component state only.
- Seats, sessions, meeting phases, notes, and tasks do not call live services.
- No file upload, no live indexing, no connector runtime, no model dispatch, no scheduling.
- No credentials are entered, stored, or used.
- No memory/context persistence is active.

## What Is Intentionally Excluded

- backend runtime
- provider/runtime model calls
- provider key or token flows
- connector runtime and sends
- scheduler/background jobs
- file/command persistence
- terminal, browser automation, or shell execution
- robotics/IoT control
- LIMA runtime/Arc/LIMA Office/LIMA IT wiring
- R&D private/proprietary modules

## Static Demo Components in Use

- `src/components/WorkstationShell.tsx`
- `src/components/RoundTableFlowShell.tsx`
- `src/components/ModelConfigShell.tsx`
- `src/components/GuardrailProfileShell.tsx`
- `src/components/LimaReadyLayerPanel.tsx`
- `src/components/StaticFixtureContentPreview.tsx`
- `src/pages/DocsPage.tsx`
- `src/data/demoFixtureContent.ts`

These files are the stable baseline for current release-candidate packaging and are not replaced by runtime code.

## Product Narrative (Wave 1)

1. A static workstation first-page tells users this is a local-first AI office shell preview.
2. Round Table is the hero “AI workroom” flow.
3. Model and agent seats show capability posture for future setup.
4. Files/memory/tasks fixtures demonstrate workspace continuity.
5. Guardrails and LIMA integration are framed as future contract layers.

## What Must Remain Forbidden Until Explicit Approval

- Any provider/model runtime call path.
- Any connector session/write/send implementation.
- Any persistence or scheduler behavior.
- Any terminal/browser execution or native host action.
- Any robotics/IoT action surfaces.
- Any hidden or private-proprietary module imports from Sparkbot R&D runtime internals.

## Future Phases (Allowed Next)

After this checkpoint, next phases are expected to remain static planning:

- wave 2 static-frontend planning,
- mock LIMA contract UI display planning,
- release-candidate branch consolidation,
- official repo-home decision.
