import type * as Anoncreds from "anoncreds-wasm";

export enum CredentialType {
  JWT = "prism/jwt",
  SDJWT = "vc+sd-jwt",
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
  JWT_VP = 'jwt_vp',
  SDJWT = 'sdjwt',
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

export enum SDJWTVerifiableCredentialProperties {
  iss = "iss",
  sub = "sub",
  jti = "jti",
  nbf = "nbf",
  exp = "exp",
  aud = "aud",
  vct = "vct",
  revoked = "revoked",
  _sd_alg = "_sd_alg",
  _sd = "_sd",
  disclosures = "disclosures"
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

export type PredicateType = string | number;
export type AttributeType = string | number;


export type Claims<Type extends CredentialType = CredentialType.JWT> =
  Type extends CredentialType.JWT ? { [name: string]: InputFieldFilter } :
  Type extends CredentialType.SDJWT ? { [name: string]: InputFieldFilter } :
  { [name: string]: AnoncredsInputFieldFilter }

export type JWTPresentationClaims = {
  schema?: string;
  issuer?: string;
  claims: Claims<CredentialType.JWT>
}

export type SDJWTPresentationClaims = {
  schema?: string;
  issuer?: string;
  claims: Claims<CredentialType.SDJWT>
}


export type AnoncredsPresentationClaims = {
  predicates?: Claims<CredentialType.AnonCreds>,
  attributes?: Anoncreds.RequestedAttributes
}

export type PresentationClaims<Type extends CredentialType = CredentialType.JWT> =
  Type extends CredentialType.JWT ? JWTPresentationClaims :
  Type extends CredentialType.SDJWT ? SDJWTPresentationClaims :
  AnoncredsPresentationClaims;


export type AnoncredsInputFieldFilter = {
  type: string,
  name: string,
  $gt?: PredicateType,
  $gte?: PredicateType,
  $lt?: PredicateType,
  $lte?: PredicateType
}

export type InputFieldFilter = {
  type: string,
  pattern?: string,
  enum?: PredicateType[],
  const?: PredicateType[],
  value?: PredicateType,

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
  jwt?: {
    alg: string[]
  },
  sdjwt?: {
    alg: string[]
  },
};

export type PresentationAnoncredsRequest = Anoncreds.PresentationRequestType

export type PresentationExchangeDefinitionRequest = {
  presentation_definition: {
    id: string,
    input_descriptors: InputDescriptor[],
    format?: DefinitionFormat
  }
}


export type PresentationDefinitionData = {
  [CredentialType.AnonCreds]: PresentationAnoncredsRequest;
  [CredentialType.JWT]: PresentationExchangeDefinitionRequest;
  [CredentialType.SDJWT]: PresentationExchangeDefinitionRequest;
  [CredentialType.Unknown]: any;
  [CredentialType.W3C]: any;
};

export class PresentationDefinitionRequestType<Type extends CredentialType> {
  constructor(public data: PresentationDefinitionData[Type]) { }

