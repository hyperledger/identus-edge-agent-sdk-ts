import * as x25519 from "@stablelib/x25519";
import { base64url } from "multiformats/bases/base64";
import { Curve, KeyTypes, KeyProperties, PublicKey, StorableKey } from "../../domain";

/**
 * @ignore
 */
export class X25519PublicKey extends PublicKey implements StorableKey {
  public static ec = x25519;
  public readonly restorationIdentifier = "x25519+pub";

  public type: KeyTypes = KeyTypes.EC;
  public keySpecification: Map<string, string> = new Map();
  public size: number;
  public raw: Uint8Array;

  constructor(private nativeValue: Uint8Array) {
    super();
    this.raw = nativeValue;
    this.size = this.raw.length;
    this.keySpecification.set(KeyProperties.curve, Curve.X25519);
  }

  get storableData() {
    return this.raw;
  }

  getEncoded(): Buffer {
    return Buffer.from(base64url.baseEncode(this.nativeValue));
  }
}
