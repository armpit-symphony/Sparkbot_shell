export type ConnectorKind = "telegram" | "discord" | "slack" | "whatsapp" | "sms";

export type ConnectorSetupStatus =
  | "not_configured"
  | "configured"
  | "setup_needed"
  | "live_qa_unknown"
  | "unsupported";

export type ConnectorIdentityStatus =
  | "unlinked"
  | "linked_operator"
  | "allowed_channel"
  | "allowed_user"
  | "allowed_phone"
  | "shared_channel_requires_pin"
  | "blocked";

export type ConnectorRecallPolicy =
  | "public_only"
  | "private_recall_requires_linked_identity"
  | "private_recall_requires_pin"
  | "private_recall_blocked"
  | "unsupported";

export type PinSessionPreview = "required" | "verified" | "expired" | "not_applicable";

export type ConnectorCard = {
  id: string;
  kind: ConnectorKind;
  label: string;
  setupStatus: ConnectorSetupStatus;
  identityStatus: ConnectorIdentityStatus;
  recallPolicy: ConnectorRecallPolicy;
  pinSession: PinSessionPreview;
  deliveryStatus: ConnectorSetupStatus;
  caveat: string;
  supportedFeatures: string[];
};

export type ConnectorGateStepStatus = "not_started" | "requires_identity" | "requires_pin" | "future_allowed" | "expired";

export type ConnectorGateStep = {
  id: string;
  label: string;
  detail: string;
  status: ConnectorGateStepStatus;
};
