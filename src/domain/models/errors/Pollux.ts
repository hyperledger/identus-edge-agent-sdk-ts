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

export class CredentialTypeNotSupported extends Error {
    constructor(message?: string) {
        super(message || "Credential type not supported");
    }
}

export class InvalidJWTPresentationDefinitionError extends Error {
    constructor(message?: string) {
        super(message || "Invalid JWT presentation definition error");
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