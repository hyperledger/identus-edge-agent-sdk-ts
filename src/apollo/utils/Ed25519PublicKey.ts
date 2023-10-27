import elliptic from "elliptic";
import { base64url } from "multiformats/bases/base64";
import { Curve, KeyTypes, PublicKey } from "../../domain";
import { KeyProperties } from "../../domain/models/KeyProperties";
import { VerifiableKey } from "../../domain/models/keyManagement/VerifiableKey";
/**
 * @ignore
 */
export class Ed25519PublicKey extends PublicKey implements VerifiableKey {
  public static eddsa = new elliptic.eddsa("ed25519");

  public type: KeyTypes = KeyTypes.EC;
  public keySpecification: Map<string, string> = new Map();
  public size;
  public raw: Uint8Array;

  constructor(nativeValue: Uint8Array) {
    super();
    this.raw = nativeValue;
    this.size = this.raw.length;
    this.keySpecification.set(KeyProperties.curve, Curve.ED25519);
  }

  private getInstance(): elliptic.eddsa.KeyPair {
    return Ed25519PublicKey.eddsa.keyFromPublic(
      Array.from(base64url.baseDecode(this.raw.toString())) as unknown as Buffer
    );
  }

  getEncoded(): Buffer {
    return Buffer.from(base64url.baseEncode(this.getInstance().getPublic()));
  }

  verify(message: Buffer, signature: Buffer) {
    //TODO: Report a bug in elliptic, this method is not expecting a Buffer (bytes)
    //Internally it expects to find an array, if not Buffer.slice.concat fails when Array.slice.concat doesn't
    //Must keep this...
    return this.getInstance().verify(
      message,
      Array.from(signature) as unknown as Buffer
    );
  }
}
