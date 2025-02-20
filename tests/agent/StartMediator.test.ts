import { vi, describe, expect, test, beforeEach, afterEach } from 'vitest';
import { mockPluto } from "../fixtures/inmemory/factory";
import * as Domain from "../../src/domain";
import { Task } from '../../src/utils';
import { ConnectionsManager, Mercury, ProtocolType } from '../../src';
import { StartMediator } from '../../src/edge-agent/didcomm/StartMediator';
import * as Fixtures from "../fixtures";
import { mockTask } from '../testFns';
import * as CreatePeerDIDModule from '../../src/edge-agent/didcomm/CreatePeerDID';
import { Connection } from '../../src/edge-agent/connections';

describe("StartMediator", () => {
  let ctx: Task.Context;
  let connections: ConnectionsManager;
  let mercury: Domain.Mercury;
  let pluto: Domain.Pluto;

  beforeEach(async () => {
    connections = new ConnectionsManager();
    mercury = {
      sendMessageParseMessage: vi.fn()
    } as any;
    pluto = mockPluto();
    ctx = Task.Context.make({
      Connections: connections,
      Mercury: mercury,
      Pluto: pluto,
    });
  });

  test("mediator exists in Pluto - Connection added in Unknown state", async () => {
    const mediatorDID = Fixtures.DIDs.prismDIDDefault;
    const mediator: Domain.Mediator = {
      hostDID: Fixtures.DIDs.peerDID1,
      mediatorDID: Fixtures.DIDs.peerDID2,
      routingDID: Fixtures.DIDs.peerDID3,
    };
    vi.spyOn(pluto, "getAllMediators").mockResolvedValue([mediator]);
    vi.spyOn(pluto, "storeMessage").mockResolvedValue();

    expect(connections.mediator).toBeNull();

    await ctx.run(new StartMediator({ mediatorDID }));

    expect(connections.mediator).not.toBeNull();
    expect(connections.mediator?.state).toEqual(Connection.State.UNKNOWN);
    expect(connections.mediator?.uri).toEqual(mediator.mediatorDID.toString());
    expect(connections.mediator?.host).toEqual(mediator.hostDID.toString());
    expect(connections.mediator?.routingDID).toEqual(mediator.routingDID.toString());
  });

  describe("mediator not in Pluto - runs Mediation flow", async () => {
    test("MediateGrant response - connection in Granted state", async () => {
      const mediatorDID = Fixtures.DIDs.prismDIDDefault;
      const hostDID = Fixtures.DIDs.peerDID1;
      const routing_did = Fixtures.DIDs.peerDID3.toString();
      vi.spyOn(pluto, "getAllMediators").mockResolvedValue([]);
      vi.spyOn(pluto, "storeMessage").mockResolvedValue();
      vi.spyOn(pluto, "storeMediator").mockResolvedValue();
      vi.spyOn(mercury, "sendMessageParseMessage").mockResolvedValue(
        new Domain.Message({ routing_did }, "id", ProtocolType.DidcommMediationGrant, mediatorDID, hostDID)
      );
      mockTask(CreatePeerDIDModule, "CreatePeerDID", hostDID);

      expect(connections.mediator).toBeNull();

      await ctx.run(new StartMediator({ mediatorDID }));

      expect(connections.mediator).not.toBeNull();
      expect(connections.mediator?.state).toEqual(Connection.State.GRANTED);
      expect(connections.mediator?.uri).toEqual(mediatorDID.toString());
      expect(connections.mediator?.host).toEqual(hostDID.toString());
      expect(connections.mediator?.routingDID).toEqual(routing_did);
    });

    test("MediateDeny response - connection in Denied state", async () => {
      const mediatorDID = Fixtures.DIDs.prismDIDDefault;
      const hostDID = Fixtures.DIDs.peerDID1;
      vi.spyOn(pluto, "getAllMediators").mockResolvedValue([]);
      vi.spyOn(pluto, "storeMessage").mockResolvedValue();
      vi.spyOn(mercury, "sendMessageParseMessage").mockResolvedValue(
        new Domain.Message({}, "id", ProtocolType.DidcommMediationDeny, mediatorDID, hostDID)
      );
      mockTask(CreatePeerDIDModule, "CreatePeerDID", hostDID);

      expect(connections.mediator).toBeNull();

      await ctx.run(new StartMediator({ mediatorDID }));

      expect(connections.mediator).not.toBeNull();
      expect(connections.mediator?.state).toEqual(Connection.State.DENIED);
      expect(connections.mediator?.uri).toEqual(mediatorDID.toString());
      expect(connections.mediator?.host).toEqual(hostDID.toString());
      expect(connections.mediator?.routingDID).toEqual(undefined);
    });

    test("no response - connection in Requested state", async () => {
      const mediatorDID = Fixtures.DIDs.prismDIDDefault;
      const hostDID = Fixtures.DIDs.peerDID1;
      vi.spyOn(pluto, "getAllMediators").mockResolvedValue([]);
      vi.spyOn(pluto, "storeMessage").mockResolvedValue();
      vi.spyOn(mercury, "sendMessageParseMessage").mockResolvedValue(undefined);
      mockTask(CreatePeerDIDModule, "CreatePeerDID", hostDID);

      expect(connections.mediator).toBeNull();

      await ctx.run(new StartMediator({ mediatorDID }));

      expect(connections.mediator).not.toBeNull();
      expect(connections.mediator?.state).toEqual(Connection.State.REQUESTED);
      expect(connections.mediator?.uri).toEqual(mediatorDID.toString());
      expect(connections.mediator?.host).toEqual(hostDID.toString());
      expect(connections.mediator?.routingDID).toEqual(undefined);
    });
  });
});
