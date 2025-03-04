/* eslint-disable @typescript-eslint/no-explicit-any */
import { AttachmentDescriptor, Message } from "../../domain";
import { AgentError } from "../../domain/models/Errors";
import { isNil } from "../../utils";
import { CredentialFormat } from "../protocols/issueCredential/CredentialFormat";
import { MediationGrantBody } from "../protocols/types";

export const parseCredentialAttachments = (credentials: Map<string, any>) => {
  const initialValue = {
    formats: [] as CredentialFormat[],
    attachments: [] as AttachmentDescriptor[],
  };
  const credentialsArray = Array.from(credentials);

  return credentialsArray.reduce((acc, [key, credential]) => {
    const attachment = AttachmentDescriptor.build(credential);
    const format: CredentialFormat = {
      attach_id: attachment.id,
      format: key,
    };

    return {
      formats: [...acc.formats, format],
      attachments: [...acc.attachments, attachment],
    };
  },
    initialValue
  );
};

export const parseMediationGrantMessage = (msg: Message): MediationGrantBody => {
  if (isNil(msg.body.routing_did)) {
    throw new AgentError.InvalidMediationGrantBodyError(
      "Undefined routingDid"
    );
  }

  return {
    routing_did: msg.body.routing_did,
  };
};
