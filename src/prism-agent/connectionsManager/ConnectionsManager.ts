import { uuid } from "@stablelib/uuid";
import { DID, Message, MessageDirection } from "../../domain";
import { Castor } from "../../domain/buildingBlocks/Castor";
import { Mercury } from "../../domain/buildingBlocks/Mercury";
import { Pluto } from "../../domain/buildingBlocks/Pluto";
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

import { WebSocket } from 'isows'
import { PickupRunner } from "../protocols/pickup/PickupRunner";
import { ProtocolType } from "../protocols/ProtocolTypes";





/**
 * ConnectionsManager is responsible of establishing didcomm connection and
 * mediation process with other mediators through didcomm and is also
 * responsible of managing the task to periodically fetch messages from the mediator once connection is established
 *
 * @class ConnectionsManager
 * @typedef {ConnectionsManager}
 */
export class ConnectionsManager implements ConnectionsManagerClass {
  /**
   * An array with cancellable tasks, mainly used to store one or multiple didcomm
   * connections in storage implementation at the same time. All of them can be cancelled
   * despite they run asyncronously when the Edge agent stops
   *
   * @public
   * @type {CancellableTask<any>[]}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public cancellables: CancellableTask<any>[] = [];
  /**
   * Cancellable task used to listen for new messages, stopping the Agent should also stop this
   *  from running and destroy the instance of the task until agent is started again
   *
   * @public
   * @type {?CancellableTask<void>}
   */
  public cancellable?: CancellableTask<void>;

  /**
   * A list of public facing events which will notify the user interface when specific things happen,
   * for now when new messages arrive or didcomm connections are established in order to make UI more reactive
   *
   * @public
   * @type {AgentMessageEventsClass}
   */
  public events: AgentMessageEventsClass;

  /**
   * Creates an instance of ConnectionsManager.
   *
   * @constructor
   * @param {Castor} castor
   * @param {Mercury} mercury
   * @param {Pluto} pluto
   * @param {MediatorHandler} mediationHandler
   * @param {DIDPair[]} [pairings=[]]
   */
  constructor(
    public castor: Castor,
    public mercury: Mercury,
    public pluto: Pluto,
    public mediationHandler: MediatorHandler,
    public pairings: DIDPair[] = []
  ) {
    this.events = new AgentMessageEvents();
  }

  /**
   * Asyncronously Start the mediator, just checking if we had one stored in Database and
   * setting that one as default during the Agent start
   *
   * @async
   * @returns {Promise<void>}
   */
  async startMediator(): Promise<void> {
    const mediationHandler =
      await this.mediationHandler.bootRegisteredMediator();

    if (!mediationHandler) {
      throw new AgentError.NoMediatorAvailableError();
    }
  }

  /**
   * Stops all the running events
   */
  stopAllEvents(): void {
    while (this.cancellables.length > 0) {
      const [task] = this.cancellables.splice(0, 1);
      if (task) {
        task.cancel();
      }
    }
  }

  /**
   * Asyncronously fetch unread messages from the mediator, if messages are found they will be stored
   * and the mediator will be notified that they have been read. Mediator shouldn't return a read message again
   * in next iteration.
   *
   * @async
   * @returns {Promise<Message[]>}
   */
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


  /**
   * Asyncronously wait for a message response just by waiting for new messages that match the specified ID
   *
   * @async
   * @param {string} id
   * @returns {Promise<Message | undefined>}
   */
  async awaitMessageResponse(id: string): Promise<Message | undefined> {
    const messages = await this.awaitMessages();
    return messages.find((message) => message.thid === id);
  }

  /**
   * Asyncronously add a didPair (didcomm connection) into pluto
   *
   * @async
   * @param {DIDPair} paired
   * @returns {Promise<void>}
   */
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

  /**
   * Find the specified did pair connection index
   *
   * @param {DIDPair} pair
   * @returns {*}
   */
  findIndex(pair: DIDPair) {
    return this.pairings.findIndex(
      (pairing) =>
        pair.host === pairing.host &&
        pair.name === pairing.name &&
        pair.receiver === pairing.receiver
    );
  }

  /**
   * Remove a didPair or a didcomm connection, this does not mean the mediator will do
   * this but just means the connection will be removed from the current storage
   *
   * @async
   * @param {DIDPair} pair
   * @returns {Promise<void>}
   */
  async removeConnection(pair: DIDPair): Promise<void> {
    const pairIndex = this.findIndex(pair);
    if (pairIndex !== -1) {
      this.pairings.splice(pairIndex, 1);
    }
  }

  /**
   * Asyncronously establish mediator with a mediator by providing the Host DID
   *
   * @async
   * @param {DID} hostDID
   * @returns {Promise<void>}
   */
  async registerMediator(hostDID: DID): Promise<void> {
    await this.mediationHandler.achieveMediation(hostDID);
  }

  /**
   * Asyncronously store a message and send it as didcomm message through the mercury implementation
   *
   * @async
   * @param {Message} message
   * @returns {Promise<Message | undefined>}
   */
  async sendMessage(message: Message): Promise<Message | undefined> {
    await this.pluto.storeMessage(message);
    return this.mercury.sendMessageParseMessage(message);
  }

  /**
   * Asyncronously start fetching new messages
   *
   * @param {number} iterationPeriod
   */
  async startFetchingMessages(iterationPeriod: number): Promise<void> {
    if (this.cancellable || !this.mediationHandler.mediator) {
      return;
    }
    const currentMediator = this.mediationHandler.mediator.mediatorDID;
    const resolvedMediator = await this.castor.resolveDID(currentMediator.toString())
    const hasWebsocket = resolvedMediator.services.find(({ serviceEndpoint: { uri } }) =>
      uri.startsWith("ws://") ||
      uri.startsWith("wss://")
    )
    if (!hasWebsocket) {
      const timeInterval = Math.max(iterationPeriod, 5) * 1000;
      this.cancellable = new CancellableTask(async () => {
        const unreadMessages = await this.awaitMessages();
        if (unreadMessages.length) {
          this.events.emit(ListenerKey.MESSAGE, unreadMessages);
        }
      }, timeInterval);
    } else {
      //Connecting to websockets, do not repeat the task
      this.cancellable = new CancellableTask(async (signal) => {
        this.mediationHandler.listenUnreadMessages(
          signal,
          hasWebsocket.serviceEndpoint.uri,
          async (messages) => {
            debugger;
            const messageIds = messages.map(({ id }) => id)
            await this.pluto.storeMessages(messages);
            await this.mediationHandler.registerMessagesAsRead(messageIds);
            this.events.emit(ListenerKey.MESSAGE, messages);
          }
        )
        debugger;
      })
    }

    this.cancellable.then().catch((err) => {
      if (err instanceof Error) {
        if (err.message !== "Task was cancelled") throw err;
      } else throw err;
    });
  }

  /**
   * Asyncronously stop fetching messages
   */
  stopFetchingMessages(): void {
    this.cancellable?.cancel();
    this.cancellable = undefined;
  }
}
