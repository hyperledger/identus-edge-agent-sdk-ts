import chai from "chai";
import * as sinon from "sinon";
import SinonChai from "sinon-chai";
import Apollo from "../../../apollo/Apollo";
import Castor from "../../../castor/Castor";
import * as Domain from "../../../domain";
import { DIDCommSecretsResolver } from "../../../mercury/didcomm/SecretsResolver";
import Pluto from "../../../pluto/Pluto";

chai.use(SinonChai);
const expect = chai.expect;

describe("Mercury DIDComm SecretsResolver", () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  const makeTestContext = () => {
    const apollo: Pick<Apollo, "createKeyPairFromPrivateKey" | "getPrivateJWKJson"> = {
      createKeyPairFromPrivateKey: (seed, privateKey) => ({ keyCurve: privateKey.keyCurve, privateKey, publicKey: privateKey }),
      getPrivateJWKJson: (id, keyPair) => `${id}`,
    };

    const castor: Pick<Castor, "getEcnumbasis"> = {
      getEcnumbasis: (did, keyPair) => `ecnum:${keyPair.keyCurve.curve}`
    };

    const pluto: Pick<Pluto, "getAllPeerDIDs"> = {
      getAllPeerDIDs: () => []
    };

    const secretsResolver = new DIDCommSecretsResolver(apollo as Apollo, castor as Castor, pluto as Pluto);

    return { apollo, castor, pluto, secretsResolver };
  };

  describe("find_secrets", () => {
    it("should return matched secret", async () => {
      const ctx = makeTestContext();
      const did = Domain.DID.fromString("did:test:example");
      const secret = `${did.toString()}#ecnum:${Domain.Curve.X25519}`;

      sandbox.stub(ctx.pluto, "getAllPeerDIDs").returns([
        new Domain.PeerDID(
          did,
          [
            { keyCurve: { curve: Domain.Curve.ED25519 }, value: new Uint8Array() },
            { keyCurve: { curve: Domain.Curve.SECP256K1 }, value: new Uint8Array() },
            { keyCurve: { curve: Domain.Curve.X25519 }, value: new Uint8Array() },
          ]
        )
      ]);

      const result = await ctx.secretsResolver.find_secrets([secret]);

      expect(result).to.have.lengthOf(1);
      expect(result).to.contain(secret);
    });

    // is this a bug - should we dedupe?
    it("should return matched secrets", async () => {
      const ctx = makeTestContext();
      const did = Domain.DID.fromString("did:test:example");
      const secret = `${did.toString()}#ecnum:${Domain.Curve.SECP256K1}`;

      sandbox.stub(ctx.pluto, "getAllPeerDIDs").returns([
        new Domain.PeerDID(
          did,
          [
            { keyCurve: { curve: Domain.Curve.ED25519 }, value: new Uint8Array() },
            { keyCurve: { curve: Domain.Curve.SECP256K1 }, value: new Uint8Array(1) },
            { keyCurve: { curve: Domain.Curve.X25519 }, value: new Uint8Array() },
            { keyCurve: { curve: Domain.Curve.SECP256K1 }, value: new Uint8Array(2) },
          ]
        )
      ]);

      const result = await ctx.secretsResolver.find_secrets([secret]);

      expect(result).to.have.lengthOf(2);
      expect(result).to.eql([secret, secret]);
    });

    it("should return empty array with unmatched secret", async () => {
      const ctx = makeTestContext();
      const did = Domain.DID.fromString("did:test:example");
      const secret = `unmatched`;

      sandbox.stub(ctx.pluto, "getAllPeerDIDs").returns([
        new Domain.PeerDID(
          did,
          [
            { keyCurve: { curve: Domain.Curve.ED25519 }, value: new Uint8Array() },
            { keyCurve: { curve: Domain.Curve.SECP256K1 }, value: new Uint8Array() },
            { keyCurve: { curve: Domain.Curve.X25519 }, value: new Uint8Array() },
          ]
        )
      ]);

      const result = await ctx.secretsResolver.find_secrets([secret]);

      expect(result).to.have.lengthOf(0);
    });
  });

  describe("get_secret", () => {
    it("should return matched secret", async () => {
      const ctx = makeTestContext();
      const did = Domain.DID.fromString("did:test:example");
      const secret = `${did.toString()}#ecnum:${Domain.Curve.X25519}`;
      const jwkValue = "privateJWKValue";

      sandbox.stub(ctx.apollo, "getPrivateJWKJson").returns(jwkValue);

      sandbox.stub(ctx.pluto, "getAllPeerDIDs").returns([
        new Domain.PeerDID(
          did,
          [
            { keyCurve: { curve: Domain.Curve.ED25519 }, value: new Uint8Array() },
            { keyCurve: { curve: Domain.Curve.SECP256K1 }, value: new Uint8Array() },
            { keyCurve: { curve: Domain.Curve.X25519 }, value: new Uint8Array() },
          ]
        )
      ]);

      const result = await ctx.secretsResolver.get_secret(secret);

      expect(result).not.to.be.null;
      expect(result).to.eql({
        id: secret,
        type: "JsonWebKey2020",
        privateKeyJwk: {
          format: "JWK",
          value: jwkValue
        }
      });
    });

    it("should return null when unmatched secret", async () => {
      const ctx = makeTestContext();
      const did = Domain.DID.fromString("did:test:example");
      const secret = `unmatched`;
      const jwkValue = "privateJWKValue";

      sandbox.stub(ctx.apollo, "getPrivateJWKJson").returns(jwkValue);

      sandbox.stub(ctx.pluto, "getAllPeerDIDs").returns([
        new Domain.PeerDID(
          did,
          [
            { keyCurve: { curve: Domain.Curve.ED25519 }, value: new Uint8Array() },
            { keyCurve: { curve: Domain.Curve.SECP256K1 }, value: new Uint8Array() },
            { keyCurve: { curve: Domain.Curve.X25519 }, value: new Uint8Array() },
          ]
        )
      ]);

      const result = await ctx.secretsResolver.get_secret(secret);

      expect(result).to.be.null;
    });
  });
});
