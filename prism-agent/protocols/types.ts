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
  routingDid: string;
}

export interface OfferCredentialBody extends CredentialBody {
  credentialPreview: CredentialPreview;
  replacementId?: string;
  multipleAvailable?: string;
}
export interface ProposeCredentialBody extends CredentialBody {
  credentialPreview: CredentialPreview;
}

export type CredentialBodyTypes =
  | IssueCredentialBody
  | OfferCredentialBody
  | ProposeCredentialBody
  | CredentialBody;

export interface ParsedCredentialFormat<T> {
  body: T;
}

export interface MediationKeysUpdateListBody {
  updates: Array<{
    recipientDid: string;
    action: "add";
  }>;
}

export interface PickupReceivedBody {
  messageIdList: string[];
}

export interface PickupRequestBody {
  recipientKey?: string;
  limit: string;
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
