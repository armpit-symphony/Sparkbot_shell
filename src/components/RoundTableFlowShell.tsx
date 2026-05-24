import type { MeetingNoteContract } from "../types/context";
import type {
  MeetingActionItem,
  MeetingDecision,
  MeetingOpenQuestion,
  ModelSeat,
  RoundTablePhase,
  RoundTableSeat,
  RoundTableShellState,
  SpecialtyAgent,
} from "../types/shell";
import { StatusBadge } from "./StatusBadge";
import { demoFileCards, demoMemoryCards, demoRoomFixture, demoTaskCards } from "../data/demoFixtureContent";

type RoundTableFlowShellProps = {
  roundTable: RoundTableShellState;
  modelSeats: ModelSeat[];
  specialtyAgents: SpecialtyAgent[];
  meetingNoteContract: MeetingNoteContract;
  onRoundTableChange: (roundTable: RoundTableShellState) => void;
};

const phases: Array<{ id: RoundTablePhase; label: string; description: string }> = [
  { id: "setup", label: "Launch", description: "Choose task, chair, agents, and model-seat assignments." },
  { id: "first_pass", label: "Framing", description: "Participants frame the task and surface initial context." },
  { id: "manager_assessment", label: "Synthesis", description: "Meeting Manager groups signals and sets direction." },
  { id: "assignments", label: "Assignments", description: "Specialists receive focused follow-up cards." },
  { id: "second_pass", label: "Perspectives", description: "Participants answer their assigned perspectives." },
  { id: "wrap_up", label: "Recommendation", description: "Meeting Manager produces recommendation and next steps." },
  { id: "notes", label: "Artifact", description: "Editable output preview for later memory/context rollup." },
];

const roundTableStageRail = [
  { key: "task_intake", label: "Task intake", description: "Owner defines mission and constraints." },
  { key: "framing", label: "Framing", description: "Seats frame context and assumptions." },
  { key: "perspectives", label: "Specialist perspectives", description: "Each seat contributes focused analysis." },
  { key: "synthesis", label: "Synthesis", description: "Chair combines viewpoints and tradeoffs." },
  { key: "assignments", label: "Assignments", description: "Follow-up work is assigned per seat." },
  { key: "recommendation", label: "Recommendation", description: "Chair proposes a decision path." },
  { key: "artifact", label: "Artifact / notes", description: "Recommendation note preview is edited." },
] as const;

function linesToDecisions(value: string): MeetingDecision[] {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((text, index) => ({ id: `note-decision-${index + 1}`, text }));
}

function linesToActionItems(value: string): MeetingActionItem[] {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((text, index) => ({
      id: `note-action-${index + 1}`,
      owner: "Meeting Manager",
      text,
      dueLabel: "Runtime layer later",
    }));
}

function linesToOpenQuestions(value: string): MeetingOpenQuestion[] {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((text, index) => ({ id: `note-question-${index + 1}`, text }));
}

function listText(items: Array<{ text: string }>) {
  return items.map((item) => item.text).join("\n");
}

function nextStepsText(items: string[]) {
  return items.join("\n");
}

