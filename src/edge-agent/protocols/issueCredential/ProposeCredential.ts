import { uuid } from "@stablelib/uuid";
import { AttachmentDescriptor, DID, Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { ProtocolType } from "../ProtocolTypes";
import { CredentialPreview } from "./CredentialPreview";
import { isNil } from "../../../utils";

/**
 * Specification:
 * https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential#propose-credential
 */

export interface ProposeCredentialBody {
  // optional field that indicates the goal of the message sender
  goal_code?: string;
  // optional field that provides human readable information about this Credential Proposal
  comment?: string;
  // optional JSON-LD object that represents the credential data that Prover wants to receive
  credential_preview?: CredentialPreview;
}

export class ProposeCredential {
  public static type = ProtocolType.DidcommProposeCredential;

  constructor(
    public body: ProposeCredentialBody,
    public attachments: AttachmentDescriptor[],
    public from?: DID,
    public to?: DID,
    public thid?: string,
    public id: string = uuid()
  ) {}

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(
      body,
      this.id,
      ProposeCredential.type,
      this.from,
      this.to,
      this.attachments,
      this.thid
    );
  }

  static fromMessage(msg: Message): ProposeCredential {
    if (
      msg.piuri !== ProtocolType.DidcommProposeCredential
      || isNil(msg.from)
      || isNil(msg.to)
    ) {
      throw new AgentError.InvalidProposedCredentialMessageError(
        "Invalid proposed credential message error."
      );
    }

    return new ProposeCredential(
      msg.body,
      msg.attachments,
      msg.from,
      msg.to,
      msg.thid,
      msg.id
    );
  }
}
