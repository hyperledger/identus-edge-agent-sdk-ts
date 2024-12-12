import * as Domain from "../../../../domain";
import { Payload } from "../../../../domain/protocols/Payload";
import { Pollux } from "../../../PlugPol";
import { PrismKeyPathIndexTask } from "../../../../edge-agent/didFunctions";
import { Task } from "../../../../utils";
import { OEA } from "../types";

interface Args {
  offer: OEA.CredentialOffer;
}

export class CredentialOffer extends Pollux.Task<Args> {
  async run(ctx: Task.Context) {
    const offer = this.args.offer;

    // TODO move to CreatePrismDID task
    const getIndexTask = new PrismKeyPathIndexTask({});
    const index = await ctx.run(getIndexTask);

    const masterSk = await ctx.Apollo.createPrivateKey({
      [Domain.KeyProperties.curve]: Domain.Curve.SECP256K1,
      [Domain.KeyProperties.index]: index,
      [Domain.KeyProperties.type]: Domain.KeyTypes.EC,
      [Domain.KeyProperties.seed]: Buffer.from(ctx.Seed.value).toString("hex"),
    });

    const authSk = await ctx.Apollo.createPrivateKey({
      [Domain.KeyProperties.curve]: Domain.Curve.SECP256K1,
      [Domain.KeyProperties.index]: index + 1,
      [Domain.KeyProperties.type]: Domain.KeyTypes.EC,
      [Domain.KeyProperties.seed]: Buffer.from(ctx.Seed.value).toString("hex"),
    });

    const did = await ctx.Castor.createPrismDID(
      masterSk.publicKey(),
      [],
      [authSk.publicKey()]
    );

    await ctx.Pluto.storeDID(did, [masterSk, authSk]);
    // ODOT


    const payload = {
      aud: [offer.options.domain],
      nonce: offer.options.challenge,
      vp: {
        "@context": ["https://www.w3.org/2018/presentations/v1"],
        type: ["VerifiablePresentation"],
      },
    };

    const signedJWT = await ctx.JWT.signWithDID(did, payload);

    return Payload.make(OEA.PRISM_JWT, signedJWT);
  }
}
