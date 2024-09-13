import { JWT, Pluto } from "../../domain";
import {
  Credential,
  ProvableCredential,
  StorableCredential,
} from "../../domain/models/Credential";
import { InvalidCredentialError } from "../../domain/models/errors/Pollux";
import {
  CredentialType,
  JWTCredentialPayload,
  JWTPresentationPayload,
  JWTVerifiableCredentialProperties,
  JWTVerifiablePresentationProperties,
  JWTVerifiableCredentialProperties as JWT_VC_PROPS,
  JWTVerifiablePresentationProperties as JWT_VP_PROPS,
  W3CVerifiableCredential,
  W3CVerifiableCredentialContext,
  W3CVerifiableCredentialType,
  W3CVerifiablePresentation,
} from "../../domain/models/VerifiableCredential";

export const JWTVerifiableCredentialRecoveryId = "jwt+credential";


export class JWTCredential
  extends Credential
  implements ProvableCredential, StorableCredential, Pluto.Storable {

  public credentialType = CredentialType.JWT;
  public recoveryId = JWTVerifiableCredentialRecoveryId;
  public properties = new Map<JWT_VC_PROPS | JWT_VP_PROPS, any>();

  constructor(payload: string, revoked?: boolean);
  constructor(payload: JWTCredentialPayload | JWTPresentationPayload, revoked?: boolean);
  constructor(
    payload: any,
    revoked = false
  ) {
    super();

    let originalString: string | undefined;
    if (typeof payload === 'string') {
      const jwtObject = JWT.decode(payload);
      originalString = payload;
      payload = jwtObject.payload;
    } else {
      originalString = payload.jti;
    }

    if (this.isCredentialPayload(payload)) {

      if (typeof payload[JWT_VC_PROPS.revoked] === "boolean") {
        this.properties.set(
          JWT_VC_PROPS.revoked,
          payload[JWT_VC_PROPS.revoked]
        );
      } else if (typeof revoked === 'boolean') {
        this.properties.set(
          JWT_VC_PROPS.revoked,
          revoked
        );
      } else {
        this.properties.set(
          JWT_VC_PROPS.revoked,
          false
        );
      }

      if (payload[JWT_VC_PROPS.vc]) {
        this.properties.set(
          JWT_VC_PROPS.vc,
          payload[JWT_VC_PROPS.vc]
        );
      }

      if (payload[JWT_VC_PROPS.aud]) {
        this.properties.set(
          JWT_VC_PROPS.aud,
          payload[JWT_VC_PROPS.aud]
        );
      }

      if (payload[JWT_VC_PROPS.exp]) {
        this.properties.set(
          JWT_VC_PROPS.exp,
          payload[JWT_VC_PROPS.exp]
        );
      }

      if (originalString) {
        this.properties.set(
          JWT_VC_PROPS.jti,
          originalString
        );
      }

      if (payload[JWT_VC_PROPS.iss]) {
        this.properties.set(
          JWT_VC_PROPS.iss,
          payload[JWT_VC_PROPS.iss]
        );
      }

      if (payload[JWT_VC_PROPS.sub]) {
        this.properties.set(
          JWT_VC_PROPS.sub,
          payload[JWT_VC_PROPS.sub]
        );
      }

      if (payload[JWT_VC_PROPS.nbf]) {
        this.properties.set(
          JWT_VC_PROPS.nbf,
          payload[JWT_VC_PROPS.nbf]
        );
      }
    } else {
      //Set properties for a JWTCredential Presentation
      if (payload[JWT_VP_PROPS.iss]) {
        this.properties.set(
          JWT_VP_PROPS.iss,
          payload[JWT_VP_PROPS.iss]
        );
      }

      if (originalString) {
        this.properties.set(
          JWT_VC_PROPS.jti,
          originalString
        );
      }

      if (payload[JWT_VP_PROPS.aud]) {
        this.properties.set(
          JWT_VP_PROPS.aud,
          payload[JWT_VP_PROPS.aud]
        );
      }

      if (payload[JWT_VP_PROPS.nbf]) {
        this.properties.set(
          JWT_VP_PROPS.nbf,
          payload[JWT_VP_PROPS.nbf]
        );
      }

      if (payload[JWT_VP_PROPS.exp]) {
        this.properties.set(
          JWT_VP_PROPS.exp,
          payload[JWT_VP_PROPS.exp]
        );
      }

      if (payload[JWT_VP_PROPS.nonce]) {
        this.properties.set(
          JWT_VP_PROPS.nonce,
          payload[JWT_VP_PROPS.nonce]
        );
      }

      if (payload[JWT_VP_PROPS.nbf]) {
        this.properties.set(
          JWT_VP_PROPS.nbf,
          payload[JWT_VP_PROPS.nbf]
        );
      }

      if (payload[JWT_VP_PROPS.vp]) {
        this.properties.set(
          JWT_VP_PROPS.vp,
          payload[JWT_VP_PROPS.vp]
        );
      }
    }
  }

  static fromJWS(jws: string, revoked?: boolean): JWTCredential {
    return new JWTCredential(jws, revoked);
  }

  private isCredentialPayload(payload: any): payload is JWTCredentialPayload {
    const hasJWTCredentialRequiredProperties = typeof payload.vc !== 'undefined';

    if (hasJWTCredentialRequiredProperties) {

      if (typeof payload[JWTVerifiableCredentialProperties.iss] !== 'undefined' &&
        typeof payload[JWTVerifiableCredentialProperties.iss] !== 'string') {
        throw new InvalidCredentialError("Invalid iss in credential payload should be string");
      }

      if (typeof payload[JWTVerifiableCredentialProperties.nbf] !== 'undefined' &&
        typeof payload[JWTVerifiableCredentialProperties.nbf] !== 'number') {
        throw new InvalidCredentialError("Invalid nbf in credential payload should be number");
      }

      if (typeof payload[JWTVerifiableCredentialProperties.exp] !== 'undefined' &&
        typeof payload[JWTVerifiableCredentialProperties.exp] !== 'number') {
        throw new InvalidCredentialError("Invalid exp in credential payload should be number");
      }

      if (typeof payload[JWTVerifiableCredentialProperties.sub] !== 'undefined' &&
        typeof payload[JWTVerifiableCredentialProperties.sub] !== 'string') {
        throw new InvalidCredentialError("Invalid sub in credential payload should be string");
      }


      if (typeof payload[JWTVerifiableCredentialProperties.aud] !== 'undefined' &&
        (typeof payload[JWTVerifiableCredentialProperties.aud] !== 'string' &&
          !Array.isArray(payload[JWTVerifiableCredentialProperties.aud]))) {
        throw new InvalidCredentialError("Invalid aud in credential payload should be string");
      }


      if (typeof payload[JWTVerifiableCredentialProperties.revoked] !== 'undefined' &&
        typeof payload[JWTVerifiableCredentialProperties.revoked] !== 'boolean') {
        throw new InvalidCredentialError("Invalid revoked in credential payload should be boolean");
      }

      //TODO: Improve validation of VC
      if (typeof payload[JWTVerifiableCredentialProperties.vc] !== 'undefined' &&
        typeof payload[JWTVerifiableCredentialProperties.vc] !== 'object') {
        throw new InvalidCredentialError("Invalid vc in credential payload should be an object");
      }

    } else {
      if (typeof payload[JWTVerifiablePresentationProperties.iss] !== 'undefined' &&
        typeof payload[JWTVerifiablePresentationProperties.iss] !== 'string') {
        throw new InvalidCredentialError("Invalid iss in presentation payload should be string");
      }

      if (typeof payload[JWTVerifiablePresentationProperties.aud] !== 'undefined' &&
        (typeof payload[JWTVerifiablePresentationProperties.aud] !== 'string' &&
          !Array.isArray(payload[JWTVerifiablePresentationProperties.aud]))) {
        throw new InvalidCredentialError("Invalid aud in presentation payload should be string");
      }

      if (typeof payload[JWTVerifiablePresentationProperties.nonce] !== 'undefined' &&
        typeof payload[JWTVerifiablePresentationProperties.nonce] !== 'string') {
        throw new InvalidCredentialError("Invalid nonce in presentation payload should be string");
      }

      if (typeof payload[JWTVerifiablePresentationProperties.nbf] !== 'undefined' &&
        typeof payload[JWTVerifiablePresentationProperties.nbf] !== 'number') {
        throw new InvalidCredentialError("Invalid nbf in presentation payload should be number");
      }

      if (typeof payload[JWTVerifiablePresentationProperties.exp] !== 'undefined' &&
        typeof payload[JWTVerifiablePresentationProperties.exp] !== 'number') {
        throw new InvalidCredentialError("Invalid exp in presentation payload should be number");
      }

      //TODO: Improve validation of VP
      if (typeof payload[JWTVerifiablePresentationProperties.vp] !== 'undefined' &&
        typeof payload[JWTVerifiablePresentationProperties.vp] !== 'object') {
        throw new InvalidCredentialError("Invalid vp in presentation payload should be an object");
      }

    }

    return payload.vc !== undefined;
  }

  get isCredential() {
    return this.isCredentialPayload(Object.fromEntries(this.properties));
  }

  get id() {
    if (this.isCredentialPayload(Object.fromEntries(this.properties))) {
      return this.properties.get(JWT_VC_PROPS.jti);
    } else {
      return this.properties.get(JWT_VP_PROPS.jti);
    }
  }

  get vc(): W3CVerifiableCredential | undefined {
    if (this.isCredentialPayload(Object.fromEntries(this.properties))) {
      return this.properties.get(JWT_VC_PROPS.vc);
    } else {
      return undefined;
    }
  }

  get vp(): W3CVerifiablePresentation | undefined {
    if (this.isCredentialPayload(Object.fromEntries(this.properties))) {
      return undefined;
    } else {
      return this.properties.get(JWT_VP_PROPS.vp);
    }
  }

  get claims(): Record<string, any>[] {
    if (this.credentialSubject) {
      return [
        this.credentialSubject
      ];
    }
    return [];
  }

  get context() {
    return this.vc?.["@context"] ?? this.vp?.["@context"];
  }

  get credentialSchema() {
    return this.vc?.credentialSchema;
  }

  get credentialStatus() {
    return this.vc?.credentialStatus;
  }

  get credentialSubject() {
    return this.vc?.credentialSubject;
  }

  get evidence() {
    return this.vc?.evidence;
  }

  get expirationDate() {
    const exp = this.isCredentialPayload(Object.fromEntries(this.properties)) ?
      this.properties.get(JWT_VC_PROPS.exp) :
      this.properties.get(JWT_VP_PROPS.exp);
    return exp ? new Date(exp * 1000).toISOString() : undefined;
  }

  get issuanceDate() {
    const nbf = this.isCredentialPayload(Object.fromEntries(this.properties)) ?
      this.properties.get(JWT_VC_PROPS.nbf) :
      this.properties.get(JWT_VP_PROPS.nbf);
    return new Date(nbf * 1000).toISOString();
  }

  get audience() {
    const aud = this.isCredentialPayload(Object.fromEntries(this.properties)) ?
      this.properties.get(JWT_VC_PROPS.aud) :
      this.properties.get(JWT_VP_PROPS.aud);
    return aud;
  }

  get issuer() {
    const iss = this.isCredentialPayload(Object.fromEntries(this.properties)) ?
      this.properties.get(JWT_VC_PROPS.iss) :
      this.properties.get(JWT_VP_PROPS.iss);
    return iss;
  }

  get refreshService() {
    return this.vc?.refreshService;
  }

  get subject(): string {
    if (this.isCredentialPayload(Object.fromEntries(this.properties))) {
      return this.properties.get(JWT_VC_PROPS.sub);
    } else {
      throw new InvalidCredentialError("Subject is only available in a VC");
    }
  }

  get revoked(): boolean | undefined {
    if (this.isCredentialPayload(Object.fromEntries(this.properties))) {
      return this.properties.get(JWT_VC_PROPS.revoked);
    } else {
      return undefined;
    }
  }

  get termsOfUse() {
    return this.vc?.termsOfUse;
  }

  get type() {
    return this.vc?.type ?? this.vp?.type;
  }

  presentation(): W3CVerifiablePresentation {
    if (!this.isCredentialPayload(Object.fromEntries(this.properties))) {
      throw new InvalidCredentialError("Invalid payload is not VC");
    }
    return {
      "@context": [
        W3CVerifiableCredentialContext.credential
      ],
      type: [
        W3CVerifiableCredentialType.presentation
      ],
      verifiableCredential: [
        this.id
      ],
    };
  }

  verifiableCredential(): W3CVerifiableCredential {
    if (!this.isCredentialPayload(Object.fromEntries(this.properties))) {
      throw new InvalidCredentialError("Invalid payload is not VC");
    }
    return {
      "@context": [
        W3CVerifiableCredentialContext.credential
      ],
      type: [
        W3CVerifiableCredentialType.credential
      ],
      issuer: this.issuer,
      issuanceDate: this.issuanceDate,
      expirationDate: this.expirationDate,
      credentialSubject: this.credentialSubject ?? {},
    };
  }

  toStorable() {
    const id = this.id;
    const data = { id, ...Object.fromEntries(this.properties) };
    const claims = this.claims.map((claim) => typeof claim !== 'string' ? JSON.stringify(claim) : claim);
    return {
      id,
      recoveryId: this.recoveryId,
      credentialData: JSON.stringify(data),
      issuer: this.issuer,
      subject: this.properties.get(JWT_VC_PROPS.sub),
      validUntil: this.isCredentialPayload(Object.fromEntries(this.properties)) ?
        this.getProperty(JWT_VC_PROPS.exp) :
        this.getProperty(JWT_VP_PROPS.exp),
      availableClaims: claims,
      revoked: this.revoked
    };
  }
}

