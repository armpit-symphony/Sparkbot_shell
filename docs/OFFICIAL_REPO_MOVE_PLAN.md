# Official Repo Move Plan

Date: 2026-05-24

This plan covers how to move from `armpit-symphony/Sparkbot_shell` to a public-facing home.

## Option 1 - Keep `armpit-symphony/Sparkbot_shell` as Internal/Staging Only

- Pros
  - Minimal churn.
  - Zero migration risk now.
  - Continuity with current audit artifacts.
- Cons
  - Public identity remains ambiguous.
  - Final public home question stays unresolved.
- Required cleanup
  - Keep explicit `NOT_RELEASED`/`Option D blocked` language in all docs.
  - Ensure no public claims beyond staging scope.
- Branding impact
  - Weak official-brand signal.
- Launch risk
  - Ongoing confusion on source-of-truth for users.

## Option 2 - Use `armpit-symphony/Sparkbot_shell` as Temporary Public Preview

- Pros
  - Fastest route for short-lived preview.
- Cons
  - Mixed internal/private/public naming surface.
  - Temporary links and disclaimers become stale.
- Required cleanup
  - Public README and docs must clearly state temporary-preview status.
  - Explicit migration note to final home.
- Branding impact
  - Temporary branding inconsistency.
- Launch risk
  - Medium. Risks stale forking for future users.

## Option 3 - Copy Sanitized Tree to `sparkpit-labs/Sparkbot`

- Pros
  - Strong official housing under primary org location.
  - Clear eventual alignment with official Sparkbot release path.
- Cons
  - Highest migration overhead.
  - Requires link and docs rewrites.
- Required cleanup
  - Sanitization validation of copied tree.
  - Update all public-facing URLs, LICENSE/copyright language, release docs.
- Branding impact
  - Strongest official positioning.
- Launch risk
  - Moderate, because migration path must be explicit and no partial leak into public.

## Option 4 - Create `sparkpit-labs/sparkbot-shell` First, Rename Later

- Pros
  - Clean naming path before final rename.
  - Avoids immediate `Sparkbot` repo coupling.
- Cons
  - Adds one extra repo migration step.
  - Needs migration mapping and URL migration.
- Required cleanup
  - Build and publish rules for initial repo.
  - Rename and redirect plan.
- Branding impact
  - Clear short-term dedicated product naming.
- Launch risk
  - Medium. Risk from rename/distribution split.

## Recommended Path

Unless Phil explicitly chooses temporary public staging, the recommended path is Option 3:

- Final public release should live under `sparkpit-labs`.
- Keep the current repo as staging/audit source until the final public move is authorized.
