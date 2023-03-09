import { DID, Message } from "../../domain";
import Mercury from "../../domain/buildingBlocks/Mercury";
import { Mediator } from "./Mediator";
import { MediatorHandler } from "./MediatorHandler";
import { MediatorStore } from "./MediatorStore";

export class BasicMediatorHandler implements MediatorHandler {
  mediator?: Mediator;

  constructor(
    public mediatorDID: DID,
    public mercury: Mercury,
    public store: MediatorStore
  ) {}

  static fromMediator(
    mediator: Mediator,
    mercury: Mercury,
    store: MediatorStore
  ): BasicMediatorHandler {
    throw new Error("Method not implemented.");
  }

  bootRegisteredMediator(): Promise<Mediator> {
    throw new Error("Method not implemented.");
  }
  achieveMediation(host: DID): Promise<Mediator> {
    throw new Error("Method not implemented.");
  }
  updateKeyListWithDIDs(dids: DID[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  pickupUnreadMessages(limit: number): Promise<[string, Message]> {
    throw new Error("Method not implemented.");
  }
  registerMessagesAsRead(ids: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
