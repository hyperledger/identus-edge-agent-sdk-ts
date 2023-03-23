import { JsonString } from ".";
import { DID } from "./DID";

export enum CredentialType {
  JWT = "jwt",
  W3C = "w3c",
  Unknown = "Unknown",
}

export interface CredentialSubject {
  [name: string]: string;
}

export interface VerifiableCredentialTypeContainer {
  id: string;
  type: string;
}

export interface VerifiableCredential {
  id?: string;
  credentialType: CredentialType;
  context: Array<string>;
  type: Array<string>;
  credentialSchema?: VerifiableCredentialTypeContainer;
  credentialSubject: CredentialSubject;
  credentialStatus?: VerifiableCredentialTypeContainer;
  refreshService: VerifiableCredentialTypeContainer;
  evidence: VerifiableCredentialTypeContainer;
  subject?: DID;
  termsOfUse: VerifiableCredentialTypeContainer;
  issuer: DID;
  issuanceDate: number;
  expirationDate?: number;
  validFrom?: VerifiableCredentialTypeContainer;
  validUntil?: VerifiableCredentialTypeContainer;
  proof?: JsonString;
  aud: Array<string>;
}
