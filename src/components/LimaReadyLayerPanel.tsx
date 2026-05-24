export function LimaReadyLayerPanel() {
  return (
    <section className="config-panel lima-ready-panel">
      <div className="card-heading">
        <div>
          <p className="section-label">Future Contract Layer</p>
          <h2>LIMA AI OS ready layer</h2>
          <p>
            Sparkbot Shell is prepared for a future LIMA AI OS contract/install layer.
            The current shell remains static preview only.
          </p>
        </div>
      </div>

      <div className="mini-card-grid">
        <article className="template-card">
          <strong>No bundled runtime</strong>
          <p>No LIMA runtime is bundled in this shell branch.</p>
        </article>
        <article className="template-card">
          <strong>No execution paths</strong>
          <p>No execution, dispatch, persistence, providers, connectors, robotics, or IoT controls are active.</p>
        </article>
      </div>

      <div className="lima-sequence-grid" aria-label="Future LIMA integration sequence">
        <article className="flow-card">
          <span>1</span>
          <p>Contract docs only.</p>
        </article>
        <article className="flow-card">
          <span>2</span>
          <p>Mocked LIMA responses and fixtures only.</p>
        </article>
        <article className="flow-card">
          <span>3</span>
          <p>Frontend preview UI against mock responses.</p>
        </article>
        <article className="flow-card">
          <span>4</span>
          <p>Optional local LIMA install detection.</p>
        </article>
        <article className="flow-card">
          <span>5</span>
          <p>Read-only LIMA preview endpoint later.</p>
        </article>
        <article className="flow-card">
          <span>6</span>
          <p>Runtime integration only with explicit future approval.</p>
        </article>
      </div>
    </section>
  );
}
