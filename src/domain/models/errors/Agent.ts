export class InvalidURLError extends Error {
  constructor(message = "Invalid URL") {
    super(message);
  }
}

export class InvalidMessageError extends Error {
  constructor(message = "Invalid Message") {
    super(message);
  }
}

export class CannotFindDIDKeyPairIndex extends Error {
  constructor(message = "Can't find DID keypair index") {
    super(message);
  }
}

export class CannotFindDIDPrivateKey extends Error {
  constructor(message = "Can't find Private key") {
    super(message);
  }
}

export class CannotFindLinkSecret extends Error {
  constructor(message = "Cannot find link secret") {
    super(message);
  }
}

export class InvitationHasNoFromDIDError extends Error {
  constructor(message = "Invalid Invitation fromDID") {
    super(message);
  }
}

export class NoValidServiceEndpointError extends Error {
  constructor(message = "No Valid Service Endpoint") {
    super(message);
  }
}

export class InvitationIsInvalidError extends Error {
  constructor(message = "Invalid invitation") {
    super(message);
  }
}

export class NoConnectionOpenError extends Error {
  constructor(message = "No Connection Open") {
    super(message);
  }
}

export class NoHandshakeResponseError extends Error {
  constructor(message = "No Handshake Response") {
    super(message);
  }
}

export class UnknownInvitationTypeError extends Error {
  constructor(message = "Unknown Invitation Type") {
    super(message);
  }
}

export class UnknownPrismOnboardingTypeError extends Error {
  constructor() {
    super("Invalid InvitationType received");
  }
}
export class FailedToOnboardError extends Error {
  constructor(message?: string) {
    super(message || "Onboarding Error");
  }
}
export class InvalidPickupDeliveryMessageError extends Error {
  constructor() {
    super("Invalid Pickup message type received");
  }
}
export class OfferDoesntProvideEnoughInformation extends Error {
  constructor() {
    super("Offer does not provide enough information");
  }
}
export class InvalidOfferCredentialMessageError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Offer Credential Message");
  }
}

export class InvalidProposedCredentialMessageError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Propose Credential Message");
  }
}
export class InvalidIssueCredentialMessageError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Issue Credential Message");
  }
}
export class InvalidRequestCredentialMessageError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Request Credential Message");
  }
}
export class InvalidPresentationMessageError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Presentation Message");
  }
}
export class InvalidRequestPresentationMessageError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Request Presentation Message");
  }
}
export class InvalidProposePresentationMessageError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Propose Presentation Message");
  }
}
export class InvalidMediationGrantMessageError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Mediation Grand Message");
  }
}

export class InvalidCredentialBodyError extends Error {
  constructor(message?: string) {
    super(message || "Invalid CredentialBody Error");
  }
}
export class InvalidIssueCredentialBodyError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Issue CredentialBody Error");
  }
}
export class InvalidRequestCredentialBodyError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Request CredentialBody Error");
  }
}
export class InvalidRequestPresentationBodyError extends Error {
  constructor(message?: string) {
    super(message || "Invalid RequestPresentation body Error");
  }
}
export class InvalidProposePresentationBodyError extends Error {
  constructor(message?: string) {
    super(message || "Invalid ProposePresentation body Error");
  }
}
export class InvalidBasicMessageBodyError extends Error {
  constructor(message?: string) {
    super(message || "Invalid BasicMessage body Error");
  }
}
export class InvalidPresentationBodyError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Presentation body Error");
  }
}
export class InvalidProblemReportBodyError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Problem reporting body Error");
  }
}
export class InvalidProposeCredentialBodyError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Propose CredentialBody Error");
  }
}
export class InvalidOfferCredentialBodyError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Offer CredentialBody Error");
  }
}

export class InvalidMediationGrantBodyError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Offer CredentialBody Error");
  }
}

export class UnknownCredentialBodyError extends Error {
  constructor() {
    super("Unknown Credential Body Error");
  }
}

export class InvalidCredentialFormats extends Error {
  constructor() {
    super("Invalid credential formats");
  }
}
export class NoMediatorAvailableError extends Error {
  constructor(message?: string) {
    super(message || "No mediator available Error");
  }
}

export class MediationRequestFailedError extends Error {
  constructor(message?: string) {
    super(message || "MediationRequestFailed Error");
  }
}
export class InvalidStepError extends Error {
  constructor(message?: string) {
    super(message || "Invalid Step");
  }
}


export class UnsupportedAttachmentType extends Error {
  constructor(message?: string) {
    super(message || "Unsupported Attachment type");
  }
}

export class UnhandledCredential extends Error {
  constructor(message?: string) {
    super(message || "Invalid Credential format");
  }
}

export class UnhandledPresentationRequest extends Error {
  constructor(message?: string) {
    super(message || "Invalid Presentation request format");
  }
}

export class KeyNotExportableError extends Error {
  constructor() {
    super("Invalid Key found - not exportable");
  }
}

export class BackupVersionError extends Error {
  constructor() {
    super("Invalid Backup version");
  }
}
