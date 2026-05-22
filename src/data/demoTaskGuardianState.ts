import type {
  HealthReportPreview,
  TaskDeliveryPreference,
  TaskGuardianTemplate,
} from "../types/taskGuardian";

export const demoTaskDeliveryPreferences: TaskDeliveryPreference[] = [
  {
    channel: "app",
    enabled: true,
    status: "default",
    fallbackToApp: false,
    statusMessage: "Default app/in-room delivery. Reports stay in Sparkbot Shell preview.",
  },
  {
    channel: "telegram",
    enabled: false,
    status: "setup_needed",
    fallbackToApp: true,
    statusMessage: "Opt-in connector later. No bot token, chat target, or send path exists here.",
  },
  {
    channel: "discord",
    enabled: false,
    status: "live_qa_unknown",
    fallbackToApp: true,
    statusMessage: "Setup needed and live connector QA remains unknown before public delivery claims.",
  },
  {
    channel: "slack",
    enabled: false,
    status: "live_qa_unknown",
    fallbackToApp: true,
    statusMessage: "Setup needed and live connector QA remains unknown before public delivery claims.",
  },
  {
    channel: "whatsapp",
    enabled: false,
    status: "live_qa_unknown",
    fallbackToApp: true,
    statusMessage: "Setup needed and live connector QA remains unknown before public delivery claims.",
  },
  {
    channel: "sms",
    enabled: false,
    status: "unsupported",
    fallbackToApp: true,
    statusMessage: "Future/unsupported. No SMS provider, phone target, or text delivery exists.",
  },
];

export const demoHealthReportPreviews: HealthReportPreview[] = [
  {
    id: "report-pc-health-demo",
    templateKind: "pc_health_check",
    title: "PC Health Report",
    timestampLabel: "Demo timestamp: daily 6:00 AM local",
    severity: "sev2",
    summary:
      "SEV-1 assessment: no critical outage is claimed from these fake values. The preview shows one SEV-2 planning item and one SEV-3 maintenance item.",
    systemStatusRows: [
      {
        label: "Uptime",
        value: "3d 04h demo",
        severity: "nominal",
        detail: "Example workstation uptime label. No system command ran.",
      },
      {
        label: "Load",
        value: "22% demo",
        severity: "nominal",
        detail: "Example load indicator for report layout only.",
      },
      {
        label: "Memory",
        value: "9.4 GB / 16 GB demo",
        severity: "sev3",
        detail: "Example memory pressure row. No host data was collected.",
      },
      {
        label: "Disk",
        value: "82% demo used",
        severity: "sev2",
        detail: "Example capacity warning without paths, volumes, or private names.",
      },
    ],
    findings: [
      {
        severity: "sev2",
        title: "Disk capacity planning",
        detail: "Demo disk use is shown above the review threshold for report-shape testing.",
      },
      {
        severity: "sev3",
        title: "Pending restart review",
        detail: "Example maintenance reminder. No update, service, or reboot check ran.",
      },
    ],
    passedChecks: [
      "App/in-room report rendering previewed.",
      "No credential-shaped values are present.",
      "No raw process list, private path, or host identifier is shown.",
    ],
    recommendedActions: [
      "Review report content in the app before any future external delivery.",
      "Keep app/in-room delivery as the fallback for all optional connectors.",
      "Approve a runtime collector contract before real health data exists.",
    ],
    memorySourceLabel: "task_guardian.health.pc",
  },
  {
    id: "report-server-health-demo",
    templateKind: "server_health_check",
    title: "Server Health Report",
    timestampLabel: "Demo timestamp: daily 6:00 AM local",
    severity: "sev1",
    summary:
      "SEV-1 assessment: sample server status is flagged for operator review in the preview only. No server was contacted and no remediation ran.",
    systemStatusRows: [
      {
        label: "Uptime",
        value: "14d 09h demo",
        severity: "nominal",
        detail: "Example server uptime label. No remote command ran.",
      },
      {
        label: "Load",
        value: "91% demo",
        severity: "sev1",
        detail: "Example high-load row used to test severity rendering.",
      },
      {
        label: "Memory",
        value: "27 GB / 32 GB demo",
        severity: "sev2",
        detail: "Example memory warning. No process data is included.",
      },
      {
        label: "Disk",
        value: "74% demo used",
        severity: "sev3",
        detail: "Example capacity row without host paths or volume names.",
      },
    ],
    findings: [
      {
        severity: "sev2",
        title: "Memory pressure review",
        detail: "Demo memory use is high enough to route the report to operator review.",
      },
      {
        severity: "sev3",
        title: "Capacity trend watch",
        detail: "Demo disk use is below critical threshold but kept visible for weekly review.",
      },
    ],
    passedChecks: [
      "Report includes app/in-room default delivery status.",
      "No server hostname, IP address, private path, or raw log appears.",
      "No connector target or credential is represented.",
    ],
    recommendedActions: [
      "Review the report in-room; do not trigger remediation from this shell.",
      "Keep external delivery disabled until connector setup and live QA pass.",
      "Define redaction and evidence fields before runtime health collection.",
    ],
    memorySourceLabel: "task_guardian.health.server",
  },
];

export const demoTaskGuardianTemplates: TaskGuardianTemplate[] = [
  {
    id: "task-pc-health",
    templateKind: "pc_health_check",
    title: "PC Health Check",
    summary: "Local workstation health report preview using fake values only.",
    schedule: {
      cadence: "daily",
      localTime: "6:00 AM",
      timezoneLabel: "Local time",
      enabled: false,
    },
    readOnly: true,
    deliveryPreferences: demoTaskDeliveryPreferences,
    reportPreview: demoHealthReportPreviews[0],
  },
  {
    id: "task-server-health",
    templateKind: "server_health_check",
    title: "Server Health Check",
    summary: "Self-hosted server health report preview using fake values only.",
    schedule: {
      cadence: "daily",
      localTime: "6:00 AM",
      timezoneLabel: "Local time",
      enabled: false,
    },
    readOnly: true,
    deliveryPreferences: demoTaskDeliveryPreferences,
    reportPreview: demoHealthReportPreviews[1],
  },
];
