
import * as Domain from "../../src/domain";
import { Store } from "../../src";
import * as Models from "../../src/pluto/models";

import { addRxPlugin } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";

import InMemory from "../fixtures/inmemory";
import { makeCollections } from "../../src/pluto/rxdb/collections";

addRxPlugin(RxDBDevModePlugin);

describe("Pluto", () => {

    describe("Migrations", () => {

        test("Should run the migration which adds renames the schema attribute to name", async () => {

            const did = Domain.DID.fromString("did:prism:123456")
            const store = new Store({
                name: "randomdb",
                storage: InMemory,
                password: 'random12434',
                ignoreDuplicate: true
            }, makeCollections())

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
