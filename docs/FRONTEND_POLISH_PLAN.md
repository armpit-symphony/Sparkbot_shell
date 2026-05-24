# Frontend Polish Plan

Updated: 2026-05-24  
Branch: `frontend-only-mvp-polish-pass`

## Current UX Strengths

- Workstation is already the default home route and operating floor.
- Round Table has a usable local-state demo flow with seats, phases, assignments, wrap-up, and notes.
- Command Center already groups model seats, Local AI labels, Invite Wing, Specialty Wing, Guardrail profile shell, Task Guardian preview, and connector caveats.
- Robo Preview and LIMA AI OS readiness are represented without runtime wiring.
- Responsive CSS already collapses dense grids for mobile.

## Unclear Areas Before Polish

- First impression still read like an internal readiness branch rather than a polished public preview.
- Workstation did not explicitly name the "Sparkbot desk" product idea.
- Model seats were present but not framed as Primary, Backup 1, Backup 2, Heavy Hitter, and Bring-your-own seats.
- Round Table phase labels were technically correct but did not strongly communicate the killer-feature story.
- Guardian basics needed clearer confirmation-posture framing.
- Robo teaser needed stronger future-facing energy while preserving a hard no-control boundary.

## Missing Public-Preview Clarity

- The static-only boundary needed to remain visible in the first viewport.
- LIMA AI OS readiness needed to explain that Sparkbot Shell is not LIMA AI OS and does not bundle runtime code.
- Public release status needed to stay explicit: `GREEN_CANDIDATE`, `NOT_RELEASED`, `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`.

## Mobile and Readability Concerns

- Avoid introducing wider grids without mobile collapse rules.
- Keep status pills and card labels wrapping safely.
- Keep cards at existing 8px-radius system and avoid nested-card composition.

## Recommended Static Polish Changes

- Tighten topbar copy to describe the open-source, local-first workstation preview.
- Add Workstation snapshot cards for desk, model stack, Guardian posture, and open-source preview.
- Rename Round Table stage labels to topic, framing, synthesis, assignments, specialists, recommendation, and artifact.
- Add Round Table overview cards for topic, chair, and output artifact.
- Add model-stack role cards for Primary, Backup 1, Backup 2, Heavy Hitter, and Bring-your-own model seats.
- Add Guardian basics preview cards for confirmation, no execution, and contract-gated future integration.
- Strengthen Robo teaser copy around future LIMA robotics/IoT systems while stating no MCP/robotics calls.
- Expand the LIMA readiness panel with no-runtime and contract-gate language.

## What Remains Intentionally Stubbed

- Provider/model execution.
- Connector sends, sessions, and webhooks.
- Scheduler, reminders, and health collectors.
- Memory persistence and retrieval runtime.
- Guardian enforcement internals.
- Terminal/browser execution.
- Robotics/IoT control and live LIMA runtime wiring.
