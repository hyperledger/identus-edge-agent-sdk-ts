import { JsonObj } from "../../utils";
import { Payload } from "../protocols/Payload";

/**
 * Pollux
 * handle Credential related tasks
 */
export interface Pollux {
  handle(
    protocolType: Pollux.ProtocolType,
    protocolId: string | undefined,
    data: JsonObj,
  ): Promise<Payload>;
}

export namespace Pollux {

  export type ProtocolType =
    | "credential-issue"
    | "credential-offer"
    | "presentation-request"
    | "presentation-verify"
    | "revocation-check";
}
