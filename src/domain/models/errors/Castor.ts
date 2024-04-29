export class InvalidLongFormDID extends Error {
  constructor(message?: string) {
    super(message || "Invalid long form DID");
  }
}

export class MethodIdIsDoesNotSatisfyRegex extends Error {
  constructor(message?: string) {
    super(message || "Method ID does not satisfy regex");
  }
}

export class InvalidPublicKeyEncoding extends Error {
  constructor(message?: string) {
    super(message || "Invalid public key encoding");
  }
}

export class ExpectedCompressedKey extends Error {
  constructor(message?: string) {
    super(message || "Expected compressed key");
  }
}

export class InvalidDIDString extends Error {
  constructor(message?: string) {
    super(message || "Invalid DID string");
  }
}

export class InitialStateOfDIDChanged extends Error {
  constructor(message?: string) {
    super(message || "Initial state of DID changed");
  }
}

export class NotPossibleToResolveDID extends Error {
  constructor(message?: string) {
    super(message || "Not possible to resolve DID");
  }
}

export class InvalidJWKKeysError extends Error {
  constructor(message?: string) {
    super(message || "Invalid JWK keys");
  }
}

export class InvalidKeyError extends Error {
  constructor(message?: string) {
    super(message || "Invalid key");
  }
}

export class InvalidPeerDIDError extends Error {
  constructor(message?: string) {
    super(message || "Invalid peer DID");
  }
}
