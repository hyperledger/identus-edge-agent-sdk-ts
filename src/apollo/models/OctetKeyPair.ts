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
    this.crv = from.curve;
    this.privateKey = Buffer.from(from.privateKey.value).toString();
    this.publicKey = Buffer.from(from.publicKey.value).toString();
  }

  public get publicJson(): string {
    const publicJson: PublicJson = {
      kty: this.kty,
      kid: this.kid,
      crv: this.crv,
      publicKey: this.publicKey,
    };

    const dataJson = JSON.stringify(publicJson);
    return dataJson;
  }

  public get privateJson(): string {
    const privateJson: PrivateJson = {
      kty: this.kty,
      kid: this.kid,
      crv: this.crv,
      privateKey: this.privateKey,
      publicKey: this.publicKey,
    };

    const dataJson = JSON.stringify(privateJson);
    return dataJson;
  }
}
