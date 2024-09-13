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
    })
    instance = new Pluto(store, apollo);

    await instance.start();
  });

  describe("CredentialMetadata", () => {
    test("uuid set on Domain instance - same after store", async () => {
      const sut = new Domain.CredentialMetadata(Domain.CredentialType.JWT, "mock", { mock: 123 });
      const uuid = sut.uuid;
      expect(uuid).to.be.a.string;

      await instance.storeCredentialMetadata(sut);
      expect(sut.uuid).to.be.a.string;
      expect(sut.uuid).to.eql(uuid);
    });

    test("Retrieved should match Stored", async () => {
      const name = "mock";
      const sutIn = new Domain.CredentialMetadata(Domain.CredentialType.JWT, name, { mock: 123 });

      await instance.storeCredentialMetadata(sutIn);
      const sutOut = await instance.getCredentialMetadata(name);

      expect(sutOut).to.be.instanceOf(Domain.CredentialMetadata);
      expect(sutOut?.name).to.eql(sutIn.name);
      expect(sutOut?.type).to.eql(sutIn.type);
      expect(sutOut?.toJSON()).to.eql(sutIn.toJSON());
    });
  });
});
