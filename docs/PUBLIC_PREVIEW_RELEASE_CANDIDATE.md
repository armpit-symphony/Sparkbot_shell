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

## What is Included

- Static shell UI and public demo surfaces.
- Frontend-only MVP status/copy polish for `GREEN_CANDIDATE` and `NOT_RELEASED` visibility.
- Polished Workstation, Round Table, model-stack, Guardian basics, Robo teaser, and LIMA readiness copy.
- Documentation boundary and release staging docs.
- Static previews for Workstation, Round Table, agent seats, connectors, and Robo teaser.
- Static `LIMA AI OS ready layer` panel and phased contract-install messaging.
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
