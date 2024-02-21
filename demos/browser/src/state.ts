import { atom } from "jotai";
import SDK from "@atala/prism-wallet-sdk";

export const mnemonicsAtom = atom<SDK.Domain.MnemonicWordList | undefined>(
  undefined
);
