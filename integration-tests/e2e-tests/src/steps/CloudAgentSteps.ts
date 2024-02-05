import {Given, Then, When} from "@cucumber/cucumber"
import {Actor, Notepad} from "@serenity-js/core"
import {CloudAgentWorkflow} from "../workflow/CloudAgentWorkflow"
import {EdgeAgentWorkflow} from "../workflow/EdgeAgentWorkflow"

Given("{actor} has a connection invitation with '{}', '{}' and '{}' parameters", 
  async function (cloudAgent: Actor, rawLabel: string, rawGoalCode: string, rawGoal: string) {
    const label = rawLabel == "null" ? undefined : rawLabel
    const goalCode = rawGoalCode == "null" ? undefined : rawGoalCode
    const goal = rawGoal == "null" ? undefined : rawGoal
    await CloudAgentWorkflow.createConnection(cloudAgent, label, goalCode, goal)
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

When("{actor} offers an anonymous credential", async function(cloudAgent: Actor) {
  await CloudAgentWorkflow.offerAnonymousCredential(cloudAgent)
})

When("{actor} asks for present-proof", async function (cloudAgent: Actor) {
  await CloudAgentWorkflow.askForPresentProof(cloudAgent)
})

Then("{actor} should have the connection status updated to '{}'", async (cloudAgent: Actor, expectedStatus: string) => {
  await CloudAgentWorkflow.waitForConnectionState(cloudAgent, expectedStatus)
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
