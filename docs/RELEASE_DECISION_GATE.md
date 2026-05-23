# Release Decision Gate

Updated: 2026-05-23

This gate records the decisions for the Sparkbot Shell static preview and what still blocks a public announcement or final public release.

## Decision Matrix

| Decision | Locked decision | Alternatives rejected/deferred | Risk controlled | Status |
|---|---|---|---|---|
| License | MIT for the static public preview unless a legal blocker is discovered. | Apache-2.0; no-license staging-only mode. | Public use rights are no longer ambiguous for the preview. | DECIDED |
| License holder | `Copyright (c) 2026 SparkPit Labs / Phil Lima`. | Company-only or person-only holder. | Makes ownership visible while preserving project identity. | DECIDED |
| Current repo role | `armpit-symphony/Sparkbot_shell` remains staging. | Rename or migrate this repo now. | Avoids mixing staging docs/history with final public home decisions. | DECIDED |
| Future repo/org/name | Likely future target is `sparkpit-labs/Sparkbot`. | Promote this staging repo directly; choose a different public home now. | Keeps public naming direction visible without doing migration in this phase. | DIRECTION SET |
| Preview artifact name | `sparkbot-shell-preview-0.8.0-layer8`. | `sparkbot-public-preview-0.8.0`; generated formula name. | Prevents the artifact from looking like a final public release. | DECIDED |
| Package/version label | `0.8.0-layer8-preview`. | `0.8.0-layer8`; `0.8.0`; `0.8.0-preview`. | Keeps preview/layer context in package metadata. | DECIDED |
| Preview artifact source | `npm run package:preview` from this branch may produce an internal/staging review artifact. | Publish to npm; tag public release; upload package. | Keeps package generation separate from public distribution. | DECIDED |
| Live connector QA blocks preview artifact | Does not block internal/staging artifact generation; connector delivery/private recall stays YELLOW/UNKNOWN. | Mark connectors GREEN; remove connector shell. | Allows preview review without overclaiming external delivery. | DECIDED |
| Physical/mobile 390px QA | Required before public announcement, not a blocker for internal/staging preview artifact generation. | Treat as already complete; block all artifact generation. | Keeps visual gate honest without blocking package QA. | OPEN BEFORE ANNOUNCEMENT |
| Runtime contract layer start | Recommended after static preview signoff; start with contracts, not runtime implementation. | Start direct runtime/backend implementation now. | Prevents runtime work from bypassing boundary review. | RECOMMENDED NEXT |

## Gate Result

The static shell is approved for internal/staging preview artifact generation on this branch.

It is not a final public release and should not be announced publicly until physical/mobile 390px QA is completed and any final publication checklist is re-run.

## Still Blocked Before Public Announcement

- Physical/mobile 390px browser QA.
- Connector delivery/private recall must remain YELLOW/UNKNOWN unless live test credentials/channels are configured and tested.
- No public release tag, npm publish, or upload should happen without explicit Phil approval.
