import { JWT, Pluto } from "../../domain";
import {
  Credential,
  ProvableCredential,
  StorableCredential,
} from "../../domain/models/Credential";
import { InvalidCredentialError } from "../../domain/models/errors/Pollux";
import {
  CredentialType,
  W3CVerifiableCredential,
  W3CVerifiablePresentation,
} from "../../domain/models/VerifiableCredential";

export const JWTVerifiableCredentialRecoveryId = "jwt+credential";

export enum JWT_VC_PROPS {
  vc = "vc",
  revoked = "revoked"
}

export enum JWT_VP_PROPS {
  nonce = 'nonce',
  vp = 'vp'
}

export interface JWTCredentialPayload {
  [JWT.Claims.iss]: string;
  [JWT.Claims.iat]?: number;
  [JWT.Claims.jti]?: string;
  [JWT.Claims.nbf]?: number;
  [JWT.Claims.exp]?: number;
  [JWT.Claims.sub]: string;
  [JWT.Claims.aud]?: string | string[];
  [JWT_VC_PROPS.revoked]?: boolean;
  [JWT_VC_PROPS.vc]: W3CVerifiableCredential;
}

export interface JWTPresentationPayload {
  [JWT.Claims.iss]?: string;
  [JWT.Claims.iat]?: number;
  [JWT.Claims.jti]?: string;
  [JWT.Claims.aud]?: string | string[];
  [JWT.Claims.nbf]?: number;
  [JWT.Claims.exp]?: number;
  [JWT_VP_PROPS.nonce]?: string;
  [JWT_VP_PROPS.vp]: W3CVerifiablePresentation;
}



