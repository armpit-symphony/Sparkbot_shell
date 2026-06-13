# Sparkbot Shell LIMA Consumer Packet Audit

Date: 2026-06-12  
Scope: `proof-sparkbot-shell-lima-consumer-packet`  
Reviewer intent: proof-only packet for LIMA Runtime/API freeze readiness

## 1) Is Sparkbot_shell ready to consume LIMA Runtime today?

**No.** Sparkbot Shell is not ready for true runtime consumption yet.

It is currently a static frontend preview that can describe contracts but does not expose a trusted runtime boundary, cannot dispatch model/connector actions, and cannot emit persisted `Audit`/`GuardianDecision` records.

## 2) What exactly is missing

- No ConsumerRequest intake/authorization service in shell.
- No `TaskIntent`/`TypedIntentEnvelope` validation or admission layer.
- No contract-safe `CandidatePreview -> RuntimeStateSnapshot` runtime transform service.
- No runtime state store, scheduler, queue, or worker.
- No provider/client adapter for OpenAI/Anthropic/xAI/OpenAI-compatible/local runtimes.
- No connector runtime (no sessions, no credentialed targets, no deliveries).
- No memory/context retrieval engine; no memory writeback.
- No persistent `audit_storage_written` or `GuardianDecision` persistence.
- No runtime-enforced protection for secrets, private recall, tool calls, or dispatch actions.

## 3) What data shape can Sparkbot_shell provide safely right now

From static fixtures and route state, shell can provide the following safe, non-authoritative shape:

- `ShellState` snapshots (`src/data/demoShellState.ts`) for seats, tasks, health templates, and connectors.
- `ContextEvent[]` and `ContextRetrievalPreview` (`src/data/demoContextState.ts` + `src/types/context.ts`).
- `mockLimaContracts` candidate examples (`src/data/mockLimaContracts.ts`) for preview-safe contract envelopes.
- Route + surface intent maps from `src/App.tsx`.

These can be treated as `consumer_preview` inputs only until LIMA owns runtime mediation.

## 4) What runtime boundary should LIMA expose first for Sparkbot?

LIMA should initially expose only read-only and consentless observation boundaries needed for safe migration:

1. **Contract intake boundary**
   - verify `ConsumerRequest` and route-level identity metadata.
   - return schema-validation diagnostics.
2. **Intent projection boundary**
   - convert accepted requests to `TypedIntentEnvelope` or `TaskIntent`.
   - emit `CandidatePreview` with allowed states only:
     - `preview_only`, `explain_plan`, `blocked`, `deferred`.
3. **Runtime state boundary**
   - produce `RuntimeStateSnapshot` (no secret material).
   - include boundary flags: `runtime_active`, `execution_allowed`, `persistence_allowed`, etc.
4. **Approval boundary**
   - surface `GuardianDecision` as explicit runtime-owned object only, never shell-owned.
5. **Action boundary (later)**
   - only after approval and mapping gates are satisfied should dispatch/tool paths become visible.

## 5) What should remain shell-owned vs LIMA-owned

### Shell-owned (keep in frontend)

- Navigation, route framing, placeholder forms, and UI copy.
- Fixture rendering and local preview toggles.
- Non-authoritative status badges and static boundary text.
- Route-to-surface mapping documentation.

### LIMA-owned (runtime truth)

- Request validation and identity/policy admission.
- Intent translation and state mutation.
- Provider/model execution, connector actions, memory writes/reads, audit creation.
- `GuardianDecision`, `Audit` persistence, and immutable outcome records.
- Any side-effecting tool/dispatch/driver actions.
- Recovery and error boundaries for real runtime failures.

## 6) Top blockers before Sparkbot-first integration

1. No runtime adapter surface for model/provider/connector execution.
2. No runtime state store or contract execution engine in this repo.
3. No approval/evidence enforcement pipeline (`GuardianDecision` + audit persistence absent).
4. No explicit LIMA endpoint contract for shell to send/receive runtime envelopes.
5. No connector identity/verification flow that can satisfy private recall requirements.
6. Memory/context redaction and publishing policy is documented but non-enforced.

## 7) Minimum parity tests LIMA must eventually require

Before declaring Sparkbot as the first real LIMA consumer, these tests should be mandatory:

1. **Contract boundary smoke**
   - For each shell route, validated `ConsumerRequest` + `TaskIntent`/`TypedIntentEnvelope` can be generated and sent.
   - Each request receives non-error `CandidatePreview`.
2. **State transition safety**
   - Only allowed mock-safe active states pass in preview mode:
     `preview_only`, `explain_plan`, `blocked`, `deferred`.
   - Any runtime-side action request defaults to `blocked/deferred` unless explicitly approved.
3. **Invariant enforcement**
   - `runtime_active=false`, `execution_allowed=false`, `dispatch_allowed=false`, `persistence_allowed=false`, `connector_calls_allowed=false`,
     `model_provider_calls_allowed=false`, `audit_storage_written=false` in shell fallback/preview mode.
4. **Guardian gating**
   - Any state-changing request requires a valid `GuardianDecision`.
   - Unauthorized actions are never dispatched.
5. **Connector safety**
   - Private recall remains fail-closed until identity + policy + session gates are proven.
6. **Memory/context contract**
   - Redaction labels must be preserved and enforced in RuntimeStateSnapshot before any memory write.
7. **Human input integrity**
   - Inputs from chat, seat config, round-table edit, and guardrail profile edits are traceable as preview envelopes and cannot directly mutate runtime.
8. **No secret regression**
   - No credential/secret-like values accepted in shell-owned surfaces.
9. **No-runtime regression guard**
   - CI/static checks ensure no `fetch`/localStorage/sessionStorage/cookie/process env/terminal/browser tool usage appears in shell runtime layer unless explicitly moved behind runtime adapter.

## 8) Evidence already present in repository

- `README.md` status/policy statements.
- `docs/LIMA_CONTRACT_LAYER_PLAN.md`
- `docs/LIMA_CONTRACT_STOP_GATES.md`
- `docs/LIMA_CONTRACT_MOCK_SCHEMA.md`
- `src/components/MockLimaContractPanel.tsx`
- `src/data/mockLimaContracts.ts`
- `src/data/demoContextState.ts`
- `src/data/demoShellState.ts`
- `src/data/demoConnectorState.ts`
- `src/components/ModelConfigShell.tsx`
- `src/components/ChatShell.tsx`
- `src/components/TaskGuardianPreview.tsx`
- `src/components/ConnectorIdentityShell.tsx`

## 9) Packet conclusion

Sparkbot Shell is a useful **consumer packet evidence source** with excellent static coverage and contract labeling discipline.
It is **not yet** a runtime consumer.  
The next step is controlled runtime contract mediation via LIMA + Guardian before any action dispatch can be enabled.

