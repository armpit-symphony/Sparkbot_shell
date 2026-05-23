# Security And Guardrails

Sparkbot Shell is designed to preview a user-owned, permissioned assistant. The current implementation is static and does not enforce runtime policy.

## Current Preview Guarantees

- No credential fields are accepted.
- No secrets are stored in browser storage.
- No cookies or local/session storage are used.
- No backend, connector, provider, scheduler, or memory service is called.
- Connector delivery and private recall remain setup-gated and live-QA unknown.
- Robo Preview has no control surface.

## Guardrail Direction

The shell shows guardrail profile labels and a custom blocker draft field so users can understand the intended shape. These are not enforced yet.

Later runtime work should define:

- user-owned guardrail profiles
- confirmation behavior for risky actions
- audit evidence for important actions
- redaction rules for memory/context
- connector identity and PIN checks for private recall

## Credential Boundary

Do not paste provider keys, endpoint credentials, connector secrets, PINs, phone numbers, or channel identifiers into the static shell preview. Runtime credential handling must arrive through an approved backend/Vault-style boundary later.
