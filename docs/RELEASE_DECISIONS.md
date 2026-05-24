# Release Decisions

Updated: 2026-05-24

This document tracks release decisions for the Sparkbot Shell static preview. See [Release decision gate](RELEASE_DECISION_GATE.md) and [Static preview signoff](STATIC_PREVIEW_SIGNOFF.md) for the signoff summary.

## Locked For Static Preview

| Decision | Status | Notes |
|---|---|---|
| License choice | DECIDED | MIT is selected for the Sparkbot Shell static public preview unless a legal blocker is discovered. |
| License copyright holder | DECIDED | `Copyright (c) 2026 SparkPit Labs / Phil Lima`. This captures both the SparkPit Labs project identity and Phil Lima ownership. |
| Staging repo role | DECIDED | `armpit-symphony/Sparkbot_shell` remains the staging workspace for this phase. Do not rename or migrate repos here. |
| Future public repo/org/name | DECIDED FOR DIRECTION | The likely future public release target is `sparkpit-labs/Sparkbot`; migration/final home is a later release operation. |
| Preview artifact name | DECIDED | `sparkbot-shell-preview-0.8.0-layer8`. |
| Package/version label | DECIDED | `0.8.0-layer8-preview`. |
| Public artifact source | DECIDED FOR STAGING | This branch may produce a public-safe static preview artifact for internal/staging review. It is not a final public release. |
| Repo-only staging docs | DECIDED | Keep extraction maps, readiness docs, staging docs, and no-go gates in the repo. Exclude them from public preview artifacts. |
| Live connector claims | DECIDED | Keep external delivery/private recall live-QA UNKNOWN until test-only connector QA passes. |

## Still Open

| Decision | Status | Notes |
|---|---|---|
| Final public release repo migration | LATER | Decide and perform final repo migration/import only in a later release operation. |
| Public announcement readiness | OPEN | Physical/mobile 390px browser QA passed on 2026-05-23; Phil approval for Option D remains required before any public announcement/tag/upload/publish. |
| Runtime import start | OPEN | Runtime work should begin only after static preview signoff and should start with contracts, not direct runtime behavior. |
| Phil release gate option | OPEN | Choose Option A, B, C, D, or E in [Release decision gate](RELEASE_DECISION_GATE.md). |

## License Decision

MIT is selected for the static Sparkbot Shell preview because it is short, permissive, familiar to hobbyist/open-source users, and appropriate for a static shell preview unless a legal blocker is discovered.

The `LICENSE` file is now included in the repo and public preview artifact. `package.json#license` is set to `MIT`.

## Artifact Naming

Locked static preview artifact:

```text
sparkbot-shell-preview-0.8.0-layer8
```

Locked package/version label:

```text
0.8.0-layer8-preview
```

The generated preview artifact is for internal/staging review. Do not tag a public release, publish to npm, or upload the artifact unless Phil explicitly approves that release operation.
