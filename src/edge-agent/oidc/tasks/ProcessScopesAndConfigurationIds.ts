import { OIDC } from "../types";
import { expect, notEmptyString } from "../../../utils";
import { Task } from "../../../utils/tasks";

interface Args {
  offer: OIDC.CredentialOffer;
  issuerMeta: OIDC.IssuerMetadata;
}

interface ReturnType {
  scopes: string[];
  configurationIds: string[];
}

export class ProcessScopesAndConfigurationIds extends Task<ReturnType, Args> {
  async run() {
    const scopes: string[] = [];
    const configurationIds: string[] = [];

    this.args.offer.credential_configuration_ids.forEach(id => {
      const credentialConfig = expect(
        this.args.issuerMeta.credential_configurations_supported[id],
        `${id} was not found within issuer metadata`
      );

      if (notEmptyString(credentialConfig.scope)) {
        scopes.push(credentialConfig.scope);
      }
      else {
        configurationIds.push(id);
      }
    });

    return { scopes, configurationIds };
  }
}
