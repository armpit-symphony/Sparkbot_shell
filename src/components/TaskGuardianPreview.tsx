import type { DeliveryChannelPreview, TaskGuardianTemplate } from "../types/shell";
import { StatusBadge } from "./StatusBadge";

type TaskGuardianPreviewProps = {
  templates: TaskGuardianTemplate[];
  deliveryChannels: DeliveryChannelPreview[];
};

function channelLabel(channels: DeliveryChannelPreview[], id: string) {
  return channels.find((channel) => channel.id === id)?.label ?? id;
}

export function TaskGuardianPreview({ templates, deliveryChannels }: TaskGuardianPreviewProps) {
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
    </section>
  );
}
