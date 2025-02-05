import { Apollo as ApolloInterface } from "../domain/buildingBlocks/Apollo";
import * as bip39 from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";

import {
  getKeyCurveByNameAndIndex,
  ApolloError,
  Curve,
  KeyTypes,
  KeyProperties,
  MnemonicWordList,
  PrivateKey,
  PublicKey,
  Seed,
  SeedWords,
  StorableKey,
  KeyRestoration,
} from "../domain";

import { Ed25519PrivateKey } from "./utils/Ed25519PrivateKey";
import { X25519PrivateKey } from "./utils/X25519PrivateKey";
import { Secp256k1PrivateKey } from "./utils/Secp256k1PrivateKey";
import { Ed25519KeyPair } from "./utils/Ed25519KeyPair";
import { X25519KeyPair } from "./utils/X25519KeyPair";
import { Secp256k1PublicKey } from "./utils/Secp256k1PublicKey";
import { Ed25519PublicKey } from "./utils/Ed25519PublicKey";
import { X25519PublicKey } from "./utils/X25519PublicKey";

import { isEmpty, notEmptyString } from "../utils";
import ApolloPKG from "@hyperledger/identus-apollo";
import { PrismDerivationPath } from "../domain/models/derivation/schemas/PrismDerivation";

const ApolloSDK = ApolloPKG.org.hyperledger.identus.apollo;
const Mnemonic = ApolloSDK.derivation.Mnemonic.Companion;
const HDKey = ApolloSDK.derivation.HDKey;
const BigIntegerWrapper = ApolloSDK.derivation.BigIntegerWrapper;

/**
 * Apollo defines the set of cryptographic operations.
 *
 * @Abstraction
 * We by default are implementing Secp256k1, Ed25519 and X25519 Private and Public key from our generic abstractions.
 * When you are using one of those type of keys, for example with:
 *
 * ```ts
 *  const privateKey = apollo.createPrivateKey({
 *    type: KeyTypes.EC,
 *    curve: Curve.ED25519,
 *  });
 * ```
 * All the properties you pass to the createPrivateKey are just the default keyProperty keys and the values are strings, buffers are represented in hex format also as strings to simplify conversion later
 *
 * You can know check if this key can sign with:
 *
 * ```ts
 * if (privateKey.isSignable()) {
 *  //the sign method will be available inside this if
 *  privateKey.sign(message)
 * }
 * //not outside
 *
 * const signature = privateKey.isSignable() && privateKey.sign(message)
 * //This last one would also would but if your key was not signable would return false
 * ```
 *
 * PublicKeys follow the same concept, imagine you already have an instance of a publicKey, then..
 *
 * ```ts
 * if (publicKey.canVerify()) {
 *  privateKey.verify(challenge, signature)
 * }
 * //not outside
 * ```
 *
 * All keys know also have a generic list of properties which can be accessed at any stage, for example:

 * ```ts
 * privateKey.getProperty(KeyProperties.curve)
 * ```
 *
 * Would give your the Curve value.
 *
 * Find below all the complete list of KeyProperties that are available.
 *
 * ```ts
 * export enum KeyProperties {
 *   /// The 'kid'  represents a key's identifier.
 *   kid = "kid",
 *   /// The 'algorithm'  corresponds to the cryptographic algorithm associated with the key.,
 *   algorithm = "algorithm",
 *   /// The 'curve'  represents the elliptic curve used for an elliptic-curve key.,
 *   curve = "curve",
 *   /// The 'seed'  corresponds to the seed value from which a key is derived.,
 *   seed = "seed",
 *   /// The 'rawKey'  refers to the raw binary form of the key.,
 *   rawKey = "raw",
 *   /// The 'derivationPath'  refers to the path used to derive a key in a hierarchical deterministic (HD) key generation scheme.,
 *   derivationPath = "derivationPath",
 *   index = "index",
 *   /// The 'type'  denotes the type of the key.,
 *   type = "type",
 *   /// The 'curvePointX'  represents the x-coordinate of a curve point for an elliptic-curve key.,
 *   curvePointX = "curvePoint.x",
 *   /// The 'curvePointY'  represents the y-coordinate of a curve point for an elliptic-curve key.,
 *   curvePointY = "curvePoint.y",
 * }
 * ```
 *
 * @class Apollo
 * @typedef {Apollo}
 */
