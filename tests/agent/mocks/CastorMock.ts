/* eslint-disable @typescript-eslint/no-unused-vars */
import { DID, DIDDocument, KeyPair, PublicKey, Service } from "../../../domain";
import Castor from "../../../domain/buildingBlocks/Castor";

export const CastorMock: Castor = {
  parseDID(did: string): DID {
    throw new Error("Method not implemented.");
  },
  createPrismDID(
    masterPublicKey: PublicKey,
    services?: Service[] | undefined
  ): Promise<DID> {
    throw new Error("Method not implemented.");
  },
  createPeerDID(keyPairs: KeyPair[], services: Service[]): Promise<DID> {
    return Promise.resolve(
      new DID(
        "did",
        "peer",
        "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOiJodHRwczovL21lZGlhdG9yLnJvb3RzaWQuY2xvdWQiLCJhIjpbImRpZGNvbW0vdjIiXX0"
      )
    );
  },
  resolveDID(did: string): Promise<DIDDocument> {
    throw new Error("Method not implemented.");
  },
  verifySignature(
    did: DID,
    challenge: Uint8Array,
    signature: Uint8Array
  ): Promise<boolean> {
    throw new Error("Method not implemented.");
  },
  getEcnumbasis(did: DID, keyPair: KeyPair): string {
    throw new Error("Method not implemented.");
  },
};
