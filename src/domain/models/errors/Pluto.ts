
export class DatabaseConnectionError extends Error { }
export class DatabaseContextError extends Error { }
export class DatabaseServiceAlreadyRunning extends Error { }

export class StoreInsertError extends Error { }
export class StoreQueryFailed extends Error { }
export class StoreUpdateError extends Error { }
export class StoreDeleteError extends Error { }

export class CredentialNotStorable extends Error { }
export class UnknownCredentialTypeError extends Error { }
export class InvalidCredentialJsonError extends Error { }
export class PrivateKeyNotStorable extends Error { }

export class InvalidHolderDIDNotPersistedError extends Error { }
export class MessageMissingFromOrToDIDError extends Error { }
export class DidPairIsNotPersistedError extends Error { }
export class HolderDIDAlreadyPairingError extends Error { }
