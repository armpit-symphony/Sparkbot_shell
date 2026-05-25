# Current Public Release Handoff

Updated: 2026-05-24

## Scope

Static-only release-candidate baseline handoff for `Sparkbot_shell` as the active staging repo with
`armpit-symphony/Sparkbot` as read-only reference.
This baseline includes physical QA-validated Wave 1 frontend refinements and mock LIMA contract planning/UI display, with no runtime integration in source.

## Latest Consolidation Baseline

- Baseline branch: `active-staging-baseline-mock-lima-ui-lock`
- Baseline commit: `bbc4ebd`
- Latest source/workflow pass included:
  - Wave 1 source-adaptation checkpoints for Workstation, Round Table, model/Invite Wing, and Docs/info
  - Wave 1 checkpoint/audit closure
  - Mock LIMA contract planning pass (docs/fixtures planning only)
  - Mock LIMA contract UI display pass (static UI only)
- Runtime behavior added: no
- Release posture unchanged: `GREEN_CANDIDATE`, `NOT_RELEASED`, `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`
- MIT license status: selected and present

## Snapshot

- Package/version: `0.8.0-layer8-preview`
- Artifact name: `sparkbot-shell-preview-0.8.0-layer8`
- Artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`
- Readiness color: `GREEN_CANDIDATE`
- Current repo/home status: `TBD` (official public home not yet decided)
- Active staging home: `armpit-symphony/Sparkbot_shell`

## Baseline Lineage and Inclusion Checks

- Current locked lineage begins at `public-release-record-physical-qa-pass`, includes:
  - `frontend-only-wave1-checkpoint-audit` (`61a08b6`)
  - `mock-lima-contract-planning` (`d6a528f`)
  - `static-shell-mock-contract-baseline` (`1f4ff3b`)
  - `active-staging-baseline-lock` (`9142f71`)
  - `mock-lima-contract-ui-display` (current lock source)
- Confirmed:
  - physical mobile QA pass remains recorded.
  - `GREEN_CANDIDATE` remains the active release-candidate status.
  - static preview artifact is still produced from allowlist script.
  - Wave 1 Workstation, Round Table, Model/Invite Wing, and Docs/info adaptations are included.
  - Wave 1 checkpoint/audit docs are present and consolidated.
  - mock LIMA contract planning docs are present:
    - `docs/LIMA_CONTRACT_LAYER_PLAN.md`
    - `docs/LIMA_CONTRACT_MOCK_SCHEMA.md`
    - `docs/LIMA_CONTRACT_FIXTURES.md`
    - `docs/LIMA_CONTRACT_FRONTEND_READINESS.md`
    - `docs/LIMA_CONTRACT_STOP_GATES.md`
    - `docs/MOCK_LIMA_CONTRACT_UI_PLAN.md`
  - mock LIMA contract UI display artifacts are present and static:
    - `src/data/mockLimaContracts.ts`
    - `src/components/MockLimaContractPanel.tsx`
  - release-routing correction docs remain in place:
    - `docs/OFFICIAL_PUBLIC_REPO_READINESS.md`
    - `docs/RELEASE_ROUTING_CORRECTION.md`
    - `docs/ACTIVE_STAGING_BASELINE.md`
- Source boundary checks remain clean:
  - no `backend/`
  - no `src-tauri/`
  - no `.github/`
  - no `.agents/`
- Runtime/API/persistence/import restrictions remain active.
- No Sparkbot R&D source was copied or imported in this branch.

## Included vs Excluded

### Included now

- Static Vite/React/TypeScript shell UI and demo-state previews.
- Public docs allowlist and MIT licensing/package metadata for preview packaging.
- LIMA contract mock-planning and mock-contract UI-display docs and fixtures (repo-only staging docs).

### Excluded now

- Backend/runtime integrations.
- Live providers/connectors/scheduler/persistence/Guardian internals.
- Real robotics/IoT control.
- Proprietary Sparkbot R&D implementation internals.
- Live LIMA AI OS runtime wiring.

## Public Release Status

- Not approved for public tag/upload/publish/announcement.
- Option D remains blocked until Phil explicitly approves final destination, versioning, and announcement policy.

## Remaining Blockers Before Option D

- Explicit Phil approval for final repo home/versioning and announcement policy.
- Official destination/version/artifact policy confirmation.

## Ready-And-Waiting Posture For Future LIMA Layer

Sparkbot_shell is positioned as a clean public shell waiting for a future install/contract boundary:

- Frontend boundaries are explicit.
- Runtime internals are not wired.
- Public/private split docs are explicit.
- Future LIMA integration stays contracts-first, fixtures-first, preview-only until approval.

## Active Baseline Lock Status

- Lock branch: `active-staging-baseline-mock-lima-ui-lock`
- Lock commit: `bbc4ebd`
- Lock posture: `GREEN_CANDIDATE`, `NOT_RELEASED`, no runtime behavior.
