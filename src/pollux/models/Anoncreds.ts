export namespace Anoncreds {
  export type Linksecret = string;

  type Tuple<T1 = string, T2 = string> = [T1, T2];

  export interface CredentialOffer {
    schema_id: string;
    cred_def_id: string;
    key_correctness_proof: CredentialOffer_KeyCorrectnessProof;
    nonce: string;
    method_name?: string;
  }

  interface CredentialOffer_KeyCorrectnessProof {
    c: string;
    xz_cap: string;
    xr_cap: Tuple[]
  }

  export interface CredentialDefinition {
    schemaId: string;
    type: string;// "CL"
    tag: string;
    value: {};
    issuerId: string;
  }

  export interface CredentialRequest {
    entropy: string;
    cred_def_id: string;
    blinded_ms: {};
    blinded_ms_correctness_proof: {};
    nonce: string;
  }

  export interface CredentialRequestMeta {
    link_secret_blinding_data: {};
    nonce: string;
    link_secret_name: string;
  }

  export interface Credential {
    schema_id: string;
    cred_def_id: string;
    values: Tuple<string, { raw: string; encoded: string }>[];
    signature: {};
    signature_correctness_proof: {};
  }

  // Needed? plus work out difference
  export interface ProcessedCredential { }

  export interface PresentationRequest {
    nonce: string;
    name: string;
    version: string;
    requested_attributes: PresentationRequest_RequestedAttributes;
    requested_predicates: PresentationRequest_RequestedPredicates;
  }

  type PresentationRequest_RequestedAttributes = Record<string, {
    name: string;
    restrictions: Record<string, string>;
  }>;

  type PresentationRequest_RequestedPredicates = Record<string, {
    name: string;
    p_type: string;
    p_value: any;
  }>;

  export interface Presentation {
    proof: {
      proofs: Presentation_Proof_Proofs[];
      aggregated_proof: {
        c_hash: string;
        c_list: number[][];
      }
    },
    requested_proof: {
      revealed_attrs: Presentation_RequestedProof_RevealedAttrs;
      self_attested_attrs: {};
      unrevealed_attrs: {};
      predicates: {};
      // revealed_attr_groups?: 
    },
    identifiers: Presentation_Identifier[];
  }

  interface Presentation_Proof_Proofs {
    primary_proof: {},
    // non_revoc_proof: None
  }

  type Presentation_RequestedProof_RevealedAttrs = Record<string, {
    sub_proof_index: number;
    raw: string;
    encoded: string;
  }>;

  interface Presentation_Identifier {
    schema_id: string;
    cred_def_id: string;
    // rev_reg_id: None, 
    // timestamp: None 
  }

  export interface Schema {
    issuerId: string;
    name: string;
    version: string;
    attrNames: string[];
  }
}
