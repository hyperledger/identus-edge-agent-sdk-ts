import type { Anoncreds } from "./Anoncreds";

export enum CredentialType {
  JWT = "prism/jwt",
  W3C = "w3c",
  AnonCreds = "AnonCreds",
  Unknown = "Unknown"
}


export enum InputLimitDisclosure {
  REQUIRED = "required",
  PREFERRED = "preferred"
}


export enum DescriptorItemFormat {
  JWT_VC = 'jwt_vc',
  JWT_VP = 'jwt_vp'
}

export enum W3CVerifiableCredentialContext {
  credential = "https://www.w3.org/2018/credentials/v1"
}

export enum W3CVerifiableCredentialType {
  presentation = "VerifiablePresentation",
  credential = "VerifiableCredential"
}


export enum JWTVerifiableCredentialProperties {
  iss = "iss",
  sub = "sub",
  jti = "jti",
  nbf = "nbf",
  exp = "exp",
  aud = "aud",
  vc = "vc",
  type = "type",
  revoked = "revoked"
}

export enum JWTVerifiablePresentationProperties {
  iss = "iss",
  jti = "jti",
  aud = "aud",
  nbf = "nbf",
  iat = 'iat',
  exp = "exp",
  nonce = 'nonce',
  vp = 'vp'
}

export interface CredentialSubject {
  [name: string]: string;
}

export interface VerifiableCredentialTypeContainer {
  id: string;
  type: string;
}

export type PredicateType = string | number

export type Claims = {
  [name: string]: InputFieldFilter
}
export interface PresentationClaims {
  schema?: string;
  issuer?: string;
  claims: Claims
}

export type InputFieldFilter = {
  type: string,
  pattern?: string,
  enum?: PredicateType[],
  const?: PredicateType[],
  value?: PredicateType
}

export type InputField = {
  path: string[],
  id?: string,
  purpose?: string,
  name?: string,
  filter?: InputFieldFilter,
  optional?: boolean
}



export type InputConstraints = {
  fields: InputField[],
  limit_disclosure: InputLimitDisclosure
}

export type InputDescriptor = {
  id: string,
  constraints: InputConstraints,
  name?: string,
  purpose?: string,
  format?: DefinitionFormat,
}

export type DefinitionFormat = {
  jwt: {
    alg: string[]
  },
};

export type PresentationAnoncredsRequest = Anoncreds.PresentationRequest

export type PresentationExchangeDefinitionRequest = {
  presentation_definition: {
    id: string,
    input_descriptors: InputDescriptor[],
    format?: DefinitionFormat
  },
  options: {
    challenge: string,
    domain: string
  }
}

export type AllData = {
  [CredentialType.AnonCreds]: PresentationAnoncredsRequest;
  [CredentialType.JWT]: PresentationExchangeDefinitionRequest;
  [CredentialType.Unknown]: unknown;
  [CredentialType.W3C]: unknown;
};

export type PresentationDefinitionRequest<Type extends CredentialType = CredentialType.JWT> = AllData[Type]

export type DescriptorItem = {
  id: string,
  format: DescriptorItemFormat,
  path: string,
  path_nested?: DescriptorItem
}

export type PresentationSubmission = {
  presentation_submission: {
    id: string,
    definition_id: string,
    descriptor_map: DescriptorItem[]
  },
  verifiablePresentation: string[],
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
    type: string
  },
  refreshService?: {
    id: string,
    type: string
  },
  termsOfUse?: {
    id: string,
    type: string
  },
  validFrom?: {
    id: string,
    type: string
  },
  validUntil?: {
    id: string,
    type: string
  },
  credentialSchema?: {
    id: string,
    type: string
  },
  credentialStatus?: {
    id: string,
    type: string
  }
}


export type JWTCredentialPayload = {
  [JWTVerifiableCredentialProperties.iss]: string;
  [JWTVerifiableCredentialProperties.jti]?: string;
  [JWTVerifiableCredentialProperties.nbf]: number;
  [JWTVerifiableCredentialProperties.exp]: number;
  [JWTVerifiableCredentialProperties.sub]: string;
  [JWTVerifiableCredentialProperties.aud]?: string;
  [JWTVerifiableCredentialProperties.revoked]?: boolean;
  [JWTVerifiableCredentialProperties.vc]: W3CVerifiableCredential
}


export type JWTPresentationPayload = {
  [JWTVerifiablePresentationProperties.iss]?: string;
  [JWTVerifiablePresentationProperties.jti]?: string;
  [JWTVerifiablePresentationProperties.aud]: string;
  [JWTVerifiablePresentationProperties.nbf]?: number;
  [JWTVerifiablePresentationProperties.exp]?: number;
  [JWTVerifiablePresentationProperties.nonce]: string
  [JWTVerifiablePresentationProperties.vp]: W3CVerifiablePresentation
}


export type W3CVerifiablePresentation = {
  "@context": [
    W3CVerifiableCredentialContext.credential
  ],
  type: [
    W3CVerifiableCredentialType.presentation
  ],
  verifiableCredential: string[],
  proof?: W3CVerifiablePresentationProof
}

export type W3CVerifiablePresentationProof = {
  challenge: string,
  domain: string
}


export type JWTPayload = JWTCredentialPayload | JWTPresentationPayload;

export type PresentationJWTOptions = {
  jwtAlg?: string[],
}

export class PresentationOptions {
  public name: string;
  public purpose: string;
  public challenge: string;
  public domain: string;
  public jwt?: PresentationJWTOptions

  constructor(
    options: {
      name?: string,
      purpose?: string,
      challenge: string,
      domain?: string,
      jwt?: PresentationJWTOptions
    }
  ) {
    this.name = options.name ?? "Presentation";
    this.purpose = options.purpose ?? "Verifying Credentials";
    this.challenge = options.challenge;
    this.domain = options.domain ?? 'N/A';
    this.jwt = options.jwt ?? {
      jwtAlg: ['ES256K'],
    };
  }
}