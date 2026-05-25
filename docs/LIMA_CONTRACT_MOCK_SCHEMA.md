# LIMA Contract Mock Schema

Updated: 2026-05-25

## Contract Intent

These examples are static preview/demo contract shapes only. They are non-authoritative and do not represent live runtime objects.

Shared sequence:

`ConsumerRequest -> TypedIntentEnvelope or TaskIntent -> CandidatePreview -> RuntimeStateSnapshot`

Required embedded fields/refs in examples:

- `consumer_profile`
- `embodiment_profile`
- `approval_posture`
- `evidence_ref`

## Required Invariants

All mock responses must include:

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
- `runtime_active: false`
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

## Runtime Ladder Vocabulary

Allowed ladder vocabulary in mock data:

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

Mock-safe active states in Sparkbot Shell now:

- `preview_only`
- `explain_plan`
- `blocked`
- `deferred`

## Example Shape: CandidatePreview + RuntimeStateSnapshot

```json
{
  "type": "candidate_preview",
  "consumer_profile": {
    "consumer_id": "sparkbot-shell-public-preview",
    "consumer_class": "sparkbot_shell_public_preview",
    "consumer_mode": "public_preview",
    "ui_surface": "static_demo_shell",
    "operator_visibility": "public"
  },
  "embodiment_profile": {
    "embodiment_id": "text-only-preview",
    "embodiment_type": "text_only",
    "physical_world_target": false,
    "emergency_stop_vocabulary_only": true
  },
  "active_state": "preview_only",
  "state_authority": "non_authoritative",
  "approval_posture": {
    "described_by_lima": true,
    "guardian_owns_real_approval_state": true,
    "shell_displays_posture_only": true,
    "posture": "preview_only"
  },
  "evidence_ref": {
    "evidence_id": "evidence-candidate-preview-v1",
    "evidence_type": "preview_note",
    "non_authoritative": true
  },
  "state_ladder": [
    "preview_only",
    "explain_plan",
    "approval_required",
    "approved_not_dispatched",
    "dispatch_ready",
    "executing",
    "completed",
    "audited",
    "blocked",
    "deferred"
  ],
  "safe_active_states": ["preview_only", "explain_plan", "blocked", "deferred"],
  "runtime_active": false,
  "preview_only": true,
  "non_authoritative": true,
  "safe_by_default": true,
  "execution_allowed": false,
  "side_effects_permitted": false,
  "approval_granted": false,
  "dispatch_allowed": false,
  "persistence_allowed": false,
  "model_provider_calls_allowed": false,
  "connector_calls_allowed": false,
  "human_input_bridge_active": false,
  "live_adapter_active": false,
  "robotics_allowed": false,
  "physical_world_allowed": false,
  "runtime_test_harness_active": false,
  "guardian_decision_created": false,
  "adapter_calls_allowed": false,
  "tool_calls_allowed": false,
  "driver_calls_allowed": false,
  "audit_storage_written": false
}
```

## Ownership Boundary

- LIMA describes posture and candidate shape.
- Guardian owns real approval state and enforcement.
- Sparkbot Shell displays posture only in this phase.
