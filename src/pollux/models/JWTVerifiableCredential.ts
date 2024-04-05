import { base64url } from "multiformats/bases/base64";
import { Pluto } from "../../domain";
import {
  Credential,
  ProvableCredential,
  StorableCredential,
} from "../../domain/models/Credential";
import { InvalidJWTString } from "../../domain/models/errors/Pollux";
import { CredentialType, JWTCredentialPayload, JWTVerifiableCredentialProperties } from "../../domain/models/VerifiableCredential";



export const JWTVerifiableCredentialRecoveryId = "jwt+credential";


export class JWTCredential
  extends Credential
  implements ProvableCredential, StorableCredential, Pluto.Storable {
  public credentialType = CredentialType.JWT;
  public recoveryId = JWTVerifiableCredentialRecoveryId;
  public properties = new Map<JWTVerifiableCredentialProperties, any>();

  constructor(
    public readonly iss: string,
    verifiableCredential: JWTCredentialPayload,
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
    if (verifiableCredential.vc) {
      this.properties.set(
        JWTVerifiableCredentialProperties.vc,
        verifiableCredential.vc
      );
    } else if (verifiableCredential.vp) {
      this.properties.set(
        JWTVerifiableCredentialProperties.vp,
        verifiableCredential.vp
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

  static createPayload(obj: any): JWTCredentialPayload {
    return obj
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

  verificableCredential() {
    // TODO - Type information
    return {
      "@context": [
        "https://www.w3.org/2018/credentials/v1"
      ],
      type: ["VerifiableCredential"],
      "issuer": this.issuer,
      "issuanceDate": this.issuanceDate,
      "expirationDate": this.expirationDate,
      "credentialSubject": this.subject
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
