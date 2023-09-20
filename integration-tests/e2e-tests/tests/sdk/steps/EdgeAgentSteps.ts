import { Given, Then, When } from "@cucumber/cucumber"
import { Actor, Notepad } from "@serenity-js/core"
import { EdgeAgentWorkflow } from "../src/EdgeAgentWorkflow"
import { CloudAgentWorkflow } from "../src/CloudAgentWorkflow"
import { Utils } from "../../Utils"

Given("{actor} has {int} credentials issued by {actor}",
  async function (edgeAgent: Actor, numberOfIssuedCredentials: number, cloudAgent: Actor) {
    await Utils.repeat(numberOfIssuedCredentials, async () => {
      await CloudAgentWorkflow.offerCredential(cloudAgent)
      await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent)
      await EdgeAgentWorkflow.acceptCredential(edgeAgent)
      const recordId = await cloudAgent.answer(Notepad.notes().get("recordId"))
      await CloudAgentWorkflow.verifyCredentialState(cloudAgent, recordId, "CredentialSent")
      await EdgeAgentWorkflow.waitToReceiveCredentialIssuance(edgeAgent, 1)
      await EdgeAgentWorkflow.processIssuedCredential(edgeAgent, 1)
    })
  })

When("{actor} accepts {int} credential offer sequentially from {actor}",
  async function (edgeAgent: Actor, numberOfCredentialOffers: number, cloudAgent: Actor) {
    const recordIdList: string[] = []
    await Utils.repeat(numberOfCredentialOffers, async () => {
      await CloudAgentWorkflow.offerCredential(cloudAgent)
      await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent)
      await EdgeAgentWorkflow.acceptCredential(edgeAgent)
      const recordId = await cloudAgent.answer(Notepad.notes().get("recordId"))
      await CloudAgentWorkflow.verifyCredentialState(cloudAgent, recordId, "CredentialSent")
      recordIdList.push(recordId)
    })
    await cloudAgent.attemptsTo(Notepad.notes().set("recordIdList", recordIdList))
  })

When("{actor} accepts {int} credentials offer at once from {actor}",
  async function (edgeAgent: Actor, numberOfCredentials: number, cloudAgent: Actor) {
    const recordIdList: string[] = []
    await Utils.repeat(numberOfCredentials, async () => {
      await CloudAgentWorkflow.offerCredential(cloudAgent)
      const recordId = await cloudAgent.answer(Notepad.notes().get("recordId"))
      recordIdList.push(recordId)
    })
    await cloudAgent.attemptsTo(Notepad.notes().set("recordIdList", recordIdList))

    await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent, 3)
    
    await Utils.repeat(numberOfCredentials, async () => {
      await EdgeAgentWorkflow.acceptCredential(edgeAgent)
    })
  })

When("{actor} connects through the invite", 
  async function (edgeAgent: Actor) {
    await EdgeAgentWorkflow.connect(edgeAgent)
  })

When("{actor} accepts the credential", 
  async function (edgeAgent: Actor) {
    await EdgeAgentWorkflow.acceptCredential(edgeAgent)
  })

When("{actor} sends the present-proof",
  async function (edgeAgent: Actor) {
    await EdgeAgentWorkflow.waitForProofRequest(edgeAgent)
    await EdgeAgentWorkflow.presentProof(edgeAgent)
  })

Then("{actor} should receive the credential", 
  async function (edgeAgent: Actor) {
    await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent)
  })

Then("{actor} process {int} issued credentials", 
  async function (edgeAgent: Actor, numberOfCredentials: number) {
    await EdgeAgentWorkflow.processIssuedCredential(edgeAgent, numberOfCredentials)
  })

Then("{actor} wait to receive {int} issued credentials",
  async function (edgeAgent: Actor, expectedNumberOfCredentials: number) {
    await EdgeAgentWorkflow.waitToReceiveCredentialIssuance(edgeAgent, expectedNumberOfCredentials)
  })
