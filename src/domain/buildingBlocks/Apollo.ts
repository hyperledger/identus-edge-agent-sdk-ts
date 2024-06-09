import { PrismDIDPublicKey } from "../../apollo/utils/PrismDIDPublicKey";
import { PrivateKey, PublicKey, Seed, SeedWords, Usage } from "../models";

import { KeyProperties } from "../models/KeyProperties";
import { MnemonicWordList } from "../models/WordList";

export interface Apollo {
  createRandomMnemonics(): MnemonicWordList;
  createSeed(mnemonics: MnemonicWordList, passphrase: string): Seed;
  createRandomSeed(passphrase?: string): SeedWords;
  createPrivateKey(parameters: {
    [name: KeyProperties | string]: any;
  }): PrivateKey;
  createPublicKey(parameters: {
    [name: KeyProperties | string]: any;
  }): PublicKey;
  createPrismDIDPublicKey(raw: PublicKey, usage: Usage): PrismDIDPublicKey
}
