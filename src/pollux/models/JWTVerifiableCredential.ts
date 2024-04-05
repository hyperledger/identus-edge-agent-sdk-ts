import { base64url } from "multiformats/bases/base64";
import { Pluto } from "../../domain";
import {
  Credential,
  ProvableCredential,
  StorableCredential,
} from "../../domain/models/Credential";
import { InvalidJWTString } from "../../domain/models/errors/Pollux";
import { CredentialType, JWTCredentialPayload, JWTPayload, JWTVerifiableCredentialProperties, W3CVerifiableCredentialContext, W3CVerifiableCredentialType } from "../../domain/models/VerifiableCredential";



export const JWTVerifiableCredentialRecoveryId = "jwt+credential";


export class JWTCredential
  extends Credential
  implements ProvableCredential, StorableCredential, Pluto.Storable {
  public credentialType = CredentialType.JWT;
  public recoveryId = JWTVerifiableCredentialRecoveryId;
  public properties = new Map<JWTVerifiableCredentialProperties, any>();

  private isCredentialPayload(payload: any): payload is JWTCredentialPayload {
    return payload.vc !== undefined
  }

  constructor(
    public readonly iss: string,
    payload: JWTPayload,
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
    this.properties.set(JWTVerifiableCredentialProperties.iss, iss || payload.iss);
    this.properties.set(JWTVerifiableCredentialProperties.sub, sub);
    this.properties.set(JWTVerifiableCredentialProperties.nbf, nbf || payload.nbf);
    this.properties.set(JWTVerifiableCredentialProperties.aud, aud);

    if (this.isCredentialPayload(payload)) {
      this.properties.set(
        JWTVerifiableCredentialProperties.vc,
        payload.vc
      );
    } else {
      this.properties.set(
        JWTVerifiableCredentialProperties.vp,
        payload.vp
      );
    }

    if (exp) {
      this.properties.set(JWTVerifiableCredentialProperties.exp, exp);
    }
  }

  // TODO - Types and validation
  static fromJWT(jwtObj: any, jwtString: string, isRevoked = false) {
    return new JWTCredential(
      jwtObj.iss,
      jwtObj,
      jwtString,
      jwtObj.nbf,
      jwtObj.sub,
      jwtObj.exp,
      jwtObj.aud,
      jwtString,
      isRevoked
    );
  }


  static fromJWS(jws: string): JWTCredential {
    const parts = jws.split(".");
    if (parts.length != 3 || parts.at(1) === undefined) {
      throw new InvalidJWTString();
    }
    const jwtCredentialString = parts.at(1)!;
    const base64Data = base64url.baseDecode(jwtCredentialString);
    const jsonString = Buffer.from(base64Data).toString();
    const jsonParsed = JSON.parse(jsonString);
    return JWTCredential.fromJWT(jsonParsed, jws)
  }

  get isCredential() {
    return this.isCredentialPayload(Object.fromEntries(this.properties))
  }


  get id() {
    return this.jti;
  }

  get vc() {
    return this.properties.get(JWTVerifiableCredentialProperties.vc);
  }

  get vp() {
    return this.properties.get(JWTVerifiableCredentialProperties.vp);
  }

  get claims() {
    return [this.credentialSubject];
  }

  get context() {
    return this.vc.context || this.vc['@context'];
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
    return {
      "@context": [W3CVerifiableCredentialContext.presentation],
      type: [W3CVerifiableCredentialType.presentation],
      verifiableCredential: [this.jti],
    };
  }

  verifiableCredential() {
    return {
      "@context": [
        W3CVerifiableCredentialContext.credential
      ],
      type: [W3CVerifiableCredentialType.credential],
      issuer: this.issuer,
      issuanceDate: this.issuanceDate,
      expirationDate: this.expirationDate,
      credentialSubject: this.subject,
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
