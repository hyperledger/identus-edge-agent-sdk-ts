import { DID, DIDDocument, KeyPair, PublicKey, Service as DIDDocumentService } from '../models';
export default interface Castor {
    parseDID(did: string): DID;
    createPrismDID(masterPublicKey: PublicKey, services?: DIDDocumentService[]): DID;
    createPeerDID(keyPairs: KeyPair[], services: DIDDocumentService[]): DID;
    resolveDID(did: string): Promise<DIDDocument>;
    verifySignature(did: DID, challenge: Uint8Array, signature: Uint8Array): Promise<boolean>;
}
