import * as Domain from "../../../../domain";
import { Payload } from "../../../../domain/protocols/Payload";
import { SDJWTCredential } from "../../../models/SDJWTVerifiableCredential";
import { Pollux } from "../../../PlugPol";
import { OEA } from "../types";

interface Args {
  credential: Domain.Credential;
  privateKey: Domain.PrivateKey;
  presentationRequest: OEA.PresentationRequest;
  presentationFrame?: any;
}

export class PresentationRequest extends Pollux.Task<Args> {
  async run(ctx: Pollux.Context) {
    const credential = this.args.credential;
    const presentationRequest = this.args.presentationRequest;

    if (credential instanceof SDJWTCredential) {
      const subjectDID = Domain.DID.from(credential.subject);
      const keys = await ctx.Pluto.getDIDPrivateKeysByDID(subjectDID);
      const privateKey = keys.find((key) => key.curve === Domain.Curve.ED25519);

      if (privateKey === undefined) {
        throw new Domain.AgentError.CannotFindDIDPrivateKey();
      }

      // TODO is this ever passed
      const presentationFrame = this.args.presentationFrame ?? {};
      const presentationJWS = await ctx.SDJWT.createPresentationFor({
        jws: credential.id,
        presentationFrame,
        privateKey: this.args.privateKey
      });

      return Payload.make(OEA.PRISM_SDJWT, presentationJWS);
    }

    throw new Domain.PolluxError.InvalidPresentationProofArgs();
  }
}
