import * as IPFS_Module from 'ipfs';
import AccessControllers from 'orbit-db-access-controllers'
import OrbitDB from 'orbit-db';
import Secp256k1IdentityProvider from './identity/Secp256k1IdentityProvider.js';
import Secp256k1AccessController from './access-controll/Secp256k1AccessController.js';

export class Services {
    static async createIPFS() {
        const repoPath = './ipfs'
        const ipfs = await IPFS_Module.create({repo:repoPath});
        return ipfs
    }

    static async createOrbitDB(ipfs, keyPair) {
        if (!AccessControllers.isSupported(Secp256k1AccessController.type)) {
            AccessControllers.addAccessController({ AccessController: Secp256k1AccessController })
         }

        if (!OrbitDB.Identities.isSupported(Secp256k1IdentityProvider.type)) {
            OrbitDB.Identities.addIdentityProvider(Secp256k1IdentityProvider)
        }

        const identity = await OrbitDB.Identities.createIdentity({type: Secp256k1IdentityProvider.type, keyPair: keyPair})
        return OrbitDB.createInstance(ipfs, {identity});
    }
}

export class Database {
    #name;
    #db;

    constructor(name) {
        this.#name = name
    }

    async connect(orbit, credentials = null) {

        const options = credentials ? {
            accessController: {
                type: Secp256k1AccessController.type,
                write: credentials
            }
        }: undefined

        
        const db =  await orbit.keyvalue(this.#name,options );

        this.#db = db;
        await this.#db.load();
    }

    get address() {
        return this.#db.address.toString()
    }

    async get(key) {
        return this.#db.get(key)
    }

    async put(key, value) {
        return this.#db.put(key, value)
    }

    async disconnect() {
        return this.#db?.close();
    }
}
