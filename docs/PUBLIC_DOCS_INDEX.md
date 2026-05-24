# Public Docs Index

Updated: 2026-05-24

This is the user-facing docs index for future public release artifacts. It is separate from repo-only staging docs.

Public artifacts should contain only clean docs that help users install, understand, and safely use Sparkbot Shell. Repo staging docs can remain in git, but generated public artifacts must exclude extraction maps, R&D path maps, internal extraction planning, private/source-boundary notes, no-go/internal readiness docs, and staging implementation planning.

Current static shell preview status: ready for internal/staging preview artifact generation after public docs/package QA. MIT license, artifact naming, and package/version label are locked for this static preview. Physical/mobile browser review passed on 2026-05-23 for this branch and should be re-run if UI/layout/artifact content changes.

## Public Artifact Docs

| Public doc | Status | Notes |
|---|---|---|
| `README.md` | READY FOR STAGING REVIEW | Current public overview, setup commands, caveats, and artifact boundary summary. |
| `LICENSE` | READY FOR STAGING REVIEW | MIT license with SparkPit Labs / Phil Lima copyright. |
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

## Decision / QA Docs

These are repo-staging docs for preview signoff and should not ship in the public artifact:

- [Release decision gate](RELEASE_DECISION_GATE.md)
- [Release decisions](RELEASE_DECISIONS.md)
- [Physical mobile QA checklist](PHYSICAL_MOBILE_QA_CHECKLIST.md)
- [Public preview readiness summary](PUBLIC_PREVIEW_READINESS_SUMMARY.md)
- [Package QA report](PACKAGE_QA_REPORT.md)
- [Static preview signoff](STATIC_PREVIEW_SIGNOFF.md)

## Repo-Only Staging Docs

Keep these in the repo for auditability, but exclude them from public release artifacts:

- Extraction maps.
- Extraction readiness docs.
- Staging status docs.
- No-go gates.
- Internal extraction planning.
- Private/source-boundary notes.
- R&D path maps.
- Public import/planning docs pending runtime gating.

## Repo-Only Release-Reconciliation Planning Docs

- [Public MVP import plan](PUBLIC_MVP_IMPORT_PLAN.md)
- [Public source tree plan](PUBLIC_SOURCE_TREE_PLAN.md)
- [Stub strategy](STUB_STRATEGY.md)
- [Code import stop gates](CODE_IMPORT_STOP_GATES.md)
- [Public MVP acceptance criteria](PUBLIC_MVP_ACCEPTANCE_CRITERIA.md)
- [Public preview release candidate](PUBLIC_PREVIEW_RELEASE_CANDIDATE.md)
- [Public preview launch checklist](PUBLIC_PREVIEW_LAUNCH_CHECKLIST.md)
- [Public preview messaging draft](PUBLIC_PREVIEW_MESSAGING_DRAFT.md)

## Release Artifact Rule

Before generating a public release artifact, packaging QA must confirm the artifact docs match the public list above and do not include repo-only staging docs.

The `npm run package:preview` dry run now enforces this allowlist and writes the generated artifact under `preview-artifacts/`.
