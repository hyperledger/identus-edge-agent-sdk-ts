import { default as ApolloInterface } from "../domain/buildingBlocks/Apollo";
import * as bip39 from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";

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
import { DerivationPath } from "./utils/derivation/DerivationPath";
import { KeyDerivation } from "./utils/derivation/KeyDerivation";
import { Secp256k1PublicKey } from "./utils/Secp256k1PublicKey";
import { Secp256k1PrivateKey } from "./utils/Secp256k1PrivateKey";
import * as base64 from "multiformats/bases/base64";
import { Ed25519PrivateKey } from "./utils/Ed25519PrivateKey";
import { Ed25519PublicKey } from "./utils/Ed25519PublicKey";
import { X25519PrivateKey } from "./utils/X25519PrivateKey";
import { X25519PublicKey } from "./utils/X25519PublicKey";

const EC = elliptic.ec;

export default class Apollo implements ApolloInterface {
  getPrivateJWKJson(id: string, keyPair: KeyPair): string {
    throw new Error("Method not implemented.");
  }
  getPublicJWKJson(id: string, keyPair: KeyPair): string {
    throw new Error("Method not implemented.");
  }
  private getKeyPairForCurve(seed: Seed, curve: KeyCurve): KeyPair {
    const derivationPath = DerivationPath.fromPath(
      `m/${curve.index || 0}'/0'/0'`
    );
    if (curve.curve == Curve.SECP256K1) {
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
      const ed25519Key = KeyDerivation.deriveEd25519Key(
        seed.value,
        derivationPath
      );
      const keyPair = ed25519Key.keyPair();
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
      /***
       * Cojo una clave privada de ED,
       * le hado sha512
       *
       *
       *
       *
       */

      const ed25519Key = KeyDerivation.deriveX25519Key(
        seed.value,
        derivationPath
      );
      const keyPair = ed25519Key.x25519KeyPair();
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
  compressedPublicKeyFromCompresedData(
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
  publicKeyFromPoint(curve: KeyCurve, x: Uint8Array): PublicKey {
    const publicKey = Secp256k1PublicKey.secp256k1FromBytes(x);
    return {
      keyCurve: curve,
      value: publicKey.getEncoded(),
    };
  }
  signByteArrayMessage(privateKey: PrivateKey, message: Uint8Array): Signature {
    const messageBuffer = Buffer.from(message);
    if (privateKey.keyCurve.curve == Curve.ED25519) {
      const ed25519PrivateKey = new Ed25519PrivateKey(privateKey.value);
      return {
        value: ed25519PrivateKey.sign(Buffer.from(message)),
      };
    } else if (privateKey.keyCurve.curve == Curve.X25519) {
      const x25519PrivateKey = new X25519PrivateKey(privateKey.value);
      return {
        value: x25519PrivateKey.sign(Buffer.from(message)),
      };
    } else if (privateKey.keyCurve.curve == Curve.SECP256K1) {
      const ec = this.getECInstanceByCurve(privateKey.keyCurve.curve);
      const secp256k1PrivateKey = Secp256k1PrivateKey.secp256k1FromBytes(
        privateKey.value
      );
      const keyPair = ec.keyFromPrivate(secp256k1PrivateKey.getEncoded());
      return {
        value: Buffer.from(keyPair.sign(messageBuffer).toDER()),
      };
    }
    throw new Error("Method not implemented.");
  }
  signStringMessage(privateKey: PrivateKey, message: string): Signature {
    return this.signByteArrayMessage(privateKey, Buffer.from(message));
  }
  getECInstanceByCurve(curve: Curve): elliptic.ec {
    return new EC(curve === Curve.SECP256K1 ? "secp256k1" : "curve25519");
  }
  verifySignature(
    publicKey: PublicKey,
    challenge: Uint8Array,
    signature: Signature
  ): boolean {
    const challengeBuffer = Buffer.from(challenge);
    const signatureBuffer = Buffer.from(signature.value);
    const publicKeyBuffer = Buffer.from(publicKey.value);
    if (publicKey.keyCurve.curve == Curve.ED25519) {
      const ed25519PublicKey = new Ed25519PublicKey(publicKey.value);
      return ed25519PublicKey.verify(challengeBuffer, signatureBuffer);
    } else if (publicKey.keyCurve.curve == Curve.X25519) {
      const x25519PublicKey = new X25519PublicKey(publicKey.value);
      return x25519PublicKey.verify(challengeBuffer, signatureBuffer);
    } else if (publicKey.keyCurve.curve == Curve.SECP256K1) {
      const ec = this.getECInstanceByCurve(publicKey.keyCurve.curve);
      const decodedPubKey = base64.base64.decode(publicKeyBuffer.toString());
      return ec.verify(
        challengeBuffer,
        signatureBuffer,
        Buffer.from(decodedPubKey)
      );
    }
    return false;
  }
}
