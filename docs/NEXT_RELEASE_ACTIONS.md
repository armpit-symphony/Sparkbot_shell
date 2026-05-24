# Next Release Actions

Updated: 2026-05-24

## Decision Options

### Option A - Keep GREEN_CANDIDATE Internal Only

Keep current static-preview posture and continue internal reconciliation only.

- No public tag/publish/upload/announcement.
- No repo move decisions applied to this phase.

### Option B - Merge/Reconcile Release-Candidate Branch

Use the `public-release-official-repo-move-readiness` branch as the canonical pre-Option-D branch and keep docs/charts/checks in one file set.

- Validate all prior RC facts are preserved.
- Reconcile any status drift.
- Prepare the official Option-D decision packet.

### Option C - Prepare Official Public Repo Move

Prepare official movement plan without executing Option D.

- Package naming and link/path audit.
- Optional copy path to the final public repo.
- Ownership and branding alignment.

### Option D - Approve Public Preview Tag/Upload/Announcement

Run public-facing release actions only after Phil approval.

- repo home
- version/tag
- artifact destination
- release note/changelog approach
- announcement channel

### Option E - Begin Frontend-Only MVP Source Import From Approved Classification

Continue static-shell scope with safe UI-only imports only.

- No backend/runtime behavior in this phase.

### Option F - Begin LIMA AI OS Contract-Readiness Layer (Docs/Fixtures Only)

Add contract-first install docs/fixtures only.

- No live runtime wiring.

### Option G - Pause Sparkbot and Return to LIMA AI OS Universal Contract Work

Suspend release actions and continue architecture-level contract cleanup elsewhere.

## Recommendation

Do not run Option D now.

### Immediate Recommended Path

1. Keep `public-release-official-repo-move-readiness` as the canonical pre-Option-D branch.
2. Complete Option C official repo move preparation docs and checks.
3. Execute remaining approval steps only after Phil confirms:
   - final repo home
   - final version/tag
   - artifact destination
   - announcement policy

4. Option paths after Option C readiness:
   - hold staging if Phil chooses the temporary staging path,
   - create/copy to approved official repo if Phil approves Option C,
   - proceed to Option D only after explicit final approvals.

## Operational Guardrails

- Current state remains `GREEN_CANDIDATE`.
- Current status is `NOT_RELEASED`.
- Do not perform `Option D` until Phil confirms:
  - repo home
  - version/tag
  - announcement policy
  - destination for artifact upload
- `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`.
