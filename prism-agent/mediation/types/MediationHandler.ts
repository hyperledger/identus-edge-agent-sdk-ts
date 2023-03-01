import { DID, Message } from "../../../domain";
import { Mediator } from "../../../domain/models/Mediator";

export abstract class MediationHandler {
  constructor(protected mediatorDID: DID, protected mediator?: Mediator) {}
  abstract bootRegisteredMediator(): Mediator | undefined;
  abstract achiveMediation(host: DID): Promise<Mediator>;
  abstract updateKeyListWithDIDs(dids: Array<DID>): Promise<void>;
  abstract pickupUnreadMessages(
    limit: number
  ): Promise<Array<[string, Message]>>;
  abstract registerMessagesAsRead(ids: string[]): Promise<void>;
}
