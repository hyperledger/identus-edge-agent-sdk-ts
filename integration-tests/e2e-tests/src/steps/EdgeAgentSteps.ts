import SDK from "@hyperledger/identus-edge-agent-sdk"
import { Given, Then, When } from "@cucumber/cucumber"
import { Actor, Notepad } from "@serenity-js/core"
import { EdgeAgentWorkflow } from "../workflow/EdgeAgentWorkflow"
import { CloudAgentWorkflow } from "../workflow/CloudAgentWorkflow"
import { Utils } from "../Utils"

Given("{actor} has '{int}' jwt credentials issued by {actor}",
  async function (edgeAgent: Actor, numberOfIssuedCredentials: number, cloudAgent: Actor) {
    const recordIdList = []
    await Utils.repeat(numberOfIssuedCredentials, async () => {
      await CloudAgentWorkflow.offerJwtCredential(cloudAgent)
      await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent, 1)
      await EdgeAgentWorkflow.acceptCredential(edgeAgent)
      const recordId = await cloudAgent.answer(Notepad.notes().get("recordId"))
      recordIdList.push(recordId)
      await CloudAgentWorkflow.verifyCredentialState(cloudAgent, recordId, "CredentialSent")
      await EdgeAgentWorkflow.waitToReceiveCredentialIssuance(edgeAgent, 1)
      await EdgeAgentWorkflow.processIssuedCredential(edgeAgent, recordId)
    })
    await cloudAgent.attemptsTo(Notepad.notes().set("recordIdList", recordIdList))
  })

Given("{actor} has '{int}' sd+jwt credentials issued by {actor}",
  async function (edgeAgent: Actor, numberOfIssuedCredentials: number, cloudAgent: Actor) {
    const recordIdList = []
    await Utils.repeat(numberOfIssuedCredentials, async () => {
      await CloudAgentWorkflow.offerSDJWTCredential(cloudAgent)
      await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent, 1)
      await EdgeAgentWorkflow.acceptCredential(edgeAgent)
      const recordId = await cloudAgent.answer(Notepad.notes().get("recordId"))
      recordIdList.push(recordId)
      await CloudAgentWorkflow.verifyCredentialState(cloudAgent, recordId, "CredentialSent")
      await EdgeAgentWorkflow.waitToReceiveCredentialIssuance(edgeAgent, 1)
      await EdgeAgentWorkflow.processIssuedCredential(edgeAgent, recordId)
    })
    await cloudAgent.attemptsTo(Notepad.notes().set("recordIdList", recordIdList))
  })

Given("{actor} has '{int}' anonymous credentials issued by {actor}",
  async function (edgeAgent: Actor, numberOfIssuedCredentials: number, cloudAgent: Actor) {
    const recordIdList = []
    await Utils.repeat(numberOfIssuedCredentials, async () => {
      await CloudAgentWorkflow.offerAnonymousCredential(cloudAgent)
      await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent, 1)
      await EdgeAgentWorkflow.acceptCredential(edgeAgent)
      const recordId = await cloudAgent.answer(Notepad.notes().get("recordId"))
      recordIdList.push(recordId)
      await CloudAgentWorkflow.verifyCredentialState(cloudAgent, recordId, "CredentialSent")
      await EdgeAgentWorkflow.waitToReceiveCredentialIssuance(edgeAgent, 1)
      await EdgeAgentWorkflow.processIssuedCredential(edgeAgent, recordId)
    })
    await cloudAgent.attemptsTo(Notepad.notes().set("recordIdList", recordIdList))
  }
)

Given("{actor} has created a backup",
  async function (edgeAgent: Actor) {
    await EdgeAgentWorkflow.createBackup(edgeAgent)
  }
)

Given("{actor} creates '{}' peer DIDs",
  async function (edgeAgent: Actor, numberOfDids: number) {
    await EdgeAgentWorkflow.createPeerDids(edgeAgent, numberOfDids)
  }
)

Given("{actor} creates '{}' prism DIDs",
  async function (edgeAgent: Actor, numberOfDids: number) {
    await EdgeAgentWorkflow.createPrismDids(edgeAgent, numberOfDids)
  }
)

When("{actor} accepts {int} sd+jwt credential offer sequentially from {actor}",
  async function (edgeAgent: Actor, numberOfCredentialOffers: number, cloudAgent: Actor) {
    const recordIdList: string[] = []
    await Utils.repeat(numberOfCredentialOffers, async () => {
      await CloudAgentWorkflow.offerSDJWTCredential(cloudAgent)
      await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent, 1)
      await EdgeAgentWorkflow.acceptCredential(edgeAgent)
      const recordId = await cloudAgent.answer(Notepad.notes().get("recordId"))
      await CloudAgentWorkflow.verifyCredentialState(cloudAgent, recordId, "CredentialSent")
      recordIdList.push(recordId)
    })
    await cloudAgent.attemptsTo(Notepad.notes().set("recordIdList", recordIdList))
  }
)

