import { Plugin } from "../../../plugins";
import { JsonObj, Task, asJsonObj } from "../../../utils";
import { CreatePresentationDefinition } from "./CreatePresentationDefinition";
import { IsCredentialRevoked } from "./IsCredentialRevoked";
import { PresentationRequest } from "./PresentationRequest";
import { PresentationVerify } from "./PresentationVerify";
import { DIF } from "./types";

class DIFModule extends Task.Runner {
  clone() {
    return new DIFModule();
  }

  async createPresentationDefinition(
    claims: JsonObj<DIF.Presentation.Definition.Field.Filter>,
    opts?: {
      issuer?: string;
    }
  ) {
    const task = new CreatePresentationDefinition({ claims, ...asJsonObj(opts) });
    const result = await this.runTask(task);
    return result.data;
  }
}

const plugin = new Plugin()
  .extend("DIF", new DIFModule());

plugin.register(DIF.PRESENTATION_REQUEST, PresentationRequest);
plugin.register(DIF.PRESENTATION, PresentationVerify);

// ??? tmp workaround Revocation being extracted to separate handlers
plugin.register("revocation-check/prism/jwt", IsCredentialRevoked);

export default plugin;
