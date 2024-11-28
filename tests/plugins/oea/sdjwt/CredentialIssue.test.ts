import { vi, describe, expect, test, beforeEach } from 'vitest';
import { Apollo, Castor, SDJWTCredential } from '../../../../src';
import { JWT, SDJWT } from "../../../../src/pollux/utils/jwt";
import { CredentialIssue } from '../../../../src/plugins/internal/oea/sdjwt';
import { Task } from '../../../../src/utils';
import * as Fixtures from "../../../fixtures";

describe("Plugins - OEA", () => {
  let ctx: Task.Context;

  beforeEach(() => {
    const apollo = new Apollo();
    const castor = new Castor(apollo);
    ctx = Task.Context.make<any>({
      Apollo: apollo,
      Castor: castor,
      JWT: new JWT(),
      SDJWT: new SDJWT(),
    });
  });

  describe("SDJWT", () => {
    describe("CredentialIssue", () => {
      test("data passed as Buffer - credential returned", async () => {
        const data = Buffer.from(Fixtures.Credentials.JWT.credentialPayloadEncoded);
        const result = await ctx.run(new CredentialIssue({ data }));

        expect(result.pid).toBe("credential");
        expect(result.data).toBeInstanceOf(SDJWTCredential);
      });

      test("data passed as string - credential returned", async () => {
        const data = Fixtures.Credentials.JWT.credentialPayloadEncoded;
        const result = await ctx.run(new CredentialIssue({ data }));

        expect(result.pid).toBe("credential");
        expect(result.data).toBeInstanceOf(SDJWTCredential);
      });
    });
  });
});
