import { StorableKey } from "../keyManagement";

export class InvalidMnemonicWord extends Error {
  constructor(message?: string) {
    super(message || "Invalid mnemonic word");
  }
}

export class CouldNotParseMessageString extends Error {
  constructor(message?: string) {
    super(message || "Could not parse message string");
  }
}

export class InvalidPrivateKey extends Error {
  constructor(message?: string) {
    super(message || "Invalid private key");
  }
}


export class InvalidKeyCurve extends Error {
  constructor(invalidKeyCurve: string, validKeyCurves: string[]) {
    super(
      `Invalid key curve: ${invalidKeyCurve ? invalidKeyCurve : "undefined"
      }. Valid options are: ${validKeyCurves.join(",")}`
    );
  }
}

export class InvalidDerivationPath extends Error {
  constructor(message?: string) {
    super(message || "Invalid derivation path");
  }
}


export class ECPublicKeyInitialization extends Error {
  constructor() {
    super(
      "ECPoint corresponding to a public key doesn't belong to Secp256k1 curve"
    );
  }
}

export class InvalidKeyType extends Error {
  constructor(invalidKeyType: string, validKeyTypes: string[]) {
    super(
      `Invalid key type: ${invalidKeyType ? invalidKeyType : "undefined"
      }. Valid options are: ${validKeyTypes.join(",")}`
    );
  }
}

export class MissingKeyParameters extends Error {
  constructor(missing: string[]) {
    super(`Missing key parameters: ${missing.join(",")}`);
  }
}

export class KeyRestoratonFailed extends Error {
  constructor(key?: StorableKey) {
    super(`Key Restoration Failed: [${key?.recoveryId}]`);
  }
}

export class MissingPrivateKey extends Error {
  constructor(message?: string) {
    super(message || "Private key is missing");
  }
}

export class MissingChainCode extends Error {
  constructor(message?: string) {
    super(message || "Chain code is missing");
  }
}

