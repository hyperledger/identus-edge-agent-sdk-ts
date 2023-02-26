import {
  DID,
  DIDDocument,
  DIDDocumentCoreProperty,
  DIDResolver,
} from "domain/models";
import {
  IDIDDocumentServiceDescriptor,
  IDIDDocumentVerificationMethod,
} from "@aviarytech/did-peer/interfaces";
import * as PeerDID from "@aviarytech/did-peer";

export class PeerDIDResolver implements DIDResolver {
  static method: String = "peer";

  private static parsePeerDIDVerificationMethod(
    verificationMethod: IDIDDocumentVerificationMethod | string
  ) {
    if (typeof verificationMethod === "string") {
      return JSON.parse(verificationMethod);
    }
    return {
      id: verificationMethod.id,
      type: verificationMethod.type,
      controller: verificationMethod.controller,
      publicKeyJWT: verificationMethod.publicKeyJwk,
      punlicKeyMultibase: verificationMethod.publicKeyMultibase,
    };
  }
  private static parsePeerDIDService(
    service: IDIDDocumentServiceDescriptor | string
  ) {
    if (typeof service === "string") {
      return JSON.parse(service);
    }
    if (typeof service.serviceEndpoint === "string") {
      return JSON.parse(service.serviceEndpoint);
    }
    if (Array.isArray(service.serviceEndpoint)) {
    }
    return {
      id: service.id,
      type: service.type,
      serviceEndpoint: Array.isArray(service.serviceEndpoint)
        ? {
            uri: service.serviceEndpoint[0]!.uri,
            accept: service.serviceEndpoint[0]!.accept,
            routingKeys: service.serviceEndpoint[0]!.routingKeys,
          }
        : {
            uri: service.serviceEndpoint.uri,
            accept: service.serviceEndpoint.accept,
            routingKeys: service.serviceEndpoint.routingKeys,
          },
    };
  }
  static async resolve(didString: string): Promise<DIDDocument> {
    const didDocument = await PeerDID.resolve(didString);

    const coreProperties: DIDDocumentCoreProperty[] = [];
    if (didDocument.service) {
      coreProperties.push({
        values: didDocument.service.map(this.parsePeerDIDService),
      });
    }
    if (didDocument.verificationMethod) {
      coreProperties.push({
        values: didDocument.verificationMethod.map(
          this.parsePeerDIDVerificationMethod
        ),
      });
    }
    if (didDocument.authentication) {
      coreProperties.push({
        values: didDocument.authentication.map(
          this.parsePeerDIDVerificationMethod
        ),
      });
    }

    if (didDocument.assertionMethod) {
      coreProperties.push({
        values: didDocument.assertionMethod.map(
          this.parsePeerDIDVerificationMethod
        ),
      });
    }

    if (didDocument.keyAgreement) {
      coreProperties.push({
        values: didDocument.keyAgreement.map(
          this.parsePeerDIDVerificationMethod
        ),
      });
    }

    if (didDocument.capabilityInvocation) {
      coreProperties.push({
        values: didDocument.capabilityInvocation.map(
          this.parsePeerDIDVerificationMethod
        ),
      });
    }

    if (didDocument.capabilityDelegation) {
      coreProperties.push({
        values: didDocument.capabilityDelegation.map(
          this.parsePeerDIDVerificationMethod
        ),
      });
    }

    return new DIDDocument(DID.fromString(didDocument.id), coreProperties);
  }
}
