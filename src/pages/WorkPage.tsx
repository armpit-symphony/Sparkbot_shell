import type { ChangeEvent } from "react";
import { useMemo, useState } from "react";
import type {
  LocalModelRuntimeState,
  WorkProgram,
  WorkspaceFile,
  WorkspaceFileCategory,
  WorkerType,
} from "../types/workspace";
import { DEFAULT_WORKER_TYPES } from "../types/workspace";

type WorkPageProps = {
  workspaceFiles: WorkspaceFile[];
  programs: WorkProgram[];
  onWorkspaceFilesChange: (next: WorkspaceFile[]) => void;
  onProgramsChange: (next: WorkProgram[]) => void;
  modelRuntimeState: Record<string, { state: LocalModelRuntimeState; checkedAt: string; endpoint: string; details: string }>;
};

type NetworkHit = {
  title: string;
  path: string;
  snippet: string;
};

const networkDemoIndex: NetworkHit[] = [
  {
    title: "Q1 SOP repository",
    path: "smb://office-share/sop/q1/incident-runbook.md",
    snippet: "Network shared SOP and onboarding runbook for routine office support work.",
  },
  {
    title: "Field deployment docs",
    path: "smb://office-share/projects/field/deployment-notes.md",
    snippet: "Deployment checklist and escalation contacts for model worker programs.",
  },
  {
    title: "Worker safety playbook",
    path: "smb://office-share/sop/guardrails/safety.md",
    snippet: "Policy guardrails before file writes, connector sends, and privileged operations.",
  },
];

