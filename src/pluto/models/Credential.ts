import { MigrationState, MigrationStrategies } from "rxdb";
import type { Model } from "./Model";
import { schemaFactory } from "./Schema";
import { JWTCredential } from "../../pollux/models/JWTVerifiableCredential";

/**
 * Definition for Storable Credential model
 * Represents {@link Domain!Credential}
 * 
 * @typedef {Object} CredentialModel
 * @see Domain.Credential
 */
export interface Credential extends Model {
  /**
   * Identifier for recovery
   */
  recoveryId: string;
  /**
   * Stringified JSON values
   */
  dataJson: string;

  // searchable properties
  issuer?: string;
  subject?: string;
  credentialCreated?: string;
  credentialUpdated?: string;
  credentialSchema?: string;
  validUntil?: string;
  revoked?: boolean;
  // availableClaims?: string[];
  id: string;
}

export const CredentialSchema = schemaFactory<Credential>(schema => {
  schema.addProperty("string", "recoveryId");
  schema.addProperty("string", "dataJson");

  schema.addProperty("string", "issuer");
  schema.addProperty("string", "subject");
  schema.addProperty("string", "credentialCreated");
  schema.addProperty("string", "credentialUpdated");
  schema.addProperty("string", "credentialSchema");
  schema.addProperty("string", "validUntil");
  schema.addProperty("boolean", "revoked");

  schema.setEncrypted("dataJson");
  schema.setVersion(1);

  //V1
  schema.addProperty("string", "id");
  schema.setRequired("recoveryId", "dataJson", "id");

});

export const CredentialMigration: MigrationStrategies = {
  1: function (document) {
    const jwtObj = JSON.parse(document.dataJson);
    const credential = JWTCredential.fromJWT(
      jwtObj,
      jwtObj.id,
      jwtObj.revoked ?? false
    );
    debugger;
  }
}