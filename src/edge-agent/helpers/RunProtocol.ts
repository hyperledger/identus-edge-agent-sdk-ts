import { Payload } from "../../domain/protocols/Payload";
import { JsonObj, isObject, notEmptyString, notNil } from "../../utils";
import { Task } from "../../utils/tasks";
import { DIDCommContext } from "../didcomm/Context";
import { JWT, SDJWT } from "../../pollux/utils/jwt";
import { Plugins } from "../../plugins";
import { Domain } from "../..";

interface IArgs<T extends string, D extends JsonObj> {
  type: T;
  pid: string;
  data: D;
}

type Args_CredentialIssue = IArgs<"credential-issue", {
  data: any;
  thid?: string;
}>;
type Args_CredentialOffer = IArgs<"credential-offer", {
  offer: any;
  thid?: string;
}>;
type Args_PresentationRequest = IArgs<"presentation-request", {
  credential: Domain.Credential;
  presentationRequest: any;
}>;
type Args_PresentationVerify = IArgs<"presentation-verify", {
  presentation: any;
  presentationRequest: any;
  thid?: string;
}>;
type Args_RevocationCheck = IArgs<"revocation-check", { credential: Domain.Credential; }>;

type Args =
  | Args_CredentialIssue
  | Args_CredentialOffer
  | Args_PresentationRequest
  | Args_PresentationVerify
  | Args_RevocationCheck;

export class RunProtocol extends Task<Payload, Args> {
  async run(ctx: DIDCommContext) {
    const protocolCtor = ctx.Plugins.findProtocol(this.args.type, this.args.pid);

    const internalModules: Plugins.InternalModules = {
      JWT: new JWT(),
      SDJWT: new SDJWT(),
    };

    ctx.extend(internalModules);

    const task = new protocolCtor(this.args.data);
    const result = await ctx.run(task);
    this.assertPayload(result);
    return result;
  }

  private assertPayload(value: unknown): asserts value is Payload {
    if (isObject(value) && notEmptyString(value.pid) && notNil(value.data)) {
      return;
    }

    throw new Error("invalid payload returned");
  }
}
