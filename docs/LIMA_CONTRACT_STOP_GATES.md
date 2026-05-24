# LIMA Contract Integration Stop Gates

Updated: 2026-05-24

No future LIMA runtime integration may proceed until these gates are fully closed.

## Hard Stop Gates

### 1) Package install dependency required
- If a runtime contract requires shipping/installing packages in this shell, stop.
- Reason: current phase is static/docs-only.

### 2) Backend endpoint required
- If any candidate flow requires a new backend endpoint, stop.
- Reason: source-bounded shell phase does not include backend/runtime.

### 3) Network call required
- If any component needs to issue live network requests, stop.
- Reason: no provider/connector/network runtime behavior in this phase.

### 4) Persistence required
- If contract data must be written/stored, stop.
- Reason: no persistence/write behavior is allowed in static preview shell.

### 5) Approval enforcement required
- If LIMA preview flow requests runtime enforcement or approval execution, stop.
- Reason: approval posture is display-only and non-authoritative.

### 6) Execution/dispatch required
- If runtime dispatch, run, execute, or send actions are introduced, stop.
- Reason: execution is explicitly blocked.

### 7) Provider/connector calls required
- If runtime or provider/connector operations are added, stop.
- Reason: all calls are deferred to future runtime phases.

### 8) Model key handling required
- If any provider key capture/storage/validation appears, stop.
- Reason: no secrets/key handling in shell docs/fixture planning.

### 9) HumanInput bridge required
- If HumanInput bridge becomes active in shell behavior, stop.
- Reason: no live bridge is allowed in this phase.

### 10) Live adapter required
- If adapter logic moves from mock fixtures to live runtime adapters, stop.
- Reason: must remain static/fixture consumption only.

### 11) Robotics/IoT control required
- If any robotics/IoT command/control path is added, stop.
- Reason: Robo remains teaser-only.

### 12) Secret handling required
- If secrets/credentials/tokens flow through shell runtime path, stop.
- Reason: no secret-handling behavior is allowed.

### 13) Runtime code import from LIMA required
- If integration imports LIMA runtime code directly, stop.
- Reason: contract-first handoff only; no runtime embedding.

### 14) Sparkbot R&D code copy required
- If this planning pass starts copying implementation from Sparkbot R&D, stop.
- Reason: no direct source copy is permitted in this phase.

## Operating Rule

Any new gate hit requires:

- explicit Phil approval, and
- an updated contract plan document before runtime work is resumed.

## Current State Note

All current Wave 1 and checkpoint work remains in a static-mode boundary:

- no runtime behavior,
- no provider/model calls,
- no connector calls,
- no persistence,
- no scheduler,
- no terminal/browser runtime,
- no robotics/IoT control,
- no LIMA/Arc/Office/IT runtime wiring.
