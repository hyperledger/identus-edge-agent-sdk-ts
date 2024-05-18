// import { Anoncreds } from "../domain/models/Anoncreds";
import type * as Anoncreds from "anoncreds-browser";

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
    /*START.BROWSER_ONLY*/
    if (typeof window !== "undefined" && !this.loaded) {
      this.pkg = await import("anoncreds-browser");
      /** @ts-ignore */
      const pkgWasm = await import("anoncreds-browser/anoncreds_bg.wasm");
      await (this.pkg as any).default(await (pkgWasm as any).default());
      this.loaded = true;
    }
    /*END.BROWSER_ONLY*/
    /*START.NODE_ONLY*/
    if (!this.loaded) {
      this.pkg = await import("anoncreds-node");
      this.loaded = true;
    }
    /*END.NODE_ONLY*/
  }

  private get wasm() {
    if (this.loaded === false || this.pkg === undefined) {
      throw new Error();
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
  ): [Anoncreds.CredentialRequest, Anoncreds.CredentialRequestMetadata] {
    const result = this.wasm.Prover.createCredentialRequest(
      this.wasm.CredentialDefinition.from(credentialDefinition),
      this.wasm.LinkSecret.fromString(linkSecret),
      linkSecretId,
      this.wasm.CredentialOffer.from(credentialOffer),
    );
    return [result.request, result.metadata]
  }

  processCredential(
    credentialDefinition: Anoncreds.CredentialDefinitionType,
    credential: Anoncreds.CredentialType,
    credentialRequestMeta: Anoncreds.CredentialRequestMetadataType,
    linkSecret: string
  ): Anoncreds.Credential {
    const result = this.wasm.Prover.processCredential(
      this.wasm.Credential.from(credential),
      this.wasm.CredentialRequestMetadata.from(credentialRequestMeta),
      this.wasm.LinkSecret.fromString(linkSecret),
      this.wasm.CredentialDefinition.from(credentialDefinition),
    );
    return result;
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
  ): Anoncreds.Presentation {
    const result = this.wasm.Prover.createPresentation(
      this.wasm.PresentationRequest.from(presentationRequest),
      this.wasm.Credential.from(credential),
      this.wasm.LinkSecret.fromString(linkSecret),
      this.loadAnoncredsSchemas(schemas),
      this.loadAnoncredsDefinitions(credentialDefinitions),
    );
    return result;
  }

  createNonce(): string {
    return this.wasm.Verifier.createNonce()
  }
}
