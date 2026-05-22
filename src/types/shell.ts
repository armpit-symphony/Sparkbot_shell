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
  chatSession: ChatSession;
  guardrailProfile: GuardrailProfileName;
};
