import { DIDPair } from "domain/models/DIDPair";
import { ConnectionsManager } from "./ConnectionsManager";

export class ConnectionsManagerImpl implements ConnectionsManager {
  addConnection(paired: DIDPair): Promise<void> {
    throw new Error("Method not implemented.");
  }
  removeConnection(pair: DIDPair): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
