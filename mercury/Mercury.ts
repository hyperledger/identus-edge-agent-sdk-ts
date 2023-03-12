import * as Domain from "../domain";
import { MercuryError } from "../domain/models/Errors";
import { default as MercuryInterface } from "../domain/buildingBlocks/Mercury";
import { DIDCommProtocol } from "./DIDCommProtocol";
import { Api } from "../domain";
import { MediaType } from "./helpers/MediaType";
import Castor from "../domain/buildingBlocks/Castor";

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
    debugger;
    return this.protocol.packEncrypted(message, toDid, fromDid);
  }

  unpackMessage(message: string): Promise<Domain.Message> {
    return this.protocol.unpack(message);
  }

  async sendMessage(message: Domain.Message): Promise<Uint8Array> {
    const toDid = message.to;
    const fromDid = message.from;

    if (this.notDid(toDid)) throw new MercuryError.NoRecipientDIDSetError();

    if (this.notDid(fromDid)) throw new MercuryError.NoSenderDIDSetError();

    debugger;
    const packedMessage = await this.packMessage(message);
    debugger;
    const document = await this.castor.resolveDID(toDid.toString());
    debugger;
    const service = document.services.find((x) => x.isDIDCommMessaging);

    if (service == undefined) throw new MercuryError.NoValidServiceFoundError();

    const mediatorDid = this.getMediatorDID(service);

    if (mediatorDid instanceof Domain.DID) {
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

      return this.makeRequest(mediatorService, packedForwardMsg);
    }

    return this.makeRequest(service, packedMessage);
  }

  private getMediatorDID(service: Domain.Service): Domain.DID | undefined {
    try {
      const url = service.serviceEndpoint.uri;
      return this.castor.parseDID(url);
    } catch {
      return undefined;
    }
  }

  private async makeRequest(
    service: Domain.Service | undefined,
    message: string
  ) {
    if (service == undefined) throw new MercuryError.NoValidServiceFoundError();

    const headers = new Map();
    headers.set("Content-type", MediaType.ContentTypeEncrypted);

    const response = await this.api.request<Uint8Array>(
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
    debugger;
    const responseBody = await this.sendMessage(message);
    debugger;
    const decoded = new TextDecoder().decode(responseBody);
    debugger;
    const unpacked = this.unpackMessage(decoded);
    debugger;
    return unpacked;
  }

  private notDid(did: Domain.DID | undefined): did is undefined {
    return !(did instanceof Domain.DID);
  }
}
