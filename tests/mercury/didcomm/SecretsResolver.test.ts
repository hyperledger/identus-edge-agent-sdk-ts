import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import chai from "chai";
import * as sinon from "sinon";
import SinonChai from "sinon-chai";
import Apollo from "../../../src/apollo/Apollo";
import Castor from "../../../src/castor/Castor";
import Pluto from "../../../src/pluto/Pluto";
import * as Domain from "../../../src/domain";
import { DIDCommSecretsResolver } from "../../../src/mercury/didcomm/SecretsResolver";
import { Curve, PrivateKey } from "../../../src/domain";

chai.use(SinonChai);

describe("Mercury DIDComm SecretsResolver", () => {
  let sandbox: sinon.SinonSandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => {
    sandbox.restore();
  });

  const makeTestContext = () => {
    const apollo: Pick<Apollo, "createPrivateKey" | "getPrivateJWKJson"> = {
      createPrivateKey: (parameters: { [name: string]: any }) => {
        return new (class extends PrivateKey {
          publicKey(): Domain.PublicKey {
            return new (class extends Domain.PublicKey {
              type: Domain.KeyTypes;
              keySpecification: Map<string, string>;
              size: number;
              raw: Uint8Array = new Uint8Array();
              getEncoded(): Uint8Array {
                return this.raw;
              }
            })();
          }
          type: Domain.KeyTypes;
          keySpecification: Map<string, string>;
          size: number;
          raw: Uint8Array = new Uint8Array();
          getEncoded(): Uint8Array {
            return this.raw;
          }
        })();
      },
      getPrivateJWKJson: (id) => `${id}`,
    };

    const castor: Pick<Castor, "getEcnumbasis" | "resolveDID"> = {
      getEcnumbasis: (did, publicKey) => `${publicKey.curve}`,
      resolveDID: async () => ({}) as Domain.DIDDocument,
    };

    const pluto: Pick<Pluto, "getAllPeerDIDs"> = {
      getAllPeerDIDs: async () => [],
    };

    const secretsResolver = new DIDCommSecretsResolver(
      apollo as Apollo,
      castor as Castor,
      pluto as Pluto
    );

    return { apollo, castor, pluto, secretsResolver };
  };

  describe("find_secrets", () => {
    it("should return matched secret", async () => {
      const ctx = makeTestContext();
      const did = Domain.DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );
      const secret = did.toString();

      sandbox.stub(ctx.pluto, "getAllPeerDIDs").resolves([
        // TODO: update when PeerDID Types are fixed
        { did: secret } as any,
      ]);

      const result = await ctx.secretsResolver.find_secrets([secret]);

      expect(result).to.have.lengthOf(1);
      expect(result).to.contain(secret);
    });

    it("should return matched secret - no duplicates", async () => {
      const ctx = makeTestContext();
      const did = Domain.DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );
      const secret = did.toString();

      sandbox
        .stub(ctx.pluto, "getAllPeerDIDs")
        .resolves([{ did: secret } as any, { did: secret } as any]);

      const result = await ctx.secretsResolver.find_secrets([secret]);

      expect(result).to.have.lengthOf(1);
      expect(result).to.eql([secret]);
    });

    it("should return empty array with unmatched secret", async () => {
      const ctx = makeTestContext();
      const did = Domain.DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );
      const secret = did.toString();

      sandbox.stub(ctx.pluto, "getAllPeerDIDs").resolves([]);

      const result = await ctx.secretsResolver.find_secrets([secret]);

      expect(result).to.have.lengthOf(0);
    });
  });

  describe("get_secret", () => {
    it("should return matched secret", async () => {
      const ctx = makeTestContext();
      const did = Domain.DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );
      const secret = did.toString();
      const publicKeyJwk: Domain.PublicKeyJWK = {
        crv: Domain.Curve.X25519,
        kid: "kid",
        kty: "OKP",
        x: Buffer.from(new Uint8Array()).toString("base64url"),
      };
      const ecnum = "ecnum123";
      const peerDid = {
        did: secret,
        curve: Curve.X25519,
        privateKeys: [
          {
            keyCurve: {
              curve: Curve.X25519,
            },
            value: new Uint8Array(),
          },
        ],
      } as any;

      sandbox.stub(ctx.pluto, "getAllPeerDIDs").resolves([peerDid]);

      sandbox
        .stub(ctx.castor, "resolveDID")
        .resolves(
          new Domain.DIDDocument(did, [
            new Domain.VerificationMethods([
              new Domain.VerificationMethod(
                secret,
                "controller",
                "type",
                publicKeyJwk
              ),
            ]),
          ])
        );

      sandbox.stub(ctx.apollo, "createPrivateKey").returns(
        new (class extends PrivateKey {
          publicKey(): Domain.PublicKey {
            return new (class extends Domain.PublicKey {
              type: Domain.KeyTypes;
              keySpecification: Map<string, string>;
              size: number;
              raw: Uint8Array = new Uint8Array();
              getEncoded(): Uint8Array {
                return this.raw;
              }
            })();
          }
          type: Domain.KeyTypes;
          keySpecification: Map<string, string>;
          size: number;
          raw: Uint8Array = new Uint8Array();
          getEncoded(): Uint8Array {
            return this.raw;
          }
        })()
      );

      sandbox.stub(ctx.castor, "getEcnumbasis").returns(ecnum);

      const result = await ctx.secretsResolver.get_secret(secret);
      const [privateKey] = peerDid.privateKeys;

      expect(result).not.to.be.null;
      expect(result).to.eql({
        id: `${secret}#${ecnum}`,
        type: "JsonWebKey2020",
        privateKeyJwk: {
          crv: peerDid.curve,
          kty: "OKP",
          d: privateKey.value.toString(),
          x: publicKeyJwk.x as any,
        },
      });
    });

    it("should return null when unmatched secret", async () => {
      const ctx = makeTestContext();
      const did = Domain.DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );
      const secret = did.toString();

      sandbox.stub(ctx.pluto, "getAllPeerDIDs").resolves([]);

      const result = await ctx.secretsResolver.get_secret(secret);

      expect(result).to.be.null;
    });
  });
});
