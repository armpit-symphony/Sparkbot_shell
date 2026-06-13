# Sparkbot Shell UX-State Proof Audit

Date: 2026-06-13
Branch: `sparkbot-shell-ux-state-proof-packet`
Audit posture: evidence-only

## 1) Is Sparkbot_shell ready to provide UX-state proof to LIMA?

Yes, with a strict limitation: Sparkbot_shell is ready to provide **static UX-state evidence** only.

It can prove local shell rendering, placeholder chat behavior, static preview statuses, blocked/deferred labels, connector fail-closed copy, Round Table local phase flow, and boundary discipline. It cannot prove live runtime response behavior.

## 2) Required states present

| State | Present? | Evidence |
| --- | --- | --- |
| `received` | Yes | `ChatShell` accepts a local draft and appends user message state. |
| `blocked` | Yes | Connector blocked/private recall blocked states, disabled model seat, setup notice blocked severity, mock `blocked` active state. |
| `explaining_plan` | Yes | Round Table phase flow and `explain_plan` mock contract state. |
| `preview_ready` | Yes | Static preview cards, Task Guardian previews, Round Table artifact preview, `preview_only` mock state. |
| `completed` | Yes, local preview only | Placeholder assistant reply and Round Table `saved_preview`. |
| `deferred` | Yes, static/future only | Mock `deferred` state and deferred connector/robo/runtime copy. |
| `failed_safe` | Yes, static messaging only | Connector private recall fail-closed copy and blocked/redacted context. |

## 3) Required states missing

| State | Missing reason |
| --- | --- |
| `thinking` | No live loading, typing, streaming, or async model response state is implemented in Sparkbot_shell. |

## 4) Required states only docs/fixture-level

| State | Reason |
| --- | --- |
| `needs_approval` | Approval posture appears in fixtures and copy, but no real approval queue/modal/enforcement exists. |
| `running_not_allowed_yet` | Boundary copy states that runtime actions are not allowed, but this is not a named shell state. |
| `failed_safe` | Fail-closed connector copy exists, but no live runtime failure path exists. |

## 5) Haptics ownership

Haptics are shell-owned and not LIMA-owned.

No haptic/tactile implementation was found in Sparkbot_shell or in the searched Sparkbot reference paths. This packet therefore treats haptics as a future shell-owned product direction only.

## 6) Unsafe runtime claims

No unsafe runtime claim was added by this packet.

The current shell continues to state:

- no provider/model calls
- no connector runtime or sends
- no scheduler
- no persistence
- no backend runtime
- no hardware control
- no LIMA runtime integration

## 7) LIMA runtime integration implication

Sparkbot_shell does not imply LIMA runtime integration in this packet.

The packet references LIMA vocabulary and mapping guidance, but only as docs/fixture-level evidence.

## 8) Sparkbot copy/import check

- Sparkbot code copied: no.
- Sparkbot import added: no.
- Sparkbot reference used: read-only product/UX reference only.

## 9) LIMA copy/import check

- LIMA code copied: no.
- LIMA import added: no.
- LIMA runtime dependency added: no.

## 10) Provider/model/tool/file/network/browser/device/robotics boundary

The packet keeps the following blocked:

- provider/model routing
- tool calls
- file mutation
- network/browser action
- connector sends
- device control
- robotics/physical-world behavior
- shell execution
- audit persistence
- Guardian authority
- approval enforcement

## 11) Evidence LIMA should accept

LIMA should accept:

- static state coverage matrix
- packet status coverage (`preview_only`, `explain_plan`, `blocked`, `deferred`)
- current source references for local placeholder chat, Round Table local phases, connector fail-closed copy, and mock LIMA states
- explicit no-runtime/no-wiring/haptics-not-implemented boundary
- fixture-backed static test evidence

## 12) Evidence LIMA should reject

LIMA should reject any claim that this packet proves:

- live Sparkbot parity
- haptic implementation
- streaming/thinking runtime behavior
- Guardian enforcement
- approval enforcement
- LIMA runtime integration
- production readiness
- real provider/model/tool/connector/browser/file/network/device/robotics behavior

## 13) Sparkbot reference audit note

The local Sparkbot reference repo was available at `C:\Users\limap\Sparkbot` and was inspected read-only.

Reference evidence found:

- Sparkbot system prompt emphasizes direct operator acknowledgement, concrete next steps, truth/confidence, and not claiming writes unless tool results confirm them.
- Sparkbot consumer readiness docs identify stable streaming chat, persistent approvals, policy simulator, no silent external writes, and approval-first self-improvement.
- Sparkbot frontend/backend references include typing events, streaming messages, `confirm_required` events, approval queues, blocked queues, and dashboard approvals.
- No haptic/vibration implementation was found in searched reference paths.

## 14) Next smallest safe Sparkbot_shell step

Add a future docs/tests/fixtures-only UX-state fixture expansion that includes example copy for each state (`received`, `thinking`, `needs_approval`, `blocked`, `explaining_plan`, `preview_ready`, `running_not_allowed_yet`, `completed`, `deferred`, `failed_safe`) without adding runtime behavior.
