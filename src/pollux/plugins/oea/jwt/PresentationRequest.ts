import * as Domain from "../../../../domain";
import { JWTCredential } from "../../../models/JWTVerifiableCredential";
import { Task } from "../../../../utils";
// import { CreateJWT } from "../../../utils/jwt/CreateJwt";
import { Pollux } from "../../../PlugPol";
import { OEA } from "../types";
import { Payload } from "../../../../domain/protocols/Payload";

interface Args {
  credential: Domain.Credential;
  presentationRequest: OEA.PresentationRequest;
}

export class PresentationRequest extends Pollux.Task<Args> {
  async run(ctx: Task.Context) {
    const credential = this.args.credential;
    const presReq = this.args.presentationRequest;

    if (!(credential instanceof JWTCredential)) {
      throw new Error();
    }

    if (!credential.isProvable()) {
      throw new Error("Credential is not Provable");
    }

    // ?? this is all cloud agent specific logic

    const subjectDID = Domain.DID.from(credential.subject);
    // TODO these values should be passed
    // const keys = await ctx.Pluto.getDIDPrivateKeysByDID(subjectDID);
    // const curve = credential instanceof SDJWTCredential
    //   ? Domain.Curve.ED25519
    //   : Domain.Curve.SECP256K1;
    // const privateKey = keys.find((key) => key.curve === curve);

    // if (privateKey === undefined) {
    //   throw new Domain.AgentError.CannotFindDIDPrivateKey();
    // }

    const presentation = credential.presentation();
    // ? something like this - make a desired presentation
    // const presentation = ctx.Pollux.makePresentation("https://www.w3.org/2018/credentials/v1", { ...args });

    const payload = {
      vp: presentation,
      iss: subjectDID.toString(),
      aud: presReq.options.domain,
      nonce: presReq.options.challenge,
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
