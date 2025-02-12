import { DID, Message, MessageDirection } from "../../domain";
import { DIDPair } from "../../domain/models/DIDPair";
import { AgentError } from "../../domain/models/Errors";
import { AgentMessageEvents } from "../Agent.MessageEvents";
import { CancellableTask } from "../helpers/Task";
import {
  AgentMessageEvents as AgentMessageEventsClass,
  AgentOptions,
  ListenerKey,
  MediatorHandler,
} from "../types";
import { ProtocolType } from "../protocols/ProtocolTypes";
import { RevocationNotification } from "../protocols/revocation/RevocationNotfiication";
import { IssueCredential } from "../protocols/issueCredential/IssueCredential";
import { HandleIssueCredential } from "../didcomm/HandleIssueCredential";
import DIDCommAgent from "../didcomm/Agent";


/**
 * ConnectionsManager is responsible of establishing didcomm connection and
 * mediation process with other mediators through didcomm and is also
 * responsible of managing the task to periodically fetch messages from the mediator once connection is established
 *
 * @class ConnectionsManager
 * @typedef {ConnectionsManager}
 */
export class ConnectionsManager {
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

  public pairings: DIDPair[] = [];

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
    private readonly agent: DIDCommAgent,
    public options?: AgentOptions
  ) {
    this.events = new AgentMessageEvents();
  }

  get mediationHandler(): MediatorHandler {
    return this.agent.mediationHandler;
  }

  get withWebsocketsExperiment() {
    return this.options?.experiments?.liveMode === true;
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
      await this.agent.mediationHandler.bootRegisteredMediator();

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
   * Asyncronously wait for a message response just by waiting for new messages that match the specified ID
   *
   * @async
   * @param {string} id
   * @returns {Promise<Message | undefined>}
   */
  async awaitMessageResponse(id: string): Promise<Message | undefined> {
    console.log("Deprecated, use agent.addListener('THREAD-{{Your thread || messageId}}', fn), this method does not support live-mode.");
    const messages = await this.agent.mediationHandler.pickupUnreadMessages(10);
    return messages.find(x => x.message.thid === id)?.message;
  }

  /**
   * Asyncronously process unread messages that are received by either http or websockets didcomm transport
   * This method replaces awaitMessages()
   * @param messages 
   */
  async processMessages(unreadMessages: {
    attachmentId: string;
    message: Message;
  }[] = []): Promise<void> {
    if (!this.agent.mediationHandler.mediator) {
      throw new AgentError.NoMediatorAvailableError();
    }

    if (unreadMessages.length) {
      const received = unreadMessages.filter(x => x.message.direction === MessageDirection.RECEIVED);
      const messages = received.map(x => x.message);
      const messageIds = received.map(x => x.attachmentId);

      if (messages.length > 0) {
        await this.agent.pluto.storeMessages(messages);
      }

      const revokeMessages = messages.filter(x => x.piuri === ProtocolType.PrismRevocation);
      const allMessages = await this.agent.pluto.getAllMessages();

      for (const message of revokeMessages) {
        const revokeMessage = RevocationNotification.fromMessage(message);
        const threadId = revokeMessage.body.issueCredentialProtocolThreadId;

        const matchingMessages = allMessages.filter(({ thid, piuri }) =>
          thid === threadId &&
          piuri === ProtocolType.DidcommIssueCredential
        );

        if (matchingMessages.length > 0) {
          for (const message of matchingMessages) {
            const issueCredential = IssueCredential.fromMessage(message);
            // const ctx = Task.Context.make({ Pluto: this.agent.pluto, Pollux: this.pollux });
            const task = new HandleIssueCredential({ issueCredential });
            const credential = await (this.agent as any).runTask(task);

            await this.agent.pluto.revokeCredential(credential);
            this.events.emit(ListenerKey.REVOKE, credential);
          }
        }
      }
      if (messageIds.length) {
        await this.agent.mediationHandler.registerMessagesAsRead(messageIds);
      }

      this.events.emit(ListenerKey.MESSAGE, messages);
    }
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
      //It is an automatically accepted key keypair
      return;
    }

    const storeDIDPairTask = new CancellableTask<DIDPair>(async () => {
      await this.agent.pluto.storeDIDPair(paired.host, paired.receiver, paired.name);
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
    await this.agent.mediationHandler.achieveMediation(hostDID);
  }

  /**
   * Asyncronously store a message and send it as didcomm message through the mercury implementation
   *
   * @async
   * @param {Message} message
   * @returns {Promise<Message | undefined>}
   */
  async sendMessage(message: Message): Promise<Message | undefined> {
    message.direction = MessageDirection.SENT;
    await this.agent.pluto.storeMessage(message);
    return this.agent.mercury.sendMessageParseMessage(message);
  }

  /**
   * Asyncronously start fetching new messages
   *
   * @param {number} iterationPeriod
   */
  async startFetchingMessages(iterationPeriod: number): Promise<void> {
    if (this.cancellable || !this.agent.mediationHandler.mediator) {
      return;
    }
    const currentMediator = this.agent.mediationHandler.mediator.mediatorDID;
    const resolvedMediator = await this.agent.castor.resolveDID(currentMediator.toString());
    const hasWebsocket = resolvedMediator.services.find(({ serviceEndpoint: { uri } }) =>
    (
      uri.startsWith("ws://") ||
      uri.startsWith("wss://")
    )
    );
    if (hasWebsocket && this.withWebsocketsExperiment) {
      this.cancellable = new CancellableTask(async (signal) => {
        this.agent.mediationHandler.listenUnreadMessages(
          signal,
          hasWebsocket.serviceEndpoint.uri,
          (messages) => this.processMessages(messages)
        );
      });
    } else {
      const timeInterval = Math.max(iterationPeriod, 5) * 1000;
      this.cancellable = new CancellableTask(async () => {
        const unreadMessages = await this.agent.mediationHandler.pickupUnreadMessages(10);
        await this.processMessages(unreadMessages);
      }, timeInterval);
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
