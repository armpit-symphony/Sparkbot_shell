# Sparkbot Shell LIMA V1-G7 Integration Proof Packet

Date: 2026-06-14
Source repo: `armpit-symphony/Sparkbot_shell`
Proof branch: `v1-g7-sparkbot-shell-integration-proof-packet`
Source evidence base: `sparkbot-shell-thinking-state-proof-packet` at `36d697bf875a44dbafa41fc841ded86437917627`
LIMA request gate: `v1-g7-first-shell-integration-proof-request-gate` at `fa3ad4af48c7c2b6286c9d3b789f5a7a2e85fda2`
Proof gap: `V1-G7`
Packet status: static shell integration evidence only

## Summary

Sparkbot_shell can provide static/local proof that it can represent LIMA-style contract output and required shell response states without adding runtime integration.

This packet does not prove live LIMA runtime parity. It does not add backend runtime behavior, LIMA runtime wiring, provider/model calls, real `GuardianDecision` authority, approval enforcement, connector behavior, shell execution, browser/file/network/device/robotics behavior, haptic device behavior, audit persistence, or production readiness.

## Files Reviewed

- `docs/proof_packets/SPARKBOT_SHELL_UX_STATE_PROOF_PACKET.md`
- `docs/audits/SPARKBOT_SHELL_UX_STATE_PROOF_AUDIT.md`
- `docs/proof_packets/SPARKBOT_SHELL_THINKING_STATE_PROOF_PACKET.md`
- `docs/audits/SPARKBOT_SHELL_THINKING_STATE_PROOF_AUDIT.md`
- `docs/proof_packets/SPARKBOT_REFERENCE_UX_NOTES.md`
- `tests/fixtures/sparkbot_shell_ux_state_proof_packet.json`
- `tests/fixtures/sparkbot_shell_thinking_state_proof_packet.json`
- `src/types/shell.ts`
- `src/components/ChatShell.tsx`
- `src/components/RoundTableFlowShell.tsx`
- `src/components/ConnectorIdentityShell.tsx`
- `src/components/TaskGuardianPreview.tsx`
- `src/data/mockLimaContracts.ts`
- `src/data/demoConnectorState.ts`
- `src/data/demoShellState.ts`
- `src/styles.css`

`AGENTS.md` is not present in the local Sparkbot_shell checkout, so no repository-local agent instruction file was available for this proof branch.

## What Sparkbot_shell Proves

Sparkbot_shell proves the following as static/local shell evidence:

- Local chat submit path creates a user message with `shellState: "received"`.
- Local chat submit path creates a temporary assistant message with `shellState: "thinking"`.
- Local chat timer replaces that temporary message with `shellState: "completed"`.
- The transcript renders shell state pills and a visible thinking style.
- Static mock LIMA contract examples expose `preview_only`, `explain_plan`, `blocked`, and `deferred`.
- Local placeholder completion supplies `completed` packet-status evidence as shell preview only.
- Round Table static phases provide explanation/plan and artifact-preview posture.
- Connector and model setup surfaces display blocked/fail-closed/non-ready states.
- Task Guardian report cards render preview-only health/report states.
- Static contract fixtures keep execution, dispatch, persistence, model/provider calls, connector calls, adapter calls, driver calls, robotics, and physical-world behavior disabled.
- Haptics remain shell-owned future behavior; no device haptic implementation was added.

## What Sparkbot_shell Does Not Prove

Sparkbot_shell does not prove:

- live LIMA runtime output consumption
- live model streaming parity
- provider/model response pacing
- real approval queue, modal, PIN, token, or enforcement
- real `GuardianDecision` authority
- provider/model routing through Guardian and tool-pack scope
- live connector sends or private recall
- browser/file/network/device/robotics behavior
- shell command execution
- audit/spine persistence
- haptic device behavior
- production readiness
- V1 product readiness

## Required Shell Response State Coverage

