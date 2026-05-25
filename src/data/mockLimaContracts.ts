export const mockLimaInvariants = {
  preview_only: true,
  non_authoritative: true,
  safe_by_default: true,
  execution_allowed: false,
  side_effects_permitted: false,
  approval_granted: false,
  dispatch_allowed: false,
  persistence_allowed: false,
  model_provider_calls_allowed: false,
  connector_calls_allowed: false,
  runtime_active: false,
  human_input_bridge_active: false,
  live_adapter_active: false,
  robotics_allowed: false,
  physical_world_allowed: false,
  runtime_test_harness_active: false,
  guardian_decision_created: false,
  adapter_calls_allowed: false,
  tool_calls_allowed: false,
  driver_calls_allowed: false,
  audit_storage_written: false,
} as const;

type LabeledStringTuple = [label: string, value: string];

export const mockLimaContractSequence = [
  "ConsumerRequest",
  "TypedIntentEnvelope",
  "TaskIntent",
  "CandidatePreview",
  "RuntimeStateSnapshot",
] as const;

export const mockLimaContractInquiries = [
  "consumer_request_preview",
  "typed_intent_envelope_preview",
  "task_intent_preview",
  "candidate_preview",
  "runtime_state_snapshot_preview",
] as const;

export const mockStateLadder = [
  "preview_only",
  "explain_plan",
  "approval_required",
  "approved_not_dispatched",
  "dispatch_ready",
  "executing",
  "completed",
  "audited",
  "blocked",
  "deferred",
] as const;

export const mockSafeActiveStates = ["preview_only", "explain_plan", "blocked", "deferred"] as const;

type ConsumerProfile = {
  consumer_id: string;
  consumer_class: "sparkbot_shell_public_preview" | "arc_bot_future_profile" | "future_embodiment_profile";
  consumer_mode: "public_preview" | "future_private_profile";
  ui_surface: string;
  operator_visibility: "public" | "internal";
};

type EmbodimentProfile = {
  embodiment_id: string;
  embodiment_type: "text_only" | "robotics_deferred" | "iot_deferred" | "drone_deferred" | "humanoid_deferred";
  physical_world_target: false;
  emergency_stop_vocabulary_only: true;
};

type ApprovalPosture = {
  described_by_lima: true;
  guardian_owns_real_approval_state: true;
  shell_displays_posture_only: true;
  posture: "preview_only" | "approval_required" | "blocked" | "deferred";
};

type EvidenceRef = {
  evidence_id: string;
  evidence_type: "preview_note" | "policy_note" | "status_note";
  non_authoritative: true;
};

type MockContractPayload = Record<string, unknown> & {
  type: string;
  status: string;
  consumer_profile: ConsumerProfile;
  embodiment_profile: EmbodimentProfile;
  active_state: (typeof mockSafeActiveStates)[number];
  state_authority: "non_authoritative";
  approval_posture: ApprovalPosture;
  evidence_ref: EvidenceRef;
  state_ladder: readonly string[];
  safe_active_states: readonly string[];
};

export type MockLimaContractExample = {
  id: string;
  title: string;
  whatShellAsks: string;
  whatLimaReturns: string;
  payload: MockContractPayload;
};

const baseConsumerProfile: ConsumerProfile = {
  consumer_id: "sparkbot-shell-public-preview",
  consumer_class: "sparkbot_shell_public_preview",
  consumer_mode: "public_preview",
  ui_surface: "static_demo_shell",
  operator_visibility: "public",
};

const baseEmbodimentProfile: EmbodimentProfile = {
  embodiment_id: "text-only-preview",
  embodiment_type: "text_only",
  physical_world_target: false,
  emergency_stop_vocabulary_only: true,
};

const baseApprovalPosture = (posture: ApprovalPosture["posture"]): ApprovalPosture => ({
  described_by_lima: true,
  guardian_owns_real_approval_state: true,
  shell_displays_posture_only: true,
  posture,
});

