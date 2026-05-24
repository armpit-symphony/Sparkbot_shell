# Next Release Actions

Updated: 2026-05-24

## Decision Options

### Option A - Keep GREEN_CANDIDATE Internal Only

Keep current static-preview posture and continue internal reconciliation only.

- No public tag/publish/upload/announcement.
- No repo move decisions applied to this phase.
- Keep static-only boundaries in place until final approval.

### Option B - Continue Static Mock-Contract UI (Preferred)

Use the consolidated static baseline as the current release-candidate checkpoint for this branch.

Use the consolidated static baseline as the current path forward, with no runtime.

- continue mock LIMA contract UI display planning (docs/fixtures-driven),
- keep no-network, no-runtime posture,
- confirm Wave 1 execution claims and lock audit checks remain true.

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

### Option F - Begin Mock LIMA Contract UI Display (Docs/Fixtures + Static UI)

Completed on `mock-lima-contract-planning` and consolidated on `active-staging-baseline-lock`.

- contract-first docs completed,
- mock schemas/fixtures drafted,
- frontend readiness and stop-gate docs added.

No live runtime wiring.
No provider/model/connectors/terminal/robotics integration.

### Option G - Pause Sparkbot and Return to LIMA AI OS Universal Contract Work

Suspend release actions and continue architecture-level contract cleanup elsewhere.

## Recommendation

Do not run Option D now.

### Immediate Recommended Path

1. Keep `active-staging-baseline-lock` as the current consolidated checkpoint baseline.
2. Keep `armpit-symphony/Sparkbot_shell` as the active staging repo.
3. Confirm final public repo/home remains **TBD**.
4. Record closure summary for:
   - Workstation visual adaptation
   - Round Table visual adaptation
   - Model stack + Invite Wing adaptation
   - Docs/info adaptation
5. Default next action is **Option B**:
   - mock LIMA contract UI display planning (docs/fixtures + frontend preview only),
   - no runtime implementation.
6. If Phil prefers pause, choose **Option A** and return to LIMA AI OS universal contract work.
7. Keep all guardrails active:
   - `GREEN_CANDIDATE`
   - `NOT_RELEASED`
   - `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`
   - no public announcement/public upload/no release action.

### Updated Immediate Path After This Pass

Current pass status:

- `Option F` (mock LIMA contract UI planning/display docs) is complete as planning/facade docs.
- `Option C` remains deferred for official repo-home execution (official decision still `TBD`).
- `Option D` remains blocked.

Recommended next step:

1. Keep static shell and boundary posture unchanged.
2. Option B lock-in: if approved, add mock contract UI-display surface only in docs/fixtures-aligned form.
3. Before any runtime or deeper import, perform Phil decision at release branch/consolidation stage.

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

Approve consolidation of the current static baseline (Wave 1 + mock LIMA contract planning) and next action:

- continue Option A (pause and return to LIMA AI OS contract work), or
- continue Option B (mock LIMA contract UI display as default), or
- approve Option D prep after explicit release approval.
