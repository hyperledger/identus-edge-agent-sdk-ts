import { CredentialType, PresentationClaims, InputFieldFilter, PresentationSubmission, PresentationDefinitionRequest, DescriptorItemFormat, DescriptorItem } from "../../domain";
import { AnoncredsLoader } from "../AnoncredsLoader";

export function validatePresentationClaims<Type extends CredentialType = CredentialType.JWT>(
    claims: any,
    type: Type,
): claims is PresentationClaims<Type> {
    if (type === CredentialType.JWT || type === CredentialType.SDJWT) {
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


const jwtDescriptorFormats = [
    DescriptorItemFormat.JWT_VP,
    DescriptorItemFormat.JWT_VC
];

const sdjwtDescriptorFormats = [
    DescriptorItemFormat.SDJWT
];

export function parsePresentationSubmission<
    Type extends CredentialType = CredentialType.JWT
>(
    anoncreds: AnoncredsLoader,
    data: any,
    type: Type
): data is PresentationSubmission<Type> {
    if (type === CredentialType.JWT || type === CredentialType.SDJWT) {
        if (!data || (data && typeof data !== "object")) {
            return false;
        }
        const {
            presentation_submission,
        } = data;
        if (!presentation_submission || (typeof presentation_submission !== "object")) {
            return false;
        }
        const descriptorMaps = presentation_submission?.descriptor_map ?? [];
        if (type === CredentialType.JWT) {
            return descriptorMaps.some(
                ({ format }: DescriptorItem) => jwtDescriptorFormats.includes(format)
            );
        } else if (type === CredentialType.SDJWT) {
            return descriptorMaps.some(
                ({ format }: DescriptorItem) => sdjwtDescriptorFormats.includes(format)
            );
        }
    }
    if (type === CredentialType.AnonCreds) {
        return anoncreds.isValidPresentation(data);
    }
    return false;
}

export function isPresentationDefinitionRequestType
    <Type extends CredentialType = CredentialType.JWT>(
        request: PresentationDefinitionRequest<Type>,
        type: Type,
    ): request is PresentationDefinitionRequest<Type> {


    if (type === CredentialType.JWT) {
        if (!request || !request.presentation_definition) {
            return false;
        }
        const [format] = Object.keys(request.presentation_definition.format);
        if (!format || !['jwt'].includes(format)) {
            return false
        }
        return true;
    }

    if (type === CredentialType.SDJWT) {
        if (!request || !request.presentation_definition) {
            return false;
        }
        const [format] = Object.keys(request.presentation_definition.format);
        if (!format || !['sdjwt'].includes(format)) {
            return false
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