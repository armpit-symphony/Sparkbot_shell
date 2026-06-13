# Sparkbot Reference UX Notes

## Purpose

This document records product UX notes from the existing private/R&D Sparkbot experience for Sparkbot_shell. It is reference-only and does not copy Sparkbot code.

## Reference position

Sparkbot is the preferred UX reference for Sparkbot_shell response feel.

Sparkbot_shell should preserve the feel where practical, while staying honest about what the static preview can prove.

## What "Sparkbot-style" means

In this lane, "Sparkbot-style" means:

- direct operator acknowledgement
- clear visible response state
- concise answer pacing
- practical next-step tone
- approval-pending clarity
- blocked/deferred messaging that explains why work cannot continue
- completion/result messaging that avoids overclaiming
- recovery language that keeps the operator in control

## Read-only reference findings

The local Sparkbot reference repo was available and inspected read-only.

Observed product/UX patterns:

- Sparkbot prompt guidance says every reply should add new information, a concrete next step, or meaningful action.
- Sparkbot prompt guidance says to ask one precise question when something is unclear.
- Sparkbot prompt guidance says not to claim a write action succeeded unless tool results confirm it.
- Sparkbot consumer readiness notes highlight stable streaming chat, persistent approvals, approval/deny surfaces, policy simulation, no silent external writes, and audit trail posture.
- Sparkbot frontend/backend references include streaming messages, typing indicators, `confirm_required` events, pending approvals, blocked queues, approval waiting queues, and dashboard approval actions.

## Haptic/tactile finding

No haptic or vibration implementation was found in the searched Sparkbot or Sparkbot_shell paths.

Therefore Sparkbot_shell must not claim haptics exist today. Future haptics remain shell/platform-owned if explicitly implemented later.

## Non-copying rule

Sparkbot_shell must not copy Sparkbot code.

Sparkbot_shell may use Sparkbot as a product/UX reference for response feel, state clarity, acknowledgement style, approval/blocked/deferred messaging, and completion/result feel.

## Parity rule

Do not claim exact Sparkbot parity unless proven by a future evidence packet.

The current Sparkbot_shell proof packet proves only static UX-state coverage and boundary discipline.
