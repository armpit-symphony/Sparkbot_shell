# Next Release Actions

Updated: 2026-05-24

## Decision Options

### Option A — Keep GREEN_CANDIDATE Internal Only

Hold current state as internal/staging only. No public tag/publish/upload/announcement.

### Option B — Merge/Reconcile Release-Candidate Branch

Use `public-release-record-physical-qa-pass` as the current release-candidate base and reconcile any remaining doc/status drift into one canonical branch.

### Option C — Prepare Official Public Repo Move To `sparkpit-labs/Sparkbot`

Prepare migration package, ownership naming, and version alignment for the eventual public home without executing public announcement actions yet.

### Option D — Approve Public Preview Tag/Upload/Announcement

Execute public-facing release operations only after explicit Phil approval for scope, destination, and wording.

### Option E — Begin Frontend-Only MVP Source Import From Approved Classification

Continue static-shell scope by importing only approved public-safe frontend layers with no runtime/backend behavior.

### Option F — Begin LIMA AI OS Contract-Readiness Layer (Docs/Fixtures Only)

Start contracts-first integration prep: docs, types, and fixtures only. No live runtime wiring.

### Option G — Pause Sparkbot And Return To LIMA AI OS Universal Contract Work

Shift effort to broader LIMA contracts and return to shell release actions later.

## Recommendation

Do not take Option D until Phil decides final public repo home and versioning.

Recommended next technical action:

1. Reconcile/merge the best release-candidate branch.
2. Then choose between:
   - official public repo move prep (Option C), or
   - frontend-only MVP source import planning (Option E).

Parallel-ready planning action:

- Run Option F docs/fixtures work in a separate branch if desired, but keep runtime behavior out of `Sparkbot_shell`.

## Operational Guardrails

- No backend/runtime additions in this decision phase.
- No tag/publish/upload/announcement without explicit Phil approval.
- Preserve connector/private-recall `UNKNOWN/OUT_OF_SCOPE_STATIC_PREVIEW` messaging for static shell.
