import {default as CastorInterface} from '../domain/buildingBlocks/Castor'
import { DID, PublicKey, Service, KeyPair, DIDDocument } from '../domain/models';

export default class Castor implements CastorInterface {
  parseDID(did: string): DID {
    throw new Error('Method not implemented.');
  }
  createPrismDID(masterPublicKey: PublicKey, services?: Service[] | undefined): DID {
    throw new Error('Method not implemented.');
  }
  createPeerDID(keyPairs: KeyPair[], services: Service[]): DID {
    throw new Error('Method not implemented.');
  }
  resolveDID(did: string): Promise<DIDDocument> {
    throw new Error('Method not implemented.');
  }
  verifySignature(did: DID, challenge: Uint8Array, signature: Uint8Array): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

}
