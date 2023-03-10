import { atom } from "jotai";
import { Domain } from "@input-output-hk/atala-prism-wallet-sdk";

export const mnemonicsAtom = atom<Domain.MnemonicWordList | undefined>(
  undefined
);
