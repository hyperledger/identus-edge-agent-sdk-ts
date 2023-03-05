import {
  CompressedPublicKey,
  KeyCurve,
  KeyPair,
  PrivateKey,
  PublicKey,
  Seed,
  SeedWords,
  Signature,
} from "../models";
import { MnemonicWordList } from "../models/WordList";

export default interface Apollo {
  createRandomMnemonics(): MnemonicWordList;
  createSeed(mnemonics: MnemonicWordList, passphrase: string): Seed;
  createRandomSeed(passphrase?: string): SeedWords;
  createKeyPairFromKeyCurve(seed: Seed, curve: KeyCurve): KeyPair;
  createKeyPairFromPrivateKey(seed: Seed, privateKey: PrivateKey): KeyPair;
  compressedPublicKeyFromPublicKey(publicKey: PublicKey): CompressedPublicKey;
  compressedPublicKeyFromCompresedData(
    compressedData: Uint8Array
  ): CompressedPublicKey;
  publicKeyFromPoints(curve: KeyCurve, x: Uint8Array, y: Uint8Array): PublicKey;
  publicKeyFromPoint(curve: KeyCurve, x: Uint8Array): PublicKey;
  signByteArrayMessage(privateKey: PrivateKey, message: Uint8Array): Signature;
  signStringMessage(privateKey: PrivateKey, message: string): Signature;
  verifySignature(
    publicKey: PublicKey,
    challenge: Uint8Array,
    signature: Signature
  ): boolean;

  getPrivateJWKJson(id: string, keyPair: KeyPair): string;
  getPublicJWKJson(id: string, keyPair: KeyPair): string;
}
