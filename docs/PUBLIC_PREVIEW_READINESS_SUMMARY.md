# Public Preview Readiness Summary

Updated: 2026-05-24

## Current Preview

- Current status color: `GREEN_CANDIDATE` (not public release; static preview readiness milestone reached).
- Current branch: `active-staging-baseline-mock-lima-ui-lock`.
- Base lineage commit: `bbc4ebd` on `active-staging-baseline-lock` ancestry.
- Current preview version: `0.8.0-layer8-preview`.
- Artifact name: `sparkbot-shell-preview-0.8.0-layer8`.
- Artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`.
- License: MIT.
- Current repo: `armpit-symphony/Sparkbot_shell` staging workspace.
- Final public repo/home: TBD.

## Readiness Rules

- Physical-device 390px QA is `REQUIRED_FOR_GREEN`.
- Physical-device status is `PASSED` by Phil manual verification.
- Connector/private recall is `OUT_OF_SCOPE_STATIC_PREVIEW`.

## Included

- Static Vite/React/TypeScript shell.
- Static Workstation, Round Table, model-seat, files/memory/tasks, docs, and Robo preview surfaces.
- Mock LIMA contract planning and static UI-display (examples + panel) are included in this branch.
- Preview contracts are non-authoritative and no-runtime.

## Intentionally Excluded

- Backend runtime.
- Model/provider calls.
- Connector sends or webhooks.
- Scheduler and persistence.
- Terminal/browser execution.
- Robotics/IoT control.
- LIMA runtime integration.
- Direct R&D source copy.

## Current Decision

- Candidate remains `GREEN_CANDIDATE`, `NOT_RELEASED`.
- Option D blocked.
- Mock LIMA contract UI display is locked and static.
- No runtime calls or persistence introduced in this branch.

## Recommended Next Step

- Choose between:
  - Option A (pause/return to LIMA AI OS contract work), or
  - Option B (review/refresh mock contract UI copy if needed).
- Keep runtime implementation blocked until explicit Phil approval.
