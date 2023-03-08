export class InvalidURLError extends Error {}
export class InvalidMessageError extends Error {}

export class CannotFindDIDKeyPairIndex extends Error {}
export class CannotFindDIDPrivateKey extends Error {}
export class InvitationHasNoFromDIDError extends Error {}
export class NoValidServiceEndpointError extends Error {}
export class InvitationIsInvalidError extends Error {}
export class NoConnectionOpenError extends Error {}
export class NoHandshakeResponseError extends Error {}
export class UnknownInvitationTypeError extends Error {}
export class UnknownPrismOnboardingTypeError extends Error {}
export class FailedToOnboardError extends Error {}
export class InvalidPickupDeliveryMessageError extends Error {
  constructor() {
    super("Invalid Pickup message type received");
  }
}
export class InvalidOfferCredentialMessageError extends Error {}

export class InvalidProposedCredentialMessageError extends Error {}
export class InvalidIssueCredentialMessageError extends Error {}
export class InvalidRequestCredentialMessageError extends Error {}
export class InvalidPresentationMessageError extends Error {}
export class InvalidRequestPresentationMessageError extends Error {}
export class InvalidProposePresentationMessageError extends Error {}
export class InvalidMediationGrantMessageError extends Error {}

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
    super("Error: parsed unknown Credential Body");
  }
}

export class InvalidCredentialFormats extends Error {
  constructor() {
    super("Invalid credential formats");
  }
}
export class NoMediatorAvailableError extends Error {}
export class MediationRequestFailedError extends Error {}
export class InvalidStepError extends Error {}
export class UnsupportedAttachmentType extends Error {}
