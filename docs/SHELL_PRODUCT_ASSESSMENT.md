# Shell Product Assessment

Updated: 2026-05-22

Branch: `public-release-shell-visual-qa-assessment`

Rating scale:

- GREEN = good enough for the current static shell.
- YELLOW = needs polish before public release artifact signoff.
- RED = blocker.
- UNKNOWN = needs manual/user review.

| Area | Rating | Assessment | Recommendation |
|---|---|---|---|
| Product identity clarity | GREEN | Sparkbot Shell and the Round Table hook are visible immediately. Static-only boundaries are repeated consistently. | Keep this framing. |
| Workstation company floor concept | GREEN | Workstation reads as the operating floor and links the major public surfaces. | Reduce density in a later polish pass. |
| Main Chat operator middle-person concept | GREEN | Chat is clearly framed as the operator command channel with local placeholder behavior only. | Keep local-only composer language until runtime contracts are approved. |
| Round Table hero clarity | GREEN | Meeting Manager, phases, assignments, second pass, wrap-up, and notes are understandable. | Polish long-session layout before runtime. |
| Model seats / Invite Wing clarity | YELLOW | The concept is present, but provider/model/auth terms are dense for first-time users. `Configured preview` now reduces false readiness. | Add a user-facing model-seat overview doc before public artifact. |
| Specialty Wing clarity | YELLOW | Agent cards and model-seat assignments are visible, but the relationship to Round Table could be clearer. | Add one concise overview in the future capabilities docs. |
| Command Center clarity | YELLOW | It correctly gathers setup, guardrails, Task Guardian, and model seats, but the page is visually busy. | Consider tabs or tighter section grouping in a visual polish pass. |
| Task Guardian health report clarity | GREEN | PC/server health shell, report renderer, app-first delivery, and no-scheduler boundary are clear. | Keep external delivery caveat visible. |
| Connector/PIN fail-closed clarity | GREEN | Setup-needed/live-QA-unknown statuses, PIN as step-up, private recall fail-closed, and SMS unsupported are clear. | Keep live connector QA UNKNOWN until test-only channels pass. |
| Robo Preview boundary clarity | GREEN | Robo is teaser-only with no control surface. | Do not add controls without explicit later approval. |
| Docs/public artifact boundary clarity | YELLOW | The repo now has a clear artifact manifest, but dedicated public docs are not all present yet. | Create the allowlisted public docs before packaging. |
| Overall visual polish | YELLOW | Desktop route screenshots are readable. Narrow layouts improved, but physical/mobile review remains recommended. | Run a focused visual polish pass before runtime contracts. |

## Summary

The shell is good enough as a static public-release staging preview. It is not ready to be called a public release artifact because the user-facing docs bundle is incomplete and mobile QA needs a real device/browser follow-up.

## Blockers

- RED: none found in this pass.

## Recommended Next Step

Run a narrow visual polish pass plus public docs completion before starting any runtime contract layer.
