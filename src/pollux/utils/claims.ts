import { CredentialType, PresentationClaims, InputFieldFilter, PresentationSubmission, PresentationDefinitionRequest } from "../../domain";
import { AnoncredsLoader } from "../AnoncredsLoader";

export function validatePresentationClaims<Type extends CredentialType = CredentialType.JWT>(
    claims: any,
    type: Type,
): claims is PresentationClaims<Type> {
    if (type === CredentialType.JWT) {
        if (claims.schema && typeof claims.schema !== 'string') {
            return false;
        }
        if (claims.issuer && typeof claims.issuer !== 'string') {
            return false;
        }
        if (!claims.claims) {
            return false;
        }
        Object.keys(claims.claims).forEach((field) => {
            const filter: InputFieldFilter = claims.claims[field];
            if (!filter.type || typeof filter.type !== 'string') {
                return false;
            }
            if (filter.pattern && typeof filter.pattern !== 'string') {
                return false;
            }
            if (filter.pattern && typeof filter.pattern !== 'string') {
                return false;
            }
            if (filter.enum && Array.isArray(filter.enum)) {
                return false;
            }
            if (filter.const && Array.isArray(filter.const)) {
                return false;
            }
            if (filter.value && typeof filter.value !== 'string' && typeof filter.value !== 'number') {
                return false;
            }
        })
    }
    //Anoncreds validation is better handled by anoncreds-loader
    return true
}

export function parsePresentationSubmission<
    Type extends CredentialType = CredentialType.JWT
>(
    anoncreds: AnoncredsLoader,
    data: any,
    type: Type
): data is PresentationSubmission<Type> {
    if (type === CredentialType.JWT) {
        if (!data || (data && typeof data !== "object")) {
            return false;
        }
        const {
            presentation_submission,
        } = data;
        if (!presentation_submission || (typeof presentation_submission !== "object")) {
            return false;
        }
        return true;
    }
    if (type === CredentialType.AnonCreds) {
        return anoncreds.isValidPresentation(data)
    }
    return false;
}

export function isPresentationDefinitionRequestType
    <Type extends CredentialType = CredentialType.JWT>(
        request: PresentationDefinitionRequest<Type>,
        type: Type,
    ): request is PresentationDefinitionRequest<Type> {

    if (type === CredentialType.JWT) {
        if (!request ||
            !request.options ||
            !request.presentation_definition) {
            return false
        }
        return true;
    }
    return true;
}