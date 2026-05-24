# Next Release Actions

Updated: 2026-05-24

## Decision Options

### Option A - Keep GREEN_CANDIDATE Internal Only

Keep current static-preview posture and continue internal reconciliation only.

- No public tag/publish/upload/announcement.
- No repo move decisions applied to this phase.
- Keep static-only boundaries in place until final approval.

### Option B - Merge/Reconcile Release-Candidate Branch

Use Wave 1 checkpoint/audit results as the reconciliation basis before any deeper work.

- Confirm all prior Wave 1 execution claims are still true.
- Confirm no runtime/proxy/protocol calls were introduced.
- Confirm artifact and release-state boundary statements remain unchanged.

### Option C - Prepare Official Public Repo Move

Prepare official movement plan without executing Option D.

- This remains a future plan only.
- Keep repo move execution blocked while final repo home is TBD.
- Maintain source-boundary and contract-readiness work in this staging repo.
- Revisit after checkpoint approval and explicit Phil decision.

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
- Import remains blocked until explicit Phil approval and explicit checkpoint closure.
- Must follow source classification and stop gates.

### Option F - Begin LIMA AI OS Contract-Readiness Layer (Docs/Fixtures Only)

Add contract-first docs/fixtures only.

- No live runtime wiring.
- No provider/model/connectors/terminal/robotics integration.

### Option G - Pause Sparkbot and Return to LIMA AI OS Universal Contract Work

Suspend release actions and continue architecture-level contract cleanup elsewhere.

## Recommendation

Do not run Option D now.

### Immediate Recommended Path

1. Keep `frontend-only-wave1-checkpoint-audit` as the current Wave 1 checkpoint baseline.
2. Keep `armpit-symphony/Sparkbot_shell` as the active staging repo.
3. Confirm final public repo/home remains **TBD**.
4. Run and record a Wave 1 checkpoint/audit covering:
   - Workstation visual adaptation
   - Round Table visual adaptation
   - Model stack + Invite Wing adaptation
   - Docs/info adaptation
5. Continue static refinement only; do not begin Wave 2 source import without additional explicit approval.
6. If Phil approves: either
   - continue static-only refinement (Option B),
   - run mock LIMA contract readiness planning (docs/fixtures only),
   - or consolidate release-candidate branch for final decision.
7. Keep all guardrails active:
   - `GREEN_CANDIDATE`
   - `NOT_RELEASED`
   - `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`
   - no public announcement/public upload/no release action.

### Operational Guardrails

- Current state remains `GREEN_CANDIDATE`.
- Current status is `NOT_RELEASED`.
- Option D is blocked until Phil approves:
  - final repo home
  - final version/tag
  - announcement policy
  - artifact destination
- `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`.

## Exact Current Question to Phil

Approve a **Wave 1 checkpoint/audit** over Workstation, Round Table, Model/Invite, and Docs/info adaptations before any deeper import or runtime planning?