export class JWTCredential
  extends Credential
  implements ProvableCredential, StorableCredential, Pluto.Storable {

  public credentialType = CredentialType.JWT;
  public recoveryId = JWTVerifiableCredentialRecoveryId;
  public properties = new Map<JWT.Claims | JWT_VC_PROPS | JWT_VP_PROPS, any>();

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

      if (payload[JWT.Claims.aud]) {
        this.properties.set(
          JWT.Claims.aud,
          payload[JWT.Claims.aud]
        );
      }

      if (payload[JWT.Claims.exp]) {
        this.properties.set(
          JWT.Claims.exp,
          payload[JWT.Claims.exp]
        );
      }

      if (originalString) {
        this.properties.set(
          JWT.Claims.jti,
          originalString
        );
      }

      if (payload[JWT.Claims.iss]) {
        this.properties.set(
          JWT.Claims.iss,
          payload[JWT.Claims.iss]
        );
      }

      if (payload[JWT.Claims.sub]) {
        this.properties.set(
          JWT.Claims.sub,
          payload[JWT.Claims.sub]
        );
      }

      if (payload[JWT.Claims.nbf]) {
        this.properties.set(
          JWT.Claims.nbf,
          payload[JWT.Claims.nbf]
        );
      }
    } else {
      //Set properties for a JWTCredential Presentation
      if (payload[JWT.Claims.iss]) {
        this.properties.set(
          JWT.Claims.iss,
          payload[JWT.Claims.iss]
        );
      }

      if (originalString) {
        this.properties.set(
          JWT.Claims.jti,
          originalString
        );
      }

      if (payload[JWT.Claims.aud]) {
        this.properties.set(
          JWT.Claims.aud,
          payload[JWT.Claims.aud]
        );
      }

      if (payload[JWT.Claims.nbf]) {
        this.properties.set(
          JWT.Claims.nbf,
          payload[JWT.Claims.nbf]
        );
      }

      if (payload[JWT.Claims.exp]) {
        this.properties.set(
          JWT.Claims.exp,
          payload[JWT.Claims.exp]
        );
      }

      if (payload[JWT_VP_PROPS.nonce]) {
        this.properties.set(
          JWT_VP_PROPS.nonce,
          payload[JWT_VP_PROPS.nonce]
        );
      }

      if (payload[JWT.Claims.nbf]) {
        this.properties.set(
          JWT.Claims.nbf,
          payload[JWT.Claims.nbf]
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

      if (typeof payload[JWT.Claims.iss] !== 'undefined' &&
        typeof payload[JWT.Claims.iss] !== 'string') {
        throw new InvalidCredentialError("Invalid iss in credential payload should be string");
      }

      if (typeof payload[JWT.Claims.nbf] !== 'undefined' &&
        typeof payload[JWT.Claims.nbf] !== 'number') {
        throw new InvalidCredentialError("Invalid nbf in credential payload should be number");
      }

      if (typeof payload[JWT.Claims.exp] !== 'undefined' &&
        typeof payload[JWT.Claims.exp] !== 'number') {
        throw new InvalidCredentialError("Invalid exp in credential payload should be number");
      }

      if (typeof payload[JWT.Claims.sub] !== 'undefined' &&
        typeof payload[JWT.Claims.sub] !== 'string') {
        throw new InvalidCredentialError("Invalid sub in credential payload should be string");
      }


      if (typeof payload[JWT.Claims.aud] !== 'undefined' &&
        (typeof payload[JWT.Claims.aud] !== 'string' &&
          !Array.isArray(payload[JWT.Claims.aud]))) {
        throw new InvalidCredentialError("Invalid aud in credential payload should be string");
      }


      if (typeof payload[JWT_VC_PROPS.revoked] !== 'undefined' &&
        typeof payload[JWT_VC_PROPS.revoked] !== 'boolean') {
        throw new InvalidCredentialError("Invalid revoked in credential payload should be boolean");
      }

      //TODO: Improve validation of VC
      if (typeof payload[JWT_VC_PROPS.vc] !== 'undefined' &&
        typeof payload[JWT_VC_PROPS.vc] !== 'object') {
        throw new InvalidCredentialError("Invalid vc in credential payload should be an object");
      }

    } else {
      if (typeof payload[JWT.Claims.iss] !== 'undefined' &&
        typeof payload[JWT.Claims.iss] !== 'string') {
        throw new InvalidCredentialError("Invalid iss in presentation payload should be string");
      }

      if (typeof payload[JWT.Claims.aud] !== 'undefined' &&
        (typeof payload[JWT.Claims.aud] !== 'string' &&
          !Array.isArray(payload[JWT.Claims.aud]))) {
        throw new InvalidCredentialError("Invalid aud in presentation payload should be string");
      }

      if (typeof payload[JWT_VP_PROPS.nonce] !== 'undefined' &&
        typeof payload[JWT_VP_PROPS.nonce] !== 'string') {
        throw new InvalidCredentialError("Invalid nonce in presentation payload should be string");
      }

      if (typeof payload[JWT.Claims.nbf] !== 'undefined' &&
        typeof payload[JWT.Claims.nbf] !== 'number') {
        throw new InvalidCredentialError("Invalid nbf in presentation payload should be number");
      }

      if (typeof payload[JWT.Claims.exp] !== 'undefined' &&
        typeof payload[JWT.Claims.exp] !== 'number') {
        throw new InvalidCredentialError("Invalid exp in presentation payload should be number");
      }

      //TODO: Improve validation of VP
      if (typeof payload[JWT_VP_PROPS.vp] !== 'undefined' &&
        typeof payload[JWT_VP_PROPS.vp] !== 'object') {
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
      return this.properties.get(JWT.Claims.jti);
    } else {
      return this.properties.get(JWT.Claims.jti);
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
      this.properties.get(JWT.Claims.exp) :
      this.properties.get(JWT.Claims.exp);
    return exp ? new Date(exp * 1000).toISOString() : undefined;
  }

  get issuanceDate() {
    const nbf = this.isCredentialPayload(Object.fromEntries(this.properties)) ?
      this.properties.get(JWT.Claims.nbf) :
      this.properties.get(JWT.Claims.nbf);
    return new Date(nbf * 1000).toISOString();
  }

  get audience() {
    const aud = this.isCredentialPayload(Object.fromEntries(this.properties)) ?
      this.properties.get(JWT.Claims.aud) :
      this.properties.get(JWT.Claims.aud);
    return aud;
  }

  get issuer() {
    const iss = this.isCredentialPayload(Object.fromEntries(this.properties)) ?
      this.properties.get(JWT.Claims.iss) :
      this.properties.get(JWT.Claims.iss);
    return iss;
  }

  get refreshService() {
    return this.vc?.refreshService;
  }

  get subject(): string {
    if (this.isCredentialPayload(Object.fromEntries(this.properties))) {
      return this.properties.get(JWT.Claims.sub);
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
        "https://www.w3.org/2018/presentations/v1"
      ],
      type: [
        "VerifiablePresentation"
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
      "@context": ["https://www.w3.org/2018/credentials/v1"],
      type: ["VerifiableCredential"],
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
      subject: this.properties.get(JWT.Claims.sub),
      validUntil: this.isCredentialPayload(Object.fromEntries(this.properties)) ?
        this.getProperty(JWT.Claims.exp) :
        this.getProperty(JWT.Claims.exp),
      availableClaims: claims,
      revoked: this.revoked
    };
  }
}

