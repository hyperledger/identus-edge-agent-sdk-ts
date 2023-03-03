import * as Domain from "../domain";
import Castor from '../castor/Castor';
import { MercuryError } from "../domain/models/Errors";
import { default as MercuryInterface } from '../domain/buildingBlocks/Mercury'
import { DIDCommProtocol } from './DIDCommProtocol';

interface HttpManager {
  postEncrypted: (url: string, body: string) => Promise<any>;
}

export default class Mercury implements MercuryInterface {
  constructor(
    private readonly castor: Castor,
    private readonly protocol: DIDCommProtocol,
    private readonly HttpManager: HttpManager,
  ) { }

  packMessage(message: Domain.Message): Promise<string> {
    const toDid = message.to;
    const fromDid = message.from;

    if (this.notDid(toDid))
      throw new MercuryError.NoRecipientDIDSetError();

    if (this.notDid(fromDid))
      throw new MercuryError.NoSenderDIDSetError();

    return this.protocol.packEncrypted(message, toDid, fromDid);
    // return this.Context.Run(new PackEncryptedOperation(message));
  }

  unpackMessage(message: string): Promise<Domain.Message> {
    return this.protocol.unpack(message);
    // return this.Context.Run(new UnpackOperation(message));
  }

  async sendMessage(message: Domain.Message): Promise<Uint8Array> {
    const did = message.to;

    if (this.notDid(did))
      throw new MercuryError.NoRecipientDIDSetError();

    const document = await this.castor.resolveDID(did.toString());
    const service = document.coreProperties.find((x): x is Domain.Service => x instanceof Domain.Service);

    if (service == undefined)
      throw new MercuryError.NoValidServiceFoundError();

    const packedMessage = await this.packMessage(message);

    return this.HttpManager.postEncrypted(service.serviceEndpoint.uri, packedMessage)
  }

  async sendMessageParseMessage(message: Domain.Message): Promise<Domain.Message | null> {
    const resultRaw = await this.sendMessage(message);
    const decoded = new TextDecoder().decode(resultRaw);
    const unpacked = this.unpackMessage(decoded);

    return unpacked;
  }

  private notDid(did: Domain.DID | undefined): did is undefined {
    return !(did instanceof Domain.DID);
  }
}
