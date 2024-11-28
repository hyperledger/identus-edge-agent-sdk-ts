import { PluginManager } from "../../plugins";
import { Task } from "../../utils/tasks";
import { ConnectionsManager } from "../connectionsManager/ConnectionsManager";
import { MediatorHandler } from "../types";

export type DIDCommContext = Task.Context<{
  ConnectionManager: ConnectionsManager;
  MediationHandler: MediatorHandler;
  Plugins: PluginManager;
}>;