When("{actor} accepts {int} jwt credential offer sequentially from {actor}",
  async function (edgeAgent: Actor, numberOfCredentialOffers: number, cloudAgent: Actor) {
    const recordIdList: string[] = []
    await Utils.repeat(numberOfCredentialOffers, async () => {
      await CloudAgentWorkflow.offerJwtCredential(cloudAgent)
      await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent, 1)
      await EdgeAgentWorkflow.acceptCredential(edgeAgent)
      const recordId = await cloudAgent.answer(Notepad.notes().get("recordId"))
      await CloudAgentWorkflow.verifyCredentialState(cloudAgent, recordId, "CredentialSent")
      recordIdList.push(recordId)
    })
    await cloudAgent.attemptsTo(Notepad.notes().set("recordIdList", recordIdList))
  }
)

When("{actor} accepts {int} jwt credentials offer at once from {actor}",
  async function (edgeAgent: Actor, numberOfCredentials: number, cloudAgent: Actor) {
    const recordIdList: string[] = []
    await Utils.repeat(numberOfCredentials, async () => {
      await CloudAgentWorkflow.offerJwtCredential(cloudAgent)
      const recordId = await cloudAgent.answer(Notepad.notes().get("recordId"))
      recordIdList.push(recordId)
    })
    await cloudAgent.attemptsTo(Notepad.notes().set("recordIdList", recordIdList))

    await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent, numberOfCredentials)

    await Utils.repeat(numberOfCredentials, async () => {
      await EdgeAgentWorkflow.acceptCredential(edgeAgent)
    })
  }
)

When("{actor} accepts {int} sd+jwt credentials offer at once from {actor}",
  async function (edgeAgent: Actor, numberOfCredentials: number, cloudAgent: Actor) {
    const recordIdList: string[] = []
    await Utils.repeat(numberOfCredentials, async () => {
      await CloudAgentWorkflow.offerSDJWTCredential(cloudAgent)
      const recordId = await cloudAgent.answer(Notepad.notes().get("recordId"))
      recordIdList.push(recordId)
    })
    await cloudAgent.attemptsTo(Notepad.notes().set("recordIdList", recordIdList))

    await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent, numberOfCredentials)

    await Utils.repeat(numberOfCredentials, async () => {
      await EdgeAgentWorkflow.acceptCredential(edgeAgent)
    })
  }
)


When("{actor} connects through the invite",
  async function (edgeAgent: Actor) {
    await EdgeAgentWorkflow.connect(edgeAgent)
  }
)

When("{actor} accepts the credentials offer from {actor}",
  async function (edgeAgent: Actor, cloudAgent: Actor) {
    const recordIdList = await cloudAgent.answer(Notepad.notes().get("recordIdList"))
    Utils.repeat(recordIdList.length, async () => {
      await EdgeAgentWorkflow.acceptCredential(edgeAgent)
    })
  }
)

When("{actor} sends the present-proof",
  async function (edgeAgent: Actor) {
    await EdgeAgentWorkflow.waitForProofRequest(edgeAgent)
    await EdgeAgentWorkflow.presentProof(edgeAgent)
  }
)

Then("{actor} should receive the credentials offer from {actor}",
  async function (edgeAgent: Actor, cloudAgent: Actor) {
    const recordIdList = await cloudAgent.answer(Notepad.notes().get("recordIdList"))
    await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent, recordIdList.length)
  }
)

Then("{actor} waits to receive the revocation notifications from {actor}",
  async function (edgeAgent: Actor, cloudAgent: Actor) {
    const revokedRecordIdList = await cloudAgent.answer(Notepad.notes().get("revokedRecordIdList"))
    await EdgeAgentWorkflow.waitForCredentialRevocationMessage(edgeAgent, revokedRecordIdList.length)
  }
)

Then("{actor} should see the credentials were revoked by {actor}",
  async function (edgeAgent: Actor, cloudAgent: Actor) {
    const revokedRecordIdList = await cloudAgent.answer(Notepad.notes().get("revokedRecordIdList"))
    await EdgeAgentWorkflow.waitUntilCredentialIsRevoked(edgeAgent, revokedRecordIdList)
  }
)

Then("{actor} process issued credentials from {actor}",
  async function (edgeAgent: Actor, cloudAgent: Actor) {
    const recordIdList = await cloudAgent.answer<string[]>(Notepad.notes().get("recordIdList"))
    for (const recordId of recordIdList) {
      await EdgeAgentWorkflow.processIssuedCredential(edgeAgent, recordId)
    }
  }
)

Then("{actor} wait to receive issued credentials from {actor}",
  async function (edgeAgent: Actor, cloudAgent: Actor) {
    const recordIdList = await cloudAgent.answer(Notepad.notes().get("recordIdList"))
    await EdgeAgentWorkflow.waitToReceiveCredentialIssuance(edgeAgent, recordIdList.length)
  }
)

