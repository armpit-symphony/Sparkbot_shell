import { useState } from "react";
import type { ConnectorCard } from "../types/connectors";
import type { ContextEvent } from "../types/context";
import type {
  HealthReportPreview as HealthReportPreviewContract,
  HealthSeverity,
  TaskDeliveryPreference,
  TaskGuardianTemplate,
} from "../types/taskGuardian";
import { DeliveryPreferencePreview } from "./DeliveryPreferencePreview";
import { HealthReportPreview } from "./HealthReportPreview";

type TaskGuardianPreviewProps = {
  templates: TaskGuardianTemplate[];
  deliveryPreferences: TaskDeliveryPreference[];
  healthReports: HealthReportPreviewContract[];
  connectorCards?: ConnectorCard[];
  contextEvents?: ContextEvent[];
};

const severityLabels: Record<HealthSeverity, string> = {
  nominal: "Nominal",
  sev1: "SEV-1",
  sev2: "SEV-2",
  sev3: "SEV-3",
  unknown: "Unknown",
};

function scheduleLabel(template: TaskGuardianTemplate) {
  return `${template.schedule.cadence} at ${template.schedule.localTime} ${template.schedule.timezoneLabel}`;
}

export function TaskGuardianPreview({
  templates,
  deliveryPreferences,
  healthReports,
  connectorCards = [],
  contextEvents = [],
}: TaskGuardianPreviewProps) {
  const [enabledPreview, setEnabledPreview] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(templates.map((template) => [template.id, template.schedule.enabled])) as Record<string, boolean>,
  );
  const taskContextEvents = contextEvents.filter((event) => event.sourceType === "task_guardian");

  function toggleTemplate(templateId: string) {
    setEnabledPreview((current) => ({ ...current, [templateId]: !current[templateId] }));
  }

  return (
    <section className="config-panel task-guardian-panel">
      <div className="card-heading">
        <div>
          <p className="section-label">Task Guardian</p>
          <h2>Health-check report shell</h2>
          <p>
            Task Guardian is a scheduled work manager direction. Layer 7 keeps app/in-room delivery as the default and
            previews external connector readiness without adding sends.
          </p>
        </div>
        <span className="status-badge setup_needed">Layer 7 shell</span>
      </div>

      <div className="runtime-boundary compact">
        <strong>Shell preview only - no scheduler or external sends yet.</strong>
        <p>
          Read-only checks are represented as report contracts only. No backend Task Guardian runtime, health collector,
          system commands, connector sends, memory persistence, or remediation exists in this layer.
        </p>
      </div>

      <div className="mini-card-grid">
        {templates.map((template) => (
          <article className="template-card health-template-card" key={template.id}>
            <div className="card-heading">
              <div>
                <h3>{template.title}</h3>
                <p>{template.summary}</p>
              </div>
              <span className={`severity-badge ${template.reportPreview.severity}`}>
                {severityLabels[template.reportPreview.severity]}
              </span>
            </div>

            <div className="seat-flags">
              <span>{scheduleLabel(template)}</span>
              <span>{template.readOnly ? "Read-only checks" : "Review required"}</span>
              <span>{enabledPreview[template.id] ? "Schedule preview enabled" : "Schedule preview disabled"}</span>
            </div>

            <label className="toggle-row">
              <input
                checked={Boolean(enabledPreview[template.id])}
                onChange={() => toggleTemplate(template.id)}
                type="checkbox"
              />
              <span>Enable local-only schedule preview</span>
            </label>

            <div className="report-summary">
              <strong>Last report preview</strong>
              <p>{template.reportPreview.summary}</p>
              <small>{template.reportPreview.memorySourceLabel}</small>
            </div>
          </article>
        ))}
      </div>

      <DeliveryPreferencePreview connectorCards={connectorCards} preferences={deliveryPreferences} />

      <section className="health-report-section">
        <div className="card-heading">
          <div>
            <p className="section-label">Report renderer</p>
            <h3>PC and server report previews</h3>
            <p>App/in-room and plain-text-friendly report structure shown in the web UI. All values are fake.</p>
          </div>
        </div>
        <div className="health-report-grid">
          {healthReports.map((report) => (
            <HealthReportPreview
              deliveryPreferences={deliveryPreferences}
              key={report.id}
              report={report}
            />
          ))}
        </div>
      </section>

      {taskContextEvents.length ? (
        <section className="task-context-preview">
          <div>
            <p className="section-label">Memory event preview</p>
            <h3>Source-labeled health context</h3>
            <p>
              Health reports can later become source-labeled app/in-room context events. External delivery remains
              opt-in, configured later, and live-QA unknown.
            </p>
          </div>
          <div className="mini-card-grid">
            {taskContextEvents.map((event) => (
              <article className="context-mini-card" key={event.id}>
                <strong>{event.title}</strong>
                <span>{event.sourceLabel}</span>
                <small>{event.redactionNote}</small>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
}
