import { CredentialType, PresentationDefinitionRequest, } from "../../domain";

// TODO why is this exported in the pkg?
// remove with breaking changes
export function isPresentationDefinitionRequestType
  <Type extends CredentialType = CredentialType.JWT>(
    request: any,
    type: Type,
  ): request is PresentationDefinitionRequest<Type> {


  if (type === CredentialType.JWT) {
    if (!request || !request.presentation_definition) {
      return false;
    }
    const [format] = Object.keys(request.presentation_definition.format);
    if (!format || !['jwt'].includes(format)) {
      return false;
    }
    return true;
  }

  if (type === CredentialType.SDJWT) {
    if (!request || !request.presentation_definition) {
      return false;
    }
    const [format] = Object.keys(request.presentation_definition.format);
    if (!format || !['sdjwt'].includes(format)) {
      return false;
    }
    return true;
  }

  if (type === CredentialType.AnonCreds) {
    if (!request ||
      !request.name ||
      !request.nonce ||
      !request.requested_attributes ||
      !request.requested_predicates) {
      return false;
    }
    return true;
  }

  return false;
}
