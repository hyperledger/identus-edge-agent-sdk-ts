import { Actor, Duration, Notepad, Wait } from "@serenity-js/core";
import { LastResponse, PostRequest, Send } from "@serenity-js/rest";
import { Ensure, equals } from "@serenity-js/assertions";
import { HttpStatusCode } from "axios";
import { Expectations } from "../../Expectations";
import { Questions } from "../../Questions";
import { EnvironmentVariables } from "../environment.variables";
import { randomUUID } from "crypto";
import {
  CreateConnectionRequest,
  CreateIssueCredentialRecordRequest,
  CreateManagedDidRequest,
  CreateManagedDidRequestDocumentTemplate,
  CredentialSchemaInput,
  ManagedDIDKeyTemplate,
  Options,
  ProofRequestAux,
  RequestPresentationInput,
} from "@input-output-hk/prism-typescript-client";
import { axiosInstance } from "../steps/lifecycle.steps";
import { Utils } from "../../Utils";

export class PrismAgentWorkflow {
  private static isInitialized: boolean = false;
  private static publishedDid: string;
  private static schemaId: string;

  static async prepare() {
    if (this.isInitialized) {
      return;
    }

    await this.preparePublishedDid();
    await this.prepareSchema();

    this.isInitialized = true;
  }

  /**
   * Checks if the environment PUBLISHED_DID variable exists in prism-agent, otherwise it creates a new one.
   */
  static async preparePublishedDid() {
    try {
      await axiosInstance.get(
        `${EnvironmentVariables.agentUrl}/did-registrar/dids/${EnvironmentVariables.publishedDid}`
      );
      this.publishedDid = EnvironmentVariables.publishedDid;
      return;
    } catch (err) {
      console.warn("DID not found. Creating a new one and publishing it.");
    }

    let creationData = new CreateManagedDidRequest();
    creationData.documentTemplate =
      new CreateManagedDidRequestDocumentTemplate();

    let publicKey = new ManagedDIDKeyTemplate();
    publicKey.id = "key-1";
    publicKey.purpose = "assertionMethod";

    creationData.documentTemplate.publicKeys = [publicKey];
    creationData.documentTemplate.services = [];

    let creationResponse = await axiosInstance.post(
      `${EnvironmentVariables.agentUrl}/did-registrar/dids`,
      creationData
    );
    let longFormDid = creationResponse.data.longFormDid;

    let publicationResponse = await axiosInstance.post(
      `${EnvironmentVariables.agentUrl}/did-registrar/dids/${longFormDid}/publications`
    );
    let shortFormDid = publicationResponse.data.scheduledOperation.didRef;

    let abortController = new AbortController();
    setTimeout(() => {
      abortController.abort();
    }, 60000);

    await new Promise<void>((resolve, reject) => {
      if (!abortController.signal.aborted) {
        abortController.signal.onabort = () =>
          reject("Timeout waiting for the publication");
      }
      let interval = setInterval(async () => {
        let didResponse = await axiosInstance.get(
          `${EnvironmentVariables.agentUrl}/did-registrar/dids/${shortFormDid}`
        );
        if (didResponse.data.status == "PUBLISHED") {
          clearInterval(interval);
          this.publishedDid = didResponse.data.did;
          resolve();
        }
      }, 1000);
    });

    Utils.appendToNotes(`Created new DID: ${this.publishedDid}`);
  }

  /**
   * Checks if the environment SCHEMA_ID variable exists in prism-agent, otherwise it creates a new one.
   */
  static async prepareSchema() {
    try {
      await axiosInstance.get(
        `${EnvironmentVariables.agentUrl}/schema-registry/schemas/${EnvironmentVariables.schemaId}`
      );
      this.schemaId = EnvironmentVariables.schemaId;
      return;
    } catch (err) {
      console.warn("Schema not found. Creating a new one.");
    }

    let credentialSchemaInput = new CredentialSchemaInput();
    credentialSchemaInput.author = this.publishedDid;
    credentialSchemaInput.description =
      "Some description to automation generated schema";
    credentialSchemaInput.name = "automation-schema-" + randomUUID();
    credentialSchemaInput.schema = {
      $id: `https://example.com/${credentialSchemaInput.name}`,
      $schema: "https://json-schema.org/draft/2020-12/schema",
      description: credentialSchemaInput.description,
      type: "object",
      properties: {
        "automation-required": {
          type: "string",
        },
        "automation-optional": {
          type: "string",
        },
      },
      required: ["automation-required"],
      additionalProperties: false,
    };
    credentialSchemaInput.tags = ["automation"];
    credentialSchemaInput.type =
      "https://w3c-ccg.github.io/vc-json-schemas/schema/2.0/schema.json";
    credentialSchemaInput.version = "0.0.1";

    let schemaResponse = await axiosInstance.post(
      `${EnvironmentVariables.agentUrl}/schema-registry/schemas`,
      credentialSchemaInput
    );

    this.schemaId = schemaResponse.data.guid;

    Utils.appendToNotes(`Created new schema: ${this.schemaId}`);
  }

