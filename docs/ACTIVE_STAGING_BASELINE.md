# Active Staging Baseline

Updated: 2026-05-24

## Active Baseline

- Active branch: `active-staging-baseline-lock`
- Active commit: `1f4ff3b`
- Base branch: `static-shell-mock-contract-baseline`
- Base commit: `d6a528f`
- Artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`
- Artifact name: `sparkbot-shell-preview-0.8.0-layer8`
- Package/version label: `0.8.0-layer8-preview`
- Release posture: `GREEN_CANDIDATE`, `NOT_RELEASED`, `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`
- Active staging repo: `armpit-symphony/Sparkbot_shell`
- Final public repo/home: `TBD`
- Official repo move: not approved; deferred.

## Scope and Completed Work

- Static Shell Wave 1 refinements are included and locked:
  - Workstation visual layout refinement
  - Round Table visual flow refinement
  - Model stack + Invite Wing visual refinement
  - Docs/info visual refinement
- Wave 1 checkpoint/audit consolidation is included.
- Mock LIMA contract planning is included:
  - `docs/LIMA_CONTRACT_LAYER_PLAN.md`
  - `docs/LIMA_CONTRACT_MOCK_SCHEMA.md`
  - `docs/LIMA_CONTRACT_FIXTURES.md`
  - `docs/LIMA_CONTRACT_FRONTEND_READINESS.md`
  - `docs/LIMA_CONTRACT_STOP_GATES.md`
- Release routing correction and baseline framing docs remain included:
  - `docs/OFFICIAL_PUBLIC_REPO_READINESS.md`
  - `docs/RELEASE_ROUTING_CORRECTION.md`
  - `docs/CURRENT_PUBLIC_RELEASE_HANDOFF.md`
  - `docs/STATIC_SHELL_BASELINE_HANDOFF.md`
  - `docs/STATIC_SHELL_BASELINE_AUDIT.md`

## Intentionally Excluded

- No backend runtime
- No `src-tauri/`
- No `.github/`
- No `.agents/`
- No provider/model/runtime/connector calls
- No scheduler
- No persistence
- No terminal/browser execution
- No robotics/IoT control
- No LIMA runtime wiring
- No Sparkbot R&D source imports/copy

## Validation Summary

- `git diff --check`: PASS
- `npm run build`: PASS
- `npm run package:preview`: PASS
- `npm pack --dry-run --json`: PASS (verified from `C:\Users\limap\Sparkbot_shell`).
- `node --check scripts/package-preview.mjs`: PASS
- source-boundary checks: no `backend/`, `src-tauri/`, `.github/`, `.agents/`
- forbidden API scan: no disallowed patterns found
- runtime/persistence scan: no runtime behavior added
- secret/private scans: no private/domain leaks found
- artifact/public-safe allowlist checks passed

## Branch Lineage Check (Locked Baseline)

- Confirmed ancestry through:
  - `static-shell-mock-contract-baseline` (`d6a528f`)
  - `mock-lima-contract-planning` (`d6a528f`)
  - `frontend-only-wave1-checkpoint-audit` (`61a08b6`)
  - `frontend-only-docs-info-static-adaptation` (`8e0fba1`)
  - `frontend-only-model-seat-static-adaptation` (`2d5e4f1`)
  - `frontend-only-roundtable-static-adaptation` (`7ba0373`)
  - `frontend-only-workstation-static-adaptation` (`c7d5f31`)
- No newer required Wave 1 or mock-contract planning work is stranded on those branches.

## Next Allowed Paths

- Continue static-only demo readiness work.
- Optionally add mock-LIMA contract UI display (docs/fixtures-driven) in the shell UI only.
- Continue source-boundary and packaging sanity checks.
- Prepare next decision packets without runtime implementation.

## Forbidden Paths Until Explicit Approval

- Option D release actions
- Any public tag/publish/upload/announcement
- Backend/runtime import
- Provider/model/connector integration
- LIMA runtime install/call wiring
- Scheduler execution/persistence/callbacks
- Direct R&D runtime source copy
- Proprietary Arc/LIMA Office/LIMA IT wiring

## Current Status

This branch is now the **active staging baseline** for current Sparkbot Shell work.  
It is not yet a public release and should not be treated as a final public candidate.
