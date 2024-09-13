import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import * as sinon from "sinon";
import SinonChai from "sinon-chai";
import Agent from "../../src/edge-agent/Agent";
import { Pluto } from "../../src";
import { mockPluto } from "../fixtures/inmemory/factory";
import * as Fixtures from "../fixtures";
import { ApolloError } from "../../src/domain";

chai.use(SinonChai);
chai.use(chaiAsPromised);

describe("Agent", () => {
  let agent: Agent;
  let pluto: Pluto;
  let sandbox: sinon.SinonSandbox;


  describe("Functional Tests", () => {

    afterEach(async () => {
      vi.useRealTimers();
      sandbox.restore();
    });

    beforeEach(async () => {
      vi.useFakeTimers();
      sandbox = sinon.createSandbox();
      pluto = mockPluto();
      agent = Agent.initialize({ mediatorDID: Fixtures.DIDs.peerDID1, pluto });
      await pluto.start();
    });

    describe("createPrismDID", () => {
      it("default parameters - should return unique DIDs", async () => {
        const first = await agent.createNewPrismDID("a");
        const second = await agent.createNewPrismDID("a");
        expect(first).to.not.deep.eq(second);
      });
    });
  });
});
