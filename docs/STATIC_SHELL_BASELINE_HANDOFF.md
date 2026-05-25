# Static Shell Baseline Handoff

Updated: 2026-05-25

- Baseline branch: `active-staging-baseline-mock-lima-ui-lock`
- Baseline commit: `3fab1e8`
- Pause/handoff branch: `pause-shell-return-lima-handoff`
- Staging repo: `armpit-symphony/Sparkbot_shell`
- Current public repo/home: `TBD`
- Artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`
- Release status: `GREEN_CANDIDATE`, `NOT_RELEASED`, `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`
- Option D: **BLOCKED** (no public tag/publish/upload/announcement)

## Baseline Summary

This is the consolidated handoff point for the static Sparkbot_shell baseline after:

- Wave 1 frontend-only adaptation execution:
  - Workstation visual layout refinement
  - Round Table visual flow refinement
  - Model stack + Invite Wing visual refinement
  - Docs/info visual refinement
- Wave 1 checkpoint/audit closure
- Mock LIMA contract planning completion
- Mock LIMA contract UI display lock-in

## What Is Complete

- Core frontend shell is static and coherent for demo/storytelling:
  - Workstation floor
  - Round Table hero sequence
  - Model/seat/posture copy + static setup language
  - files/memory/tasks fixture surfaces
  - Robo teaser area
  - LIMA readiness/contract-readiness panel
- Release readiness and packaging metadata are stable:
  - package: `0.8.0-layer8-preview`
  - artifact name: `sparkbot-shell-preview-0.8.0-layer8`
  - preview artifact location generated from allowlist
- Safety/posture documentation is present and aligned:
  - GREEN_CANDIDATE + static-only caveats
  - no runtime calls
  - no persistence/connector/provider dispatch
  - final repo/home remains `TBD`
- Mock LIMA contract planning artifacts are in place:
  - `docs/LIMA_CONTRACT_LAYER_PLAN.md`
  - `docs/LIMA_CONTRACT_MOCK_SCHEMA.md`
  - `docs/LIMA_CONTRACT_FIXTURES.md`
  - `docs/LIMA_CONTRACT_FRONTEND_READINESS.md`
  - `docs/LIMA_CONTRACT_STOP_GATES.md`
  - `docs/MOCK_LIMA_CONTRACT_UI_PLAN.md`
- Mock LIMA contract UI display is now locked in the shell UI:
  - `src/data/mockLimaContracts.ts`
  - `src/components/MockLimaContractPanel.tsx`

## What Is Intentionally Absent

- No backend runtime
- No `src-tauri/`, `.github/`, `.agents/` in boundary
- No API calls (`fetch`, `axios`, `WebSocket`, `EventSource`)
- No persistence APIs (`localStorage`, `sessionStorage`, file writes, cookies)
- No connector runtime, no provider/model calls
- No scheduler/task dispatch execution
- No secret handling, no key prompts, no secrets storage
- No terminal/browser execution
- No robotics/IoT control
- No LIMA runtime integration
- No Sparkbot R&D source copied in this branch

## Mock LIMA Contract Baseline Summary

The branch includes static contract previews for:

- Workstation state
- Round Table meeting
- model/seat stack
- file/memory/task context
- Guardian posture
- Robo teaser contract readiness
- release readiness status

Each example carries non-authoritative and explicit no-side-effect invariants:
`execution_allowed: false`, `dispatch_allowed: false`, `provider_calls_allowed: false`,
`connector_calls_allowed: false`, `lima_runtime_active: false`.

## Next Recommended Options

This baseline is now the active staging baseline and supports:

- **Option A (selected)**: hold this clean static baseline while LIMA AI OS universal contract work advances.
- Do not continue Sparkbot Shell feature/static UI work unless Phil explicitly reopens that lane.
- Do not move into runtime implementation from this shell branch.

### What it is not

This branch is not yet a functional public runtime MVP.

- no live model/provider/connector integrations
- no backend runtime
- no persistence
- no task scheduling
- no release execution action

## Readiness Snapshot

- Physical mobile QA pass: preserved from prior waves
- Boundary checks: no `backend/`, `src-tauri/`, `.github/`, `.agents/` in repo boundary
- Runtime scans: no runtime calls or persistence behavior introduced
- Forbidden API scans: clean for this baseline stage

## Operational Posture

Keep `GREEN_CANDIDATE`, `NOT_RELEASED`, `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT` as active posture until explicit Phil release approval.
