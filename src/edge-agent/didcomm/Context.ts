import { Task } from "../../utils/tasks";
import { ConnectionsManager } from "../connectionsManager/ConnectionsManager";
import { MediatorHandler } from "../types";

interface Deps {
  ConnectionManager: ConnectionsManager;
  MediationHandler: MediatorHandler;
}

export class DIDCommContext extends Task.Context<Deps> {
  get ConnectionManager() {
    return this.getProp("ConnectionManager");
  }

  get MediationHandler() {
    return this.getProp("MediationHandler");
  }
}
