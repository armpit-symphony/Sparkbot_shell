# Public Preview Readiness Summary

Updated: 2026-05-23

## Current Preview

- Current status color: YELLOW.
- Current branch: `public-release-physical-qa-record`.
- Base signoff commit: `37f614fdf29c05140e2d290b1f05432b788cc084`.
- Current preview version: `0.8.0-layer8-preview`.
- Artifact name: `sparkbot-shell-preview-0.8.0-layer8`.
- Artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`.
- License: MIT.
- Current repo: `armpit-symphony/Sparkbot_shell` staging workspace.
- Likely future public repo: `sparkpit-labs/Sparkbot`.

YELLOW means the package may be used for internal/staging review, but public announcement is not approved until Phil explicitly approves and physical-device mobile QA is complete.

Readiness rules:

- Physical-device 390px QA is `REQUIRED_FOR_GREEN`.
- Physical-device status is `MANUAL_REQUIRED` until a true physical run is completed.
- Connector/private recall is `OUT_OF_SCOPE_STATIC_PREVIEW` for this shell artifact and does not block static readiness unless runtime claims are added.

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
- Edge headless 375px, 390px, 768px, and 1365px viewport screenshots.
- Edge DevTools layout metrics for `/`, `/workstation`, `/chat`, `/roundtable`, `/command-center`, `/task-guardian`, `/connectors`, `/robo`, and `/docs`.

`npm run lint` is not configured.

## Remaining Blockers

- Physical-device 390px browser QA.
- Connector/private recall: `OUT_OF_SCOPE_STATIC_PREVIEW` (future runtime-contract validation item).
- Explicit Phil approval is required before any tag, npm publish, public upload, or public announcement.

## Risk Table

| Risk | Current state | Color | Required action |
|---|---|---|---|
| Mobile QA | Edge emulated 375px/390px/768px/desktop QA passed; true physical-device QA is NOT_RUN. | YELLOW | Complete physical-device QA or get Phil-provided physical confirmation before GREEN. |
| Connector/private recall | `OUT_OF_SCOPE_STATIC_PREVIEW` in the static shell artifact. | N/A | Validate in future runtime contract layer; not a static-preview blocker. |
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

Option B status: Edge emulation QA passed without required UI fixes. Physical-device QA remains manual/unverified, so readiness remains YELLOW.

## Recommended Next Step

Phil should choose one option from [Release decision gate](RELEASE_DECISION_GATE.md). The safest default is Option A: continue internal preview only until physical/mobile QA is complete.
