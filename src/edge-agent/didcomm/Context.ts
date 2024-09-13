import { Task } from "../../utils/tasks";
import { MediatorHandler } from "../types";

interface Deps {
  MediationHandler: MediatorHandler;
}

export class DIDCommContext extends Task.Context<Deps> {
  get MediationHandler() {
    return this.getProp("MediationHandler");
  }
}
