import * as ecc from "tiny-secp256k1";
import { default as ApolloInterface } from "../domain/buildingBlocks/Apollo";
import * as bip39 from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";
import bip32 from "bip32";

import * as elliptic from "elliptic";
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
import { ApolloError } from "../domain/models/Errors";

const EC = elliptic.ec;
const EDDSA = elliptic.eddsa;

const ec = new EC("secp256k1");
const eddsa = new EDDSA("ed25519");

export default class Apollo implements ApolloInterface {
  private getKeyPairForCurve(seed: Seed, curve: KeyCurve): KeyPair {
    if (curve.curve == Curve.SECP256K1 || curve.curve == Curve.X25519) {
      const root = bip32(ecc).fromSeed(Buffer.from(seed.value));
      const child = root.derivePath(`m/${curve.index || 0}'/0'/0'`);
      if (!child.privateKey) {
        throw new ApolloError.InvalidDerivationPath();
      }
      const privateKey = child.privateKey;
      const keyPair = ec.keyFromPrivate(privateKey.toString("hex"));
      const publicKey = Buffer.from(keyPair.getPublic().encode("array", true));

      return {
        keyCurve: curve,
        privateKey: {
          keyCurve: curve,
          value: publicKey,
        },
        publicKey: {
          keyCurve: curve,
          value: publicKey,
        },
      };
    } else if (curve.curve == Curve.ED25519) {
      const prv = eddsa.keyFromSecret(Buffer.from(seed.value));
      return {
        keyCurve: curve,
        privateKey: {
          keyCurve: curve,
          value: Buffer.from(prv.getSecret("hex"), "hex"),
        },
        publicKey: {
          keyCurve: curve,
          value: Buffer.from(prv.getPublic("hex"), "hex"),
        },
      };
    } else {
      throw new Error("Method not implemented.");
    }
  }
  createRandomMnemonics(): MnemonicWordList {
    return bip39.generateMnemonic(wordlist, 256).split(" ") as MnemonicWordList;
  }
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
  createRandomSeed(passphrase?: string): SeedWords {
    const mnemonics = this.createRandomMnemonics();
    const seed = this.createSeed(mnemonics, passphrase);
    return {
      seed: seed,
      mnemonics: mnemonics,
    };
  }
  createKeyPairFromKeyCurve(seed: Seed, curve: KeyCurve): KeyPair {
    return this.getKeyPairForCurve(seed, curve);
  }
  createKeyPairFromPrivateKey(seed: Seed, privateKey: PrivateKey): KeyPair {
    return this.getKeyPairForCurve(seed, privateKey.keyCurve);
  }
  compressedPublicKeyFromPublicKey(publicKey: PublicKey): CompressedPublicKey {
    const keyPair = ec.keyFromPublic(publicKey.value, "hex");
    return {
      uncompressed: {
        keyCurve: {
          curve: Curve.SECP256K1,
        },
        value: Buffer.from(keyPair.getPublic().encode("array", false)),
      },
      value: Buffer.from(keyPair.getPublic().encode("array", false)),
    };
  }
  compressedPublicKeyFromCompresedData(
    compressedData: Uint8Array | string
  ): CompressedPublicKey {
    const point = ec.curve.decodePoint(compressedData).encode("hex");
    const keyPair = ec.keyFromPublic(Buffer.from(point, "hex"));
    return {
      uncompressed: {
        keyCurve: {
          curve: Curve.SECP256K1,
        },
        value: Buffer.from(keyPair.getPublic().encode("hex", true), "hex"),
      },
      value: Buffer.from(keyPair.getPublic().encode("hex", true), "hex"),
    };
  }
  publicKeyFromPoints(
    curve: KeyCurve,
    x: Uint8Array,
    y: Uint8Array
  ): PublicKey {
    const publicKey = ec.keyFromPublic({
      x: Buffer.from(x).toString("hex"),
      y: Buffer.from(y).toString("hex"),
    });
    return {
      keyCurve: curve,
      value: Buffer.from(publicKey.getPublic().encode("hex", true), "hex"),
    };
  }
  publicKeyFromPoint(curve: KeyCurve, x: Uint8Array): PublicKey {
    const publicKey = ec.keyFromPublic(Buffer.from(x));
    return {
      keyCurve: curve,
      value: Buffer.from(publicKey.getPublic().encode("hex", true), "hex"),
    };
  }
  signByteArrayMessage(privateKey: PrivateKey, message: Uint8Array): Signature {
    const messageBuffer = Buffer.from(message);
    if (privateKey.keyCurve.curve == Curve.ED25519) {
      const keyPair = eddsa.keyFromSecret(Buffer.from(privateKey.value));
      return {
        value: keyPair.sign(messageBuffer).toBytes(),
      };
    } else if (
      privateKey.keyCurve.curve == Curve.SECP256K1 ||
      privateKey.keyCurve.curve == Curve.X25519
    ) {
      const keyPair = ec.keyFromPrivate(privateKey.value);
      if (!keyPair.validate().result) {
        throw new ApolloError.InvalidPrivateKey();
      }
      return {
        value: Buffer.from(keyPair.sign(messageBuffer).toDER()),
      };
    }
    throw new Error("Method not implemented.");
  }
  signStringMessage(privateKey: PrivateKey, message: string): Signature {
    return this.signByteArrayMessage(privateKey, Buffer.from(message));
  }
  verifySignature(
    publicKey: PublicKey,
    challenge: Uint8Array,
    signature: Signature
  ): boolean {
    const challengeBuffer = Buffer.from(challenge);
    const signatureBuffer = Buffer.from(signature.value);

    if (publicKey.keyCurve.curve == Curve.ED25519) {
      return eddsa.verify(
        challengeBuffer,
        signatureBuffer,
        Buffer.from(publicKey.value)
      );
    } else if (
      publicKey.keyCurve.curve == Curve.SECP256K1 ||
      publicKey.keyCurve.curve == Curve.X25519
    ) {
      return ec.verify(
        challengeBuffer,
        signatureBuffer,
        Buffer.from(publicKey.value)
      );
    }
    throw new Error("Method not implemented.");
  }
}
