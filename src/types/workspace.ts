export type WorkspaceFileCategory = "SOP" | "Work File";

export type LocalModelRuntimeState = "unknown" | "running" | "not_running" | "error";

export type WorkspaceFile = {
  id: string;
  title: string;
  category: WorkspaceFileCategory;
  sourceLabel: string;
  mimeType?: string;
  text: string;
  size: number;
  uploadedAt: string;
  updatedAt: string;
};

export type WorkerType =
  | "Research"
  | "Writer"
  | "Ops"
  | "Analysis"
  | "QA"
  | "General Purpose";

export type WorkProgramStatus = "draft" | "ready" | "active" | "completed";

export type WorkProgram = {
  id: string;
  title: string;
  details: string;
  workerType: WorkerType;
  trainingMemo: string;
  sopFileIds: string[];
  workFileIds: string[];
  status: WorkProgramStatus;
  createdAt: string;
};

export type LocalModelProbeResult = {
  state: LocalModelRuntimeState;
  checkedAt: string;
  details: string;
  detectedModels?: string;
  endpoint: string;
};

export const DEFAULT_WORKER_TYPES: WorkerType[] = [
  "Research",
  "Writer",
  "Ops",
  "Analysis",
  "QA",
  "General Purpose",
];
