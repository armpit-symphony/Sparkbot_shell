# Sparkbot Shell LIMA Consumer Proof Packet

Date: 2026-06-12  
Source repo: `armpit-symphony/Sparkbot_shell`  
Branch: `proof-sparkbot-shell-lima-consumer-packet`  
Consumer packet status: Evidence-only (non-executable)  

## 1) Current Sparkbot_shell status

Sparkbot Shell in this branch is a static, frontend-only shell preview. It is intentionally not wired to LIMA runtime, provider APIs, connector backends, file systems, schedulers, or any execution layer.

- Repo type: Vite + React + TypeScript SPA  
- Runtime posture: static demo / mock contract surfaces only  
- Version: `0.8.0-layer8-preview`  
- Active release markers in docs: `GREEN_CANDIDATE`, `NOT_RELEASED`, `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`  
- Branch lineage and current checkpointing docs remain in `docs/` for audit; public-facing boundaries remain explicit in UI copy and docs.

## 2) What works today

### Surface layer coverage

- **Route/navigation layer**: `src/App.tsx` maps shell routes (`#/workstation`, `#/chat`, `#/roundtable`, `#/command-center`, `#/task-guardian`, `#/connectors`, `#/robo-preview`, `#/docs`).  
- **Workstation shell**: `src/components/WorkstationShell.tsx` renders floor layout, section cards, model desk summary, active seats/agents, and fixture ties.  
- **Chat shell**: `src/components/ChatShell.tsx` supports local placeholder message send/edit.
- **Round Table shell**: `src/components/RoundTableFlowShell.tsx` supports phase transitions, seat assignment, notes preview, and local-only artifact drafting.  
- **Command center / model stack**: `src/components/ModelConfigShell.tsx`, `ModelSeatEditor`, `LocalAiSetupPanel`, `InviteWingPanel`, `SpecialtyWingPanel` for seat/task shape configuration.
- **Task Guardian shell**: `src/components/TaskGuardianPreview.tsx` + `HealthReportPreview.tsx` for read-only health report cards and delivery preferences.
- **Connector/PIN shell**: `src/components/ConnectorIdentityShell.tsx` and `demoConnectorState.ts` for identity gate, recall policy, PIN-preview, fail-closed behavior.
- **Memory/context preview shell**: `src/components/MemoryContextPreview.tsx` with contract-like event types in `src/types/context.ts`.
- **Mock LIMA UI**: `src/components/MockLimaContractPanel.tsx` + `src/data/mockLimaContracts.ts` display contract examples with safe runtime-posture flags.
- **LIMA readiness text**: `src/components/LimaReadyLayerPanel.tsx`.
- **Docs command center**: `src/pages/DocsPage.tsx` and `src/pages/PlaceholderPage.tsx` (surface-level contract-state and boundary copy).
- **Static fixture data**: `src/data/demoShellState.ts`, `src/data/demoContextState.ts`, `src/data/demoTaskGuardianState.ts`, `src/data/demoConnectorState.ts`, `src/data/demoFixtureContent.ts`.

## 3) What is mocked / placeholder / incomplete / missing

### Mocked or placeholder

- All model/provider/runtime behavior is static fixture state:
  - no live model calls in `ModelSeatEditor`, `LocalAiSetupPanel`, `ChatShell`
  - no provider health probes
  - no credential validation or vault usage
- LIMA examples are mock examples only, non-authoritative:
  - `src/components/MockLimaContractPanel.tsx`
  - `src/data/mockLimaContracts.ts`
- Round Table execution, persistence, and private chat/connector behavior are placeholders:
  - room phases run in local component state only
  - all "runtime" fields are mocked labels (`setup_needed`, `deferred`, `blocked`, etc.)
- Connector behavior is gate preview only:
  - no identity checks, no webhook/sessions, no PIN verification flow, no recall delivery.

### Incomplete or missing for runtime

