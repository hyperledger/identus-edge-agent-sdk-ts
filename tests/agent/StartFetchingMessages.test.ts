import { vi, describe, expect, test, beforeEach, afterEach, Mock } from 'vitest';
import { mockPluto } from "../fixtures/inmemory/factory";
import * as Domain from "../../src/domain";
import { Task } from '../../src/utils';
import { ConnectionsManager, Mercury, ProtocolType } from '../../src';
import { StartFetchingMessages } from '../../src/edge-agent/didcomm/StartFetchingMessages';
import * as Fixtures from "../fixtures";
import { mockTask } from '../testFns';
import * as CreatePeerDIDModule from '../../src/edge-agent/didcomm/CreatePeerDID';
import { Connection } from '../../src/edge-agent/connections';
import { JobManager } from '../../src/edge-agent/connections/JobManager';
import { CancellableTask } from '../../src/edge-agent/helpers/Task';

describe("StartFetchingMessages", () => {
  let ctx: Task.Context;
  let connections: ConnectionsManager;
  let mockMediator: Mock;
  let mercury: Domain.Mercury;
  let pluto: Domain.Pluto;

  beforeEach(async () => {
    mockMediator = vi.fn();
    connections = { get mediator() { return mockMediator(); } } as any;
    mercury = { sendMessageParseMessage: vi.fn() } as any;
    pluto = mockPluto();
    ctx = Task.Context.make({
      Connections: connections,
      Castor: { resolveDID: vi.fn() } as any,
      Jobs: new JobManager(),
      Mercury: mercury,
      Pluto: pluto,
    });
  });

  test('should return immediately if already fetching messages', async () => {
    const fetchObj = { notEmptyObj: true };
    ctx.Jobs.fetchMessages = fetchObj;

    await ctx.run(new StartFetchingMessages({}));

    expect(ctx.Jobs.fetchMessages).toBe(fetchObj);
  });

  test('should return immediately if no mediator connection', async () => {
    mockMediator.mockReturnValue(null);

    await ctx.run(new StartFetchingMessages({}));

    expect(ctx.Jobs.fetchMessages).toBeUndefined();
  });


  test("PickupRequest sent", async () => {
    const mediator = { hostDID: "host", mediatorDID: "medi" };
    const mockSend = vi.fn();
    mockMediator.mockReturnValue({
      send: mockSend,
      asMediator: () => mediator,
    });

    await ctx.run(new StartFetchingMessages({}));

    const expectedMsg = expect.objectContaining({
      piuri: ProtocolType.PickupRequest,
      from: mediator.hostDID,
      to: mediator.mediatorDID,
      attachments: [],
      body: { limit: 10 },
    });
    expect(mockSend).toHaveBeenCalledWith(expectedMsg, ctx);
    expect(ctx.Jobs.fetchMessages).toBeInstanceOf(CancellableTask);
  });


  describe("Sockets", () => {
    test('should establish WebSocket connection if socket service is available', async () => {
      const addEventListener = vi.fn();
      const mockSocket = { addEventListener } as any;
      vi.spyOn(global, "WebSocket").mockReturnValue(mockSocket);
      const mediator = { hostDID: "host", mediatorDID: "medi" };
      const mockSend = vi.fn();
      const mockLiveMode = vi.fn();
      mockMediator.mockReturnValue({
        asMediator: () => mediator,
        send: mockSend,
        useLiveMode: mockLiveMode
      });
      const socketService = { serviceEndpoint: { uri: 'wss://example.com' } };
      vi.spyOn(ctx.Castor, "resolveDID").mockResolvedValue({ services: [socketService] } as any);

      const sut = new StartFetchingMessages({ useSockets: true });
      await ctx.run(sut);

      expect(ctx.Jobs.fetchMessages).toBeUndefined();
      expect(addEventListener).toHaveBeenCalledWith('open', expect.any(Function));
      expect(addEventListener).toHaveBeenCalledWith('message', expect.any(Function));
      expect(mockLiveMode).toHaveBeenCalledWith(mockSocket);
    });
  });
});
