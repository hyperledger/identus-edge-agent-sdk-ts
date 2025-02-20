import * as Domain from "../../domain";
import { asArray, isNil, notNil } from "../../utils";
import { Task } from "../../utils/tasks";
import { OutOfBandInvitation } from "../protocols/invitation/v2/OutOfBandInvitation";
import { DIDCommContext } from "./Context";
import { CreatePeerDID } from "./CreatePeerDID";
import { HandshakeRequest } from "../protocols/connection/HandshakeRequest";
import { ListenerKey } from "../types";
import { Connection } from "../connections";
import { DIDCommConnection } from "../connections/didcomm";

/**
 * Create a connection from an OutOfBandInvitation
 * unless the Invitation has Attachments, then we parse and store those
 */

interface Args {
  invitation: OutOfBandInvitation;
  alias?: string;
}

export class HandleOOBInvitation extends Task<void, Args> {
  async run(ctx: DIDCommContext) {
    const attachment = asArray(this.args.invitation.attachments).at(0);
    // ?? make peerDID an arg - so we dont always create a new one
    const peerDID = await ctx.run(new CreatePeerDID({ services: [], updateMediator: true }));
    const attachedMsg = notNil(attachment)
      ? Domain.Message.fromJson({ ...attachment.payload, to: peerDID.toString() })
      : null;

    if (isNil(attachedMsg)) {
      if (isNil(ctx.Connections.mediator)) {
        throw new Domain.AgentError.NoMediatorAvailableError();
      }

      const request = HandshakeRequest.fromOutOfBand(this.args.invitation, peerDID);
      const alias = this.args.alias ?? "OOBConn";
      const pair = new Domain.DIDPair(peerDID, request.to, alias);
      const connection = new DIDCommConnection(pair.receiver.toString(), pair.host.toString(), alias);
      ctx.Connections.add(connection);

      // [ ] investigate response https://github.com/hyperledger-identus/sdk-ts/issues/392
      await connection.send(request.makeMessage(), ctx);
      await ctx.Pluto.storeDIDPair(pair.host, pair.receiver, pair.name);
      connection.state = Connection.State.GRANTED;
      // ??? update events to use Connections not pairs
      ctx.Events.emit(ListenerKey.CONNECTION, pair);
    }
    else {
      await ctx.Pluto.storeMessage(attachedMsg);
      await ctx.Events.emit(ListenerKey.MESSAGE, [attachedMsg]);
    }
  }
}
