# Public Preview Release Candidate

Updated: 2026-05-25

## Candidate Identity

- Candidate: `sparkbot-shell-preview-0.8.0-layer8`
- Version: `0.8.0-layer8-preview`
- Artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`
- Readiness: `GREEN_CANDIDATE`
- Public release status: `NOT_RELEASED`
- Tag/publish/upload/announcement: `NOT_DONE`

## Baseline Lineage

- Active staging lock: `active-staging-baseline-mock-lima-ui-lock`
- Locked commit: `3fab1e8`
- Includes Wave 1 static adaptations and checkpoint.
- Includes mock LIMA contract planning and mock contract UI display.

## Vocabulary Alignment Status

This candidate now aligns to the LIMA brief vocabulary:

- Sequence: `ConsumerRequest -> TypedIntentEnvelope or TaskIntent -> CandidatePreview -> RuntimeStateSnapshot`
- Required refs/fields in examples:
  - `consumer_profile`
  - `embodiment_profile`
  - `approval_posture`
  - `evidence_ref`
- Updated invariants:
  - `side_effects_permitted`
  - `model_provider_calls_allowed`
  - `runtime_active`
  - `human_input_bridge_active`
- Added invariants:
  - `runtime_test_harness_active=false`
  - `guardian_decision_created=false`
  - `adapter_calls_allowed=false`
  - `tool_calls_allowed=false`
  - `driver_calls_allowed=false`
  - `audit_storage_written=false`

## What Is Included

- Static shell UX with Workstation, Round Table, model seats, files/memory/tasks fixtures, Guardian posture, Robo teaser.
- Static mock LIMA contract display.
- Static non-authoritative contract examples only.

## What Is Excluded

- Backend/runtime implementation.
- LIMA runtime integration.
- Provider/model/connector calls.
- Persistence/scheduler/dispatch/execution.
- Approval enforcement and Guardian decision creation.
- Robotics/IoT/hardware control.

## Next Gate

Option D remains blocked until explicit Phil approval.
