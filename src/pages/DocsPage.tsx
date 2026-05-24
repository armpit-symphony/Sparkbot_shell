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

const includedInStaticPreview = [
  "Workstation AI office floor and Round Table meeting demo",
  "Model seats and Invite Wing static layouts",
  "Files/Knowledge, memory, and tasks fixture previews",
  "Guardian posture and safety framing",
  "Robo teaser + LIMA-ready install-path notes",
  "Static docs, copy, and install messaging",
  "MIT license and preview artifact metadata",
] as const;

const intentionallyExcluded = [
  "Backend runtime and session services",
  "Provider model calls or model-key execution",
  "Connector sends and runtime connector sessions",
  "Persistence or scheduler behavior",
  "Guardian internals and enforcement actions",
  "Terminal/browser execution and robotics/IoT control",
  "LIMA AI OS runtime and proprietary automation tracks are not included",
] as const;

const wave1Progress = [
  "Workstation visual refinement complete",
  "Round Table visual flow refinement complete",
  "Model stack + Invite Wing visual refinement complete",
  "Docs/info visual refinement complete",
  "No direct R&D code copy; no runtime behavior added in this pass",
] as const;

const repoDocsBase = "./docs";

export function DocsPage() {
  return (
    <section className="page-section">
      <div className="intro-row">
        <div>
          <p className="section-label">Docs</p>
          <h2>Public shell docs command center</h2>
          <p>
            This page is the single command-center entry for the Sparkbot Shell preview: what is included, what is excluded,
            what remains safe to ship, and what is still a future plan.
          </p>
          <p>
            The shell is static, local-first, and workflow-oriented: Workstation + Round Table first, then model and safety
            surfaces as discoverable demo fixtures.
          </p>
        </div>
        <aside className="status-card">
          <span>Status</span>
          <strong>Static Preview Command Center</strong>
          <span>GREEN_CANDIDATE</span>
          <span>NOT_RELEASED</span>
          <span>NO_TAG</span>
          <span>NO_UPLOAD</span>
          <span>NO_ANNOUNCEMENT</span>
        </aside>
      </div>

      <div className="panel-grid">
        <article className="info-panel">
          <span>Current scope</span>
          <h3>What this shell is</h3>
          <ul>
            <li>Self-hosted AI workstation preview surface.</li>
            <li>Public-safe demo of Workstation and Round Table flow.</li>
            <li>Model stack seats shown as static configuration cards.</li>
            <li>Files/Memory/Tasks shown as preview fixtures only.</li>
            <li>LIMA AI OS is future contract/install layer, not current runtime.</li>
          </ul>
          <p>Active staging repo: <strong>armpit-symphony/Sparkbot_shell</strong>.</p>
          <p>Final public repo/home: <strong>TBD</strong>.</p>
        </article>

        <article className="info-panel">
          <span>Included in this static shell</span>
          <h3>Included surfaces</h3>
          <ul>
            {includedInStaticPreview.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="info-panel">
          <span>Public safety boundary</span>
          <h3>Intentionally excluded</h3>
          <ul>
            {intentionallyExcluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="panel-grid">
        <article className="info-panel">
          <span>Wave 1 progress</span>
          <h3>Docs/info refinement included</h3>
          <ul>
            {wave1Progress.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="info-panel">
          <span>Navigation</span>
          <h3>Core preview flows</h3>
          <a href="#/workstation">Workstation home</a>
          <a href="#/roundtable">Round Table hero flow</a>
          <a href="#/command-center">Model seats + Invite Wing</a>
          <a href="#/task-guardian">Task Guardian preview</a>
          <a href="#/robo-preview">Robo teaser</a>
        </article>

        <article className="info-panel">
          <span>Future path</span>
          <h3>After this candidate</h3>
          <ul>
            <li>Stop Wave 1 source adaptation.</li>
            <li>Run a Wave 1 checkpoint/audit.</li>
            <li>Reassess deeper import and runtime planning only after approval.</li>
          </ul>
        </article>
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
          Public artifact boundaries are explicit and clean: only public-facing install/use docs and approved shell copy are
          shown here.
        </p>
        <p>
          Current release state is GREEN_CANDIDATE and NOT_RELEASED. No runtime provider calls, no backend APIs, no
          persistence, and no robot/control path exists in this branch.
        </p>
        <p>
          This shell stays static and demo-only while documenting a future LIMA AI OS contract layer path:
          docs/fixtures, optional local detection, and read-only endpoint wiring only after explicit Phil approval.
        </p>
      </div>
    </section>
  );
}
