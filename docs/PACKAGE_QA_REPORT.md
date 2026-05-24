# Package QA Report

Updated: 2026-05-24

Branch: `frontend-only-mvp-shell-readiness`

## Locked Preview Package

- Artifact name: `sparkbot-shell-preview-0.8.0-layer8`.
- Package/version label: `0.8.0-layer8-preview`.
- License: MIT.
- Current staging repo: `armpit-symphony/Sparkbot_shell`.
- Final public repo/home: TBD.

This artifact is for internal/staging review only. It is not a final public release, npm publication, tag, or upload.

## Package Dry Run

Command:

```bash
npm run package:preview
```

Result: PASS.

## Physical QA status

- Physical 390px route verification: `PASSED` (Phil confirmed manual phone QA).
- Emulated QA status: PASS at 375px, 390px, 768px, 1365px.

## Generated artifact

```text
preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/
```

The generated artifact is gitignored and not committed by default.

## Raw npm Pack Dry Run

Command:

```bash
npm pack --dry-run --json
```

Result: PASS.

The raw npm pack file list is constrained by `package.json#files` and includes:

- `LICENSE`.
- `README.md`.
- Built `dist/` files.
- Allowlisted public docs.
- `package.json`.

No repo-only staging docs, source files, scripts, dependency folders, logs, env files, or workflow directories appeared in the dry-run file list.

## Included In Preview Artifact

- Built static shell in `app/`.
- `README.md`.
- `LICENSE`.
- `package.json`.
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
- Layer status and release checklist documents.
- Source files.
- `node_modules/`.
- `.git`, `.github`, `.agents`.
- Logs, caches, env files, tests, and workflow files.
- Backend/runtime code.
- Connector runtime.
- Guardian runtime.
- Robo bridge.
- LIMA/Arc/Office/IT private internals.

## Inspection Evidence

- Package dry run passed with the locked artifact folder name.
- Final artifact path inspection showed only `app/`, `docs/`, `LICENSE`, `README.md`, `package.json`, and `package-metadata.json`.
- Final docs list matched the public allowlist.
- Final high-risk artifact scan found no matches for private domains, private paths, selected env variable names, or internal platform/private bridge terms.
- `npm pack --dry-run --json` was run after adding a `files` allowlist and did not create a `.tgz` file.

## Connector/private recall classification

- `OUT_OF_SCOPE_STATIC_PREVIEW` for this static preview artifact.
- Future runtime-contract and live-runtime validation item only; not a gating item for static artifact readiness when no runtime claims are present.

## Remaining Blockers Before Public Announcement

- Explicit Phil approval is required before any tag, publish, upload, or public announcement.
- Final repo-home/version/tag/destination/announcement decisions remain.
