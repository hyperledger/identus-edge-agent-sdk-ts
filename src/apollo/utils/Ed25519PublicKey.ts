import ApolloPkg from "@atala/apollo";
import {
  Curve,
  ExportableKey,
  ImportableKey,
  KeyProperties,
  KeyTypes,
  PublicKey,
  StorableKey,
  VerifiableKey
} from "../../domain";

/**
 * @ignore
 */
export class Ed25519PublicKey extends PublicKey implements ExportableKey, StorableKey, VerifiableKey {
  public readonly recoveryId = StorableKey.recoveryId("ed25519", "pub");


  public keySpecification: Map<string, string> = new Map();
  public raw: Buffer;
  public size: number;
  public type = KeyTypes.EC;

  public readonly to = ExportableKey.factory(this, { pemLabel: "PUBLIC KEY" });
  static from = ImportableKey.factory(Ed25519PublicKey, { pemLabel: "PUBLIC KEY" });

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
  ): ApolloPkg.io.iohk.atala.prism.apollo.utils.KMMEdPublicKey {
    // eslint-disable-next-line no-extra-boolean-cast
    const bytes = !!value ? Buffer.from(value) : this.raw;
    const instance =
      new ApolloPkg.io.iohk.atala.prism.apollo.utils.KMMEdPublicKey(
        Int8Array.from(bytes)
      );

    return instance;
  }
}
