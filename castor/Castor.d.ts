import { default as CastorInterface } from '../domain/buildingBlocks/Castor';
import { DID, PublicKey, Service, KeyPair, DIDDocument } from '../domain/models';
export default class Castor implements CastorInterface {
    parseDID(did: string): DID;
    createPrismDID(masterPublicKey: PublicKey, services?: Service[] | undefined): DID;
    createPeerDID(keyPairs: KeyPair[], services: Service[]): DID;
    resolveDID(did: string): Promise<DIDDocument>;
    verifySignature(did: DID, challenge: Uint8Array, signature: Uint8Array): Promise<boolean>;
}
