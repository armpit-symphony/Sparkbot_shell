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
| Connector claims | External delivery/private recall remains YELLOW/UNKNOWN. |
| Current readiness color | YELLOW. |
| Option B status | Approved; Edge emulated mobile QA passed; physical-device QA remains manual/unverified. |

## Decision Options

| Option | Decision | Effect | Risk |
|---|---|---|---|
| A | Continue internal preview only. | Keep artifact and docs available for internal/staging review. No public action. | Lowest risk; mobile QA and approval remain pending. |
| B | Fix mobile QA issues then repackage. | Run physical/mobile QA, patch only confirmed layout/doc issues, regenerate package, and re-run validation. | Best if 390px testing finds clipping or nav issues. |
| C | Approve public preview artifact generation but no public announcement. | Generate a public-safe artifact from staging after final validation, but do not tag, publish, upload, or announce. | Useful for private handoff; still not public. |
| D | Approve public announcement/tag/upload. | Allows public-facing action only after Phil explicitly approves scope, destination, and wording. | Highest risk; should wait for physical/mobile QA and final package inspection. |
| E | Pause and return to runtime contract layer. | Stop release-gate work and begin contract-only runtime planning. | Keeps engineering moving but does not close public preview gates. |

## Current Recommendation

Option A is the safe default until physical/mobile QA is complete.

Option B has been run with Edge emulation. Choose another Option B pass only if Phil wants true physical-device QA results recorded or if a manual tester finds a mobile defect to fix.

Option D should not be chosen until physical/mobile QA is complete and the final artifact destination/announcement wording are explicitly approved.

## Required Before GREEN

- Physical/mobile 390px QA completed and documented.
- Any mobile QA defects fixed and revalidated.
- Connector delivery/private recall still labeled YELLOW/UNKNOWN unless live connector QA passes.
- Final package validation rerun from the selected branch.
- Explicit Phil approval for the exact public action: tag, publish, upload, announcement, or none.
