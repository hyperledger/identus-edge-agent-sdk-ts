import { KeyCurve } from './KeyCurve';

export interface PublicKey {
  curve: KeyCurve;
  value: Uint8Array;
}

export interface CompressedPublicKey {
  uncompressed: PublicKey;
  value: Uint8Array;
}
