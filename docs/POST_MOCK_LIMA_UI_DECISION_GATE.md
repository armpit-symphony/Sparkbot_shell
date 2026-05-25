# Post Mock LIMA UI Decision Gate

Updated: 2026-05-25

## Current Decision State

- Sparkbot Shell lock is preserved.
- Public release Option D remains blocked.
- Official repo move remains deferred.
- Runtime work remains unapproved.

## Alignment Clarification

The mock contract lane now aligns to:

`ConsumerRequest -> TypedIntentEnvelope or TaskIntent -> CandidatePreview -> RuntimeStateSnapshot`

Each preview carries:

- structured `consumer_profile`
- required `embodiment_profile`
- descriptive `approval_posture`
- non-authoritative `evidence_ref`

Guardian remains owner of real approval state.

## Immediate Next Lane

Return to LIMA AI OS universal runtime contract planning.

## Still Blocked

- Runtime implementation.
- LIMA runtime wiring.
- Provider/model/connector calls.
- Dispatch/execution/persistence.
- Robotics/IoT control.
- Public tag/upload/publish/announcement.
