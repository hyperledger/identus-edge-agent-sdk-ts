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

  describe("CredentialMetadata", () => {
    test("uuid set on store", async () => {
      const sut = new Domain.CredentialMetadata(Domain.CredentialType.JWT, "mock", { mock: 123 });
      expect(sut.uuid).to.be.undefined;

      await instance.storeCredentialMetadata(sut);
      expect(sut.uuid).to.be.a.string;
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
