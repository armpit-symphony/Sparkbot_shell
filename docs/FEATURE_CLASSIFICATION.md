# Feature Classification

Updated: 2026-05-24

Reference source: `armpit-symphony/Sparkbot` branch `public-release-final-cleanup-assessment` at `0f8d059fc5927e3466d269ca5479df4c56b3c06f`.

This document classifies features for `Sparkbot_shell` planning. It does not authorize source import by itself.

## KEEP_PUBLIC

These features belong in the public Sparkbot Shell MVP if they pass sanitization and QA:

- Workstation.
- Main Chat / DM.
- Round Table.
- Meeting Manager.
- Invite Wing model seats.
- Specialty Wing/custom agents.
- Local AI provider layer.
- Model stack / model selector.
- Unified memory/context interface.
- Meeting notes save/edit/recall.
- Task Guardian PC/server health checks.
- App/in-room delivery.
- Telegram/Discord/Slack/WhatsApp connector patterns where configured.
- Command Center AI Setup.
- Command Center Security profiles.
- Basic Guardian confirmations.
- Public package/download tooling.

## SIMPLIFY_PUBLIC

These features can be public, but only in a smaller, user-owned, fail-closed form:

- Connector private recall: keep identity/PIN gates and explicit setup; do not promise GREEN until live QA passes.
- External delivery: app-first default, opt-in external channels, setup warnings instead of fake sends.
- Terminal/browser capability: disabled by default and gated behind local operator controls.
- Vault/PIN concepts: expose as simple credential storage and step-up verification, not proprietary internals.
- Custom guardrails: keep Personal/Balanced/Locked/Custom blocker text first; typed advanced records later.
- Scheduler jobs: safe, low-frequency, read-only templates first; leader locking before multi-worker recommendations.
- GitHub tools: public-safe examples only; secrets and account access stay user-owned and gated.

## TEASER_ONLY

These can appear as preview/demo surfaces only:

- Robo Preview.
- Robotics/IoT preview.
- LIMA bridge concepts.

## MOVE_TO_LIMA_AI_OS

These are reusable runtime/platform concepts and should not be wired directly into Sparkbot Shell during public MVP extraction:

- Reusable runtime contracts.
- Universal scheduling/delivery/audit pattern.
- Generalized memory/runtime policy.
- Robot/IoT/humanoid runtime substrate.

## MOVE_TO_ARC_BOT

These belong to the proprietary business worker-bot track:

- Proprietary business worker bot shell.
- Office worker persona behavior.
- Guarded business workflows.

## MOVE_TO_LIMA_OFFICE

These belong to the proprietary office control-plane track:

- Business automation suite/control plane.
- Office task orchestration.
- Enterprise/customer workflow templates.

## MOVE_TO_LIMA_IT

These belong to the proprietary IT/security/service manager track:

- IT/security/service manager.
- Remediation workflows.
- Diagnostics/remediation handoff.

## PRIVATE_PROPRIETARY

These must not be imported into the public shell:

- Advanced Guardian Suite internals.
- Guardian Spine commercial internals.
- Paid service orchestration.
- Private Robo/LIMA bridge implementation.
- Private deployment paths.
- Client-specific automation.

## REMOVE_FOR_PUBLIC

These should be removed, excluded, or rewritten before public artifacts:

- Internal R&D notes.
- Raw private package artifacts.
- Private paths/domains/secrets.
- Tracked env/build junk.
- Dev-only template routes.

## NEEDS_REVIEW

These remain review gates before public claims or code import beyond planning:

- Live connector QA status.
- Discord shared-channel behavior.
- WhatsApp production hardening.
- Scheduler leadership/locking.
- Browser/live local AI QA.
