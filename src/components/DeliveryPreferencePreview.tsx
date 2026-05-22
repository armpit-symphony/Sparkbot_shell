import type { ConnectorCard, ConnectorKind } from "../types/connectors";
import type {
  DeliveryChannelKind,
  DeliveryChannelStatus,
  TaskDeliveryPreference,
} from "../types/taskGuardian";

type DeliveryPreferencePreviewProps = {
  preferences: TaskDeliveryPreference[];
  connectorCards?: ConnectorCard[];
  compact?: boolean;
};

const channelLabels: Record<DeliveryChannelKind, string> = {
  app: "App / in-room",
  telegram: "Telegram",
  discord: "Discord",
  slack: "Slack",
  whatsapp: "WhatsApp",
  sms: "SMS / text",
};

const statusLabels: Record<DeliveryChannelStatus, string> = {
  default: "Default",
  configured: "Configured",
  setup_needed: "Setup needed",
  unsupported: "Unsupported",
  live_qa_unknown: "Live QA unknown",
};

export function deliveryChannelLabel(channel: DeliveryChannelKind) {
  return channelLabels[channel];
}

export function deliveryStatusLabel(status: DeliveryChannelStatus) {
  return statusLabels[status];
}

function findConnector(connectorCards: ConnectorCard[], channel: DeliveryChannelKind) {
  if (channel === "app") return undefined;
  return connectorCards.find((connector) => connector.kind === (channel as ConnectorKind));
}

function formatEnumLabel(value: string) {
  return value.replaceAll("_", " ");
}

export function DeliveryPreferencePreview({
  preferences,
  connectorCards = [],
  compact = false,
}: DeliveryPreferencePreviewProps) {
  return (
    <section className={compact ? "delivery-preference-shell compact" : "delivery-preference-shell"}>
      <div className="card-heading">
        <div>
          <p className="section-label">Delivery preference shell</p>
          <h3>App-first delivery</h3>
          <p>External delivery is opt-in and requires configured connectors.</p>
        </div>
        <span className="status-badge setup_needed">No sends</span>
      </div>

      <div className="delivery-grid">
        {preferences.map((preference) => {
          const connector = findConnector(connectorCards, preference.channel);

          return (
            <article className={`delivery-card ${preference.status}`} key={preference.channel}>
              <div className="card-heading">
                <strong>{deliveryChannelLabel(preference.channel)}</strong>
                <span>{deliveryStatusLabel(preference.status)}</span>
              </div>
              <p>{preference.statusMessage}</p>
              <div className="seat-flags">
                <span>{preference.enabled ? "Enabled in preview" : "Disabled in preview"}</span>
                {preference.fallbackToApp ? <span>Fallback to app</span> : null}
                {preference.status === "live_qa_unknown" ? <span>Live QA unknown</span> : null}
                {preference.status === "unsupported" ? <span>Future/unsupported</span> : null}
              </div>
              {connector ? (
                <small>
                  Connector gate: {formatEnumLabel(connector.identityStatus)}; recall policy:{" "}
                  {formatEnumLabel(connector.recallPolicy)}.
                </small>
              ) : null}
            </article>
          );
        })}
      </div>

      <p className="delivery-caveat">
        Live connector QA is still required before public private recall/delivery can be marked complete.
      </p>
    </section>
  );
}
