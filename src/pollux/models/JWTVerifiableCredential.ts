import { base64url } from "multiformats/bases/base64";
import { Pluto } from "../../domain";
import {
  Credential,
  ProvableCredential,
  StorableCredential,
} from "../../domain/models/Credential";
import { CredentialType } from "../../domain/models/VerifiableCredential";
import { InvalidJWTString } from "../../domain/models/errors/Pollux";
import { isObject, notEmptyString } from "../../utils";

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
    isRevoked = false
  ) {
    super();

    this.properties.set(JWTVerifiableCredentialProperties.revoked, isRevoked);
    this.properties.set(JWTVerifiableCredentialProperties.jti, jti);
    this.properties.set(JWTVerifiableCredentialProperties.iss, iss);
    this.properties.set(JWTVerifiableCredentialProperties.sub, sub);
    this.properties.set(JWTVerifiableCredentialProperties.nbf, nbf);
    this.properties.set(JWTVerifiableCredentialProperties.aud, aud);
    this.properties.set(JWTVerifiableCredentialProperties.vc, verifiableCredential);

    if (exp) {
      this.properties.set(JWTVerifiableCredentialProperties.exp, exp);
    }
  }

  /**
   * Create JWTCredential from a JWT string
   * 
   * @param jwt JWT string
   * @param revoked revocation status
   */
  static fromJWT(jwt: string, revoked?: boolean): JWTCredential;
  /**
   * Create JWTCredential from JWT object and string
   * @param jwt JSON parsed from the JWT string
   * @param jwtstr JWT string
   * @param revoked revocation status
   */
  static fromJWT(jwt: unknown, jwtstr: string, revoked?: boolean): JWTCredential;
  static fromJWT(jwt: unknown, strOrRev?: string | boolean, isRevoked?: boolean) {
    if (notEmptyString(jwt)) {
      const revoked = typeof strOrRev === "boolean" ? strOrRev : undefined;
      const parts = jwt.split(".");
      const body = parts.at(1);

      if (parts.length == 3 && notEmptyString(body)) {
        const base64Data = base64url.baseDecode(body);
        const jsonString = Buffer.from(base64Data).toString();
        const jsonParsed = JSON.parse(jsonString);

        return JWTCredential.fromJWT(jsonParsed, jwt, revoked);
      }
    }

    const jwtString = strOrRev;
    if (isObject(jwt) && notEmptyString(jwtString)) {
      return new JWTCredential(
        jwt.iss,
        jwt.vc,
        jwtString,
        jwt.nbf,
        jwt.sub,
        jwt.exp,
        jwt.aud,
        jwtString,
        isRevoked
      );
    }

    throw new InvalidJWTString();
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
