# Package QA Report

Updated: 2026-05-23

Branch: `public-release-shell-release-decision-gate`

## Package Dry Run

Command:

```bash
npm run package:preview
```

Result: PASS.

Generated artifact:

```text
preview-artifacts/sparkbot-shell-0.8.0-layer8-preview/
```

The generated artifact is gitignored and not committed.

## Raw npm Pack Dry Run

Command:

```bash
npm pack --dry-run --json
```

Result: PASS.

The raw npm pack file list is constrained by `package.json#files` and includes only:

- `README.md`.
- Built `dist/` files.
- Allowlisted public docs.
- `package.json`.

No repo-only staging docs, source files, scripts, dependency folders, logs, env files, or workflow directories appeared in the dry-run file list.

## Included

- Built static shell in `app/`.
- `README.md`.
- `package-metadata.json`.
- `docs/INSTALL.md`.
- `docs/CAPABILITIES.md`.
- `docs/ARCHITECTURE_OVERVIEW.md`.
- `docs/SECURITY_AND_GUARDRAILS.md`.
- `docs/LOCAL_AI_SETUP.md`.
- `docs/ROUND_TABLE_OVERVIEW.md`.
- `docs/TASK_GUARDIAN_OVERVIEW.md`.
- `docs/CONNECTORS_OVERVIEW.md`.
- `docs/ROBO_PREVIEW.md`.
- `docs/BETA_LIMITATIONS.md`.

## Excluded

- Repo-only staging docs.
- Extraction maps and readiness docs.
- Layer status docs.
- Release checklist, release decisions, release decision gate, physical/mobile QA checklist, readiness summary, and package QA report.
- Source files.
- `node_modules/`.
- `.git`, `.github`, `.agents`.
- Logs, caches, env files, tests, and workflow files.

## Inspection Evidence

- The first dry run failed because built app copy still contained internal platform-boundary wording. The user-facing copy was replaced with generic public-safe boundary language.
- Final package dry run passed.
- Final artifact path inspection showed only `app/`, `docs/`, `README.md`, and `package-metadata.json`.
- Final artifact docs list matched the public allowlist.
- Final high-risk artifact scan found no matches for private domains, private paths, selected env variable names, or internal platform/private bridge terms.
- `npm pack --dry-run --json` was run after adding a `files` allowlist and did not create a `.tgz` file.

## Remaining Blockers

- License choice is still open.
- MIT is recommended for easiest hobbyist/open-source adoption unless Phil chooses otherwise.
- Final public repo/org/name is still open.
- Final public artifact name/version is still open.
  - Suggested names: `sparkbot-shell-preview-0.8.0-layer8` or `sparkbot-public-preview-0.8.0`.
- Physical/mobile 390px browser QA is still open.
- Live connector QA remains UNKNOWN for external delivery/private recall claims.
