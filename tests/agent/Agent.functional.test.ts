import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import Agent from "../../src/edge-agent/Agent";
import { Pluto } from "../../src";
import { mockPluto } from "../fixtures/inmemory/factory";


describe("Agent", () => {
  let agent: Agent;
  let pluto: Pluto;

  describe("Functional Tests", () => {
    afterEach(async () => {
      vi.useRealTimers();
    });

    beforeEach(async () => {
      vi.useFakeTimers();
      pluto = mockPluto();
      agent = Agent.initialize({ pluto });
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
