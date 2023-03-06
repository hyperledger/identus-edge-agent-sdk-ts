import { atom } from "jotai";
import { Domain } from "@input-output-hk/atala-prism-wallet-sdk";

export const mnemonicsAtom = atom<Domain.MnemonicWordList | undefined>(
  undefined
);
export const keyPairAtom = atom<Domain.KeyPair | undefined>(undefined);
export const keyPairSecp256Atom = atom<Domain.KeyPair | undefined>(undefined);
export const keyPairEd25519Atom = atom<Domain.KeyPair | undefined>(undefined);
export const keyPairX25519Atom = atom<Domain.KeyPair | undefined>(undefined);
