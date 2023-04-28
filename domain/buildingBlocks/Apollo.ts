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
  createKeyPairFromKeyCurve(curve: KeyCurve, seed?: Seed): KeyPair;
  createKeyPairFromPrivateKey(privateKey: PrivateKey): KeyPair;
  compressedPublicKeyFromPublicKey(publicKey: PublicKey): CompressedPublicKey;
  compressedPublicKeyFromCompressedData(
    compressedData: Uint8Array
  ): CompressedPublicKey;
  publicKeyFromPoints(curve: KeyCurve, x: Uint8Array, y: Uint8Array): PublicKey;
  publicKeyFromPoint(curve: KeyCurve, x: Uint8Array): PublicKey;
  signByteArrayMessage(privateKey: PrivateKey, message: Uint8Array): Signature;
  signStringMessage(privateKey: PrivateKey, message: string): Signature;
  verifySignature(
    publicKey: PublicKey,
    challenge: Uint8Array,
    signature: Uint8Array
  ): boolean;
  getPrivateJWKJson(id: string, keyPair: KeyPair): string;
  getPublicJWKJson(id: string, keyPair: KeyPair): string;
}
