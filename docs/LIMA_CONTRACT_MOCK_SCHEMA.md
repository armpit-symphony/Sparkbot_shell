# LIMA Contract Mock Schema

Updated: 2026-05-24

## Contract Intent

These examples are static mock contracts for the next planning pass only.
They are not connected to runtime.

Every response keeps the following invariants:

- `preview_only: true`
- `non_authoritative: true`
- `safe_by_default: true`
- `execution_allowed: false`
- `side_effects_allowed: false`
- `approval_granted: false`
- `dispatch_allowed: false`
- `persistence_allowed: false`
- `provider_calls_allowed: false`
- `connector_calls_allowed: false`
- `lima_runtime_active: false`
- `humaninput_bridge_active: false`
- `sparkbot_wiring_active: false`
- `live_adapter_active: false`
- `robotics_allowed: false`
- `physical_world_allowed: false`

## 1) Workstation state preview

```json
{
  "type": "workstation_state_preview",
  "preview_only": true,
  "non_authoritative": true,
  "safe_by_default": true,
  "execution_allowed": false,
  "side_effects_allowed": false,
  "approval_granted": false,
  "dispatch_allowed": false,
  "persistence_allowed": false,
  "provider_calls_allowed": false,
  "connector_calls_allowed": false,
  "lima_runtime_active": false,
  "humaninput_bridge_active": false,
  "sparkbot_wiring_active": false,
  "live_adapter_active": false,
  "robotics_allowed": false,
  "physical_world_allowed": false,
  "workstation_id": "demo-room-public-v1",
  "desk_layout": {
    "primary_model": "primary-model-seat",
    "backup_slots": ["backup-1", "backup-2"],
    "heavy_hitter": "heavy-hitter-seat",
    "invite_wing": ["invite-seat-alpha"],
    "specialty_agents": ["ops-analyst", "research-copilot"]
  },
  "round_table_connected": true,
  "readiness": {
    "status": "demo_fixture",
    "runtime_state": "offline",
    "notes": [
      "Static preview shell only.",
      "No provider, model routing, or dispatch calls."
    ]
  }
}
```

## 2) Round Table meeting preview

```json
{
  "type": "roundtable_meeting_preview",
  "preview_only": true,
  "non_authoritative": true,
  "safe_by_default": true,
  "execution_allowed": false,
  "side_effects_allowed": false,
  "approval_granted": false,
  "dispatch_allowed": false,
  "persistence_allowed": false,
  "provider_calls_allowed": false,
  "connector_calls_allowed": false,
  "lima_runtime_active": false,
  "humaninput_bridge_active": false,
  "sparkbot_wiring_active": false,
  "live_adapter_active": false,
  "robotics_allowed": false,
  "physical_world_allowed": false,
  "meeting_id": "meeting-preview-product-brief",
  "topic": "Product launch readiness and next-step recommendation",
  "chair": "meeting-manager-studio",
  "stage_progress": [
    "task_intake",
    "framing",
    "specialist_perspectives",
    "synthesis",
    "assignments",
    "recommendation",
    "artifact_preview"
  ],
  "seats": {
    "model_seats": ["primary", "backup-1", "backup-2", "heavy-hitter"],
    "agent_seats": ["ops-analyst", "research-copilot", "delivery-editor"]
  },
  "notes": {
    "artifact_preview": "Draft recommendation: continue static-only shell polish; keep runtime deferred.",
    "follow_up_tasks": [
      "Finalize LIMA contract mock layer docs",
      "Create stable contract fixture catalog",
      "Record missing API contract approvals"
    ]
  },
  "status": "demo_fixture"
}
```

## 3) Model stack / seat preview

```json
{
  "type": "model_stack_preview",
  "preview_only": true,
  "non_authoritative": true,
  "safe_by_default": true,
  "execution_allowed": false,
  "side_effects_allowed": false,
  "approval_granted": false,
  "dispatch_allowed": false,
  "persistence_allowed": false,
  "provider_calls_allowed": false,
  "connector_calls_allowed": false,
  "lima_runtime_active": false,
  "humaninput_bridge_active": false,
  "sparkbot_wiring_active": false,
  "live_adapter_active": false,
  "robotics_allowed": false,
  "physical_world_allowed": false,
  "seats": [
    { "role": "primary", "provider": "local-or-cloud", "status": "configured_demo" },
    { "role": "backup_1", "provider": "local-or-cloud", "status": "placeholder" },
    { "role": "backup_2", "provider": "local-or-cloud", "status": "placeholder" },
    { "role": "heavy_hitter", "provider": "local-or-cloud", "status": "placeholder" },
    { "role": "invite_wing", "provider": "byo_model", "status": "bring_your_own_demo" }
  ],
  "guardrails": {
    "api_keys_stored": false,
    "provider_calls_enabled": false,
    "runtime_route_enabled": false,
    "source": "static_fixture"
  },
  "status": "demo_fixture"
}
```

