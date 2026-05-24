# Static Shell Baseline Handoff

Updated: 2026-05-24

- Baseline branch: `static-shell-mock-contract-baseline`
- Baseline commit: `d6a528f`
- Staging repo: `armpit-symphony/Sparkbot_shell`
- Current public repo/home: `TBD`
- Artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`
- Release status: `GREEN_CANDIDATE`, `NOT_RELEASED`, `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`
- Option D: **BLOCKED** (no public tag/publish/upload/announcement)

## Baseline Summary

This is the consolidated handoff point for the static Sparkbot_shell preview branch after:

- Wave 1 frontend-only adaptation execution:
  - Workstation visual layout refinement
  - Round Table visual flow refinement
  - Model stack + Invite Wing visual refinement
  - Docs/info visual refinement
- Wave 1 checkpoint/audit closure
- Mock LIMA contract planning completion
- Static-shell baseline consolidation

## What Is Complete

- Core frontend shell is static and coherent for demo/storytelling:
  - Workstation floor
  - Round Table hero sequence
  - Model/seat/posture copy + static setup language
  - files/memory/tasks fixture surfaces
  - Robo teaser area
  - LIMA readiness/contract readiness panel
- Release readiness and packaging metadata are stable:
  - package: `0.8.0-layer8-preview`
  - artifact name: `sparkbot-shell-preview-0.8.0-layer8`
  - preview artifact location generated from allowlist
- Safety/posture documentation is present and aligned:
  - GREEN_CANDIDATE + static-only caveats
  - no runtime/runtime calls
  - no persistence/connector/provider dispatch
  - final repo/home remains `TBD`
- Mock LIMA contract planning artifacts are in place:
  - `docs/LIMA_CONTRACT_LAYER_PLAN.md`
  - `docs/LIMA_CONTRACT_MOCK_SCHEMA.md`
  - `docs/LIMA_CONTRACT_FIXTURES.md`
  - `docs/LIMA_CONTRACT_FRONTEND_READINESS.md`
  - `docs/LIMA_CONTRACT_STOP_GATES.md`
- Wave 1 artifact and readiness docs remain open for consolidation review.

## What Is Intentionally Absent

- No backend runtime
- No `src-tauri/`, `.github/`, `.agents/` in boundary
- No API calls (`fetch`, `axios`, `WebSocket`, `EventSource`)
- No persistence APIs (`localStorage`, `sessionStorage`, file writes, cookies)
- No connector runtime, no provider/model calls
- No scheduler/task dispatch execution
- No secret handling, no key prompts, no secrets storage
- No terminal/browser execution
- No robotics/IoT control
- No LIMA runtime integration
- No Sparkbot R&D source copied in this branch

## Mock LIMA Contract Planning Summary

The branch now includes contract-first planning for future integration and remains docs/fixtures only:

- planned contract data families: workstation, roundtable, model seats, context, guardian posture, robo teaser, readiness status
- each mock family carries non-authoritative and no-side-effect invariants
- explicit forbidden actions remain in place (`execution_allowed: false`, `dispatch_allowed: false`, etc.)

## Next Recommended Options

This baseline is ready to support one of the following next paths:

- **Option B/C**: continue static-only demo readiness and mock contract UI display prep (no runtime)
- **Option D** prep: release-candidate branch consolidation before any release action
- **Option A**: hold as clean static baseline while LIMA integration planning advances

### What it is not

This branch is not yet a functional public runtime MVP.

- no live model/provider/connector integrations
- no backend runtime
- no persistence
- no task scheduling
- no release execution action

## Readiness Snapshot

- Physical mobile QA pass: preserved from prior waves
- Boundary checks: no `backend/`, `src-tauri/`, `.github/`, `.agents/` in repo boundary
- Runtime scans: no runtime calls or persistence behavior introduced
- Forbidden API scans: clean for this baseline stage

## Operational Posture

Keep `GREEN_CANDIDATE`, `NOT_RELEASED`, `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT` as active posture until explicit Phil release approval.
