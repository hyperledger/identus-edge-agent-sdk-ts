import * as Domain from "../../../domain";
import { Task, expect } from "../../../utils";
import { PickupReceived } from "../../protocols/pickup/PickupReceived";
import { ListenerKey } from "../../types";
import { RevocationNotification } from "../../protocols/revocation/RevocationNotfiication";
import { ProtocolType } from "../../protocols/ProtocolTypes";
import { IssueCredential } from "../../protocols/issueCredential/IssueCredential";
import { HandleIssueCredential } from "../../didcomm/HandleIssueCredential";
import { DIDCommContext } from "../../didcomm/Context";

/**
 * Pickup Delivery
 * handle new messages being delivered
 *  - unwrap
 *  - store in Pluto
 *  - emit event
 *  - notify mediator
 */

interface Args {
  message: Domain.Message;
}

export class PickupDelivery extends Task<void, Args> {
  async run(ctx: DIDCommContext) {
    const msg = this.args.message;
    const connection = ctx.Connections.mediator;
    const mediator = expect(connection?.asMediator());
    const attachedMsgs = await Promise.all(
      msg.attachments.map(x => {
        const data = JSON.stringify(x.payload);
        return ctx.Mercury.unpackMessage(data);
      })
    );

    await ctx.Pluto.storeMessages(attachedMsgs);

    const messageIdList = msg.attachments.map(x => x.id);
    const pickupReceived = new PickupReceived(
      { messageIdList },
      mediator.hostDID,
      mediator.mediatorDID
    );
    await connection?.send(pickupReceived.makeMessage(), ctx);

    ctx.Events.emit(ListenerKey.MESSAGE, attachedMsgs);
    ctx.logger.info(`Messages Received (${attachedMsgs.length})`);

    const revokeMessages = attachedMsgs.filter(x => x.piuri === ProtocolType.PrismRevocation);
    if (revokeMessages.length > 0) {
      const allMessages = await ctx.Pluto.getAllMessages();

      for (const message of revokeMessages) {
        const revokeMessage = RevocationNotification.fromMessage(message);
        const threadId = revokeMessage.body.issueCredentialProtocolThreadId;

        const matchingMessages = allMessages.filter(
          x => x.thid === threadId && x.piuri === ProtocolType.DidcommIssueCredential
        );

        if (matchingMessages.length > 0) {
          for (const message of matchingMessages) {
            // ?? I dont think HandleIssueCredential should be ran here
            const issueCredential = IssueCredential.fromMessage(message);
            const task = new HandleIssueCredential({ issueCredential });
            const credential = await ctx.run(task);

            await ctx.Pluto.revokeCredential(credential);
            ctx.Events.emit(ListenerKey.REVOKE, credential);
          }
        }
      }
    }
  }
}
