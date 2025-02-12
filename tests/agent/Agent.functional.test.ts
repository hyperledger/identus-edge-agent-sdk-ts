import { vi, describe, it, expect, test, beforeEach } from 'vitest';
import Agent from "../../src/edge-agent/Agent";
import { Pluto } from "../../src";
import { mockPluto } from "../fixtures/inmemory/factory";
import * as Fixtures from "../fixtures";


describe("Agent", () => {
  let agent: Agent;
  let pluto: Pluto;

  describe("Functional Tests", () => {
    beforeEach(async () => {
      pluto = mockPluto();
      agent = Agent.initialize({ pluto });
    });

    describe("createPrismDID", () => {
      it("default parameters - should return unique DIDs", async () => {
        await agent.start();
        const first = await agent.createNewPrismDID("a");
        const second = await agent.createNewPrismDID("a");
        expect(first).to.not.deep.eq(second);
      });
    });

    describe("Persistence", () => {
      test("start() called for Startable dependencies", async () => {
        const spyPluto = vi.spyOn(agent.pluto, "start");

        await agent.start();

        expect(spyPluto).toHaveBeenCalledOnce();
      });

      test("stop() called for Startable dependencies", async () => {
        const spyPluto = vi.spyOn(agent.pluto, "stop");

        await agent.start();
        await agent.stop();

        expect(spyPluto).toHaveBeenCalledOnce();
      });


      test("Start > Stop > Start - should run without errors", async () => {
        await agent.start();
        await agent.stop();
        await agent.start();

        expect(agent.state).toBe("running");
      });

      test("db persists after restart", async () => {
        await agent.start();
        await agent.pluto.storeMessage(Fixtures.Messages.ConnectionResponse);
        await agent.stop();
        await agent.start();
        const result = await agent.pluto.getAllMessages();

        expect(result).toHaveLength(1);
      });
    });
  });
});
