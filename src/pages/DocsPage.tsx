const docs = [
  ["Install and setup", "INSTALL.md"],
  ["Capabilities", "CAPABILITIES.md"],
  ["Architecture overview", "ARCHITECTURE_OVERVIEW.md"],
  ["Security and guardrails", "SECURITY_AND_GUARDRAILS.md"],
  ["Local AI setup", "LOCAL_AI_SETUP.md"],
  ["Round Table overview", "ROUND_TABLE_OVERVIEW.md"],
  ["Task Guardian overview", "TASK_GUARDIAN_OVERVIEW.md"],
  ["Connectors overview", "CONNECTORS_OVERVIEW.md"],
  ["Robo Preview", "ROBO_PREVIEW.md"],
  ["Beta limitations", "BETA_LIMITATIONS.md"],
] as const;

const repoDocsBase = "./docs";

export function DocsPage() {
  return (
    <section className="page-section">
      <div className="intro-row">
        <div>
          <p className="section-label">Docs</p>
          <h2>Public shell docs</h2>
          <p>
            These docs help users install, understand, and safely evaluate the static Sparkbot Shell preview.
          </p>
        </div>
        <aside className="status-card">
          <span>Status</span>
          <strong>Public-safe docs only; repo staging docs are not part of the preview artifact.</strong>
        </aside>
      </div>

      <div className="docs-list">
        {docs.map(([label, fileName]) => (
          <a href={`${repoDocsBase}/${fileName}`} key={fileName}>
            <span>{label}</span>
            <small>{`docs/${fileName}`}</small>
          </a>
        ))}
      </div>

      <div className="runtime-boundary">
        <strong>Documentation boundary</strong>
        <p>
          Public release artifacts exclude extraction maps, R&D path maps, internal readiness/no-go docs,
          private/source-boundary notes, and staging implementation planning.
        </p>
        <p>
          Current release state remains GREEN_CANDIDATE and NOT_RELEASED. This shell is also staged as ready for a
          future LIMA AI OS contract/install layer with no live runtime wiring in this branch.
        </p>
        <p>
          For static fixture coverage of files, memory, tasks, and demo room context, open
          <a className="inline-link" href="#/workstation"> Home / Workstation</a>.
        </p>
      </div>
    </section>
  );
}
