export class InvalidMnemonicWord extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class CouldNotParseMessageString extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class InvalidPrivateKey extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class InvalidKeyCurve extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class InvalidDerivationPath extends Error {
  constructor(message?: string) {
    super(message);
  }
}

export class ECPublicKeyInitialization extends Error {
  constructor() {
    super(
      "ECPoint corresponding to a public key doesn't belong to Secp256k1 curve"
    );
  }
}
