# Package QA Report

Updated: 2026-05-25

Branch: `active-staging-baseline-mock-lima-ui-lock`
Base checkpoint commit: `9142f71` (`active-staging-baseline-lock`)

## Locked Preview Package

- Artifact name: `sparkbot-shell-preview-0.8.0-layer8`.
- Package/version label: `0.8.0-layer8-preview`.
- License: MIT.
- Current staging repo: `armpit-symphony/Sparkbot_shell`.
- Final public repo/home: TBD.

This artifact is for internal/staging review only. It is not a final public release, npm publication, tag, or upload.
This mock LIMA contract UI-display lock adds static UI/data files and docs updates only, and does not change the package allowlist.
Pause handoff docs are repo-only planning references and do not change public artifact contents.

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

Result: PASS from repository root. `npm pack --dry-run --json` succeeded and produced allowlisted package contents.

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
- Contract planning docs are not included in preview artifacts: `LIMA_CONTRACT_LAYER_PLAN.md`,
  `LIMA_CONTRACT_MOCK_SCHEMA.md`, `LIMA_CONTRACT_FIXTURES.md`, `LIMA_CONTRACT_FRONTEND_READINESS.md`,
  `LIMA_CONTRACT_STOP_GATES.md`, `MOCK_LIMA_CONTRACT_UI_PLAN.md`.

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
- `npm pack --dry-run --json` was executed from the package root and passed. No `.tgz` file was persisted by default in this run, and output remained within the allowlist.
- Wave 1 Workstation adaptation did not add runtime/API/storage behavior and did not alter packaging boundaries.
- Wave 1 Round Table adaptation did not add runtime/API/storage behavior and did not alter packaging boundaries.
- Wave 1 Model stack + Invite Wing adaptation did not add runtime/API/storage behavior, key handling, or packaging boundary changes.
- Wave 1 Docs/info adaptation did not add runtime/API/storage behavior and did not alter packaging boundaries.
- Wave 1 checkpoint/audit documentation updates remain repo-stage docs and do not alter artifact packaging.
- Mock LIMA contract UI-display source files are included in shell source and built into the preview artifact as expected, while planning docs remain excluded from artifact packaging.
- Mock LIMA contract planning docs are repo-stage planning references and intentionally excluded from preview artifact output.
- Option C contract planning docs were added as repo-only planning references and are intentionally excluded from this artifact package.

## Checkpoint Baseline

- Current checkpoint branch: `active-staging-baseline-mock-lima-ui-lock`.
- Current checkpoint commit: `3fab1e8`.
- Pause/handoff branch: `pause-shell-return-lima-handoff`.
- Release posture remains `GREEN_CANDIDATE`, `NOT_RELEASED`, `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`.

## Connector/private recall classification

- `OUT_OF_SCOPE_STATIC_PREVIEW` for this static preview artifact.
- Future runtime-contract and live-runtime validation item only; not a gating item for static artifact readiness when no runtime claims are present.

## Remaining Blockers Before Public Announcement

- Explicit Phil approval is required before any tag, publish, upload, or public announcement.
- Final repo-home/version/tag/destination/announcement decisions remain.
- Sparkbot Shell feature/static UI progression is paused; next work returns to LIMA AI OS contract planning.
