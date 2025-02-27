import * as Domain from "../../../domain";
import { Task } from "../../../utils";
import { DIDCommContext } from "../../didcomm/Context";

/**
 * Pickup Status
 * reponse to a Status-Request message
 * or a response to Pickup-Request message when there are no messages
 */

interface Args {
  message: Domain.Message;
}

export class PickupStatus extends Task<void, Args> {
  async run(ctx: DIDCommContext) {
    // do nothing
  }
}
