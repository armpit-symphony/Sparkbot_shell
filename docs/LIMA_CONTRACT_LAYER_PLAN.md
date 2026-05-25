# LIMA Contract Layer Plan

Updated: 2026-05-25

## Purpose

Sparkbot Shell is a static, open-source shell preview. The LIMA alignment lane is contract-first and non-runtime.

Current pause state:

- Sparkbot Shell static feature progression is paused at `active-staging-baseline-mock-lima-ui-lock` (`3fab1e8`).
- Next work priority is LIMA AI OS universal runtime contract planning.

## Contract Sequence

All Sparkbot Shell contract examples should follow:

`ConsumerRequest -> TypedIntentEnvelope or TaskIntent -> CandidatePreview -> RuntimeStateSnapshot`

## Required Embedded Shapes

The sequence must carry required refs/fields:

- structured `consumer_profile`
- `embodiment_profile` on every `CandidatePreview` (including `text_only`)
- `approval_posture` (descriptive)
- `evidence_ref`

## Ownership Boundary

- LIMA describes approval posture.
- Guardian/policy membrane owns real approval state.
- Sparkbot Shell displays posture only.
- No real approval state, dispatch, execution, or persistence is created in this shell phase.

## Invariant Vocabulary

Required invariant naming in this phase:

- `preview_only`
- `non_authoritative`
- `safe_by_default`
- `execution_allowed`
- `side_effects_permitted`
- `approval_granted`
- `dispatch_allowed`
- `persistence_allowed`
- `model_provider_calls_allowed`
- `connector_calls_allowed`
- `runtime_active`
- `human_input_bridge_active`
- `live_adapter_active`
- `robotics_allowed`
- `physical_world_allowed`
- `runtime_test_harness_active`
- `guardian_decision_created`
- `adapter_calls_allowed`
- `tool_calls_allowed`
- `driver_calls_allowed`
- `audit_storage_written`

All are `false` except preview/non-authoritative/safe-by-default flags.

## Ladder Vocabulary

Full ladder may be displayed for future planning:

- `preview_only`
- `explain_plan`
- `approval_required`
- `approved_not_dispatched`
- `dispatch_ready`
- `executing`
- `completed`
- `audited`
- `blocked`
- `deferred`

Mock-safe active states now:

- `preview_only`
- `explain_plan`
- `blocked`
- `deferred`

## Consumer Positioning

- Sparkbot Shell: one public/hobbyist/showcase consumer profile.
- Arc Bot: one future consumer profile.
- Robotics/IoT/drone/humanoid: future embodiment profiles with vocabulary/posture only in this shell phase.

## Runtime Boundary

No runtime integration is present:

- no LIMA package install
- no runtime calls
- no provider/model calls
- no connector calls
- no dispatch or execution
- no persistence
- no adapter/tool/driver calls
- no robotics/IoT control
