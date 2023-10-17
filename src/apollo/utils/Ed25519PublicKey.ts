import ApolloBaseAsymmetricEncryption from "@input-output-hk/apollo";
import { Curve, KeyTypes, PublicKey } from "../../domain";
import { KeyProperties } from "../../domain/models/KeyProperties";
import { VerifiableKey } from "../../domain/models/keyManagement/VerifiableKey";

/**
 * @ignore
 */
export class Ed25519PublicKey extends PublicKey implements VerifiableKey {
  public keySpecification: Map<string, string> = new Map();
  public raw: Buffer;
  public size: number;
  public type: KeyTypes = KeyTypes.EC;

  constructor(bytes: Int8Array | Uint8Array) {
    super();

    this.raw = this.getInstance(bytes).raw;
    this.size = this.raw.length;
    this.keySpecification.set(KeyProperties.curve, Curve.ED25519);
  }

  getEncoded(): Buffer {
    return this.getInstance().getEncoded();
  }

  verify(message: Buffer, signature: Buffer) {
    return this.getInstance().verify(
      Int8Array.from(message),
      Int8Array.from(signature)
    );
  }

  private getInstance(
    value?: Int8Array | Uint8Array
  ): ApolloBaseAsymmetricEncryption.io.iohk.atala.prism.apollo.utils.KMMEdPublicKey {
    // eslint-disable-next-line no-extra-boolean-cast
    const bytes = !!value ? Buffer.from(value) : this.raw;
    const instance =
      new ApolloBaseAsymmetricEncryption.io.iohk.atala.prism.apollo.utils.KMMEdPublicKey(
        Int8Array.from(bytes)
      );

    return instance;
  }
}
