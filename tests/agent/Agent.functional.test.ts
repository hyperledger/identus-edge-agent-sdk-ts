/**
 * @jest-environment node
 */
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import * as sinon from "sinon";
import SinonChai from "sinon-chai";
import Agent from "../../src/prism-agent/Agent";
import { Pluto } from "../../src";
import { mockPluto } from "../fixtures/inmemory/factory";
import * as Fixtures from "../fixtures";

chai.use(SinonChai);
chai.use(chaiAsPromised);
const expect = chai.expect;

describe("Agent", () => {
  let agent: Agent;
  let pluto: Pluto;
  let sandbox: sinon.SinonSandbox;

  afterEach(async () => {
    jest.useRealTimers();

    await agent.stop();
    sandbox.restore();
  });

  beforeEach(async () => {
    jest.useFakeTimers();

    sandbox = sinon.createSandbox();
    pluto = mockPluto();
    agent = Agent.initialize({ mediatorDID: Fixtures.DIDs.peerDID1, pluto });
    // ??? cant start agent - errors for start mediation
    // await agent.start();
    await pluto.start();
  });

  describe("Functional Tests", () => {
    describe("createPrismDID", () => {
      test("default parameters - should return unique DIDs", async () => {
        const first = await agent.createNewPrismDID("a");
        const second = await agent.createNewPrismDID("a");

        expect(first).to.not.deep.eq(second);
      });

      test("same services and keyPathIndex - should return the same DID", async () => {
        const services = [];
        const keyPathIndex = 1;
        // alias (first parameter) doesn't affect ouput
        const first = await agent.createNewPrismDID("first", services, keyPathIndex);
        const second = await agent.createNewPrismDID("second", services, keyPathIndex);

        expect(first).to.deep.eq(second);
        expect(first.toString()).to.deep.eq(second.toString());
      });
    });
  });
});
