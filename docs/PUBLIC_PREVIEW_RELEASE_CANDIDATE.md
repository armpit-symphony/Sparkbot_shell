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

- Branch lineage up to `public-release-record-physical-qa-pass`, plus staging corrections and frontend-only readiness passes.
- Physical mobile QA pass recorded.
- Static package preview packaging and allowlist checks completed.
- Source-boundary checks completed for `backend/`, `src-tauri/`, `.github/`, `.agents/`.
- No runtime wiring introduced by this branch.
- Static fixture-content pass completed for Files, Memory, Tasks, and Demo Room preview surfaces.
- Final frontend-only product-demo polish pass completed for storyline, copy density, and visual consistency.
- Wave 1 candidate #1 completed: Workstation visual layout refined via manual static adaptation from R&D reference concepts.
- Wave 1 candidate #2 completed: Round Table visual flow refined via manual static adaptation from R&D reference concepts.
- Wave 1 candidate #3 completed: Model stack + Invite Wing visual flow refined via manual static adaptation from R&D reference concepts.
- Wave 1 candidate #4 completed: Docs/info visual refinement completed via manual static adaptation from R&D + shell docs concepts.
- Wave 1 checkpoint/audit baseline is consolidated on `active-staging-baseline-lock` (`1f4ff3b`), including `static-shell-mock-contract-baseline` content.
- Mock LIMA contract planning docs/fixtures completed:
  - `docs/LIMA_CONTRACT_LAYER_PLAN.md`
  - `docs/LIMA_CONTRACT_MOCK_SCHEMA.md`
  - `docs/LIMA_CONTRACT_FIXTURES.md`
  - `docs/LIMA_CONTRACT_FRONTEND_READINESS.md`
  - `docs/LIMA_CONTRACT_STOP_GATES.md`

## What is Included

- Static shell UI and public demo surfaces.
- Frontend-only MVP status/copy polish for `GREEN_CANDIDATE` and `NOT_RELEASED` visibility.
- Polished Workstation, Round Table, model-stack, Guardian basics, Robo teaser, and LIMA readiness copy.
- Round Table visual refinement:
  - meeting mission and chair/manager emphasis
  - stage rail from intake through artifact/notes
  - owner interrupt posture panel
  - seat/model summary cards
  - recommendation artifact and follow-up fixture package
  - explicit static/runtime boundary badges
- Model stack + Invite Wing visual refinement:
  - clearer seat-role hierarchy for Primary, Backup 1, Backup 2, Heavy Hitter, and BYO Invite Wing
  - static setup-flow lane for future provider onboarding posture
  - explicit no-key/no-provider/no-routing-runtime labels
  - stronger tie-in counters for Round Table seat visibility and specialty coverage
- Workstation AI-office floor grouping refinement:
  - Sparkbot main desk
  - model stack desks (Primary, Backup 1, Backup 2, Heavy Hitter)
  - invite/model seat concept
  - specialty wing context
  - Round Table hub prominence
  - fixture context tie-in
  - Guardian basics / Robo teaser / LIMA readiness placement
- Final product-demo storyline polish for top-level shell flow and cross-surface readability.
- Documentation boundary and release staging docs.
- Static previews for Workstation, Round Table, agent seats, connectors, and Robo teaser.
- Static fixture previews for file/document workspace, memory shelf, task/reminder board, and demo room context.
- Static `LIMA AI OS ready layer` panel and phased contract-install messaging.
- Optional mock contract preview payload family (offline planning).
- MIT licensing and artifact lock metadata.
- Public-facing caveats around static-only behavior.

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
- No direct R&D source code copy was used for Wave 1 candidate #1.
- No direct R&D source code copy was used for Wave 1 candidate #2.
- No direct R&D source code copy was used for Wave 1 candidate #3.
- No direct R&D source code copy was used for Wave 1 candidate #4.
- No direct R&D source code copy in this consolidated checkpoint/audit branch is present.

## Branch Baseline / Consolidation Status

- This is the consolidated static baseline for current work.
- Parent/lineage base: `mock-lima-contract-planning` (`61a08b6`) with active lock at `1f4ff3b` on `active-staging-baseline-lock`.
- Wave 1 source adaptation is intentionally closed at this checkpoint pending Phil decision.
