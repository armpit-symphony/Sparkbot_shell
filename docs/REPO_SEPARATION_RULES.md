# Repo Separation Rules

Updated: 2026-05-22

## Repo Roles

- `Sparkbot_shell` is the public shell staging repo.
- `Sparkbot` R&D remains the source/reference repo until sanitized imports begin.
- Public users should install sanitized bundles until `Sparkbot_shell` is ready.
- The raw R&D repo is not the casual public install path.
- LIMA AI OS remains separate.
- Arc Bot, LIMA Office, and LIMA IT remain proprietary tracks.
- Robo full control remains private/proprietary; public shell gets Robo Preview only.

## Public Shell Rules

- Import in layers only after approval.
- Start with app frame/global navigation/static shell.
- Keep public docs and contracts ahead of runtime import.
- Keep credentials backend-owned and never stored in browser state.
- Keep public guardrails user-owned and understandable.
- Keep Task Guardian public automations read-only or explicitly confirmation-gated.
- Keep connectors opt-in and setup-gated.
- Keep SMS/text future/unsupported until a real provider and identity model exist.

## Private Tracks

Do not import or wire these into public shell:

- LIMA AI OS runtime internals.
- Arc Bot business worker shell behavior.
- LIMA Office control plane and customer workflow templates.
- LIMA IT diagnostics/remediation service workflows.
- Advanced Guardian Suite internals and commercial Guardian Spine internals.
- Private Robo/LIMA bridge implementation.
- Paid service orchestration.
- Private deployment paths, client-specific automations, and internal R&D notes.

## Connector Recall Rule

Connector private recall must stay fail-closed and live-QA-gated.

- Telegram, Discord, Slack, and WhatsApp can be planned as public-safe connector patterns.
- External private recall must not be marked GREEN until test-only live QA passes.
- Slack must require signed requests, allowed channel, allowed sender, and linked owner.
- Discord shared-channel private recall must remain blocked or setup-gated.
- WhatsApp must require explicit verify token and allowed phones.
- Telegram must require explicit allowlists/operator mapping or PIN/session gates for private recall.

## Packaging Rule

Public artifacts must be generated from a sanitized boundary:

- Exclude `.github`, `.agents`, tests, private docs, env files, logs, DBs, keys/certs, caches, build output, and proposal scripts unless intentionally recreated for public use.
- Replace private Robo bridge source with Robo Preview stub.
- Inspect generated artifacts before release.
- Keep non-secret QA evidence; never include credentials, PINs, tokens, channel IDs, phone numbers, or private host paths.

## Staging Docs Vs Public Artifact Docs

Keep these in the `Sparkbot_shell` repo for staging and auditability:

- Extraction maps.
- Extraction readiness docs.
- Staging status docs.
- No-go gates and boundary checklists.

Exclude these from public release artifacts:

- R&D path maps.
- Internal extraction planning.
- Private/source-boundary notes.
- No-go/internal readiness docs.

Ship these in public release artifacts:

- `README.md`.
- Install/setup docs.
- Capabilities docs.
- User-facing architecture overview.
- Security/guardrail overview.
- Local AI setup overview.
- Round Table overview.
- Task Guardian overview.
- Connector setup caveats.

## Modification Rule

During planning/classification phases:

- Do not copy code from Sparkbot R&D.
- Do not import source files.
- Do not wire runtime behavior.
- Do not move proprietary modules.
- Read R&D docs/source only as needed for classification.
