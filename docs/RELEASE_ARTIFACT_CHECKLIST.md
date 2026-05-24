# Release Artifact Checklist

Updated: 2026-05-24

This checklist governs the static preview package and future public artifact review.

## Ship Public

- [x] `LICENSE`
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

## Repo Only / Exclude From Public Artifact

- [x] `docs/EXTRACTION_MAP.md`
- [x] `docs/EXTRACTION_READINESS_ASSESSMENT.md`
- [x] Layer status docs.
- [x] Staging QA docs.
- [x] No-go/internal readiness docs.
- [x] Public/private source-boundary planning docs.
- [x] Internal extraction maps.
- [x] Static preview signoff and release decision docs.
- [x] `.git`, `.github`, `.agents`, `node_modules`, tests, logs, caches, env files, and secret material.

## Locked Preview Decisions

- [x] License: MIT.
- [x] License holder: `Copyright (c) 2026 SparkPit Labs / Phil Lima`.
- [x] Current repo remains staging: `armpit-symphony/Sparkbot_shell`.
- [x] Future public repo target is likely `sparkpit-labs/Sparkbot`.
- [x] Preview artifact name: `sparkbot-shell-preview-0.8.0-layer8`.
- [x] Package/version label: `0.8.0-layer8-preview`.
- [x] This branch may produce an internal/staging static preview artifact.
- [x] Do not tag, publish to npm, or upload without explicit Phil approval.

## Dry-Run Checks

- [x] Run `npm run build`.
- [x] Run `npm run package:preview`.
- [x] Run `npm pack --dry-run --json` and confirm raw npm packaging is constrained to public-safe files.
- [x] Confirm preview artifact contains built static app.
- [x] Confirm preview artifact contains README, LICENSE, package metadata, and allowlisted public docs only.
- [x] Confirm preview artifact does not contain repo-only staging docs.
- [x] Confirm preview artifact does not contain env files, secrets, logs, caches, source-boundary notes, or R&D path maps.
- [x] Confirm package report is updated with inspection results.

## Remaining Before Public Announcement

- [x] Physical/mobile 390px browser QA completed on 2026-05-23 (Phil manual pass). Re-run if UI/layout/artifact content changes.
- [x] Edge emulated 375px/390px/768px/desktop QA completed without required UI fixes.
- [ ] Keep connector delivery/private recall YELLOW/UNKNOWN unless live connector QA passes with test-only credentials/channels.
- [ ] Re-run package QA from the final announcement branch/environment.
- [ ] Phil chooses a release decision gate option before any tag, npm publish, upload, or public announcement.
