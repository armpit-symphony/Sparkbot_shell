# Baseline Lock Audit

Updated: 2026-05-24

## Audit Purpose

This document records the lock event for making `static-shell-mock-contract-baseline` the active staging baseline on `active-staging-baseline-lock`.

## Baseline/Branch Lineage

- Locked branch: `active-staging-baseline-lock`
- Locked commit: `1f4ff3b`
- Parent baseline: `static-shell-mock-contract-baseline` (`d6a528f`)
- Source reference repo: `armpit-symphony/Sparkbot` (read-only review only)

Branch lineage confirmed:

- `frontend-only-wave1-checkpoint-audit` (`61a08b6`) is included.
- `frontend-only-docs-info-static-adaptation` (`8e0fba1`) is included.
- `frontend-only-model-seat-static-adaptation` (`2d5e4f1`) is included.
- `frontend-only-roundtable-static-adaptation` (`7ba0373`) is included.
- `frontend-only-workstation-static-adaptation` (`c7d5f31`) is included.
- `mock-lima-contract-planning` (`d6a528f`) is included.

No required Wave 1 or contract-planning work is stranded on those branches relative to this lock branch.

## Files/Surfaces Audited

Frontend surfaces:

- `src/App.tsx`
- `src/components/WorkstationShell.tsx`
- `src/components/RoundTableFlowShell.tsx`
- `src/components/ModelConfigShell.tsx`
- `src/components/GuardrailProfileShell.tsx`
- `src/components/LimaReadyLayerPanel.tsx`
- `src/components/StaticFixtureContentPreview.tsx`
- `src/data/demoFixtureContent.ts`
- `src/pages/DocsPage.tsx`
- `src/styles.css`

Readiness/docs set:

- `docs/CURRENT_PUBLIC_RELEASE_HANDOFF.md`
- `docs/STATIC_SHELL_BASELINE_HANDOFF.md`
- `docs/STATIC_SHELL_BASELINE_AUDIT.md`
- `docs/ACTIVE_STAGING_BASELINE.md`
- `docs/BASELINE_LOCK_AUDIT.md`
- `docs/WAVE_1_CHECKPOINT_AUDIT.md`
- `docs/WAVE_1_STATIC_DEMO_BASELINE.md`
- `docs/LIMA_CONTRACT_*.md`
- `docs/LIMA_AI_OS_INSTALL_READINESS.md`
- `docs/SHELL_VS_OS_BOUNDARY.md`
- `docs/PUBLIC_PREVIEW_RELEASE_CANDIDATE.md`
- `docs/PUBLIC_PREVIEW_READINESS_SUMMARY.md`
- `docs/PACKAGE_QA_REPORT.md`
- `docs/PUBLIC_ARTIFACT_MANIFEST.md`
- `docs/NEXT_PHASE_DECISION_MATRIX.md`
- `docs/NEXT_RELEASE_ACTIONS.md`
- `README.md`

## Validation Commands Run

- `git diff --check`
- `npm run build`
- `npm run package:preview`
- `npm pack --dry-run --json` (PASS from repository root `C:\Users\limap\Sparkbot_shell`).
- `node --check scripts/package-preview.mjs`
- Markdown link check (best-effort path/manual)
- runtime/persistence scan over `src`
- source-boundary check for `backend/`, `src-tauri/`, `.github/`, `.agents/`
- forbidden API scan:
  - `fetch`, `axios`, `WebSocket`, `EventSource`
  - `localStorage`, `sessionStorage`, `document.cookie`
  - `process.env`, `import.meta.env`
  - `fs`, `child_process`
- fixture/docs secret-like string scan (keys/tokens patterns)
- preview artifact high-risk scan
- secret/private scan
- `npm run lint` (not configured)

## Source-Boundary Result

- `backend/`: absent
- `src-tauri/`: absent
- `.github/`: absent
- `.agents/`: absent

No source-boundary regression observed.

## Forbidden API Result

No forbidden APIs were found in current source.

## Runtime/Behavior Result

- Runtime behavior: none added
- Network/runtime/provider/model calls: none added
- Persistence or storage writes: none added
- Scheduler/task execution: none added
- Terminal/browser execution: none added
- Robotics/IoT control: none added
- LIMA runtime wiring: none added
- Key/secret handling: none added

## Release Action Result

- No `git tag` performed in this phase
- No npm publish
- No public upload
- No announcement
- Option D remains blocked pending Phil explicit approval

## Remaining Risks (Low / Controlled)

- Documentation index still contains numerous repo-only planning docs; avoid treating all as release-ready.
- Best-effort link scan is periodic and should be repeated with any major link churn.
- Physical-device QA was preserved from prior passes but should be re-run for any layout-level changes.
- Public repo/home decision is still `TBD`, so any release-routing step remains deferred.
