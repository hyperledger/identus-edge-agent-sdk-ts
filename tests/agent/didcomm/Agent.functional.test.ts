import { vi, describe, expect, test, beforeEach } from 'vitest';
import Agent from "../../../src/edge-agent/didcomm/Agent";
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
      const mediatorDID = DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19");
      agent = Agent.initialize({ pluto, mediatorDID });

      vi.spyOn(agent.pluto, "getAllMediators").mockResolvedValue([{
        hostDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
        mediatorDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
        routingDID: DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19"),
      }]);
    });

    describe("Persistence", () => {
      test("start() called for Startable dependencies", async () => {
        const spyPluto = vi.spyOn(agent.pluto, "start");
        const spyMessages = vi.spyOn(agent, "startFetchingMessages").mockResolvedValue();

        await agent.start();

        expect(spyPluto).toHaveBeenCalledOnce();
        expect(spyMessages).toHaveBeenCalledOnce();
      });

      test("calling start() twice should not throw", async () => {
        const spyPluto = vi.spyOn(agent.pluto, "start");
        const spyMessages = vi.spyOn(agent, "startFetchingMessages").mockResolvedValue();

        await agent.start();
        await agent.start();

        expect(spyPluto).toHaveBeenCalledOnce();
        expect(spyMessages).toHaveBeenCalledOnce();
      });

      test("stop() called for Startable dependencies", async () => {
        vi.spyOn(agent, "startFetchingMessages").mockResolvedValue();
        const spyPluto = vi.spyOn(agent.pluto, "stop");
        const spyConnections = vi.spyOn(agent.connections, "stop");
        const spyJobs = vi.spyOn(agent.jobs, "stop");

        await agent.start();
        await agent.stop();

        expect(spyPluto).toHaveBeenCalledOnce();
        expect(spyJobs).toHaveBeenCalledOnce();
        expect(spyConnections).toHaveBeenCalledOnce();
      });

      test("Start > Stop > Start - should run without errors", async () => {
        vi.spyOn(agent, "startFetchingMessages").mockResolvedValue();

        await agent.start();
        await agent.stop();
        await agent.start();

        expect(agent.state).toBe("running");
      });

      test("db persists after restart", async () => {
        vi.spyOn(agent, "startFetchingMessages").mockResolvedValue();

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
