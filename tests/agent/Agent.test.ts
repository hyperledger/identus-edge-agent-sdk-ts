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
  AttachmentDescriptor,
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
import { base64, base64url } from "multiformats/bases/base64";
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
import { mockPluto } from "../fixtures/inmemory/factory";


chai.use(SinonChai);
chai.use(chaiAsPromised);
const expect = chai.expect;
const seed: Seed = {
  value: new Uint8Array([69, 191, 35, 232, 213, 102, 3, 93, 180, 106, 224, 144, 79, 171, 79, 223, 154, 217, 235, 232, 96, 30, 248, 92, 100, 38, 38, 42, 101, 53, 2, 247, 56, 111, 148, 220, 237, 122, 15, 120, 55, 82, 89, 150, 35, 45, 123, 135, 159, 140, 52, 127, 239, 148, 150, 109, 86, 145, 77, 109, 47, 60, 20, 16])
};

let agent: Agent;
let pluto: IPluto;
let pollux: Pollux;
let castor: CastorType;
let sandbox: sinon.SinonSandbox;
let store: Pluto.Store;
let apollo: Apollo
let mercury: Mercury;
let polluxInstance: Pollux;


async function createAndStartBackupRestoreAgent(
  fnPluto: IPluto, jws?: string) {

  await fnPluto.start()

  const didHigherFunctions = new AgentDIDHigherFunctions(
    apollo,
    castor,
    fnPluto,
    new BasicMediatorHandler(DID.fromString("did:peer:123456"), mercury, fnPluto),
    seed
  );

  const agentCredentials = new AgentCredentials(
    apollo,
    castor,
    fnPluto,
    polluxInstance,
    seed,
    mercury,
    didHigherFunctions
  );

  const connectionsManager = ConnectionsManagerMock.buildMock({
    castor,
    mercury,
    pluto: fnPluto,
    agentCredentials,
    options: {
      experiments: {
        liveMode: false
      }
    }
  });

  const restoreAgent = Agent.instanceFromConnectionManager(
    apollo,
    castor,
    fnPluto,
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

  if (jws) {
    await restoreAgent.backup.restore(jws);
  }
  return restoreAgent
}

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
    apollo = new Apollo();
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
    mercury = new Mercury(castor, didProtocol, httpManager);

    polluxInstance = new Pollux(apollo, castor);
    const handler = new BasicMediatorHandler(DID.fromString("did:peer:123456"), mercury, pluto);


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
        const backupJWE = 'eyJhbGciOiJFQ0RILUVTK0EyNTZLVyIsImVuYyI6IkEyNTZDQkMtSFM1MTIiLCJlcGsiOnsieCI6IjB1WVROdEdVOHBmajIzUHlsRkVmRTNaVzFCaFJ3R3NCVE13ZU1NSDFtUjAiLCJjcnYiOiJYMjU1MTkiLCJrdHkiOiJPS1AifX0.WydXcEk9-uHwtA0YZX_XdtU8XjuM1Nmt5h57aqJG4S1ICBOyLDTo9Z9G0Syfqm6O1oaKim4nYlHaOH8IxmLaz6RAlLQck1Tm.oiGvnVUY5ZhbCLlXHHZ9OA.otbhQOrLTPvHPbpy2Y0onMdPSmGkMLWRzAAqOVspEWwp4_Nh3_orbF45eOR2y_43kbzFr347vrCDGG5YahCl5b8fxtedpjA3MV-UrncKnCGgiFA9d-4s18PtdYlvbORt9p4QG0uU6ICNj0kzlSctmd8JlSlWATiHippOxrvAEZF3OnhM9mYLhcj7aGefgObBkfaO6qVbDOOIKN4vhtPHWW2NzycqaX1GD0Vvyz1UaYzphVXiq2tTGfYTIrNJ2n7t7sj7maqLOvJrBzTFQKywR01Q6kELpvIHewOIZZXdMvVam0t28y7iJZc8_M5RchDQZt3mmwCSQcHs9JXxrA3lDtkNLlDz45geYEQGzbBGMFD3dn6oXdVXPc3DKVKWi80u1jgFpuJX8ZSQQJQmm6E6Us-NJO2K3hbVq07YakbefLvXuw5IBh24NSxojnC1slEaZJ-33kHaJx-_QUmBJI-1W69XYcjQuztcMMM50GRjdaplcTeRb5JOpJu8dimdf1UPxyDgiQxirTsSWXJviRMBHkhmr7hSV6n5Xjmj_GaHYk6tTxen-sWNkSkxkFjCLq-p_2i2Qau8UVjdblG2y4-ckpoD_mjl_DCFBirQauhaAi49cZ5J8WZisIT6jUDs0Q4-GMb_yXjYs7_ksr1beqIUvIR2fwbTZUBdFvYFO5RpyMu_LnzEtYiPhsn5uRYwVNkkp-jEXGcucl99bsVp3tZlSLqDiDjooa3WsK2obbcd47pj0ZtSFoW0OCYpbC32Tn47CPlPb8PatoREwuxZyMyGd3EQYMTMajQ5lrQapv1Q4qprAz8I8ogduue1W522vTES8Yl6Dkm7ASsgUo5bOXkvh4iAaBnaZ5fBVOKUubcl6Acu_-7b-bbdPjkgesdq2__gOeD5ESkMDdGYYpcq92Ha4g7Lv_kpIs7uLvJfUk0ziyEOMjmSwXaenCdmWHikKTfG7Rz8nKwkCg7ZX_jwUS84mPIJI-ZVDEmMtis5nEzbygldfi-w0KlbjnhpYm3o9lRVw8-dXBZTVCEAMLRDIOANOUJp5j6e5f4zBuuMeSW31sG29jLFDg8qBAUvEg6dVPdCJjIuGkZTH36RUz348OXgUiaYFwkAPYH19zjZGGU9DzepL7l7t6P0Duqn2n4Tc2DbPDucFFTUkRneMCGTB-Z9VvT0Gn7j4YTru-EcNQ6pZyvv-eUOJUDliSPaBshMfJHOucUoLoQkbtrKXRONgVmmHzn5rSCXYG7yFh-iGzcJKg4AUbtty-VuBb86CvQxZ8fTdm2IvLG7qAq3mgWU1yF5VE0yF7c20pePJRqmUb9C0HcNT-8OX1XjBEcCZauKT4RO3rD62BLMVRyUUGZQoRJW1p3U2SLDmrZiEPNcnVKCJgeQnRvxi_aYUc5hjt76VGgDYqPhmyh428nKAFIsqaJK9IpjDw1cYhXhLo6EIoyvBt0NcGY_yR0c2v29NJ3Q6S74ct_GndERV6xOsRyhr4odzeaVBI94jVO6DPKQl7Pvwqf4BaPQnIA7xVV14NSB5aZ4xZv20NJjG6yepx34nePrsZPSdQXBK9McXVodAIF0LpuwmOpoLa34z7cAPsxw-297uAjj7_xqDimC90g00GXzTn_p2E7cjZPrQisAkkaxuuDbiNBydxCg2cJ9niAqCQ7ggxDjuOBuaouQBrgBlNh4CcWCpalE_xPvKLfa1ooYTDJdAWXhZpt7p5HdYorIcC7GOZpn1FfMd0UrI8ymyqEUMJVUNBdLbFbkd5jOjFpUjL3jYSIZ1GfqJek2ACi-8ddcubXmFZtN0Pu1CIfJGLMifJn4MKZPa-MJB9wEaNoOc9fFV4kYw1der3WbVY8mDnhdoCUCYYYI7dsVd9ul9VzLHf9mctD60mHpnwj87E5XoR89i0D3aWUMDhdYRhXw-JyRE5frmi7EUrLWWiStsLcXJK5-TkOFB_U8CDbHsccc6UuAOQtmx90FDQXUNXjM_eDkBdS2BsInL8MYi24r4dKLrjwPMddvqr4eYL1rILi4vW8zx-RSCuPvF0K58GZ0KotLf-o8YyTQ5JmO1AszLahEptMqGWcx3lDGqqhIghuxD35fr8ub9nNwpF2To8AnQDNgWgWGhUNt2clkdvK2GXv3hpcd8iaE4MJ83NAt22xaKHBPF9BfUDtnSnVO9tT64GXh5W0dt3yNVsfA1YTlwghBrB2cIapTDNR_NJCfJbpLy4hLH7IYKbN8OiMtmj2ZBJwl2mEb1YJR3fY2s0z_qmXO_DUr6OZwxQo9xRbHLQrghbzKJ7i1MoRkIlpSrJmmbBJ92xBW5hIFM5WP20wkP8gwGEbilj3MZbU7z_7wXJqw3t2FGFVpXl7MPenv1XMQmFHZyiNTgvCSGLdqnSc9Ankc_kA_JN_LHNQhlueZMxkKba9tUbbezIL2AYuxju8Kte-pSNUjXUJSHLqmZNhhUaQ64fSSJpb81x4jzdOeQzDY8WHkHs9tIYveIjXh05wDm-ly_HyL1URrqReCIieYQFx9JRxe7XwOTrEnhlSRsAbbA-WTNS6jX3gFbgo6YCmGhuKzdI_HSUvbtg9ALuuD6v9z2ODi0Qr-zCgW0073g1lMraASfKTRoteNLwhM-9H1HMnvMklp29OoaphB0cdVvRSudFkBhMynlLOPIxbKv-I3eIPHMVevGbxes2xXpKmvx1PxVcasD6_uiqejnLndYxbRlH5DGtayhnprFIWShNi7X4SZer97SP3I5CszDsVF3ycJ0EHO9mG8gFDAIDKNB1HjvYF7vCLKX4FsHzKOgtisAFHuQ7da4MrbtIQhf22JTl7D8iMudYdhCOSHYz6zFNonPx24bkob-y-WtTEVg559_dAlbD_cC2NTUSHOiamgaQ9Gq0YoznUG7YOT0gnZoa59-2lGbt6xRkDIM1YkMvscVDBkiusuPTAkm99MCarg7JvIw7qSHI9dIDFIovDjaUtCvB1hQTT6lPpNwUJBESvRFa16DND5a9kXiQ2o0b-0qFM2hKB-jfDoH4Ucb4WI3prvbAqL_58DxmtkpNVAuerNwvQYj5E3VRmox09LD8AUqqJbWUH-5gP6sqAbtJUs_xOJIKLd17c1hDKUCoTYs69PWQjTZD4rt9uqPoa2qR7_m6mj83n-45kICYH7MMH8XbDGU_HPC4EOoGt5xWzDBzG_6UlWV_QNQ3MDSB5BmgYyDngDYEDPpKyOWULfvV_h2N7ZkVR8a6gCEpmPOeifBMkPCVUSZ-x50AE47TpIDIRMkVG2g8Ye-dG4uWDhXUo03enpumTseZb-xARfeoseDgbNK6R_QxJ_z9K0SXlsEENo_eihGJGVjLGvP5343sJxjta5ZK9OCc56WSu753yqC79ENiNf4axg9G0xuAAdW4ssUHE5X6sJPxd1iqfcwlEuRVazGR4ojgsF2k8kFC1bRLtYTzL94ivfdsZOtwLVJuyMEiaIDO-e0qGxtVF2A55YAIxZGo1ah9XZArnbPqnBJqeEPP4ZZino2d9zJCKAYugrsQ3aFkn2P2RrYuf_30nCm49075Ce3dqEBocaIi6i1r3px3sutNZftKaQ7gsJwgBtFvoQ5NnIQHg-9D7_bXVgLmtIsl6iak7oiiy8tJnrsz_iGyhT5jgw4FmZaz86V_B3A6LJHNci92Y5x969CWx9Y2lzR7wfcU9kInmVjmFQ46K2K1zKma49EEBzJojhouTal61khBsp6v6qchaxYOo8ohD9w6ddTcUy5yK8MWdPrn1g3fkgaeXMhDr7DMWc26ldujj961s8K901TtszGNOL5Z9tGVn9T7tubHusjsAfUjGAvs7BrsMIdWY5QJ1TlrQo32djQ7VC8K489iYS1ZIQ0NGOoKVHvIZJd30YE5IZN31fAtRMWImEftsA0c89R3odjY3xgTPJk-ATyGjQKRaztmlrvKpZ1TDAXh0PmtUzQh3Flw_O9wRlaI99SLWeGzv6yFxRSBUJj0TDAp52kQyN9985qSNS-u441O1gM77JSI_WbZ4vZ3OmB9Gu4oR9tKzFs4Cpe_dt8hhtTP8o3v6qq3-yHSfNuMMZkNFFAku-sLLpCyyzN_Fhqy4HnDgevRx2ZZUXjjwW335CmDZQPo--x4LGwEKKACBwzniIHXubikXB6V-P0CPzB2pzUPr1ukE92HLWAwd--WCIt_gqsdASiRc2WclLUw_R6g5j4dIkqyR1JzgUVDGDRSnsngx4HlNkptuIfBra5B8_V8uaDYlNZFzTivt1xfPd-5C6I0dUUl0Lq4y_P2coMyzQcx8bSu785a3qZzrfoVLSmdtMf6goOjwQ_3nk3-LJcOa0HfT3-a9xewmMm-OcUtnt85yrF8fvzWh_N3F5uw4EF1bRB5w-lNJfSXJFCOEe2QtRKRJWIOeBoHWUPTeb9WmaUp2kL0QZEVKoq61DYimbUe-_nPAvsVz9pN5saei_-8p3AED7aQiW0N_amS9DKuccwEJiiraMt8VuyHpc5CvpfoFRPluus_nyas38CnmJG1sFTpLfDRiGc1_wwujcBnWd_Du0dIz6AuZ2MJIs3IIJwjO7HPmZZ3A2gQw4m8JYl6DSg7moXn75UV_FLl64-95PDQKFWGsrcujHoyuTg8S6KMsdCRknnQZOqM1lbWvsEjgQURMIHsa0FcExMKCdsn3roJaF5-_M3uCOt8GHwr4nfsEDi8Zqsj9Y4WZpOeazIOwsIkWeaLTUwOLWjD066yRtLtl1Un8yixwWg-yWJrp67QDkUde18YdlzUeMqhuKAzq4bEdScdrRtV7RDlVd19uuJodsphLhMiZDvmzSs-YfEhRfmwOWF_IytWfDCfb-o8EGqvi2nORVoRtj4mCSRxNMPlJ7lJt8F9CtnPr2xqWeJo0mahDM78tFCzMREiEQ6J1Xi1w8gTmkKB7afxHFIjywW193b9PqAvS2edI8oyC2TpW-EYjubgaLcTfK6AE7zGWusmFeqmrNFDiBWCrtrhp2Mdn_-PfR7eGiMIBxpUFLa50Fg_oYda2U-ak3VRuX34ZPYYBlRbkKVzre_tF2yU-aRV3JdlGyvNB-EQX2TTw491ry9dbeiVOp1c1QALMYHdhq-ahPtcr0AEG5S5lDuxDWUcsrqldD_ufARcdLVza__vgI6Km-aGcLLTUcY6RSQHN3ZrJdug1CLVS41nvjljXbBow65aIoofJ-vu0QDxoUGsgN3JF1TLD5qglJ4jEnV0PAWso7m20fXjcU3iOALRSL_tG8onFWtu5MCY2V5xGlKTGYnmwZaI145K2iJh1XHPSgKprhWrRRS_zuc766KwU-WB31JFRwfTf4m4wQrSUFTZNrlFc9j_lNMRxe97G2fp8Tb3UhhDSf741Ut5lbYDgzN-UPt4vF6HxfCeyZc9ADvcysAUnm67jeQZxUlIZtTMQt1HBAd-zlWwCK1Y_111EzzVuPr63LdSsLdnm78nG6EeyE8OW3W48LmOb5CRWkrFMbzHPaRbLcXu2FVSbyPZje0Yu-uJlbMIiLhCfHsiYGa8lOxsqTmhUm2dYqd5V6JskYa4_BDe6DmX0wVVoOYL7uqYn-sxGt0qrEvWSXhtrrx_0hfs4b_k_cpMX3rNdHfV4lReAGUXDjmi90rnexavUx4ltF7EZlITnYoGmQO4xdMgt1n_527my5k_igkAalECmtRyAuUA9Ln5B3aMVBelp0anXvLKOBTS1HggXciv1nGkAhcKmKWoTGqgHVLN7d-PgjuRWNUGbNjtKqJ1s5ddlG-CvTDqlimUEryrfN9Puvwr2tmIMPktL0Tcz9_VNKHDTSIYmYxkxq-ZQ0LThggl8LK7PBwh-4Q__VCe_VERJlubhJjORc7Rv8j-NVzFEMX5ykhWJepHCiKEh7lniK21zZ63P8yr2w8WazNR9q2gdbcOkZ0wjEg5CTAp7-UjSpYBJCFsp7chQe1ZcSW0dgTWjk-lxlgik_0xaVJMuvhe9viDEg0zxMEhccAmu5ZKran9RaGnoA1hKY6RrPV5U6gxcfw5AWv6VQoIUHpNv3ON3534v6VtSNQUyfzuoLbjxLZtuEo1lnE6o3hLwAAOB8q9qAR4cuCwsTlzwv-vxhGHEc4K_PE37G5wp1xQUUjErOvKBtCZhAWkFq2BjziBpN9UyniRT9CFkN8mvtd-IURsfuql66FXYE7Pms7woLfiLYJdnlaMiL4JHMJk_Mg2j0US2PO53kR72idil88bz4WrCHPakZF7EBecbO4XpKSsCCZNMvBtu3ipFpIZgS2okwjVI1TiV8BTVC6Kvv24nbaE7XNZNOWg0zoiWmSzAnwasBiadp06tHsrr8hdE1DmIeK-xlJTsMxsEno_7gSuaDwhTAgiDVtHdQzJxmG0GBKFl2SduimHsa5P_y3Zy8RvXdsNy3GHjsPsMpF0Qy9wp753C2mIACG7pW_E4Ic69HAv5dg6IODbEhzHEY92BxXyOlmCPBO5f4ZeUsF0rM7RQPu588RB56bU2cx_2egz8M70f89lHKqLCLQbgTP8YOB03k237hrlE147M28JdA34ik5B1B-JvPEWAO9jU1ygbga78OsDC6Q0PQOv0qVMyWFHuxL-EsA7E5CUWD-gfCG7ff00uFEV3wjr-Lyh5xKKd5btCsgXYa0WQn944unPN0oXIfFjcDehK8DsM4CF6o70R_g2AdBYgF_FZXOfY2H5a5RT7mazwpRPxu2JP3Oo_yNqx3RHETia5NQmHVGO2RpOBQdk6LuaWapuRm0_8YeAZ_T7PMB22Wu-n4xiyl_lX6fNy2KlgtBHemHH_vTDx6rIwfcLCInXbp-M-DVlEOJVog8MqjaHgs237nPSpTJI1H2NBwEzpjFJE4GjXxQlhP6vxM9IgmT9Fo_GoS3KPsVPuxGmWIhvq0RKsUSObkj5WPhaQaHfRfagzBvq42CSnG1hlNWEpTFBX_ZuBzsTpc5FoKATmwdOeMGUwTcDLH8Cf1_K7SFKqL1FXbsT8VtdLx6p69XX5Id-6Xzbh8ujusmBRm8JsI7aFeYieSHcE5GpAOLNl7F0eCD-pdfHcxTYHsE4ccVtQDdiAFT-jsAkB-a1BefoV9X9dmrLVCD6I8JW4P8JQxOZCHx0djLJ_nd_mTN9Cqn57RCqGF9pubywhJJaHhkj2fl0rXN3Mgl13xdZ4AWK5DFAa8D9MMMSGLcO3vRSKi9Qzb0_kMb_AfIhoXXWRuKOTVM03iN8v2qCScIVdzgwhKxRjlV7hhQ34aN4F00vavJ9xzfcPWULu5OCMFp4IZQ7GjFTaCwtRmJIs1DdKD05827NwEggdtPmCiT5fomrlOZT-XQyBHVjOr5eTfyeXK6B3d6g1XPHmjVUXpKa7XVBOL_yuxarda9iflLa3qZb7dPsnv3arkKvYIzbwx43O-Lj-xnBrC3JDVpI-UTfVu7Mq-2RVaZ7yMj-sYx8_bUVGLT0GLLG913XzHbi9KntfGV7H7eSTiRnMK9FcVaQWEr5_1lPasy6PaxXvMiGIMLQFR7KtBHN__gCQLABIgWStg2RpLxbKYsXeXWQzdJcfxfHRrmLxqzV6RXiBKbzEt1jhDtQ37sflZg8hBFNIccojt5cH3M4g3jD6fSMTseHncw8luE3hn5WL9q_9EWN3SFhfXWlwVoeYDHwT6blrUipbboL-CtDZCeCa8ran2ck9tiYsLi4sgBG4l3PEdKMgngKhhzHfCbaKa-Zcv0GqDxTCgIaGgUidje4XV_4yKpmW3Dpq-VpAk0HKQZ1GAw3s5qAIBxU6ZwcKhqTw77CpPUGuqECugmxsmiNhWnqFe2ECUmM3zWeDiktGfMWbBLyFVAkiS1ilVP3T4SFkOR54yHfN_4nNXlX_SSaQh7CzkxQ3NKM4mMJfwAEnobOy_93lzCZfOQp4v56ciWDnkfFacXxvGqiZc-Vvk7QasiYoqrvi0HWVGHOuUkmaBJy5OO9QObdF3GcactCmf9lGL81g04wwGPKviqhvJ3NSY74DSUg1yoxfrif5hiVz6SZg4xLHEDI9KLw1ULnyHqByycYTfi4BUQ93uGxJC0KA3STUN5b_gnS6uOsAbKxRVTazjXlHdWtS3k--NVM5WilsKQM4S-o_nE9gJBKALcQ_fXyrUos1bzLln-yEB2-eJ1Rhl3c6kFAiXYvf22Gy5SE_er5mrHCDg9MTV63955WovUGIUouoRJEN-tLOY1B_fa4b0gKWkFP27OB3rdFIDcaS7hzsPvLtfKFghrwF2QmcSmH27YxI5fM0ww-z1edYrM-HbzSPOaTZU8gMapRzsthoNmCIsLQo4rlzMYcpiyIMelscLnJ0d29nWWGdnpUP1qHD1Qn72_JJ2x-G4gD7JFQX9s7PE1v6EWMm0vj6cwHTGp4IgeqgKrVieCHR7Lq9br0cMX7cQAjsF9Nhao4Lr4Wo4m9_mX23vyi1Blln70FmAi9N2Bc2EF4VoeKceOENFBQumoH2zPC6-TM0NAeYG_27680EfkCXc72-HOI6xL4mI9TbEpVZvdfgreHS5MgSkyg8NcaNP9fqnzvrmjh2fosas20J8UjqNj7qeZ-ENyTVtuZAPZWwN6XMImo7rJCokXHOzdc0aZNEfRWD5wzNq0sznN-ejmyJxd0FPgg6KW3i4WH0UokWoDGEvDH0xFnScWhZ8T6q4_CL7F4iwudwPp_R-q32zSx6hOC7vcOlWIpvTgl4IiBJjl3nxQq_avCqF2p_CACIOai71PSUSg3iHT8I5NXgG4ZjlKrLYbXuJSGuIwu_JV7x89PiDjrQx8D-E-HNAl6UUrliz-KYtXbNcRrvd-btCnGEj9J39LDTZ9Tjx-adhakOeqS763S6HR3IH6MhrYsw8S6bYap6ai936KEz_gFQN9teUjSegQ6pwTe54FSs4-hvDbFkBQAhibctqE-QaXED6uQfCYINza-Fa3XSfCS-cKNKc6gX350mfJfyS5x6QbtGmwWvjDbzSpLGAA0c-ey9G8Yzt6n0PgoIYON2jT3yQDb-Am5_3HxJhKQkPiYVMF23cqOHyYAM_XGVMkpxjb1SgBVMnG7Lz8nS7-Bm-eGE_fpPsIqiOBMIWuy9JU8Nc-a0VciIFPCkJ0HK2US8pZZzKlBUHdChqc6aNYj4wEjzuiCukbrSZ2V2WiS_meyAuw_5VioPxamIeaP91_EYFZLlm0GlMVg-8pRVnZID2K_hZhFx1AqLhHlarz2mtxZ038KB7Vdxu62bn1QUlYHnEBU04QhAdPL5NBI_zuVoEZRNl5pzENAUz9sKIa-onXyDrpJn48iZfKh67aN-3N3eKn3oQdJmCIfTcH0FCD0-M2T-g5gLZmhEXwdFRdBD8pi058Y3P8_VzGjtygSSBUNI0yHmH23xjiwmo0zAuu_dbyPrxi_WwhJM2sRvS6WWKPpbIRlZjIdpMomAxRjRpETVzSAprqmGx9loEcb0gjZ8YpCyJWQbThBxs5OePG_II59WuIyEIlyGSq7mJ5jkVhM_P1t2XUzb7eAvhMPlOs84FNS9LCB0CNFlFDGSVjqTB0AcWWIOCetszvKie8vu4eI5DJZ4ZBPlWpxFxGJqZltOGV661FUM-V_gxZKRXnnv-4CT0Egfu8XghYMnExEVvK46PCNEY8dFokoi6YOMTNZDx8TJLxchARgY9KGOcJDJIenunhdccFV0anR2ea__GRuLgYRFGbgvv8GrAz_R38Pak58JrHHlxHlLumvimCFgpO1N_rioqS8RHZ4xRA5_n_00JqeACq0nnZLE7IaLaYjAJSnbDv8O1C4GqowymXUMit0n5n2516d5KdF_5oNtVzuci_XyyQsQYPRtk1Ue7ytQWZbM_eayd9uc0WkydytPQvXU1xlHMmEgL_WoQqh_7YAby91No0-vuameBldX6PdWHMcbuoMDnYcwXjXMGL3L6uP7VhW5W-zfCs1NEOe6n-YXKYZIctfUWWeXGy8pq4_7IA2_T-uEfguLqWHHGPL-Bs-CJAj4A5sD6ZtGIiWYM1Bk1eFJvYEDSsjdt9PdYp3h5sFAHMCouYf9V0N5wBLx-jTpGDtsnvFfsMln0PWjjaj4yfrSAVLpDoRqZv_f6KIT01qKXG4cQwp7hwCapfvoG_jeLWBr9FfvnYIDuC2dr_hgvU4H891Hmb8tR6N1_4mGcShC95AsyIKBytpN-ezRCxvZ1EdvLc2-AW4em0ckb4sE_4IxcDjrqp52HdnddW-1cacYABzgU9_dT1oVdlP4Yyr3BfWKhMGjnOPGIGZn0X4X7C1Pjiwq623_XScw-AY0x8QJm_vE8N33Kv246rK1FHxBNPpIV49m_2au8rtCBbPwQBznhtMFIlhFUjJUR-nqnEKAEl67W866T9yNyuPDnaFYt6u36Cm31-XLbn5imshhlSTAC4-k_SL7jADbV99xbcfnRMZ7RlEkxxB6_4qo5e4vr0VnMDkOiR7lIbeYzI8JVjhxyYogjW9mMwnXRK6bc9OICbrbu6hv3NSlIkNqGp9WwEM_93rND948RVOKdI30GeG907mU-g1tRHFAVMTCIcndrsgijADJ4bkFkAqafbhHH_in35CEajJKtzyJRYyKHzrilOrKJuwfvLdxbbWJ8-eSIYZxpGsurBQ5961QPKP7BMpmyazAlyjpaI0V7h3Q5vEBnD1WnszSLfWr5JC9SaRh9Yzzx1W6k3FWNlZM_Kfmv3Md9jRnWWRTXgRQ125LGCfEIxi4oTtUFJP5GH99Qw-wmhJdCEDfZHJBotroS5qaOdkEEi12H_KXHQnu5wVTjtH3JBLdmfC0O_qaRpPNddAMkqvZpf_B_6JcQi2Dwn3PsiTp1x_W3RWqdeWZqeF7KXBCJWuP3VJeZTXATbFBjiLkKn087_qQ3HBqbCVsW6l4XDJXkWVozIWv0GsucR6yasp69MtZVs_XvJrtz_aTBiqDnUYuyGNcXstQ4CaaRiY7L490Dc0NaYcDEQUVAFnLzQmuPSV3m5Xo0H0wNwAF_4KhLlvugB7RyKMoRBMrvV6U9aYEz62nMS3bHzNdX9uh6jzVuCb18BNsbIzFgNVXstpsspt-u-us9X5vzUQ771WFPL8RWU2ugDg5JiX2Dg_GiHOXdGNOmcOU7H0Z7-0v6oH-iIAzioOkK-C6fqpp6fKy02oVJBUKUM5fTh85mbN1NaWtlwZv5fZp5H_9y3sQLeu5lClyI95h6gSe_5i2IqaG_XtqB_ZSKHqnXz0iJ6OHtHe7fJFf46ZT2nZkyCWANu-LUMCa7s68dn_aYNqM4pXv2PO-xv7l-Dmq_RJ_qi5fTCfIa35NxwPJePo0N5QY37cPKeLbxvAcOtjEsJzcakcNq3kkrEGohRWKTasAXC19f_XJTa-wf0Kqgs7-EIS7j0ghNHOh4UPJDLXrh780FTfqsrJaBKL5aJUhRvsSe-VcCeWh0g72mUphGBiAldm5VOWpjD5C87x69rLfIRrivlvgdrMR5_Kb_imvN9ybuHV3E3ydkE3yK_E4-Mss-Y0Vjf28g_nEaEn8jxIg5cYNE1FD8KnnVY7rcHJo0yHG7LARYlnZQEXMnounbnQLrCV2ioewHcqJWT25HxLgFt7oH8toCaw69-7PBDx5XCr65QorRiIbLpJ699P31LCvo_8SglI_M3BEUXY526VySEpV27eTFmrkdX79POObD6WtL3thUXwYjXqL1fqAfA-5LA26h8GdlLRN6rrt2dmule10ohHhy3Rh-cH4bjrwuGg5gAMXfhcq3qwPeH76L0iaOy5BD03EM4LF2037gikATdnikwDxjCz1ShdFT5lFzy17K8MhXN0AE1sONrGY_R47n6oPQHrE5qIMZ2yOFcBydm7XJ1JhwTqJjnvHcTOOsbsqCivkP5MDGsMG8483EOrklkMPy2zVNxE0_gIzX2yPa2l0wrTKWzXhm0fh2lDYqxxPDUOwwLCPKozPXTySPJTUrESAyzVpgrv0LqCYP_2Gun2SHsGRyuxOPJ5GSp7WLaaKL9sJ_ok4qn_pYj_SsgFwtoKvP2PbN0vhagleakLzpc9zACiA-xllj4ZaR6oOKyQkUpGPrXlAPCw20ZxfQDpX9g2ONBLqq7aayZroqv__HchageZYm9BYQ0IkztWBVspELMbO9gqZnlT4qK4FwWdGA7M1VptBigwgYt8ajU1gwfQ1vm__x9GqlT0kPEN9tPkLBzoLvb0AMz3id1KFI96l1K_ZW8UVAdZQm19P6ozi_edT3bbGBJ-VdbwTe8wBmGbLhJvaDAT5MOnzJGpNfBJTjq_8odYHFEqRD1qA-KFTCKRPJ58ukxmlENkqAUBDLP0_j-o8aPzOhhPVZPVCG4YNRSzAlZlywn7Gi4qTkKwsX5Ds5GbJttbENDHFw3wfj4ESmYk4QFVeO8X6zbqjz2n9t4kx0IrfUHByBDwYQqPVL6wCESnK_7jkqGLflLEhRj31jJq2mYE50ijnpa0g2rl0PVolB9Oz2C0ZvzPJhZW1jOSqHjnSbZRFZJrkl4MU9eMutKCxTJRYybAdnOP-BEPDbNIeTKlMvKhfi5DKhwXn-HHFDo3VjFJqclETcKxTRYzzbgH1kbN_62GtBt9Uc_VEVic5Cc5_5RHHJtWJYoNDMeByYY-ZXYmFd5SYvizek356etvMHCQ1VP0Xln_t0ZRlPHCkc3qXkWFXIExIelDpckFzOsdqMGY3So47ZM7M9q6dSczOjohyxpaHmyy-0Bzboq3UXP-BySLVEptpHU1vPeU8jEHc8aaQpCMYYoEr4FWu_s0cU8psTJZXuOntoEJ-UzBHK1DLO700FYmL5zkv8eG1cokXj4-8p2vTw0xSSUDQZ3Z9mQLRrugD3BJl1OcPiCYT4NAs-xc_oOSNbWBrCsoLYSUAZzJMIflgfPLTh4FPQFwl4EL81PcXr02iHkonXHhofIaqGZeBExInB2_t4-nqkL8mNf0-C2mCiNGF0JEoc7u0leSryk4TmOBb9Wc9okFxS5bb2I3CliIVkXV1R2DauOHBCpKGarIe4ot4keemI0QLKwHW4dsXuW6WjLfu4b7mTlr5QH8xw5Eap5kFw4YAWMMlW1VkmMpRDs5mQZu1A4niqPss9K0YUCOPa8ky3wxkBUx3SkeisUEQLK6F8p2vyuDRX2qWNpGuoPNHJWGwnibSdoIYtTeNQblLH2uw1cRVvMCUl-sNoWEqEB4wHK0wUaHdYJHkOONxI6sV4LUR8VVUjdr9m8zj3klMYYEazjbZPxrOrhI_t3cF9Kw1Flq7o1sguc1SMgU9CQZMnxG6CM0FTV9YsGocMdxO_KH2AAIqRqX3sUcehtDMI_3gbx8sBm6Z939M1_P_P1RGdLDC153vXeVidMWFg6XpEw_jXAzWSheFwauNxW0_sZKYrXFuGMbB1Qr3LWAUTJP2GvSqAMNbuM9xPLpp-DoO68DciY85B0siOIHDstnvTeShJghhIFOmslGY-EdgWq5--bKTUdPBYlwD0-cXN8dry0rxqidZQCezjvcFEyzOgsNfMzO-29QU1QhEr9Im6T9GfYNMa98ytiE_hrgEeZfQGwxh1ufsDYAPDHiX1XJ_THH2wvoA4_3Zi3u7ZcpEWIEsJp_Gn_k6xODNJyiF4JWDhU9yzCgNI8M9a9PTfXw0TqTzPhNHehEFR3fFhYlg99GAD2bgDC9p_5pvieUt378K9KhMzeSwmlfsX4A2eNYTyCGdfSywkoVPSL_lgUS1pV0FGh-dQDGnsgKfdNSvjoItRrcRnOUhN0_tikqK7BjXJ08V1TSP1ndg9OtbaZwqtxk3nXq1-pE-bJ01UkL0uzedsjwczhuBrD3F_hHMYY2HI71ySUZcZ-Z9-D_KvojZLYm0-Q6zYV-bqHz0b9eFmSra73JQXwUDCt94bnk4oxxs9FYEUdqPj9QW9JHvDV-wpd5zre62WL_gX5g5yHf_OGfxv4rWpvU3AWZ6qagaCWV0yKvPHB_HSJk3qn_ocSLWwW3AApk4heSJf7D2bF2fuwrRrurGbvQgYjMMtu_RyNf0zpJmNKVSHt5VKLl9BinO8S937Qio7PHXi_4bXD9yzeZv1ZaDvo1LYAW2rubSjiBmPh9gKnweMu6hOifqh3gS7K3ii5WgCEkXHsEK0RbOWGS2BbyP0xplsjubj7q_qHqZ2E-I3b297ObCUpPtyHrwhcl9r4NSOLSosAaHtSMRJjCW_9FSQW9jpXZdGo9ZYE11suSPpkj4I4CinMy9WwWisLzAWoRU4PwOoQO3kZnwN3qG46Z01xl2KFupHABGD40dgptKgzjXWI_z_KeHjmPboALC1uzu4k6gmgPGpqkxxTt7NgBaJsJmQBk7GZAQT8CPuwG5hS_pgr6FeX3wmnb3IFmUAG0zyHJXC_49D7ang7YbY5e4zbP6f20_w9F15kwr4rwf-zUxCsbRSuUMMiwPcwZtc8lGE9sb_LR0rO1uFjkz27mgWKQwCM7wommmaQdSomvq5_YDVfkf-MX-9LrjFL-vXz4z_v6Ns9JznTWWjmT55qQNhLbf94MXbunRyIqTwqPmTxqTu8GwhPK8aW67MysTUGyz2lCKTpH2FnRiaql78ULmvqSBO_uvJuI0b3LIz1EsoUcNePf5Gw7_vZNIpge9-lBtjycT0cwBq7U7GkZtAfUIOZ6vtbh1wZ-daleFV8bQiH7EeJivBPd4U4pG7FLE_awuKjoSoUFVnIghwhpzrwHnuBhMKV8IjntJ2nH0xkXgUKBjJjK9x6hfB2ynbmLf4ToBNUbV0wmbFY-hinj6chNQfrk2dQYDedWCEphM9hPT1kgxokM0axVX5KilTTNNr4bgX12X9lFhu6vUEcZfbvt6ZhLu2a1qjCGGaM8r0di6znvbyR0VwmIvwfWJeLXFezSovdEMon-XWoQZ_uDxGDPoAERPP_ExbM8yNCfbdBXtDhayVZ0dyGOS9iSyRnSP-b-qekcoJ4KurOL1Mxn6I3f4oytjSxyvRpYzu-pL-PB3rdSSvhCPEf7FqHSePGSAc6XB8-tjcmHXCHQv5TVd2OAYoyzday-h3zPxPfgykOmnNXnc4y-85oFE2fffgZmtUBkuTzQOtiJpo6BjR3wBPxhsJ8Jt-X8zapwLay3eVuSowG12gNYAZ1rLoWQiuyVXybjO-MaCfISSmP4lV-H0yrbElbemxrKbfkTDUsjMX-TUuZsr2uw-xkEfTDYukUB67v4McbzR6U96qRJ_NyvPUS4b_OYFGE2JiqMEJQf6PxplaQh6avxXU-F_bkBRnD_4d1MKOZnLee7bK3ycd82pvCsU5itcTjKiFx7hn0VOHer2nrwJiQfgDVSkezOm6ZL-4w6Zhekc0G8iSTqtxpv_kt2lyRB7GjZUij74YpOj_ubDFjDNKbJhNOuYgqJSM4dktJxAcoXhckFDfyVqZoI_zvL0_864yBgXR8ptrgUXBU1GIfYE2U_Bh70kXQBttAY3x8aYdp11GwxPYlp4ycPTbwwAW_2F4GLZhpySFUn0jg5ULepbnvpwa_4fnN7soejB9cPBIce0zuk7BV2buBcAbmtCar7_mQMM13ofqscN67aeHhiivpjgQU4lBqtnszp8HitEZUSC-mElke5Od1WZ7SZdsWKnTmE3-ZeEJ2uW8sQZfoNOL6zVzqDNa20zgNZWyaWTOhKQtGKPpYR0yLC1K7DUBto-pNF-twZxHQqxJPTYNYWAwrb4jtgrsL3L4BW97J_mv7vXNZoS1VOI0ir_6B9hLfJDkQVirwNFkCDrvpahW9LfWqTbnE5TeGtelJm8imkY3wc8JOcxTF25YKldxUld1CJFJb6hZMa4N2dyEo7VemHaBffHSs7Wm2HmS2ZCW9PwJK75l7vNr-fJLTSfbRdt3ig_sb0zOE2v14uD7-jkbnHeXxWQ6CbqTIQh03bNaEsYyfvD7gaLFHO8H6kl9pOW2PajkRzKrq4KtKTqpY3VuC9jj1mUCcnWEMum4MG84Hp1D1Rwd4lqnSsH14d20PYGyQbewL_1o82mCVLm3MrH9mnwNy2aCC-BKTaYbB508COm3GV9cTtvP_C0OPS3ypfnIylVb3eOI8zcSAYkG6qgMfvU5J2EwX1oolBJ17Jj02Ia0Pn438bXaNxkclz0axatLdyxk9CFyfnIfWvg9k8E7RMEwTCiirg_ns7V0EuuhWIuL4UByFJJPSzGmXRSz0CV9_yHSifE7nEVZzj1zf0dF9SXrcmU1qknzNqAsQsJbBM4M7TDQy2nohzpsGaJynF2SNeiKFoouztRnEbhbrD9qk4dnDeQtlKlR4XqSJgNpVpexAFNqaH48HhUPsXJPPo10zT6H0R7tCHfN8Pqi41QR_GeWB42eDNIH5AEZiZSZyWhnPKlRG3dXBtvio7HE-Und2bS4ICbC5q6GEkL7h8tMZnDyWfjspHYojrjB16Ia9JMrQuJOlgj7oWK-xyp4FcwEbms8Gw_lTHERCBzEk00WhiFDaMXLW_2HQHWTBncKhDZSFIlcQdnKOjhkgstcVedkWyfbBR75V2ovG0EKavY8PUCGPvbe6tVKCcdmy_UBcO24D0uU6r6B-Q59i_MbqAfFNGtjjhrycDnaT6LW-I25EeDDp3Aojtwo4770YfDCe95emFK9pR2CKrVsceO9y5npnab7X2MH6u3EhFpfoI8TGe3dx8mMui4p20Ay6AhaKXrXqttv2GA7ATiyEWWot6xpgjo5Hp_s_A.sKq3Y0ZrJtStcYfAk0DFlceSFPTNcd5IhMbjrucWNIA';
        await agent.backup.restore(backupJWE);
        const expected = JSON.parse(JSON.stringify(Fixtures.Backup.backupJson));
        expect(stubRestore).to.have.been.calledWith(expected);
      });

      test("round trip integration", async () => {

        const backupPluto = mockPluto();
        sandbox.stub(backupPluto, "backup").resolves(Fixtures.Backup.backupJson);

        const backupAgent = await createAndStartBackupRestoreAgent(
          backupPluto
        )

        const jwe = await backupAgent.backup.createJWE();
        expect(jwe).to.be.a("string");

        const restorePluto = mockPluto();
        const spyRestore = sandbox.spy(restorePluto, "restore");
        await createAndStartBackupRestoreAgent(
          restorePluto,
          jwe
        )

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
            CredentialType.JWT,
            Fixtures.Credentials.JWT.credentialPayload
          );
        } else if (credType === CredentialType.AnonCreds) {
          credentialMap.set(credType, Fixtures.Credentials.Anoncreds.credentialOffer);
        } else if (credType === CredentialType.SDJWT) {
          credentialMap.set(
            CredentialType.SDJWT,
            Fixtures.Credentials.SDJWT.credentialPayloadEncoded
          );
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
          expect(foundAttachment?.format).to.equal(CredentialType.JWT);
        });

        it(`CredentialType [${CredentialType.SDJWT}]`, async () => {

          // const offer = createOffer(CredentialType.JWT);
          const offer = Fixtures.Credentials.SDJWT.credentialOfferMessage;

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
          expect(foundAttachment?.format).to.equal(CredentialType.SDJWT);
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
        const base64Data = base64url.baseEncode(Buffer.from(Fixtures.Credentials.JWT.credentialPayloadEncoded));
        const jwtAttachment = AttachmentDescriptor.build(
          Fixtures.Credentials.JWT.credentialPayloadEncoded,
          "attach_1",
          undefined,
          undefined,
          CredentialType.JWT
        )
        const issueCredential = new IssueCredential(
          { formats: [{ attach_id: "attach_1", format: CredentialType.JWT }] },
          [jwtAttachment],
          new DID("did", "prism", "from"),
          new DID("did", "prism", "to"),
          "test-revocation-thid"
        );

        it("Should revoke a JWT Credential", async () => {
          const revocationIssueMessage = new IssueCredential(
            { formats: [{ attach_id: "attach_1", format: CredentialType.JWT }] },
            [new AttachmentDescriptor({ base64: base64Data }, "attach_1", undefined, undefined, CredentialType.JWT)],
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

          const credData = base64url.baseDecode(base64Data);

          const stubParseCredential = sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);



          await agent.processIssuedCredentialMessage(issueCredential);

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

      describe("SD+JWTCredential", () => {
        const parseCredentialResult = { mock: "SD+JWTCredential" };
        const base64Data = base64url.baseEncode(Buffer.from(Fixtures.Credentials.SDJWT.credentialPayloadEncoded));
        const sdJWTAttachment = AttachmentDescriptor.build(
          Fixtures.Credentials.SDJWT.credentialPayloadEncoded,
          "attach_1",
          undefined,
          undefined,
          CredentialType.JWT
        )
        const issueCredential = new IssueCredential(
          { formats: [{ attach_id: "attach_1", format: CredentialType.SDJWT }] },
          [sdJWTAttachment],
          new DID("did", "prism", "from"),
          new DID("did", "prism", "to"),
          "test-revocation-thid"
        );

        it("Pollux.parseCredential is called with correct decoded data and CredentialType", async () => {
          sandbox.stub(pluto, "storeCredential").resolves();

          const credData = base64url.baseDecode(base64Data);

          const stubParseCredential = sandbox
            .stub(pollux, "parseCredential")
            .resolves(parseCredentialResult as any);



          await agent.processIssuedCredentialMessage(issueCredential);

          expect(stubParseCredential).to.have.been.calledOnceWith(credData, {
            type: CredentialType.SDJWT,
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
        const base64Data = base64url.baseEncode(
          Buffer.from(JSON.stringify(Fixtures.Credentials.Anoncreds.credentialIssued))
        );

        const issueCredential = new IssueCredential(
          {
            formats: [
              { attach_id: "attach_id", format: CredentialType.AnonCreds },
            ],
          },
          [new AttachmentDescriptor({ base64: base64Data }, "attach_1", undefined, undefined, "anoncreds/credential@v1.0")],
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

          [new AttachmentDescriptor({ base64: base64Data }, "attach_1", undefined, undefined, "anoncreds/credential-offer@v1.0")],


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
          // expect(attached).to.have.property("mediaType", CredentialType.JWT);
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
          const jwt = new JWT(new Apollo(), CastorMock);
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
          // expect(attached).to.have.property("mediaType", CredentialType.JWT);
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

          const jwt = new JWT(new Apollo(), CastorMock);
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

          const jwt = new JWT(new Apollo(), CastorMock);
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
          const jwt = new JWT(new Apollo(), CastorMock);
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
          const jwt = new JWT(new Apollo(), CastorMock);
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
