import { Mediator } from "../../domain";
import Pluto from "../../domain/buildingBlocks/Pluto";
import { MediatorRepository } from "./types/MediatorRepository";

export class PlutoMediatorRepositoryImpl implements MediatorRepository {
  constructor(private pluto: Pluto) {}
  storeMediator(mediator: Mediator): void {
    throw new Error("Method not implemented.");
  }
  getAllMediators(): Mediator[] {
    throw new Error("Method not implemented.");
  }
}
