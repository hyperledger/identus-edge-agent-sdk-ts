import { base64 } from "multiformats/bases/base64";
import * as Domain from "../../domain";
import { JsonObj, asJsonObj, expect, isObject, isString } from "../../utils";
import { Task } from "../../utils/tasks";
import { ProtocolType } from "../protocols/ProtocolTypes";
import { ParsePrismInvitation } from "./ParsePrismInvitation";
import { InvalidURLError, InvitationIsInvalidError } from "../../domain/models/errors/Agent";
import { ParseOOBInvitation } from "./ParseOOBInvitation";
import { InvitationType } from "../types";

/**
 * Attempt to parse a given invitation based on its Type
 * handle different encodings
 */

interface Args {
  value: string | URL | JsonObj;
}

export class ParseInvitation extends Task<InvitationType, Args> {
  async run(ctx: Task.Context) {
    const json = this.decode();
    const type = json.type ?? json.piuri;

    switch (type) {
      case ProtocolType.PrismOnboarding:
        return ctx.run(new ParsePrismInvitation({ value: json }));
      case ProtocolType.Didcomminvitation:
        return ctx.run(new ParseOOBInvitation({ value: json }));
    }

    throw new Domain.AgentError.UnknownInvitationTypeError();
  }

  private decode() {
    if (this.args.value instanceof URL) {
      return expect(this.tryDecodeUrl(this.args.value), InvitationIsInvalidError);
    }

    if (isObject(this.args.value)) {
      return this.args.value;
    }

    if (isString(this.args.value)) {
      return expect(
        this.tryDecodeUrl(this.args.value) ?? this.tryDecodeB64(this.args.value),
        InvitationIsInvalidError
      );
    }

    throw new InvitationIsInvalidError();
  }

  private tryDecodeUrl(value: string | URL) {
    try {
      const url = new URL(value);
      const oob = expect(url.searchParams.get("_oob"), InvalidURLError);
      return this.tryDecodeB64(oob);
    }
    catch {
      return null;
    }
  }

  private tryDecodeB64(value: string) {
    try {
      const decoded = base64.baseDecode(value);
      const data = Buffer.from(decoded).toString();
      return asJsonObj(data);
    }
    catch {
      return null;
    }
  }
}
