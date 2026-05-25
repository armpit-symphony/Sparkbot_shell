# LIMA Contract Mock Fixtures (Static)

Updated: 2026-05-25

Repository convention remains docs-first for fixtures in this phase.

All fixture examples are static, non-authoritative, and runtime-inactive.

## Shared Base Fixture Shape

```json
{
  "consumer_profile": {
    "consumer_id": "sparkbot-shell-public-preview",
    "consumer_class": "sparkbot_shell_public_preview",
    "consumer_mode": "public_preview",
    "ui_surface": "static_demo_shell",
    "operator_visibility": "public"
  },
  "embodiment_profile": {
    "embodiment_id": "text-only-preview",
    "embodiment_type": "text_only",
    "physical_world_target": false,
    "emergency_stop_vocabulary_only": true
  },
  "active_state": "preview_only",
  "state_authority": "non_authoritative",
  "approval_posture": {
    "described_by_lima": true,
    "guardian_owns_real_approval_state": true,
    "shell_displays_posture_only": true,
    "posture": "preview_only"
  },
  "evidence_ref": {
    "evidence_id": "evidence-preview-v1",
    "evidence_type": "preview_note",
    "non_authoritative": true
  },
  "state_ladder": [
    "preview_only",
    "explain_plan",
    "approval_required",
    "approved_not_dispatched",
    "dispatch_ready",
    "executing",
    "completed",
    "audited",
    "blocked",
    "deferred"
  ],
  "safe_active_states": ["preview_only", "explain_plan", "blocked", "deferred"],
  "preview_only": true,
  "non_authoritative": true,
  "safe_by_default": true,
  "execution_allowed": false,
  "side_effects_permitted": false,
  "approval_granted": false,
  "dispatch_allowed": false,
  "persistence_allowed": false,
  "model_provider_calls_allowed": false,
  "connector_calls_allowed": false,
  "runtime_active": false,
  "human_input_bridge_active": false,
  "live_adapter_active": false,
  "robotics_allowed": false,
  "physical_world_allowed": false,
  "runtime_test_harness_active": false,
  "guardian_decision_created": false,
  "adapter_calls_allowed": false,
  "tool_calls_allowed": false,
  "driver_calls_allowed": false,
  "audit_storage_written": false
}
```

## `workstation-preview.json`

```json
{
  "type": "workstation_state_preview",
  "status": "demo_fixture",
  "active_state": "preview_only",
  "workstation_id": "demo-workstation-v1",
  "desk_layout": {
    "primary_model": "primary",
    "backup_slots": ["backup_1", "backup_2"],
    "heavy_hitter": "heavy_hitter",
    "invite_wing": ["invite_seat"]
  }
}
```

## `roundtable-preview.json`

```json
{
  "type": "roundtable_meeting_preview",
  "status": "demo_fixture",
  "active_state": "explain_plan",
  "topic": "Demo workflow review and release posture",
  "chair": "meeting_manager",
  "stages": ["task_intake", "framing", "specialist_perspectives", "synthesis", "assignments", "recommendation", "artifact"]
}
```

## `model-seat-preview.json`

```json
{
  "type": "model_stack_preview",
  "status": "demo_fixture",
  "active_state": "blocked",
  "seats": {
    "primary": "demo-primary-seat",
    "backup_1": "demo-backup-one",
    "backup_2": "demo-backup-two",
    "heavy_hitter": "demo-heavy-hitter",
    "invite_wing": "demo-invite-seat"
  }
}
```

## `context-preview.json`

```json
{
  "type": "context_preview",
  "status": "demo_fixture",
  "active_state": "deferred",
  "files": ["Project brief.pdf", "Meeting notes.md", "Customer FAQ.csv", "Product screenshot.png"],
  "memory": [
    { "label": "demo_preference", "status": "verified" },
    { "label": "project_context", "status": "pending_approval" }
  ],
  "tasks": [
    { "label": "Prepare Round Table demo checklist", "state": "draft" },
    { "label": "Review model stack setup", "state": "planned" },
    { "label": "Draft launch notes", "state": "blocked" }
  ]
}
```

## `guardian-posture-preview.json`

```json
{
  "type": "guardian_posture_preview",
  "status": "demo_fixture",
  "active_state": "preview_only",
  "approval_posture": {
    "described_by_lima": true,
    "guardian_owns_real_approval_state": true,
    "shell_displays_posture_only": true,
    "posture": "preview_only"
  },
  "blocks": ["execution", "dispatch", "runtime_calls", "provider_routing", "robotics"]
}
```

## `robo-teaser-preview.json`

```json
{
  "type": "robo_teaser_preview",
  "status": "demo_fixture",
  "active_state": "deferred",
  "embodiment_profile": {
    "embodiment_id": "robotics-deferred-preview",
    "embodiment_type": "robotics_deferred",
    "physical_world_target": false,
    "emergency_stop_vocabulary_only": true
  },
  "robo_mode": {
    "teaser_only": true,
    "hardware_control": false,
    "iot_control": false,
    "emergency_stop_vocabulary_only": true
  }
}
```

## Boundary

No fixture in this phase may imply runtime activation, approval creation, adapter/tool/driver execution, or physical-world control.
