import {EnvironmentVariables} from "../EnvironmentVariables"
import {
  CreateManagedDidRequest,
  CreateManagedDidRequestDocumentTemplate,
  CredentialSchemaInput,
  ManagedDIDKeyTemplate
} from "@input-output-hk/prism-typescript-client"
import {Utils} from "../../Utils"
import {randomUUID} from "crypto"
import {axiosInstance} from "../steps/LifecycleSteps"
import * as fs from "fs"

export class CloudAgentConfiguration {
  static publishedDid: string
  static schemaId: string

  private static isInitialized: boolean = false

  static async prepare() {
    if (this.isInitialized) {
      return
    }

    await this.preparePublishedDid()
    await this.prepareSchema()

    this.isInitialized = true

    Utils.appendToNotes(`Mediator: ${EnvironmentVariables.mediatorOobUrl}`)
    Utils.appendToNotes(`Agent: ${EnvironmentVariables.agentUrl}`)
    Utils.appendToNotes(`DID: ${this.publishedDid}`)
    Utils.appendToNotes(`Schema: ${this.schemaId}`)
    Utils.appendToNotes(`SDK Version: ${this.getSdkVersion()}`)
  }

  private static getSdkVersion(): string {
    const file = "node_modules/@input-output-hk/atala-prism-wallet-sdk/package.json"
    const json = JSON.parse(fs.readFileSync(file).toString())
    return json.version
  }

  /**
   * Checks if the environment PUBLISHED_DID variable exists in prism-agent, otherwise it creates a new one.
   */
  static async preparePublishedDid() {
    try {
      await axiosInstance.get(
        `${EnvironmentVariables.agentUrl}/did-registrar/dids/${EnvironmentVariables.publishedDid}`
      )
      this.publishedDid = EnvironmentVariables.publishedDid
      return
    } catch (err) {
      Utils.appendToNotes("DID not found. Creating a new one and publishing it.")
    }

    const creationData = new CreateManagedDidRequest()
    creationData.documentTemplate =
      new CreateManagedDidRequestDocumentTemplate()

    const publicKey = new ManagedDIDKeyTemplate()
    publicKey.id = "key-1"
    publicKey.purpose = "assertionMethod"

    creationData.documentTemplate.publicKeys = [publicKey]
    creationData.documentTemplate.services = []

    const creationResponse = await axiosInstance.post(
      `${EnvironmentVariables.agentUrl}/did-registrar/dids`,
      creationData
    )
    const longFormDid = creationResponse.data.longFormDid

    const publicationResponse = await axiosInstance.post(
      `${EnvironmentVariables.agentUrl}/did-registrar/dids/${longFormDid}/publications`
    )
    const shortFormDid = publicationResponse.data.scheduledOperation.didRef

    const abortController = new AbortController()
    setTimeout(() => {
      abortController.abort()
    }, 60000)

    await new Promise<void>((resolve, reject) => {
      if (!abortController.signal.aborted) {
        abortController.signal.onabort = () =>
          reject("Timeout waiting for the publication")
      }
      const interval = setInterval(async () => {
        const didResponse = await axiosInstance.get(
          `${EnvironmentVariables.agentUrl}/did-registrar/dids/${shortFormDid}`
        )
        if (didResponse.data.status == "PUBLISHED") {
          clearInterval(interval)
          this.publishedDid = didResponse.data.did
          resolve()
        }
      }, 1000)
    })
  }

  /**
   * Checks if the environment SCHEMA_ID variable exists in prism-agent, otherwise it creates a new one.
   */
  static async prepareSchema() {
    try {
      await axiosInstance.get(
        `${EnvironmentVariables.agentUrl}/schema-registry/schemas/${EnvironmentVariables.schemaId}`
      )
      this.schemaId = EnvironmentVariables.schemaId
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
      `${EnvironmentVariables.agentUrl}/schema-registry/schemas`,
      credentialSchemaInput
    )

    this.schemaId = schemaResponse.data.guid
  }
}

