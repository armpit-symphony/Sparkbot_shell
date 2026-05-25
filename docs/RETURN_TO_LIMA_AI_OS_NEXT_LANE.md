# Return To LIMA AI OS Next Lane

Updated: 2026-05-25

## Recommended Lane

LIMA AI OS Universal Runtime Contract / Sparkbot Shell Consumer Alignment.

## Purpose

Define how LIMA AI OS should expose a universal, model-agnostic, consumer-agnostic, and embodiment-agnostic runtime contract that Sparkbot Shell can later consume safely.

The contract should support Sparkbot Shell without making Sparkbot Shell the runtime. Sparkbot Shell is one consumer profile. Arc Bot is another consumer profile. Robots, drones, humanoids, and IoT systems are future embodiment profiles. LIMA AI OS is the OS/runtime substrate. Guardian owns real approval, audit, and control state.

## Contract Families To Define

1. Universal task/intent contract
   - operator intent
   - task class
   - requested capabilities
   - risk tier
   - expected evidence
   - allowed tool packs

2. Candidate preview contract
   - proposed action plan
   - no-side-effect candidate steps
   - risk labels
   - blocked capabilities
   - required approvals

3. Runtime state contract
   - runtime availability
   - installed capability packs
   - read-only health state
   - degraded/offline state
   - version and contract compatibility

4. Consumer profile contract
   - shell/application identity
   - allowed surfaces
   - allowed tool packs
   - read-only versus actionable mode
   - contract version compatibility

5. Sparkbot Shell consumer profile
   - public shell UX
   - Workstation preview
   - Round Table preview
   - files/memory/tasks preview
   - Guardian posture display
   - no dispatch by default

6. Model/agent seat profile
   - model seat role
   - model/provider readiness label
   - fallback role label
   - agent persona label
   - no key handling in shell contract output

7. Round Table meeting preview contract
   - meeting topic
   - chair/meeting manager role
   - agent/model seats
   - stages
   - expected artifact
   - follow-up task candidates
   - no live model calls in preview mode

8. File/memory/task context preview contract
   - context item type
   - summary
   - confidence/verification label
   - redaction status
   - provenance label
   - persistence permission flag

9. Guardian posture contract
   - risk classification
   - approval requirement
   - denied capabilities
   - evidence requirement
   - audit posture
   - approval state owned by Guardian

10. Robo/IoT deferred posture contract
    - embodiment class
    - physical-world risk
    - dry-run eligibility
    - approval requirement
    - hardware control disabled by default

11. Release/readiness/status contract
    - product state
    - public release state
    - blocked actions
    - validation state
    - artifact/package readiness

12. Hard safety invariants
    - `preview_only: true`
    - `non_authoritative: true`
    - `safe_by_default: true`
    - `execution_allowed: false`
    - `side_effects_allowed: false`
    - `approval_granted: false`
    - `dispatch_allowed: false`
    - `persistence_allowed: false`
    - `provider_calls_allowed: false`
    - `connector_calls_allowed: false`
    - `lima_runtime_active: false` for Sparkbot Shell static preview
    - `humaninput_bridge_active: false` unless explicitly approved
    - `sparkbot_wiring_active: false` until runtime integration approval
    - `live_adapter_active: false` until runtime integration approval
    - `robotics_allowed: false`
    - `physical_world_allowed: false`

## Consumer Profiles

Sparkbot Shell:
- public shell and static preview consumer
- consumes mock/read-only contract output only
- cannot execute, dispatch, persist, approve, or control hardware

Arc Bot:
- future business worker shell profile
- should consume the same core intent, posture, and Guardian contracts with different policy limits
- remains separate from Sparkbot Shell public release work

Robots, drones, humanoids, and IoT:
- future embodiment profiles
- require dry-run posture, hardware abstraction, physical-world risk policy, and Guardian approval before any control path exists

## Ownership Boundaries

- LIMA AI OS owns the runtime/kernel substrate.
- Guardian owns approval, audit, control state, policy, and evidence.
- Sparkbot Shell owns public shell UX and can display mock/read-only contract outputs.
- Arc Bot, LIMA Office, and LIMA IT remain separate product/control-plane tracks.
- Robo/IoT control remains a future Guardian-gated driver/runtime lane.

## Sparkbot Shell Consumption Rule

Sparkbot Shell should only consume mock or read-only contract output until future explicit approval. It should not call a live LIMA runtime, install a LIMA package, send provider/connector requests, persist contract state, or execute any task from contract output in the current phase.

## Recommended First LIMA Deliverables

1. `docs/UNIVERSAL_RUNTIME_CONTRACT.md`
2. `docs/CONSUMER_PROFILES.md`
3. `docs/GUARDIAN_POSTURE_CONTRACT.md`
4. `docs/CANDIDATE_PREVIEW_CONTRACT.md`
5. `docs/EMBODIMENT_POSTURE_CONTRACT.md`
6. `docs/SPARKBOT_SHELL_CONSUMER_ALIGNMENT.md`
7. static JSON fixtures for the contract families above

## Stop Gate

Do not implement runtime behavior until the contract docs, threat model, Guardian approval semantics, consumer profile boundaries, and validation plan are approved.
