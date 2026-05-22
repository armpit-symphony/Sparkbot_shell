export type PageKey =
  | "workstation"
  | "chat"
  | "roundtable"
  | "command-center"
  | "task-guardian"
  | "robo-preview"
  | "docs";

export type Panel = {
  title: string;
  body: string;
  meta?: string;
};

export type PageContent = {
  title: string;
  summary: string;
  status: string;
  panels: Panel[];
  boundary: string;
};
