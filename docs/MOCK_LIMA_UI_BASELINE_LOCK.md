# Mock LIMA UI Baseline Lock

Updated: 2026-05-25

## Lock Summary

- Locked branch: `active-staging-baseline-mock-lima-ui-lock`
- Locked commit: `3fab1e8`
- Status: `GREEN_CANDIDATE`, `NOT_RELEASED`
- Release actions: `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`

## Mock Contract UI Scope

- Static contract examples only.
- Non-authoritative preview shapes only.
- No runtime objects.

Displayed examples:

- Workstation state
- Round Table meeting
- model/seat
- context
- Guardian posture
- Robo teaser
- release/readiness

## Alignment Vocabulary

Sequence:

`ConsumerRequest -> TypedIntentEnvelope or TaskIntent -> CandidatePreview -> RuntimeStateSnapshot`

Required fields/refs in each example:

- `consumer_profile`
- `embodiment_profile`
- `approval_posture`
- `evidence_ref`

Required invariant set includes renamed and added fields:

- `side_effects_permitted=false`
- `model_provider_calls_allowed=false`
- `runtime_active=false`
- `human_input_bridge_active=false`
- `runtime_test_harness_active=false`
- `guardian_decision_created=false`
- `adapter_calls_allowed=false`
- `tool_calls_allowed=false`
- `driver_calls_allowed=false`
- `audit_storage_written=false`

## Boundary

- LIMA describes posture only.
- Guardian owns real approval state.
- Shell displays posture only.
- No dispatch/execution/persistence/adapters/tools/drivers/hardware control.
