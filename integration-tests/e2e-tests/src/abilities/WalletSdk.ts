import { Ability, Discardable, Initialisable, Interaction, Question, QuestionAdapter } from "@serenity-js/core"
import SDK from "@atala/prism-wallet-sdk"
import { Message } from "@atala/prism-wallet-sdk/build/typings/domain"
import axios from "axios"
import { CloudAgentConfiguration } from "../configuration/CloudAgentConfiguration"
import InMemoryStore from "../configuration/inmemory"

const { Agent, Apollo, Domain, ListenerKey, } = SDK

export class WalletSdk extends Ability implements Initialisable, Discardable {
  sdk!: SDK.Agent
  store: SDK.Store
  messages: MessageQueue = new MessageQueue()

  static async withANewInstance(): Promise<Ability> {
    return new WalletSdk()
  }

  private static async getMediatorDidThroughOob(): Promise<string> {
    const response = await axios.get(CloudAgentConfiguration.mediatorOobUrl)
    const encodedData = response.data.split("?_oob=")[1]
    const oobData = JSON.parse(Buffer.from(encodedData, "base64").toString())
    return oobData.from
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

  static revocationStackSize(): QuestionAdapter<number> {
    return Question.about("revocation messages stack", actor => {
      return WalletSdk.as(actor).messages.revocationStack.length
    })
  }

  static presentationStackSize(): QuestionAdapter<number> {
    return Question.about("presentation messages stack", actor => {
      return WalletSdk.as(actor).messages.presentationMessagesStack.length
    })
  }

  static execute(callback: (sdk: SDK.Agent, messages: {
    credentialOfferStack: Message[];
    issuedCredentialStack: Message[];
    proofRequestStack: Message[];
    revocationStack: Message[],
    presentationMessagesStack: Message[]

  }) => Promise<void>): Interaction {
    return Interaction.where("#actor uses wallet sdk", async actor => {
      await callback(WalletSdk.as(actor).sdk, {
        credentialOfferStack: WalletSdk.as(actor).messages.credentialOfferStack,
        issuedCredentialStack: WalletSdk.as(actor).messages.issuedCredentialStack,
        proofRequestStack: WalletSdk.as(actor).messages.proofRequestStack,
        revocationStack: WalletSdk.as(actor).messages.revocationStack,
        presentationMessagesStack: WalletSdk.as(actor).messages.presentationMessagesStack
      })
    })
  }

  async discard(): Promise<void> {
    if (this.isInitialised()) {
      await this.store.clear()
      await this.sdk.stop()
    }
  }

  async createSdk(seed: SDK.Domain.Seed = undefined) {
    const apollo = new Apollo()
    this.store = new SDK.Store({
      name: [...Array(30)].map(() => Math.random().toString(36)[2]).join(""),
      storage: InMemoryStore,
      password: "random12434",
      ignoreDuplicate: true
    })
    const pluto = new SDK.Pluto(this.store, apollo)
    const mediatorDID = Domain.DID.fromString(await WalletSdk.getMediatorDidThroughOob())
    this.sdk = Agent.initialize({ seed, apollo, pluto, mediatorDID })

    this.sdk.addListener(
      ListenerKey.MESSAGE, (messages: SDK.Domain.Message[]) => {
        for (const message of messages) {
          this.messages.enqueue(message)
        }
      }
    )
  }

  async initialise(): Promise<void> {
    try {
      await this.createSdk()
      await this.sdk.start()
    } catch (e) {
      console.error(e)
      process.exit(-1)
    }
  }

  isInitialised(): boolean {
    if (!this.sdk) {
      return false
    }
    return this.sdk.state != "stopped"
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
  revocationStack: Message[] = []
  presentationMessagesStack: Message[] = []

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
        const piUri = message.piuri

        // checks if sdk already received message
        if (this.receivedMessages.includes(message.id)) {
          return
        }

        this.receivedMessages.push(message.id)


        if (piUri === SDK.ProtocolType.DidcommOfferCredential) {
          this.credentialOfferStack.push(message)
        } else if (piUri === SDK.ProtocolType.DidcommRequestPresentation) {
          this.proofRequestStack.push(message)
        } else if (piUri === SDK.ProtocolType.DidcommIssueCredential) {
          this.issuedCredentialStack.push(message)
        } else if (piUri === SDK.ProtocolType.PrismRevocation) {
          this.revocationStack.push(message)
        } else if (piUri === SDK.ProtocolType.DidcommPresentation) {
          this.presentationMessagesStack.push(message)
        }
      } else {
        clearInterval(this.processingId!)
        this.processingId = null
      }
    }, 50)
  }
}
