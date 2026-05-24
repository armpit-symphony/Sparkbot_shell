# Public Stub Strategy

Updated: 2026-05-24
Branch: `frontend-only-import-planning`

## Purpose

Keep Sparkbot Shell static-preview-safe while demonstrating future runtime direction.

## Mocking Strategy by Surface

- Model providers: local fixture cards only. No outbound provider calls.
- Agent seats: static seat cards and statuses only.
- Round Table flow: deterministic fixture timeline and artifact preview.
- Guardian confirmations: static labels and posture copy only.
- Robo teaser: teaser-only cards and explicit no-control messaging.
- Connectors: preview payload and status cards only. No sends/sessions.
- Memory: static context snippets and caveats only.
- Files: read-only fixture cards only.
- Tasks/reminders: static queue cards and statuses only.
- Settings: non-persistent form defaults only.
- Demo data: versioned fixture content for desktop/mobile preview.

## Hard Constraints

- No live provider/model calls.
- No runtime task dispatch or scheduler.
- No connector sends, reads, or session writes.
- No persistence/storage side effects.
- No robotics/IoT control.
- No paid/private LIMA runtime functionality.

## Import-Planning Tie-In

Any future frontend import from R&D must follow:

- `FRONTEND_IMPORT_STUB_REWRITE_RULES.md`
- `FRONTEND_IMPORT_CANDIDATE_MATRIX.md`
- `FRONTEND_IMPORT_WAVE_1_PLAN.md`

## Acceptance Check

- All preview surfaces use fixture data.
- All transitions are deterministic and replayable.
- Missing data always degrades to static placeholder state.
