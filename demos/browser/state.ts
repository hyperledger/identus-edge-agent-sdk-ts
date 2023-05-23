import { atom } from "jotai";
import { Domain } from "../../src";

export const mnemonicsAtom = atom<Domain.MnemonicWordList | undefined>(
  undefined
);
