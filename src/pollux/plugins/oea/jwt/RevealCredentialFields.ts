import { Pollux } from "../../../types";
import { expect } from "../../../../utils";

export class RevealCredentialFields extends Pollux.RevealCredentialFields {
  async run() {
    const claim = expect(this.args.credential.claims.at(0), "Invalid Claims");
    return claim;
  }
}
