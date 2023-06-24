import * as x25519 from "@stablelib/x25519";
import { Curve } from "../../domain";
import { KeyTypes } from "../../domain/models/Key";
import { PublicKey } from "../../domain/models/KeyManagement";
import { KeyProperties } from "../../domain/models/KeyProperties";
/**
 * @ignore
 */
export class X25519PublicKey extends PublicKey {
  public static ec = x25519;
  public type: KeyTypes = "EC";
  public keySpecification: Map<string, string> = new Map();
  public size: number;
  public raw: Uint8Array;

  constructor(private nativeValue: Uint8Array) {
    super();
    this.raw = nativeValue;
    this.size = this.raw.length;
    this.keySpecification.set(KeyProperties.curve, Curve.X25519);
  }

  getEncoded(): Buffer {
    return Buffer.from(this.nativeValue);
  }
}
