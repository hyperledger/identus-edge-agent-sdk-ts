import { Mediator } from "../../domain";
import Pluto from "../../domain/buildingBlocks/Pluto";
import { MediatorStore } from "../types";

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
