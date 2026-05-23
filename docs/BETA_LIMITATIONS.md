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
- Package artifact QA is preview-only until license and final repo naming are decided.

## Release Blockers

- License decision.
- Final public repo/org/name decision.
- Public artifact name/version decision.
- Physical/mobile browser QA.
- Connector live QA if public docs ever claim external delivery or private recall is complete.
