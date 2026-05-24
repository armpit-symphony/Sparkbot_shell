# Versioning Finalization Plan

## Snapshot Inputs

- Current staging version: `0.8.0-layer8-preview`
- Current artifact name: `sparkbot-shell-preview-0.8.0-layer8`
- Current readiness: `GREEN_CANDIDATE`
- Current status: `NOT_RELEASED`

## Recommended Staging Version

Keep `0.8.0-layer8-preview` for staging and internal consolidation until official repo home is approved.

Why:
- Preserves current QA trail and package metadata.
- Avoids version churn before public repo confirmation.
- Keeps runtime gap clear for a staging preview.

## Recommended Official Public Preview Version

Once Phil approves official repo home:
- Option 1: `v0.8.0-preview` (if semver-style public naming is preferred).
- Option 2: `v1.0.0-public-preview` (if explicit "public-preview" milestone is preferred).

Choose only when:
- repo home is final
- README, docs, links, and artifact naming are updated for public destination
- no staged internal-only references remain in public-facing pages

## Recommended Final v1.0.0 Criteria

Reserve `v1.0.0` for a materially later milestone where:
- runtime contract and installation policy are approved,
- release expectations match final user-facing scope,
- artifact destination and release notes are finalized,
- public-facing docs and support links are stable,
- and Phil has approved Option D.

## Recommendation

- Keep staging on `0.8.0-layer8-preview`.
- Move to `v0.8.0-preview` or `v1.0.0-public-preview` only after official repo approval.
- Reserve bare `v1.0.0` for a later full public milestone unless Phil explicitly approves using it for current preview.
