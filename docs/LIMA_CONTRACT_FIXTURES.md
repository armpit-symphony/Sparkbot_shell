# LIMA Contract Mock Fixtures (Static)

Updated: 2026-05-24

The repository has no formal fixture folder convention today, so this doc carries static mock payloads for planning.

Use these payloads only as documentation and test-orienting references for future preview-only contract wiring.

## 1. `workstation-preview.json`

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
  "workstation_id": "demo-workstation-v1",
  "desk_layout": {
    "primary_model": "primary",
    "backup_slots": ["backup_1", "backup_2"],
    "heavy_hitter": "heavy_hitter",
    "invite_wing": ["invite_seat"]
  },
  "status": "demo_fixture"
}
```

## 2. `roundtable-preview.json`

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
  "meeting_topic": "Demo workflow review and release posture",
  "chair": "meeting_manager",
  "stages": ["intake", "framing", "perspectives", "synthesis", "assignments", "recommendation", "artifact"],
  "status": "demo_fixture"
}
```

## 3. `model-seat-preview.json`

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
  "seats": {
    "primary": "demo-primary-seed",
    "backup_1": "demo-backup-one",
    "backup_2": "demo-backup-two",
    "heavy_hitter": "demo-heavy-hitter",
    "invite_wing": "demo-invite-seat"
  },
  "status": "demo_fixture"
}
```

## 4. `context-preview.json`

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
    { "label": "demo_preference", "confidence": "high", "status": "verified" },
    { "label": "project_context", "confidence": "medium", "status": "pending_approval" },
    { "label": "risk_note", "confidence": "high", "status": "redacted" }
  ],
  "tasks": [
    { "label": "Prepare Round Table demo checklist", "state": "draft" },
    { "label": "Review model stack setup", "state": "planned" },
    { "label": "Draft launch notes", "state": "blocked" }
  ],
  "status": "demo_fixture"
}
```

## 5. `guardian-posture-preview.json`

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
  "posture": "preview_guarded",
  "blocks": ["execution", "dispatch", "runtime_calls", "provider_routing", "robotics"],
  "status": "demo_fixture"
}
```

## 6. `robo-teaser-preview.json`

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
  "robo_mode": {
    "teaser_only": true,
    "hardware_control": false,
    "iot_control": false
  },
  "status": "demo_fixture"
}
```

