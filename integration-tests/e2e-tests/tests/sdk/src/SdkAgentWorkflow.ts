import {
  Agent,
  ApiImpl,
  Apollo,
  BasicMediatorHandler,
  Castor,
  ConnectionsManager,
  DIDCommWrapper,
  Domain,
  IssueCredential,
  ListenerKey,
  Mercury,
  OfferCredential,
  PublicMediatorStore,
  RequestPresentation,
} from "@input-output-hk/atala-prism-wallet-sdk";
import axios from "axios";
import { EnvironmentVariables } from "../environment.variables";
import { Actor, Duration, Notepad, Wait } from "@serenity-js/core";
import { Questions } from "../../Questions";
import { equals } from "@serenity-js/assertions";
import { PlutoInMemory } from "../../../../../demos/browser/src/PlutoInMemory";
export class SdkAgentWorkflow {
  private static edgeAgent: Agent;
  private static connectionsManager: ConnectionsManager;

  private static credentialOfferStack: Domain.Message[] = [];
  private static proofRequestStack: Domain.Message[] = [];
  private static issuedCredentialStack: Domain.Message[] = [];

  static async createAgent() {
    this.credentialOfferStack = [];
    this.proofRequestStack = [];
    this.issuedCredentialStack = [];

    let apollo = new Apollo();
    let castor = new Castor(apollo);
    let pluto = new PlutoInMemory();

    let api = new ApiImpl();
    let didcomm = new DIDCommWrapper(apollo, castor, pluto);
    let mercury = new Mercury(castor, didcomm, api);

    let mediatorDID = Domain.DID.fromString(await this.mediatorDid());
    let mediatorStore = new PublicMediatorStore(pluto);

    let mediatorHandler = new BasicMediatorHandler(
      mediatorDID,
      mercury,
      mediatorStore,
    );
    this.connectionsManager = new ConnectionsManager(
      castor,
      mercury,
      pluto,
      mediatorHandler,
    );

    let seed = apollo.createRandomSeed().seed;
    this.edgeAgent = new Agent(
      apollo,
      castor,
      pluto,
      mercury,
      mediatorHandler,
      this.connectionsManager,
      seed,
    );

    this.edgeAgent.addListener(
      ListenerKey.MESSAGE,
      async (messages: Domain.Message[]) => {
        for (let message of messages) {
          if (message.piuri.includes("/offer-credential")) {
            this.credentialOfferStack.push(message);
          } else if (message.piuri.includes("/present-proof")) {
            this.proofRequestStack.push(message);
          } else if (message.piuri.includes("/issue-credential")) {
            this.issuedCredentialStack.push(message);
          }
        }
      },
    );

    await this.edgeAgent.start();
  }

  static async mediatorDid(): Promise<string> {
    let response = await axios.get(EnvironmentVariables.oobUrl);
    let encodedData = response.data.split("?_oob=")[1];
    let oobData = JSON.parse(Buffer.from(encodedData, "base64").toString());
    return oobData.from;
  }

  static async connect(edgeAgent: Actor) {
    let url = await edgeAgent.answer<string>(Notepad.notes().get("invitation"));
    let oobInvitation = await this.edgeAgent.parseOOBInvitation(new URL(url));
    await this.edgeAgent.acceptDIDCommInvitation(oobInvitation);
  }

  static async verifyNewCredential(edgeAgent: Actor) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(30)).until(
        Questions.getArraySize(
          "credential offer stack",
          this.credentialOfferStack,
        ),
        equals(1),
      ),
    );
  }

  static async waitToReceiveIssuedCredential(edgeAgent: Actor) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(30)).until(
        Questions.getArraySize(
          "issued credential stack",
          this.issuedCredentialStack,
        ),
        equals(1),
      ),
    );
  }

  static async processIssuedCredential(edgeAgent: Actor) {
    let issuedCredential = this.issuedCredentialStack.pop()!;
    const issueCredential = IssueCredential.fromMessage(issuedCredential);
    await this.edgeAgent.processIssuedCredentialMessage(issueCredential);
  }

  static async acceptCredential(edgeAgent: Actor) {
    let message = OfferCredential.fromMessage(this.credentialOfferStack.pop()!);
    let requestCredential =
      await this.edgeAgent.prepareRequestCredentialWithIssuer(message);
    try {
      await this.edgeAgent.sendMessage(requestCredential.makeMessage());
    } catch (e) {
      console.error(
        "This should not appear",
        new Error().stack?.split("\n")[1],
      );
    }
  }

  static async waitForProofRequest(edgeAgent: Actor) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(30)).until(
        Questions.getArraySize(
          "proof of request stack",
          this.proofRequestStack,
        ),
        equals(1),
      ),
    );
  }

  static async presentProof(edgeAgent: Actor) {
    let credentials = await this.edgeAgent.verifiableCredentials();
    let credential = credentials[0];
    const requestPresentationMessage = RequestPresentation.fromMessage(
      this.proofRequestStack.pop()!,
    );
    let presentation = await this.edgeAgent.createPresentationForRequestProof(
      requestPresentationMessage,
      credential,
    );
    try {
      await this.edgeAgent.sendMessage(presentation.makeMessage());
    } catch (e) {
      console.error(
        "This should not appear",
        new Error().stack?.split("\n")[1],
      );
    }
  }

  static async stop() {
    await this.edgeAgent.stop();
  }
}
