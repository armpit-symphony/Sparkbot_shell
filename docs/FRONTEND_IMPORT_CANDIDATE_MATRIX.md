# Frontend Import Candidate Matrix

Updated: 2026-05-24
Branch: `static-shell-mock-contract-baseline`
Base commit: `d6a528f`
Reference repo (read-only): `armpit-symphony/Sparkbot`

Classification labels:

1. `SAFE_FRONTEND_STATIC_IMPORT`
2. `SAFE_AFTER_STUBBING`
3. `DOCS_REFERENCE_ONLY`
4. `PRIVATE_OR_PROPRIETARY`
5. `RUNTIME_BOUNDARY_RISK`
6. `NEEDS_PHIL_DECISION`

Priority labels:

- `P0_PUBLIC_SHELL`
- `P1_PUBLIC_POLISH`
- `P2_LATER`
- `TEASER_ONLY`
- `DO_NOT_IMPORT`
- `DECISION_REQUIRED`

## Candidate Table

| Area | Source path (R&D) | Classification | Priority | Public value | Risk summary | Recommendation |
|---|---|---|---|---|---|---|
| Workstation page | `frontend/src/pages/WorkstationPage.tsx` | `SAFE_AFTER_STUBBING` | `P1_PUBLIC_POLISH` | High visual/product value | Heavy runtime coupling (`apiFetch`, terminal, MCP, storage, env flags) | Do not copy file directly. Extract only visual layout ideas and manually reimplement static sections. |
| Round Table meeting room | `frontend/src/pages/MeetingRoomPage.tsx` | `SAFE_AFTER_STUBBING` | `P1_PUBLIC_POLISH` | High hero-feature value | API-driven room/messages/tasks/artifacts; session storage | Use as design reference; manual static adaptation only. |
| Model stack controls | `frontend/src/components/CommandCenter/SetupPanels.tsx` | `RUNTIME_BOUNDARY_RISK` | `DO_NOT_IMPORT` | Medium | Provider key/token inputs, comms credentials, model config writes | Do not import code. Keep existing public-safe shell controls. |
| Invite Wing / model seats | `frontend/src/pages/WorkstationPage.tsx` (invite sections) | `SAFE_AFTER_STUBBING` | `P1_PUBLIC_POLISH` | High | Credential/provider references and config write flows | Allow visual-only adaptation with strict redaction of key/token flows. |
| Agent desk/persona UI | `frontend/src/pages/WorkstationPage.tsx`, `frontend/src/config/workstationStations.ts` | `SAFE_AFTER_STUBBING` | `P1_PUBLIC_POLISH` | High | Config includes runtime desks (terminal/sparkbud automation) | Selectively adapt desk cards and persona labels; keep runtime desks teaser-only or remove. |
| Files/document UI | `frontend/src/pages/WorkstationPage.tsx` | `SAFE_FRONTEND_STATIC_IMPORT` | `P0_PUBLIC_SHELL` | High | Mostly presentational when detached from APIs | Keep and expand current static fixture cards. |
| Memory UI | `frontend/src/pages/WorkstationPage.tsx`, `frontend/src/pages/SparkbotDmPage.tsx` | `SAFE_AFTER_STUBBING` | `P1_PUBLIC_POLISH` | High | Mixed with live retrieval and chat flows | Use only shape/copy inspiration; no retrieval logic import. |
| Tasks/reminders UI | `frontend/src/pages/MeetingRoomPage.tsx`, `frontend/src/pages/WorkstationPage.tsx` | `SAFE_AFTER_STUBBING` | `P1_PUBLIC_POLISH` | Medium | Guardian task APIs and run actions | Keep static task cards and statuses only. |
| Guardian/security controls UI | `frontend/src/components/CommandCenter/OperationalPanels.tsx`, `frontend/src/routes/_layout/spine.tsx` | `PRIVATE_OR_PROPRIETARY` | `DO_NOT_IMPORT` | Medium | Includes operator PIN, vault, guardian status/actions | Do not import. Public shell keeps basic posture messaging only. |
| Command Center UI shell | `frontend/src/routes/command-center.tsx`, `frontend/src/components/CommandCenter/*` | `SAFE_AFTER_STUBBING` | `P2_LATER` | Medium | Current R&D panels are runtime-heavy | Keep current static command-center shell; later adapt presentation-only subpanels. |
| Docs/info page | `frontend/src/components/Common/SparkbotSurfaceInfoDialog.tsx` | `SAFE_FRONTEND_STATIC_IMPORT` | `P1_PUBLIC_POLISH` | Medium | Low technical risk | Can be adapted manually as static modal/panel pattern. |
| Robo OS tab | `frontend/src/pages/WorkstationPage.tsx` (MCP/Robo panel) | `RUNTIME_BOUNDARY_RISK` | `TEASER_ONLY` | Medium | MCP registry, runtime health and explain plan calls | Teaser-only copy and static cards; no runtime panel import. |
| LIMA readiness / robotics bridge UI | `frontend/src/pages/WorkstationPage.tsx` | `DOCS_REFERENCE_ONLY` | `P2_LATER` | Medium | Runtime-coupled bridges and manifests | Keep current LIMA-ready static panel and docs path. |
| Terminal/browser/computer-control UI | `frontend/src/components/Terminal/XtermTerminal.tsx`, `frontend/src/hooks/useTerminalSession.ts` | `RUNTIME_BOUNDARY_RISK` | `DO_NOT_IMPORT` | Low for current scope | Live terminal WS/session behavior | Explicitly forbidden for public static shell. |
| Connector setup UI | `frontend/src/components/CommandCenter/SetupPanels.tsx` | `RUNTIME_BOUNDARY_RISK` | `DO_NOT_IMPORT` | Medium | Token forms and connector credentials | Keep static connector identity shell only. |
| Provider key setup UI | `frontend/src/components/CommandCenter/SetupPanels.tsx` | `PRIVATE_OR_PROPRIETARY` | `DO_NOT_IMPORT` | Medium | API keys, OAuth tokens, vault language | Do not import into public shell preview. |
| Public download/docs surfaces | `frontend/src/components/Common/*` | `SAFE_AFTER_STUBBING` | `P1_PUBLIC_POLISH` | Medium | Mixed style assumptions, but low runtime coupling | Adapt reusable style patterns only where needed. |
| Mobile responsive helpers | `frontend/src/hooks/useMobile.ts` | `SAFE_FRONTEND_STATIC_IMPORT` | `P1_PUBLIC_POLISH` | Medium | Low risk utility hook | Candidate for direct import with attribution check, if needed. |
| Route/auth wrappers | `frontend/src/routes/workstation.tsx`, `frontend/src/hooks/useAuth.ts`, `frontend/src/lib/localSession.ts` | `RUNTIME_BOUNDARY_RISK` | `DO_NOT_IMPORT` | Low | Auth/session/token storage and gate logic | Keep Sparkbot Shell simple hash route structure. |
| Station config map | `frontend/src/config/workstationStations.ts` | `SAFE_AFTER_STUBBING` | `P2_LATER` | Medium | Includes terminal/sparkbud/runtime assumptions | Import only after pruning runtime stations and sensitive prompts. |

