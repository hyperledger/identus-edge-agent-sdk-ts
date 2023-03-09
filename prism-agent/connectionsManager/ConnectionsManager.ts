import Castor from "../../domain/buildingBlocks/Castor";
import Mercury from "../../domain/buildingBlocks/Mercury";
import Pluto from "../../domain/buildingBlocks/Pluto";
import { DIDPair } from "../../domain/models/DIDPair";
import { ConnectionsManager as ConnectionsManagerClass } from "../types";

export class ConnectionsManager implements ConnectionsManagerClass {
  constructor(
    public castor: Castor,
    public mercury: Mercury,
    public pluto: Pluto,
    public mediationHandler: MediatorHa
  ) {}
  addConnection(paired: DIDPair): Promise<void> {
    throw new Error("Method not implemented.");
  }
  removeConnection(pair: DIDPair): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
