import {
  mockLimaContractExamples,
  mockLimaContractInvariantRows,
  mockLimaContractInquiries,
} from "../data/mockLimaContracts";

type ExamplePayload = Record<string, unknown>;

function contractValueToString(value: unknown): string {
  if (value === null || value === undefined) return String(value);
  if (typeof value === "string") return value;
  if (typeof value === "boolean") return value ? "true" : "false";
  if (Array.isArray(value)) {
    return value.join(", ");
  }
  if (typeof value === "object") {
    return JSON.stringify(value, null, 2);
  }
  return String(value);
}

function ExampleRows({ payload, title }: { payload: ExamplePayload; title: string }) {
  const entries = Object.entries(payload);
  return (
    <article className="mock-contract-example" key={title}>
      <div className="card-heading">
        <p className="section-label">{title}</p>
      </div>
      <div className="mock-contract-items">
        {entries.slice(0, 6).map(([key, value]) => (
          <div className="mock-contract-item" key={key}>
            <strong>{key}</strong>
            <small>{contractValueToString(value)}</small>
          </div>
        ))}
      </div>
    </article>
  );
}

export function MockLimaContractPanel() {
  return (
    <section className="config-panel mock-lima-contract-panel">
      <div className="card-heading">
        <div>
          <p className="section-label">Future contract-only layer</p>
          <h2>Mock LIMA contract UI display</h2>
          <p>
            Sparkbot Shell can render static contract examples for future local/installed LIMA integration. This shell
            does not include runtime wiring.
          </p>
        </div>
      </div>

      <div className="runtime-boundary compact mock-contract-boundary">
        <strong>Contract posture</strong>
        <p>No LIMA runtime is bundled. No runtime calls, no dispatch, no persistence, and no provider/model/connector
        execution.</p>
      </div>

      <div className="config-panel compact-card">
        <div className="card-heading">
          <h3>What this shell may display in a future contract flow</h3>
        </div>
        <div className="mock-contract-inquiry-grid">
          {mockLimaContractInquiries.map((inquiry) => (
            <RuntimeBoundaryTag key={inquiry}>{inquiry}</RuntimeBoundaryTag>
          ))}
        </div>
      </div>

      <section className="mock-contract-cards">
        {mockLimaContractExamples.map((example) => (
          <article className="template-card" key={example.id}>
            <h3>{example.title}</h3>
            <p>{example.whatShellAsks}</p>
            <p>
              <strong>What LIMA may return:</strong> {example.whatLimaReturns}
            </p>
            <ExampleRows payload={example.payload} title={example.title} />
          </article>
        ))}
      </section>

      <div className="mock-contract-invariants">
        <h3>Hard safety invariants</h3>
        <p>Every contract example remains constrained by the same preview-only contract flags below.</p>
        <div className="lima-sequence-grid">
          {mockLimaContractInvariantRows.map(([label, value]) => (
            <article className="template-card" key={label}>
              <strong>{label}</strong>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="runtime-boundary compact mock-contract-boundary">
        <strong>No runtime action in shell</strong>
        <p>
          This pass remains frontend-only. Use this surface for future "demo contract" display only. No API calls, no runtime
          dispatch, no LIMA runtime install detection, no persistence, and no robotics or IoT control.
        </p>
      </div>
    </section>
  );
}

function RuntimeBoundaryTag({ children }: { children: string }) {
  return <span className="status-badge setup_needed">{children}</span>;
}
