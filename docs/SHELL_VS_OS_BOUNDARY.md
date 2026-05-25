# Shell Vs OS Boundary

Updated: 2026-05-25

## Ownership

- Sparkbot Shell owns public shell UX.
- LIMA AI OS owns runtime/kernel substrate.
- Guardian owns real approval/audit/control state.
- Arc Bot is a separate future consumer profile.
- LIMA Office and LIMA IT are separate proprietary tracks.
- Robo/IoT control remains future proprietary/GUARDIAN-gated runtime work.

## Shared Sequence For Alignment

`ConsumerRequest -> TypedIntentEnvelope or TaskIntent -> CandidatePreview -> RuntimeStateSnapshot`

Required in-sequence fields/refs:

- `consumer_profile`
- `embodiment_profile`
- `approval_posture`
- `evidence_ref`

## Approval Boundary

- LIMA describes approval posture.
- Guardian owns real approval state.
- Sparkbot Shell displays posture only.

## Runtime Boundary In This Repo

Sparkbot Shell stays static/non-runtime:

- `runtime_active=false`
- `execution_allowed=false`
- `dispatch_allowed=false`
- `persistence_allowed=false`
- `model_provider_calls_allowed=false`
- `connector_calls_allowed=false`
- `guardian_decision_created=false`
- `adapter_calls_allowed=false`
- `tool_calls_allowed=false`
- `driver_calls_allowed=false`
- `robotics_allowed=false`
- `physical_world_allowed=false`

No backend runtime, no provider calls, no connector runtime, no scheduler, no terminal/browser execution, and no robotics control are present.
