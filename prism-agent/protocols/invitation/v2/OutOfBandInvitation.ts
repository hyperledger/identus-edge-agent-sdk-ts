import { uuid } from "@stablelib/uuid";

import { ProtocolType } from "../../ProtocolTypes";
import { OutOfBandInvitationBody } from "../../types";

export class OutOfBandInvitation {
  public static type = ProtocolType.Didcomminvitation;

  constructor(
    public body: OutOfBandInvitationBody,
    public from: string,
    public id: string = uuid()
  ) {}
}
