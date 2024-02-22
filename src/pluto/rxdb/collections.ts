import { RxCollectionCreator } from 'rxdb';
import * as Models from "../models";

export type CollectionList = Record<string, RxCollectionCreator>;

export const makeCollections = (additional: CollectionList = {}) => ({
  "credentials": { schema: Models.CredentialSchema },
  "credential-metadata": { schema: Models.CredentialMetadataSchema },
  "didkey-link": { schema: Models.DIDKeyLinkSchema },
  "did-link": { schema: Models.DIDLinkSchema },
  "dids": { schema: Models.DIDSchema },
  "keys": { schema: Models.KeySchema },
  "messages": { schema: Models.MessageSchema },
  ...additional,
});
