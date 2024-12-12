import { Plugin } from "../../../plugins";
import * as Types from "./types";

import { AnoncredsLoader } from "./AnoncredsLoader";
import { CredentialIssue } from "./CredentialIssue";
import { CredentialOffer } from "./CredentialOffer";
import { PresentationRequest } from "./PresentationRequest";
import { PresentationVerify } from "./PresentationVerify";

type MyPlugin = Plugin.ExtractExtension<typeof plugin>;

declare module "../../../utils/tasks" {
  interface Extension extends MyPlugin {}
}

const plugin = new Plugin()
  .extend("Anoncreds", new AnoncredsLoader());

plugin.register(Types.CREDENTIAL_ISSUE, CredentialIssue);
plugin.register(Types.CREDENTIAL_OFFER, CredentialOffer);
plugin.register(Types.PRESENTATION, PresentationVerify);
plugin.register(Types.PRESENTATION_REQUEST, PresentationRequest);

export default plugin;
