import * as TB from "@sinclair/typebox";
import * as Domain from "../../../domain";
import { CredentialRequest } from "../protocols/CredentialRequest";
import { Task } from "../../../utils/tasks";
import { validate } from "../../../utils";
import { JWTCredential } from "../../../pollux/models/JWTVerifiableCredential";

interface Args {
  request: CredentialRequest;
}

export class HandleCredentialRequest extends Task<Domain.Credential, Args> {
  async run(ctx: Task.Context) {
    const response = await ctx.Api.request(
      this.args.request.method,
      this.args.request.url.href,
      undefined,
      new Map(this.args.request.headers),
      this.args.request.params
    );

    validate(response.body, TB.Object({ credential: TB.String() }));

    const credential = JWTCredential.fromJWS(response.body.credential);

    return credential as Domain.Credential;
  }
}
