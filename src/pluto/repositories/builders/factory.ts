import type * as Domain from "../../../domain";
import { Pluto } from "../../Pluto";
import {
  CredentialMetadataRepository,
  CredentialRepository,
  DIDKeyLinkRepository,
  DIDLinkRepository,
  DIDRepository,
  KeyRepository,
  LinkSecretRepository,
  MessageRepository
} from "../";

/**
 * Factory fn to instantiate all Repositories
 * 
 * @param store 
 * @param keyRestoration 
 * @returns list of instantiated Repostitories
 */
export const repositoryFactory = (store: Pluto.Store, keyRestoration: Domain.KeyRestoration) => ({
  Credentials: new CredentialRepository(store),
  CredentialMetadata: new CredentialMetadataRepository(store),
  DIDs: new DIDRepository(store),
  Keys: new KeyRepository(store, keyRestoration),
  LinkSecrets: new LinkSecretRepository(store),
  Messages: new MessageRepository(store),
  DIDKeyLinks: new DIDKeyLinkRepository(store),
  DIDLinks: new DIDLinkRepository(store),
});

export type PlutoRepositories = ReturnType<typeof repositoryFactory>;
