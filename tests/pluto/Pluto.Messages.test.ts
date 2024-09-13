import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import { Pluto } from "../../src/pluto/Pluto";
import InMemoryStore from "../fixtures/inmemory";
import * as Domain from "../../src/domain";
import { Apollo, Store } from "../../src";
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
    }); instance = new Pluto(store, apollo);

    await instance.start();
  });

  describe("Messages", () => {
    test("uuid set on Domain instance - same after store", async () => {
      const sut = Fixtures.Credentials.JWT.credentialOfferMessage.makeMessage();
      const uuid = sut.uuid;
      expect(uuid).to.be.a.string;

      await instance.storeMessage(sut);
      expect(sut.uuid).to.be.a.string;
      expect(sut.uuid).to.eql(uuid);
    });

    test("Retrieved should match Stored", async () => {
      const sutIn = Fixtures.Credentials.JWT.credentialOfferMessage.makeMessage();

      await instance.storeMessage(sutIn);
      const sutOut = await instance.getMessage(sutIn.id);

      expect(sutOut).to.be.instanceOf(Domain.Message);
      expect(sutOut?.uuid).to.eql(sutIn.uuid);
      expect(sutOut?.ack).to.eql(sutIn.ack);
      expect(sutOut?.attachments).to.eql(sutIn.attachments);
      expect(sutOut?.body).to.eql(sutIn.body);
      expect(sutOut?.createdTime).to.eql(sutIn.createdTime);
      expect(sutOut?.direction).to.eql(sutIn.direction);
      expect(sutOut?.expiresTimePlus).to.eql(sutIn.expiresTimePlus);
      expect(sutOut?.extraHeaders).to.eql(sutIn.extraHeaders);
      expect(sutOut?.from).to.eql(sutIn.from);
      expect(sutOut?.fromPrior).to.eql(sutIn.fromPrior);
      expect(sutOut?.id).to.eql(sutIn.id);
      expect(sutOut?.piuri).to.eql(sutIn.piuri);
      expect(sutOut?.pthid).to.eql(sutIn.pthid);
      expect(sutOut?.thid).to.eql(sutIn.thid);
      expect(sutOut?.to).to.eql(sutIn.to);
    });
  });
});
