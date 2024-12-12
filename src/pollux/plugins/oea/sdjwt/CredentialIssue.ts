import { Payload } from "../../../../domain/protocols/Payload";
import { SDJWTCredential } from "../../../models/SDJWTVerifiableCredential";
import { Pollux } from "../../../PlugPol";

interface Args {
  data: any;
}

export class CredentialIssue extends Pollux.Task<Args> {
  async run() {
    const jws = this.getJWS();
    // TODO use context.SDJWT
    const wrapCredential = SDJWTCredential.fromJWS(jws);
    return Payload.make("credential", wrapCredential);
  }

  private getJWS(): string {
    if (typeof this.args.data === "string") {
      return this.args.data;
    }

    if (
      this.args.data instanceof Buffer
      || this.args.data instanceof Uint8Array
    ) {
      return Buffer.from(this.args.data).toString();
    }

    return JSON.stringify(this.args.data);
  }
}