const baseEvidenceRef = (evidenceId: string): EvidenceRef => ({
  evidence_id: evidenceId,
  evidence_type: "preview_note",
  non_authoritative: true,
});

const withBase = (overrides: Omit<MockContractPayload, keyof typeof mockLimaInvariants>): MockContractPayload =>
  ({
    ...mockLimaInvariants,
    ...overrides,
  }) as unknown as MockContractPayload;

export const mockLimaContractExamples: readonly MockLimaContractExample[] = [
  {
    id: "workstation-state-preview",
    title: "Workstation state preview",
    whatShellAsks: "ConsumerRequest for seat layout and context rendering posture from a non-authoritative preview lane.",
    whatLimaReturns:
      "CandidatePreview + RuntimeStateSnapshot shape for static Workstation cards with no execution or adapter calls.",
    payload: withBase({
      type: "workstation_state_preview",
      status: "demo_fixture",
      consumer_profile: baseConsumerProfile,
      embodiment_profile: baseEmbodimentProfile,
      active_state: "preview_only",
      state_authority: "non_authoritative",
      approval_posture: baseApprovalPosture("preview_only"),
      evidence_ref: baseEvidenceRef("evidence-workstation-preview-v1"),
      state_ladder: mockStateLadder,
      safe_active_states: mockSafeActiveStates,
      sequence: mockLimaContractSequence,
      request_shape: "ConsumerRequest",
      intent_shape: "TypedIntentEnvelope",
      candidate_shape: "CandidatePreview",
      runtime_state_shape: "RuntimeStateSnapshot",
      workstation_id: "public-preview-room-v1",
      desk_layout: {
        primary_model: "primary",
        backup_slots: ["backup_1", "backup_2"],
        heavy_hitter: "heavy_hitter",
        invite_wing: ["invite_seat"],
      },
      readiness: {
        runtime_active: false,
        summary: "Static preview shell only; runtime inactive.",
      },
    }),
  },
  {
    id: "roundtable-meeting-preview",
    title: "Round Table meeting preview",
    whatShellAsks: "TaskIntent for mission framing and seat participation before any runtime meeting loop exists.",
    whatLimaReturns: "CandidatePreview meeting plan and deferred/blocked posture for static stage rendering.",
    payload: withBase({
      type: "roundtable_meeting_preview",
      status: "demo_fixture",
      consumer_profile: baseConsumerProfile,
      embodiment_profile: baseEmbodimentProfile,
      active_state: "explain_plan",
      state_authority: "non_authoritative",
      approval_posture: baseApprovalPosture("approval_required"),
      evidence_ref: baseEvidenceRef("evidence-roundtable-preview-v1"),
      state_ladder: mockStateLadder,
      safe_active_states: mockSafeActiveStates,
      sequence: mockLimaContractSequence,
      request_shape: "ConsumerRequest",
      intent_shape: "TaskIntent",
      candidate_shape: "CandidatePreview",
      runtime_state_shape: "RuntimeStateSnapshot",
      meeting_id: "meeting-preview-product-brief-v1",
      topic: "Demo workflow review and release posture",
      chair: "meeting_manager",
      phases: ["task_intake", "framing", "specialist_perspectives", "synthesis", "assignments", "recommendation", "artifact"],
      seats: {
        model: ["Primary", "Backup 1", "Backup 2", "Heavy Hitter"],
        agents: ["Meeting Manager", "Ops Analyst", "Builder", "Reviewer"],
      },
      notes: ["No live room API.", "No model/provider dispatch.", "No scheduler or persistence writes."],
      follow_up_tasks: [
        { owner: "Operator", label: "Prepare Round Table recommendation draft", status: "planned" },
        { owner: "Operator", label: "Review model stack setup", status: "needs_approval" },
      ],
    }),
  },
  {
    id: "model-seat-preview",
    title: "Model stack / seat preview",
    whatShellAsks: "TypedIntentEnvelope for seat role clarity, provider posture, and no-key static configuration labels.",
    whatLimaReturns: "CandidatePreview seat map with blocked execution and deferred provider routing.",
    payload: withBase({
      type: "model_stack_preview",
      status: "demo_fixture",
      consumer_profile: baseConsumerProfile,
      embodiment_profile: baseEmbodimentProfile,
      active_state: "blocked",
      state_authority: "non_authoritative",
      approval_posture: baseApprovalPosture("blocked"),
      evidence_ref: baseEvidenceRef("evidence-model-seat-preview-v1"),
      state_ladder: mockStateLadder,
      safe_active_states: mockSafeActiveStates,
      sequence: mockLimaContractSequence,
      request_shape: "ConsumerRequest",
      intent_shape: "TypedIntentEnvelope",
      candidate_shape: "CandidatePreview",
      runtime_state_shape: "RuntimeStateSnapshot",
      seats: [
        { role: "Primary", provider: "local_or_cloud", state: "configured_demo", is_ready: true },
        { role: "Backup 1", provider: "local_or_cloud", state: "configured_demo", is_ready: true },
        { role: "Backup 2", provider: "local_or_cloud", state: "placeholder", is_ready: false },
        { role: "Heavy Hitter", provider: "local_or_cloud", state: "placeholder", is_ready: false },
        { role: "BYO Invite Wing", provider: "bring_your_own", state: "placeholder", is_ready: false },
      ],
      controls: {
        key_storage_enabled: false,
        provider_routing_enabled: false,
        runtime_dispatch_enabled: false,
      },
    }),
  },
  {
    id: "context-preview",
    title: "File / memory / task context preview",
    whatShellAsks: "ConsumerRequest for context summaries and non-authoritative memory/task posture labels.",
    whatLimaReturns: "CandidatePreview context cards with deferred persistence and blocked dispatch.",
    payload: withBase({
      type: "context_preview",
      status: "demo_fixture",
      consumer_profile: baseConsumerProfile,
      embodiment_profile: baseEmbodimentProfile,
      active_state: "deferred",
      state_authority: "non_authoritative",
      approval_posture: baseApprovalPosture("deferred"),
      evidence_ref: baseEvidenceRef("evidence-context-preview-v1"),
      state_ladder: mockStateLadder,
      safe_active_states: mockSafeActiveStates,
      sequence: mockLimaContractSequence,
      request_shape: "ConsumerRequest",
      intent_shape: "TaskIntent",
      candidate_shape: "CandidatePreview",
      runtime_state_shape: "RuntimeStateSnapshot",
      files: [
        { name: "Project brief.pdf", kind: "PDF", tag: "summary ready" },
        { name: "Meeting notes.md", kind: "Markdown", tag: "indexed preview" },
      ],
      memory: [
        {
          label: "operator_preference",
          summary: "Keep recommendations concise and avoid runtime claims before validation.",
          state: "verified",
        },
        { label: "project_context", summary: "Public shell demonstrates Workstation plus Round Table workflow.", state: "deferred" },
      ],
      tasks: [
        { title: "Prepare Round Table recommendation draft", state: "planned" },
        { title: "Review model stack setup", state: "needs_approval" },
      ],
    }),
  },
  {
    id: "guardian-posture-preview",
    title: "Guardian posture preview",
    whatShellAsks: "CandidatePreview posture labels that describe risk and approval posture without creating Guardian decisions.",
    whatLimaReturns: "Approval posture display only; real approval state remains Guardian-owned and runtime-gated.",
    payload: withBase({
      type: "guardian_posture_preview",
      status: "demo_fixture",
      consumer_profile: baseConsumerProfile,
      embodiment_profile: baseEmbodimentProfile,
      active_state: "preview_only",
      state_authority: "non_authoritative",
      approval_posture: baseApprovalPosture("preview_only"),
      evidence_ref: baseEvidenceRef("evidence-guardian-posture-preview-v1"),
      state_ladder: mockStateLadder,
      safe_active_states: mockSafeActiveStates,
      sequence: mockLimaContractSequence,
      request_shape: "ConsumerRequest",
      intent_shape: "TypedIntentEnvelope",
      candidate_shape: "CandidatePreview",
      runtime_state_shape: "RuntimeStateSnapshot",
      posture: "preview_guarded",
      blocked_actions: ["execution", "dispatch", "runtime_routing", "provider_calls", "connector_calls", "robotics"],
      notes: "No GuardianDecision is created in this shell phase. Approval posture is descriptive only.",
    }),
  },
  {
    id: "robo-teaser-preview",
    title: "Robo / IoT teaser preview",
    whatShellAsks: "Embodiment-aware CandidatePreview for deferred robotics posture vocabulary only.",
    whatLimaReturns: "Text-only embodiment profile with robotics/physical-world controls blocked and deferred.",
    payload: withBase({
      type: "robo_teaser_preview",
      status: "demo_fixture",
      consumer_profile: baseConsumerProfile,
      embodiment_profile: {
        embodiment_id: "robotics-deferred-preview",
        embodiment_type: "robotics_deferred",
        physical_world_target: false,
        emergency_stop_vocabulary_only: true,
      },
      active_state: "deferred",
      state_authority: "non_authoritative",
      approval_posture: baseApprovalPosture("deferred"),
      evidence_ref: baseEvidenceRef("evidence-robo-teaser-preview-v1"),
      state_ladder: mockStateLadder,
      safe_active_states: mockSafeActiveStates,
      sequence: mockLimaContractSequence,
      request_shape: "ConsumerRequest",
      intent_shape: "TaskIntent",
      candidate_shape: "CandidatePreview",
      runtime_state_shape: "RuntimeStateSnapshot",
      robo_mode: {
        teaser_only: true,
        hardware_control: false,
        iot_control: false,
        emergency_stop_vocabulary_only: true,
      },
      roadmap_note: "Embodiment control remains deferred until explicit future runtime approval.",
    }),
  },
  {
    id: "release-readiness-preview",
    title: "Release/readiness status preview",
    whatShellAsks: "RuntimeStateSnapshot for current release posture and blocked release/runtime actions.",
    whatLimaReturns: "Non-authoritative release/readiness summary with blocked/deferred state signaling.",
    payload: withBase({
      type: "release_readiness_preview",
      status: "demo_fixture",
      consumer_profile: baseConsumerProfile,
      embodiment_profile: baseEmbodimentProfile,
      active_state: "blocked",
      state_authority: "non_authoritative",
      approval_posture: baseApprovalPosture("blocked"),
      evidence_ref: baseEvidenceRef("evidence-release-readiness-preview-v1"),
      state_ladder: mockStateLadder,
      safe_active_states: mockSafeActiveStates,
      sequence: mockLimaContractSequence,
      request_shape: "ConsumerRequest",
      intent_shape: "TypedIntentEnvelope",
      candidate_shape: "CandidatePreview",
      runtime_state_shape: "RuntimeStateSnapshot",
      release_state: "GREEN_CANDIDATE",
      controls_blocked: ["tag", "upload", "announcement", "provider_runtime", "connector_runtime", "scheduler"],
      note: "Static preview remains NOT_RELEASED until Phil approves release operations.",
    }),
  },
] as const;

export const mockLimaContractInvariantRows: readonly LabeledStringTuple[] = [
  ["preview_only", "true"],
  ["non_authoritative", "true"],
  ["safe_by_default", "true"],
  ["execution_allowed", "false"],
  ["side_effects_permitted", "false"],
  ["approval_granted", "false"],
  ["dispatch_allowed", "false"],
  ["persistence_allowed", "false"],
  ["model_provider_calls_allowed", "false"],
  ["connector_calls_allowed", "false"],
  ["runtime_active", "false"],
  ["human_input_bridge_active", "false"],
  ["live_adapter_active", "false"],
  ["robotics_allowed", "false"],
  ["physical_world_allowed", "false"],
  ["runtime_test_harness_active", "false"],
  ["guardian_decision_created", "false"],
  ["adapter_calls_allowed", "false"],
  ["tool_calls_allowed", "false"],
  ["driver_calls_allowed", "false"],
  ["audit_storage_written", "false"],
];
