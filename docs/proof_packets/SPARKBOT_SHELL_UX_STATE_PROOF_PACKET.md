# Sparkbot Shell UX-State Proof Packet

Date: 2026-06-13
Source repo: `armpit-symphony/Sparkbot_shell`
Branch: `sparkbot-shell-ux-state-proof-packet`
Requested by LIMA-AI-OS branch: `sparkbot-shell-ux-state-proof-request-gate`
LIMA request commit: `98d190f2080bc7458ed19a8c294869e7675a2c17`
Packet status: evidence-only, non-runtime

## 1) Current Sparkbot_shell UX-state status

Sparkbot Shell is a static Vite + React + TypeScript preview shell. It has visible local UI states, preview cards, setup notices, connector fail-closed copy, model-seat status badges, Round Table phase navigation, and mock LIMA contract examples.

It does not have a backend runtime, live model provider calls, persisted chat state, streaming assistant response state, real approval enforcement, connector sends, file/network/browser/device/robotics behavior, LIMA runtime wiring, or haptic implementation.

## 2) What is implemented today

Current source supports these evidence points:

| Area | Current source evidence | Proof value |
| --- | --- | --- |
| Chat input/output | `src/components/ChatShell.tsx` sends local user messages and immediate placeholder assistant replies in React component state. | Proves local `received` and completion-like placeholder response behavior. |
| Chat boundary copy | `ChatShell` states messages are not persisted, sent to a provider, saved to memory, or routed through connectors. | Proves no runtime claim in chat shell. |
| Model-seat blocked/setup states | `src/components/StatusBadge.tsx`, `src/components/SetupNotice.tsx`, and `src/data/demoShellState.ts` expose `configured`, `setup_needed`, `disabled`, and `unreachable` states. | Proves setup/blocked-style visibility for non-ready model seats. |
| Round Table phases | `src/components/RoundTableFlowShell.tsx` exposes local phases such as Launch, Framing, Synthesis, Assignments, Perspectives, Recommendation, and Artifact. | Proves plan/explanation and preview-ready flow structure. |
| Round Table saved preview | `RoundTableFlowShell` has `saved_preview` for local notes. | Proves completion-like local preview status, not runtime completion. |
| Connector fail-closed states | `src/components/ConnectorIdentityShell.tsx` and `src/data/demoConnectorState.ts` include blocked identity and private recall blocked states. | Proves blocked/fail-closed messaging at static shell level. |
| Task Guardian preview | `src/components/TaskGuardianPreview.tsx` renders read-only health report previews and local schedule-preview toggles. | Proves preview-only task/report state, not scheduler behavior. |
| Mock LIMA states | `src/data/mockLimaContracts.ts` defines `mockSafeActiveStates` as `preview_only`, `explain_plan`, `blocked`, and `deferred`. | Proves packet-facing status vocabulary exists in static contract fixtures. |
| Boundary docs | README and docs repeatedly state no provider/model calls, connector runtime, scheduler, persistence, or hardware/runtime behavior. | Proves the shell has a consistent no-runtime boundary. |

## 3) What is placeholder, mocked, missing, or future-only

| Capability | Current state |
| --- | --- |
| Live thinking/loading state | Missing as a real async runtime state. No streaming or model call is active. |
| Real approval-needed state | Docs/fixture-level only. There are approval posture labels, but no approval queue, PIN, GuardianDecision, or enforcement. |
| Real blocked enforcement | Missing. The shell renders blocked labels and fail-closed copy only. |
| Deferred runtime scheduling | Missing. Deferred means future-only or packet-only in this shell. |
| Preview-ready runtime contract | Fixture-only. Static previews are visible, but no runtime `CandidatePreview` producer exists. |
| Real completion/result state | Missing. Completion-like states are local placeholder responses or `saved_preview` notes only. |
| Fail-safe runtime error path | Missing. The shell has fail-closed connector copy, but no live runtime error path. |
| Haptic/tactile feedback | Missing. No haptic or vibration implementation was found in this repo. |
| Desktop/mobile-specific runtime behavior | Missing. The shell has static responsive UI and prior visual/mobile QA docs, but no platform-specific haptic or runtime response behavior. |

## 4) What can be proven from current source

Sparkbot_shell can prove:

- shell-owned local chat intake and immediate placeholder response rendering
- visible non-ready setup/disabled/unreachable model-seat states
- static blocked and deferred vocabulary in contract fixtures
- connector private recall fail-closed messaging
- Round Table local phase flow and local saved-preview notes
- Task Guardian preview/report rendering without scheduler behavior
- static `preview_only`, `explain_plan`, `blocked`, and `deferred` packet statuses
- no current haptic implementation
- no current LIMA runtime wiring
- no Sparkbot R&D code copy/import in this packet

