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
} from "@atala/prism-wallet-sdk"
import {Message} from "@atala/prism-wallet-sdk/build/typings/domain"
import axios from "axios"
import {PlutoInMemory} from "./src/PlutoInMemory"
import {CloudAgentConfiguration} from "./configuration/CloudAgentConfiguration"

export class WalletSdk extends Ability implements Initialisable, Discardable {
  sdk!: Agent
  messages: MessageQueue = new MessageQueue()

  static async withANewInstance(): Promise<Ability> {
    return new WalletSdk(await WalletSdkBuilder.createInstance())
  }

  constructor(sdk: Agent) {
    super()
    this.sdk = sdk
  }

  static credentialOfferStackSize(): QuestionAdapter<number> {
    return Question.about("credential offer stack", actor => {
      return WalletSdk.as(actor).messages.credentialOfferStack.length
    })
  }

  static issuedCredentialStackSize(): QuestionAdapter<number> {
    return Question.about("issued credential stack", actor => {
      return WalletSdk.as(actor).messages.issuedCredentialStack.length
    })
  }

  static proofOfRequestStackSize(): QuestionAdapter<number> {
    return Question.about("proof of request stack", actor => {
      return WalletSdk.as(actor).messages.proofRequestStack.length
    })
  }

  static execute(callback: (sdk: Agent, messages: {
    credentialOfferStack: Message[],
    issuedCredentialStack: Message[],
    proofRequestStack: Message[]
  }) => Promise<void>): Interaction {
    return Interaction.where("#actor uses wallet sdk", async actor => {
      await callback(WalletSdk.as(actor).sdk, {
        credentialOfferStack: WalletSdk.as(actor).messages.credentialOfferStack,
        issuedCredentialStack: WalletSdk.as(actor).messages.issuedCredentialStack,
        proofRequestStack: WalletSdk.as(actor).messages.proofRequestStack
      })
    })
  }

  async discard(): Promise<void> {
    await this.sdk.stop()
  }

  async initialise(): Promise<void> {
    this.sdk.addListener(
      ListenerKey.MESSAGE, (messages: Domain.Message[]) => {
        for (const message of messages) {
          this.messages.enqueue(message)
        }
      }
    )

    await this.sdk.start()
  }

  isInitialised(): boolean {
    return this.sdk.state != "stopped"
  }
}

class WalletSdkBuilder {
  private static async getMediatorDidThroughOob(): Promise<string> {
    const response = await axios.get(CloudAgentConfiguration.mediatorOobUrl)
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

/**
 * Helper class for message queueing processor
 */
class MessageQueue {
  private processingId: NodeJS.Timeout | null = null
  private queue: Message[] = []

  credentialOfferStack: Message[] = []
  proofRequestStack: Message[] = []
  issuedCredentialStack: Message[] = []
  receivedMessages: string[] = []

  enqueue(message: Message) {
    this.queue.push(message)

    // auto start processing messages
    if (!this.processingId) {
      this.processMessages()
    }
  }

  dequeue(): Message {
    return this.queue.shift()!
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.queue.length === 0
  }

  // Get the number of messages in the queue
  size(): number {
    return this.queue.length
  }

  processMessages() {
    this.processingId = setInterval(() => {
      if (!this.isEmpty()) {
        const message: Message = this.dequeue()
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
      } else {
        clearInterval(this.processingId!)
        this.processingId = null
      }
    }, 50)
  }
}
