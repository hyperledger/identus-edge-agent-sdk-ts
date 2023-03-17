import * as Domain from "../domain";
import { MercuryError } from "../domain/models/Errors";
import { default as MercuryInterface } from "../domain/buildingBlocks/Mercury";
import { DIDCommProtocol } from "./DIDCommProtocol";
import { Api } from "../domain";
import { MediaType } from "./helpers/MediaType";
import Castor from "../domain/buildingBlocks/Castor";
import * as DIDURLParser from "../castor/parser/DIDUrlParser";
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

  private shouldForwardMessage(service: Domain.Service): boolean {
    try {
      this.castor.parseDID(service.serviceEndpoint.uri);
      return true;
    } catch {
      new URL(service.serviceEndpoint.uri);
      return false;
    }
  }

  async sendMessage<T>(message: Domain.Message): Promise<T> {
    const toDid = message.to;
    const fromDid = message.from;

    if (this.notDid(toDid)) throw new MercuryError.NoRecipientDIDSetError();

    if (this.notDid(fromDid)) throw new MercuryError.NoSenderDIDSetError();

    const packedMessage = await this.packMessage(message);

    const document = await this.castor.resolveDID(toDid.toString());

    const service = document.services.find((x) => x.isDIDCommMessaging);

    if (service == undefined) throw new MercuryError.NoValidServiceFoundError();

    const mediatorDid = this.getMediatorDID(service);
    const shouldForwardMessage = this.shouldForwardMessage(service);

    if (mediatorDid instanceof Domain.DID && shouldForwardMessage) {
      const forwardMsg = new Domain.Message(
        JSON.stringify({ next: toDid.toString() }),
        undefined,
        "https://didcomm.org/routing/2.0/forward",
        fromDid,
        mediatorDid,
        [
          new Domain.AttachmentDescriptor(
            { data: packedMessage },
            "application/json"
          ),
        ]
      );

      const mediatorDocument = await this.castor.resolveDID(
        mediatorDid.toString()
      );

      const packedForwardMsg = await this.packMessage(forwardMsg);

      const mediatorService = mediatorDocument.services.find(
        (x) => x.isDIDCommMessaging
      );

      return this.makeRequest<T>(mediatorService, packedForwardMsg);
    }

    return this.makeRequest<T>(service, packedMessage);
  }

  private getMediatorDID(service: Domain.Service): Domain.DID | undefined {
    try {
      const didURL = DIDURLParser.parse(service.id);

      return didURL.did;
    } catch {
      return undefined;
    }
  }

  private async makeRequest<T>(
    service: Domain.Service | undefined,
    message: string
  ) {
    if (service == undefined) throw new MercuryError.NoValidServiceFoundError();

    const headers = new Map();
    headers.set("Content-type", MediaType.ContentTypeEncrypted);

    const response = await this.api.request<T>(
      "POST",
      service.serviceEndpoint.uri,
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
}
