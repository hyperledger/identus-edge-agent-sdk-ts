import { curve } from "elliptic";
import { KeyPair } from "../../domain";

interface PublicJson {
  kty: string;
  kid: string;
  crv: string;
  publicKey: string;
}

interface PrivateJson {
  kty: string;
  kid: string;
  crv: string;
  privateKey: string;
  publicKey: string;
}

export class OctetKeyPair {
  private kty = "OKP";
  public kid: string;
  public crv: string;
  public privateKey: string;
  public publicKey: string;

  constructor(id: string, from: KeyPair) {
    this.kid = id;
    this.crv = from.keyCurve.curve;
    this.privateKey = from.privateKey.value.toString("hex");
    this.publicKey = from.publicKey.toString("base64url");
  }

  public get publicJson(): string | null {
    const publicJson: PublicJson = {
      kty: this.kty,
      kid: this.kid,
      crv: this.crv,
      publicKey: this.publicKey,
    };
    try {
      const dataJson = JSON.stringify(publicJson);
      return dataJson;
    } catch {
      return null;
    }
  }

  public get privateJson(): string | null {
    const privateJson: PrivateJson = {
      kty: this.kty,
      kid: this.kid,
      crv: this.crv,
      privateKey: this.privateKey,
      publicKey: this.publicKey,
    };
    try {
      const dataJson = JSON.stringify(privateJson);
      return dataJson;
    } catch {
      return null;
    }
  }
}
