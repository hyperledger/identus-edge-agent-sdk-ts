import { OIDC } from "../types";
import { CredentialRequest } from "../protocols/CredentialRequest";
import { TokenResponse } from "../protocols/TokenResponse";
import { JsonObj, expect, notNil } from "../../../utils";
import { Task } from "../../../utils/tasks";
import { CreatePrismDID } from "../../didFunctions/CreatePrismDID";
import { CreateJWT } from "../../didFunctions/CreateJwt";
import { InvalidCredentialConfigurationIds } from "../errors";

interface Args {
  offer: OIDC.CredentialOffer;
  issuerMeta: OIDC.IssuerMetadata;
  tokenResponse: TokenResponse;
  clientId: string;
}

export class CreateCredentialRequest extends Task<CredentialRequest, Args> {
  async run(ctx: Task.Context) {
    const credentialIssuer = this.args.offer.credential_issuer;
    const configId = expect(this.args.offer.credential_configuration_ids.at(0), InvalidCredentialConfigurationIds);
    const config = expect(this.args.issuerMeta.credential_configurations_supported[configId], InvalidCredentialConfigurationIds);

    const body: JsonObj = {
      format: config.format,
      credential_definition: {
        type: config.credential_definition.type,
        "credentialSubject": {},
      },
    };

    // create proof based on config.proof_types_supported
    if (notNil(config.proof_types_supported?.jwt)) {
      const alias = `${credentialIssuer}_${this.args.tokenResponse.cNonce}`;
      const did = await ctx.run(new CreatePrismDID({ alias, services: [] }));
      const createJWT = new CreateJWT({
        did,
        payload: {
          aud: credentialIssuer,
          iss: this.args.clientId,
          iat: Date.now(),
          nonce: this.args.tokenResponse.cNonce,
        },
        header: { typ: "openid4vci-proof+jwt" }
      });

      const jwt = await ctx.run(createJWT);

      body.proof = { proof_type: "jwt", jwt };
    }

    const request = new CredentialRequest(
      this.args.issuerMeta.credential_endpoint,
      this.args.tokenResponse.accessToken,
      body,
      // headers
    );

    return request;
  }
}
