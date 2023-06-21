import { Apollo as ApolloInterface } from "../domain/buildingBlocks/Apollo";
import * as bip39 from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";
import { base64url } from "multiformats/bases/base64";

import elliptic from "elliptic";
import {
  Seed,
  SeedWords,
  KeyCurve,
  KeyPair,
  PrivateKey,
  PublicKey,
  CompressedPublicKey,
  Signature,
  Curve,
} from "../domain/models";
import { MnemonicWordList } from "../domain/models/WordList";
import {
  MnemonicLengthException,
  MnemonicWordException,
} from "../domain/models/errors/Mnemonic";
import { DerivationPath } from "./utils/derivation/DerivationPath";
import { KeyDerivation } from "./utils/derivation/KeyDerivation";
import { Secp256k1PublicKey } from "./utils/Secp256k1PublicKey";
import { Secp256k1PrivateKey } from "./utils/Secp256k1PrivateKey";
import { Ed25519PrivateKey } from "./utils/Ed25519PrivateKey";
import { Ed25519PublicKey } from "./utils/Ed25519PublicKey";
import { Ed25519KeyPair } from "./utils/Ed25519KeyPair";
import { X25519KeyPair } from "./utils/X25519KeyPair";
import { ApolloError } from "../domain/models/Errors";

import { OctetKeyPair } from "./models/OctetKeyPair";
import { X25519PrivateKey } from "./utils/X25519PrivateKey";

const EC = elliptic.ec;

/**
 * Apollo defines the set of cryptographic operations that are used in the Atala PRISM.
 *
 * @export
 * @class Apollo
 * @typedef {Apollo}
 */
export default class Apollo implements ApolloInterface {
  /**
   * getKeyPairForCurve: Method to generate a KeyPair from a seed or randomly
   *
   * @private
   * @param {KeyCurve} curve
   * @param {?Seed} [seed]
   * @returns {KeyPair}
   */
  private getKeyPairForCurve(curve: KeyCurve, seed?: Seed): KeyPair {
    const derivationPath = DerivationPath.fromPath(
      `m/${curve.index || 0}'/0'/0'`
    );
    if (curve.curve == Curve.SECP256K1) {
      if (!seed) {
        throw new Error(
          "Please provide a seed when creating a secp256k1 keypair"
        );
      }
      const extendedKey = KeyDerivation.deriveKey(seed.value, derivationPath);
      const keyPair = extendedKey.keyPair();
      return {
        keyCurve: curve,
        privateKey: {
          keyCurve: curve,
          value: keyPair.privateKey.getEncoded(),
        },
        publicKey: {
          keyCurve: curve,
          value: keyPair.publicKey.getEncoded(),
        },
      };
    } else if (curve.curve == Curve.ED25519) {
      const keyPair = new Ed25519KeyPair();
      return {
        keyCurve: curve,
        privateKey: {
          keyCurve: curve,
          value: keyPair.getPrivate(),
        },
        publicKey: {
          keyCurve: curve,
          value: keyPair.getPublic(),
        },
      };
    } else if (curve.curve == Curve.X25519) {
      const keyPair = new X25519KeyPair();
      return {
        keyCurve: curve,
        privateKey: {
          keyCurve: curve,
          value: keyPair.getPrivate(),
        },
        publicKey: {
          keyCurve: curve,
          value: keyPair.getPublic(),
        },
      };
    } else {
      throw new Error("Method not implemented.");
    }
  }

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
    return bip39.generateMnemonic(wordlist, 256).split(" ") as MnemonicWordList;
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

    if (mnemonics.length % 3 != 0) {
      throw new MnemonicLengthException(
        "Word list size must be multiple of three words"
      );
    } else if (mnemonics.length <= 0) {
      throw new MnemonicLengthException("Word list is empty");
    }
    if (!bip39.validateMnemonic(mnemonicString, wordlist)) {
      throw new MnemonicWordException(`Invalid mnemonic word/s`);
    }
    const seed = bip39.mnemonicToSeedSync(mnemonicString, passphrase);
    return {
      value: seed,
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
    const mnemonics = this.createRandomMnemonics();
    const seed = this.createSeed(mnemonics, passphrase);
    return {
      seed: seed,
      mnemonics: mnemonics,
    };
  }

