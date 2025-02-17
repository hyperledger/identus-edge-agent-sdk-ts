import { JsonObj, Task, asJsonObj } from "../../../../utils";
import { CreatePresentationDefinition } from "./CreatePresentationDefinition";
import { DIF } from "../types";

export class DIFModule extends Task.Runner {
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
