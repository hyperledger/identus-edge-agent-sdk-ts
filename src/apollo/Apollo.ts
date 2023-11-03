import { Apollo as ApolloInterface } from "../domain/buildingBlocks/Apollo";
import * as bip39 from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";

import { Curve, KeyTypes, PrivateKey, Seed, SeedWords } from "../domain/models";
import { MnemonicWordList } from "../domain/models/WordList";
import {
  MnemonicLengthException,
  MnemonicWordException,
} from "../domain/models/errors/Mnemonic";
import { Ed25519PrivateKey } from "./utils/Ed25519PrivateKey";
import { ApolloError } from "../domain/models/Errors";
import { X25519PrivateKey } from "./utils/X25519PrivateKey";
import { KeyProperties } from "../domain/models/KeyProperties";
import { getKeyCurveByNameAndIndex } from "../domain/models";
import { Secp256k1PrivateKey } from "./utils/Secp256k1PrivateKey";
import { Ed25519KeyPair } from "./utils/Ed25519KeyPair";
import { X25519KeyPair } from "./utils/X25519KeyPair";

import * as ApolloPKG from "@input-output-hk/apollo";

const ApolloSDK = ApolloPKG.io.iohk.atala.prism.apollo;

const Mnemonic = ApolloSDK.derivation.Mnemonic.Companion;
const HDKey = ApolloSDK.derivation.HDKey;
const BigIntegerWrapper = ApolloSDK.derivation.BigIntegerWrapper;
/**
 * Apollo defines the set of cryptographic operations that are used in the Atala PRISM.
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
export default class Apollo implements ApolloInterface {
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
      throw new MnemonicLengthException(
        "Word list must be 12 or 24 words in length"
      );
    }

    if (!bip39.validateMnemonic(mnemonicString, wordlist)) {
      throw new MnemonicWordException(`Invalid mnemonic word/s`);
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
    if (!parameters[KeyProperties.type]) {
      throw new ApolloError.InvalidKeyType(
        parameters[KeyProperties.type],
        Object.values(KeyTypes)
      );
    }
    if (!parameters[KeyProperties.curve]) {
      throw new ApolloError.InvalidKeyCurve(
        parameters[KeyProperties.curve],
        Object.values(Curve)
      );
    }

    const keyType = parameters[KeyProperties.type];

    const { curve } = getKeyCurveByNameAndIndex(
      parameters[KeyProperties.curve]
    );
    const keyData = parameters[KeyProperties.rawKey];

    if (keyType === KeyTypes.EC) {
      if (curve === Curve.ED25519) {
        if (keyData) {
          return new Ed25519PrivateKey(keyData);
        }
        const keyPair = Ed25519KeyPair.generateKeyPair();
        return keyPair.privateKey;
      }

      if (curve === Curve.SECP256K1) {
        //TODO: Instanciating from a raw value does not include chainCode
        //This keys will not be derivable until we export them as extendedKeys
        if (keyData) {
          return new Secp256k1PrivateKey(keyData);
        }

        const derivationPathStr = parameters[KeyProperties.derivationPath]
          ? Buffer.from(parameters[KeyProperties.derivationPath]).toString(
              "hex"
            )
          : Buffer.from(`m/0'/0'/0'`).toString("hex");

        const seedStr = parameters[KeyProperties.seed];

        if (!derivationPathStr) {
          throw new ApolloError.MissingKeyParameters([
            KeyProperties.derivationPath,
          ]);
        }

        if (!seedStr) {
          throw new ApolloError.MissingKeyParameters([KeyProperties.seed]);
        }

        const seed = Buffer.from(seedStr, "hex");

        const newExtendedKey = HDKey.InitFromSeed(
          Int8Array.from(seed),
          0,
          BigIntegerWrapper.initFromInt(0)
        ).derive(Buffer.from(derivationPathStr, "hex").toString());

        const newExtendedPrivateKey = new Secp256k1PrivateKey(
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          Uint8Array.from(newExtendedKey.privateKey!)
        );

        newExtendedPrivateKey.keySpecification.set(KeyProperties.seed, seedStr);
        newExtendedPrivateKey.keySpecification.set(
          KeyProperties.derivationPath,
          derivationPathStr
        );
        newExtendedPrivateKey.keySpecification.set(KeyProperties.index, "0");

        return newExtendedPrivateKey;
      }
    }

    if (keyType === KeyTypes.Curve25519) {
      if (curve === Curve.X25519) {
        if (keyData) {
          return new X25519PrivateKey(keyData);
        }
        const keyPair = X25519KeyPair.generateKeyPair();
        return keyPair.privateKey;
      }
    }

    throw new ApolloError.InvalidKeyType(keyType, Object.values(KeyTypes));
  }
}
