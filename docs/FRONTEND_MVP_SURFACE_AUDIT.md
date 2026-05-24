# Frontend MVP Surface Audit

Updated: 2026-05-24  
Branch: `frontend-only-product-demo-polish`

## Scope

Frontend-only audit of `src/` surfaces and public MVP representation. Static shell and docs only. No runtime behavior added.

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
- New in this pass:
  - `docs/PRODUCT_DEMO_POLISH_PLAN.md`
- Polished in this pass:
  - top-level demo storyline with concise 3-step sequence
  - Workstation storyline and section hierarchy
  - Round Table stage narrative as hero flow
  - fixture story cohesion across files/memory/tasks/demo room
  - Docs route discoverability links for demo flow

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

## Public Release Polish Notes

- Status language now reflects:
  - `GREEN_CANDIDATE`
  - `NOT_RELEASED`
  - `repo home TBD`
- LIMA-ready direction is visible in UI as a contract-readiness path, not runtime wiring.
- Robo Preview is more future-facing while retaining an explicit no-control boundary.

## Recommendations

1. Keep Workstation as the default home route and central shell preview floor.
2. Keep Round Table as the hero demo sequence and recommendation artifact surface.
3. Keep Files/Memory/Tasks fixture messaging explicit about static-only boundaries.
4. Keep LIMA-ready messaging contract-first and non-runtime.
5. Continue frontend-only import/readiness work; defer runtime integrations to explicit future approvals.
