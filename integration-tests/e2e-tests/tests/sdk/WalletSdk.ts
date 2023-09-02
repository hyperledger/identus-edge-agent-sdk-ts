import {Ability, Discardable, Initialisable, Interaction, Question, QuestionAdapter} from "@serenity-js/core"
import {
  Agent,
  ApiImpl,
  Apollo,
  BasicMediatorHandler,
  Castor,
  ConnectionsManager,
  DIDCommWrapper,
  Domain, ListenerKey,
  Mercury,
  PublicMediatorStore
} from "@input-output-hk/atala-prism-wallet-sdk"
import {Message} from "@input-output-hk/atala-prism-wallet-sdk/build/typings/domain"
import axios from "axios"
import {EnvironmentVariables} from "./EnvironmentVariables"
import {PlutoInMemory} from "./src/PlutoInMemory"

export class WalletSdk extends Ability implements Initialisable, Discardable {
  sdk!: Agent
  credentialOfferStack: Message[] = []
  proofRequestStack: Message[] = []
  issuedCredentialStack: Message[] = []
  receivedMessages: string[] = []

  static async withANewInstance(): Promise<Ability> {
    return new WalletSdk(await WalletSdkBuilder.createInstance())
  }

  constructor(sdk: Agent) {
    super()
    this.sdk = sdk
  }

  static credentialOfferStackSize(): QuestionAdapter<number> {
    return Question.about("credential offer stack", actor => {
      return WalletSdk.as(actor).credentialOfferStack.length
    })
  }

  static issuedCredentialStackSize(): QuestionAdapter<number> {
    return Question.about("issued credential stack", actor => {
      return WalletSdk.as(actor).issuedCredentialStack.length
    })
  }

  static proofOfRequestStackSize(): QuestionAdapter<number> {
    return Question.about("proof of request stack", actor => {
      return WalletSdk.as(actor).proofRequestStack.length
    })
  }

  static execute(callback: (sdk: Agent, messages: {
    credentialOfferStack: Message[],
    issuedCredentialStack: Message[],
    proofRequestStack: Message[]
  }) => Promise<void>): Interaction {
    return Interaction.where("#actor uses wallet sdk", async actor => {
      await callback(WalletSdk.as(actor).sdk, {
        credentialOfferStack: WalletSdk.as(actor).credentialOfferStack,
        issuedCredentialStack: WalletSdk.as(actor).issuedCredentialStack,
        proofRequestStack: WalletSdk.as(actor).proofRequestStack
      })
    })
  }

  async discard(): Promise<void> {
    await this.sdk.stop()
  }

  async initialise(): Promise<void> {
    await this.sdk.start()

    this.sdk.addListener(
      ListenerKey.MESSAGE,
      async (messages: Domain.Message[]) => {
        for (const message of messages) {
          // checks if sdk already received message
          if (this.receivedMessages.includes(message.id)) {
            return
          }

          this.receivedMessages.push(message.id)
          if (message.piuri.includes("/offer-credential")) {
            this.credentialOfferStack.push(message)
          } else if (message.piuri.includes("/present-proof")) {
            this.proofRequestStack.push(message)
          } else if (message.piuri.includes("/issue-credential")) {
            this.issuedCredentialStack.push(message)
          }
        }
      }
    )
  }

  isInitialised(): boolean {
    return this.sdk.state != "stopped"
  }
}

class WalletSdkBuilder {
  private static async getMediatorDidThroughOob(): Promise<string> {
    const response = await axios.get(EnvironmentVariables.oobUrl)
    const encodedData = response.data.split("?_oob=")[1]
    const oobData = JSON.parse(Buffer.from(encodedData, "base64").toString())
    return oobData.from
  }

  static async createInstance() {
    const apollo = new Apollo()
    const castor = new Castor(apollo)
    const pluto = new PlutoInMemory()

    const api = new ApiImpl()
    const didcomm = new DIDCommWrapper(apollo, castor, pluto)
    const mercury = new Mercury(castor, didcomm, api)

    const mediatorDID = Domain.DID.fromString(await WalletSdkBuilder.getMediatorDidThroughOob())
    const mediatorStore = new PublicMediatorStore(pluto)

    const mediatorHandler = new BasicMediatorHandler(
      mediatorDID,
      mercury,
      mediatorStore,
    )

    const connectionsManager = new ConnectionsManager(
      castor,
      mercury,
      pluto,
      mediatorHandler,
    )

    const seed = apollo.createRandomSeed().seed
    return new Agent(
      apollo,
      castor,
      pluto,
      mercury,
      mediatorHandler,
      connectionsManager,
      seed,
    )
  }
}
