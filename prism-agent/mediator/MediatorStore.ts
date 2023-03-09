import { Mediator } from "./Mediator";

export interface MediatorStore {
  storeMediator(mediator: Mediator): Promise<void>;
  getAllMediators(): Promise<Mediator[]>;
}
