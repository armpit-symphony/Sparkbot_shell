# Public Release Action Checklist (Option D)

Status: Not for execution until Phil approval is recorded.

## Exact Option-D Gate Checklist

- Confirm repo home.
- Confirm version/tag.
- Confirm artifact destination.
- Confirm public README links are final-safe and branch-agnostic.
- Confirm final license/copyright and ownership metadata.
- Confirm no staging branch links remain in public-facing files.
- Confirm no `armpit-symphony` branding is shown unless temporary public preview is explicitly approved.
- Confirm no private/proprietary leakage (including `backend/`, `src-tauri/`, `.github/`, `.agents/`, private domains, secrets, runtime calls, runtime assets).
- Rebuild artifact after any copy/link/content changes.
- Confirm `package-metadata.json` and artifact checks reflect final repo/version.
- Confirm GitHub release notes / changelog decision is recorded.
- Confirm package archive checksum is captured (if archive is published).
- Confirm announcement copy and channel are approved.
- Confirm rollback/unpublish plan is approved.
- Record explicit Phil approval for:
  - version/tag
  - repo home
  - destination
  - announcement channel
  - release notes policy
