import { DID, JsonString } from "domain/models";
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
    throw new Error("Not implemented");
  }
}

export class OutOfBandInvitation implements InvitationInterface {
  constructor(
    public id: string,
    public body: OutOfBandInvitationBody,
    public type: InvitationTypes,
    public from: NullableType<DID>
  ) {}
}
