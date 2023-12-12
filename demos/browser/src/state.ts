import { atom } from "jotai";
import { Domain } from "@atala/prism-wallet-sdk";

export const mnemonicsAtom = atom<Domain.MnemonicWordList | undefined>(
  undefined
);
