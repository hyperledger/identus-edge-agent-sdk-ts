import { uuid } from "@stablelib/uuid";
import { Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { ProtocolHelpers } from "../../helpers/ProtocolHelpers";
import { ProtocolType } from "../ProtocolTypes";
import { MediationGrantBody } from "../types";

export class MediationGrant {
  public static type = ProtocolType.DidcommMediationGrant;

  constructor(public body: MediationGrantBody, public id: string = uuid()) {}

  static fromMessage(fromMessage: Message): MediationGrant {
    if (fromMessage.piuri !== ProtocolType.DidcommMediationGrant) {
      throw new AgentError.InvalidMediationGrantMessageError(
        "Invalid request credential message error."
      );
    }
    const type = fromMessage.piuri as ProtocolType;
    const mediationGrantBody =
      ProtocolHelpers.safeParseBody<MediationGrantBody>(fromMessage.body, type);

    return new MediationGrant(mediationGrantBody, fromMessage.id);
  }
}
