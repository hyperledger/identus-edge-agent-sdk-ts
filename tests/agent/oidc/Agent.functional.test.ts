import { vi, describe, expect, test, beforeEach } from 'vitest';
import { OIDCAgent as Agent } from "../../../src/edge-agent/oidc/Agent";
import { DID } from '../../../src/domain';
import { Pluto } from "../../../src";
import { mockPluto } from "../../fixtures/inmemory/factory";
import * as Fixtures from "../../fixtures";

describe("Agent", () => {
  let agent: Agent;
  let pluto: Pluto;

  describe("Functional Tests", () => {
    beforeEach(async () => {
      pluto = mockPluto();
      agent = Agent.initialize({ pluto });
    });

    describe("Persistence", () => {
      test("start() called for Startable dependencies", async () => {
        const spyPluto = vi.spyOn(agent.pluto, "start");
        const spyPollux = vi.spyOn(agent.pollux, "start");

        await agent.start();

        expect(spyPluto).toHaveBeenCalledOnce();
        expect(spyPollux).toHaveBeenCalledOnce();
      });

      test("calling start() twice should not throw", async () => {
        const spyPluto = vi.spyOn(agent.pluto, "start");
        const spyPollux = vi.spyOn(agent.pollux, "start");

        await agent.start();
        await agent.start();

        expect(spyPluto).toHaveBeenCalledOnce();
        expect(spyPollux).toHaveBeenCalledOnce();
      });

      test("stop() called for Startable dependencies", async () => {
        const spyPluto = vi.spyOn(agent.pluto, "stop");
        const spyPollux = vi.spyOn(agent.pollux, "stop");

        await agent.start();
        await agent.stop();

        expect(spyPluto).toHaveBeenCalledOnce();
        expect(spyPollux).toHaveBeenCalledOnce();
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
