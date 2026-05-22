# Layer 7 Connector PIN Status

Updated: 2026-05-22

Branch: `public-release-layer-7-connector-pin-shell`

## What Was Added

- Frontend-only connector identity/PIN contract types in `src/types/connectors.ts`.
- Static demo connector state in `src/data/demoConnectorState.ts`.
- Connector identity/PIN shell in `src/components/ConnectorIdentityShell.tsx`.
- New Connectors page in the shell navigation.
- Workstation connector status panel and cross-link.
- Task Guardian delivery preference preview with connector gate status labels.
- Memory/context preview events for blocked connector recall and future PIN-gated recall.

## Contract Shapes

Layer 7 defines frontend-only TypeScript shapes for:

- `ConnectorKind`.
- `ConnectorSetupStatus`.
- `ConnectorIdentityStatus`.
- `ConnectorRecallPolicy`.
- `PinSessionPreview`.
- `ConnectorCard`.
- `ConnectorGateStep`.

These are public shell contracts only. They do not connect to a backend service, connector runtime, webhook, PIN verifier, session store, memory store, or delivery worker.

## Connector Statuses

- Telegram: setup-needed preview; private recall requires an allowed chat/operator mapping plus PIN when policy requires it.
- Discord: live-QA-unknown preview; shared guild/channel private recall is blocked, with DM plus identity/PIN recommended later.
- Slack: live-QA-unknown preview; future runtime must verify request authenticity, allowed channel/user, linked owner, and optional PIN session.
- WhatsApp: setup-needed/live-QA-unknown preview; future runtime requires request verification and allowed phone identity.
- SMS/text: future/unsupported.

All labels are fake/static demo labels. No real IDs, phone numbers, signing secrets, tokens, webhooks, channel targets, or PIN values are present.

## Private Recall Boundary

- Private meeting recall fails closed.
- PIN is step-up verification, not a replacement for connector authenticity.
- Shared Discord/Slack spaces require stronger identity/session gating.
- Linked/PIN-verified private recall is shown only as future runtime behavior.
- Unauthorized connector recall is represented as blocked/redacted.

## Delivery Boundary

- App/in-room delivery remains the default.
- External delivery remains opt-in and requires configured connectors later.
- Live connector QA remains UNKNOWN.
- No Telegram, Discord, Slack, WhatsApp, SMS/text, or Task Guardian external delivery sends exist in Layer 7.

## Runtime Features Intentionally Not Included

- Real connector runtime.
- Real Telegram, Discord, Slack, WhatsApp, or SMS/text sends.
- Real WhatsApp webhook.
- Real SMS/text provider.
- Real PIN verification.
- Real connector sessions.
- Real private memory recall.
- Real Task Guardian delivery.
- Real backend runtime.
- Real memory persistence.
- Real Guardian internals.
- Real terminal/browser execution.
- Real robotics/IoT control.
- LIMA AI OS, Arc Bot, LIMA Office, or LIMA IT wiring.

## Credential Boundary

Layer 7 does not add API key, password, passphrase, PIN, token, signing secret, verify token, webhook, OAuth, phone number, channel ID, user ID, chat ID, connector target, or raw credential fields.

## Public/Private Boundary

Layer 7 uses public-safe shapes, labels, and concepts only. It does not import Sparkbot R&D backend code, connector code, Guardian internals, private Robo/LIMA code, package artifacts, tests, workflows, private deployment paths, or internal R&D docs.

## Validation Results

Layer 7 validation completed for this branch:

- `npm run build`: passed.
- `npm run lint`: not configured in `package.json`.
- `git diff --check`: passed, with CRLF normalization warnings only.
- Local dev-server smoke: `http://127.0.0.1:5173/#/workstation`, `#/connectors`, `#/task-guardian`, and `#/docs` returned HTTP 200.
- Local Markdown link target check: passed.
- Runtime/persistence scan over `src`: no `fetch`, WebSocket, EventSource, browser storage, cookies, env access, or axios.
- Source boundary check: no `backend/`, `src-tauri/`, `.github/`, `.agents/`, connector runtime, Guardian runtime, scheduler runtime, or Robo bridge files were added.
- Targeted high-risk secret/private-path scan: no live secrets, private paths, private domains, IP literals, phone numbers, channel IDs, token values, signing secret values, verify token values, or credential values found; matches are intentional boundary/planning references or static no-go copy.

## Next Layer Recommendation

Layer 8 should stay contract-only. Recommended next layer:

- Public packaging/download QA shell and release artifact exclusion checklist, or a narrow browser/live QA checklist layer.

Do not add connector runtime, real sends, PIN verification, private recall, scheduler execution, memory persistence, provider calls, Guardian internals, LIMA/Arc/Office/IT wiring, or robotics/IoT control in Layer 8.
