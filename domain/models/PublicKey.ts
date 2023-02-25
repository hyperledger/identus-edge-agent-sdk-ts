import { KeyCurve } from "./KeyCurve";

export interface PublicKey {
  keyCurve: KeyCurve;
  value: string;
}

export interface CompressedPublicKey {
  uncompressed: PublicKey;
  value: string;
}
