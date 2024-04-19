import SDK from "@atala/prism-wallet-sdk"
import { Actor, Duration, Notepad, Wait } from "@serenity-js/core"
import {equals, isGreaterThan} from "@serenity-js/assertions"
import { WalletSdk } from "../abilities/WalletSdk"
import { Utils } from "../Utils"

const { IssueCredential, OfferCredential, RequestPresentation, } = SDK


export class EdgeAgentWorkflow {


  static async connect(edgeAgent: Actor) {
    const url = await edgeAgent.answer<string>(Notepad.notes().get("invitation"))
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk) => {
        const oobInvitation = await sdk.parseOOBInvitation(new URL(url))
        await sdk.acceptDIDCommInvitation(oobInvitation)
      })
    )
  }

  static async waitForCredentialOffer(edgeAgent: Actor, numberOfCredentialOffer: number = 1) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofMinutes(2)).until(
        WalletSdk.credentialOfferStackSize(),
        equals(numberOfCredentialOffer)
      )
    )
  }

  static async waitToReceiveCredentialIssuance(edgeAgent: Actor, expectedNumberOfCredentials: number) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofMinutes(2)).until(
        WalletSdk.issuedCredentialStackSize(),
        equals(expectedNumberOfCredentials)
      )
    )
  }

  static async processIssuedCredential(edgeAgent: Actor, numberOfCredentials: number) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk, messages) => {
        await Utils.repeat(numberOfCredentials, async () => {
          const issuedCredential = messages.issuedCredentialStack.shift()!
          const issueCredential = IssueCredential.fromMessage(issuedCredential)
          await sdk.processIssuedCredentialMessage(issueCredential)
        })
      })
    )
  }

  static async acceptCredential(edgeAgent: Actor) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk, messages) => {
        const message = OfferCredential.fromMessage(messages.credentialOfferStack.shift()!)
        const requestCredential = await sdk.prepareRequestCredentialWithIssuer(message)
        const requestCredentialMessage = requestCredential.makeMessage()
        try {
          await sdk.sendMessage(requestCredentialMessage)
        } catch (e) {
          //
        }
      })
    )
  }

  static async waitForProofRequest(edgeAgent: Actor) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofMinutes(2)).until(
        WalletSdk.proofOfRequestStackSize(),
        equals(1),
      ),
    )
  }

  static async presentProof(edgeAgent: Actor) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk, messages) => {
        const credentials = await sdk.verifiableCredentials()
        const credential = credentials[0]
        const requestPresentationMessage = RequestPresentation.fromMessage(
          messages.proofRequestStack.shift()!,
        )
        const presentation = await sdk.createPresentationForRequestProof(
          requestPresentationMessage,
          credential,
        )
        try {
          await sdk.sendMessage(presentation.makeMessage())
        } catch (e) {
          //
        }
      }
      )
    )
  }
  
  static async waitUntilCredentialIsRevoked(edgeAgent: Actor) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofMinutes(2)).until(
        WalletSdk.revocationStackSize(),
        isGreaterThan(0)
      )
    )

    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk, messages) => {
        const credentials = await sdk.verifiableCredentials()
        const credential = credentials[0]

        await edgeAgent.attemptsTo(
          Wait.upTo(Duration.ofMinutes(2)).until(
            WalletSdk.revocationStackSize(),
            isGreaterThan(0)
          )
        )
        
        debugger;
      })

    )
  


    //   const blap = WalletSdk.issuedCredentialStackSize()
    //   console.log("<><><>" + blap)
      
      
    // await edgeAgent.attemptsTo(
    //   Wait.upTo(Duration.ofMinutes(2)).until(
    //     WalletSdk.credentialOfferStackSize(),
    //     isGreaterThan(0)
    //   ),
    // )


    /*
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk, messages) => {
        const credentials = await sdk.verifiableCredentials()
        const credential = credentials[0]
        let blap = messages
        console.log("<><><>")
      }),
      */
        
      
    /*
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofMinutes(2)).until(
        WalletSdk.execute(async (sdk, messages) => {
          const credentials = await sdk.verifiableCredentials()
          const credential = credentials[0]
        }),
        equals(null)
      ),
      
       */
      
  }
}
