import * as DIDComm from "didcomm";
import * as Domain from "../../domain";
import Castor from "../../castor/Castor";
import { PeerDIDService } from "../../peer-did/PeerDID";

export class DIDCommDIDResolver implements DIDComm.DIDResolver {
  constructor(private readonly castor: Castor) {}

  async resolve(did: string): Promise<DIDComm.DIDDoc | null> {
    const doc = await this.castor.resolveDID(did);

    const authentications: string[] = [];
    const key_agreements: string[] = [];
    const services: DIDComm.Service[] = [];
    const verification_methods: DIDComm.VerificationMethod[] = [];

    doc.coreProperties.forEach((coreProperty) => {
      if ("verificationMethods" in coreProperty) {
        coreProperty.verificationMethods.forEach((method) => {
          const curve = Domain.VerificationMethod.getCurveByType(method.type);

          switch (curve) {
            case Domain.Curve.ED25519:
              authentications.push(method.id);
              break;

            case Domain.Curve.X25519:
              key_agreements.push(method.id);
              break;

            default:
              verification_methods.push({
                controller: method.controller,
                id: method.id,
                type: "JsonWebKey2020",
                verification_material: {
                  format: "JWK",
                  value: method.publicKeyJwk,
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
          kind: {
            DIDCommMessaging: {
              service_endpoint: coreProperty.serviceEndpoint.uri,
              accept: coreProperty.serviceEndpoint.accept,
              routing_keys: coreProperty.serviceEndpoint.routingKeys,
            },
          },
        });
      }
    });

    const didString = doc.id.toString();
    const dcdoc: DIDComm.DIDDoc = {
      did: didString,
      authentications,
      key_agreements,
      services,
      verification_methods,
    };

    return dcdoc;
  }
}
