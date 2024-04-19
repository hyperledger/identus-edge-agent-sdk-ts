import { Ability, Discardable, Initialisable, Interaction, Question, QuestionAdapter } from "@serenity-js/core"
import SDK from "@atala/prism-wallet-sdk"
import { Message } from "@atala/prism-wallet-sdk/build/typings/domain"
import axios from "axios"
import { CloudAgentConfiguration } from "../configuration/CloudAgentConfiguration"
import { Utils } from "../Utils"
import { InMemoryStore } from "../configuration/InMemoryStore"

const { Agent, Apollo, Domain, ListenerKey, } = SDK

export class WalletSdk extends Ability implements Initialisable, Discardable {
  sdk!: SDK.Agent
  messages: MessageQueue = new MessageQueue()

  static async withANewInstance(): Promise<Ability> {
    const instance: SDK.Agent = await Utils.retry(2, async () => {
      return await WalletSdkBuilder.createInstance()
    })
    return new WalletSdk(instance)
  }

  constructor(sdk: SDK.Agent) {
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

  static revocationCredentialStackSize(): QuestionAdapter<number> {
    return Question.about("credential for revocation size", actor => {
      return WalletSdk.as(actor).messages.revocationCredentialStack.length
    })
  }

  static revocationStackSize(): QuestionAdapter<number> {
    return Question.about("revocation messages stack", actor => {
      return WalletSdk.as(actor).messages.revocationStack.length
    })
  }

  static execute(callback: (sdk: SDK.Agent, messages: {
    credentialOfferStack: Message[];
    issuedCredentialStack: Message[];
    proofRequestStack: Message[];
    revocationCredentialStack:Message[];
    revocationStack: Message[],
  }) => Promise<void>): Interaction {
    return Interaction.where("#actor uses wallet sdk", async actor => {
      await callback(WalletSdk.as(actor).sdk, {
        credentialOfferStack: WalletSdk.as(actor).messages.credentialOfferStack,
        issuedCredentialStack: WalletSdk.as(actor).messages.issuedCredentialStack,
        proofRequestStack: WalletSdk.as(actor).messages.proofRequestStack,
        revocationCredentialStack: WalletSdk.as(actor).messages.revocationCredentialStack,
        revocationStack: WalletSdk.as(actor).messages.revocationStack,
      })
    })
  }

  async discard(): Promise<void> {
    await this.sdk.stop()
  }

  async initialise(): Promise<void> {
    this.sdk.addListener(
      ListenerKey.MESSAGE, (messages: SDK.Domain.Message[]) => {
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
    const store = new InMemoryStore()
    const pluto = new SDK.Pluto(store, apollo)
    const mediatorDID = Domain.DID.fromString(await WalletSdkBuilder.getMediatorDidThroughOob())

    return Agent.initialize({ apollo, pluto, mediatorDID })
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


  //Stores the credential issue messages for revocation
  revocationCredentialStack: Message[] = [];
  //Stores the revocation messages
  revocationStack: Message[] = [];


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
          this.revocationCredentialStack.push(message)
        } else if (message.piuri.includes("/revoke")) {
          this.revocationStack.push(message)
        } 
      } else {
        clearInterval(this.processingId!)
        this.processingId = null
      }
    }, 50)
  }
}
