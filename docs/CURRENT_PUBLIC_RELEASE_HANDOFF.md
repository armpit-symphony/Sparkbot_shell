# Current Public Release Handoff

Updated: 2026-05-24

## Scope

Static-only release-candidate baseline handoff for `Sparkbot_shell` as the active staging repo with
read-only `armpit-symphony/Sparkbot` as reference. This baseline includes physical QA-validated
Wave 1 frontend refinements and mock LIMA contract planning, with no runtime integration in source.

## Latest Consolidation Baseline

- Baseline branch: `static-shell-mock-contract-baseline`
- Baseline commit: `d6a528f`
- Latest source/workflow pass included:
  - Wave 1 source-adaptation checkpoints for Workstation, Round Table, model/Invite Wing, and Docs/info
  - Wave 1 checkpoint/audit closure
  - Mock LIMA contract planning pass (docs/fixtures planning only)
  - Static-shell baseline consolidation and readiness alignment
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

- Starting reconciliation lineage begins at: `public-release-record-physical-qa-pass` and includes
  physical mobile QA pass data through `mock-lima-contract-planning` and this baseline branch.
- Checked/confirmed:
  - physical mobile QA pass remains recorded.
  - `GREEN_CANDIDATE` remains the active release candidate status.
  - static preview artifact is still produced by allowlist script.
  - Wave 1 Workstation, Round Table, Model/Invite, and Docs/info adaptations are all executed and closed.
  - Wave 1 checkpoint/audit docs are present and consolidated.
  - mock LIMA contract planning artifacts are present:
    - `docs/LIMA_CONTRACT_LAYER_PLAN.md`
    - `docs/LIMA_CONTRACT_MOCK_SCHEMA.md`
    - `docs/LIMA_CONTRACT_FIXTURES.md`
    - `docs/LIMA_CONTRACT_FRONTEND_READINESS.md`
    - `docs/LIMA_CONTRACT_STOP_GATES.md`
  - public/private boundary and release-routing correction docs remain in place:
    - `docs/OFFICIAL_PUBLIC_REPO_READINESS.md`
    - `docs/RELEASE_ROUTING_CORRECTION.md`
- Source boundary checks remain clean:
  - no `backend/`
  - no `src-tauri/`
  - no `.github/`
  - no `.agents/`
- Runtime/API/persistence/import restrictions remain active.
- No R&D source was copied or imported in this branch.

## Base vs Current Branch Re-check

- The historical branch reconciliation context is preserved:
  - `public-release-record-physical-qa-pass` was used as the stable physical-QA base before Wave 1 work.
  - `mock-lima-contract-planning` and this branch are clean descendants.
- The current branch is now the active consolidated checkpoint for continued static-shell decisions.

## Candidate Integrity Check (Current Branch)

- Includes physical-device QA pass: yes (`2026-05-23` recorded by Phil).
- Includes `GREEN_CANDIDATE`: yes.
- Includes release-candidate docs: yes.
- Includes missing planning docs: yes.
- Includes DocsPage URL fix: yes (`src/pages/DocsPage.tsx` uses `./docs`).
- Includes static preview artifact docs allowlist: yes.
- Includes MIT license status: yes.
- Package/version/artifact naming preserved:
  - package/version `0.8.0-layer8-preview`
  - candidate `sparkbot-shell-preview-0.8.0-layer8`
  - path `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`
- Important older branch work status:
  - listed legacy branches remain valid ancestors and contain partial stage artifacts, no new pending source/runtime work.

## Source Boundary Audit

Confirmed absent in `Sparkbot_shell`:

- `backend/`
- `src-tauri/`
- `.github/`
- `.agents/`

Confirmed by scan/review:

- No live provider/model execution paths.
- No connector runtime/sends/webhooks/sessions.
- No scheduler or Task Guardian runtime execution.
- No memory persistence runtime.
- No Guardian internals execution path.
- No terminal/browser execution capability.
- No robotics/IoT control path.
- No LIMA/Arc/Office/IT runtime wiring.

## Included vs Excluded

Included now:

- Static Vite/React/TypeScript shell UI and demo-state previews.
- Public docs allowlist and MIT licensing/package metadata for preview packaging.
- Public boundary messaging and release gating docs.

Excluded now:

- Backend/runtime integrations.
- Live providers/connectors/scheduler/persistence/Guardian internals.
- Real robotics/IoT control.
- Proprietary Sparkbot R&D implementation internals.
- Live LIMA AI OS runtime wiring.

## Validation Status (This Audit)

- Physical mobile QA pass remains recorded: PASSED (Phil, 2026-05-23).
- Docs reconciled for stale physical-QA and readiness references.
- Runtime/source-boundary posture remains static-shell only.

Command-level revalidation is tracked in the final audit report for this branch.

## Public Release Status

- Not approved for public tag/upload/publish/announcement.
- Option D remains blocked until Phil explicitly approves final destination, versioning, and messaging.

## Remaining Blockers Before Option D

- Explicit Phil approval for the exact public action (tag/publish/upload/announcement).
- Final repo-home/versioning decision for public release execution.
- Re-run package QA and scans from the final announcement branch/environment.
- Keep connector/private-recall live claims out until runtime-contract/live QA exists.

## Ready-And-Waiting Posture For Future LIMA Layer

Sparkbot_shell is now positioned as a clean public shell waiting for a future install/contract boundary:

- Frontend shell boundaries are explicit.
- Runtime internals are not wired.
- Public/private split docs are explicit.
- Future LIMA integration is staged as contracts-first, mocks-first, frontend-preview-first.

See:

- `docs/LIMA_AI_OS_INSTALL_READINESS.md`
- `docs/SHELL_VS_OS_BOUNDARY.md`
- `docs/NEXT_RELEASE_ACTIONS.md`

## What Not To Do Next

- Do not add backend/runtime behavior in this shell branch.
- Do not wire providers/connectors/scheduler/persistence.
- Do not wire Guardian internals or execution surfaces.
- Do not wire robotics/IoT controls.
- Do not copy Sparkbot R&D runtime code into this repo.
- Do not run Option D actions without explicit Phil approval.
