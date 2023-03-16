import { Mediator } from "../../domain";
import Pluto from "../../domain/buildingBlocks/Pluto";
import { MediatorStore } from "../types";

export class PublicMediatorStore implements MediatorStore {
  constructor(private pluto: Pluto) {}

  async storeMediator(mediator: Mediator): Promise<void> {
    const response = this.pluto.storeMediator(
      mediator.mediatorDID,
      mediator.hostDID,
      mediator.routingDID
    );
    //TODO: FIX THIS, how can the mediator be empty if we just inserted it.
    const mediators = await this.getAllMediators();
    console.log(mediators);
    debugger;
    return response;
  }

  async getAllMediators(): Promise<Mediator[]> {
    return this.pluto.getAllMediators();
  }
}
