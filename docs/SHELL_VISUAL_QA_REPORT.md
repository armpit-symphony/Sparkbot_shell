# Shell Visual QA Report

Updated: 2026-05-23

Branch: `public-release-shell-preview-signoff`

Base: `public-release-layer-8-packaging-boundary-shell` at `d98f3ff7b5783581fb21856cb6e2f680bdd9fdb2`

## Scope

This report now includes the focused visual polish and mobile QA follow-up for the static public shell after Layers 1 through 8. It does not start Layer 9 runtime work.

No backend runtime, provider/model calls, Local AI calls, connector sends, scheduler behavior, memory persistence, Guardian internals, terminal/browser execution feature, robotics/IoT control, LIMA AI OS wiring, Arc Bot wiring, LIMA Office wiring, or LIMA IT wiring was added.

## Smoke Method

- Local Vite dev server: `http://127.0.0.1:5179`.
- Direct route HTTP smoke for `/`, `/workstation`, `/chat`, `/roundtable`, `/command-center`, `/task-guardian`, `/connectors`, `/robo`, and `/docs`: all returned HTTP 200.
- Headless Edge screenshots captured for all requested routes at 390px, 500px, and desktop width after the polish pass.
- The 500px and desktop captures were nonblank and readable after header, badge, and grid wrapping fixes.
- The 390px captures were nonblank but the local headless runner still cropped the right edge of several pages. Treat 390px physical/mobile browser review as a remaining YELLOW item before release artifact signoff.
- DevTools console inspection was not available from the current tool surface. Build validation covers compile-time crashes; browser screenshots verified nonblank rendered pages.

## Route Results

| Route | Status | Findings | Tiny fixes made | Follow-up recommendation |
|---|---|---|---|---|
| `/` | PASS | Loads the Workstation default view. Public shell boundary is visible in the sidebar and top status. | Direct path route normalization was added. | Keep `/` as Workstation until a dedicated public landing/install page exists. |
| `/workstation` | PASS | Workstation concept is readable: company floor, Chat middle-person, Round Table meeting room, model seats, Task Guardian, connectors, and Robo Preview. Primary and secondary cards now scan more cleanly. | Added a compact preview map, split core rooms from secondary setup cards, clarified model-seat copy, and improved mobile wrapping. | Physical/mobile browser review remains useful before artifact signoff. |
| `/chat` | PASS | Main Chat shell loads with local placeholder transcript, selected model-seat dropdown, context labels, and runtime boundary copy. | Model-seat badge and chip wrapping now handles narrow widths more gracefully. | In a future runtime contract layer, keep local-only composer state distinct from real chat. |
| `/roundtable` | PASS | Round Table flow is clear, with setup, first pass, manager assessment, assignments, second pass, wrap-up, and notes phases. | Phase navigation grid now wraps with `auto-fit` to avoid cramped narrow layouts. | Continue with visual polish for long meetings and participant-heavy layouts before runtime work. |
| `/command-center` | PASS | Command Center loads model seats, Local AI setup shape, Invite Wing, Specialty Wing, guardrails, and Task Guardian preview. A setup map now reduces first-read density. | Added setup grouping, clarified model-seat versus model ID language, renamed local runtime/base URL fields as labels, and strengthened no-credential copy. | Tabs are not needed for the static preview, but could help later if runtime settings expand. |
| `/task-guardian` | PASS | Task Guardian health report shell loads with PC/server cards, app-first delivery, fake report previews, and no-scheduler/no-sends caveats. | Stale Layer 7 Task Guardian copy changed to static shell wording. | Later runtime contract must define evidence/redaction before real collector work. |
| `/connectors` | PASS | Connector/PIN shell clearly shows setup-needed/live-QA-unknown statuses, fail-closed private recall, no secret inputs, and SMS unsupported. | `Configured` connector/delivery labels now say `Configured preview`; connector chips wrap cleanly. | Live connector QA must remain UNKNOWN until test-only channels pass. |
| `/robo` | PASS | Direct `/robo` now resolves to Robo Preview; screenshot shows teaser-only boundary with no controls. | Added `/robo` alias to existing `robo-preview` shell route. | Keep as teaser-only unless a future public Robo stub layer is explicitly approved. |
| `/docs` | PASS | Docs page loads repo planning references and states the release-artifact exclusion boundary. | Docs link base updated for the visual polish branch. | Before public artifact generation, replace staging doc links with the allowlisted public docs only. |

## Responsive Follow-Up

| Width | Status | Result | Follow-up |
|---|---|---|---|
| 390px | WARN | Headless captures were nonblank, but the local runner still cropped the right edge on several routes. CSS wrapping fixes were applied, but this width needs physical/mobile browser confirmation. | Repeat on a real mobile browser or reliable responsive browser tool before public package signoff. |
| 500px | PASS | All requested routes rendered nonblank and readable. Sidebar, badges, cards, and docs links wrapped cleanly. | No immediate shell fix needed. |
| Desktop | PASS | All requested routes rendered nonblank and readable. Command Center and Workstation hierarchy improved after polish. | No immediate shell fix needed. |

## Manual 390px Mobile QA Steps

Status: NOT_RUN. Do not mark the 390px result fully GREEN until this check is run outside the headless screenshot runner.

1. Run `npm run dev -- --host 0.0.0.0 --port 5179`.
2. Open the Vite LAN URL on a real phone browser, or use a reliable browser device toolbar set to 390px width.
3. Check `/`, `/workstation`, `/chat`, `/roundtable`, `/command-center`, `/task-guardian`, `/connectors`, `/robo`, and `/docs`.
4. Confirm there is no horizontal scroll, clipped heading text, clipped status badge text, or hidden route content.
5. Confirm the sidebar/nav remains usable and docs links are readable.
6. Record device, browser, viewport, date, and any screenshots in the next QA report.

See [Physical mobile QA checklist](PHYSICAL_MOBILE_QA_CHECKLIST.md) for the route-by-route checklist.

## Tiny Fixes Made

- Changed Task Guardian nav eyebrow from scheduled-work language to health-preview language.
- Split Workstation cards into core rooms and secondary setup/status links.
- Added a compact Command Center setup map for AI Setup, Local AI, Specialty Wing, Guardrails, Task Guardian, Connectors, and Shell Status.
- Clarified model seat versus model ID wording across cards and the editor.
- Clarified Specialty Wing as role/skill-agent previews assigned to Round Table seats later.
- Clarified Custom guardrail text as draft/not enforced.
- Renamed connector/delivery `Configured` labels to `Configured preview`.
- Added mobile wrapping for headings, chips, badges, delivery labels, connector labels, and health report headers.
- Updated README and docs to reflect polish/mobile QA status and remaining public package gates.

## Remaining Visual / UX Items

- YELLOW: Physical-device/mobile browser QA should still be repeated outside the headless runner before public artifact signoff.
- YELLOW: Physical/mobile 390px browser QA remains required before public announcement.

## Boundary Result

No product runtime was added. No Sparkbot R&D code was copied. Sparkbot R&D was not modified.
