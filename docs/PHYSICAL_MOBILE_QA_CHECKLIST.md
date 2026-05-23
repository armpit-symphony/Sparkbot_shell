# Physical Mobile QA Checklist

Updated: 2026-05-23

Status: NOT_RUN.

This checklist is for the remaining 390px-ish physical/mobile browser QA gate. The prior headless runner produced nonblank screenshots but cropped the right edge on several routes, so a real phone browser or reliable responsive browser tool is still required. This is required before public announcement, but it does not block internal/staging preview artifact generation.

## Setup

1. Run:

   ```bash
   npm run dev -- --host 0.0.0.0 --port 5179
   ```

2. Open the Vite LAN URL on a phone browser, or use a trusted browser device toolbar set near 390px width.
3. Record device, browser, viewport, date, branch, and commit.
4. Do not mark this QA GREEN unless all required routes pass without horizontal overflow or clipped primary content.

## Route Checklist

| Route | Status | Checks |
|---|---|---|
| `/` | NOT_RUN | Workstation default loads; nav usable; shell-only caveat visible; no horizontal scroll. |
| `/workstation` | NOT_RUN | Core cards readable; model-seat/status badges wrap; connector and Task Guardian summaries readable. |
| `/chat` | NOT_RUN | Transcript, model-seat selector, context chips, and local-only composer caveat are reachable and not clipped. |
| `/roundtable` | NOT_RUN | Phase buttons wrap; setup fields and notes area are reachable; Meeting Manager copy is readable. |
| `/command-center` | NOT_RUN | Setup map, model-seat editor, Local AI panel, Specialty Wing, and guardrail sections stack cleanly. |
| `/task-guardian` | NOT_RUN | Health report cards, delivery preferences, severity badges, and no-scheduler caveat are readable. |
| `/connectors` | NOT_RUN | Connector cards, identity/PIN labels, fail-closed copy, and SMS unsupported status wrap cleanly. |
| `/robo` | NOT_RUN | Teaser-only boundary is visible; no controls imply hardware execution. |
| `/docs` | NOT_RUN | Public docs links are readable and tappable; documentation boundary is visible. |

## Pass Criteria

- No horizontal scrolling.
- No clipped headings or primary status badges.
- No hidden controls or unreachable selectors.
- Cards and tables remain readable.
- Public docs links are usable.
- Shell-only/no-runtime caveats remain visible.

## Evidence To Record

- Device and browser.
- Viewport width if known.
- Screenshots for Workstation, Command Center, Task Guardian, Connectors, and Docs.
- Any route-specific warnings.
