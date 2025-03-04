import * as Domain from "../../../../domain";
import { Payload } from "../../../../domain/protocols/Payload";
import { SDJWTCredential } from "../../../../pollux/models/SDJWTVerifiableCredential";
import { OEA } from "../types";
import { Plugins } from "../../../../plugins";

interface Args {
  credential: Domain.Credential;
  presentationRequest: OEA.PresentationRequest;
  presentationFrame?: any;
}

export class PresentationRequest extends Plugins.Task<Args> {
  async run(ctx: Plugins.Context) {
    const credential = this.args.credential;

    if (credential instanceof SDJWTCredential) {
      const subjectDID = Domain.DID.from(credential.subject);
      const keys = await ctx.Pluto.getDIDPrivateKeysByDID(subjectDID);
      const privateKey = keys.find((key) => key.curve === Domain.Curve.ED25519);

      if (privateKey === undefined) {
        throw new Domain.AgentError.CannotFindDIDPrivateKey();
      }

      // [ ] https://github.com/hyperledger-identus/sdk-ts/issues/362 PresentationFrame
      const presentationFrame = this.args.presentationFrame ?? {};
      const presentationJWS = await ctx.SDJWT.createPresentationFor({
        jws: credential.id,
        presentationFrame,
        privateKey,
      });

      return Payload.make(OEA.PRISM_SDJWT, presentationJWS);
    }

    throw new Domain.PolluxError.InvalidPresentationProofArgs();
  }
}
