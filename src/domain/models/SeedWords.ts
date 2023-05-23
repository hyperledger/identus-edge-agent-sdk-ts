import { Seed } from './Seed';
import { MnemonicWordList } from './WordList';

export interface SeedWords {
  mnemonics: MnemonicWordList;
  seed: Seed;
}
