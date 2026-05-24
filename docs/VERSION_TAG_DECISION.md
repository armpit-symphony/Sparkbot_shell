# Version and Tag Decision

Date: 2026-05-24

Current metadata: package/version `0.8.0-layer8-preview`, artifact name `sparkbot-shell-preview-0.8.0-layer8`, candidate `GREEN_CANDIDATE`.

## Option A - `0.8.0-layer8-preview`

- Pros
  - Matches current package metadata and artifact naming.
  - Minimal changes; preserves current repo QA trail.
- Cons
  - Looks pre-release-ish and internally named.
- Public perception
  - Clear as staging/pre-release candidate.
- Compatibility with current metadata
  - Fully compatible.
- Artifact name impact
  - No change required.
- Release tag impact
  - Clean with existing artifacts and checks.
- Recommendation
  - Keep for now until final repo is approved.

## Option B - `v0.8.0-preview`

- Pros
  - Aligns with common semver preview naming.
  - Easier user-facing interpretation than layer suffix.
- Cons
  - Requires coordinated rename in package metadata, artifact name docs, and release notes.
- Public perception
  - Predictable preview naming.
- Compatibility with current metadata
- Requires package/version cleanup and docs updates.
- Artifact name impact
  - Artifact naming may need explicit remap.
- Release tag impact
  - Clear but requires rework before Option D.

## Option C - `v1.0.0-public-preview`

- Pros
  - Strongs external impression of stable preview milestone.
- Cons
- Public perception
  - High expectation; may imply near-release polish.
- Compatibility with current metadata
  - Requires migration from current naming and lock files.
- Artifact name impact
  - Requires artifact/version rewrite.
- Release tag impact
  - More suitable for a later public milestone.

## Option D - `v1.0.0`

- Pros
  - Standard release naming.
- Cons
  - Inappropriate for static preview and runtime-incomplete status.
- Public perception
  - Suggests production-ready, which is not true.
- Compatibility with current metadata
  - Directly incompatible with current staging posture.
- Artifact name impact
  - Requires full package/version/story reset.
- Release tag impact
  - High risk unless official release scope is complete.

## Recommendation

Use preview/beta naming until the final repo and release scope are approved.

Recommend:
- Continue with `0.8.0-layer8-preview` for now.
- Reserve `v1.0.0-*` options for a later officially approved public milestone.
