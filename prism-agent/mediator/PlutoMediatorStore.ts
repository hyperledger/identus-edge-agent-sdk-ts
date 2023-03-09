import Pluto from "../../domain/buildingBlocks/Pluto";
import { Mediator } from "./Mediator";
import { MediatorStore } from "./MediatorStore";

export class PublicMediatorStore implements MediatorStore {
  constructor(private pluto: Pluto) {}

  async storeMediator(mediator: Mediator): Promise<void> {
    return this.pluto.storeMediator(
      mediator.mediatorDID,
      mediator.hostDID,
      mediator.routingDID
    );
  }

  async getAllMediators(): Promise<Mediator[]> {
    return this.pluto.getAllMediators();
  }
}