| Required state | Category | Source or evidence | Boundary note |
| --- | --- | --- | --- |
| `received` | source-backed | `src/components/ChatShell.tsx` | Local React state only. |
| `thinking` | source-backed | `src/components/ChatShell.tsx`, `src/types/shell.ts`, `src/styles.css` | Local placeholder state only, not live model streaming. |
| `preview_ready` | source-backed static preview | `src/components/WorkstationShell.tsx`, `src/components/TaskGuardianPreview.tsx`, `src/components/RoundTableFlowShell.tsx`, `src/data/mockLimaContracts.ts` | No runtime `CandidatePreview` producer. |
| `blocked` | source-backed static display | `src/components/SetupNotice.tsx`, `src/components/StatusBadge.tsx`, `src/components/ConnectorIdentityShell.tsx`, `src/data/mockLimaContracts.ts` | Display/fail-closed copy only, not enforcement. |
| `needs_approval` | docs/fixture-only | `src/data/mockLimaContracts.ts`, `src/data/demoShellState.ts` | No real approval enforcement. |
| `completed` | source-backed local preview | `src/components/ChatShell.tsx`, `src/components/RoundTableFlowShell.tsx` | Placeholder completion only, not runtime task completion. |
| `failed_safe` | source-backed static messaging | `src/components/ConnectorIdentityShell.tsx`, `src/data/demoConnectorState.ts` | Fail-closed copy only, not live runtime failure recovery. |
| `deferred` | source-backed static display | `src/data/mockLimaContracts.ts`, `src/data/demoConnectorState.ts` | Packet/static future state only. |

Additional Sparkbot_shell-local state guidance also covers `explaining_plan` and `running_not_allowed_yet`, but they are not extra V1-G7 required response states.

## Kernel Status Mapping

Sparkbot_shell preserves LIMA mapping guidance without changing LIMA runtime behavior:

- `proposed -> preview_only`
- `needs_review -> explain_plan`
- `blocked -> blocked`
- `deferred -> packet-only for now`

Sparkbot_shell also evaluates `completed` as a local placeholder packet status. It does not prove runtime task completion.

## Haptics Ownership

- Shell owns haptics: yes.
- LIMA owns haptic device behavior: no.
- Haptic implementation added: no.
- Device vibration command added: no.
- Haptics proven today: no device behavior; static ownership boundary only.

Sparkbot_shell can treat future LIMA haptic intent metadata as shell-facing metadata, but actual tactile rendering and device feedback remain shell-owned.

## Approval, GuardianDecision, Provider/Model, And Audit Status

- Destructive edit/delete posture: must require operator approval or remain blocked before runtime.
- Real approval enforcement: missing.
- Real `GuardianDecision` authority: missing.
- Provider/model routing: static model-seat labels only; no runtime routing or provider calls.
- Audit/evidence lineage: static proof packet only; no durable audit persistence.
- Tool-pack scope: static/docs-only; no runtime tool catalog or dispatch.
- Connector/file/browser/network/device/robotics behavior: absent or static preview only.
- Raw natural language to tool execution: not allowed and not present.

## Boundary Confirmations

- LIMA runtime behavior added: no.
- LIMA runtime wiring added: no.
- LIMA runtime exports changed: no.
- Runtime export cleanup required: no.
- Runtime export cleanup approved: no.
- Final API freeze approved: no.
- Sparkbot code copied to LIMA: no.
- Sparkbot imported by LIMA: no.
- LIMA imported by shell runtime: no.
- Provider/model calls added: no.
- Connector sends added: no.
- Browser/file/network/device/robotics behavior added: no.
- Shell execution added: no.
- Haptic device behavior added: no.
- Production readiness claimed: no.
- V1 product readiness claimed: no.

## Validation Reported By This Branch

Validation is recorded in `tests/fixtures/sparkbot_shell_lima_v1_g7_integration_proof_packet.json`:

- `cmd /c "python3 --version || python --version"`
  - Passed: Python 3.12.10, with known trailing Windows environment message.
- `cmd /c "python3 -m pytest -q || python -m pytest -q"`
  - Passed: 7 passed in 0.27s, with known trailing Windows environment message.
- `npm run build`
  - Passed: `tsc --noEmit && vite build`, Vite built in 500ms.
- `git diff --check`
  - Passed: clean.

## Verdict

Sparkbot_shell is acceptable as static V1-G7 shell integration evidence.

Sparkbot_shell is not acceptable as live runtime parity evidence, production readiness evidence, LIMA runtime wiring evidence, final API freeze evidence, or runtime export cleanup evidence.

## Recommended Next Step

Submit this V1-G7 packet to LIMA for a docs/tests/fixtures-only intake audit. LIMA should accept the packet as static shell integration evidence only and should keep V1-G7 open until `Sparkbot` and `Arc-Bot-shell` provide matching packets and LIMA completes separate intake audits for all three shells.
