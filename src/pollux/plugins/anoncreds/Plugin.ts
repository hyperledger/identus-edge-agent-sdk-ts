import type { CredentialDefinitionType, CredentialSchemaType } from "anoncreds-wasm";
import * as Domain from "../../../domain";
import { Pollux } from "../../types";
import { Task } from "../../../utils";
import { CreatePresentationProof } from "./CreatePresentationProof";
import { CreatePresentationRequest } from "./CreatePresentationRequest";
import { CreatePresentationSubmission } from "./CreatePresentationSubmission";
import { ParseCredential } from "./ParseCredential";
import { RevealCredentialFields } from "./RevealCredentialFields";
import { VerifyPresentationSubmission } from "./VerifyPresentationSubmission";
import { AnoncredsLoader } from "./AnoncredsLoader";

export class ACContext extends Task.Context {
  public readonly Anoncreds = new AnoncredsLoader();

  async fetchSchema(schemaUri: string) {
    const response = await this.Api.request("GET", schemaUri);
    // TODO validate <Anoncreds.CredentialSchemaType>
    return response.body as CredentialSchemaType;
  }

  async fetchCredentialDefinition(credentialDefinitionId: string) {
    const response = await this.Api.request("GET", credentialDefinitionId);
    // TODO validate <Anoncreds.CredentialSchemaType> & move to standalone task
    return response.body as CredentialDefinitionType;
  }
}

export const Plugin: Pollux.Plugin = {
  type: Domain.CredentialType.AnonCreds,
  // version: "",
  context: ACContext,
  tasks: [
    CreatePresentationProof,
    CreatePresentationRequest,
    CreatePresentationSubmission,
    ParseCredential,
    RevealCredentialFields,
    VerifyPresentationSubmission,
  ],
};
