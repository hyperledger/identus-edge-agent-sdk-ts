export enum CredentialType {
  JWT = "prism/jwt",
  W3C = "w3c",
  AnonCreds = "AnonCreds",
  ANONCREDS_OFFER = "anoncreds/credential-offer@v1.0",
  ANONCREDS_REQUEST = "anoncreds/credential-request@v1.0",
  ANONCREDS_ISSUE = "anoncreds/credential@v1.0",
  ANONCREDS_PROOF_REQUEST = "anoncreds/proof-request@v1.0",
  PRESENTATION_EXCHANGE_DEFINITIONS = "dif/presentation-exchange/definitions@v1.0",
  PRESENTATION_EXCHANGE_SUBMISSION = "dif/presentation-exchange/submission@v1.0",
  Unknown = "Unknown"
}

export interface CredentialSubject {
  [name: string]: string;
}

export interface VerifiableCredentialTypeContainer {
  id: string;
  type: string;
}


export type InputFieldFilter = {
  type: string,
  pattern: string
}

export type InputField = {
  path: string[],
  id?: string,
  purpose?: string,
  name?: string,
  filter?: InputFieldFilter,
  optional?: boolean
}

export enum InputLimitDisclosure {
  REQUIRED = "required",
  PREFERRED = "preferred"
}

export type InputConstraints = {
  fields: InputField[],
  limitDisclosure: InputLimitDisclosure
}

export type InputDescriptor = {
  id: string,
  constraints: InputConstraints,
  name?: string,
  purpose?: string,
  format?: DefinitionFormat,
}

export type JWT_FORMAT = {
  jwt_vc?: {
    alg: string[]
  },
  jwt_vp?: {
    alg: string[]
  }
}

export type DefinitionFormat = {
  jwt?: JWT_FORMAT
};

export type PresentationDefinitionRequest = {
  id: string,
  inputDescriptors: InputDescriptor[],
  format: DefinitionFormat
}