import { base64 } from "multiformats/bases/base64";
import * as Domain from "../../domain";
import { OfferCredential } from "../protocols/issueCredential/OfferCredential";
import { RequestCredential } from "../protocols/issueCredential/RequestCredential";
import { Task } from "../../utils/tasks";
import { DIDCommContext } from "./Context";
import { expect, isString } from "../../utils";
import { RunProtocol } from "../helpers/RunProtocol";

/**
 * Asyncronously prepare a request credential message from a valid offerCredential
 * for now supporting w3c verifiable credentials offers.
 */

interface Args {
  offer: OfferCredential;
}

export class HandleOfferCredential extends Task<RequestCredential, Args> {
  async run(ctx: DIDCommContext) {
    const { offer } = this.args;
    const attachment = expect(offer.attachments.at(0), "Invalid attachment");
    const format = expect(attachment.format, "Invalid attachment format");

    const result = await ctx.run(new RunProtocol({
      type: "credential-offer",
      pid: format,
      data: {
        offer: attachment.payload,
        thid: offer.thid
      }
    }));

    // ?? can this all move to send
    const from = expect(offer.to, 'Missing "from"');
    const to = offer.from;
    const body = isString(result.data) ? result.data : JSON.stringify(result.data);
    const response = new Domain.AttachmentDescriptor(
      {
        base64: base64.baseEncode(Buffer.from(body)),
      },
      result.pid,
      undefined,
      undefined,
      result.pid
    );

    const requestCredential = new RequestCredential({
      formats: [{
        attach_id: response.id,
        format: `${response.format}`,
      }],
      goalCode: offer.body.goalCode,
      comment: offer.body.comment,
    },
      [response],
      from,
      to,
      offer.thid
    );

    return requestCredential;
  }
}
