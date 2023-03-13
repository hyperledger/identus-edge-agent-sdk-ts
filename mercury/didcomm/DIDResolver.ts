import { DIDResolver, Service, VerificationMethod, DIDDoc } from "didcomm";

import * as Domain from "../../domain";
import Castor from "../../castor/Castor";
import { PeerDIDService } from "../../peer-did/PeerDID";


export class DIDCommDIDResolver implements DIDResolver {
  constructor(private readonly castor: Castor) {}

  async resolve(did: string): Promise<DIDDoc | null> {
    const doc = await this.castor.resolveDID(did);

    const authentications: string[] = [];
    const keyAgreements: string[] = [];
    const services: Service[] = [];
    const verificationMethods: VerificationMethod[] = [];

    doc.coreProperties.forEach(coreProperty => {
      if ("verificationMethods" in coreProperty) {
        coreProperty.verificationMethods.forEach((method) => {
          const curve = Domain.VerificationMethod.getCurveByType(method.type);

          switch (curve) {
            case Domain.Curve.ED25519:
              authentications.push(method.id);
              break;

            case Domain.Curve.X25519:
              keyAgreements.push(method.id);
              break;
          }

          verificationMethods.push({
            controller: method.controller,
            id: method.id,
            type: "JsonWebKey2020",
            publicKeyJwk: method.publicKeyJwk,
          });
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
