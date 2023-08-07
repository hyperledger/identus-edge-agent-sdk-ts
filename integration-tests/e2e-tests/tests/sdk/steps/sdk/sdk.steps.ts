import { Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'
import { SdkAgentWorkflow } from '../../src/SdkAgentWorkflow'

When('{actor} connects through the invite', async function(edgeAgent: Actor) {
    await SdkAgentWorkflow.connect(edgeAgent)
})

When('{actor} accepts the credential', async function(edgeAgent: Actor) {
    await SdkAgentWorkflow.acceptCredential(edgeAgent)
})

When('{actor} sends the present-proof', async function(edgeAgent: Actor) {
    await SdkAgentWorkflow.waitForProofRequest(edgeAgent)
    await SdkAgentWorkflow.presentProof(edgeAgent)
})

Then('{actor} should receive the credential', async function(edgeAgent: Actor) {
    await SdkAgentWorkflow.verifyNewCredential(edgeAgent)
})

Then('{actor} wait to receive an issued credential', async function(edgeAgent: Actor) {
    await SdkAgentWorkflow.waitToReceiveIssuedCredential(edgeAgent)
})

Then('{actor} process the issued credential', async function(edgeAgent: Actor) {
    await SdkAgentWorkflow.processIssuedCredential(edgeAgent)
})
