import { Ed25519PublicKey } from "./Ed25519PublicKey";
import { X25519PrivateKey } from "./X25519PrivateKey";
import {
  Curve,
  ExportableKey,
  ImportableKey,
  KeyProperties,
  KeyTypes,
  PrivateKey,
  StorableKey,
  SignableKey
} from "../../domain";

import ApolloPKG from "@atala/apollo";
const ApolloSDK = ApolloPKG.org.hyperledger.identus.apollo;

/**
 * @ignore
 */
export class Ed25519PrivateKey extends PrivateKey implements ExportableKey, SignableKey, StorableKey {
  public readonly recoveryId = StorableKey.recoveryId("ed25519", "priv");


  public keySpecification: Map<string, string> = new Map();
  public raw: Buffer;
  public size: number;
  public type = KeyTypes.EC;

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

  x25519() {
    const key = this.getInstance().x25519PrivateKey();
    return X25519PrivateKey.from.Buffer(key.raw);
  }

  private getInstance(
    value?: Int8Array | Uint8Array
  ) {
    // eslint-disable-next-line no-extra-boolean-cast
    const bytes = !!value ? Buffer.from(value) : this.raw;
    const instance = new ApolloSDK.utils.KMMEdPrivateKey(Int8Array.from(bytes));

    return instance;
  }
}
