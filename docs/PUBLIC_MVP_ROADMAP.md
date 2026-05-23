# Public MVP Roadmap

## Phase A - Repo / Docs Foundation

Goal: make `Sparkbot_shell` understandable before code extraction.

- README.
- License decision.
- Public/private boundary.
- Contribution guide placeholder.
- Security policy placeholder.
- Public release handoff docs.
- Feature classification.
- Extraction map.
- Sanitization checklist.
- Repo separation rules.

Exit criteria:

- Docs render cleanly.
- No R&D code copied.
- No secrets or proprietary files added.
- Phil approves the public/private boundary.

## Phase B - Public Shell Import

Goal: import only public-safe shell layers.

- Minimal frontend shell.
- Minimal backend shell.
- Setup / Controls / Command Center.
- Model config and model seats.
- Chat/files.
- Workstation shell.
- Round Table MVP.
- Basic agents.
- Basic memory.

Exit criteria:

- Clean app frame runs locally.
- Chat and model setup work with at least one local or test provider.
- Round Table can launch a manager-led meeting.
- No LIMA AI OS, Arc Bot, LIMA Office, LIMA IT, private Robo bridge, private deployment, or proprietary Guardian internals are present.

## Phase C - Safety And Usability

Goal: ship a capable public shell with user-owned controls.

- Basic Guardian confirmations.
- Clear risky-action warnings.
- No hidden autonomy.
- No surprise external sends.
- Safe defaults for desktop and server modes.
- First-run flow.
- Connector setup status.
- Basic action history.

Exit criteria:

- Risky actions ask before execution.
- Missing setup states are understandable.
- Server/shared-machine defaults are stricter than local desktop defaults.
- Public docs explain what leaves the machine.

## Phase D - Demos And Polish

Goal: make the product legible and exciting without overstating private capabilities.

- Round Table demo.
- Workstation demo.
- Model stack demo.
- Robo teaser demo.
- Screenshots.
- Landing/download page copy.
- Install walkthrough.
- Public examples and starter prompts.

Exit criteria:

- Screenshots and demos contain no private data.
- Robo is clearly preview-only.
- Round Table is the first-viewport product hook.
- Docs do not present Sparkbot as LIMA AI OS, Arc Bot, LIMA Office, LIMA IT, or robotics control.

## Phase E - v1.0.0 Public Release

Goal: publish a clean, installable open-source release.

- Final repo home decision.
- Versioning.
- Release notes.
- Install docs.
- CI/tests.
- Packaged downloads.
- Launch checklist.
- Security policy.
- Contribution guide.
- License.

Exit criteria:

- Fresh install works from public docs.
- CI passes.
- Package/artifact scan passes.
- Dependency/license audit is acceptable.
- Release artifacts have checksums.
- Public/private boundary has final approval.

## Recommended Next Step

After this docs foundation lands, run a focused review of the R&D repo's latest public package artifact and browser QA results, then refresh this extraction map from the sanitized artifact instead of raw source.
