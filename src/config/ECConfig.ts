import { BN } from "bn.js";

export class ECConfig {
  public static readonly PRIVATE_KEY_BYTE_SIZE: number = 32;
  public static readonly PUBLIC_KEY_COORDINATE_BYTE_SIZE: number = 32;
  public static readonly PUBLIC_KEY_COMPRESSED_BYTE_SIZE: number =
    ECConfig.PUBLIC_KEY_COORDINATE_BYTE_SIZE + 1;
  public static readonly SIGNATURE_MAX_BYTE_SIZE: number = 72;
  public static readonly PUBLIC_KEY_BYTE_SIZE: number =
    ECConfig.PUBLIC_KEY_COORDINATE_BYTE_SIZE * 2 + 1;

  // Field characteristic p (prime) is equal to 2^256 - 2^32 - 2^9 - 2^8 - 2^7 - 2^6 - 2^4 - 1
  public static readonly p = new BN(
    "115792089237316195423570985008687907853269984665640564039457584007908834671663",
    10
  );
  public static readonly b = new BN("7");

  // n curve order (The order of secp256k1 is n)
  public static readonly n = new BN(
    "115792089237316195423570985008687907852837564279074904382605163141518161494337",
    10
  );
}
