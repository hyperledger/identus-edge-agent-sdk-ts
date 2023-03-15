import { atom } from "jotai";
import { Domain } from "../../";

export const mnemonicsAtom = atom<Domain.MnemonicWordList | undefined>(
  undefined
);
