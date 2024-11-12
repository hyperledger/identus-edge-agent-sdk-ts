import { MigrationStrategies, RxJsonSchema } from "rxdb";
import * as Models from "../models";
import { Schema } from "../models/Schema";

type CollectionCreate<
  RxDocType = any,
  SchemaType extends Schema & RxJsonSchema<RxDocType> = Schema &
  RxJsonSchema<RxDocType>
> = {
  schema: SchemaType;
  migrationStrategies?:
  | MigrationStrategies;
};

type MakeCollections = (additional?: CollectionList) => CollectionList;

export type CollectionList = Record<string, CollectionCreate>;

export const makeCollections: MakeCollections = (
  additional: CollectionList = {}
) => ({
  credentials: { schema: Models.CredentialSchema, migrationStrategies: Models.CredentialMigration },
  "credential-metadata": { schema: Models.CredentialMetadataSchema },
  "didkey-link": { schema: Models.DIDKeyLinkSchema },
  "did-link": { schema: Models.DIDLinkSchema },
  dids: { schema: Models.DIDSchema },
  keys: { schema: Models.KeySchema },
  messages: { schema: Models.MessageSchema },
  ...additional,
});
