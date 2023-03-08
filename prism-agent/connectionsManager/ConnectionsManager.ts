import { DIDPair } from "../../domain/models/DIDPair";

export class ConnectionsManager {
  addConnection(paired: DIDPair): Promise<void> {
    throw new Error("Method not implemented.");
  }
  removeConnection(pair: DIDPair): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
