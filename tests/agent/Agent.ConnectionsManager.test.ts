/**
 * @jest-environment node
 */
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import SinonChai from "sinon-chai";
import { Apollo, BasicMediatorHandler, Castor, ConnectionsManager, MediatorStore, Pluto } from "../../src";
import { Curve, KeyTypes, Mercury, Service, ServiceEndpoint } from "../../src/domain";
import { MercuryStub } from "./mocks/MercuryMock";
import { AgentCredentials } from "../../src/prism-agent/Agent.Credentials";
import { AgentOptions } from "../../src/prism-agent/types";

chai.use(SinonChai);
chai.use(chaiAsPromised);

const store: MediatorStore = null as any;
const mercury: Mercury = new MercuryStub();

const apollo = new Apollo();
const castor = new Castor(apollo)
const pluto: Pluto = null as any;
const agentCredentials: AgentCredentials = null as any;


async function createBasicMediationHandler(
    ConnectionsManager: any,
    BasicMediatorHandler: any,
    services: Service[],
    options?: AgentOptions
): Promise<
    {
        manager: ConnectionsManager,
        handler: BasicMediatorHandler
    }
> {
    const seed = apollo.createRandomSeed().seed;
    const keypair = apollo.createPrivateKey({
        type: KeyTypes.EC,
        curve: Curve.SECP256K1,
        seed: Buffer.from(seed.value).toString("hex"),
    });
    const mediatorDID = await castor.createPrismDID(keypair.publicKey(), services);
    const handler = new BasicMediatorHandler(
        mediatorDID,
        mercury,
        store
    );
    handler.mediator = {
        hostDID: mediatorDID,
        routingDID: mediatorDID,
        mediatorDID: mediatorDID
    }
    const manager = new ConnectionsManager(
        castor,
        mercury,
        pluto,
        agentCredentials,
        handler,
        [],
        options
    )
    return {
        manager,
        handler
    }
}

jest.mock('isows', () => ({
    WebSocket: jest.fn(() => ({
        addEventListener: jest.fn(),
        send: jest.fn(),
        close: jest.fn(),
    })),
}));

describe("ConnectionsManager tests", () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it.only("Should use websockets if the mediator's did endpoint uri contains ws or wss and agent options have the opt in", async () => {
        const services = [
            new Service(
                "#didcomm-1",
                ["DIDCommMessaging"],
                new ServiceEndpoint("ws://localhost:12346")
            )
        ];
        const ConnectionsManager = jest.requireActual('../../src/prism-agent/connectionsManager/ConnectionsManager').ConnectionsManager;
        const BasicMediatorHandler = jest.requireActual('../../src/prism-agent/mediator/BasicMediatorHandler').BasicMediatorHandler;
        jest.mock('isows', () => ({
            WebSocket: jest.fn(() => ({
                addEventListener: jest.fn(),
                send: jest.fn(),
                close: jest.fn(),
            })),
        }));

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
        const listenUnread = jest.spyOn(handler, 'listenUnreadMessages')
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
        const ConnectionsManager = jest.requireActual('../../src/prism-agent/connectionsManager/ConnectionsManager').ConnectionsManager;
        const BasicMediatorHandler = jest.requireMock('../../src/prism-agent/mediator/BasicMediatorHandler').BasicMediatorHandler;
        jest.mock('isows', () => ({
            WebSocket: jest.fn(() => ({
                addEventListener: jest.fn(),
                send: jest.fn(),
                close: jest.fn(),
            })),
        }));
        const { manager, handler } = await createBasicMediationHandler(
            ConnectionsManager,
            BasicMediatorHandler,
            services
        );
        const listenUnread = jest.spyOn(handler, 'listenUnreadMessages')
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
        const ConnectionsManager = jest.requireActual('../../src/prism-agent/connectionsManager/ConnectionsManager').ConnectionsManager;
        const BasicMediatorHandler = jest.requireMock('../../src/prism-agent/mediator/BasicMediatorHandler').BasicMediatorHandler;
        jest.mock('isows', () => ({
            WebSocket: jest.fn(() => ({
                addEventListener: jest.fn(),
                send: jest.fn(),
                close: jest.fn(),
            })),
        }));
        const { manager, handler } = await createBasicMediationHandler(
            ConnectionsManager,
            BasicMediatorHandler,
            services,
            {
                experiments: {

                }
            }
        );
        const listenUnread = jest.spyOn(handler, 'listenUnreadMessages')
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
        const ConnectionsManager = jest.requireActual('../../src/prism-agent/connectionsManager/ConnectionsManager').ConnectionsManager;
        const BasicMediatorHandler = jest.requireMock('../../src/prism-agent/mediator/BasicMediatorHandler').BasicMediatorHandler;
        jest.mock('isows', () => ({
            WebSocket: jest.fn(() => ({
                addEventListener: jest.fn(),
                send: jest.fn(),
                close: jest.fn(),
            })),
        }));
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
        const listenUnread = jest.spyOn(handler, 'listenUnreadMessages')
        expect(manager).toHaveProperty('withWebsocketsExperiment', false);

        await manager.startFetchingMessages(1)

        expect(listenUnread).not.toHaveBeenCalled()
        manager.stopFetchingMessages()
    })

    it("Should not use websockets if the mediator'd did endpoint uri does not contain ws or wss for more than the agent has opted in", async () => {
        const services = [
            new Service(
                "#didcomm-1",
                ["DIDCommMessaging"],
                new ServiceEndpoint("http://localhost:12346")
            )
        ];
        const ConnectionsManager = jest.requireActual('../../src/prism-agent/connectionsManager/ConnectionsManager').ConnectionsManager;
        const BasicMediatorHandler = jest.requireMock('../../src/prism-agent/mediator/BasicMediatorHandler').BasicMediatorHandler;
        jest.mock('isows', () => ({
            WebSocket: jest.fn(() => ({
                addEventListener: jest.fn(),
                send: jest.fn(),
                close: jest.fn(),
            })),
        }));
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
        const listenUnread = jest.spyOn(handler, 'listenUnreadMessages')
        expect(manager).toHaveProperty('withWebsocketsExperiment', true);

        await manager.startFetchingMessages(1)

        expect(listenUnread).not.toHaveBeenCalled()
        manager.stopFetchingMessages()
    })

})