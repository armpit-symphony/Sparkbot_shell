# Next Release Actions

Updated: 2026-05-25

## Current Status

- Release posture: `GREEN_CANDIDATE`, `NOT_RELEASED`
- Actions blocked: `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`
- Active staging baseline: `active-staging-baseline-mock-lima-ui-lock` (`3fab1e8`)
- Final public repo/home: `TBD`

## Current Recommendation

Pause Sparkbot Shell feature progression and continue LIMA AI OS universal runtime contract planning.

## Vocabulary Alignment Applied

Sparkbot Shell mock contract vocabulary now uses:

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

## Still Blocked

- Runtime implementation.
- Provider/model/connector calls.
- Persistence/scheduler/dispatch/execution.
- Guardian decision creation or approval enforcement.
- Robotics/IoT control.
- Public release Option D.
- Official repo move.
