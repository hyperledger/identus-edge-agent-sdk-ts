/**
 * @jest-environment node
 */
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import * as sinon from "sinon";
import SinonChai from "sinon-chai";
import Agent from "../../src/edge-agent/Agent";
import Mercury from "../../src/mercury/Mercury";
import * as UUIDLib from "@stablelib/uuid";
import Apollo from "../../src/apollo/Apollo";
import { CastorMock } from "./mocks/CastorMock";
import { ConnectionsManagerMock } from "./mocks/ConnectionManagerMock";
import * as Fixtures from "../fixtures";

import {
  Api,
  Credential,
  CredentialMetadata,
  CredentialType,
  DID,
  HttpResponse,
  JWTCredentialPayload,
  LinkSecret,
  Message,
  Seed,
  Service,
  ServiceEndpoint,
  StorableCredential,
} from "../../src/domain/models";
import { DIDCommProtocol } from "../../src/mercury/DIDCommProtocol";
import { Castor as CastorType } from "../../src/domain/buildingBlocks/Castor";
import { AgentError } from "../../src/domain/models/Errors";
import { HandshakeRequest } from "../../src/edge-agent/protocols/connection/HandshakeRequest";
import { OfferCredential } from "../../src/edge-agent/protocols/issueCredential/OfferCredential";
import { ProtocolType } from "../../src/edge-agent/protocols/ProtocolTypes";
import { CredentialPreview } from "../../src/edge-agent/protocols/issueCredential/CredentialPreview";
import { RequestCredential } from "../../src/edge-agent/protocols/issueCredential/RequestCredential";
import { IssueCredential } from "../../src/edge-agent/protocols/issueCredential/IssueCredential";
import { base64url } from "multiformats/bases/base64";
import Pollux from "../../src/pollux/Pollux";
import { AnoncredsLoader } from "../../src/pollux/AnoncredsLoader";
import { RequestPresentation } from "../../src/edge-agent/protocols/proofPresentation/RequestPresentation";
import { Presentation } from "../../src/edge-agent/protocols/proofPresentation/Presentation";
import { JWTCredential } from "../../src/pollux/models/JWTVerifiableCredential";
import { AnonCredsCredential } from "../../src/pollux/models/AnonCredsVerifiableCredential";
import InMemoryStore from "../fixtures/inmemory";
import { Pluto as IPluto } from "../../src/domain";
import { Pluto } from "../../src/pluto/Pluto";
import { RevocationNotification } from "../../src/edge-agent/protocols/revocation/RevocationNotfiication";
import { AgentCredentials } from "../../src/edge-agent/Agent.Credentials";
import { BasicMediatorHandler, Castor, Store } from "../../src";
import { randomUUID } from "crypto";
import { AgentDIDHigherFunctions } from "../../src/edge-agent/Agent.DIDHigherFunctions";
import { JWT } from "../../src/pollux/utils/JWT";


chai.use(SinonChai);
chai.use(chaiAsPromised);
const expect = chai.expect;

let agent: Agent;
let pluto: IPluto;
let pollux: Pollux;
let castor: CastorType;
let sandbox: sinon.SinonSandbox;
let store: Pluto.Store;


