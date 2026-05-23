# Public Preview Readiness Summary

Updated: 2026-05-23

## Ready For Internal/Staging Preview Review

- Static Vite/React/TypeScript shell.
- Workstation, Chat, Round Table, Command Center, Task Guardian, Connectors, Robo Preview, and Docs routes.
- Public docs bundle.
- MIT `LICENSE`.
- Preview package script.
- Locked artifact name: `sparkbot-shell-preview-0.8.0-layer8`.
- Locked package/version label: `0.8.0-layer8-preview`.
- Preview artifact inspection.
- Raw npm pack dry-run allowlist.
- Runtime/persistence scan with no source runtime calls.
- Source boundary with no backend, Tauri, `.github`, or `.agents` directories.

## Shell Only

The current preview is local UI and static/demo state only. It does not run backend services, call providers, check Local AI endpoints, send connector messages, schedule jobs, persist memory, enforce guardrails, execute terminal/browser actions, or control robotics/IoT.

## Not Included

- Backend runtime.
- Model/provider calls.
- Local AI calls.
- Connector sends or webhooks.
- PIN verification or connector sessions.
- Scheduler and health collector runtime.
- Memory persistence/private recall.
- Guardian internals.
- Terminal/browser execution.
- Robotics/IoT control.

## Decisions Locked

- License: MIT unless a legal blocker is discovered.
- Copyright holder: `SparkPit Labs / Phil Lima`.
- Current staging repo: `armpit-symphony/Sparkbot_shell`.
- Likely future public repo: `sparkpit-labs/Sparkbot`.
- Preview artifact name: `sparkbot-shell-preview-0.8.0-layer8`.
- Package/version label: `0.8.0-layer8-preview`.
- Public artifact source: this branch may generate an internal/staging static preview artifact only.

## Still Required Before Public Announcement

- Complete physical/mobile 390px QA on a real phone browser or trusted responsive browser.
- Keep external connector recall/delivery YELLOW/UNKNOWN unless live test credentials/channels are configured and tested.
- Re-run package QA from the final announcement branch/environment.
- Do not tag, publish to npm, or upload a public release artifact unless Phil explicitly approves that operation.

## Required Before Final Public Release

- Decide and perform final public repo migration/import if moving to `sparkpit-labs/Sparkbot`.
- Repeat package QA from a clean clone and target release environment.
- Confirm license posture with any required legal review.
- Keep runtime work separate from static preview claims.

## Recommended Next Technical Phase

After static preview signoff, the next technical phase should be a runtime contract layer, not direct runtime implementation. Start with contracts for backend/model calls, memory persistence, guardrail enforcement, and connector identity/delivery boundaries.
