import * as Domain from "../../domain";
import { Task } from "../../utils/tasks";

/**
 * Asyncronously sign with a DID
 *
 * @async
 * @param {DID} did
 * @param {Uint8Array} message
 * @returns {Promise<Signature>}
 */

interface Args {
  did: Domain.DID;
  message: Uint8Array;
}

export class SignWithDID extends Task<Domain.Signature, Args> {
  async run(ctx: Task.Context) {
    const privateKeys = await ctx.Pluto.getDIDPrivateKeysByDID(this.args.did);

    for (const privateKey of privateKeys) {
      if (privateKey.isSignable()) {
        return {
          value: privateKey.sign(Buffer.from(this.args.message)),
        };
      }
    }

    throw new Domain.AgentError.CannotFindDIDPrivateKey();
  }
}