- No ConsumerRequest intake endpoint in-app.
- No `TaskIntent`/`TypedIntentEnvelope` ingestion pipeline.
- No `CandidatePreview` publication API or persistence.
- No `RuntimeStateSnapshot` generator from live runtime.
- No `GuardianDecision` creation.
- No tool-call broker (no shell execution adapter/tool adapter).
- No memory/context writeback or query service.
- No connector runtime, network dispatch, queueing, scheduler, telemetry, or file mutation service.

## 4) Human input surfaces (future feed into LIMA)

The following operators can currently provide bounded input in UI and can become the first batch of LIMA `human_input` objects:

- **Chat command/composition input** in `ChatShell` (local message draft + selected seat).
- **Workstation + routing selectors** in `WorkstationShell` / `ModelConfigShell`:
  - seat selection/state updates,
  - seat labels/model IDs/provider/runtime labels,
  - roundtable phase/notes edits,
  - guardrail profile selection.
- **Task Guardian controls** in `TaskGuardianPreview`:
  - template schedule toggle,
  - delivery preference read/update placeholders.
- **Connector policy selectors** in `ConnectorIdentityShell` + `demoConnectorGateSteps`.
- **Specialty/agent assignments** in `SpecialtyWingPanel`.
- **Round Table artifacts** via notes editor and assignment/response fields in `RoundTableFlowShell`.

All inputs are currently in-browser preview state only and must be treated as non-authoritative until LIMA mediation exists.

## 5) Chat / Workstation / Round Table / model-seat surfaces

### Chat surface

- Present: thread composer, placeholder assistant reply generation, model seat selection, source-label preview.
- Source: `src/components/ChatShell.tsx`
- Limitation: message text is local-only and not persisted; there is no model provider integration.

### Workstation surface

- Present: desk cards, Round Table launch links, model stack desks, fixture summary, memory context summary cards.
- Source: `src/components/WorkstationShell.tsx`.
- Limitation: no scheduler/work queues, no backend write path, no dispatch.

### Round Table surface

- Present: mission setup, seat selection, phases, assignments, wrap-up, meeting artifact draft preview.
- Source: `src/components/RoundTableFlowShell.tsx`.
- Limitation: no room API, no SSE/websocket, no model tool execution, no persistence.

### Model-seat surface

- Present: seat cards, detailed editor, local AI runtime selector, routing visibility flags, Invite Wing and Specialty mappings.
- Source: `src/components/ModelConfigShell.tsx`, `src/components/ModelSeatEditor.tsx`, `src/components/LocalAiSetupPanel.tsx`, `src/components/InviteWingPanel.tsx`, `src/components/SpecialtyWingPanel.tsx`.
- Limitation: no credential capture, no provider test calls, no dispatch routing engine.

## 6) Memory, note, audit, event, and history surfaces

- Memory/context events are currently fixture-driven:
  - Types in `src/types/context.ts` (`ContextEvent`, `ContextSensitivity`, `ContextRetrievalPreview`, `MeetingNoteContract`).
  - Data in `src/data/demoContextState.ts`.
- Note flow is preview-only:
  - meeting note edit state in `RoundTableFlowShell` (local note draft and `saved_preview` status).
  - no writeback into real memory or audit logs.
- Event/event history is present as preview cards:
 - `ContextEvent` list and filtered views in `MemoryContextPreview.tsx`.
- Audit/event stream in runtime sense is absent. No `audit_storage_written` or signed audit envelope exists in shell logic.

## 7) Guardian / approval UX surfaces

- Surface-only posture labels and profile options:
  - `GuardrailProfileShell`, `SetupNotice`, `ModelConfigShell` status panels.
  - `mockLimaContracts` approval posture descriptors (`preview_only`, `approval_required`, `blocked`).
- No enforcement engine is active:
  - no `GuardianDecision` creation,
  - no runtime blocks,
  - no confirmation execution flow.
- Boundary text explicitly states real approval state is not owned here.

## 8) Provider / model routing surfaces

