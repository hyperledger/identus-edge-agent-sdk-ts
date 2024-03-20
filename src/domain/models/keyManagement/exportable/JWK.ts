import { PrivateKey } from "../PrivateKey";
import { PublicKey } from "../PublicKey";

/**
 * JWK
 */
export type JWK = JWK.EC | JWK.OCT | JWK.OKP | JWK.RSA;

/**
 * JWK definitions
 * based on https://www.iana.org/assignments/jose/jose.xhtml
 */
export namespace JWK {
  export type key_ops =
    | "sign"
    | "verify"
    | "encrypt"
    | "decrypt"
    | "wrapKey"
    | "unwrapKey"
    | "deriveKey"
    | "deriveBits";

  // Properties common across all JWK variances
  export interface Base {
    // Algorithm
    alg?: string;
    // Extractable
    ext?: boolean;
    // Key operations
    key_ops?: key_ops[];
    // Key ID
    kid?: string;
    // Key Type
    kty?: string;
    // Public key use
    use?: "sig" | "enc";
    // X.509 Certificate chain
    x5c?: string[];
    // X.509 Certificate SHA-1 Thumbprint
    x5t?: string;
    // X.509 Certificate SHA-256 Thumbprint
    'x5t#S256'?: string;
    // X.509 URL
    x5u?: string;

    [propName: string]: unknown;
  }

  // Elliptic Curve (DSS) key type 
  export interface EC extends Base {
    kty: "EC";
    // curve
    crv: string;
    // ECC private key
    d?: string;
    // X coord
    x?: string;
    // Y coord
    y?: string;
  }

  // Octet sequence key type
  export interface OCT extends Base {
    kty: "oct";
    // key value
    k: string;
  }

  // Octet key pair 
  export interface OKP extends Base {
    kty: "OKP";
    // subtype of key pair
    crv: string;
    // private key (base64url)
    d?: string;
    // public key (base64url)
    x: string;
  }

  // RSA
  export interface RSA extends Base {
    kty: "RSA";
    d: string;
    dp: string;
    dq: string;
    e: string;
    n: string;
    oth: Array<{
      d?: string;
      r?: string;
      t?: string;
    }>;
    p: string;
    q: string;
    qi: string;
  }


  /**
   * create a JWK from a given Key
   * 
   * @param {PublicKey | PrivateKey} key
   * @param base - set of JWK properties to be added
   * @returns {JWK}
   */
  export const fromKey = (key: PublicKey | PrivateKey, base: Base = {}): JWK => {
    const prototype = Object.getPrototypeOf(key);

    if (prototype instanceof PublicKey) {
      return Object.assign({}, base, publicKeyToJWK(key as PublicKey));
    }

    if (prototype instanceof PrivateKey) {
      return Object.assign({}, base, privateKeyToJWK(key as PrivateKey));
    }

    throw new Error("invalid Key given");
  };

  /**
   * create a JWK OKP from a PrivateKey
   * 
   * @param key 
   * @returns 
   */
  const privateKeyToJWK = (key: PrivateKey): JWK => ({
    kty: "OKP",
    crv: key.curve,
    d: key.to.String("base64url"),
    x: key.publicKey().to.String("base64url")
  });

  /**
   * create a JWK OKP from a PublicKey
   * 
   * @param key 
   * @returns 
   */
  const publicKeyToJWK = (key: PublicKey): JWK => ({
    kty: "OKP",
    crv: key.curve,
    x: key.to.String("base64url")
  });
}
