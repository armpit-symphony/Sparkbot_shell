# Public MVP Roadmap

Updated: 2026-05-23

This roadmap sequences `Sparkbot_shell` extraction. It is deliberately layered so public import can stop safely if QA exposes a blocker.

## Phase A - Shell Docs/Foundation

Status: completed in `public-release-extraction-map-refresh`.

Imports: README, classification docs, extraction map, sanitization checklist, repo separation rules, readiness assessment.

Exclusions: all runtime source, proprietary modules, live connectors, Robo bridge, LIMA/Arc/Office/IT wiring.

Validation: markdown checks, link checks, source-copy check, secret scan.

Blockers: unclear public/private boundaries, missing license decision, missing import approval.

## Phase B - Clean App Frame Import

Status: completed in `public-release-layer-1-app-frame` as a static shell scaffold.

Imports: static app shell, global nav, public route frame, public surface tabs.

Exclusions: devtools, admin/template routes, private tabs, live terminal, private Robo controls.

Validation: frontend build, static source-copy scan, desktop/mobile browser smoke for nonblank shell and navigation.

Blockers: private labels, hidden debug routes, shell requiring private backend state.

## Phase C - Core Brain/Chat/Model Stack

Status: started/completed as a shell-only Layer 2 pass in `public-release-layer-2-chat-model-config-shell`.

Imports: Main Chat / DM shell, model stack/config shell, model selector shell, setup-needed state, and model-seat form shape.

Exclusions: proprietary Guardian internals, hidden breakglass flows, credential-bearing browser storage, backend calls, provider calls, Local AI calls, memory runtime, and connector sends.

Validation: frontend build, local-state chat smoke, setup-needed warnings, secret/private scan, and source-copy check.

Blockers before runtime import: backend credential boundary, provider call contracts, memory adapter contract, and live model/local endpoint QA.

## Phase D - Workstation + Command Center

Status: started/completed as a shell-only Layer 3 pass in `public-release-layer-3-workstation-command-center-shell`.

Imports: Workstation public frame, Command Center AI Setup shell, Invite Wing shell, Specialty Wing shell, Command Center Security profile shell, and Task Guardian template preview.

Exclusions: private desks, enterprise workflow templates, live terminal default enablement, private service copy, backend runtime, provider calls, Local AI calls, credential storage, scheduler, connector sends, and Guardian enforcement.

Validation: frontend build, Workstation/Command Center smoke, shared demo-state review, runtime/persistence scan, source boundary check, and secret/private scan.

Blockers before runtime import: backend state boundary, guardrail enforcement contract, Task Guardian scheduler contract, connector delivery contract, and browser QA.

## Phase E - Invite Wing/Model Seats/Local AI

Status: shell shape started in Layer 2 and Layer 3; runtime import still pending.

Imports: Invite Wing model seats, Command Center model-seat editor, Local AI provider layer.

Exclusions: raw Vault internals, browser-stored secrets, subscription cookies, private provider defaults.

Validation: model-seat create/edit, missing credential setup-needed, Ollama live QA, one OpenAI-compatible local endpoint live QA.

Blockers: secret exposure, duplicate-seat selector bugs, unreachable local endpoint shown as ready.

## Phase F - Round Table + Meeting Manager

Status: started/completed as a shell-only Layer 4 pass in `public-release-layer-4-roundtable-static-flow`.

Imports: Round Table launch setup shape, Seat 1 Meeting Manager default, seat/agent/model-seat assignment shell, first-pass ideas, manager assessment, assignment cards, second-pass response previews, wrap-up preview, and meeting notes preview/edit shell.

Exclusions: backend runtime, real model/provider calls, Local AI calls, room runtime, meeting persistence, memory writes, per-turn meeting-note spam, connector sends, private prompts, proprietary orchestration internals, Guardian internals, and private LIMA/Arc/Office/IT wiring.

Validation: frontend build, Round Table route smoke, launch setup local-state review, per-seat model-seat selector review, assignment cards, notes editor local save preview, runtime/persistence scan, source boundary check, and secret/private scan.

Blockers before runtime import: public room contract, provider-call contract, notes persistence contract, memory/context adapter, redaction rules, and long-meeting UI QA.

## Phase G - Unified Memory/Context + Meeting Notes

Status: started/completed as a shell-only Layer 5 pass in `public-release-layer-5-memory-context-adapter-shell`.

Imports: public memory/context adapter contract shape, `ContextEvent`, `MeetingNoteContract`, `ContextRetrievalPreview`, source labels, sensitivity labels, memory rollup states, Main Chat context handoff preview, Round Table note contract preview, Task Guardian context event preview, and Workstation company-memory panel.

Exclusions: backend memory runtime, real Guardian memory service, database persistence, meeting-note persistence, context retrieval, connector recall, provider/model calls, raw transcripts in shared memory by default, private retention policy, and Guardian Spine commercial internals.

