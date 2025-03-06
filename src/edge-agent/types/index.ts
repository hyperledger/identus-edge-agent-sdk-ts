import { OutOfBandInvitation } from "../protocols/invitation/v2/OutOfBandInvitation";
import { DIDPair } from "../../domain/models/DIDPair";
import {
  DID,
  Message,
  Credential,
} from "../../domain";

export type AgentOptions = {
  mediatorDID?: DID | string;
  experiments?: {
    liveMode?: boolean;
  };
};

export enum InvitationTypes {
  OUTOFBAND,
  PRISM_ONBOARD,
}

export type InvitationType = PrismOnboardingInvitation | OutOfBandInvitation;

export class PrismOnboardingInvitation {
  public type: InvitationTypes = InvitationTypes.PRISM_ONBOARD;

  constructor(
    public onboardEndpoint: string,
    public from?: DID,
    type?: InvitationTypes
  ) {
    if (type) {
      this.type = type;
    }
  }
}


export type MessageEventArg = Message[];
export type ConnectionEventArg = DIDPair;
export type RevokeEventArg = Credential;
export type EventCallback = (arg: MessageEventArg | ConnectionEventArg | RevokeEventArg) => void;

export enum ListenerKey {
  MESSAGE = "message",
  CONNECTION = "connection",
  REVOKE = "revoke"
}
