import { Given, Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'
import { PrismAgentWorkflow } from '../../src/PrismAgentWorkflow'
import { SdkAgentWorkflow } from '../../src/SdkAgentWorkflow'

Given('{actor} has a connection invitation', async function(cloudAgent: Actor) {
    await PrismAgentWorkflow.createConnection(cloudAgent)
})

Given('{actor} is connected to {actor}', async function(cloudAgent: Actor, edgeAgent: Actor) {
    await PrismAgentWorkflow.createConnection(cloudAgent)
    await PrismAgentWorkflow.shareInvitation(cloudAgent, edgeAgent)
    await SdkAgentWorkflow.connect(edgeAgent)
    await PrismAgentWorkflow.waitForConnectionState(cloudAgent, 'ConnectionResponseSent')
})

Given('{actor} shares invitation to {actor}', async function(cloudAgent: Actor, edgeAgent: Actor) {
    await PrismAgentWorkflow.shareInvitation(cloudAgent, edgeAgent)
})

When('{actor} offers a credential', async function(cloudAgent: Actor) {
    await PrismAgentWorkflow.offerCredential(cloudAgent)
})

When('{actor} asks for present-proof', async function(cloudAgent: Actor) {
    await PrismAgentWorkflow.askForPresentProof(cloudAgent)
})

Then('{actor} should have its status updated', async (cloudAgent: Actor) => {
    await PrismAgentWorkflow.waitForConnectionState(cloudAgent, 'ConnectionResponseSent')
})

Then('{actor} should see the credential was accepted', async (cloudAgent: Actor) => {
    await PrismAgentWorkflow.verifyCredentialState(cloudAgent, 'CredentialSent')
})

Then('{actor} should see the present-proof is verified', async (cloudAgent: Actor) => {
    await PrismAgentWorkflow.verifyPresentProof(cloudAgent, 'PresentationVerified')
})
