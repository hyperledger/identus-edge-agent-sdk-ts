
import { type RIDBTypes } from '@trust0/ridb';



import * as Models from "../models";

export type CollectionCreate = {
    schemas: RIDBTypes.SchemaTypeRecord,
    migrations: RIDBTypes.MigrationPathsForSchemas<any>
};

export type CollectionList = Record<string, CollectionCreate>;



export const makeCollections = () =>
({
    schemas: {
        "credentials": Models.CredentialSchema,
        "credential-metadata": Models.CredentialMetadataSchema,
        "didkey-link": Models.DIDKeyLinkSchema,
        "did-link": Models.DIDLinkSchema,
        "dids": Models.DIDSchema,
        "keys": Models.KeySchema,
        "messages": Models.MessageSchema,
    },
    migrations: {
        "credentials": Models.CredentialMigration,
        "credential-metadata": undefined,
        "didkey-link": undefined,
        "did-link": undefined,
        "dids": undefined,
        "keys": undefined,
        "messages": undefined,
    }
})





