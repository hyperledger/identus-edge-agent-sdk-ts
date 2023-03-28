import { DID, Message, MessageDirection } from "../../domain";
import Castor from "../../domain/buildingBlocks/Castor";
import Mercury from "../../domain/buildingBlocks/Mercury";
import Pluto from "../../domain/buildingBlocks/Pluto";
import { DIDPair } from "../../domain/models/DIDPair";
import { AgentError } from "../../domain/models/Errors";
import { AgentMessageEvents } from "../Agent.MessageEvents";
import { CancellableTask } from "../helpers/Task";
import {
  AgentMessageEvents as AgentMessageEventsClass,
  ConnectionsManager as ConnectionsManagerClass,
  ListenerKey,
  MediatorHandler,
} from "../types";

export class ConnectionsManager implements ConnectionsManagerClass {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public cancellables: CancellableTask<any>[] = [];
  public cancellable?: CancellableTask<void>;

  public events: AgentMessageEventsClass;

  constructor(
    public castor: Castor,
    public mercury: Mercury,
    public pluto: Pluto,
    public mediationHandler: MediatorHandler,
    public pairings: DIDPair[] = []
  ) {
    this.events = new AgentMessageEvents();
  }

  async startMediator(): Promise<void> {
    const mediationHandler =
      await this.mediationHandler.bootRegisteredMediator();

    if (!mediationHandler) {
      throw new AgentError.NoMediatorAvailableError();
    }
  }

  stopAllEvents(): void {
    while (this.cancellables.length > 0) {
      const [task] = this.cancellables.splice(0, 1);
      if (task) {
        task.cancel();
      }
    }
  }

  async awaitMessages(): Promise<Message[]> {
    if (!this.mediationHandler.mediator) {
      throw new AgentError.NoMediatorAvailableError();
    }

    const unreadMessages = await this.mediationHandler.pickupUnreadMessages(10);

    const messages = unreadMessages
      .filter(({ message }) => message.direction === MessageDirection.RECEIVED)
      .map(({ message }) => message);

    const messageIds = unreadMessages
      .filter(({ message }) => message.direction === MessageDirection.RECEIVED)
      .map(({ attachmentId }) => attachmentId);

    if (messages.length) {
      await this.pluto.storeMessages(messages);
    }

    if (messageIds.length) {
      await this.mediationHandler.registerMessagesAsRead(messageIds);
    }

    return messages;
  }

  async awaitMessageResponse(id: string): Promise<Message | undefined> {
    const messages = await this.awaitMessages();
    return messages.find((message) => message.thid === id);
  }

  async addConnection(paired: DIDPair): Promise<void> {
    if (this.findIndex(paired) !== -1) {
      return;
    }

    const storeDIDPairTask = new CancellableTask<DIDPair>(async () => {
      await this.pluto.storeDIDPair(paired.host, paired.receiver, paired.name);
      this.events.emit(ListenerKey.CONNECTION, paired);
      return paired;
    });

    this.cancellables.push(storeDIDPairTask);

    storeDIDPairTask.callback((pair: DIDPair) => this.pairings.push(pair));
  }

  findIndex(pair: DIDPair) {
    return this.pairings.findIndex(
      (pairing) =>
        pair.host === pairing.host &&
        pair.name === pairing.name &&
        pair.receiver === pairing.receiver
    );
  }

  async removeConnection(pair: DIDPair): Promise<void> {
    const pairIndex = this.findIndex(pair);
    if (pairIndex !== -1) {
      this.pairings.splice(pairIndex, 1);
    }
  }

  async registerMediator(hostDID: DID): Promise<void> {
    await this.mediationHandler.achieveMediation(hostDID);
  }

  async sendMessage(message: Message): Promise<Message | undefined> {
    await this.pluto.storeMessage(message);
    return this.mercury.sendMessageParseMessage(message);
  }

  startFetchingMessages(iterationPeriod: number): void {
    if (this.cancellable) {
      return;
    }
    const timeInterval = Math.max(iterationPeriod, 5) * 1000;
    this.cancellable = new CancellableTask(async () => {
      const unreadMessages = await this.awaitMessages();
      if (unreadMessages.length) {
        this.events.emit(ListenerKey.MESSAGE, unreadMessages);
      }
    }, timeInterval);
  }

  stopFetchingMessages(): void {
    this.cancellable?.cancel();
    this.cancellable = undefined;
  }
}
