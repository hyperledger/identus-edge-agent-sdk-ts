import { Anoncreds } from "../../domain/models/Anoncreds";
import { Credential, StorableCredential } from "../../domain/models/Credential";
import { CredentialType } from "../../domain/models/VerifiableCredential";

export enum AnonCredsCredentialProperties {
  iss = "iss",
  jti = "jti",
  schemaId = "schemaId",
  sub = "sub",
  credentialDefinitionId = "credentialDefinitionId",
  values = "values",
  signature = "signature",
  signatureCorrectnessProof = "signatureCorrectnessProof",
  exp = "exp",
}

export const AnonCredsRecoveryId = "anonCreds+credential";

export class AnonCredsCredential
  extends Credential
  implements StorableCredential {
  public credentialType = CredentialType.AnonCreds;
  public recoveryId = AnonCredsRecoveryId;
  public properties = new Map<AnonCredsCredentialProperties, any>();

  constructor(credential: Anoncreds.Credential) {
    super();

    const {
      schema_id,
      cred_def_id,
      values,
      signature,
      signature_correctness_proof,
    } = credential;

    this.properties.set(AnonCredsCredentialProperties.schemaId, schema_id);
    this.properties.set(
      AnonCredsCredentialProperties.credentialDefinitionId,
      cred_def_id
    );
    this.properties.set(AnonCredsCredentialProperties.values, values);

    this.properties.set(AnonCredsCredentialProperties.signature, signature);
    this.properties.set(
      AnonCredsCredentialProperties.signatureCorrectnessProof,
      signature_correctness_proof
    );
  }

  get id() {
    return this.getProperty(AnonCredsCredentialProperties.jti);
  }

  get claims() {
    //TODO: SOLVE THIS DURING THE PRESENTATION PHASE
    return [];
  }

  get credentialDefinitionId(): string {
    return this.getProperty(AnonCredsCredentialProperties.credentialDefinitionId);
  }

  get issuer() {
    return this.properties.get(AnonCredsCredentialProperties.iss);
  }

  get schemaId(): string {
    return this.getProperty(AnonCredsCredentialProperties.schemaId);
  }

  get subject() {
    return this.properties.get(AnonCredsCredentialProperties.sub);
  }

  toStorable() {
    const credentialData = JSON.stringify(Object.fromEntries(this.properties));
    const { id, recoveryId, issuer, subject, claims } = this;
    return {
      id,
      recoveryId,
      credentialData: credentialData,
      issuer,
      subject,
      validUntil: this.getProperty(AnonCredsCredentialProperties.exp),
      availableClaims: claims,
    };
  }

  toJSON(): Anoncreds.Credential {
    return {
      cred_def_id: this.credentialDefinitionId,
      schema_id: this.schemaId,
      signature: this.getProperty(AnonCredsCredentialProperties.signature),
      signature_correctness_proof: this.getProperty(AnonCredsCredentialProperties.signatureCorrectnessProof),
      values: this.getProperty(AnonCredsCredentialProperties.values),
    };
  }
}
