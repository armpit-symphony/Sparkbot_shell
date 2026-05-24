# Frontend MVP Surface Audit

Updated: 2026-05-24  
Branch: `frontend-only-mvp-shell-readiness`

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
  - `src/components/LimaReadyLayerPanel.tsx`

## Public MVP Surfaces Present

- Home / landing: represented by `#/workstation` default route and top-level shell.
- Docs: `#/docs`.
- Workstation shell: present.
- Round Table shell/demo: present.
- Model setup/config shell: present (`#/command-center`).
- Invite Wing / model seats shell: present.
- Basic Guardian posture shell: present (Guardrail profile shell).
- Robo teaser tab: present (`#/robo-preview`).
- LIMA AI OS future contract/install readiness note: now present in static UI via `LimaReadyLayerPanel`.

## Missing or Thin Surfaces

- No separate marketing-style landing page (intentional).
- File management shell is implied in copy but not represented as a distinct UI route.

## Stale Labels or Copy Issues Found

- Prior status copy was generic (`Planning shell`) and did not clearly show release gate state.
- Prior nav label did not explicitly signal home route.
- Some readiness docs still referenced older branch context and a likely future repo target as if active.

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

## Public Release Polish Notes

- Status language now reflects:
  - `GREEN_CANDIDATE`
  - `NOT_RELEASED`
  - `repo home TBD`
- LIMA-ready direction is visible in UI as a contract-readiness path, not runtime wiring.

## Recommendations

1. Keep Workstation as the default home route for MVP staging.
2. Keep Round Table framing as hero feature in top-level copy and Workstation panels.
3. Keep LIMA-ready messaging contract-first and non-runtime.
4. Continue frontend-only import/readiness work; defer runtime integrations to explicit future approvals.
