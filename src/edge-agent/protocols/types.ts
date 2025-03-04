export interface PrismRevocationBody {
  issueCredentialProtocolThreadId: string;
  comment?: string;
}

export interface MediationGrantBody {
  routing_did: string;
}

export interface MediationKeysUpdateListBody {
  updates: Array<{
    recipient_did: string;
    action: "add";
  }>;
}

export interface PickupReceivedBody {
  messageIdList: string[];
}

export interface PickupRequestBody {
  recipientKey?: string;
  limit: number;
}

export interface PickupAttachment {
  attachmentId: string;
  data: string;
}

export interface HandshakeRequestBody {
  goalCode?: string;
  goal?: string;
  accept?: string[];
}
