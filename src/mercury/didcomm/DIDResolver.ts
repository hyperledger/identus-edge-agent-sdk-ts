import type {
  DIDResolver,
  Service,
  VerificationMethod,
  DIDDoc,
} from "didcomm-wasm";

import * as Domain from "../../domain";
import { PeerDIDService } from "../../peer-did/PeerDID";

export class DIDCommDIDResolver implements DIDResolver {
  constructor(private readonly castor: Domain.Castor) { }

  async resolve(did: string): Promise<DIDDoc | null> {
    const doc = await this.castor.resolveDID(did);

    const authentications: string[] = [];
    const keyAgreements: string[] = [];
    const services: Service[] = [];
    const verificationMethods: VerificationMethod[] = [];

    const didDocumentAuthentication = doc.coreProperties.find((prop) => prop instanceof Domain.Authentication) as Domain.Authentication | undefined
    const didDocumentKeyAgreement = doc.coreProperties.find((prop) => prop instanceof Domain.KeyAgreement) as Domain.KeyAgreement | undefined;

    didDocumentAuthentication?.urls.forEach((u) => {
      authentications.push(did + u)
    })

    didDocumentKeyAgreement?.urls.forEach((u) => {
      keyAgreements.push(did + u)
    })

    doc.coreProperties.forEach((coreProperty) => {
      if ("verificationMethods" in coreProperty) {
        coreProperty.verificationMethods.forEach((method) => {
          const publicKeyBase64 = method.publicKeyJwk?.x as any;
          const publicKeyKid = (method.publicKeyJwk as any).kid;
          if (!verificationMethods.find((v) => v.id === method.id)) {
            verificationMethods.push({
              controller: method.controller,
              id: did + method.id,
              type: "JsonWebKey2020",
              publicKeyJwk: {
                crv: method.publicKeyJwk?.crv,
                kid: publicKeyKid,
                kty: "OKP",
                x: publicKeyBase64,
              },
            });
          }
        });
      }
      if (
        coreProperty instanceof Domain.Service &&
        coreProperty.type.includes(PeerDIDService.DIDCommMessagingKey)
      ) {
        services.push({
          id: coreProperty.id,
          type: PeerDIDService.DIDCommMessagingKey,
          serviceEndpoint: {
            uri: coreProperty.serviceEndpoint.uri,
            accept: coreProperty.serviceEndpoint.accept,
            routing_keys: coreProperty.serviceEndpoint.routingKeys,
          },
        });
      }
    });

    const dcdoc: DIDDoc = {
      id: doc.id.toString(),
      authentication: authentications,
      keyAgreement: keyAgreements,
      service: services,
      verificationMethod: verificationMethods,
    };

    return dcdoc;
  }
}
