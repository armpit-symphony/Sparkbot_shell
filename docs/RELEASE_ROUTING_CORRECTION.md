# Release Routing Correction

## Why this correction exists

An earlier pass used `sparkpit-labs/Sparkbot` as the preferred next public repo target.
That preflight check confirmed it is not currently available/inaccessible in the checked auth scope.
This was previously treated as an active blocker for Option C.

## What changed

- Phil confirmed that the immediate active target remains:
  - `armpit-symphony/Sparkbot_shell` (staging shell repo).
- The final official public repo/home is now explicitly `TBD`.
- `armpit-symphony/Sparkbot` remains the R&D source/reference repo.
- `Sparkbot_shell` is the current active shell staging repo for the static public preview work and release-routing prep.

## Current routing decision

- `sparkpit-labs/Sparkbot` is only a possible future option, not an active execution target.
- Option C is not an immediate action item.
- No repo creation, copy/push, tag, publish, upload, or announcement is approved in this pass.

## Next routing posture

- Keep `Green Candidate` and `NOT_RELEASED` status in `armpit-symphony/Sparkbot_shell`.
- Continue public-shell refinement and frontend-only MVP import readiness work.
- Defer official repo move preparation actions until Phil confirms final public repo/home and related release constraints.
