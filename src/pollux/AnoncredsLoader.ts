import { Anoncreds } from "./models/Anoncreds";
import type * as anoncredsTypes from "anoncreds";

/**
 * @class AnoncredsLoader
 * handle loading and access of anoncreds library
 * Singleton to prevent recompilation of wasm
 */
export class AnoncredsLoader {
  private static instance: AnoncredsLoader;
  private loaded = false;
  private pkg: typeof anoncredsTypes | undefined;

  static async getInstance() {
    if (AnoncredsLoader.instance === undefined) {
      AnoncredsLoader.instance = new AnoncredsLoader();
      await this.instance.load();
    }

    return AnoncredsLoader.instance;
  }

  private async load() {
    //#if _ANONCREDS
    if (!this.loaded) {
      this.pkg = await import("anoncreds/anoncreds");
      const pkgWasm = await import("anoncreds/anoncreds_bg.wasm");

      await this.pkg.default((pkgWasm as any).default());
      this.loaded = true;
    }
    //#endif
  }

  private get wasm() {
    if (this.loaded === false || this.pkg === undefined) {
      throw new Error();
    }

    return this.pkg;
  }

  createLinksecret(): Anoncreds.LinkSecret {
    return this.wasm.proverCreateLinkSecret();
  }

  createCredentialRequest(
    credentialOffer: Anoncreds.CredentialOffer,
    credentialDefinition: Anoncreds.CredentialDefinition,
    linkSecret: Anoncreds.LinkSecret,
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
    linkSecret: Anoncreds.LinkSecret
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
    linkSecret: Anoncreds.LinkSecret
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

    result.requested_proof.revealed_attrs = this.mapToObj(result.requested_proof.revealed_attrs);
    result.requested_proof.self_attested_attrs = this.mapToObj(result.requested_proof.self_attested_attrs);
    result.requested_proof.unrevealed_attrs = this.mapToObj(result.requested_proof.unrevealed_attrs);
    result.requested_proof.predicates = this.mapToObj(result.requested_proof.predicates);

    return result;
  }

  private mapToObj<V>(value: Map<string, V>): Record<string, V> {
    return value instanceof Map ? Object.fromEntries(value) : value;
  }
}
