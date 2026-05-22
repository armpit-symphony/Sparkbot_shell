# Layer 1 App Frame Status

Updated: 2026-05-22

Branch: `public-release-layer-1-app-frame`

## What Was Added

- Minimal Vite + React + TypeScript frontend scaffold.
- Static app frame with persistent global navigation.
- Static placeholder pages for Workstation, Chat, Round Table, Command Center, Task Guardian, Robo Preview, and Docs.
- Public-safe Workstation placeholder panels for Main Chat, Round Table, Model Seats, Specialty Wing, Task Guardian, and Command Center.
- Public-safe copy for Meeting Manager, Invite Wing/model seats, Local AI direction, guardrail profiles, Task Guardian health checks, app-first delivery, and Robo Preview.
- Repo docs links from the Docs page.

## Static Only

Layer 1 is only a shell frame. It does not call a backend, execute a meeting, send a connector message, schedule a job, persist memory, store credentials, invoke a model provider, call a Local AI endpoint, open a terminal/browser, or control robots/IoT devices.

## Intentionally Not Included

- Backend runtime.
- Real Chat/DM execution.
- Real Round Table execution.
- Real memory/context spine.
- Real Guardian Suite internals.
- Real Task Guardian execution.
- Real connector sends.
- Real Local AI calls.
- Real model-seat credential storage.
- Real terminal/browser execution.
- Real robotics/IoT control.
- Private Robo/LIMA bridge.
- LIMA AI OS, Arc Bot, LIMA Office, or LIMA IT wiring.
- Package artifacts, private R&D docs, tests, workflows, or secrets.

## Public/Private Boundary

The app frame uses public product language only. It keeps Robo as Robo Preview teaser-only, keeps connectors as opt-in/configured future surfaces, keeps SMS/text future/unsupported, and keeps external private recall live-QA-gated.

No Sparkbot R&D source files were copied wholesale. The shell was written as a small public scaffold using the approved Layer 1 architecture from the extraction docs.

## Validation Results

Layer 1 validation completed for this branch:

- `git status --short --branch`: reviewed before commit.
- `git diff --check`: passed with normal Windows LF-to-CRLF notices only.
- `npm install`: passed; install reported zero vulnerabilities.
- `npm run build`: passed.
- `npm run lint`: not configured.
- Local Markdown link check: passed.
- Dev-server smoke: `http://127.0.0.1:5173` returned HTTP 200.
- Source-copy check: no `backend/`, `src-tauri/`, connector services, Guardian internals, scheduler, Robo bridge, package artifacts, tests, or workflows were added.
- Targeted secret/private-term scan: no live secrets or private paths found; matches are intentional boundary/planning references in docs or static no-go copy.

## Next Layer Recommendation

Layer 2 should focus on the Chat/model config shell:

- Static-to-interactive Main Chat scaffolding.
- Model stack and setup-needed forms.
- Public-safe model-seat shape.
- No live provider calls.
- No credential storage until the backend/Vault boundary is reviewed.
