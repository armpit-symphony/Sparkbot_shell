# Feature Classification

Classification categories:

- `KEEP_PUBLIC`: belongs in public Sparkbot.
- `SIMPLIFY_PUBLIC`: can stay but needs simplification, docs, or safer hobbyist guardrails.
- `TEASER_ONLY`: can appear as preview/demo/upgrade path; real functionality is not public core.
- `MOVE_TO_LIMA_AI_OS`: belongs to the universal reasoning/runtime OS.
- `MOVE_TO_ARC_BOT`: belongs to proprietary business worker-bot shell.
- `MOVE_TO_LIMA_OFFICE`: belongs to business automation suite/control plane.
- `MOVE_TO_LIMA_IT`: belongs to IT/security/service manager.
- `PRIVATE_PROPRIETARY`: remains private/commercial.
- `REMOVE_FOR_PUBLIC`: remove from public release.
- `NEEDS_REVIEW`: requires Phil decision.

| Feature group | Classification | Public release decision | Notes / boundary |
|---|---|---|---|
| Workstation | `KEEP_PUBLIC` | Keep as primary shell surface. | Public navigation, desks, setup, model seats, Round Table launch, basic status. |
| Round Table | `KEEP_PUBLIC` | Keep as hero feature. | Meeting Manager / Seat 1 flow, assignments, checkpoints, summary, shared memory rollups. |
| Model stack | `KEEP_PUBLIC` | Keep. | Primary/backups/heavy hitter and local/cloud/subscription routing are core. |
| Invite Wing | `KEEP_PUBLIC` | Keep. | Bring-your-own model seats; credentials backend/Vault-owned, never browser-local. |
| Chat/files | `KEEP_PUBLIC` | Keep. | Core local-first chat, uploads, document handling, exports, search. |
| Memory | `SIMPLIFY_PUBLIC` | Keep basic memory and shared meeting outcomes. | Avoid exposing advanced Guardian internals; secrets never become memory. |
| Agents/custom agents | `SIMPLIFY_PUBLIC` | Keep basic agents and custom agents. | Sanitize built-in prompts; keep only non-secret route metadata. |
| Task/reminders | `SIMPLIFY_PUBLIC` | Keep basic user-owned tasks/reminders. | Natural language scheduling must be transparent and confirmable. |
| Scheduled jobs | `SIMPLIFY_PUBLIC` | Keep read-only/app-only health and reminder patterns first. | Writes/external delivery must be opt-in and confirmed. |
| Guardian controls | `SIMPLIFY_PUBLIC` | Keep basic confirmations/profiles/warnings. | Public concepts: Personal/Balanced/Locked/Custom; no commercial Guardian Suite internals. |
| Policy simulation | `NEEDS_REVIEW` | Likely advanced/operator docs only. | Useful for safety transparency, but too internal for MVP unless simplified. |
| Persistent approvals | `SIMPLIFY_PUBLIC` | Keep only simple, local, bounded approvals if needed. | Avoid hidden autonomy or broad persistence; revisit with UX/security review. |
| Audit timeline | `SIMPLIFY_PUBLIC` | Keep basic action history. | Do not expose Guardian Spine/internal commercial audit architecture. |
| Connector health | `SIMPLIFY_PUBLIC` | Keep setup/readiness status. | Public users need clear connector setup; internals should be hidden. |
| Token Guardian | `PRIVATE_PROPRIETARY` | Do not ship advanced internals. | Public may show simple model cost/routing status later. |
| Task Guardian | `SIMPLIFY_PUBLIC` | Keep simple task/reminder/health-check surface. | Advanced verifier/scheduler/operator internals remain private. |
| Guardian Spine | `PRIVATE_PROPRIETARY` | Do not expose as public core. | Public can have basic action history without Spine internals. |
| Command Center | `SIMPLIFY_PUBLIC` | Keep setup/control center. | Simplify to AI setup, model seats, security profile, connectors, basic health. |
| Robo OS tab | `TEASER_ONLY` | Keep as static teaser/demo only. | No real robotics, emergency stop, live bridge, drone, humanoid, or IoT control. |
| LIMA Robotics bridge | `MOVE_TO_LIMA_AI_OS` | Exclude private bridge source. | Public package should contain only non-executing preview stub if any. |
| Shell execution | `SIMPLIFY_PUBLIC` | Guard heavily or defer. | Diagnostics may be public; writes/service/package commands require explicit confirmation. |
| Browser automation | `SIMPLIFY_PUBLIC` | Guard heavily or defer. | Public read/browser fetch ok; clicks/forms/sends require confirmation. |
| Live terminal | `SIMPLIFY_PUBLIC` | Setup-required and guarded. | Never enabled by surprise; public docs must explain risk. |
| Code execution | `SIMPLIFY_PUBLIC` | Guard heavily or defer. | Local sandbox/explicit confirmation required before public MVP claims it. |
| Email/calendar/drive connectors | `SIMPLIFY_PUBLIC` | Keep as opt-in connectors. | Reads first; sends/writes confirmed; OAuth/docs/security review required. |
| Slack/Notion/Confluence/Jira/Linear connectors | `SIMPLIFY_PUBLIC` | Keep Slack baseline; defer or simplify others. | Business SaaS writes require scoped setup, allowlists, and confirmation. |
| GitHub tools | `SIMPLIFY_PUBLIC` | Keep with repository allowlists and confirmations. | Reads useful; mutations gated. |
| Secrets/Vault | `SIMPLIFY_PUBLIC` | Keep secure local secret storage concept. | Do not expose advanced Vault internals or secret reveal paths casually. |
| Breakglass/PIN | `SIMPLIFY_PUBLIC` | Keep only if UX is clear. | Local operator step-up flow, no hidden auto-breakglass. |
| Public docs/downloads | `KEEP_PUBLIC` | Keep and polish. | Must point to sanitized bundles and future shell repo, not raw R&D internals. |
| Installer/Tauri app | `KEEP_PUBLIC` | Keep. | Requires metadata, signing, license, and release artifact review. |
| Docker/server install | `KEEP_PUBLIC` | Keep. | Defaults must be safe, local-first, and sanitized of private deployment paths. |
| Private deployment paths | `REMOVE_FOR_PUBLIC` | Remove from public docs/packages. | Replace with placeholders such as `example.com` and generic paths. |
| armpit-symphony branding | `NEEDS_REVIEW` | Decide before final public release. | Current org is acceptable for staging but needs final repo-home decision. |
| SparkPit Labs branding | `NEEDS_REVIEW` | Decide public ownership/brand posture. | Could remain company attribution; avoid internal/private naming. |
| LIMA Office references | `MOVE_TO_LIMA_OFFICE` | Remove or private roadmap only. | Not public Sparkbot core. |
| Arc references | `MOVE_TO_ARC_BOT` | Remove or private roadmap only. | Not public Sparkbot core. |
| LIMA IT references | `MOVE_TO_LIMA_IT` | Remove or private roadmap only. | Not public Sparkbot core. |
| Paid service orchestration | `PRIVATE_PROPRIETARY` | Do not ship. | Commercial workflows and templates stay private. |
| Client-specific workflows/templates | `REMOVE_FOR_PUBLIC` | Remove. | Do not include examples tied to clients, workloads, or private projects. |
| Internal R&D references | `REMOVE_FOR_PUBLIC` | Remove. | Status docs, extraction notes, private roadmaps, and history need cleanup. |

## Classification Summary

Public Sparkbot should center on Workstation, Round Table, model stack, Invite Wing, local-first chat/files/memory, basic agents, and basic user-owned controls. The current R&D system has strong public candidates, but extraction must be selective. Anything that turns Sparkbot into full runtime OS, robotics control plane, business automation suite, IT manager, paid orchestration engine, or proprietary Guardian control plane stays out of this shell.
