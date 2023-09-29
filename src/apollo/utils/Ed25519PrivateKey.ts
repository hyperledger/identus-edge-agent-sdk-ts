import ApolloBaseAsymmetricEncryption from "apollo/packages/ApolloBaseAsymmetricEncryption";
import { Curve, KeyTypes, PrivateKey } from "../../domain";
import { KeyProperties } from "../../domain/models/KeyProperties";
import { SignableKey } from "../../domain/models/keyManagement/SignableKey";
import { Ed25519PublicKey } from "./Ed25519PublicKey";

/**
 * @ignore
 */
export class Ed25519PrivateKey extends PrivateKey implements SignableKey {
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

  private getInstance(value?: Int8Array | Uint8Array): ApolloBaseAsymmetricEncryption.io.iohk.atala.prism.apollo.utils.KMMEdPrivateKey {
    const bytes = !!value ? Buffer.from(value) : this.raw;
    const instance = new ApolloBaseAsymmetricEncryption.io.iohk.atala.prism.apollo.utils.KMMEdPrivateKey(
      Int8Array.from(bytes)
    );

    return instance;
  }

  public readonly to = {
    Buffer: () => this.getEncoded(),
    Hex: () => this.to.Buffer().toString("hex")
  };

  static from = {
    Buffer: (value: Buffer) => new Ed25519PrivateKey(Int8Array.from(value)),
    Hex: (value: string) => Ed25519PrivateKey.from.Buffer(Buffer.from(value, "hex")),
    String: (value: string) => Ed25519PrivateKey.from.Buffer(Buffer.from(value)),
  };
}
