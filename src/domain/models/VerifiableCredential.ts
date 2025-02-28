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

export type W3CVerifiableCredential = {
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  type: ["VerifiableCredential"],
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
    "https://www.w3.org/2018/presentations/v1"
  ],
  type: [
    "VerifiablePresentation"
  ],
  verifiableCredential: string[],
  proof?: W3CVerifiablePresentationProof;
};

export type W3CVerifiablePresentationProof = {
  challenge: string,
  domain: string;
};
