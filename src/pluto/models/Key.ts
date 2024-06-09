import { MigrationStrategies } from "rxdb";
import type { Model } from "./Model";
import { schemaFactory } from "./Schema";
import { DeprecatedDerivationPathSchema } from "../../apollo/utils/derivation/schemas/DeprecatedDerivation";

/**
 * Definition for Key model
 * Represents {@link Domain!PrivateKey}
 * 
 * @typedef {Object} KeyModel
 * @see Domain.Key
 * @see Domain.StorableKey
 */
export interface Key extends Model {
  recoveryId: string;
  derivationSchema: string;
  keySpecification: string;
  /**
   * Hex encoded Key.raw
   */
  rawHex: string;
  /**
   * Optional name
   */
  alias?: string;
  index?: number;
}

export const KeySchema = schemaFactory<Key>(schema => {
  schema.addProperty("string", "recoveryId");
  schema.addProperty("string", "rawHex");
  schema.addProperty("string", "alias");
  schema.addProperty("number", "index");

  schema.setVersion(1);
  schema.addProperty("string", "derivationSchema");
  schema.addProperty("string", "keySpecification");


  schema.setEncrypted("rawHex", "derivationSchema");
  schema.setRequired("recoveryId", "rawHex", "derivationSchema");

});

export const KeyMigration: MigrationStrategies = {
  1: function (document) {
    //Recover the derivationSchema if possible, all new keys should have it
    if (!document.derivationSchema) {
      //Was using the old key, so, using old schema
      document.derivationSchema = DeprecatedDerivationPathSchema;
    }
    return document;
  }
}