import ApolloBaseAsymmetricEncryption from "@atala/apollo";
import { Curve, KeyTypes, PrivateKey } from "../../domain";
import { KeyProperties } from "../../domain/models/KeyProperties";
import { X25519PublicKey } from "./X25519PublicKey";

/**
 * @ignore
 */
export class X25519PrivateKey extends PrivateKey {
  public keySpecification: Map<string, string> = new Map();
  public raw: Buffer;
  public size: number;
  public type: KeyTypes = KeyTypes.EC;

  constructor(bytes: Int8Array | Uint8Array) {
    super();

    this.raw = this.getInstance(bytes).raw;
    this.size = this.raw.length;
    this.keySpecification.set(KeyProperties.curve, Curve.X25519);
  }

  getEncoded(): Buffer {
    return this.getInstance().getEncoded();
  }

  publicKey(): X25519PublicKey {
    return new X25519PublicKey(this.getInstance().publicKey().raw);
  }

  private getInstance(value?: Int8Array | Uint8Array) {
    // eslint-disable-next-line no-extra-boolean-cast
    const bytes = !!value ? Buffer.from(value) : this.raw;
    const instance =
      new ApolloBaseAsymmetricEncryption.io.iohk.atala.prism.apollo.utils.KMMX25519PrivateKey(
        Int8Array.from(bytes)
      );

    return instance;
  }

  public readonly to = {
    Buffer: () => Buffer.from(this.raw),
    Hex: () => this.to.Buffer().toString("hex"),
  };

  static from = {
    Buffer: (value: Buffer) => new X25519PrivateKey(new Uint8Array(value)),
    Hex: (value: string) =>
      X25519PrivateKey.from.Buffer(Buffer.from(value, "hex")),
    String: (value: string) => X25519PrivateKey.from.Buffer(Buffer.from(value)),
  };
}
