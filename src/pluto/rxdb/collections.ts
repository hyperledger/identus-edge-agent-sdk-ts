import { RxCollectionCreator } from "rxdb/dist/types/types/rx-collection";
import * as Models from "../models";

export type CollectionList = Record<string, RxCollectionCreator>;

type MakeCollections = (additional?: CollectionList) => CollectionList
export const makeCollections: MakeCollections = (additional: CollectionList = {}) => {
  const collections: CollectionList = {
    "credentials": { schema: Models.CredentialSchema, migrationStrategies: Models.CredentialMigration },
    "credential-metadata": { schema: Models.CredentialMetadataSchema },
    "didkey-link": { schema: Models.DIDKeyLinkSchema },
    "did-link": { schema: Models.DIDLinkSchema },
    "dids": { schema: Models.DIDSchema },
    "keys": { schema: Models.KeySchema },
    "messages": { schema: Models.MessageSchema },
    ...(additional),
  };

  Object.keys(collections).forEach((key) => {
    collections[key].autoMigrate = false;
  });

  return collections;
};