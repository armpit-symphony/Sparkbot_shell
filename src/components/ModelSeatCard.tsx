import { StatusBadge } from "./StatusBadge";
import type { ModelSeat } from "../types/shell";

type ModelSeatCardProps = {
  seat: ModelSeat;
  selected?: boolean;
  onSelect?: (seatId: string) => void;
};

export function ModelSeatCard({ seat, selected = false, onSelect }: ModelSeatCardProps) {
  return (
    <article className={selected ? "model-seat-card selected" : "model-seat-card"}>
      <div className="card-heading">
        <div>
          <h3>{seat.label}</h3>
          <div className="model-seat-meta" aria-label="Model seat provider and model ID">
            <span>Provider: {seat.provider}</span>
            <span>Model ID: {seat.modelId}</span>
          </div>
        </div>
        <StatusBadge status={seat.setupStatus} />
      </div>

      <div className="seat-flags">
        <span>{seat.enabled ? "Enabled" : "Disabled"}</span>
        <span>{seat.showInChat ? "Chat" : "Chat hidden"}</span>
        <span>{seat.showInRoundTable ? "Round Table" : "Round Table hidden"}</span>
        <span>{seat.showInSpecialtyWing ? "Specialty Wing" : "Specialty Wing hidden"}</span>
      </div>

      <p>{seat.setupMessage}</p>
      <small>{seat.notes}</small>

      {onSelect ? (
        <button className="text-button" type="button" onClick={() => onSelect(seat.id)}>
          {selected ? "Selected" : "Edit seat preview"}
        </button>
      ) : null}
    </article>
  );
}
