# Beta Limitations

Sparkbot Shell is not production-ready. It is a static public preview of product direction and release boundaries.

## Current Limitations

- No backend runtime.
- No model/provider calls.
- No Local AI endpoint checks.
- No connector sends or webhooks.
- No scheduler or Task Guardian runtime.
- No health collector.
- No memory persistence or private recall.
- No real PIN verification.
- No guardrail enforcement.
- No terminal/browser execution.
- No robotics or IoT control.

## QA Limitations

- 390px physical/mobile browser QA is still required because the local headless runner cropped the right edge on several routes.
- Live connector QA remains unknown for Telegram, Discord, Slack, and WhatsApp.
- Local AI live QA has not been run from this shell.
- Package artifact QA is preview-only; MIT is selected for this static preview, and final repo migration remains a later release operation.
- Physical/mobile QA remains NOT_RUN until checked on a real phone browser or trusted responsive browser.

## Release Blockers

- Physical/mobile browser QA.
- Connector live QA if public docs ever claim external delivery or private recall is complete.
- Explicit Phil approval before any public release tag, npm publication, or artifact upload.

## Recommendation

MIT is selected for the static preview unless a legal blocker is discovered. Do not claim production readiness, connector delivery, private recall, or runtime behavior until those layers are implemented and tested.
