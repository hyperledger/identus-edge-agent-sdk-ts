// TODO remove this when Pollux breaking changes come through
import { OEA } from "../../pollux/plugins/oea/types";
import {
  Claims as ACClaims,
  PresentationRequest as ACPresReq,
  PresentationSubmission as ACPresSub
} from "../../pollux/plugins/anoncreds/types";
import { JsonObj } from "../../utils";

export type PresentationClaims<T extends CredentialType = CredentialType.JWT> =
  T extends CredentialType.JWT ? OEA.JWTPresentationClaims :
  T extends CredentialType.SDJWT ? OEA.SDJWTPresentationClaims :
  T extends CredentialType.AnonCreds ? ACClaims :
  never;

export type PresentationDefinitionRequest<T extends CredentialType = CredentialType.JWT> =
  T extends CredentialType.JWT ? OEA.PresentationExchangeDefinitionRequest :
  T extends CredentialType.SDJWT ? OEA.PresentationExchangeDefinitionRequest :
  T extends CredentialType.AnonCreds ? ACPresReq :
  never;

export type PresentationSubmission<T extends CredentialType = CredentialType.JWT> =
  T extends CredentialType.JWT ? OEA.PresentationSubmission :
  T extends CredentialType.SDJWT ? OEA.PresentationSubmission :
  T extends CredentialType.AnonCreds ? ACPresSub :
  never;
// ODOT

export enum JWT_ALG {
  ES256K = "ES256K",
  EdDSA = "EdDSA",
  unknown = 'unknown'
}

export enum CredentialType {
  JWT = "prism/jwt",
  SDJWT = "vc+sd-jwt",
  W3C = "w3c",
  AnonCreds = "AnonCreds",
  Unknown = "Unknown"
}


export enum W3CVerifiableCredentialContext {
  credential = "https://www.w3.org/2018/credentials/v1",
  revocation = "https://w3id.org/vc/status-list/2021/v1"
}

export enum W3CVerifiableCredentialType {
  presentation = "VerifiablePresentation",
  credential = "VerifiableCredential",
  revocation = "StatusList2021Credential"
}

export type W3CVerifiableCredential = {
  "@context": [W3CVerifiableCredentialContext.credential],
  type: [W3CVerifiableCredentialType.credential],
  issuer: string,
  issuanceDate: string,
  issued?: string,
  credentialSubject: Record<string, any>,
  expirationDate?: string,
  evidence?: {
    id: string,
    type: string;
  },
  refreshService?: {
    id: string,
    type: string;
  },
  termsOfUse?: {
    id: string,
    type: string;
  },
  validFrom?: {
    id: string,
    type: string;
  },
  validUntil?: {
    id: string,
    type: string;
  },
  credentialSchema?: {
    id: string,
    type: string;
  },
  credentialStatus?: unknown;
};


export type W3CVerifiablePresentation = {
  "@context": [
    W3CVerifiableCredentialContext.credential
  ],
  type: [
    W3CVerifiableCredentialType.presentation
  ],
  verifiableCredential: string[],
  proof?: W3CVerifiablePresentationProof;
};

export type W3CVerifiablePresentationProof = {
  challenge: string,
  domain: string;
};


// TODO remove with breaking changes
export class PresentationOptions {
  constructor(
    private data: any = {},
    private type: CredentialType = CredentialType.JWT
  ) {}

  get options() {
    if (this.type === CredentialType.AnonCreds) {
      return new AnoncredsPresentationOptions(this.data);
    }
    if (this.type === CredentialType.JWT) {
      return new JWTPresentationOptions(this.data);
    }
    if (this.type === CredentialType.SDJWT) {
      return new SDJWPresentationOptions(this.data);
    }
    throw new Error("Not supported" + this.type);
  }
}

export class AnoncredsPresentationOptions {
  constructor(_data: any) {}
}

interface PresentationJWTOptions {
  jwtAlg?: string[],
}

export class SDJWPresentationOptions {
  public name: string;
  public purpose: string;
  public sdjwt?: PresentationJWTOptions;

  constructor(options: JsonObj) {
    this.name = options.name ?? "Presentation";
    this.purpose = options.purpose ?? "Verifying Credentials";
    this.sdjwt = options.sdjwt ?? {
      jwtAlg: [JWT_ALG.EdDSA],
    };
  }
}

export class JWTPresentationOptions {
  public name: string;
  public purpose: string;
  public challenge: string;
  public domain: string;
  public jwt?: PresentationJWTOptions;

  constructor(options: JsonObj) {
    this.name = options.name ?? "Presentation";
    this.purpose = options.purpose ?? "Verifying Credentials";
    this.challenge = options.challenge;
    this.domain = options.domain ?? 'N/A';
    this.jwt = options.jwt ?? {
      jwtAlg: [JWT_ALG.ES256K],
    };
  }
}
