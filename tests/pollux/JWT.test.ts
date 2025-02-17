import { describe, expect, test, beforeEach, vi } from 'vitest';
import { base64url } from "multiformats/bases/base64";
import { JWT } from "../../src/pollux/utils/jwt/JWT";
import { Apollo, Castor, Domain, Secp256k1PrivateKey } from "../../src";
import * as Fixtures from "../fixtures";
import { Task } from '../../src/utils';
import { InvalidJWTString } from '../../src/domain/models/errors/Pollux';

describe("Domain - JWT", () => {
  let sut: JWT;
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
    sut = new JWT().withContext(ctx) as JWT;
  });

  describe("sign", () => {
    test("returns JWS string", async () => {
      const result = await sut.signWithDID(Fixtures.DIDs.prismDIDDefault, { a: 1, b: 2 }, {}, Fixtures.Keys.secp256K1.privateKey);

      expect(result).to.be.a("string");
      expect(result.split(".")).to.have.length(3);
    });

    test("no privateKey given - looks for in Pluto", async () => {
      vi.spyOn(plutoMock, "getDIDPrivateKeysByDID").mockResolvedValue([Fixtures.Keys.secp256K1.privateKey]);
      const result = await sut.signWithDID(Fixtures.DIDs.prismDIDDefault, { a: 1, b: 2 });

      expect(result).to.be.a("string");
      expect(result.split(".")).to.have.length(3);
    });

    test("no key found - throws", async () => {
      vi.spyOn(plutoMock, "getDIDPrivateKeysByDID").mockResolvedValue([]);
      const result = sut.signWithDID(Fixtures.DIDs.prismDIDDefault, { a: 1, b: 2 });

      await expect(result).rejects.toThrow("-1: key not found");
    });

    test("non signable key used - throws", async () => {
      const result = sut.signWithDID(Fixtures.DIDs.prismDIDDefault, { payload: 123 }, {}, Fixtures.Keys.x25519.privateKey);

      await expect(result).rejects.toThrow("Key is not signable");
    });
  });

  describe("decode", () => {
    test("valid jws - returns expected values", async () => {
      const header = { a: 1 };
      const payload = { b: 2 };
      const signature = "c3";

      const b64Header = base64url.baseEncode(Buffer.from(JSON.stringify(header)));
      const b64Payload = base64url.baseEncode(Buffer.from(JSON.stringify(payload)));
      const jws = `${b64Header}.${b64Payload}.${signature}`;

      const result = await sut.decode(jws);

      expect(result).to.be.an("object");
      expect(result.header).to.deep.eq(header);
      expect(result.payload).to.deep.eq(payload);
      expect(result.signature).to.deep.eq(signature);
    });

    test("invalid jws - throws", async () => {
      const result = sut.decode(`a.b.c.d`);
      await expect(result).rejects.toThrow(InvalidJWTString);
    });
  });

  describe("verify", () => {
    test("correct issuerDID for jws given - returns true", async () => {
      // values from cloud agent
      const jws = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpc3MiOiJkaWQ6cHJpc206NTg5Mzc5N2RiNzk0NzRmMWRjMmFkN2E2OWE5NTZlNmQ3MWY0YjhjY2Y0ZDdiYTJmMzc4ZGYwODE1ZjdmN2U3MTpDb1FDQ29FQ0Vqb0tCbUYxZEdndE1SQUVTaTRLQ1hObFkzQXlOVFpyTVJJaEFqYTQ4N3N6MDJrUExIOTBlYlZFMkNzRG1CWi1JU0w4dmZsY19SNEE0TE95RWpzS0IybHpjM1ZsTFRFUUFrb3VDZ2x6WldOd01qVTJhekVTSVFMbVRnd0ZMeHU4WV9BWGpqU05CbjhHVE9GYWZnS0s1Mm9yVFFYTG56UzlRUkk3Q2dkdFlYTjBaWEl3RUFGS0xnb0pjMlZqY0RJMU5tc3hFaUVENzN1NEdpSnJnakhPT0kxOEZvVkNOeDRYTTFNeGRaZnBDeVQ3NmlNNzV3VWFTUW9PWVdkbGJuUXRZbUZ6WlMxMWNtd1NFRXhwYm10bFpGSmxjMjkxY21ObFZqRWFKV2gwZEhBNkx5OHhPVEl1TVRZNExqRXVNVEEzT2pnd09UQXZZMnh2ZFdRdFlXZGxiblEiLCJzdWIiOiJkaWQ6cHJpc206NzEwYWEzNzMyOTYwNDRhMGYxMDZiYzQwNmJmNjMyNGEzNmNiNTY1NzY2ODgxZjc5M2FiNGY2Mjg5NGQzMTE3OTpDc2tCQ3NZQkVsMEtDRzFoYzNSbGNpMHdFQUZDVHdvSmMyVmpjREkxTm1zeEVpQjJUZ0JNemk3MzlpblBpclNRMktOQ2NsNVBQN3JrN2dHZUM5MVlQTHE1NlJvZzNNNy1kay1XdkFwVV9IQVBocEZpc1RobDA2TUc4VTlrT1FMMjY1Z09tZWdTWlFvUVlYVjBhR1Z1ZEdsallYUnBiMjR0TUJBRVFrOEtDWE5sWTNBeU5UWnJNUklnZGs0QVRNNHU5X1lwejRxMGtOaWpRbkplVHotNjVPNEJuZ3ZkV0R5NnVla2FJTnpPX25aUGxyd0tWUHh3RDRhUllyRTRaZE9qQnZGUFpEa0M5dXVZRHBubyIsIm5iZiI6MTczMzc1NDI4NiwidmMiOnsiY3JlZGVudGlhbFN1YmplY3QiOnsiZW1haWxBZGRyZXNzIjoiand0QHdvbmRlcmxhbmQuY29tIiwiZmFtaWx5TmFtZSI6IkpXVCIsImlkIjoiZGlkOnByaXNtOjcxMGFhMzczMjk2MDQ0YTBmMTA2YmM0MDZiZjYzMjRhMzZjYjU2NTc2Njg4MWY3OTNhYjRmNjI4OTRkMzExNzk6Q3NrQkNzWUJFbDBLQ0cxaGMzUmxjaTB3RUFGQ1R3b0pjMlZqY0RJMU5tc3hFaUIyVGdCTXppNzM5aW5QaXJTUTJLTkNjbDVQUDdyazdnR2VDOTFZUExxNTZSb2czTTctZGstV3ZBcFVfSEFQaHBGaXNUaGwwNk1HOFU5a09RTDI2NWdPbWVnU1pRb1FZWFYwYUdWdWRHbGpZWFJwYjI0dE1CQUVRazhLQ1hObFkzQXlOVFpyTVJJZ2RrNEFUTTR1OV9ZcHo0cTBrTmlqUW5KZVR6LTY1TzRCbmd2ZFdEeTZ1ZWthSU56T19uWlBscndLVlB4d0Q0YVJZckU0WmRPakJ2RlBaRGtDOXV1WURwbm8ifSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCJdLCJAY29udGV4dCI6WyJodHRwczpcL1wvd3d3LnczLm9yZ1wvMjAxOFwvY3JlZGVudGlhbHNcL3YxIl0sImlzc3VlciI6eyJpZCI6ImRpZDpwcmlzbTo1ODkzNzk3ZGI3OTQ3NGYxZGMyYWQ3YTY5YTk1NmU2ZDcxZjRiOGNjZjRkN2JhMmYzNzhkZjA4MTVmN2Y3ZTcxOkNvUUNDb0VDRWpvS0JtRjFkR2d0TVJBRVNpNEtDWE5sWTNBeU5UWnJNUkloQWphNDg3c3owMmtQTEg5MGViVkUyQ3NEbUJaLUlTTDh2ZmxjX1I0QTRMT3lFanNLQjJsemMzVmxMVEVRQWtvdUNnbHpaV053TWpVMmF6RVNJUUxtVGd3Rkx4dThZX0FYampTTkJuOEdUT0ZhZmdLSzUyb3JUUVhMbnpTOVFSSTdDZ2R0WVhOMFpYSXdFQUZLTGdvSmMyVmpjREkxTm1zeEVpRUQ3M3U0R2lKcmdqSE9PSTE4Rm9WQ054NFhNMU14ZFpmcEN5VDc2aU03NXdVYVNRb09ZV2RsYm5RdFltRnpaUzExY213U0VFeHBibXRsWkZKbGMyOTFjbU5sVmpFYUpXaDBkSEE2THk4eE9USXVNVFk0TGpFdU1UQTNPamd3T1RBdlkyeHZkV1F0WVdkbGJuUSIsInR5cGUiOiJQcm9maWxlIn0sImNyZWRlbnRpYWxTdGF0dXMiOnsic3RhdHVzUHVycG9zZSI6IlJldm9jYXRpb24iLCJzdGF0dXNMaXN0SW5kZXgiOjcsImlkIjoiaHR0cDpcL1wvMTkyLjE2OC4xLjEwNzo4MDkwXC9jbG91ZC1hZ2VudFwvY3JlZGVudGlhbC1zdGF0dXNcLzVmYTk1ZTY1LTAyNzgtNGRjYS1iMDc4LWU3NjRlNmRkNjE3YiM3IiwidHlwZSI6IlN0YXR1c0xpc3QyMDIxRW50cnkiLCJzdGF0dXNMaXN0Q3JlZGVudGlhbCI6Imh0dHA6XC9cLzE5Mi4xNjguMS4xMDc6ODA5MFwvY2xvdWQtYWdlbnRcL2NyZWRlbnRpYWwtc3RhdHVzXC81ZmE5NWU2NS0wMjc4LTRkY2EtYjA3OC1lNzY0ZTZkZDYxN2IifX19.wNEnyh08FWI493499HdN7ZsPWtier5LLG_t8nIqn4JN6AEi71aeoifIY9XaKyARcVtZMNGw6SaMyl5HBJd_EFg';
      const issuerDID = Domain.DID.from('did:prism:5893797db79474f1dc2ad7a69a956e6d71f4b8ccf4d7ba2f378df0815f7f7e71:CoQCCoECEjoKBmF1dGgtMRAESi4KCXNlY3AyNTZrMRIhAja487sz02kPLH90ebVE2CsDmBZ-ISL8vflc_R4A4LOyEjsKB2lzc3VlLTEQAkouCglzZWNwMjU2azESIQLmTgwFLxu8Y_AXjjSNBn8GTOFafgKK52orTQXLnzS9QRI7CgdtYXN0ZXIwEAFKLgoJc2VjcDI1NmsxEiED73u4GiJrgjHOOI18FoVCNx4XM1MxdZfpCyT76iM75wUaSQoOYWdlbnQtYmFzZS11cmwSEExpbmtlZFJlc291cmNlVjEaJWh0dHA6Ly8xOTIuMTY4LjEuMTA3OjgwOTAvY2xvdWQtYWdlbnQ');
      const result = await sut.verify({ jws, issuerDID });

      expect(result).toBe(true);
    });

    test("issuerDID resolves with no verificationMethods - returns false", async () => {
      // mock ResolveDID return value
      vi.spyOn(sut as any, "runTask").mockResolvedValue({});

      const result = await sut.verify({
        jws: Fixtures.Credentials.JWT.credentialPayloadEncoded,
        issuerDID: Fixtures.DIDs.peerDID1
      });

      expect(result).toBe(false);
    });

    test("issuerDID doesnt match jwt issuer - returns false", async () => {
      const result = await sut.verify({
        jws: Fixtures.Credentials.JWT.credentialPayloadEncoded,
        issuerDID: Fixtures.DIDs.peerDID3
      });

      expect(result).toBe(false);
    });

    test("holderDID doesnt match jwt subject - returns false", async () => {
      const result = await sut.verify({
        jws: Fixtures.Credentials.JWT.credentialPayloadEncoded,
        issuerDID: Domain.DID.from(Fixtures.Credentials.JWT.credentialPayload.iss),
        holderDID: Fixtures.DIDs.peerDID1
      });

      expect(result).toBe(false);
    });
  });

  describe("round trip", () => {
    const privateKey = Secp256k1PrivateKey.from.String("8bfd5ff83034bbc004950de2b3a02cdafbbff9faebcb63640c895959a2d3da24", "hex");
    const issuerDID = Domain.DID.from('did:prism:9e93a84d492c62e03ab114e0b7a7b4a6880cd0e079f358d2196dc9c312dadb90:Co0CCooCElwKB21hc3RlcjAQAUJPCglzZWNwMjU2azESIBG7LMd7RA5-ckcPQICROrUbKx35x4aFAXjt_zIoWKAbGiD9WlLNP0Lr7JyQ7Q6uoY-m2TnygmAf8EBBTHGYzxm4exJkCg9hdXRoZW50aWNhdGlvbjAQBEJPCglzZWNwMjU2azESIBG7LMd7RA5-ckcPQICROrUbKx35x4aFAXjt_zIoWKAbGiD9WlLNP0Lr7JyQ7Q6uoY-m2TnygmAf8EBBTHGYzxm4exJECghpc3N1aW5nMBACSjYKB0VkMjU1MTkSKzh0dUVjUDRsZFhMQlV6US1YdEpDS1AwUC14QU5acV9SUnZQSDBIYXFWTjg');
    const header = { kid: 123, abc: "456" };

    beforeEach(() => {
      vi.spyOn(plutoMock, "getDIDPrivateKeysByDID").mockResolvedValue([privateKey]);
    });

    test("headers - default values", async () => {
      const jws = await sut.signWithDID(issuerDID, {});
      const decoded = await sut.decode(jws);

      expect(decoded.header).toHaveProperty('alg', 'ES256K');
      expect(decoded.header).toHaveProperty('typ', 'JWT');
    });

    test("payload - expected values", async () => {
      const payload = { round: "trip" };

      const jws = await sut.signWithDID(issuerDID, payload);
      const decoded = await sut.decode(jws);

      // iss added by default
      expect(decoded.payload).to.have.property("iss", issuerDID.toString());
      expect(decoded.payload).to.have.property("round", payload.round);
    });

    test("signature - verifies", async () => {
      const jws = await sut.signWithDID(issuerDID, { shouldbe: true });
      const decoded = await sut.decode(jws);
      const verified = await privateKey.publicKey().verify(
        Buffer.from(decoded.data),
        Buffer.from(base64url.baseDecode(decoded.signature))
      );

      expect(verified).to.be.true;
    });

    test("sign > decode - Secp256k1 - expected values and verifies", async () => {
      const payload = { round: "trip" };

      const jws = await sut.signWithDID(issuerDID, payload, header);
      const decoded = await sut.decode(jws);

      expect(decoded).to.be.an("object");
      expect(decoded.header).to.deep.eq({ alg: 'ES256K', typ: 'JWT', ...header });
      expect(decoded.payload).to.have.property("round", payload.round);
      expect(decoded.payload).to.have.property("iss", issuerDID.toString());

      const verified = await privateKey.publicKey().verify(
        Buffer.from(decoded.data),
        Buffer.from(base64url.baseDecode(decoded.signature))
      );
      expect(verified).to.be.true;
    });

    test("sign > decode - Ed25519 - expected values and verifies", async () => {
      const ed25519Did = Domain.DID.from("did:prism:fc9fcaead407285991cdf1d27819720d8923e96274794c24977045e00b72e4c7:CqUBCqIBEl0KCG1hc3Rlci0wEAFCTwoJc2VjcDI1NmsxEiD9IDIUwFTpO0oFkZbs5niSI7ZtvmDHOgG6w93jyiUI_hog2ZbGuaULlxsyr4CtdA_Es7g74e_buaDAe_mXiTQIfosSQQoQYXV0aGVudGljYXRpb24tMBAESisKB0VkMjU1MTkSIHZuX9hnUeQWh6UcQfG0xJbxP9ICAtqeNODLMfbMCfde");
      const payload = { round: "trip" };

      const jws = await sut.signWithDID(ed25519Did, payload, header, Fixtures.Keys.ed25519.privateKey);
      const decoded = await sut.decode(jws);

      expect(decoded).to.be.an("object");
      expect(decoded.header).to.deep.eq({ alg: 'EdDSA', typ: 'JWT', ...header });
      expect(decoded.payload).to.have.property("round", payload.round);
      expect(decoded.payload).to.have.property("iss", ed25519Did.toString());

      const verified = await Fixtures.Keys.ed25519.privateKey.publicKey().verify(
        Buffer.from(decoded.data),
        Buffer.from(base64url.baseDecode(decoded.signature))
      );
      expect(verified).to.be.true;
    });
  });
});
