# Public Docs Index

Updated: 2026-05-22

This is the user-facing docs index for future public release artifacts. It is separate from repo-only staging docs.

Public artifacts should contain only clean docs that help users install, understand, and safely use Sparkbot Shell. Repo staging docs can remain in git, but generated public artifacts must exclude extraction maps, R&D path maps, internal extraction planning, private/source-boundary notes, no-go/internal readiness docs, and staging implementation planning.

Current static shell preview status: ready for staging preview review after visual/mobile polish. Public package signoff still needs the allowlisted docs below, license/final repo naming, package artifact dry run, and physical/mobile browser review.

## Public Artifact Docs

| Public doc | Status | Notes |
|---|---|---|
| `README.md` | READY FOR STAGING REVIEW | Current public overview, setup commands, caveats, and artifact boundary summary. |
| Install/setup docs | NEEDED | Should cover clone/install/build/dev server steps without private deployment notes. |
| Capabilities docs | NEEDED | Should describe current shell capabilities and explicitly separate previews from runtime features. |
| User-facing architecture overview | NEEDED | Should explain Workstation, Main Chat, Round Table, model seats, memory/context, Task Guardian, connectors, and Robo Preview. |
| Security/guardrail overview | NEEDED | Should describe local-first posture, no browser-stored credentials, confirmation direction, and unsupported runtime behavior. |
| Local AI setup overview | NEEDED | Should explain Ollama, LM Studio, llama.cpp / llama-server, OpenAI-compatible local endpoints, and setup-needed states. |
| Round Table overview | NEEDED | Should explain Meeting Manager, first pass, assignments, second pass, wrap-up, and notes preview. |
| Task Guardian overview | NEEDED | Should explain PC/server health report previews, app/in-room default delivery, and no scheduler/collector yet. |
| Connector setup caveats | NEEDED | Should explain Telegram/Discord/Slack/WhatsApp opt-in setup, fail-closed private recall, live-QA UNKNOWN, and SMS/text unsupported. |

## Repo-Only Staging Docs

Keep these in the repo for auditability, but exclude them from public release artifacts:

- Extraction maps.
- Extraction readiness docs.
- Staging status docs.
- No-go gates.
- Internal extraction planning.
- Private/source-boundary notes.
- R&D path maps.

## Release Artifact Rule

Before generating a public release artifact, packaging QA must confirm the artifact docs match the public list above and do not include repo-only staging docs.
