import * as Domain from "../../../../domain";
import { Payload } from "../../../../domain/protocols/Payload";
import { PrismKeyPathIndexTask } from "../../../../edge-agent/didFunctions";
import { OEA } from "../types";
import { Plugins } from "../../../../plugins";

interface Args {
  offer: OEA.CredentialOffer;
}

export class CredentialOffer extends Plugins.Task<Args> {
  async run(ctx: Plugins.Context) {
    const offer = this.args.offer;

    // [ ] https://github.com/hyperledger/identus-edge-agent-sdk-ts/issues/363 use CreatePrismDID
    // CreatePrismDID needs updating to accept keytypes (both secp here)
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
