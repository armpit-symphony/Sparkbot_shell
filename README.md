# Sparkbot Shell

Sparkbot Shell is the MIT-licensed public staging repo for a self-hosted AI workstation shell preview. Its hook is simple: Round Table meetings for your AI agents.

The public product model is a local-first workstation for agent work, model routing, model seats, Local AI providers, Round Table meetings, shared memory/context, Task Guardian utility automations, connectors, and user-owned guardrails.

## Current Status

This repo is in public-release staging. The current shell contains a Vite + React + TypeScript preview with global navigation, an interactive local-state Main Chat frame, model-seat/config forms, Local AI setup shape, Workstation operating-floor panels, Invite Wing and Specialty Wing previews, guardrail profile shell, Task Guardian health-check report previews, a Round Table static-to-interactive meeting flow, a public memory/context adapter contract preview, app-first delivery preference shells, connector identity/PIN fail-closed recall previews, public artifact boundary docs, visual/mobile QA polish, and preview package QA. It has no backend runtime, no live model calls, no credential persistence, no connector sends, no connector sessions, no PIN verification, no scheduler, no health collector, no memory/context runtime, and no robotics/IoT control.

Public users should wait for approved Sparkbot Shell release artifacts before treating this as an install path.

Static preview artifact: `sparkbot-shell-preview-0.8.0-layer8`.
Package/version label: `0.8.0-layer8-preview`.

Preview status is YELLOW: internal/staging preview only until Phil approves the next release decision and physical/mobile QA is complete. See [Static preview signoff](https://github.com/armpit-symphony/Sparkbot_shell/blob/public-release-physical-qa-record/docs/STATIC_PREVIEW_SIGNOFF.md), [Physical mobile QA checklist](https://github.com/armpit-symphony/Sparkbot_shell/blob/public-release-physical-qa-record/docs/PHYSICAL_MOBILE_QA_CHECKLIST.md), [Public preview readiness summary](https://github.com/armpit-symphony/Sparkbot_shell/blob/public-release-physical-qa-record/docs/PUBLIC_PREVIEW_READINESS_SUMMARY.md), and [Release decision gate](https://github.com/armpit-symphony/Sparkbot_shell/blob/public-release-physical-qa-record/docs/RELEASE_DECISION_GATE.md).

## Public MVP Highlights

- Workstation as the operating floor.
- Main Chat / DM as the operator command channel.
- Round Table as the agent meeting room.
- Meeting Manager as the coordinator and secretary.
- Invite Wing model seats and Specialty Wing custom agents.
- Local AI setup shapes for Ollama, LM Studio, llama.cpp / llama-server, and OpenAI-compatible endpoints.
- Command Center AI Setup and public guardrail profile previews.
- Unified memory/context contract preview and meeting-note labels.
- Task Guardian PC/server health-check previews and app-first delivery preference shell.
- Optional connector setup patterns for Telegram, Discord, Slack, and WhatsApp.
- Robo Preview teaser only, with no real robotics or IoT control in public core.

## Public Docs

These docs are safe to ship in the preview artifact:

- [Install and setup](docs/INSTALL.md)
- [Capabilities](docs/CAPABILITIES.md)
- [Architecture overview](docs/ARCHITECTURE_OVERVIEW.md)
- [Security and guardrails](docs/SECURITY_AND_GUARDRAILS.md)
- [Local AI setup overview](docs/LOCAL_AI_SETUP.md)
- [Round Table overview](docs/ROUND_TABLE_OVERVIEW.md)
- [Task Guardian overview](docs/TASK_GUARDIAN_OVERVIEW.md)
- [Connectors overview](docs/CONNECTORS_OVERVIEW.md)
- [Robo Preview](docs/ROBO_PREVIEW.md)
- [Beta limitations](docs/BETA_LIMITATIONS.md)
- [MIT license](LICENSE)

Repo-only staging docs are still kept in git for auditability, but they are excluded from preview release artifacts.

## Preview Artifact Boundary

Generated preview artifacts include only the built static app, README, LICENSE, package.json, user-facing docs, and package metadata. Repo-only staging docs can remain in git for auditability, but they are excluded from generated preview artifacts.

The current repo, `armpit-symphony/Sparkbot_shell`, remains the staging workspace. The likely future public repo target is `sparkpit-labs/Sparkbot`, but repo migration is a later release operation.

## Development

Install dependencies:

```bash
npm install
```

Run the static shell locally:

```bash
npm run dev
```

Build the static shell:

```bash
npm run build
```

Create a public-safe preview artifact:

```bash
npm run package:preview
```

The generated preview artifact is written under `preview-artifacts/` and includes only the built app, README, LICENSE, package.json, allowlisted public docs, and package metadata.

The generated folder is `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`.

Release decision support docs remain in the staging repo and are not included in generated preview artifacts.

## Current Caveats

- Connector delivery/private recall is out-of-scope for this static shell preview (no connector runtime, no sends, no sessions).
- Future runtime-contract validation is still required for live external recall/delivery claims.
- External health-report delivery is setup-needed/live-QA-unknown and not implemented.
- Connector identity/PIN sessions are contract previews only; no real verification or session storage exists.
- SMS/text remains future/unsupported.
- Multi-worker scheduler leader locking remains future work.
- Sparkbot Shell is not production-ready.
- MIT is selected for this static public preview unless a legal blocker is discovered.
- Final public repo migration remains a later release operation; this repo remains staging.
- Physical/mobile 390px browser QA remains required before public announcement because the local headless runner cropped the right edge on several routes.
- Shell state is local React state only. It intentionally does not persist settings, store model-seat credentials, execute Round Table meetings, write meeting notes to memory, retrieve context, verify PINs, create connector sessions, schedule Task Guardian jobs, collect health data, send connector messages, call Local AI endpoints, enforce guardrails, or control robots/IoT.

## Next Step

Recommended next work is physical/mobile browser QA before public announcement, followed by a runtime contract layer after preview signoff. Keep live connector QA marked UNKNOWN until test-only channels pass.
