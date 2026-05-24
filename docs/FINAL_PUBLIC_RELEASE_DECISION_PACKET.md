# Final Public Release Decision Packet

Date: 2026-05-24  
Status: `GREEN_CANDIDATE` (static-preview only, not released)

This document is the pre-Option-D decision packet for Phil.

## Current Candidate

- Package/version: `0.8.0-layer8-preview`
- Artifact name: `sparkbot-shell-preview-0.8.0-layer8`
- Artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`
- Readiness color: `GREEN_CANDIDATE`
- Physical QA status: PASSED (Phil, 2026-05-23)
- License: MIT (`LICENSE` and `package.json`)
- Included docs/features:
  - Static UI shell surfaces and placeholder/contract surfaces.
  - Docs boundary allowlist: install, architecture, capabilities, security, local AI setup, roundtable, task guardian, connectors, robo teaser, beta limits.
  - Source-boundary and release-gating docs for this staging branch.
- Excluded runtime/proprietary features:
  - No backend runtime
  - No provider model calls
  - No connector sessions/sends/dispatch
  - No persistence/memory runtime
  - No scheduler
  - No Guardian internals
  - No terminal/browser runtime
  - No robotics/IoT control
  - No LIMA/Arc/Office/IT live wiring
- Validation summary:
  - `build` and `package:preview` passed.
- No public-release actions performed yet:
  - No tag created.
  - No upload.
  - No announcement.

## Open Decisions

1. Final public repo home (**TBD**).
2. Final public version/tag.
3. Artifact upload destination.
4. Keep `0.8.0-layer8-preview` or rename to a `v1.0.0`-based public preview version.
5. Whether repository/README links must be rewritten from staging/branch URLs to final public-home URLs.
6. Announcement channel and release note ownership.
7. Whether to create release notes/changelog before Option D.
8. Whether to merge consolidated branch into `main` before Option D.

## Decision Options

### Option A - Hold Internal `GREEN_CANDIDATE`

Keep branch in internal/staging mode, maintain `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`.

### Option B - Revise Docs/Copy/Versioning and Repackage

Continue docs polish and versioning edits in the staging branch, then rerun package checks.

### Option C - Prepare Official Repo Move/Copy, No Announcement

Prepare path to final hosting without executing tag/upload/announcement.

## Option C Readiness Status (Current)

- Status: **deferred pending repo-home decision**.
- Scope: routing/state correction for staging and future move planning.
- Pending constraints: final repo home, version/tag, artifact destination, announcement policy.
- This branch includes:
  - official public repo readiness packet,
  - sanitized export plan,
  - repo home decision matrix,
  - copy dry-run checklist,
  - branding/link cleanup plan,
  - versioning finalization plan.
- No copy/push/release actions are permitted in this stage.
- Preflight was re-run after access approval; target remains a future candidate and this pass is now explicitly deferred.

### Option D - Approve Tag/Upload/Announcement

Proceed only after all open decisions above are approved.

### Option E - Pause and Return to LIMA AI OS Contract Work

Pause release execution and continue LIMA contract-first work only.

## Recommendation

Do not execute Option D yet.  
Option D remains blocked until Phil approves:
- final public repo home
- final public version/tag
- final artifact destination
- announcement policy
- release note policy

Current execution gate:
- Option C execution is **deferred** with routing correction applied (`FUTURE_REPO_HOME_TBD`).
- Active staging repo is `armpit-symphony/Sparkbot_shell`.
- No copy/push/release actions are permitted in this stage.
- Option D remains blocked until explicit Phil approval on:
  - final repo home
  - final version/tag
  - artifact destination
  - announcement channel

Current branch to use for staging and pre-Option-D packeting: `public-release-official-repo-preflight`.
