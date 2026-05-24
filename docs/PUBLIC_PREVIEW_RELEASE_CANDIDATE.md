# Public Preview Release Candidate

## Candidate Metadata

- Candidate name: `sparkbot-shell-preview-0.8.0-layer8`
- Version: `0.8.0-layer8-preview`
- Artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`
- Readiness: `GREEN_CANDIDATE`
- Public release status: `NOT_RELEASED`
- Tag/publish/upload/announcement: `NOT_DONE`

## What Passed

- Branch lineage up to `public-release-record-physical-qa-pass`.
- Physical mobile QA pass recorded.
- Static package preview packaging and allowlist checks completed.
- Source-boundary checks completed for `backend/`, `src-tauri/`, `.github/`, `.agents/`.
- No runtime wiring introduced by this branch.

## What is Included

- Static shell UI and public demo surfaces.
- Documentation boundary and release staging docs.
- Static previews for Workstation, Round Table, agent seats, connectors, and Robo teaser.
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
- `Option D` remains blocked pending Phil approval for repo home, tag, and versioning execution.
