# Shell Product Assessment

Updated: 2026-05-23

Branch: `public-release-shell-docs-package-qa`

Rating scale:

- GREEN = good enough for the current static shell.
- YELLOW = needs polish before public release artifact signoff.
- RED = blocker.
- UNKNOWN = needs manual/user review.

| Area | Rating | Assessment | Recommendation |
|---|---|---|---|
| Product identity clarity | GREEN | Sparkbot Shell and the Round Table hook are visible immediately. Static-only boundaries are repeated consistently. | Keep this framing. |
| Workstation company floor concept | GREEN | Workstation reads as the operating floor and now separates core rooms from secondary setup/status panels. | Keep this scan order. |
| Main Chat operator middle-person concept | GREEN | Chat is clearly framed as the operator command channel with local placeholder behavior only. | Keep local-only composer language until runtime contracts are approved. |
| Round Table hero clarity | GREEN | Meeting Manager, phases, assignments, second pass, wrap-up, and notes are understandable. | Polish long-session layout before runtime. |
| Model seats / Invite Wing clarity | GREEN | The UI now distinguishes named model seats from provider/runtime model IDs and states that credentials are not accepted. | Add a user-facing model-seat overview doc before public artifact. |
| Specialty Wing clarity | GREEN | The copy now frames Specialty Wing as role/skill-agent previews that can be assigned to Round Table seats later. | Add one concise overview in the future capabilities docs. |
| Command Center clarity | GREEN | A setup map now groups AI Setup, Local AI, Specialty Wing, Guardrails, Task Guardian, Connectors, and Shell Status before the dense controls. | Consider tabs only if later runtime settings expand. |
| Task Guardian health report clarity | GREEN | PC/server health shell, report renderer, app-first delivery, and no-scheduler boundary are clear. | Keep external delivery caveat visible. |
| Connector/PIN fail-closed clarity | GREEN | Setup-needed/live-QA-unknown statuses, PIN as step-up, private recall fail-closed, and SMS unsupported are clear. | Keep live connector QA UNKNOWN until test-only channels pass. |
| Robo Preview boundary clarity | GREEN | Robo is teaser-only with no control surface. | Do not add controls without explicit later approval. |
| Docs/public artifact boundary clarity | GREEN | The repo now has public docs, a manifest, a checklist, release decisions, and a passing preview package dry run. | Keep license/final repo naming open until Phil decides. |
| Overall visual polish | YELLOW | Desktop and 500px headless route screenshots are readable after the polish pass. The 390px headless runner still cropped the right edge, so physical/mobile review remains required before package signoff. | Complete public docs and package artifact QA before runtime contracts. |

## Summary

The shell is good enough as a static public-release staging preview branch. The user-facing docs bundle and preview package dry run are complete. It is not ready for public release signoff because license/final repo naming, final artifact naming, and physical/mobile browser review are still open.

## Blockers

- RED: none found in this pass.

## Recommended Next Step

Resolve release decisions and run physical/mobile browser QA before starting any runtime contract layer. Keep live connector QA UNKNOWN unless external recall/delivery claims are backed by test-only channel validation.
