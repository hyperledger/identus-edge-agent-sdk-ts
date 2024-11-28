// Alias Anoncreds types
import type * as Anoncreds from "anoncreds-wasm";

export type Schema = Anoncreds.CredentialSchemaType;
export type CredentialDefinition = Anoncreds.CredentialDefinitionType;

export interface Claims {
  attributes?: Anoncreds.RequestedAttributes;
  predicates?: Record<string, AnoncredsInputFieldFilter>;
}

export type RequestedPredicates = Anoncreds.RequestedPredicates;
export type PresentationRequest = Anoncreds.PresentationRequestType;
export type PresentationSubmission = Anoncreds.PresentationType;

export interface AnoncredsInputFieldFilter {
  type: string,
  name: string,
  $gt?: PredicateType,
  $gte?: PredicateType,
  $lt?: PredicateType,
  $lte?: PredicateType;
}

export type PredicateType = string | number;
export type AttributeType = string | number;

export interface InputFieldFilter {
  type: string,
  pattern?: string,
  enum?: PredicateType[],
  const?: PredicateType[],
  value?: PredicateType,
}

