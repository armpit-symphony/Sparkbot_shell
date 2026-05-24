# Public Repo Copy Dry-Run Checklist

Use this checklist before any official copy/push to a public repo.

## Pre-Flight Approval

- [ ] Confirm destination repo exists.
- [ ] Confirm destination repo visibility is explicit and intended.
- [ ] Confirm destination owner/project policy allows the staged static artifact.
- [ ] Confirm license compatibility with destination and legal review.
- [ ] Confirm Phil approval for move.

## Versioning and Tagging

- [ ] Confirm final repo home.
- [ ] Confirm version/tag policy for copy branch.
- [ ] Confirm artifact naming alignment with final package metadata.
- [ ] Confirm whether archive checksum/signature policy is required.

## Link and Content Safety

- [ ] Confirm README links are final-safe and branch-agnostic.
- [ ] Confirm no branch-pinned staging URLs remain in final copy.
- [ ] Confirm no `armpit-symphony` branding remains unless temporary preview is explicitly approved.
- [ ] Confirm docs reference final public issue/security contact points.
- [ ] Confirm final public download/release links are planned.

## Technical Validation

- [ ] Run `npm run package:preview`.
- [ ] Run `npm run build`.
- [ ] Re-run `npm pack --dry-run --json`.
- [ ] Run runtime/persistence scan over exported `src` scope.
- [ ] Run source-boundary scan:
  - no `backend/`
  - no `src-tauri/`
  - no `.github/`
  - no `.agents/`
- [ ] Run secret/private scan.
- [ ] Run preview artifact high-risk scan.
- [ ] Run dependency audit (if tooling is available).

## Documentation and Governance

- [ ] Verify `docs/PUBLIC_DOCS_INDEX.md` reflects public-safe docs only.
- [ ] Verify `docs/FINAL_PUBLIC_RELEASE_DECISION_PACKET.md` and repo move packet are aligned.
- [ ] Verify release decision gates and Option D policy are still accurate.
- [ ] Confirm explicit rollback/unpublish plan in destination planning docs.
- [ ] Confirm `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT` posture is preserved until Option D.

## Copy Execution Control

- [ ] Create destination branch only after dry-run completes.
- [ ] Keep copy list constrained to sanitized tree.
- [ ] Do not push or publish until Option D approval is recorded.
- [ ] Record final check results and keep a signed review artifact in repo for traceability.

## Explicit Approval Gate

Do not execute copy/push without explicit Phil approval for all of the following:
- repo home
- version/tag
- artifact destination
- announcement channel
