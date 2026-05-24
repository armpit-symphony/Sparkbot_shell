# Public Artifact Manifest

Updated: 2026-05-24

This manifest records Phil's controlling rule for public artifact boundaries. It governs package/download QA before any public release bundle is produced.

`Sparkbot_shell` remains a public-release staging workspace, so repo docs can preserve extraction planning and readiness evidence. Public release artifacts must be cleaner than the staging repo and should contain only docs that help users install, understand, and safely use Sparkbot Shell.

## Keep In Repo

Keep these in the `Sparkbot_shell` repo for staging, review, and auditability:

- Extraction maps.
- Readiness docs.
- Staging docs.
- No-go gates.

## Exclude From Public Release Artifact

Exclude these from user-facing release bundles:

- R&D path maps.
- Internal extraction planning.
- Private/source-boundary notes.
- No-go/internal readiness docs.

## Ship In Public Artifact

Ship only clean public docs that help users install, understand, and safely use Sparkbot Shell:

- `README.md`.
- `docs/INSTALL.md`.
- `docs/CAPABILITIES.md`.
- `docs/ARCHITECTURE_OVERVIEW.md`.
- `docs/SECURITY_AND_GUARDRAILS.md`.
- `docs/LOCAL_AI_SETUP.md`.
- `docs/ROUND_TABLE_OVERVIEW.md`.
- `docs/TASK_GUARDIAN_OVERVIEW.md`.
- `docs/CONNECTORS_OVERVIEW.md`.
- `docs/ROBO_PREVIEW.md`.
- `docs/BETA_LIMITATIONS.md`.
- `LICENSE`.

## Layer 8 Application

Layer 8 package/download QA must use this manifest as the source of truth:

- Repo-only staging docs may stay in git.
- Public artifacts must not include extraction maps, R&D path maps, internal readiness/no-go docs, private/source-boundary notes, or staging implementation planning.
- Artifact inspection must confirm the shipped docs match the allowlist above.
- Any packaging script or checklist added in Layer 8 must fail closed when a repo-only staging doc appears in the generated release artifact.
- Connector delivery and private recall must remain live-QA UNKNOWN until test-only channels prove them.

## Current Status

The boundary decision has been applied as a controlling repo document. The preview package script builds a public-safe artifact from the allowlist above and excludes repo-only staging docs. Release decision gate docs now capture the locked MIT license, staging repo role, final repo-home TBD status, artifact naming, mobile QA, connector QA, and runtime sequencing decisions.

This does not add runtime behavior, connector sends, private recall, or production-readiness claims. Physical/mobile 390px QA passed for this branch on 2026-05-23 and should be re-run if UI/layout/artifact content changes. Final repo migration remains a later release operation.
The frontend product-demo polish pass changes static shell copy/layout/demo fixtures only; public artifact contents remain governed by the same allowlist.
Wave 1 candidate #1 Workstation adaptation also changes static shell layout only, with no direct R&D source-file copy and no runtime/API/storage additions.
Wave 1 candidate #2 Round Table adaptation also changes static shell layout only, with no direct R&D source-file copy and no runtime/API/storage additions.
Wave 1 candidate #3 Model stack + Invite Wing adaptation also changes static shell layout only, with no direct R&D source-file copy and no runtime/API/storage additions.
Wave 1 candidate #4 Docs/info adaptation also changes docs surface copy/layout only, with no direct R&D source-file copy and no runtime/API/storage additions.
Wave 1 checkpoint/audit is now captured on `frontend-only-wave1-checkpoint-audit`.

Current static preview lock-in: MIT license, artifact name `sparkbot-shell-preview-0.8.0-layer8`, package/version label `0.8.0-layer8-preview`, current staging repo `armpit-symphony/Sparkbot_shell`, and final public repo/home TBD.

Current readiness color is GREEN_CANDIDATE: static preview readiness milestone reached for internal/staging use. Public action is still blocked until Phil explicitly approves the exact release operation (tag/publish/upload/announcement).
