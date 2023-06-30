import { PrivateKey, Seed, SeedWords } from "../models";

import { KeyProperties } from "../models/KeyProperties";
import { MnemonicWordList } from "../models/WordList";

export interface Apollo {
  createRandomMnemonics(): MnemonicWordList;
  createSeed(mnemonics: MnemonicWordList, passphrase: string): Seed;
  createRandomSeed(passphrase?: string): SeedWords;
  createPrivateKey(parameters: {
    [name: KeyProperties | string]: any;
  }): PrivateKey;
}
