import { AttachmentDescriptor, Message } from "../../../domain";
import { Mercury } from "../../../domain/buildingBlocks/Mercury";
import { AgentError } from "../../../domain/models/Errors";
import { ProtocolType } from "../ProtocolTypes";
import { PickupAttachment } from "../types";

type PickupResponse =
  | { type: "status"; message: Message }
  | { type: "delivery"; message: Message };

export class PickupRunner {
  private message: PickupResponse;
  private mercury: Mercury;

  constructor(message: Message, mercury: Mercury) {
    switch (message.piuri) {
      case ProtocolType.PickupStatus:
        this.message = { type: "status", message: message };
        break;
      case ProtocolType.PickupDelivery:
        this.message = { type: "delivery", message: message };
        break;
      default:
        throw new AgentError.InvalidPickupDeliveryMessageError();
    }
    this.mercury = mercury;
  }

  private processAttachment(
    attachment: AttachmentDescriptor
  ): PickupAttachment | null {
    if (Message.isBase64Attachment(attachment.data)) {
      return {
        attachmentId: attachment.id,
        data: Buffer.from(attachment.data.base64, "base64").toString("utf8"),
      };
    } else if (Message.isJsonAttachment(attachment.data)) {
      return {
        attachmentId: attachment.id,
        data: JSON.stringify(attachment.data.data),
      };
    }

    return null;
  }

  private filterNullAttachments(
    attachment: PickupAttachment | null
  ): attachment is PickupAttachment {
    return attachment !== null;
  }

  async run(): Promise<Array<{ attachmentId: string; message: Message }>> {
    if (this.message.type === "delivery") {
      return Promise.all(
        this.message.message.attachments
          .map(this.processAttachment)
          .filter(this.filterNullAttachments)
          .map(async (attachment) => ({
            attachmentId: attachment.attachmentId,
            message: await this.mercury.unpackMessage(attachment.data),
          }))
      );
    }

    return [];
  }
}
