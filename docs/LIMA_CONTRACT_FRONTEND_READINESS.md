# LIMA Contract Frontend Readiness

Updated: 2026-05-25

This document defines what Sparkbot Shell must guarantee when rendering mock LIMA contract previews.

## Current State

- Static mock contract display exists in `MockLimaContractPanel`.
- Data source is `src/data/mockLimaContracts.ts`.
- Runtime is inactive and no runtime object is consumed.
- Sparkbot Shell feature work is paused; this remains a safety reference for future read-only alignment.

## Required Display Sequence

Render the alignment sequence clearly:

`ConsumerRequest -> TypedIntentEnvelope or TaskIntent -> CandidatePreview -> RuntimeStateSnapshot`

## Required Embedded Shapes

Every displayed example should include:

- `consumer_profile`
- `embodiment_profile`
- `approval_posture`
- `evidence_ref`
- `active_state`
- `state_authority: non_authoritative`

## Invariant Display Rules

Frontend must visibly preserve and label:

- `runtime_active: false`
- `preview_only: true`
- `non_authoritative: true`
- `safe_by_default: true`
- `execution_allowed: false`
- `side_effects_permitted: false`
- `approval_granted: false`
- `dispatch_allowed: false`
- `persistence_allowed: false`
- `model_provider_calls_allowed: false`
- `connector_calls_allowed: false`
- `human_input_bridge_active: false`
- `live_adapter_active: false`
- `robotics_allowed: false`
- `physical_world_allowed: false`
- `runtime_test_harness_active: false`
- `guardian_decision_created: false`
- `adapter_calls_allowed: false`
- `tool_calls_allowed: false`
- `driver_calls_allowed: false`
- `audit_storage_written: false`

## Ownership Language

- LIMA describes approval posture only.
- Guardian owns real approval state.
- Sparkbot Shell displays posture and cannot create approval state.

## Ladder Rules

Shell may display full ladder vocabulary, but only these states are mock-safe and active:

- `preview_only`
- `explain_plan`
- `blocked`
- `deferred`

## Forbidden In This Phase

- No runtime call/render coupling.
- No install detection behavior.
- No adapter/tool/driver calls.
- No approval enforcement or decision creation.
- No dispatch/execution/persistence.
- No robotics/IoT control.

## Pause-State Rule

Do not expand Sparkbot Shell features from this state by default. Next active work belongs in LIMA AI OS universal contract planning.
