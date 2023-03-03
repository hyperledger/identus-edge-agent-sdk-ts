import Mercury from "../domain/buildingBlocks/Mercury";
import Castor from "../domain/buildingBlocks/Castor";
import Pluto from "../domain/buildingBlocks/Pluto";
import { MediationHandler } from "./mediation/types/MediationHandler";
import { Mediator, Message, DID } from "../domain";
import { AgentError } from "../domain/models/Errors";

export class ConnectionManager {
  static NUMBER_OF_MESSAGES = 10;

  constructor(
    protected mercury: Mercury,
    protected castor: Castor,
    protected pluto: Pluto,
    public mediationHandler: MediationHandler
  ) {}

  async startMediator(): Promise<Mediator | undefined> {
    return this.mediationHandler.bootRegisteredMediator();
  }

  async registerMediator(hostDID: DID): Promise<Mediator | undefined> {
    return this.mediationHandler.achiveMediation(hostDID);
  }

  async sendMessage(message: Message): Promise<Message | undefined> {
    if (!this.mediationHandler.mediator) {
      throw new AgentError.NoMediatorAvailableError();
    }
    await this.pluto.storeMessage(message);
    return this.mercury.sendMessageParseMessage(message);
  }

  async awaitMessages(): Promise<Array<Message>> {
    const unreadMessages = await this.mediationHandler.pickupUnreadMessages(
      ConnectionManager.NUMBER_OF_MESSAGES
    );
    const initialReduce: { messageIds: string[]; messages: Message[] } = {
      messageIds: [],
      messages: [],
    };

    const { messageIds, messages } = unreadMessages.reduce(
      ({ messageIds, messages }, [messageId, message]) => ({
        messageIds: [...messageIds, messageId],
        messages: [...messages, message],
      }),
      initialReduce
    );

    this.mediationHandler.registerMessagesAsRead(messageIds);
    this.pluto.storeMessages(messages);

    return messages;
  }
}