export function RoundTableFlowShell({
  roundTable,
  modelSeats,
  specialtyAgents,
  meetingNoteContract,
  onRoundTableChange,
}: RoundTableFlowShellProps) {
  const roundTableModelSeats = modelSeats.filter((seat) => seat.showInRoundTable);
  const managerSeat = roundTable.seats.find((seat) => seat.seatNumber === 1);
  const enabledRoundTableModelSeats = roundTableModelSeats.filter((seat) => seat.enabled);
  const assignmentCount = roundTable.assignments.length;
  const followUpPreview = demoTaskCards.slice(0, 3);

  function updateRoundTable(patch: Partial<RoundTableShellState>) {
    onRoundTableChange({ ...roundTable, ...patch });
  }

  function agentForSeat(seat: RoundTableSeat) {
    return specialtyAgents.find((agent) => agent.id === seat.agentId);
  }

  function modelSeatForSeat(seat: RoundTableSeat) {
    return modelSeats.find((modelSeat) => modelSeat.id === seat.modelSeatId);
  }

  function updateSeat(seatId: string, patch: Partial<RoundTableSeat>) {
    updateRoundTable({
      seats: roundTable.seats.map((seat) => {
        if (seat.id !== seatId) return seat;
        const nextSeat = { ...seat, ...patch };
        const nextAgent = specialtyAgents.find((agent) => agent.id === nextSeat.agentId);
        return {
          ...nextSeat,
          roleLabel: patch.agentId && nextAgent ? nextAgent.role : nextSeat.roleLabel,
        };
      }),
    });
  }

  function addSeat() {
    const usedAgentIds = new Set(roundTable.seats.map((seat) => seat.agentId));
    const nextAgent =
      specialtyAgents.find((agent) => !agent.defaultSeat && !usedAgentIds.has(agent.id)) ??
      specialtyAgents.find((agent) => agent.id === "agent-custom-placeholder") ??
      specialtyAgents[0];
    const nextModelSeat =
      roundTableModelSeats.find((seat) => seat.setupStatus === "configured") ?? roundTableModelSeats[0] ?? modelSeats[0];
    const nextSeatNumber = Math.max(...roundTable.seats.map((seat) => seat.seatNumber)) + 1;
    const nextSeatId =
      Math.max(
        0,
        ...roundTable.seats.map((seat) => {
          const match = seat.id.match(/^rt-seat-(\d+)$/);
          return match ? Number(match[1]) : 0;
        }),
      ) + 1;

    updateRoundTable({
      seats: [
        ...roundTable.seats,
        {
          id: `rt-seat-${nextSeatId}`,
          seatNumber: nextSeatNumber,
          agentId: nextAgent.id,
          modelSeatId: nextModelSeat.id,
          roleLabel: nextAgent.role,
        },
      ],
    });
  }

  function removeSeat(seatId: string) {
    updateRoundTable({
      seats: roundTable.seats
        .filter((seat) => seat.id !== seatId || seat.locked)
        .map((seat, index) => ({ ...seat, seatNumber: index + 1 })),
    });
  }

  function assignmentSeatLabel(seatId: string) {
    const seat = roundTable.seats.find((candidate) => candidate.id === seatId);
    const agent = seat ? agentForSeat(seat) : undefined;
    return seat && agent ? `Seat ${seat.seatNumber}: ${agent.name}` : "Unassigned shell seat";
  }

  function setPhase(phase: RoundTablePhase) {
    updateRoundTable({ currentPhase: phase });
  }

  function saveNotesPreview() {
    updateRoundTable({
      notes: {
        ...roundTable.notes,
        status: "saved_preview",
      },
    });
  }

  return (
    <section className="page-section roundtable-shell">
      <div className="intro-row">
        <div>
          <p className="section-label">Public Layer 4</p>
          <h2>Round Table agent meeting demo</h2>
          <p>
            Round Table is the hero feature: Meeting Manager chairs the room, specialist seats contribute
            perspectives, and the shell previews a recommendation artifact without live runtime calls.
          </p>
        </div>
        <aside className="status-card">
          <span>Demo boundary</span>
          <strong>Static meeting simulation only. No live agent calls, rooms API, or persistence.</strong>
        </aside>
      </div>

      <section className="config-panel roundtable-command-deck">
        <div className="card-heading">
          <div>
            <p className="section-label">Round Table command deck</p>
            <h2>Chair-led meeting flow for decisions and follow-up</h2>
            <p>
              Manual static adaptation from R&D meeting layout concepts only. The room does not run a heartbeat,
              stream, or backend scheduler.
            </p>
          </div>
          <a className="text-button" href="#/workstation">
            Back to Workstation floor
          </a>
        </div>
        <div className="roundtable-stage-rail">
          {roundTableStageRail.map((stage, index) => (
            <article key={stage.key}>
              <span>{index + 1}</span>
              <strong>{stage.label}</strong>
              <p>{stage.description}</p>
            </article>
          ))}
        </div>
        <div className="roundtable-runtime-badges">
          <span>Static preview</span>
          <span>Demo fixture</span>
          <span>No live agent calls</span>
          <span>No model/provider calls</span>
          <span>No meeting heartbeat runtime</span>
          <span>No task scheduling</span>
          <span>No persistence</span>
          <span>No backend runtime</span>
        </div>
      </section>

      <section className="demo-story-grid" aria-label="Round Table stage storyline">
        <article>
          <strong>Framing</strong>
          <p>Define the task and shared context for all seats.</p>
        </article>
        <article>
          <strong>Perspectives</strong>
          <p>Specialist seats return focused viewpoints.</p>
        </article>
        <article>
          <strong>Synthesis</strong>
          <p>Meeting Manager combines findings into direction.</p>
        </article>
        <article>
          <strong>Assignments</strong>
          <p>Follow-up cards mark what needs deeper review.</p>
        </article>
        <article>
          <strong>Recommendation</strong>
          <p>Wrap-up includes decisions, actions, and open questions.</p>
        </article>
        <article>
          <strong>Artifact</strong>
          <p>Editable recommendation note remains local preview data.</p>
        </article>
      </section>

      <section className="roundtable-overview-grid" aria-label="Round Table meeting summary">
        <article>
          <span>Meeting mission</span>
          <strong>{roundTable.title}</strong>
          <p>{roundTable.problem}</p>
        </article>
        <article>
          <span>Chair / meeting manager</span>
          <strong>{managerSeat ? assignmentSeatLabel(managerSeat.id) : "Meeting Manager"}</strong>
          <p>Seat 1 coordinates framing, synthesis, assignments, recommendation, and notes.</p>
        </article>
        <article>
          <span>Output preview</span>
          <strong>Recommendation artifact</strong>
          <p>Wrap-up, decisions, action items, and open questions stay local until a future runtime exists.</p>
        </article>
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Owner interrupt posture</p>
            <h2>Owner can redirect meeting direction</h2>
            <p>
              This preview shows where owner interruptions would land in a live room. No message stream, websocket,
              or runtime loop exists here.
            </p>
          </div>
        </div>
        <div className="owner-interrupt-grid">
          <article className="flow-card">
            <strong>Interrupt concept</strong>
            <p>Owner can pause and redirect scope before recommendation finalization.</p>
            <small>Demo-only marker. No live interrupt handling.</small>
          </article>
          <article className="flow-card">
            <strong>Current stage</strong>
            <p>{phases.find((phase) => phase.id === roundTable.currentPhase)?.label}</p>
            <small>Local state only.</small>
          </article>
          <article className="flow-card">
            <strong>Follow-up cards</strong>
            <p>{assignmentCount} assignment previews are staged in this meeting shell.</p>
            <small>No task runtime writes or scheduling.</small>
          </article>
        </div>
      </section>

      <div className="phase-nav" aria-label="Round Table phases">
        {phases.map((phase) => (
          <button
            className={roundTable.currentPhase === phase.id ? "phase-button active" : "phase-button"}
            key={phase.id}
            onClick={() => setPhase(phase.id)}
            type="button"
          >
            <span>{phase.label}</span>
            <small>{phase.description}</small>
          </button>
        ))}
      </div>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Launch setup</p>
            <h2>Meeting topic and seats</h2>
            <p>Local component state only. Launching advances stages and does not create a live room.</p>
          </div>
          <span className="status-badge setup_needed">Static preview</span>
        </div>

        <div className="form-grid">
          <label>
            <span>Meeting title</span>
            <input
              value={roundTable.title}
              onChange={(event) => updateRoundTable({ title: event.currentTarget.value })}
            />
          </label>
          <label>
            <span>Current phase</span>
            <select
              value={roundTable.currentPhase}
              onChange={(event) => setPhase(event.currentTarget.value as RoundTablePhase)}
            >
              {phases.map((phase) => (
                <option value={phase.id} key={phase.id}>
                  {phase.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label>
          <span>Problem / goal</span>
          <textarea
            rows={3}
            value={roundTable.problem}
            onChange={(event) => updateRoundTable({ problem: event.currentTarget.value })}
          />
        </label>

        <div className="seat-assignment-grid">
          {roundTable.seats.map((seat) => {
            const agent = agentForSeat(seat);
            const selectedModelSeat = modelSeatForSeat(seat);

            return (
              <article className="roundtable-seat-card" key={seat.id}>
                <div className="card-heading">
                  <div>
                    <span className="seat-marker">Seat {seat.seatNumber}</span>
                    <h3>{agent?.name ?? "Unassigned agent"}</h3>
                    <p>{seat.roleLabel}</p>
                  </div>
                  {selectedModelSeat ? <StatusBadge status={selectedModelSeat.setupStatus} /> : null}
                </div>

                <div className="form-grid compact">
                  <label>
                    <span>Agent</span>
                    <select
                      value={seat.agentId}
                      onChange={(event) => updateSeat(seat.id, { agentId: event.currentTarget.value })}
                      disabled={seat.locked}
                    >
                      {specialtyAgents.map((agentOption) => (
                        <option value={agentOption.id} key={agentOption.id}>
                          {agentOption.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span>Model seat</span>
                    <select
                      value={seat.modelSeatId}
                      onChange={(event) => updateSeat(seat.id, { modelSeatId: event.currentTarget.value })}
                    >
                      {roundTableModelSeats.map((modelSeat) => (
                        <option value={modelSeat.id} key={modelSeat.id} disabled={!modelSeat.enabled}>
                          {modelSeat.label}
                          {!modelSeat.enabled ? " (disabled preview)" : ""}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <p>{agent?.description ?? "Select an agent for this local-only seat."}</p>
                {selectedModelSeat && selectedModelSeat.setupStatus !== "configured" ? (
                  <small>{selectedModelSeat.setupMessage}</small>
                ) : null}

                {!seat.locked ? (
                  <button className="text-button" type="button" onClick={() => removeSeat(seat.id)}>
                    Remove shell seat
                  </button>
                ) : (
                  <small>Meeting Manager is locked as default Seat 1.</small>
                )}
              </article>
            );
          })}
        </div>

        <div className="button-row">
          <button type="button" onClick={addSeat}>
            Add shell seat
          </button>
          <button type="button" onClick={() => setPhase("first_pass")}>
            Launch demo flow
          </button>
        </div>
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Seats and models</p>
            <h2>Agent chairs and model stack alignment</h2>
            <p>
              Seat cards show who is participating and which model seats are in scope. This is visual planning only,
              not runtime model execution.
            </p>
          </div>
        </div>
        <div className="roundtable-seat-summary-grid">
          {roundTable.seats.map((seat) => {
            const seatAgent = specialtyAgents.find((agent) => agent.id === seat.agentId);
            const seatModel = modelSeats.find((modelSeat) => modelSeat.id === seat.modelSeatId);
            return (
              <article className="flow-card" key={`summary-${seat.id}`}>
                <strong>{`Seat ${seat.seatNumber}: ${seatAgent?.name ?? "Unassigned"}`}</strong>
                <p>{seat.roleLabel}</p>
                {seatModel ? <StatusBadge status={seatModel.setupStatus} /> : null}
                <small>{seatModel?.label ?? "No model seat selected"}</small>
              </article>
            );
          })}
          <article className="flow-card">
            <strong>Model seats in meeting</strong>
            <p>{enabledRoundTableModelSeats.length} enabled model seats are visible in this preview.</p>
            <small>No provider routing or calls are executed.</small>
          </article>
        </div>
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Meeting flow</p>
            <h2>{phases.find((phase) => phase.id === roundTable.currentPhase)?.label}</h2>
          </div>
          <span className="status-badge configured">Current phase</span>
        </div>

        {roundTable.currentPhase === "setup" ? (
          <div className="flow-card">
            <strong>Ready to preview</strong>
            <p>
              Seat 1 is {managerSeat ? assignmentSeatLabel(managerSeat.id) : "Meeting Manager"}. The launch button
              only advances local demo state and does not create a backend meeting.
            </p>
          </div>
        ) : null}

        {roundTable.currentPhase === "first_pass" ? (
          <div className="phase-card-grid">
            {roundTable.firstPassIdeas.map((idea) => (
              <article className="flow-card" key={idea.id}>
                <strong>{assignmentSeatLabel(idea.seatId)}</strong>
                <p>{idea.idea}</p>
              </article>
            ))}
          </div>
        ) : null}

        {roundTable.currentPhase === "manager_assessment" ? (
          <div className="flow-card manager-card">
            <strong>Meeting Manager assessment</strong>
            <p>{roundTable.managerAssessment}</p>
          </div>
        ) : null}

        {roundTable.currentPhase === "assignments" ? (
          <div className="phase-card-grid">
            {roundTable.assignments.map((assignment) => (
              <article className="flow-card" key={assignment.id}>
                <span className="status-badge setup_needed">{assignment.status}</span>
                <strong>{assignment.title}</strong>
                <small>{assignmentSeatLabel(assignment.assigneeSeatId)}</small>
                <p>{assignment.prompt}</p>
              </article>
            ))}
          </div>
        ) : null}

        {roundTable.currentPhase === "second_pass" ? (
          <div className="phase-card-grid">
            {roundTable.secondPassResponses.map((response) => {
              const assignment = roundTable.assignments.find((item) => item.id === response.assignmentId);
              return (
                <article className="flow-card" key={response.id}>
                  <strong>{assignment?.title ?? "Assignment response"}</strong>
                  <small>{assignmentSeatLabel(response.seatId)}</small>
                  <p>{response.response}</p>
                </article>
              );
            })}
          </div>
        ) : null}

        {roundTable.currentPhase === "wrap_up" ? (
          <div className="flow-card manager-card">
            <strong>Recommendation preview</strong>
            <p>{roundTable.wrapUp.summary}</p>
            <div className="notes-list-grid">
              <div>
                <h3>Decisions</h3>
                {roundTable.wrapUp.decisions.map((decision) => (
                  <p key={decision.id}>{decision.text}</p>
                ))}
              </div>
              <div>
                <h3>Action items</h3>
                {roundTable.wrapUp.actionItems.map((item) => (
                  <p key={item.id}>
                    {item.owner}: {item.text} ({item.dueLabel})
                  </p>
                ))}
              </div>
              <div>
                <h3>Open questions</h3>
                {roundTable.wrapUp.openQuestions.map((question) => (
                  <p key={question.id}>{question.text}</p>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {roundTable.currentPhase === "notes" ? (
          <MeetingNotesShell
            roundTable={roundTable}
            meetingNoteContract={meetingNoteContract}
            updateRoundTable={updateRoundTable}
            onSave={saveNotesPreview}
          />
        ) : null}
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Recommendation artifact + follow-up</p>
            <h2>Round Table output package (demo fixture)</h2>
            <p>
              The recommendation preview, follow-up tasks, and context sources are tied to the same demo room
              storyline.
            </p>
          </div>
        </div>
        <div className="roundtable-output-grid">
          <article className="flow-card">
            <strong>Recommendation artifact</strong>
            <p>{roundTable.wrapUp.summary}</p>
            <small>Draft artifact only. No persistence.</small>
          </article>
          <article className="flow-card">
            <strong>Follow-up tasks</strong>
            <p>{followUpPreview.map((task) => task.title).join(" | ")}</p>
            <small>No scheduler or task API.</small>
          </article>
          <article className="flow-card">
            <strong>Demo files</strong>
            <p>{demoFileCards.slice(0, 2).map((file) => file.title).join(" | ")}</p>
            <small>Files are static cards only.</small>
          </article>
          <article className="flow-card">
            <strong>Demo memories</strong>
            <p>{demoMemoryCards.slice(0, 2).map((memory) => memory.title).join(" | ")}</p>
            <small>No live memory writes.</small>
          </article>
          <article className="flow-card">
            <strong>Room context</strong>
            <p>{demoRoomFixture.title}</p>
            <small>{demoRoomFixture.roundTableOutcome}</small>
          </article>
          <article className="flow-card">
            <strong>Safety boundary</strong>
            <p>{demoRoomFixture.guardianPosture}</p>
            <small>No backend runtime active.</small>
          </article>
        </div>
      </section>

      <div className="runtime-boundary">
        <strong>Round Table boundary</strong>
        <p>
          This shell does not run agent meetings, call models, persist notes, write memory, send connector messages, or
          generate per-turn notes. The notes panel previews one editable Meeting Manager wrap-up only.
        </p>
      </div>
    </section>
  );
}

type MeetingNotesShellProps = {
  roundTable: RoundTableShellState;
  meetingNoteContract: MeetingNoteContract;
  updateRoundTable: (patch: Partial<RoundTableShellState>) => void;
  onSave: () => void;
};

function MeetingNotesShell({ roundTable, meetingNoteContract, updateRoundTable, onSave }: MeetingNotesShellProps) {
  const notes = roundTable.notes;

  function updateNotes(patch: Partial<typeof notes>) {
    updateRoundTable({ notes: { ...notes, ...patch } });
  }

  return (
    <div className="notes-editor">
      <div className="card-heading">
        <div>
          <h3>Meeting notes preview/edit shell</h3>
          <p>Meeting Manager will save/edit notes in a runtime layer. This shell does not write memory.</p>
        </div>
        <span className={notes.status === "saved_preview" ? "status-badge configured" : "status-badge setup_needed"}>
          {notes.status === "saved_preview" ? "Saved preview" : "Draft"}
        </span>
      </div>

      <label>
        <span>Summary</span>
        <textarea rows={4} value={notes.summary} onChange={(event) => updateNotes({ summary: event.currentTarget.value })} />
      </label>

      <div className="form-grid">
        <label>
          <span>Decisions</span>
          <textarea
            rows={5}
            value={listText(notes.decisions)}
            onChange={(event) => updateNotes({ decisions: linesToDecisions(event.currentTarget.value) })}
          />
        </label>
        <label>
          <span>Action items</span>
          <textarea
            rows={5}
            value={listText(notes.actionItems)}
            onChange={(event) => updateNotes({ actionItems: linesToActionItems(event.currentTarget.value) })}
          />
        </label>
        <label>
          <span>Next steps</span>
          <textarea
            rows={4}
            value={nextStepsText(notes.nextSteps)}
            onChange={(event) =>
              updateNotes({
                nextSteps: event.currentTarget.value
                  .split("\n")
                  .map((line) => line.trim())
                  .filter(Boolean),
              })
            }
          />
        </label>
        <label>
          <span>Open questions</span>
          <textarea
            rows={4}
            value={listText(notes.openQuestions)}
            onChange={(event) => updateNotes({ openQuestions: linesToOpenQuestions(event.currentTarget.value) })}
          />
        </label>
      </div>

      <div className="meeting-participant-strip">
        {roundTable.seats.map((seat) => (
          <span key={seat.id}>Seat {seat.seatNumber}</span>
        ))}
      </div>

      <div className="runtime-boundary compact">
        <strong>Memory rollup preview</strong>
        <p>
          {notes.memoryRollupLabel} Save/update later writes one deduped rollup to shared memory after redaction checks.
          Per-turn participant messages do not create meeting notes.
        </p>
      </div>

      <section className="meeting-contract-preview">
        <div className="card-heading">
          <div>
            <p className="section-label">MeetingNoteContract preview</p>
            <h3>{meetingNoteContract.title}</h3>
          </div>
          <span className="context-sensitivity operator_private">{meetingNoteContract.sensitivity}</span>
        </div>
        <p>{meetingNoteContract.redactionNote}</p>
        <div className="context-meta-row">
          <span>{notes.status === "saved_preview" ? "draft=false preview" : "draft=true"}</span>
          <span>{notes.status === "saved_preview" ? "memoryRollup=true preview" : "memoryRollup=false"}</span>
          <span>contract {meetingNoteContract.rollupState}</span>
          <span>{meetingNoteContract.redactionStatus}</span>
          <span>{meetingNoteContract.approvalRequired ? "approval required" : "approval not required"}</span>
          <span>{meetingNoteContract.lastEditedAt}</span>
        </div>
        <small>Allowed transition preview: draft -&gt; saved -&gt; published -&gt; retired.</small>
        <div className="meeting-participant-strip">
          {meetingNoteContract.participants.map((participant) => (
            <span key={`${participant.seatLabel}-${participant.actorLabel}`}>
              {participant.seatLabel}: {participant.actorLabel}
            </span>
          ))}
        </div>
      </section>

      <button type="button" onClick={onSave}>
        Mark local preview saved
      </button>
    </div>
  );
}
