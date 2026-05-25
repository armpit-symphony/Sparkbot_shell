# Public Preview Release Candidate

## Candidate Metadata

- Candidate name: `sparkbot-shell-preview-0.8.0-layer8`
- Version: `0.8.0-layer8-preview`
- Artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`
- Readiness: `GREEN_CANDIDATE`
- Public release status: `NOT_RELEASED`
- NO_TAG: `NOT_DONE`
- NO_UPLOAD: `NOT_DONE`
- NO_ANNOUNCEMENT: `NOT_DONE`
- Option D status: `BLOCKED`

## What Passed

- Branch lineage up to `public-release-record-physical-qa-pass`, plus Wave 1 and mock-contract planning/source lock consolidation.
- Physical mobile QA pass recorded.
- Static package preview packaging and allowlist checks completed.
- Source-boundary checks completed for `backend/`, `src-tauri/`, `.github/`, `.agents/`.
- No runtime wiring introduced by this lock pass.
- Static fixture-content pass completed for Files, Memory, Tasks, and Demo Room preview surfaces.
- Final frontend-only product-demo polish pass completed.
- Wave 1 candidates 1-4 completed as manual static adaptations.
- Wave 1 checkpoint/audit baseline is consolidated on `active-staging-baseline-mock-lima-ui-lock` (`3fab1e8`), including prior `static-shell-mock-contract-baseline` content.
- Mock LIMA contract planning completed:
  - `docs/LIMA_CONTRACT_LAYER_PLAN.md`
  - `docs/LIMA_CONTRACT_MOCK_SCHEMA.md`
  - `docs/LIMA_CONTRACT_FIXTURES.md`
  - `docs/LIMA_CONTRACT_FRONTEND_READINESS.md`
  - `docs/LIMA_CONTRACT_STOP_GATES.md`
  - `docs/MOCK_LIMA_CONTRACT_UI_PLAN.md`
- Mock LIMA contract UI-display is locked in shell UI:
  - `src/data/mockLimaContracts.ts`
  - `src/components/MockLimaContractPanel.tsx`
  - placement in Workstation / Docs surfaces

## What is Included

- Static shell UI and public demo surfaces.
- `GREEN_CANDIDATE` / `NOT_RELEASED` visibility.
- Workstation + Round Table + model-seat + Guardian basics + Robo teaser + LIMA readiness copy.
- Static fixture previews for file/memory/task and demo room context.
- Contract examples for workstation, meeting, model seats, context, Guardian posture, Robo teaser, and release readiness.
- Static-only boundary badges and no-side-effect invariants.
- MIT licensing and package metadata.

## What is Excluded

- No backend runtime.
- No live model/provider execution.
- No connector dispatch.
- No memory persistence.
- No scheduler/orchestration behavior.
- No Guardian internals.
- No terminal/browser execution.
- No robotics/IoT control.
- No LIMA/Arc/Office/IT runtime wiring.

## Release Approval State

- Candidate remains internal/staging static readiness only.
- `Option D` remains blocked pending Phil approval for final repo home (TBD), version/tag, artifact destination, and announcement policy.
- No direct R&D source copy was used in this lock branch.
- Mock contract UI display is static rendering only.

## Branch Baseline / Consolidation Status

- This is the consolidated static baseline lock for current work.
- Parent lineage base: `active-staging-baseline-lock` (`9142f71`) with active lock at `3fab1e8`.
- This branch is `active-staging-baseline-mock-lima-ui-lock`.

## Pause Overlay

Phil selected Option A after the mock LIMA UI lock. Sparkbot Shell feature/static UI progression is paused here. The next recommended work is LIMA AI OS universal runtime contract planning, not public release action or runtime implementation.
- Wave 1 source adaptation is intentionally closed pending next routing/decision approval.
