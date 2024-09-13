import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import { Pluto } from "../../src/pluto/Pluto";
import InMemoryStore from "../fixtures/inmemory";
import * as Domain from "../../src/domain";
import { Apollo, Store } from "../../src";
import { randomUUID } from "crypto";

describe("Pluto", () => {
  let instance: Domain.Pluto;

  beforeEach(async () => {
    const apollo = new Apollo();
    const store = new Store({
      name: "randomdb" + randomUUID(),
      storage: InMemoryStore,
      password: 'random12434',
      ignoreDuplicate: true
    });
    instance = new Pluto(store, apollo);

    await instance.start();
  });

  describe("LinkSecret", () => {
    test("uuid set on Domain instance - same after store", async () => {
      const sut = new Domain.LinkSecret("test");
      const uuid = sut.uuid;
      expect(uuid).to.be.a.string;

      await instance.storeLinkSecret(sut);
      expect(sut.uuid).to.be.a.string;
      expect(sut.uuid).to.eql(uuid);
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
