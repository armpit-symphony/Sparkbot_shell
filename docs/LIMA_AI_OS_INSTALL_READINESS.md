# LIMA AI OS Install Readiness

Updated: 2026-05-25

## Current Shell Status

Sparkbot Shell is static/public preview only.

- No backend runtime.
- No LIMA runtime bundled.
- No runtime calls.
- No provider/model/connector calls.
- No persistence, scheduler, dispatch, or execution.
- No robotics/IoT control.

## Pause Status

Sparkbot Shell feature/static progression is paused at `active-staging-baseline-mock-lima-ui-lock` (`3fab1e8`).

Next priority is LIMA AI OS universal runtime contract planning, not additional shell features.

## Contract Sequence Target

`ConsumerRequest -> TypedIntentEnvelope or TaskIntent -> CandidatePreview -> RuntimeStateSnapshot`

Required fields/refs inside the sequence:

- `consumer_profile`
- `embodiment_profile`
- `approval_posture`
- `evidence_ref`

## Ownership Model

- LIMA describes approval posture.
- Guardian owns real approval state and enforcement.
- Sparkbot Shell displays posture only.

## Required Invariant Set

Current preview baseline keeps:

- `preview_only=true`
- `non_authoritative=true`
- `safe_by_default=true`
- `execution_allowed=false`
- `side_effects_permitted=false`
- `approval_granted=false`
- `dispatch_allowed=false`
- `persistence_allowed=false`
- `model_provider_calls_allowed=false`
- `connector_calls_allowed=false`
- `runtime_active=false`
- `human_input_bridge_active=false`
- `live_adapter_active=false`
- `robotics_allowed=false`
- `physical_world_allowed=false`
- `runtime_test_harness_active=false`
- `guardian_decision_created=false`
- `adapter_calls_allowed=false`
- `tool_calls_allowed=false`
- `driver_calls_allowed=false`
- `audit_storage_written=false`

## Runtime Ladder Vocabulary

Shell can display full ladder vocabulary, but only mock-safe states are active now:

- `preview_only`
- `explain_plan`
- `blocked`
- `deferred`

## Integration Sequence (Future)

1. Contract docs only.
2. Mock schema and fixtures only.
3. Frontend mock/read-only display only.
4. Optional local install detection only after explicit approval.
5. Read-only runtime endpoint integration only after explicit approval.
6. Runtime/approval integration only after explicit approval.
