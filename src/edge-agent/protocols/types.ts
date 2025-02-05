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

export interface PrismOnboardingInvitationBody {
  type: string;
  onboardingEndpoint: string;
  from: string;
}

export interface PresentationBody {
  goalCode?: string;
  comment?: string;
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

export interface RequestPresentationBody extends PresentationBody {
  willConfirm?: boolean;
  proofTypes: ProofTypes[];
}

export type ProposePresentationBody = RequestPresentationBody;

export interface ProofTypes {
  schema?: string;
  requiredFields?: string[];
  trustIssuers?: string[];
}


export interface HandshakeRequestBody {
  goalCode?: string;
  goal?: string;
  accept?: string[];
}

export type OutOfBandInvitationBody = HandshakeRequestBody;
