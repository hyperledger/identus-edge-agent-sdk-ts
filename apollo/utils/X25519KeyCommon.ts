import * as elliptic from "elliptic";

const ec = new elliptic.ec("curve25519");
export abstract class X25519KeyCommon {
  public static ec = ec;
  public ec = ec;
}