Validation: frontend build, Main Chat context handoff smoke, Round Table notes contract smoke, Task Guardian context preview smoke, draft suppression labels, runtime/persistence scan, source boundary check, and privacy/secret scan.

Blockers before runtime import: persistence contract, memory identity boundary, redaction policy, stale rollup retirement behavior, recall access control, draft suppression tests, and private context exposure checks.

## Phase H - Task Guardian Health Checks + Delivery

Status: started/completed as a shell-only Layer 6 pass in `public-release-layer-6-task-guardian-health-shell`.

Imports: Task Guardian health-check contract types, PC Health Check preview, Server Health Check preview, daily 6:00 AM local schedule preview, app/in-room default delivery, public delivery preferences, health report preview rendering, delivery status preview, and source-labeled health context events.

Exclusions: backend Task Guardian runtime, real scheduler, real health collector, real system commands, remediation, package installs, service restarts, raw logs, private process listings, connector sends, Telegram/Discord/Slack/WhatsApp delivery, SMS/text delivery, memory persistence, provider/model calls, terminal/browser execution, Guardian internals, and LIMA/Arc/Office/IT wiring.

Validation: frontend build, Task Guardian route smoke, health report preview review, missing external setup warning, runtime/persistence scan, source boundary check, and secret/private scan.

Blockers before runtime import: mutating diagnostics, raw secrets/private paths in reports, external delivery live QA, scheduler contract, evidence/redaction contract, and multi-worker scheduling without leader lock.

## Phase I - Connector Interfaces With Fail-Closed Identity/PIN

Status: started/completed as a shell-only Layer 7 pass in `public-release-layer-7-connector-pin-shell`.

Imports: public-safe connector/PIN contract types, connector setup-needed cards, Telegram/Discord/Slack/WhatsApp status previews, SMS/text future/unsupported status, fail-closed private recall gate preview, PIN session preview, connector delivery caveat preview, Workstation connector panel, and source-labeled connector recall context events.

Exclusions: production credentials, private channel IDs, phone numbers, connector target IDs, signing secret values, verify token values, real connector runtime, real sends, real webhooks, real SMS/text provider, real PIN verification, real connector sessions, real private memory recall, real Task Guardian delivery, backend runtime, memory persistence, Guardian internals, terminal/browser execution, and LIMA/Arc/Office/IT wiring.

Validation: frontend build, Connectors route smoke, Task Guardian delivery caveat smoke, connector recall gate labels, runtime/persistence scan, source boundary check, and secret/private scan.

Blockers before runtime import: no safe test credentials/channels, private recall marked GREEN without live QA, shared-channel leaks, synthetic owner attribution, long-lived PIN sessions, connector target leakage, and relaxed identity gates.

## Phase J - Robo Preview Teaser

Status: future teaser/static stub work.

Imports: static Robo Preview UI and non-executing backend stub contract.

Exclusions: private Robo/LIMA bridge implementation, live robot/drone/humanoid/IoT control, emergency stop/control routes.

Validation: preview renders, no live robotics tools are registered, package contains preview stub only.

Blockers: live robotics endpoint exposure, private bridge source import, LIMA runtime wiring.

## Phase K - Browser/Live QA + Package QA

Status: completed as public docs/package QA in `public-release-shell-docs-package-qa`; release decision gate documented in `public-release-shell-release-decision-gate`, with release signoff blockers still open.

Imports: public docs bundle, QA docs, preview package script, release artifact inspection instructions, release decision tracker.

Controlling boundary: [Public artifact manifest](PUBLIC_ARTIFACT_MANIFEST.md).

Exclusions: secrets, raw env files, private docs, tests/workflows unless recreated public-safe, R&D path maps, internal extraction planning, private/source-boundary notes, and no-go/internal readiness docs.

Public artifact docs: README, install/setup docs, capabilities docs, user-facing architecture overview, security/guardrail overview, Local AI setup overview, Round Table overview, Task Guardian overview, and connector setup caveats.

Repo-only staging docs: extraction maps, readiness docs, staging docs, and no-go gates.

Validation: browser checklist, preview package dry-run, artifact inspection, markdown link check, build, runtime/persistence scan, source boundary check, and secret/private scan.

Blockers: license/final repo naming open, final artifact naming open, physical/mobile 390px QA open, connector QA UNKNOWN for private recall claims, and future package checks on Linux/clean clone still pending.

## Phase L - v1.0.0 Public Release Candidate

Imports: only approved and validated public layers.

Exclusions: all private/proprietary tracks and anything still REVIEW_REQUIRED.

Validation: clean install, frontend build, backend tests, package inspection, secret scan, release notes, license, security policy.

Blockers: production-readiness claims, live connector overclaims, unresolved P0 private boundary issues, missing release artifact review.
