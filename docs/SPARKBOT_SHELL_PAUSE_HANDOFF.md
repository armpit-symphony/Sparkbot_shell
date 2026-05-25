# Sparkbot Shell Pause Handoff

Updated: 2026-05-25

## Current Checkpoint

- Pause branch: `pause-shell-return-lima-handoff`
- Locked Sparkbot Shell baseline branch: `active-staging-baseline-mock-lima-ui-lock`
- Locked baseline commit: `3fab1e8`
- Release status: `GREEN_CANDIDATE`, `NOT_RELEASED`
- Release actions: `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`
- Active staging repo: `armpit-symphony/Sparkbot_shell`
- Final public repo/home: `TBD`
- Artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`

## What Is Complete

- Sparkbot Shell is a clean static staging baseline.
- Wave 1 static UI adaptations are complete:
  - Workstation visual layout
  - Round Table visual flow
  - Model stack and Invite Wing visual shell
  - Docs/info command center
- Wave 1 checkpoint/audit is complete.
- Mock LIMA contract planning is complete in docs.
- Mock LIMA contract UI display is present and locked.
- Package preview generation is clean for the static preview artifact.
- Physical mobile QA pass remains recorded for the static preview baseline.

## What Is Intentionally Absent

- No backend runtime.
- No provider/model calls.
- No connector runtime or connector sends.
- No persistence, scheduler, or memory writes.
- No Guardian execution/enforcement internals.
- No terminal/browser execution.
- No robotics, drone, humanoid, hardware, or IoT control.
- No LIMA runtime bundled.
- No LIMA runtime calls.
- No Arc Bot, LIMA Office, or LIMA IT wiring.
- No Sparkbot R&D code copy.

## What Must Not Be Done Next

- Do not continue static Sparkbot Shell feature work by default.
- Do not begin runtime implementation.
- Do not import backend/runtime code.
- Do not add provider/model/connector calls.
- Do not add persistence, scheduling, or Guardian execution.
- Do not add LIMA runtime wiring.
- Do not tag, publish, upload, announce, or create a public release.
- Do not move to an official public repo/home until Phil explicitly approves that path.

## Why Sparkbot Shell Is Paused

Sparkbot Shell now demonstrates the public shell story clearly enough for staging: Workstation, Round Table, model seats, files/memory/tasks fixtures, Guardian posture, Robo teaser, and mock LIMA contract display are all visible as static preview surfaces.

Further shell feature work would create diminishing returns until LIMA AI OS defines the stronger universal runtime contract that Sparkbot Shell should eventually consume.

## Why LIMA AI OS Contract Work Is Next

The next constraint is not UI coverage. The next constraint is the OS/runtime contract target beneath the shell.

LIMA AI OS should define the universal, Guardian-gated contracts for task intent, runtime state, candidate previews, model/agent seats, context, approvals, embodiment posture, and release readiness. Once those contracts mature, Sparkbot Shell can consume mock/read-only outputs safely before any runtime wiring is considered.

## How Sparkbot Shell Is Ready For Future LIMA Contracts

- Static mock LIMA contract examples are documented.
- Static mock contract UI display is already present.
- Hard invariants are visible:
  - `preview_only: true`
  - `non_authoritative: true`
  - `safe_by_default: true`
  - `execution_allowed: false`
  - `dispatch_allowed: false`
  - `persistence_allowed: false`
  - `provider_calls_allowed: false`
  - `connector_calls_allowed: false`
  - `lima_runtime_active: false`
  - `robotics_allowed: false`
  - `physical_world_allowed: false`
- The shell can later evolve from static fixtures to read-only contract display only after explicit approval.

## Future Sparkbot Shell Work After LIMA Contracts Mature

- Align static fixture names and payloads with approved LIMA contract schemas.
- Add frontend-only mock contract display refinements if needed.
- Add optional local install detection only after the install contract is approved.
- Add read-only LIMA preview endpoint integration only after approval.
- Consider runtime/approval integration only after Guardian-gated contracts, threat model, and validation plan exist.

## Current Handoff Statement

Sparkbot Shell is now a clean static staging baseline, not a public release and not a functional runtime MVP. Feature/static UI progression is paused here. The next work should move back to LIMA AI OS universal runtime contract planning.
