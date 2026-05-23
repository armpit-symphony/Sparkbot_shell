# Physical Mobile QA Checklist

Updated: 2026-05-23

Status: NOT_RUN.

This checklist is the remaining physical/mobile browser gate for the Sparkbot Shell static preview. It is required before public announcement, but it does not block internal/staging preview artifact generation.

## Preview Under Test

- Branch: `public-release-shell-mobile-qa-gate`
- Base signoff commit: `37f614fdf29c05140e2d290b1f05432b788cc084`
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
| Viewport width | NOT_RUN |
| Pass/fail | NOT_RUN |
| Issues found | NOT_RUN |
| Required fixes before public preview | NOT_RUN |
| Screenshots/video notes | NOT_RUN |

## Test Targets

| Target | Status | Notes |
|---|---|---|
| Mobile width: 390px browser | NOT_RUN | Primary blocker. Test on real phone browser or trusted responsive browser. |
| Mobile width: 375px browser if practical | NOT_RUN | Optional tighter phone-width check. |
| Tablet/narrow desktop if practical | NOT_RUN | Useful for sidebar/nav transition review. |
| Desktop Chrome/Edge | NOT_RUN | Confirm no regression from prior desktop checks. |
| Public docs page | NOT_RUN | `/docs` links and docs boundary must be readable. |
| Workstation shell page | NOT_RUN | `/` and `/workstation` should remain readable. |
| Round Table shell/demo page | NOT_RUN | `/roundtable` phase controls and meeting copy must remain usable. |
| Model setup/config shell | NOT_RUN | `/command-center` model setup/editor sections must stack cleanly. |
| Robo teaser tab | NOT_RUN | `/robo` must clearly say preview/demo only. |
| Navigation/header | NOT_RUN | Sidebar/header/nav links must remain usable. |
| README/docs links | NOT_RUN | Public docs links must resolve and be readable. |
| Package artifact docs | NOT_RUN | Artifact docs must match the public-safe allowlist. |

## Route Checklist

| Route | Status | Required checks |
|---|---|---|
| `/` | NOT_RUN | Workstation default loads; no horizontal clipping at 390px except intentional scroll areas; shell-only caveat visible. |
| `/workstation` | NOT_RUN | Workstation content remains readable; model-seat/status badges wrap; Task Guardian and connector cards do not clip. |
| `/chat` | NOT_RUN | Transcript, model-seat selector, context chips, and local-only composer caveat are reachable and not clipped. |
| `/roundtable` | NOT_RUN | Round Table phases, Meeting Manager copy, setup fields, cards, and notes area are readable and tappable. |
| `/command-center` | NOT_RUN | Model setup/config shell, Local AI, Specialty Wing, guardrails, Task Guardian, and connector sections stack cleanly. |
| `/task-guardian` | NOT_RUN | Health cards, delivery preference cards, severity badges, and no-scheduler copy are readable. |
| `/connectors` | NOT_RUN | Connector identity/PIN labels wrap; private recall remains fail-closed/YELLOW/UNKNOWN; SMS unsupported is visible. |
| `/robo` | NOT_RUN | Robo teaser clearly says preview/demo only; no claims of live robotics/IoT control. |
| `/docs` | NOT_RUN | Public docs page is readable; links are tappable; no broken internal links. |

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
