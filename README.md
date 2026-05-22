# Sparkbot Shell

Sparkbot Shell is the public staging repo for an open-source, self-hosted AI workstation shell. Its hook is simple: Round Table meetings for your AI agents.

The public product model is a local-first workstation for agent work, model routing, model seats, Local AI providers, Round Table meetings, shared memory/context, Task Guardian utility automations, connectors, and user-owned guardrails.

## Current Status

This repo is in public-release staging. Layer 7 now contains a Vite + React + TypeScript shell with global navigation, an interactive local-state Main Chat frame, model-seat/config forms, Local AI setup shape, Workstation operating-floor panels, Invite Wing and Specialty Wing previews, guardrail profile shell, Task Guardian health-check report previews, a Round Table static-to-interactive meeting flow, a public memory/context adapter contract preview, app-first delivery preference shells, and connector identity/PIN fail-closed recall previews. It has no backend runtime, no live model calls, no credential persistence, no connector sends, no connector sessions, no PIN verification, no scheduler, no health collector, no memory/context runtime, and no robotics/IoT control.

Public users should continue to use sanitized Sparkbot release bundles until Sparkbot Shell has approved imports, validation, and release artifacts. The raw Sparkbot R&D repo is not the casual public install path.

## Public MVP Highlights

- Workstation as the operating floor.
- Main Chat / DM as the operator command channel.
- Round Table as the agent meeting room.
- Meeting Manager as the coordinator and secretary.
- Invite Wing model seats and Specialty Wing custom agents.
- Local AI providers through Ollama, LM Studio, llama.cpp / llama-server, and OpenAI-compatible endpoints.
- Command Center AI Setup and public security guardrails.
- Unified memory/context interface and meeting notes save/edit/recall.
- Task Guardian PC/server health checks and app-first delivery preferences.
- Connector patterns for Telegram, Discord, Slack, and WhatsApp where configured.
- Robo Preview teaser only, with no real robotics or IoT control in public core.

## Planning Docs

- [Public release handoff](docs/PUBLIC_RELEASE_HANDOFF.md)
- [Feature classification](docs/FEATURE_CLASSIFICATION.md)
- [Extraction map](docs/EXTRACTION_MAP.md)
- [Public artifact manifest](docs/PUBLIC_ARTIFACT_MANIFEST.md)
- [Sanitization checklist](docs/SANITIZATION_CHECKLIST.md)
- [Public MVP roadmap](docs/PUBLIC_MVP_ROADMAP.md)
- [Repo separation rules](docs/REPO_SEPARATION_RULES.md)
- [Extraction readiness assessment](docs/EXTRACTION_READINESS_ASSESSMENT.md)
- [Layer 1 app frame status](docs/LAYER_1_APP_FRAME_STATUS.md)
- [Layer 2 chat/model config status](docs/LAYER_2_CHAT_MODEL_CONFIG_STATUS.md)
- [Layer 3 workstation and command center status](docs/LAYER_3_WORKSTATION_COMMAND_CENTER_STATUS.md)
- [Layer 4 Round Table static flow status](docs/LAYER_4_ROUNDTABLE_STATIC_FLOW_STATUS.md)
- [Layer 5 memory/context adapter status](docs/LAYER_5_MEMORY_CONTEXT_ADAPTER_STATUS.md)
- [Layer 6 Task Guardian health status](docs/LAYER_6_TASK_GUARDIAN_HEALTH_STATUS.md)
- [Layer 7 connector PIN status](docs/LAYER_7_CONNECTOR_PIN_STATUS.md)

## Public Artifact Boundary

Phil's Layer 8 rule is now the controlling public artifact policy: `Sparkbot_shell` may keep extraction maps, readiness docs, staging docs, and no-go gates in the repo, but generated public release artifacts must exclude R&D path maps, internal extraction planning, private/source-boundary notes, and no-go/internal readiness docs.

Public artifacts should ship only clean user-facing docs: README, install/setup, capabilities, architecture overview, security/guardrail overview, Local AI setup, Round Table overview, Task Guardian overview, and connector setup caveats. See [Public artifact manifest](docs/PUBLIC_ARTIFACT_MANIFEST.md).

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

## Current Caveats

- Live Telegram, Discord, Slack, and WhatsApp connector QA is still UNKNOWN because no safe test-only credentials/channels were configured.
- External private recall is code-gated and fail-closed, but not live-verified.
- External health-report delivery is setup-needed/live-QA-unknown and not implemented.
- Connector identity/PIN sessions are contract previews only; no real verification or session storage exists.
- SMS/text remains future/unsupported.
- Multi-worker scheduler leader locking remains future work.
- Sparkbot Shell is not production-ready.
- Layer 7 shell state is local React state only. It intentionally does not persist settings, store model-seat credentials, execute Round Table meetings, write meeting notes to memory, retrieve context, verify PINs, create connector sessions, schedule Task Guardian jobs, collect health data, send connector messages, call Local AI endpoints, enforce guardrails, or control robots/IoT.

## Next Step

Recommended Layer 8 is a small public packaging/download QA shell or browser/live QA checklist layer governed by the [Public artifact manifest](docs/PUBLIC_ARTIFACT_MANIFEST.md). Keep live connector QA marked UNKNOWN until test-only channels pass.
