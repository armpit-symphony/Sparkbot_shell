# Sparkbot Shell

Sparkbot Shell is the public staging repo for an open-source, self-hosted AI workstation shell. Its hook is simple: Round Table meetings for your AI agents.

The public product model is a local-first workstation for agent work, model routing, model seats, Local AI providers, Round Table meetings, shared memory/context, Task Guardian utility automations, connectors, and user-owned guardrails.

## Current Status

This repo is in staging/planning. Code import has not started on this branch. The current work is extraction mapping, public/private classification, sanitization planning, and release sequencing from the Sparkbot R&D repo.

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
- [Sanitization checklist](docs/SANITIZATION_CHECKLIST.md)
- [Public MVP roadmap](docs/PUBLIC_MVP_ROADMAP.md)
- [Repo separation rules](docs/REPO_SEPARATION_RULES.md)
- [Extraction readiness assessment](docs/EXTRACTION_READINESS_ASSESSMENT.md)

## Current Caveats

- Live Telegram, Discord, Slack, and WhatsApp connector QA is still UNKNOWN because no safe test-only credentials/channels were configured.
- External private recall is code-gated and fail-closed, but not live-verified.
- SMS/text remains future/unsupported.
- Multi-worker scheduler leader locking remains future work.
- Sparkbot Shell is not production-ready.

## Next Step

Layer 1 shell import after QA and extraction approval: clean app frame, global navigation, static public shell, and public-safe contracts only.
