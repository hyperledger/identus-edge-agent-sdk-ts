import * as Domain from "../../domain";
import { expect } from "../../utils";
import { Task } from "../../utils/tasks";
import { RunProtocol } from "../helpers/RunProtocol";
import { Presentation } from "../protocols/proofPresentation";
import { ProtocolType } from "../protocols/ProtocolTypes";
import { DIDCommContext } from "./Context";

interface Args {
  presentation: Presentation;
}

export class HandlePresentation extends Task<boolean, Args> {
  async run(ctx: DIDCommContext) {
    const { presentation } = this.args;

    const attachment = expect(
      presentation.attachments.at(0),
      new Domain.AgentError.UnsupportedAttachmentType("Invalid presentation message, attachment missing")
    );
    const format = expect(attachment.format, "Invalid attachment format");

    if (!presentation.thid) {
      throw new Domain.AgentError.UnsupportedAttachmentType("Cannot find any message with that threadID");
    }

    const presReq = await this.getPresentationRequest(ctx, presentation.thid);

    const verified = await ctx.run(new RunProtocol({
      type: "presentation-verify",
      pid: format,
      data: {
        presentation: attachment.payload,
        presentationRequest: presReq,
        thid: presentation.thid,
      }
    }));

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
