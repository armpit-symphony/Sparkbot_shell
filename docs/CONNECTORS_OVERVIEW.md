# Connectors Overview

Connectors are optional operator communication channels. The current shell previews setup and identity rules only.

## Previewed Channels

- Telegram.
- Discord.
- Slack.
- WhatsApp.
- SMS/text as future/unsupported.

## Identity And PIN Direction

Connector identity answers who and where a request came from. PIN is step-up verification, not a replacement for connector authenticity.

Private meeting recall fails closed unless a later runtime proves that the connector identity is linked, authorized, or PIN-verified according to policy.

## Current Status

External delivery and private recall are not live. Connector cards are setup-needed or live-QA unknown. No connector tokens, channel IDs, phone numbers, webhooks, signing secrets, sends, sessions, or PIN verification exist in the shell preview.

## Future Runtime Requirements

Before a connector can be marked ready, it needs test-only live QA, identity mapping, fail-closed private recall tests, delivery tests, redaction behavior, and clear user setup docs.
