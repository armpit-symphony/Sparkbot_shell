# Repo Home Decision Matrix

Date: 2026-05-24

## Option A — Keep `armpit-symphony/Sparkbot_shell` as Internal Staging

### Pros
- Minimal operational changes.
- Low immediate migration risk.
- Maintains current consolidation and branch continuity.

### Cons
- Final public identity remains ambiguous.
- Extra work required later when finalizing external-facing links and paths.
- Increases risk of stale staging references.

### Branding Impact
- Weak official-brand signal.
- Good only for temporary staging.

### Risk
- Medium over time as branch/docs signals diverge from final public posture.

### Required Cleanup
- Keep explicit `NOT_RELEASED` + `NO_TAG` + `NO_UPLOAD` + `NO_ANNOUNCEMENT`.
- Keep explicit branch-staging disclaimers.
- No public-facing expectation of permanence.

## Option B — Use `armpit-symphony/Sparkbot_shell` as Temporary Public Preview

### Pros
- Fastest path for an immediate preview if needed.
- No immediate cross-repo migration work.

### Cons
- Temporary links and org naming become visible.
- Requires clear migration note later or risk confusion.
- Harder to establish clean public issue/discussion and release path.

### Branding Impact
- Mixed branding until rename/relocation.

### Risk
- Medium-high. Stale links and temporary markers can become difficult to retire.

### Required Cleanup
- Public docs must state temporary status.
- Explicit temporary-to-official migration plan is required before broader distribution.
- Hard ban on branch-pinned or staging-only links in public-safe pages.

## Option C — Copy Sanitized Tree to `sparkpit-labs/Sparkbot`

### Pros
- Best long-term official positioning.
- Clean alignment with Sparkbot naming and org ownership.
- Clear path for future public contribution/distribution.

### Cons
- Higher operational overhead to copy/sync and validate.
- Requires additional cleanup pass before move.
- Requires branch/URL migration and release policy updates.

### Branding Impact
- Strongest official product signal.

### Risk
- Medium once cleanup is complete; manageable with a pre-copy checklist.

### Required Cleanup
- Apply sanitized export plan.
- Rewrite public links to final repo/home.
- Verify no forbidden runtime folders/files are included.
- Finalize version/tag and announcement plan in parallel.
- Confirm preview artifact destination and release metadata.

## Option D — Create `sparkpit-labs/sparkbot-shell` First, Rename Later

### Pros
- Cleaner repo naming separation from Sparkbot platform code.
- Lower initial risk from mixing docs in full Sparkbot namespace.

### Cons
- Adds an additional migration step.
- Requires rename and migration comms.
- Increases link churn.

### Branding Impact
- Clear product-specific identity; later rename adds temporary naming mismatch.

### Risk
- Medium-high due to extra migration hop.

### Required Cleanup
- Maintain temporary naming docs.
- Rewrite after rename for final stable links.
- Validate artifact/docs path transitions post-rename.

## Recommendation

Preferred path for official release:
1) Use `armpit-symphony/Sparkbot_shell` as staging only (no final-public commitment).
2) Prepare and execute Option C path (`sparkpit-labs/Sparkbot`) once Phil approves repo creation/copy.

Option B is acceptable only if Phil explicitly approves a temporary public preview under `armpit-symphony`.
