# Physical Mobile QA Checklist

Updated: 2026-05-23

Status: MANUAL_REQUIRED.

This checklist is the remaining physical/mobile browser gate for the Sparkbot Shell static preview. It is required before public announcement, but it does not block internal/staging preview artifact generation.

## Preview Under Test

- Branch: `public-release-physical-qa-record`
- Base signoff commit: `37f614fdf29c05140e2d290b1f05432b788cc084`
- Option B QA branch: `public-release-mobile-qa-fixes`
- Package/version label: `0.8.0-layer8-preview`
- Artifact name: `sparkbot-shell-preview-0.8.0-layer8`
- Artifact path: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`

## Tester Result Fields

Fill these fields during manual QA:

| Field | Result |
|---|---|
| Test date | NOT_RUN |
| Tester | NOT_RUN |
| Device/browser | NOT_RUN |
| Viewport width | 390px target |
| Pass/fail | NOT_RUN |
| Issues found | NOT_RUN |
| Required fixes before public preview | NOT_RUN |
| Screenshots/video notes | NOT_RUN |

## Test Targets

| Target | Status | Notes |
|---|---|---|
| Mobile width: 390px browser | PASS_EMULATED | Edge headless + DevTools metrics found no horizontal overflow on required routes. Physical device still NOT_RUN. |
| Mobile width: 375px browser if practical | PASS_EMULATED | Edge headless + DevTools metrics found no horizontal overflow on required routes. |
| Tablet/narrow desktop if practical | PASS_EMULATED | 768px Edge headless screenshots and metrics passed. |
| Desktop Chrome/Edge | PASS_EMULATED | 1365px Edge headless screenshots and metrics passed. |
| Public docs page | PASS_EMULATED | `/docs` rendered readable in screenshots; public docs links present. |
| Workstation shell page | PASS_EMULATED | `/` and `/workstation` remained readable with no overflow metrics. |
| Round Table shell/demo page | PASS_EMULATED | `/roundtable` phase controls and meeting copy rendered without overflow metrics. |
| Model setup/config shell | PASS_EMULATED | `/command-center` model setup/editor sections stacked cleanly in mobile screenshots. |
| Robo teaser tab | PASS_EMULATED | `/robo` retained preview/demo-only copy and no live control claims. |
| Navigation/header | PASS_EMULATED | Sidebar/header/nav links remained visible and usable in screenshots. |
| README/docs links | PASS | Repo markdown link check passed; artifact README links were checked for public-safe targets. |
| Package artifact docs | PASS | Artifact docs matched the public-safe allowlist. |

## Route Checklist

| Route | Status | Required checks |
|---|---|---|
| `/` | PASS_EMULATED | Workstation default loads; no horizontal overflow at 375px/390px; shell-only caveat visible. |
| `/workstation` | PASS_EMULATED | Workstation content remains readable; model-seat/status badges wrap; Task Guardian and connector cards do not overflow. |
| `/chat` | PASS_EMULATED | Transcript, model-seat selector, context chips, and local-only composer caveat are reachable and not clipped. |
| `/roundtable` | PASS_EMULATED | Round Table phases, Meeting Manager copy, setup fields, cards, and notes area are readable. |
| `/command-center` | PASS_EMULATED | Model setup/config shell, Local AI, Specialty Wing, guardrails, Task Guardian, and connector sections stack cleanly. |
| `/task-guardian` | PASS_EMULATED | Health cards, delivery preference cards, severity badges, and no-scheduler copy are readable. |
| `/connectors` | PASS_EMULATED | Connector identity/PIN labels wrap; private recall stays fail-closed in preview; SMS unsupported is visible. |
| `/robo` | PASS_EMULATED | Robo teaser clearly says preview/demo only; no claims of live robotics/IoT control. |
| `/docs` | PASS_EMULATED | Public docs page is readable; docs links are present; repo markdown link check passed. |

## True Physical Device QA (390px)

This section must be completed on a physical phone/browser before readiness can move beyond manual-required status.

Use the branch under test:

- Branch: `public-release-physical-qa-record`
- Artifact/build tested: `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`.
- Artifact/version: `sparkbot-shell-preview-0.8.0-layer8` / `0.8.0-layer8-preview`
- Target viewport: 390px class phone width, portrait orientation.

| Field | Result |
|---|---|
| Device | NOT_RUN |
| OS/version | NOT_RUN |
| Browser | NOT_RUN |
| Browser width/viewport | NOT_RUN |
| Orientation | NOT_RUN |
| Tester | NOT_RUN |
| Date/time | NOT_RUN |
| Pass/fail | NOT_RUN (MANUAL_REQUIRED) |
| Issues found | NOT_RUN |
| Required fixes | NOT_RUN |
| Screenshots/video reference | NOT_RUN |
| Signoff status | NOT_RUN |

### Physical Route Checklist

Record per-route result on a true phone/tablet browser.

| Route | Load | Nav/Usability | Clip check | Runtime/noise claims check |
|---|---|---|---|---|
| `/` (landing/home) | NOT_RUN | NOT_RUN | NOT_RUN | NOT_RUN |
| `/docs` | NOT_RUN | NOT_RUN | NOT_RUN | NOT_RUN |
| `/workstation` | NOT_RUN | NOT_RUN | NOT_RUN | NOT_RUN |
| `/roundtable` | NOT_RUN | NOT_RUN | NOT_RUN | NOT_RUN |
| `/command-center` | NOT_RUN | NOT_RUN | NOT_RUN | NOT_RUN |
| `/robo` | NOT_RUN | NOT_RUN | NOT_RUN | NOT_RUN |
| `/chat` | NOT_RUN | NOT_RUN | NOT_RUN | NOT_RUN |
| `/task-guardian` | NOT_RUN | NOT_RUN | NOT_RUN | NOT_RUN |
| `/connectors` | NOT_RUN | NOT_RUN | NOT_RUN | NOT_RUN |
| release/readiness links | NOT_RUN | NOT_RUN | NOT_RUN | NOT_RUN |

### Manual Test Steps

1. Open the preview artifact app on a physical phone browser and a 390px-ish viewport.
2. Confirm each route loads and is readable without horizontal clipping.
3. Open navigation and verify each key route is reachable with tappable controls.
4. Confirm Robo teaser explicitly says preview/demo only and no live robotics/IoT claim is present.
5. Confirm no claims of backend/provider/connector runtime, memory persistence, scheduler behavior, or real connector sends appear in visible copy.
6. Confirm no private paths, private domains, channel IDs, phone numbers, tokens, or credentials are visible.
7. Confirm preview/staging status remains clear in headers/footers/help text.
8. Capture screenshots for each required route if possible.

## Edge Emulation Evidence

The Option B pass used local Edge headless screenshots and DevTools layout metrics for all required routes at 375px, 390px, 768px, and 1365px.

Layout metric result: PASS. `documentElement.scrollWidth` did not exceed `window.innerWidth` for any checked route/viewport, and no visible element bounds exceeded the viewport in the DevTools audit.

Physical-device result: NOT_RUN. Do not mark this gate GREEN until a real device or Phil-confirmed physical browser check is completed.

## Required Checks

- No horizontal clipping on 390px except intentional scroll areas.
- Primary navigation remains usable.
- Workstation and Round Table content remains readable.
- CTA/buttons/selectors are tappable.
- Docs page is readable.
- Robo teaser clearly says preview/demo only.
- No claims of live robotics/IoT control.
- No claims of backend/provider/connector runtime.
- No broken internal links.
- No private paths, private domains, credentials, tokens, or secrets visible.
- No `armpit-symphony` final-release branding; this repo may be shown only as the current staging repo.
- Artifact contents match the expected public-safe set.

## Expected Public-Safe Artifact Set

The generated preview artifact should contain only:

- `app/`
- `README.md`
- `LICENSE`
- `package.json`
- `package-metadata.json`
- `docs/INSTALL.md`
- `docs/CAPABILITIES.md`
- `docs/ARCHITECTURE_OVERVIEW.md`
- `docs/SECURITY_AND_GUARDRAILS.md`
- `docs/LOCAL_AI_SETUP.md`
- `docs/ROUND_TABLE_OVERVIEW.md`
- `docs/TASK_GUARDIAN_OVERVIEW.md`
- `docs/CONNECTORS_OVERVIEW.md`
- `docs/ROBO_PREVIEW.md`
- `docs/BETA_LIMITATIONS.md`

The artifact must not contain extraction maps, readiness/no-go docs, staging QA docs, R&D path maps, `.git`, `.github`, `.agents`, `node_modules`, logs, caches, env files, tests, workflows, backend/runtime code, connector runtime, Guardian runtime, Robo bridge, or LIMA/Arc/Office/IT private internals.

## Evidence To Record

- Device and browser.
- Viewport width if known.
- Route-specific pass/fail.
- Screenshots for Workstation, Round Table, Command Center, Robo, and Docs.
- Video notes if a nav or wrapping issue is hard to capture.
- Required fixes before public preview.
