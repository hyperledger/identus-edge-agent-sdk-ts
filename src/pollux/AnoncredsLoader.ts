// import { Anoncreds } from "../domain/models/Anoncreds";
import type * as Anoncreds from "anoncreds-wasm";



import wasmBuffer from 'anoncreds-wasm/anoncreds_wasm_bg.wasm';
/**
 * @class AnoncredsLoader
 * handle loading and access of anoncreds library
 * Singleton to prevent recompilation of wasm
 */
export class AnoncredsLoader {
  private static instance: AnoncredsLoader;
  private loaded = false;
  private pkg: typeof Anoncreds | undefined;

  static async getInstance() {
    if (AnoncredsLoader.instance === undefined) {
      AnoncredsLoader.instance = new AnoncredsLoader();
      await this.instance.load();
    }
    return AnoncredsLoader.instance;
  }

  private async load() {
    this.pkg ??= await import("anoncreds-wasm").then(async module => {
      const wasmInstance = module.initSync({ module: wasmBuffer });
      await module.default(wasmInstance);
      return module
    });
  }

  private get wasm() {
    if (this.pkg === undefined) {
      throw new Error("Load wasm first");
    }
    return this.pkg;
  }

  createLinksecret(): string {
    return this.wasm.Prover.createLinkSecret().toString();
  }

  createCredentialRequest(
    credentialOffer: Anoncreds.CredentialOfferType,
    credentialDefinition: Anoncreds.CredentialDefinitionType,
    linkSecret: string,
    linkSecretId: string
  ): [Anoncreds.CredentialRequestType, Anoncreds.CredentialRequestMetadataType] {
    const result = this.wasm.Prover.createCredentialRequest(
      this.wasm.CredentialDefinition.from(credentialDefinition),
      this.wasm.LinkSecret.fromString(linkSecret),
      linkSecretId,
      this.wasm.CredentialOffer.from(credentialOffer),
    );
    return [result.request.toJSON(), result.metadata.toJSON()]
  }

  processCredential(
    credentialDefinition: Anoncreds.CredentialDefinitionType,
    credential: Anoncreds.CredentialType,
    credentialRequestMeta: Anoncreds.CredentialRequestMetadataType,
    linkSecret: string
  ): Anoncreds.CredentialType {
    const result = this.wasm.Prover.processCredential(
      this.wasm.Credential.from(credential),
      this.wasm.CredentialRequestMetadata.from(credentialRequestMeta),
      this.wasm.LinkSecret.fromString(linkSecret),
      this.wasm.CredentialDefinition.from(credentialDefinition),
    );
    return result.toJSON();
  }


  private loadAnoncredsSchemas(
    schemas: Record<string, Anoncreds.CredentialSchemaType>,
  ): Record<string, Anoncreds.CredentialSchema> {
    return Object.keys(schemas).reduce<Record<string, Anoncreds.CredentialSchema>>((all, current) => {
      return {
        ...all,
        [current]: this.wasm.CredentialSchema.from(schemas[current])
      }
    }, {})
  }

  private loadAnoncredsDefinitions(
    definitions: Record<string, Anoncreds.CredentialDefinitionType>,
  ): Record<string, Anoncreds.CredentialDefinition> {
    return Object.keys(definitions).reduce<Record<string, Anoncreds.CredentialDefinition>>((all, current) => {
      return {
        ...all,
        [current]: this.wasm.CredentialDefinition.from(definitions[current])
      }
    }, {})
  }

  createPresentation(
    presentationRequest: Anoncreds.PresentationRequestType,
    schemas: Record<string, Anoncreds.CredentialSchemaType>,
    credentialDefinitions: Record<string, Anoncreds.CredentialDefinitionType>,
    credential: Anoncreds.CredentialType,
    linkSecret: string
  ): Anoncreds.PresentationType {
    return this.wasm.Prover.createPresentation(
      this.wasm.PresentationRequest.from(presentationRequest),
      this.wasm.Credential.from(credential),
      this.wasm.LinkSecret.fromString(linkSecret),
      this.loadAnoncredsSchemas(schemas),
      this.loadAnoncredsDefinitions(credentialDefinitions),
    ).toJSON();
  }

  verifyPresentation(
    presentation: Anoncreds.PresentationType,
    presentationRequest: Anoncreds.PresentationRequestType,
    schemas: Record<string, Anoncreds.CredentialSchemaType>,
    credentialDefinitions: Record<string, Anoncreds.CredentialDefinitionType>,
  ): boolean {
    return this.wasm.Verifier.verifyPresentation(
      this.wasm.Presentation.from(presentation),
      this.wasm.PresentationRequest.from(presentationRequest),
      this.loadAnoncredsSchemas(schemas),
      this.loadAnoncredsDefinitions(credentialDefinitions),
    );
  }

  createPresentationRequest(
    name: string,
    version: string,
    requested_attributes: Anoncreds.RequestedPredicates,
    requested_predicates: Anoncreds.RequestedAttributes
  ): Anoncreds.PresentationRequest {
    return this.wasm.Verifier.createPresentationRequest(
      name,
      version,
      requested_attributes,
      requested_predicates
    )
  }

  createNonce(): string {
    return this.wasm.Verifier.createNonce()
  }

  isValidPresentation(presentation: Anoncreds.PresentationType) {
    try {
      this.wasm.Presentation.from(presentation)
      return true;
    } catch (err) {
      return false;
    }
  }
}