function formatLocalDate(iso: string) {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

function sanitizeFileText(raw: string) {
  return raw.trim();
}

function readFileText(file: File): Promise<string> {
  return new Promise<string>((resolve) => {
    if (file.type.startsWith("text/") || file.type === "" || file.type.includes("json")) {
      const reader = new FileReader();
      reader.onload = () => resolve(sanitizeFileText(String(reader.result ?? "")));
      reader.onerror = () => resolve("");
      reader.readAsText(file);
      return;
    }

    resolve(`[Binary file: ${file.name}]`);
  });
}

function makeWorkspaceFile(file: File, category: WorkspaceFileCategory, text: string): WorkspaceFile {
  const timestamp = new Date().toISOString();
  return {
    id: `${category.toLowerCase().replace(" ", "-")}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    title: file.name,
    category,
    sourceLabel: `Uploaded ${category}`,
    mimeType: file.type || "text/plain",
    text,
    size: file.size,
    uploadedAt: timestamp,
    updatedAt: timestamp,
  };
}

function collectSearchHits(source: WorkspaceFile[], query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return source;
  return source.filter((doc) => {
    return (
      doc.title.toLowerCase().includes(normalized) ||
      doc.text.toLowerCase().includes(normalized) ||
      doc.sourceLabel.toLowerCase().includes(normalized) ||
      doc.category.toLowerCase().includes(normalized)
    );
  });
}

export function WorkPage({
  workspaceFiles,
  programs,
  onWorkspaceFilesChange,
  onProgramsChange,
  modelRuntimeState,
}: WorkPageProps) {
  const [programTitle, setProgramTitle] = useState("");
  const [programDetails, setProgramDetails] = useState("");
  const [workerType, setWorkerType] = useState<WorkerType>(DEFAULT_WORKER_TYPES[0]);
  const [trainingMemo, setTrainingMemo] = useState("");
  const [selectedSopFileIds, setSelectedSopFileIds] = useState<string[]>([]);
  const [selectedWorkFileIds, setSelectedWorkFileIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingDocId, setEditingDocId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");
  const [networkDriveTarget, setNetworkDriveTarget] = useState("smb://office-share");
  const [networkQuery, setNetworkQuery] = useState("");
  const [networkResults, setNetworkResults] = useState<NetworkHit[]>([]);
  const [networkStatus, setNetworkStatus] = useState("No network index check run yet.");

  const localSearchFiles = useMemo(() => collectSearchHits(workspaceFiles, searchQuery), [searchQuery, workspaceFiles]);
  const networkReady = networkResults.length > 0;

  const runtimeSummary = useMemo(() => {
    const statuses = Object.values(modelRuntimeState);
    const runningCount = statuses.filter((entry) => entry.state === "running").length;
    const notRunningCount = statuses.filter((entry) => entry.state === "not_running").length;
    const errorCount = statuses.filter((entry) => entry.state === "error").length;
    if (runningCount > 0) {
      return `${runningCount} local model seat${runningCount === 1 ? "" : "s"} confirmed running`;
    }
    if (notRunningCount > 0 || errorCount > 0) {
      return `${notRunningCount + errorCount} local model seat${notRunningCount + errorCount === 1 ? "" : "s"} reported not ready`;
    }
    return "No model runtime check run yet";
  }, [modelRuntimeState]);

  function toggleSelection(value: string, current: string[]) {
    return current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
  }

  function startEdit(docId: string) {
    const doc = workspaceFiles.find((item) => item.id === docId);
    if (!doc) return;
    setEditingDocId(docId);
    setEditingText(doc.text);
  }

  function cancelEdit() {
    setEditingDocId(null);
    setEditingText("");
  }

  function saveEditedDoc() {
    if (!editingDocId) return;
    const now = new Date().toISOString();
    onWorkspaceFilesChange(
      workspaceFiles.map((doc) => {
        if (doc.id !== editingDocId) return doc;
        return {
          ...doc,
          text: editingText,
          updatedAt: now,
        };
      }),
    );
    setEditingDocId(null);
    setEditingText("");
  }

  async function ingestFiles(
    event: ChangeEvent<HTMLInputElement>,
    category: WorkspaceFileCategory,
  ) {
    const files = Array.from(event.currentTarget.files ?? []);
    if (!files.length) return;
    const fileEntries = await Promise.all(
      files.map(async (file) => {
        const text = await readFileText(file);
        return makeWorkspaceFile(file, category, text);
      }),
    );
    onWorkspaceFilesChange([...workspaceFiles, ...fileEntries]);
    event.currentTarget.value = "";
  }

  function addProgram() {
    const title = programTitle.trim();
    const details = programDetails.trim();
    if (!title || !details) return;
    const now = new Date().toISOString();
    onProgramsChange([
      {
        id: `program-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
        title,
        details,
        workerType,
        trainingMemo: trainingMemo.trim() || "No training notes yet.",
        sopFileIds: selectedSopFileIds,
        workFileIds: selectedWorkFileIds,
        status: "draft",
        createdAt: now,
      },
      ...programs,
    ]);
    setProgramTitle("");
    setProgramDetails("");
    setTrainingMemo("");
    setWorkerType(DEFAULT_WORKER_TYPES[0]);
    setSelectedSopFileIds([]);
    setSelectedWorkFileIds([]);
  }

  function toggleProgramStatus(programId: string) {
    onProgramsChange(
      programs.map((program) => {
        if (program.id !== programId) return program;
        const next: WorkProgram["status"] =
          program.status === "draft"
            ? "active"
            : program.status === "active"
              ? "ready"
              : program.status === "ready"
                ? "completed"
                : "draft";
        return { ...program, status: next };
      }),
    );
  }

  function runNetworkSearch() {
    const target = networkDriveTarget.trim();
    const query = networkQuery.trim().toLowerCase();
    if (!target) {
      setNetworkStatus("Enter a network drive target first.");
      setNetworkResults([]);
      return;
    }
    if (!query) {
      setNetworkStatus("Enter a search query first.");
      setNetworkResults([]);
      return;
    }
    const hits = networkDemoIndex.filter(
      (hit) => hit.path.toLowerCase().includes(query) || hit.title.toLowerCase().includes(query) || hit.snippet.toLowerCase().includes(query),
    );
    setNetworkResults(hits);
    if (hits.length) {
      setNetworkStatus(`Network preview index matched ${hits.length} result(s) on ${target}.`);
    } else {
      setNetworkStatus(`No preview matches on ${target}. Use a local bridge to run live SMB/WebDAV indexing.`);
    }
  }

  const sopFiles = workspaceFiles.filter((file) => file.category === "SOP");
  const workFiles = workspaceFiles.filter((file) => file.category === "Work File");
  const selectedDoc = workspaceFiles.find((doc) => doc.id === editingDocId);

  return (
    <section className="page-section">
      <div className="intro-row">
        <div>
          <p className="section-label">Work floor shell</p>
          <h2>Work page</h2>
          <p>
            Define operational programs, attach SOPs and work docs, and run local read/search operations in this shell workspace.
          </p>
          <p className="preview-map">
            This is a local shell preview. Model runtime is inspected from configured model seats, but file writes stay in
            shell state only.
          </p>
        </div>
        <aside className="status-card">
          <span>Model runtime readiness</span>
          <strong>{runtimeSummary}</strong>
          <span>Search + upload + edit paths are local to this shell session.</span>
          <a className="text-button" href="#/settings">
            Open local AI settings
          </a>
        </aside>
      </div>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Program intake</p>
            <h2>New work program</h2>
            <p>Add the work detail and worker type, then provide a short training memo for this worker slot.</p>
          </div>
          <button type="button" onClick={addProgram}>
            Add work program
          </button>
        </div>
        <div className="form-grid">
          <label>
            <span>Program title</span>
            <input value={programTitle} onChange={(event) => setProgramTitle(event.currentTarget.value)} />
          </label>
          <label>
            <span>Worker type</span>
            <select
              value={workerType}
              onChange={(event) => setWorkerType(event.currentTarget.value as WorkerType)}
            >
              {DEFAULT_WORKER_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Work detail</span>
            <textarea
              rows={5}
              value={programDetails}
              onChange={(event) => setProgramDetails(event.currentTarget.value)}
            />
          </label>
          <label>
            <span>Training memo</span>
            <textarea
              rows={5}
              value={trainingMemo}
              onChange={(event) => setTrainingMemo(event.currentTarget.value)}
              placeholder="Explain what this worker should prioritize and avoid."
            />
          </label>
        </div>

        <div className="form-grid">
          <fieldset className="compact-fieldset">
            <legend>Attach SOP files</legend>
            {sopFiles.map((file) => (
              <label key={file.id} className="checkbox-row">
                <input
                  checked={selectedSopFileIds.includes(file.id)}
                  onChange={() => setSelectedSopFileIds((current) => toggleSelection(file.id, current))}
                  type="checkbox"
                />
                <span>{file.title}</span>
              </label>
            ))}
            {!sopFiles.length ? <small>No SOP files available yet.</small> : null}
          </fieldset>
          <fieldset className="compact-fieldset">
            <legend>Attach Work files</legend>
            {workFiles.map((file) => (
              <label key={file.id} className="checkbox-row">
                <input
                  checked={selectedWorkFileIds.includes(file.id)}
                  onChange={() => setSelectedWorkFileIds((current) => toggleSelection(file.id, current))}
                  type="checkbox"
                />
                <span>{file.title}</span>
              </label>
            ))}
            {!workFiles.length ? <small>No work files available yet.</small> : null}
          </fieldset>
        </div>
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Local file workspace</p>
            <h2>Upload, read, search, and edit</h2>
            <p>Upload SOP and work files, search local content, and edit stored content for this work session.</p>
          </div>
        </div>
        <div className="form-grid">
          <label>
            <span>Upload SOP files</span>
            <input
              type="file"
              multiple
              onChange={(event) => {
                void ingestFiles(event, "SOP");
              }}
            />
          </label>
          <label>
            <span>Upload work files</span>
            <input
              type="file"
              multiple
              onChange={(event) => {
                void ingestFiles(event, "Work File");
              }}
            />
          </label>
          <label>
            <span>Search local workspace</span>
            <input value={searchQuery} onChange={(event) => setSearchQuery(event.currentTarget.value)} />
          </label>
          <label>
            <span>Search result count</span>
            <input value={String(localSearchFiles.length)} readOnly />
          </label>
        </div>

        <div className="mini-card-grid">
          {localSearchFiles.map((doc) => (
            <article className="template-card" key={doc.id}>
              <div className="card-heading">
                <div>
                  <span className="zone-tag">{doc.category}</span>
                  <h3>{doc.title}</h3>
                  <small>{doc.sourceLabel}</small>
                  <p>{doc.text.slice(0, 90)}</p>
                </div>
                <StatusTag label={doc.category} />
              </div>
              <div className="seat-flags">
                <span>Uploaded: {formatLocalDate(doc.uploadedAt)}</span>
                <span>Updated: {formatLocalDate(doc.updatedAt)}</span>
              </div>
              <button className="text-button" type="button" onClick={() => startEdit(doc.id)}>
                Read / edit
              </button>
            </article>
          ))}
          {!localSearchFiles.length ? <p>No files match this query.</p> : null}
        </div>

        {selectedDoc ? (
          <section className="runtime-boundary compact">
            <div className="card-heading">
              <div>
                <p className="section-label">Editor</p>
                <h3>{selectedDoc.title}</h3>
              </div>
              <div className="button-row">
                <button type="button" onClick={saveEditedDoc}>
                  Save document
                </button>
                <button className="text-button" type="button" onClick={cancelEdit}>
                  Cancel
                </button>
              </div>
            </div>
            <textarea value={editingText} onChange={(event) => setEditingText(event.currentTarget.value)} rows={10} />
            <p className="delivery-caveat">
              This shell stores edits locally for the current browser session. No filesystem write occurs in this preview.
            </p>
          </section>
        ) : null}
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Network drive search preview</p>
            <h2>Remote index capability</h2>
            <p>Search a simulated network drive index while the live desktop/runtime bridge is not yet connected.</p>
          </div>
          <span className="status-badge setup_needed">{networkReady ? "Preview index found" : "Preview only"}</span>
        </div>
        <div className="form-grid">
          <label>
            <span>Network target</span>
            <input
              value={networkDriveTarget}
              onChange={(event) => setNetworkDriveTarget(event.currentTarget.value)}
              placeholder="smb://office-share"
            />
          </label>
          <label>
            <span>Search query</span>
            <input
              value={networkQuery}
              onChange={(event) => setNetworkQuery(event.currentTarget.value)}
              placeholder='e.g. "sop"'
            />
          </label>
          <label>
            <span>Bridge status</span>
            <input value={networkStatus} readOnly />
          </label>
          <button type="button" onClick={runNetworkSearch}>
            Run network preview search
          </button>
        </div>
        <div className="mini-card-grid">
          {networkResults.map((result) => (
            <article className="template-card" key={`${result.path}-${result.title}`}>
              <strong>{result.title}</strong>
              <span className="fixture-type">{result.path}</span>
              <small>{result.snippet}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Program queue</p>
            <h2>Current work programs</h2>
            <p>Set status to stage new work before assigning it to live worker runtime.</p>
          </div>
        </div>
        <div className="mini-card-grid">
          {programs.map((program) => (
            <article className="template-card" key={program.id}>
              <div className="card-heading">
                <div>
                  <h3>{program.title}</h3>
                  <span>{program.workerType}</span>
                </div>
                <StatusTag label={program.status} />
              </div>
              <p>{program.details}</p>
              <small>Training memo: {program.trainingMemo}</small>
              <small>{`SOP: ${program.sopFileIds.length}, Work docs: ${program.workFileIds.length}`}</small>
              <small>Created: {formatLocalDate(program.createdAt)}</small>
              <button type="button" className="text-button" onClick={() => toggleProgramStatus(program.id)}>
                Move status
              </button>
            </article>
          ))}
          {!programs.length ? <p>No work programs defined yet.</p> : null}
        </div>
      </section>
    </section>
  );
}

function StatusTag({ label }: { label: string }) {
  return <span className={`status-badge ${label === "running" ? "configured" : "setup_needed"}`}>{label}</span>;
}
