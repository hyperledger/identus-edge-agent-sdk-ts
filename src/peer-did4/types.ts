export type Relationship =
    | 'authentication'
    | 'assertionMethod'
    | 'keyAgreement'
    | 'capabilityDelegation'
    | 'capabilityInvocation';

export const RELATIONSHIPS: Relationship[] = [
    'authentication',
    'assertionMethod',
    'keyAgreement',
    'capabilityDelegation',
    'capabilityInvocation',
];

export interface DidPeerKey {
    id?: string;
    type: string;
    controller?: string;
    relationships?: Relationship[];
}

export interface VerificationMethod extends DidPeerKey {
    [prop: string]: any;
}