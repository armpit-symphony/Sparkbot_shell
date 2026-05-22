import type { ContextEvent } from "../types/context";
import type { DeliveryChannelPreview, TaskGuardianTemplate } from "../types/shell";
import { StatusBadge } from "./StatusBadge";

type TaskGuardianPreviewProps = {
  templates: TaskGuardianTemplate[];
  deliveryChannels: DeliveryChannelPreview[];
  contextEvents?: ContextEvent[];
};

function channelLabel(channels: DeliveryChannelPreview[], id: string) {
  return channels.find((channel) => channel.id === id)?.label ?? id;
}

export function TaskGuardianPreview({ templates, deliveryChannels, contextEvents = [] }: TaskGuardianPreviewProps) {
  const taskContextEvents = contextEvents.filter((event) => event.sourceType === "task_guardian");

  return (
    <section className="config-panel">
      <div className="card-heading">
        <div>
          <p className="section-label">Task Guardian</p>
          <h2>Template preview</h2>
          <p>Read-only health-check templates and delivery preferences. No scheduler or connector send path exists.</p>
        </div>
      </div>

      <div className="mini-card-grid">
        {templates.map((template) => (
          <article className="template-card" key={template.id}>
            <div className="card-heading">
              <div>
                <h3>{template.title}</h3>
                <p>{template.summary}</p>
              </div>
              <StatusBadge status={template.setupStatus} />
            </div>
            <div className="seat-flags">
              <span>{template.scheduleLabel}</span>
              <span>{template.readOnly ? "Read-only" : "Requires review"}</span>
              <span>{template.enabledByDefault ? "Enabled by default" : "Disabled by default"}</span>
            </div>
            <div className="delivery-preview">
              {template.deliveryChannelIds.map((channelId) => (
                <span key={channelId}>{channelLabel(deliveryChannels, channelId)}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="delivery-grid">
        {deliveryChannels.map((channel) => (
          <article className="delivery-card" key={channel.id}>
            <strong>{channel.label}</strong>
            <span>{channel.status}</span>
            <p>{channel.description}</p>
          </article>
        ))}
      </div>

      {taskContextEvents.length ? (
        <section className="task-context-preview">
          <div>
            <p className="section-label">Memory event preview</p>
            <h3>Task Guardian context handoff</h3>
            <p>
              Health reports can later become app/in-room context events. External delivery remains opt-in and
              configured only.
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
