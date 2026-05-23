# Repo Separation Rules

## Repository Roles

- `Sparkbot_shell` is the public shell staging repo.
- Current `Sparkbot` remains the R&D/source reference repo.
- Final public release may move to `sparkpit-labs/Sparkbot` or another approved public home.
- Public packaging should use sanitized release artifacts, not raw R&D source.

## Hard Rules

- Do not delete, rewrite, or restructure the current Sparkbot R&D repo as part of shell planning.
- Do not copy code blindly from `Sparkbot` into `Sparkbot_shell`.
- Do not move proprietary modules into the public shell.
- Do not copy secrets, private paths, private domains, client data, or internal R&D notes.
- Do not wire LIMA AI OS into public Sparkbot.
- Do not wire Arc Bot into public Sparkbot.
- Do not wire LIMA Office into public Sparkbot.
- Do not wire LIMA IT into public Sparkbot.
- Do not implement real robot, drone, humanoid, or IoT control in the public shell.
- Do not add live adapters, execution, approval, dispatch, or persistence expansion unless explicitly approved in a later phase.

## Public Sparkbot Requirements

- Public Sparkbot must remain understandable and installable.
- Public Sparkbot must lead with Workstation, Round Table, model seats, chat/files, basic memory, basic agents, and safe local-first controls.
- Public Sparkbot must make risky actions visible and confirmable.
- Public Sparkbot must not imply hidden autonomy or surprise external sends.
- Public docs must clearly distinguish local-only behavior from cloud provider or connector behavior.

## Proprietary Tracks

- LIMA AI OS remains the separate universal reasoning/runtime OS.
- Arc Bot remains the proprietary guarded business worker-bot shell.
- LIMA Office remains the proprietary business AI automation suite / local office control plane.
- LIMA IT remains the proprietary IT/security/service manager over LIMA Office.
- Robo/IoT full control remains a paid/proprietary advanced LIMA system.

## Robo / IoT Rule

The Robo tab may stay visible in public Sparkbot only as a teaser/demo surface. Public Sparkbot must not expose live robotics control, natural-language hardware control, real bridge endpoints, emergency-stop controls, robot/drone/humanoid adapters, or operational robotics runbooks.

## Extraction Rule

Before any code import:

1. Classify the feature.
2. Map source path to destination.
3. Identify sanitization requirements.
4. Confirm dependencies and risk level.
5. Review for private/proprietary leakage.
6. Get explicit approval for any `NEEDS_REVIEW`, private-adjacent, live-adapter, execution, approval, dispatch, or persistence behavior.

## Default Decision

When uncertain, leave the feature out of the public shell and mark it `NEEDS_REVIEW`.
