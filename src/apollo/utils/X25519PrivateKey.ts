import { X25519PublicKey } from "./X25519PublicKey";
import {
  Curve,
  ExportableKey,
  ImportableKey,
  KeyProperties,
  KeyTypes,
  PrivateKey,
  StorableKey
} from "../../domain";

import ApolloPKG from "@hyperledger/identus-apollo";
const ApolloSDK = ApolloPKG.org.hyperledger.identus.apollo;

/**
 * @ignore
 */
export class X25519PrivateKey extends PrivateKey implements ExportableKey, StorableKey {
  public readonly recoveryId = StorableKey.recoveryId("x25519", "priv");

  public keySpecification: Map<string, string> = new Map();
  public raw: Buffer;
  public size: number;
  public type = KeyTypes.EC;

  public readonly to = ExportableKey.factory(this, { pemLabel: "PRIVATE KEY" });
  static from = ImportableKey.factory(X25519PrivateKey, { pemLabel: "PRIVATE KEY" });

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
    const instance = new ApolloSDK.utils.KMMX25519PrivateKey(Int8Array.from(bytes));

    return instance;
  }
}
