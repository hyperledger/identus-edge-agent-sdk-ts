import * as Domain from "../../domain";
import { asJsonObj } from "../../utils";
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

    // TODO fix types with validation
    const presentationSubmission = asJsonObj(attachment.payload) as any;
    const presentationDefinitionRequest = await this.getPresentationDefinitionByThid(ctx, presentation.thid);
    const verified = await ctx.Pollux.verifyPresentationSubmission(
      presentationSubmission,
      { presentationDefinitionRequest }
    );

    return verified;
  }

  private async getPresentationDefinitionByThid(ctx: DIDCommContext, thid: string): Promise<Domain.PresentationDefinitionRequest> {
    const allMessages = await ctx.Pluto.getAllMessages();
    const message = allMessages.find((message) => {
      return message.thid === thid && message.piuri === ProtocolType.DidcommRequestPresentation;
    });

    if (message) {
      const attachment = message.attachments.at(0);
      if (!attachment) {
        throw new Domain.AgentError.UnsupportedAttachmentType("Invalid presentation message, attachment missing");
      }
      const presentationDefinitionRequest = Domain.Message.Attachment.extractJSON(attachment);
      return presentationDefinitionRequest;
    }

    throw new Domain.AgentError.UnsupportedAttachmentType("Cannot find any message with that threadID");
  }
}
