import type { MeetingActionItem, MeetingDecision, MeetingOpenQuestion } from "./shell";

export type ContextSourceType =
  | "chat"
  | "roundtable"
  | "meeting_note"
  | "task_guardian"
  | "model_seat"
  | "specialty_agent"
  | "connector"
  | "file"
  | "approval"
  | "system";

export type ContextActorType =
  | "operator"
  | "sparkbot"
  | "meeting_manager"
  | "model_seat"
  | "specialty_agent"
  | "connector"
  | "task_guardian"
  | "system";

export type ContextSensitivity = "public" | "operator_private" | "credential_sensitive" | "system_sensitive";

export type MemoryRollupState = "draft" | "saved" | "published" | "retired";

export type RedactionStatus = "not_required" | "pending_review" | "approved" | "redacted" | "blocked";

export type ContextEvent = {
  id: string;
  sourceType: ContextSourceType;
  sourceLabel: string;
  actorType: ContextActorType;
  actorLabel: string;
  title: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
  threadId?: string;
  meetingId?: string;
  taskId?: string;
  connector?: string;
  modelSeatId?: string;
  agentId?: string;
  sensitivity: ContextSensitivity;
  rollupState: MemoryRollupState;
  memoryRollup: boolean;
  redactionStatus: RedactionStatus;
  approvalRequired: boolean;
  tags: string[];
  redactionNote?: string;
};

export type MeetingNoteParticipant = {
  seatLabel: string;
  actorLabel: string;
  modelSeatLabel: string;
};

export type MeetingNoteContract = {
  meetingId: string;
  title: string;
  summary: string;
  decisions: MeetingDecision[];
  actionItems: MeetingActionItem[];
  nextSteps: string[];
  openQuestions: MeetingOpenQuestion[];
  participants: MeetingNoteParticipant[];
  draft: boolean;
  memoryRollup: boolean;
  rollupState: MemoryRollupState;
  sensitivity: ContextSensitivity;
  redactionStatus: RedactionStatus;
  approvalRequired: boolean;
  redactionNote: string;
  lastEditedAt: string;
};

export type ContextRetrievalPreview = {
  query: string;
  includedSources: string[];
  excludedSources: string[];
  redactionBoundary: string;
  resultCount: number;
};

export type MemoryContextShellState = {
  events: ContextEvent[];
  retrievalPreview: ContextRetrievalPreview;
  meetingNoteContract: MeetingNoteContract;
};
