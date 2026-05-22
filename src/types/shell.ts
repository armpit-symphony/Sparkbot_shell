export type ModelProviderKind =
  | "openai"
  | "anthropic"
  | "xai"
  | "local_ai"
  | "openai_compatible"
  | "custom";

export type LocalRuntimeKind =
  | "ollama"
  | "lmstudio"
  | "llamacpp"
  | "openai_compatible"
  | "custom";

export type ModelSeatSetupStatus = "configured" | "setup_needed" | "disabled" | "unreachable";

export type GuardrailProfileName = "Personal" | "Balanced" | "Locked" | "Custom";

export type DeliveryChannelName = "app" | "telegram" | "discord" | "slack" | "whatsapp" | "sms";

export type DeliveryChannelPreview = {
  id: DeliveryChannelName;
  label: string;
  status: "default" | "optional" | "future";
  description: string;
};

export type SpecialtyAgent = {
  id: string;
  name: string;
  role: string;
  description: string;
  builtIn: boolean;
  locked: boolean;
  defaultSeat?: number;
  modelSeatId: string;
  tags: string[];
};

export type GuardrailProfile = {
  name: GuardrailProfileName;
  summary: string;
  confirmationPosture: string;
  shellBehavior: string;
  customBlockerText?: string;
};

export type TaskGuardianTemplate = {
  id: string;
  title: string;
  summary: string;
  scheduleLabel: string;
  readOnly: boolean;
  enabledByDefault: boolean;
  setupStatus: ModelSeatSetupStatus;
  deliveryChannelIds: DeliveryChannelName[];
};

export type WorkstationPanel = {
  id: string;
  title: string;
  summary: string;
  statusLabel: string;
  route?: string;
};

export type MeetingNotePreview = {
  id: string;
  title: string;
  summary: string;
  source: string;
};

export type ModelSeat = {
  id: string;
  label: string;
  provider: string;
  providerKind: ModelProviderKind;
  modelId: string;
  enabled: boolean;
  showInChat: boolean;
  showInRoundTable: boolean;
  showInSpecialtyWing: boolean;
  setupStatus: ModelSeatSetupStatus;
  setupMessage: string;
  localRuntime?: LocalRuntimeKind;
  baseUrl?: string;
  authMode: string;
  notes: string;
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
  modelSeatId?: string;
};

export type ChatSession = {
  id: string;
  title: string;
  selectedModelSeatId: string;
  messages: ChatMessage[];
};

export type SetupNeededState = {
  title: string;
  message: string;
  severity: "info" | "warning" | "blocked";
};

export type ShellState = {
  modelSeats: ModelSeat[];
  specialtyAgents: SpecialtyAgent[];
  guardrailProfiles: GuardrailProfile[];
  taskGuardianTemplates: TaskGuardianTemplate[];
  deliveryChannels: DeliveryChannelPreview[];
  meetingNotePreviews: MeetingNotePreview[];
  chatSession: ChatSession;
  guardrailProfile: GuardrailProfileName;
};
