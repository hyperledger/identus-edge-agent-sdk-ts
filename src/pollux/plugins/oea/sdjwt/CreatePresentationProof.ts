import * as Domain from "../../../../domain";
import { Pollux } from "../../../types";
import { SDJWTCredential } from "../../../models/SDJWTVerifiableCredential";
import { PresentationRequest } from "../../../models/PresentationRequest";
import { SDJWTContext } from "./Plugin";

interface Args {
  credential: Domain.Credential;
  privateKey: Domain.PrivateKey;
  presentationRequest: PresentationRequest<any, any>;
  presentationFrame?: any;
}

export class CreatePresentationProof extends Pollux.CreatePresentationProof<Args> {
  async run(ctx: SDJWTContext) {
    const credential = this.args.credential;
    const presentationRequest = this.args.presentationRequest;

    if (
      credential instanceof SDJWTCredential
      && presentationRequest.isType(Domain.AttachmentFormats.SDJWT)
      && "privateKey" in this.args
    ) {
      // TODO is this ever passed
      const presentationFrame = this.args.presentationFrame ?? {};
      const presentationJWS = await ctx.SDJWT.createPresentationFor({
        jws: credential.id,
        presentationFrame,
        privateKey: this.args.privateKey
      });

      return presentationJWS;
    }

    throw new Domain.PolluxError.InvalidPresentationProofArgs();
  }
}
