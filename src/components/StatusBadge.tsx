import type { ModelSeatSetupStatus } from "../types/shell";

type StatusBadgeProps = {
  status: ModelSeatSetupStatus;
};

const labels: Record<ModelSeatSetupStatus, string> = {
  configured: "Configured preview",
  setup_needed: "Setup needed",
  disabled: "Disabled",
  unreachable: "Unreachable",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return <span className={`status-badge ${status}`}>{labels[status]}</span>;
}
