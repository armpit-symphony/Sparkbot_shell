# Public Preview Readiness Summary

Updated: 2026-05-25

## Current Preview

- Current status color: `GREEN_CANDIDATE` (not public release; static preview readiness milestone reached).
- Current branch: `active-staging-baseline-mock-lima-ui-lock`.
- Base lineage commit: `3fab1e8` on `active-staging-baseline-lock` ancestry.
- Pause/handoff branch: `pause-shell-return-lima-handoff`.
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
- Phil selected Option A: pause Sparkbot Shell feature/static UI progression and return to LIMA AI OS contract planning.

## Recommended Next Step

- Pause Sparkbot Shell static work and return to LIMA AI OS universal runtime contract planning.
- Keep additional static UI polish, runtime implementation, public release Option D, official repo move, provider/model calls, connector work, and LIMA runtime wiring blocked until explicit Phil approval.
