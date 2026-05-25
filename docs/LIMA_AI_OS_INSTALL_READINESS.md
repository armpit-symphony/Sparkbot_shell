# LIMA AI OS Install Readiness

Updated: 2026-05-25

## Current Shell Status: Static/Public Shell Only

`Sparkbot_shell` is currently a static preview shell and docs boundary repo. It does not run backend runtime behavior and does not execute live model/provider/connector/task/robotics actions.

Current pause state: Sparkbot Shell feature/static UI progression is paused at `active-staging-baseline-mock-lima-ui-lock` (`3fab1e8`). The next recommended work is LIMA AI OS universal runtime contract planning, not additional Sparkbot Shell features.

## Future LIMA AI OS Relationship

Future relationship target:

- `Sparkbot_shell` remains the public shell UX layer.
- LIMA AI OS becomes the optional runtime/kernel layer beneath shell surfaces.
- Integration is by explicit contracts and install gates, not direct internal coupling.

## Required Future Contract Layer

Before any integration, define docs-first contracts for:

- session bootstrap and capability discovery
- runtime health/readiness status
- model routing request/response envelope
- memory/context read/write boundaries
- approval/guardian decision envelope
- task/scheduler envelope
- connector envelope
- audit evidence envelope

No live implementation should start before contract docs and fixture cases are approved.

## What Sparkbot_shell May Ask LIMA Later

Allowed future ask categories (contracted, not wired yet):

- runtime status and capabilities
- read-only model-seat readiness signals
- read-only context retrieval previews
- read-only approval state previews
- read-only task/health snapshots

## What LIMA May Return Later

Allowed future return categories:

- capability map (what is supported/enabled)
- availability/health status
- guarded read-only preview payloads
- policy/approval-required indicators
- structured error envelopes with no secret leakage

## What Remains Forbidden Now

- No direct LIMA runtime calls from Sparkbot_shell.
- No provider/connector execution via LIMA.
- No shell-triggered dispatch/execution workflows.
- No persistence writes through LIMA.
- No robotics/IoT command/control path.

## No Live Runtime Wiring Yet

Sparkbot_shell remains runtime-disconnected by design in this phase.

## No Provider/Connector/Runtime Calls Yet

Any provider, connector, scheduler, or runtime call remains out-of-scope until contracts + approval are complete.

## No Execution/Dispatch/Persistence Yet

The public shell can preview contract shapes only; it may not execute, dispatch, or persist runtime actions.

## No Robotics/IoT Control Yet

Robo remains teaser-only in the public shell. Any robotics, drone, humanoid, device, or IoT path stays outside this repo phase.

## Recommended Future Integration Sequence

1. Phase 1: contract docs only.
2. Phase 2: mocked LIMA contract types/fixtures only.
3. Phase 3: frontend-only preview UI consuming mock LIMA responses.
4. Phase 4: local optional LIMA package install detection.
5. Phase 5: read-only LIMA preview endpoint integration.
6. Phase 6: only later approval/runtime integration if explicitly approved.

## Mock Contract Planning (Current Phase)

Current status is now at completion for Phases 1 through 3 for UI-readiness visibility (current locked branch `active-staging-baseline-mock-lima-ui-lock`):

- contract-first docs are now complete,
- mock contract schemas and fixture examples are complete in repo planning docs,
- runtime behavior is still disabled,
- no package install, runtime endpoint, or dispatch path is active.
- static contract preview is now rendered in-shell via `MockLimaContractPanel` on Workstation and Command Center surfaces.

Planned mock request/response families include:

- workstation state preview
- round table candidate meeting preview
- model/seat preview
- file/memory/task context preview
- guardian posture preview
- robo teaser readiness preview
- release/readiness preview

Required common preview invariants (applied to all mock responses):

- `preview_only: true`
- `non_authoritative: true`
- `safe_by_default: true`
- `execution_allowed: false`
- `side_effects_allowed: false`
- `approval_granted: false`
- `dispatch_allowed: false`
- `persistence_allowed: false`
- `provider_calls_allowed: false`
- `connector_calls_allowed: false`
- `lima_runtime_active: false`
- `humaninput_bridge_active: false`
- `sparkbot_wiring_active: false`
- `live_adapter_active: false`
- `robotics_allowed: false`
- `physical_world_allowed: false`

## Gate Reminder

Contracts first. Guardian-gated runtime later. No direct runtime coupling in this shell phase.

## Return-To-LIMA Priority

The next LIMA lane should define the universal runtime contracts Sparkbot Shell will later consume:

- universal task/intent contract
- candidate preview contract
- runtime state contract
- consumer profile contract
- Sparkbot Shell consumer profile
- model/agent seat profile
- Round Table meeting preview contract
- file/memory/task context preview contract
- Guardian posture contract
- Robo/IoT deferred posture contract
- release/readiness/status contract

Sparkbot Shell should only consume mock or read-only contract output until future explicit approval.
