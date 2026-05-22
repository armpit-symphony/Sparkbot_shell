# Sanitization Checklist

Updated: 2026-05-22

Use this checklist before any Sparkbot R&D source is imported into `Sparkbot_shell` or packaged as public source.

## Repo And Artifact Boundary

- [ ] Confirm `.github` is excluded from public bundles unless intentionally recreated for public CI.
- [ ] Confirm backend/frontend tests are excluded from generated public bundles until public-safe test ownership is decided.
- [ ] Confirm `.venv-ci` and `backend/.venv-ci` are removed/excluded.
- [ ] Confirm proposal scripts and scratch proposal files are excluded.
- [ ] Confirm dotenv files are excluded, including examples if they contain private defaults or internal host hints.
- [ ] Confirm private LIMA docs are excluded.
- [ ] Confirm private Robo bridge source is excluded and only the Robo Preview stub is included.
- [ ] Inspect package outputs: `.tar.gz`, `.zip`, release notes, checksums, and staged tree.
- [ ] Run Docker context hygiene scan for env files, DBs, logs, keys/certs, caches, package outputs, tests, CI metadata, and private docs.

## Secret And Credential Scans

- [ ] Run connector secret scan for Telegram, Discord, Slack, WhatsApp, GitHub, Google, Microsoft, Notion, Jira, Linear, and similar providers.
- [ ] Run PIN/plaintext scan for operator PINs, PIN examples, hashes, session IDs, and verification logs.
- [ ] Run local AI endpoint config scan for LAN/private URLs, API keys, and endpoint headers.
- [ ] Run model-seat credential scan for API keys, OAuth tokens, subscription tokens, cookies, and Vault aliases that reveal private naming.
- [ ] Run Task Guardian delivery config scan for channel IDs, phone numbers, usernames, webhook URLs, and internal targets.
- [ ] Run meeting notes/privacy scan for private transcripts, client names, customer data, secrets, and private decisions.
- [ ] Run external connector identity fail-closed scan for allowlists, linked owner checks, shared-channel behavior, and missing-auth branches.

## Public/Private Product Boundary

- [ ] Remove or rewrite internal R&D notes.
- [ ] Remove raw private package artifacts.
- [ ] Remove private paths, private domains, IPs, hostnames, deployment users, and private service names.
- [ ] Remove tracked env/build junk, caches, logs, local databases, keys, certs, and generated artifacts.
- [ ] Remove dev-only template routes or gate them behind development-only builds.
- [ ] Exclude proprietary Guardian Suite internals and Guardian Spine commercial internals.
- [ ] Exclude LIMA AI OS runtime internals.
- [ ] Exclude Arc Bot, LIMA Office, and LIMA IT runtime behavior.
- [ ] Exclude paid service orchestration and client-specific automation.

## Connector Safety

- [ ] Telegram private recall requires explicit allowed chat configuration and operator/PIN mapping before public claims.
- [ ] Discord shared-channel private recall remains blocked or setup-gated; prefer DM-only for private recall QA.
- [ ] Slack private recall requires request signing, allowed channel, allowed sender, and linked owner.
- [ ] WhatsApp inbound requires explicit verify token and allowed phones.
- [ ] SMS/text is marked future/unsupported and does not fake sends.
- [ ] Live connector QA uses test-only identities/channels and records non-secret evidence only.
- [ ] Live connector QA remains UNKNOWN until Telegram, Discord, Slack, and WhatsApp are actually tested.

## Import Gate

- [ ] Confirm no source code was copied before the approved import layer.
- [ ] Confirm `Sparkbot` R&D repo was only read, not modified, for planning phases.
- [ ] Run `git diff --check`.
- [ ] Run markdown link check if available.
- [ ] Run a secret scan or targeted `rg` scans before commit.
- [ ] Record validation results in the final report.
