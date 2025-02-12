import type * as Anoncreds from "anoncreds-wasm";
import wasmBuffer from 'anoncreds-wasm/anoncreds_wasm_bg.wasm';
import * as Types from "../types";
import { isNil } from "../../../../utils";

/**
 * @class AnoncredsLoader
 * handle loading and access of anoncreds library
 * Singleton to prevent recompilation of wasm
 */
export class AnoncredsLoader {
  private static instance: AnoncredsLoader;
  private pkg: typeof Anoncreds | undefined;

  private async getInstance() {
    if (isNil(AnoncredsLoader.instance)) {
      AnoncredsLoader.instance = this;
      await this.load();
    }

    return AnoncredsLoader.instance;
  }

  private async load() {
    try {
      this.pkg ??= await import("anoncreds-wasm").then(async module => {
        const wasmInstance = module.initSync({ module: wasmBuffer });
        await module.default(wasmInstance);
        return module;
      });
    }
    catch (e) {
      throw new Error();
    }
  }

  private async wasm() {
    const instance = await this.getInstance();
    return instance.pkg!;
  }

  async createLinksecret() {
    const wasm = await this.wasm();
    return wasm.Prover.createLinkSecret().toString();
  }

  async createCredentialRequest(
    credentialOffer: Anoncreds.CredentialOfferType,
    credentialDefinition: Anoncreds.CredentialDefinitionType,
    linkSecret: string,
    linkSecretId: string
  ): Promise<[Anoncreds.CredentialRequestType, Anoncreds.CredentialRequestMetadataType]> {
    const wasm = await this.wasm();
    const result = wasm.Prover.createCredentialRequest(
      wasm.CredentialDefinition.from(credentialDefinition),
      wasm.LinkSecret.fromString(linkSecret),
      linkSecretId,
      wasm.CredentialOffer.from(credentialOffer),
    );
    return [result.request.toJSON(), result.metadata.toJSON()];
  }

  async processCredential(
    credentialDefinition: Anoncreds.CredentialDefinitionType,
    credential: Anoncreds.CredentialType,
    credentialRequestMeta: Anoncreds.CredentialRequestMetadataType,
    linkSecret: string
  ): Promise<Anoncreds.CredentialType> {
    const wasm = await this.wasm();
    const result = wasm.Prover.processCredential(
      wasm.Credential.from(credential),
      wasm.CredentialRequestMetadata.from(credentialRequestMeta),
      wasm.LinkSecret.fromString(linkSecret),
      wasm.CredentialDefinition.from(credentialDefinition),
    );
    return result.toJSON();
  }


  private async loadAnoncredsSchemas(
    schemas: Record<string, Anoncreds.CredentialSchemaType>,
  ): Promise<Record<string, Anoncreds.CredentialSchema>> {
    const wasm = await this.wasm();
    return Object.keys(schemas).reduce<Record<string, Anoncreds.CredentialSchema>>((all, current) => {
      return {
        ...all,
        [current]: wasm.CredentialSchema.from(schemas[current])
      };
    }, {});
  }

  private async loadAnoncredsDefinitions(
    definitions: Record<string, Anoncreds.CredentialDefinitionType>,
  ): Promise<Record<string, Anoncreds.CredentialDefinition>> {
    const wasm = await this.wasm();
    return Object.keys(definitions).reduce<Record<string, Anoncreds.CredentialDefinition>>((all, current) => {
      return {
        ...all,
        [current]: wasm.CredentialDefinition.from(definitions[current])
      };
    }, {});
  }

  async createPresentation(
    presentationRequest: Anoncreds.PresentationRequestType,
    schemas: Record<string, Anoncreds.CredentialSchemaType>,
    credentialDefinitions: Record<string, Anoncreds.CredentialDefinitionType>,
    credential: Anoncreds.CredentialType,
    linkSecret: string
  ): Promise<Anoncreds.PresentationType> {
    const wasm = await this.wasm();
    const loadedSchemas = await this.loadAnoncredsSchemas(schemas);
    const loadedDefinitions = await this.loadAnoncredsDefinitions(credentialDefinitions);

    return wasm.Prover.createPresentation(
      wasm.PresentationRequest.from(presentationRequest),
      wasm.Credential.from(credential),
      wasm.LinkSecret.fromString(linkSecret),
      loadedSchemas,
      loadedDefinitions,
    ).toJSON();
  }

  async verifyPresentation(
    presentation: Anoncreds.PresentationType,
    presentationRequest: Anoncreds.PresentationRequestType,
    schemas: Record<string, Anoncreds.CredentialSchemaType>,
    credentialDefinitions: Record<string, Anoncreds.CredentialDefinitionType>,
  ): Promise<boolean> {
    const wasm = await this.wasm();
    const loadedSchemas = await this.loadAnoncredsSchemas(schemas);
    const loadedDefinitions = await this.loadAnoncredsDefinitions(credentialDefinitions);

    return wasm.Verifier.verifyPresentation(
      wasm.Presentation.from(presentation),
      wasm.PresentationRequest.from(presentationRequest),
      loadedSchemas,
      loadedDefinitions,
    );
  }

  async createPresentationRequest(
    name: string,
    version: string,
    requested_attributes: Anoncreds.RequestedPredicates,
    requested_predicates: Anoncreds.RequestedAttributes
  ): Promise<Anoncreds.PresentationRequest> {
    const wasm = await this.wasm();
    return wasm.Verifier.createPresentationRequest(
      name,
      version,
      requested_attributes,
      requested_predicates
    );
  }

  /**
   * wrapper to transmute claims into anoncreds
   * @param claims 
   * @returns 
   */
  async createPresentationDefinition(claims: Types.Claims) {
    const predicatePaths = Object.keys(claims.predicates ?? {});

    const requestedPredicates = predicatePaths.reduce<Types.RequestedPredicates>((all, predicateName, i) => {
      const claimPredicate = (claims.predicates ?? {})[predicateName];

      const pType = claimPredicate.$gt ? '>' :
        claimPredicate.$gte ? '>=' :
          claimPredicate.$lt ? '<' :
            claimPredicate.$lte ? '<=' :
              undefined;

      const pValue = claimPredicate.$gt ? claimPredicate.$gt :
        claimPredicate.$gte ? claimPredicate.$gte :
          claimPredicate.$lt ? claimPredicate.$lt :
            claimPredicate.$lte ? claimPredicate.$lte :
              undefined;

      if (!pType || !pValue) {
        throw new Error("TO-DO improve, should return valid ptype");
      }

      return {
        ...all,
        [`${claimPredicate.name}${i > 0 ? '_' + i : ''}`]: {
          name: claimPredicate.name,
          p_type: pType,
          p_value: pValue
        }
      };
    }, {});

    const nonce = await this.createNonce();
    const presentationRequest: Types.PresentationRequest = {
      nonce,
      name: "presentation_request",
      version: "0.1",
      requested_attributes: claims.attributes ?? {},
      requested_predicates: requestedPredicates
    };

    return presentationRequest;
  }

  async createNonce(): Promise<string> {
    const wasm = await this.wasm();
    return wasm.Verifier.createNonce();
  }

  async isValidPresentation(presentation: Anoncreds.PresentationType) {
    try {
      const wasm = await this.wasm();
      wasm.Presentation.from(presentation);
      return true;
    } catch (err) {
      return false;
    }
  }
}
