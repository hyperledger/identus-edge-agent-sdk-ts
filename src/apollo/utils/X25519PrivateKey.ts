import * as x25519 from "@stablelib/x25519";
import { base64url } from "multiformats/bases/base64";
import { X25519PublicKey } from "./X25519PublicKey";
import { Curve, KeyTypes, KeyProperties, PrivateKey, StorableKey } from "../../domain";

/**
 * @ignore
 */
export class X25519PrivateKey extends PrivateKey implements StorableKey {
  public static ec = x25519;
  public readonly recoveryId = "x25519+priv";

  public type: KeyTypes = KeyTypes.Curve25519;
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

  publicKey(): X25519PublicKey {
    const x25519PrivateKey = X25519PrivateKey.ec.generateKeyPairFromSeed(
      Buffer.from(this.raw)
    );
    const pub = x25519PrivateKey.publicKey;
    return new X25519PublicKey(Buffer.from(pub));
  }

  public readonly to = {
    Buffer: () => this.getEncoded(),
    Hex: () => this.to.Buffer().toString("hex"),
  };

  static from = {
    Buffer: (value: Buffer) => new X25519PrivateKey(new Uint8Array(value)),
    Hex: (value: string) =>
      X25519PrivateKey.from.Buffer(Buffer.from(value, "hex")),
    String: (value: string) => X25519PrivateKey.from.Buffer(Buffer.from(value)),
  };
}
