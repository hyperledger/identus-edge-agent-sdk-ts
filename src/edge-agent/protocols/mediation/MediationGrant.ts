import { uuid } from "@stablelib/uuid";
import { Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { ProtocolType } from "../ProtocolTypes";
import { MediationGrantBody } from "../types";
import { parseMediationGrantMessage } from "../../helpers/ProtocolHelpers";

export class MediationGrant {
  public static type = ProtocolType.DidcommMediationGrant;

  constructor(public body: MediationGrantBody, public id: string = uuid()) {}

  static fromMessage(fromMessage: Message): MediationGrant {
    if (fromMessage.piuri !== ProtocolType.DidcommMediationGrant) {
      throw new AgentError.InvalidMediationGrantMessageError(
        "Invalid request credential message error."
      );
    }
    const mediationGrantBody = parseMediationGrantMessage(fromMessage);

    return new MediationGrant(mediationGrantBody, fromMessage.id);
  }
}
