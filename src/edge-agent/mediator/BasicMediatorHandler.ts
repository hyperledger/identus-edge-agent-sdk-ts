import { WebSocket } from 'isows'
import { uuid } from "@stablelib/uuid";

import { DID, Mediator, Message } from "../../domain";
import { Mercury } from "../../domain/buildingBlocks/Mercury";
import { AgentError } from "../../domain/models/Errors";
import { MediationGrant } from "../protocols/mediation/MediationGrant";
import { MediationKeysUpdateList } from "../protocols/mediation/MediationKeysUpdateList";
import { MediationRequest } from "../protocols/mediation/MediationRequest";
import { PickupReceived } from "../protocols/pickup/PickupReceived";
import { PickupRequest } from "../protocols/pickup/PickupRequest";
import { PickupRunner } from "../protocols/pickup/PickupRunner";
import { MediatorHandler, MediatorStore } from "../types";
import { ProtocolType } from '../protocols/ProtocolTypes';

/**
 * A basic implementation of our MediatorHandler Interface which is mainly used
 * to establish mediation and get new messages using the mediation and pickup didcomm v2 protocols
 *
 * @class BasicMediatorHandler
 * @typedef {BasicMediatorHandler}
 */
export class BasicMediatorHandler implements MediatorHandler {
  /**
   * Optional instance of the mediator so that if the mediation was already
   * established and recorded we don't need to mediate again with the same mediator
   *
   * @public
   * @type {?Mediator}
   */
  public mediator?: Mediator;

  /**
   * Creates an instance of BasicMediatorHandler.
   *
   * @constructor
   * @param {DID} mediatorDID
   * @param {Mercury} mercury
   * @param {MediatorStore} store
   */
  constructor(
    public mediatorDID: DID,
    public mercury: Mercury,
    public store: MediatorStore
  ) { }

  /**
   * Secondary constructor for BasicMediation Handler, to instanciate if from an existing Mediator
   * instance.
   *
   * @static
   * @param {Mediator} mediator
   * @param {Mercury} mercury
   * @param {MediatorStore} store
   * @returns {BasicMediatorHandler}
   */
  static fromMediator(
    mediator: Mediator,
    mercury: Mercury,
    store: MediatorStore
  ): BasicMediatorHandler {
    const mediatorHandler = new BasicMediatorHandler(
      mediator.mediatorDID,
      mercury,
      store
    );
    mediatorHandler.mediator = mediator;
    return mediatorHandler;
  }

  /**
   * Will asyncronously fetch the first mediator stored in database and set it as default mediator.
   *
   * @async
   * @returns {Promise<Mediator | undefined>}
   */
  async bootRegisteredMediator(): Promise<Mediator | undefined> {
    if (!this.mediator) {
      const mediators = await this.store.getAllMediators();
      const mediator = mediators.slice(0, 1).at(0);
      if (mediator) {
        this.mediator = mediator;
      }
    }
    return this.mediator;
  }

  /**
   * Asyncronously achieve mediation by specifying the HOST DID, this will
   * exchange the mediation protocol messages between the user and the mediator until established
   *
   * @async
   * @param {DID} host
   * @returns {Promise<Mediator>}
   */
  async achieveMediation(host: DID): Promise<Mediator> {
    const mediator = await this.bootRegisteredMediator();
    if (!mediator) {
      try {
        const mediationRequest = new MediationRequest(
          host,
          this.mediatorDID
        ).makeMessage();

        const message: Message | undefined =
          await this.mercury.sendMessageParseMessage(mediationRequest);

        if (!message) {
          //TODO: Improve this error
          throw new Error("Trying to achieve mediation returned empty data");
        }

        const grandMessage = MediationGrant.fromMessage(message);
        const routingDID = DID.fromString(grandMessage.body.routing_did);

        const mediator: Mediator = {
          hostDID: host,
          routingDID: routingDID,
          mediatorDID: this.mediatorDID,
        };

        await this.store.storeMediator(mediator);

        this.mediator = mediator;

        return mediator;
      } catch (err) {
        if (err instanceof Error) {
          throw new AgentError.MediationRequestFailedError(err.message);
        } else {
          throw err;
        }
      }
    }
    return mediator;
  }

