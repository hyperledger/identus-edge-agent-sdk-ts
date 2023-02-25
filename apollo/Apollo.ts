import { default as ApolloInterface } from "../domain/buildingBlocks/Apollo";
import * as bip39 from "bip39";
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

const EC = elliptic.ec;
const EDDSA = elliptic.eddsa;

const ec = new EC("secp256k1");
const eddsa = new EDDSA("ed25519");

export default class Apollo implements ApolloInterface {
  private getKeyPairForCurve(seed: Seed, curve: KeyCurve): KeyPair {
    if (curve.curve == Curve.SECP256K1 || curve.curve == Curve.X25519) {
      const keyPair = ec.genKeyPair({ entropy: seed.value });
      return {
        keyCurve: curve,
        privateKey: {
          keyCurve: curve,
          value: keyPair.getPrivate("hex"),
        },
        publicKey: {
          keyCurve: curve,
          value: keyPair.getPublic().encode("hex", true),
        },
      };
    } else if (curve.curve == Curve.ED25519) {
      const prv = eddsa.keyFromSecret(Buffer.from(seed.value));
      return {
        keyCurve: curve,
        privateKey: {
          keyCurve: curve,
          value: prv.getSecret("hex"),
        },
        publicKey: {
          keyCurve: curve,
          value: prv.getPublic("hex"),
        },
      };
    } else {
      throw new Error("Method not implemented.");
    }
  }
  createRandomMnemonics(): MnemonicWordList {
    return bip39.generateMnemonic(256).split(" ") as MnemonicWordList;
  }
  createSeed(mnemonics: MnemonicWordList, passphrase?: string): Seed {
    const mnemonicString = mnemonics.join(" ");
    bip39.validateMnemonic(mnemonicString);
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
    const keyPair = ec.keyFromPublic(publicKey.value);
    return {
      uncompressed: {
        keyCurve: publicKey.keyCurve,
        value: keyPair.getPublic().encode("hex", true),
      },
      value: keyPair.getPublic().encode("hex", true),
    };
  }
  compressedPublicKeyFromCompresedData(
    compressedData: Uint8Array
  ): CompressedPublicKey {
    throw new Error("Method not implemented.");
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
      value: publicKey.getPublic().encode("hex", true),
    };
  }
  publicKeyFromPoint(curve: KeyCurve, x: Uint8Array): PublicKey {
    throw new Error("Method not implemented.");
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
      const keyPair = ec.keyFromPrivate(privateKey.value, "hex");
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
      return eddsa.verify(challengeBuffer, signatureBuffer, publicKey.value);
    } else if (
      publicKey.keyCurve.curve == Curve.SECP256K1 ||
      publicKey.keyCurve.curve == Curve.X25519
    ) {
      return ec.verify(
        challengeBuffer,
        signatureBuffer,
        Buffer.from(publicKey.value, "hex")
      );
    }
    throw new Error("Method not implemented.");
  }
}