export default class Apollo implements ApolloInterface, KeyRestoration {

  static Secp256k1PrivateKey = Secp256k1PrivateKey;
  static Ed25519PrivateKey = Ed25519PrivateKey;
  static X25519PrivateKey = X25519PrivateKey;


  /**
   * Creates a random set of mnemonic phrases that can be used as a seed for generating a private key.
   *
   * @example
   * This function creates a random mnemonic phrase whose usage is as a seed for generating a private key.
   *
   * ```ts
   *  const mnemonics = apollo.createRandomMnemonics();
   * ```
   *
   * @returns {MnemonicWordList}
   */
  createRandomMnemonics(): MnemonicWordList {
    return Mnemonic.createRandomMnemonics() as MnemonicWordList;
  }

  /**
   * Takes in a set of mnemonics and a passphrase, and returns a seed object used to generate a private key.
   *
   * @example
   * This function takes mnemonics and passphrases and creates a seed object to generate a private key. It may throw an error if the mnemonics are invalid.
   *
   * ```ts
   *  const seed = apollo.createSeed(mnemonics, "my-secret-passphrase");
   * ```
   *
   * @param {MnemonicWordList} mnemonics
   * @param {?string} [passphrase]
   * @returns {Seed}
   */
  createSeed(mnemonics: MnemonicWordList, passphrase?: string): Seed {
    const mnemonicString = mnemonics.join(" ");

    if (mnemonics.length != 12 && mnemonics.length != 24) {
      throw new ApolloError.MnemonicLengthError();
    }

    if (!bip39.validateMnemonic(mnemonicString, wordlist)) {
      throw new ApolloError.MnemonicWordError(mnemonics);
    }

    const seed = Mnemonic.createSeed(mnemonics, `mnemonic${passphrase}`);

    return {
      value: Uint8Array.from(seed),
    };
  }

  /**
   * Creates a random seed and a corresponding set of mnemonic phrases.
   *
   * @example
   * This function creates a random mnemonic phrase and seed.
   *
   * ```ts
   *  const {mnemonics, seed} = apollo.createRandomSeed();
   * ```
   *
   * @param {?string} [passphrase]
   * @returns {SeedWords}
   */
  createRandomSeed(passphrase?: string): SeedWords {
    const mnemonics = Mnemonic.createRandomMnemonics() as MnemonicWordList;
    const seed = Mnemonic.createRandomSeed(passphrase);
    return {
      seed: {
        value: Uint8Array.from(seed),
      },
      mnemonics: mnemonics,
    };
  }

  /**
  * Creates a public key based on the current cryptographic abstraction
  *
  *
  * @example
  * Create an EC Key with secp256k1 curve
  *
  * ```ts
  *  const privateKey = apollo.createPublicKey({
  *    type: KeyTypes.EC,
  *    curve: Curve.SECP256K1,
  *    raw: Buffer.from(new Arra(64).fill(1)),
  *  });
  * ```
  *
  * @param {PrivateKey} privateKey
  * @returns {KeyPair}
  */
  createPublicKey(parameters: {
    [name: KeyProperties | string]: any;
  }): PublicKey {
    const keyType = parameters[KeyProperties.type];
    const keyCurve = parameters[KeyProperties.curve];

    if (isEmpty(keyType)) {
      throw new ApolloError.InvalidKeyType();
    }

    if (isEmpty(keyCurve)) {
      throw new ApolloError.InvalidKeyCurve();
    }

    const { curve } = getKeyCurveByNameAndIndex(keyCurve);
    const keyData = parameters[KeyProperties.rawKey];

    if (keyType === KeyTypes.EC) {
      if (curve === Curve.ED25519) {
        if (keyData) {
          return new Ed25519PublicKey(keyData);
        }

        throw new ApolloError.MissingKeyParameters(KeyProperties.rawKey);
      }

      if (curve === Curve.SECP256K1) {
        if (keyData) {
          return new Secp256k1PublicKey(keyData);
        } else {
          const xData = parameters[KeyProperties.curvePointX];
          const yData = parameters[KeyProperties.curvePointY];

          if (xData && yData) {
            return Secp256k1PublicKey.secp256k1FromByteCoordinates(xData, yData);
          }
        }

        throw new ApolloError.MissingKeyParameters(KeyProperties.rawKey, KeyProperties.curvePointX, KeyProperties.curvePointY);
      }
    }

    if (keyType === KeyTypes.Curve25519) {
      if (curve === Curve.X25519) {
        if (keyData) {
          return new X25519PublicKey(keyData);
        }

        throw new ApolloError.MissingKeyParameters(KeyProperties.rawKey);
      }
    }

    throw new ApolloError.MissingKeyParameters(KeyProperties.rawKey);
  }

