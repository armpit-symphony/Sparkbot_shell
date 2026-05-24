# Shell vs OS Boundary

Updated: 2026-05-24

## Ownership Split

- Sparkbot_shell owns public shell UX.
- LIMA AI OS owns runtime/safety substrate.
- Guardian owns approval/audit/control membrane.
- Arc Bot owns proprietary business worker shell.
- LIMA Office owns business control plane.
- LIMA IT owns IT/security service layer.
- Robo/IoT advanced control remains proprietary LIMA, not public shell core.

## Sparkbot_shell Owns

- Public-facing UX composition and route flow.
- Static/demo shell state for preview.
- Public docs and release-boundary messaging.
- Contract-readiness surfaces that do not execute runtime actions.

## LIMA AI OS Owns (Future)

- Runtime orchestration, policy enforcement substrate, and execution harness.
- Model/tool dispatch contracts under Guardian controls.
- Scheduling/persistence/runtime lifecycle behaviors.
- Driver/runtime plumbing for advanced system and embodiment integrations.

## Guardian Owns

- Approval membrane for sensitive actions.
- Audit evidence generation and decision trail.
- Policy gating for privileged or risky operations.

## Explicit Non-Goals In Sparkbot_shell (Current Phase)

- No backend runtime execution.
- No direct provider/model calls.
- No connector send/session/webhook runtime.
- No scheduler/runtime dispatch.
- No memory persistence runtime.
- No terminal/browser execution.
- No robotics/IoT control.
- No Arc/LIMA Office/LIMA IT proprietary wiring.

## Integration Rule

When integration begins, Sparkbot_shell consumes approved contracts and capabilities. It does not import private runtime internals directly.

## Mock Contract Planning Rule

For the current static planning phase:

- `lima_runtime_active` remains false.
- All contract surfaces are placeholders and previews only.
- No runtime data is authoritative.
- No provider/model/connector calls occur.
- No persistence, scheduler, terminal, or robotics paths are active.
- No LIMA/Arc/Office/IT runtime code is consumed from shell source.

## Current Mock-UI Pass

- Added a dedicated static contract panel to demonstrate expected contract payload families:
  - workstation state
  - roundtable meeting
  - model/agent seats
  - file/memory/task context
  - guardian posture
  - robo teaser
  - release/readiness status
- Shell consumes these as non-authoritative fixtures only.
- This pass adds no additional boundary crossings; it only surfaces this contract-readiness information in existing UI routes.

## Contract Surface Expectations

The following contract surfaces are defined as future display domains:

- workstation state preview
- round table meeting preview
- model/seat preview
- file/memory/task context preview
- guardian posture preview
- robo teaser preview
- release readiness preview

These are planning artifacts only and do not imply live runtime readiness.
