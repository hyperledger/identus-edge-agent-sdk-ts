import { describe, expect, test, beforeEach, vi } from 'vitest';
import { base64url } from "multiformats/bases/base64";
import { SDJWT } from "../../src/pollux/utils/jwt/SDJWT";
import { Apollo, Castor, Domain, Secp256k1PrivateKey } from "../../src";
import * as Fixtures from "../fixtures";
import { Task } from '../../src/utils';

describe("Domain - SDJWT", () => {
  let sut: SDJWT;
  let apollo: Domain.Apollo;
  let castor: Domain.Castor;
  let plutoMock: Domain.Pluto;

  beforeEach(() => {
    apollo = new Apollo();
    castor = new Castor(apollo);
    plutoMock = { getDIDPrivateKeysByDID: vi.fn() } as any;
    const ctx = Task.Context.make({
      Apollo: apollo,
      Castor: castor,
      Pluto: plutoMock,
    });
    sut = new SDJWT().withContext(ctx) as SDJWT;
  });

  test("decode", async () => {
    const header = { a: 1 };
    const payload = { b: 2 };
    const signature = "c3";

    const b64Header = base64url.baseEncode(Buffer.from(JSON.stringify(header)));
    const b64Payload = base64url.baseEncode(Buffer.from(JSON.stringify(payload)));
    const jws = `${b64Header}.${b64Payload}.${signature}`;

    const result = sut.decode(jws);

    expect(result).to.be.an("object");
    expect(result).to.be.an("object");
    expect(result.disclosures).toEqual([]);
    expect(result.jwt).toEqual(expect.objectContaining({ header, payload, signature }));
  });

  test("decode with invalid jws - throws", async () => {
    expect(() => sut.decode(`a.b.c.d`)).toThrow();
  });

  describe("verify", () => {
    test("issuerDID resolves with no verificationMethods - throws", async () => {
      // mock ResolveDID return value
      vi.spyOn(sut as any, "runTask").mockResolvedValue({});

      const result = sut.verify({
        jws: Fixtures.Credentials.JWT.credentialPayloadEncoded,
        issuerDID: Fixtures.DIDs.peerDID1
      });

      expect(result).rejects.toThrow("Invalid did document");
    });

    test("issuerDID doesnt match jwt issuer - returns false", async () => {
      const result = sut.verify({
        jws: Fixtures.Credentials.JWT.credentialPayloadEncoded,
        issuerDID: Fixtures.DIDs.peerDID3
      });

      expect(result).rejects.toThrow("Invalid issuer");
    });

  });
});
