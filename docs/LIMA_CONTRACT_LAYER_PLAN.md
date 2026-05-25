# LIMA Contract Layer Plan

Updated: 2026-05-25

## Purpose

Sparkbot_shell is a static, open-source shell preview.  
The next phase is to prepare the frontend for a future **LIMA AI OS install/contract layer** without adding any runtime behavior.

Current pause state: Sparkbot Shell static work is paused at `active-staging-baseline-mock-lima-ui-lock` (`3fab1e8`). This plan now serves as the bridge back to LIMA AI OS universal runtime contract planning.

This plan defines:

- which contract endpoints Sparkbot_shell may later call,
- what data is safe to receive from LIMA,
- and which capabilities stay forbidden until explicit runtime approval.

## What Sparkbot Shell May Eventually Ask LIMA For

All asks are contract-first and **preview-safe**:

- `runtime_state`: read-only readiness of installed runtime services.
- `candidate_preview`: preview candidates and staging envelopes for user-facing workflows.
- `task_intent_preview`: intent extraction and task summary previews (no scheduling/persistence).
- `model_agent_seat_preview`: proposed model stack and agent seating snapshots.
- `meeting_plan_preview`: Round Table candidate plan and participation snapshot.
- `context_preview`: file/memory/task context summaries for display.
- `guardian_posture_preview`: guardrail posture summary and safety labels.
- `robo_teaser_preview`: teaser-only robotics/IoT status and capability placeholders.
- `release_readiness_preview`: readiness checks and reason-codes for unavailable functionality.

## What LIMA May Eventually Return

LIMA may return:

- capability maps (`supported_capabilities`, `capabilities_version`),
- readiness flags (`lima_runtime_active`, `hardened_mode`, `connector_support`),
- non-authoritative preview payloads for UI consumption,
- safe preview artifacts (meeting plan, seat map, task preview, file/memory/context summaries),
- and validation reason text for unsupported/blocked actions.

## What Remains Forbidden in Sparkbot_shell

- No direct runtime execution.
- No provider/model calls.
- No connector read/write actions.
- No persistence writes.
- No memory writes.
- No scheduler behavior.
- No terminal/browser execution.
- No robotics/IoT control.
- No LIMA internal/runtime code in shell source.

## Why This Is Contract-First (Not Runtime-First)

1. Sparkbot_shell must remain a release-safe static demo now.
2. The shell should expose exactly what it can render from a contract, not hide how runtime was implemented.
3. Any runtime behavior belongs behind approved boundaries with explicit consent and security posture.
4. This avoids early lock-in to R&D internals and keeps public-safe preview artifacts clean.

## Mock Contract UI Display Status (Current Pass)

- `MockLimaContractPanel` was added as a static contract-readiness surface.
- No runtime endpoint is used.
- Contract examples are static fixtures only and render under advisory labels.
- Workstation and Command Center surfaces now include the mock contract preview to make the future contract lane discoverable.
- Current branch (`active-staging-baseline-mock-lima-ui-lock`) adds this pass only as static contract UI visibility, with no runtime boundary changes.
- Next work should move to LIMA-side universal contract definition, not additional Sparkbot Shell UI expansion.

## Current Wave 1 Connection

Wave 1 completed static UX layers (Workstation, Round Table, model seats, docs/info, and fixture surfaces).  
Mock LIMA contract planning is now complete as docs/fixtures in this baseline:

- define mock schema,
- define fixture payloads,
- define frontend readiness rules for missing/malformed contract data,
- keep runtime disabled by default and labels explicit.

## Contract Preview Concepts for This Stage

For this phase, supported preview concepts are:

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
- `lima_runtime_active: false`
- `humaninput_bridge_active: false`
- `sparkbot_wiring_active: false`
- `live_adapter_active: false`
- `robotics_allowed: false`
- `physical_world_allowed: false`

## Explicit Runtime Boundary

- `LIMA AI OS is not bundled` in this shell.
- `No LIMA runtime is called` from Sparkbot_shell source in this phase.
- `No execution`, `dispatch`, `persistence`, `provider`, `connector`, `approval-enforcement`,
  or `robotics` calls are present.
