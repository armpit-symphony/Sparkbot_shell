# Mock LIMA UI Baseline Lock

Updated: 2026-05-25

## Purpose of the Lock

Lock the mock LIMA contract UI-display state as the active Sparkbot Shell static baseline after completion of Wave 1 and contract planning documentation.

## Branch / Commit Locked

- Branch: `active-staging-baseline-mock-lima-ui-lock`
- Commit: `3fab1e8`
- Parent lock: `active-staging-baseline-lock` (`9142f71`)
- Pause/handoff branch: `pause-shell-return-lima-handoff`

## Included Surfaces

- Static shell core surfaces from Wave 1:
  - Workstation shell
  - Round Table shell
  - Model/Invite seat shell
  - Docs/info surface
- Mock LIMA contract planning docs.
- Static mock contract UI surface and data:
  - `src/data/mockLimaContracts.ts`
  - `src/components/MockLimaContractPanel.tsx`

## Mock Contract UI Summary

The UI renders static contract preview cards for:

- Workstation state
- Round Table meeting candidate
- model/seat preview
- context (files/memory/tasks)
- Guardian posture
- Robo teaser readiness
- release/readiness status

Data is static and non-authoritative.

## Safety Invariants Displayed

Each payload family is presented with:

- `preview_only`
- `non_authoritative`
- `safe_by_default`
- `execution_allowed: false`
- `dispatch_allowed: false`
- `side_effects_allowed: false`
- `approval_granted: false`
- `persistence_allowed: false`
- `provider_calls_allowed: false`
- `connector_calls_allowed: false`
- `lima_runtime_active: false`
- `humaninput_bridge_active: false`
- `sparkbot_wiring_active: false`
- `live_adapter_active: false`
- `robotics_allowed: false`
- `physical_world_allowed: false`
- explicit `No LIMA runtime bundled`
- explicit `No runtime calls`
- explicit `No execution / persistence / connectors`

## Validation Summary

- `git diff --check`: PASS
- `npm run build`: PASS
- `npm run package:preview`: PASS
- `npm pack --dry-run --json`: PASS
- `node --check scripts/package-preview.mjs`: PASS
- source-boundary and forbidden API checks remained clean

## Remaining Gaps

- No runtime contract transport layer yet.
- No install detection or endpoint integration yet.
- No official public repo migration executed.
- No public release action.

## Pause Decision

Phil selected Option A after this lock: pause Sparkbot Shell feature/static UI progression and return to LIMA AI OS universal runtime contract planning.

## Next Recommended Paths

1. Preserve the current mock LIMA UI-display lock as the static staging baseline.
2. Move next work to LIMA AI OS universal contract planning.
3. Do not begin runtime planning, release action, official repo move, or further static feature work unless Phil explicitly reopens that lane.

Sparkbot Shell remains `GREEN_CANDIDATE` and `NOT_RELEASED`, with no tag, upload, publish, announcement, runtime behavior, or LIMA runtime wiring.
