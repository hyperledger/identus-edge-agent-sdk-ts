
export class InvalidCredentialError extends Error { }
export class InvalidJWTString extends Error { }
export class InvalidPresentationProofArgs extends Error { }
export class CredsentialTypeNotSupported extends Error { }
export class InvalidJWTPresentationDefinitionError extends Error { }
export class NoDomainOrChallengeFound extends Error { }

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