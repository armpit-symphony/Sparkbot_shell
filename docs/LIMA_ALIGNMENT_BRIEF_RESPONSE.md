# LIMA Alignment Brief Response

Updated: 2026-05-25

## Purpose

This response records how Sparkbot Shell aligns its mock LIMA contract vocabulary to the new LIMA AI OS alignment brief while staying frontend-only and static.

## Adopted Sequence

Sparkbot Shell now treats contract examples as non-authoritative preview/demo shapes using the shared sequence:

`ConsumerRequest -> TypedIntentEnvelope or TaskIntent -> CandidatePreview -> RuntimeStateSnapshot`

## Required Shape Decisions

- `consumer_profile` is structured from the beginning.
- `ConsumerProfile`, `EmbodimentProfile`, `ApprovalPosture`, and `EvidenceRef` are required fields/refs inside the sequence, not first standalone contracts.
- Every `CandidatePreview` includes `embodiment_profile`, including `text_only`.
- LIMA describes approval posture only.
- Guardian/policy membrane owns real approval state.
- Consumers display approval posture; they do not create real approval state.
- Adapters execute only after future explicit approval.

## Mock-Safe Ladder

Sparkbot Shell may show the full vocabulary ladder, but only these states are active/mock-safe now:

- `preview_only`
- `explain_plan`
- `blocked`
- `deferred`

Other ladder states remain vocabulary-only in this phase.

## Invariant Naming Alignment

Renamed:

- `side_effects_allowed` -> `side_effects_permitted`
- `provider_calls_allowed` -> `model_provider_calls_allowed`
- `lima_runtime_active` -> `runtime_active`
- `humaninput_bridge_active` -> `human_input_bridge_active`

Kept:

- `connector_calls_allowed`
- `live_adapter_active`
- `preview_only`
- `non_authoritative`
- `safe_by_default`
- `execution_allowed`
- `approval_granted`
- `dispatch_allowed`
- `persistence_allowed`
- `robotics_allowed`
- `physical_world_allowed`

Added:

- `runtime_test_harness_active=false`
- `guardian_decision_created=false`
- `adapter_calls_allowed=false`
- `tool_calls_allowed=false`
- `driver_calls_allowed=false`
- `audit_storage_written=false`

## Product Boundary Clarifications

- Sparkbot Shell is one public/hobbyist/showcase consumer profile.
- Arc Bot is another future consumer profile.
- Robotics/IoT/drone/humanoid profiles remain vocabulary/posture only in this shell phase.
- No runtime is bundled.
- No runtime calls are made.
- No provider/model/connector calls are made.
- No persistence, dispatch, execution, or approval enforcement exists.

## Implementation Scope In This Pass

- `src/data/mockLimaContracts.ts`: vocabulary and shape alignment.
- `src/components/MockLimaContractPanel.tsx`: updated display and invariant messaging.
- Optional shell-doc UI wording alignment.
- Docs alignment and migration notes.

No runtime behavior is added.
