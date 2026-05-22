import type {
  HealthReportPreview as HealthReportPreviewContract,
  HealthSeverity,
  TaskDeliveryPreference,
} from "../types/taskGuardian";
import { deliveryChannelLabel, deliveryStatusLabel } from "./DeliveryPreferencePreview";

type HealthReportPreviewProps = {
  report: HealthReportPreviewContract;
  deliveryPreferences: TaskDeliveryPreference[];
};

const severityLabels: Record<HealthSeverity, string> = {
  nominal: "Nominal",
  sev1: "SEV-1",
  sev2: "SEV-2",
  sev3: "SEV-3",
  unknown: "Unknown",
};

function severityLabel(severity: HealthSeverity) {
  return severityLabels[severity];
}

export function HealthReportPreview({ report, deliveryPreferences }: HealthReportPreviewProps) {
  return (
    <article className="health-report-preview">
      <div className="health-report-header">
        <div>
          <p className="section-label">Sparkbot Health Report - {report.timestampLabel}</p>
          <h3>{report.title}</h3>
        </div>
        <span className={`severity-badge ${report.severity}`}>{severityLabel(report.severity)}</span>
      </div>

      <section className="health-report-block">
        <strong>SEV-1 Assessment</strong>
        <p>{report.summary}</p>
      </section>

      <section className="health-report-block">
        <strong>System Status</strong>
        <div className="health-status-grid">
          {report.systemStatusRows.map((row) => (
            <div className="health-status-row" key={row.label}>
              <span>{row.label}</span>
              <strong>{row.value}</strong>
              <small>{row.detail}</small>
              <em className={`severity-text ${row.severity}`}>{severityLabel(row.severity)}</em>
            </div>
          ))}
        </div>
      </section>

      <section className="health-report-block">
        <strong>SEV-2 / SEV-3 Findings</strong>
        <div className="report-list">
          {report.findings.map((finding) => (
            <div key={finding.title}>
              <span className={`severity-badge ${finding.severity}`}>{severityLabel(finding.severity)}</span>
              <p>
                <strong>{finding.title}</strong>
                <br />
                {finding.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="health-report-block two-column">
        <div>
          <strong>Passed Checks</strong>
          <ul>
            {report.passedChecks.map((check) => (
              <li key={check}>{check}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Recommended Actions</strong>
          <ul>
            {report.recommendedActions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="health-report-block">
        <strong>Memory Source Label</strong>
        <p>{report.memorySourceLabel}</p>
      </section>

      <section className="health-report-block">
        <strong>Delivery Status Preview</strong>
        <div className="delivery-preview">
          {deliveryPreferences.map((preference) => (
            <span key={preference.channel}>
              {deliveryChannelLabel(preference.channel)}: {deliveryStatusLabel(preference.status)}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}
