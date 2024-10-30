import * as Domain from "../../domain";
import { JsonObj, asArray, asJsonObj, isArray, isObject, notEmptyString } from "../../utils";
import { Task } from "../../utils/tasks";
import { InvitationIsInvalidError } from "../../domain/models/errors/Agent";
import { OutOfBandInvitation } from "../protocols/invitation/v2/OutOfBandInvitation";
import { ProtocolType } from "../protocols/ProtocolTypes";

/**
 * parse OOB invitation
 */

interface Args {
  value: string | JsonObj;
}

export class ParseOOBInvitation extends Task<OutOfBandInvitation, Args> {
  async run() {
    const invitation = this.safeParseBody();

    if (invitation.isExpired) {
      throw new InvitationIsInvalidError('expired');
    }

    return invitation;
  }

  private safeParseBody(): OutOfBandInvitation {
    const msg = asJsonObj(this.args.value);
    const valid = (
      msg.type === ProtocolType.Didcomminvitation
      && notEmptyString(msg.id)
      && notEmptyString(msg.from)
      && isObject(msg.body)
      && isArray(msg.body.accept)
      && msg.body.accept.every(notEmptyString)
    );

    if (valid === false) {
      throw new InvitationIsInvalidError();
    }

    const attachments = asArray(msg.attachments).map((attachment) =>
      Domain.AttachmentDescriptor.build(attachment.data, attachment.id, attachment.mediaType)
    );

    return new OutOfBandInvitation(
      msg.body,
      msg.from,
      msg.id,
      attachments,
      msg.expires_time
    );
  }
}
