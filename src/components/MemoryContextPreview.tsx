import { useMemo, useState } from "react";
import type { ContextEvent, ContextSourceType, ContextRetrievalPreview } from "../types/context";

type MemoryContextPreviewProps = {
  events: ContextEvent[];
  retrievalPreview: ContextRetrievalPreview;
  compact?: boolean;
};

type FilterKey =
  | "all"
  | "chat"
  | "roundtable"
  | "meeting_note"
  | "task_guardian"
  | "connector"
  | "model_seat";

const filters: Array<{ id: FilterKey; label: string; sourceTypes?: ContextSourceType[] }> = [
  { id: "all", label: "All" },
  { id: "chat", label: "Chat", sourceTypes: ["chat"] },
  { id: "roundtable", label: "Round Table", sourceTypes: ["roundtable"] },
  { id: "meeting_note", label: "Meeting Notes", sourceTypes: ["meeting_note"] },
  { id: "task_guardian", label: "Task Guardian", sourceTypes: ["task_guardian"] },
  { id: "connector", label: "Connectors", sourceTypes: ["connector"] },
  { id: "model_seat", label: "Model Seats", sourceTypes: ["model_seat"] },
];

function formatSourceType(sourceType: ContextSourceType) {
  return sourceType.replace("_", " ");
}

function rollupLabel(event: ContextEvent) {
  if (event.approvalRequired) return "Approval required";
  if (event.rollupState === "draft") return "Excluded draft";
  if (event.rollupState === "retired") return "Retired rollup";
  if (event.memoryRollup) return "Future memory rollup";
  return "Context only";
}

export function MemoryContextPreview({ events, retrievalPreview, compact = false }: MemoryContextPreviewProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const active = filters.find((filter) => filter.id === activeFilter) ?? filters[0];
  const visibleEvents = useMemo(() => {
    if (!active.sourceTypes) return events;
    return events.filter((event) => active.sourceTypes?.includes(event.sourceType));
  }, [active.sourceTypes, events]);
  const displayedEvents = compact ? visibleEvents.slice(0, 4) : visibleEvents;
  const connectorGateEvents = events.filter(
    (event) => event.sourceType === "connector" && event.sourceLabel.startsWith("connector.recall."),
  );

  return (
    <section className="config-panel memory-context-panel">
      <div className="card-heading">
        <div>
          <p className="section-label">Memory / context spine</p>
          <h2>Context adapter shell</h2>
          <p>
            Layer 7 previews source-labeled context events for health reports, delivery warnings, and connector recall
            gates. It does not persist memory, retrieve context, or call a Guardian memory service.
          </p>
        </div>
        <span className="status-badge setup_needed">Contract only</span>
      </div>

      <div className="context-filter-row" aria-label="Context filters">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter.id ? "context-filter active" : "context-filter"}
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            type="button"
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className={compact ? "context-event-list compact" : "context-event-list"}>
        {displayedEvents.map((event) => (
          <article className="context-event-card" key={event.id}>
            <div className="card-heading">
              <div>
                <span className="context-source">{event.sourceLabel}</span>
                <h3>{event.title}</h3>
              </div>
              <span className={`context-sensitivity ${event.sensitivity}`}>{event.sensitivity}</span>
            </div>
            <p>{event.summary}</p>
            <div className="context-meta-row">
              <span>{formatSourceType(event.sourceType)}</span>
              <span>{event.actorLabel}</span>
              <span>{event.rollupState}</span>
              <span>{event.redactionStatus}</span>
              <span>{rollupLabel(event)}</span>
            </div>
            {event.redactionNote ? <small>{event.redactionNote}</small> : null}
          </article>
        ))}
      </div>

      {connectorGateEvents.length ? (
        <section className="connector-gate-preview">
          <div>
            <p className="section-label">Connector recall gate</p>
            <h3>Fail-closed private recall preview</h3>
            <p>
              Unauthorized connector recall is blocked/redacted. Linked or PIN-verified recall is shown only as future
              runtime behavior.
            </p>
          </div>
          <div className="mini-card-grid">
            {connectorGateEvents.map((event) => (
              <article className="context-mini-card" key={event.id}>
                <strong>{event.title}</strong>
                <span>{event.sourceLabel}</span>
                <small>{event.redactionNote}</small>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <div className="retrieval-preview">
        <div>
          <p className="section-label">Retrieval preview</p>
          <h3>{retrievalPreview.query}</h3>
          <p>{retrievalPreview.redactionBoundary}</p>
        </div>
        <div className="context-columns">
          <div>
            <strong>Included sources</strong>
            {retrievalPreview.includedSources.map((source) => (
              <span key={source}>{source}</span>
            ))}
          </div>
          <div>
            <strong>Excluded/redacted sources</strong>
            {retrievalPreview.excludedSources.map((source) => (
              <span key={source}>{source}</span>
            ))}
          </div>
        </div>
        <small>{retrievalPreview.resultCount} demo results. No real retrieval runs in Layer 7.</small>
      </div>
    </section>
  );
}
