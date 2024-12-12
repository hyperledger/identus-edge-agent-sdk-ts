import * as Domain from "../../domain";
import { Task } from "../../utils/tasks";
import { Presentation } from "../protocols/proofPresentation";
import { ProtocolType } from "../protocols/ProtocolTypes";
import { DIDCommContext } from "./Context";

interface Args {
  presentation: Presentation;
}

export class HandlePresentation extends Task<boolean, Args> {
  async run(ctx: DIDCommContext) {
    const { presentation } = this.args;
    const attachment = presentation.attachments.at(0);

    if (!attachment) {
      throw new Domain.AgentError.UnsupportedAttachmentType("Invalid presentation message, attachment missing");
    }
    if (!presentation.thid) {
      throw new Domain.AgentError.UnsupportedAttachmentType("Cannot find any message with that threadID");
    }

    const presReq = await this.getPresentationRequest(ctx, presentation.thid);

    const verified = await ctx.Pollux.handle(
      "presentation-verify",
      attachment.format,
      {
        presentation: attachment.payload,
        presentationRequest: presReq,
        thid: presentation.thid,
      }
    );

    return verified.data;
  }

  private async getPresentationRequest(ctx: DIDCommContext, thid: string) {
    const allMessages = await ctx.Pluto.getAllMessages();
    const message = allMessages.find((message) => {
      return message.thid === thid && message.piuri === ProtocolType.DidcommRequestPresentation;
    });

    if (message) {
      const attachment = message.attachments.at(0);
      if (!attachment) {
        throw new Domain.AgentError.UnsupportedAttachmentType("Invalid presentation message, attachment missing");
      }
      const presentationRequest = Domain.Message.Attachment.extractJSON(attachment);
      return presentationRequest;
    }

    throw new Domain.AgentError.UnsupportedAttachmentType("Cannot find any message with that threadID");
  }
}
