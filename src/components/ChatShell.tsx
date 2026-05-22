import { useMemo, useState } from "react";
import type { MemoryContextShellState } from "../types/context";
import type { ChatMessage, ChatSession, ModelSeat } from "../types/shell";
import { SetupNotice } from "./SetupNotice";
import { StatusBadge } from "./StatusBadge";

type ChatShellProps = {
  session: ChatSession;
  modelSeats: ModelSeat[];
  memoryContext: MemoryContextShellState;
  onSessionChange: (session: ChatSession) => void;
};

const contextChips = ["Workstation", "Round Table", "Task Guardian", "Meeting Notes", "Local AI"];

function newMessageId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

export function ChatShell({ session, modelSeats, memoryContext, onSessionChange }: ChatShellProps) {
  const [draft, setDraft] = useState("");
  const chatSeats = modelSeats.filter((seat) => seat.showInChat);
  const selectedSeat = useMemo(
    () => modelSeats.find((seat) => seat.id === session.selectedModelSeatId) ?? chatSeats[0] ?? modelSeats[0],
    [chatSeats, modelSeats, session.selectedModelSeatId],
  );
  const contextSources = useMemo(
    () =>
      memoryContext.events.filter(
        (event) =>
          memoryContext.retrievalPreview.includedSources.includes(event.sourceLabel) ||
          event.modelSeatId === selectedSeat?.id,
      ),
    [memoryContext.events, memoryContext.retrievalPreview.includedSources, selectedSeat?.id],
  );

  function updateSelectedSeat(seatId: string) {
    onSessionChange({ ...session, selectedModelSeatId: seatId });
  }

  function sendPlaceholderMessage() {
    const trimmed = draft.trim();
    if (!trimmed || !selectedSeat) return;

    const userMessage: ChatMessage = {
      id: newMessageId("user"),
      role: "user",
      content: trimmed,
      createdAt: "Local shell state",
      modelSeatId: selectedSeat.id,
    };
    const assistantMessage: ChatMessage = {
      id: newMessageId("assistant"),
      role: "assistant",
      content:
        selectedSeat.setupStatus === "configured"
          ? `Layer 5 placeholder response using the ${selectedSeat.label} shell selection. A later runtime layer could combine selected context sources; no provider or retrieval service was called.`
          : `Layer 5 placeholder response: ${selectedSeat.label} is ${selectedSeat.setupStatus}, so a later runtime layer would ask for setup before calling a model or context service.`,
      createdAt: "Local shell state",
      modelSeatId: selectedSeat.id,
    };

    onSessionChange({
      ...session,
      messages: [...session.messages, userMessage, assistantMessage],
    });
    setDraft("");
  }

  return (
    <section className="page-section chat-shell">
      <div className="intro-row">
        <div>
          <p className="section-label">Public Layer 5</p>
          <h2>Main Chat shell</h2>
          <p>
            Main Chat is the operator middle-person between you and the workstation. This shell captures local
            placeholder messages and previews which context sources a runtime layer could include.
          </p>
        </div>
        <aside className="status-card">
          <span>Layer boundary</span>
          <strong>Layer 5 preview - no real memory retrieval or live model calls yet.</strong>
        </aside>
      </div>

      <div className="chat-layout">
        <section className="chat-transcript" aria-label="Local placeholder chat transcript">
          {session.messages.map((message) => (
            <article className={`chat-message ${message.role}`} key={message.id}>
              <div>
                <strong>{message.role === "user" ? "You" : "Sparkbot Shell"}</strong>
                <small>{message.createdAt}</small>
              </div>
              <p>{message.content}</p>
            </article>
          ))}
        </section>

        <aside className="chat-side-panel">
          <label>
            <span>Selected model seat</span>
            <select value={selectedSeat?.id ?? ""} onChange={(event) => updateSelectedSeat(event.currentTarget.value)}>
              {chatSeats.map((seat) => (
                <option value={seat.id} key={seat.id}>
                  {seat.label}
                </option>
              ))}
            </select>
          </label>

          {selectedSeat ? (
            <div className="selected-seat-summary">
              <div className="card-heading">
                <div>
                  <h3>{selectedSeat.label}</h3>
                  <p>{selectedSeat.modelId}</p>
                </div>
                <StatusBadge status={selectedSeat.setupStatus} />
              </div>
              {selectedSeat.setupStatus !== "configured" ? (
                <SetupNotice
                  notice={{
                    title: "Setup needed before live runtime use",
                    message: selectedSeat.setupMessage,
                    severity: selectedSeat.setupStatus === "disabled" ? "blocked" : "warning",
                  }}
                />
              ) : null}
            </div>
          ) : null}

          <div className="chip-group" aria-label="Context placeholders">
            {contextChips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>

          <section className="context-handoff-panel">
            <div>
              <p className="section-label">Context available</p>
              <h3>Main Chat handoff preview</h3>
              <p>These are demo source labels only. No memory query runs.</p>
            </div>
            {contextSources.slice(0, 3).map((event) => (
              <article className="context-mini-card" key={event.id}>
                <strong>{event.title}</strong>
                <span>{event.sourceLabel}</span>
                <small>{event.sensitivity}</small>
              </article>
            ))}
            <div className="runtime-boundary compact">
              <strong>Excluded/redacted</strong>
              <p>{memoryContext.retrievalPreview.excludedSources.join(", ")}</p>
            </div>
          </section>
        </aside>
      </div>

      <form
        className="chat-composer"
        onSubmit={(event) => {
          event.preventDefault();
          sendPlaceholderMessage();
        }}
      >
        <label>
          <span>Local placeholder message</span>
          <textarea
            value={draft}
            onChange={(event) => setDraft(event.currentTarget.value)}
            placeholder="Ask Sparkbot Shell what this layer can do..."
            rows={3}
          />
        </label>
        <button type="submit">Send local placeholder</button>
      </form>

      <div className="runtime-boundary">
        <strong>Runtime boundary</strong>
        <p>
          Messages live only in React component state. They are not persisted, sent to a provider, saved to memory, or
          routed through connectors.
        </p>
      </div>
    </section>
  );
}
