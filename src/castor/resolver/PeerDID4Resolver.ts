import { DIDPeer4 } from "../..";
import { DIDDocument, DIDResolver, VerificationMethod } from "../../domain";


import {
    DID,
    Service as DIDDocumentService,
    VerificationMethods,
    CapabilityDelegation as DIDDocumentCapabilityDelegation,
    CapabilityInvocation as DIDDocumentCapabilityInvocation,
    AssertionMethod as DIDDocumentAsertion,
    Authentication as DIDDocumentAuthentication,
    KeyAgreement as DIDDocumentKeyAgreement,
    Services as DIDDocumentServices,
} from "../../domain/models";



export class PeerDID4Resolver implements DIDResolver {
    method = "peer";

    async resolve(didString: string): Promise<DIDDocument> {
        const resolvedDoc = await DIDPeer4.resolve(didString);
        const authenticationMethods: VerificationMethod[] = [];
        const keyAgreementMethods: VerificationMethod[] = [];
        const keyAssertionMethods: VerificationMethod[] = [];
        const capabilityDelegationMethods: VerificationMethod[] = [];
        const capabilityInvocationMethods: VerificationMethod[] = [];
        const services: DIDDocumentService[] = [];
        resolvedDoc.authentication?.forEach((id: string) => {
            const verificationMethod = resolvedDoc.verificationMethod.find((v: any) => "#" + v.id === id || v.id === id);
            authenticationMethods.push({
                id: id,
                type: verificationMethod.type,
                controller: verificationMethod.controller,
                publicKeyJwk: verificationMethod.publicKeyJwk,
                publicKeyMultibase: verificationMethod.publicKeyMultibase
            })
        })

        resolvedDoc.keyAgreement?.forEach((id: string) => {
            const verificationMethod = resolvedDoc.verificationMethod.find((v: any) => "#" + v.id === id || v.id === id);
            keyAgreementMethods.push({
                id: id,
                type: verificationMethod.type,
                controller: verificationMethod.controller,
                publicKeyJwk: verificationMethod.publicKeyJwk,
                publicKeyMultibase: verificationMethod.publicKeyMultibase
            })
        })

        resolvedDoc.assertionMethod?.forEach((id: string) => {
            const verificationMethod = resolvedDoc.verificationMethod.find((v: any) => "#" + v.id === id || v.id === id);
            keyAssertionMethods.push({
                id: id,
                type: verificationMethod.type,
                controller: verificationMethod.controller,
                publicKeyJwk: verificationMethod.publicKeyJwk,
                publicKeyMultibase: verificationMethod.publicKeyMultibase
            })
        })

        resolvedDoc.capabilityDelegation?.forEach((id: string) => {
            const verificationMethod = resolvedDoc.verificationMethod.find((v: any) => "#" + v.id === id || v.id === id);
            capabilityDelegationMethods.push({
                id: id,
                type: verificationMethod.type,
                controller: verificationMethod.controller,
                publicKeyJwk: verificationMethod.publicKeyJwk,
                publicKeyMultibase: verificationMethod.publicKeyMultibase
            })
        })

        resolvedDoc.capabilityInvocation?.forEach((id: string) => {
            const verificationMethod = resolvedDoc.verificationMethod.find((v: any) => "#" + v.id === id || v.id === id);
            capabilityInvocationMethods.push({
                id: id,
                type: verificationMethod.type,
                controller: verificationMethod.controller,
                publicKeyJwk: verificationMethod.publicKeyJwk,
                publicKeyMultibase: verificationMethod.publicKeyMultibase
            })
        })

        resolvedDoc.service.map((s: any) => {
            services.push(new DIDDocumentService(
                s.id,
                s.type,
                s.serviceEndpoint
            ))
        })

        const did = DID.fromString(didString);
        const didDocument = new DIDDocument(did, [
            new VerificationMethods([
                ...authenticationMethods,
                ...keyAgreementMethods,
                ...keyAssertionMethods,
                ...capabilityInvocationMethods,
                ...capabilityInvocationMethods
            ]),
            new DIDDocumentAuthentication(
                authenticationMethods.map(({ id }) => id),
                authenticationMethods
            ),
            new DIDDocumentKeyAgreement(
                keyAgreementMethods.map(({ id }) => id),
                keyAgreementMethods
            ),
            new DIDDocumentAsertion(
                keyAssertionMethods.map(({ id }) => id),
                keyAssertionMethods
            ),
            new DIDDocumentCapabilityDelegation(
                capabilityDelegationMethods.map(({ id }) => id),
                capabilityDelegationMethods
            ),
            new DIDDocumentCapabilityInvocation(
                capabilityInvocationMethods.map(({ id }) => id),
                capabilityInvocationMethods
            ),
            new DIDDocumentServices(services)
        ])
        return didDocument;
    }
}