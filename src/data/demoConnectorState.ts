import type { ConnectorCard, ConnectorGateStep } from "../types/connectors";

export const demoConnectorCards: ConnectorCard[] = [
  {
    id: "connector-telegram",
    kind: "telegram",
    label: "Telegram",
    setupStatus: "setup_needed",
    identityStatus: "unlinked",
    recallPolicy: "private_recall_requires_linked_identity",
    pinSession: "required",
    deliveryStatus: "setup_needed",
    caveat:
      "Private recall requires an allowed chat/operator mapping first, then step-up PIN when the runtime policy asks for it. No bot credential or chat target exists here.",
    supportedFeatures: ["Public command preview", "App fallback", "Private recall gate preview"],
  },
  {
    id: "connector-discord",
    kind: "discord",
    label: "Discord",
    setupStatus: "live_qa_unknown",
    identityStatus: "shared_channel_requires_pin",
    recallPolicy: "private_recall_blocked",
    pinSession: "required",
    deliveryStatus: "live_qa_unknown",
    caveat:
      "Shared guild/channel private recall fails closed in this shell. A future DM plus linked identity and PIN session is the safer preview path.",
    supportedFeatures: ["Shared-channel block", "DM + PIN recommendation", "Pending approval caveat"],
  },
  {
    id: "connector-slack",
    kind: "slack",
    label: "Slack",
    setupStatus: "live_qa_unknown",
    identityStatus: "shared_channel_requires_pin",
    recallPolicy: "private_recall_requires_linked_identity",
    pinSession: "required",
    deliveryStatus: "live_qa_unknown",
    caveat:
      "A future runtime must verify request authenticity, allowed channel/user, linked owner, and optional PIN session. The shell does not synthesize an owner.",
    supportedFeatures: ["Allowed channel preview", "Allowed user preview", "No synthetic owner"],
  },
  {
    id: "connector-whatsapp",
    kind: "whatsapp",
    label: "WhatsApp",
    setupStatus: "setup_needed",
    identityStatus: "allowed_phone",
    recallPolicy: "private_recall_requires_pin",
    pinSession: "required",
    deliveryStatus: "live_qa_unknown",
    caveat:
      "Future setup requires request verification and an allowed phone identity before private recall. PIN remains step-up verification when needed.",
    supportedFeatures: ["Allowed phone preview", "PIN gate preview", "No webhook runtime"],
  },
  {
    id: "connector-sms",
    kind: "sms",
    label: "SMS / text",
    setupStatus: "unsupported",
    identityStatus: "blocked",
    recallPolicy: "unsupported",
    pinSession: "not_applicable",
    deliveryStatus: "unsupported",
    caveat:
      "Future/unsupported. Any later SMS provider must follow the same identity, PIN, and fail-closed private recall pattern.",
    supportedFeatures: ["Future status only", "No provider", "No phone target"],
  },
];

export const demoConnectorGateSteps: ConnectorGateStep[] = [
  {
    id: "gate-request",
    label: "Request private meeting recall",
    detail: "Connector asks for private meeting context in a future runtime.",
    status: "not_started",
  },
  {
    id: "gate-identity",
    label: "Check connector identity",
    detail: "Private recall requires linked operator, allowed user/channel, or allowed phone identity.",
    status: "requires_identity",
  },
  {
    id: "gate-pin",
    label: "Step-up PIN if policy requires it",
    detail: "PIN is time-limited step-up verification, not a replacement for connector authenticity.",
    status: "requires_pin",
  },
  {
    id: "gate-allow",
    label: "Allow only after gate",
    detail: "Private recall can proceed only after identity and policy checks pass in a later runtime.",
    status: "future_allowed",
  },
  {
    id: "gate-expire",
    label: "Session expires",
    detail: "A future PIN session must expire and return private recall to fail-closed.",
    status: "expired",
  },
];
