import { Mediator } from "../../../domain";

export interface MediatorRepository {
  storeMediator(mediator: Mediator): void;
  getAllMediators(): Array<Mediator>;
}
