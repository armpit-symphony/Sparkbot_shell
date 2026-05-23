# Release Decisions

Updated: 2026-05-23

This document tracks decisions that must be resolved before a public release artifact is signed off. See [Release decision gate](RELEASE_DECISION_GATE.md) for the decision matrix.

## Open Decisions

| Decision | Status | Notes |
|---|---|---|
| Final public repo/org/name | OPEN | Decide whether the public home is this staging repo, a renamed repo, or a new org/repo. |
| License choice | OPEN | A license must be chosen before public release. MIT and Apache-2.0 are common options, but Phil has not selected one here. |
| Staging repo role | OPEN | Decide whether `Sparkbot_shell` remains a staging workspace or becomes the public package source. |
| Public artifact name/version | OPEN | Current package metadata is `sparkbot-shell@0.8.0-layer8`; public artifact naming still needs signoff. |
| Repo-only staging docs | DECIDED | Keep extraction maps, readiness docs, staging docs, and no-go gates in the repo. Exclude them from public release artifacts. |
| Runtime import start | OPEN | Runtime work should begin only after public docs, package artifact QA, mobile QA, and license/repo decisions are closed. |
| Live connector claims | DECIDED | Keep external delivery/private recall live-QA UNKNOWN until test-only connector QA passes. |

## Recommendation

Choose the license, public repo name, and artifact naming before publishing any package. Keep the current artifact as a preview package until those decisions are made.

## License Options

| Option | Fit | Notes |
|---|---|---|
| MIT | Recommended for easiest hobbyist/open-source adoption. | Short, permissive, familiar to small projects and community contributors. |
| Apache-2.0 | Strong option if explicit patent grant language is desired. | More formal; still permissive. |
| No license yet | Acceptable only while this remains private/staging. | Do not ship a final public release without a license. |

No `LICENSE` file is added in this branch because Phil has not explicitly approved a license.

## Legal, License, And Security Review Gates

Before any public release artifact is signed off, review:

- Final license text and dependency license compatibility.
- Public security policy and vulnerability reporting path.
- Connector terms and platform policy requirements for Telegram, Discord, Slack, WhatsApp, GitHub, Google, Microsoft, Notion, Jira, Linear, and similar providers.
- Tauri/desktop signing posture if desktop artifacts are planned.
- Public package metadata, artifact names, and installer identifiers.
- armpit-symphony and SparkPit Labs branding, trademarks, third-party logos, screenshots, sample data, demo prompts, and generated assets.

## Artifact Naming Options

Recommended preview names:

- `sparkbot-shell-preview-0.8.0-layer8`
- `sparkbot-public-preview-0.8.0`

The current package metadata remains `sparkbot-shell@0.8.0-layer8` until Phil chooses the final preview artifact name/version.
