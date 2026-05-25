# Static Shell Baseline Audit

Updated: 2026-05-25

## Purpose

This audit records the current static-shell staging baseline and confirms that safety, runtime-absence, and release-posture gates remain in place after mock LIMA contract UI-display lock.

## Audit Inputs

- Baseline branch: `active-staging-baseline-mock-lima-ui-lock`
- Baseline commit: `3fab1e8`
- Pause/handoff branch: `pause-shell-return-lima-handoff`
- Parent branch: `active-staging-baseline-lock` (`9142f71`)
- Parent baseline: `static-shell-mock-contract-baseline` (`1f4ff3b`)
- Source reference repo: `armpit-symphony/Sparkbot` (read-only only)
- Artifacts examined: static preview artifact under `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`

## Files and Surfaces Audited

- `src/App.tsx`
- `src/components/WorkstationShell.tsx`
- `src/components/RoundTableFlowShell.tsx`
- `src/components/ModelConfigShell.tsx`
- `src/components/GuardrailProfileShell.tsx`
- `src/components/LimaReadyLayerPanel.tsx`
- `src/components/StaticFixtureContentPreview.tsx`
- `src/components/MockLimaContractPanel.tsx`
- `src/data/demoFixtureContent.ts`
- `src/data/mockLimaContracts.ts`
- `src/pages/DocsPage.tsx`
- `src/styles.css`
- `docs/` handoff/readiness and contract-planning documents

## Baseline Feature Checks

- Workstation as AI office floor: present
- Round Table as hero feature: present
- model stack + Invite Wing: present
- basic Guardian posture: present
- files/memory/tasks fixture surfaces: present
- Robo teaser only: present
- LIMA readiness panel/text: present
- docs/info command-center: present
- Mock LIMA contract UI display: present

## Source Boundary Check

- `backend/`: absent
- `src-tauri/`: absent
- `.github/`: absent
- `.agents/`: absent

## Forbidden API Scan

Checked for disallowed patterns:

- `fetch`, `axios`, `WebSocket`, `EventSource`
- `localStorage`, `sessionStorage`, `document.cookie`
- `process.env`, `import.meta.env`
- `fs`, `child_process`
- `API_KEY`, `apiKey`, `secret`, `token`, `credential`, `auth.json`, `codex exec`, `bearer`

Result: no hits in current source code for this baseline pass.

## Runtime Absence Check

No runtime behavior was introduced in this lock pass:

- no runtime networking/provider calls
- no connector calls
- no scheduler/dispatch logic
- no persistence
- no file upload/read/write runtime behavior
- no terminal/browser execution
- no secrets handling
- no robotics/IoT control
- no LIMA runtime wiring

## Artifact / Package Checks

- `npm run build`: pass
- `npm run package:preview`: pass
- `npm pack --dry-run --json`: pass
- `node --check scripts/package-preview.mjs`: pass
- Public-safe allowlist enforcement remains intact
- Source files remain excluded from package payload via allowlist config

## Docs / Readiness Checks

- `GREEN_CANDIDATE` and `NOT_RELEASED` remain consistent across primary readiness docs
- `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT` remain enforced
- final repo/home status remains `TBD`
- mock LIMA contract planning and UI-display docs are present and scoped

## Public/Private Boundary Check

- Public artifacts and public-facing docs remain static-only
- Runtime/wiring and private implementation references remain in repo-only planning docs
- release routing keeps this repo as active staging workspace

## Included / Locked Surfaces

- Wave 1 static adaptations are present (Workstation/Round Table/Model/Invite/Docs-info).
- Mock LIMA contract planning docs and fixture schema are present.
- Mock LIMA contract UI-display implementation is present and static.

## Baseline Lineage

- Confirmed ancestry through:
  - `active-staging-baseline-lock` (`9142f71`)
  - `static-shell-mock-contract-baseline` (`1f4ff3b`)
  - `mock-lima-contract-planning` (`d6a528f`)
  - `frontend-only-wave1-checkpoint-audit` (`61a08b6`)
  - `frontend-only-docs-info-static-adaptation` (`8e0fba1`)
  - `frontend-only-model-seat-static-adaptation` (`2d5e4f1`)
  - `frontend-only-roundtable-static-adaptation` (`7ba0373`)
  - `frontend-only-workstation-static-adaptation` (`c7d5f31`)

## Remaining Risks

- Doc-link hygiene should be rechecked on future merges.
- No runtime planning or contract execution is approved in this lock state.
- Sparkbot Shell feature/static UI work is paused until Phil explicitly reopens it.
- The next recommended work is LIMA AI OS universal runtime contract planning.
