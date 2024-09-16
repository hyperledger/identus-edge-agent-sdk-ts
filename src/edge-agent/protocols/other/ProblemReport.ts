import { AgentError, DID, Message } from "../../../domain/models";
import { parseProblemReportBody } from "../../helpers/ProtocolHelpers";
import { ProtocolType } from "../ProtocolTypes";
import { ProblemReportBody } from "../types";





export class ProblemReport {
    public static type = ProtocolType.ProblemReporting;

    constructor(
        public body: ProblemReportBody,
        public from: DID,
        public to: DID,
        public thid?: string,
    ) { }

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

    static fromMessage(fromMessage: Message): ProblemReport {
        if (
            fromMessage.piuri !== ProtocolType.DidcommBasicMessage ||
            !fromMessage.from ||
            !fromMessage.to
        ) {
            throw new AgentError.InvalidBasicMessageBodyError(
                "Invalid BasicMessage body error."
            );
        }
        const problemReportBody = parseProblemReportBody(fromMessage);
        return new ProblemReport(
            problemReportBody,
            fromMessage.from,
            fromMessage.to
        );
    }
}