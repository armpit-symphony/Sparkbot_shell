# Public MVP Roadmap

Updated: 2026-05-22

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

Imports: Round Table launch, Meeting Room, Seat 1 Meeting Manager default, assignment artifacts.

Exclusions: per-turn meeting-note spam, private prompts, proprietary orchestration internals.

Validation: launch a multi-seat meeting, per-seat model changes, assignment cards, manager checkpoint/wrap-up.

Blockers: meeting launch depends on private jobs, credentials in meeting metadata, broken long-meeting scroll.

## Phase G - Unified Memory/Context + Meeting Notes

Imports: public memory/context adapter, meeting notes save/edit/recall, memory rollup contract.

Exclusions: Guardian Spine commercial internals, raw transcripts in shared memory by default, private retention policy.

Validation: notes save/edit, stale rollup retirement, Main Chat recall, draft suppression, privacy scan.

Blockers: duplicate memory writes, failed/draft notes entering recall, private context exposed to wrong identity.

## Phase H - Task Guardian Health Checks + Delivery

Imports: PC/server health checks, app/in-room delivery, public delivery preferences.

Exclusions: remediation, package installs, service restarts, raw logs, private process listings, SMS sends.

Validation: app-only health run, missing external setup warning, safe report content, scheduler low-frequency behavior.

Blockers: mutating diagnostics, raw secrets/private paths in reports, multi-worker scheduling without leader lock.

## Phase I - Connector Interfaces With Fail-Closed Identity/PIN

Imports: public-safe connector interfaces for Telegram, Discord, Slack, and WhatsApp; connector PIN session concept.

Exclusions: production credentials, private channel IDs, unsupported SMS/text, relaxed shared-channel private recall.

Validation: test-only live connector QA, unverified recall fail-closed, PIN sessions, allowlist failures, non-secret evidence.

Blockers: no safe test credentials/channels, private recall marked GREEN without live QA, shared-channel leaks.

## Phase J - Robo Preview Teaser

Imports: static Robo Preview UI and non-executing backend stub contract.

Exclusions: private Robo/LIMA bridge implementation, live robot/drone/humanoid/IoT control, emergency stop/control routes.

Validation: preview renders, no live robotics tools are registered, package contains preview stub only.

Blockers: live robotics endpoint exposure, private bridge source import, LIMA runtime wiring.

## Phase K - Browser/Live QA + Package QA

Imports: QA docs, package script, release artifact inspection instructions.

Exclusions: secrets, raw env files, private docs, tests/workflows unless recreated public-safe.

Validation: browser checklist, live local AI QA, live connector QA, package dry-run on Windows/Git Bash and Linux clean clone, checksum inspection.

Blockers: connector QA UNKNOWN for private recall claims, package contains private docs/secrets, Docker context leaks.

## Phase L - v1.0.0 Public Release Candidate

Imports: only approved and validated public layers.

Exclusions: all private/proprietary tracks and anything still REVIEW_REQUIRED.

Validation: clean install, frontend build, backend tests, package inspection, secret scan, release notes, license, security policy.

Blockers: production-readiness claims, live connector overclaims, unresolved P0 private boundary issues, missing release artifact review.
