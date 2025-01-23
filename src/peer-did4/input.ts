/**
 * Helpers for creating input documents for the did:peer:4 method.
 */
import { Relationship, RELATIONSHIPS } from './types';

export interface KeySpec {
    multikey: string;
    relationships?: Relationship[];
    ident?: string;
    type?: 'Multikey';
    context?: 'https://w3id.org/security/multikey/v1';
}

export interface Multikey {
    type: 'Multikey';
    context: 'https://w3id.org/security/multikey/v1';
    multikey: string;
    relationships?: Relationship[];
    ident?: string;
}

export interface JsonWebKey2020 {
    type: 'JsonWebKey2020';
    context: 'https://w3id.org/security/suites/jws-2020/v1';
    jwk: Record<string, any>;
    relationships?: Relationship[];
    ident?: string;
}

export type KeyProtocol = Multikey | JsonWebKey2020 | KeySpec;

export function inputDocFromKeysAndServices(
    keys: KeyProtocol[],
    services?: Record<string, any>[]
): Record<string, any> {
    const inputDoc: Record<string, any> = {
        '@context': ['https://www.w3.org/ns/did/v1'],
    };

    keys.forEach((key, index) => {
        let prop: string;
        let material: any;

        if ('multikey' in key) {
            prop = 'publicKeyMultibase';
            material = key.multikey;
        } else if ('jwk' in key) {
            prop = 'publicKeyJwk';
            material = key.jwk;
        } else {
            throw new TypeError(`Unknown key type: ${JSON.stringify(key)}`);
        }

        const ident = key.ident || `#key-${index}`;
        const vm: Record<string, any> = {
            id: ident,
            type: key.type,
            [prop]: material,
        };

        if (!inputDoc.verificationMethod) {
            inputDoc.verificationMethod = [];
        }
        inputDoc.verificationMethod.push(vm);

        if (!inputDoc['@context'].includes(key.context)) {
            inputDoc['@context'].push(key.context);
        }

        (key.relationships || []).forEach((relationship) => {
            if (!RELATIONSHIPS.includes(relationship)) {
                throw new Error(`Invalid relationship: ${relationship}`);
            }
            if (!inputDoc[relationship]) {
                inputDoc[relationship] = [];
            }
            inputDoc[relationship].push(ident);
        });
    });

    if (services) {
        inputDoc.service = services;
    }

    return inputDoc;
}