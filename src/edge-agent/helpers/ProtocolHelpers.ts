/* eslint-disable @typescript-eslint/no-explicit-any */
import { AttachmentDescriptor, Message } from "../../domain";
import { AgentError } from "../../domain/models/Errors";
import { asArray, isArray, isEmpty, isNil, isObject, isString, notEmptyString, notNil } from "../../utils";
import { ProtocolType } from "../protocols/ProtocolTypes";
import { CredentialFormat } from "../protocols/issueCredential/CredentialFormat";
import {
  ProposeCredentialBody,
  OfferCredentialBody,
  IssueCredentialBody,
  CredentialBody,
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

const parseCredentialFormat = (value: unknown): CredentialFormat => {
  if (!isObject(value) || isNil(value.attach_id) || isNil(value.format)) {
    throw new AgentError.InvalidCredentialFormats();
  }

  return {
    attach_id: value.attach_id,
    format: value.format,
  };
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
    return { code, comment, escalate_to, args }
  }
  throw new AgentError.InvalidProblemReportBodyError()
}

export const parseCredentialBody = (msg: Message): CredentialBody => {
  if (!msg.body) {
    //TODO: The body might be empty, but it should not be undefined according to the spec
    throw new AgentError.InvalidCredentialBodyError(
      "Invalid CredentialBody Error"
    );
  }

  if (notNil(msg.body.formats) && !isArray(msg.body.formats)) {
    throw new AgentError.InvalidCredentialFormats();
  }

  return {
    formats: asArray(msg.body.formats).map(x => parseCredentialFormat(x)),
    goalCode: msg.body.goalCode ?? null,
    comment: msg.body.comment ?? null,
  };
};

export const parseOfferCredentialMessage = (msg: Message): OfferCredentialBody => {
  if (msg.piuri !== ProtocolType.DidcommOfferCredential) {
    throw new AgentError.UnknownCredentialBodyError();
  }

  if (isNil(msg.body.credential_preview)) {
    throw new AgentError.InvalidOfferCredentialBodyError("Undefined credentialPreview");
  }

  const credentialBody = parseCredentialBody(msg);

  return {
    ...credentialBody,
    credential_preview: msg.body.credential_preview,
    replacementId: msg.body.replacementId,
    multipleAvailable: msg.body.multipleAvailable,
  };
};

export const parseIssueCredentialMessage = (msg: Message): IssueCredentialBody => {
  if (msg.piuri !== ProtocolType.DidcommIssueCredential) {
    throw new AgentError.UnknownCredentialBodyError();
  }

  if (notNil(msg.body.replacementId) && !isString(msg.body.replacementId)) {
    throw new AgentError.InvalidIssueCredentialBodyError(
      "Invalid replacementId, should be a string"
    );
  }

  const credentialBody = parseCredentialBody(msg);

  return {
    ...credentialBody,
    replacementId: msg.body.replacementId,
    moreAvailable: msg.body.moreAvailable,
  };
};

export const parseProposeCredentialMessage = (msg: Message): ProposeCredentialBody => {
  if (isNil(msg.body.credential_preview)) {
    throw new AgentError.InvalidProposeCredentialBodyError(
      "Undefined credentialPreview"
    );
  }

  const credentialBody = parseCredentialBody(msg);

  return {
    ...credentialBody,
    credential_preview: msg.body.credential_preview,
  };
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