  /**
   * Asyncronously update the mediator with the new keyList, used during the mediation process or during DID Rotation
   *
   * @async
   * @param {DID[]} dids
   * @returns {Promise<void>}
   */
  async updateKeyListWithDIDs(dids: DID[]): Promise<void> {
    if (!this.mediator) {
      throw new AgentError.NoMediatorAvailableError();
    }
    const keyListUpdateMessage: Message = new MediationKeysUpdateList(
      this.mediator.hostDID,
      this.mediator.mediatorDID,
      dids
    ).makeMessage();
    await this.mercury.sendMessage(keyListUpdateMessage);
  }

  /**
   * Asyncronously pickup unread messages from the mediator
   * if new messages are found, because the messages from in form of attachments inside the pickup response
   * we need to parse those and return the user a list of messages it can read and decode, this is done inside the pickup runner.
   *
   * @async
   * @param {number} limit
   * @returns {Promise<Array<{ attachmentId: string; message: Message }>>}
   */
  async pickupUnreadMessages(
    limit: number
  ): Promise<Array<{ attachmentId: string; message: Message; }>> {
    if (!this.mediator) {
      throw new AgentError.NoMediatorAvailableError();
    }
    const request = new PickupRequest(
      { limit: limit },
      this.mediator.hostDID,
      this.mediator.mediatorDID
    ).makeMessage();

    const message = await this.mercury.sendMessageParseMessage(request);
    if (!message) {
      return [];
    }

    return new PickupRunner(message, this.mercury).run();
  }

  /**
   * Asyncronously create a websocket connection with the mediator
   * Establish a websocket connection and activate the live-mode with the mediator
   * and also listen for incomming unread messages with existing protocols.
   * 
   * @async
   * @param signal 
   * @param serviceEndpointUri 
   * @param onMessage 
   */
  listenUnreadMessages(
    signal: AbortSignal,
    serviceEndpointUri: string,
    onMessage: (messages: {
      attachmentId: string;
      message: Message;
    }[]) => void | Promise<void>
  ) {
    //Todo: we may want to abstract this to allow users to use their own native implementations for websockets
    //Or potentially be TCP sockets directly, this can be used in electron and nodejs can establish tcp connections directly.
    const socket = new WebSocket(serviceEndpointUri);
    signal.addEventListener("abort", () => {
      if (socket.readyState === socket.OPEN) {
        socket.close()
      }
    });

    socket.addEventListener("open", async () => {
      const mediator = this.mediator;
      if (!mediator) {
        throw new Error("No mediator, establish mediation first!")
      }
      const message = new Message(
        JSON.stringify({
          live_delivery: true
        }),
        uuid(),
        ProtocolType.LiveDeliveryChange,
        this.mediator?.hostDID,
        this.mediator?.mediatorDID,
      );
      const packedMessage = await this.mercury.packMessage(message)
      socket.send(packedMessage)
    })

    socket.addEventListener("message", async (message) => {
      const decryptMessage = await this.mercury.unpackMessage(message.data);
      if (
        decryptMessage.piuri === ProtocolType.PickupStatus ||
        decryptMessage.piuri === ProtocolType.PickupDelivery) {
        const delivered = await new PickupRunner(decryptMessage, this.mercury).run()
        await onMessage(delivered)
      }
    })

  }


  /**
   * Asyncronously notify the current mediator that one or multiple message ID's have been read (or stored)
   *
   * @async
   * @param {string[]} ids
   * @returns {Promise<void>}
   */
  async registerMessagesAsRead(ids: string[]): Promise<void> {
    if (!this.mediator) {
      throw new AgentError.NoMediatorAvailableError();
    }
    const message = new PickupReceived(
      {
        messageIdList: ids,
      },
      this.mediator.hostDID,
      this.mediator.mediatorDID
    ).makeMessage();
    await this.mercury.sendMessage(message);
  }
}
