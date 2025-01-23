/**
 * Validate input documents for did:peer:4.
 */


export function* resources(document: Record<string, any>) {
    const keys = [
        'verificationMethod',
        'authentication',
        'assertionMethod',
        'keyAgreement',
        'capabilityDelegation',
        'capabilityInvocation',
        'service',
    ];

    for (const key of keys) {
        if (key in document) {
            if (!Array.isArray(document[key])) {
                throw new Error(`${key} must be an array`);
            }

            for (let index = 0; index < document[key].length; index++) {
                const resource = document[key][index];
                if (typeof resource === 'object' && resource !== null) {
                    yield { key, index, resource };
                }
            }
        }
    }
}

export function validateInputDocument(
    document: Record<string, any>
): Record<string, any> {
    if (typeof document !== 'object' || document === null) {
        throw new Error('document must be a mapping');
    }

    if (Object.keys(document).length === 0) {
        throw new Error('document must not be empty');
    }

    if ('id' in document) {
        throw new Error('id must not be present in input document');
    }

    if ('alsoKnownAs' in document && !Array.isArray(document.alsoKnownAs)) {
        throw new Error('alsoKnownAs must be an array');
    }

    for (const { key, index, resource } of resources(document)) {
        if (!('id' in resource)) {
            throw new Error(`${key}[${index}]: resource must have an id`);
        }

        const ident = resource.id;
        if (typeof ident !== 'string') {
            throw new Error(`${key}[${index}]: resource id must be a string`);
        }

        if (!ident.startsWith('#')) {
            throw new Error(`${key}[${index}]: resource id must be relative`);
        }

        if (!('type' in resource)) {
            throw new Error(`${key}[${index}]: resource must have a type`);
        }
    }

    return document;
}