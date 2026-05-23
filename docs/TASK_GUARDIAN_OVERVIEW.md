# Task Guardian Overview

Task Guardian is the scheduled work manager direction for useful, bounded assistant work. The current shell only previews health-check report contracts.

## Current Preview

- PC Health Check template.
- Server Health Check template.
- Daily 6:00 AM local schedule preview.
- App/in-room delivery as the default.
- External delivery statuses for Telegram, Discord, Slack, WhatsApp, and SMS/text.
- Fake PC/server health reports with severity labels, findings, passed checks, and recommended actions.
- Source labels for future memory/context events.

## Delivery Boundary

App/in-room delivery is the default preview path. External delivery is opt-in, setup-gated, and live-QA unknown. SMS/text remains future/unsupported.

## Not Included

- Scheduler runtime.
- Health collector.
- System commands.
- Remediation.
- Service restarts or package installs.
- Raw logs or private paths.
- Connector sends.
- Memory writes.

## Future Runtime Requirements

Runtime work should define evidence capture, redaction, collector permissions, scheduler leadership, delivery policy, and failure states before any real health checks run.
