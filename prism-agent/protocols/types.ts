import { CredentialFormat } from "./issueCredential/CredentialFormat";
import { CredentialPreview } from "./issueCredential/CredentialPreview";

export interface CredentialBody {
  formats: CredentialFormat[];
  goalCode?: string;
  comment?: string;
}

export interface IssueCredentialBody extends CredentialBody {
  moreAvailable?: string;
  replacementId?: string;
}

export interface MediationGrantBody {
  routing_did: string;
}

export interface OfferCredentialBody extends CredentialBody {
  credentialPreview: CredentialPreview;
  replacementId?: string;
  multipleAvailable?: string;
}
export interface ProposeCredentialBody extends CredentialBody {
  credentialPreview: CredentialPreview;
}

export interface ParsedCredentialFormat<T> {
  body: T;
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

export interface RequestPresentationBody extends PresentationBody {
  willConfirm?: boolean;
  proofTypes: ProofTypes[];
}

export type ProposePresentationBody = RequestPresentationBody;

export interface ProofTypes {
  schema: string;
  requiredFields?: string[];
  trustIssuers?: string[];
}

export interface HandshakeRequestBody {
  goalCode?: string;
  goal?: string;
  accept?: string[];
}

export type OutOfBandInvitationBody = HandshakeRequestBody;
