# Wave 1 Docs/info Adaptation Plan

Updated: 2026-05-24  
Branch: `frontend-only-model-seat-static-adaptation` (base), executing in `frontend-only-docs-info-static-adaptation`

## Scope

Wave 1 candidate #4 only: Docs/info visual refinement.  
Manual static adaptation only, no runtime behavior added.

## R&D Reference Reviewed (Read-Only)

- `Sparkbot/README.md`
- `Sparkbot/docs/capabilities.md`
- `Sparkbot/frontend/src/components/Common/SparkbotSurfaceInfoDialog.tsx`
- `Sparkbot/frontend/src/pages` and `frontend/src/components` docs-style and panel patterns discovered from prior reference reads

## Public-Safe Concepts to Adapt

- A concise docs command-center flow (what the preview is and is not).
- Clear included/excluded feature block suitable for release-posture review.
- Explicit Green-candidate/no-release/No-tag/No-upload/no-announcement status language.
- Forward-looking but explicit future boundary for LIMA OS install-contract path.
- Wave 1 checkpoint/audit posture and release-routing clarity.
- Mobile-safe section cards using existing panel classes.

## Concepts Rejected or Deferred

- Any claims of connector/session login, key entry, or runtime setup.
- Any links implying live runtime, announcements, or artifact publishing.
- Any runtime architecture execution details not already represented in this static shell.
- Any R&D source copy.

## Planned Files for Change

- `src/pages/DocsPage.tsx`
- `docs/WAVE_1_DOCS_INFO_ADAPTATION_PLAN.md`
- `docs/FRONTEND_IMPORT_CANDIDATE_MATRIX.md`
- `docs/FRONTEND_IMPORT_WAVE_1_PLAN.md`
- `docs/FRONTEND_MVP_SURFACE_AUDIT.md`
- `docs/FRONTEND_MVP_READINESS_REPORT.md`
- `docs/PUBLIC_PREVIEW_RELEASE_CANDIDATE.md`
- `docs/PUBLIC_PREVIEW_READINESS_SUMMARY.md`
- `docs/PACKAGE_QA_REPORT.md`
- `docs/PUBLIC_ARTIFACT_MANIFEST.md`
- `docs/NEXT_RELEASE_ACTIONS.md`
- `README.md`
- `docs/PUBLIC_DOCS_INDEX.md` (if index link updates remain needed)

No backend/runtime files will be edited.

## Safety Boundaries

- Static frontend only.
- No backend runtime.
- No provider/model calls.
- No connector calls.
- No network calls.
- No persistence/storage APIs.
- No scheduler behavior.
- No model API config writes.
- No Guardian internals.
- No terminal/browser execution.
- No robotics/IoT control.
- No LIMA runtime wiring.
- No Arc Bot / LIMA Office / LIMA IT runtime imports.
- No R&D source-file copy.

## Stop Gates

Pause immediately if any diff introduces:

- `fetch`, `axios`, `WebSocket`, `EventSource`
- `localStorage`, `sessionStorage`, `document.cookie`
- API key/token/session logic
- provider/model runtime controls
- connector read/write/sender logic
- direct R&D file copy
- any file import that implies public release actions in this branch

## Outcome Target

Docs/info surface should become a stable preview command center with explicit:

- `Static preview`
- `Public shell`
- `No backend runtime`
- `No provider/model calls`
- `No connector runtime`
- `No persistence`
- `No key handling`
- `No hardware control`
- `Future LIMA contract layer`

Wave 1 candidate #4 should complete as manual static adaptation only, and Wave 1 source adaptation should stop for checkpoint review.
