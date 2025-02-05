import { Nil, isArray, isObject, notEmptyString } from "../../../utils";

/**
 * Specification:
 * https://github.com/decentralized-identity/waci-didcomm/tree/main/issue_credential#preview-credential
 */

export interface CredentialPreview {
  // type: ProtocolType.DidcommCredentialPreview;
  type: string;
  id?: string;
  body: {
    attributes: Attribute[];
  };
}

export interface Attribute {
  name: string;
  value: string;
  media_type?: string | Nil;
}

export const validateCredentialPreview = (value: unknown): value is CredentialPreview => isObject(value)
  && notEmptyString(value.type)
  && isObject(value.body)
  && isArray(value.body.attributes)
  && value.body.attributes.every(validateAttribute);

const validateAttribute = (value: unknown): value is Attribute => isObject(value)
  && notEmptyString(value.name)
  && notEmptyString(value.value);