  /**
   * Creates a key pair (a private and public key) using a given seed and key curve.
   *
   * @param {KeyCurve} curve
   * @param {?Seed} [seed]
   * @returns {KeyPair}
   */
  createKeyPairFromKeyCurve(curve: KeyCurve, seed?: Seed): KeyPair {
    return this.getKeyPairForCurve(curve, seed);
  }

  /**
   * Creates a key pair (a private and public key) using a given private key, so only getting its public key
   *
   * @example
   * This function creates a key pair (a private and public key) using a given privateKey.
   *
   * ```ts
   *  apollo.createKeyPairFromPrivateKey(privateKey);
   * ```
   *
   * @param {PrivateKey} privateKey
   * @returns {KeyPair}
   */
  createKeyPairFromPrivateKey(privateKey: PrivateKey): KeyPair {
    const curve = privateKey.keyCurve;
    if (privateKey.keyCurve.curve == Curve.SECP256K1) {
      const secp256k1PrivateKey = Secp256k1PrivateKey.secp256k1FromBytes(
        privateKey.value
      );
      const secp256k1PublicKey = secp256k1PrivateKey.getPublicKey();

      return {
        keyCurve: curve,
        privateKey: {
          keyCurve: curve,
          value: secp256k1PrivateKey.getEncoded(),
        },
        publicKey: {
          keyCurve: curve,
          value: secp256k1PublicKey.getEncoded(),
        },
      };
    } else if (privateKey.keyCurve.curve == Curve.ED25519) {
      const ed25519PrivateKey = Ed25519PrivateKey.eddsa.keyFromSecret(
        Buffer.from(
          base64url.baseDecode(Buffer.from(privateKey.value).toString())
        )
      );
      const ed25519PublicKey = ed25519PrivateKey.getPublic();
      return {
        keyCurve: curve,
        privateKey: {
          keyCurve: curve,
          value: Buffer.from(
            base64url.baseEncode(ed25519PrivateKey.getSecret())
          ),
        },
        publicKey: {
          keyCurve: curve,
          value: Buffer.from(base64url.baseEncode(ed25519PublicKey)),
        },
      };
    } else if (privateKey.keyCurve.curve == Curve.X25519) {
      const x25519PrivateKey = X25519PrivateKey.ec.generateKeyPairFromSeed(
        Buffer.from(
          base64url.baseDecode(Buffer.from(privateKey.value).toString())
        )
      );
      const x25519PublicKey = x25519PrivateKey.publicKey;
      return {
        keyCurve: curve,
        privateKey: {
          keyCurve: curve,
          value: Buffer.from(base64url.baseEncode(x25519PrivateKey.secretKey)),
        },
        publicKey: {
          keyCurve: curve,
          value: Buffer.from(base64url.baseEncode(x25519PublicKey)),
        },
      };
    }

    throw new Error("Method not implemented.");
  }
  /**
   * Compresses a given Secp256k1 public key into a shorter, more efficient form.
   *
   * @param {PublicKey} publicKey
   * @returns {CompressedPublicKey}
   */
  compressedPublicKeyFromPublicKey(publicKey: PublicKey): CompressedPublicKey {
    const secp256k1PublicKey = Secp256k1PublicKey.secp256k1FromBytes(
      Buffer.from(publicKey.value)
    );
    return {
      uncompressed: {
        keyCurve: {
          curve: Curve.SECP256K1,
        },
        value: secp256k1PublicKey.getEncoded(),
      },
      value: secp256k1PublicKey.getEncodedCompressed(),
    };
  }
  /**
   * Decompresses a given compressed secp256k1 public key into its original form.
   *
   * @param {Uint8Array} compressedData
   * @returns {CompressedPublicKey}
   */
  compressedPublicKeyFromCompressedData(
    compressedData: Uint8Array
  ): CompressedPublicKey {
    const secp256k1PublicKey =
      Secp256k1PublicKey.secp256k1FromCompressed(compressedData);
    return {
      uncompressed: {
        keyCurve: {
          curve: Curve.SECP256K1,
        },
        value: secp256k1PublicKey.getEncoded(),
      },
      value: secp256k1PublicKey.getEncodedCompressed(),
    };
  }
  /**
   * Create a public key from byte coordinates.
   *
   * @param {KeyCurve} curve
   * @param {Uint8Array} x
   * @param {Uint8Array} y
   * @returns {PublicKey}
   */
  publicKeyFromPoints(
    curve: KeyCurve,
    x: Uint8Array,
    y: Uint8Array
  ): PublicKey {
    const publicKey = Secp256k1PublicKey.secp256k1FromByteCoordinates(x, y);
    return {
      keyCurve: curve,
      value: publicKey.getEncoded(),
    };
  }
  /**
   * Create a public key from bytes.
   *
   * @param {KeyCurve} curve
   * @param {Uint8Array} x
   * @returns {PublicKey}
   */
  publicKeyFromPoint(curve: KeyCurve, x: Uint8Array): PublicKey {
    const publicKey = Secp256k1PublicKey.secp256k1FromBytes(x);
    return {
      keyCurve: curve,
      value: publicKey.getEncoded(),
    };
  }
  /**
   * Signs a message using a given private key, returning the signature.
   *
   * @param {PrivateKey} privateKey
   * @param {Uint8Array} message
   * @returns {Signature}
   */
  signByteArrayMessage(privateKey: PrivateKey, message: Uint8Array): Signature {
    const messageBuffer = Buffer.from(message);
    if (privateKey.keyCurve.curve === Curve.ED25519) {
      const ed25519PrivateKey = new Ed25519PrivateKey(
        Buffer.from(privateKey.value)
      );
      return {
        value: Buffer.from(ed25519PrivateKey.sign(messageBuffer)),
      };
    } else if (privateKey.keyCurve.curve === Curve.X25519) {
      throw new ApolloError.InvalidKeyCurve(
        "X25519 key cannot be used for signatures"
      );
    } else if (privateKey.keyCurve.curve === Curve.SECP256K1) {
      const secp256k1PrivateKey = Secp256k1PrivateKey.secp256k1FromBytes(
        privateKey.value
      );
      return {
        value: Buffer.from(secp256k1PrivateKey.sign(messageBuffer)),
      };
    }
    throw new Error("Method not implemented.");
  }
  /**
   * Signs a message using a given private key, returning the signature.
   *
   * @param {PrivateKey} privateKey
   * @param {string} message
   * @returns {Signature}
   */
  signStringMessage(privateKey: PrivateKey, message: string): Signature {
    return this.signByteArrayMessage(privateKey, Buffer.from(message));
  }
  /**
   * Return the correct Elliptic curve variation from a valid key curve
   *
   * @param {Curve} curve
   * @returns {elliptic.ec}
   */
  getECInstanceByCurve(curve: Curve): elliptic.ec {
    return new EC(curve === Curve.SECP256K1 ? "secp256k1" : "curve25519");
  }
  /**
   * Verifies the authenticity of a signature using the corresponding public key, challenge, and
   * signature. This function returns a boolean value indicating whether the signature is valid or not.
   *
   * @param {PublicKey} publicKey
   * @param {Uint8Array} challenge
   * @param {Uint8Array} signature
   * @returns {boolean}
   */
  verifySignature(
    publicKey: PublicKey,
    challenge: Uint8Array,
    signature: Uint8Array
  ): boolean {
    const challengeBuffer = Buffer.from(challenge);
    const signatureBuffer = Buffer.from(signature);
    if (publicKey.keyCurve.curve === Curve.ED25519) {
      const ed25519PublicKey = new Ed25519PublicKey(publicKey.value);
      return ed25519PublicKey.verify(challengeBuffer, signatureBuffer);
    } else if (publicKey.keyCurve.curve === Curve.X25519) {
      throw new ApolloError.InvalidKeyCurve(
        "X25519 key cannot be used for signatures"
      );
    } else if (publicKey.keyCurve.curve === Curve.SECP256K1) {
      const compressed = this.compressedPublicKeyFromPublicKey(publicKey);
      const secp256k1PublicKey = Secp256k1PublicKey.secp256k1FromCompressed(
        compressed.value
      );
      return secp256k1PublicKey.verify(challengeBuffer, signatureBuffer);
    }
    return false;
  }

  /**
   * Methods that facilitate the creation of a private key JWK
   *
   * @param {string} id
   * @param {KeyPair} keyPair
   * @returns {string}
   */
  getPrivateJWKJson(id: string, keyPair: KeyPair): string {
    const jsonString = new OctetKeyPair(id, keyPair).privateJson;
    return jsonString;
  }
  /**
   * Methods that facilitate the creation of a public key JWK
   *
   * @param {string} id
   * @param {KeyPair} keyPair
   * @returns {string}
   */
  getPublicJWKJson(id: string, keyPair: KeyPair): string {
    const jsonString = new OctetKeyPair(id, keyPair).publicJson;
    return jsonString;
  }
}
