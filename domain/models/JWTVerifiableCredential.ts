import { JsonString } from ".";
import { DID } from "./DID";
import {
  CredentialSubject,
  CredentialType,
  VerifiableCredential,
  VerifiableCredentialTypeContainer,
} from "./VerifiableCredential";

export class JWTVerifiableCredential {
  constructor(
    public subject: CredentialSubject,
    public context: Array<string> = [],
    public type: Array<string> = [],
    public credentialSchema: VerifiableCredentialTypeContainer,
    public credentialSubject: CredentialSubject,
    public credentialStatus: VerifiableCredentialTypeContainer,
    public refreshService: VerifiableCredentialTypeContainer,
    public evidence: VerifiableCredentialTypeContainer,
    public termsOfUse: VerifiableCredentialTypeContainer
  ) {}
}

export class JWTVerifiablePayload implements VerifiableCredential {
  credentialType: CredentialType = CredentialType.JWT;

  id?: string | undefined;
  context: string[];
  type: string[];
  credentialSchema?: VerifiableCredentialTypeContainer | undefined;
  credentialSubject: CredentialSubject;
  credentialStatus?: VerifiableCredentialTypeContainer | undefined;
  refreshService: VerifiableCredentialTypeContainer;
  evidence: VerifiableCredentialTypeContainer;
  termsOfUse: VerifiableCredentialTypeContainer;
  issuer: DID;
  subject?: DID;
  issuanceDate: number;
  expirationDate?: number;
  validFrom?: VerifiableCredentialTypeContainer;
  validUntil?: VerifiableCredentialTypeContainer;
  proof?: string | undefined;

  constructor(
    public iss: DID,
    public verifiableCredential: JWTVerifiableCredential,
    public jti: string,
    public nbf: number,
    public sub?: string,
    public exp?: number,
    public aud: Array<string> = [],
    public originalJWTString?: string
  ) {
    this.context = verifiableCredential.context;
    this.type = verifiableCredential.type;
    this.id = jti;
    this.issuer = iss;
    if (sub) {
      this.subject = DID.fromString(sub);
    }
    this.issuanceDate = nbf;
    if (exp) {
      this.expirationDate = exp;
    }
    if (verifiableCredential.credentialSchema) {
      this.credentialSchema = verifiableCredential.credentialSchema;
    }
    this.credentialSubject = verifiableCredential.credentialSubject;
    this.credentialStatus = verifiableCredential.credentialStatus;
    this.refreshService = verifiableCredential.refreshService;
    this.evidence = verifiableCredential.evidence;
    this.termsOfUse = verifiableCredential.termsOfUse;
  }
}
