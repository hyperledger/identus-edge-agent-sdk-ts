import { uuid } from "@stablelib/uuid";
import { AttachmentDescriptor, JsonString } from "../../../../domain";
import { AgentError } from "../../../../domain/models/Errors";
import { PrismOnboardingInvitation } from "../../../types";

import { ProtocolType } from "../../ProtocolTypes";
import { OutOfBandInvitationBody } from "../../types";

export class OutOfBandInvitation {
  public type = ProtocolType.Didcomminvitation;

  constructor(
    public body: OutOfBandInvitationBody,
    public from: string,
    public id: string = uuid(),
    public attachments: AttachmentDescriptor[] = []
  ) { }

  static parsePrismOnboardingInvitationFromJson(
    json: JsonString
  ): PrismOnboardingInvitation {
    const jsonObject = JSON.parse(json);
    if (!jsonObject.onboardEndpoint) {
      throw new AgentError.InvitationIsInvalidError(
        "Undefined PrismOnboardingInvitation onboardEndpoint"
      );
    }
    if (!jsonObject.type) {
      throw new AgentError.InvitationIsInvalidError(
        "Undefined PrismOnboardingInvitation type"
      );
    }
    const onboardingEndpoint = jsonObject.onboardEndpoint;
    const type = jsonObject.type;
    const from = jsonObject.from;

    return new PrismOnboardingInvitation(onboardingEndpoint, from, type);
  }
}
