# Frontend MVP Surface Audit

Updated: 2026-05-24
Branch: `frontend-only-wave1-checkpoint-audit`
Base checkpoint commit: `8e0fba1d0d9445ff1449362d427e63616fb6b694`

## Scope

Frontend-only audit of `src/` surfaces and public MVP representation. Static shell and docs only.
This revision also establishes import-planning baseline context. No runtime behavior added.

## Routes and Pages Found

- Top-level nav routes in `src/App.tsx`:
  - `#/workstation` (default home route)
  - `#/chat`
  - `#/roundtable`
  - `#/command-center`
  - `#/task-guardian`
  - `#/connectors`
  - `#/robo-preview`
  - `#/docs`
- Route alias:
  - `#/robo` -> `#/robo-preview`
- Page modules:
  - `src/pages/DocsPage.tsx`
  - `src/pages/PlaceholderPage.tsx` (fallback content map)

## Components Found

- Workstation and navigation shell:
  - `src/components/WorkstationShell.tsx`
  - `src/components/StatusBadge.tsx`
- Round Table shell:
  - `src/components/RoundTableFlowShell.tsx`
- Chat and context shell:
  - `src/components/ChatShell.tsx`
  - `src/components/MemoryContextPreview.tsx`
- Model setup / Invite Wing / Specialty Wing:
  - `src/components/ModelConfigShell.tsx`
  - `src/components/ModelSeatCard.tsx`
  - `src/components/ModelSeatEditor.tsx`
  - `src/components/LocalAiSetupPanel.tsx`
  - `src/components/InviteWingPanel.tsx`
  - `src/components/SpecialtyWingPanel.tsx`
- Guardian basics shell:
  - `src/components/GuardrailProfileShell.tsx`
  - `src/components/SetupNotice.tsx`
- Task and connector previews:
  - `src/components/TaskGuardianPreview.tsx`
  - `src/components/HealthReportPreview.tsx`
  - `src/components/DeliveryPreferencePreview.tsx`
  - `src/components/ConnectorIdentityShell.tsx`
- Current planning add-ons:
  - `docs/FRONTEND_IMPORT_PLANNING_BASELINE.md`
  - `docs/FRONTEND_IMPORT_CANDIDATE_MATRIX.md`
  - `docs/FRONTEND_IMPORT_WAVE_1_PLAN.md`
  - `docs/FRONTEND_IMPORT_STUB_REWRITE_RULES.md`
  - `docs/FRONTEND_IMPORT_VALIDATION_CHECKLIST.md`
  - `docs/WAVE_1_WORKSTATION_ADAPTATION_PLAN.md`
  - `docs/WAVE_1_ROUNDTABLE_ADAPTATION_PLAN.md`
  - `docs/WAVE_1_MODEL_SEAT_ADAPTATION_PLAN.md`
- Current execution add-on:
  - Workstation visual layout refinement completed as manual static adaptation from R&D reference concepts.
  - Round Table visual flow refinement completed as manual static adaptation from R&D reference concepts.
  - Model stack + Invite Wing visual refinement completed as manual static adaptation from R&D reference concepts.
  - Docs/info visual refinement completed as manual static adaptation from R&D + shell command-center design review.

## Public MVP Surfaces Present

- Home / landing: represented by `#/workstation` default route and top-level shell.
- Docs: `#/docs`.
- Workstation shell: present.
- Round Table shell/demo: present.
- Model setup/config shell: present (`#/command-center`).
- Invite Wing / model seats shell: present.
- Basic Guardian posture shell: present (Guardrail profile shell).
- Robo teaser tab: present (`#/robo-preview`).
- LIMA AI OS future contract/install readiness note: present in static UI via `LimaReadyLayerPanel`.
- Files/Knowledge preview: present via static fixture cards.
- Memory preview: present via static fixture cards and context previews.
- Tasks/reminders preview: present via static task fixture cards.
- Demo room/context fixture: present as a unified static room surface.

## Missing or Thin Surfaces

- No separate marketing-style landing page (intentional).
- No separate route was added for Files/Memory/Tasks; surfaces are intentionally grouped in Workstation to avoid route sprawl in this pass.

## Wave 1 Checkpoint Result

- Status on each candidate:
  - Candidate 1: Workstation visual refinement — static-only complete.
  - Candidate 2: Round Table visual flow refinement — static-only complete.
  - Candidate 3: Model stack + Invite Wing visual refinement — static-only complete.
  - Candidate 4: Docs/info visual refinement — static-only complete.
- No forbidden APIs or runtime imports were added in this checkpointed baseline.
- No direct Sparkbot R&D file copy was performed.
- The shell remains with release posture:
  - `GREEN_CANDIDATE`
  - `NOT_RELEASED`
  - `NO_TAG`
  - `NO_UPLOAD`
  - `NO_ANNOUNCEMENT`

## Stale Labels or Copy Issues Found

- No stale branch-pinned docs links were found in this pass after prior DocsPage cleanup.

## Mobile and Readability Notes

- Existing responsive rules are strong and avoid overflow for major panels.
- Added `lima-sequence-grid` follows existing responsive collapse rules for narrow screens.
- Top-level status and boundary cues are now explicit without adding dense text blocks.

## Runtime-Risk Review

- No network/API calls added.
- No persistence/local storage/database paths added.
- No scheduler/dispatch execution added.
- No connector/provider live calls added.
- No terminal/browser execution added.
- No robotics/IoT controls added.
- No file upload/read/write behavior added.
- No direct R&D source file copy performed.

## Public Release Polish Notes

- Status language now reflects:
  - `GREEN_CANDIDATE`
  - `NOT_RELEASED`
  - `repo home TBD`
- LIMA-ready direction is visible in UI as a contract-readiness path, not runtime wiring.
- Robo Preview is more future-facing while retaining an explicit no-control boundary.

## Contract Planning Follow-up

- Option C (mock LIMA contracts, docs/fixtures only) is now planned with dedicated planning docs:
  - `docs/LIMA_CONTRACT_LAYER_PLAN.md`
  - `docs/LIMA_CONTRACT_MOCK_SCHEMA.md`
  - `docs/LIMA_CONTRACT_FIXTURES.md`
  - `docs/LIMA_CONTRACT_FRONTEND_READINESS.md`
  - `docs/LIMA_CONTRACT_STOP_GATES.md`

No runtime APIs, persistence, or direct R&D imports were introduced during this planning pass.

## Recommendations

1. Keep Workstation as the default home route and central shell preview floor.
2. Keep Round Table as the hero demo sequence and recommendation artifact surface.
3. Keep Files/Memory/Tasks fixture messaging explicit about static-only boundaries.
4. Keep LIMA-ready messaging contract-first and non-runtime.
5. Keep Wave 1 execution classification-gated and candidate-by-candidate.
6. Candidate #4 (docs/info visual refinement) is now complete.
7. Stop for a Wave 1 checkpoint/audit before any deeper source import or runtime planning.
