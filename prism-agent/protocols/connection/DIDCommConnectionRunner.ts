import { DID } from "../../../domain";
import Pluto from "../../../domain/buildingBlocks/Pluto";
import { DIDPair } from "../../../domain/models/DIDPair";
import { ConnectionsManager } from "../../types";
import { OutOfBandInvitation } from "../invitation/v2/OutOfBandInvitation";
import { HandshakeRequest } from "./HandshakeRequest";

export class DIDCommConnectionRunner {
  constructor(
    public invitationMessage: OutOfBandInvitation,
    public pluto: Pluto,
    public ownDID: DID,
    public connection: ConnectionsManager
  ) {}

  async run(): Promise<DIDPair> {
    const request = HandshakeRequest.fromOutOfBand(
      this.invitationMessage,
      this.ownDID
    );

    try {
      await this.connection.sendMessage(request.makeMessage());
      return new DIDPair(this.ownDID, request.to, `Connection${request.id}`);
    } catch (err) {
      return new DIDPair(this.ownDID, request.to, `Connection${request.id}`);
    }
  }
}