  static fromData<Type extends CredentialType>(
    data: PresentationDefinitionData
  ): PresentationDefinitionRequestType<Type> {
    return new PresentationDefinitionRequestType<Type>(data)
  }

}

export type PresentationDefinitionRequest<Type extends CredentialType = CredentialType.JWT> =
  PresentationDefinitionData[Type]


export type DescriptorItem = {
  id: string,
  format: DescriptorItemFormat,
  path: string,
  path_nested?: DescriptorItem
}


export type JWTPresentationSubmission = {
  presentation_submission: {
    id: string,
    definition_id: string,
    descriptor_map: DescriptorItem[]
  },
  verifiablePresentation: string[],
}

export type SDJWTPresentationExchangeSubmission = {
  presentation_submission: {
    id: string,
    definition_id: string,
    descriptor_map: DescriptorItem[]
  },
  verifiablePresentation: string[],
}

export type SDJWTPresentationSubmission = {
  disclosures: any[],
  protected: string,
  payload: string,
  signature: string
}

export type AnoncredsPresentationSubmission = Anoncreds.PresentationType;



export type PresentationSubmissionData = {
  [CredentialType.AnonCreds]: AnoncredsPresentationSubmission;
  [CredentialType.JWT]: JWTPresentationSubmission;
  [CredentialType.SDJWT]: JWTPresentationSubmission;
  [CredentialType.Unknown]: any;
  [CredentialType.W3C]: any;
}


export type PresentationSubmission<Type extends CredentialType = CredentialType.JWT> =
  PresentationSubmissionData[Type]


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
  credentialStatus?: JWTRevocationStatus | unknown
}

export interface W3CVerifiableCredentialData {
  id: string,
  type: string
}


export enum JWTRevocationStatusPurpose {
  Revocation = "Revocation",
  Suspension = 'Suspension'
}

export enum CredentialStatusType {
  StatusList2021Entry = 'StatusList2021Entry'
}


export enum RevocationType {
  StatusList2021 = 'StatusList2021'
}

export interface JWTRevocationStatus extends W3CVerifiableCredentialData {
  statusPurpose: JWTRevocationStatusPurpose,
  statusListIndex: number,
  id: string,
  type: RevocationType,
  statusListCredential: string
}

export enum JWTProofType {
  EcdsaSecp256k1Signature2019 = "EcdsaSecp256k1Signature2019",
  DataIntegrityProof = "DataIntegrityProof",
  Unknown = "Unknown"
}

export enum JWTProofPurpose {
  ProofPurpose = 'assertionMethod'
}

export interface JWTStatusListResponse {
  "@context": [
    W3CVerifiableCredentialContext.credential,
    W3CVerifiableCredentialContext.revocation
  ],
  type: [
    W3CVerifiableCredentialType.credential,
    W3CVerifiableCredentialType.revocation
  ],
  issuer: string,
  id: string,
  issuanceDate: string,
  credentialSubject: {
    id: string,
    type: string,
    statusPurpose: string,
    encodedList: string
  },
  proof: {
    type: JWTProofType,
    jws: string,
    proofPurpose: JWTProofPurpose,
    verificationMethod: string,
    created: string,
    proofValue: string,
    cryptoSuite: string
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
  [JWTVerifiablePresentationProperties.aud]?: string;
  [JWTVerifiablePresentationProperties.nbf]?: number;
  [JWTVerifiablePresentationProperties.exp]?: number;
  [JWTVerifiablePresentationProperties.nonce]?: string
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
export type Hasher = (data: string, alg: string) => Promise<Uint8Array>;
export type Signer = (data: string | Uint8Array) => Promise<string>;
export type Verifier = (data: string, sig: string) => Promise<boolean>;

export type JWTHeader = {
  typ: 'JWT'
  alg: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}

export type JWTPayload = JWTCredentialPayload | JWTPresentationPayload;
export type JWTObject = {
  header: JWTHeader
  payload: JWTPayload
  signature: string
  data: string
}

export type PresentationJWTOptions = {
  jwtAlg?: string[],
}

export type PresentationRequestOptions = {
  [CredentialType.AnonCreds]: ConstructorParameters<typeof AnoncredsPresentationOptions>['0'];
  [CredentialType.JWT]: ConstructorParameters<typeof JWTPresentationOptions>['0'];
  [CredentialType.SDJWT]: ConstructorParameters<typeof SDJWPresentationOptions>['0'];
  [CredentialType.Unknown]: any;
  [CredentialType.W3C]: any;
}



export class PresentationOptions {

  constructor(
    private data: any = {},
    private type: CredentialType = CredentialType.JWT
  ) {

  }

  get options() {
    if (this.type === CredentialType.AnonCreds) {
      return new AnoncredsPresentationOptions(this.data)
    }
    if (this.type === CredentialType.JWT) {
      return new JWTPresentationOptions(this.data)
    }
    if (this.type === CredentialType.SDJWT) {
      return new SDJWPresentationOptions(this.data)
    }
    throw new Error("Not supported" + this.type)
  }
}

export class AnoncredsPresentationOptions {
  constructor(_data: any) { }
}

export class SDJWPresentationOptions {
  public name: string;
  public purpose: string;
  public sdjwt?: PresentationJWTOptions

  constructor(
    options: {
      name?: string,
      purpose?: string,
      sdjwt?: PresentationJWTOptions
    }
  ) {
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
      jwtAlg: [JWT_ALG.ES256K],
    };
  }
}

export enum JWT_ALG {
  ES256K = "ES256K",
  EdDSA = "EdDSA",
  unknown = 'unknown'
}