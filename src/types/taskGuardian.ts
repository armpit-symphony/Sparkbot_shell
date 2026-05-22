export type TaskGuardianTemplateKind = "pc_health_check" | "server_health_check";

export type TaskSchedulePreview = {
  cadence: "daily";
  localTime: string;
  timezoneLabel: string;
  enabled: boolean;
};

export type DeliveryChannelKind = "app" | "telegram" | "discord" | "slack" | "whatsapp" | "sms";

export type DeliveryChannelStatus =
  | "default"
  | "configured"
  | "setup_needed"
  | "unsupported"
  | "live_qa_unknown";

export type TaskDeliveryPreference = {
  channel: DeliveryChannelKind;
  enabled: boolean;
  status: DeliveryChannelStatus;
  fallbackToApp: boolean;
  statusMessage: string;
};

export type HealthSeverity = "nominal" | "sev1" | "sev2" | "sev3" | "unknown";

export type HealthStatusRow = {
  label: string;
  value: string;
  severity: HealthSeverity;
  detail: string;
};

export type HealthFindingPreview = {
  severity: HealthSeverity;
  title: string;
  detail: string;
};

export type HealthReportPreview = {
  id: string;
  templateKind: TaskGuardianTemplateKind;
  title: string;
  timestampLabel: string;
  severity: HealthSeverity;
  summary: string;
  systemStatusRows: HealthStatusRow[];
  findings: HealthFindingPreview[];
  passedChecks: string[];
  recommendedActions: string[];
  memorySourceLabel: string;
};

export type TaskGuardianTemplate = {
  id: string;
  templateKind: TaskGuardianTemplateKind;
  title: string;
  summary: string;
  schedule: TaskSchedulePreview;
  readOnly: boolean;
  deliveryPreferences: TaskDeliveryPreference[];
  reportPreview: HealthReportPreview;
};
