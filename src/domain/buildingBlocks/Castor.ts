import { DID, DIDDocument, Service as DIDDocumentService, KeyPair } from "../models";
import { PublicKey } from "../models";

export interface Castor {
  parseDID(did: string): DID;
  createPrismDID(
    masterPublicKey: PublicKey,
    services?: DIDDocumentService[],
    authenticationKeys?: (PublicKey | KeyPair)[]
  ): Promise<DID>;
  createPeerDID(
    publicKeys: PublicKey[],
    services: DIDDocumentService[]
  ): Promise<DID>;
  resolveDID(did: string): Promise<DIDDocument>;
  verifySignature(
    did: DID,
    challenge: Uint8Array,
    signature: Uint8Array
  ): Promise<boolean>;
  getEcnumbasis(did: DID, publicKey: PublicKey): string;
}