- Provider selection and seat-level metadata are editable as local placeholders:
  - provider kind/ID/base URL/routing visibility flags in seat shell.
- Routing is descriptive only; no runtime selection, no endpoint call orchestration, no failover/mapping graph.
- There is no route-level call trace, retry policy, cost policy, safety policy enforcement, or tool-call chain at runtime.

## 9) Tool-call or action surfaces

Current action surfaces are **UI form toggles / state updates** only:

- Toggle, input, and dropdown changes on seat cards and configuration surfaces.
- "Save local preview" actions only.
- No file writes, no process calls, no browser automation, no network calls, no queue/worker actions.

## 10) Protected categories that must remain Guardian-gated

These categories must continue to be blocked or deferred until LIMA + Guardian are integrated:

- External sends (connector messages / reminders / webhooks).
- Provider/model execution and completions.
- Connector identity verification sessions and private recall.
- Memory/context persistence and memory rollup publication.
- Tool and shell-command-like actions.
- File upload/download mutation and local artifact persistence.
- Scheduler, worker dispatch, and runtime task execution.
- Robotics/IoT/hardware command paths.
- Secret handling (API keys, tokens, webhook secrets, credentials).
- Audit trail creation/write.

## 11) Current routes / components that can map into LIMA contracts

- `#/workstation` -> `WorkstationShell`: operating floor status, fixtures, desk mapping, and contract posture display.
- `#/chat` -> `ChatShell`: operator command channel + retrieval-context preview + session state.
- `#/roundtable` -> `RoundTableFlowShell`: structured multi-agent meeting intent and recommendation workflow.
- `#/command-center` -> `ModelConfigShell`: model-seat + guardrail setup envelope.
- `#/task-guardian` -> `TaskGuardianPreview` + `HealthReportPreview`: planned task templates, delivery preferences, report surface.
- `#/connectors` -> `ConnectorIdentityShell`: identity/PIN/fail-closed gate model.
- `#/docs` -> `DocsPage`: service-level evidence list and explicit boundary contract.
- `#/robo-preview` -> `PlaceholderPage`/route intent; robotics currently teaser-only.

There is no backend service folder in this shell; runtime contract mapping would be a service-injection boundary around these components.

## 12) Proposed future mapping to LIMA vocabulary

Allowed mock-safe active states used in this shell (per docs and fixtures):  
`preview_only`, `explain_plan`, `blocked`, `deferred`.

For LIMA candidate shaping, every proposal below includes `embodiment_profile`.

### A. Workstation floor state

```json
{
  "consumer_name": "Sparkbot Shell Workstation",
  "consumer_request": { "type": "ConsumerRequest", "request_type": "workstation_state_read" },
  "intent": { "type": "TypedIntentEnvelope" },
  "candidate": {
    "type": "CandidatePreview",
    "active_state": "preview_only",
    "embodiment_profile": {
      "embodiment_id": "sparkbot-text-only-workstation",
      "embodiment_type": "text_only",
      "physical_world_target": false,
      "emergency_stop_vocabulary_only": true
    },
    "payload": "mapped from ShellState workstations + fixture summaries"
  },
  "runtime_state_snapshot": "static fixture-derived desk/channels/room linkage snapshot"
}
```

### B. Chat command channel

```json
{
  "intent": { "type": "TaskIntent", "task_type": "operator_message_preview" },
  "candidate": {
    "active_state": "explain_plan",
    "embodiment_profile": {
      "embodiment_id": "sparkbot-text-only-chat",
      "embodiment_type": "text_only",
      "physical_world_target": false,
      "emergency_stop_vocabulary_only": true
    }
  }
}
```

### C. Round Table meeting planning

```json
{
  "consumer_request": { "type": "ConsumerRequest", "request_type": "round_table_plan" },
  "intent": { "type": "TaskIntent" },
  "candidate": {
    "active_state": "explain_plan",
    "embodiment_profile": {
      "embodiment_id": "sparkbot-text-only-roundtable",
      "embodiment_type": "text_only",
      "physical_world_target": false,
      "emergency_stop_vocabulary_only": true
    },
    "payload": "seat setup, phase progression, assignment, wrap-up draft intent envelope"
  }
}
```

