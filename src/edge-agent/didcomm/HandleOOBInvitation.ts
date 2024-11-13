import * as Domain from "../../domain";
import { asArray, isNil, notNil } from "../../utils";
import { Task } from "../../utils/tasks";
import { OutOfBandInvitation } from "../protocols/invitation/v2/OutOfBandInvitation";
import { DIDCommContext } from "./Context";
import { CreatePeerDID } from "./CreatePeerDID";
import { HandshakeRequest } from "../protocols/connection/HandshakeRequest";
import { ListenerKey } from "../types";

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
    const peerDID = await ctx.run(new CreatePeerDID({ services: [], updateMediator: true }));
    const attachedMsg = notNil(attachment)
      ? Domain.Message.fromJson({ ...attachment.payload, to: peerDID.toString() })
      : null;

    if (isNil(attachedMsg)) {
      if (isNil(ctx.ConnectionManager.mediationHandler.mediator)) {
        throw new Domain.AgentError.NoMediatorAvailableError();
      }

      const request = HandshakeRequest.fromOutOfBand(this.args.invitation, peerDID);
      await ctx.ConnectionManager.sendMessage(request.makeMessage());
      const alias = this.args.alias ?? "OOBConn";
      const pair = new Domain.DIDPair(peerDID, request.to, alias);
      await ctx.ConnectionManager.addConnection(pair);
    }
    else {
      await ctx.Pluto.storeMessage(attachedMsg);
      await ctx.ConnectionManager.events.emit(ListenerKey.MESSAGE, [attachedMsg])
    }
  }
}
