# Next Release Actions

Updated: 2026-05-24

## Decision Options

### Option A - Keep GREEN_CANDIDATE Internal Only

Keep current static-preview posture and continue internal reconciliation only.

- No public tag/publish/upload/announcement.
- No repo move decisions applied to this phase.

### Option B - Merge/Reconcile Release-Candidate Branch

Use `frontend-only-product-demo-polish` as the current canonical staging branch for frontend MVP demo polish and keep docs/charts/checks in one file set.

- Validate all prior RC facts are preserved.
- Reconcile any status drift.
- Prepare the official Option-D decision packet.

### Option C - Prepare Official Public Repo Move

Prepare official movement plan without executing Option D.

- This is currently a **future plan only**.
- Keep repo move execution blocked while final repo home is TBD.
- Maintain source-boundary and contract-readiness work in this staging repo.
- Revisit this option only after Phil confirms a public repo target.

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
- This option is now planning-ready:
  - `FRONTEND_IMPORT_PLANNING_BASELINE.md`
  - `FRONTEND_IMPORT_CANDIDATE_MATRIX.md`
  - `FRONTEND_IMPORT_WAVE_1_PLAN.md`
  - `FRONTEND_IMPORT_STUB_REWRITE_RULES.md`
  - `FRONTEND_IMPORT_VALIDATION_CHECKLIST.md`

### Option F - Begin LIMA AI OS Contract-Readiness Layer (Docs/Fixtures Only)

Add contract-first install docs/fixtures only.

- No live runtime wiring.

### Option G - Pause Sparkbot and Return to LIMA AI OS Universal Contract Work

Suspend release actions and continue architecture-level contract cleanup elsewhere.

## Recommendation

Do not run Option D now.

### Immediate Recommended Path

1. Keep `frontend-only-import-planning` as the canonical current staging branch for this planning pass.
2. Continue staging refinement in `armpit-symphony/Sparkbot_shell`:
   - release-routing docs are corrected for `repo home TBD`,
   - Option C remains future,
   - no runtime behavior is added.
3. Use classification output to pick exactly one Wave 1 candidate for manual static adaptation.
4. Run full import validation checklist and stop for review before any second candidate.
5. Revisit public repo home decision only after LIMA AI OS integration direction stabilizes.
6. Execute remaining approval steps only after Phil confirms:
   - final repo home
   - final version/tag
   - artifact destination
   - announcement policy
   - README/repo URLs are final-safe
7. `Option D` remains blocked until explicit approvals for the above and release-note policy.

## Operational Guardrails

- Current state remains `GREEN_CANDIDATE`.
- Current status is `NOT_RELEASED`.
- Do not perform `Option D` until Phil confirms:
  - repo home
  - version/tag
  - announcement policy
  - destination for artifact upload
- `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`.
