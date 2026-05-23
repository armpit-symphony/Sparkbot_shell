# Shell Layer Readiness Scorecard

Updated: 2026-05-22

Branch: `public-release-shell-visual-qa-assessment`

## Scorecard

| Layer | Status | What exists | Intentionally not included | Validation evidence | Open polish items | Next dependency |
|---|---|---|---|---|---|---|
| 1. App frame | GREEN | Vite/React/TypeScript shell, global nav, static public routes, sidebar boundary copy. | Backend runtime, live tools, private tabs, terminal/browser execution, robotics/IoT control. | Build history, current build, desktop route screenshots, direct route HTTP 200. | Keep direct route aliases aligned with nav. | Public release route policy. |
| 2. Chat/model config shell | GREEN | Main Chat local placeholder state, model seats, model editor, setup-needed labels, Local AI shape. | Provider calls, Local AI calls, credential persistence, backend chat, memory writes. | Current build, route smoke, runtime/persistence scan. | Further distinguish local placeholder chat from real runtime chat. | Backend credential/model-call contract. |
| 3. Workstation/Command Center shell | YELLOW | Workstation operating floor, Command Center setup, Invite Wing, Specialty Wing, guardrail profile shell. | Guardrail enforcement, provider runtime, persistence, connector sends, private desks. | Current build, desktop/narrow screenshots, route smoke. | Dense first viewport and Command Center page need polish. | Visual polish and public capability docs. |
| 4. Round Table static flow | GREEN | Setup, Seat 1 Meeting Manager, first pass, manager assessment, assignments, second pass, wrap-up, notes preview. | Room runtime, model calls, meeting persistence, memory writes, connector sends. | Current build, desktop screenshot, route smoke. | Long-meeting and participant-heavy layouts need later QA. | Room/provider/notes persistence contracts. |
| 5. Memory/context adapter shell | GREEN | Public frontend-only context event shapes, meeting-note contract, retrieval preview, redaction labels. | Memory persistence, real retrieval, Guardian memory service, private recall runtime. | Current build, source scan, Workstation/Chat context previews. | Make redaction states easier for nontechnical users. | Memory identity/redaction contract. |
| 6. Task Guardian health shell | GREEN | PC/server health templates, daily schedule preview, app-first delivery, fake report renderer, source labels. | Scheduler, health collector, system commands, remediation, external sends, memory writes. | Current build, Task Guardian screenshot, route smoke. | Future collector evidence/redaction rules need docs. | Health collector contract and evidence model. |
| 7. Connector/PIN shell | GREEN | Telegram/Discord/Slack/WhatsApp/SMS cards, identity status, PIN preview, fail-closed private recall preview. | Connector runtime, sends, webhooks, PIN verification, sessions, private recall. | Current build, Connectors screenshot, runtime scan, live-QA caveats. | Keep shared-space identity copy prominent. | Test-only connector live QA plan. |
| 8. Public artifact boundary | YELLOW | Public artifact manifest, README boundary copy, repo-only staging/public artifact distinction, public docs index draft. | Packaging scripts, release artifacts, artifact generation, production-readiness claims. | Markdown link check, build, source boundary scan, docs review. | Dedicated public docs are still incomplete; package dry-run still needed. | Public docs completion and package/download QA. |

## Overall Readiness

Static shell preview readiness: GREEN/YELLOW.

The shell is coherent and safe as a staging preview. The next risk is not runtime behavior; it is release packaging clarity, user-facing docs completeness, and final visual polish.

## Do Not Start Yet

Do not begin backend runtime, provider calls, scheduler execution, connector sends, private recall, memory persistence, Guardian internals, or robotics/IoT control until the relevant runtime contract layer is separately approved.
