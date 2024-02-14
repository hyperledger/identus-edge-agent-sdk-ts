import { RxCollectionCreator } from 'rxdb';
import * as Models from "../models";

export type CollectionList = Record<string, RxCollectionCreator>;

export const makeCollections = (additional: CollectionList = {}) => ({
  ...additional,
  credentials: { schema: Models.CredentialSchema },
  credentialMetadata: { schema: Models.CredentialMetadataSchema },
  didkeyLink: { schema: Models.DIDKeyLinkSchema },
  didLink: { schema: Models.DIDLinkSchema },
  dids: { schema: Models.DIDSchema },
  keys: { schema: Models.KeySchema },
  messages: { schema: Models.MessageSchema },
});
