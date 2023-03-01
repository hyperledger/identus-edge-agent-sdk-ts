import Mercury from "../../domain/buildingBlocks/Mercury";
import { DID, Mediator, Message } from "../../domain/models";
import { MediationHandler } from "./types/MediationHandler";
import { MediatorRepository } from "./types/MediatorRepository";

export class DefaultMediationHandler extends MediationHandler {
  constructor(
    private store: MediatorRepository,
    private mercury: Mercury,
    mediatorDID: DID,
    mediator?: Mediator
  ) {
    super(mediatorDID, mediator);
  }

  bootRegisteredMediator(): Mediator | undefined {
    throw new Error("Method not implemented.");
  }
  achiveMediation(host: DID): Promise<Mediator> {
    throw new Error("Method not implemented.");
  }
  updateKeyListWithDIDs(dids: DID[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  pickupUnreadMessages(limit: number): Promise<[string, Message][]> {
    throw new Error("Method not implemented.");
  }
  registerMessagesAsRead(ids: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
