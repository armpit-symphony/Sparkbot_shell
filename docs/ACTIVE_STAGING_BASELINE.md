# Active Staging Baseline

Updated: 2026-05-25

## Active Baseline

- Branch: `active-staging-baseline-mock-lima-ui-lock`
- Commit: `3fab1e8`
- Release posture: `GREEN_CANDIDATE`, `NOT_RELEASED`, `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`
- Artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`
- Active staging repo: `armpit-symphony/Sparkbot_shell`
- Final public repo/home: `TBD`

## Included

- Wave 1 static adaptations and checkpoint.
- Mock LIMA contract planning docs.
- Mock LIMA contract UI display.

## Vocabulary Alignment (Current Pass)

Mock vocabulary now aligns to the LIMA brief:

- Sequence: `ConsumerRequest -> TypedIntentEnvelope/TaskIntent -> CandidatePreview -> RuntimeStateSnapshot`
- Required fields/refs: `consumer_profile`, `embodiment_profile`, `approval_posture`, `evidence_ref`
- Updated invariant names:
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

## Explicit Runtime Absence

- No runtime behavior.
- No backend/runtime folders added.
- No provider/model/connector calls.
- No persistence/dispatch/execution.
- No LIMA runtime wiring.

## Current Recommendation

Pause Sparkbot Shell feature progression and continue LIMA AI OS universal runtime contract planning.
