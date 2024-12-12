import { Pollux } from "../../../PlugPol";
import { OEA } from "../../oea/types";
import { Payload } from "../../../../domain/protocols/Payload";

interface Args {
  presentation: OEA.PresentationSubmission;
  presentationRequest: OEA.PresentationRequest;
}

export class PresentationVerify extends Pollux.Task<Args> {
  async run() {
    const presentation = this.args.presentation;
    const presentationRequest = this.args.presentationRequest;
    const valid = false;
    return Payload.make("valid", valid);
  }
}
