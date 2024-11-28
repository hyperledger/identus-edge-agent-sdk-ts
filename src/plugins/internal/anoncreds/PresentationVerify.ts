import * as Domain from "../../../domain";
import { ProtocolType } from "../../../edge-agent/protocols/ProtocolTypes";
import { FetchCredentialDefinition } from "./FetchCredentialDefinition";
import { fetchSchema } from "./FetchSchema";
import { Payload } from "../../../domain/protocols/Payload";
import { notNil } from "../../../utils";
import type { Context } from "./index";
import * as Types from "./types";
import { Plugins } from "../../../plugins";

interface Args {
  presentation: Types.Presentation;
  presentationRequest?: Types.PresentationRequest;
  thid: string;
}

export class PresentationVerify extends Plugins.Task<Args> {
  async run(ctx: Context) {
    const presentationSubmission = this.args.presentation;
    const presentationRequest = await this.getPresentationRequest(ctx);
    const isValidPresentation = await ctx.Anoncreds.isValidPresentation(presentationSubmission);

    if (!isValidPresentation) {
      throw new Error("Presentation is invalid");
    }

    const [identifier] = presentationSubmission.identifiers;
    const schema = await ctx.run(new fetchSchema({ uri: identifier.schema_id }));
    const credentialDefinition = await ctx.run(new FetchCredentialDefinition({ uri: identifier.cred_def_id }));

    const schemas_dict = new Map<string, Types.Schema>();
    const definitions_dict = new Map<string, Types.CredentialDefinition>();

    schemas_dict.set(identifier.schema_id, schema);
    definitions_dict.set(identifier.cred_def_id, credentialDefinition);

    const valid = await ctx.Anoncreds.verifyPresentation(
      presentationSubmission,
      presentationRequest,
      Object.fromEntries(schemas_dict),
      Object.fromEntries(definitions_dict)
    );

    return Payload.make("valid", valid);
  }

  private async getPresentationRequest(ctx: Context) {
    if (notNil(this.args.presentationRequest)) {
      return this.args.presentationRequest;
    }

    const allMessages = await ctx.Pluto.getAllMessages();
    const message = allMessages.find(msg => {
      return msg.thid === this.args.thid
        && msg.piuri === ProtocolType.DidcommRequestPresentation;
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
