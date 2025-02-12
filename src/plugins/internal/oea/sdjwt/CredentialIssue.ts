import { Payload } from "../../../../domain/protocols/Payload";
import { SDJWTCredential } from "../../../../pollux/models/SDJWTVerifiableCredential";
import { Plugins } from "../../../../plugins";

interface Args {
  data: any;
}

export class CredentialIssue extends Plugins.Task<Args> {
  async run() {
    const jws = this.getJWS();
    // ??? use context.SDJWT
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
