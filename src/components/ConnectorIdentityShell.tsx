import type {
  ConnectorCard,
  ConnectorGateStep,
  ConnectorIdentityStatus,
  ConnectorRecallPolicy,
  ConnectorSetupStatus,
  PinSessionPreview,
} from "../types/connectors";
import type { ContextEvent } from "../types/context";
import { demoConnectorGateSteps } from "../data/demoConnectorState";

type ConnectorIdentityShellProps = {
  connectors: ConnectorCard[];
  contextEvents?: ContextEvent[];
  compact?: boolean;
};

const setupLabels: Record<ConnectorSetupStatus, string> = {
  not_configured: "Not configured",
  configured: "Configured",
  setup_needed: "Setup needed",
  live_qa_unknown: "Live QA unknown",
  unsupported: "Unsupported",
};

const identityLabels: Record<ConnectorIdentityStatus, string> = {
  unlinked: "Unlinked",
  linked_operator: "Linked operator",
  allowed_channel: "Allowed channel",
  allowed_user: "Allowed user",
  allowed_phone: "Allowed phone",
  shared_channel_requires_pin: "Shared channel requires PIN",
  blocked: "Blocked",
};

const recallLabels: Record<ConnectorRecallPolicy, string> = {
  public_only: "Public only",
  private_recall_requires_linked_identity: "Private recall requires linked identity",
  private_recall_requires_pin: "Private recall requires PIN",
  private_recall_blocked: "Private recall blocked",
  unsupported: "Unsupported",
};

const pinLabels: Record<PinSessionPreview, string> = {
  required: "PIN required",
  verified: "PIN verified preview",
  expired: "PIN expired",
  not_applicable: "Not applicable",
};

function ConnectorFlow({ steps }: { steps: ConnectorGateStep[] }) {
  return (
    <div className="connector-flow-grid">
      {steps.map((step, index) => (
        <article className={`connector-step ${step.status}`} key={step.id}>
          <span>{index + 1}</span>
          <strong>{step.label}</strong>
          <p>{step.detail}</p>
        </article>
      ))}
    </div>
  );
}

export function ConnectorIdentityShell({
  connectors,
  contextEvents = [],
  compact = false,
}: ConnectorIdentityShellProps) {
  const connectorEvents = contextEvents.filter((event) => event.sourceType === "connector");

  return (
    <section className={compact ? "connector-shell compact" : "connector-shell page-section"}>
      <div className="intro-row">
        <div>
          <p className="section-label">Static public shell</p>
          <h2>Connector identity / PIN shell</h2>
          <p>
            Connectors are optional operator communication channels. This shell previews setup status, identity gates,
            PIN step-up, fail-closed private recall, and delivery caveats with static demo state only.
          </p>
        </div>
        <aside className="status-card">
          <span>Connector boundary</span>
          <strong>No connector runtime, sends, webhooks, PIN verification, sessions, or private recall is active.</strong>
        </aside>
      </div>

      <div className="runtime-boundary compact">
        <strong>Private meeting recall fails closed.</strong>
        <p>
          PIN is step-up verification, not a replacement for connector authenticity. External delivery remains opt-in
          and live-QA gated.
        </p>
      </div>

      <section className="config-panel connector-status-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Connector cards</p>
            <h3>Setup, identity, recall, and delivery previews</h3>
          </div>
          <span className="status-badge setup_needed">No secret inputs</span>
        </div>

        <div className="connector-grid">
          {connectors.map((connector) => (
            <article className={`connector-card ${connector.setupStatus}`} key={connector.id}>
              <div className="card-heading">
                <div>
                  <span className="context-source">{connector.kind}</span>
                  <h3>{connector.label}</h3>
                </div>
                <span className={`connector-status ${connector.setupStatus}`}>
                  {setupLabels[connector.setupStatus]}
                </span>
              </div>
              <p>{connector.caveat}</p>
              <div className="connector-policy-grid">
                <span>{identityLabels[connector.identityStatus]}</span>
                <span>{recallLabels[connector.recallPolicy]}</span>
                <span>{pinLabels[connector.pinSession]}</span>
                <span>Delivery: {setupLabels[connector.deliveryStatus]}</span>
              </div>
              <div className="connector-features">
                {connector.supportedFeatures.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="config-panel connector-gate-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Private recall gate</p>
            <h3>Demo-only verification flow</h3>
            <p>
              The flow shows policy shape only. It does not verify a PIN, start a session, retrieve private memory, or
              send connector messages.
            </p>
          </div>
        </div>
        <ConnectorFlow steps={demoConnectorGateSteps} />
      </section>

      {connectorEvents.length ? (
        <section className="config-panel">
          <div className="card-heading">
            <div>
              <p className="section-label">Memory/context preview</p>
              <h3>Connector recall events</h3>
            </div>
          </div>
          <div className="mini-card-grid">
            {connectorEvents.map((event) => (
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
