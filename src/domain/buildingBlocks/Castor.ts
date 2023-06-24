import {
  DID,
  DIDDocument,
  KeyPair,
  Service as DIDDocumentService,
} from "../models";
import { PublicKey } from "../models/KeyManagement";

export interface Castor {
  parseDID(did: string): DID;
  createPrismDID(
    masterPublicKey: PublicKey,
    services?: DIDDocumentService[]
  ): Promise<DID>;
  createPeerDID(
    keyPairs: KeyPair[],
    services: DIDDocumentService[]
  ): Promise<DID>;
  resolveDID(did: string): Promise<DIDDocument>;
  verifySignature(
    did: DID,
    challenge: Uint8Array,
    signature: Uint8Array
  ): Promise<boolean>;
  getEcnumbasis(did: DID, keyPair: KeyPair): string;
}
