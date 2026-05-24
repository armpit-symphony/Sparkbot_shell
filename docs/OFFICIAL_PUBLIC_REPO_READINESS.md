# Official Public Repo Readiness Packet (Routing Correction)

## Current Status Snapshot

- Active staging repo: `armpit-symphony/Sparkbot_shell`
- Current candidate branch: `public-release-routing-tbd-correction`
- Current candidate commit: latest commit on this branch
- Preview artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`
- Current package/version: `0.8.0-layer8-preview`
- Artifact name: `sparkbot-shell-preview-0.8.0-layer8`
- Readiness: `GREEN_CANDIDATE`, `NOT_RELEASED`
- Final official repo/home: **TBD**
- Option D status: blocked pending Phil approvals.

## Current Public Routing Decision

- `sparkpit-labs/Sparkbot` was used for an earlier preflight. It is currently a
  **possible future candidate only**, not the active target.
- Public repo/home has not been finalized and is deferred.
- Official repo move/creation is not approved yet and is not the next active step.
- Staging and release-preflight work should continue in this repository.

## What Remains in This Pass

- Keep the current staging shell stable and documented as:
  - static preview only,
  - no runtime/proprietary wiring,
  - no backend or desktop runtime, and
  - no release actions (tag/upload/announcement).
- Continue refinement of docs/UX and boundary clarifications in `Sparkbot_shell`.
- Prepare for future LIMA AI OS install/contract work after contract direction is clear.
- Revisit official repo home once Phil gives explicit direction.

## What Must Not Move (when/if future move happens)

- `backend/` and any runtime backend services.
- `src-tauri/` and desktop runtime packages.
- `.github/` workflow artifacts.
- `.agents/` and private agent workflows.
- Sparkbot R&D runtime/runtime-only code.
- LIMA/Arc/Office/IT internal execution code.
- Advanced Guardian internals.
- Robotics/IoT control surfaces.
- Private path/domain references, secrets, or branch-ephemeral links.
- Client-specific or environment-specific staging workflows.

## Routing Correction Note

- The immediate preflight blocker is now recorded as `FUTURE_REPO_HOME_TBD`
  rather than a fatal execution blocker.
- The next release decision remains in `GREEN_CANDIDATE` staging posture.
