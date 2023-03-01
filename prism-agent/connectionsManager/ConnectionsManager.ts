import { DIDPair } from "domain/models/DIDPair";

export interface ConnectionsManager {
  addConnection(paired: DIDPair): Promise<void>;
  removeConnection(pair: DIDPair): Promise<void>;
}
