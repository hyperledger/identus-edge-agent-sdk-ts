import { JsonObj } from "../../../utils";

// Open Enterprise Agent specific
export namespace OEA {
  export const PRISM_JWT = "prism/jwt";
  export const PRISM_SDJWT = "vc+sd-jwt";

  export interface CredentialOffer {
    options: {
      challenge: string;
      domain: string;
    };
  }


  export enum DescriptorItemFormat {
    JWT_VC = 'jwt_vc',
    JWT_VP = 'jwt_vp',
    SDJWT = 'sdjwt',
  }

  export type JWTPresentationClaims = {
    schema?: string;
    issuer?: string;
    claims: JsonObj<InputFieldFilter>;
  };

  export type SDJWTPresentationClaims = {
    schema?: string;
    issuer?: string;
    claims: JsonObj<InputFieldFilter>;
  };

  export type SDJWTPresentationSubmission = {
    disclosures: any[],
    protected: string,
    payload: string,
    signature: string;
  };

  export interface PresentationSubmission {
    presentation_submission: {
      id: string;
      definition_id: string;
      descriptor_map: DescriptorItem[];
    };
    verifiablePresentation: string[];
  }

  export interface DescriptorItem {
    id: string;
    format: string;
    path: string;
    path_nested?: DescriptorItem;
  }

  export interface PresentationRequest {
    options: {
      challenge: string;
      domain: string;
    };
    presentation_definition: {
      id: string;
      input_descriptors: InputDescriptor[];
      format?: DefinitionFormat;
    };
  }

  export type DefinitionFormat = {
    jwt?: {
      alg: string[];
    },
    sdjwt?: {
      alg: string[];
    },
  };

  export type InputDescriptor = {
    id: string,
    constraints: InputConstraints,
    name?: string,
    purpose?: string,
    format?: DefinitionFormat,
  };

  export type InputFieldFilter = {
    type: string,
    pattern?: string,
    enum?: PredicateType[],
    const?: PredicateType[],
    value?: PredicateType,
  };

  export type PredicateType = string | number;

  export type InputField = {
    path: string[],
    id?: string,
    purpose?: string,
    name?: string,
    filter?: InputFieldFilter,
    optional?: boolean;
  };

  export type InputConstraints = {
    fields: InputField[],
    limit_disclosure: InputLimitDisclosure;
  };

  export enum InputLimitDisclosure {
    REQUIRED = "required",
    PREFERRED = "preferred"
  }

}
