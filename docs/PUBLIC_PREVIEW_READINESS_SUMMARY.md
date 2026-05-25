# Public Preview Readiness Summary

Updated: 2026-05-25

## Current Preview

- Status color: `GREEN_CANDIDATE`
- Release state: `NOT_RELEASED`
- Actions: `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`
- Branch baseline: `active-staging-baseline-mock-lima-ui-lock` (`3fab1e8`)
- Artifact: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`
- Final public repo/home: `TBD`

## Contract Vocabulary Alignment

Mock contract UI/examples now align to:

`ConsumerRequest -> TypedIntentEnvelope or TaskIntent -> CandidatePreview -> RuntimeStateSnapshot`

Required fields/refs are present in preview examples:

- `consumer_profile`
- `embodiment_profile`
- `approval_posture`
- `evidence_ref`

## Invariant Alignment

Renamed and added invariant fields are now used in mock vocabulary:

- `side_effects_permitted`
- `model_provider_calls_allowed`
- `runtime_active`
- `human_input_bridge_active`
- `runtime_test_harness_active`
- `guardian_decision_created`
- `adapter_calls_allowed`
- `tool_calls_allowed`
- `driver_calls_allowed`
- `audit_storage_written`

## Boundary Status

- Static/non-authoritative preview only.
- No runtime calls.
- No provider/model/connector calls.
- No persistence.
- No dispatch/execution.
- No approval enforcement.
- No robotics/IoT control.

## Recommended Next Step

Pause Sparkbot Shell feature progression and continue LIMA AI OS universal runtime contract planning.
