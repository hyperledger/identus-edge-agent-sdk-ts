import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import { Pluto } from "../../src/pluto/Pluto";
import InMemoryStore from "../fixtures/inmemory";
import * as Domain from "../../src/domain";
import { Apollo, Store, X25519PrivateKey } from "../../src";
import * as Fixtures from "../fixtures";
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
