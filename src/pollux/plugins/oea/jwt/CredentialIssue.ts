import { Payload } from "../../../../domain/protocols/Payload";
import { JWTCredential } from "../../../models/JWTVerifiableCredential";
import { Pollux } from "../../../PlugPol";

interface Args {
  data: any;
}

export class CredentialIssue extends Pollux.Task<Args> {
  async run() {
    const jws = this.getJWS();
    // TODO use context.JWT
    const wrapCredential = JWTCredential.fromJWS(jws);
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
