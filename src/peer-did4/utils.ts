import { VerificationMethod } from './types';

export function warn(message: string) {
    console.warn(`Warning: ${message}`);
}

type VisitorFunc = (vm: VerificationMethod) => VerificationMethod;

function operateOnEmbedded(
    visitor: VisitorFunc
): (vmOrRef: VerificationMethod | string) => VerificationMethod | string {
    return (vmOrRef) => {
        if (typeof vmOrRef === 'string') {
            return vmOrRef;
        } else {
            return visitor(vmOrRef);
        }
    };
}

export async function visitVerificationMethods(
    document: Record<string, any>,
    visitor: VisitorFunc
): Promise<Record<string, any>> {
    if (document.verificationMethod) {
        document.verificationMethod = document.verificationMethod.map(visitor);
    }

    const relationships = [
        'authentication',
        'assertionMethod',
        'keyAgreement',
        'capabilityInvocation',
        'capabilityDelegation',
    ];

    for (const relationship of relationships) {
        if (document[relationship]) {
            document[relationship] = document[relationship].map(
                operateOnEmbedded(visitor)
            );
        }
    }

    return document;
}

export async function contextualizeDocument(
    did: string,
    document: Record<string, any>
): Promise<Record<string, any>> {
    document.id = did;

    await visitVerificationMethods(document, (vm) => {
        if (!vm.controller) {
            vm.controller = did;
        }
        return vm;
    });

    return document;
}