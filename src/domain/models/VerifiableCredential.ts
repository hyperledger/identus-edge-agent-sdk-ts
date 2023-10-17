export enum CredentialType {
  JWT = "jwt",
  W3C = "w3c",
  AnonCreds = "AnonCreds",
  Unknown = "Unknown",
}

export interface CredentialSubject {
  [name: string]: string;
}

export interface VerifiableCredentialTypeContainer {
  id: string;
  type: string;
}
