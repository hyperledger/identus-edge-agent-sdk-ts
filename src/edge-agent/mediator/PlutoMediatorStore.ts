import { Mediator } from "../../domain";
import { Pluto } from "../../domain/buildingBlocks/Pluto";
import { MediatorStore } from "../types";

/**
 * PlutoMediationStore is used just to interface between the mediators and storage.
 * It is mainly used to store + fetch mediator from current storage instance (pluto)
 *
 * @export
 * @class PublicMediatorStore
 * @typedef {PublicMediatorStore}
 */
export class PublicMediatorStore implements MediatorStore {
  /**
   * Creates an instance of PublicMediatorStore.
   *
   * @constructor
   * @param {Pluto} pluto
   */
  constructor(private pluto: Pluto) {}

  /**
   * Stores a mediator asyncronously in pluto
   *
   * @async
   * @param {Mediator} mediator
   * @returns {Promise<void>}
   */
  async storeMediator(mediator: Mediator): Promise<void> {
    const response = await this.pluto.storeMediator(mediator);
    return response;
  }

  /**
   * Asyncronously fetch all the mediators from storage
   *
   * @async
   * @returns {Promise<Mediator[]>}
   */
  async getAllMediators(): Promise<Mediator[]> {
    return this.pluto.getAllMediators();
  }
}
