# Release Decision Gate

Updated: 2026-05-24

This gate records the exact decision options for Phil after static preview signoff and before any public-facing action.

No tag, npm publish, public upload, release artifact upload, or public announcement may happen without explicit Phil approval.

## Locked Decisions

| Decision | State |
|---|---|
| License | MIT. |
| Copyright | `Copyright (c) 2026 SparkPit Labs / Phil Lima`. |
| Current repo | `armpit-symphony/Sparkbot_shell` remains staging. |
| Future public repo direction | Likely `sparkpit-labs/Sparkbot`; migration is later. |
| Preview artifact name | `sparkbot-shell-preview-0.8.0-layer8`. |
| Package/version label | `0.8.0-layer8-preview`. |
| Runtime boundary | Static shell only; no runtime/backend/provider/connector/scheduler/memory/robotics behavior. |
| Connector claims | External delivery/private recall is `OUT_OF_SCOPE_STATIC_PREVIEW` for this static shell artifact; future runtime validation only. |
| Current readiness color | GREEN_CANDIDATE (not public release). |
| Option B status | Completed and passed by Phil manual physical-device QA. |

## Decision Options

| Option | Decision | Effect | Risk |
|---|---|---|---|
| A | Continue internal preview only. | Keep artifact and docs available for internal/staging review. No public action. | Lowest risk; no announcement action taken. |
| B | Run true physical-device mobile QA, then repackage if fixes are needed. | Run 390px physical-mobile QA, patch confirmed issues only, regenerate package, and re-run validation. | Already completed for this branch; use only if new UI/package changes appear. |
| C | Approve public preview artifact generation but no public announcement. | Generate a public-safe artifact and share as preview-internal/staging without tag, publish, upload, or announcement. | Requires release messaging to avoid runtime claims. |
| D | Approve public announcement/tag/upload. | Allows public-facing action only after Phil explicitly approves scope, destination, and wording. | Highest risk; requires final release decision. |
| E | Pause and return to runtime contract layer. | Stop release-gate work and begin runtime contract-only planning. | Keeps engineering moving but does not close static-preview gates. |

## Current Recommendation

Option C may be considered next if Phil wants non-public staging handoff after this validated gate.

Option D remains blocked without explicit Phil approval for the exact public action (tag/publish/upload/announcement).

## Required Before Option D Public Action

- Physical/mobile 390px QA is completed and documented for this branch (2026-05-23). Re-run if UI/layout/artifact content changes.
- Any new mobile QA defects must be fixed and revalidated.
- Connector/private recall remains `OUT_OF_SCOPE_STATIC_PREVIEW` for this static shell.
- Final package validation rerun from the selected branch.
- Explicit Phil approval for the exact public action: tag, publish, upload, announcement, or none.
