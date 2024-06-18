import { uuid } from "@stablelib/uuid";

import { DID, Message } from "../../../domain";
import { AgentError } from "../../../domain/models/Errors";
import { OutOfBandInvitation } from "../invitation/v2/OutOfBandInvitation";
import { ProtocolType } from "../ProtocolTypes";
import { HandshakeRequestBody } from "../types";
import { asArray, isArray, isString, notNil } from "../../../utils";

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

  public static safeParseBody(msg: Message): HandshakeRequestBody {
    // msg.piuri === HandshakeRequest.type

    if (notNil(msg.body.goal) && !isString(msg.body.goal)) {
      throw new AgentError.UnknownInvitationTypeError();
    }

    if (notNil(msg.body.goalCode) && !isString(msg.body.goalCode)) {
      throw new AgentError.UnknownInvitationTypeError();
    }

    if (notNil(msg.body.accept) && (
      !isArray(msg.body.accept) ||
      msg.body.accept.some(x => !isString(x)))
    ) {
      throw new AgentError.UnknownInvitationTypeError();
    }

    return {
      goalCode: msg.body.goalCode,
      goal: msg.body.goal,
      accept: asArray(msg.body.accept, isString),
    };
  }

  static fromMessage(inviteMessage: Message, from: DID): HandshakeRequest {
    // TODO piuri not compared
    if (!inviteMessage.from || !inviteMessage.piuri) {
      throw new AgentError.InvitationIsInvalidError();
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const toDID = inviteMessage.from!;
    const handShakeRequestBody = HandshakeRequest.safeParseBody(inviteMessage);

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
