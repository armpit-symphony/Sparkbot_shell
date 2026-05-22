# Public Release Handoff

Updated: 2026-05-22

Reference source: `armpit-symphony/Sparkbot` branch `public-release-live-connector-qa` at `fe2a5ffc2bbbff7ef4fde9959d6b35206719f3e5`.

This handoff is for planning and classification in `Sparkbot_shell`. No Sparkbot R&D code is imported by this document.

## Public MVP Identity

Sparkbot Shell is the public open-source self-hosted AI workstation shell for local-first agent work. The main hook is Round Table meetings for your AI agents.

The public system model:

- Workstation = company / operating floor.
- Main Chat / DM = operator middle-person / command channel.
- Round Table = meeting room.
- Meeting Manager = meeting coordinator and secretary.
- Invite Wing model seats = bring-your-own model seats for Round Table and agents.
- Specialty Wing/custom agents = user-owned agent roles.
- Local AI providers = local or LAN model endpoints the user controls.
- Command Center AI Setup = model stack, local provider, and model-seat configuration.
- Command Center Security = public guardrail profiles and confirmation posture.
- Unified memory/context spine = shared company memory across public surfaces.
- Meeting notes save/edit/recall = Meeting Manager notes that can roll into shared memory.
- Task Guardian = scheduled work manager for useful, bounded automations.
- Connectors = operator communication channels.
- Robo = Robo Preview teaser only for public core.

## Current Public-Candidate Surfaces

| Surface | Current public status | Handoff note |
|---|---|---|
| Workstation | Public MVP candidate | Import only after app frame and navigation are clean. |
| Main Chat / DM | Public MVP candidate | Keep `/dm` as the command channel; avoid legacy debug routes. |
| Round Table | Public hero surface | Keep Meeting Manager default and per-seat model choice. |
| Meeting Manager | Public MVP candidate | Keep coordinator/secretary role; preserve manual notes and wrap-up/checkpoint flow. |
| Invite Wing model seats | Public MVP candidate | Metadata public; credentials backend/Vault-owned only. |
| Specialty Wing/custom agents | Public MVP candidate | Built-ins may stay locked; custom agents public. |
| Local AI providers | Public MVP candidate | Requires live Ollama plus OpenAI-compatible endpoint QA before GREEN. |
| Command Center AI Setup | Public MVP candidate | Import as setup surface after model contracts are mapped. |
| Command Center Security | Public MVP candidate | Keep Personal, Balanced, Locked, and Custom blocker text as user-owned guardrails. |
| Unified memory/context | Public MVP candidate | Expose adapter contract, not proprietary Guardian internals. |
| Meeting notes | Public MVP candidate | Save/edit/recall and memory rollup; browser/live QA still required. |
| Task Guardian health checks | Public MVP candidate | PC/server checks are read-only and app-first. |
| Task Guardian delivery preferences | Public MVP candidate | App default; external delivery opt-in and setup-gated. |
| Connectors | Public-safe patterns | Telegram/Discord/Slack/WhatsApp patterns are supported where configured, but live QA is UNKNOWN. |
| Robo Preview | Teaser only | Public stub/preview only; no live robotics/IoT control. |

## Current Caveats

- Live Telegram, Discord, Slack, and WhatsApp connector QA remains UNKNOWN because no safe test-only credentials/channels were configured.
- External private recall is code-gated, PIN/session-gated where required, and fail-closed, but not live-verified.
- SMS/text remains future/unsupported and must not be presented as operational.
- Scheduler leader locking remains future work for multi-worker installs. Public Docker/server defaults should stay single-worker until recurring jobs have a leader lock or singleton scheduler.
- `Sparkbot_shell` is still staging/planning until code import begins.
- The raw Sparkbot R&D repo remains source/reference, not the casual public install path.
- Sanitized bundles remain the public install path until the shell repo has approved imports and release artifacts.

## Source-Read Summary

Recent R&D public-readiness work stabilized these planning inputs:

- Unified memory/context spine across chat, meeting, connector, task, model-seat, and agent paths.
- Invite Wing model seats with backend/Vault-owned credentials.
- Local AI provider layer for Ollama, LM Studio, llama.cpp / llama-server, OpenAI-compatible local endpoints, and custom local endpoints.
- Round Table model-seat UI polish, including Seat 1 Meeting Manager default.
- Command Center model-seat editor and security profiles.
- Task Guardian PC/server health checks and operator-channel delivery preferences.
- Meeting notes save/edit and memory rollup.
- Connector identity linking, connector PIN verification, and fail-closed private recall.
- Robo Preview public stub/private gate.
- Public package/source-boundary cleanup and live connector QA documentation.

## Handoff Rule

Start with a layered import. Do not import everything at once. The recommended first import is Layer 1: clean app frame, global navigation, static shell, and public-safe contracts.
