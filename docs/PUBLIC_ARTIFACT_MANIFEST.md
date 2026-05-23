# Public Artifact Manifest

Updated: 2026-05-22

This manifest records Phil's controlling rule for Layer 8 public artifact boundaries. It governs package/download QA before any public release bundle is produced.

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
- Install/setup docs.
- Capabilities docs.
- User-facing architecture overview.
- Security/guardrail overview.
- Local AI setup overview.
- Round Table overview.
- Task Guardian overview.
- Connector setup caveats.

## Layer 8 Application

Layer 8 package/download QA must use this manifest as the source of truth:

- Repo-only staging docs may stay in git.
- Public artifacts must not include extraction maps, R&D path maps, internal readiness/no-go docs, private/source-boundary notes, or staging implementation planning.
- Artifact inspection must confirm the shipped docs match the allowlist above.
- Any packaging script or checklist added in Layer 8 must fail closed when a repo-only staging doc appears in the generated release artifact.
- Connector delivery and private recall must remain live-QA UNKNOWN until test-only channels prove them.

## Current Status

The Layer 8 boundary decision has been applied as a controlling repo document. It does not add packaging scripts, runtime behavior, connector sends, private recall, or production-readiness claims.
