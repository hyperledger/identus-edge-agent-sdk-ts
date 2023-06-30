import * as x25519 from "@stablelib/x25519";
import { base64url } from "multiformats/bases/base64";
import { Curve } from "../../domain";
import { KeyTypes } from "../../domain/models/Key";
import { PrivateKey } from "../../domain/models/KeyManagement";
import { KeyProperties } from "../../domain/models/KeyProperties";
import { X25519PublicKey } from "./X25519PublicKey";

/**
 * @ignore
 */
export class X25519PrivateKey extends PrivateKey {
  public static ec = x25519;
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

  getEncoded(): Buffer {
    return Buffer.from(this.nativeValue);
  }

  publicKey(): X25519PublicKey {
    const x25519PrivateKey = X25519PrivateKey.ec.generateKeyPairFromSeed(
      Buffer.from(base64url.baseDecode(Buffer.from(this.raw).toString()))
    );
    const pub = base64url.baseEncode(x25519PrivateKey.publicKey);
    return new X25519PublicKey(Buffer.from(pub));
  }
}