## 5) What cannot be proven yet

Sparkbot_shell cannot prove:

- live answer streaming or live thinking state
- real provider/model response pacing
- real approval modal/inbox behavior
- real Guardian enforcement
- real LIMA `CandidatePreview` production
- real audit/spine persistence
- real connector sends or private recall
- real browser/file/network/device/robotics behavior
- real haptic/tactile feedback behavior
- exact Sparkbot parity

## 6) Sparkbot-style response feel alignment

Sparkbot is the preferred UX reference for:

- direct operator acknowledgement
- visible thinking/typing or progress state where runtime supports it
- clear approval wait states
- explicit blocked/deferred messaging
- completion/result feedback that does not overclaim
- short, practical recovery language on failure

Sparkbot_shell should preserve that feel where practical, but it must not claim exact parity until evidence exists. In this packet, Sparkbot_shell can only prove static product-shape alignment, not live runtime parity.

## 7) Required shell response state evaluation

| Required state | Current support | Evidence | Notes |
| --- | --- | --- | --- |
| `received` | Present | `ChatShell` accepts local draft text and appends a user message. | Local React state only. |
| `thinking` | Missing | No live loading/typing/model stream in Sparkbot_shell source. | Future runtime/UI proof needed. |
| `needs_approval` | Docs/fixture-level | Guardrail profiles, approval posture fields, and setup notices describe future approval needs. | No real approval enforcement or inbox. |
| `blocked` | Present as visible static state | Connector blocked state, disabled model seats, SetupNotice blocked severity, mock `active_state: blocked`. | Display only, not enforcement. |
| `explaining_plan` | Present as static flow | Round Table phase rail, planning cards, mock `active_state: explain_plan`. | Static plan/explain posture. |
| `preview_ready` | Present as static preview | Workstation cards, Task Guardian reports, Round Table artifact, mock `preview_only`. | No runtime `CandidatePreview` producer. |
| `running_not_allowed_yet` | Docs/fixture-level | Repeated boundary text: no scheduler, provider calls, connector sends, persistence, or hardware runtime. | Not a named component state. |
| `completed` | Present as local completion-like preview | Placeholder assistant replies and `saved_preview` notes. | Does not prove runtime task completion. |
| `deferred` | Present as static/future state | Mock `active_state: deferred`, connector/robo/task future-only copy. | Packet-only/future-only. |
| `failed_safe` | Present as static fail-closed messaging | Connector private recall blocked/fail-closed copy and blocked redaction states. | No live runtime error path. |

## 8) Required packet status evaluation

| Packet status | Current Sparkbot_shell evidence | Verdict |
| --- | --- | --- |
| `preview_only` | `mockSafeActiveStates`, `mockLimaContractExamples`, Workstation/Task Guardian preview copy. | Present and safe as static status. |
| `explain_plan` | `mockSafeActiveStates`, Round Table planning/phase flow. | Present and safe as static status. |
| `blocked` | `mockSafeActiveStates`, connector/model/release blocked examples. | Present and safe as static status. |
| `deferred` | `mockSafeActiveStates`, connector/robo/context future-only examples. | Present and safe as packet-only/static status. |

## 9) Kernel-status mappings referenced without runtime changes

This packet references the LIMA mapping guidance only:

- `proposed -> preview_only`
- `needs_review -> explain_plan`
- `blocked -> blocked`
- `deferred -> packet-only for now`

Sparkbot_shell does not implement or change any LIMA kernel status mapping.

## 10) Shell ownership

Sparkbot_shell owns:

- UI rendering
- shell response copy
- state badges and static state display
- future haptic/tactile behavior where platform support exists
- future desktop/mobile response feel, if explicitly implemented later

LIMA owns none of the current UI or haptic behavior in this shell.

## 11) Confirmations

- No LIMA runtime behavior was added.
- No LIMA runtime wiring was added.
- No haptic implementation was added.
- No Sparkbot code was copied.
- No Sparkbot import was added.
- No provider/model routing was added.
- No connector actions were added.
- No external sends were added.
- No browser/file/network/device/robotics behavior was added.
- No shell execution was added.
- No production runtime behavior was added.

## 12) Verdict

Sparkbot_shell is ready to provide UX-state proof to LIMA as evidence-only static proof.

It is not ready to prove live Sparkbot-style response parity, haptics, streaming, approval enforcement, Guardian authority, LIMA runtime integration, or production runtime behavior.
