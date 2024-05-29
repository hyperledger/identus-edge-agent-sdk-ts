import * as Domain from "../domain";
import { MercuryError } from "../domain/models/Errors";
import { Mercury as MercuryInterface } from "../domain/buildingBlocks/Mercury";
import { DIDCommProtocol } from "./DIDCommProtocol";
import { Api, DID } from "../domain";
import { MediaType } from "./helpers/MediaType";
import { Castor } from "../domain/buildingBlocks/Castor";
import { ForwardMessage } from "./forward/ForwardMessage";

/**
 * Mercury is a powerful and flexible library for working with decentralized identifiers and secure communications
 * protocols. Whether you are a developer looking to build a secure and private messaging app or a more complex
 * decentralized system requiring trusted peer-to-peer connections, Mercury provides the tools and features you need to
 * establish, manage, and secure your communications easily.
 *
 * @export
 * @class Mercury
 * @typedef {Mercury}
 */
export default class Mercury implements MercuryInterface {
  /**
   * Creates an instance of Mercury.
   *
   * @constructor
   * @param {Castor} castor
   * @param {DIDCommProtocol} protocol
   * @param {Api} api
   */
  constructor(
    public castor: Castor,
    public protocol: DIDCommProtocol,
    public api: Api
  ) { }

  /**
   * Asynchronously packs a given message object into a string representation. This function may throw an error if the
   * message object is invalid.
   *
   * @param {Domain.Message} message
   * @returns {Promise<string>}
   */
  packMessage(message: Domain.Message): Promise<string> {
    const toDid = message.to;
    const fromDid = message.from;

    if (this.notDid(toDid)) throw new MercuryError.NoRecipientDIDSetError();

    return this.protocol.packEncrypted(message, toDid, fromDid);
  }

  /**
   * Asynchronously unpacks a given string representation of a message into a message object. This
   * function may throw an error if the string is not a valid message representation.
   *
   * @param {string} message
   * @returns {Promise<Domain.Message>}
   */
  unpackMessage(message: string): Promise<Domain.Message> {
    return this.protocol.unpack(message);
  }

  /**
   * Asynchronously sends a given message and returns the response data.
   *
   * @async
   * @template T
   * @param {Domain.Message} message
   * @returns {Promise<T>}
   */
  async sendMessage<T>(message: Domain.Message): Promise<T> {
    const toDid = message.to;

    if (this.notDid(toDid)) throw new MercuryError.NoRecipientDIDSetError();

    const document = await this.castor.resolveDID(toDid.toString());
    const packedMessage = await this.packMessage(message);
    if (this.requiresForwarding(document)) {
      const mediatorDid = this.getDIDCommDID(document);
      if (!mediatorDid) {
        throw new MercuryError.NoValidServiceFoundError();
      }
      const forwardMessage = this.prepareForwardMessage(
        message,
        packedMessage,
        mediatorDid
      );
      const packedForwardMsg = await this.packMessage(
        forwardMessage.makeMessage()
      );
      const mediatorDocument = await this.castor.resolveDID(
        mediatorDid.toString()
      );
      const url = this.getDIDCommURL(mediatorDocument);
      return this.makeRequest<T>(url, packedForwardMsg);
    }

    const service = document.services.find((x) => x.isDIDCommMessaging);
    return this.makeRequest<T>(service, packedMessage);
  }

  private async makeRequest<T>(
    service: Domain.Service | URL | undefined,
    message: string
  ) {
    if (service == undefined) throw new MercuryError.NoValidServiceFoundError();

    const headers = new Map();
    headers.set("Content-type", MediaType.ContentTypeEncrypted);

    const requestUrl =
      service instanceof URL ? service.toString() : service.serviceEndpoint.uri;

    const response = await this.api.request<T>(
      "POST",
      requestUrl,
      new Map(),
      headers,
      message
    );
    return response.body;
  }

  /**
   * Asynchronously sends a given message and returns the response message object.
   *
   * @async
   * @param {Domain.Message} message
   * @returns {Promise<Domain.Message>}
   */
  async sendMessageParseMessage(
    message: Domain.Message
  ): Promise<Domain.Message | undefined> {
    const responseBody = await this.sendMessage<any>(message);
    try {
      const responseJSON = JSON.stringify(responseBody);
      return await this.unpackMessage(responseJSON);
    } catch (err) {
      return undefined
    }
  }

  private notDid(did: Domain.DID | undefined): did is undefined {
    if (!did) {
      return true;
    }
    if (!did?.method || !did.methodId || !did.schema || !did.toString) {
      return true;
    }
    if (typeof did.method !== "string" || typeof did.methodId !== "string" || typeof did.schema !== "string") {
      return true;
    }
    if (typeof did.toString !== "function") {
      return true;
    }
    return false
  }

  private prepareForwardMessage(
    msg: Domain.Message,
    encrypted: string,
    mediatorDID: DID
  ): ForwardMessage {
    if (!msg.from) {
      throw new MercuryError.NoSenderDIDSetError();
    }
    if (!msg.to) {
      throw new MercuryError.NoDIDReceiverSetError();
    }
    return new ForwardMessage(
      { next: msg.to.toString() },
      msg.from,
      mediatorDID,
      encrypted
    );
  }

  private getDIDCommURL(document: Domain.DIDDocument): URL | undefined {
    const uri = document.services.find((x) => x.isDIDCommMessaging)
      ?.serviceEndpoint?.uri;
    if (uri) {
      return new URL(uri);
    }
    return undefined;
  }

  private getDIDCommDID(document: Domain.DIDDocument): DID | undefined {
    const uri = document.services.find((x) => x.isDIDCommMessaging)
      ?.serviceEndpoint?.uri;
    try {
      //It Is okey to fail
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const did = this.castor.parseDID(uri!);
      return did;
    } catch {
      return undefined;
    }
  }

  private requiresForwarding(document: Domain.DIDDocument): boolean {
    if (this.getDIDCommDID(document) !== undefined) {
      return true;
    }
    return false;
  }
}
