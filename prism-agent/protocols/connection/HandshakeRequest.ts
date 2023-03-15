import { uuid } from "@stablelib/uuid";

import { DID, Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { OutOfBandInvitation } from "../invitation/v2/OutOfBandInvitation";
import { ProtocolType } from "../ProtocolTypes";
import { HandshakeRequestBody } from "../types";

export class HandshakeRequest {
  public static type = ProtocolType.DidcommconnectionRequest;
  constructor(
    public body: HandshakeRequestBody,
    public from: DID,
    public to: DID,
    public thid?: string,
    public id: string = uuid()
  ) {}

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(
      body,
      this.id,
      HandshakeRequest.type,
      this.from,
      this.to,
      [],
      this.thid
    );
  }

  private static isHandShakeBody(
    type: ProtocolType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: any
  ): body is HandshakeRequestBody {
    return type === this.type;
  }

  public static safeParseBody(
    body: string,
    type: ProtocolType
  ): HandshakeRequestBody {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let parsed: any;
    try {
      parsed = JSON.parse(body);
    } catch (err) {
      throw new AgentError.UnknownInvitationTypeError();
    }

    if (type !== ProtocolType.DidcommconnectionRequest) {
      throw new AgentError.UnknownInvitationTypeError();
    }

    if (this.isHandShakeBody(type, parsed)) {
      if (parsed.goal && typeof parsed.goal !== "string") {
        throw new AgentError.UnknownInvitationTypeError();
      }
      if (parsed.goalCode && typeof parsed.goalCode !== "string") {
        throw new AgentError.UnknownInvitationTypeError();
      }
      if (
        parsed.accept &&
        (!Array.isArray(parsed.accept) ||
          parsed.accept.find((val) => typeof val !== "string"))
      ) {
        throw new AgentError.UnknownInvitationTypeError();
      }

      return {
        goalCode: parsed.goalCode,
        goal: parsed.goal,
        accept: parsed.accept,
      };
    }

    throw new AgentError.UnknownInvitationTypeError();
  }

  static fromMessage(inviteMessage: Message, from: DID): HandshakeRequest {
    if (!inviteMessage.from || !inviteMessage.piuri) {
      throw new AgentError.InvitationIsInvalidError();
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const toDID = inviteMessage.from!;
    const handShakeRequestBody = this.safeParseBody(
      inviteMessage.body,
      this.type
    );

    return new HandshakeRequest(
      handShakeRequestBody,
      from,
      toDID,
      inviteMessage.id
    );
  }

  static fromOutOfBand(
    inviteMessage: OutOfBandInvitation,
    from: DID
  ): HandshakeRequest {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const toDID = DID.fromString(inviteMessage.from!);

    return new HandshakeRequest(
      inviteMessage.body,
      from,
      toDID,
      inviteMessage.id
    );
  }
}
