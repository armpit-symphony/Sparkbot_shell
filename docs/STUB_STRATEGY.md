# Public Stub Strategy

## Purpose

The shell should remain static-preview-safe while still demonstrating how runtime integration will work later. This stub strategy defines what to mock.

## Mocking Strategy by Surface

- Model providers: local JSON fixtures for provider health, provider cards, and model list responses. No outbound provider calls in UI.
- Agent seats: hardcoded seat mock cards with static metadata and seat-state toggles only.
- Round Table flow: scripted meeting-state mock timeline (`scheduled` → `running` → `notes` → `closed`) with deterministic transitions.
- Guardian confirmations: static confirmation modal text + fake approval states; no actual policy engine calls.
- Robo teaser: animated or static placeholder with hard-stop text stating no hardware actions.
- Connectors: contract preview payloads for Telegram/Discord/Slack/WhatsApp UI only; no outbound send.
- Memory: mock context snippets and meeting-summary snippets only; no storage layer calls.
- Files: read-only fixture rows for file cards and download stubs only.
- Tasks/reminders: static queue rows and reminder cards; no scheduler or recurring job backend.
- Settings: local form defaults and resettable fixtures that do not persist.
- Demo data: versioned fixture dataset for desktop and mobile preview QA replayability.

## Hard Constraints

- Stubs must not imply any live provider calls.
- Stubs must not imply runtime execution or task dispatch.
- Stubs must not imply connector sends or session writes.
- Stubs must not imply persistence, scheduler runtime, or secrets.
- Stubs must not imply robotics/IoT control.
- Stubs must not imply paid LIMA functionality beyond contract preview statements.

## Acceptance Check

- All visible preview surfaces use fixture data.
- All stub transitions are deterministic and user-replayable.
- Stubs degrade to static placeholder state when data is unavailable.
