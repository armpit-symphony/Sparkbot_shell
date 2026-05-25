import {
  mockLimaContractExamples,
  mockLimaContractInvariantRows,
  mockLimaContractInquiries,
  mockLimaContractSequence,
  mockSafeActiveStates,
  mockStateLadder,
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
  const summaryKeys = [
    "type",
    "status",
    "active_state",
    "state_authority",
    "consumer_profile",
    "embodiment_profile",
    "approval_posture",
    "runtime_active",
    "guardian_decision_created",
    "adapter_calls_allowed",
    "tool_calls_allowed",
    "driver_calls_allowed",
    "audit_storage_written",
  ];

  return (
    <article className="mock-contract-example" key={title}>
      <div className="card-heading">
        <p className="section-label">{title}</p>
      </div>
      <div className="mock-contract-items">
        {summaryKeys.map((key) =>
          key in payload ? (
            <div className="mock-contract-item" key={key}>
              <strong>{key}</strong>
              <small>{contractValueToString(payload[key])}</small>
            </div>
          ) : null,
        )}
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
            Sparkbot Shell renders non-authoritative contract fixtures only. These are preview/demo shapes, not runtime
            objects.
          </p>
        </div>
      </div>

      <div className="runtime-boundary compact mock-contract-boundary">
        <strong>Contract posture</strong>
        <p>
          No LIMA runtime is active. No Guardian decision is created. No adapter, tool, driver, provider, connector,
          dispatch, persistence, or execution path is called.
        </p>
      </div>

      <div className="config-panel compact-card">
        <div className="card-heading">
          <h3>Alignment sequence</h3>
          <p>ConsumerRequest -&gt; TypedIntentEnvelope/TaskIntent -&gt; CandidatePreview -&gt; RuntimeStateSnapshot</p>
        </div>
        <div className="mock-contract-inquiry-grid">
          {mockLimaContractSequence.map((step) => (
            <RuntimeBoundaryTag key={step}>{step}</RuntimeBoundaryTag>
          ))}
        </div>
      </div>

      <div className="config-panel compact-card">
        <div className="card-heading">
          <h3>Preview inquiry families</h3>
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
        <p>Every contract example remains constrained by the same preview-only flags below.</p>
        <div className="lima-sequence-grid">
          {mockLimaContractInvariantRows.map(([label, value]) => (
            <article className="template-card" key={label}>
              <strong>{label}</strong>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="config-panel compact-card">
        <div className="card-heading">
          <h3>Runtime ladder vocabulary</h3>
          <p>Only mock-safe states are active in this shell pass.</p>
        </div>
        <div className="mock-contract-inquiry-grid">
          {mockStateLadder.map((state) => (
            <RuntimeBoundaryTag key={state}>{state}</RuntimeBoundaryTag>
          ))}
        </div>
        <div className="runtime-boundary compact mock-contract-boundary">
          <strong>Active mock-safe states</strong>
          <p>{mockSafeActiveStates.join(", ")}</p>
        </div>
      </div>

      <div className="runtime-boundary compact mock-contract-boundary">
        <strong>No runtime action in shell</strong>
        <p>
          This pass remains frontend-only and static fixture-only. Emergency stop, robotics, drones, humanoids, and IoT are
          vocabulary/posture only.
        </p>
      </div>
    </section>
  );
}

function RuntimeBoundaryTag({ children }: { children: string }) {
  return <span className="status-badge setup_needed">{children}</span>;
}
