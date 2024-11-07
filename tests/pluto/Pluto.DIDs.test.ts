import { describe, expect, test, beforeEach } from 'vitest';
import { Pluto } from "../../src/pluto/Pluto";
import * as Domain from "../../src/domain";
import { Apollo, PeerDID, RIDBStore, X25519PrivateKey } from "../../src";
import * as Fixtures from "../fixtures";

describe("Pluto", () => {
  let instance: Domain.Pluto;

  beforeEach(async () => {
    const apollo = new Apollo();
    const store = new RIDBStore();
    instance = new Pluto(store, apollo);
    await instance.start({
      password: 'random12434',
    });
  });

  describe("DIDs", () => {
    describe("PrismDIDs", () => {
      test("uuid set on Domain instance - same after store", async () => {
        const sutDID = Domain.DID.from("did:prism:mock1");
        const sutKey = new X25519PrivateKey(Fixtures.Keys.x25519.privateKey.raw);
        const uuidDID = sutDID.uuid;
        const uuidKey = sutKey.uuid;
        expect(uuidDID).to.be.a.string;
        expect(uuidKey).to.be.a.string;
        await instance.storePrismDID(sutDID, sutKey);
        expect(sutDID.uuid).to.be.a.string;
        expect(sutKey.uuid).to.be.a.string;
        expect(sutDID.uuid).to.eql(uuidDID);
        expect(sutKey.uuid).to.eql(uuidKey);
      });

      test("Retrieved should match Stored", async () => {
        const sutDID = Domain.DID.from("did:prism:mock2");
        const sutKey = new X25519PrivateKey(Fixtures.Keys.x25519.privateKey.raw);

        await instance.storePrismDID(sutDID, sutKey);
        const results = await instance.getAllPrismDIDs();

        expect(results).to.be.an("array");
        expect(results).to.have.length(1);
        const sutOut = results[0];
        expect(sutOut).to.be.instanceOf(Domain.PrismDID);
        expect(sutOut?.did.uuid).to.eql(sutDID.uuid);
        expect(sutOut?.did.method).to.eql(sutDID.method);
        expect(sutOut?.did.methodId).to.eql(sutDID.methodId);
        expect(sutOut?.did.schema).to.eql(sutDID.schema);
        expect(sutOut?.did.toString()).to.eql(sutDID.toString());

        // expect(sutOut?.privateKey).to.eql(sutKey.curve);
        const keyOut = sutOut.privateKey as any as X25519PrivateKey;
        expect(keyOut).to.be.instanceOf(X25519PrivateKey);
        expect(keyOut.uuid).to.eql(sutKey.uuid);
        expect(keyOut.raw).to.eql(sutKey.raw);
        expect(keyOut.curve).to.eql(sutKey.curve);
        expect(keyOut.index).to.eql(sutKey.index);
        expect(keyOut.keySpecification).to.eql(sutKey.keySpecification);
        expect(keyOut.recoveryId).to.eql(sutKey.recoveryId);
        expect(keyOut.size).to.eql(sutKey.size);
        expect(keyOut.type).to.eql(sutKey.type);
      });
    });

    describe("PeerDIDs", () => {
      test("uuid set on Domain instance - same after store", async () => {
        const sutDID = Domain.DID.from(Fixtures.DIDs.peerDID1.toString());
        const sutKey = new X25519PrivateKey(Fixtures.Keys.x25519.privateKey.raw);
        const uuidDID = sutDID.uuid;
        const uuidKey = sutKey.uuid;
        expect(sutDID.uuid).to.be.a.string;
        expect(sutKey.uuid).to.be.a.string;

        await instance.storePeerDID(sutDID, [sutKey]);
        expect(sutDID.uuid).to.be.a.string;
        expect(sutKey.uuid).to.be.a.string;
        expect(sutDID.uuid).to.eql(uuidDID);
        expect(sutKey.uuid).to.eql(uuidKey);
      });

      test("Retrieved should match Stored", async () => {
        const sutDID = Domain.DID.from(Fixtures.DIDs.peerDID1.toString());
        const sutKey = new X25519PrivateKey(Fixtures.Keys.x25519.privateKey.raw);

        await instance.storePeerDID(sutDID, [sutKey]);
        const results = await instance.getAllPeerDIDs();

        expect(results).to.be.an("array");
        const sutOut = results[0];
        expect(sutOut).to.be.instanceOf(PeerDID);
        expect(sutOut?.did.uuid).to.eql(sutDID.uuid);
        expect(sutOut?.did.method).to.eql(sutDID.method);
        expect(sutOut?.did.methodId).to.eql(sutDID.methodId);
        expect(sutOut?.did.schema).to.eql(sutDID.schema);
        expect(sutOut?.did.toString()).to.eql(sutDID.toString());

        expect(sutOut?.privateKeys).to.have.length(1);
        expect(sutOut?.privateKeys[0].keyCurve.curve).to.eql(sutKey.curve);
        expect(sutOut?.privateKeys[0].value).to.eql(sutKey.getEncoded());
      });
    });
  });
});
