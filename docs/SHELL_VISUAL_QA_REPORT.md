# Shell Visual QA Report

Updated: 2026-05-22

Branch: `public-release-shell-visual-qa-assessment`

Base: `public-release-layer-8-packaging-boundary-shell` at `d98f3ff7b5783581fb21856cb6e2f680bdd9fdb2`

## Scope

This is a pause-and-assess pass for the static public shell after Layers 1 through 8. It does not start Layer 9 runtime work.

No backend runtime, provider/model calls, Local AI calls, connector sends, scheduler behavior, memory persistence, Guardian internals, terminal/browser execution feature, robotics/IoT control, LIMA AI OS wiring, Arc Bot wiring, LIMA Office wiring, or LIMA IT wiring was added.

## Smoke Method

- Local Vite dev server: `http://127.0.0.1:5178`.
- Direct route HTTP smoke for `/`, `/workstation`, `/chat`, `/roundtable`, `/command-center`, `/task-guardian`, `/connectors`, `/robo`, and `/docs`: all returned HTTP 200.
- Headless Edge screenshots captured for all requested routes at desktop width.
- Narrow screenshot pass captured at 500px width for Workstation; layout was readable after tiny CSS containment fixes.
- A 390px headless capture showed viewport cropping behavior in the local browser runner. Additional physical/mobile browser review is recommended before release artifact signoff.
- DevTools console inspection was not available from the current tool surface. Build validation covers compile-time crashes; browser screenshots verified nonblank rendered pages.

## Route Results

| Route | Status | Findings | Tiny fixes made | Follow-up recommendation |
|---|---|---|---|---|
| `/` | PASS | Loads the Workstation default view. Public shell boundary is visible in the sidebar and top status. | Direct path route normalization was added. | Keep `/` as Workstation until a dedicated public landing/install page exists. |
| `/workstation` | PASS | Workstation concept is readable: company floor, Chat middle-person, Round Table meeting room, model seats, Task Guardian, connectors, and Robo Preview. | Stale Layer 7 label changed to static shell wording; mobile heading/layout containment improved. | One visual polish pass should reduce density below the first viewport. |
| `/chat` | PASS | Main Chat shell loads with local placeholder transcript, selected model-seat dropdown, context labels, and runtime boundary copy. | Status badge copy changed from `Configured` to `Configured preview`. | In a future polish pass, make the local-only composer state even more visually distinct from real chat. |
| `/roundtable` | PASS | Round Table flow is clear, with setup, first pass, manager assessment, assignments, second pass, wrap-up, and notes phases. | Phase navigation grid now wraps with `auto-fit` to avoid cramped narrow layouts. | Continue with visual polish for long meetings and participant-heavy layouts before runtime work. |
| `/command-center` | PASS | Command Center loads model seats, Local AI setup shape, Invite Wing, Specialty Wing, guardrails, and Task Guardian preview. | Auth label changed to `Auth boundary label`; placeholder/copy warns not to paste credentials. | Split dense sections or add tabs in a future visual polish layer if the page feels heavy. |
| `/task-guardian` | PASS | Task Guardian health report shell loads with PC/server cards, app-first delivery, fake report previews, and no-scheduler/no-sends caveats. | Stale Layer 7 Task Guardian copy changed to static shell wording. | Later runtime contract must define evidence/redaction before real collector work. |
| `/connectors` | PASS | Connector/PIN shell clearly shows setup-needed/live-QA-unknown statuses, fail-closed private recall, no secret inputs, and SMS unsupported. | Stale Layer 7 copy changed to static shell wording; connector flow grid now wraps. | Live connector QA must remain UNKNOWN until test-only channels pass. |
| `/robo` | PASS | Direct `/robo` now resolves to Robo Preview; screenshot shows teaser-only boundary with no controls. | Added `/robo` alias to existing `robo-preview` shell route. | Keep as teaser-only unless a future public Robo stub layer is explicitly approved. |
| `/docs` | PASS | Docs page loads repo planning references and states the release-artifact exclusion boundary. | Docs link base updated for the assessment branch; new repo QA docs added to the docs index. | Before public artifact generation, replace staging doc links with the allowlisted public docs only. |

## Tiny Fixes Made

- Updated package version to `0.8.0-layer8`.
- Updated active shell branding from Layer 7 to Layer 8 packaging boundary shell.
- Updated stale Layer 7 copy in Workstation, Task Guardian, Connector, and Memory/Context previews.
- Added direct-path route handling for existing shell routes and `/robo` alias.
- Marked README planning docs as repo-only staging docs.
- Updated artifact manifest status to say the Layer 8 boundary decision has been applied.
- Renamed `Configured` badge to `Configured preview`.
- Renamed `Auth mode label` to `Auth boundary label` and added copy warning not to paste credentials.
- Added responsive grid wrapping and mobile heading/layout containment fixes.

## Remaining Visual / UX Items

- YELLOW: 390px physical-device/mobile browser QA should be repeated outside the headless runner.
- YELLOW: Workstation and Command Center are useful but dense; a visual polish pass should improve scan order and first-viewport focus.
- YELLOW: Docs route is correct for staging, but public artifacts need a separate allowlisted public docs bundle.

## Boundary Result

No product runtime was added. No Sparkbot R&D code was copied. Sparkbot R&D was not modified.
