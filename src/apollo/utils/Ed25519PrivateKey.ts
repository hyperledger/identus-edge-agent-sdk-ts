import elliptic from "elliptic";
import { base64url } from "multiformats/bases/base64";
import { Curve } from "../../domain";
import { KeyTypes } from "../../domain/models/Key";
import { PrivateKey } from "../../domain/models/KeyManagement";
import { KeyProperties } from "../../domain/models/KeyProperties";
import { SignableKey } from "../../domain/models/SignableKey";
import { Ed25519PublicKey } from "./Ed25519PublicKey";

/**
 * @ignore
 */
export class Ed25519PrivateKey extends PrivateKey implements SignableKey {
  public static eddsa = new elliptic.eddsa("ed25519");

  public type: KeyTypes = "eddsa";
  public size;
  public raw: Uint8Array;
  public keySpecification: Map<string, string> = new Map();

  constructor(nativeValue: Uint8Array) {
    super();
    this.raw = nativeValue;
    this.size = this.raw.length;
    this.keySpecification.set(KeyProperties.curve, Curve.ED25519);
  }

  publicKey() {
    const prv = this.getInstance();
    return new Ed25519PublicKey(
      Buffer.from(base64url.baseEncode(prv.getPublic()))
    );
  }

  private getInstance(): elliptic.eddsa.KeyPair {
    return Ed25519PrivateKey.eddsa.keyFromSecret(
      Buffer.from(base64url.baseDecode(this.raw.toString()))
    );
  }

  getEncoded(): Buffer {
    return Buffer.from(base64url.baseEncode(this.getInstance().getSecret()));
  }

  sign(message: Buffer) {
    const signature = this.getInstance().sign(message);
    return signature.toBytes();
  }
}
