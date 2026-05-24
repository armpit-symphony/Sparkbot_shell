# Official Repo Creation Checklist (Future Use)

> This is a future-use checklist only. Current active work remains in
> `armpit-symphony/Sparkbot_shell` and the public repo home is still `TBD`.

- Repo name: **Sparkbot** (or approved substitute)
- Owner/org: **sparkpit-labs** (or approved substitute)
- Recommended description:
  - `Open-source self-hosted AI workstation shell with Workstation and Round Table multi-agent meetings.`
- Suggested topics:
  - `ai`, `agents`, `self-hosted`, `workstation`, `roundtable`, `local-first`, `open-source`, `sparkbot`
- Recommended license: **MIT**

## GitHub Setup Checklist

- [ ] Confirm target org exists and is active.
- [ ] (Future only) Create repository `sparkpit-labs/Sparkbot` with clean baseline once target is approved.
- [ ] Confirm visibility:
  - public only when Phil and release policy approve.
- [ ] Set `main` as default branch.
- [ ] Seed with either:
  - empty repo, or
  - README-only scaffold if preferred.
- [ ] Set branch protection rules (recommended) for `main` after first official import.
- [ ] Configure repo metadata from suggested description/topics above.
- [ ] Confirm no pre-existing private/internals branch history that conflicts with public staging copy.
- [ ] Confirm CI/workflow policy aligns with staging boundary (initially optional if no workflows yet).

## Critical Import Constraints (Must Hold)

- Do not copy from Sparkbot R&D runtime directly.
- Do not import any backend/runtime runtime or private/internal code.
- Do not import `backend/`, `src-tauri/`, `.github/`, `.agents/`.
- Do not import from `Sparkbot` R&D branch history.
- Use only sanitized-tree export source from `armpit-symphony/Sparkbot_shell`.
- Recheck `OFFICIAL_REPO_PREFLIGHT_REPORT.md` before execution.

## Hand-off Data for Phil

- This checklist is for future manual GitHub setup only.
- Execution is deferred until official repo home is approved.
- When/if a repo is approved, execution still requires:
  - target repo creation/access grant,
  - Codex preflight revalidation,
  - then Option C dry-run export/copy sequence.
