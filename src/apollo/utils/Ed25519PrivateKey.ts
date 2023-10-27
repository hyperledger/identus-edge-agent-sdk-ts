import elliptic from "elliptic";
import { base64url } from "multiformats/bases/base64";
import { Curve, KeyTypes, PrivateKey } from "../../domain";
import { KeyProperties } from "../../domain/models/KeyProperties";
import { SignableKey } from "../../domain/models/keyManagement/SignableKey";
import { Ed25519PublicKey } from "./Ed25519PublicKey";

/**
 * @ignore
 */
export class Ed25519PrivateKey extends PrivateKey implements SignableKey {
  public static eddsa = new elliptic.eddsa("ed25519");

  public type: KeyTypes = KeyTypes.EC;
  public size;
  public raw: Uint8Array;
  public keySpecification: Map<string, string> = new Map();

  // TODO - nativeValue wants a Buffer, otherwise getInstance breaks
  constructor(nativeValue: Uint8Array) {
    super();
    this.raw = nativeValue;
    this.size = this.raw.length;
    this.keySpecification.set(KeyProperties.curve, Curve.ED25519);
  }

  publicKey() {
    const prv = this.getInstance();
    return new Ed25519PublicKey(
      Buffer.from(base64url.baseEncode(prv.getPublic()))
    );
  }

  private getInstance(): elliptic.eddsa.KeyPair {
    return Ed25519PrivateKey.eddsa.keyFromSecret(
      Buffer.from(base64url.baseDecode(this.raw.toString()))
    );
  }

  getEncoded(): Buffer {
    return Buffer.from(base64url.baseEncode(this.getInstance().getSecret()));
  }

  sign(message: Buffer) {
    const signature = this.getInstance().sign(message);
    return signature.toBytes();
  }

  public readonly to = {
    Buffer: () => this.getEncoded(),
    Hex: () => this.to.Buffer().toString("hex")
  };

  static from = {
    Buffer: (value: Buffer) => new Ed25519PrivateKey(value),
    Hex: (value: string) => Ed25519PrivateKey.from.Buffer(Buffer.from(value, "hex")),
    String: (value: string) => Ed25519PrivateKey.from.Buffer(Buffer.from(value)),
  };
}
