# LIMA Contract Integration Stop Gates

Updated: 2026-05-25

No LIMA runtime integration may proceed in Sparkbot Shell unless these gates are closed by explicit approval.

## Hard Stop Conditions

1. Runtime package install is required.
2. Backend endpoint is required.
3. Network call is required.
4. Provider/model call is required.
5. Connector call is required.
6. Persistence write is required.
7. Dispatch/execution path is required.
8. Approval enforcement is required.
9. GuardianDecision creation is required.
10. Adapter/tool/driver calls are required.
11. Runtime test harness activation is required.
12. Human input bridge is required.
13. Robotics/IoT/drone/humanoid control is required.
14. Secret/key handling is required.
15. LIMA runtime code import is required.
16. Sparkbot R&D runtime code copy is required.

## Vocabulary Compliance Gate

Stop if contract data or docs regress to outdated invariant names:

- `side_effects_allowed`
- `provider_calls_allowed`
- `lima_runtime_active`
- `humaninput_bridge_active`

Use aligned names instead:

- `side_effects_permitted`
- `model_provider_calls_allowed`
- `runtime_active`
- `human_input_bridge_active`

## Ownership Gate

Stop if docs or UI imply:

- LIMA owns real approval decisions in shell.
- Sparkbot Shell creates real approval state.

Required boundary:

- LIMA describes posture.
- Guardian owns real approval state.
- Shell displays posture only.

## Current Phase Gate

Sparkbot Shell remains static and non-runtime in this phase:

- `preview_only=true`
- `non_authoritative=true`
- `runtime_active=false`
- `guardian_decision_created=false`
- `adapter_calls_allowed=false`
- `tool_calls_allowed=false`
- `driver_calls_allowed=false`
- `audit_storage_written=false`
