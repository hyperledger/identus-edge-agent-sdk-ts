import * as elliptic from "elliptic";

const ec = new elliptic.ec("secp256k1");
export abstract class Secp256k1KeyCommon {
  protected static ec = ec;
  protected ec = ec;
}
