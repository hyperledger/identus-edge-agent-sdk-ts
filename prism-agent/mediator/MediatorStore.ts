import { Mediator } from "../../domain";

export interface MediatorStore {
  storeMediator(mediator: Mediator): Promise<void>;
  getAllMediators(): Promise<Mediator[]>;
}
