export namespace Anoncreds {
  export type LinkSecret = string;

  type Tuple<T1 = string, T2 = string> = [T1, T2];

  export interface CredentialRequest {
    cred_def_id: string;
    blinded_ms: CredentialRequest_BlindedMS;
    blinded_ms_correctness_proof: CredentialRequest_BlindedMSCorrectnessProof;
    entropy: string;
    nonce: string;
  }

  interface CredentialRequest_BlindedMS {
    u: string;
    hidden_attributes: string[];
    committed_attributes: {}; // supposed to be empty
  }

  interface CredentialRequest_BlindedMSCorrectnessProof {
    c: string;
    v_dash_cap: string;
    m_caps: Record<string, string>;
    r_caps: {}; // supposed to be empty
  }


  export interface CredentialRequestMeta {
    link_secret_blinding_data: CredentialRequestMeta_LinkSecretBlindingData;
    link_secret_name: string;
    nonce: string;
  }

  interface CredentialRequestMeta_LinkSecretBlindingData {
    v_prime: string;
  }

  export interface CredentialOffer {
    cred_def_id: string;
    schema_id: string;
    key_correctness_proof: CredentialOffer_KeyCorrectnessProof;
    nonce: string;
    method_name?: string;
  }

  interface CredentialOffer_KeyCorrectnessProof {
    c: string;
    xr_cap: Tuple[]
    xz_cap: string;
  }


  export interface CredentialDefinition {
    schemaId: string;
    type: string;// "CL"
    tag: string;
    value: {};
    issuerId: string;
  }


  export interface Credential {
    schema_id: string;
    cred_def_id: string;
    signature: Credential_Signature;
    signature_correctness_proof: Credential_SignatureCorrectnessProof;
    values: Record<string, Credential_Value>;
  }

  export interface CredentialIssued extends Omit<Credential, "values"> {
    values: Tuple<string, Credential_Value>[];
  }

  interface Credential_Signature {
    p_credential: {
      m_2: string;
      a: string;
      e: string;
      v: string;
    };
  }

  interface Credential_SignatureCorrectnessProof {
    c: string;
    se: string;
  }

  interface Credential_Value {
    encoded: string;
    raw: string;
  }


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
      predicates: Presentation_RequestedProof_Value;
      revealed_attrs: Presentation_RequestedProof_RevealedAttrs;
      self_attested_attrs: Presentation_RequestedProof_Value;
      unrevealed_attrs: Presentation_RequestedProof_Value;
      // revealed_attr_groups?: 
    },
    identifiers: Presentation_Identifier[];
  }

  interface Presentation_Proof_Proofs {
    primary_proof: {
      eq_proof: {
        revealed_attrs: Record<string, string>;
        a_prime: string;
        e: string;
        m: Record<string, string>;
        m2: string;
        v: string;
      };
      ge_proofs: {
        mj: string;
        alpha: string;
        r: Record<string, string>;
        t: Record<string, string>;
        u: Record<string, string>;
        predicate: Record<string, any>;
      }[];
    };
    // non_revoc_proof: None
  }

  type Presentation_RequestedProof_Value = Record<string, {
    sub_proof_index: number;
  }>;

  type Presentation_RequestedProof_RevealedAttrs = Record<string, {
    encoded: string;
    raw: string;
    sub_proof_index: number;
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
