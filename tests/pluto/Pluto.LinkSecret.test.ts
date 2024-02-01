import { expect } from "chai";
import { Pluto } from "../../src/pluto/Pluto";
import { InMemoryStore } from "../fixtures/InMemoryStore";
import * as Domain from "../../src/domain";
import { Apollo } from "../../src";

describe("Pluto", () => {
  let instance: Domain.Pluto;

  beforeEach(async () => {
    const apollo = new Apollo();
    const store = new InMemoryStore();
    instance = new Pluto(store, apollo);

    await instance.start();
  });

  describe("LinkSecret", () => {
    test("uuid set on store", async () => {
      const sut = new Domain.LinkSecret("test");
      expect(sut.uuid).to.be.undefined;

      await instance.storeLinkSecret(sut);
      expect(sut.uuid).to.be.a.string;
    });

    test("Retrieved should match Stored", async () => {
      const name = "mock";
      const secret = "123";
      const sutIn = new Domain.LinkSecret(secret, name);

      await instance.storeLinkSecret(sutIn);
      const sutOut = await instance.getLinkSecret(name);

      expect(sutOut).to.be.instanceOf(Domain.LinkSecret);
      expect(sutOut?.uuid).to.eql(sutIn.uuid);
      expect(sutOut?.name).to.eql(sutIn.name);
      expect(sutOut?.secret).to.eql(sutIn.secret);
    });
  });
});
