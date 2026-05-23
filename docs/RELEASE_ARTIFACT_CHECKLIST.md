# Release Artifact Checklist

Updated: 2026-05-23

This checklist governs preview package and future public artifact review.

## Ship Public

- [x] `README.md`
- [x] `docs/INSTALL.md`
- [x] `docs/CAPABILITIES.md`
- [x] `docs/ARCHITECTURE_OVERVIEW.md`
- [x] `docs/SECURITY_AND_GUARDRAILS.md`
- [x] `docs/LOCAL_AI_SETUP.md`
- [x] `docs/ROUND_TABLE_OVERVIEW.md`
- [x] `docs/TASK_GUARDIAN_OVERVIEW.md`
- [x] `docs/CONNECTORS_OVERVIEW.md`
- [x] `docs/ROBO_PREVIEW.md`
- [x] `docs/BETA_LIMITATIONS.md`
- [ ] License file once Phil chooses a license.

## Repo Only / Exclude From Public Artifact

- [x] `docs/EXTRACTION_MAP.md`
- [x] `docs/EXTRACTION_READINESS_ASSESSMENT.md`
- [x] Layer status docs.
- [x] Staging QA docs.
- [x] No-go/internal readiness docs.
- [x] Public/private source-boundary planning docs.
- [x] Internal extraction maps.
- [x] `.git`, `.github`, `.agents`, `node_modules`, tests, logs, caches, env files, and secret material.

## Dry-Run Checks

- [x] Run `npm run build`.
- [x] Run `npm run package:preview`.
- [x] Run `npm pack --dry-run --json` and confirm raw npm packaging is constrained to public-safe files.
- [x] Confirm preview artifact contains built static app.
- [x] Confirm preview artifact contains README and allowlisted public docs only.
- [x] Confirm preview artifact does not contain repo-only staging docs.
- [x] Confirm preview artifact does not contain env files, secrets, logs, caches, source-boundary notes, or R&D path maps.
- [x] Confirm package report is updated with inspection results.

## Signoff Blockers

- License decision is still open.
- Final public repo/org/name is still open.
- Final public artifact name/version is still open.
- Physical/mobile 390px QA is still open.
- Live connector QA remains UNKNOWN for external delivery/private recall claims.
