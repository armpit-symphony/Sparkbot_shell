export type PageKey =
  | "workstation"
  | "work"
  | "chat"
  | "roundtable"
  | "command-center"
  | "task-guardian"
  | "connectors"
  | "robo-preview"
  | "settings"
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
