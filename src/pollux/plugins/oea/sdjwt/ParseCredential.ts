import { Pollux } from "../../../types";
import { SDJWTCredential } from "../../../models/SDJWTVerifiableCredential";

export interface Args {
  value: unknown;
}

export class ParseCredential extends Pollux.ParseCredential<Args> {
  async run() {
    const jws = this.getJWS();
    const credential = SDJWTCredential.fromJWS(jws);
    return credential;
  }

  private getJWS(): string {
    if (typeof this.args.value === "string") {
      return this.args.value;
    }

    if (
      this.args.value instanceof Buffer
      || this.args.value instanceof Uint8Array
    ) {
      return Buffer.from(this.args.value).toString();
    }

    return JSON.stringify(this.args.value);
  }
}
