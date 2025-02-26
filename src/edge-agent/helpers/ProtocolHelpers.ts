/* eslint-disable @typescript-eslint/no-explicit-any */
import { AttachmentDescriptor, Message } from "../../domain";
import { AgentError } from "../../domain/models/Errors";
import { isArray, isEmpty, isNil, notEmptyString } from "../../utils";
import { CredentialFormat } from "../protocols/issueCredential/CredentialFormat";
import { MediationGrantBody, BasicMessageBody, ProblemReportBody } from "../protocols/types";

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

export const parseBasicMessageBody = (msg: Message): BasicMessageBody => {
  if (notEmptyString(msg.body.content)) {
    return {
      content: msg.body.content,
    };
  }

  throw new AgentError.InvalidBasicMessageBodyError("Invalid content");
};

export const parseProblemReportBody = (msg: Message): ProblemReportBody => {
  if (notEmptyString(msg.body.code) &&
    notEmptyString(msg.body.comment) &&
    notEmptyString(msg.body.escalate_to) &&
    isArray(msg.body.args) && isEmpty(msg.body.args)
  ) {
    const { code, comment, escalate_to, args } = msg.body;
    return { code, comment, escalate_to, args };
  }
  throw new AgentError.InvalidProblemReportBodyError();
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
