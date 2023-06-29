import * as pkg from "anoncreds/anoncreds";
import pkgWasm from "anoncreds/anoncreds_bg.wasm";
import { Anoncreds } from "./models/Anoncreds";

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

  private async load() {
    if (!this.loaded) {
      await pkg.default((pkgWasm as any)());
      this.loaded = true;
    }
  }

  private get wasm() {
    if (this.loaded === false) {
      throw new Error();
    }

    return pkg;
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

    const credentialRequest = result[0];
    credentialRequest.blinded_ms_correctness_proof.m_caps = this.mapToObj(credentialRequest.blinded_ms_correctness_proof.m_caps);

    return [credentialRequest, result[1]];
  }

  processCredential(
    credentialDefinition: Anoncreds.CredentialDefinition,
    credential: Anoncreds.CredentialIssued,
    credentialRequestMeta: Anoncreds.CredentialRequestMeta,
    linkSecret: Anoncreds.Linksecret
  ): Anoncreds.Credential {
    const result = this.wasm.proverProcessCredential(credentialDefinition, credential, credentialRequestMeta, linkSecret);

    result.values = this.mapToObj(result.values);

    return result;
  }

  createPresentation(
    presentationRequest: Anoncreds.PresentationRequest,
    schemas: Record<string, Anoncreds.Schema>,
    credentialDefinitions: Record<string, Anoncreds.CredentialDefinition>,
    credential: Anoncreds.Credential,
    linkSecret: Anoncreds.Linksecret
  ): Anoncreds.Presentation {
    const result = this.wasm.proverCreatePresentation(presentationRequest, schemas, credentialDefinitions, credential, linkSecret);

    result.proof.proofs = result.proof.proofs.map((proof: any) => {
      proof.primary_proof.eq_proof.revealed_attrs = this.mapToObj(proof.primary_proof.eq_proof.revealed_attrs);
      proof.primary_proof.eq_proof.m = this.mapToObj(proof.primary_proof.eq_proof.m);

      proof.primary_proof.ge_proofs = proof.primary_proof.ge_proofs.map((ge: any) => {
        ge.r = this.mapToObj(ge.r);
        ge.t = this.mapToObj(ge.t);
        ge.u = this.mapToObj(ge.u);
        ge.predicate = this.mapToObj(ge.predicate);

        return ge;
      });

      return proof;
    });

    return result;
  }

  private mapToObj<V>(value: Map<string, V>): Record<string, V> {
    return Object.fromEntries(value);
  }
}
