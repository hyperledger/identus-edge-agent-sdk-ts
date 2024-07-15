import { Actor, Duration, Notepad, Wait } from "@serenity-js/core"
import { LastResponse, PatchRequest, PostRequest, Send } from "@serenity-js/rest"
import { Ensure, equals } from "@serenity-js/assertions"
import { HttpStatusCode } from "axios"
import { Expectations } from "../screenplay/Expectations"
import { Questions } from "../screenplay/Questions"
import { randomUUID } from "crypto"
import {
  CreateConnectionRequest,
  CreateIssueCredentialRecordRequest,
  Options,
  ProofRequestAux,
  RequestPresentationInput,
} from "@hyperledger/identus-cloud-agent-client-ts"
import { CloudAgentConfiguration } from "../configuration/CloudAgentConfiguration"
import { Utils } from "../Utils"

export class CloudAgentWorkflow {
  static async createConnection(cloudAgent: Actor, label?: string, goalCode?: string, goal?: string) {
    const createConnection = new CreateConnectionRequest()
    createConnection.label = label
    createConnection.goalCode = goalCode
    createConnection.goal = goal

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("connections").with(createConnection)),
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
        Questions.httpGet(`connections/${connectionId}`),
        Expectations.propertyValueToBe("state", state)
      )
    )
  }

  static async verifyCredentialState(cloudAgent: Actor, recordId: string, state: string) {
    await cloudAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        Questions.httpGet(`issue-credentials/records/${recordId}`),
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
        Questions.httpGet(`present-proof/presentations/${presentationId}`),
        Expectations.propertyValueToBe("status", state)
      )
    )
  }

  static async offerCredential(cloudAgent: Actor) {
    const credential = new CreateIssueCredentialRecordRequest()
    credential.claims = {
      "automation-required": "required value",
    }
    credential.schemaId = `${CloudAgentConfiguration.agentUrl}schema-registry/schemas/${CloudAgentConfiguration.jwtSchemaGuid}`
    credential.automaticIssuance = true
    credential.issuingDID = CloudAgentConfiguration.publishedDid
    credential.connectionId = await cloudAgent.answer<string>(
      Notepad.notes().get("connectionId")
    )

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("issue-credentials/credential-offers").with(credential)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      Notepad.notes().set("recordId", LastResponse.body().recordId)
    )
  }

  static async offerAnonymousCredential(cloudAgent: Actor) {
    const credential: CreateIssueCredentialRecordRequest = {
      claims: {
        "name": "automation",
        "age": "99",
        "gender": "M"
      },
      automaticIssuance: true,
      issuingDID: CloudAgentConfiguration.publishedDid,
      connectionId: await cloudAgent.answer<string>(
        Notepad.notes().get("connectionId")
      ),
      credentialFormat: "AnonCreds",
      credentialDefinitionId: CloudAgentConfiguration.anoncredDefinitionGuid
    }

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("issue-credentials/credential-offers").with(credential)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
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
    presentProofRequest.options.domain = CloudAgentConfiguration.agentUrl

    const proof = new ProofRequestAux()
    proof.schemaId = "https://schema.org/Person"
    proof.trustIssuers = [CloudAgentConfiguration.publishedDid]

    presentProofRequest.proofs = [proof]

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("present-proof/presentations").with(presentProofRequest)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      Notepad.notes().set("presentationId", LastResponse.body().presentationId)
    )
  }

  static async askForPresentProofAnonCreds(cloudAgent: Actor) {
    const anoncredGuid = CloudAgentConfiguration.anoncredDefinitionGuid
    const definitionUrl = `${CloudAgentConfiguration.agentUrl}credential-definition-registry/definitions/${anoncredGuid}/definition`
    const connectionId = await cloudAgent.answer(Notepad.notes().get("connectionId"))

    const presentationRequest = {
      connectionId: connectionId,
      credentialFormat: "AnonCreds",
      anoncredPresentationRequest: {
        requested_attributes: {
          gender: {
            name: "gender",
            restrictions: [{
              "attr::gender::value": "M",
              cred_def_id: definitionUrl
            }]
          }
        },
        requested_predicates: {
          age: {
            name: "age",
            p_type: ">=",
            p_value: 18,
            restrictions: []
          }
        },
        name: "proof_req_1",
        nonce: Utils.generateNonce(25),
        version: "0.1"
      },
      proofs: [],
      options: null
    }

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("present-proof/presentations").with(presentationRequest)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      Notepad.notes().set("presentationId", LastResponse.body().presentationId)
    )
  }

  static async revokeCredential(cloudAgent: Actor, numberOfRevokedCredentials: number) {
    const revokedRecordIdList = []
    const recordIdList = await cloudAgent.answer(Notepad.notes().get("recordIdList"))
    await Utils.repeat(numberOfRevokedCredentials, async () => {
      const recordId = recordIdList.shift()!
      await cloudAgent.attemptsTo(
        Send.a(PatchRequest.to(`credential-status/revoke-credential/${recordId}`)),
        Ensure.that(LastResponse.status(), equals(HttpStatusCode.Ok))
      )
      revokedRecordIdList.push(recordId)
    })

    await cloudAgent.attemptsTo(
      Notepad.notes().set("recordIdList", recordIdList),
      Notepad.notes().set("revokedRecordIdList", revokedRecordIdList)
    )
  }
}