Then("a new SDK can be restored from {actor}",
  async function (edgeAgent: Actor) {
    await EdgeAgentWorkflow.createNewWalletFromBackup(edgeAgent)
  }
)

Then("a new SDK cannot be restored from {actor} with wrong seed",
  async function (edgeAgent: Actor) {
    await EdgeAgentWorkflow.createNewWalletFromBackupWithWrongSeed(edgeAgent)
  }
)

Then("a new {actor} is restored from {actor}",
  async function (newAgent: Actor, edgeAgent: Actor) {
    await EdgeAgentWorkflow.backupAndRestoreToNewAgent(newAgent, edgeAgent)
  }
)

Then("{actor} should have the expected values from {actor}",
  async function (copyEdgeAgent: Actor, originalEdgeAgent: Actor) {
    await EdgeAgentWorkflow.copyAgentShouldMatchOriginalAgent(copyEdgeAgent, originalEdgeAgent)
  }
)

Then("{actor} is dismissed",
  async function (edgeAgent: Actor) {
    await edgeAgent.dismiss()
  }
)

Then("{actor} will request {actor} to verify the anonymous credential",
  async function (verifierEdgeAgent: Actor, holderEdgeAgent: Actor) {
    await EdgeAgentWorkflow.createPeerDids(holderEdgeAgent, 1)
    const holderDID = await holderEdgeAgent.answer(Notepad.notes().get("lastPeerDID"))
    const claims = {
      attributes: {
        name: {
          name: "name",
          restrictions: {}
        }
      }
    }

    await EdgeAgentWorkflow.initiatePresentationRequest(verifierEdgeAgent, SDK.Domain.CredentialType.AnonCreds, holderDID, claims)
  }
)

Then("{actor} will request {actor} to verify the JWT credential",
  async function (verifierEdgeAgent: Actor, holderEdgeAgent: Actor) {
    await EdgeAgentWorkflow.createPeerDids(holderEdgeAgent, 1)
    const holderDID = await holderEdgeAgent.answer(Notepad.notes().get("lastPeerDID"))
    const claims = {
      claims: {
        "automation-required": {
          type: "string",
          pattern: "required value"
        }
      }
    }

    await EdgeAgentWorkflow.initiatePresentationRequest(verifierEdgeAgent, SDK.Domain.CredentialType.JWT, holderDID, claims)
  }
)

Then("{actor} will request {actor} to verify the SD+JWT credential",
  async function (verifierEdgeAgent: Actor, holderEdgeAgent: Actor) {
    await EdgeAgentWorkflow.createPeerDids(holderEdgeAgent, 1)
    const holderDID = await holderEdgeAgent.answer(Notepad.notes().get("lastPeerDID"))
    const claims = {
      claims: {
        "automation-required": {
          type: "string",
          pattern: "required value"
        }
      }
    }
    await EdgeAgentWorkflow.initiatePresentationRequest(verifierEdgeAgent, SDK.Domain.CredentialType.SDJWT, holderDID, claims)
  }
)

Then("{actor} will request {actor} to verify the SD+JWT credential with non-existing claims",
  async function (verifierEdgeAgent: Actor, holderEdgeAgent: Actor) {
    await EdgeAgentWorkflow.createPeerDids(holderEdgeAgent, 1)
    const holderDID = await holderEdgeAgent.answer(Notepad.notes().get("lastPeerDID"))
    const claims = {
      claims: {
        doesNotExist: {
          type: "string",
          pattern: "required value"
        }
      }
    }
    await EdgeAgentWorkflow.initiatePresentationRequest(verifierEdgeAgent, SDK.Domain.CredentialType.SDJWT, holderDID, claims)
  }
)

When("{actor} sends the verification proof", async (edgeAgent: Actor) => {
  await EdgeAgentWorkflow.waitForProofRequest(edgeAgent)
  await EdgeAgentWorkflow.presentVerificationRequest(edgeAgent)
})

Then("{actor} should receive an exception when trying to use a wrong anoncred credential", async (edgeAgent: Actor) => {
  await EdgeAgentWorkflow.waitForProofRequest(edgeAgent)
  await EdgeAgentWorkflow.tryToPresentVerificationRequestWithWrongAnoncred(edgeAgent)
})

Then("{actor} should see the verification proof is verified", async (edgeAgent: Actor) => {
  await EdgeAgentWorkflow.waitForPresentationMessage(edgeAgent)
  await EdgeAgentWorkflow.verifyPresentation(edgeAgent)
})

Then("{actor} should see the verification proof is verified false", async (edgeAgent: Actor) => {
  await EdgeAgentWorkflow.waitForPresentationMessage(edgeAgent)
  await EdgeAgentWorkflow.verifyPresentation(edgeAgent, false)
})
