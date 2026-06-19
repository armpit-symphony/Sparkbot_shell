# Beta Limitations

Sparkbot Shell is not production-ready. It is a local-first preview of product direction and release boundaries.

## Current Limitations

- No backend runtime.
- No model/provider calls.
- No Local AI generation calls.
- Local AI endpoint checks are limited to explicit operator-triggered localhost/loopback reachability checks.
- No non-local endpoint checks.
- No connector sends or webhooks.
- No scheduler or Task Guardian runtime.
- No health collector.
- No memory persistence or private recall.
- No real PIN verification.
- No guardrail enforcement.
- No terminal/browser execution.
- No robotics or IoT control.

## QA Limitations

- 390px physical/mobile browser QA passed on 2026-05-23 (Phil manual verification); re-run if UI/layout/artifact content changes.
- Live connector QA remains unknown for Telegram, Discord, Slack, and WhatsApp.
- Local AI generation QA has not been run from this shell.
- Local endpoint reachability checks do not prove model quality, generation readiness, credential support, or production readiness.
- Package artifact QA is preview-only; MIT is selected for this static preview, and final repo migration remains a later release operation.

## Release Blockers

- Explicit Phil approval before any public release tag, npm publication, or artifact upload.
- Connector live QA if public docs ever claim external delivery or private recall is complete.

## Recommendation

MIT is selected for the static preview unless a legal blocker is discovered. Do not claim production readiness, connector delivery, private recall, or runtime behavior until those layers are implemented and tested.
