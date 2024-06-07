export class DatabaseConnectionError extends Error {
    constructor(message?: string) {
        super(message || "Database connection error");
    }
}

export class DatabaseContextError extends Error {
    constructor(message?: string) {
        super(message || "Database context error");
    }
}

export class DatabaseServiceAlreadyRunning extends Error {
    constructor(message?: string) {
        super(message || "Database service already running");
    }
}

export class StoreInsertError extends Error {
    constructor(message?: string) {
        super(message || "Store insert error");
    }
}

export class StoreQueryFailed extends Error {
    constructor(message?: string) {
        super(message || "Store query failed");
    }
}

export class StoreUpdateError extends Error {
    constructor(message?: string) {
        super(message || "Store update error");
    }
}

export class StoreDeleteError extends Error {
    constructor(message?: string) {
        super(message || "Store delete error");
    }
}

export class CredentialNotStorable extends Error {
    constructor(message?: string) {
        super(message || "Credential not storable");
    }
}

export class UnknownCredentialTypeError extends Error {
    constructor(message?: string) {
        super(message || "Unknown credential type error");
    }
}

export class InvalidCredentialJsonError extends Error {
    constructor(message?: string) {
        super(message || "Invalid credential JSON error");
    }
}

export class PrivateKeyNotStorable extends Error {
    constructor(message?: string) {
        super(message || "Private key not storable");
    }
}

export class InvalidHolderDIDNotPersistedError extends Error {
    constructor(message?: string) {
        super(message || "Invalid holder DID not persisted error");
    }
}

export class MessageMissingFromOrToDIDError extends Error {
    constructor(message?: string) {
        super(message || "Message missing from or to DID error");
    }
}

export class DidPairIsNotPersistedError extends Error {
    constructor(message?: string) {
        super(message || "DID pair is not persisted error");
    }
}

export class HolderDIDAlreadyPairingError extends Error {
    constructor(message?: string) {
        super(message || "Holder DID already pairing error");
    }
}

export class RestoreCredentialInvalidError extends Error {
  constructor() {
    super("Pluto Restore - Credential invalid");
  }
}

export class RestoreJWKInvalidError extends Error {
  constructor() {
    super("Pluto Restore - JWK invalid");
  }
}

export class RestoreKeyInvalidError extends Error {
  constructor() {
    super("Pluto Restore - Key invalid");
  }
}

export class BackupNotFoundError extends Error {
  constructor() {
    super("Pluto Backup - Version not found");
  }
}

export class RestoreNotFoundError extends Error {
  constructor() {
    super("Pluto Restore - Version not found");
  }
}

export class StoreNotEmptyError extends Error {
  constructor() {
    super("Pluto Store not empty");
  }
}
