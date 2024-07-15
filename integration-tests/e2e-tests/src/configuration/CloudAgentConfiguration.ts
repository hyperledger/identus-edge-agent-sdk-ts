import {
  CreateManagedDidRequest,
  CreateManagedDidRequestDocumentTemplate,
  CredentialDefinitionInput,
  CredentialSchemaInput,
  ManagedDIDKeyTemplate,
  Purpose
} from "@hyperledger/identus-cloud-agent-client-ts"
import { Utils } from "../Utils"
import { randomUUID } from "crypto"
import * as fs from "fs"
import axios from "axios"
import { configDotenv } from "dotenv"
import assert from "assert"

configDotenv()

export class CloudAgentConfiguration {
  public static mediatorOobUrl: string = process.env.MEDIATOR_OOB_URL!
  public static agentUrl: string = process.env.AGENT_URL!
  public static publishedDid: string = process.env.PUBLISHED_DID!
  public static jwtSchemaGuid: string = process.env.JWT_SCHEMA_GUID!
  public static anoncredDefinitionGuid: string = process.env.ANONCRED_DEFINITION_GUID!
  public static apiKey: string | undefined = process.env.APIKEY

  private static isInitialized: boolean = false

  static async prepare() {
    if (this.isInitialized) {
      return
    }

    await this.preparePublishedDid()
    await this.prepareJwtSchema()
    await this.prepareAnoncredDefinition()

    this.isInitialized = true

    Utils.appendToNotes(`Mediator: ${this.mediatorOobUrl}`)
    Utils.appendToNotes(`Agent: ${this.agentUrl}`)
    Utils.appendToNotes(`DID: ${this.publishedDid}`)
    Utils.appendToNotes(`Jwt Schema: ${this.jwtSchemaGuid}`)
    Utils.appendToNotes(`Anoncred Definition: ${this.anoncredDefinitionGuid}`)
    Utils.appendToNotes(`SDK Version: ${this.getSdkVersion()}`)
  }

  private static getSdkVersion(): string {
    const file = "node_modules/@atala/prism-wallet-sdk/package.json"
    const json = JSON.parse(fs.readFileSync(file).toString())
    return json.version
  }

  /**
   * Checks if the environment PUBLISHED_DID variable exists in Cloud Agent, otherwise it creates a new one.
   */
  static async preparePublishedDid() {
    try {
      assert(this.publishedDid != null)
      assert(this.publishedDid != "")
      await axiosInstance.get(
        `did-registrar/dids/${this.publishedDid}`
      )
      return
    } catch (err) {
      Utils.appendToNotes("DID not found. Creating a new one and publishing it.")
    }

    const creationData = new CreateManagedDidRequest()
    creationData.documentTemplate =
      new CreateManagedDidRequestDocumentTemplate()

    const publicKey = new ManagedDIDKeyTemplate()
    publicKey.id = "key-1"
    publicKey.purpose = Purpose.AssertionMethod

    creationData.documentTemplate.publicKeys = [publicKey]
    creationData.documentTemplate.services = []

    const creationResponse = await axiosInstance.post(
      "did-registrar/dids",
      creationData
    )
    const longFormDid = creationResponse.data.longFormDid

    const publicationResponse = await axiosInstance.post(
      `did-registrar/dids/${longFormDid}/publications`
    )
    const shortFormDid = publicationResponse.data.scheduledOperation.didRef

    const abortController = new AbortController()
    setTimeout(() => {
      abortController.abort()
    }, 60000)

    this.publishedDid = await new Promise<string>((resolve, reject) => {
      if (!abortController.signal.aborted) {
        abortController.signal.onabort = () =>
          reject("Timeout waiting for the publication")
      }
      const interval = setInterval(async () => {
        const didResponse = await axiosInstance.get(
          `did-registrar/dids/${shortFormDid}`
        )
        if (didResponse.data.status == "PUBLISHED") {
          clearInterval(interval)
          resolve(didResponse.data.did)
        }
      }, 1000)
    })
  }

  /**
   * Checks if the environment JWT_SCHEMA_GUID variable exists in Cloud Agent, otherwise it creates a new one.
   */
  static async prepareJwtSchema() {
    try {
      assert(this.jwtSchemaGuid != null)
      assert(this.jwtSchemaGuid != "")
      await axiosInstance.get(
        `schema-registry/schemas/${this.jwtSchemaGuid}`
      )
      return
    } catch (err) {
      Utils.appendToNotes("Schema not found. Creating a new one.")
    }

    const credentialSchemaInput = new CredentialSchemaInput()
    credentialSchemaInput.author = this.publishedDid
    credentialSchemaInput.description =
      "Some description to automation generated schema"
    credentialSchemaInput.name = "automation-schema-" + randomUUID()
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
    }
    credentialSchemaInput.tags = ["automation"]
    credentialSchemaInput.type =
      "https://w3c-ccg.github.io/vc-json-schemas/schema/2.0/schema.json"
    credentialSchemaInput.version = "0.0.1"

    const schemaResponse = await axiosInstance.post(
      "schema-registry/schemas",
      credentialSchemaInput
    )

    this.jwtSchemaGuid = schemaResponse.data.guid
  }

  /**
   * Checks if the environment ANONCRED_DEFINITION_GUID variable exists in Cloud Agent, otherwise it creates a new one.
   */
  static async prepareAnoncredDefinition() {
    try {
      assert(this.anoncredDefinitionGuid != null)
      assert(this.anoncredDefinitionGuid != "")
      await axiosInstance.get(
        `credential-definition-registry/definitions/${this.anoncredDefinitionGuid}`
      )
      return
    } catch (err) {
      Utils.appendToNotes("Credential definition not found. Creating a new one.")
    }

    const schema = {
      name: "Automation Anoncred",
      version: "1.0",
      issuerId: this.publishedDid,
      attrNames: ["name", "age", "gender"]
    }

    const credentialSchemaInput: CredentialSchemaInput = {
      name: "automation-anoncred-schema-" + randomUUID(),
      version: "2.0.0",
      type: "AnoncredSchemaV1",
      schema: schema,
      author: this.publishedDid,
      tags: ["automation"],
      description: "Anoncred Schema for TS"
    }

    const newSchema = await axiosInstance.post(
      "schema-registry/schemas",
      credentialSchemaInput
    )

    const newSchemaGuid = newSchema.data.guid

    const definitionInput: CredentialDefinitionInput = {
      name: "automation-anoncred-definition-" + randomUUID(),
      version: "1.0.0",
      tag: "automation-test",
      author: this.publishedDid,
      schemaId: `${this.agentUrl}schema-registry/schemas/${newSchemaGuid}/schema`,
      signatureType: "CL",
      supportRevocation: false,
      description: "Test Automation Auto-Generated TS"
    }

    const credentialDefinition = await axiosInstance.post(
      "credential-definition-registry/definitions",
      definitionInput
    )

    this.anoncredDefinitionGuid = credentialDefinition.data.guid
  }
}

export const axiosInstance = axios.create({
  baseURL: CloudAgentConfiguration.agentUrl,
  timeout: 60000,
  headers: {
    Accept: "application/json,application/xml",
    APIKEY: CloudAgentConfiguration.apiKey
  }
})
