export enum VerificationMaterialFormatPeerDID {
  JWK = "jwk",
}

export interface VerificationMethodTypePeerDID {
  value: string;
}

export class VerificationMethodType implements VerificationMethodTypePeerDID {
  constructor(public value: string) {}
}

export enum Numalgo2Prefix {
  authentication = "V",
  keyAgreement = "E",
  service = "S",
}

export type OctetPublicKey = {
  kty: "OKP";
  crv: string;
  x: string;
};

export class VerificationMethodTypeAgreement extends VerificationMethodType {
  static JSON_WEB_KEY_2020 = new VerificationMethodTypeAgreement(
    "JsonWebKey2020"
  );
  static X25519_KEY_AGREEMENT_KEY_2019 = new VerificationMethodTypeAgreement(
    "X25519KeyAgreementKey2019"
  );
  static X25519_KEY_AGREEMENT_KEY_2020 = new VerificationMethodTypeAgreement(
    "X25519KeyAgreementKey2020"
  );
}

export class VerificationMethodTypeAuthentication extends VerificationMethodType {
  static JSON_WEB_KEY_2020 = new VerificationMethodTypeAuthentication(
    "JsonWebKey2020"
  );
  static ED25519_KEY_AGREEMENT_KEY_2018 =
    new VerificationMethodTypeAuthentication("Ed25519VerificationKey2018");
  static ED25519_KEY_AGREEMENT_KEY_2020 =
    new VerificationMethodTypeAuthentication("Ed25519VerificationKey2020");
}

export interface VerificationMethodTypePeerDIDWithAgreement
  extends VerificationMethodTypePeerDID {
  agreement: VerificationMethodTypeAgreement;
}

export interface VerificationMethodTypePeerDIDWithAuthentication
  extends VerificationMethodTypePeerDID {
  authentication: VerificationMethodTypeAuthentication;
}

export type VerificationMaterialPeerDIDType = 1;
export interface VerificationMaterialPeerDID {
  keyType: VerificationMethodTypePeerDID;
  value: string;
}

export class VerificationMaterialPeerDIDWithAgreement
  implements VerificationMaterialPeerDID
{
  constructor(
    public keyType: VerificationMethodTypePeerDID,
    public value: string,
    public agreement: VerificationMaterialAgreement
  ) {}
}

export class VerificationMaterialPeerDIDWithAuthentication
  implements VerificationMaterialPeerDID
{
  constructor(
    public keyType: VerificationMethodTypePeerDID,
    public value: string,
    public authentication: VerificationMaterialAuthentication
  ) {}
}

export class VerificationMaterialAgreement
  implements VerificationMaterialPeerDIDWithAgreement
{
  public readonly format: VerificationMaterialFormatPeerDID;
  public readonly value: string;
  public readonly type: VerificationMethodTypeAgreement;

  constructor(
    value: string,
    type: VerificationMethodTypeAgreement,
    format: VerificationMaterialFormatPeerDID
  ) {
    this.format = format;
    this.value = value;
    this.type = type;
  }

  get keyType(): VerificationMethodTypePeerDID {
    return this.type;
  }

  get agreement(): VerificationMaterialAgreement {
    return this;
  }
}

export class VerificationMaterialAuthentication
  implements VerificationMaterialPeerDIDWithAuthentication
{
  public readonly format: VerificationMaterialFormatPeerDID;
  public readonly value: string;
  public readonly type: VerificationMethodTypeAuthentication;

  constructor(
    value: string,
    type: VerificationMethodTypeAuthentication,
    format: VerificationMaterialFormatPeerDID
  ) {
    this.format = format;
    this.value = value;
    this.type = type;
  }

  get keyType(): VerificationMethodTypePeerDID {
    return this.type;
  }

  get authentication(): VerificationMaterialAuthentication {
    return this;
  }
}
