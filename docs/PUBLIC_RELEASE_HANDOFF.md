# Sparkbot Public Release Handoff

## Product Identity

Sparkbot Public is an open-source self-hosted AI workstation shell for local-first agent work, model routing, and multi-agent Round Table meetings.

Main hook: Round Table meetings for your AI agents.

Sparkbot Public is the community/hobbyist product. It should feel installable, understandable, extensible, and exciting for people who want local control instead of hosted SaaS agents. It is not the full LIMA AI OS runtime, Arc Bot, LIMA Office, LIMA IT, or a public robotics control system.

## Target User

- Hobbyists running local or bring-your-own AI models.
- Local AI builders and model tinkerers.
- Agent experimenters who want multiple specialist seats in one workspace.
- Self-hosters who prefer desktop/server ownership.
- Open-source automation enthusiasts.
- Users who want visible controls, confirmations, and local-first data posture.

## Public MVP

- Chat and files.
- Workstation shell.
- Round Table MVP with manager-led multi-agent meetings.
- Basic model stack and model selection.
- Invite Wing / bring-your-own model seats.
- Basic agents and editable custom agents.
- Basic memory with inspect/correct/delete direction.
- Basic tasks and reminders.
- Basic Guardian confirmations and safe defaults.
- Local desktop/server install path.
- Setup and Controls / Command Center UX.
- Robo tab as teaser/demo only.

## Hero Differentiator

Round Table is the product hero: a user can bring multiple AI agents and model seats into one meeting, ask for a problem to be worked through, get first-pass ideas, have Seat 1 / Meeting Manager assign work, and receive a consolidated outcome.

## Public / Private Boundary

Public Sparkbot must stay focused on the workstation shell:

- Local-first chat and workspace.
- Model routing and model seats.
- Multi-agent Round Table meetings.
- Basic user-owned tools and guarded confirmations.
- Basic memory, tasks, reminders, files, and setup.
- Public-safe docs, demos, and install paths.

Private systems remain separate:

- LIMA AI OS: universal reasoning/runtime OS for models, agents, automation, robots, drones, humanoids, and IoT.
- Arc Bot: proprietary guarded business worker-bot shell.
- LIMA Office: proprietary business AI automation suite / local office control plane.
- LIMA IT: proprietary IT/security/service manager over LIMA Office.
- Robo/IoT full control: paid/proprietary advanced LIMA system, not public Sparkbot core.

## What Stays Public

- Workstation navigation and shell.
- Chat, files, uploads, exports, and basic knowledge workflows.
- Round Table meeting UX and public-safe meeting persistence.
- Basic model stack with cloud, subscription, and local model setup.
- Invite Wing model seats with credentials stored backend-side.
- Basic agents and custom agents with non-secret configuration.
- Basic memory and shared meeting outcomes.
- Basic tasks/reminders and read-only health-check style workflows.
- Basic Guardian confirmations, clear warnings, and user-owned profiles.
- Public docs, quickstart, install, screenshots, and demos.

## Removed, Stubbed, Or Teaser-Only

- Robo tab: teaser/demo only, no real robot/drone/humanoid/IoT control.
- LIMA bridge concepts: future/private upgrade path only.
- Shell execution, browser automation, live terminal, and code execution: simplify and guard for public hobbyist use; do not expose hidden autonomy.
- Connector writes: guarded and opt-in only.
- Advanced Guardian dashboards and internals: summarized as simple public safety controls.
- Command Center advanced operator panels: simplify to setup, controls, security profile, model seats, and public health/status.

## Moves To Proprietary Systems

- Advanced runtime orchestration moves to LIMA AI OS.
- Business worker-bot shell behavior moves to Arc Bot.
- Business automation suite and office control plane move to LIMA Office.
- IT/security/service management moves to LIMA IT.
- Full robotics/IoT natural-language control, real hardware adapters, and runtime bridges move to paid/proprietary LIMA systems.
- Advanced Guardian Suite internals, commercial policy engines, and proprietary audit/control planes remain private.

## Requires Sanitization

- Private paths, domains, server hostnames, IP addresses, and deployment runbooks.
- Secrets, tokens, passwords, passphrases, API keys, cookies, and Vault contents.
- Internal R&D notes, historical release notes, and client-specific examples.
- LIMA/Arc/Office/IT references that imply public runtime coupling.
- Real robotics/IoT routes, bridge source, manifests, and operational docs.
- Paid service templates and commercial orchestration flows.
- Built-in agent prompts that mention internal business lines or private projects.
- Package metadata, installer identifiers, screenshots, and public download copy.

## Requires Legal / License / Security Review

- Final repo home and branding: `armpit-symphony`, SparkPit Labs, or another public org.
- License selection and compatibility with all dependencies.
- Tauri installer metadata, signing posture, and download distribution.
- Connector terms and public docs for Gmail, Outlook, Slack, GitHub, Notion, Jira, Linear, Discord, Telegram, and WhatsApp.
- Public security policy, vulnerability reporting path, and privacy/data-retention copy.
- Any screenshots, sample data, docs, or demo prompts intended for release.
- Any use of proprietary names, trademarks, generated assets, or third-party logos.

## Current Baseline Notes

- R&D reference repo: `armpit-symphony/Sparkbot`.
- Public shell staging repo: `armpit-symphony/Sparkbot_shell`.
- Sparkbot README reports current release line `v1.6.81`.
- Handoff baseline says current Sparkbot main is `1cd250fb29daaf3bdf6534627ec1b689ad37561c`.
- This planning phase does not copy code, wire live adapters, or alter the R&D repo.