## Explicit Defer/Reject Set

- `frontend/src/lib/*` API or runtime clients: `DO_NOT_IMPORT`.
- `frontend/src/client/*` generated SDK: `DO_NOT_IMPORT`.
- Any terminal, websocket, storage, or credential paths: `DO_NOT_IMPORT`.
- Any `spine`, `guardian`, `vault`, or operator security runtime UI/actions: `DO_NOT_IMPORT`.

## Notes

- This matrix is planning-only and does not approve code import by itself.
- Any import execution requires a separate explicit Phil approval pass after this planning stage.
- Wave 1 candidates are now officially checkpoint-validated on this branch.
- `static-shell-mock-contract-baseline` should be treated as the post-candidate checkpoint and consolidation baseline.
- Wave 1 candidate #1 (Workstation visual refinement) is now executed as a manual static adaptation in Sparkbot Shell.
- Wave 1 candidate #2 (Round Table visual refinement) is now executed as a manual static adaptation in Sparkbot Shell.
- Wave 1 candidate #3 (Model stack + Invite Wing visual refinement) is now executed as a manual static adaptation in Sparkbot Shell.
- Wave 1 candidate #4 (Docs/info visual refinement) is now executed as a manual static adaptation in Sparkbot Shell.
- No direct R&D source code copy was performed for Wave 1 candidate #1.
- No direct R&D source code copy was performed for Wave 1 candidate #2.
- No direct R&D source code copy was performed for Wave 1 candidate #3.
- No direct R&D source code copy has been performed for Wave 1 candidate #4.
