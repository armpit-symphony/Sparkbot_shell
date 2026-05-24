# Static Shell Baseline Audit

Updated: 2026-05-24

## Purpose

This audit records the consolidated static-shell baseline for the current branch and confirms that all required safety, runtime-absence, and release-posture gates remain in place.

## Audit Inputs

- Baseline branch: `static-shell-mock-contract-baseline`
- Baseline commit: `1f4ff3b` (active lock branch `active-staging-baseline-lock`)
- Parent branch: `frontend-only-wave1-checkpoint-audit` (`61a08b6`)
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
- `src/data/demoFixtureContent.ts`
- `src/pages/DocsPage.tsx`
- `src/styles.css`
- `README.md`
- `docs/` handoff and readiness documents

## Baseline Feature Checks

- Workstation as AI office floor: present
- Round Table as hero feature: present
- model stack + Invite Wing: present
- basic Guardian posture: present
- files/memory/tasks fixture surfaces: present
- Robo teaser only: present
- LIMA readiness panel/text: present
- docs/info command-center: present

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

No runtime behavior was introduced in this consolidation pass:

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
- `npm pack --dry-run --json`: pass.
- `node --check scripts/package-preview.mjs`: pass
- Source files for public preview remain on allowlist in package output
- `public artifact scan` confirms static docs/shell output only

## Docs/Readiness Checks

- `GREEN_CANDIDATE` and `NOT_RELEASED` remain consistent across primary readiness docs
- `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT` remain enforced
- final repo/home status remains `TBD`
- mock LIMA planning docs exist and are clearly separated from preview artifacts

## Public/Private Boundary Check

- Public artifacts and public-facing docs remain static only
- Runtimes/wiring and private implementation references remain in repo-only planning docs
- release routing keeps this repo as active staging workspace

## Risk Notes

- Docs/index links are long; stale external-link references should be rechecked during every branch consolidation.
- Any future source import remains out-of-scope until a separate approval.
- Runtime-contract execution remains blocked by explicit stop gates.
