import SDK from "@atala/prism-wallet-sdk"
import { Actor, Duration, Notepad, TakeNotes, Wait } from "@serenity-js/core"
import { Ensure, equals } from "@serenity-js/assertions"
import { WalletSdk } from "../abilities/WalletSdk"
import { Utils } from "../Utils"
import { randomUUID } from "crypto"
import _ from "lodash"
import { assert } from "chai"

const { IssueCredential, OfferCredential, RequestPresentation, Presentation } = SDK

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

  static async presentVerificationRequest(edgeAgent: Actor) {
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
      })
    )
  }

  static async verifyPresentation(edgeAgent: Actor, expected: boolean = true) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk, messages) => {
        const presentation = messages.presentationMessagesStack.shift()!;

        const presentationMessage = Presentation.fromMessage(
          presentation,
        );

        try {
          const verified = await sdk.handlePresentation(
            presentationMessage
          )
          if (!expected) assert.isFalse(verified)
          else assert.isTrue(verified)
        } catch (e) {
          if (e.message.includes("credential is revoked")) {
            assert.isTrue(expected === false)
          } else {
            throw e
          }
        }

      })
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

  static async waitForPresentationMessage(edgeAgent: Actor, numberOfMessages: number = 1) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        WalletSdk.presentationStackSize(),
        equals(numberOfMessages)
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
          return sdk.isCredentialRevoked(credential) &&
            credential.isRevoked() &&
            revokedIdList.includes(credential.id)
        })
        await edgeAgent.attemptsTo(
          Ensure.that(revokedCredentials.length, equals(revokedRecordIdList.length))
        )
      })
    )
  }

  static async createPeerDids(edgeAgent: Actor, numberOfDids: number = 1) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async sdk => {
        await Utils.repeat(numberOfDids, async () => {
          const did = await sdk.createNewPeerDID()
          await edgeAgent.attemptsTo(
            Notepad.notes().set('lastPeerDID', did)
          )
        })
      })
    )
  }

  static async initiatePresentationRequest<T extends SDK.Domain.CredentialType>(
    edgeAgent: Actor,
    type: T,
    toDiD: SDK.Domain.DID,
    claims: SDK.Domain.PresentationClaims<T>
  ) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk) => {
        await sdk.initiatePresentationRequest(
          type,
          toDiD,
          claims
        )
      })
    )
  }

  static async createPrismDids(edgeAgent: Actor, numberOfDids: number) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async sdk => {
        await Utils.repeat(numberOfDids, async () => {
          await sdk.createNewPrismDID(randomUUID())
        })
      })
    )
  }

  static async copyAgentShouldMatchOriginalAgent(copyEdgeAgent: Actor, originalEdgeAgent: Actor) {
    let expectedCredentials: SDK.Domain.Credential[]
    let expectedPeerDids: SDK.PeerDID[]
    let expectedPrismDids: SDK.Domain.PrismDID[]
    let expectedDidPairs: SDK.Domain.DIDPair[]

    await originalEdgeAgent.attemptsTo(
      WalletSdk.execute(async sdk => {
        expectedCredentials = await sdk.verifiableCredentials()
        expectedPeerDids = await sdk.pluto.getAllPeerDIDs()
        expectedPrismDids = await sdk.pluto.getAllPrismDIDs()
        expectedDidPairs = await sdk.pluto.getAllDidPairs()
      })
    )

    await copyEdgeAgent.attemptsTo(
      WalletSdk.execute(async sdk => {
        const credentials = await sdk.verifiableCredentials()
        const peerDids = await sdk.pluto.getAllPeerDIDs()
        const prismDids = await sdk.pluto.getAllPrismDIDs()
        const didPairs = await sdk.pluto.getAllDidPairs()

        await copyEdgeAgent.attemptsTo(
          Ensure.that(credentials.length, equals(expectedCredentials.length)),
          Ensure.that(peerDids.length, equals(expectedPeerDids.length)),
          Ensure.that(prismDids.length, equals(expectedPrismDids.length)),
          Ensure.that(didPairs.length, equals(expectedDidPairs.length)),
        )

        assert.isTrue(_.isEqual(expectedCredentials.map(it => it.id), credentials.map(it => it.id)))
        assert.isTrue(_.isEqual(expectedPeerDids.map(it => it.did.uuid), peerDids.map(it => it.did.uuid)))
        assert.isTrue(_.isEqual(expectedPrismDids.map(it => it.did.uuid), prismDids.map(it => it.did.uuid)))
        assert.isTrue(_.isEqual(expectedDidPairs.map(it => it.name), expectedDidPairs.map(it => it.name)))
      })
    )
  }


  static async createBackup(edgeAgent: Actor) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk) => {
        const backup = await sdk.backup.createJWE()
        await edgeAgent.attemptsTo(
          Notepad.notes().set("backup", backup),
          Notepad.notes().set("seed", sdk.seed)
        )
      })
    )
  }

  static async createNewWalletFromBackup(edgeAgent: Actor) {
    const backup = await edgeAgent.answer(Notepad.notes().get("backup"))
    const seed = await edgeAgent.answer(Notepad.notes().get("seed"))
    const walletSdk = new WalletSdk()
    await walletSdk.createSdk(seed)
    await walletSdk.sdk.pluto.start()
    await walletSdk.sdk.backup.restore(backup)
    await walletSdk.sdk.start()
    await walletSdk.sdk.stop()
  }

  static async createNewWalletFromBackupWithWrongSeed(edgeAgent: Actor) {
    const backup = await edgeAgent.answer(Notepad.notes().get("backup"))
    const walletSdk = new WalletSdk()
    const seed = new SDK.Apollo().createRandomSeed().seed
    await walletSdk.createSdk(seed)
    await walletSdk.sdk.pluto.start()

    try {
      await walletSdk.sdk.backup.restore(backup)
      assert.fail("SDK should not be able to restore with wrong seed phrase.")
    } catch (e) {
      assert.isTrue(e != undefined)
    }
  }

  static async backupAndRestoreToNewAgent(newAgent: Actor, edgeAgent: Actor) {
    const backup = await edgeAgent.answer(Notepad.notes().get("backup"))
    const seed = await edgeAgent.answer(Notepad.notes().get("seed"))
    const walletSdk = new WalletSdk()
    await walletSdk.createSdk(seed)
    await walletSdk.sdk.pluto.start()
    await walletSdk.sdk.backup.restore(backup)
    await walletSdk.sdk.start()
    newAgent.whoCan(walletSdk, TakeNotes.usingAnEmptyNotepad())
  }
}
