# Public MVP Acceptance Criteria

## Readiness Gate

This list defines the minimum conditions for a first public-shell-import readiness review.

- README clear: product intent, status, boundaries, and caveats are explicit.
- Feature classification complete.
- Extraction map complete.
- Sanitization checklist complete.
- Public MVP import plan complete.
- Source tree plan complete.
- Stubs defined.
- Stop gates defined.
- License gate present.
- Public/private boundary clear.
- No proprietary code.
- No secrets.
- No runtime behavior added.
- No Sparkbot R&D repository modification.

## Validation Signals

- The branch is aligned to physical QA-pass lineage.
- Release status remains `GREEN_CANDIDATE` for static preview only.
- `Option D` (public preview tag/upload/announcement) remains unapproved.
- Public artifact docs remain limited to repo-defined allowlist.

## Hard Failures

- Any live model/connector/scheduler/persistence path.
- Any `backend/`, `src-tauri/`, `.github/`, or `.agents/` appearance.
- Any branch-pinned docs URL in user-facing docs index/listing.
- Any attempt to claim live robotics/IoT or private enterprise runtime behavior in user docs.
