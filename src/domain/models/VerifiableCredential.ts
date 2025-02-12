// TODO remove this when removing fn from Agent
import { OEA } from "../../plugins/internal/oea/types";
import { Claims as ACClaims } from "../../plugins/internal/anoncreds/types";

export type PresentationClaims<T extends CredentialType = CredentialType.JWT> =
  T extends CredentialType.JWT ? OEA.JWTPresentationClaims :
  T extends CredentialType.SDJWT ? OEA.SDJWTPresentationClaims :
  T extends CredentialType.AnonCreds ? ACClaims :
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
