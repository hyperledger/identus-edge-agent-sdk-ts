import { vi, describe, expect, test, beforeEach } from 'vitest';
import { JWTCredential, SDJWTCredential } from '../../../../src';
import { JWT, SDJWT } from "../../../../src/pollux/utils/jwt";
import { PresentationRequest } from '../../../../src/plugins/internal/oea/sdjwt';
import { Task } from '../../../../src/utils';
import { OEA } from '../../../../src/plugins/internal/oea/types';
import { Pluto } from '../../../../src/domain';
import { mockPluto } from '../../../fixtures/inmemory/factory';
import { CannotFindDIDPrivateKey } from '../../../../src/domain/models/errors/Agent';
import * as Fixtures from "../../../fixtures";
import { InvalidPresentationProofArgs } from '../../../../src/domain/models/errors/Pollux';

describe("Plugins - OEA", () => {
  let ctx: Task.Context;
  let pluto: Pluto;

  beforeEach(() => {
    pluto = mockPluto();

    ctx = Task.Context.make<any>({
      Pluto: pluto,
      JWT: new JWT(),
      SDJWT: new SDJWT(),
    });
  });

  describe("SDJWT", () => {
    describe("PresentationRequest", () => {
      test("Payload returned (OEA.PRISM_SDJWT, JWS)", async () => {
        vi.spyOn(pluto, "getDIDPrivateKeysByDID").mockResolvedValue([Fixtures.Keys.ed25519.privateKey]);

        const credential = SDJWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
        const presentationRequest = {} as any;
        const result = await ctx.run(new PresentationRequest({ credential, presentationRequest }));

        expect(result.pid).toEqual(OEA.PRISM_SDJWT);
        expect(result.data).toEqual(expect.stringContaining(""));
      });

      test("credential not SDJWTCredential - throws", async () => {
        const credential = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
        const presentationRequest = {} as any;

        const sut = ctx.run(new PresentationRequest({ credential, presentationRequest }));

        await expect(sut).rejects.toThrow(InvalidPresentationProofArgs);
      });

      test("privateKey not found - throws", async () => {
        vi.spyOn(pluto, "getDIDPrivateKeysByDID").mockResolvedValue([]);
        const credential = SDJWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
        const presentationRequest = {} as any;

        const sut = ctx.run(new PresentationRequest({ credential, presentationRequest }));

        expect(sut).rejects.toThrowError(CannotFindDIDPrivateKey);
      });

      test("Ed25519 privateKey not found - throws", async () => {
        vi.spyOn(pluto, "getDIDPrivateKeysByDID").mockResolvedValue([Fixtures.Keys.secp256K1.privateKey]);
        const credential = SDJWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
        const presentationRequest = {} as any;

        const sut = ctx.run(new PresentationRequest({ credential, presentationRequest }));

        expect(sut).rejects.toThrowError(CannotFindDIDPrivateKey);
      });
    });
  });
});
