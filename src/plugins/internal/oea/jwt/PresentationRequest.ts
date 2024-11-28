import * as Domain from "../../../../domain";
import { JWTCredential } from "../../../../pollux/models/JWTVerifiableCredential";
import { Payload } from "../../../../domain/protocols/Payload";
import { OEA } from "../types";
import { Plugins } from "../../../../plugins";

interface Args {
  credential: Domain.Credential;
  presentationRequest: OEA.PresentationRequest;
}

export class PresentationRequest extends Plugins.Task<Args> {
  async run(ctx: Plugins.Context) {
    const credential = this.args.credential;
    const presentationRequest = this.args.presentationRequest;

    if (!(credential instanceof JWTCredential)) {
      throw new Error();
    }

    if (!credential.isProvable()) {
      throw new Error("Credential is not Provable");
    }

    const subjectDID = Domain.DID.from(credential.subject);
    // ?? these values should be passed
    // const keys = await ctx.Pluto.getDIDPrivateKeysByDID(subjectDID);
    // const curve = credential instanceof SDJWTCredential
    //   ? Domain.Curve.ED25519
    //   : Domain.Curve.SECP256K1;
    // const privateKey = keys.find((key) => key.curve === curve);
    // if (privateKey === undefined) {
    //   throw new Domain.AgentError.CannotFindDIDPrivateKey();
    // }

    const presentation = credential.presentation();
    const payload = {
      vp: presentation,
      iss: subjectDID.toString(),
      aud: presentationRequest.options.domain,
      nonce: presentationRequest.options.challenge,
    };

    // const signedJWT = await Domain.JWT.sign(did, privateKey, payload, { kid });
    // const jwtTask = new CreateJWT({
    //   payload,
    //   did: subjectDID,
    //   privateKey
    // });
    // const jwt = await ctx.run(jwtTask);

    const jwt = await ctx.JWT.signWithDID(subjectDID, payload);

    return Payload.make(OEA.PRISM_JWT, jwt);
  }
}
