import { Plugin } from "../../../plugins";
import { OEA } from "./types";
import * as jwt from "./jwt";
import * as sdjwt from "./sdjwt";

// Register protocol handlers
// or export registerable handler plugin
const plugin = new Plugin();

// jwt handlers
plugin.register(`credential-issue/${OEA.PRISM_JWT}`, jwt.CredentialIssue);
plugin.register(`credential-offer/${OEA.PRISM_JWT}`, jwt.CredentialOffer);
plugin.register(`presentation-request/${OEA.PRISM_JWT}`, jwt.PresentationRequest);
plugin.register(`presentation-submission/${OEA.PRISM_JWT}`, jwt.PresentationVerify);

// sdjwt handlers
plugin.register(`credential-issue/${OEA.PRISM_SDJWT}`, sdjwt.CredentialIssue);
plugin.register(`credential-offer/${OEA.PRISM_SDJWT}`, sdjwt.CredentialOffer);
plugin.register(`presentation-request/${OEA.PRISM_SDJWT}`, sdjwt.PresentationRequest);
plugin.register(`presentation-submission/${OEA.PRISM_SDJWT}`, sdjwt.PresentationVerify);

export default plugin;
