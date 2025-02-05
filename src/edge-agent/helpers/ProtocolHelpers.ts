/* eslint-disable @typescript-eslint/no-explicit-any */
import { AttachmentDescriptor, Message } from "../../domain";
import { AgentError } from "../../domain/models/Errors";
import { isArray, isEmpty, isNil, isString, notEmptyString, notNil } from "../../utils";
import { CredentialFormat } from "../protocols/issueCredential/CredentialFormat";
import {
  MediationGrantBody,
  PresentationBody,
  RequestPresentationBody,
  ProposePresentationBody,
  BasicMessageBody,
  ProblemReportBody,
} from "../protocols/types";

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

export const parsePresentationMessage = (msg: Message): PresentationBody => {
  if (notNil(msg.body.goalCode) && !isString(msg.body.goalCode)) {
    throw new AgentError.InvalidPresentationBodyError("Invalid goalCode");
  }
  if (notNil(msg.body.comment) && !isString(msg.body.comment)) {
    throw new AgentError.InvalidPresentationBodyError("Invalid comment");
  }
  return {
    comment: msg.body.comment,
    goalCode: msg.body.goalCode,
  };
};

const parseSomePresentationMessage = (msg: Message): RequestPresentationBody | ProposePresentationBody => {
  if (notNil(msg.body.goalCode) && !isString(msg.body.goalCode)) {
    throw new Error("Invalid goalCode");
  }

  if (notNil(msg.body.comment) && !isString(msg.body.comment)) {
    throw new Error("Invalid comment");
  }

  if (notNil(msg.body.willConfirm) && typeof msg.body.willConfirm !== "boolean") {
    throw new Error("Invalid willConfirm");
  }

  if (notNil(msg.body.proofTypes)) {
    const invalidProofType = !isArray(msg.body.proofTypes) || msg.body.proofTypes.some((x: any) => {
      if (notNil(x.schema) && !isString(x.schema)) {
        return true;
      }

      if (notNil(x.requiredFields) && (
        !isArray(x.requiredFields) ||
        x.requiredFields.some((f: any) => !isString(f))
      )) {
        return true;
      }

      if (notNil(x.trustIssuers) && (
        !isArray(x.trustIssuers) ||
        x.trustIssuers.some((f: any) => !isString(f)))
      ) {
        return true;
      }

      return false;
    });

    if (invalidProofType) {
      throw new Error("Invalid proofTypes");
    }
  }

  return {
    comment: msg.body.comment,
    goalCode: msg.body.goalCode,
    proofTypes: msg.body.proofTypes,
    willConfirm: notNil(msg.body.willConfirm) ? msg.body.willConfirm : false,
  };
};

export const parseProposePresentationMessage = (msg: Message): ProposePresentationBody => {
  try {
    return parseSomePresentationMessage(msg);
  }
  catch (e) {
    const err = e instanceof Error ? e.message : "Invalid propose presentation message";
    throw new AgentError.InvalidProposePresentationBodyError(err);
  }
};

export const parseRequestPresentationMessage = (msg: Message): RequestPresentationBody => {
  try {
    return parseSomePresentationMessage(msg);
  }
  catch (e) {
    const err = e instanceof Error ? e.message : "Invalid request presentation message";
    throw new AgentError.InvalidPresentationBodyError(err);
  }
};
