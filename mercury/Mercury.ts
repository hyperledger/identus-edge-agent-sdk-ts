import * as Domain from "../domain";
import { MercuryError } from "../domain/models/Errors";
import { default as MercuryInterface } from "../domain/buildingBlocks/Mercury";
import { DIDCommProtocol } from "./DIDCommProtocol";
import { Api, DID } from "../domain";
import { MediaType } from "./helpers/MediaType";
import Castor from "../domain/buildingBlocks/Castor";
import { ForwardMessage } from "./forward/ForwardMessage";

export default class Mercury implements MercuryInterface {
  constructor(
    public castor: Castor,
    public protocol: DIDCommProtocol,
    public api: Api
  ) {}

  packMessage(message: Domain.Message): Promise<string> {
    const toDid = message.to;
    const fromDid = message.from;

    if (this.notDid(toDid)) throw new MercuryError.NoRecipientDIDSetError();

    if (this.notDid(fromDid)) throw new MercuryError.NoSenderDIDSetError();

    return this.protocol.packEncrypted(message, toDid, fromDid);
  }

  unpackMessage(message: string): Promise<Domain.Message> {
    return this.protocol.unpack(message);
  }

  async sendMessage<T>(message: Domain.Message): Promise<T> {
    const toDid = message.to;
    const fromDid = message.from;

    if (this.notDid(toDid)) throw new MercuryError.NoRecipientDIDSetError();

    if (this.notDid(fromDid)) throw new MercuryError.NoSenderDIDSetError();

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

  async sendMessageParseMessage(
    message: Domain.Message
  ): Promise<Domain.Message> {
    const responseBody = await this.sendMessage<any>(message);
    const responseJSON = JSON.stringify(responseBody);
    return this.unpackMessage(responseJSON);
  }

  private notDid(did: Domain.DID | undefined): did is undefined {
    return !(did instanceof Domain.DID);
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
