import * as TB from "@sinclair/typebox";
import type * as Anoncreds from "anoncreds-wasm";
import * as sha256 from '@stablelib/sha256';
import { Credential, StorableCredential } from "../../domain/models/Credential";
import { CredentialType } from "../../domain/models/VerifiableCredential";
import { isString, validate } from "../../utils";

export enum AnonCredsCredentialProperties {
  iss = "iss",
  jti = "jti",
  sub = "sub",
  exp = "exp",
  schemaId = "schema_id",
  credentialDefinitionId = "cred_def_id",
  signature = "signature",
  signatureCorrectnessProof = "signature_correctness_proof",
  values = "values",
  revoked = "revoked"
}

export const AnonCredsRecoveryId = "anonCreds+credential";

export class AnonCredsCredential
  extends Credential
  implements StorableCredential {
  public credentialType = CredentialType.AnonCreds;
  public recoveryId = AnonCredsRecoveryId;
  public properties = new Map<AnonCredsCredentialProperties, any>();

  constructor(credential: Anoncreds.CredentialType, isRevoked = false) {
    super();

    const {
      schema_id,
      cred_def_id,
      values,
      signature,
      signature_correctness_proof,
    } = credential;

    this.properties.set(AnonCredsCredentialProperties.revoked, isRevoked);
    this.properties.set(AnonCredsCredentialProperties.schemaId, schema_id);
    this.properties.set(AnonCredsCredentialProperties.credentialDefinitionId, cred_def_id);
    this.properties.set(AnonCredsCredentialProperties.values, values);
    this.properties.set(AnonCredsCredentialProperties.signature, signature);
    this.properties.set(AnonCredsCredentialProperties.signatureCorrectnessProof, signature_correctness_proof);
  }

  get id() {
    const credential: Anoncreds.CredentialType = {
      schema_id: this.properties.get(AnonCredsCredentialProperties.schemaId),
      cred_def_id: this.properties.get(AnonCredsCredentialProperties.credentialDefinitionId),
      values: this.properties.get(AnonCredsCredentialProperties.values),
      signature: this.properties.get(AnonCredsCredentialProperties.signature),
      signature_correctness_proof: this.properties.get(AnonCredsCredentialProperties.signatureCorrectnessProof),
    };
    const anoncredsObject = JSON.stringify(
      credential
    );
    const hash = sha256.hash(Buffer.from(anoncredsObject));
    return Buffer.from(hash).toString('hex');
  }

  get claims() {
    const values: Record<string, any> = this.getProperty(AnonCredsCredentialProperties.values);
    const claims = Object.keys(values).map(key => ({ [key]: values[key] }));

    return claims;
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

  get revoked() {
    return this.properties.get(AnonCredsCredentialProperties.revoked);
  }

  toStorable() {
    const credentialData = JSON.stringify(Object.fromEntries(this.properties));

    return {
      recoveryId: this.recoveryId,
      credentialData: credentialData,
      id: this.id,
      issuer: this.issuer,
      subject: this.subject,
      validUntil: this.getProperty(AnonCredsCredentialProperties.exp),
      // availableClaims: claims,
    };
  }

  toJSON(): Anoncreds.CredentialType {
    return {
      cred_def_id: this.credentialDefinitionId,
      schema_id: this.schemaId,
      signature: this.getProperty(AnonCredsCredentialProperties.signature),
      signature_correctness_proof: this.getProperty(AnonCredsCredentialProperties.signatureCorrectnessProof),
      values: this.getProperty(AnonCredsCredentialProperties.values),
    };
  }

  static fromJson(value: Anoncreds.CredentialType | string | unknown) {
    const json = isString(value) ? JSON.parse(value) : value;
    validate(json, AnoncredsCredentialSchema);
    return new AnonCredsCredential(json);
  }
}

const AnoncredsCredentialSchema = TB.Object({
  [AnonCredsCredentialProperties.credentialDefinitionId]: TB.String(),
  [AnonCredsCredentialProperties.schemaId]: TB.String(),
  [AnonCredsCredentialProperties.signature]: TB.Object({
    p_credential: TB.Object({
      m_2: TB.String(),
      a: TB.String(),
      e: TB.String(),
      v: TB.String(),
    })
  }),
  [AnonCredsCredentialProperties.signatureCorrectnessProof]: TB.Object({
    c: TB.String(),
    se: TB.String(),
  }),
  [AnonCredsCredentialProperties.values]: TB.Record(TB.String(), TB.Any()),
});
