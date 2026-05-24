export const mockLimaInvariants = {
  preview_only: true,
  non_authoritative: true,
  safe_by_default: true,
  execution_allowed: false,
  side_effects_allowed: false,
  approval_granted: false,
  dispatch_allowed: false,
  persistence_allowed: false,
  provider_calls_allowed: false,
  connector_calls_allowed: false,
  lima_runtime_active: false,
  humaninput_bridge_active: false,
  sparkbot_wiring_active: false,
  live_adapter_active: false,
  robotics_allowed: false,
  physical_world_allowed: false,
} as const;

type LabeledStringTuple = [label: string, value: string];

export const mockLimaContractInquiries = [
  "runtime_state",
  "candidate_preview",
  "task_intent_preview",
  "model_agent_seat_preview",
  "meeting_plan_preview",
  "context_preview",
  "guardian_posture_preview",
  "robo_teaser_preview",
  "release_readiness_preview",
] as const;

export type MockLimaContractPayload = Record<string, unknown> & {
  type: string;
  status: string;
};

export type MockLimaContractExample = {
  id: string;
  title: string;
  whatShellAsks: string;
  whatLimaReturns: string;
  payload: MockLimaContractPayload;
};

export const mockLimaContractExamples: readonly MockLimaContractExample[] = [
  {
    id: "workstation-state-preview",
    title: "Workstation state preview",
    whatShellAsks: "Contract for desk layout, enabled seats, and fixture-room mapping before render.",
    whatLimaReturns: "Workstation snapshot cards and current room context for static display.",
    payload: {
      type: "workstation_state_preview",
      ...mockLimaInvariants,
      status: "demo_fixture",
      workstation_id: "public-preview-room-v1",
      desk_layout: {
        primary_model: "primary",
        backup_slots: ["backup_1", "backup_2"],
        heavy_hitter: "heavy_hitter",
        invite_wing: ["invite_seat"],
      },
      readiness: {
        runtime_state: "offline",
        summary: "Static preview shell only; no runtime controls active.",
      },
      linked_entities: {
        demo_room: "Public Preview Room - Workstation MVP",
      },
    },
  },
  {
    id: "roundtable-meeting-preview",
    title: "Round Table meeting preview",
    whatShellAsks:
      "Contract for meeting topic, chair, seat participation, and phase progression before any execution.",
    whatLimaReturns: "Meeting plan artifact and stage-by-stage preview cards.",
    payload: {
      type: "roundtable_meeting_preview",
      ...mockLimaInvariants,
      status: "demo_fixture",
      meeting_id: "meeting-preview-product-brief-v1",
      topic: "Demo workflow review and release posture",
      chair: "meeting_manager",
      phases: ["task_intake", "framing", "specialist_perspectives", "synthesis", "assignments", "recommendation", "artifact"],
      seats: {
        model: ["Primary", "Backup 1", "Backup 2", "Heavy Hitter"],
        agents: ["Meeting Manager", "Ops Analyst", "Builder", "Reviewer"],
      },
      notes: [
        "No live room API is called in the shell.",
        "No provider/model dispatch or execution is active.",
      ],
      follow_up_tasks: [
        {
          owner: "Operator",
          label: "Prepare Round Table recommendation draft",
          status: "planned",
        },
        {
          owner: "Operator",
          label: "Review model stack setup",
          status: "needs_approval",
        },
        {
          owner: "Planner",
          label: "Draft launch notes",
          status: "draft",
        },
      ],
      artifact: "Recommendation artifact previewed with decisions, action items, and open questions.",
    },
  },
  {
    id: "model-seat-preview",
    title: "Model stack / seat preview",
    whatShellAsks: "Contract for seat role labels, readiness, and provider/setup posture from a runtime source.",
    whatLimaReturns: "Seat map for Workstation and Round Table card rendering.",
    payload: {
      type: "model_stack_preview",
      ...mockLimaInvariants,
      status: "demo_fixture",
      seats: [
        { role: "Primary", provider: "local_or_cloud", state: "configured_demo", is_ready: true },
        { role: "Backup 1", provider: "local_or_cloud", state: "configured_demo", is_ready: true },
        { role: "Backup 2", provider: "local_or_cloud", state: "placeholder", is_ready: false },
        { role: "Heavy Hitter", provider: "local_or_cloud", state: "placeholder", is_ready: false },
        { role: "BYO Invite Wing", provider: "bring_your_own", state: "placeholder", is_ready: false },
      ],
      controls: {
        provider_key_storage: false,
        provider_routing_enabled: false,
        runtime_dispatch_enabled: false,
      },
    },
  },
  {
    id: "context-preview",
    title: "File / memory / task context preview",
    whatShellAsks: "Contract for document titles, memory labels, and task states tied to one demo room.",
    whatLimaReturns: "Context card text for Read-only fixture rendering.",
    payload: {
      type: "context_preview",
      ...mockLimaInvariants,
      status: "demo_fixture",
      files: [
        {
          name: "Project brief.pdf",
          kind: "PDF",
          tag: "summary ready",
        },
        {
          name: "Meeting notes.md",
          kind: "Markdown",
          tag: "indexed preview",
        },
      ],
      memory: [
        {
          label: "operator_preference",
          summary: "Keep recommendations concise and avoid runtime claims before validation.",
          state: "verified",
        },
        {
          label: "project_context",
          summary: "Public shell demonstrates Workstation plus Round Table workflow.",
          state: "local_first_future",
        },
      ],
      tasks: [
        { title: "Prepare Round Table recommendation draft", state: "planned" },
        { title: "Review model stack setup", state: "needs_approval" },
      ],
    },
  },
  {
    id: "guardian-posture-preview",
    title: "Guardian posture preview",
    whatShellAsks: "Contract for future-safe-risk labels and non-authoritative permission posture.",
    whatLimaReturns: "Read-only risk summary and forbidden- action mapping.",
    payload: {
      type: "guardian_posture_preview",
      ...mockLimaInvariants,
      status: "demo_fixture",
      posture: "preview_guarded",
      blocked_actions: [
        "execution",
        "dispatch",
        "runtime_routing",
        "provider_calls",
        "connector_calls",
        "robotics",
      ],
      approval_required: false,
      notes: "No approval enforcement is active in static shell mode.",
    },
  },
  {
    id: "robo-teaser-preview",
    title: "Robo / IoT teaser preview",
    whatShellAsks: "Contract for deferred robotics and automation teaser state only.",
    whatLimaReturns: "Teaser status block for demo surfaces.",
    payload: {
      type: "robo_teaser_preview",
      ...mockLimaInvariants,
      status: "demo_fixture",
      robo_mode: {
        teaser_only: true,
        hardware_control: false,
        iot_control: false,
      },
      roadmap_note: "Future control surfaces remain outside this shell.",
    },
  },
  {
    id: "release-readiness-preview",
    title: "Release/readiness status preview",
    whatShellAsks: "Contract for current preview-stage release posture and blocked actions.",
    whatLimaReturns: "Read-only status block that mirrors docs without asserting finality.",
    payload: {
      type: "release_readiness_preview",
      ...mockLimaInvariants,
      status: "demo_fixture",
      release_state: "GREEN_CANDIDATE",
      controls_blocked: [
        "tag",
        "upload",
        "announcement",
        "provider_runtime",
        "connector_runtime",
        "scheduler",
      ],
      note: "Static preview is intentionally not released until Phil approves final repo home/version/tag/announcement.",
    },
  },
] as const;

export const mockLimaContractInvariantRows: readonly LabeledStringTuple[] = [
  ["preview_only", "true"],
  ["non_authoritative", "true"],
  ["safe_by_default", "true"],
  ["execution_allowed", "false"],
  ["side_effects_allowed", "false"],
  ["approval_granted", "false"],
  ["dispatch_allowed", "false"],
  ["persistence_allowed", "false"],
  ["provider_calls_allowed", "false"],
  ["connector_calls_allowed", "false"],
  ["lima_runtime_active", "false"],
  ["humaninput_bridge_active", "false"],
  ["sparkbot_wiring_active", "false"],
  ["live_adapter_active", "false"],
  ["robotics_allowed", "false"],
  ["physical_world_allowed", "false"],
];
