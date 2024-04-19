import { Given, Then, When } from "@cucumber/cucumber"
import { Actor, Notepad } from "@serenity-js/core"
import { EdgeAgentWorkflow } from "../workflow/EdgeAgentWorkflow"
import { CloudAgentWorkflow } from "../workflow/CloudAgentWorkflow"
import { Utils } from "../Utils"

Given("{actor} has '{int}' jwt credentials issued by {actor}",
  async function (edgeAgent: Actor, numberOfIssuedCredentials: number, cloudAgent: Actor) {
    const recordIdList = []
    await Utils.repeat(numberOfIssuedCredentials, async () => {
      await CloudAgentWorkflow.offerCredential(cloudAgent)
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
  })

When("{actor} accepts {int} jwt credential offer sequentially from {actor}",
  async function (edgeAgent: Actor, numberOfCredentialOffers: number, cloudAgent: Actor) {
    const recordIdList: string[] = []
    await Utils.repeat(numberOfCredentialOffers, async () => {
      await CloudAgentWorkflow.offerCredential(cloudAgent)
      await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent, 1)
      await EdgeAgentWorkflow.acceptCredential(edgeAgent)
      const recordId = await cloudAgent.answer(Notepad.notes().get("recordId"))
      await CloudAgentWorkflow.verifyCredentialState(cloudAgent, recordId, "CredentialSent")
      recordIdList.push(recordId)
    })
    await cloudAgent.attemptsTo(Notepad.notes().set("recordIdList", recordIdList))
  })

When("{actor} accepts {int} jwt credentials offer at once from {actor}",
  async function (edgeAgent: Actor, numberOfCredentials: number, cloudAgent: Actor) {
    const recordIdList: string[] = []
    await Utils.repeat(numberOfCredentials, async () => {
      await CloudAgentWorkflow.offerCredential(cloudAgent)
      const recordId = await cloudAgent.answer(Notepad.notes().get("recordId"))
      recordIdList.push(recordId)
    })
    await cloudAgent.attemptsTo(Notepad.notes().set("recordIdList", recordIdList))

    await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent, numberOfCredentials)

    await Utils.repeat(numberOfCredentials, async () => {
      await EdgeAgentWorkflow.acceptCredential(edgeAgent)
    })
  })

When("{actor} connects through the invite",
  async function (edgeAgent: Actor) {
    await EdgeAgentWorkflow.connect(edgeAgent)
  })

When("{actor} accepts the credentials offer from {actor}",
  async function (edgeAgent: Actor, cloudAgent: Actor) {
    const recordIdList = await cloudAgent.answer(Notepad.notes().get("recordIdList"))
    Utils.repeat(recordIdList.length, async () => {
      await EdgeAgentWorkflow.acceptCredential(edgeAgent)
    })
  })

When("{actor} sends the present-proof",
  async function (edgeAgent: Actor) {
    await EdgeAgentWorkflow.waitForProofRequest(edgeAgent)
    await EdgeAgentWorkflow.presentProof(edgeAgent)
  })

Then("{actor} should receive the credentials offer from {actor}",
  async function (edgeAgent: Actor, cloudAgent: Actor) {
    const recordIdList = await cloudAgent.answer(Notepad.notes().get("recordIdList"))
    await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent, recordIdList.length)
  })

Then("{actor} waits to receive the revocation notifications from {actor}",
  async function (edgeAgent: Actor, cloudAgent: Actor) {
    const revokedRecordIdList = await cloudAgent.answer(Notepad.notes().get("revokedRecordIdList"))
    await EdgeAgentWorkflow.waitForCredentialRevocationMessage(edgeAgent, revokedRecordIdList.length)
  })

Then("{actor} should see the credentials were revoked by {actor}",
  async function (edgeAgent: Actor, cloudAgent: Actor) {
    const revokedRecordIdList = await cloudAgent.answer(Notepad.notes().get("revokedRecordIdList"))
    await EdgeAgentWorkflow.waitUntilCredentialIsRevoked(edgeAgent, revokedRecordIdList)
  })

Then("{actor} process issued credentials from {actor}",
  async function (edgeAgent: Actor, cloudAgent: Actor) {
    const recordIdList = await cloudAgent.answer<string[]>(Notepad.notes().get("recordIdList"))
    for (const recordId of recordIdList) {
      await EdgeAgentWorkflow.processIssuedCredential(edgeAgent, recordId)
    }
  })

Then("{actor} wait to receive issued credentials from {actor}",
  async function (edgeAgent: Actor, cloudAgent: Actor) {
    const recordIdList = await cloudAgent.answer(Notepad.notes().get("recordIdList"))
    await EdgeAgentWorkflow.waitToReceiveCredentialIssuance(edgeAgent, recordIdList.length)
  })
