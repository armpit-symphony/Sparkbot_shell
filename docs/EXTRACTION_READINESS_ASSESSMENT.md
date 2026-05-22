# Extraction Readiness Assessment

Updated: 2026-05-22

Reference source: `armpit-symphony/Sparkbot` branch `public-release-live-connector-qa` at `fe2a5ffc2bbbff7ef4fde9959d6b35206719f3e5`.

## Current Readiness

Sparkbot is ready for refreshed extraction planning. It is not ready for blind source import into `Sparkbot_shell`.

The public product architecture is now clear: Workstation operating floor, Main Chat command channel, Round Table meeting room, Meeting Manager secretary, shared memory/context, model seats, Local AI, Task Guardian health checks, connector channels, and Robo Preview teaser.

## Ready To Import Soon

These are candidates after approval and targeted validation:

- Layer 1 clean app frame/global nav/static shell.
- Public route frame and surface tabs.
- Public docs and package/download planning.
- Public-safe model config contracts.
- Static Round Table launch/Meeting Room structure after shell import.

## Must Be Rewritten

These need public-shell implementations or adapters instead of direct import:

- Unified memory/context public adapter, hiding proprietary Guardian internals.
- Command Center Security guardrail UI and policy boundary.
- Connector delivery/recall interfaces with fail-closed identity/PIN gates.
- Terminal/browser capability controls.
- Scheduler leadership/locking for multi-worker installs.
- GitHub and other connected tools as user-owned, scoped examples.

## Must Be Stubbed

These should be represented without live private behavior:

- Robo Preview.
- Robotics/IoT preview.
- LIMA bridge concepts.
- Private bridge/service integration points.

## Must Remain Private

These are no-go for public import:

- Advanced Guardian Suite internals.
- Guardian Spine commercial internals.
- LIMA AI OS runtime internals.
- Arc Bot business worker shell/runtime behavior.
- LIMA Office business automation suite/control plane.
- LIMA IT diagnostics/remediation workflows.
- Private Robo/LIMA bridge implementation.
- Paid service orchestration.
- Private deployment paths and client-specific automation.

## Still Needs Browser/Live QA

- `/login`, `/dm`, `/workstation`, `/meeting/:roomId`.
- Command Center AI Setup and model-seat editor.
- Command Center Security profile and confirmation flows.
- Task Guardian health-check cards, app delivery, and recent report display.
- Meeting notes save/edit/Main Chat recall.
- Local AI against live Ollama and at least one OpenAI-compatible local endpoint.
- Telegram, Discord, Slack, and WhatsApp live connector recall/delivery with test-only identities/channels.
- Package dry-run and artifact inspection on Windows/Git Bash, Linux, and clean clone.

## Can Proceed Despite UNKNOWN Connector QA

Planning, classification, docs, and Layer 1 shell import can proceed while connector live QA remains UNKNOWN because Layer 1 should not import or claim live connector private recall.

Allowed next work despite UNKNOWN connector QA:

- Update extraction docs.
- Create public shell frame.
- Add static navigation.
- Define public-safe connector contracts.
- Keep connector recall/delivery rows as `REVIEW_REQUIRED`.

Not allowed until live QA passes:

- Mark external private recall GREEN.
- Market connector private recall as complete.
- Import connector behavior without fail-closed tests.
- Enable public external delivery by default.

## Recommended First Import Layer

Layer 1 - Clean app frame/global nav/static shell.

Scope:

- Public route frame.
- Global navigation.
- Static Workstation, DM, Round Table, Command Center, Task Guardian, and Robo Preview placeholders.
- Public-safe contracts and docs.
- No model execution, connector delivery, memory recall, Task Guardian scheduling, or Robo bridge.

Then proceed in order:

1. Layer 2 - Chat/model config.
2. Layer 3 - Workstation/Command Center shell.
3. Layer 4 - Round Table static flow.
4. Layer 5 - memory/context adapter.

Do not import everything at once.

## Recommended No-Go Gates

- Any source import includes private paths, domains, secrets, tokens, PINs, phone numbers, or channel IDs.
- Public package contains `.github`, `.agents`, tests, env files, private docs, private Robo bridge, logs, local DBs, keys/certs, caches, or proposal scripts unintentionally.
- Connector private recall is not fail-closed.
- Live connector QA remains UNKNOWN but docs/UI claim GREEN external private recall.
- Local AI endpoint status shows ready when unreachable.
- Scheduler public docs recommend multi-worker recurring jobs before leader locking.
- Robo Preview exposes live robotics/IoT controls.
- Sparkbot Shell claims production readiness before release candidate validation.
