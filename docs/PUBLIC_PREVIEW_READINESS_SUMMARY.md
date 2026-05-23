# Public Preview Readiness Summary

Updated: 2026-05-23

## Current Preview

- Current status color: YELLOW.
- Current branch: `public-release-shell-mobile-qa-gate`.
- Base signoff commit: `37f614fdf29c05140e2d290b1f05432b788cc084`.
- Current preview version: `0.8.0-layer8-preview`.
- Artifact name: `sparkbot-shell-preview-0.8.0-layer8`.
- Artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`.
- License: MIT.
- Current repo: `armpit-symphony/Sparkbot_shell` staging workspace.
- Likely future public repo: `sparkpit-labs/Sparkbot`.

YELLOW means the package may be used for internal/staging review, but public announcement is not approved until Phil explicitly approves and physical/mobile QA is complete.

## Included

- Static Vite/React/TypeScript shell.
- Workstation, Chat, Round Table, Command Center, Task Guardian, Connectors, Robo Preview, and Docs routes.
- Public docs bundle.
- MIT `LICENSE`.
- Preview package script.
- Built static preview artifact.
- Public-safe package metadata.

## Intentionally Excluded

- Backend runtime.
- Model/provider calls.
- Local AI calls.
- Connector sends or webhooks.
- PIN verification or connector sessions.
- Scheduler and health collector runtime.
- Memory persistence/private recall.
- Guardian internals.
- Terminal/browser execution.
- Robotics/IoT control.
- LIMA AI OS, Arc Bot, LIMA Office, or LIMA IT wiring.
- Sparkbot R&D source code.

## Validation Already Passed

- `git diff --check`.
- `npm run build`.
- `npm run package:preview`.
- `npm pack --dry-run --json`.
- `node --check scripts/package-preview.mjs`.
- Markdown link check.
- Runtime/persistence scan over `src`.
- Source boundary check: no `backend/`, `src-tauri/`, `.github/`, or `.agents`.
- Preview artifact high-risk scan.
- Secret/private scan.

`npm run lint` is not configured.

## Remaining Blockers

- Physical/mobile 390px browser QA.
- Connector delivery/private recall remains YELLOW/UNKNOWN until live test credentials/channels are configured and tested.
- Explicit Phil approval is required before any tag, npm publish, public upload, or public announcement.

## Risk Table

| Risk | Current state | Color | Required action |
|---|---|---|---|
| Mobile QA | 390px physical/mobile browser QA is NOT_RUN. | YELLOW | Run the checklist in [Physical mobile QA checklist](PHYSICAL_MOBILE_QA_CHECKLIST.md). |
| Connector/private recall unknown | External delivery/private recall is shell-only and live-QA UNKNOWN. | YELLOW | Keep YELLOW/UNKNOWN until test-only live connector QA passes. |
| License | MIT license added and package metadata says MIT. | GREEN | Keep LICENSE in artifact and package allowlists. |
| Artifact contents | Preview artifact inspection passed against the public-safe allowlist. | GREEN | Re-run artifact inspection before any upload. |
| Public messaging | Docs say internal/staging preview only and no announcement without Phil approval. | YELLOW | Phil must choose the next decision option. |
| No runtime | Runtime/persistence scans passed; shell is static/demo state only. | GREEN | Do not add runtime in this gate. |
| No proprietary leakage | Artifact high-risk scan passed; repo-only staging docs remain excluded. | GREEN | Keep generated-artifact scans mandatory. |

## Decision States

| Color | Meaning |
|---|---|
| RED | Cannot preview. A release-boundary, private-leakage, build, artifact, or runtime-overclaim blocker exists. |
| YELLOW | Internal/staging preview only. Public announcement, tag, npm publish, and upload are blocked. |
| GREEN | Approved for public preview after Phil approval, physical/mobile QA completion, and final validation. |

## Current Decision

Current status remains YELLOW.

The static preview package is valid for internal/staging review. It is not approved for public announcement, tag, npm publish, upload, or final release.

## Recommended Next Step

Phil should choose one option from [Release decision gate](RELEASE_DECISION_GATE.md). The safest default is Option A: continue internal preview only until physical/mobile QA is complete.
