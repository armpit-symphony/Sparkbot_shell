# Option C Execution Plan (Future)

This is the future execution sequence for official repo move readiness. It is planning-only and not to be executed in this pass.

## Execution Preconditions

- `sparkpit-labs/Sparkbot` exists.
- Official target access is confirmed for Codex.
- Preflight report status is updated to success (not found/blocked).

## Planned Steps

1. **Phil confirms official repo exists/access is granted**  
   - Phil provides explicit approval to proceed from staging.

2. **Codex re-checks target repo**  
   - Re-run preflight checks:
     - `git ls-remote`
     - API visibility checks
     - default branch/access confirmation.

3. **Codex builds sanitized export from `Sparkbot_shell`**  
   - Generate local staged copy per `SANITIZED_EXPORT_DRY_RUN_MANIFEST.md`.
   - Validate tree against include/exclude rules.

4. **Codex scans export tree**  
   - Source boundary check (`backend`, `src-tauri`, `.github`, `.agents` absent).
   - Runtime/persistence scan on copied `src`.
   - Secret/private scan.
   - Preview high-risk scan.

5. **Codex copies export tree to official repo branch**  
   - Use branch for copy.
   - Keep source metadata and public docs clean.

6. **Codex validates target build/package**  
   - `npm run build`
   - `npm run package:preview`
   - `npm pack --dry-run --json`
   - sanity checks for artifact docs allowlist.

7. **Codex pauses for Phil**  
   - No Option D actions in this step.
   - No tag/publish/announcement without explicit approval.

8. **Option D remains separate**  
   - Trigger only after Phil approves repo/version/tag, destination, release notes/changelog policy, and announcement channel.

## Current Execution Gate

- **Blocked.**  
  Target repo `sparkpit-labs/Sparkbot` preflight was re-run after access approval and remains `404/Not Found`.
