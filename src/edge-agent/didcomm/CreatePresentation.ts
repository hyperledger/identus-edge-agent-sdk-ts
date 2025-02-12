import { uuid } from "@stablelib/uuid";
import * as Domain from "../../domain";
import { Presentation, RequestPresentation } from "../protocols/proofPresentation";
import { DIDCommContext } from "./Context";
import { Task } from "../../utils/tasks";
import { expect, isString } from "../../utils";
import { RunProtocol } from "../helpers/RunProtocol";

/**
 * Asyncronously create a verifiablePresentation from a valid stored verifiableCredential
 * This is used when the verified requests a specific verifiable credential, this will create the actual
 * instance of the presentation which we can share with the verifier.
 */

interface Args {
  credential: Domain.Credential;
  request: RequestPresentation;
}

export class CreatePresentation extends Task<Presentation, Args> {
  async run(ctx: DIDCommContext) {
    const { credential, request } = this.args;
    const attachment = expect(request.attachments.at(0));
    const format = expect(attachment.format, "Invalid attachment format");
    const presentationRequest = attachment.payload;

    const payload = await ctx.run(new RunProtocol({
      type: "presentation-request",
      pid: format,
      data: { presentationRequest, credential }
    }));

    // TODO why are we converting to string / base64 attachment here
    const proof = isString(payload.data) ? payload.data : JSON.stringify(payload.data);
    const mimeType = typeof proof !== 'string' ? 'application/json' : undefined;
    const presentationAttachment = Domain.AttachmentDescriptor.build(
      proof,
      uuid(),
      mimeType,
      undefined,
      payload.pid
    );

    const presentation = new Presentation(
      {
        comment: request.body.comment,
        goalCode: request.body.goalCode
      },
      [
        presentationAttachment,
      ],
      request.to,
      request.from,
      request.thid ?? request.id
    );

    return presentation;
  }
}
