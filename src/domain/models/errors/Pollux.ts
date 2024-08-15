export class InvalidCredentialError extends Error {
    constructor(message?: string) {
        super(message || "Invalid credential error");
    }
}

export class InvalidJWTString extends Error {
    constructor(message?: string) {
        super(message || "Invalid JWT string");
    }
}

export class InvalidPresentationProofArgs extends Error {
    constructor(message?: string) {
        super(message || "Invalid presentation proof arguments");
    }
}

export class CredentialRevocationTypeInvalid extends Error {
    constructor(message?: string) {
        super(message || "CredentialStatus revocation type not supported");
    }
}

export class InvalidCredentialStatus extends Error {
    constructor(message?: string) {
        super(message || "CredentialStatus status is invalid");
    }
}

export class InvalidRevocationStatusResponse extends Error {
    constructor(message?: string) {
        super(message || "CredentialStatus response is invalid");
    }
}

export class InvalidRevocationStatusResponseSignature extends Error {
    constructor(message?: string) {
        super(message || "CredentialStatus response proof signatue mismatch or invalid.");
    }
}

export class CredentialTypeNotSupported extends Error {
    constructor(message?: string) {
        super(message || "Credential type not supported");
    }
}

export class InvalidPresentationDefinitionError extends Error {
    constructor(message?: string) {
        super(message || "Invalid Presentation definition error");
    }
}

export class NoDomainOrChallengeFound extends Error {
    constructor(message?: string) {
        super(message || "No domain or challenge found");
    }
}

export class InvalidVerifyFormatError extends Error {
    constructor(public reason: string) {
        super(`Verification format is invalid: reason -> ${reason}`)
    }
}

export class InvalidVerifyCredentialError extends Error {
    constructor(credentialId: string, public reason: string) {
        super(`Verification failed for credential (${credentialId.slice(0, 10)}...): reason -> ${reason}`)
    }
}

export class InvalidPresentationError extends Error {
    constructor(message?: string) {
        super(message || "Invalid Presentation Definition object")
    }
}

export class InvalidDescriptorFormatError extends Error {
    constructor(message?: string) {
        super(message || "Invalid Descriptor format")
    }
}

/**
 * general Revocation error, message should contain details
 */
export class RevocationError extends Error {}
