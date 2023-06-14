import * as pkg from "anoncreds";
import pkgWasm from "anoncreds/anoncreds_bg.wasm";
import { Anoncreds } from "./models/Anoncreds";
import { link } from "fs";

/**
 * @class AnoncredsLoader
 * handle loading and access of anoncreds library
 * Singleton to prevent recompilation of wasm
 */
export class AnoncredsLoader {
  private static instance: AnoncredsLoader;
  private loaded = false;

  private constructor() {
    this.load();
  }

  static getInstance() {
    if (AnoncredsLoader.instance === undefined) {
      AnoncredsLoader.instance = new AnoncredsLoader();
    }

    return AnoncredsLoader.instance;
  }

  async load() {
    if (!this.loaded) {
      await pkg.default((pkgWasm as any)());
      this.loaded = true;
    }
  }

  get wasm() {
    if (this.loaded === false) {
      throw new Error();
    }

    return pkg;
  }

  async getSchema() {
    const schema = await this.wasm.issuerCreateSchema();
    console.log({ schema });

    return schema;
  }

  createLinksecret(): Anoncreds.Linksecret {
    return this.wasm.proverCreateLinkSecret();
  }

  createCredentialRequest(
    credentialOffer: Anoncreds.CredentialOffer,
    credentialDefinition: Anoncreds.CredentialDefinition,
    linkSecret: Anoncreds.Linksecret,
    linkSecretId: string
  ): [Anoncreds.CredentialRequest, Anoncreds.CredentialRequestMeta] {
    const result = this.wasm.proverCreateCredentialRequest(credentialOffer, credentialDefinition, linkSecret, linkSecretId);

    return [result[0], result[1]];
  }

  processCredential(
    schema: Anoncreds.Schema,
    credentialDefinition: Anoncreds.CredentialDefinition,
    credential: Anoncreds.Credential,
    credentialRequestMeta: Anoncreds.CredentialRequestMeta,
    linkSecret: Anoncreds.Linksecret
  ): Anoncreds.ProcessedCredential {
    return this.wasm.proverProcessCredential(schema, credentialDefinition, credential, credentialRequestMeta, linkSecret);
  }

  createPresentation(
    presentationRequest: Anoncreds.PresentationRequest,
    schema: Anoncreds.Schema,
    credentialDefinition: Anoncreds.CredentialDefinition,
    credential: Anoncreds.ProcessedCredential,
    linkSecret: Anoncreds.Linksecret
  ): Anoncreds.Presentation {
    return this.wasm.proverCreatePresentation(presentationRequest, schema, credentialDefinition, credential, linkSecret);
  }
}
