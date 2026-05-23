import type { ModelSeat } from "../types/shell";
import { ModelSeatCard } from "./ModelSeatCard";

type InviteWingPanelProps = {
  modelSeats: ModelSeat[];
  onSelectSeat?: (seatId: string) => void;
};

export function InviteWingPanel({ modelSeats, onSelectSeat }: InviteWingPanelProps) {
  const visibleSeats = modelSeats.filter((seat) => seat.showInRoundTable || seat.showInSpecialtyWing || seat.showInChat);

  return (
    <section className="config-panel">
      <div className="card-heading">
        <div>
          <p className="section-label">Invite Wing</p>
          <h2>Customizable model seats</h2>
          <p>
            Model seats are named provider/runtime slots for Chat, Round Table, and Specialty Wing. They store labels,
            model IDs, and setup state only; no credentials are accepted.
          </p>
        </div>
      </div>

      <div className="mini-card-grid">
        {visibleSeats.map((seat) => (
          <ModelSeatCard key={seat.id} seat={seat} onSelect={onSelectSeat} />
        ))}
      </div>

      <div className="runtime-boundary compact">
        <strong>No credential capture</strong>
        <p>
          No subscription login, browser session, API key, or provider credential field is accepted by the public shell
          preview.
        </p>
      </div>
    </section>
  );
}
