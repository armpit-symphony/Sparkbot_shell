# Release Decision Gate

Updated: 2026-05-23

This gate records the decisions needed before Sparkbot Shell moves from staging preview to public preview signoff.

## Decision Matrix

| Decision | Recommendation | Alternatives | Risk | Phil decision needed |
|---|---|---|---|---|
| License | MIT for easiest hobbyist/open-source adoption. | Apache-2.0 for explicit patent grant; no license yet for private staging only. | Shipping without a license makes public use ambiguous. | Choose license before final public release. |
| Final repo/org/name | Likely `sparkpit-labs/Sparkbot` later. | Keep `armpit-symphony/Sparkbot_shell` as staging; rename this repo; create a fresh public repo. | Wrong public home can confuse users and package links. | Choose final public home before public release. |
| Package/artifact name | `sparkbot-shell-preview-0.8.0-layer8`. | `sparkbot-public-preview-0.8.0`. | Naming can overstate readiness if it looks like a final release. | Choose preview artifact name before publishing. |
| Version naming | Keep `0.8.0-layer8` for staging preview metadata. | Use `0.8.0-preview` or `0.8.0`. | Removing preview/layer context can imply runtime readiness. | Decide final preview version string. |
| `Sparkbot_shell` role | Keep as staging until final public repo/import decision. | Promote this repo directly to public package source. | Staging docs and repo history are intentionally broader than public artifacts. | Confirm staging role. |
| Preview artifact source | Use `npm run package:preview` from this branch for staging review only. | Use raw npm package after `files` allowlist; create zip/tar later. | Publishing the wrong artifact path could leak staging docs. | Confirm approved artifact workflow. |
| Live connector QA blocks preview | Do not block static preview; keep connector delivery/private recall YELLOW/UNKNOWN. | Block all preview until live connector QA; remove connector pages from preview. | Overclaiming connectors is the main risk, not showing setup caveats. | Confirm YELLOW/UNKNOWN connector status is acceptable. |
| Runtime contract layer start | Start only after license/repo/artifact/mobile QA decisions close. | Start runtime contracts in parallel. | Runtime work can distract from public boundary signoff. | Decide when runtime contracts begin. |

## Gate Result

Current recommendation: the static shell is ready for staging preview review, but not final public release signoff.

Open blockers:

- License decision.
- Final public repo/org/name.
- Final artifact name/version.
- Physical/mobile 390px QA.
- Live connector QA remains UNKNOWN for external delivery/private recall claims.
