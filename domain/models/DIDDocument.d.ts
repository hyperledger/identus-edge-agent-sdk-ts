import { DID } from './DID';
import { DIDUrl } from './DIDUrl';
import { Curve } from './KeyCurve';
export declare class ServiceEndpoint {
    uri: String;
    accept: Array<string>;
    routingKeys: Array<string>;
    constructor(uri: String, accept?: Array<string>, routingKeys?: Array<string>);
}
export declare class VerificationMethod {
    id: DIDUrl;
    controller: DID;
    type: string;
    publicKeyJwk?: Map<string, string> | undefined;
    publicKeyMultibase?: string | undefined;
    constructor(id: DIDUrl, controller: DID, type: string, publicKeyJwk?: Map<string, string> | undefined, publicKeyMultibase?: string | undefined);
    static getCurveByType(type: string): Curve;
}
export declare class Service {
    id: string;
    type: Array<string>;
    serviceEndpoint: ServiceEndpoint;
    constructor(id: string, type: Array<string>, serviceEndpoint: ServiceEndpoint);
}
export declare class AlsoKnownAs {
    values: Array<string>;
    constructor(values: Array<string>);
}
export declare class Controller {
    values: Array<DID>;
    constructor(values: Array<DID>);
}
export declare class VerificationMethods {
    values: Array<VerificationMethod>;
    constructor(values: Array<VerificationMethod>);
}
export declare class Services {
    values: Array<Service>;
    constructor(values: Array<Service>);
}
export declare class Authentication {
    urls: Array<string>;
    verificationMethods: Array<VerificationMethod>;
    constructor(urls: Array<string>, verificationMethods: Array<VerificationMethod>);
}
export declare class AssertionMethod {
    urls: Array<string>;
    verificationMethods: Array<VerificationMethod>;
    constructor(urls: Array<string>, verificationMethods: Array<VerificationMethod>);
}
export declare class KeyAgreement {
    urls: Array<string>;
    verificationMethods: Array<VerificationMethod>;
    constructor(urls: Array<string>, verificationMethods: Array<VerificationMethod>);
}
export declare class CapabilityInvocation {
    urls: Array<string>;
    verificationMethods: Array<VerificationMethod>;
    constructor(urls: Array<string>, verificationMethods: Array<VerificationMethod>);
}
export declare class CapabilityDelegation {
    urls: Array<string>;
    verificationMethods: Array<VerificationMethod>;
    constructor(urls: Array<string>, verificationMethods: Array<VerificationMethod>);
}
export type DIDDocumentCoreProperty = Service | AlsoKnownAs | Controller | VerificationMethods | Services | Authentication | AssertionMethod | KeyAgreement | CapabilityInvocation | CapabilityDelegation;
export declare class DIDDocument {
    id: DID;
    coreProperties: Array<DIDDocumentCoreProperty>;
    constructor(id: DID, coreProperties: Array<DIDDocumentCoreProperty>);
}