  static async createConnection(cloudAgent: Actor) {
    let createConnection = new CreateConnectionRequest();
    createConnection.label = "Alice";
    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to(`${EnvironmentVariables.agentUrl}/connections`).with(createConnection)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      Notepad.notes().set(
        "invitation",
        LastResponse.body().invitation.invitationUrl
      ),
      Notepad.notes().set("connectionId", LastResponse.body().connectionId)
    );
  }

  static async shareInvitation(cloudAgent: Actor, edgeAgent: Actor) {
    let oobInvitation = await cloudAgent.answer(
      Notepad.notes().get("invitation")
    );
    await edgeAgent.attemptsTo(Notepad.notes().set("invitation", oobInvitation));
  }

  static async waitForConnectionState(cloudAgent: Actor, state: string) {
    let connectionId = await cloudAgent.answer(
      Notepad.notes().get("connectionId")
    );
    await cloudAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(30)).until(
        Questions.httpGet(`${EnvironmentVariables.agentUrl}/connections/${connectionId}`),
        Expectations.propertyValueToBe((actual) => actual.state, state)
      )
    );
  }

  static async verifyCredentialState(cloudAgent: Actor, state: string) {
    let recordId = await cloudAgent.answer(Notepad.notes().get("recordId"));
    await cloudAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(30)).until(
        Questions.httpGet(`${EnvironmentVariables.agentUrl}/issue-credentials/records/${recordId}`),
        Expectations.propertyValueToBe((actual) => actual.protocolState, state)
      )
    );
  }

  static async verifyPresentProof(cloudAgent: Actor, state: string) {
    let presentationId = await cloudAgent.answer(
      Notepad.notes().get("presentationId")
    );
    await cloudAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(30)).until(
        Questions.httpGet(`${EnvironmentVariables.agentUrl}/present-proof/presentations/${presentationId}`),
        Expectations.propertyValueToBe((actual) => actual.status, state)
      )
    );
  }

  static async offerCredential(cloudAgent: Actor) {
    let credential = new CreateIssueCredentialRecordRequest();
    credential.claims = {
      "automation-required": "required value",
    };
    credential.schemaId = `${EnvironmentVariables.agentUrl}/schema-registry/schemas/${this.schemaId}`;
    credential.automaticIssuance = true;
    credential.issuingDID = this.publishedDid;
    credential.connectionId = await cloudAgent.answer<string>(
      Notepad.notes().get("connectionId")
    );

    await cloudAgent.attemptsTo(
      Send.a(
        PostRequest.to(`${EnvironmentVariables.agentUrl}/issue-credentials/credential-offers`).with(credential)
      ),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
    );
    await cloudAgent.attemptsTo(
      Notepad.notes().set("recordId", LastResponse.body().recordId)
    );
  }

  static async askForPresentProof(cloudAgent: Actor) {
    let presentProofRequest = new RequestPresentationInput();
    presentProofRequest.connectionId = await cloudAgent.answer(
      Notepad.notes().get("connectionId")
    );
    presentProofRequest.options = new Options();
    presentProofRequest.options.challenge = randomUUID();
    presentProofRequest.options.domain = EnvironmentVariables.agentUrl;

    let proof = new ProofRequestAux();
    proof.schemaId = "https://schema.org/Person";
    proof.trustIssuers = [this.publishedDid];

    presentProofRequest.proofs = [proof];

    await cloudAgent.attemptsTo(
      Send.a(
        PostRequest.to(`${EnvironmentVariables.agentUrl}/present-proof/presentations`).with(presentProofRequest)
      ),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      Notepad.notes().set("presentationId", LastResponse.body().presentationId)
    );
  }
}
