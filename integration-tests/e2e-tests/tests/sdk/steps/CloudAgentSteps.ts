import {Given, Then, When} from "@cucumber/cucumber"
import {Actor, Notepad} from "@serenity-js/core"
import {CloudAgentWorkflow} from "../src/CloudAgentWorkflow"
import {EdgeAgentWorkflow} from "../src/EdgeAgentWorkflow"

Given("{actor} has a connection invitation", async function (cloudAgent: Actor) {
  await CloudAgentWorkflow.createConnection(cloudAgent)
})

Given("{actor} is connected to {actor}", async function (cloudAgent: Actor, edgeAgent: Actor) {
  await CloudAgentWorkflow.createConnection(cloudAgent)
  await CloudAgentWorkflow.shareInvitation(cloudAgent, edgeAgent)
  await EdgeAgentWorkflow.connect(edgeAgent)
  await CloudAgentWorkflow.waitForConnectionState(cloudAgent, "ConnectionResponseSent")
})

Given("{actor} shares invitation to {actor}", async function (cloudAgent: Actor, edgeAgent: Actor) {
  await CloudAgentWorkflow.shareInvitation(cloudAgent, edgeAgent)
})

When("{actor} offers a credential", async function (cloudAgent: Actor) {
  await CloudAgentWorkflow.offerCredential(cloudAgent)
})

When("{actor} asks for present-proof", async function (cloudAgent: Actor) {
  await CloudAgentWorkflow.askForPresentProof(cloudAgent)
})

Then("{actor} should have its status updated", async (cloudAgent: Actor) => {
  await CloudAgentWorkflow.waitForConnectionState(cloudAgent, "ConnectionResponseSent")
})

Then("{actor} should see the credential was accepted", async (cloudAgent: Actor) => {
  const recordId = await cloudAgent.answer(Notepad.notes().get("recordId"))
  await CloudAgentWorkflow.verifyCredentialState(cloudAgent, recordId, "CredentialSent")
})

Then("{actor} should see the present-proof is verified", async (cloudAgent: Actor) => {
  await CloudAgentWorkflow.verifyPresentProof(cloudAgent, "PresentationVerified")
})

Then("{actor} should see all credentials were accepted", async (cloudAgent: Actor) => {
  const recordIdList = await cloudAgent.answer<string[]>(Notepad.notes().get("recordIdList"))
  for (const recordId of recordIdList) {
    await CloudAgentWorkflow.verifyCredentialState(cloudAgent, recordId, "CredentialSent")
  }
})