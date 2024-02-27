import { expect } from "chai";
import { Pluto } from "../../src/pluto/Pluto";
import { InMemoryStore } from "../fixtures/InMemoryStore";
import * as Domain from "../../src/domain";
import { Apollo, X25519PrivateKey } from "../../src";
import * as Fixtures from "../fixtures";

describe("Pluto", () => {
  let instance: Domain.Pluto;

  beforeEach(async () => {
    const apollo = new Apollo();
    const store = new InMemoryStore();
    instance = new Pluto(store, apollo);

    await instance.start();
  });

  describe("Keys", () => {
    test("uuid set on Domain instance - same after store", async () => {
      const sut = new X25519PrivateKey(Fixtures.Keys.x25519.privateKey.raw);
      const uuid = sut.uuid;
      expect(uuid).to.be.a.string;

      await instance.storePrivateKey(sut);
      expect(sut.uuid).to.be.a.string;
      expect(sut.uuid).to.eql(uuid);
    });
  });
});
