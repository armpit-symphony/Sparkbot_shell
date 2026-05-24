# Public MVP Import Plan

Updated: 2026-05-24
Branch: `frontend-only-import-planning`

## Scope

This plan defines the first import phase for Sparkbot Shell public MVP surface. It is planning-only, to be executed only after the current static-candidate alignment remains valid.

## First Import Purpose

- Establish a controlled path for moving safe frontend shell features into an eventual public repo home.
- Keep the shell public-first: workspace navigation, static chat/meeting previews, guardrail copy, and documentation for a clean install experience.
- Preserve strict separation between static shell and runtime/proprietary substrate.

## Import Scope (Approved for Planning)

- Static UI shell surfaces already present in this repo.
- Shell-only docs for public users and static-preview install behavior.
- Contract and stub planning artifacts that describe future runtime boundaries.
- Packaging boundary and artifact allowlist checks.

## Excluded from First Import

- Backend/desktop/runtime modules.
- Provider/model routing execution.
- Connector transport logic and connector session persistence.
- Memory persistence or retrieval runtime.
- Task scheduling, orchestration, reminders execution, and health telemetry collection.
- Guardian internal runtime components.
- Robotics/IoT control.
- LIMA/Arc/LIMA Office/LIMA IT internals.
- Any paid/enterprise deployment scaffolding or customer-control workflows.
- Any proprietary modules or code paths not explicitly approved for public staging.

## Approved Future Import Order

1. Classification-gated candidate mapping (`FRONTEND_IMPORT_CANDIDATE_MATRIX.md`).
2. Wave-1 execution planning (`FRONTEND_IMPORT_WAVE_1_PLAN.md`).
3. Stub/rewrite enforcement (`FRONTEND_IMPORT_STUB_REWRITE_RULES.md`).
4. Single-candidate UI-only adaptation (future, if approved).
5. Validation checklist pass (`FRONTEND_IMPORT_VALIDATION_CHECKLIST.md`).
6. Repeat for next candidate only after explicit review approval.
7. Optional local LIMA package detection only after a documented interface is frozen.
8. Read-only preview endpoint integration only after contract/security approval.
9. Runtime execution imports only after explicit separate approval gates and green staging evidence.

## Stop Gates (before any code import)

- Any branch that introduces backend, persistence, provider, connector runtime, or LIMA internal wiring must stop.
- Any docs claim that implies live backend behavior without execution evidence must be treated as stale and removed.
- Any diff touching `backend/`, `src-tauri/`, `.github/`, `.agents/` in this repo is a hard stop.
- Any import requiring secrets, credentials, or connector tokens is out-of-scope for this phase.
- Any path that cannot be cleanly separated from private/proprietary code is blocked.

## Validation Checklist

- `public-release-record-physical-qa-pass` lineage confirmed as RC baseline.
- `GREEN_CANDIDATE` remains static-preview only.
- No runtime behavior added in Sparkbot Shell.
- Release artifacts remain static and docs allowlist-bound.
- No proprietary code copied into public shell workspace.
- No missing-link regressions from DocsPage or docs index.
- No unresolved secrets/private-domain references in docs.

## Explicit Import Status

No code import is approved in this phase.
Only documentation, planning, and link-boundary corrections are approved actions at this stage.
No code was copied from Sparkbot R&D during this pass.
