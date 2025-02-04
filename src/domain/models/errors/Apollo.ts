import { SDKError } from "./Common";
import { Curve, KeyTypes, StorableKey } from "../keyManagement";
import { asArray } from "../../../utils";

/**
 * thrown when at least one Mnemonic word does not match in the wordlist
 */
export class MnemonicWordError extends SDKError {
  constructor(words?: string[]) {
    super(11, `Invalid mnemonic word(s) [${asArray(words).join(", ")}]`);
  }
}

/**
 * thrown when the number of Mnemonic words is different to expected
 */
export class MnemonicLengthError extends SDKError {
  constructor() { super(112, "Mnemonics must be 12 or 24 words in length"); }
}

/**
 * // ??
 */
export class CouldNotParseMessageString extends SDKError {
  constructor() { super(12, "Could not parse message string"); }
}

/**
 * thrown when restoring a key from a JWK
 */
// export class InvalidJWK extends SDKError {
//   constructor() { super(13, "Invalid JWK") }
// }

/**
 * not thrown
 * swift throws in X25519PublicKey.verify()
 */
// export class KeyAgreementDoesNotSupportVerification extends SDKError {
//   constructor() { super(14, "Invalid JWK") }
// }

/**
 * thrown when Key recovery fails during restoration attempt
 */
export class KeyRestoratonFailed extends SDKError {
  constructor(key?: StorableKey) {
    super(15, `Key Restoration Failed: recoveryId [${key?.recoveryId}] not matched or invalid`);
  }
}

/**
 * thrown when given Key Curve is not supported
 */
export class InvalidKeyCurve extends SDKError {
  constructor(keyCurve?: string) {
    const options = Object.values(Curve);
    const msg = `Invalid key curve: ${keyCurve ?? "undefined"}. Valid options are: ${options.join(", ")}`;
    super(16, msg);
  }
}

/**
 * thrown when give Key Type is not supported
 */
export class InvalidKeyType extends SDKError {
  constructor(keyType?: string) {
    const options = Object.values(KeyTypes);
    const msg = `Invalid key type: ${keyType ?? "undefined"}. Valid options are: ${options.join(", ")}`;
    super(17, msg);
  }
}

/**
 * thrown when expected parameter is missing for Key operation
 */
export class MissingKeyParameters extends SDKError {
  constructor(...missing: string[]) {
    super(18, `Missing key parameters: ${missing.join(", ")}`);
  }
}

/**
 * thrown when failing to create a key
 */
export class KeyInitializationError extends SDKError {
  constructor(message: string) { super(181, message); }
}

/**
 * thrown when failing to create a DerivationPath
 */
export class InvalidDerivationPath extends SDKError {
  constructor(message: string) {
    super(182, message);
  }
}

/**
 * thrown when Apollo library returns unexpected result
 */
export class ApolloLibError extends SDKError {
  constructor(message: string) { super(199, message); }
}
