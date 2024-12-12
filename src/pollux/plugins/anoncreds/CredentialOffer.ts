import * as Domain from "../../../domain";
import { expect } from "../../../utils";
import { Pollux } from "../../PlugPol";
import { Payload } from "../../../domain/protocols/Payload";
import { GetLinkSecret } from "./GetLinkSecret";
import { FetchCredentialDefinition } from "./FetchCredentialDefinition";
import * as Types from "./types";

interface Args {
  offer: Types.CredentialOffer;
  thid?: string;
}

export class CredentialOffer extends Pollux.Task<Args> {
  async run(ctx: Pollux.Context) {
    const metaname = expect(this.args.thid, "Missing offer.thid");
    const offer = this.args.offer;
    // TODO validate

    const linkSecret = await ctx.run(new GetLinkSecret());
    const credentialDefinition = await ctx.run(new FetchCredentialDefinition({ uri: offer.cred_def_id }));
    const [ac_request, ac_metadata] = await ctx.Anoncreds.createCredentialRequest(
      offer,
      credentialDefinition,
      linkSecret.secret,
      linkSecret.name
    );

    const metadata = new Domain.CredentialMetadata(Domain.CredentialType.AnonCreds, metaname, ac_metadata);
    await ctx.Pluto.storeCredentialMetadata(metadata);

    return Payload.make(Types.CREDENTIAL_REQUEST, ac_request);
  }
}
