export namespace DIF {
  export const PRESENTATION_REQUEST = 'dif/presentation-exchange/definitions@v1.0';
  export const PRESENTATION = 'dif/presentation-exchange/submission@v1.0';

  export namespace Presentation {
    export interface Definition {
      id: string;
      input_descriptors: Definition.InputDescriptor[];
      format?: Definition.Format;
    }

    export namespace Definition {
      export type Format = {
        jwt?: { alg: string[]; },
        sdjwt?: { alg: string[]; },
      };

      export interface InputDescriptor {
        id: string,
        constraints: Constraints,
        name?: string,
        purpose?: string,
        format?: Format,
      }

      export interface Constraints {
        fields: Field[],
        limit_disclosure: InputLimitDisclosure;
      }

      export type InputLimitDisclosure = "required" | "preferred";

      export interface Field {
        path: string[],
        id?: string,
        purpose?: string,
        name?: string,
        filter?: Field.Filter,
        optional?: boolean;
      }

      export namespace Field {
        export interface Filter {
          type: string,
          pattern?: string,
          enum?: PredicateType[],
          const?: PredicateType[],
          value?: PredicateType,
        }
      }

      export type PredicateType = string | number;
    }

    export interface Request {
      presentation_definition: Definition;
      [key: string]: any;
    }

    export interface Submission {
      id: string;
      definition_id: string;
      descriptor_map: Submission.DescriptorItem[];
    }

    export namespace Submission {
      export type Format = "sd_jwt" | "jwt_vp" | "jwt_vc";
      export interface DescriptorItem {
        id: string;
        format: Format;
        path: string;
        path_nested?: DescriptorItem;
      }
    }
  }

  export type EmbedTarget<T extends string = 'verifiablePresentation'> = {
    presentation_submission: Presentation.Submission;
  } & { [k in T]?: string[] }
}
