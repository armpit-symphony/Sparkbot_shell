import type { ConnectorCard } from "./connectors";
import type { MemoryContextShellState } from "./context";
import type { HealthReportPreview, TaskDeliveryPreference, TaskGuardianTemplate } from "./taskGuardian";

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

export type RoundTablePhase =
  | "setup"
  | "first_pass"
  | "manager_assessment"
  | "assignments"
  | "second_pass"
  | "wrap_up"
  | "notes";

export type RoundTableSeat = {
  id: string;
  seatNumber: number;
  agentId: string;
  modelSeatId: string;
  roleLabel: string;
  locked?: boolean;
};

export type RoundTableFirstPassIdea = {
  id: string;
  seatId: string;
  idea: string;
};

export type RoundTableAssignment = {
  id: string;
  assigneeSeatId: string;
  title: string;
  prompt: string;
  status: "draft" | "assigned" | "reviewed";
};

export type RoundTableSecondPassResponse = {
  id: string;
  assignmentId: string;
  seatId: string;
  response: string;
};

export type MeetingDecision = {
  id: string;
  text: string;
};

export type MeetingActionItem = {
  id: string;
  owner: string;
  text: string;
  dueLabel: string;
};

export type MeetingOpenQuestion = {
  id: string;
  text: string;
};

export type MeetingWrapUpPreview = {
  summary: string;
  decisions: MeetingDecision[];
  actionItems: MeetingActionItem[];
  nextSteps: string[];
  openQuestions: MeetingOpenQuestion[];
};

export type MeetingNoteDraft = MeetingWrapUpPreview & {
  status: "draft" | "saved_preview";
  memoryRollupLabel: string;
};

export type RoundTableShellState = {
  title: string;
  problem: string;
  currentPhase: RoundTablePhase;
  seats: RoundTableSeat[];
  firstPassIdeas: RoundTableFirstPassIdea[];
  managerAssessment: string;
  assignments: RoundTableAssignment[];
  secondPassResponses: RoundTableSecondPassResponse[];
  wrapUp: MeetingWrapUpPreview;
  notes: MeetingNoteDraft;
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
  shellState?: "received" | "thinking" | "completed";
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
  taskDeliveryPreferences: TaskDeliveryPreference[];
  healthReportPreviews: HealthReportPreview[];
  connectorCards: ConnectorCard[];
  meetingNotePreviews: MeetingNotePreview[];
  roundTable: RoundTableShellState;
  memoryContext: MemoryContextShellState;
  chatSession: ChatSession;
  guardrailProfile: GuardrailProfileName;
};
