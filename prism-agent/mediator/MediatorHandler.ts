import { DID, Message } from "../../domain";
import { Mediator } from "./Mediator";

export abstract class MediatorHandler {
  abstract mediatorDID: DID;

  abstract mediator?: Mediator;

  abstract bootRegisteredMediator(): Promise<Mediator>;
  abstract achieveMediation(host: DID): Promise<Mediator>;
  abstract updateKeyListWithDIDs(dids: DID[]): Promise<void>;
  abstract pickupUnreadMessages(limit: number): Promise<[string, Message]>;
  abstract registerMessagesAsRead(ids: string[]): Promise<void>;
}
