import { OIDC } from "../types";
import { expect, notNil } from "../../../utils";
import { Task } from "../../../utils/tasks";
import { AuthorizationRequest } from "../protocols/AuthorizationRequest";
import { FetchIssuerMetadata } from "./FetchIssuerMetadata";
import { InvalidCredentialConfigurationIds, MissingAuthorizationServerUri } from "../errors";
import { ProcessScopesAndConfigurationIds } from "./ProcessScopesAndConfigurationIds";
import { FetchAuthServerMeta } from "./FetchAuthServerMeta";
import { CreateAuthorizationRequest } from "./CreateAuthorizationRequest";

/**
 * OIDC Authorization flow
 * start with Credential Offer
 * return Authorization Request
 */

interface Args {
  offer: OIDC.CredentialOffer;
  clientId: string;
  redirectUri: string;
}

export class ResolveCredentialOffer extends Task<AuthorizationRequest, Args> {
  async run(ctx: Task.Context) {
    const { offer, clientId, redirectUri } = this.args;
    const issuerMeta = await ctx.run(new FetchIssuerMetadata({ uri: offer.credential_issuer }));
    const supportedKeys = Object.keys(issuerMeta.credential_configurations_supported);
    const allSupported = offer.credential_configuration_ids.every(x => supportedKeys.includes(x));

    if (allSupported === false) {
      throw new InvalidCredentialConfigurationIds();
    }

    let authServer: string | undefined;
    if (notNil(offer.grants?.authorization_code)) {
      authServer = offer.grants?.authorization_code.authorization_server;
    }
    else if (notNil(offer.grants?.["urn:ietf:params:oauth:grant-type:pre-authorized_code"])) {
      authServer = offer.grants?.["urn:ietf:params:oauth:grant-type:pre-authorized_code"].authorization_server;
    }

    authServer = expect(
      authServer ?? issuerMeta.authorization_servers?.at(0),
      MissingAuthorizationServerUri
    );


    const authServerResponse = await ctx.run(
      new FetchAuthServerMeta({ serverUri: authServer, algorithm: "oidc" })
    );
    const { scopes } = await ctx.run(
      new ProcessScopesAndConfigurationIds({ offer, issuerMeta })
    );
    const authServerMeta = authServerResponse.body;

    // const usePar = false; // never;
    // if (usePar) {
    //   submitPar
    // }

    const authRequest = await ctx.run(
      new CreateAuthorizationRequest({
        offer,
        issuerMeta,
        authServerMeta,
        clientId,
        redirectUri,
        scopes
      })
    );

    return authRequest;
  }
}
