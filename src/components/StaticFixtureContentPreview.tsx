import { demoFileCards, demoMemoryCards, demoRoomFixture, demoTaskCards } from "../data/demoFixtureContent";

export function StaticFixtureContentPreview() {
  return (
    <>
      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Demo Fixture Story</p>
            <h2>Files, memory, and tasks support one room</h2>
            <p>
              These fixtures are tied to the same Round Table storyline. They show what users can inspect now and what
              will require runtime contracts later.
            </p>
          </div>
        </div>
        <div className="demo-story-grid">
          <article>
            <strong>Input files</strong>
            <p>Meeting source docs are shown as static cards.</p>
          </article>
          <article>
            <strong>Memory context</strong>
            <p>Preferences and caveats shape how recommendations are written.</p>
          </article>
          <article>
            <strong>Task follow-up</strong>
            <p>Post-meeting work is visible without scheduling or sends.</p>
          </article>
        </div>
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Files / Knowledge Preview</p>
            <h2>Document workspace fixtures</h2>
            <p>Static cards only. No live upload, backend indexing, or persistence.</p>
          </div>
        </div>
        <div className="fixture-grid">
          {demoFileCards.map((file) => (
            <article className="fixture-card" key={file.title}>
              <div className="card-heading">
                <strong>{file.title}</strong>
                <span className="fixture-type">{file.type}</span>
              </div>
              <p>{file.notes}</p>
              <div className="fixture-badges">
                <span className="status-badge configured">{file.status}</span>
                {file.tags.map((tag) => (
                  <small key={`${file.title}-${tag}`}>{tag}</small>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Memory Preview</p>
            <h2>Context shelf fixtures</h2>
            <p>Memory examples are local fixtures only. No live memory writes, retrieval runtime, or persistence.</p>
          </div>
        </div>
        <div className="fixture-grid">
          {demoMemoryCards.map((memory) => (
            <article className="fixture-card" key={memory.title}>
              <div className="card-heading">
                <strong>{memory.title}</strong>
                <span className="status-badge setup_needed">{memory.state}</span>
              </div>
              <p>{memory.summary}</p>
              <div className="fixture-badges">
                <small>{`confidence ${memory.confidence}`}</small>
                <small>{memory.caveat}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Tasks / Reminders Preview</p>
            <h2>Task board fixtures</h2>
            <p>No scheduler, reminders runtime, or connector sends exist in this shell.</p>
          </div>
        </div>
        <div className="fixture-grid">
          {demoTaskCards.map((task) => (
            <article className="fixture-card" key={task.title}>
              <div className="card-heading">
                <strong>{task.title}</strong>
                <span className="status-badge">{task.state}</span>
              </div>
              <p>{`Owner: ${task.owner}`}</p>
              <small>{task.due}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Demo Room Context</p>
            <h2>{demoRoomFixture.title}</h2>
            <p>One static room ties files, memory, tasks, Round Table recommendation, and future-gated controls.</p>
          </div>
        </div>
        <div className="demo-room-grid">
          <article className="fixture-card">
            <strong>Participating agents</strong>
            <p>{demoRoomFixture.agents.join(", ")}</p>
          </article>
          <article className="fixture-card">
            <strong>Files in room</strong>
            <p>{demoRoomFixture.files.join(", ")}</p>
          </article>
          <article className="fixture-card">
            <strong>Memory context</strong>
            <p>{demoRoomFixture.memories.join(", ")}</p>
          </article>
          <article className="fixture-card">
            <strong>Tasks</strong>
            <p>{demoRoomFixture.tasks.join(", ")}</p>
          </article>
          <article className="fixture-card">
            <strong>Round Table outcome</strong>
            <p>{demoRoomFixture.roundTableOutcome}</p>
          </article>
          <article className="fixture-card">
            <strong>Safety + future gate</strong>
            <p>{demoRoomFixture.guardianPosture}</p>
            <small>{demoRoomFixture.limaReadiness}</small>
          </article>
        </div>
        <div className="runtime-boundary compact">
          <strong>Fixture boundary</strong>
          <p>
            This room is fully static preview content. No upload, no memory persistence, no scheduling, no runtime
            dispatch, and no external API calls are active.
          </p>
        </div>
      </section>
    </>
  );
}
