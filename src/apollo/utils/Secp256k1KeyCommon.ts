import elliptic from "elliptic";

const ec = new elliptic.ec("secp256k1");

/**
 * @ignore
 */
export abstract class Secp256k1KeyCommon {
  public static ec = ec;
  public ec = ec;
}
