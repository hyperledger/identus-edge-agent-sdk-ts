import { default as ApolloInterface } from '../domain/buildingBlocks/Apollo';

import * as BAE from 'apollo/packages/ApolloBaseAsymmetricEncryption'

const MnemonicCode = BAE.io.iohk.atala.prism.apollo.derivation.MnemonicCode;
const KeyDerivation = BAE.io.iohk.atala.prism.apollo.derivation.KeyDerivation;
const DerivationPath = BAE.io.iohk.atala.prism.apollo.derivation.DerivationPath;


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
} from '../domain/models';
import {  
  __internals,
} from '@input-output-hk/atala-prism-sdk';
import { MnemonicWordList } from '../domain/models/WordList';


export default class Apollo implements ApolloInterface {
  createRandomMnemonics(): MnemonicWordList {
    return KeyDerivation.randomMnemonicCode().words;
  }
  createSeed(mnemonics: MnemonicWordList, passphrase: string): Seed {
    const mnemonicCode = new MnemonicCode(mnemonics);
    const seed = KeyDerivation.binarySeed(mnemonicCode, passphrase);
    return { value: seed };
  }
  createRandomSeed(passphrase?: string | undefined): SeedWords {
    const mnemonics = KeyDerivation.randomMnemonicCode();
    const seed = KeyDerivation.binarySeed(mnemonics, passphrase || '');
    return {
      mnemonics: mnemonics.words,
      seed: {
        value: seed,
      },
    };
  }
  createKeyPairFromKeyCurve(seed: Seed, curve: KeyCurve): KeyPair {
    if (curve.curve === Curve.SECP256K1) {
      const derivationPath = DerivationPath.Companion.fromPath(
        `m/${curve.index}'/0'/0'`,
      );
      const extendedKey = KeyDerivation.deriveKey(seed.value, derivationPath);

      extendedKey.publicKey



      return {
        keyCurve: {
          curve: Curve.SECP256K1,
          index: curve.index || 0,
        },
        privateKey: {
          keyCurve: {
            curve: Curve.SECP256K1,
            index: curve.index || 0,
          },
          value: new Uint8Array(),
        },
        publicKey: {
          curve: {
            curve: Curve.SECP256K1,
            index: curve.index || 0,
          },
          value: new Uint8Array(),
        },
      };
    } else {
      throw new Error('Method not implemented.');
    }
  }
  createKeyPairFromPrivateKey(seed: Seed, privateKey: PrivateKey): KeyPair {
    throw new Error('Method not implemented.');
  }
  compressedPublicKeyFromPublicKey(publicKey: PublicKey): CompressedPublicKey {
    throw new Error('Method not implemented.');
  }
  compressedPublicKeyFromCompresedData(
    compressedData: Uint8Array,
  ): CompressedPublicKey {
    throw new Error('Method not implemented.');
  }
  publicKeyFromPoints(
    curve: KeyCurve,
    x: Uint8Array,
    y: Uint8Array,
  ): PublicKey {
    throw new Error('Method not implemented.');
  }
  publicKeyFromPoint(curve: KeyCurve, x: Uint8Array): PublicKey {
    throw new Error('Method not implemented.');
  }
  signByteArrayMessage(privateKey: PrivateKey, message: Uint8Array): Signature {
    throw new Error('Method not implemented.');
  }
  signStringMessage(privateKey: PrivateKey, message: string): Signature {
    throw new Error('Method not implemented.');
  }
  verifySignature(
    publicKey: PublicKey,
    challenge: Uint8Array,
    signature: Signature,
  ): boolean {
    throw new Error('Method not implemented.');
  }
}
