import { Credential, ProvableCredential, StorableCredential } from "./Credential";
import {
  CredentialType,
  VerifiableCredentialTypeContainer,
} from "./VerifiableCredential";


export enum JWTVerifiableCredentialProperties {
  iss = "iss",
  vc = "vc",
  jti = "jti",
  nbf = "nbf",
  sub = "sub",
  exp = "exp",
  aud = "aud",
  type = "type",
}

export const JWTVerifiableCredentialRecoveryId = "jwt+credential";

export class JWTCredential extends Credential implements ProvableCredential {
  public recoveryId = JWTVerifiableCredentialRecoveryId;
  public properties: Map<JWTVerifiableCredentialProperties | string, any> =
    new Map();

  public credentialType: CredentialType = CredentialType.JWT;
  public id: string;
  public issuanceDate: string;
  public expirationDate?: string;
  public validFrom?: VerifiableCredentialTypeContainer;
  public validUntil?: VerifiableCredentialTypeContainer;
  public proof?: string | undefined;

  get vc() {
    return this.properties.get(JWTVerifiableCredentialProperties.vc);
  }

  get issuer() {
    return this.properties.get(JWTVerifiableCredentialProperties.iss);
  }

  get subject() {
    return this.properties.get(JWTVerifiableCredentialProperties.sub);
  }

  get claims() {
    return [this.credentialSubject];
  }

  get context() {
    return this.vc.context;
  }

  get type() {
    return this.vc.type;
  }

  get credentialSchema() {
    return this.vc.credentialSchema;
  }

  get credentialSubject() {
    return this.vc.credentialSubject;
  }

  get credentialStatus() {
    return this.vc.credentialStatus;
  }

  get refreshService() {
    return this.vc.refreshService;
  }
  get evidence() {
    return this.vc.evidence;
  }

  get termsOfUse() {
    return this.vc.termsOfUse;
  }

  constructor(
    public iss: string,
    public verifiableCredential: Record<string, any>,
    public jti: string,
    public nbf: number,
    public sub: string,
    public exp?: number,
    public aud: Array<string> = [],
    public originalJWTString?: string
  ) {
    super();

    this.id = jti;
    this.properties.set(JWTVerifiableCredentialProperties.iss, iss);
    this.properties.set(JWTVerifiableCredentialProperties.sub, sub);
    this.properties.set(JWTVerifiableCredentialProperties.nbf, nbf);
    if (exp) {
      this.properties.set(JWTVerifiableCredentialProperties.exp, exp);
    }
    this.properties.set(JWTVerifiableCredentialProperties.aud, aud);
    this.properties.set(
      JWTVerifiableCredentialProperties.vc,
      verifiableCredential
    );
    this.issuanceDate = new Date(nbf).toISOString();
    if (exp) {
      this.expirationDate = new Date(exp).toISOString();
    }
  }

  toStorable(): StorableCredential {
    const credentialData = Buffer.from(
      JSON.stringify(Object.fromEntries(this.properties))
    ).toString("hex");

    return {
      id: this.getProperty(JWTVerifiableCredentialProperties.jti),
      recoveryId: this.recoveryId,
      credentialData: credentialData,
      issuer: this.getProperty(JWTVerifiableCredentialProperties.iss),
      subject: this.getProperty(JWTVerifiableCredentialProperties.sub),
      validUntil: this.getProperty(JWTVerifiableCredentialProperties.exp),
      availableClaims: this.claims,
    };
  }

  static fromStorable(storable: StorableCredential): JWTCredential {
    // TODO - should issuer and subject be required on Storable?
    const propertyObj = JSON.parse(
      Buffer.from(storable.credentialData, "hex").toString()
    );
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const iss = storable.issuer!;
    return new JWTCredential(
      iss,
      propertyObj.vc,
      propertyObj.jti,
      propertyObj.nbf,
      propertyObj.sub,
      propertyObj.exp,
      propertyObj.aud,
      propertyObj.jti
    );
  }

  presentation() {
    // TODO - Type information
    return {
      "@context": ["https://www.w3.org/2018/presentations/v1"],
      type: ["VerifiablePresentation"],
      verifiableCredential: [this.jti],
    };
  }
}
