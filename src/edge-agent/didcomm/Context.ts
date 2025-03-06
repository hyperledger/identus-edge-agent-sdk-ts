import { PluginManager } from "../../plugins";
import { Task } from "../../utils/tasks";
import { EventsManager } from "../Agent.MessageEvents";
import { ConnectionsManager } from "../connections/ConnectionsManager";
import { JobManager } from "../connections/JobManager";

export type DIDCommContext = Task.Context<{
  Connections: ConnectionsManager;
  Plugins: PluginManager;
  Events: EventsManager;
  Jobs: JobManager;
}>;
