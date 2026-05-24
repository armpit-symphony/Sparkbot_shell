# Public Preview Readiness Summary

Updated: 2026-05-24

## Current Preview

- Current status color: `GREEN_CANDIDATE` (not public release; static preview readiness milestone reached).
- Current branch: `static-shell-mock-contract-baseline`.
- Base signoff commit: `d6a528f`.
- Current preview version: `0.8.0-layer8-preview`.
- Artifact name: `sparkbot-shell-preview-0.8.0-layer8`.
- Artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`.
- License: MIT.
- Current repo: `armpit-symphony/Sparkbot_shell` staging workspace.
- Final public repo/home: TBD.

`GREEN_CANDIDATE` means the current static preview artifact is ready to be considered for public preview; it is still not publicly released.

Readiness rules:

- Physical-device 390px QA is `REQUIRED_FOR_GREEN`.
- Physical-device status is `PASSED` by Phil manual verification.
- Connector/private recall is `OUT_OF_SCOPE_STATIC_PREVIEW` for this static artifact and does not block static readiness unless runtime claims are added.

## Included

- Static Vite/React/TypeScript shell.
- Workstation, Chat, Round Table, Command Center, Task Guardian, Connectors, Robo Preview, and Docs routes.
- Static `LIMA AI OS ready layer` panel with phased contract/install path messaging.
- Polished public-preview UX for Workstation, Round Table, model-stack seats, Guardian basics, and Robo teaser.
- Static fixture previews for Files/Knowledge, Memory, Tasks/Reminders, and a unified Demo Room context.
- Final product-demo storyline polish across Workstation, Round Table, and demo fixtures.
- Wave 1 candidate #1 complete: Workstation visual layout refinement as manual static adaptation only.
- Wave 1 candidate #2 complete: Round Table visual flow refinement as manual static adaptation only.
- Wave 1 candidate #3 complete: Model stack + Invite Wing visual flow refinement as manual static adaptation only.
- Wave 1 candidate #4 complete: Docs/info visual refinement as manual static adaptation only.
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
- Direct R&D source-file copy.

## Validation Already Passed

- `git diff --check`.
- `npm run build`.
- `npm run package:preview`.
- `npm pack --dry-run --json`.
- `node --check scripts/package-preview.mjs`.
- Markdown link check.
- Runtime/persistence scan over `src`.
- Source boundary check: no `backend/`, `src-tauri/`, `.github/`, `.agents/`.
- Preview artifact high-risk scan.
- Secret/private scan.
- Edge headless 375px, 390px, 768px, and 1365px viewport screenshots.
- Edge DevTools layout metrics for `/`, `/workstation`, `/chat`, `/roundtable`, `/command-center`, `/task-guardian`, `/connectors`, `/robo`, and `/docs`.
- Physical-device QA pass confirmed manually by Phil.

`npm run lint` is not configured.

## Remaining Blockers

- Explicit Phil approval is required before any tag, npm publish, public upload, or public announcement.
- Final public release depends on release decision Option D and final repo-home/version/announcement decisions.

## Risk Table

| Risk | Current state | Color | Required action |
|---|---|---|---|
| Mobile QA | Edge emulated 375px/390px/768px/desktop QA passed; physical-device QA passed by Phil. | GREEN_CANDIDATE | Re-run physical-device checks if any UI or artifact layout changes are made. |
| Connector/private recall | `OUT_OF_SCOPE_STATIC_PREVIEW` in the static shell artifact. | N/A | Validate live connector recall/delivery in future runtime-contract layers. |
| License | MIT license added and package metadata says MIT. | GREEN | Keep LICENSE in artifact and package allowlists. |
| Artifact contents | Preview artifact inspection passed against the public-safe allowlist. | GREEN | Re-run artifact inspection before any upload. |
| Public messaging | Docs now record static-only shell and explicit release-action approval requirement. | YELLOW | Phil must choose the next release option. |
| No runtime | Runtime/persistence scans passed; shell is static/demo only. | GREEN | Do not add runtime in this gate. |
| No proprietary leakage | Artifact high-risk scan passed; repo-only staging docs remain excluded. | GREEN | Keep generated-artifact scans mandatory. |

## Decision States

| Color | Meaning |
|---|---|
| RED | Cannot preview. A release-boundary, private-leakage, build, artifact, or runtime-overclaim blocker exists. |
| YELLOW | Internal/staging preview only. Public announcement, tag, npm publish, and upload are blocked. |
| GREEN_CANDIDATE | Static preview artifact is complete and ready for final release decision; still not released. |

## Current Decision

Current status is `GREEN_CANDIDATE`.

The static preview package is complete for internal/staging use and physical/mobile QA in this branch.
It is not approved for public announcement, tag, npm publish, upload, or final public release.

Option B status: completed and passed with Phil manual verification.
Current work continues as static-only Wave 1 checkpoint/audit readiness.
Current product-demo and docs/info polish pass is complete and keeps the same static-only boundary.
Wave 1 candidate #1 (Workstation visual adaptation) is complete with no runtime/API/storage additions.
Wave 1 candidate #2 (Round Table visual adaptation) is complete with no runtime/API/storage additions.
Wave 1 candidate #3 (Model stack + Invite Wing visual adaptation) is complete with no runtime/API/storage additions.
Wave 1 candidate #4 (Docs/info visual refinement) is complete with no runtime/API/storage additions.

Wave 1 checkpoint status: verified as static and release-safe for this branch, and consolidated with mock LIMA contract planning docs.

## Mock LIMA Contract Planning Status

- Option C is complete for planning artifacts:
  - `docs/LIMA_CONTRACT_LAYER_PLAN.md`
  - `docs/LIMA_CONTRACT_MOCK_SCHEMA.md`
  - `docs/LIMA_CONTRACT_FIXTURES.md`
  - `docs/LIMA_CONTRACT_FRONTEND_READINESS.md`
  - `docs/LIMA_CONTRACT_STOP_GATES.md`
- `Sparkbot_shell` keeps these as docs/fixture-only references.
- No runtime behavior or API calls added in this pass.

## Recommended Next Step

Phil should choose one option from [Release decision gate](RELEASE_DECISION_GATE.md):

- Continue frontend-only MVP shell refinement and contract-readiness prep in staging.
- Perform Wave 1 checkpoint/audit closure actions documented in this branch and then choose either:
  - Continue static-only refinement (Option B),
  - Mock LIMA contract layer planning (docs/fixtures only), or
  - Release-candidate branch consolidation.
- Option C execution remains tied to explicit official repo-home approval.
- Option D for public announcement/tag/upload after explicit Phil approval.
