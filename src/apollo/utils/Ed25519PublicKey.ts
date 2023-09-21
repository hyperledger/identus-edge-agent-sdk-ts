import { base64url } from "multiformats/bases/base64";
import { Curve, KeyTypes, PublicKey } from "../../domain";
import { KeyProperties } from "../../domain/models/KeyProperties";
import { VerifiableKey } from "../../domain/models/keyManagement/VerifiableKey";
import ApolloBaseAsymmetricEncryption from "apollo/packages/ApolloBaseAsymmetricEncryption";

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
    const instance = this.getInstance();
    return Buffer.from(base64url.baseEncode(instance.raw));
  }

  verify(message: Buffer, signature: Buffer) {
    const instance = this.getInstance();
    return instance.verify(
      message as any,
      signature as unknown as any
    );
  }

  private getInstance(value?: Int8Array | Uint8Array): ApolloBaseAsymmetricEncryption.io.iohk.atala.prism.apollo.utils.KMMEdPublicKey {
    const bytes = !!value ? Buffer.from(value) : this.raw;
    const instance = new ApolloBaseAsymmetricEncryption.io.iohk.atala.prism.apollo.utils.KMMEdPublicKey(
      Int8Array.from(bytes)
    );

    return instance;
  }
}
