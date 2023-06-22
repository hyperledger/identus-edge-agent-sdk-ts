import { default as ApolloInterface } from "../domain/buildingBlocks/Apollo";
import * as bip39 from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";

import elliptic from "elliptic";
import {
  Seed,
  SeedWords,
  KeyCurve,
  KeyPair,
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
import { Secp256k1PrivateKey } from "./utils/Secp256k1PrivateKey";
import { Ed25519PrivateKey } from "./utils/Ed25519PrivateKey";
import { Ed25519KeyPair } from "./utils/Ed25519KeyPair";
import { X25519KeyPair } from "./utils/X25519KeyPair";
import { ApolloError } from "../domain/models/Errors";

import { OctetKeyPair } from "./models/OctetKeyPair";
import { X25519PrivateKey } from "./utils/X25519PrivateKey";
import { Secp256k1KeyPair } from "./utils/Secp256k1KeyPair";
import { PrivateKey, PublicKey } from "../domain/models/KeyManagement";
import { KeyProperties } from "../domain/models/KeyProperties";

const EC = elliptic.ec;

export default class Apollo implements ApolloInterface {
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
      return keyPair;
    } else if (curve.curve == Curve.ED25519) {
      const keyPair = Ed25519KeyPair.generateKeyPair();
      return keyPair;
    } else if (curve.curve == Curve.X25519) {
      const keyPair = X25519KeyPair.generateKeyPair();
      return keyPair;
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
  createKeyPairFromKeyCurve(curve: KeyCurve, seed?: Seed): KeyPair {
    return this.getKeyPairForCurve(curve, seed);
  }
  createKeyPairFromPrivateKey(privateKey: PrivateKey): KeyPair {
    const curve = privateKey.getProperty(KeyProperties.curve);
    if (curve == Curve.SECP256K1) {
      const secp256k1PrivateKey = Secp256k1PrivateKey.secp256k1FromBytes(
        privateKey.raw
      );
      const secp256k1PublicKey = secp256k1PrivateKey.publicKey();
      return new Secp256k1KeyPair(secp256k1PrivateKey, secp256k1PublicKey);
    } else if (curve == Curve.ED25519) {
      const ed25519PrivateKey = new Ed25519PrivateKey(privateKey.raw);
      const ed25519PublicKey = ed25519PrivateKey.publicKey();
      return new Ed25519KeyPair(ed25519PrivateKey, ed25519PublicKey);
    } else if (curve == Curve.X25519) {
      const x25519PrivateKey = new X25519PrivateKey(privateKey.raw);
      const x25519PublicKey = x25519PrivateKey.publicKey();
      return new X25519KeyPair(x25519PrivateKey, x25519PublicKey);
    }
    throw new Error("Method not implemented.");
  }
  signByteArrayMessage(privateKey: PrivateKey, message: Uint8Array): Signature {
    const messageBuffer = Buffer.from(message);
    if (privateKey.isSignable()) {
      return {
        value: Buffer.from(privateKey.sign(messageBuffer)),
      };
    }

    const curve = privateKey.getProperty(KeyProperties.curve);
    throw new ApolloError.InvalidKeyCurve(
      `${curve} key cannot be used for signatures`
    );
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
    signature: Uint8Array
  ): boolean {
    const curve = publicKey.getProperty(KeyProperties.curve);

    const challengeBuffer = Buffer.from(challenge);
    const signatureBuffer = Buffer.from(signature);

    if (publicKey.canVerify()) {
      return publicKey.verify(challengeBuffer, signatureBuffer);
    }

    throw new ApolloError.InvalidKeyCurve(
      `${curve} key cannot be used to verify signatures`
    );
  }
  getPrivateJWKJson(id: string, keyPair: KeyPair): string {
    const jsonString = new OctetKeyPair(id, keyPair).privateJson;
    return jsonString;
  }
  getPublicJWKJson(id: string, keyPair: KeyPair): string {
    const jsonString = new OctetKeyPair(id, keyPair).publicJson;
    return jsonString;
  }
}
