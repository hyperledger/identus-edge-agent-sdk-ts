import { DID, Mediator, Message } from "../../domain";

export abstract class MediatorHandler {
  abstract mediatorDID: DID;

  abstract mediator?: Mediator;

  abstract bootRegisteredMediator(): Promise<Mediator | undefined>;
  abstract achieveMediation(host: DID): Promise<Mediator>;
  abstract updateKeyListWithDIDs(dids: DID[]): Promise<void>;
  abstract pickupUnreadMessages(
    limit: number
  ): Promise<Array<{ attachmentId: string; message: Message }>>;
  abstract registerMessagesAsRead(ids: string[]): Promise<void>;
}
