# Release Decision Gate

Updated: 2026-05-23

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
| Connector claims | External delivery/private recall is `OUT_OF_SCOPE_STATIC_PREVIEW` for static shell preview; future runtime validation only. |
| Current readiness color | YELLOW. |
| Option B status | Approved; Edge emulated mobile QA passed; physical-device QA remains manual/unverified. |

## Decision Options

| Option | Decision | Effect | Risk |
|---|---|---|---|
| A | Continue internal preview only. | Keep artifact and docs available for internal/staging review. No public action. | Lowest risk; mobile QA and approval remain pending. |
| B | Run true physical-device mobile QA, then repackage if fixes are needed. | Run 390px physical-mobile QA, patch confirmed issues only, regenerate package, and re-run validation. | Best if physical check finds clipping or nav usability issues. |
| C | Approve public preview artifact generation but no public announcement. | Generate a public-safe artifact from staging after final validation, but do not tag, publish, upload, or announce. | Useful for private handoff; still not public. |
| D | Approve public announcement/tag/upload. | Allows public-facing action only after Phil explicitly approves scope, destination, and wording. | Highest risk; should wait for physical/mobile QA and final package inspection. |
| E | Pause and return to runtime contract layer. | Stop release-gate work and begin contract-only runtime planning. | Keeps engineering moving but does not close public preview gates. |

## Current Recommendation

Option A is the safe default until physical/mobile QA is complete.

Option B now includes a true physical-device mobile QA pass before the next packaging decision.

Option C can be considered after physical QA passes and required fixes are revalidated.

Option D still requires explicit Phil approval for scope, destination, and announcement wording.

## Required Before GREEN

- Physical/mobile 390px QA completed and documented (true-device pass required for `GREEN_CANDIDATE`).
- Any mobile QA defects fixed and revalidated.
- Connector delivery/private recall classified as `OUT_OF_SCOPE_STATIC_PREVIEW` for the static preview artifact; future runtime validation remains open.
- Final package validation rerun from the selected branch.
- Explicit Phil approval for the exact public action: tag, publish, upload, announcement, or none.
