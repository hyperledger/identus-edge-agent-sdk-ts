/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DID,
  DIDDocument,
  PublicKey,
  Service,
} from "../../../src/domain";
import { Castor } from "../../../src/domain/buildingBlocks/Castor";

const castorVars = {
  _prismDID: new DID("did", "peer", "test"),
  _peerDID: new DID(
    "did",
    "peer",
    "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
  ),
}

export const CastorMock: Castor & typeof castorVars = {
  ...castorVars,

  parseDID(did: string): DID {
    throw new Error("Method not implemented.");
  },
  createPrismDID(
    masterPublicKey: PublicKey,
    services?: Service[] | undefined
  ): Promise<DID> {
    return Promise.resolve(castorVars._prismDID)
  },

  createPeerDID(publicKeys: PublicKey[], services: Service[]): Promise<DID> {
    return Promise.resolve(castorVars._peerDID);
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
  getEcnumbasis(did: DID, publicKey: PublicKey): string {
    throw new Error("Method not implemented.");
  },
};
