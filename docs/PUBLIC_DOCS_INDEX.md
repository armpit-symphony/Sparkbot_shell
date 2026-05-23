# Public Docs Index

Updated: 2026-05-23

This is the user-facing docs index for future public release artifacts. It is separate from repo-only staging docs.

Public artifacts should contain only clean docs that help users install, understand, and safely use Sparkbot Shell. Repo staging docs can remain in git, but generated public artifacts must exclude extraction maps, R&D path maps, internal extraction planning, private/source-boundary notes, no-go/internal readiness docs, and staging implementation planning.

Current static shell preview status: ready for staging preview review after public docs/package QA. Public package signoff still needs license/final repo naming, final artifact naming, and physical/mobile browser review.

## Public Artifact Docs

| Public doc | Status | Notes |
|---|---|---|
| `README.md` | READY FOR STAGING REVIEW | Current public overview, setup commands, caveats, and artifact boundary summary. |
| `docs/INSTALL.md` | READY FOR STAGING REVIEW | Covers install/build/dev/package-preview commands without private deployment notes. |
| `docs/CAPABILITIES.md` | READY FOR STAGING REVIEW | Separates current static preview capabilities from runtime features. |
| `docs/ARCHITECTURE_OVERVIEW.md` | READY FOR STAGING REVIEW | Explains Workstation, Chat, Round Table, Command Center, Task Guardian, Connectors, Docs, and Robo Preview. |
| `docs/SECURITY_AND_GUARDRAILS.md` | READY FOR STAGING REVIEW | Describes no credential storage, no runtime calls, and future guardrail direction. |
| `docs/LOCAL_AI_SETUP.md` | READY FOR STAGING REVIEW | Explains Local AI setup labels and no live endpoint checks. |
| `docs/ROUND_TABLE_OVERVIEW.md` | READY FOR STAGING REVIEW | Explains Meeting Manager, phases, assignments, wrap-up, and notes preview. |
| `docs/TASK_GUARDIAN_OVERVIEW.md` | READY FOR STAGING REVIEW | Explains PC/server health previews, app default delivery, and no scheduler/collector. |
| `docs/CONNECTORS_OVERVIEW.md` | READY FOR STAGING REVIEW | Explains opt-in connectors, fail-closed recall, live-QA UNKNOWN, and SMS/text unsupported. |
| `docs/ROBO_PREVIEW.md` | READY FOR STAGING REVIEW | Explains teaser-only status and no hardware control. |
| `docs/BETA_LIMITATIONS.md` | READY FOR STAGING REVIEW | Lists current preview limits and release blockers. |

## Repo-Only Staging Docs

Keep these in the repo for auditability, but exclude them from public release artifacts:

- Extraction maps.
- Extraction readiness docs.
- Staging status docs.
- No-go gates.
- Internal extraction planning.
- Private/source-boundary notes.
- R&D path maps.

## Release Artifact Rule

Before generating a public release artifact, packaging QA must confirm the artifact docs match the public list above and do not include repo-only staging docs.

The `npm run package:preview` dry run now enforces this allowlist and writes the generated artifact under `preview-artifacts/`.
