# Static Preview Signoff

Updated: 2026-05-24

## Signoff Scope

This document signs off the Sparkbot Shell static preview package for internal/staging review.

It is not a final public release, npm publication, release tag, or uploaded artifact.

## Decisions Locked

| Decision | Status |
|---|---|
| License | MIT selected for the static preview unless a legal blocker is discovered. |
| Copyright | `Copyright (c) 2026 SparkPit Labs / Phil Lima`. |
| Current repo | `armpit-symphony/Sparkbot_shell` remains staging. |
| Future public repo direction | Likely `sparkpit-labs/Sparkbot`; migration is a later release operation. |
| Preview artifact name | `sparkbot-shell-preview-0.8.0-layer8`. |
| Package/version label | `0.8.0-layer8-preview`. |
| Connector claims | External delivery/private recall remains YELLOW/UNKNOWN until live connector QA passes. |
| Physical/mobile QA | Required before public announcement, not a blocker for internal/staging preview artifact generation. |

## Package QA Results

- `npm run build`: PASS.
- `npm run package:preview`: PASS.
- `npm pack --dry-run --json`: PASS.
- Markdown link check: PASS.
- Runtime/persistence scan: PASS.
- Source boundary check: PASS.
- Secret/private scan: no live secrets or private paths found.

## Included In Preview Artifact

- Built static app.
- `README.md`.
- `LICENSE`.
- `package.json`.
- `package-metadata.json`.
- Public docs only.

## Excluded From Preview Artifact

- Staging/internal extraction docs.
- R&D path maps.
- No-go/internal readiness docs.
- `.git`, `.github`, `.agents`.
- `node_modules`.
- Logs, caches, env files, tests, and workflows.
- Backend/runtime code.
- Connector runtime.
- Guardian runtime.
- Robo bridge.
- LIMA/Arc/Office/IT private internals.

## Runtime Features Not Included

- Backend runtime.
- Model/provider calls.
- Local AI calls.
- Connector sends.
- Scheduler/runtime behavior.
- Memory persistence.
- Guardian internals.
- Terminal/browser execution.
- Robotics/IoT control.

## Remaining Before Public Announcement

- Physical/mobile 390px browser QA is completed for this branch (Phil manual pass on 2026-05-23). Re-run only if UI/layout/artifact content changes.
- Keep external connector delivery/private recall YELLOW/UNKNOWN unless test-only live connector QA passes.
- Re-run package QA from the final announcement branch/environment.
- Get explicit Phil approval before any public release tag, npm publish, or artifact upload.

See [Physical mobile QA checklist](PHYSICAL_MOBILE_QA_CHECKLIST.md), [Public preview readiness summary](PUBLIC_PREVIEW_READINESS_SUMMARY.md), and [Release decision gate](RELEASE_DECISION_GATE.md) for the current QA gate package and Phil decision options.

## Recommended Next Technical Phase

After static preview signoff and announcement gates, begin a runtime contract layer. Do not jump directly into runtime implementation.
