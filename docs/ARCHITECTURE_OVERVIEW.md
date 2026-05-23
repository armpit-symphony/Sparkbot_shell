# Architecture Overview

Sparkbot Shell is organized around a local-first workstation model.

## Main Surfaces

- Workstation: the operating floor and default route.
- Main Chat: the operator command channel.
- Round Table: the meeting room for AI-agent collaboration.
- Command Center: setup, model seats, Local AI labels, Specialty Wing agents, guardrail profiles, Task Guardian previews, and connector caveats.
- Task Guardian: scheduled-work direction and health report preview contracts.
- Connectors: optional communication-channel setup and identity/PIN gate preview.
- Docs: public-safe documentation links.
- Robo Preview: teaser-only surface with no controls.

## Data Model In This Preview

All app state is static demo data or local React component state. It is not saved outside the page session and is not sent to a service.

The shell includes public-safe TypeScript contract shapes for:

- model seats
- guardrail profiles
- Round Table phases
- memory/context events
- Task Guardian schedules, delivery preferences, and health reports
- connector identity/PIN states

## Future Runtime Layers

Future approved layers may add backend services, model calls, Local AI endpoint checks, persistence, scheduler behavior, and connector runtimes. Those layers are intentionally not present in the static shell preview.
