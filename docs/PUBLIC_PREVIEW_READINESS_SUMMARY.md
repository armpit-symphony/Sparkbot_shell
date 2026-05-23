# Public Preview Readiness Summary

Updated: 2026-05-23

## Ready For Staging Preview Review

- Static Vite/React/TypeScript shell.
- Workstation, Chat, Round Table, Command Center, Task Guardian, Connectors, Robo Preview, and Docs routes.
- Public docs bundle.
- Preview package script.
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

## Required Before Public Preview Signoff

- Choose preview artifact name/version. Suggested options: `sparkbot-shell-preview-0.8.0-layer8` or `sparkbot-public-preview-0.8.0`.
- Confirm whether `Sparkbot_shell` remains staging for preview publication.
- Complete physical/mobile 390px QA.
- Confirm license posture for preview distribution.

## Required Before Final Public Release

- Choose final license and add license file.
  - Recommendation: MIT for easiest hobbyist/open-source adoption unless Phil chooses otherwise.
- Choose final public repo/org/name.
  - Likely future public home: `sparkpit-labs/Sparkbot`.
- Choose final artifact/version naming.
- Repeat package QA from a clean clone and target release environment.
- Keep external connector recall/delivery YELLOW/UNKNOWN unless live test credentials/channels are configured and tested.

## Recommended Next Technical Phase

After Phil closes the decision gates, the next technical phase should be a runtime contract layer, not direct runtime implementation. Start with contracts for backend/model calls, memory persistence, guardrail enforcement, and connector identity/delivery boundaries.
