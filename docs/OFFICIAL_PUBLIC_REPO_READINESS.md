# Official Public Repo Readiness Packet

## Current Status Snapshot

- Current staging repo: `armpit-symphony/Sparkbot_shell`
- Current candidate branch: `public-release-official-repo-move-readiness`
- Current candidate commit: `acc19a3385293042766fd470167676e42fe9f2cf`
- Preview artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`
- Current package/version: `0.8.0-layer8-preview`
- Artifact name: `sparkbot-shell-preview-0.8.0-layer8`
- Readiness: `GREEN_CANDIDATE`, `NOT_RELEASED`
- Option D status: blocked pending Phil approvals.

## Recommended Official Public Repo Home

Recommended: `sparkpit-labs/Sparkbot` as the eventual official public release repo.

Reason:
- Stronger organizational ownership signaling.
- Aligns public shell work with expected Sparkbot lineage.
- Reduces long-term confusion versus staging under `armpit-symphony`.

## Why Final Public Stay in `armpit-symphony` Is Not Preferred

The staging repo is valuable for consolidation and auditability, but should not be the final public release home unless Phil explicitly approves a temporary preview.

Reasons final release should move:
- Internal/staging repo naming is ambiguous for external consumers.
- Future release infrastructure needs a clear public source-of-truth.
- Mixed staging artifacts and docs are better isolated before public distribution.
- Risk of accidentally exposing branch artifacts and planning material rises without an explicit “temporary preview” framing.

## What Must Be Changed Before an Official Move

- Finalize Phil’s repo-home approval.
- Confirm Option C sequencing (dry-run, then copy window).
- Align final public links (README/docs/release artifacts).
- Confirm final version/tag and artifact destination.
- Verify release artifact policy and checksum/export expectations.
- Confirm announcement and release-note policy.
- Run official-repo move dry run checklist to green across checks.

## What Must Not Be Moved

- No backend runtime tree.
- No provider runtime, connector runtime, persistence, or scheduler execution.
- No connector sends or external dispatch code.
- No terminal/browser execution code.
- No Guardian internals or privileged control engines.
- No proprietary LIMA/Arc/Office/IT/Robotics source.
- No private paths/domains, secrets, or branch-ephemeral references.
- No client-specific/temporary staging workflow artifacts.

## Exact No-Go Items (Do not move)

- `backend/`
- `src-tauri/`
- `.github/workflows`
- `.agents/`
- Sparkbot R&D runtime and private branches that are not already sanitized by earlier planning docs.
- `LIMA` internals, `Arc` runtime, `LIMA Office`, and `LIMA IT` execution code.
- Advanced `Guardian` internals and enforcement engines.
- Robotics/IoT control surfaces and adapters.
- Private domains, localhost-only runtime endpoints, internal server paths, or deployment credentials.
- Client-specific staging workflows, private operational notes, and internal branch references that are not final-safe.

## Current Move Readiness

Readiness for Option C is **preparing complete** for documentation and scan-based planning.

Pending only explicit external approvals:
- final repo home confirmation
- final version/tag confirmation
- artifact upload destination confirmation
- announcement policy confirmation
