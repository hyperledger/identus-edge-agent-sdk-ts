import ApolloPkg from "@atala/apollo";
import { Ed25519PublicKey } from "./Ed25519PublicKey";
import {
  Curve,
  ExportableKey,
  ImportableKey,
  KeyProperties,
  KeyTypes,
  PrivateKey,
  SignableKey
} from "../../domain";


/**
 * @ignore
 */
export class Ed25519PrivateKey extends PrivateKey implements ExportableKey, SignableKey {
  public keySpecification: Map<string, string> = new Map();
  public raw: Buffer;
  public size: number;
  public type: KeyTypes = KeyTypes.EC;

  public readonly to = ExportableKey.factory(this, { pemLabel: "PRIVATE KEY" });
  static from = ImportableKey.factory(Ed25519PrivateKey, { pemLabel: "PRIVATE KEY" });

  constructor(bytes: Int8Array | Uint8Array) {
    super();

    this.raw = this.getInstance(bytes).raw;
    this.size = this.raw.length;
    this.keySpecification.set(KeyProperties.curve, Curve.ED25519);
  }

  publicKey() {
    return new Ed25519PublicKey(this.getInstance().publicKey().raw);
  }

  getEncoded(): Buffer {
    return this.getInstance().getEncoded();
  }

  sign(message: Buffer) {
    const signature = this.getInstance().sign(new Int8Array(message));
    return Buffer.from(signature);
  }

  private getInstance(
    value?: Int8Array | Uint8Array
  ): ApolloPkg.io.iohk.atala.prism.apollo.utils.KMMEdPrivateKey {
    // eslint-disable-next-line no-extra-boolean-cast
    const bytes = !!value ? Buffer.from(value) : this.raw;
    const instance =
      new ApolloPkg.io.iohk.atala.prism.apollo.utils.KMMEdPrivateKey(
        Int8Array.from(bytes)
      );

    return instance;
  }
}
