import * as sha256 from '@stablelib/sha256';

import { MigrationStrategies } from "rxdb";
import type { Model } from "./Model";
import { schemaFactory } from "./Schema";
import { JWTVerifiableCredentialRecoveryId } from "../../pollux/models/JWTVerifiableCredential";
import { AnonCredsRecoveryId } from "../../pollux/models/AnonCredsVerifiableCredential";
import { PlutoError } from '../../domain';

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
    const recoveryId = document.recoveryId;
    if (recoveryId == JWTVerifiableCredentialRecoveryId) {
      const jwtObj = JSON.parse(document.dataJson);
      return {
        ...document,
        id: jwtObj.id
      }
    }
    if (recoveryId == AnonCredsRecoveryId) {
      const anoncredsObject = JSON.parse(document.dataJson);
      if (anoncredsObject.revoked !== undefined) {
        delete anoncredsObject.revoked;
      }
      const anoncredsStr = JSON.stringify(anoncredsObject)
      return {
        ...document,
        id: Buffer.from(sha256.hash(Buffer.from(anoncredsStr))).toString('hex')
      }

    }
    throw new PlutoError.UnknownCredentialTypeError();
  }
}