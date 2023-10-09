import ApolloBaseAsymmetricEncryption from "@input-output-hk/apollo";
import { Curve, KeyTypes, PublicKey } from "../../domain";
import { KeyProperties } from "../../domain/models/KeyProperties";

/**
 * @ignore
 */
export class X25519PublicKey extends PublicKey {
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

  private getInstance(value?: Int8Array | Uint8Array) {
    const bytes = !!value ? Buffer.from(value) : this.raw;
    const instance =
      new ApolloBaseAsymmetricEncryption.io.iohk.atala.prism.apollo.utils.KMMX25519PublicKey(
        Int8Array.from(bytes)
      );

    return instance;
  }
}
