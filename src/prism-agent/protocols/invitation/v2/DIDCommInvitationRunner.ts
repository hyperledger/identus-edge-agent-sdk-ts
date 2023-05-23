import { AgentError } from "../../../../domain/models/Errors";
import { ProtocolType } from "../../ProtocolTypes";
import { OutOfBandInvitationBody } from "../../types";
import { OutOfBandInvitation } from "./OutOfBandInvitation";
import { OutOfBandParser } from "./OutOfBandParser";

export class DIDCommInvitationRunner {
  constructor(private url: URL) {}

  private isDIDCommInvitation(
    type: ProtocolType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: any
  ): body is { body: OutOfBandInvitationBody; from: string; id?: string } {
    return type === ProtocolType.Didcomminvitation;
  }

  private safeParseBody(body: string, type: ProtocolType): OutOfBandInvitation {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let parsed: any;
    try {
      parsed = JSON.parse(body);
    } catch (err) {
      throw new AgentError.UnknownInvitationTypeError();
    }

    if (parsed && parsed.type !== ProtocolType.Didcomminvitation) {
      throw new AgentError.UnknownInvitationTypeError();
    }

    if (this.isDIDCommInvitation(type, parsed)) {
      if (parsed.id && typeof parsed.id !== "string") {
        throw new AgentError.UnknownInvitationTypeError();
      }
      if (!parsed.from || typeof parsed.from !== "string") {
        throw new AgentError.UnknownInvitationTypeError();
      }
      if (!parsed.body) {
        throw new AgentError.UnknownInvitationTypeError();
      }
      if (parsed.body.goalCode && typeof parsed.body.goalCode !== "string") {
        throw new AgentError.UnknownInvitationTypeError();
      }
      if (parsed.body.goal && typeof parsed.body.goal !== "string") {
        throw new AgentError.UnknownInvitationTypeError();
      }
      if (
        parsed.body.accept &&
        (!Array.isArray(parsed.body.accept) ||
          parsed.body.accept.find((val) => typeof val !== "string"))
      ) {
        throw new AgentError.UnknownInvitationTypeError();
      }
      return new OutOfBandInvitation(parsed.body, parsed.from, parsed.id);
    }

    throw new AgentError.UnknownInvitationTypeError();
  }

  run(): OutOfBandInvitation {
    const messageData = OutOfBandParser.parseMessage(this.url);
    return this.safeParseBody(messageData, ProtocolType.Didcomminvitation);
  }
}
