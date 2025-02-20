export interface PrismRevocationBody {
  issueCredentialProtocolThreadId: string;
  comment?: string;
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

export interface PrismOnboardingInvitationBody {
  type: string;
  onboardingEndpoint: string;
  from: string;
}

export interface BasicMessageBody {
  content: string;
}

export interface ProblemReportBody {
  code: string,
  comment: string,
  args: string[],
  escalate_to: string;
}

export interface HandshakeRequestBody {
  goalCode?: string;
  goal?: string;
  accept?: string[];
}

export type OutOfBandInvitationBody = HandshakeRequestBody;
