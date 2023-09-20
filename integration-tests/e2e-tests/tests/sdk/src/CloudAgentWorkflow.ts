import {Actor, Duration, Notepad, Wait} from "@serenity-js/core"
import {LastResponse, PostRequest, Send} from "@serenity-js/rest"
import {Ensure, equals} from "@serenity-js/assertions"
import {HttpStatusCode} from "axios"
import {Expectations} from "../../Expectations"
import {Questions} from "../../Questions"
import {EnvironmentVariables} from "../EnvironmentVariables"
import {randomUUID} from "crypto"
import {
  CreateConnectionRequest,
  CreateIssueCredentialRecordRequest,
  Options,
  ProofRequestAux,
  RequestPresentationInput,
} from "@input-output-hk/prism-typescript-client"
import {CloudAgentConfiguration} from "../configuration/CloudAgentConfiguration"

export class CloudAgentWorkflow {
  static async createConnection(cloudAgent: Actor) {
    const createConnection = new CreateConnectionRequest()
    createConnection.label = "Alice"
    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("/connections").with(createConnection)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      Notepad.notes().set(
        "invitation",
        LastResponse.body().invitation.invitationUrl
      ),
      Notepad.notes().set("connectionId", LastResponse.body().connectionId)
    )
  }

  static async shareInvitation(cloudAgent: Actor, edgeAgent: Actor) {
    const oobInvitation = await cloudAgent.answer(
      Notepad.notes().get("invitation")
    )
    await edgeAgent.attemptsTo(Notepad.notes().set("invitation", oobInvitation))
  }

  static async waitForConnectionState(cloudAgent: Actor, state: string) {
    const connectionId = await cloudAgent.answer(
      Notepad.notes().get("connectionId")
    )
    await cloudAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        Questions.httpGet(`/connections/${connectionId}`),
        Expectations.propertyValueToBe("state", state)
      )
    )
  }

  static async verifyCredentialState(cloudAgent: Actor, recordId: string, state: string) {
    await cloudAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        Questions.httpGet(`/issue-credentials/records/${recordId}`),
        Expectations.propertyValueToBe("protocolState", state)
      )
    )
  }

  static async verifyPresentProof(cloudAgent: Actor, state: string) {
    const presentationId = await cloudAgent.answer(
      Notepad.notes().get("presentationId")
    )
    await cloudAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        Questions.httpGet(`/present-proof/presentations/${presentationId}`),
        Expectations.propertyValueToBe("status", state)
      )
    )
  }

  static async offerCredential(cloudAgent: Actor) {
    const credential = new CreateIssueCredentialRecordRequest()
    credential.claims = {
      "automation-required": "required value",
    }
    credential.schemaId = `${EnvironmentVariables.agentUrl}/schema-registry/schemas/${CloudAgentConfiguration.schemaId}`
    credential.automaticIssuance = true
    credential.issuingDID = CloudAgentConfiguration.publishedDid
    credential.connectionId = await cloudAgent.answer<string>(
      Notepad.notes().get("connectionId")
    )

    await cloudAgent.attemptsTo(
      Send.a(
        PostRequest.to("/issue-credentials/credential-offers").with(credential)
      )
    )
    await cloudAgent.attemptsTo(
      Notepad.notes().set("recordId", LastResponse.body().recordId)
    )
  }

  static async askForPresentProof(cloudAgent: Actor) {
    const presentProofRequest = new RequestPresentationInput()
    presentProofRequest.connectionId = await cloudAgent.answer(
      Notepad.notes().get("connectionId")
    )
    presentProofRequest.options = new Options()
    presentProofRequest.options.challenge = randomUUID()
    presentProofRequest.options.domain = EnvironmentVariables.agentUrl

    const proof = new ProofRequestAux()
    proof.schemaId = "https://schema.org/Person"
    proof.trustIssuers = [CloudAgentConfiguration.publishedDid]

    presentProofRequest.proofs = [proof]

    await cloudAgent.attemptsTo(
      Send.a(
        PostRequest.to("/present-proof/presentations").with(presentProofRequest)
      ),
      Notepad.notes().set("presentationId", LastResponse.body().presentationId)
    )
  }
}