## 4) File/memory/task context preview

```json
{
  "type": "context_preview",
  "preview_only": true,
  "non_authoritative": true,
  "safe_by_default": true,
  "execution_allowed": false,
  "side_effects_allowed": false,
  "approval_granted": false,
  "dispatch_allowed": false,
  "persistence_allowed": false,
  "provider_calls_allowed": false,
  "connector_calls_allowed": false,
  "lima_runtime_active": false,
  "humaninput_bridge_active": false,
  "sparkbot_wiring_active": false,
  "live_adapter_active": false,
  "robotics_allowed": false,
  "physical_world_allowed": false,
  "files": [
    "Project brief.pdf",
    "Meeting notes.md",
    "Customer FAQ.csv",
    "Product screenshot.png"
  ],
  "memory": [
    { "label": "user_preference", "state": "verified", "value": "Local-first workflow for demos" },
    { "label": "project_context", "state": "needs_approval", "value": "Round Table readiness lane active" },
    { "label": "policy_note", "state": "redacted", "value": "No sensitive source data is exposed in this preview." }
  ],
  "tasks": [
    { "title": "Prepare Round Table demo checklist", "status": "planned" },
    { "title": "Review model stack setup", "status": "done" },
    { "title": "Draft launch notes", "status": "draft" },
    { "title": "Robo teaser copy review", "status": "blocked" }
  ],
  "status": "demo_fixture"
}
```

## 5) Guardian posture preview

```json
{
  "type": "guardian_posture_preview",
  "preview_only": true,
  "non_authoritative": true,
  "safe_by_default": true,
  "execution_allowed": false,
  "side_effects_allowed": false,
  "approval_granted": false,
  "dispatch_allowed": false,
  "persistence_allowed": false,
  "provider_calls_allowed": false,
  "connector_calls_allowed": false,
  "lima_runtime_active": false,
  "humaninput_bridge_active": false,
  "sparkbot_wiring_active": false,
  "live_adapter_active": false,
  "robotics_allowed": false,
  "physical_world_allowed": false,
  "posture": {
    "static_mode": true,
    "approval_mode": "preview_only",
    "high_risk_blocking": ["execution", "dispatch", "connectors", "provider_calls", "robotics"]
  },
  "messages": [
    "No runtime approval is enforced in preview.",
    "All risky operations require explicit future runtime integration."
  ],
  "status": "demo_fixture"
}
```

## 6) Robo teaser / robotics deferred preview

```json
{
  "type": "robo_teaser_preview",
  "preview_only": true,
  "non_authoritative": true,
  "safe_by_default": true,
  "execution_allowed": false,
  "side_effects_allowed": false,
  "approval_granted": false,
  "dispatch_allowed": false,
  "persistence_allowed": false,
  "provider_calls_allowed": false,
  "connector_calls_allowed": false,
  "lima_runtime_active": false,
  "humaninput_bridge_active": false,
  "sparkbot_wiring_active": false,
  "live_adapter_active": false,
  "robotics_allowed": false,
  "physical_world_allowed": false,
  "robo_surface": "Robo OS teaser zone",
  "modes": {
    "teaser": true,
    "runtime_control": false,
    "live_bridge": false,
    "deferred_until": "future LIMA runtime approval"
  },
  "status": "demo_fixture"
}
```

## 7) Release/readiness status preview

```json
{
  "type": "release_readiness_preview",
  "preview_only": true,
  "non_authoritative": true,
  "safe_by_default": true,
  "execution_allowed": false,
  "side_effects_allowed": false,
  "approval_granted": false,
  "dispatch_allowed": false,
  "persistence_allowed": false,
  "provider_calls_allowed": false,
  "connector_calls_allowed": false,
  "lima_runtime_active": false,
  "humaninput_bridge_active": false,
  "sparkbot_wiring_active": false,
  "live_adapter_active": false,
  "robotics_allowed": false,
  "physical_world_allowed": false,
  "status": "GREEN_CANDIDATE",
  "release_state": {
    "not_released": true,
    "tag": "not_created",
    "upload": "not_performed",
    "announcement": "not_performed"
  },
  "next_steps": [
    "Finalize contract types",
    "Add fixture scan coverage",
    "Get Phil approval on repo/version/announcement policy before runtime planning"
  ]
}
```
