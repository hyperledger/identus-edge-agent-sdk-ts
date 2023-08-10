import { BN } from "bn.js";

export const PRIVATE_KEY_BYTE_SIZE = 32;
export const PUBLIC_KEY_COORDINATE_BYTE_SIZE = 32;
export const PUBLIC_KEY_COMPRESSED_BYTE_SIZE: number =
  PUBLIC_KEY_COORDINATE_BYTE_SIZE + 1;
export const SIGNATURE_MAX_BYTE_SIZE = 72;
export const PUBLIC_KEY_BYTE_SIZE: number =
  PUBLIC_KEY_COORDINATE_BYTE_SIZE * 2 + 1;

// Field characteristic p (prime) is equal to 2^256 - 2^32 - 2^9 - 2^8 - 2^7 - 2^6 - 2^4 - 1
export const p = new BN(
  "115792089237316195423570985008687907853269984665640564039457584007908834671663",
  10
);
export const b = new BN("7");

// n curve order (The order of secp256k1 is n)
export const n = new BN(
  "115792089237316195423570985008687907852837564279074904382605163141518161494337",
  10
);
