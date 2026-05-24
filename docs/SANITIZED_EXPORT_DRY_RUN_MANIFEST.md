# Sanitized Export Dry-Run Manifest

This manifest defines the exact candidate tree for a future official-repo copy (Option C execution only).
It is a planning artifact; no copy or push occurred in this branch.

## Scope for Future Copy

- Source repo: `armpit-symphony/Sparkbot_shell`
- Target: `sparkpit-labs/Sparkbot` (preflight currently blocked)
- Candidate package: `sparkbot-shell-preview-0.8.0-layer8`
- Candidate version: `0.8.0-layer8-preview`

## Manifest

| Path | Include? | Reason | Notes |
|---|---:|---|---|
| `LICENSE` | Yes | Required legal baseline for redistribution | Include unchanged MIT text. |
| `package.json` | Yes | Package identity and scripts | Retain `name`, `version`, `license`, and preview `files` policy. |
| `package-lock.json` | Yes | Dependency parity baseline | Keep current lockfile only. |
| `README.md` | Yes | Public release posture and install boundary | Keep `GREEN_CANDIDATE`, `NOT_RELEASED`, `NO_TAG` language. |
| `scripts/package-preview.mjs` | Yes | Deterministic artifact generation | Required for repeatable preview packaging. |
| `scripts/` | No | Prevent non-package scripts from being copied | `package-preview.mjs` is included separately. |
| `src/` | Yes | Public shell UI and placeholder runtime surfaces | Static-only behavior only; no persistence/network/model execution. |
| `docs/` | Yes | Public docs and planning handoff docs required for migration | Exclude staging-only sensitive/private planning if present. |
| `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/` | No | Generated build artifact output | Recreate with `npm run build` + `npm run package:preview` at destination. |
| `dist/` | No | Generated build output | Recreate in destination. |
| `node_modules/` | No | Installed runtime dependencies | Reinstall in destination environment. |
| `backend/` | No | Full runtime backend | Explicitly out of scope for official public shell copy. |
| `src-tauri/` | No | Desktop runtime shell | Explicitly out of scope for official public shell copy. |
| `.github/` | No | CI/workflows | Not included in Option C planning pass. |
| `.agents/` | No | Agent workspace/runtime metadata | Not included in public copy. |
| `AGENTS.md` | No | Repo-local planning policy file | Keep only in source staging repo unless later approved. |
| Any private/domain path references | No | Security boundary | Replace before copy when targeting official repo. |
| Secrets/config files | No | Secret hygiene | No secrets or private endpoints in export. |
| R&D backend/runtime code | No | Proprietary boundary | No Sparkbot R&D runtime modules copied. |

## Package Artifact Policy

- Exported tree should reproduce the same preview boundary used in
  `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8`.
- Preview exports must not include:
  - backend runtime
  - provider calls
  - connector sends
  - scheduler behavior
  - memory persistence
  - Guardian internals
  - robotics/IoT control
  - LIMA/Arc/Office/IT runtime wiring

## No-go Boundary Controls in Export

- No backend runtime behavior
- No provider/model call paths
- No connector/session/dispatch behavior
- No persistence writes
- No terminal/browser automation/runtime execution
- No proprietary systems

## Notes

- This manifest is for preflight planning only.
- Any future export execution must still run source-boundary, high-risk, and secret scans before pushing to the destination repo.
