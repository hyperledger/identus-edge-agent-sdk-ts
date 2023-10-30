import * as x25519 from "@stablelib/x25519";
import { base64url } from "multiformats/bases/base64";
import { Curve, KeyTypes, PrivateKey } from "../../domain";
import { KeyProperties } from "../../domain/models/KeyProperties";
import { X25519PublicKey } from "./X25519PublicKey";

/**
 * @ignore
 */
export class X25519PrivateKey extends PrivateKey {
  public static ec = x25519;
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
