import {
  Curve,
  ExportableKey,
  ImportableKey,
  KeyProperties,
  KeyTypes,
  PublicKey,
  StorableKey
} from "../../domain";

import ApolloPKG from "@hyperledger/identus-apollo";
const ApolloSDK = ApolloPKG.org.hyperledger.identus.apollo;

/**
 * @ignore
 */
export class X25519PublicKey extends PublicKey implements ExportableKey, StorableKey {
  public readonly recoveryId = StorableKey.recoveryId("x25519", "pub");

  public keySpecification: Map<string, string> = new Map();
  public raw: Buffer;
  public size: number;
  public type = KeyTypes.EC;

  public readonly to = ExportableKey.factory(this, { pemLabel: "PUBLIC KEY" });
  static from = ImportableKey.factory(X25519PublicKey, { pemLabel: "PUBLIC KEY" });

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
    // eslint-disable-next-line no-extra-boolean-cast
    const bytes = !!value ? Buffer.from(value) : this.raw;
    const instance = new ApolloSDK.utils.KMMX25519PublicKey(Int8Array.from(bytes));

    return instance;
  }
}
