import SDK from "@atala/prism-wallet-sdk"
import { Actor, Duration, Notepad, Wait } from "@serenity-js/core"
import { Ensure, equals } from "@serenity-js/assertions"
import { WalletSdk } from "../abilities/WalletSdk"
import { Utils } from "../Utils"

const { IssueCredential, OfferCredential, RequestPresentation, } = SDK

export class EdgeAgentWorkflow {


  static async connect(edgeAgent: Actor) {
    const url = await edgeAgent.answer<string>(Notepad.notes().get("invitation"))
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk) => {
        const oobInvitation = await sdk.parseOOBInvitation(new URL(url))
        await sdk.acceptInvitation(oobInvitation)
      })
    )
  }

  static async waitForCredentialOffer(edgeAgent: Actor, numberOfCredentialOffer: number) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        WalletSdk.credentialOfferStackSize(),
        equals(numberOfCredentialOffer)
      )
    )
  }

  static async waitToReceiveCredentialIssuance(edgeAgent: Actor, expectedNumberOfCredentials: number) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        WalletSdk.issuedCredentialStackSize(),
        equals(expectedNumberOfCredentials)
      )
    )
  }

  static async processIssuedCredential(edgeAgent: Actor, recordId: string) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk, messages) => {
        const issuedCredential = messages.issuedCredentialStack.shift()!
        const issueCredential = IssueCredential.fromMessage(issuedCredential)
        const credential = await sdk.processIssuedCredentialMessage(issueCredential)
        await edgeAgent.attemptsTo(Notepad.notes().set(recordId, credential.id))
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
      Wait.upTo(Duration.ofSeconds(60)).until(
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

  static async waitForCredentialRevocationMessage(edgeAgent: Actor, numberOfRevocation: number) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        WalletSdk.revocationStackSize(),
        equals(numberOfRevocation)
      )
    )
  }

  static async waitUntilCredentialIsRevoked(edgeAgent: Actor, revokedRecordIdList: string[]) {
    const revokedIdList = await Promise.all(revokedRecordIdList.map(async recordId => {
      return await edgeAgent.answer(Notepad.notes().get(recordId))
    }))
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk) => {
        const credentials = await sdk.verifiableCredentials()
        const revokedCredentials = await Utils.asyncFilter(credentials, async credential => {
          // checks if it's revoked and part of the revoked ones
          return credential.isRevoked() && revokedIdList.includes(credential.id)
        })
        await edgeAgent.attemptsTo(
          Ensure.that(revokedCredentials.length, equals(revokedRecordIdList.length))
        )
      })
    )
  }
}