### D. Model seat + provider profile setup

```json
{
  "intent": { "type": "TypedIntentEnvelope", "task_type": "seat_configuration_preview" },
  "candidate": {
    "active_state": "blocked",
    "embodiment_profile": {
      "embodiment_id": "sparkbot-text-only-seats",
      "embodiment_type": "text_only",
      "physical_world_target": false,
      "emergency_stop_vocabulary_only": true
    },
    "payload": "seat metadata + routing labels + setup messages"
  }
}
```

### E. Memory/context adapter surface

```json
{
  "intent": { "type": "TaskIntent", "task_type": "context_preview" },
  "candidate": {
    "active_state": "deferred",
    "embodiment_profile": {
      "embodiment_id": "sparkbot-text-only-memory-context",
      "embodiment_type": "text_only",
      "physical_world_target": false,
      "emergency_stop_vocabulary_only": true
    },
    "payload": "ContextEvent previews, sensitivity labels, redaction markers"
  }
}
```

### F. Task Guardian / report preview

```json
{
  "intent": { "type": "TaskIntent", "task_type": "task_guardian_preview" },
  "candidate": {
    "active_state": "preview_only",
    "embodiment_profile": {
      "embodiment_id": "sparkbot-text-only-task-guardian",
      "embodiment_type": "text_only",
      "physical_world_target": false,
      "emergency_stop_vocabulary_only": true
    },
    "payload": "pc/server template + delivery preview + deferred connector caveats"
  }
}
```

### G. Connector recall + identity posture

```json
{
  "intent": { "type": "TypedIntentEnvelope", "task_type": "connector_gate_preview" },
  "candidate": {
    "active_state": "deferred",
    "embodiment_profile": {
      "embodiment_id": "sparkbot-text-only-connector-gates",
      "embodiment_type": "text_only",
      "physical_world_target": false,
      "emergency_stop_vocabulary_only": true
    },
    "payload": "identity_status + recall_policy + pin_session preview"
  }
}
```

### H. Guardian posture surface

```json
{
  "intent": { "type": "TaskIntent", "task_type": "guardian_posture_preview" },
  "candidate": {
    "active_state": "preview_only",
    "embodiment_profile": {
      "embodiment_id": "sparkbot-text-only-guardian-posture",
      "embodiment_type": "text_only",
      "physical_world_target": false,
      "emergency_stop_vocabulary_only": true
    },
    "payload": "profile + custom blocker text + posture labels"
  }
}
```

### I. Robo/embodiment future control

```json
{
  "intent": { "type": "TypedIntentEnvelope", "task_type": "robo_posture_preview" },
  "candidate": {
    "active_state": "deferred",
    "embodiment_profile": {
      "embodiment_id": "sparkbot-robotics-deferred",
      "embodiment_type": "robotics_deferred",
      "physical_world_target": false,
      "emergency_stop_vocabulary_only": true
    },
    "payload": "no hardware control teaser + safety-only envelope"
  }
}
```

## 13) Required status annotations for blocked/future-only actions

Any action that implies runtime now is mapped with one of these safe statuses:

- **blocked**: credentials/action is structurally present but execution path missing by design (`provider calls`, private recall, external dispatch).
- **deferred**: function is promised in future contracts only (`connectors`, `task execution`, memory persistence).
- **explain_plan**: route/intent shape is present and visible but not executable (`Round Table`, chat context).
- **preview_only**: static-only demo posture (`workstation state`, `health report shell`, guardrail posture).

## 14) Verdict for the requested status categories

- `execution_requirements` and all side-effecting calls: **blocked / deferred only** in this shell.
- LIMA contract exposure: can be generated from fixture state now, but requires mediation for any runtime effect.
