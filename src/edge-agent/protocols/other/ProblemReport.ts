import { DID, Message } from "../../../domain/models";
import { ProtocolType } from "../ProtocolTypes";

/**
 * Specification:
 * https://identity.foundation/didcomm-messaging/spec/#problem-reports
 */

export interface ProblemReportBody {
  // https://identity.foundation/didcomm-messaging/spec/#problem-codes
  code: string;
  // OPTIONAL but recommended. Contains human-friendly text describing the problem
  comment?: string,
  // OPTIONAL. Contains situation-specific values that are interpolated into the value of `comment`
  args?: string[],
  // OPTIONAL. Provides a URI where additional help on the issue can be received
  escalate_to?: string;
}

export class ProblemReport {
  public static type = ProtocolType.ProblemReporting;

  constructor(
    public body: ProblemReportBody,
    public from: DID,
    public to: DID,
    public thid?: string,
  ) {}

  makeMessage(): Message {
    const body = JSON.stringify(this.body);
    return new Message(
      body,
      undefined,
      ProblemReport.type,
      this.from,
      this.to,
      [],
      this.thid
    );
  }
}
