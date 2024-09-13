import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import * as sinon from "sinon";

import * as Domain from "../../src/domain";
import { Apollo, Castor, Pollux, Store } from "../../src";
import * as Models from "../../src/pluto/models";

import { addRxPlugin } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";

import InMemory from "../fixtures/inmemory";
import { makeCollections } from "../../src/pluto/rxdb/collections";
import * as Fixtures from "../fixtures";
import { schemaFactory } from "../../src/pluto/models/Schema";
import { Credential } from "../../src/pluto/models";
import { CredentialRepository, KeyRepository } from "../../src/pluto/repositories";

addRxPlugin(RxDBDevModePlugin);

const apollo = new Apollo();
const castor = new Castor(apollo);


let sandbox: sinon.SinonSandbox;
describe("Pluto", () => {

    beforeEach(async () => {
        sandbox = sinon.createSandbox();

    });

    afterEach(async () => {
        sandbox.restore();
    });

    describe("Migrations", () => {

        test("Should migrate old keys to new keys to add the derivationSchema", async () => {
            const store = new Store({
                name: "randomdb",
                storage: InMemory,
                password: 'random12434',
                ignoreDuplicate: true
            }, {
                keys: {
                    schema: schemaFactory<Models.Key>(schema => {
                        schema.setRequired("recoveryId", "rawHex");
                        schema.addProperty("string", "recoveryId");
                        schema.addProperty("string", "rawHex");
                        schema.addProperty("string", "alias");
                        schema.addProperty("number", "index");
                        schema.setEncrypted("rawHex");
                        schema.setVersion(0);
                    })
                }
            });

            const keyRepository = new KeyRepository(store, apollo);
            const key = keyRepository.toModel(Fixtures.Keys.secp256K1.privateKey)

            delete (key as any).derivationSchema;
            delete (key as any).derivationSchema

            await store.start();

            await store.insert("keys", key);
            const oldKeys = await store.query("keys")

            expect(oldKeys).not.toBe(undefined);

            const currentStore = new Store({
                name: "randomdb",
                storage: InMemory,
                password: 'random12434',
                ignoreDuplicate: true
            });

            await currentStore.start();

            const keys = await currentStore.query("keys")
            expect(keys).not.toBe(undefined);
            expect(keys.length).toBe(1);
        });

        test("Should migrate old anoncreds v0Credentials into v1 credentials", async () => {
            const pollux = new Pollux(apollo, castor);
            const encodeToBuffer = (cred: object) => {
                const json = JSON.stringify(cred);
                return Buffer.from(json);
            };
            const payload = Fixtures.Credentials.Anoncreds.credentialIssued;
            const encoded = encodeToBuffer(payload);
            sandbox.stub(pollux as any, "fetchCredentialDefinition").resolves({});
            sandbox.stub(pollux, "anoncreds").get(() => ({
                processCredential: sandbox.stub().returns(payload)
            }));

            const result = await pollux.parseCredential(Buffer.from(encoded), {
                type: Domain.CredentialType.AnonCreds,
                linkSecret: "linkSecret",
                credentialMetadata: {} as any
            });

            const store = new Store({
                name: "randomdb",
                storage: InMemory,
                password: 'random12434',
                ignoreDuplicate: true
            }, {
                credentials: {
                    schema: schemaFactory<Credential>(schema => {
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
                        schema.setRequired("recoveryId", "dataJson");
                        schema.setVersion(0);
                    })
                }
            });

            const credentialRepository = new CredentialRepository(store);

            const credentialModel = credentialRepository.toModel(result) as any
            delete credentialModel.id

            await store.start();
            await store.insert("credentials", credentialModel);
            const [v0Credential] = await store.query("credentials", {
                selector: {
                    uuid: credentialModel.uuid
                }
            })

            expect(v0Credential).not.toBe(undefined);
            expect(v0Credential).not.toHaveProperty("id");

            const currentStore = new Store({
                name: "randomdb",
                storage: InMemory,
                password: 'random12434',
                ignoreDuplicate: true
            });

            await currentStore.start();

            const [v1Credential] = await currentStore.query("credentials", {
                selector: {
                    uuid: credentialModel.uuid
                }
            })

            expect(v1Credential).not.toBe(undefined);
            expect(v1Credential).toHaveProperty("id");
            expect(v1Credential.id).toBe(result.id)

        });

        test("Should migrate old jwt v0Credentials into v1 credentials", async () => {
            const pollux = new Pollux(apollo, castor);
            const jwtParts = [
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
                "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidHlwZSI6Imp3dCJ9",
                "18bn-r7uRWAG4FCFBjxemKvFYPCAoJTOHaHthuXh5nM",
            ];
            const encodeJWTCredential = (cred: object): string => {
                const json = JSON.stringify(cred);
                const encoded = Buffer.from(json).toString("base64");
                return `${jwtParts[0]}.${encoded}.${jwtParts[2]}`;
            };

            const jwtPayload = Fixtures.Credentials.JWT.credentialPayload;
            const encoded = encodeJWTCredential(jwtPayload);
            const result = await pollux.parseCredential(Buffer.from(encoded), {
                type: Domain.CredentialType.JWT,
            });

            const store = new Store({
                name: "randomdb",
                storage: InMemory,
                password: 'random12434',
                ignoreDuplicate: true
            }, {
                credentials: {
                    schema: schemaFactory<Credential>(schema => {
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
                        schema.setRequired("recoveryId", "dataJson");
                        schema.setVersion(0);
                    })
                }
            });

            await store.start();

            const credentialRepository = new CredentialRepository(store);

            const credentialModel = credentialRepository.toModel(result) as any
            delete credentialModel.id

            await store.insert("credentials", credentialModel);
            const [v0Credential] = await store.query("credentials", {
                selector: {
                    uuid: credentialModel.uuid
                }
            })

            expect(v0Credential).not.toBe(undefined);
            expect(v0Credential).not.toHaveProperty("id");

            const currentStore = new Store({
                name: "randomdb",
                storage: InMemory,
                password: 'random12434',
                ignoreDuplicate: true
            });

            await currentStore.start();

            const [v1Credential] = await currentStore.query("credentials", {
                selector: {
                    uuid: credentialModel.uuid
                }
            })

            expect(v1Credential).not.toBe(undefined);
            expect(v1Credential).toHaveProperty("id");
            expect(v1Credential.id).toBe(result.id)
        })

        test("Should run the migration which adds renames the schema attribute to name", async () => {

            const did = Domain.DID.fromString("did:prism:123456")
            const store = new Store({
                name: "randomdb",
                storage: InMemory,
                password: 'random12434',
                ignoreDuplicate: true
            })

            await store.start()

            await store.insert("dids", {
                schema: did.schema,
                method: did.method,
                uuid: did.toString()
            });

            const newDIDSchema = Object.assign({}, Models.DIDSchema)
            newDIDSchema.properties['name'] = {
                type: 'string',
            }
            newDIDSchema.version = 1;
            newDIDSchema.required.push('name')

            delete newDIDSchema.properties['schema']

            const migrationStore = new Store({
                name: "randomdb",
                storage: InMemory,
                password: 'random12434',
                ignoreDuplicate: true
            }, {
                dids: {
                    schema: newDIDSchema,
                    migrationStrategies: {
                        // 1 means, this transforms data from version 0 to version 1
                        1: async function (oldDoc, collection) {
                            oldDoc.name = oldDoc.schema;
                            delete oldDoc.schema;
                            return oldDoc;
                        }
                    }
                }

            })

            await migrationStore.start();

            const dids = await migrationStore.query("dids");

            expect(dids).not.toBe(undefined);
            expect(Array.isArray(dids)).toBe(true);
            expect(dids.length).toBe(1);
            expect(dids[0]).toHaveProperty("name");
            expect(dids[0]).not.toHaveProperty("schema");
            expect(dids[0]['name']).toBe("did")

        });

        test("Should run the migration correctly when a complete model is being moved somewhere else", async () => {
            const did = Domain.DID.fromString("did:prism:123456")
            const store = new Store({
                name: "randomdb",
                storage: InMemory,
                password: 'random12434',
                ignoreDuplicate: true
            }, makeCollections())

            const newDIDSchema = Object.assign({}, Models.DIDSchema)
            newDIDSchema.properties['name'] = {
                type: 'string',
            }
            newDIDSchema.required.push('name')

            delete newDIDSchema.properties['schema']

            const migrationStore = new Store({
                name: "randomdb",
                storage: InMemory,
                password: 'random12434',
                ignoreDuplicate: true
            }, {
                dids: {
                    schema: {
                        ...Models.DIDSchema,
                        version: 1
                    },
                    migrationStrategies: {
                        1: async function (doc, collection) {
                            const schema = doc.schema;
                            const collections = collection.database.collections;
                            delete doc.schema;
                            await collections.newdids.insert({
                                ...doc,
                                uuid: '1234567',
                                name: schema
                            })
                            return null
                        }
                    }
                },
                newdids: {
                    schema: newDIDSchema
                }
            })

            await store.start()
            await store.insert("dids", {
                schema: did.schema,
                method: did.method,
                uuid: did.toString()
            });

            await migrationStore.start();


            const dids = await migrationStore.query("dids");
            const newDids = await migrationStore.query('newdids');

            expect(dids).not.toBe(undefined);
            expect(Array.isArray(dids)).toBe(true);
            expect(dids.length).toBe(0);

            expect(newDids).not.toBe(undefined);
            expect(Array.isArray(newDids)).toBe(true);
            expect(newDids.length).toBe(1);
            expect(newDids[0]).toHaveProperty("name");
            expect(newDids[0]).not.toHaveProperty("schema");
            expect(newDids[0]['name']).toBe("did")
        })
    });
});
