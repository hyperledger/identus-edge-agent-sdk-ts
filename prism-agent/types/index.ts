import { DID, JsonString } from "domain/models";
import { AgentError } from "domain/models/Errors";
import { NullableType } from "domain/models/NullableType";

interface InvitationInterface {
  type: InvitationTypes;
  from: NullableType<DID>;
}

class OutOfBandInvitationBody {
  constructor(
    public goalCode: NullableType<string> = null,
    public goal: NullableType<string> = null,
    public accept: NullableType<Array<string>> = null
  ) {}
}

export enum InvitationTypes {
  OUTOFBAND,
  PRISM_ONBOARD,
}
export type InvitationType = PrismOnboardingInvitation | OutOfBandInvitation;

export class PrismOnboardingInvitation implements InvitationInterface {
  constructor(
    public onboardEndpoint: string,
    public type: InvitationTypes,
    public from: NullableType<DID>
  ) {}

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

    return new PrismOnboardingInvitation(onboardingEndpoint, type, from);
  }
}

export class OutOfBandInvitation implements InvitationInterface {
  constructor(
    public id: string,
    public body: OutOfBandInvitationBody,
    public type: InvitationTypes,
    public from: NullableType<DID>
  ) {}

  static parseOutOfBandInvitationFromJson(
    json: JsonString
  ): OutOfBandInvitation {
    const jsonObject = JSON.parse(json);
    if (!jsonObject.id) {
      throw new AgentError.InvitationIsInvalidError(
        "Undefined OutOfBandInvitation id"
      );
    }
    if (!jsonObject.body) {
      throw new AgentError.InvitationIsInvalidError(
        "Undefined OutOfBandInvitation body"
      );
    }
    if (!jsonObject.type) {
      throw new AgentError.InvitationIsInvalidError(
        "Undefined OutOfBandInvitation type"
      );
    }
    if (!jsonObject.from) {
      throw new AgentError.InvitationIsInvalidError(
        "Undefined OutOfBandInvitation from"
      );
    }

    const id = jsonObject.id;
    const body = jsonObject.body;
    const type = jsonObject.type;
    const from = DID.fromString(jsonObject.from);
    return new OutOfBandInvitation(id, body, type, from);
  }
}