  /**
   * Creates a private key based on the current cryptographic abstraction
   *
   *
   * @example
   * Create an EC Key with secp256k1 curve
   *
   * ```ts
   *  const privateKey = apollo.createPrivateKey({
   *    type: KeyTypes.EC,
   *    curve: Curve.SECP256K1,
   *    seed: Buffer.from(seed.value).toString("hex"),
   *  });
   * ```
   *
   *
   * @example
   * Create an EC Key with secp256k1 curve, but also specify a derivationPath
   *
   * ```ts
   *  const privateKey = apollo.createPrivateKey({
   *    type: KeyTypes.EC,
   *    curve: Curve.SECP256K1,
   *    seed: Buffer.from(seed.value).toString("hex"),
   *    derivationPath: "m/0'/0'/0'"
   *  });
   * ```
   *
   *
   * @example
   * Create an EC Key with ed25519 curve, ED25519 keys do not use derivation,
   * passing the seed or derivation path will make no effect.
   * Calling this function just generates a new random privateKey for that curve
   *
   * ```ts
   *  const privateKey = apollo.createPrivateKey({
   *    type: KeyTypes.EC,
   *    curve: Curve.ED25519,
   *  });
   * ```
   *
   *
   * @example
   * Create an EC Key with X25519 curve, X25519 keys do not use derivation,
   * passing the seed or derivation path will make no effect.
   * Calling this function just generates a new random privateKey for that curve
   *
   * ```ts
   *  const privateKey = apollo.createPrivateKey({
   *    type: KeyTypes.Curve25519,
   *    curve: Curve.X25519,
   *  });
   * ```
   *
   * @param {PrivateKey} privateKey
   * @returns {KeyPair}
   */
  createPrivateKey(parameters: {
    [name: KeyProperties | string]: any;
  }): PrivateKey {
    const keyType = parameters[KeyProperties.type];
    const keyCurve = parameters[KeyProperties.curve];

    if (isEmpty(keyType)) {
      throw new ApolloError.InvalidKeyType();
    }

    if (isEmpty(keyCurve)) {
      throw new ApolloError.InvalidKeyCurve();
    }

    const { curve } = getKeyCurveByNameAndIndex(parameters[KeyProperties.curve]);
    const keyData = parameters[KeyProperties.rawKey];

    if (keyType === KeyTypes.EC) {
      if (curve === Curve.ED25519) {
        if (keyData) {
          return new Ed25519PrivateKey(keyData);
        }

        const seedHex = parameters[KeyProperties.seed];
        if (notEmptyString(seedHex)) {
          const derivationIndex = parameters[KeyProperties.index] ?? "0";
          const derivationParam = parameters[KeyProperties.derivationPath];
          const defaultPath: string = derivationParam ?? PrismDerivationPath.init(derivationIndex).toString();
          const seed = Int8Array.from(Buffer.from(seedHex, "hex"));
          const hdKey = ApolloSDK.derivation.EdHDKey.Companion.initFromSeed(seed);
          const baseKey = new Ed25519PrivateKey(Uint8Array.from(hdKey.privateKey));

          baseKey.keySpecification.set(KeyProperties.chainCode, Buffer.from(Uint8Array.from(hdKey.chainCode)).toString("hex"));
          baseKey.keySpecification.set(KeyProperties.derivationPath, Buffer.from(defaultPath).toString("hex"));
          baseKey.keySpecification.set(KeyProperties.index, derivationIndex);

          if (derivationParam) {
            const privateKey = baseKey.derive(defaultPath);
            return privateKey;
          }

          return baseKey;
        }

        const keyPair = Ed25519KeyPair.generateKeyPair();
        return keyPair.privateKey;
      }

      if (curve === Curve.SECP256K1) {
        if (keyData) {
          return new Secp256k1PrivateKey(keyData);
        }

        const seedHex = parameters[KeyProperties.seed];
        if (isEmpty(seedHex)) {
          throw new ApolloError.MissingKeyParameters(KeyProperties.seed);
        }

        const seed = Buffer.from(seedHex, "hex");
        const derivationIndex = parameters[KeyProperties.index] ?? "0";
        const derivationParam = parameters[KeyProperties.derivationPath];
        const defaultPath: string = derivationParam ?? PrismDerivationPath.init(
          derivationIndex
        ).toString();

        const hdKey = HDKey.InitFromSeed(
          Int8Array.from(seed),
          defaultPath.split("/").slice(1).length,
          BigIntegerWrapper.initFromInt(0)
        );

        if (hdKey.privateKey == null) {
          throw new ApolloError.ApolloLibError("Key generated incorrectly: missing privateKey");
        }

        if (hdKey.chainCode == null) {
          throw new ApolloError.ApolloLibError("Key generated incorrectly: missing chainCode");
        }

        const baseKey = new Secp256k1PrivateKey(Uint8Array.from(hdKey.privateKey));
        baseKey.keySpecification.set(KeyProperties.chainCode, Buffer.from(Uint8Array.from(hdKey.chainCode)).toString("hex"));
        baseKey.keySpecification.set(KeyProperties.derivationPath, Buffer.from(defaultPath).toString("hex"));
        baseKey.keySpecification.set(KeyProperties.index, derivationIndex);

        if (derivationParam) {
          const privateKey = baseKey.derive(defaultPath);
          return privateKey;
        }

        return baseKey;
      }
    }

    if (keyType === KeyTypes.Curve25519) {
      if (curve === Curve.X25519) {
        if (keyData) {
          return new X25519PrivateKey(keyData);
        }

        const seedHex = parameters[KeyProperties.seed];
        if (notEmptyString(seedHex)) {
          const derivationIndex = parameters[KeyProperties.index] ?? "0";
          const derivationParam: string = parameters[KeyProperties.derivationPath] ?? PrismDerivationPath.init(derivationIndex).toString();

          const seed = Int8Array.from(Buffer.from(seedHex, "hex"));
          const hdKey = ApolloSDK.derivation.EdHDKey.Companion.initFromSeed(seed).derive(derivationParam);
          const edKey = Ed25519PrivateKey.from.Buffer(Buffer.from(hdKey.privateKey));
          const xKey = edKey.x25519();

          xKey.keySpecification.set(KeyProperties.chainCode, Buffer.from(hdKey.chainCode).toString("hex"));
          xKey.keySpecification.set(KeyProperties.derivationPath, Buffer.from(derivationParam).toString("hex"));
          xKey.keySpecification.set(KeyProperties.index, derivationIndex);

          return xKey;
        }

        const keyPair = X25519KeyPair.generateKeyPair();
        return keyPair.privateKey;
      }
    }

    throw new ApolloError.InvalidKeyType(keyType);
  }

  restorePrivateKey(key: StorableKey): PrivateKey {
    switch (key.recoveryId) {
      case "secp256k1+priv":
        return new Secp256k1PrivateKey(key.raw);

      case "ed25519+priv":
        return new Ed25519PrivateKey(key.raw);

      case "x25519+priv":
        return new X25519PrivateKey(key.raw);
    }

    throw new ApolloError.KeyRestoratonFailed(key);
  }

  restorePublicKey(key: StorableKey): PublicKey {
    switch (key.recoveryId) {
      case "secp256k1+pub":
        return new Secp256k1PublicKey(key.raw);

      case "ed25519+pub":
        return new Ed25519PublicKey(key.raw);

      case "x25519+pub":
        return new X25519PublicKey(key.raw);
    }

    throw new ApolloError.KeyRestoratonFailed(key);
  }
}
