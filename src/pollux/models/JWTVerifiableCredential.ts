import { Pluto } from "../../domain";
import {
  Credential,
  ProvableCredential,
  StorableCredential,
} from "../../domain/models/Credential";
import { CredentialType } from "../../domain/models/VerifiableCredential";

export enum JWTVerifiableCredentialProperties {
  iss = "iss",
  vc = "vc",
  jti = "jti",
  nbf = "nbf",
  sub = "sub",
  exp = "exp",
  aud = "aud",
  type = "type",
  revoked = "revoked"
}

export const JWTVerifiableCredentialRecoveryId = "jwt+credential";

export class JWTCredential
  extends Credential
  implements ProvableCredential, StorableCredential, Pluto.Storable {
  public credentialType = CredentialType.JWT;
  public recoveryId = JWTVerifiableCredentialRecoveryId;
  public properties = new Map<JWTVerifiableCredentialProperties, any>();

  constructor(
    public readonly iss: string,
    public readonly verifiableCredential: Record<string, any>,
    public readonly jti: string,
    public readonly nbf: number,
    public readonly sub: string,
    public readonly exp?: number,
    public readonly aud: Array<string> = [],
    public readonly originalJWTString?: string,
    isRevoked: boolean = false
  ) {
    super();

    this.properties.set(JWTVerifiableCredentialProperties.revoked, isRevoked);
    this.properties.set(JWTVerifiableCredentialProperties.jti, jti);
    this.properties.set(JWTVerifiableCredentialProperties.iss, iss);
    this.properties.set(JWTVerifiableCredentialProperties.sub, sub);
    this.properties.set(JWTVerifiableCredentialProperties.nbf, nbf);
    this.properties.set(JWTVerifiableCredentialProperties.aud, aud);

    this.properties.set(
      JWTVerifiableCredentialProperties.vc,
      verifiableCredential
    );

    if (exp) {
      this.properties.set(JWTVerifiableCredentialProperties.exp, exp);
    }
  }

  // TODO - Types and validation
  static fromJWT(jwtObj: any, jwtString: string, isRevoked: boolean = false) {
    return new JWTCredential(
      jwtObj.iss,
      jwtObj.vc,
      jwtString,
      jwtObj.nbf,
      jwtObj.sub,
      jwtObj.exp,
      jwtObj.aud,
      jwtString,
      isRevoked
    );
  }

  get id() {
    return this.jti;
  }

  get vc() {
    return this.properties.get(JWTVerifiableCredentialProperties.vc);
  }

  get claims() {
    return [this.credentialSubject];
  }

  get context() {
    return this.vc.context;
  }

  get credentialSchema() {
    return this.vc.credentialSchema;
  }

  get credentialStatus() {
    return this.vc.credentialStatus;
  }

  get credentialSubject() {
    return this.vc.credentialSubject;
  }

  get evidence() {
    return this.vc.evidence;
  }

  get expirationDate() {
    return this.exp ? new Date(this.exp).toISOString() : undefined;
  }

  get issuanceDate() {
    return new Date(this.nbf).toISOString();
  }

  get issuer() {
    return this.properties.get(JWTVerifiableCredentialProperties.iss);
  }

  get refreshService() {
    return this.vc.refreshService;
  }

  get subject() {
    return this.properties.get(JWTVerifiableCredentialProperties.sub);
  }

  get revoked() {
    return this.properties.get(JWTVerifiableCredentialProperties.revoked);
  }

  get termsOfUse() {
    return this.vc.termsOfUse;
  }

  get type() {
    return this.vc.type;
  }

  presentation() {
    // TODO - Type information
    return {
      "@context": ["https://www.w3.org/2018/presentations/v1"],
      type: ["VerifiablePresentation"],
      verifiableCredential: [this.jti],
    };
  }

  toStorable() {
    const id = this.jti || this.getProperty(JWTVerifiableCredentialProperties.jti);
    const data = { id, ...Object.fromEntries(this.properties) };

    return {
      id,
      recoveryId: this.recoveryId,
      credentialData: JSON.stringify(data),
      issuer: this.getProperty(JWTVerifiableCredentialProperties.iss),
      subject: this.getProperty(JWTVerifiableCredentialProperties.sub),
      validUntil: this.getProperty(JWTVerifiableCredentialProperties.exp),
      availableClaims: this.claims,
    };
  }
}