describe("Agent Tests", () => {
  afterEach(async () => {
    jest.useRealTimers();

    await agent.stop();
    sandbox.restore();
  });

  beforeEach(async () => {
    jest.useFakeTimers();
    jest.mock('isows', () => ({
      WebSocket: jest.fn(() => ({
        addEventListener: jest.fn(),
        send: jest.fn(),
        close: jest.fn(),
      })),
    }));
    sandbox = sinon.createSandbox();
    const apollo: Apollo = new Apollo();
    castor = CastorMock;
    const httpManager: Api = {
      request: async () => new HttpResponse<any>(new Uint8Array(), 200),
    };
    const didProtocol: DIDCommProtocol = {
      packEncrypted: async () => "",
      unpack: async () => new Message("{}", undefined, "TypeofMessage"),
    };
    store = new Store({
      name: 'test' + randomUUID(),
      storage: InMemoryStore,
      password: Buffer.from("demoapp").toString("hex")
    });
    pluto = new Pluto(store, apollo);
    const mercury = new Mercury(castor, didProtocol, httpManager);

    const polluxInstance = new Pollux(castor);
    const handler = new BasicMediatorHandler(DID.fromString("did:peer:123456"), mercury, pluto);
    const seed: Seed = {
      value: new Uint8Array([69, 191, 35, 232, 213, 102, 3, 93, 180, 106, 224, 144, 79, 171, 79, 223, 154, 217, 235, 232, 96, 30, 248, 92, 100, 38, 38, 42, 101, 53, 2, 247, 56, 111, 148, 220, 237, 122, 15, 120, 55, 82, 89, 150, 35, 45, 123, 135, 159, 140, 52, 127, 239, 148, 150, 109, 86, 145, 77, 109, 47, 60, 20, 16])
    };

    const didHigherFunctions = new AgentDIDHigherFunctions(
      apollo,
      castor,
      pluto,
      handler,
      seed
    );

    const agentCredentials = new AgentCredentials(
      apollo,
      castor,
      pluto,
      polluxInstance,
      seed,
      mercury,
      didHigherFunctions
    );

    const connectionsManager = ConnectionsManagerMock.buildMock({
      castor,
      mercury,
      pluto,
      agentCredentials,
      options: {
        experiments: {
          liveMode: false
        }
      }
    });

    agent = Agent.instanceFromConnectionManager(
      apollo,
      castor,
      pluto,
      mercury,
      connectionsManager,
      seed,
      undefined,
      {
        experiments: {
          liveMode: false
        }
      }
    );

    await polluxInstance.start();

    pollux = (agent as any).pollux as Pollux;

  });

  describe("Integration Tests", () => {
    beforeEach(async () => {
      await agent.start();
    });


    it("As a developer when a peerDID is created and we have specified to updateKeyList the services are correctly added and updateKeyList is called correctly.", async () => {
      const didHigherFunctions = (agent as any).agentDIDHigherFunctions;
      const storePeerDID = sandbox.stub(pluto, "storeDID").resolves();
      const updateKeyList = sandbox.stub(
        didHigherFunctions.mediationHandler,
        "updateKeyListWithDIDs"
      );
      const createPeerDID = sandbox.stub(castor, "createPeerDID");

      const peerDID = await agent.createNewPeerDID([], true);

      expect(createPeerDID.callCount).to.be.equal(1);
      expect(storePeerDID.callCount).to.be.equal(1);
      expect(storePeerDID.callCount).to.be.equal(1);

      expect(agent.currentMediatorDID).not.equals(null);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const mediatorDID = agent.currentMediatorDID!;

      const expectedService = new Service(
        "#didcomm-1",
        ["DIDCommMessaging"],
        new ServiceEndpoint(mediatorDID.toString())
      );
      createPeerDID.calledWith([], [expectedService]);
      updateKeyList.calledWith([peerDID]);
    });

    it("As a developer I can only use a valid invitationMessage as out of band invitation, anything else will throw an exception as the piuri is invalid.", async () => {
      /**
       * The following is an invalid oob connection string, decode it in base64 to see the original body
       */
      const oob =
        "https://my.domain.com/path?_oob=eyJpZCI6Ijg5NWYzMWZhLTIyNWUtNDRlNi1hNzkyLWFhN2E0OGY1MjgzYiIsInR5cGUiOiJodHRwczovL2RpZGNvbW0ub3JnL291dC1vZi1iYW5kLzIuMC93cm9uZ1R5cGUiLCJmcm9tIjoiZGlkOnBlZXI6Mi5FejZMU2V6eWtjQmpNS2dHUEVEaDQ0cEM4UWZ1N2NDekpvc1Z1VjRqcDZ4NVk1QkhMLlZ6Nk1rd1JKdDFTbVpwM2FERGhMVW40ZkszM204TExaWFc5MlhUOHZyVUh1NHVwQTYuU2V5SjBJam9pWkcwaUxDSnpJam9pYUhSMGNITTZMeTlyT0hNdFpHVjJMbUYwWVd4aGNISnBjMjB1YVc4dmNISnBjMjB0WVdkbGJuUXZaR2xrWTI5dGJTSXNJbklpT2x0ZExDSmhJanBiSW1ScFpHTnZiVzB2ZGpJaVhYMCIsImJvZHkiOnsiZ29hbF9jb2RlIjoiaW8uYXRhbGFwcmlzbS5jb25uZWN0IiwiZ29hbCI6IkVzdGFibGlzaCBhIHRydXN0IGNvbm5lY3Rpb24gYmV0d2VlbiB0d28gcGVlcnMgdXNpbmcgdGhlIHByb3RvY29sICdodHRwczovL2F0YWxhcHJpc20uaW8vbWVyY3VyeS9jb25uZWN0aW9ucy8xLjAvd3JvbmcnIiwiYWNjZXB0IjpbXX19";

      expect(
        agent.parseOOBInvitation(new URL(oob))
      ).to.eventually.be.rejectedWith(AgentError.UnknownInvitationTypeError);
    });



    it("As a developer with a valid invitationMessage I will be sending a Handshake request with the correct information and store the didPair in pluto right after.", async () => {
      const agentInvitations = (agent as any).agentInvitations;
      const agentInvitationsConnection = agentInvitations.connection;
      const didHigherFunctions = (agent as any).agentDIDHigherFunctions;

      const did = DID.fromString(
        "did:peer:2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );
      const validOOB =
        "https://my.domain.com/path?_oob=eyJpZCI6Ijg5NWYzMWZhLTIyNWUtNDRlNi1hNzkyLWFhN2E0OGY1MjgzYiIsInR5cGUiOiJodHRwczovL2RpZGNvbW0ub3JnL291dC1vZi1iYW5kLzIuMC9pbnZpdGF0aW9uIiwiZnJvbSI6ImRpZDpwZWVyOjIuRXo2TFNlenlrY0JqTUtnR1BFRGg0NHBDOFFmdTdjQ3pKb3NWdVY0anA2eDVZNUJITC5WejZNa3dSSnQxU21acDNhRERoTFVuNGZLMzNtOExMWlhXOTJYVDh2clVIdTR1cEE2LlNleUowSWpvaVpHMGlMQ0p6SWpvaWFIUjBjSE02THk5ck9ITXRaR1YyTG1GMFlXeGhjSEpwYzIwdWFXOHZjSEpwYzIwdFlXZGxiblF2Wkdsa1kyOXRiU0lzSW5JaU9sdGRMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDAiLCJib2R5Ijp7ImdvYWxfY29kZSI6ImlvLmF0YWxhcHJpc20uY29ubmVjdCIsImdvYWwiOiJFc3RhYmxpc2ggYSB0cnVzdCBjb25uZWN0aW9uIGJldHdlZW4gdHdvIHBlZXJzIHVzaW5nIHRoZSBwcm90b2NvbCAnaHR0cHM6Ly9hdGFsYXByaXNtLmlvL21lcmN1cnkvY29ubmVjdGlvbnMvMS4wL3JlcXVlc3QnIiwiYWNjZXB0IjpbXX19";

      const createPeerDID = sandbox.stub(
        didHigherFunctions,
        "createNewPeerDID"
      );
      const sendMessage = sandbox.stub(
        agentInvitationsConnection,
        "sendMessage"
      );
      const addConnection = sandbox.stub(
        agentInvitationsConnection,
        "addConnection"
      );

      sandbox.stub(UUIDLib, "uuid").returns("123456-123456-12356-123456");

      createPeerDID.resolves(did);
      sendMessage.resolves();
      addConnection.resolves();

      const oobInvitation = await agent.parseOOBInvitation(new URL(validOOB));

      const validHanshakeMessage = HandshakeRequest.fromOutOfBand(
        oobInvitation,
        did
      ).makeMessage();

      await agent.acceptDIDCommInvitation(oobInvitation);

      expect(createPeerDID.callCount).to.be.equal(1);
      expect(sendMessage.callCount).to.be.equal(1);
      expect(addConnection.callCount).to.be.equal(1);

      expect(sendMessage).calledWith(validHanshakeMessage);
    });
  });

  // Requires Agent not to be started in before hook
  describe("LinkSecret generation", () => {
    it("getLinkSecret returns null - storeLinkSecret is called", async () => {
      const stubGetLinkSecret = sandbox
        .stub(pluto, "getLinkSecret")
        .returns(Promise.resolve(null));
      const spyStoreLinkSecret = sandbox.spy(pluto, "storeLinkSecret");

      await agent.start();

      expect(stubGetLinkSecret).to.have.been.calledOnce;
      expect(spyStoreLinkSecret).to.have.been.calledOnce;
    });

    it("getLinkSecret returns value - storeLinkSecret not called", async () => {
      const stubGetLinkSecret = sandbox
        .stub(pluto, "getLinkSecret")
        .returns(Promise.resolve({} as any));
      const spyStoreLinkSecret = sandbox.spy(pluto, "storeLinkSecret");

      await agent.start();

      expect(stubGetLinkSecret).to.have.been.calledOnce;
      expect(spyStoreLinkSecret).not.to.have.been.called;
    });
  });

  describe("functions", () => {
    beforeEach(async () => {
      await agent.start();
    });

    describe("Backup/Restore", () => {
      test("backup", async () => {
        sandbox.stub(pluto, "backup").resolves(Fixtures.Backup.backupJson);

        const jwe = await agent.backup.createJWE();

        expect(jwe).to.be.a("string");
        expect(jwe.split(".")).to.have.length(5);
      });

      test("restore", async () => {
        const stubRestore = sandbox.stub(pluto, "restore");
        const backupJWE = "eyJhbGciOiJFQ0RILUVTK0EyNTZLVyIsImVuYyI6IkEyNTZDQkMtSFM1MTIiLCJlcGsiOnsieCI6ImFmYVBmZW9BVEVfdzdLOFBzcGN2S2ctTVJvTUllYk80Y1JVZS1mbENTRFEiLCJjcnYiOiJYMjU1MTkiLCJrdHkiOiJPS1AifX0.QIoYOLdEB1vkp8zsy3GU1WP0RmPp-8QGvtzAmIVtyIV7yVg9KtSD3nMSlIEbTRBSh7bAfJhPqDSS3wpmZ8buktfBR0xSrOtr.EsrbZ_n6iLDexZIgY5HF1A.r1rlDSoqvfxYxGSxCccjCGUAculGoOM99o5yryEraaj0Bhj6i4TfvVaIhOudmAH1OgpPxMCsH0aTEmlxVwJRJN2Ke6DEVA3hnNgPbpOJC0e4D3FNALzhgLQ5Dql9eiIZpgRov83nuw-4xUZGHK2MEkPyA8s9UEb62dNn-Ech_blIYKfljyl3cH9LiuVvd4ojLleeABBVcJSLHCQu2rTA1m4vLFJOzJYPQ5KPxO7Joh6I-2SA73WjAciL7ivUcXJcQzzAkq6Xug58vOZe7C7-_PAgL31nVXxbxkJYbSrCgsZkHpLwbT4lRS64txdRy02MkiB9i-2xNkGa5yKL5T1eyugdOTr1JaUoJeJ7aIeqTR6bxQzk8BnoQgPu2I-0-xEPlWtBxNg50UT2VP2WBqO5z1cpAuK3BomcEfMO6xNEaF7CcDInrFAEsiClf3tBpRiP5A3b4-IKSjACoxB27S3O4uoAr3ObKHjuHgN2bW_bM0dwoYoTbanzNM3EFiqD9rP9dCbq0xySMgWUtv8gWKOABtOI1LexOZM9ZbHDy0ekuaYhaTRe6hYR0XqUdo3Pwe5f_HoUWdAFSMxQZ_dJgnu0EO22-Vw2q30YN5nkzMY2php8PJ0eyH9HSw6q4jMDkzVpwE77QWojfAbsO21s7Tj4RQJRvmGGlNP2FIlgSoLjXgCj27xmXTNbYX2BVJTb03EowV6QBmEo-1xJtBdDz6bTztn0SYiv0J-U5fgGN0vYPYe-5srvNOiY7bqFoFm8r-J-kng89-z9gtcfCiIDwHDICxdLp_wPUMYQydhrTpKxit-BL3r3OSl9QR3Y16snUXmTgCxhEP75V5grTuHAC6oRKDUHc8fmUzA7JTJAmBGkmg_Thhl75WHx4FNHVi7NJDZ9ertkWIVbWmg3dwJcKXWp-xRx0gDj9v0SZ5HXeTez9u84w3TjFaQU9uargwr2pR0KqvcBJKwkblqI2W1LvdE2rJ4EqPVtvn8HO1yEei0fiHXT3A5E5pdUi5bRvvXT2Bz9j36QbmDo4decXP6oei1MTqm-T_nR466LqPd61z7AtXyOuqrWNEpOvi3pNms_ADRQUEBav1QwUQaVIb4cFI6QcZVZiBuucxA164Bv7vayIcV4UZw3ec_WMEiSEwTI2cO7t1tZdlkfLygbVySR7PpayGrvpAvxEkBmp0QM92G5m9z-0upQGlkuLF9ATaB5KLbGyetUjbPah8z_Ybrz5x__bI0r81PRs_GEtd_2sqTy8J0Uh9C0lT12Ul9rBji42t6dyNlGiibLytEP3zaY9al9xQVs7AksIzLxIP_xcu8mu4V8S0BV5D8YW8y866_9idjCQRcTXijwfz3mzOhmXVVPN3h66nYvjsiDoBm1R0sDtLFJK0wE4DiiU5F-Je7B5--IHB620Dc8YeyRcWJZn48ZVKPiyrU6n2xLnuYgUn4ht3UplvOdGZhxWwlkaEXrI1eAEMC-osMzzEiQCjieQMtmJTnaw85q-OQDhCEvsupIgTO5jIiXcREXPs9Zr7pRFqFP37Ue4OpJ4VMYtpC-MSHT21Aqi0A0IqU-kbcFR-VQUX89fVfHmyPHGKrWAfUQ121TlbB9e8k7hq7KUFV7g6G068YFHR7Qf2vVnYO-Qc_-djH-oZHU5D4fTInJWRJtqezzYSsDNbpYYC-jj3-bSVVk8L48nW1V1zwtCFmIdUy5g-I8huY8t2EwU4TkTYzGSjxHAQxX7ZE8D6NCu9bvUD3uYTTSOYzktepJc2EaeRWaRHYo1S7e-E7hfvKvXBHaSzHZGCBVOUkB6AWH7StEEVDlK7ZiREgRM6fKh1nSlVnUd1TaJUpXidNueNTW2r0g5Mfm1CKnnsdxpMjS8_TbTExPfAfiK4Tun3Q-uRiw8f45TgFgq2DBqjXODfhXbQdPLoLPKshE4YJDad7w6FvItUF5VZyfXqW0p6G_bQ7lMrgAhAHESehBYCYrIBvnaDyI6wpsYCS70chAj_P55xIiPs2NPXWFtl8sznrcns6zKDYIycnZem0r_DbpMa3N-bwe26OlGnUehAKRd3MvD3chX5yy5QHwFllXN7orGcLLOZE9FzBNK1LSVWWGId1xH8kbpLHbmWjLjCFGcssXgU4R0WU31CROaNxfDFNJ5bMFUxLkFsH5eWZHrr-xTELU7SVjvO8X1uZC_pV7e5pR5SwLNkdZ_BkqKZ-Ad7GYaG98i3omaXRHqYDKx38g1pcVSXngbjJSk0JD-MtCaj12M9s9N_7uQik64lCT9Ta5QrmJzwAgFwnaMWB7WSvKxwdhEYBoDEM8j3gkbW4yJW46c21K0Q6Cadokh0otrNmycQv_pQVMpsRWiGJl5qDF6dNq59GdscdaWvKBJmR7A17twj6m7Mu09X5HcCz_0F900O0BfVYGQ2_IJMMFP1S74jWCg9rxKkLOcWNx27Txe5Ro9VGFww2YCXGSITtG9Pf5TG22U5uWUVuOFqWc2W_OeMSwtNTXylrs7THhX1L_a0oQVvd_NCaV127iHjOoFODkrbdUUpl4eGHa4M3S0d4HU4ezbj5QOiMhsbSrDh9RWx2KnTkgYsr69ZCOcGaIznc9m8j8qLKAwUnwbQ2-ipbvxbwLr3TK6JDpK-hvru3fPqBJ_TTknlA1kYnENvgIg9FksfBVscnT3kQhJ1YPOsSEYV_loYDQjZ9L1II1Z_8SNso5BgJgCUafmndFOpXHXGIRNt8VGxdxP1kNRoEIp4W3flLAuejJo0AdPcCM1G9656zX1ZXKcv66YgLdvB9F6PnijgGVaKklFOfex4GllYfDER2Qyci00msDIx4SnGW6QmkLjZ9Bd51slRQYrO9UHPfTOuvVXN5Wi9fiXfKg6oqpf6AVOxQxDKzjJUrmO8A-67SU2-ofpKcf_DbreLCb82UgcxhS4qyR8H63vgfXL2keGyCp-DVkZGy02vdVhk2zqtbitwT6b0RD_fBeKQQ9eWEOQ3m5eANejfa12WNDFUC5lu7WHcCPoiNN-u_kFstU6jB_Z34gZkcgasmmkrxZ-kfZwa5Zd8R6W79l9DQOKf4Q5yPFI0qcdT1TAr1RS7QLTVZxVRM8shGcQ6W7ZPV1PnTA8U2tX2S-MRxknim6t8eZdrbEtOzmTjS4xxckEfrvxBqgHNXVb-jxGrFkC_WyOMIdM3HeTnYvvVDneUGBmroa0uo51oMGARUqiDxw7C8IrjsjuHmulO8KadCIXJHJf1s0yCrUGwD7vtdIdK7a_USOpC_N_O9W40Eg1C9AnlypC4mnt1sGu0pQG0WheTsxZi4XWiYooy6eDsq9V4ueeCYkgzRnjYVX7t4WVXBbLK5mHKGsZwF2uguimwHhBgIaod3o62e930jhoiupijwSDyQ28ZjEYBmteeyvzNs98OMbklTYc3qAoTor-D4IgW9SRB41xPXsrt8givAPjyCtlDELceO76DOBZrMKo2GFL6XVkZe81RW5MGIu9iHuJHN67XCNvFvq61zo4rGcqaWA5TuylLwsUliv5ptT0WZOQj8bC4RS4ZCAjLp9Rv4VjpJ2P9iLlBMKynNwZlUx_0JCJSlaW1X_zrqfv3raRLTzoF5xKMAuNZgzHap1ajjo_iuHfU8VgVfVT-FUf4UuHv-WOuSv1htYMrtrCJvaU3osUIt3Y935ieqpW6cxlv3qTWkWXA0SyGXOWMh4VfNTuOmN7lOZEPkvs9uM3rqOvk5int0ol0cyj3RacBldZnoVyLWGJtrn1YNRvTStWx-nCDrRGQLN5KFaX73jAGyu7VWVbdwxX2cxe8uylLCn-qweI-AEG1QuIMHmoYk28BjTWIo5INRyUU64edlTBkmR3i6uLoNiPEgZGXri1fbdl4A8zr3cMJ79f3SVSis4R2nfCH86U-fF9irRGcrYY_MrAxvP5tIi8HbaA1yeKFEmycXWsHdIY0fxwEGMHhD8XyDMq13riGfD2KMKKaANygR4buILU-Nl4knT2LxvqJUj7eyZQXNK3gA-Na3qGQfJgF27ZlQfyKq6LeQWSKHyMmkeJhJcXzp9wJFxZ-ib876IGZdrLMxQY1lvummSiIc_cNrARKskkepqCmusr_yav2ahH44juNVSeshcnLSXbPIRAM3Yl97X1noazR60BiESsVLN5H8nw3uEqsL_OfHFUsOWAdrcTFvfD-2xXUjfWyStu3DTyKHEBPVowwqFaROjMEZt81kgsbe8yW-baL3M3Hr1-O8-ofJ8FZH7ADnQoBHHpRfskESpcPneA3PHj_H3fQJpA9zqFuJXdTmCzJVkf34qQbUJs2YUzY7SvnH2Xfcpc4Ch1zu-YgOhu8duGouSifAi1ds52RKcK7Pldiv1xSoscetx7CXz7zxtr0WWS7RQQnCfJblLbgp-bqnv4C0tufMcXnsSUWJW3jup1j0Go5neXzrAypJ6ABD1H184yF9mEeSCIT724NgVhTMfV32COtrsb4i1AoyaDtprTgnPnI1gfz9cM5jT1oZE42UzRzycrCgABEQqpQwpjYh5m8_2jml-i6iK247sEqExajylyG_fWZxdeU8_ieAJccLgOfNZgsZv3Vnx4KjHX0DUm5MCjj6jTxkkpj0I9i1i0YSOa_8KDAy_Qlqq5QWrNF2XrZwFpGtSIZJ4e2abCHdsN2Vc8lFxkmzPv2UM-IzgxM9pSWfjrO0N66ajfLRLOXj8poSjo1v2prlIpp0C0Zw-yc8pagCuKn7nIC0i53qkEeLNoZ5brXqJVeWqlk5m5tGFykC1njpaYcyTh01Khy33QuGdNDCwxSL7M1qIrwWgbnsB3AmybezSJraOG-14pnBRsggVb9EhaJgP3-8W19P4lX6ulTTKZppyB5TfLeLaVKKTgaZDAPMh-F3VnaqlI8kxDHfU4AzzADNFZJ8v41giN3o5P7E8gfWMC-ygq33F2a5IfjESCH80LC7C6X57DtLG8E5raXL4p44x24u26VZS1xvxGaw6QwoAg2N45RFTsCUemApjTi_7jG9Zuf6IsrwQF0dd82EuNx0oWifcMMTJy1-kfafytb4BILnjxTzwUZ17nOatmNuOYEw49j1d6BvB3R1LZuuAqTxp9UeFBPP7t0At5xHYYJMHAV4k8gdxhiv8p8m76MUtQUIgzVP9PZQJA-BA1WMUXIbz0kagMNIm8QyhAMChgJyrNJ28i--8A0KLYsz8nbLycITXZeT5SERFFrqDm2xuL0eIYQDbWFQl7pZxfgOHA6IDSflJqXnxEMlwjDbv1mgCXidrELsRH_YJEEx-i6yoQ95OWCWEC8Ja5LxwrQvlRcg333g-zTL8sZYBk3N3Ypv0tVhPB9Z0BDaA8qFK2T_5Nsbx1eiLgIn6gvo-DLxNneEs98iYIE4TT18DH6B3WHKzTNvdLk0m4pt5ZYfOeGEewzhb3o8-L7pCfa2N3pSX4V_zavs7dOioEgaEcZBljxataw_gqPiokwI-2KxN7ki9w9cp9-5y2IvC_7ibcPGYqp6U0TzAGisn_QEO0Bj1Hlkdn41NM0K_khM98QKjBhIe_lLsgwhPuJCBU9RvRMBrj6AXboxbvliMxNOEMk1iQQOufrpibObMuQOyX2tWNGyAzRCzOkJaahqsg2KA4rMVmhCw5FxzosHXaFEqIQhgzXNEZ7bOsXMHvfmu-HxLBO7NL3MgBAweiJpuIA4meGAIX6X5AXAhL0XsgC4_CCkDi7GEUi5WQ8b98QJ-FTAZNxmDczFteHnLkZsQ0XCHeGrDII-a18kokWj51Z1lygoswZYSSjnaD-4-Y-Q8fADtJg641n5pmSr7ZFRz8bg5xHd4XPpBYd-S6Ibtd8uTPr3rSmsgnZzRSCN3rcBnIbpTVZy76NNLHF4-WEZYAPsVYmcK6nbXSImgfhYJKM3TWacJXaM-ST3DIi76UsW5CCtWamq6DjZZqn6kUQFeX_Bmmdokl-RBHAibUW0G7lBEpDofXlypmzbDv4uVx7vf1LmskyYkROrc2qVyOlFIx0ho8GRtqHTvPtafIVe6sr1XXuZyVLf5GVCW6bZFOQGnodlnnP6xPnuRmUvAt4UQ-HMuJyCRLCGL7wZ2WEwDcPyW5mnkCNBSvZ9_Y6SVGKBdpNq3w5lUsithQpHvHbnZbZwci4j2bsHRuvTc6ZOMe54dsaKdJ6rGFQvjbB5hcyYx8s0v_xHhBrxSWsanHL9L0shM4qvQlikVnN6fsEACniA-6sZdRhZ28CcvMnUScaZePkKYJgPczMfdt61ba0ycoyDMCIwkn_X-Bt7A8RBubnWRipfWEjqAXNZyLQ2dkifJRbqDhObvuyEc_lCBRB63ujE26riMQZZvUl_OQO4-LHG7QX3oanngPGAlTCBsGKgwhKGc94zGLnIYbYRfdZMydshX85DmvSi4Nan5AUN6R-Q0Agjx8keZBk_jp1ewixsKDa7eYEPGlt_I18BpfchpfcmG62eE7CHORu7uMqdinDnywY3vccC0PP29RatAFAaC3klfN3deXe6XeVayNOysZuZ__7Tvh8TqsaFO1OBhhKUIXHAFqFiF3QsUM38l2qlEAhjG35oZgVtfSmG10gjAOAlczeeOCIq0XNYmXYSX4dthhwrqpkCze-kHSnQ3DINq1v6ghbLVxXIaS4MNEOT26s0ix1lR79WxMlf8u99wT9cm1qpCdAjDbanaLnpZHAxdR5FyXBIYBHaOYqmNO1iZO4njinECyMak90LVA5Rt0R8qxV8T30LhwMDttcvX4SGjnqzFcZagrOybCwuo-oejjiAfvilsTD8CW83cug327swvShAARw21cuz_mqSuKWMkug2bs_B1sA2u5ViFFfvdQ8x2kSSuZE8GPTr844HTtIPg2ZqTezgFpJnFFMmMZmQXe-3RQxcOZkXi4mPYvG6dPtycgqF6I128VGPKGhugH4HfJXKoutU-VJW1SW_sMNJN-ijD4BAMDljqV-gqEorr9fyuOo5ABzlWcs_ITxEsRzYlY3HgRYSHTYKKyBLeUgnZjXAgIXnya8nuFOqIcm-HopatFcOuwumyixhGGx8X7NPXzN9JZr9z3sHem41cbaTqmr_KFPugJAp6_5EezJBQn0Tmr7_NF5ZzcjKK_TqdeiWfxmwWdlVZnWH0hfEkXVO9bHr8l61lOM6xrSeWw5nTMk08noafZ6gXId406tNovFydxI8KRL2zr_VUnIVJhJRq3AWwnS01AV2T_WlZTxYQr8v5m9pRdH1cpDTTeRfjr9Cuk9cIggQC8ya-D7gDY6ciuIk5CExgkA_gM0xeYUBDcXxgaw9a5IdgS0mZ7CzL8aw2qB_ItsnOrEOlDPZ43kR1tDFtwaaBk_KBSqFZh-C741JQXEPAeE4enk3QIsgRW9fyI-xSCZXWAO6Rjso7SXlGiMK2RbKeqPEGCoi8ecNzkWF797UuSMHKU4fb5ZLkF6L9wheNHoeRomalaVQToF1qeiQtpF0IArAQuYDRaRt5tutRbxIOx3EbbhTB54Lhoes13Oo4Y4NK8g7lAREBoncLi18Yp2Q0n45alzZLZwM-gEaBGEzJ8THaqkIgDxl2N2QfIzBYt41OyKVbLv1YnZJCIC07jlol823b7ghlGrRsNP8-I7WrkS-4zuiiVHWAmPrmXXuaJqRrz_AvLUtLm_hEGi6YCQIWl4obIJ-WW1_z4kO5MYkKK39O_SmrKhNrlOoTWFpIkrWPLsl2fdhZmx619zP_yaV6Xpy3wVp4lUnbk7SrkMwM8dTde9XtIQPK-dKgR8igcU95tQKXuoaTyG6u63WvOWewzzKkFd7U_em38Dn_9nzllX6fhNCmrVoF8eKG5KQruj_KsviEcs25QDaKF-MbgE4c8kn80hGHfpvs8vqqzNjZBiL8yR9HAqWaxd91k74IUNQyC8-7fINXSYe-WTkfuS48CdkYGCN--hVeAwLLZsGO5opvHPrrGfUEsBM6sUW5KV3Xrzt5QkIu3rEEI9Uq-ZtjqVjgIRDXlCinJvSxwd1sjIcIi2eyEoyG8u0K_-7sHWVGQTypYDEAXNOSBcMC5p7Py88gyyq4Z2ryBb6kvGirbLnkLo1lU-3vZ9jM5djDvbbT_2JujvfLGl64ugjvjhRv20FF6FDlqV3TwhNdhngK9c0O5BcTu3OERmNqhJksQWW25hW7tnQ_rGXF-h3jrnXIGY-TTvwaHO3Eg9mF199gmuELinityaY4gkznBjKYo93F52RoMxcJok29cEeakgriFzxeWeQQLu9FmaQOvq_iLxzFnXhoQ0aZ2DlklcD4a7Gl7g9J9tXrD4gnRnIzgO8lOz17-vEts-dQhwyWsYXWgLErddk1NwTXVWpCQv0cONGzv9QIlgbKC2M8pPwzuARSOvMsM24cJdjtv_0ccKwitGfAkc6qgbAL-ofopbNrsfNt3NLF6woLwGUTdzW4RPTF94tSapy6Sg3Ei9ohKYYa6uc3jwFrVZzRjsDqxktfDoGfOgdjdJw9LnfffG1I640XAHS5jL56XWFYygsnckrXWMxRYyh39JTIOtGYgR3ivFo_kTG6xn5p5lqUC6NEE6N2WJtZDoeZ9bQsnUV6D7Wxi4WTKfLxmAnsBWjggffC5PX9qLcWCqA99JWxQ746Nx-vBBU_5W5sEZEz_o2lVuRlrk1xwZ52tZSTqvyxh_q1Cl4ljrXriq-rM_AVKLP3PgA3uCPOHF5xHkFHPEl92aFt5KaAEHuGTktex1UYYeSigHu_wT2EFTNUGKyPYbU8PWx0IO8IG95frEL8rxOPO7D2ErsUkf0-kGID1RM9t8cOJFxRM_hYsNuXpBwR835jIPia_j0YcWDhamxt-Y4Mn_8EBeKxEGkQiLPLHvW_XkPMWQW4_NwfUWa1g-XnRWfZrkI-TnwscwSwP6FozIqcuiNaKAQHpJtp0odY4iMU0FoO9kW1r3kVTemMetPpDaM_GmRnvE8e1SlcsrOz9RBWAwnvFds8O-TxOp-jo6n6qhMg7JHoURUpMwb1lAHjrEaJBm9mrDysvpSsLuDuR5Nwqb6oY8eRA4izG_7HZwZBEDdbZlGkkrZPoKulbTqBFipcv6sustrwX3WltiSFkxO9EvR73MlvTMVWzXfs-J7dLvpRawoOaM7oB3DTHV8WWtu5XHCnUNIP__Br4e_-7kfgsn97irZJAbAfBgMuIgpKSqt5Iz_2zvJET2AI92RezOHxh4qgagdKvEC1Q8k0lYknknC9F_lnwmfYLHfkD7LfL5OxFTXUAQ4jSByMX9QEyINtJ4vrlL3j-tdG3_HjFuUqbktiCGhLxGFERBgy2_rSiJg-n3-9xfo3uIa_iyZp0tLU2dSRYKd-EIXHc3l2T223p-lGez8HUFcJjWMKJtga_ko5AGsNmkKR6fRl2CQCaIFimoPt8VgaZEpQjvlwKnB64LhL7Hi56AwxKzRZ9Jo_isyvAMRryUQJhJNXzdOH9GF1sTm9_pWm6ieyBLXP_WLGCExtORfnL9o5tHJy1EnAWZ7p8QmdU0sDP6kKNmNC6aquMugf9AeQqOhMmVitOIRlfNRPm61scBntn6r-nWe9Z_3NdF-U3riU5RtSm0MuM0ID5Y7gNStTCRHKlNqAv6WE0vJVkGI39-FSrd2HhMuqaK0Rx5gxTYXtrdXFfjTiFjzMHQkNpTd5EfQjzAoSR4NkX23BERNSu9zPmDnuZubUVDqxFlJC-lSHcQamZiOy7H8c5ytBcTVPLbVIPXnxQVbwPfigwHts0aEgp0LKtH22kEZWpDLu_Hxc6OpbXGVJE29HlF7R_6mSt0JUQoOiSY-UQxD0mwWHYy5H90elNtWZTPFxyfcdnZ3aCI20D0dEj3SLSUeVGbtD4W_z6etS3DNBrjgAH91PV4Chgo1V1mipMcjpUQCh6bilvWm6OxrKRrJ06mFrApa0hsCGptYbNVpT8jrcL1xuhWT0c9HvHrhuIe_G4CjCWOAj9hHIWvmB7IYTsveIdytiCfT58inkxZpiBAiVH7oWzMG4NjUmcPJRlJ336ugY84FI5KiN92ZYNxb78u8anJxa_FU6WPITAOfhFGIiMLCetsxHlGaVaBjKktXZRgwnA8sdOJwLPfOnq_Vp6U2RoUfsACS5c8hQJ0nXVYc-CxQcwOgm65l9AO_myk-KGn-99n1rYJmhkBR1C942aFj_sp4E4iXeC0y8iwHc4F4RQxbru442MYEA7Q8ioyqQPFjyLfHJo1t4gwpsPYnEkIud_ceROinWjy_Uzib5jw19T1xfKrWAZlYB64Nml39aj_C4WHfxZfdEU7Gqh0DCznDolAQOLYbAO6OzvMUzBqpr-y5M-tBQUqbfQrIyGTxMUDLXPBUPCCSpPk7eX9EqzT0xpMuzPcuQg22l8Bk-p6ydTakUjiHQRrb-_SmSfr-e88vN7zFvCQ2LsdJPbSaZx0Cw0vyLnmeCwla9gDb3lyYCmiGHj4Tluu2KHEYP_fiUqbDPOlwAQOAxFHLKAHYd2bVHUKrEAwNu7-qGs1--7gsxlcwa6oYfYHZFv91T6-KkWLtYMCB8sKYbYOraOe2aXGCJG3h-Ds0geA-sEO60HvnHwQvKHzG52xuLZZ2LVYWnniNUfpHjOIABduG_tZbg7RCxlj_Y0DOL8May5jTmwCIIMP29yOkSrFMO4l5WoNsLbQ4lWyqwVb6U7hNuGhVxT5yYuMt260Xwq97Y37syDOYr8ges5UhWN4CLpS2iDJ2o_NHWY71d3_0pklQbEVIQwJixkPEdOGfS-9mxPdS6wNmze7xPC-gcZ5qQSXQRIc6GqHA9aRYzU9vdCP86u2m5rqSF1J6qWHHrU6eFjn6RYU_OXfP1LBtoulyKJ1ZNtpk1RswxUL6-8KNVPVcXT_Ua2v_cOfjbDac9cM0pw4r50fkWJiObkAOpMksvyPiBwMjMIcusP4i4qhpjRI5pzObeijGBjOfmDuyPhckMC83JFL7Icqwpwb-DNRklPvSdDGoIw2nLyaDckggR6lD4ByfpYLDIxhROc1fOXFZNi61vLzqPCn2NF8ACfhH1PE_mhDyyvVlTQ0J0VdPpYtv5Ezcr_re-j0WvTP_8i0QhqBdnL_0xet4XMW2mIB6QC8uKnHK9efoOAT6IJx38bXcH_cf6fzoxD3LpxgPYT6fGKViZYGLJUa97dBMode9ycwQmOixhFzG3DWvb-mdXjbh61UxAqA9qW6HIxNLVBcQ4GRV7wQ1KkoAuzgida_ZF_hm_6D2zf_M20pIFMx-TctA24_rRF8ensGe49_jz7v02pzSm6O_14po95RtP_3AW95uOXonV1EeN3G--TLp7qTWGLDhm7pEDG14mgar2O-oDVCwZE0AkZwqVP97VDX3Y0rNqqwqwqEiKkB1xftvBDZo7Xd1ED4aJbS7TJnKrvUXWl7Q4T0cbFdDHaSfZi2dP47U3rR01JYKhzyb6vbPBvwEeLu8gJ3ItZMs5QrdVO7GELALGbWNL5RTFxamLlFy5eO4fH-OS6MZwh_FcA1yPrDvzrHGK-Ib7aJE97U5YEA4MuezCfDVoYDWau5SThHgRCyPD28O3PYf4ynIUtBrd3H70uN-9Pp-FlfXqjk_tmAtCAUubElcj9Gq4kMu7nExcqpNlm1pmycGvJqohrNRja0IKtiyUtr_Q1awGCw2FDvpAaCmi47tsdHttUfemP20e7LzE1l86-toB0fSdEFe7z1Jz4nC04muznsdo2qPQLokLHhd2NuWHrDPoRLnhHIppkOG-9w7046Qled6fTxykKHl8ki30-_lpoQSzHROJuKwPO1wul3i2AgdBNNVYxrbyB1dfR43vq4-uHtQ4TdSluZSeZuUmLbqgDYAwCtHRI7xNrN9mLfNxNpqrNATOOxf2xB9k5msDQclq6rZKL2aubzoIDTDKPce6f7M7UfTsnidIhMh2uA61AThdia2pU5K0iTm_rRMNJlFGeQcEf7d9hR04xq3lCk-DEkjlt_4Oqd0p3PddINPxtywZU0eSeqw5cbe5j7EUS4NB7xtF2yJSuiLQGKmIRZU6FkXF5Ul5bPBi3IyHnXQ_fP6ovPIupT6N3K8mgUSpgw0UorEahkaDNkgg5ColpRz-EbuobhV5wuLtQJ40h3otWSbYuFVWo5If8LEfBtKGNqNz55MlqDWsUm49lV4p4sFOVrgD01XFs3m4YzjKXKKbk7m4ah2pSevlAm-EVxtk7GiYzjaJ9X2rHtZGu6lw0X_53_Wcz2t-OSwZWDCaVI_ov0B4sul-MKH-yL8xHxhvqIjIWOQZeYnBlK1fJg7qkNFHClVrACX12jSX7xeBh_wGkFtfpkzkIgqg9bMH-QVwKiyftVWaZrSliBPn2EUIFzrQYNYrlZ2bTB6zXvIP607Cd7yhHT2egwEuGA46tmnhQ54Kx7cj_4fPdsEwtJGG13raBTXt-xl2n03L3elK3vQMREDjdP1lB_OGDxYSdsMaeR331_tswF923ZIcfSJDtw4vPArABngMPaiSYAUftfWsiM1hdnkjITvhE6Zo4EoJt4fPxDWNcMTtemeMobWvFLEOb9uLzDrc_pRkERZTi5aOh_HLeJi7YdBD3SFJYAw3bBV6_6q7FV-Qs4385OMi4qsClvF864jL0vNpJLR1GzIdULEPwwTkj4bKy0N-0PLFE_fzo0WrmeNCa8rxYgPxUOtso63AG50qGrQOWOi5Us_1CoyYbrF6nFZYZSzNlfDXL7h78Hb5Zz31wGIQUJcK8IJwoXsHVgAsYlzGn50c9omiqmuUgVCqKCbGrnWNr5Zy-1Y9sH1VGWfAmHhAEqAVeSTCgc9cwZD1IoBMBLspNVwNAZOKYdw8Enx2pBh4w9gCA93tk5V-1-qHGxWKoJiP3uVMYOWZ5W59iKK9yHAxAaYVzqgVbOBlDFd_2h-XIs_1rR9ciD2MPu8BUCl4-312xf4QNs2zBhnT_Asv_RKZbExlKXll9xvJaMqJsg92aviLrWsQzzDNEjOX3VNSyUkgeLRIwh8JMV9owADWfTtJz70J6CQAKdcSYBlFtn5JCGBXbyiKpjfnzTRdemJFaPgOEXLtcnwtBQ66f1JeqEvQWU7auSxRDiifyxGPfV98CYsagiTe6kyQXuBVQNpCDUVPldow8VK5vRYiNqILXXS7IqE2FDNSkTuV9xug_f4Kh06RGuymfGvqvRGyF_N13RsFkdT2nwKuilW85dX_n55hwLCi5wZvZKw_cCSVaG5Ip0uZNn2FJ95kJ-MQIR5guN7UEg0BrVfLY8kgbgvcCSlEqTd1Ds5E0TGjRWFX-BExk8foqfLODyMVHexUf92Kktv46A60dxTmC7zwMwmRUlG1_oz7rvGzffz8oTvY6EKMFPOtWw6qEcgVbVjY9_U1mQGLHMqThXJT1wpdn8eSdM2jbdMNKVoIKvDOh_6SbnRLfZSIj6JYGMmNID78ZHkFLx0HyAXj8zNaUtwWrsic5urRkURiiDA_tGFxD2ZoojqVQPLDa0J1YNwPQ99dvkv9wfMiv7CuPjmJOjb-2qubMu0GEM8odi5GCItlCFWJfBLgvYI7UWQ8GKuva8XwUt5BF4rfrCrBHR-c2Vt0_h9_rU6vUYKWe63jGNabOWK0N_kgb7eTKdc-WZdIYGQDczxcdrUPhgt41kLwys6A3Aq39XaWsK1pCZ8rURSiSDaU4tA-415e5BHW5m0cvfR3prv45UOoZA6JaTqVsxBXs8ZsLpFMdJj_EqWzUaJsChuPGWOcnml3Id0Nj1MU58n4REAsOUTBLuAelJghp8TmSlsD5wT0-s8I7OE1PGsMt5QpE7nDq_NAUjgfRjaYEHD_8_WZwARBnhnJn8eLitJFmu9u53ToYQjhG7NGfvpIMMsfV7cf4IJ6KFlEKDt833lPyH1T6AK0kCOhDf7x-83o2hFVFftIDlDgi6JpzotW8eiIgIXGpMIsttsT-0MOTYS4qHrwLhcfO67ZgfOl6BQH2fI7OrX8C4DVvzKfhSoJPem1scAvqMLWeyydiZv7Hm3H1Ivt69oWDL_eDHXaUjo-MVSMEDYgnavtMQA2jFyZFT5l2sWUs6OLNPrmLN-fITI4H6QI-apTHnDY3QRn21tSIkZotTpwL3F7yHvJbYAo-AXtF2S2V8thoqbMmHSmJD1rWTzDXEOP2DFz0NFd_0mgW2rdXur1tYmQSA83JMGMJqx5qcXPcTpANxSfUHu2DgLv8SHx-lOovYmJVWeXWH9l6ckkD8Ln_pCng7muI2kZNkwjAfNsibDaf6D7XDC7uBobEkvieRSgDaV8YMMl7-omCZ6Or5PV7eYks0ykG8e4wI1R1Yh0FxGEGFy0G5m55mE_N7sSKhzSJ4SyXOufkiGbs9b61bwtXx_h0aQwOKMI1nRNgrRt3UBgH8kRBRTe1J1HP3Wu1FUJ3qKIPS08YNkiQeqPts3wjJFXooCtU11GEImNkMRaWiVNO1mcVC1QsM9SPl2U6Nt0sSKkOvKAlKuYc30eioH2IJyUXIKqH1zTnU8XUmIWKh3eV0OUXOLKZKjkkUnjjU-nRtmo_JarsxuG0w0gcStdWyV3ZfTcQWMK-TuM0wPb_pxMVNU3rMzZJkYOm-4-4sH_KfurLu2ctXpovwRKjoc2fGu4-kAldJMMYWGgl3KsOagH0Pd0cD_vRUtzWG8PTyNQ4jD22aXwsleTU7z3WNEG90y8vDXJBfQBGmhsOPhceZHU7Uvu_N9qa2QX2gjeR8jtUcAdosrDOgX2XwNnJ-z_cPMA8RgHpn41d72WoYco8E6VbJJPIeStP2-DEfPZhuB1NueTqU_IMbYMJWgMrWvsqkNoAicLWQhgmLMmn5Zpl2wvn7jtCTGDooalsPnnvl0QyH03VyrgyyKGLzuTMc6VgRCW-IPktpFJer40A6j7pP5QNCmFAs-dkoNLif-FWZZgHqyE6fZQ-_oqUIG7Wr0yk0N24yiatn6XGSIUBxZVRvlaXLbh83Fmxbnu4pGIgppPjvA3W8fDFksrn1BVLRslZDBamKe0FxqR92CZZcYNOnTlwGPM8wS88mJhFagqhaXlx6WqzZJP3H3Ie5yowVnGwJwcz-1_dmiX_Ra8yGcw_V54u7VEG0ibKj5JA9EO8tnU5I4pvVKDv6YYYGs8ivYMKJlbxNOWSW7mnjvk1MC-iUlxyJKwjZQL_wYioxLMtlNo07QCTPH5hElRKcRS2yPg45Vjujg2fJYj-fGU-y6XR3W0E0SPujFV-nwV69mBEK08ASTlTPBs2_l1BLsO74N0-QIeokJk5kKCVlEw9EDkBzt5IEVpVVj6SCLwTzL7PVsgSFm-KzmVLpj7nyhfa8sOKG40OY55rpfmjiQHeGs_qorL9TVA3KgIX84sFAzIGlM0N9gQbXFeoPmrn70KxBioLoEyh96bfG27BoNZw23RSoxI3KpP3qUtFzquC-15MU0ida5lcYVw4pLFGVcGlK6OZy6-5SW81lMgOfBEbVzy1qklGfmfdImhcvVffssLqjWToB7Wmt_4v-JBD00Ng8-7GwUm6YkmiDdRC-cH4oCrEU14zyS90XTYLuDchiNfDG-YJLTcCiz64W8nDkLQiq933J-Oz5-CEli6CI2zfFOas3ios9gS9xcwHW5roth-ahts3prj5P1WxJlCsooY25bItn3DTXBYsTv8HDbgycBor2tuT0ziTdJ6nFDR9TqWGdd47fy8kELUGEoSkQu1xNuwXYZUvNvdJBP8twaD_1JIvstt6UtYGI4we15gPZ97IHgz2fGDgdmEYTHLKQrMpIGu0DHuHgNZMlPBxP4xO-YROIShUeZSuPeNpb6tk8-3W6sWV9XWnXS2QwCD99PQdV49LMR1sjKo9wb0cxcl98nB9SiJkUVBtzBjWa4CXoMqizOVGbbTUiPSMGrAtRUywODHSsX5BXNfs05UonSAC54YEgXfrlzs_WoFYCiHvM94bZF_0c4Yqe_XoHu-mZMLEEbQ9nkhxeV7rZKhDCHxPUMhIJIJMsOxCX67AnY4h20BWRmItKaKFHxqv2CzMqvLtzs-k9dilP9y-9roGmKC2gdZZni6ZuFn5pCsYixyOTQsKM8tYMpRveUz9bt57rRjb1xCe_sdVClIDWAa6vxklrI_GQ_xTLIKTKgwry7mu3XWU_qxxg6uKjpJEje6w3y3xN52_WKm3y1_sXjbNz3OTsb2IvGnJw5eV8BxQweMlMSOjeTYPowHOMwo4rwfTaoXdXra2RknvnbRUAh-TMycsG_HGtN4MUXzdLDt71SLo467azaMkF3S4HWWCIm9PJMOouszM-C32UnwC44EMkoUEWCN4yBcrll39jvRHMeB-AWE3aFJ9VmQwVHm-ZYTseLd77NZTe9qr-vwtnNOGA9ADxJTOk093vZrJhd9w-LepU8p5VGVPplUwWqUb7QcdsibqHMmcJnhosC_TLG4tattkRH42v_s37EFssZCRK8vBqlGcqYKLUFcPEzrQOlJqRJkf1IVQzNZWvp-DdYWFDZ-VkxyWJAYT1dlyd59pqcmt4lMoym0FR6D7w9lcHNtePCuZwMDQaWjVtjloBmQ_dnuD0rTDzpCuWVDuXYprfBtB74v8XBp2STsyHq6gZLZr5mmxzIJVzFGHEl-G3xyjKZ3yioe_L5aPUXQ76dz0IM2lZ_cx34ZiT2ysoWF3jI-R85TV-retuXpwS1K-ZCtndNwnsxFHTKwQyN-9Hp3GUoweO5vwbzO6Q.Vn7_b5GyazRU9j-OivopE0TYYXTj-l6zQDd0kZRJziU";

        await agent.backup.restore(backupJWE);

        const expected = JSON.parse(JSON.stringify(Fixtures.Backup.backupJson));
        expect(stubRestore).to.have.been.calledWith(expected);
      });

      test("round trip integration", async () => {
        // empty db of linksecret
        (store as any).cleanup();
        sandbox.stub(pluto, "backup").resolves(Fixtures.Backup.backupJson);
        const spyRestore = sandbox.spy(pluto, "restore");

        const jwe = await agent.backup.createJWE();
        await agent.backup.restore(jwe);

        expect(jwe).to.be.a("string");

        // running SERDE to remove nil values, which will happen during backup/restore
        const expected = JSON.parse(JSON.stringify(Fixtures.Backup.backupJson));
        expect(spyRestore).to.have.been.calledWith(expected);
      });
    });

    describe("prepareRequestCredentialWithIssuer", () => {
      const credentialPreview: CredentialPreview = {
        type: ProtocolType.DidcommCredentialPreview,
        attributes: [
          {
            name: "name",
            value: "javi",
            mimeType: "text",
          },
        ],
      };
      const mypeerDID = new DID(
        "did",
        "peer",
        "2.Ez6LSms555YhFthn1WV8ciDBpZm86hK9tp83WojJUmxPGk1hZ.Vz6MkmdBjMyB4TS5UbbQw54szm8yvMMf1ftGV2sQVYAxaeWhE.SeyJpZCI6Im5ldy1pZCIsInQiOiJkbSIsInMiOnsidXJpIjoiaHR0cHM6Ly9tZWRpYXRvci5yb290c2lkLmNsb3VkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ"
      );
      const validPeerDID = DID.fromString(
        `did:peer:2.Ez6LSoHkfN1Y4nK9RCjx7vopWsLrMGNFNgTNZgoCNQrTzmb1n.Vz6MknRZmapV7uYZQuZez9n9N3tQotjRN18UGS68Vcfo6gR4h.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHBzOi8vZXhhbXBsZS5jb20vZW5kcG9pbnQiLCJyIjpbImRpZDpleGFtcGxlOnNvbWVtZWRpYXRvciNzb21la2V5Il0sImEiOltdfX0`
      );

      const createOffer = (credType: CredentialType) => {
        const credentialMap = new Map();
        if (credType === CredentialType.JWT) {
          credentialMap.set(
            "prism/jwt",
            Fixtures.Credentials.JWT.credentialPayload
          );
        } else if (credType === CredentialType.AnonCreds) {
          credentialMap.set(credType, Fixtures.Credentials.Anoncreds.credentialOffer);
        }

        return OfferCredential.build(
          credentialPreview,
          mypeerDID,
          validPeerDID,
          "threadID123456",
          credentialMap
        );
      };

      it("Should throw when linkSecret is not found - Anoncreds", () => {
        const offer = createOffer(CredentialType.AnonCreds);

        // const offer = createOffer(credType);
        sandbox.stub(pluto, "getLinkSecret").returns(Promise.resolve(null));

        expect(agent.prepareRequestCredentialWithIssuer(offer)).to.eventually.be
          .rejected;
      });


      describe("Should create a credential request from a valid didcomm CredentialOffer Message", () => {
        it(`CredentialType [${CredentialType.AnonCreds}]`, async () => {
          const anonCreds = await AnoncredsLoader.getInstance();
          const linkSecret = Fixtures.Credentials.Anoncreds.linkSecret;

          sandbox
            .stub(pluto, "getLinkSecret")
            .resolves(linkSecret);

          sandbox
            .stub(pollux as any, "fetchCredentialDefinition")
            .resolves(Fixtures.Credentials.Anoncreds.credentialDefinition);

          const offer = Fixtures.Credentials.Anoncreds.credentialOfferMessage;

          const requestCredential =
            await agent.prepareRequestCredentialWithIssuer(offer);

          expect(requestCredential).to.be.instanceOf(RequestCredential);
          expect(requestCredential.to?.toString()).to.equal(
            offer.from?.toString()
          );
          expect(requestCredential.from.toString()).to.equal(
            offer.to?.toString()
          );

          expect(requestCredential.body.formats).to.be.an("array");
          expect(requestCredential.body.formats).to.have.length(1);
          // expect(requestCredential.body.formats[0].format).to.equal(credType);

          const foundAttachment = requestCredential.attachments.find(
            ({ id }) => id === requestCredential.body.formats[0].attach_id
          );

          expect(foundAttachment).to.not.be.undefined;
          expect(foundAttachment?.format).to.equal("anoncreds/credential-request@v1.0");
        });

        it(`CredentialType [${CredentialType.JWT}]`, async () => {

          // const offer = createOffer(CredentialType.JWT);
          const offer = Fixtures.Credentials.JWT.credentialOfferMessage;

          const requestCredential = await agent.prepareRequestCredentialWithIssuer(offer);

          expect(requestCredential).to.be.instanceOf(RequestCredential);
          expect(requestCredential.to?.toString()).to.equal(
            offer.from?.toString()
          );
          expect(requestCredential.from.toString()).to.equal(
            offer.to?.toString()
          );

          expect(requestCredential.body.formats).to.be.an("array");
          expect(requestCredential.body.formats).to.have.length(1);
          // expect(requestCredential.body.formats[0].format).to.equal(credType);

          const foundAttachment = requestCredential.attachments.find(
            ({ id }) => id === requestCredential.body.formats[0].attach_id
          );

          expect(foundAttachment).to.not.be.undefined;
          expect(foundAttachment?.format).to.equal("prism/jwt");
        });

      });

      for (let credType of [CredentialType.W3C, CredentialType.Unknown]) {
        it(`CredentialType [${credType}] - not implemented - should throw`, async () => {
          const offer = createOffer(credType);

          expect(agent.prepareRequestCredentialWithIssuer(offer)).to.eventually.be
            .rejected;
        });
      }
    });

    describe("processIssuedCredentialMessage", () => {
      it("no attachment - throws", () => {
        const issueCredential = new IssueCredential(
          { formats: [] },
          [],
          new DID("did", "prism", "from"),
          new DID("did", "prism", "to")
        );

        const result = agent.processIssuedCredentialMessage(issueCredential);

        expect(result).to.eventually.be.rejected;
      });

      describe("JWTCredential", () => {
        const parseCredentialResult = { mock: "JWTCredential" };
        const jwtPayload = Fixtures.Credentials.JWT.credentialPayload;
        const json = JSON.stringify(jwtPayload);
        const encoded = Buffer.from(json).toString("base64");
        const base64Data = base64url.baseEncode(
          Buffer.from(`jwtPart0.${encoded}.jwtPart2`)
        );

        const issueCredential = new IssueCredential(
          { formats: [{ attach_id: "attach_id", format: CredentialType.JWT }] },
          [{ id: "attach_1", format: "prism/jwt", data: { base64: base64Data } }],
          new DID("did", "prism", "from"),
          new DID("did", "prism", "to"),
          "test-revocation-thid"
        );

        it("Should revoke a JWT Credential", async () => {
          const revocationIssueMessage = new IssueCredential(
            { formats: [{ attach_id: "attach_id", format: CredentialType.JWT }] },
            [{ id: "attach_1", format: "prism/jwt", data: { base64: base64Data } }],
            new DID("did", "prism", "from"),
            new DID("did", "prism", "to"),
            "12345"
          );
          const thid = revocationIssueMessage.thid!;

          const revocationMessage = new RevocationNotification(
            {
              issueCredentialProtocolThreadId: thid
            },
            new DID("did", "prism", "from"),
            new DID("did", "prism", "to")
          );

          await agent.pluto.storeMessage(revocationIssueMessage.makeMessage());

          await agent.connectionManager.processMessages([{
            attachmentId: "123",
            message: revocationMessage.makeMessage()
          }]);

          const [revokedCredential] = await agent.pluto.getAllCredentials();

          expect(revokedCredential).to.not.equal(undefined);
          expect(revokedCredential!.isRevoked()).to.equal(true);
        });

        it("Pollux.parseCredential is called with correct decoded data and CredentialType", async () => {
          sandbox.stub(pluto, "storeCredential").resolves();

          const stubParseCredential = sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);

          await agent.processIssuedCredentialMessage(issueCredential);

          const credData = base64url.baseDecode(base64Data);
          expect(stubParseCredential).to.have.been.calledOnceWith(credData, {
            type: CredentialType.JWT,
          });
        });

        it("Pluto.storeCredential is called with result of parseCredential", async () => {
          sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);

          const stubStoreCredential = sandbox
            .stub(pluto, "storeCredential")
            .resolves();

          await agent.processIssuedCredentialMessage(issueCredential);

          expect(stubStoreCredential).to.have.been.calledOnceWith(
            parseCredentialResult
          );
        });

        it("result of Pollux.parseCredential is returned", async () => {
          sandbox.stub(pluto, "storeCredential").resolves();
          sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);

          const result =
            await agent.processIssuedCredentialMessage(issueCredential);

          expect(result).to.equal(parseCredentialResult);
        });
      });

      describe("AnonCreds", () => {
        const parseCredentialResult = { mock: "AnonCredsCredential" };
        const encoded = Buffer.from("testing").toString("base64");
        const base64Data = base64url.baseEncode(
          Buffer.from(`jwtPart0.${encoded}.jwtPart2`)
        );

        const issueCredential = new IssueCredential(
          {
            formats: [
              { attach_id: "attach_id", format: CredentialType.AnonCreds },
            ],
          },
          [{ id: "attach_1", format: "anoncreds/credential@v1.0", data: { base64: base64Data } }],
          new DID("did", "prism", "from"),
          new DID("did", "prism", "to"),
          "thid"
        );

        it("Pluto.getCredentialMetadata returns nullish - throws", async () => {
          sandbox.stub(pluto, "storeCredential").resolves();
          sandbox.stub(pluto, "getLinkSecret").resolves();
          sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);
          sandbox.stub(pluto, "getCredentialMetadata").resolves(undefined);

          const result = agent.processIssuedCredentialMessage(issueCredential);

          expect(result).to.eventually.be.rejected;
        });

        it("Pluto.getCredentialMetadata gets called with issueCredential.thid", async () => {
          sandbox.stub(pluto, "storeCredential").resolves();
          sandbox.stub(pluto, "getLinkSecret").resolves();
          sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);

          const stubFetchCredentialMetadata = sandbox
            .stub(pluto, "getCredentialMetadata")
            .resolves(new CredentialMetadata(CredentialType.AnonCreds, "mock", { mock: "CredentialMetadata" }) as any);

          await agent.processIssuedCredentialMessage(issueCredential);

          expect(stubFetchCredentialMetadata).to.have.been.calledOnceWith(issueCredential.thid);
        });

        it("Pollux.parseCredential is called with correct decoded data and CredentialType, LinkSecret, CredentialMetadata", async () => {
          const getLinkSecretResult = new LinkSecret("linkSecret123");
          const fetchCredentialMetadataResult = new CredentialMetadata(CredentialType.AnonCreds, "mock", { mock: "CredentialMetadata" });
          sandbox.stub(pluto, "storeCredential").resolves();
          sandbox.stub(pluto, "getLinkSecret").resolves(getLinkSecretResult);
          sandbox
            .stub(pluto, "getCredentialMetadata")
            .resolves(fetchCredentialMetadataResult as any);

          const stubParseCredential = sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);

          await agent.processIssuedCredentialMessage(issueCredential);

          const credData = base64url.baseDecode(base64Data);
          expect(stubParseCredential).to.have.been.calledOnceWith(credData, {
            type: CredentialType.AnonCreds,
            linkSecret: getLinkSecretResult.secret,
            credentialMetadata: fetchCredentialMetadataResult.toJSON(),
          });
        });

        it("Pluto.storeCredential is called with result of parseCredential", async () => {
          sandbox.stub(pluto, "getLinkSecret").resolves(new LinkSecret("linkSecret123"));
          sandbox
            .stub(pluto, "getCredentialMetadata")
            .resolves(new CredentialMetadata(CredentialType.AnonCreds, "mock", { mock: "CredentialMetadata" }) as any);
          sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);

          const stubStoreCredential = sandbox
            .stub(pluto, "storeCredential")
            .resolves();

          await agent.processIssuedCredentialMessage(issueCredential);

          expect(stubStoreCredential).to.have.been.calledOnceWith(
            parseCredentialResult
          );
        });

        it("result of Pollux.parseCredential is returned", async () => {
          sandbox.stub(pluto, "storeCredential").resolves();
          sandbox.stub(pluto, "getLinkSecret").resolves(Fixtures.Credentials.Anoncreds.linkSecret);
          sandbox
            .stub(pluto, "getCredentialMetadata")
            .resolves(new CredentialMetadata(CredentialType.AnonCreds, "mock", Fixtures.Credentials.Anoncreds.credentialRequestMeta) as any);
          sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);

          const result =
            await agent.processIssuedCredentialMessage(issueCredential);

          expect(result).to.equal(parseCredentialResult);
        });
      });

      it("Should be able to parse a credential and convert it into a storable object from a valid didcomm CredentialIssue Message", async () => {
        sandbox.stub(pluto, "storeCredential").resolves();
        sandbox.stub(pluto, "getLinkSecret").resolves(Fixtures.Credentials.Anoncreds.linkSecret);
        sandbox
          .stub(pluto, "getCredentialMetadata")
          .resolves(new CredentialMetadata(CredentialType.AnonCreds, "mock", Fixtures.Credentials.Anoncreds.credentialRequestMeta) as any);
        sandbox
          .stub(pollux as any, "fetchCredentialDefinition")
          .resolves(Fixtures.Credentials.Anoncreds.credentialDefinition);

        const payload = Fixtures.Credentials.Anoncreds.credentialIssued;
        const encoded = Buffer.from(JSON.stringify(payload));
        const base64Data = base64url.baseEncode(encoded);

        const issueCredential = new IssueCredential(
          {
            formats: [
              { attach_id: "attach_id", format: CredentialType.AnonCreds },
            ],
          },
          [{ id: "attach_1", format: "anoncreds/credential-offer@v1.0", data: { base64: base64Data } }],
          new DID("did", "prism", "from"),
          new DID("did", "prism", "to"),
          "thid"
        );

        const result =
          await agent.processIssuedCredentialMessage(issueCredential);

        expect(result).to.be.an.instanceOf(Credential);
        expect(result.isStorable()).to.be.true;

        const storable = (result as any as StorableCredential).toStorable();
        expect(storable).not.to.be.undefined;
      });
    });

    describe("createPresentationForRequestProof", () => {
      const didFrom = DID.from("did:peer:2.Ez6LSfhufN8b8EufbxPNRh88YYvjpf7uuVfa3tMG4nKeFK2wX.Vz6Mkf2USnehnAgu263PfyTDsB7KhjuR64wMa3Y4XLHi3KuQS.SeyJ0IjoiZG0iLCJzIjoiaHR0cDovLzE5Mi4xNjguMS4xNjU6ODAwMC9kaWRjb21tIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfQ");
      const didTo = DID.from("did:peer:2.Ez6LSjNzhLeoBEL67PHWSq6X7A7YFuQpcqs13g3cYJTRFyhpu.Vz6MkemtLC5RN1bwBopgZVgXpRRXoigbZjKQt8NHEiJR1eAQ1.SeyJyIjpbXSwicyI6ImRpZDpwZWVyOjIuRXo2TFNnaHdTRTQzN3duREUxcHQzWDZoVkRVUXpTanNIemlucFgzWEZ2TWpSQW03eS5WejZNa2hoMWU1Q0VZWXE2SkJVY1RaNkNwMnJhbkNXUnJ2N1lheDNMZTRONTlSNmRkLlNleUowSWpvaVpHMGlMQ0p6SWpvaWFIUjBjSE02THk5emFYUXRjSEpwYzIwdGJXVmthV0YwYjNJdVlYUmhiR0Z3Y21semJTNXBieUlzSW5JaU9sdGRMQ0poSWpwYkltUnBaR052YlcwdmRqSWlYWDAiLCJhIjpbXSwidCI6ImRtIn0");

      describe("Anoncreds", () => {
        test("AnoncredsCredential + AnoncredsPresentationRequest - returns Presentation", async () => {
          sandbox.stub(pluto, "getLinkSecret").resolves(Fixtures.Credentials.Anoncreds.linkSecret);

          sandbox.stub(pollux as any, "fetchSchema")
            .resolves(Fixtures.Credentials.Anoncreds.schema);

          sandbox.stub(pollux as any, "fetchCredentialDefinition")
            .resolves(Fixtures.Credentials.Anoncreds.credentialDefinition);

          const credential = new AnonCredsCredential(Fixtures.Credentials.Anoncreds.credential);
          const request = new RequestPresentation(
            { proofTypes: [] },
            [Fixtures.PresentationRequests.AnoncredsAttachment],
            didFrom,
            didTo
          );

          const result = await agent.createPresentationForRequestProof(request, credential);

          expect(result).to.be.instanceOf(Presentation);
          expect(result).to.have.property("attachments")
            .to.be.an("array")
            .to.have.length(1);
          const attached = result.attachments[0];
          // TODO: what should this be?
          // expect(attached).to.have.property("mediaType", "prism/jwt");
          expect(attached).to.have.property("data");
          expect(attached.data).to.have.property("base64").to.be.a("string");

          // expect(result).to.have.property("body");
          // expect(result.body).to.have.property("comment", request.body.comment);
          // expect(result.body).to.have.property("goalCode", request.body.goalCode);

          expect(result).to.have.property("from", request.to);
          expect(result).to.have.property("to", request.from);
          // expect(result).to.have.property("thid", request.thid);
        });
      });

      describe("JWT", () => {
        let stubGetDIDPrivateKeysByDID;

        beforeEach(() => {
          stubGetDIDPrivateKeysByDID = sandbox
            .stub(pluto, "getDIDPrivateKeysByDID")
            .resolves([Fixtures.Keys.secp256K1.privateKey as any]);
        });

        test("JWTCredential + JWTPresentationRequest - returns Presentation", async () => {
          const jwt = new JWT(CastorMock);
          const payload: JWTCredentialPayload = {
            iss: "did:prism:da61cf65fbf04b6b9fe06fa3b577fca3e05895a13902decaad419845a20d2d78:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-ixJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-iw",
            nbf: 23456754321,
            exp: 2134564321,
            sub: "did:prism:da61cf65fbf04b6b9fe06fa3b577fca3e05895a13902decaad419845a20d2d78:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-ixJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-iw",
            vc: {} as any
          };
          const jwtString = await jwt.sign({
            issuerDID: DID.fromString("did:prism:da61cf65fbf04b6b9fe06fa3b577fca3e05895a13902decaad419845a20d2d78:Ct8BCtwBEnQKH2F1dGhlbnRpY2F0aW9uYXV0aGVudGljYXRpb25LZXkQBEJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-ixJkCg9tYXN0ZXJtYXN0ZXJLZXkQAUJPCglzZWNwMjU2azESIP0gMhTAVOk7SgWRluzmeJIjtm2-YMc6AbrD3ePKJQj-GiDZlsa5pQuXGzKvgK10D8SzuDvh79u5oMB7-ZeJNAh-iw"),
            privateKey: Fixtures.Keys.secp256K1.privateKey,
            payload: payload,
          });

          const credential = JWTCredential.fromJWS(jwtString);
          const request = new RequestPresentation(
            { proofTypes: [] },
            [Fixtures.PresentationRequests.JWTAttachment],
            didFrom,
            didTo
          );

          const result = await agent.createPresentationForRequestProof(request, credential);

          expect(result).to.be.instanceOf(Presentation);
          expect(result).to.have.property("attachments")
            .to.be.an("array")
            .to.have.length(1);
          const attached = result.attachments[0];
          // expect(attached).to.have.property("mediaType", "prism/jwt");
          expect(attached).to.have.property("data");
          expect(attached.data).to.have.property("base64").to.be.a("string");

          expect(result).to.have.property("body");
          expect(result.body).to.have.property("comment", request.body.comment);
          expect(result.body).to.have.property("goalCode", request.body.goalCode);

          expect(result).to.have.property("from", request.to);
          expect(result).to.have.property("to", request.from);
          expect(result).to.have.property("thid", request.thid || request.id);
        });

        test("Attachment format - not JWT - throws", () => {
          const credential = JWTCredential.fromJWS(Fixtures.Credentials.JWT.credentialPayloadEncoded);
          const request = new RequestPresentation(
            { proofTypes: [] },
            [{ ...Fixtures.PresentationRequests.JWTAttachment, format: "wrong" }],
            didFrom,
            didTo
          );

          const result = agent.createPresentationForRequestProof(request, credential);

          expect(result).to.eventually.be.rejected;
        });

        test("Credential.subjectDID - invalid - throws", async () => {

          const jwt = new JWT(CastorMock);
          const payload: JWTCredentialPayload = {
            iss: "did:test:123",
            sub: undefined as any,
            nbf: 23456754321,
            exp: 2134564321,
            vc: {} as any
          };
          const jwtString = await jwt.sign({
            issuerDID: DID.fromString("did:issuer:123"),
            privateKey: Fixtures.Keys.secp256K1.privateKey,
            payload: payload,
          });

          const credential = JWTCredential.fromJWS(jwtString);
          const request = new RequestPresentation(
            { proofTypes: [] },
            [Fixtures.PresentationRequests.JWTAttachment],
            didFrom,
            didTo
          );

          const result = agent.createPresentationForRequestProof(request, credential);

          expect(result).to.eventually.be.rejected;
        });

        test("Credential.subjectDID - doesn't match PrivateKey - throws", async () => {
          stubGetDIDPrivateKeysByDID.resolves([]);

          const jwt = new JWT(CastorMock);
          const payload: JWTCredentialPayload = {
            iss: "did:test:123",
            nbf: 23456754321,
            exp: 2134564321,
            sub: "did:test:123",
            vc: {} as any
          };
          const jwtString = await jwt.sign({
            issuerDID: DID.fromString("did:issuer:123"),
            privateKey: Fixtures.Keys.secp256K1.privateKey,
            payload: payload,
          });

          const credential = JWTCredential.fromJWS(jwtString);
          const request = new RequestPresentation(
            { proofTypes: [] },
            [Fixtures.PresentationRequests.JWTAttachment],
            didFrom,
            didTo
          );

          const result = agent.createPresentationForRequestProof(request, credential);

          expect(result).to.eventually.be.rejected;
        });
      });

      describe("Fail cases", () => {
        test("RequestPresentation.attachments - empty - throws", async () => {
          const jwt = new JWT(CastorMock);
          const payload: JWTCredentialPayload = {
            iss: "did:test:123",
            nbf: 23456754321,
            exp: 2134564321,
            sub: "did:test:123",
            vc: {} as any
          };
          const jwtString = await jwt.sign({
            issuerDID: DID.fromString("did:issuer:123"),
            privateKey: Fixtures.Keys.secp256K1.privateKey,
            payload: payload,
          });

          const credential = JWTCredential.fromJWS(jwtString);
          const request = new RequestPresentation(
            { proofTypes: [] },
            [],
            didFrom,
            didTo
          );

          const result = agent.createPresentationForRequestProof(request, credential);

          expect(result).to.eventually.be.rejected;
        });

        test("Credential - not matched - throws", async () => {
          const request = new RequestPresentation(
            { proofTypes: [] },
            [Fixtures.PresentationRequests.JWTAttachment],
            didFrom,
            didTo
          );
          const payload: JWTCredentialPayload = {
            iss: "did:test:123",
            nbf: 23456754321,
            exp: 2134564321,
            sub: Fixtures.DIDs.prismDIDDefault.toString(),
            vc: {} as any
          };
          const jwt = new JWT(CastorMock);
          const jwtString = await jwt.sign({
            issuerDID: DID.fromString("did:issuer:123"),
            privateKey: Fixtures.Keys.secp256K1.privateKey,
            payload: payload,
          });

          const credential = JWTCredential.fromJWS(jwtString);
          const result = agent.createPresentationForRequestProof(request, credential);
          expect(result).to.eventually.be.rejected;

        });
      });
    });
  });
});
