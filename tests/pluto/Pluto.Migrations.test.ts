import { expect } from "chai";
import { Pluto } from "../../src/pluto/Pluto";
import { InMemoryStore } from "../fixtures/InMemoryStore";
import * as Domain from "../../src/domain";
import { Apollo, Store } from "../../src";
import * as Models from "../../src/pluto/models";

import { addRxPlugin } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";

import InMemory from '@pluto-encrypted/inmemory'
import { makeCollections } from "../../src/pluto/rxdb/collections";

addRxPlugin(RxDBDevModePlugin);



const newDIDSchema = Object.assign({}, Models.DIDSchema)
newDIDSchema.properties['name'] = {
    type: 'string',
}

newDIDSchema.version = 1;
newDIDSchema.required.push('name')




describe("Pluto", () => {


    describe("Migrations", () => {


        test("Should run migration once the schema version has changed and user had existing data", async () => {
            const did = Domain.DID.fromString("did:prism:123456")

            const store = new Store({
                name: "randomdb",
                storage: InMemory,
                password: 'random12434',
            }, makeCollections())

            await store.start()

            await store.insert("dids", {
                schema: did.schema,
                method: did.method,
                uuid: did.toString()
            });


            const migrationStore = new Store({
                name: "randomdb",
                storage: InMemory,
                password: 'random12434',
            }, {
                dids: {
                    schema: newDIDSchema,
                    migrationStrategies: {
                        // 1 means, this transforms data from version 0 to version 1
                        1: async function (oldDoc) {
                            oldDoc.name = oldDoc.schema;
                            return oldDoc;
                        }
                    }
                }

            })

            await migrationStore.start();



        });
    });
});
