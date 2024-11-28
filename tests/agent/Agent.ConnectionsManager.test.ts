import { vi, describe, it, expect, test, beforeEach, afterEach } from 'vitest';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import SinonChai from "sinon-chai";
import { Apollo, BasicMediatorHandler, Castor, ConnectionsManager, MediatorStore, Pluto, Pollux } from "../../src";
import { Curve, KeyTypes, Mercury, Service, ServiceEndpoint } from "../../src/domain";
import { MercuryStub } from "./mocks/MercuryMock";
import { AgentOptions } from "../../src/edge-agent/types";
import DIDCommAgent from '../../src/edge-agent/didcomm/Agent';

chai.use(SinonChai);
chai.use(chaiAsPromised);

const store: MediatorStore = null as any;
const mercury: Mercury = new MercuryStub();

const apollo = new Apollo();
const castor = new Castor(apollo)
const pluto: Pluto = null as any;

async function createBasicMediationHandler(
    cmCtor: typeof ConnectionsManager,
    mhCtor: typeof BasicMediatorHandler,
    services: Service[],
    options?: AgentOptions
): Promise<{
  manager: ConnectionsManager,
  handler: BasicMediatorHandler
}> {
    const seed = apollo.createRandomSeed().seed;
    const keypair = apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(seed.value).toString("hex"),
    });
    const mediatorDID = await castor.createPrismDID(keypair.publicKey(), services);
    const handler = new mhCtor(
        mediatorDID,
        mercury,
        store
    );
    handler.mediator = {
        hostDID: mediatorDID,
        routingDID: mediatorDID,
        mediatorDID: mediatorDID
    }

    const pluto = null as any;
    const agent = DIDCommAgent.initialize({
      mediatorDID,
      pluto,
      castor,
      mercury,
    });
    (agent as any).mediationHandler = handler;
    const manager = new cmCtor(agent, options);
    
    return { manager, handler };
}


describe("ConnectionsManager tests", () => {

    beforeEach(() => {
        vi.mock('isows', () => ({
            WebSocket: vi.fn(() => ({
                addEventListener: vi.fn(),
                send: vi.fn(),
                close: vi.fn(),
            })),
        }));
    })

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("Should use websockets if the mediator's did endpoint uri contains ws or wss and agent options have the opt in", async () => {
        const services = [
            new Service(
                "#didcomm-1",
                ["DIDCommMessaging"],
                new ServiceEndpoint("ws://localhost:12346")
            )
        ];
        const ConnectionsManager = (await import('../../src/edge-agent/connectionsManager/ConnectionsManager')).ConnectionsManager
        const BasicMediatorHandler = (await import('../../src/edge-agent/mediator/BasicMediatorHandler')).BasicMediatorHandler;

        const { manager, handler } = await createBasicMediationHandler(
            ConnectionsManager,
            BasicMediatorHandler,
            services,
            {
                experiments: {
                    liveMode: true
                }
            }
        );
        const listenUnread = vi.spyOn(handler, 'listenUnreadMessages')
        expect(manager).toHaveProperty('withWebsocketsExperiment', true);
        await manager.startFetchingMessages(1)
        expect(listenUnread).toHaveBeenCalled();

        manager.stopFetchingMessages()
    })

    it("Should not use websockets even if the mediator's did endpoint uri contains ws or wss if the agent options don't have the opt-in", async () => {
        const services = [
            new Service(
                "#didcomm-1",
                ["DIDCommMessaging"],
                new ServiceEndpoint("ws://localhost:12346")
            )
        ];
        const ConnectionsManager = (await import('../../src/edge-agent/connectionsManager/ConnectionsManager')).ConnectionsManager
        const BasicMediatorHandler = (await import('../../src/edge-agent/mediator/BasicMediatorHandler')).BasicMediatorHandler;

        const { manager, handler } = await createBasicMediationHandler(
            ConnectionsManager,
            BasicMediatorHandler,
            services
        );
        const listenUnread = vi.spyOn(handler, 'listenUnreadMessages')
        expect(manager).toHaveProperty('withWebsocketsExperiment', false);

        await manager.startFetchingMessages(1)

        expect(listenUnread).not.toHaveBeenCalled()
        manager.stopFetchingMessages()
    })

    it("Should not use websockets even if the mediator's did endpoint uri contains ws or wss if the agent options don't have the opt-in 1", async () => {
        const services = [
            new Service(
                "#didcomm-1",
                ["DIDCommMessaging"],
                new ServiceEndpoint("ws://localhost:12346")
            )
        ];
        const ConnectionsManager = (await import('../../src/edge-agent/connectionsManager/ConnectionsManager')).ConnectionsManager
        const BasicMediatorHandler = (await import('../../src/edge-agent/mediator/BasicMediatorHandler')).BasicMediatorHandler;
        const { manager, handler } = await createBasicMediationHandler(
            ConnectionsManager,
            BasicMediatorHandler,
            services,
            {
                experiments: {

                }
            }
        );
        const listenUnread = vi.spyOn(handler, 'listenUnreadMessages')
        expect(manager).toHaveProperty('withWebsocketsExperiment', false);

        await manager.startFetchingMessages(1)

        expect(listenUnread).not.toHaveBeenCalled()
        manager.stopFetchingMessages()
    })

    it("Should not use websockets even if the mediator's did endpoint uri contains ws or wss if the agent options don't have the opt-in 2", async () => {
        const services = [
            new Service(
                "#didcomm-1",
                ["DIDCommMessaging"],
                new ServiceEndpoint("ws://localhost:12346")
            )
        ];
        const ConnectionsManager = (await import('../../src/edge-agent/connectionsManager/ConnectionsManager')).ConnectionsManager
        const BasicMediatorHandler = (await import('../../src/edge-agent/mediator/BasicMediatorHandler')).BasicMediatorHandler;
        const { manager, handler } = await createBasicMediationHandler(
            ConnectionsManager,
            BasicMediatorHandler,
            services,
            {
                experiments: {
                    liveMode: false
                }
            }
        );
        const listenUnread = vi.spyOn(handler, 'listenUnreadMessages')
        expect(manager).toHaveProperty('withWebsocketsExperiment', false);

        await manager.startFetchingMessages(1)

        expect(listenUnread).not.toHaveBeenCalled()
        manager.stopFetchingMessages()
    })

    it("Should not use websockets if the mediator did endpoint uri does not contain ws or wss for more than the agent has opted in", async () => {
        const services = [
            new Service(
                "#didcomm-1",
                ["DIDCommMessaging"],
                new ServiceEndpoint("http://localhost:12346")
            )
        ];
        const ConnectionsManager = (await import('../../src/edge-agent/connectionsManager/ConnectionsManager')).ConnectionsManager
        const BasicMediatorHandler = (await import('../../src/edge-agent/mediator/BasicMediatorHandler')).BasicMediatorHandler;
        const { manager, handler } = await createBasicMediationHandler(
            ConnectionsManager,
            BasicMediatorHandler,
            services,
            {
                experiments: {
                    liveMode: true
                }
            }
        );
        const listenUnread = vi.spyOn(handler, 'listenUnreadMessages')
        expect(manager).toHaveProperty('withWebsocketsExperiment', true);

        await manager.startFetchingMessages(1)

        expect(listenUnread).not.toHaveBeenCalled()
        manager.stopFetchingMessages()
    })

})