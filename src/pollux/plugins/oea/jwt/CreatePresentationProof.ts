import { Pollux } from "../../../types";
import * as Domain from "../../../../domain";
import { JWTCredential } from "../../../models/JWTVerifiableCredential";
import { Task } from "../../../../utils";
import { PresentationRequest } from "../../../models/PresentationRequest";
import { CreateJWT } from "../../../../edge-agent/didFunctions/CreateJwt";

interface Args {
  credential: Domain.Credential;
  presentationRequest: PresentationRequest<any, any>;
}

export class CreatePresentationProof extends Pollux.CreatePresentationProof<Args> {
  async run(ctx: Task.Context) {
    const credential = this.args.credential;
    const presReq = this.args.presentationRequest;

    if (!presReq.isType(Domain.AttachmentFormats.JWT)) {
      throw new Error();
    }

    if (!(credential instanceof JWTCredential)) {
      throw new Error();
    }

    // TODO these values should be passed
    const did = Domain.DID.from(credential.subject);
    const prismPrivateKeys = await ctx.Pluto.getDIDPrivateKeysByDID(did);
    const privateKey = prismPrivateKeys.find((key) => key.curve === Domain.Curve.SECP256K1);
    if (privateKey === undefined) {
      throw new Domain.AgentError.CannotFindDIDPrivateKey();
    }

    const presReqOptions = presReq.toJSON().options;
    const payload = {
      iss: did.toString(),
      aud: presReqOptions.domain,
      nonce: presReqOptions.challenge,
      vp: credential.presentation()
    };

    // const signedJWT = await Domain.JWT.sign(did, privateKey, payload, { kid });
    const jwtTask = new CreateJWT({
      payload,
      did,
      // TODO pass this param
      // privateKey
    });
    const jwt = await ctx.run(jwtTask);

    return jwt;
  }
}
