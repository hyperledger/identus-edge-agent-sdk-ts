import { describe, expect, test, beforeEach, vi } from 'vitest';

import { base64url } from "multiformats/bases/base64";
import { JWT } from "../../src/pollux/utils/jwt/JWT";
import { Apollo, Castor, Domain, Secp256k1PrivateKey } from "../../src";
import * as Fixtures from "../fixtures";
import { Task } from '../../src/utils';

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

  test("decode", async () => {
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

  test("sign - creates JWS string", async () => {
    vi.spyOn(plutoMock, "getDIDPrivateKeysByDID").mockResolvedValue([Fixtures.Keys.secp256K1.privateKey]);
    const result = await sut.signWithDID(Fixtures.DIDs.prismDIDDefault, { a: 1, b: 2 });

    expect(result).to.be.a("string");
    expect(result.split(".")).to.have.length(3);
  });

  describe("round trip", () => {
    const privateKey = Secp256k1PrivateKey.from.String("8bfd5ff83034bbc004950de2b3a02cdafbbff9faebcb63640c895959a2d3da24", "hex");
    const issuerDID = Domain.DID.from('did:prism:9e93a84d492c62e03ab114e0b7a7b4a6880cd0e079f358d2196dc9c312dadb90:Co0CCooCElwKB21hc3RlcjAQAUJPCglzZWNwMjU2azESIBG7LMd7RA5-ckcPQICROrUbKx35x4aFAXjt_zIoWKAbGiD9WlLNP0Lr7JyQ7Q6uoY-m2TnygmAf8EBBTHGYzxm4exJkCg9hdXRoZW50aWNhdGlvbjAQBEJPCglzZWNwMjU2azESIBG7LMd7RA5-ckcPQICROrUbKx35x4aFAXjt_zIoWKAbGiD9WlLNP0Lr7JyQ7Q6uoY-m2TnygmAf8EBBTHGYzxm4exJECghpc3N1aW5nMBACSjYKB0VkMjU1MTkSKzh0dUVjUDRsZFhMQlV6US1YdEpDS1AwUC14QU5acV9SUnZQSDBIYXFWTjg');
    const header = { kid: 123, abc: "456" };

    beforeEach(() => {
      vi.spyOn(plutoMock, "getDIDPrivateKeysByDID").mockResolvedValue([privateKey]);
    });

    test("sign > decode - expected values and verifies", async () => {
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
  });
});
