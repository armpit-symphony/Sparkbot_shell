# Extraction Readiness Assessment

Updated: 2026-05-22

Reference source: `armpit-symphony/Sparkbot` branch `public-release-live-connector-qa` at `fe2a5ffc2bbbff7ef4fde9959d6b35206719f3e5`.

## Current Readiness

Sparkbot Shell has started Layer 1 with a static public app frame. Sparkbot R&D is still not ready for blind source import into `Sparkbot_shell`.

The public product architecture is now represented in the shell scaffold: Workstation operating floor, Main Chat command channel, Round Table meeting room, Meeting Manager secretary, shared memory/context direction, model seats, Local AI direction, Task Guardian health-check direction, connector channels, and Robo Preview teaser.

## Layer 1 Completed

Completed in `public-release-layer-1-app-frame`:

- Layer 1 clean app frame/global nav/static shell.
- Public route frame and static placeholder pages.
- Public-safe docs page linking to repo planning docs.

No backend runtime, model calls, connector sends, scheduler, memory runtime, terminal/browser execution, or Robo/LIMA bridge was added.

## Ready To Import Soon

These are candidates after Layer 1 validation and targeted review:

- Public docs and package/download planning.
- Public-safe model config contracts.
- Chat/model config shell with no provider calls.
- Workstation/Command Center shell refinements.

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

Planning, classification, docs, Layer 1 shell frame work, and Layer 2 chat/model config shell work can proceed while connector live QA remains UNKNOWN because these layers should not import or claim live connector private recall.

Allowed next work despite UNKNOWN connector QA:

- Update extraction docs.
- Maintain the public shell frame.
- Add static navigation.
- Define public-safe connector contracts.
- Keep connector recall/delivery rows as `REVIEW_REQUIRED`.

Not allowed until live QA passes:

- Mark external private recall GREEN.
- Market connector private recall as complete.
- Import connector behavior without fail-closed tests.
- Enable public external delivery by default.

## Recommended Next Import Layer

Layer 2 - Chat/model config shell.

Scope:

 - Main Chat static-to-interactive scaffold.
 - Model stack forms and setup-needed states.
 - Public-safe model-seat shape.
 - No live model calls, provider credentials, connector delivery, memory recall, Task Guardian scheduling, or Robo bridge.

Then proceed in order:

1. Layer 3 - Workstation/Command Center shell.
2. Layer 4 - Round Table static flow.
3. Layer 5 - memory/context adapter.

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
